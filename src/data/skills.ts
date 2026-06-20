import type { SkillGroup } from '@/types/skill'

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'NestJS', 'Laravel', 'PHP', 'RESTful API Design', 'Swagger / OpenAPI', 'JWT Authentication', 'Service & Repository Pattern'],
  },
  {
    category: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'Kafka'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['Docker', 'GitHub Actions', 'CI/CD', 'Linux Server'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Postman', 'Jest', 'Swagger'],
  },
]
