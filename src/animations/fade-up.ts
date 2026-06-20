import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function fadeUp(
  element: HTMLElement | string,
  delay: number = 0,
  duration: number = 0.8,
  y: number = 40
) {
  return gsap.fromTo(
    element,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  )
}

export function fadeUpElements(
  elements: HTMLElement[] | string[],
  stagger: number = 0.1,
  delay: number = 0
) {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: elements[0] instanceof HTMLElement
          ? (elements[0] as HTMLElement).parentElement ?? (elements[0] as HTMLElement)
          : elements[0] as string,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  )
}

export function fadeUpScale(
  element: HTMLElement | string,
  delay: number = 0
) {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 30, scale: 0.97 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.9,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  )
}
