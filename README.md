# DecisionLog

> Log and track team decisions so nothing gets lost in Slack threads.

Built with **Next.js 14 (App Router)** · **TypeScript** · **Tailwind CSS** · **Supabase** · **Vercel**

---

## Quick Start

### 1. Clone & install

```bash
git clone https://github.com/yourorg/decisionlog.git
cd decisionlog
npm install
```

### 2. Create a Supabase project

1. Go to [supabase.com](https://supabase.com) → **New project**
2. Note your **Project URL** and **anon public key** (Settings → API)

### 3. Run the schema

In Supabase Dashboard → **SQL Editor** → New query, paste and run:

```sql
-- contents of supabase/schema.sql
```

Or run the file directly:

```bash
# If you have the Supabase CLI:
supabase db push --db-url "postgresql://postgres:PASSWORD@db.YOURREF.supabase.co:5432/postgres" < supabase/schema.sql
```

### 4. Configure environment

```bash
cp .env.local.example .env.local
```

Fill in your values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://yourref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 5. Run locally

```bash
npm run dev
# → http://localhost:3000
```

---

## Deploy to Vercel

```bash
npx vercel
```

Set the same env vars in your Vercel project settings (Settings → Environment Variables).

In Supabase → Authentication → URL Configuration, add:
- **Site URL**: `https://your-vercel-domain.vercel.app`
- **Redirect URLs**: `https://your-vercel-domain.vercel.app/**`

---

## Architecture

```
app/
  (auth)/          # Public auth routes
    login/
    signup/
  (dashboard)/     # Protected routes (middleware-guarded)
    dashboard/
      page.tsx          # Main view: recent cards + table
      RecentDecisions.tsx
      AllDecisions.tsx
      decisions/page.tsx
      settings/page.tsx
      loading.tsx

components/
  DecisionCard.tsx      # Animated hover card
  DecisionTable.tsx     # Sortable, paginated table
  CategoryBadge.tsx     # Per-category colour badges
  EmptyState.tsx        # Empty + CTA
  ErrorBoundary.tsx     # Layout-level error capture
  LogDecisionModal.tsx  # Add decision modal
  UsageBanner.tsx       # Free tier warning / block
  SearchToolbar.tsx     # Debounced search + filter
  Sidebar.tsx           # Navigation
  Topbar.tsx            # Header with CTA

hooks/
  useDecisions.ts       # Data fetching with debounced search, filters, pagination
  useUsage.ts           # Monthly usage + limit logic

lib/
  env.ts                # Validated env vars (throws at startup if missing)
  types.ts              # Shared TypeScript types — no `any`
  supabase/
    client.ts           # Browser client
    server.ts           # Server client (RSC / Server Actions)

middleware.ts           # Route protection + auth redirects
supabase/schema.sql     # Full schema with RLS policies
```

---

## Pricing

| | Free | Pro |
|---|---|---|
| Decisions/month | 15 | Unlimited |
| Price | $0 | $49/month |
| Warning banner | At 12 decisions | — |
| Entry blocked | At 15 decisions | Never |

---

## Database Schema

```sql
decisions (
  id          uuid     PK  default gen_random_uuid()
  title       text     NOT NULL
  context     text
  category    text     NOT NULL  -- enum via CHECK constraint
  created_at  timestamptz  default now()
  logged_by   uuid     REFERENCES auth.users(id)
)
```

**RLS**: Users can only SELECT / INSERT / UPDATE / DELETE their own rows (`auth.uid() = logged_by`).

---

## Categories

`product` · `engineering` · `design` · `marketing` · `operations` · `finance` · `hr` · `other`

---

## Tech Decisions

| Decision | Rationale |
|---|---|
| App Router | Nested layouts, Server Components for initial data, no client waterfalls |
| Supabase SSR client | Cookie-based sessions work across Server + Client Components |
| Debounce in hook | One place, tested independently, no prop-drilling |
| `React.memo` on rows | Prevent full-table re-render on sort changes |
| Error boundary at layout | Catches component crashes without full page reload |
| Validated env | Fails fast on misconfiguration rather than mysterious 401s at runtime |
