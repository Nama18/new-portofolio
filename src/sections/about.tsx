'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { profile } from '@/data/profile'
import { SectionHeader } from '@/components/section-header'

export function About() {
  const sectionRef = useRef<HTMLElement>(null!)
  const gridRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.about-card')
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      }

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative py-28 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="About"
          title="Building Backend Systems"
          description="Backend developer focused on reliable APIs, clean database architecture, and production-ready integrations."
        />

        <div ref={gridRef} className="mt-14 grid md:grid-cols-2 gap-5">
          <div className="about-card rounded-xl border border-border bg-card p-7 hover:shadow-[0_0_50px_-15px_rgba(139,92,246,0.22)] hover:border-accent/20 transition-all duration-400">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent/15 to-accent-secondary/15 flex items-center justify-center mb-5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-accent">
                <rect x="1" y="1" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-base font-semibold text-foreground mb-2">Core Expertise</h3>
            <p className="text-sm text-secondary-foreground leading-relaxed">
              {profile.experienceYears}+ years building production RESTful APIs with Node.js ecosystem.
              Experienced across the full backend lifecycle — from API design and database modeling
              to payment integration, testing, and CI/CD deployment.
            </p>
          </div>

          <div className="about-card rounded-xl border border-border bg-card p-7 hover:shadow-[0_0_50px_-15px_rgba(139,92,246,0.22)] hover:border-accent/20 transition-all duration-400">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent/15 to-accent-secondary/15 flex items-center justify-center mb-5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-accent">
                <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <h3 className="text-base font-semibold text-foreground mb-2">Education</h3>
            <p className="text-sm text-secondary-foreground leading-relaxed">
              {profile.education.degree}
            </p>
            <p className="text-sm text-secondary-foreground mt-1">
              {profile.education.institution}
            </p>
            <p className="text-xs text-muted-foreground mt-1.5">
              GPA: {profile.education.gpa} &middot; {profile.education.period}
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
