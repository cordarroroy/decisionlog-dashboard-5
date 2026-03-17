'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { createClient } from '@/lib/supabase/client'
import type {
  DecisionWithAuthor,
  DecisionFilters,
  PaginationState,
  DecisionCategory,
} from '@/lib/types'

const PAGE_SIZE = 20

interface UseDecisionsReturn {
  decisions:  DecisionWithAuthor[]
  pagination: PaginationState
  isLoading:  boolean
  error:      string | null
  filters:    DecisionFilters
  setFilters: (filters: Partial<DecisionFilters>) => void
  setPage:    (page: number) => void
  refresh:    () => void
}

/**
 * Custom hook that fetches decisions with debounced search,
 * category filter, and server-side pagination.
 */
export function useDecisions(initial?: Partial<DecisionFilters>): UseDecisionsReturn {
  const supabase = createClient()

  const [filters, setFiltersState] = useState<DecisionFilters>({
    search:   initial?.search   ?? '',
    category: initial?.category ?? 'all',
  })
  const [page, setPage]           = useState(1)
  const [decisions, setDecisions] = useState<DecisionWithAuthor[]>([])
  const [total, setTotal]         = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError]         = useState<string | null>(null)

  // Debounce ref — avoids re-creating on every render
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [debouncedSearch, setDebouncedSearch] = useState(filters.search)

  // Debounce the search string
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      setDebouncedSearch(filters.search)
      setPage(1) // reset to page 1 on new search
    }, 350)
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [filters.search])

  const fetchDecisions = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        setError('Not authenticated')
        return
      }

      const from = (page - 1) * PAGE_SIZE
      const to   = from + PAGE_SIZE - 1

      let query = supabase
        .from('decisions')
        .select('*', { count: 'exact' })
        .eq('logged_by', user.id)
        .order('created_at', { ascending: false })
        .range(from, to)

      if (debouncedSearch.trim()) {
        query = query.ilike('title', `%${debouncedSearch.trim()}%`)
      }

      if (filters.category !== 'all') {
        query = query.eq('category', filters.category)
      }

      const { data, count, error: dbError } = await query

      if (dbError) throw dbError

      // Enrich with author email (current user's email for their own rows)
      const enriched: DecisionWithAuthor[] = (data ?? []).map((row) => ({
        ...row,
        context:      row.context      as string | null,
        category:     row.category     as DecisionCategory,
        logged_by:    row.logged_by    as string | null,
        author_email: user.email ?? null,
      }))

      setDecisions(enriched)
      setTotal(count ?? 0)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to load decisions'
      setError(message)
    } finally {
      setIsLoading(false)
    }
  }, [supabase, page, debouncedSearch, filters.category])

  useEffect(() => {
    void fetchDecisions()
  }, [fetchDecisions])

  const setFilters = useCallback((partial: Partial<DecisionFilters>) => {
    setFiltersState((prev) => ({ ...prev, ...partial }))
    if (partial.category !== undefined) setPage(1)
  }, [])

  return {
    decisions,
    pagination: {
      page,
      pageSize: PAGE_SIZE,
      total,
    },
    isLoading,
    error,
    filters,
    setFilters,
    setPage,
    refresh: fetchDecisions,
  }
}
