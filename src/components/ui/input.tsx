import * as React from 'react'
import { cn } from '#/lib/utils'

export const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      'min-h-12 w-full rounded-sm border border-charcoal/25 bg-ivory px-3.5 py-2.5 text-base text-charcoal outline-none transition-colors placeholder:text-charcoal/40 focus:border-amber focus:ring-2 focus:ring-amber/25 disabled:opacity-55',
      className,
    )}
    {...props}
  />
))
Input.displayName = 'Input'
