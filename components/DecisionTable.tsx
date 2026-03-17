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
import type { DecisionTableProps, DecisionWithAuthor } from '@/lib/types'
import TableRowSkeleton from './skeletons/TableRowSkeleton'

type SortField     = 'title' | 'category' | 'created_at'
type SortDirection = 'asc' | 'desc'

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

/** Memoised table row to prevent unnecessary re-renders */
const DecisionRow = React.memo(function DecisionRow({
  decision,
  index,
}: {
  decision: DecisionWithAuthor
  index:    number
}) {
  return (
    <tr
      className="
        group border-b border-surface-border last:border-0
        hover:bg-surface-muted/60 transition-colors duration-150
        animate-fade-in
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

/**
 * Full decisions table with client-side sort + server-driven pagination.
 * Mobile: collapses to stacked card layout.
 */
export default function DecisionTable({
  decisions,
  pagination,
  onPageChange,
  isLoading,
}: DecisionTableProps) {
  const [sort, setSort] = useState<SortConfig>({ field: 'created_at', direction: 'desc' })

  const handleSort = useCallback((field: SortField) => {
    setSort((prev) =>
      prev.field === field
        ? { field, direction: prev.direction === 'asc' ? 'desc' : 'asc' }
        : { field, direction: 'asc' }
    )
  }, [])

  // Client-side sort of current page
  const sorted = [...decisions].sort((a, b) => {
    let cmp = 0
    if (sort.field === 'title')      cmp = a.title.localeCompare(b.title)
    if (sort.field === 'category')   cmp = a.category.localeCompare(b.category)
    if (sort.field === 'created_at') cmp = a.created_at.localeCompare(b.created_at)
    return sort.direction === 'asc' ? cmp : -cmp
  })

  const totalPages = Math.ceil(pagination.total / pagination.pageSize)

  function SortIcon({ field }: { field: SortField }) {
    if (sort.field !== field) {
      return <ChevronUpIcon className="w-3.5 h-3.5 text-brand-300 opacity-50" />
    }
    return sort.direction === 'asc'
      ? <ChevronUpIcon   className="w-3.5 h-3.5 text-brand-600" />
      : <ChevronDownIcon className="w-3.5 h-3.5 text-brand-600" />
  }

  function SortHeader({
    field,
    children,
    className = '',
  }: {
    field:     SortField
    children:  React.ReactNode
    className?: string
  }) {
    return (
      <th scope="col" className={`px-4 py-3 text-left ${className}`}>
        <button
          onClick={() => handleSort(field)}
          className="
            flex items-center gap-1 text-xs font-semibold uppercase tracking-wide
            text-brand-500 hover:text-brand-700 transition-colors duration-150
            focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded
          "
          aria-sort={sort.field === field ? (sort.direction === 'asc' ? 'ascending' : 'descending') : 'none'}
        >
          {children}
          <SortIcon field={field} />
        </button>
      </th>
    )
  }

  // ── Mobile stacked cards (sm and below) ──────────────────────────────────
  const MobileCards = (
    <div className="md:hidden space-y-3 px-1">
      {isLoading
        ? Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-surface-card rounded-xl border border-surface-border p-4 animate-skeleton">
              <div className="h-4 bg-surface-muted rounded w-3/4 mb-2" />
              <div className="h-3 bg-surface-muted rounded w-1/3" />
            </div>
          ))
        : sorted.map((decision, i) => (
            <div
              key={decision.id}
              className="bg-surface-card rounded-xl border border-surface-border p-4 animate-slide-up"
              style={{ animationDelay: `${i * 40}ms`, animationFillMode: 'both' }}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <p className="font-medium text-brand-800 text-sm leading-snug line-clamp-2">
                  {decision.title}
                </p>
                <CategoryBadge category={decision.category} size="sm" />
              </div>
              <div className="flex items-center justify-between mt-2 text-xs text-brand-400">
                <span className="flex items-center gap-1">
                  <UserCircleIcon className="w-3.5 h-3.5" />
                  {decision.author_email ?? '—'}
                </span>
                <time dateTime={decision.created_at}>{formatDate(decision.created_at)}</time>
              </div>
            </div>
          ))
      }
    </div>
  )

  // ── Desktop table ─────────────────────────────────────────────────────────
  const DesktopTable = (
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full text-sm" aria-label="Decisions table">
        <thead>
          <tr className="border-b border-surface-border bg-surface-muted/40">
            <SortHeader field="title">Title</SortHeader>
            <SortHeader field="category">Category</SortHeader>
            <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-brand-500 hidden sm:table-cell">
              Logged By
            </th>
            <SortHeader field="created_at" className="hidden md:table-cell">Date</SortHeader>
          </tr>
        </thead>
        <tbody>
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <TableRowSkeleton key={i} />)
            : sorted.map((decision, i) => (
                <DecisionRow key={decision.id} decision={decision} index={i} />
              ))
          }
        </tbody>
      </table>
    </div>
  )

  return (
    <div>
      {MobileCards}
      {DesktopTable}

      {/* Pagination */}
      {!isLoading && totalPages > 1 && (
        <div
          className="
            flex items-center justify-between px-4 py-3
            border-t border-surface-border
          "
          aria-label="Pagination"
        >
          <p className="text-sm text-brand-500">
            Showing{' '}
            <span className="font-medium text-brand-700">
              {(pagination.page - 1) * pagination.pageSize + 1}
            </span>
            {' '}–{' '}
            <span className="font-medium text-brand-700">
              {Math.min(pagination.page * pagination.pageSize, pagination.total)}
            </span>
            {' '}of{' '}
            <span className="font-medium text-brand-700">{pagination.total}</span>
          </p>

          <div className="flex items-center gap-1">
            <button
              onClick={() => onPageChange(pagination.page - 1)}
              disabled={pagination.page <= 1}
              aria-label="Previous page"
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

            {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
              const p = i + 1
              const isCurrent = p === pagination.page
              return (
                <button
                  key={p}
                  onClick={() => onPageChange(p)}
                  aria-label={`Page ${p}`}
                  aria-current={isCurrent ? 'page' : undefined}
                  className={[
                    'w-8 h-8 rounded-lg text-sm font-medium transition-all duration-150',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500',
                    isCurrent
                      ? 'bg-emerald-500 text-white shadow-sm'
                      : 'text-brand-500 hover:bg-surface-muted hover:text-brand-700',
                  ].join(' ')}
                >
                  {p}
                </button>
              )
            })}

            <button
              onClick={() => onPageChange(pagination.page + 1)}
              disabled={pagination.page >= totalPages}
              aria-label="Next page"
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
