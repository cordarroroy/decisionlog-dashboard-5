'use client'

import { useEffect } from 'react'
import { ExclamationTriangleIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('[GlobalError]', error)
  }, [error])

  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-surface-bg px-4 font-sans">
        <div className="text-center animate-slide-up">
          <div className="w-16 h-16 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center mx-auto mb-5">
            <ExclamationTriangleIcon className="w-8 h-8 text-red-500" />
          </div>
          <h1 className="text-xl font-bold text-brand-800 mb-2">Something went wrong</h1>
          <p className="text-sm text-brand-500 max-w-xs mx-auto mb-6 leading-relaxed">
            {error.message ?? 'An unexpected error occurred.'}
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={reset}
              className="
                inline-flex items-center gap-2
                bg-emerald-500 hover:bg-emerald-600
                text-white text-sm font-medium
                px-4 py-2 rounded-lg
                transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-md
                focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
              "
            >
              <ArrowPathIcon className="w-4 h-4" />
              Try again
            </button>
            <a
              href="/dashboard"
              className="
                text-sm font-medium text-brand-500 hover:text-brand-700
                focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded
                transition-colors
              "
            >
              Go home
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}
