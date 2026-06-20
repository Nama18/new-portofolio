'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experiences } from '@/data/experience'
import { SectionHeader } from '@/components/section-header'

gsap.registerPlugin(ScrollTrigger)

const allAchievements = experiences
  .flatMap((exp) => exp.achievements)
  .filter(Boolean)

export function Achievements() {
  const sectionRef = useRef<HTMLElement>(null!)
  const itemsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -15 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  if (allAchievements.length === 0) return null

  return (
    <section id="achievements" ref={sectionRef} className="relative py-28 md:py-40 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Achievements"
          title="Key Contributions"
          description="Evidence-based technical contributions extracted from professional experience."
        />

        <div className="mt-14 space-y-3">
          {allAchievements.map((achievement, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) itemsRef.current[i] = el
              }}
              className="rounded-xl border border-border bg-card p-5 hover:shadow-[0_0_50px_-15px_rgba(139,92,246,0.22)] hover:border-accent/20 transition-all duration-400"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/10 to-accent-secondary/10 flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent">
                    <path d="M3 7.5L6 10.5L11 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-sm text-secondary-foreground leading-relaxed pt-0.5">
                  {achievement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
