import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import Sidebar      from '@/components/Sidebar'
import ErrorBoundary from '@/components/ErrorBoundary'
import DashboardShell from './DashboardShell'
import type { ReactNode } from 'react'

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  return (
    <div className="flex h-screen overflow-hidden bg-surface-bg">
      {/* Sidebar (server-rendered, no layout shift) */}
      <Sidebar />

      {/* Main content area, offset for sidebar */}
      <div className="flex-1 flex flex-col min-w-0 ml-[220px]">
        <ErrorBoundary>
          <DashboardShell userEmail={user.email ?? null}>
            {children}
          </DashboardShell>
        </ErrorBoundary>
      </div>
    </div>
  )
}
