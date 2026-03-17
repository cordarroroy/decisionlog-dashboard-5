'use client'

import { useDecisions } from '@/hooks/useDecisions'
import DecisionCard     from '@/components/DecisionCard'
import CardSkeleton     from '@/components/skeletons/CardSkeleton'
import EmptyState       from '@/components/EmptyState'

export default function RecentDecisions() {
  // Only grab the first 3, no filters
  const { decisions, isLoading, error } = useDecisions()

  const recent = decisions.slice(0, 3)

  if (error) {
    return (
      <div
        role="alert"
        className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3"
      >
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
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      aria-label="Recent decisions"
    >
      {recent.map((decision, i) => (
        <DecisionCard key={decision.id} decision={decision} index={i} />
      ))}
    </div>
  )
}
