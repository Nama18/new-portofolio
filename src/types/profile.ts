export interface Profile {
  name: string
  role: string
  tagline: string
  summary: string
  experienceYears: number
  location: string
  education: {
    degree: string
    institution: string
    gpa: string
    period: string
  }
}
