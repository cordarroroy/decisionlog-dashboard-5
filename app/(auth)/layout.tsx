import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Sign in',
}

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-bg px-4">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)',
          backgroundSize: '32px 32px',
          opacity: 0.5,
        }}
      />

      {/* Gradient blob */}
      <div
        className="absolute -top-64 -right-64 w-[600px] h-[600px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full max-w-sm animate-slide-up">
        {/* Brand header */}
        <div className="text-center mb-8">
          <div className="
            inline-flex items-center justify-center
            w-12 h-12 rounded-xl
            bg-brand-600 shadow-md mb-4
          ">
            <svg
              className="w-6 h-6 text-white"
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
              strokeWidth={2} aria-hidden="true"
            >
              <path
                strokeLinecap="round" strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-brand-800 tracking-tight">DecisionLog</h1>
          <p className="text-sm text-brand-500 mt-1">Decisions, not lost in Slack</p>
        </div>

        {children}
      </div>
    </div>
  )
}
