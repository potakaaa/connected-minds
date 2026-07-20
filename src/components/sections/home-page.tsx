import { Link } from '@tanstack/react-router'
import { ArrowDown, ArrowRight, Check, ExternalLink } from 'lucide-react'
import { LazyMotion, domAnimation, useReducedMotion } from 'motion/react'
import { div as MotionDiv } from 'motion/react-m'
import {
  aboutFacts,
  careerNarrative,
  locations,
  modalities,
  orientation,
  supportGroups,
} from '#/content/site'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'
import { Button } from '../ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { BackgroundBeams } from '../aceternity/background-beams'
import { BentoGrid, BentoGridItem } from '../aceternity/bento-grid'
import { Spotlight } from '../aceternity/spotlight'
import { StickyScrollReveal } from '../aceternity/sticky-scroll-reveal'
import { TracingBeam } from '../aceternity/tracing-beam'
import { ContactDetails } from '../contact-details'
import { EditorialImage } from '../editorial-image'
import { SectionHeading } from '../section-heading'

function LogoLineMotif() {
  return (
    <div
      aria-hidden="true"
      className="line-motif absolute inset-0 opacity-[0.13]"
    >
      <span className="motif-node motif-node-a" />
      <span className="motif-node motif-node-b" />
      <span className="motif-node motif-node-c" />
      <span className="motif-node motif-node-d" />
      <i className="motif-segment motif-segment-a" />
      <i className="motif-segment motif-segment-b" />
      <i className="motif-segment motif-segment-c" />
    </div>
  )
}

function Hero() {
  const reducedMotion = useReducedMotion()
  return (
    <section className="relative isolate min-h-[52rem] overflow-hidden bg-parchment pt-[4.75rem] lg:min-h-[min(58rem,100svh)]">
      <Spotlight />
      <LogoLineMotif />
      <div className="relative mx-auto grid min-h-[calc(100svh-4.75rem)] max-w-[96rem] items-center gap-10 px-5 pb-12 pt-12 sm:px-8 lg:grid-cols-12 lg:px-12 lg:pb-16 lg:pt-16">
        <div className="z-10 lg:col-span-6 lg:pr-8 xl:col-span-5">
          <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-terracotta before:h-px before:w-8 before:bg-terracotta">
            Connected Mind Psychology
          </p>
          <h1 className="max-w-[12ch] font-serif text-[clamp(3.15rem,6.7vw,6.35rem)] leading-[0.9] tracking-[-0.045em] text-charcoal">
            Psychotherapy for healing the{' '}
            <em className="font-normal text-terracotta">
              mind, body &amp; spirit
            </em>
          </h1>
          <p className="mt-8 max-w-[61ch] text-[1.04rem] leading-8 text-charcoal/76">
            Charu offers a safe and reflective space informed by psychodynamic
            psychotherapy, trauma-informed and evidence-informed approaches, and
            mindfulness.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="amber" size="lg">
              <Link to="/contact">Book a free 15-minute consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#approach">Learn about the approach</a>
            </Button>
          </div>
          <div className="mt-9 border-t border-charcoal/18 pt-5 text-sm leading-7 text-charcoal/70">
            <p>
              <strong className="font-semibold text-charcoal">In person</strong>{' '}
              in Viewbank and Doncaster
            </p>
            <p>
              <strong className="font-semibold text-charcoal">Online</strong>{' '}
              across Australia and internationally
            </p>
            <p className="mt-2 text-xs font-semibold tracking-[0.06em] text-terracotta">
              Medicare rebates available
            </p>
          </div>
        </div>

        <LazyMotion features={domAnimation} strict>
          <MotionDiv
            className="relative lg:col-span-6 lg:col-start-7 xl:col-span-7 xl:col-start-6"
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reducedMotion ? 0 : 0.85,
              ease: [0.2, 0.65, 0.3, 1],
            }}
          >
            <EditorialImage
              src="/images/reflective-beach-sunset-960.webp"
              srcSet="/images/reflective-beach-sunset-960.webp 960w, /images/reflective-beach-sunset-1600.webp 1600w"
              sizes="(max-width: 1023px) 100vw, 58vw"
              alt="A person standing with open arms at a reflective beach during a vivid sunset"
              loading="eager"
              className="aspect-[1.16/1] shadow-[0_25px_80px_rgba(58,45,38,0.16)] sm:aspect-[16/10] lg:aspect-[0.95/1] xl:aspect-[1.15/1]"
              imgClassName="object-[54%_center]"
            />
            <EditorialImage
              src="/images/charu-mangla-goel-520.webp"
              srcSet="/images/charu-mangla-goel-520.webp 520w, /images/charu-mangla-goel-900.webp 900w"
              sizes="(max-width: 640px) 36vw, 260px"
              alt="Charu Mangla Goel, registered psychologist and psychotherapist"
              loading="eager"
              className="absolute -bottom-6 left-4 aspect-[3/4] w-[35%] max-w-[16rem] border-[7px] border-parchment bg-parchment shadow-[0_16px_42px_rgba(36,35,31,0.2)] sm:-bottom-9 sm:left-9 lg:-left-14 lg:bottom-8"
              imgClassName="object-[50%_35%]"
            />
            <p className="absolute bottom-4 right-4 max-w-44 bg-charcoal/82 px-4 py-3 text-right text-[0.68rem] uppercase leading-5 tracking-[0.17em] text-ivory backdrop-blur-sm sm:bottom-5 sm:right-5">
              A quiet space for reflection and connection
            </p>
          </MotionDiv>
        </LazyMotion>
        <a
          href="#orientation"
          aria-label="Continue to practical information"
          className="absolute bottom-6 right-6 hidden size-11 place-items-center border border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber lg:grid"
        >
          <ArrowDown aria-hidden="true" className="size-4" />
        </a>
      </div>
    </section>
  )
}

