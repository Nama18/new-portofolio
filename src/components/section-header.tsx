'use client'

import { useEffect, useRef } from 'react'
import { fadeUp } from '@/animations/fade-up'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ label, title, description, className }: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    if (ref.current) {
      fadeUp(ref.current)
    }
  }, [])

  return (
    <div ref={ref} className={cn('max-w-2xl', className)}>
      <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-accent mb-4">
        {label}
      </span>
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.08] mb-5">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-secondary-foreground leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </div>
  )
}
