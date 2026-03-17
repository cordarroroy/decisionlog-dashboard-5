import { createBrowserClient } from '@supabase/ssr'
import { env } from '@/lib/env'

/**
 * Browser-side Supabase client.
 * Use in Client Components and hooks.
 */
export function createClient() {
  return createBrowserClient(
    env.supabase.url,
    env.supabase.anonKey
  )
}