function OrientationStrip() {
  return (
    <section
      id="orientation"
      aria-labelledby="orientation-title"
      className="border-y border-charcoal/15 bg-ivory"
    >
      <h2 id="orientation-title" className="sr-only">
        Practice at a glance
      </h2>
      <div className="mx-auto grid max-w-[96rem] sm:grid-cols-2 xl:grid-cols-4">
        {orientation.map((item, index) => (
          <div
            key={item.label}
            className="border-charcoal/15 px-6 py-7 sm:border-r xl:px-8 last:border-r-0"
          >
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-terracotta">
              0{index + 1} · {item.label}
            </p>
            <p className="mt-3 max-w-[31ch] text-sm leading-6 text-charcoal/75">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Approach() {
  return (
    <section
      id="approach"
      className="scroll-mt-24 bg-ivory px-5 py-24 sm:px-8 md:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-[88rem]">
        <SectionHeading
          eyebrow="Therapeutic approach"
          title="Understanding what the distress is asking us to notice"
          intro="Charu works holistically within a psychodynamic psychotherapy framework. The stages below are a gentle way of explaining the approach—not a fixed path or a promise that therapy unfolds in a straight line."
        />
        <StickyScrollReveal />
      </div>
    </section>
  )
}

function AreasOfSupport() {
  return (
    <section
      id="support"
      className="scroll-mt-24 bg-parchment px-5 py-24 sm:px-8 md:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-[88rem]">
        <SectionHeading
          eyebrow="Areas of support"
          title="You do not need to fit your experience into one category"
          intro="People often arrive with experiences that overlap—grief can sit beside anxiety, relationships can carry older wounds, and change can unsettle a sense of self. These are some of the concerns Charu works with."
        />
        <BentoGrid>
          <BentoGridItem className="bg-terracotta text-ivory md:col-span-7 md:min-h-[28rem]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-ivory/65">
              {supportGroups[0].eyebrow}
            </p>
            <h3 className="mt-5 max-w-[15ch] font-serif text-[clamp(2.4rem,4.5vw,4.7rem)] leading-[0.96] tracking-[-0.03em]">
              {supportGroups[0].title}
            </h3>
            <ul className="mt-10 grid gap-0 border-t border-ivory/25 sm:grid-cols-2">
              {supportGroups[0].items.map((item) => (
                <li
                  key={item}
                  className="flex min-h-14 items-center gap-3 border-b border-ivory/20 text-sm"
                >
                  <Check aria-hidden="true" className="size-4 text-ivory/70" />
                  {item}
                </li>
              ))}
            </ul>
          </BentoGridItem>
          <BentoGridItem className="p-0 md:col-span-5 md:min-h-[28rem]">
            <img
              src="/images/butterfly-red-flower-900.webp"
              srcSet="/images/butterfly-red-flower-520.webp 520w, /images/butterfly-red-flower-900.webp 900w"
              sizes="(max-width: 767px) 100vw, 42vw"
              alt="A patterned butterfly resting on a red flower"
              loading="lazy"
              className="size-full object-cover"
            />
            <p className="absolute bottom-5 left-5 max-w-56 bg-ivory/92 p-4 font-serif text-xl leading-6 text-charcoal">
              Attention can begin with one small, honest detail.
            </p>
          </BentoGridItem>
          <BentoGridItem className="md:col-span-5 md:min-h-[24rem]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
              {supportGroups[1].eyebrow}
            </p>
            <h3 className="mt-5 max-w-[15ch] font-serif text-4xl leading-[1.02] tracking-[-0.025em]">
              {supportGroups[1].title}
            </h3>
            <ul className="mt-8 grid gap-2 text-sm text-charcoal/75 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
              {supportGroups[1].items.map((item) => (
                <li key={item} className="border-t border-charcoal/15 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </BentoGridItem>
          <BentoGridItem className="bg-olive text-ivory md:col-span-7 md:min-h-[24rem]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-ivory/65">
              {supportGroups[2].eyebrow}
            </p>
            <div className="mt-5 grid gap-8 sm:grid-cols-[1.15fr_0.85fr]">
              <h3 className="max-w-[15ch] font-serif text-[clamp(2.25rem,4vw,4.25rem)] leading-[0.98] tracking-[-0.025em]">
                {supportGroups[2].title}
              </h3>
              <ul className="border-t border-ivory/25 text-sm">
                {supportGroups[2].items.map((item) => (
                  <li key={item} className="border-b border-ivory/20 py-3.5">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </BentoGridItem>
          <BentoGridItem className="bg-brown text-ivory md:col-span-8 md:min-h-[22rem]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber">
              Experiences overlap
            </p>
            <blockquote className="mt-6 max-w-[23ch] font-serif text-[clamp(2.15rem,4vw,4rem)] leading-[1] tracking-[-0.025em]">
              “Therapy offers a safe, non-judgmental space to witness yourself
              with curiosity and compassion.”
            </blockquote>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-ivory/68">
              The work begins with your particular experience, not a label. The
              therapeutic approach is shaped collaboratively around your needs
              and preferences.
            </p>
          </BentoGridItem>
          <BentoGridItem className="p-0 md:col-span-4 md:min-h-[22rem]">
            <img
              src="/images/autumn-leaves-sunlight-520.webp"
              srcSet="/images/autumn-leaves-sunlight-520.webp 520w, /images/autumn-leaves-sunlight-900.webp 900w"
              sizes="(max-width: 767px) 100vw, 34vw"
              alt="Sunlight filtering through warm orange autumn leaves"
              loading="lazy"
              className="size-full object-cover"
            />
          </BentoGridItem>
        </BentoGrid>
      </div>
    </section>
  )
}

function Modalities() {
  return (
    <section
      className="bg-ivory px-5 py-24 sm:px-8 md:py-32 lg:px-12"
      aria-labelledby="modalities-title"
    >
      <div className="mx-auto max-w-[88rem]">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
              Therapeutic modalities
            </p>
            <h2
              id="modalities-title"
              className="max-w-[14ch] font-serif text-[clamp(2.5rem,5vw,4.8rem)] leading-[0.98] tracking-[-0.03em]"
            >
              Different ways of listening and understanding
            </h2>
            <p className="mt-7 max-w-[58ch] leading-8 text-charcoal/72">
              Depending on a client’s needs and preferences, Charu draws from a
              range of evidence-informed approaches. The descriptions below are
              neutral orientation, not claims about a particular result.
            </p>
          </div>
          <div>
            <Tabs
              defaultValue={modalities[0].title}
              orientation="vertical"
              className="hidden grid-cols-[15rem_1fr] gap-10 md:grid"
            >
              <TabsList aria-label="Therapeutic modalities">
                {modalities.map((item) => (
                  <TabsTrigger key={item.title} value={item.title}>
                    {item.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              <div className="border-t border-charcoal/15 pt-7">
                {modalities.map((item, index) => (
                  <TabsContent key={item.title} value={item.title}>
                    <p className="text-xs font-bold tracking-[0.2em] text-terracotta">
                      0{index + 1}
                    </p>
                    <h3 className="mt-5 font-serif text-[clamp(2.2rem,4vw,4rem)] leading-none tracking-[-0.025em]">
                      {item.title}
                    </h3>
                    <p className="mt-7 max-w-[52ch] text-lg leading-8 text-charcoal/72">
                      {item.description}
                    </p>
                  </TabsContent>
                ))}
              </div>
            </Tabs>
            <Accordion
              type="single"
              collapsible
              defaultValue="modality-0"
              className="md:hidden"
            >
              {modalities.map((item, index) => (
                <AccordionItem key={item.title} value={`modality-${index}`}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>{item.description}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutCharu() {
  return (
    <section
      className="bg-parchment px-5 py-24 sm:px-8 md:py-32 lg:px-12"
      aria-labelledby="about-charu-title"
    >
      <div className="mx-auto max-w-[88rem]">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:col-span-5">
            <EditorialImage
              src="/images/charu-mangla-goel-520.webp"
              srcSet="/images/charu-mangla-goel-520.webp 520w, /images/charu-mangla-goel-900.webp 900w"
              sizes="(max-width: 1023px) 100vw, 42vw"
              alt="Portrait of Charu Mangla Goel"
              className="aspect-[4/5] max-h-[46rem]"
              imgClassName="object-[50%_28%]"
            />
            <div className="ml-auto -mt-12 w-[82%] bg-ivory p-6 shadow-[0_16px_40px_rgba(58,45,38,0.1)] sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
                Charu Mangla Goel
              </p>
              <p className="mt-3 font-serif text-2xl leading-7">
                Registered psychologist &amp; psychotherapist
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 lg:pt-8">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
              About Charu
            </p>
            <h2
              id="about-charu-title"
              className="max-w-[14ch] font-serif text-[clamp(2.7rem,5.2vw,5.25rem)] leading-[0.96] tracking-[-0.035em]"
            >
              A warm, collaborative and reflective presence
            </h2>
            <p className="mt-8 max-w-[62ch] text-lg leading-9 text-charcoal/76">
              With more than 15 years of experience, Charu has worked
              psychotherapeutically with adolescents and adults from diverse
              cultural backgrounds. Her work is grounded in trauma-informed,
              evidence-informed care.
            </p>
            <ul className="mt-9 grid gap-px bg-charcoal/15 sm:grid-cols-2">
              {aboutFacts.map((fact) => (
                <li
                  key={fact}
                  className="bg-ivory px-5 py-5 text-sm leading-6 text-charcoal/75"
                >
                  {fact}
                </li>
              ))}
            </ul>
            <TracingBeam>
              <div className="mt-14 space-y-12">
                {careerNarrative.map((item) => (
                  <article key={item.label}>
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-terracotta">
                      {item.label}
                    </p>
                    <h3 className="mt-3 font-serif text-3xl leading-[1.05] tracking-[-0.02em]">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-[63ch] leading-8 text-charcoal/70">
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </TracingBeam>
            <p className="mt-12 max-w-[64ch] border-l-2 border-amber pl-6 leading-8 text-charcoal/72">
              Charu’s regular meditation practice and spiritual learning inform
              her work in a way that respects each client’s own beliefs and
              experiences; no spiritual or religious framework is required.
            </p>
            <Button asChild variant="outline" size="lg" className="mt-9">
              <Link to="/about">
                Read more about Charu{' '}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Supervision() {
  return (
    <section
      id="supervision"
      className="scroll-mt-24 bg-charcoal px-5 py-24 text-ivory sm:px-8 md:py-28 lg:px-12"
    >
      <div className="mx-auto grid max-w-[88rem] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber">
            Professional supervision
          </p>
          <h2 className="mt-5 max-w-[12ch] font-serif text-[clamp(2.7rem,5vw,5rem)] leading-[0.95] tracking-[-0.03em]">
            A reflective space for practitioners, too
          </h2>
        </div>
        <div className="border-t border-amber/55 pt-7">
          <p className="max-w-[62ch] text-lg leading-9 text-ivory/72">
            Charu offers professional supervision to counsellors,
            psychotherapists, social workers and other allied health
            professionals.
          </p>
          <p className="mt-5 max-w-[62ch] text-sm leading-7 text-ivory/58">
            Her background includes individual and group supervision,
            professional learning and specialist consultation in trauma-informed
            practice.
          </p>
          <Button asChild variant="light" size="lg" className="mt-8">
            <Link to="/contact" search={{ enquiry: 'supervision' }}>
              Enquire about supervision{' '}
              <ExternalLink aria-hidden="true" className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function PlaceAndAccess() {
  return (
    <section className="bg-ivory" aria-labelledby="place-title">
      <div className="relative h-[clamp(14rem,34vw,30rem)] overflow-hidden">
        <img
          src="/images/golden-grass-sunset-960.webp"
          srcSet="/images/golden-grass-sunset-960.webp 960w, /images/golden-grass-sunset-1408.webp 1408w"
          sizes="100vw"
          alt="Golden grasses silhouetted against the setting sun"
          loading="lazy"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent" />
        <p className="absolute bottom-5 left-5 max-w-md font-serif text-2xl leading-7 text-ivory sm:bottom-9 sm:left-9 sm:text-4xl sm:leading-10">
          In person, or from a place that feels accessible to you.
        </p>
      </div>
      <div className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 md:py-28 lg:px-12">
        <SectionHeading
          eyebrow="Place & access"
          title="Four ways to meet"
          intro="Exact street addresses are shared as appropriate when arranging an in-person appointment."
        />
        <div className="grid gap-px bg-charcoal/15 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((location, index) => (
            <article
              key={location.place}
              className="min-h-52 bg-ivory p-6 lg:p-7"
            >
              <p className="text-[0.65rem] font-bold tracking-[0.2em] text-terracotta">
                0{index + 1}
              </p>
              <h3 className="mt-7 font-serif text-3xl leading-none">
                {location.place}
              </h3>
              <p className="mt-3 text-sm text-charcoal/58">{location.detail}</p>
              <p className="mt-8 border-t border-charcoal/15 pt-4 text-xs font-semibold uppercase tracking-[0.12em] text-charcoal/72">
                {location.mode}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ClosingContact() {
  return (
    <section className="relative isolate overflow-hidden bg-brown px-5 py-24 text-ivory sm:px-8 md:py-32 lg:px-12">
      <img
        src="/images/golden-grass-sunset-1408.webp"
        alt=""
        loading="lazy"
        className="absolute inset-0 -z-20 size-full object-cover opacity-18"
      />
      <div className="absolute inset-0 -z-10 bg-brown/88" />
      <BackgroundBeams />
      <div className="relative mx-auto grid max-w-[88rem] gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber">
            Initial contact
          </p>
          <h2 className="mt-6 max-w-[13ch] font-serif text-[clamp(3rem,6.2vw,6.4rem)] leading-[0.9] tracking-[-0.04em]">
            A conversation can be the first, quiet step.
          </h2>
          <p className="mt-8 max-w-[61ch] text-lg leading-9 text-ivory/72">
            You are welcome to contact Charu for a free 15-minute consultation.
            There is no pressure to decide before you have had a chance to ask
            what you need to know.
          </p>
          <Button asChild variant="light" size="lg" className="mt-8">
            <Link to="/contact">Book a free consultation</Link>
          </Button>
        </div>
        <div>
          <ContactDetails theme="dark" />
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-amber">
            Medicare rebates available
          </p>
        </div>
      </div>
    </section>
  )
}

export function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <OrientationStrip />
      <Approach />
      <AreasOfSupport />
      <Modalities />
      <AboutCharu />
      <Supervision />
      <PlaceAndAccess />
      <ClosingContact />
    </main>
  )
}
