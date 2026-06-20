'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '@/data/projects'
import { SectionHeader } from '@/components/section-header'
import { TechBadge } from '@/components/tech-badge'

gsap.registerPlugin(ScrollTrigger)

export function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null!)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="relative py-28 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Projects"
          title="Featured Work"
          description="Real projects derived from professional experience — each traceable to a specific role."
        />

        <div className="mt-14 space-y-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) cardsRef.current[i] = el
              }}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:shadow-[0_0_55px_-15px_rgba(139,92,246,0.22)] hover:border-accent/25 transition-all duration-500"
            >
              <div className="md:flex">
                <div className="md:w-3/5 p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-[10px] font-medium tracking-wider text-accent uppercase">
                      Project
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <TechBadge key={tech}>{tech}</TechBadge>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                      Key Contributions
                    </h4>
                    <ul className="space-y-1.5">
                      {project.contributions.map((c, ci) => (
                        <li key={ci} className="text-sm text-muted-foreground flex items-start gap-2.5">
                          <span className="text-accent mt-0.5 flex-shrink-0 text-xs">&rarr;</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="md:w-2/5 md:border-l border-border bg-muted/30 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase mb-2">
                      Trace
                    </h4>
                    <p className="text-sm text-muted-foreground">{project.trace}</p>
                  </div>

                  <div className="mt-5 pt-5 border-t border-border">
                    <h4 className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase mb-2">
                      Responsibilities
                    </h4>
                    <ul className="space-y-1">
                      {project.responsibilities.map((r, ri) => (
                        <li key={ri} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-accent/50 mt-1 flex-shrink-0 text-[8px]">&#9679;</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
