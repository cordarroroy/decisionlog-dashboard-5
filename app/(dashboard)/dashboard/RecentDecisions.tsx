'use client'

import { useState } from 'react'
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="sticky top-0 bg-white border-b flex items-start justify-between p-6">
              <div>
                <CategoryBadge category={selectedDecision.category} size="md" />
                <h2 className="text-2xl font-bold text-brand-800 mt-3">{selectedDecision.title}</h2>
                <p className="text-sm text-brand-400 mt-1">{formatDate(selectedDecision.created_at)}</p>
              </div>
              <button
                onClick={() => setSelectedDecision(null)}
                className="p-1 hover:bg-gray-100 rounded transition"
                aria-label="Close"
              >
                <XMarkIcon className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {selectedDecision.context && (
                <div>
                  <h3 className="font-semibold text-brand-800 mb-2">Context</h3>
                  <p className="text-sm text-brand-600 whitespace-pre-wrap">{selectedDecision.context}</p>
                </div>
              )}

              {selectedDecision.alternatives && (
                <div>
                  <h3 className="font-semibold text-brand-800 mb-2">Alternatives Considered</h3>
                  <p className="text-sm text-brand-600 whitespace-pre-wrap">{selectedDecision.alternatives}</p>
                </div>
              )}

              <div className="text-xs text-brand-400">
                <p>Logged by: {selectedDecision.author_email ?? 'Unknown'}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
