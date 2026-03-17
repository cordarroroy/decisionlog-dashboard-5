'use client'

import { useState, useCallback, type ReactNode } from 'react'
import Topbar          from '@/components/Topbar'
import UsageBanner     from '@/components/UsageBanner'
import LogDecisionModal from '@/components/LogDecisionModal'
import { useUsage }    from '@/hooks/useUsage'

interface DashboardShellProps {
  userEmail: string | null
  children:  ReactNode
}

/**
 * Client-side shell wrapping the dashboard.
 * Lives here so the parent layout can remain a Server Component
 * while we still get interactive modal + usage state.
 */
export default function DashboardShell({ userEmail, children }: DashboardShellProps) {
  const usage = useUsage()
  const [modalOpen, setModalOpen] = useState(false)

  const openModal  = useCallback(() => setModalOpen(true),  [])
  const closeModal = useCallback(() => setModalOpen(false), [])

  // Expose refresh trigger so dashboard page can react to new decisions
  const [refreshKey, setRefreshKey] = useState(0)
  const onSuccess = useCallback(() => setRefreshKey((k) => k + 1), [])

  return (
    <>
      <Topbar
        userEmail={userEmail}
        onLogClick={openModal}
        canLog={usage.canLog}
      />

      <main
        id="main-content"
        className="flex-1 overflow-y-auto scrollbar-thin px-6 py-6 space-y-5"
        aria-label="Dashboard content"
      >
        <UsageBanner usage={usage} />

        {/* Pass refreshKey via data-attr so child pages can re-fetch */}
        <div data-refresh-key={refreshKey}>
          {children}
        </div>
      </main>

      <LogDecisionModal
        isOpen={modalOpen}
        onClose={closeModal}
        onSuccess={onSuccess}
        canLog={usage.canLog}
      />
    </>
  )
}
