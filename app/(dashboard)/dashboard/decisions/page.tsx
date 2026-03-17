'use client'

import AllDecisions from '../AllDecisions'

export default function DecisionsPage() {
  return (
    <div className="space-y-5 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-brand-800 tracking-tight">All Decisions</h1>
        <p className="text-sm text-brand-500 mt-0.5">
          Every decision your team has logged — searchable and filterable.
        </p>
      </div>

      <div className="bg-surface-card rounded-xl2 border border-surface-border shadow-card overflow-hidden">
        <AllDecisions />
      </div>
    </div>
  )
}
