import { cn } from '#/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  className,
}: {
  eyebrow: string
  title: string
  intro?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <header
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'mx-auto max-w-3xl text-center',
        className,
      )}
    >
      <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
        {eyebrow}
      </p>
      <h2 className="max-w-[20ch] font-serif text-[clamp(2.4rem,5.5vw,5rem)] leading-[0.98] tracking-[-0.03em] text-charcoal">
        {title}
      </h2>
      {intro ? (
        <p className="mt-7 max-w-[65ch] text-[1.05rem] leading-8 text-charcoal/72">
          {intro}
        </p>
      ) : null}
    </header>
  )
}
