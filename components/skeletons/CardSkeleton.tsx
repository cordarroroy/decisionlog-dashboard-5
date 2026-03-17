export default function CardSkeleton() {
  return (
    <div
      className="bg-surface-card rounded-xl2 p-5 shadow-card border border-surface-border animate-skeleton"
      aria-hidden="true"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="h-5 bg-surface-muted rounded-full w-20" />
        <div className="h-4 bg-surface-muted rounded w-20" />
      </div>
      <div className="space-y-2 mb-3">
        <div className="h-4 bg-surface-muted rounded w-full" />
        <div className="h-4 bg-surface-muted rounded w-4/5" />
      </div>
      <div className="h-3 bg-surface-muted rounded w-3/5 mb-3" />
      <div className="pt-3 border-t border-surface-border">
        <div className="h-3 bg-surface-muted rounded w-32" />
      </div>
    </div>
  )
}
