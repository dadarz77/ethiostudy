-- ============================================================
-- Client error log
--
-- Students on flaky connections crash silently today: the boundary logs to
-- console and the report dies with the tab. This table is the destination for
-- src/lib/observability.ts.
--
-- Privacy rules baked into the schema:
--   * A student may INSERT only rows owned by themselves, and READ only their
--     own rows. Rows are never readable by other students.
--   * Admins (public.is_admin(), SECURITY DEFINER, see 2026-10-20-admin.sql)
--     read all rows for triage.
--   * `anon` is granted nothing. Anonymous sessions queue client-side and are
--     attributed after sign-in, so this table cannot be spam-filled by
--     unauthenticated callers.
--
-- Client context is allowlist-scrubbed before insert (observability.scrubCtx);
-- lesson notes, answers, and prose never reach this table.
-- ============================================================

create table if not exists public.error_log (
  id          bigserial primary key,
  user_id     uuid references auth.users (id) on delete set null,
  event       text        not null,
  message     text        not null,
  stack       text,
  route       text,
  source      text        not null,
  build_id    text,
  ctx         jsonb       not null default '{}'::jsonb,
  created_at  timestamptz not null default now()
);

alter table public.error_log enable row level security;

-- Triage queries are "what broke recently" and "how often does X happen".
create index if not exists error_log_created_at_idx
  on public.error_log (created_at desc);
create index if not exists error_log_source_event_idx
  on public.error_log (source, event, created_at desc);

-- Supabase grants anon/authenticated by default; anon must not reach this table.
revoke all on table public.error_log from anon;
revoke all on table public.error_log from authenticated;
grant insert, select on table public.error_log to authenticated;
grant usage, select on sequence public.error_log_id_seq to authenticated;

drop policy if exists "error_log_insert_own" on public.error_log;
create policy "error_log_insert_own"
  on public.error_log
  for insert
  to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "error_log_select_own_or_admin" on public.error_log;
create policy "error_log_select_own_or_admin"
  on public.error_log
  for select
  to authenticated
  using (auth.uid() = user_id or public.is_admin());

-- Retention: admins can prune old rows without a service-role script.
drop policy if exists "error_log_delete_admin" on public.error_log;
create policy "error_log_delete_admin"
  on public.error_log
  for delete
  to authenticated
  using (public.is_admin());

comment on table public.error_log is
  'Client error reports from src/lib/observability.ts. Insert/select own rows; admins read all. No update policy: reports are immutable.';
