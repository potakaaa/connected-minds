import { Mail, MapPin, Monitor, Phone } from 'lucide-react'
import { site } from '#/content/site'
import { cn } from '#/lib/utils'

const details = [
  {
    icon: MapPin,
    label: 'In person',
    value: 'Viewbank and Doncaster, Victoria',
  },
  {
    icon: Monitor,
    label: 'Online',
    value: 'Across Australia and internationally',
  },
] as const

export function ContactDetails({
  theme = 'light',
}: {
  theme?: 'light' | 'dark'
}) {
  const dark = theme === 'dark'
  return (
    <div className="space-y-1">
      {details.map(({ icon: Icon, label, value }) => (
        <div
          key={label}
          className={cn(
            'flex gap-4 border-t py-4',
            dark ? 'border-ivory/15' : 'border-charcoal/15',
          )}
        >
          <Icon
            aria-hidden="true"
            className={cn(
              'mt-0.5 size-4 shrink-0',
              dark ? 'text-amber' : 'text-terracotta',
            )}
          />
          <p
            className={cn(
              'text-sm leading-6',
              dark ? 'text-ivory/72' : 'text-charcoal/72',
            )}
          >
            <strong
              className={cn(
                'mr-2 font-semibold',
                dark ? 'text-ivory' : 'text-charcoal',
              )}
            >
              {label}
            </strong>
            {value}
          </p>
        </div>
      ))}
      <div
        className={cn(
          'grid gap-1 border-t pt-4 sm:grid-cols-2',
          dark ? 'border-ivory/15' : 'border-charcoal/15',
        )}
      >
        <a
          href={site.phoneHref}
          className={cn(
            'flex min-h-11 items-center gap-3 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber',
            dark
              ? 'text-ivory hover:text-amber'
              : 'text-charcoal hover:text-terracotta',
          )}
        >
          <Phone aria-hidden="true" className="size-4" />
          {site.phoneDisplay}
        </a>
        <a
          href={site.emailHref}
          className={cn(
            'flex min-h-11 items-center gap-3 break-all text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber',
            dark
              ? 'text-ivory hover:text-amber'
              : 'text-charcoal hover:text-terracotta',
          )}
        >
          <Mail aria-hidden="true" className="size-4" />
          {site.email}
        </a>
      </div>
    </div>
  )
}
