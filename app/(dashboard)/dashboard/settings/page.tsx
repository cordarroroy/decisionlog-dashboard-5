import { createClient } from '@/lib/supabase/server'
import { redirect }     from 'next/navigation'
import { UserCircleIcon, BoltIcon } from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Settings' }

export default async function SettingsPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  return (
    <div className="space-y-6 animate-fade-in max-w-2xl">
      <div>
        <h1 className="text-xl font-bold text-brand-800 tracking-tight">Settings</h1>
        <p className="text-sm text-brand-500 mt-0.5">Manage your account and billing.</p>
      </div>

      {/* Profile card */}
      <section
        className="bg-surface-card rounded-xl2 border border-surface-border shadow-card p-6"
        aria-labelledby="profile-heading"
      >
        <h2 id="profile-heading" className="text-sm font-semibold text-brand-700 mb-4 flex items-center gap-2">
          <UserCircleIcon className="w-5 h-5" aria-hidden="true" />
          Account
        </h2>
        <dl className="space-y-3 text-sm">
          <div className="flex items-center justify-between py-2 border-b border-surface-border">
            <dt className="text-brand-500">Email</dt>
            <dd className="font-medium text-brand-800">{user.email}</dd>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-surface-border">
            <dt className="text-brand-500">User ID</dt>
            <dd className="font-mono text-xs text-brand-500">{user.id}</dd>
          </div>
          <div className="flex items-center justify-between py-2">
            <dt className="text-brand-500">Plan</dt>
            <dd>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-100 text-brand-700 ring-1 ring-brand-200">
                Free
              </span>
            </dd>
          </div>
        </dl>
      </section>

      {/* Upgrade card */}
      <section
        className="bg-gradient-to-br from-brand-700 to-brand-800 rounded-xl2 border border-brand-600 shadow-card p-6 text-white"
        aria-labelledby="upgrade-heading"
      >
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0">
            <BoltIcon className="w-5 h-5 text-emerald-400" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <h2 id="upgrade-heading" className="text-sm font-semibold mb-1">DecisionLog Pro</h2>
            <p className="text-sm text-brand-300 leading-relaxed mb-4">
              Unlimited decisions, team collaboration, Slack integration, and priority support.
            </p>
            <div className="flex items-center gap-4">
              <div>
                <span className="text-2xl font-bold">$49</span>
                <span className="text-brand-300 text-sm">/month</span>
              </div>
              <button
                className="
                  px-4 py-2 rounded-lg text-sm font-medium
                  bg-emerald-500 hover:bg-emerald-400
                  text-white
                  transition-all duration-200 ease-bounce-sm
                  hover:-translate-y-0.5 hover:shadow-lg
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-800
                "
                aria-label="Upgrade to Pro plan for $49 per month"
              >
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
