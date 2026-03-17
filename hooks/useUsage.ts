'use client'

import { useState, useEffect, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'
import { FREE_TIER_LIMIT, FREE_TIER_WARNING, type UsageState } from '@/lib/types'

/**
 * Hook that calculates how many decisions the current user has logged
 * in the current calendar month, and derives limit / warning states.
 */
export function useUsage(): UsageState {
  const supabase = createClient()

  const [count,     setCount]     = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error,     setError]     = useState<string | null>(null)

  // TODO: wire up real Pro subscription check (Stripe / Supabase profiles table)
  const isPro = false

  const fetchUsage = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      // First day of the current UTC month
      const now       = new Date()
      const monthStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1))

      const { count: rowCount, error: dbError } = await supabase
        .from('decisions')
        .select('*', { count: 'exact', head: true })
        .eq('logged_by', user.id)
        .gte('created_at', monthStart.toISOString())

      if (dbError) throw dbError

      setCount(rowCount ?? 0)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to check usage'
      setError(message)
    } finally {
      setIsLoading(false)
    }
  }, [supabase])

  useEffect(() => {
    void fetchUsage()
  }, [fetchUsage])

  const limit       = isPro ? Infinity : FREE_TIER_LIMIT
  const canLog      = isPro || count < FREE_TIER_LIMIT
  const showWarning = !isPro && count >= FREE_TIER_WARNING && count < FREE_TIER_LIMIT

  return {
    count,
    limit,
    isLoading,
    error,
    isPro,
    canLog,
    showWarning,
  }
}
