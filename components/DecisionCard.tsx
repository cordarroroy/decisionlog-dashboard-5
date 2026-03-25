import React from 'react'
import { CalendarDaysIcon, UserCircleIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import CategoryBadge from './CategoryBadge'
import type { DecisionCardProps } from '@/lib/types'

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat('en-US', {
    month:   'short',
    day:     'numeric',
    year:    'numeric',
  }).format(new Date(iso))
}

const DecisionCard = React.memo(function DecisionCard({
  decision,
  index,
  onClick,
}: DecisionCardProps & { onClick?: () => void }) {
  const delayMs = index * 80

  return (
    <article
      className="
        group relative
        bg-surface-card rounded-xl2 p-5
        shadow-card border border-surface-border
        cursor-pointer
        transition-all duration-300 ease-bounce-sm
        hover:shadow-card-hover hover:-translate-y-1
        focus-within:shadow-card-focus focus-within:ring-2 focus-within:ring-emerald-500/30
        animate-slide-up
      "
      style={{ animationDelay: `${delayMs}ms`, animationFillMode: 'both' }}
      onClick={onClick}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.()
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Decision: ${decision.title} - click to view details`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <CategoryBadge category={decision.category} size="sm" />
        <time
          dateTime={decision.created_at}
          className="flex items-center gap-1 text-xs text-brand-400 shrink-0"
        >
          <CalendarDaysIcon className="w-3.5 h-3.5" aria-hidden="true" />
          {formatDate(decision.created_at)}
        </time>
      </div>

      <h3 className="
        font-semibold text-brand-800 leading-snug mb-2
        group-hover:text-brand-900 transition-colors duration-200
        line-clamp-2
      ">
        {decision.title}
      </h3>

      {decision.context && (
        <p className="text-sm text-brand-500 line-clamp-2 leading-relaxed mb-3">
          {decision.context}
        </p>
      )}

      <div className="flex items-center gap-1.5 mt-auto pt-3 border-t border-surface-border">
        <UserCircleIcon className="w-4 h-4 text-brand-400" aria-hidden="true" />
        <span className="text-xs text-brand-400 truncate">
          {decision.author_email ?? 'Unknown'}
        </span>
      </div>

      <div
        className="
          absolute top-4 right-4 opacity-0
          group-hover:opacity-5 transition-opacity duration-300
          pointer-events-none
        "
        aria-hidden="true"
      >
        <ChatBubbleLeftRightIcon className="w-16 h-16 text-brand-600" />
      </div>
    </article>
  )
})

export default DecisionCard
