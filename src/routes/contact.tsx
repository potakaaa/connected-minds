import { createFileRoute } from '@tanstack/react-router'
import { ContactPage } from '#/components/sections/contact-page'
import { enquiryTypes } from '#/lib/contact-schema'
import { site } from '#/content/site'

type EnquiryType = (typeof enquiryTypes)[number]

export const Route = createFileRoute('/contact')({
  validateSearch: (
    search: Record<string, unknown>,
  ): { enquiry?: EnquiryType } => {
    const enquiry =
      typeof search.enquiry === 'string' &&
      enquiryTypes.includes(search.enquiry as EnquiryType)
        ? (search.enquiry as EnquiryType)
        : undefined
    return { enquiry }
  },
  head: () => ({
    meta: [
      { title: 'Contact Charu | Psychologist in Viewbank & Doncaster' },
      {
        name: 'description',
        content:
          'Contact Charu Mangla Goel for in-person psychology sessions in Viewbank and Doncaster or online sessions. Free 15-minute consultation; Medicare rebates available.',
      },
      {
        property: 'og:title',
        content: 'Contact Charu | Connected Mind Psychology',
      },
      {
        property: 'og:description',
        content:
          'Ask about a free 15-minute consultation, in-person sessions or online psychology appointments.',
      },
      { property: 'og:url', content: `${site.url}/contact` },
    ],
    links: [{ rel: 'canonical', href: `${site.url}/contact` }],
  }),
  component: ContactRoute,
})

function ContactRoute() {
  const { enquiry } = Route.useSearch()
  return <ContactPage defaultEnquiry={enquiry} />
}
