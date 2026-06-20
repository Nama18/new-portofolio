'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useCounter(
  target: number,
  prefix: string = '',
  suffix: string = '',
  duration: number = 2
) {
  const ref = useRef<HTMLSpanElement>(null!)

  useEffect(() => {
    if (!ref.current) return

    const obj = { value: 0 }

    gsap.to(obj, {
      value: target,
      duration,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      onUpdate: () => {
        ref.current.textContent = `${prefix}${Math.round(obj.value)}${suffix}`
      },
    })
  }, [target, prefix, suffix, duration])

  return ref
}
