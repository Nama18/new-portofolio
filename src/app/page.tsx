import { Hero } from '@/sections/hero'
import { About } from '@/sections/about'
import { Experience } from '@/sections/experience'
import { Skills } from '@/sections/skills'
import { FeaturedProjects } from '@/sections/featured-projects'
import { ArchitectureShowcase } from '@/sections/architecture-showcase'
import { Achievements } from '@/sections/achievements'
import { Contact } from '@/sections/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <FeaturedProjects />
      <ArchitectureShowcase />
      <Achievements />
      <Contact />
    </>
  )
}
