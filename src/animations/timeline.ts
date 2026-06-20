import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function animateTimeline(
  container: HTMLElement,
  items: HTMLElement[],
  line: HTMLElement | null
) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none none',
    },
  })

  if (line) {
    tl.fromTo(
      line,
      { scaleY: 0, transformOrigin: 'top center' },
      { scaleY: 1, duration: 1.2, ease: 'power3.inOut' }
    )
  }

  items.forEach((item, i) => {
    tl.fromTo(
      item,
      { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: 'power3.out',
      },
      i === 0 ? 0.3 : '-=0.4'
    )
  })

  return tl
}
