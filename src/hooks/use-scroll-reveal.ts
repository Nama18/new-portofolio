'use client'

import { useEffect, useRef } from 'react'
import { fadeUp, fadeUpElements } from '@/animations/fade-up'

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null!)

  useEffect(() => {
    if (ref.current) {
      fadeUp(ref.current)
    }
  }, [])

  return ref
}

export function useStaggerReveal<T extends HTMLElement>(
  selector: string,
  stagger: number = 0.1
) {
  const ref = useRef<T>(null!)

  useEffect(() => {
    if (ref.current) {
      const elements = ref.current.querySelectorAll<HTMLElement>(selector)
      if (elements.length > 0) {
        fadeUpElements(Array.from(elements), stagger)
      }
    }
  }, [selector, stagger])

  return ref
}
