'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function ScrollIndicator() {
  const ref = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    if (!ref.current) return

    gsap.to(ref.current, {
      y: 6,
      opacity: 0.4,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    })
  }, [])

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 mt-20">
      <span className="text-[10px] font-medium text-muted-foreground tracking-[0.15em] uppercase">
        Scroll
      </span>
      <svg
        width="14"
        height="22"
        viewBox="0 0 14 22"
        fill="none"
        className="text-muted-foreground"
      >
        <path
          d="M7 0V18M7 18L1 12M7 18L13 12"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
