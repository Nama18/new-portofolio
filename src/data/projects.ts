import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'payment-backend-integration',
    name: 'Payment Backend Integration',
    description:
      'Backend payment integration system built with NestJS, handling transaction flows, payment gateway communication, and preparing the system for production release.',
    techStack: ['NestJS', 'Node.js', 'PostgreSQL', 'Jest', 'Swagger'],
    responsibilities: [
      'Developed payment backend integration handling transaction flows',
      'Designed RESTful API contracts with Swagger documentation',
      'Wrote unit tests with Jest to validate business logic',
    ],
    contributions: [
      'Developed backend payment integration using NestJS, handling transaction flows in preparation for production release',
      'Designed RESTful APIs with clear contracts for partner integration',
    ],
    trace: 'Teknologi Digital Terdepan – Backend Developer (Mar 2025 – Present)',
  },
  {
    id: 'internal-hris-management-system',
    name: 'Internal HRIS Management System',
    description:
      'Backend system for internal HR management built with Node.js and NestJS, handling payroll processing, attendance tracking, leave management, and role-based access control (RBAC).',
    techStack: ['Node.js', 'NestJS', 'PostgreSQL', 'Swagger', 'Docker', 'JWT'],
    responsibilities: [
      'Developed payroll processing, attendance tracking, and leave management backend modules',
      'Implemented role-based access control (RBAC) for multi-role system access',
      'Designed RESTful API contracts with Swagger documentation',
      'Managed and configured development and staging servers',
    ],
    contributions: [
      'Built payroll, attendance, and leave management modules serving HR operational needs',
      'Implemented RBAC ensuring proper access segregation across user roles',
    ],
    trace: 'Teknologi Digital Terdepan – Backend Developer (Mar 2025 – Present)',
  },
  {
    id: 'internal-business-system-apis',
    name: 'Internal Business System APIs',
    description:
      'General-purpose backend API modules for internal business systems, built with Node.js and NestJS, serving cross-functional teams with well-documented endpoints and reliable data access layers.',
    techStack: ['Node.js', 'NestJS', 'PostgreSQL', 'Swagger', 'Docker'],
    responsibilities: [
      'Owned and maintained backend API modules using Node.js and NestJS for internal business systems',
      'Implemented PostgreSQL data access layers with attention to data consistency and query efficiency',
      'Managed and configured development and staging servers',
    ],
    contributions: [
      'Implemented PostgreSQL data access layers with attention to data consistency and query efficiency',
      'Managed and configured development and staging servers including environment setup and deployment support',
    ],
    trace: 'Teknologi Digital Terdepan – Backend Developer (Mar 2025 – Present)',
  },
  {
    id: 'rest-api-platform',
    name: 'REST API Platform',
    description:
      'RESTful API platform serving frontend and partner services, built with Node.js and PostgreSQL. Focused on request validation, error handling, and reliable endpoint delivery.',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Postman', 'Git'],
    responsibilities: [
      'Built and maintained RESTful APIs consumed by frontend and partner services',
      'Integrated backend services with PostgreSQL databases',
      'Conducted API testing and debugging across environments',
      'Participated in code reviews and feature iterations',
    ],
    contributions: [
      'Reduced API-related bugs by improving request validation and error handling across production services',
    ],
    trace: 'Avocado Guild – Junior Backend Developer (Jul 2022 – May 2023)',
  },
  {
    id: 'internship-management-system',
    name: 'Internship Management System',
    description:
      'Internal web application for managing internship programs, built with Laravel. Features included backend logic, database integration, and authentication.',
    techStack: ['Laravel', 'PHP', 'MySQL', 'Authentication'],
    responsibilities: [
      'Developed an internal internship management system using Laravel',
      'Implemented backend logic, database integration, and basic authentication features',
    ],
    contributions: [
      'Delivered a fully functional internship management system used internally by the institution',
    ],
    trace: 'STMIK LIKMI – Intern Web Developer (Aug 2021 – Mar 2022)',
  },
]
