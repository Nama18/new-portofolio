import { cn } from '@/lib/utils'

interface TechBadgeProps {
  children: string
  className?: string
}

export function TechBadge({ children, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-normal border border-border bg-muted/30 text-secondary-foreground',
        className
      )}
    >
      {children}
    </span>
  )
}
