'use client'

import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline'
import { DECISION_CATEGORIES, CATEGORY_LABELS, type DecisionFilters, type DecisionCategory } from '@/lib/types'

interface SearchToolbarProps {
  filters:    DecisionFilters
  setFilters: (partial: Partial<DecisionFilters>) => void
  total:      number
}

/**
 * Search input (debounced in the hook) + category dropdown.
 * The search debouncing lives in useDecisions; this component
 * is purely presentational and calls setFilters immediately.
 */
export default function SearchToolbar({ filters, setFilters, total }: SearchToolbarProps) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3" role="search" aria-label="Filter decisions">
      {/* Search */}
      <div className="relative flex-1 max-w-sm">
        <MagnifyingGlassIcon
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-400 pointer-events-none"
          aria-hidden="true"
        />
        <input
          type="search"
          placeholder="Search decisions…"
          value={filters.search}
          onChange={(e) => setFilters({ search: e.target.value })}
          className="
            w-full pl-9 pr-3.5 py-2.5 rounded-lg
            border border-surface-border bg-surface-bg
            text-sm text-brand-800 placeholder:text-brand-300
            focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
            transition-colors duration-150
          "
          aria-label="Search decisions by title"
        />
      </div>

      {/* Category filter */}
      <div className="relative">
        <FunnelIcon
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-400 pointer-events-none"
          aria-hidden="true"
        />
        <select
          value={filters.category}
          onChange={(e) => setFilters({ category: e.target.value as DecisionCategory | 'all' })}
          className="
            pl-9 pr-8 py-2.5 rounded-lg appearance-none
            border border-surface-border bg-surface-bg
            text-sm text-brand-700
            focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
            transition-colors duration-150 cursor-pointer
          "
          aria-label="Filter by category"
        >
          <option value="all">All categories</option>
          {DECISION_CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>{CATEGORY_LABELS[cat]}</option>
          ))}
        </select>
      </div>

      {/* Result count */}
      {(filters.search || filters.category !== 'all') && (
        <p className="text-sm text-brand-400 shrink-0 animate-fade-in" aria-live="polite">
          {total} result{total !== 1 ? 's' : ''}
        </p>
      )}
    </div>
  )
}
