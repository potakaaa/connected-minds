"use client";

import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";
import * as Label from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  Flower2,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Video,
  X,
} from "lucide-react";
import { useEffect } from "react";
import type { FormEvent, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva("button", {
  variants: {
    variant: {
      primary: "button-primary",
      secondary: "button-secondary",
      ghost: "button-ghost",
    },
    size: { default: "button-default", small: "button-small", icon: "button-icon" },
  },
  defaultVariants: { variant: "primary", size: "default" },
});

function Button({
  asChild,
  className,
  variant,
  size,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

const supportAreas = [
  "Complex trauma",
  "Post-traumatic stress disorder",
  "Childhood abuse & neglect",
  "Attachment wounds",
  "Anxiety",
  "Depression",
  "Grief & loss",
  "Relationship issues",
  "Life transitions",
  "Workplace stress",
  "Self-esteem",
  "Parenting challenges",
];

const approachItems = [
  {
    number: "01",
    title: "Understand the deeper roots",
    text: "Together, we explore the thoughts, beliefs and unconscious patterns often formed early in life as ways of coping — and how they may shape your life today.",
  },
  {
    number: "02",
    title: "Meet yourself with compassion",
    text: "Therapy offers a safe, non-judgmental space to witness difficult emotions, unresolved experiences and vulnerable parts of yourself with curiosity rather than criticism.",
  },
  {
    number: "03",
    title: "Reconnect mind, body & spirit",
    text: "As hidden parts are brought into awareness, the work supports emotional regulation, more fulfilling relationships and a deeper experience of yourself as a whole.",
  },
  {
    number: "04",
    title: "Create room for new choices",
    text: "Healing can open access to joy, self-love and freedom — strengthening your sense of agency and your capacity for meaningful work, connection and change.",
  },
];

const modalityGroups = [
  {
    value: "depth",
    title: "Depth & relational therapies",
    body: "Psychodynamic, interpersonal, narrative and person-centred approaches help us understand your inner world and the relationships that shape it.",
  },
  {
    value: "trauma",
    title: "Trauma-informed care",
    body: "Trauma-informed practice and foundational EMDR are used thoughtfully, with safety, pacing and your preferences guiding the work.",
  },
  {
    value: "practical",
    title: "Present-focused support",
    body: "Cognitive Behavioural Therapy (CBT) and mindfulness can offer practical ways to notice patterns, regulate emotions and respond differently.",
  },
];

function ConsultationDialog({ children }: { children: ReactNode }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content" aria-describedby="consultation-description">
          <Dialog.Close asChild>
            <Button variant="ghost" size="icon" className="dialog-close" aria-label="Close consultation options">
              <X aria-hidden="true" />
            </Button>
          </Dialog.Close>
          <span className="eyebrow">A gentle first step</span>
          <Dialog.Title>Book a free 15-minute consultation</Dialog.Title>
          <Dialog.Description id="consultation-description">
            A short, no-obligation conversation to ask questions and see whether working together feels right.
          </Dialog.Description>
          <div className="dialog-actions">
            <Button asChild>
              <a href="tel:+61394594070"><Phone aria-hidden="true" /> Call (03) 9459 4070</a>
            </Button>
            <Button asChild variant="secondary">
              <a href="mailto:mgcharu@gmail.com?subject=Free%2015-minute%20consultation"><Mail aria-hidden="true" /> Email Charu</a>
            </Button>
          </div>
          <div className="dialog-note"><Check aria-hidden="true" /> In-person and online appointments available</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function MobileMenu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="secondary" size="icon" className="mobile-menu-trigger" aria-label="Open navigation">
          <Menu aria-hidden="true" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="mobile-menu">
          <Dialog.Title className="sr-only">Navigation</Dialog.Title>
          <Dialog.Close asChild>
            <Button variant="ghost" size="icon" className="dialog-close" aria-label="Close navigation"><X aria-hidden="true" /></Button>
          </Dialog.Close>
          <img src="/images/logo.png" alt="Connected Mind Psychology" className="mobile-logo" />
          <nav aria-label="Mobile navigation">
            {[["Approach", "#approach"], ["Support", "#support"], ["About", "#about"], ["Contact", "#contact"]].map(([label, href]) => (
              <Dialog.Close asChild key={label}><a href={href}>{label}<ArrowRight aria-hidden="true" /></a></Dialog.Close>
            ))}
          </nav>
          <ConsultationDialog><Button>Book a Free Consultation</Button></ConsultationDialog>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Consultation enquiry from ${form.get("name") || "website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nPhone: ${form.get("phone")}\nPreferred contact: ${form.get("preference")}\n\n${form.get("message")}`,
    );
    window.location.href = `mailto:mgcharu@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <Label.Root htmlFor="name">Name</Label.Root>
          <input id="name" name="name" autoComplete="name" required placeholder="Your name" />
        </div>
        <div className="field">
          <Label.Root htmlFor="phone">Phone</Label.Root>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Optional" />
        </div>
      </div>
      <div className="field">
        <Label.Root htmlFor="preference">How would you like Charu to respond?</Label.Root>
        <select id="preference" name="preference" defaultValue="Email">
          <option>Email</option><option>Phone</option>
        </select>
      </div>
      <div className="field">
        <Label.Root htmlFor="message">How can I help?</Label.Root>
        <textarea id="message" name="message" required rows={5} placeholder="Share only what feels comfortable." />
      </div>
      <Button type="submit">Prepare email <ArrowRight aria-hidden="true" /></Button>
      <p className="form-note">Your email app will open so you can review your message before sending.</p>
    </form>
  );
}

export default function Home() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (reduceMotion) elements.forEach((element) => element.classList.add("is-visible"));
    else {
      const observer = new IntersectionObserver(
        (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
        { threshold: 0.12 },
      );
      elements.forEach((element) => observer.observe(element));
      const onScroll = () => document.documentElement.style.setProperty("--parallax", `${Math.min(window.scrollY * 0.055, 48)}px`);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
    }
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    name: "Connected Mind Psychology",
    founder: "Charu Mangla Goel",
    telephone: "+61 3 9459 4070",
    email: "mgcharu@gmail.com",
    areaServed: ["Viewbank VIC", "Doncaster VIC", "Australia"],
    url: "https://www.connectedmindpsychology.com.au/",
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Connected Mind Psychology home">
          <img src="/images/logo.png" alt="" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#approach">Approach</a><a href="#support">Support</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <ConsultationDialog><Button size="small">Book a Free Consultation</Button></ConsultationDialog>
          <MobileMenu />
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="spotlight spotlight-one" aria-hidden="true" />
          <div className="spotlight spotlight-two" aria-hidden="true" />
          <div className="hero-grid" data-reveal>
            <div className="hero-copy">
              <div className="eyebrow"><span /> Psychotherapy with Charu Mangla Goel</div>
              <h1>A safe space to <em>come home</em> to yourself.</h1>
              <p className="hero-lead">Psychotherapy for healing the mind, body & spirit — with warmth, curiosity and care.</p>
              <div className="hero-actions">
                <ConsultationDialog><Button>Book a Free 15-Minute Consultation <ArrowRight aria-hidden="true" /></Button></ConsultationDialog>
                <Button asChild variant="secondary"><a href="#approach">Explore my approach <ArrowDown aria-hidden="true" /></a></Button>
              </div>
              <p className="microcopy">A gentle first conversation, with no obligation.</p>
            </div>
            <div className="hero-visual" aria-label="A person standing by the ocean at sunset">
              <div className="hero-image-wrap"><img src="/images/hero.jpg" alt="A person standing peacefully at the ocean at sunset" /></div>
              <div className="hero-note"><Flower2 aria-hidden="true" /><span>Whole-person care, grounded in <em>connection.</em></span></div>
            </div>
          </div>
          <div className="trust-strip" data-reveal>
            <span><Check aria-hidden="true" /> Registered psychologist</span>
            <span><Sparkles aria-hidden="true" /> 15+ years experience</span>
            <span><HeartHandshake aria-hidden="true" /> Medicare rebates available</span>
          </div>
        </section>

        <section className="section support-section" id="support">
          <div className="section-heading" data-reveal>
            <span className="eyebrow">How I can support you</span>
            <h2>Care for what you’re carrying.</h2>
            <p>You do not have to make sense of everything alone. Therapy can offer a steady place to begin.</p>
          </div>
          <div className="bento" data-reveal>
            <article className="bento-card bento-feature">
              <div className="card-icon"><HeartHandshake aria-hidden="true" /></div>
              <span className="card-kicker">Trauma & the past</span>
              <h3>Complex trauma, PTSD & attachment wounds</h3>
              <p>Compassionate, paced support for experiences that continue to affect safety, self-worth and relationships.</p>
              <div className="pill-list">{supportAreas.slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div>
            </article>
            <article className="bento-card bento-image"><img src="/images/approach.jpg" alt="A butterfly resting on a flower" /><div><span className="card-kicker">Emotional wellbeing</span><h3>Anxiety, depression & self-esteem</h3></div></article>
            <article className="bento-card"><span className="card-kicker">Connection</span><h3>Relationships & parenting</h3><p>Understand familiar patterns and find more room for honest, fulfilling connection.</p></article>
            <article className="bento-card card-clay"><span className="card-kicker">Change & loss</span><h3>Grief, transitions & workplace stress</h3><p>Support through the tender in-between spaces of life.</p></article>
            <article className="bento-card bento-supervision"><span className="card-kicker">For professionals</span><h3>Reflective supervision</h3><p>For counsellors, psychotherapists, social workers and other allied health professionals.</p></article>
          </div>
        </section>

        <section className="approach-section" id="approach">
          <div className="approach-photo" aria-hidden="true"><img src="/images/therapy.jpg" alt="" /></div>
          <div className="approach-layout">
            <div className="approach-intro" data-reveal>
              <span className="eyebrow">My therapeutic approach</span>
              <h2>Understanding creates the possibility for change.</h2>
              <p>Working holistically from a psychodynamic psychotherapy framework, I support you to explore the deeper roots of emotional distress — whether it appears as symptoms, behaviours or relational challenges.</p>
            </div>
            <div className="approach-steps">
              {approachItems.map((item) => <article key={item.number} className="approach-step" data-reveal><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section modalities-section">
          <div className="section-heading compact" data-reveal>
            <span className="eyebrow">Therapeutic approaches</span>
            <h2>Evidence-informed, tailored to you.</h2>
            <p>Depending on your needs and preferences, I draw from a range of complementary approaches.</p>
          </div>
          <Accordion.Root type="single" collapsible defaultValue="depth" className="accordion" data-reveal>
            {modalityGroups.map((group) => (
              <Accordion.Item value={group.value} key={group.value} className="accordion-item">
                <Accordion.Header><Accordion.Trigger><span>{group.title}</span><ChevronDown aria-hidden="true" /></Accordion.Trigger></Accordion.Header>
                <Accordion.Content><p>{group.body}</p></Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
          <div className="modality-pills" data-reveal>{["Psychodynamic", "Trauma informed", "EMDR (Foundational)", "CBT", "Interpersonal", "Narrative", "Person-centred", "Mindfulness"].map((item) => <span key={item}>{item}</span>)}</div>
        </section>

        <section className="about-section" id="about">
          <div className="about-image" data-reveal><div className="portrait-frame"><img src="/images/charu.jpg" alt="Charu Mangla Goel, registered psychologist" /></div><div className="experience-badge"><strong>15+</strong><span>years of<br />experience</span></div></div>
          <div className="about-copy" data-reveal>
            <span className="eyebrow">About Charu Mangla Goel</span>
            <h2>Warm, collaborative and deeply reflective.</h2>
            <p>I am a registered psychologist with a Master’s degree in Clinical Psychology and a Bachelor’s degree in Counselling Psychology. For over 15 years, I have worked psychotherapeutically with adolescents and adults from diverse cultural backgrounds across private practice, hospitals and the community sector.</p>
            <p>My clinical work is grounded in trauma-informed, evidence-informed models of care. I have extensive experience supporting people recovering from complex trauma, including survivors of persecution, and have worked as a Practice Lead providing supervision, professional learning and specialist consultation.</p>
            <p>I have taught psychology and been involved in psychoanalytic research at universities in India, Finland and the UK. As a committed spiritual seeker, I also draw upon meditation and spiritual learning in a way that respects each client’s unique beliefs and experiences.</p>
            <blockquote>“I bring a warm, collaborative and reflective presence to your journey toward healing, meaning and growth.”</blockquote>
          </div>
        </section>

        <section className="audience-band" data-reveal>
          <span className="eyebrow">Client focus</span>
          <h2>Adolescents, adults and elders from diverse cultural backgrounds.</h2>
          <p>In-person in Viewbank and Doncaster, or online across Australia and internationally.</p>
          <ConsultationDialog><Button>Book a Free Consultation <ArrowRight aria-hidden="true" /></Button></ConsultationDialog>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy" data-reveal>
            <span className="eyebrow">Contact Charu</span>
            <h2>Let’s begin with a conversation.</h2>
            <p>You’re welcome to get in touch for a free 15-minute consultation. Share only what feels comfortable.</p>
            <div className="contact-methods">
              <a href="tel:+61394594070"><Phone aria-hidden="true" /><span><small>Call</small>(03) 9459 4070</span></a>
              <a href="mailto:mgcharu@gmail.com"><Mail aria-hidden="true" /><span><small>Email</small>mgcharu@gmail.com</span></a>
              <div><MapPin aria-hidden="true" /><span><small>In person</small>Viewbank 3084 & Doncaster 3108</span></div>
              <div><Video aria-hidden="true" /><span><small>Online</small>Australia & internationally via Zoom</span></div>
            </div>
            <div className="medicare-note"><Check aria-hidden="true" /> Medicare rebates available</div>
          </div>
          <div data-reveal><ContactForm /></div>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><img src="/images/logo.png" alt="Connected Mind Psychology" /><p>Psychotherapy for healing the mind, body & spirit.</p></div>
        <div className="footer-links"><a href="#approach">Approach</a><a href="#support">Support</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        <div className="footer-contact"><a href="mailto:mgcharu@gmail.com">mgcharu@gmail.com</a><a href="tel:+61394594070">(03) 9459 4070</a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Connected Mind Psychology</span><span>If you are in immediate danger, call 000.</span></div>
      </footer>
      <div className="mobile-cta"><ConsultationDialog><Button>Book a Free 15-Minute Consultation</Button></ConsultationDialog></div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
