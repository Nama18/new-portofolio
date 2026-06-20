export type SkillCategory = 'Backend' | 'Database' | 'Cloud & DevOps' | 'Tools'

export interface SkillGroup {
  category: SkillCategory
  skills: string[]
}
