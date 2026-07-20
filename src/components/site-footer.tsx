import { Link } from '@tanstack/react-router'
import { Mail, Phone } from 'lucide-react'
import { navigation, site } from '#/content/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-ivory/12 bg-charcoal text-ivory">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-14 sm:px-8 md:grid-cols-[1.3fr_0.8fr_0.8fr] lg:px-12 lg:py-20">
        <div>
          <img
            src="/images/connected-mind-logo-340.webp"
            width="340"
            height="101"
            alt="Connected Mind Psychology"
            loading="lazy"
            className="w-60 rounded-sm bg-ivory/95 px-3 py-2"
          />
          <p className="mt-6 max-w-md text-sm leading-7 text-ivory/65">
            A warm, collaborative and reflective psychology practice offering
            in-person sessions in Viewbank and Doncaster, and online sessions.
          </p>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-amber">
            Navigate
          </h2>
          <ul className="mt-5 space-y-1">
            {navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-sm text-ivory/75 hover:text-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-amber">
            Contact
          </h2>
          <address className="mt-5 space-y-2 not-italic">
            <a
              href={site.phoneHref}
              className="flex min-h-11 items-center gap-3 text-sm text-ivory/75 hover:text-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
            >
              <Phone aria-hidden="true" className="size-4" />
              {site.phoneDisplay}
            </a>
            <a
              href={site.emailHref}
              className="flex min-h-11 items-center gap-3 break-all text-sm text-ivory/75 hover:text-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
            >
              <Mail aria-hidden="true" className="size-4" />
              {site.email}
            </a>
          </address>
          <p className="mt-5 text-xs leading-6 text-ivory/55">
            Medicare rebates available.
          </p>
        </div>
      </div>
      <div className="border-t border-ivory/10 px-5 py-5 text-center text-xs text-ivory/45 sm:px-8">
        © Connected Mind Psychology ·{' '}
        <Link
          to="/contact"
          className="underline underline-offset-4 hover:text-ivory"
        >
          Contact Charu
        </Link>
      </div>
    </footer>
  )
}
