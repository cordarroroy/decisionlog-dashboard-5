export default function TableRowSkeleton() {
  return (
    <tr className="border-b border-surface-border animate-skeleton">
      <td className="px-4 py-3.5">
        <div className="h-4 bg-surface-muted rounded w-48 mb-1.5" />
        <div className="h-3 bg-surface-muted rounded w-32" />
      </td>
      <td className="px-4 py-3.5">
        <div className="h-5 bg-surface-muted rounded-full w-20" />
      </td>
      <td className="px-4 py-3.5 hidden sm:table-cell">
        <div className="h-4 bg-surface-muted rounded w-36" />
      </td>
      <td className="px-4 py-3.5 hidden md:table-cell">
        <div className="h-4 bg-surface-muted rounded w-24" />
      </td>
    </tr>
  )
}
