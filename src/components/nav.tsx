'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  const navRef = useRef<HTMLElement>(null!)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', delay: 0.3 }
      )
    }, navRef)

    return () => ctx.revert()
  }, [])

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-[#09090B]/95"
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="text-base font-semibold tracking-tight text-foreground">
          <span className="text-gradient-primary">N</span>MW
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs text-secondary-foreground hover:text-foreground transition-colors rounded-md"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
