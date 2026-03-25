'use client'

import React, { useState, useCallback } from 'react'
import {
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UserCircleIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline'
import CategoryBadge from './CategoryBadge'
import type { DecisionWithAuthor } from '@/lib/types'

type SortField     = 'title' | 'category' | 'created_at'
type SortDirection = 'asc' | 'desc'

const PAGE_SIZE = 10

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat('en-US', {
    month:  'short',
    day:    'numeric',
    year:   'numeric',
  }).format(new Date(iso))
}

interface SortConfig {
  field:     SortField
  direction: SortDirection
}

interface DecisionTableProps {
  decisions: DecisionWithAuthor[]
  onRowClick?: (decision: DecisionWithAuthor) => void
}

const DecisionRow = React.memo(function DecisionRow({
  decision,
  index,
  onRowClick,
}: {
  decision: DecisionWithAuthor
  index:    number
  onRowClick?: (decision: DecisionWithAuthor) => void
}) {
  return (
    <tr
      onClick={() => onRowClick?.(decision)}
      className="
        group border-b border-surface-border last:border-0
        hover:bg-surface-muted/60 transition-colors duration-150
        animate-fade-in cursor-pointer
      "
      style={{ animationDelay: `${index * 30}ms`, animationFillMode: 'both' }}
    >
      {/* Title */}
      <td className="px-4 py-3.5 max-w-xs">
        <span className="font-medium text-brand-800 line-clamp-1 group-hover:text-brand-900 transition-colors">
          {decision.title}
        </span>
        {decision.context && (
          <p className="text-xs text-brand-400 mt-0.5 line-clamp-1">{decision.context}</p>
        )}
      </td>

      {/* Category */}
      <td className="px-4 py-3.5 whitespace-nowrap">
        <CategoryBadge category={decision.category} size="sm" />
      </td>

      {/* Author */}
      <td className="px-4 py-3.5 whitespace-nowrap hidden sm:table-cell">
        <div className="flex items-center gap-1.5 text-sm text-brand-500">
          <UserCircleIcon className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span className="truncate max-w-[160px]">
            {decision.author_email ?? '—'}
          </span>
        </div>
      </td>

      {/* Date */}
      <td className="px-4 py-3.5 whitespace-nowrap hidden md:table-cell">
        <div className="flex items-center gap-1.5 text-sm text-brand-500">
          <CalendarDaysIcon className="w-4 h-4 shrink-0" aria-hidden="true" />
          <time dateTime={decision.created_at}>{formatDate(decision.created_at)}</time>
        </div>
      </td>
    </tr>
  )
})

export default function DecisionTable({
  decisions,
  onRowClick,
}: DecisionTableProps) {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    field: 'created_at',
    direction: 'desc',
  })
  const [page, setPage] = useState(1)

  // Sorting
  const sorted = [...decisions].sort((a, b) => {
    const aVal = a[sortConfig.field]
    const bVal = b[sortConfig.field]

    if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1
    if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1
    return 0
  })

  const totalPages = Math.ceil(sorted.length / PAGE_SIZE)
  const pageDecisions = sorted.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  )

  const toggleSort = useCallback((field: SortField) => {
    setSortConfig((prev) => ({
      field,
      direction:
        prev.field === field && prev.direction === 'asc' ? 'desc' : 'asc',
    }))
    setPage(1)
  }, [])

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-surface-muted border-b border-surface-border">
            <tr>
              <th className="px-4 py-3 text-left">
                <button
                  onClick={() => toggleSort('title')}
                  className="flex items-center gap-1 font-semibold text-brand-700 hover:text-brand-900 transition-colors"
                >
                  Title
                  {sortConfig.field === 'title' &&
                    (sortConfig.direction === 'asc' ? (
                      <ChevronUpIcon className="w-4 h-4" aria-hidden="true" />
                    ) : (
                      <ChevronDownIcon className="w-4 h-4" aria-hidden="true" />
                    ))}
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button
                  onClick={() => toggleSort('category')}
                  className="flex items-center gap-1 font-semibold text-brand-700 hover:text-brand-900 transition-colors"
                >
                  Category
                  {sortConfig.field === 'category' &&
                    (sortConfig.direction === 'asc' ? (
                      <ChevronUpIcon className="w-4 h-4" aria-hidden="true" />
                    ) : (
                      <ChevronDownIcon className="w-4 h-4" aria-hidden="true" />
                    ))}
                </button>
              </th>
              <th className="px-4 py-3 text-left hidden sm:table-cell font-semibold text-brand-700">
                Author
              </th>
              <th className="px-4 py-3 text-left">
                <button
                  onClick={() => toggleSort('created_at')}
                  className="flex items-center gap-1 font-semibold text-brand-700 hover:text-brand-900 transition-colors"
                >
                  Date
                  {sortConfig.field === 'created_at' &&
                    (sortConfig.direction === 'asc' ? (
                      <ChevronUpIcon className="w-4 h-4" aria-hidden="true" />
                    ) : (
                      <ChevronDownIcon className="w-4 h-4" aria-hidden="true" />
                    ))}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {pageDecisions.map((decision, i) => (
              <DecisionRow
                key={decision.id}
                decision={decision}
                index={i}
                onRowClick={onRowClick}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between pt-4 px-4">
          <p className="text-sm text-brand-500">
            Page {page} of {totalPages}
          </p>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage(1)}
              disabled={page === 1}
              aria-label="First page"
              className="
                p-1.5 rounded-lg text-brand-500
                hover:bg-surface-muted hover:text-brand-700
                disabled:opacity-30 disabled:cursor-not-allowed
                focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500
                transition-colors duration-150
              "
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((p) => Math.abs(p - page) <= 1 || p === 1 || p === totalPages)
              .map((p, i, arr) => {
                if (i > 0 && arr[i - 1] !== p - 1) {
                  return (
                    <span key={`ellipsis-${p}`} className="px-2 text-brand-400">
                      …
                    </span>
                  )
                }
                return (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={[
                      'w-8 h-8 rounded-lg font-medium transition-colors duration-150',
                      p === page
                        ? 'bg-emerald-500 text-white shadow-sm'
                        : 'text-brand-500 hover:bg-surface-muted hover:text-brand-700',
                    ].join(' ')}
                  >
                    {p}
                  </button>
                )
              })}

            <button
              onClick={() => setPage(totalPages)}
              disabled={page >= totalPages}
              aria-label="Last page"
              className="
                p-1.5 rounded-lg text-brand-500
                hover:bg-surface-muted hover:text-brand-700
                disabled:opacity-30 disabled:cursor-not-allowed
                focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500
                transition-colors duration-150
              "
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
