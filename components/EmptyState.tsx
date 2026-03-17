import Link from 'next/link'
import { InboxIcon } from '@heroicons/react/24/outline'
import type { EmptyStateProps } from '@/lib/types'

export default function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 px-6 text-center animate-fade-in"
      role="status"
      aria-live="polite"
    >
      {/* Decorative icon container */}
      <div className="
        w-16 h-16 rounded-2xl
        bg-gradient-to-br from-emerald-50 to-emerald-100
        flex items-center justify-center mb-5
        shadow-sm border border-emerald-200/60
      ">
        <InboxIcon className="w-8 h-8 text-emerald-500" aria-hidden="true" />
      </div>

      <h3 className="text-base font-semibold text-brand-800 mb-1">{title}</h3>
      <p className="text-sm text-brand-500 max-w-xs leading-relaxed">{description}</p>

      {action && (
        <Link
          href={action.href}
          className="
            mt-5 inline-flex items-center gap-2
            bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700
            text-white text-sm font-medium
            px-4 py-2 rounded-lg
            transition-all duration-200 ease-bounce-sm
            hover:-translate-y-0.5 hover:shadow-md
            focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
          "
        >
          {action.label}
        </Link>
      )}
    </div>
  )
}
