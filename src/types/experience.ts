export interface Experience {
  id: string
  company: string
  position: string
  duration: string
  location: string
  type: 'full-time' | 'freelance' | 'internship' | 'part-time'
  responsibilities: string[]
  achievements: string[]
}
