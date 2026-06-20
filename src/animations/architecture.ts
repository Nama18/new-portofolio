import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function animateArchitectureLayers(
  container: HTMLElement,
  layers: HTMLElement[],
  connectors: HTMLElement[]
) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top center',
      end: 'bottom top',
      pin: true,
      scrub: 1,
      toggleActions: 'play none none none',
    },
  })

  layers.forEach((layer, i) => {
    tl.fromTo(
      layer,
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out' }
    )
    if (connectors[i]) {
      tl.fromTo(
        connectors[i],
        { opacity: 0, scaleY: 0 },
        { opacity: 1, scaleY: 1, duration: 0.3, transformOrigin: 'top center' }
      )
    }
  })

  return tl
}
