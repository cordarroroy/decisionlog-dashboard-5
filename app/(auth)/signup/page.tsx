'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { EyeIcon, EyeSlashIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { createClient } from '@/lib/supabase/client'

export default function SignupPage() {
  const supabase = createClient()
  const router   = useRouter()

  const [email,     setEmail]     = useState('')
  const [password,  setPassword]  = useState('')
  const [showPass,  setShowPass]  = useState(false)
  const [loading,   setLoading]   = useState(false)
  const [oauthLoading, setOAuthLoading] = useState<string | null>(null)
  const [error,     setError]     = useState<string | null>(null)
  const [confirmed, setConfirmed] = useState(false)

  const passwordStrong = password.length >= 8

  async function handleOAuth(provider: 'google' | 'slack') {
    setOAuthLoading(provider)
    setError(null)

    const { error: authError } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    })

    if (authError) {
      setError(authError.message)
      setOAuthLoading(null)
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!passwordStrong) return

    setLoading(true)
    setError(null)

    const { error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
      },
    })

    if (authError) {
      setError(authError.message)
      setLoading(false)
      return
    }

    // Supabase sends a confirmation email — show success state
    setConfirmed(true)
  }

  if (confirmed) {
    return (
      <div className="bg-surface-card rounded-xl2 shadow-card border border-surface-border p-8 text-center animate-fade-in">
        <CheckCircleIcon className="w-12 h-12 text-emerald-500 mx-auto mb-4 animate-badge-pop" aria-hidden="true" />
        <h2 className="text-base font-semibold text-brand-800 mb-2">Check your inbox</h2>
        <p className="text-sm text-brand-500 leading-relaxed">
          We sent a confirmation link to <span className="font-medium text-brand-700">{email}</span>.
          Click it to activate your account.
        </p>
        <Link
          href="/login"
          className="
            inline-block mt-5 text-sm font-medium text-emerald-600 hover:text-emerald-700
            focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded
          "
        >
          Back to sign in
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-surface-card rounded-xl2 shadow-card border border-surface-border p-7">
      <h2 className="text-base font-semibold text-brand-800 mb-1">Create your account</h2>
      <p className="text-sm text-brand-500 mb-6">Free forever • 15 decisions/month</p>

      {/* OAuth Buttons */}
      <div className="space-y-2 mb-6">
        <button
          type="button"
          onClick={() => handleOAuth('google')}
          disabled={oauthLoading !== null}
          className="
            w-full px-3.5 py-2.5 rounded-lg
            border border-surface-border bg-surface-bg
            text-sm font-medium text-brand-800
            hover:bg-surface-muted transition-colors duration-150
            disabled:opacity-50 disabled:cursor-not-allowed
            focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500
          "
        >
          {oauthLoading === 'google' ? 'Signing in…' : 'Continue with Google'}
        </button>
        <button
          type="button"
          onClick={() => handleOAuth('slack')}
          disabled={oauthLoading !== null}
          className="
            w-full px-3.5 py-2.5 rounded-lg
            border border-surface-border bg-surface-bg
            text-sm font-medium text-brand-800
            hover:bg-surface-muted transition-colors duration-150
            disabled:opacity-50 disabled:cursor-not-allowed
            focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500
          "
        >
          {oauthLoading === 'slack' ? 'Signing in…' : 'Continue with Slack'}
        </button>
      </div>

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-surface-border" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-surface-card text-brand-400">Or continue with email</span>
        </div>
      </div>

      <form onSubmit={(e) => void handleSubmit(e)} noValidate className="space-y-4">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-700 mb-1.5">
            Work email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="
              w-full px-3.5 py-2.5 rounded-lg
              border border-surface-border bg-surface-bg
              text-sm text-brand-800 placeholder:text-brand-300
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
              transition-colors duration-150
            "
            aria-required="true"
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-brand-700 mb-1.5">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPass ? 'text' : 'password'}
              autoComplete="new-password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Min. 8 characters"
              className="
                w-full pl-3.5 pr-10 py-2.5 rounded-lg
                border border-surface-border bg-surface-bg
                text-sm text-brand-800 placeholder:text-brand-300
                focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                transition-colors duration-150
              "
              aria-required="true"
              aria-describedby="password-hint"
            />
            <button
              type="button"
              onClick={() => setShowPass((p) => !p)}
              aria-label={showPass ? 'Hide password' : 'Show password'}
              className="
                absolute right-3 top-1/2 -translate-y-1/2
                text-brand-400 hover:text-brand-600
                focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded
                transition-colors duration-150
              "
            >
              {showPass
                ? <EyeSlashIcon className="w-4 h-4" aria-hidden="true" />
                : <EyeIcon      className="w-4 h-4" aria-hidden="true" />
              }
            </button>
          </div>

          {/* Strength bar */}
          {password.length > 0 && (
            <div className="mt-2 space-y-1" id="password-hint">
              <div className="flex gap-1" aria-hidden="true">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={[
                      'h-1 flex-1 rounded-full transition-all duration-300',
                      password.length >= i * 2
                        ? (password.length >= 8 ? 'bg-emerald-500' : 'bg-yellow-400')
                        : 'bg-surface-muted',
                    ].join(' ')}
                  />
                ))}
              </div>
              <p className={`text-xs ${passwordStrong ? 'text-emerald-600' : 'text-brand-400'}`}>
                {passwordStrong ? '✓ Strong enough' : 'At least 8 characters required'}
              </p>
            </div>
          )}
        </div>

        {/* Error */}
        {error && (
          <p
            role="alert"
            className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3.5 py-2.5 animate-fade-in"
          >
            {error}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading || !email || !passwordStrong}
          className="
            w-full py-2.5 rounded-lg
            bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700
            disabled:opacity-50 disabled:cursor-not-allowed
            text-white text-sm font-medium
            transition-all duration-200 ease-bounce-sm
            hover:-translate-y-0.5 hover:shadow-md
            focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
          "
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Creating account…
            </span>
          ) : (
            'Create free account'
          )}
        </button>
      </form>

      <p className="text-center text-sm text-brand-500 mt-5">
        Already have an account?{' '}
        <Link
          href="/login"
          className="
            font-medium text-emerald-600 hover:text-emerald-700
            focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded
          "
        >
          Sign in
        </Link>
      </p>
    </div>
  )
}
