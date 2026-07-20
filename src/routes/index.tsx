import { createFileRoute } from '@tanstack/react-router'
import { HomePage } from '#/components/sections/home-page'
import { site } from '#/content/site'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title:
          'Psychologist in Viewbank & Doncaster | Connected Mind Psychology',
      },
      {
        name: 'description',
        content:
          'Charu Mangla Goel offers psychodynamic and trauma-informed psychotherapy in Viewbank and Doncaster, with online psychology sessions across Australia and internationally.',
      },
      {
        property: 'og:title',
        content: 'Connected Mind Psychology | Charu Mangla Goel',
      },
      {
        property: 'og:description',
        content:
          'Warm, reflective psychotherapy in Viewbank and Doncaster, and online across Australia and internationally.',
      },
      { property: 'og:url', content: site.url },
    ],
    links: [{ rel: 'canonical', href: site.url }],
  }),
  component: HomePage,
})
