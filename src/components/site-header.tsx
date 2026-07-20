import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import { navigation } from '#/content/site'
import { cn } from '#/lib/utils'
import { Button } from './ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 border-b border-transparent transition-[background-color,border-color,box-shadow] duration-300',
        scrolled &&
          'border-charcoal/10 bg-ivory/96 shadow-[0_4px_24px_rgba(36,35,31,0.06)] backdrop-blur-md',
      )}
    >
      <div className="mx-auto flex h-[4.75rem] max-w-[92rem] items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
        <Link
          to="/"
          aria-label="Connected Mind Psychology home"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
        >
          <img
            src="/images/connected-mind-logo-340.webp"
            width="340"
            height="101"
            alt="Connected Mind Psychology"
            className="h-auto w-[13.25rem] max-w-[58vw]"
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-0.5 xl:flex"
        >
          {navigation.map((item) =>
            item.href === '/' ||
            item.href === '/about' ||
            item.href === '/contact' ? (
              <Link
                key={item.label}
                to={item.href}
                className="flex min-h-11 items-center px-2.5 text-[0.78rem] font-semibold text-charcoal/78 transition-colors hover:text-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                activeProps={{ className: 'text-terracotta' }}
                activeOptions={{ exact: item.href === '/' }}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="flex min-h-11 items-center px-2.5 text-[0.78rem] font-semibold text-charcoal/78 transition-colors hover:text-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden xl:block">
          <Button asChild variant="amber" size="default">
            <Link to="/contact">Book a free consultation</Link>
          </Button>
        </div>

        <div className="xl:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
              >
                <Menu aria-hidden="true" className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="pr-12 font-serif text-2xl">
                Connected Mind Psychology
              </SheetTitle>
              <SheetDescription className="mt-2 text-sm leading-6 text-charcoal/65">
                Psychotherapy with Charu Mangla Goel
              </SheetDescription>
              <nav
                aria-label="Mobile navigation"
                className="mt-10 flex flex-col border-t border-charcoal/15"
              >
                {navigation.map((item) => (
                  <SheetClose asChild key={item.label}>
                    <a
                      href={item.href}
                      className="flex min-h-14 items-center border-b border-charcoal/15 text-base font-semibold text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <SheetClose asChild>
                <Button
                  asChild
                  variant="amber"
                  size="lg"
                  className="mt-8 w-full"
                >
                  <a href="/contact">Book a free 15-minute consultation</a>
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
