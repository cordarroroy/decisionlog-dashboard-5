'use client'

import { useDecisions }   from '@/hooks/useDecisions'
import DecisionTable      from '@/components/DecisionTable'
import SearchToolbar      from '@/components/SearchToolbar'
import EmptyState         from '@/components/EmptyState'

export default function AllDecisions() {
  const {
    decisions,
    pagination,
    isLoading,
    error,
    filters,
    setFilters,
    setPage,
  } = useDecisions()

  return (
    <div>
      {/* Toolbar */}
      <div className="px-4 py-4 border-b border-surface-border">
        <SearchToolbar
          filters={filters}
          setFilters={setFilters}
          total={pagination.total}
        />
      </div>

      {/* Error */}
      {error && (
        <div
          role="alert"
          className="m-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 animate-fade-in"
        >
          {error}
        </div>
      )}

      {/* Empty — no results */}
      {!isLoading && !error && decisions.length === 0 && (
        <EmptyState
          title={
            filters.search || filters.category !== 'all'
              ? 'No matching decisions'
              : 'No decisions logged yet'
          }
          description={
            filters.search || filters.category !== 'all'
              ? 'Try adjusting your search or filter.'
              : 'Log your first decision using the button in the top right.'
          }
        />
      )}

      {/* Table */}
      {(isLoading || decisions.length > 0) && (
        <DecisionTable
          decisions={decisions}
          pagination={pagination}
          onPageChange={setPage}
          isLoading={isLoading}
        />
      )}
    </div>
  )
}
