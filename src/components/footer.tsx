import { profile } from '@/data/profile'

export function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Backend Developer
        </p>
      </div>
    </footer>
  )
}
