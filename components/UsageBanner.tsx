'use client'

import Link from 'next/link'
import { SparklesIcon, ExclamationCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { FREE_TIER_LIMIT } from '@/lib/types'
import type { UsageState } from '@/lib/types'

interface UsageBannerProps {
  usage: UsageState
}

/**
 * Renders one of two banners:
 *  - Warning (12–14 decisions): "You've used N/15 — upgrade to Pro"
 *  - Blocked  (15+ decisions):  "Limit reached — entries are blocked"
 */
export default function UsageBanner({ usage }: UsageBannerProps) {
  const [dismissed, setDismissed] = useState(false)

  if (usage.isPro || usage.isLoading) return null
  if (!usage.showWarning && usage.canLog)  return null
  if (dismissed && usage.canLog)           return null

  const isBlocked = !usage.canLog

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={[
        'animate-banner-slide',
        'rounded-xl px-4 py-3',
        'flex items-center gap-3',
        'border',
        isBlocked
          ? 'bg-red-50 border-red-200 text-red-800'
          : 'bg-emerald-50 border-emerald-200 text-emerald-800',
      ].join(' ')}
    >
      {/* Icon */}
      {isBlocked
        ? <ExclamationCircleIcon className="w-5 h-5 text-red-500 shrink-0" aria-hidden="true" />
        : <SparklesIcon          className="w-5 h-5 text-emerald-500 shrink-0" aria-hidden="true" />
      }

      {/* Message */}
      <p className="text-sm font-medium flex-1">
        {isBlocked ? (
          <>
            You&apos;ve reached your{' '}
            <span className="font-bold">{FREE_TIER_LIMIT} decision limit</span> for this month.{' '}
            <Link
              href="/pricing"
              className="underline underline-offset-2 hover:opacity-80 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
            >
              Upgrade to Pro
            </Link>{' '}
            for unlimited decisions.
          </>
        ) : (
          <>
            You&apos;ve used{' '}
            <span className="font-bold animate-count-up inline-block">
              {usage.count}/{FREE_TIER_LIMIT}
            </span>{' '}
            free decisions this month.{' '}
            <Link
              href="/pricing"
              className="underline underline-offset-2 hover:opacity-80 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
            >
              Upgrade to Pro
            </Link>{' '}
            for unlimited.
          </>
        )}
      </p>

      {/* Dismiss (warning only) */}
      {!isBlocked && (
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss usage warning"
          className="
            p-1 rounded-md
            hover:bg-emerald-100 active:bg-emerald-200
            transition-colors duration-150
            focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500
            shrink-0
          "
        >
          <XMarkIcon className="w-4 h-4" aria-hidden="true" />
        </button>
      )}
    </div>
  )
}
