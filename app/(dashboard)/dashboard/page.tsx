'use client'

import { Suspense } from 'react'
import RecentDecisions from './RecentDecisions'
import AllDecisions    from './AllDecisions'
import CardSkeleton    from '@/components/skeletons/CardSkeleton'
import TableRowSkeleton from '@/components/skeletons/TableRowSkeleton'

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page heading */}
      <div>
        <h1 className="text-xl font-bold text-brand-800 tracking-tight">Dashboard</h1>
        <p className="text-sm text-brand-500 mt-0.5">
          Your team&apos;s decision trail — searchable, organised, never lost.
        </p>
      </div>

      {/* ── Recent decisions (3-card grid) ─────────────────────────────── */}
      <section aria-labelledby="recent-heading">
        <h2
          id="recent-heading"
          className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-4"
        >
          Recent Decisions
        </h2>
        <Suspense
          fallback={
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[0, 1, 2].map((i) => <CardSkeleton key={i} />)}
            </div>
          }
        >
          <RecentDecisions />
        </Suspense>
      </section>

      {/* ── Full decision table ─────────────────────────────────────────── */}
      <section aria-labelledby="all-heading">
        <h2
          id="all-heading"
          className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-4"
        >
          All Decisions
        </h2>
        <div className="bg-surface-card rounded-xl2 border border-surface-border shadow-card overflow-hidden">
          <Suspense
            fallback={
              <table className="w-full">
                <tbody>
                  {Array.from({ length: 6 }).map((_, i) => <TableRowSkeleton key={i} />)}
                </tbody>
              </table>
            }
          >
            <AllDecisions />
          </Suspense>
        </div>
      </section>
    </div>
  )
}
