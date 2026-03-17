'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import type { FC, SVGProps } from 'react'
import {
  Squares2X2Icon,
  DocumentTextIcon,
  BoltIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline'
import {
  Squares2X2Icon as Squares2X2Solid,
  DocumentTextIcon as DocumentTextSolid,
} from '@heroicons/react/24/solid'
import { createClient } from '@/lib/supabase/client'

type HeroIcon = FC<SVGProps<SVGSVGElement>>

interface NavItem {
  label:   string
  href:    string
  icon:    HeroIcon
  active:  HeroIcon
}

const NAV_ITEMS: NavItem[] = [
  {
    label:  'Dashboard',
    href:   '/dashboard',
    icon:   Squares2X2Icon,
    active: Squares2X2Solid,
  },
  {
    label:  'All Decisions',
    href:   '/dashboard/decisions',
    icon:   DocumentTextIcon,
    active: DocumentTextSolid,
  },
]

export default function Sidebar() {
  const pathname = usePathname()
  const router   = useRouter()
  const supabase = createClient()

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <aside
      className="
        fixed left-0 top-0 bottom-0 z-30
        w-[220px] flex flex-col
        bg-brand-700
        shadow-nav
      "
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div className="px-5 pt-6 pb-5 border-b border-brand-600/60">
        <Link
          href="/dashboard"
          className="
            flex items-center gap-2.5
            focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg
          "
          aria-label="DecisionLog home"
        >
          <div className="
            w-8 h-8 rounded-lg
            bg-emerald-500 flex items-center justify-center
            shadow-sm
          ">
            <BoltIcon className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
          <span className="text-sm font-bold text-white tracking-tight">
            DecisionLog
          </span>
        </Link>
      </div>

      {/* Nav links */}
      <nav className="flex-1 px-3 py-4 space-y-0.5" aria-label="Dashboard sections">
        {NAV_ITEMS.map(({ label, href, icon: Icon, active: ActiveIcon }) => {
          const isActive = pathname === href || pathname.startsWith(`${href}/`)
          return (
            <Link
              key={href}
              href={href}
              aria-current={isActive ? 'page' : undefined}
              className={[
                'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium',
                'transition-all duration-200',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400',
                isActive
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-brand-300 hover:bg-brand-600/50 hover:text-white',
              ].join(' ')}
            >
              {isActive
                ? <ActiveIcon className="w-5 h-5 shrink-0" aria-hidden="true" />
                : <Icon       className="w-5 h-5 shrink-0" aria-hidden="true" />
              }
              {label}

              {/* Active indicator pill */}
              {isActive && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              )}
            </Link>
          )
        })}
      </nav>

      {/* Bottom section */}
      <div className="px-3 pb-5 space-y-0.5 border-t border-brand-600/60 pt-3">
        <Link
          href="/dashboard/settings"
          className="
            flex items-center gap-3 px-3 py-2.5 rounded-xl
            text-sm font-medium text-brand-300
            hover:bg-brand-600/50 hover:text-white
            transition-all duration-200
            focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400
          "
        >
          <Cog6ToothIcon className="w-5 h-5 shrink-0" aria-hidden="true" />
          Settings
        </Link>

        <button
          onClick={() => void handleSignOut()}
          className="
            w-full flex items-center gap-3 px-3 py-2.5 rounded-xl
            text-sm font-medium text-brand-300
            hover:bg-brand-600/50 hover:text-red-300
            transition-all duration-200
            focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400
          "
          aria-label="Sign out of DecisionLog"
        >
          <ArrowRightOnRectangleIcon className="w-5 h-5 shrink-0" aria-hidden="true" />
          Sign out
        </button>
      </div>
    </aside>
  )
}
