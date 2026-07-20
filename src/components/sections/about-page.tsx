import { Link } from '@tanstack/react-router'
import { ArrowRight, Check } from 'lucide-react'
import { aboutFacts, careerNarrative } from '#/content/site'
import { LayoutGrid } from '../aceternity/layout-grid'
import { TracingBeam } from '../aceternity/tracing-beam'
import { Button } from '../ui/button'
import { EditorialImage } from '../editorial-image'

const values = [
  ['Warmth', 'A human relationship in which your experience is met with care.'],
  [
    'Collaboration',
    'The work is shaped with you, attentive to your needs and preferences.',
  ],
  [
    'Reflection',
    'Time and space to notice what may be difficult to see alone.',
  ],
  [
    'Respect',
    'An approach sensitive to culture, beliefs, identity and lived experience.',
  ],
] as const

export function AboutPage() {
  return (
    <main id="main-content" className="bg-ivory pt-[4.75rem]">
      <section className="bg-parchment px-5 pb-20 pt-14 sm:px-8 md:pb-28 md:pt-20 lg:px-12">
        <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-5">
            <EditorialImage
              src="/images/charu-mangla-goel-520.webp"
              srcSet="/images/charu-mangla-goel-520.webp 520w, /images/charu-mangla-goel-900.webp 900w"
              sizes="(max-width: 1023px) 100vw, 42vw"
              alt="Charu Mangla Goel, registered psychologist"
              loading="eager"
              className="aspect-[4/5] max-h-[49rem]"
              imgClassName="object-[50%_28%]"
            />
          </div>
          <div className="lg:col-span-7 lg:pb-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
              About Charu Mangla Goel
            </p>
            <h1 className="mt-6 max-w-[11ch] font-serif text-[clamp(3.5rem,7vw,7.5rem)] leading-[0.88] tracking-[-0.045em] text-charcoal">
              Psychology held with warmth and depth
            </h1>
            <p className="mt-9 max-w-[62ch] text-lg leading-9 text-charcoal/75">
              I am a registered psychologist with a Master’s degree in Clinical
              Psychology and a Bachelor’s degree in Counselling Psychology. I
              bring a warm, collaborative and reflective presence to my work.
            </p>
            <p className="mt-5 max-w-[62ch] leading-8 text-charcoal/68">
              For more than 15 years, I have worked psychotherapeutically with
              adolescents and adults from diverse cultural backgrounds, across
              private practice, community and hospital settings.
            </p>
          </div>
        </div>
      </section>

      <section
        className="px-5 py-24 sm:px-8 md:py-32 lg:px-12"
        aria-labelledby="qualifications-title"
      >
        <div className="mx-auto max-w-[88rem]">
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
            <header>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
                Qualifications & experience
              </p>
              <h2
                id="qualifications-title"
                className="mt-5 max-w-[12ch] font-serif text-[clamp(2.7rem,5vw,5rem)] leading-[0.96] tracking-[-0.03em]"
              >
                A practice informed by clinical depth
              </h2>
            </header>
            <div>
              <ul className="grid gap-px bg-charcoal/15 sm:grid-cols-2">
                {aboutFacts.map((fact) => (
                  <li
                    key={fact}
                    className="flex min-h-28 items-start gap-3 bg-parchment p-5 text-sm leading-6 text-charcoal/75"
                  >
                    <Check
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-terracotta"
                    />
                    {fact}
                  </li>
                ))}
              </ul>
              <TracingBeam>
                <div className="mt-16 space-y-16">
                  {careerNarrative.map((item) => (
                    <article key={item.label}>
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-terracotta">
                        {item.label}
                      </p>
                      <h3 className="mt-3 max-w-[22ch] font-serif text-[clamp(2rem,3.4vw,3.5rem)] leading-[1.02] tracking-[-0.025em]">
                        {item.title}
                      </h3>
                      <p className="mt-5 max-w-[66ch] text-[1.04rem] leading-8 text-charcoal/72">
                        {item.body}
                      </p>
                    </article>
                  ))}
                </div>
              </TracingBeam>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brown px-5 py-24 text-ivory sm:px-8 md:py-32 lg:px-12">
        <div className="mx-auto grid max-w-[88rem] gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber">
              Trauma-informed work
            </p>
            <h2 className="mt-5 max-w-[13ch] font-serif text-[clamp(2.7rem,5vw,5.2rem)] leading-[0.95] tracking-[-0.035em]">
              Safety, context and choice matter
            </h2>
            <p className="mt-8 max-w-[62ch] text-lg leading-9 text-ivory/72">
              My clinical work is grounded in trauma-informed, evidence-informed
              models of care. I have advanced knowledge and extensive experience
              supporting people recovering from complex trauma, including
              survivors of persecution.
            </p>
            <p className="mt-5 max-w-[62ch] leading-8 text-ivory/62">
              In community practice leadership, I provided clinical supervision,
              professional learning and specialist consultation to counsellors
              and service systems supporting trauma-impacted individuals.
            </p>
          </div>
          <blockquote className="border-y border-amber/45 py-10 font-serif text-[clamp(2.2rem,4vw,4.2rem)] leading-[0.98] tracking-[-0.025em] text-ivory">
            “I bring a warm, collaborative, and reflective presence to my work.”
          </blockquote>
        </div>
      </section>

      <section
        className="bg-parchment px-5 py-24 sm:px-8 md:py-32 lg:px-12"
        aria-labelledby="perspective-title"
      >
        <div className="mx-auto max-w-[88rem]">
          <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
                Teaching, research & reflection
              </p>
              <h2
                id="perspective-title"
                className="mt-5 max-w-[12ch] font-serif text-[clamp(2.6rem,5vw,5rem)] leading-[0.96] tracking-[-0.03em]"
              >
                A wider field of perspective
              </h2>
            </div>
            <div className="space-y-5 text-[1.03rem] leading-8 text-charcoal/72 lg:pt-8">
              <p>
                Alongside clinical practice, Charu has taught psychology and
                been involved with psychoanalytic research at universities in
                India, Finland and the UK.
              </p>
              <p>
                As a committed spiritual seeker, she draws on regular meditation
                practice and participation in spiritual workshops. These
                learnings are integrated respectfully, without assuming that
                clients share a spiritual or religious perspective.
              </p>
            </div>
          </div>
          <LayoutGrid>
            <figure className="col-span-2 row-span-2 overflow-hidden md:col-span-6">
              <img
                src="/images/autumn-leaves-sunlight-900.webp"
                alt="Sunlight shining through orange autumn leaves"
                loading="lazy"
                className="size-full object-cover"
              />
            </figure>
            <figure className="col-span-1 row-span-2 overflow-hidden md:col-span-3">
              <img
                src="/images/butterfly-red-flower-520.webp"
                alt="A butterfly resting on a bright red flower"
                loading="lazy"
                className="size-full object-cover"
              />
            </figure>
            <figure className="col-span-1 overflow-hidden md:col-span-3">
              <img
                src="/images/reflective-beach-sunset-960.webp"
                alt="A person reflected in the water at sunset"
                loading="lazy"
                className="size-full object-cover"
              />
            </figure>
            <div className="col-span-1 flex items-center bg-olive p-5 text-ivory md:col-span-3">
              <p className="font-serif text-2xl leading-7">
                Reflection can make room for a fuller view.
              </p>
            </div>
          </LayoutGrid>
        </div>
      </section>

      <section
        className="px-5 py-24 sm:px-8 md:py-32 lg:px-12"
        aria-labelledby="values-title"
      >
        <div className="mx-auto max-w-[88rem]">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <header>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
                Therapeutic values
              </p>
              <h2
                id="values-title"
                className="mt-5 max-w-[12ch] font-serif text-[clamp(2.6rem,5vw,5rem)] leading-[0.96] tracking-[-0.03em]"
              >
                How the space is held
              </h2>
            </header>
            <div className="border-t border-charcoal/15">
              {values.map(([title, body], index) => (
                <article
                  key={title}
                  className="grid gap-3 border-b border-charcoal/15 py-7 sm:grid-cols-[4rem_0.55fr_1fr] sm:gap-7"
                >
                  <span className="text-xs font-bold tracking-[0.18em] text-terracotta">
                    0{index + 1}
                  </span>
                  <h3 className="font-serif text-2xl">{title}</h3>
                  <p className="text-sm leading-7 text-charcoal/68">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-terracotta px-5 py-24 text-ivory sm:px-8 md:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[88rem] gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-ivory/65">
              Begin with a conversation
            </p>
            <h2 className="mt-5 max-w-[13ch] font-serif text-[clamp(3rem,5.8vw,5.8rem)] leading-[0.92] tracking-[-0.035em]">
              See whether working together feels right.
            </h2>
          </div>
          <div>
            <p className="max-w-[54ch] leading-8 text-ivory/76">
              A free 15-minute consultation offers a calm way to ask questions
              about sessions, availability and Charu’s approach.
            </p>
            <Button asChild variant="light" size="lg" className="mt-7">
              <Link to="/contact">
                Contact Charu{' '}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
