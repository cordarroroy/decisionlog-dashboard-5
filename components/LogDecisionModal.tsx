'use client'

import React, { useState, useCallback, useEffect, useRef } from 'react'
import { XMarkIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { createClient } from '@/lib/supabase/client'
import {
  DECISION_CATEGORIES,
  CATEGORY_LABELS,
  type DecisionCategory,
} from '@/lib/types'

interface LogDecisionModalProps {
  isOpen:    boolean
  onClose:   () => void
  onSuccess: () => void
  canLog:    boolean
}

interface FormState {
  title:    string
  context:  string
  category: DecisionCategory
}

const INITIAL_STATE: FormState = {
  title:    '',
  context:  '',
  category: 'product',
}

/**
 * Modal to log a new decision.
 * Includes accessible focus-trap, keyboard dismiss, and
 * a success micro-animation on submit.
 */
export default function LogDecisionModal({
  isOpen,
  onClose,
  onSuccess,
  canLog,
}: LogDecisionModalProps) {
  const supabase = createClient()
  const [form,      setForm]      = useState<FormState>(INITIAL_STATE)
  const [loading,   setLoading]   = useState(false)
  const [error,     setError]     = useState<string | null>(null)
  const [succeeded, setSucceeded] = useState(false)

  const firstInputRef   = useRef<HTMLInputElement>(null)
  const containerRef    = useRef<HTMLDivElement>(null)

  // Focus first input on open
  useEffect(() => {
    if (isOpen) {
      setForm(INITIAL_STATE)
      setError(null)
      setSucceeded(false)
      setTimeout(() => firstInputRef.current?.focus(), 60)
    }
  }, [isOpen])

  // Trap focus inside modal
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key !== 'Tab') return

    const focusable = containerRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (!focusable || focusable.length === 0) return

    const first = focusable[0]
    const last  = focusable[focusable.length - 1]

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last?.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first?.focus()
    }
  }, [onClose])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canLog) return

    setLoading(true)
    setError(null)

    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Not authenticated')

      const { error: dbError } = await supabase.from('decisions').insert({
        title:     form.title.trim(),
        context:   form.context.trim() || null,
        category:  form.category,
        logged_by: user.id,
      })

      if (dbError) throw dbError

      setSucceeded(true)
      setTimeout(() => {
        onSuccess()
        onClose()
      }, 800)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [supabase, form, canLog, onSuccess, onClose])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-900/40 backdrop-blur-sm z-40 animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="
          fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4
        "
        onKeyDown={handleKeyDown}
      >
        <div
          ref={containerRef}
          className="
            w-full max-w-lg
            bg-surface-card rounded-xl2 shadow-xl
            border border-surface-border
            animate-slide-up
            overflow-hidden
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-surface-border">
            <h2 id="modal-title" className="text-base font-semibold text-brand-800">
              Log a Decision
            </h2>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="
                p-1.5 rounded-lg text-brand-400 hover:text-brand-600
                hover:bg-surface-muted transition-colors duration-150
                focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500
              "
            >
              <XMarkIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Success state */}
          {succeeded ? (
            <div className="flex flex-col items-center justify-center py-12 gap-3 animate-fade-in">
              <CheckCircleIcon className="w-12 h-12 text-emerald-500 animate-badge-pop" />
              <p className="text-sm font-medium text-brand-700">Decision logged!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="px-6 py-5 space-y-4">
                {/* Title */}
                <div>
                  <label
                    htmlFor="decision-title"
                    className="block text-sm font-medium text-brand-700 mb-1.5"
                  >
                    Title <span aria-hidden="true" className="text-red-400">*</span>
                  </label>
                  <input
                    ref={firstInputRef}
                    id="decision-title"
                    type="text"
                    required
                    maxLength={200}
                    placeholder="We decided to migrate to microservices"
                    value={form.title}
                    onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                    className="
                      w-full px-3.5 py-2.5 rounded-lg
                      border border-surface-border bg-surface-bg
                      text-sm text-brand-800 placeholder:text-brand-300
                      focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                      transition-colors duration-150
                    "
                    aria-required="true"
                    aria-describedby={error ? 'form-error' : undefined}
                  />
                </div>

                {/* Category */}
                <div>
                  <label
                    htmlFor="decision-category"
                    className="block text-sm font-medium text-brand-700 mb-1.5"
                  >
                    Category <span aria-hidden="true" className="text-red-400">*</span>
                  </label>
                  <select
                    id="decision-category"
                    required
                    value={form.category}
                    onChange={(e) => setForm((p) => ({ ...p, category: e.target.value as DecisionCategory }))}
                    className="
                      w-full px-3.5 py-2.5 rounded-lg
                      border border-surface-border bg-surface-bg
                      text-sm text-brand-800
                      focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                      transition-colors duration-150 cursor-pointer
                    "
                    aria-required="true"
                  >
                    {DECISION_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {CATEGORY_LABELS[cat]}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Context */}
                <div>
                  <label
                    htmlFor="decision-context"
                    className="block text-sm font-medium text-brand-700 mb-1.5"
                  >
                    Context{' '}
                    <span className="text-xs font-normal text-brand-400">(optional)</span>
                  </label>
                  <textarea
                    id="decision-context"
                    rows={3}
                    maxLength={1000}
                    placeholder="Why was this decision made? What alternatives were considered?"
                    value={form.context}
                    onChange={(e) => setForm((p) => ({ ...p, context: e.target.value }))}
                    className="
                      w-full px-3.5 py-2.5 rounded-lg resize-none
                      border border-surface-border bg-surface-bg
                      text-sm text-brand-800 placeholder:text-brand-300
                      focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                      transition-colors duration-150
                    "
                  />
                  <p className="text-xs text-brand-400 mt-1 text-right">
                    {form.context.length}/1000
                  </p>
                </div>

                {/* Error */}
                {error && (
                  <p
                    id="form-error"
                    role="alert"
                    className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3.5 py-2.5 animate-fade-in"
                  >
                    {error}
                  </p>
                )}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-surface-muted/40 border-t border-surface-border flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="
                    px-4 py-2 rounded-lg text-sm font-medium text-brand-600
                    hover:bg-surface-muted active:bg-surface-border
                    transition-colors duration-150
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1
                  "
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading || !form.title.trim()}
                  className="
                    px-4 py-2 rounded-lg text-sm font-medium text-white
                    bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700
                    disabled:opacity-50 disabled:cursor-not-allowed
                    transition-all duration-200 ease-bounce-sm
                    hover:-translate-y-0.5 hover:shadow-md
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
                    min-w-[110px]
                  "
                >
                  {loading ? (
                    <span className="flex items-center gap-2 justify-center">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Saving…
                    </span>
                  ) : (
                    'Log Decision'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  )
}
