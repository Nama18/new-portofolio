import type { Experience } from '@/types/experience'

export const experiences: Experience[] = [
  {
    id: 'teknologi-digital-terdepan',
    company: 'Teknologi Digital Terdepan',
    position: 'Backend Developer',
    duration: 'Mar 2025 – Present',
    location: 'Bandung, Indonesia',
    type: 'full-time',
    responsibilities: [
      'Developed HRIS backend modules including payroll processing, attendance tracking, and leave management using Node.js and NestJS',
      'Implemented role-based access control (RBAC) for multi-role system access',
      'Owned and maintained backend API modules using Node.js and NestJS for internal business systems',
      'Developed payment backend integration and managed server configuration for development and staging environments',
      'Designed RESTful APIs with clear contracts and Swagger documentation to support frontend and partner integration',
      'Implemented PostgreSQL data access layers with attention to data consistency and query efficiency',
      'Wrote and maintained unit tests using Jest to validate business logic and reduce regression risk',
    ],
    achievements: [
      'Developed backend payment integration using NestJS, handling transaction flows in preparation for production release',
      'Designed RESTful APIs with clear contracts and Swagger documentation to support frontend and partner integration',
    ],
  },
  {
    id: 'freelance',
    company: 'Freelance',
    position: 'Web Developer',
    duration: 'Jan 2022 – Present',
    location: 'Remote',
    type: 'freelance',
    responsibilities: [
      'Developed and delivered multiple full-stack web projects for various clients using Laravel, managing the full project lifecycle independently',
      'Implemented backend logic, database integration, authentication, and admin panel features tailored to client requirements',
      'Handled deployment and post-launch support across multiple projects',
    ],
    achievements: [
      'Consistently delivered maintainable web applications on time, strengthening end-to-end ownership skills',
    ],
  },
  {
    id: 'avocado-guild',
    company: 'Avocado Guild',
    position: 'Junior Backend Developer',
    duration: 'Jul 2022 – May 2023',
    location: 'Singapore (Remote)',
    type: 'full-time',
    responsibilities: [
      'Built and maintained RESTful APIs using Node.js for platform features consumed by frontend and partner services',
      'Collaborated via Git-based workflows with cross-functional teams',
      'Integrated backend services with PostgreSQL databases',
      'Conducted API testing and debugging across environments',
      'Participated in code reviews and feature iterations',
    ],
    achievements: [
      'Reduced API-related bugs by improving request validation and error handling across production services',
    ],
  },
  {
    id: 'crimson-network',
    company: 'Crimson Network',
    position: 'Junior Backend Developer',
    duration: 'Mar 2022 – Jul 2022',
    location: 'Singapore (Remote)',
    type: 'full-time',
    responsibilities: [
      'Developed backend services and REST APIs using Node.js with PostgreSQL, outsourced to Avocado Guild',
      'Managed schema updates and query optimization',
      'Tested APIs using Postman to validate functionality and edge cases',
    ],
    achievements: [
      'Improved debugging turnaround time through consistent API testing practices',
    ],
  },
  {
    id: 'stmik-likmi',
    company: 'STMIK LIKMI',
    position: 'Intern Web Developer',
    duration: 'Aug 2021 – Mar 2022',
    location: 'Bandung, Indonesia',
    type: 'internship',
    responsibilities: [
      'Developed an internal internship management system using Laravel',
      'Implemented backend logic, database integration, and basic authentication features',
    ],
    achievements: [],
  },
]
