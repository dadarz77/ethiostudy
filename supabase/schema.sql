-- ============================================================
-- EthioStudy — Supabase Database Schema & Security Policies
-- ============================================================

-- 1. Profiles table (Student public identity)
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text not null,
  grade text not null check (grade in ('9', '10', '11', '12')),
  school_name text,
  avatar_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable Row Level Security (RLS)
alter table public.profiles enable row level security;

-- Everyone can read student profiles (needed for leaderboards)
create policy "Public profiles are viewable by everyone"
  on public.profiles for select
  using (true);

-- Students can insert/update their own profile only
create policy "Users can insert their own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);


-- 2. Student Progress table (Cloud sync of study state)
create table if not exists public.student_progress (
  user_id uuid references auth.users on delete cascade primary key,
  progress jsonb default '{}'::jsonb,
  bookmarks jsonb default '[]'::jsonb,
  notes jsonb default '{}'::jsonb,
  streak jsonb default '{"current":0,"best":0,"lastDate":null}'::jsonb,
  total_study_sec bigint default 0,
  weak_map jsonb default '{}'::jsonb,
  updated_at timestamptz default now()
);

-- Enable RLS
alter table public.student_progress enable row level security;

-- Students can only access their own private study progress
create policy "Users can view own study progress"
  on public.student_progress for select
  using (auth.uid() = user_id);

create policy "Users can insert own study progress"
  on public.student_progress for insert
  with check (auth.uid() = user_id);

create policy "Users can update own study progress"
  on public.student_progress for update
  using (auth.uid() = user_id);


-- 3. Leaderboard View (Clean, secure aggregation for national ranking)
create or replace view public.leaderboard_view as
select
  p.id as "userId",
  p.full_name as name,
  p.grade,
  p.school_name as "schoolName",
  coalesce((sp.streak->>'current')::int, 0) as streak,
  coalesce(sp.total_study_sec, 0) as "totalStudySec",
  -- Count mastered topics from progress json
  coalesce((
    select count(*)
    from jsonb_each(sp.progress)
    where (value->>'mastery')::int >= 70
  ), 0)::int as "masteredCount"
from public.profiles p
left join public.student_progress sp on p.id = sp.user_id
order by streak desc, "masteredCount" desc;

-- Grant select permission on the view
grant select on public.leaderboard_view to anon, authenticated;
