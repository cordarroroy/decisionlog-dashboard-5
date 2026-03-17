'use client'

import { PlusIcon, BellIcon } from '@heroicons/react/24/outline'

interface TopbarProps {
  userEmail:  string | null
  onLogClick: () => void
  canLog:     boolean
}

export default function Topbar({ userEmail, onLogClick, canLog }: TopbarProps) {
  const initials = userEmail
    ? userEmail.slice(0, 2).toUpperCase()
    : '?'

  return (
    <header
      className="
        sticky top-0 z-20
        h-14 px-6
        flex items-center justify-between
        bg-surface-card/90 backdrop-blur-md
        border-b border-surface-border
      "
      aria-label="Dashboard header"
    >
      {/* Left — page context (filled by children in a real app) */}
      <div className="flex-1" />

      {/* Right — actions */}
      <div className="flex items-center gap-3">
        {/* Notification bell (placeholder) */}
        <button
          aria-label="Notifications (coming soon)"
          className="
            p-2 rounded-lg text-brand-400 hover:text-brand-600
            hover:bg-surface-muted transition-colors duration-150
            focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500
          "
        >
          <BellIcon className="w-5 h-5" aria-hidden="true" />
        </button>

        {/* Log Decision CTA */}
        <button
          onClick={onLogClick}
          disabled={!canLog}
          className="
            inline-flex items-center gap-1.5
            bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700
            disabled:opacity-40 disabled:cursor-not-allowed
            text-white text-sm font-medium
            px-3.5 py-2 rounded-lg
            transition-all duration-200 ease-bounce-sm
            hover:-translate-y-0.5 hover:shadow-md
            focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
          "
          aria-label={canLog ? 'Log a new decision' : 'Monthly decision limit reached'}
          title={canLog ? 'Log a new decision' : 'Upgrade to Pro for unlimited decisions'}
        >
          <PlusIcon className="w-4 h-4" aria-hidden="true" />
          Log Decision
        </button>

        {/* User avatar */}
        <div
          className="
            w-8 h-8 rounded-full
            bg-brand-600 text-white
            flex items-center justify-center
            text-xs font-bold
            shrink-0
          "
          aria-label={`Logged in as ${userEmail ?? 'unknown'}`}
          title={userEmail ?? ''}
        >
          {initials}
        </div>
      </div>
    </header>
  )
}
