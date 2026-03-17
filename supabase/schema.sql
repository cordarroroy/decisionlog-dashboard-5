-- ─────────────────────────────────────────────────────────────────────────────
-- DecisionLog — Supabase schema
-- Run in the Supabase SQL Editor (Dashboard → SQL Editor → New query)
-- ─────────────────────────────────────────────────────────────────────────────

-- Enable UUID extension (already enabled in Supabase by default)
create extension if not exists "pgcrypto";

-- ─── decisions ───────────────────────────────────────────────────────────────

create table if not exists decisions (
  id          uuid        primary key default gen_random_uuid(),
  title       text        not null check (char_length(title) between 1 and 200),
  context     text        check (char_length(context) <= 1000),
  category    text        not null check (
                            category in (
                              'product', 'engineering', 'design',
                              'marketing', 'operations', 'finance', 'hr', 'other'
                            )
                          ),
  created_at  timestamptz not null default now(),
  logged_by   uuid        references auth.users(id) on delete set null
);

-- Indexes for common query patterns
create index if not exists decisions_logged_by_idx  on decisions (logged_by);
create index if not exists decisions_created_at_idx on decisions (created_at desc);
create index if not exists decisions_category_idx   on decisions (category);

-- Full-text search index on title
create index if not exists decisions_title_search_idx
  on decisions using gin (to_tsvector('english', title));

-- ─── Row Level Security ───────────────────────────────────────────────────────

alter table decisions enable row level security;

-- Users can only see their own decisions
create policy "Users see own decisions"
  on decisions for select
  using (auth.uid() = logged_by);

-- Users can only insert their own decisions
create policy "Users insert own decisions"
  on decisions for insert
  with check (auth.uid() = logged_by);

-- Users can update their own decisions
create policy "Users update own decisions"
  on decisions for update
  using (auth.uid() = logged_by)
  with check (auth.uid() = logged_by);

-- Users can delete their own decisions
create policy "Users delete own decisions"
  on decisions for delete
  using (auth.uid() = logged_by);

-- ─── Helper function: count this month's decisions ───────────────────────────

create or replace function get_monthly_decision_count(user_id uuid)
returns integer
language sql
security definer
set search_path = public
as $$
  select count(*)::integer
  from decisions
  where logged_by = user_id
    and created_at >= date_trunc('month', now());
$$;
