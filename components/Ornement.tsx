import { cn } from '@/lib/utils'

/**
 * Ornement Art Nouveau (École de Nancy) — la signature graphique du site.
 * variant 'divider' = séparateur horizontal · 'sprig' = brindille verticale.
 * La couleur suit `currentColor` (mets text-miel / text-miel-light etc.).
 */
export function Ornement({
  variant = 'divider',
  className,
}: {
  variant?: 'divider' | 'sprig'
  className?: string
}) {
  if (variant === 'sprig') {
    return (
      <svg
        viewBox="0 0 40 84"
        fill="none"
        aria-hidden="true"
        className={cn('text-miel', className)}
      >
        <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
          <path d="M20 82 C 20 54 20 30 20 8" />
          <path d="M20 44 C 7 40 3 28 6 16 C 18 20 23 30 20 44 Z" fill="currentColor" fillOpacity="0.1" />
          <path d="M20 32 C 33 28 37 16 34 4 C 22 8 17 18 20 32 Z" fill="currentColor" fillOpacity="0.1" />
        </g>
        <circle cx="20" cy="6" r="2.4" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 260 28"
      fill="none"
      aria-hidden="true"
      className={cn('text-miel', className)}
    >
      <g stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round">
        <path d="M10 14 C 64 14 74 5 100 9 C 114 11 120 14 126 14" />
        <path d="M250 14 C 196 14 186 5 160 9 C 146 11 140 14 134 14" />
        <path
          d="M130 3 C 135 8 135 20 130 25 C 125 20 125 8 130 3 Z"
          fill="currentColor"
          fillOpacity="0.14"
        />
      </g>
      <circle cx="10" cy="14" r="2.3" fill="currentColor" />
      <circle cx="250" cy="14" r="2.3" fill="currentColor" />
    </svg>
  )
}
