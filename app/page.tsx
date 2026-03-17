import { redirect } from 'next/navigation'

/**
 * Root page — middleware handles the redirect to /dashboard or /login
 * before this ever renders, but we add an explicit redirect here
 * as a belt-and-suspenders fallback.
 */
export default function RootPage() {
  redirect('/login')
}
