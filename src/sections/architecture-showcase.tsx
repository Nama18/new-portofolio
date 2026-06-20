'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionHeader } from '@/components/section-header'

gsap.registerPlugin(ScrollTrigger)

const architectureLayers = [
  { label: 'Client / Frontend', highlight: false },
  { label: 'API Gateway', highlight: false },
  { label: 'NestJS Services', highlight: true },
  { label: 'PostgreSQL / MySQL', highlight: false },
  { label: 'Redis / Kafka', highlight: false },
  { label: 'Docker Containers', highlight: false },
  { label: 'Linux Server \u00B7 CI/CD', highlight: false },
]

export function ArchitectureShowcase() {
  const sectionRef = useRef<HTMLElement>(null!)
  const layerRefs = useRef<HTMLDivElement[]>([])
  const connectorRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 30%',
          toggleActions: 'play none none none',
        },
      })

      layerRefs.current.forEach((layer, i) => {
        tl.fromTo(
          layer,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
        )
        if (connectorRefs.current[i]) {
          tl.fromTo(
            connectorRefs.current[i],
            { scaleY: 0, transformOrigin: 'top center' },
            { scaleY: 1, duration: 0.25, ease: 'power3.inOut' }
          )
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="architecture"
      ref={sectionRef}
      className="relative py-28 md:py-40 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.015] via-transparent to-accent-secondary/[0.015] pointer-events-none" />
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          label="Architecture"
          title="Backend Stack"
          description="Production infrastructure reflecting the technologies used across professional roles."
          className="mb-16"
        />

        <div className="flex flex-col items-center gap-0">
          {architectureLayers.map((layer, i) => (
            <div key={layer.label} className="flex flex-col items-center w-full">
              <div className="relative">
                {layer.highlight && (
                  <div className="absolute -inset-4 bg-accent/15 rounded-2xl blur-2xl opacity-80" />
                )}
                <div
                  ref={(el) => {
                    if (el) layerRefs.current[i] = el
                  }}
                  className={`relative w-full max-w-sm rounded-xl border transition-all duration-400 ${
                    layer.highlight
                      ? 'border-accent/50 bg-gradient-to-br from-accent/[0.08] to-accent-secondary/[0.04] shadow-[0_0_50px_-10px_rgba(139,92,246,0.3)]'
                      : 'border-border bg-card hover:shadow-[0_0_50px_-15px_rgba(139,92,246,0.22)] hover:border-accent/20'
                  } px-6 py-4 text-center`}
                >
                  <span
                    className={`text-sm font-medium ${
                      layer.highlight ? 'text-accent' : 'text-secondary-foreground'
                    }`}
                  >
                    {layer.highlight && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 align-middle shadow-[0_0_8px_rgba(139,92,246,0.7)]" />
                    )}
                    {layer.label}
                  </span>
                </div>
              </div>

              {i < architectureLayers.length - 1 && (
                <div className="flex flex-col items-center h-9">
                  <svg
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                    className="text-accent/25 -mb-0.5"
                  >
                    <path
                      d="M1 1L7 9L13 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div
                    ref={(el) => {
                      if (el) connectorRefs.current[i] = el
                    }}
                    className="w-px flex-1 bg-gradient-to-b from-accent/30 to-accent/5"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
