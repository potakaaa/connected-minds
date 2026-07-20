import { cn } from '#/lib/utils'

export function BentoGrid({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-px bg-charcoal/15 md:grid-cols-12',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function BentoGridItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <article
      className={cn(
        'relative min-h-64 overflow-hidden bg-ivory p-7 md:p-9',
        className,
      )}
    >
      {children}
    </article>
  )
}
