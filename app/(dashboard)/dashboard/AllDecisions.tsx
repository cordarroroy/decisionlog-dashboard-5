'use client'

import { useState, useCallback } from 'react'
import { useDecisions } from '@/hooks/useDecisions'
import SearchToolbar from '@/components/SearchToolbar'
import DecisionTable from '@/components/DecisionTable'
import EmptyState from '@/components/EmptyState'
import { XMarkIcon } from '@heroicons/react/24/outline'
import CategoryBadge from '@/components/CategoryBadge'
import type { Decision, DecisionWithAuthor } from '@/lib/types'

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(iso))
}

export default function AllDecisions() {
  const { decisions, isLoading, error, filters, setFilters } = useDecisions()
  const [selectedDecision, setSelectedDecision] = useState<DecisionWithAuthor | null>(null)

  const handleModalClose = useCallback(() => {
    setSelectedDecision(null)
  }, [])

  if (error) {
    return (
      <div role="alert" className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
        {error}
      </div>
    )
  }

  return (
    <>
      {/* Search & Filters */}
      <div className="mb-6">
        <SearchToolbar
          filters={filters}
          setFilters={setFilters}
          total={decisions.length}
        />
      </div>

      {/* Table View */}
      {isLoading ? (
        <div className="bg-surface-card rounded-xl border border-surface-border shadow-card overflow-hidden">
          <table className="w-full">
            <tbody>
              {[0, 1, 2, 3].map((i) => (
                <tr key={i} className="border-b border-surface-border">
                  <td colSpan={4} className="px-4 py-3.5">
                    <div className="h-6 bg-surface-muted rounded animate-pulse" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : decisions.length === 0 ? (
        <EmptyState
          title="No decisions found"
          description={
            filters.search || filters.category !== 'all'
              ? 'Try adjusting your search or filters'
              : 'Log your first decision from Slack to get started'
          }
        />
      ) : (
        <div className="bg-surface-card rounded-xl border border-surface-border shadow-card overflow-hidden">
          <DecisionTable
            decisions={decisions}
            onRowClick={(decision) => setSelectedDecision(decision)}
          />
        </div>
      )}

      {/* Modal - Click Outside to Close */}
      {selectedDecision && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={handleModalClose}
        >
          <div
            className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b flex items-start justify-between p-8">
              <div className="flex-1 pr-4">
                <CategoryBadge category={selectedDecision.category} size="md" />
                <h2 className="text-3xl font-bold text-brand-800 mt-4 mb-2">
                  {selectedDecision.title}
                </h2>
                <p className="text-sm text-brand-400">
                  {formatDate(selectedDecision.created_at)}
                </p>
              </div>
              <button
                onClick={handleModalClose}
                className="p-2 hover:bg-gray-100 rounded transition flex-shrink-0"
                aria-label="Close"
              >
                <XMarkIcon className="w-8 h-8 text-gray-600" />
              </button>
            </div>

            <div className="p-8 space-y-8">
              {selectedDecision.context && (
                <div>
                  <h3 className="text-lg font-semibold text-brand-800 mb-3">
                    Context
                  </h3>
                  <p className="text-base text-brand-600 whitespace-pre-wrap leading-relaxed">
                    {selectedDecision.context}
                  </p>
                </div>
              )}

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-brand-800 mb-3">
                  Details
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-brand-400 mb-1">Category</p>
                    <p className="text-base font-medium text-brand-800">
                      {selectedDecision.category}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-brand-400 mb-1">Logged by</p>
                    <p className="text-base font-medium text-brand-800">
                      {selectedDecision.author_email ?? 'Unknown'}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-brand-400 mb-1">Decision ID</p>
                    <p className="text-xs font-mono text-brand-600">
                      {selectedDecision.id}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
