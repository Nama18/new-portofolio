'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { profile } from '@/data/profile'
import { ScrollIndicator } from '@/components/scroll-indicator'

const keyTechs = ['Node.js', 'NestJS', 'PostgreSQL', 'Docker', 'Redis', 'Kafka', 'Laravel', 'CI/CD']

export function Hero() {
  const containerRef = useRef<HTMLElement>(null!)
  const badgeRef = useRef<HTMLSpanElement>(null!)
  const headlineRef = useRef<HTMLHeadingElement>(null!)
  const nameRef = useRef<HTMLParagraphElement>(null!)
  const taglineRef = useRef<HTMLParagraphElement>(null!)
  const cardRef = useRef<HTMLDivElement>(null!)
  const ctaRef = useRef<HTMLDivElement>(null!)
  const techsRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.2'
      )
      tl.fromTo(
        nameRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.3'
      )
      tl.fromTo(
        taglineRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4 },
        '-=0.15'
      )
      tl.fromTo(
        cardRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.1'
      )
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.1'
      )
      tl.fromTo(
        techsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.2'
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.02] via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-[15%] right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-[400px] h-[400px] bg-accent-secondary/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl mx-auto">
        <span
          ref={badgeRef}
          className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-accent mb-8 px-4 py-1.5 rounded-full border border-accent/20"
        >
          {profile.role}
        </span>

        <h1
          ref={headlineRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.05] mb-5"
        >
          Payment systems, HR platforms,
          <br />
          <span className="text-gradient-primary">and the APIs that power them.</span>
        </h1>

        <p
          ref={nameRef}
          className="text-xl md:text-2xl font-medium text-foreground mb-3"
        >
          {profile.name}
        </p>

        <p
          ref={taglineRef}
          className="text-sm text-muted-foreground/60 mb-10"
        >
          Node.js &middot; NestJS &middot; PostgreSQL &middot; Docker &middot; Redis
        </p>

        <div
          ref={cardRef}
          className="grid grid-cols-2 gap-px rounded-lg border border-white/[0.06] bg-border overflow-hidden mb-10"
        >
          <div className="bg-card p-3">
            <p className="text-[10px] font-semibold tracking-[0.12em] text-muted-foreground/50 uppercase mb-[3px]">
              Current Focus
            </p>
            <p className="text-sm text-secondary-foreground leading-relaxed">
              HRIS, Payroll Systems,
              <br />
              Internal Platforms
            </p>
          </div>
          <div className="bg-card p-3">
            <p className="text-[10px] font-semibold tracking-[0.12em] text-muted-foreground/50 uppercase mb-[3px]">
              Experience
            </p>
            <p className="text-sm text-secondary-foreground">
              4+ Years
            </p>
          </div>
          <div className="bg-card p-3">
            <p className="text-[10px] font-semibold tracking-[0.12em] text-muted-foreground/50 uppercase mb-[3px]">
              Location
            </p>
            <p className="text-sm text-secondary-foreground">
              Bandung, Indonesia
            </p>
          </div>
          <div className="bg-card p-3">
            <p className="text-[10px] font-semibold tracking-[0.12em] text-muted-foreground/50 uppercase mb-[3px]">
              Availability
            </p>
            <p className="text-sm text-secondary-foreground">
              Open for Full-Time
              <br />
              Opportunities
            </p>
          </div>
        </div>

        <div ref={ctaRef} className="flex flex-wrap items-center gap-3 mb-8">
          <a
            href="#experience"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-primary text-white text-sm font-medium hover:opacity-90 transition-all duration-300"
          >
            View Experience
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-white/[0.08] text-muted-foreground text-sm font-medium hover:text-foreground hover:border-white/[0.15] transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        <div ref={techsRef} className="flex flex-wrap gap-1.5">
          {keyTechs.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-2.5 py-1 rounded-md border border-white/[0.06] bg-white/[0.03] text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
