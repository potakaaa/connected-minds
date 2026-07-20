import { createFileRoute } from '@tanstack/react-router'
import { AboutPage } from '#/components/sections/about-page'
import { site } from '#/content/site'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About Charu Mangla Goel | Connected Mind Psychology' },
      {
        name: 'description',
        content:
          'Meet Charu Mangla Goel, a registered psychologist with more than 15 years of experience in psychodynamic, trauma-informed psychotherapy, leadership and supervision.',
      },
      {
        property: 'og:title',
        content: 'About Charu Mangla Goel | Connected Mind Psychology',
      },
      {
        property: 'og:description',
        content:
          'Clinical experience, trauma-informed practice, supervision, teaching and the reflective values behind Charu’s work.',
      },
      { property: 'og:url', content: `${site.url}/about` },
    ],
    links: [{ rel: 'canonical', href: `${site.url}/about` }],
  }),
  component: AboutPage,
})
