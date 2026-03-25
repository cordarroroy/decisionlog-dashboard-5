'use client'

import { useState, useCallback } from 'react'
import { useDecisions } from '@/hooks/useDecisions'
import DecisionCard from '@/components/DecisionCard'
import CardSkeleton from '@/components/skeletons/CardSkeleton'
import EmptyState from '@/components/EmptyState'
import { XMarkIcon } from '@heroicons/react/24/outline'
import CategoryBadge from '@/components/CategoryBadge'
import type { Decision } from '@/lib/types'

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(iso))
}

export default function RecentDecisions() {
  const { decisions, isLoading, error } = useDecisions()
  const [selectedDecision, setSelectedDecision] = useState<Decision | null>(null)

  const recent = decisions.slice(0, 3)

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

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[0, 1, 2].map((i) => <CardSkeleton key={i} />)}
      </div>
    )
  }

  if (recent.length === 0) {
    return (
      <EmptyState
        title="No decisions yet"
        description="Log your first decision and it'll appear here. Keep your team's choices out of Slack threads."
      />
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" aria-label="Recent decisions">
        {recent.map((decision, i) => (
          <DecisionCard
            key={decision.id}
            decision={decision}
            index={i}
            onClick={() => setSelectedDecision(decision)}
          />
        ))}
      </div>

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
                      {selectedDecision.logged_by ?? 'Unknown'}
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
