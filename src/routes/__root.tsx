import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { SiteFooter } from '#/components/site-footer'
import { SiteHeader } from '#/components/site-header'
import { site } from '#/content/site'
import appCss from '../styles/global.css?url'

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Charu Mangla Goel',
    jobTitle: 'Registered psychologist and psychotherapist',
    email: site.email,
    telephone: site.phoneDisplay,
    url: site.url,
    worksFor: { '@type': 'ProfessionalService', name: site.name },
    knowsAbout: [
      'Psychodynamic psychotherapy',
      'Trauma-informed psychotherapy',
      'Mindfulness',
      'Professional supervision',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phoneDisplay,
    areaServed: [
      { '@type': 'City', name: 'Viewbank, Victoria' },
      { '@type': 'City', name: 'Doncaster, Victoria' },
      { '@type': 'Country', name: 'Australia' },
    ],
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Viewbank',
        addressRegion: 'VIC',
        postalCode: '3084',
        addressCountry: 'AU',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Doncaster',
        addressRegion: 'VIC',
        postalCode: '3108',
        addressCountry: 'AU',
      },
    ],
  },
]

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#F4EFE5' },
      { property: 'og:site_name', content: site.name },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: `${site.url}/og.png` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: `${site.url}/og.png` },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'icon',
        type: 'image/webp',
        href: '/images/connected-mind-logo-340.webp',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Scripts />
      </body>
    </html>
  )
}
