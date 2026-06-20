'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skillGroups } from '@/data/skills'
import { SectionHeader } from '@/components/section-header'

gsap.registerPlugin(ScrollTrigger)

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null!)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const categoryIcons: Record<string, React.ReactNode> = {
    Backend: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-accent">
        <path d="M9 1L17 5V13L9 17L1 13V5L9 1Z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    Database: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-accent">
        <ellipse cx="9" cy="4.5" rx="7" ry="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 4.5V9C2 10.38 5.13 11.5 9 11.5C12.87 11.5 16 10.38 16 9V4.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 9V13.5C2 14.88 5.13 16 9 16C12.87 16 16 14.88 16 13.5V9" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    'Cloud & DevOps': (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-accent">
        <path d="M5 13C2.79 13 1 11.21 1 9C1 6.79 2.79 5 5 5C5.06 5 5.11 5 5.17 5.01C5.58 3.16 7.16 1.75 9.12 1.71C11.08 1.67 12.74 2.95 13.29 4.74C13.43 4.73 13.57 4.72 13.71 4.72C15.81 4.72 17.5 6.41 17.5 8.51C17.5 10.61 15.81 12.3 13.71 12.3H5Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 7.5V11.5M9 11.5L7 9.5M9 11.5L11 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    Tools: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-accent">
        <path d="M14 5L10 9L14 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 5L8 9L4 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  }

  return (
    <section id="skills" ref={sectionRef} className="relative py-28 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Skills"
          title="Technical Stack"
          description="Core technologies organized by discipline — backend, database, infrastructure, and tooling."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              ref={(el) => {
                if (el) cardsRef.current[i] = el
              }}
              className="group relative rounded-xl border border-border bg-card hover:shadow-[0_0_50px_-15px_rgba(139,92,246,0.22)] hover:border-accent/20 transition-all duration-400"
            >
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="p-5">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent/10 to-accent-secondary/10 flex items-center justify-center mb-3">
                  {categoryIcons[group.category]}
                </div>
                <h3 className="text-xs font-semibold tracking-wider text-accent uppercase mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-2.5 py-0.5 rounded-md border border-border bg-muted/20 text-xs text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
