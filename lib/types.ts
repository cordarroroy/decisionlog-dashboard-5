/**
 * Shared TypeScript types for DecisionLog.
 * No `any` allowed — strict mode enforced via tsconfig.
 */

// ─── Decision ────────────────────────────────────────────────────────────────

export type DecisionCategory =
  | 'product'
  | 'engineering'
  | 'design'
  | 'marketing'
  | 'operations'
  | 'finance'
  | 'hr'
  | 'other'

export const DECISION_CATEGORIES: DecisionCategory[] = [
  'product',
  'engineering',
  'design',
  'marketing',
  'operations',
  'finance',
  'hr',
  'other',
]

export const CATEGORY_LABELS: Record<DecisionCategory, string> = {
  product:     'Product',
  engineering: 'Engineering',
  design:      'Design',
  marketing:   'Marketing',
  operations:  'Operations',
  finance:     'Finance',
  hr:          'HR',
  other:       'Other',
}

export interface Decision {
  id:         string
  title:      string
  context:    string | null
  category:   DecisionCategory
  created_at: string          // ISO 8601
  logged_by:  string | null   // UUID → auth.users.id
}

/** Row returned when we join with a profile/email for display. */
export interface DecisionWithAuthor extends Decision {
  author_email: string | null
}

// ─── Filters & Pagination ────────────────────────────────────────────────────

export interface DecisionFilters {
  search:   string
  category: DecisionCategory | 'all'
}

export interface PaginationState {
  page:     number
  pageSize: number
  total:    number
}

// ─── Usage ───────────────────────────────────────────────────────────────────

export const FREE_TIER_LIMIT   = 15
export const FREE_TIER_WARNING = 12 // show banner at 12

export interface UsageState {
  count:        number
  limit:        number
  isLoading:    boolean
  error:        string | null
  isPro:        boolean
  canLog:       boolean
  showWarning:  boolean
}

// ─── Auth ─────────────────────────────────────────────────────────────────────

export interface AuthFormState {
  email:    string
  password: string
  loading:  boolean
  error:    string | null
}

// ─── API responses ────────────────────────────────────────────────────────────

export interface ApiSuccess<T> {
  data:  T
  error: null
}

export interface ApiError {
  data:  null
  error: string
}

export type ApiResult<T> = ApiSuccess<T> | ApiError

// ─── Component props ─────────────────────────────────────────────────────────

export interface DecisionCardProps {
  decision: DecisionWithAuthor
  index:    number  // for staggered animation
}

export interface DecisionTableProps {
  decisions:  DecisionWithAuthor[]
  pagination: PaginationState
  onPageChange: (page: number) => void
  isLoading:  boolean
}

export interface CategoryBadgeProps {
  category: DecisionCategory
  size?:    'sm' | 'md'
}

export interface EmptyStateProps {
  title:       string
  description: string
  action?:     {
    label: string
    href:  string
  }
}
