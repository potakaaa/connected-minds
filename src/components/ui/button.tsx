import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import { cn } from '#/lib/utils'

const buttonVariants = cva(
  'inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-sm border text-sm font-semibold tracking-[0.01em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-3 focus-visible:ring-offset-ivory disabled:pointer-events-none disabled:opacity-55',
  {
    variants: {
      variant: {
        default:
          'border-charcoal bg-charcoal px-5 py-3 text-ivory hover:border-brown hover:bg-brown',
        amber:
          'border-amber bg-amber px-5 py-3 text-white hover:border-terracotta hover:bg-terracotta',
        outline:
          'border-charcoal/40 bg-transparent px-5 py-3 text-charcoal hover:bg-charcoal hover:text-ivory',
        ghost:
          'border-transparent bg-transparent px-3 py-2 text-charcoal hover:bg-charcoal/6',
        light:
          'border-ivory/55 bg-ivory px-5 py-3 text-charcoal hover:bg-parchment',
      },
      size: {
        default: 'min-h-11',
        lg: 'min-h-12 px-6 text-[0.95rem]',
        icon: 'size-11 p-0',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
)

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { buttonVariants }
