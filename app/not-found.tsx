import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-bg px-4">
      <div className="text-center animate-slide-up">
        <p className="text-7xl font-black text-brand-200 mb-6" aria-hidden="true">404</p>
        <h1 className="text-xl font-bold text-brand-800 mb-2">Page not found</h1>
        <p className="text-sm text-brand-500 mb-6 max-w-xs mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/dashboard"
          className="
            inline-flex items-center gap-2
            bg-emerald-500 hover:bg-emerald-600
            text-white text-sm font-medium
            px-4 py-2 rounded-lg
            transition-all duration-200 ease-bounce-sm
            hover:-translate-y-0.5 hover:shadow-md
            focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
          "
        >
          Go to dashboard
        </Link>
      </div>
    </div>
  )
}
