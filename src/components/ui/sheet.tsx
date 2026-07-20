import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '#/lib/utils'

export const Sheet = Dialog.Root
export const SheetTrigger = Dialog.Trigger
export const SheetClose = Dialog.Close

export function SheetContent({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-charcoal/35 backdrop-blur-[2px] data-[state=open]:animate-in" />
      <Dialog.Content
        className={cn(
          'fixed inset-y-0 right-0 z-50 w-[min(88vw,24rem)] overflow-y-auto border-l border-charcoal/15 bg-ivory p-6 shadow-2xl focus:outline-none',
          className,
        )}
      >
        {children}
        <Dialog.Close className="absolute right-4 top-4 grid size-11 place-items-center rounded-sm text-charcoal transition-colors hover:bg-charcoal/7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber">
          <X aria-hidden="true" className="size-5" />
          <span className="sr-only">Close menu</span>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
}

export const SheetTitle = Dialog.Title
export const SheetDescription = Dialog.Description
