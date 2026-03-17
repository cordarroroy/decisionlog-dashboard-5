import React from 'react'
import { CATEGORY_LABELS, type CategoryBadgeProps, type DecisionCategory } from '@/lib/types'

/** Per-category colour palette — all Tailwind semantic classes. */
const CATEGORY_STYLES: Record<DecisionCategory, string> = {
  product:     'bg-violet-100 text-violet-700 ring-violet-200',
  engineering: 'bg-blue-100   text-blue-700   ring-blue-200',
  design:      'bg-pink-100   text-pink-700   ring-pink-200',
  marketing:   'bg-orange-100 text-orange-700 ring-orange-200',
  operations:  'bg-yellow-100 text-yellow-700 ring-yellow-200',
  finance:     'bg-green-100  text-green-700  ring-green-200',
  hr:          'bg-teal-100   text-teal-700   ring-teal-200',
  other:       'bg-slate-100  text-slate-600  ring-slate-200',
}

const SIZE_CLASSES = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-xs',
}

/**
 * Accessible category badge with category-specific colour.
 * Renders with a subtle pop-in animation on mount.
 */
const CategoryBadge = React.memo(function CategoryBadge({
  category,
  size = 'md',
}: CategoryBadgeProps) {
  return (
    <span
      role="status"
      aria-label={`Category: ${CATEGORY_LABELS[category]}`}
      className={[
        'inline-flex items-center font-medium rounded-full',
        'ring-1 ring-inset',
        'animate-badge-pop',
        SIZE_CLASSES[size],
        CATEGORY_STYLES[category],
      ].join(' ')}
    >
      {CATEGORY_LABELS[category]}
    </span>
  )
})

export default CategoryBadge
