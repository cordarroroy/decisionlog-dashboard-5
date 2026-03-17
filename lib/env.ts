/**
 * Validated environment variables.
 * Throws at startup if any required var is missing,
 * so problems surface immediately rather than at runtime.
 */

function requireEnv(key: string): string {
  const value = process.env[key]
  if (!value || value.trim() === '') {
    throw new Error(
      `[env] Missing required environment variable: ${key}\n` +
        `Add it to your .env.local file or Vercel project settings.`
    )
  }
  return value.trim()
}

/** Validated, typed environment configuration. */
export const env = {
  supabase: {
    url:    requireEnv('NEXT_PUBLIC_SUPABASE_URL'),
    anonKey: requireEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY'),
  },
} as const

export type Env = typeof env
