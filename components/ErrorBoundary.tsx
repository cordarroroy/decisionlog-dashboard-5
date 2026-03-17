'use client'

import React from 'react'
import { ExclamationTriangleIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

interface Props {
  children: React.ReactNode
  fallback?: React.ReactNode
}

interface State {
  hasError: boolean
  error:    Error | null
}

/**
 * Layout-level error boundary.
 * Catches render errors and shows a graceful recovery UI.
 */
export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // In production, send to your error tracker (e.g. Sentry)
    console.error('[ErrorBoundary]', error, info.componentStack)
  }

  reset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback

      return (
        <div
          role="alert"
          className="flex flex-col items-center justify-center min-h-[300px] py-16 px-6 text-center animate-fade-in"
        >
          <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-200/60 flex items-center justify-center mb-4">
            <ExclamationTriangleIcon className="w-7 h-7 text-red-500" aria-hidden="true" />
          </div>
          <h2 className="text-base font-semibold text-brand-800 mb-1">
            Something went wrong
          </h2>
          <p className="text-sm text-brand-500 max-w-xs mb-5 leading-relaxed">
            {this.state.error?.message ?? 'An unexpected error occurred. Please try again.'}
          </p>
          <button
            onClick={this.reset}
            className="
              inline-flex items-center gap-2
              bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700
              text-white text-sm font-medium
              px-4 py-2 rounded-lg
              transition-all duration-200
              hover:-translate-y-0.5 hover:shadow-md
              focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
            "
          >
            <ArrowPathIcon className="w-4 h-4" aria-hidden="true" />
            Try again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
