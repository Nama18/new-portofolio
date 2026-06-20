'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experiences } from '@/data/experience'
import { SectionHeader } from '@/components/section-header'

gsap.registerPlugin(ScrollTrigger)

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null!)
  const itemsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, i) => {
        const dot = item.querySelector('.timeline-dot')
        const content = item.querySelector('.timeline-content')

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        })

        if (dot) {
          tl.fromTo(
            dot,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.35, ease: 'back.out(2)' }
          )
        }

        if (content) {
          tl.fromTo(
            content,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
            '-=0.15'
          )
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="relative py-28 md:py-40 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/[0.015] rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Experience"
          title="Professional Background"
          description="Five roles spanning startups, remote teams, and freelance — each contributing to backend engineering expertise."
        />

        <div className="relative mt-16">
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/[0.06] to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                ref={(el) => {
                  if (el) itemsRef.current[i] = el
                }}
                className="relative pl-14"
              >
                <div className="timeline-dot absolute left-[17px] top-1.5 w-[13px] h-[13px] rounded-full border-2 border-accent bg-background z-10" />

                <div className="timeline-content">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/15 mb-3">
                    <span className="text-[10px] font-semibold tracking-wider text-accent">
                      {exp.duration}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">
                    {exp.position}
                  </h3>
                  <p className="text-sm text-secondary-foreground mb-4">
                    {exp.company} &middot; {exp.location}
                  </p>

                  <div className="rounded-lg border border-border bg-muted/20 p-4 space-y-2.5 hover:shadow-[0_0_50px_-15px_rgba(139,92,246,0.22)] hover:border-accent/20 transition-all duration-400">
                    {exp.responsibilities.slice(0, 3).map((r, ri) => (
                      <p key={ri} className="text-sm text-secondary-foreground leading-relaxed flex items-start gap-2.5">
                        <span className="text-accent/60 mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-accent/60" />
                        {r}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
