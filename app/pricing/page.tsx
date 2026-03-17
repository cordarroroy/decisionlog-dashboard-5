import Link from 'next/link'
import { CheckIcon, BoltIcon } from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Pricing' }

const FREE_FEATURES = [
  '15 decisions per month',
  'All 8 categories',
  'Search & filter',
  'Sortable table view',
  'Secure, private by default',
]

const PRO_FEATURES = [
  'Unlimited decisions',
  'Everything in Free',
  'Slack integration (coming soon)',
  'Team collaboration (coming soon)',
  'CSV / JSON export',
  'Priority support',
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-surface-bg">
      {/* Nav */}
      <nav className="border-b border-surface-border bg-surface-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg"
          >
            <div className="w-7 h-7 rounded-lg bg-brand-600 flex items-center justify-center">
              <BoltIcon className="w-4 h-4 text-white" aria-hidden="true" />
            </div>
            <span className="text-sm font-bold text-brand-800">DecisionLog</span>
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium text-brand-500 hover:text-brand-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
          >
            ← Back to dashboard
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20">
        {/* Heading */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl font-black text-brand-800 tracking-tight mb-3">
            Simple, honest pricing
          </h1>
          <p className="text-lg text-brand-500 max-w-md mx-auto">
            Start free. Upgrade when your team needs more.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '80ms', animationFillMode: 'both' }}>
          {/* Free */}
          <div className="bg-surface-card rounded-xl2 border border-surface-border shadow-card p-8">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-brand-800 mb-1">Free</h2>
              <p className="text-sm text-brand-500">Perfect for solo founders and small teams trying it out.</p>
            </div>

            <div className="mb-8">
              <span className="text-4xl font-black text-brand-800">$0</span>
              <span className="text-brand-400 text-sm ml-1">/month</span>
            </div>

            <ul className="space-y-3 mb-8" aria-label="Free plan features">
              {FREE_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-brand-600">
                  <CheckIcon className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href="/signup"
              className="
                block w-full text-center
                py-2.5 rounded-lg
                border border-surface-border bg-surface-muted
                text-sm font-medium text-brand-700
                hover:bg-surface-border hover:text-brand-800
                transition-all duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2
              "
            >
              Get started free
            </Link>
          </div>

          {/* Pro */}
          <div className="
            bg-brand-700 rounded-xl2 border border-brand-600
            shadow-card-hover p-8 relative overflow-hidden
          ">
            {/* Decorative glow */}
            <div
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
              aria-hidden="true"
              style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)' }}
            />

            <div className="relative">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-lg font-bold text-white">Pro</h2>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/30 animate-badge-pop">
                  Most popular
                </span>
              </div>
              <p className="text-sm text-brand-300 mb-6">
                For teams that are serious about decision hygiene.
              </p>

              <div className="mb-8">
                <span className="text-4xl font-black text-white">$49</span>
                <span className="text-brand-400 text-sm ml-1">/month</span>
              </div>

              <ul className="space-y-3 mb-8" aria-label="Pro plan features">
                {PRO_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-brand-200">
                    <CheckIcon className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className="
                  w-full py-2.5 rounded-lg
                  bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600
                  text-white text-sm font-medium
                  transition-all duration-200 ease-bounce-sm
                  hover:-translate-y-0.5 hover:shadow-lg
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-700
                "
                aria-label="Upgrade to Pro plan for $49 per month"
              >
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>

        {/* FAQ teaser */}
        <p className="text-center text-sm text-brand-400 mt-10 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
          Questions? Email us at{' '}
          <a
            href="mailto:hello@decisionlog.app"
            className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
          >
            hello@decisionlog.app
          </a>
        </p>
      </main>
    </div>
  )
}
