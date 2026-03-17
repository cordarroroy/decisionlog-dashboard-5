import CardSkeleton     from '@/components/skeletons/CardSkeleton'
import TableRowSkeleton from '@/components/skeletons/TableRowSkeleton'

export default function DashboardLoading() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page heading skeleton */}
      <div className="space-y-2">
        <div className="h-7 bg-surface-muted rounded-lg w-36 animate-skeleton" />
        <div className="h-4 bg-surface-muted rounded w-64 animate-skeleton" />
      </div>

      {/* Recent decisions skeleton */}
      <section>
        <div className="h-4 bg-surface-muted rounded w-32 mb-4 animate-skeleton" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[0, 1, 2].map((i) => <CardSkeleton key={i} />)}
        </div>
      </section>

      {/* Table skeleton */}
      <section>
        <div className="h-4 bg-surface-muted rounded w-24 mb-4 animate-skeleton" />
        <div className="bg-surface-card rounded-xl2 border border-surface-border shadow-card overflow-hidden">
          {/* Toolbar skeleton */}
          <div className="px-4 py-4 border-b border-surface-border flex gap-3">
            <div className="h-9 bg-surface-muted rounded-lg flex-1 max-w-sm animate-skeleton" />
            <div className="h-9 bg-surface-muted rounded-lg w-36 animate-skeleton" />
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-surface-border bg-surface-muted/40">
                {['Title', 'Category', 'Logged By', 'Date'].map((col) => (
                  <th key={col} className="px-4 py-3 text-left">
                    <div className="h-3 bg-surface-muted rounded w-16 animate-skeleton" />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 6 }).map((_, i) => <TableRowSkeleton key={i} />)}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
