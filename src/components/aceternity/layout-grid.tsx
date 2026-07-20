import { cn } from '#/lib/utils'

export function LayoutGrid({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'grid auto-rows-[12rem] grid-cols-2 gap-2 sm:auto-rows-[15rem] md:grid-cols-12',
        className,
      )}
    >
      {children}
    </div>
  )
}
