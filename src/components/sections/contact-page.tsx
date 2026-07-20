import { Mail, MapPin, Phone, Video } from 'lucide-react'
import { site } from '#/content/site'
import type { EnquiryType } from '#/lib/contact-schema'
import { ContactForm } from '../contact-form'

const assurances = [
  {
    icon: MapPin,
    title: 'In person',
    detail: 'Viewbank and Doncaster, Victoria',
  },
  {
    icon: Video,
    title: 'Online',
    detail: 'Across Australia and internationally',
  },
  {
    icon: Phone,
    title: 'Free consultation',
    detail: 'A 15-minute initial conversation',
  },
  { icon: Mail, title: 'Medicare', detail: 'Rebates are available' },
] as const

export function ContactPage({
  defaultEnquiry = 'consultation',
}: {
  defaultEnquiry?: EnquiryType
}) {
  return (
    <main id="main-content" className="bg-ivory pt-[4.75rem]">
      <section className="bg-parchment px-5 pb-20 pt-14 sm:px-8 md:pb-28 md:pt-20 lg:px-12">
        <div className="mx-auto max-w-[88rem]">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
                Contact Charu
              </p>
              <h1 className="mt-6 max-w-[12ch] font-serif text-[clamp(3.5rem,7vw,7.2rem)] leading-[0.88] tracking-[-0.045em]">
                Begin with the questions you have
              </h1>
            </div>
            <div>
              <p className="max-w-[58ch] text-lg leading-9 text-charcoal/74">
                You are welcome to make initial contact without pressure. A free
                15-minute consultation can help you understand whether Charu’s
                approach and session options feel suitable.
              </p>
              <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:gap-5">
                <a
                  href={site.phoneHref}
                  className="inline-flex min-h-11 items-center gap-2 font-semibold text-charcoal underline decoration-amber underline-offset-4 hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                >
                  <Phone aria-hidden="true" className="size-4" />
                  {site.phoneDisplay}
                </a>
                <a
                  href={site.emailHref}
                  className="inline-flex min-h-11 items-center gap-2 break-all font-semibold text-charcoal underline decoration-amber underline-offset-4 hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                >
                  <Mail aria-hidden="true" className="size-4" />
                  {site.email}
                </a>
              </div>
            </div>
          </div>
          <div className="mt-14 grid gap-px bg-charcoal/15 sm:grid-cols-2 lg:grid-cols-4">
            {assurances.map(({ icon: Icon, title, detail }) => (
              <article key={title} className="bg-ivory p-5 sm:p-6">
                <Icon aria-hidden="true" className="size-4 text-terracotta" />
                <h2 className="mt-5 font-serif text-2xl">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-charcoal/65">
                  {detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-5 py-24 sm:px-8 md:py-32 lg:px-12"
        aria-labelledby="enquiry-form-title"
      >
        <div className="mx-auto grid max-w-[88rem] gap-14 lg:grid-cols-[0.68fr_1.32fr] lg:gap-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
              Enquiry form
            </p>
            <h2
              id="enquiry-form-title"
              className="mt-5 max-w-[11ch] font-serif text-[clamp(2.7rem,5vw,5rem)] leading-[0.96] tracking-[-0.03em]"
            >
              Share only what feels necessary to begin
            </h2>
            <p className="mt-7 max-w-[48ch] leading-8 text-charcoal/68">
              This form is for general enquiries and consultation requests. It
              is connected to a server-side email service only when the
              documented environment variables are configured.
            </p>
            <div className="mt-9 border-t border-charcoal/15 pt-5">
              <p className="text-sm font-semibold">Not for urgent support</p>
              <p className="mt-2 text-sm leading-7 text-charcoal/62">
                This website is not a crisis or emergency service. If you or
                someone else is in immediate danger, contact local emergency
                services.
              </p>
            </div>
          </div>
          <div className="border-t border-charcoal/20 pt-8 lg:pt-10">
            <ContactForm defaultEnquiry={defaultEnquiry} />
          </div>
        </div>
      </section>
    </main>
  )
}
