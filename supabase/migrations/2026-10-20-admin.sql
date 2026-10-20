-- ============================================================
-- EthioStudy — Admin panel schema (2026-10-20)
-- Mirrors docs/superpowers/specs/2026-10-20-ui-ux-auth-admin-design.md section 5
--
-- ADMIN GRANTING NOTE:
--   Admin is granted by SQL only, never from the client:
--     update profiles set is_admin = true where id = '<uuid>';
--   (or with email lookup):
--     update public.profiles p
--     set is_admin = true
--     from auth.users u
--     where u.id = p.id and u.email = 'admin@ethiostudy.com';
-- ============================================================

-- 1. New columns on profiles ---------------------------------

alter table public.profiles
  add column if not exists is_admin boolean not null default false,
  add column if not exists is_banned boolean not null default false,
  add column if not exists last_seen timestamptz;

-- 2. Column-level write hygiene ------------------------------
-- Supabase grants ALL table privileges by default, so without this a signed-in
-- user could flip their own is_admin/is_banned through the existing
-- "Users can update their own profile" policy (policies are row-scoped, not
-- column-scoped). Normal users keep full write access to their self-service
-- columns (including their own last_seen); the sensitive columns are NOT
-- writable directly and are changed only through the (SECURITY DEFINER)
-- admin helper functions below.

revoke update on table public.profiles from authenticated;
revoke update on table public.profiles from anon;

grant update (full_name, grade, school_name, avatar_url, created_at, updated_at, last_seen)
  on table public.profiles to authenticated;

-- 3. Admin helper function -----------------------------------

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select coalesce(
    (select p.is_admin from public.profiles p where p.id = auth.uid()),
    false
  );
$$;

-- Ban/unban goes through a SECURITY DEFINER function: authenticated users have
-- no column privilege on is_banned, so direct UPDATEs are impossible no matter
-- which RLS policy matches. (SECURITY DEFINER runs as the table owner, which
-- bypasses RLS — the in-function is_admin() check is the real gate.)
create or replace function public.admin_set_user_banned(target uuid, banned boolean)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.is_admin() then
    raise exception 'admin role required';
  end if;
  update public.profiles
  set is_banned = banned
  where id = target;
end;
$$;

revoke execute on function public.admin_set_user_banned(uuid, boolean) from anon;
grant execute  on function public.admin_set_user_banned(uuid, boolean) to authenticated;

-- 4. Admin RLS policies ---------------------------------------
-- Existing self-policies (own profile insert/update, own study progress,
-- authenticated profile reads for leaderboards) are all kept untouched.

-- profiles: admins can read/see every profile, and generally update rows
-- (column privileges still restrict what authenticated writers can touch).
create policy "Admins can view all profiles"
  on public.profiles for select
  to authenticated
  using (public.is_admin());

create policy "Admins can update user profiles (ban / last_seen)"
  on public.profiles for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- student_progress: admins read every student's rows and can delete rows
-- (progress reset behind the confirm modal).
create policy "Admins can view all study progress"
  on public.student_progress for select
  to authenticated
  using (public.is_admin());

create policy "Admins can delete study progress (reset)"
  on public.student_progress for delete
  to authenticated
  using (public.is_admin());

-- 5. Quiz-activity helper view (Engagement tab) ---------------
-- student_progress stores quiz history inside the progress jsonb
-- ({topicId: {attempts, quizScores, ...}}) and one updated_at per row, so
-- "attempts on a day" is approximated by the day the row was last pushed.
-- good enough for a 14-day engagement sparkline, not a billing report.
create or replace view public.quiz_activity_daily
with (security_invoker = true) as
select
  sp.updated_at::date as activity_date,
  count(distinct sp.user_id) as active_users,
  coalesce(sum(
    (
      select coalesce(sum((value ->> 'attempts')::int), 0)
      from jsonb_each(sp.progress)
      where jsonb_typeof(value) = 'object'
    )
  ), 0)::int as quiz_attempts,
  coalesce(round(
    avg(
      (
        select avg((scores #>> '{}')::numeric)
        from jsonb_each(sp.progress) s,
             jsonb_array_elements(s.value -> 'quizScores') scores
        where jsonb_typeof(s.value) = 'object'
      )
    )
  ), 0)::int as avg_score
from public.student_progress sp
where sp.updated_at >= now() - interval '14 days'
group by activity_date
order by activity_date;

-- Aggregate-only view (no PII): authenticated users may query it (it degrades
-- to their own rows via RLS security_invoker); anon gets nothing.
revoke select on public.quiz_activity_daily from anon;
grant select on public.quiz_activity_daily to authenticated;
