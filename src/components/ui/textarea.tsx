import * as React from 'react'
import { cn } from '#/lib/utils'

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      'min-h-36 w-full resize-y rounded-sm border border-charcoal/25 bg-ivory px-3.5 py-3 text-base leading-7 text-charcoal outline-none transition-colors placeholder:text-charcoal/40 focus:border-amber focus:ring-2 focus:ring-amber/25 disabled:opacity-55',
      className,
    )}
    {...props}
  />
))
Textarea.displayName = 'Textarea'
