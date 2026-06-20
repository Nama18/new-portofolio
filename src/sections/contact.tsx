'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { contact } from '@/data/contact'
import { SectionHeader } from '@/components/section-header'

gsap.registerPlugin(ScrollTrigger)

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null!)
  const linksRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      linksRef.current.forEach((link, i) => {
        gsap.fromTo(
          link,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const links = [
    {
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="1" y="3" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M1 5L9 10L17 5" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
    },
    {
      label: 'GitHub',
      value: contact.github,
      href: `https://${contact.github}`,
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 1C4.58 1 1 4.58 1 9C1 12.54 3.29 15.53 6.47 16.59C6.87 16.66 7.02 16.42 7.02 16.21C7.02 16.02 7.01 15.39 7.01 14.72C5 15.09 4.48 13.78 4.48 13.78C4.07 12.75 3.47 12.55 3.47 12.55C2.64 12.16 3.53 12.17 3.53 12.17C4.44 12.23 4.91 13.1 4.91 13.1C5.68 14.45 6.92 14.16 7.05 13.95C7.12 13.75 7.2 13.42 7.27 13.21C5.56 13.02 3.77 12.29 3.77 9.04C3.77 8.11 4.07 7.35 4.58 6.77C4.5 6.58 4.24 5.7 4.67 4.55C4.67 4.55 5.37 4.35 6.99 5.42C7.66 5.25 8.35 5.17 9.01 5.17C9.67 5.17 10.36 5.25 11.02 5.42C12.64 4.34 13.34 4.55 13.34 4.55C13.77 5.71 13.51 6.59 13.43 6.77C13.94 7.35 14.24 8.12 14.24 9.04C14.24 12.3 12.45 13.02 10.74 13.21C10.82 13.43 10.9 13.86 10.9 14.5C10.9 15.42 10.89 16.16 10.89 16.21C10.89 16.42 11.04 16.67 11.44 16.59C14.62 15.53 16.91 12.54 16.91 9C17.01 4.58 13.43 1 9.01 1H9Z" stroke="currentColor" strokeWidth="1.3"/>
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      value: contact.linkedin,
      href: `https://${contact.linkedin}`,
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="1" y="1" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M5 8V13M5 5.5V5.51" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M9 13V10C9 8.5 10 8 10.5 8C11 8 12 8.2 12 10V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M13 13V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="relative py-28 md:py-40 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeader
          label="Contact"
          title="Get in Touch"
          description="Available for backend engineering roles, contract work, and technical collaboration."
          className="mx-auto text-center"
        />

        <div className="mt-14 flex flex-col items-center gap-4">
          {links.map((link, i) => (
            <div
              key={link.label}
              ref={(el) => {
                if (el) linksRef.current[i] = el
              }}
              className="w-full max-w-sm"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 px-5 py-4 rounded-xl border border-border bg-card hover:shadow-[0_0_50px_-15px_rgba(139,92,246,0.22)] hover:border-accent/20 transition-all duration-400"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/10 to-accent-secondary/10 flex items-center justify-center text-secondary-foreground group-hover:text-accent transition-colors duration-300">
                  {link.icon}
                </div>
                <div className="text-left flex-1">
                  <p className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                    {link.label}
                  </p>
                  <p className="text-sm text-secondary-foreground group-hover:text-accent transition-colors mt-0.5">
                    {link.value}
                  </p>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-muted-foreground group-hover:text-accent transition-colors"
                >
                  <path
                    d="M5 11L11 5M11 5H7M11 5V9"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
