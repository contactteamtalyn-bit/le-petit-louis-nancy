'use client'

/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { UtensilsCrossed } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SmartImageProps {
  src: string
  alt: string
  className?: string
  eager?: boolean
}

/**
 * <img> robuste : si la photo manque, placeholder élégant aux couleurs
 * de la maison (fond crème + Cardo italic « Photo à venir — fichier »).
 */
export function SmartImage({ src, alt, className, eager = false }: SmartImageProps) {
  const [error, setError] = useState(false)
  const file = src.split('/').pop() || src

  if (error) {
    return (
      <div
        className={cn(
          'flex h-full w-full flex-col items-center justify-center gap-3 bg-creme text-center',
          className
        )}
        aria-label={alt}
      >
        <UtensilsCrossed className="h-7 w-7 text-miel/70" />
        <span className="font-cardo-it text-[15px] text-brun-soft/80">Photo à venir</span>
        <span className="font-mulish text-[10px] uppercase tracking-[0.2em] text-bistrot/35">
          {file}
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setError(true)}
      className={cn('h-full w-full object-cover', className)}
    />
  )
}
