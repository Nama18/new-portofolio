import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nathanael Mario Wistarin | Backend Developer',
  description:
    'Backend Developer with 3+ years of experience building production RESTful APIs using Node.js (Express/NestJS) and PostgreSQL. Specializing in scalable backend systems, API design, and system integration.',
  keywords: [
    'Backend Developer',
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'Express',
    'API Design',
    'System Integration',
    'TypeScript',
    'Indonesia',
    'Nathanael Mario',
  ],
  authors: [{ name: 'Nathanael Mario Wistarin' }],
  openGraph: {
    title: 'Nathanael Mario Wistarin | Backend Developer',
    description:
      'Backend Developer with 3+ years of experience building production RESTful APIs using Node.js (Express/NestJS) and PostgreSQL.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nathanael Mario Wistarin | Backend Developer',
    description:
      'Backend Developer with 3+ years of experience building production RESTful APIs using Node.js (Express/NestJS) and PostgreSQL.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
