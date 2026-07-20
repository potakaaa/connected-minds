# Connected Mind Psychology

A production-focused redesign of [connectedmindpsychology.com.au](https://www.connectedmindpsychology.com.au/) built with TanStack Start, React, TypeScript, file-based TanStack Router, Vite, Tailwind CSS v4, shadcn-style Radix primitives, restrained Aceternity-inspired interactions, Motion for React, Lucide and Zod.

## Requirements

- Node.js 22 or later
- pnpm 10 or later

No npm or Yarn workflow is supported by this project.

## Install and run locally

```bash
pnpm install
pnpm dev
```

The development server runs at `http://localhost:3000` by default.

## Production checks and build

```bash
pnpm typecheck
pnpm lint
pnpm build
pnpm preview
```

TanStack Router generates `src/routeTree.gen.ts` during development and production builds. The production client and server output is created by TanStack Start/Vite in `dist`.

## Environment variables

Copy `.env.example` to `.env.local` and configure:

```dotenv
RESEND_API_KEY=re_...
CONTACT_EMAIL_TO=mgcharu@gmail.com
CONTACT_EMAIL_FROM=Connected Mind Psychology <website@your-verified-domain.com>
```

`RESEND_API_KEY` is server-only. Never prefix it with `VITE_` or expose it to the browser.

## Contact-form configuration

The form calls a real TanStack Start server function in `src/lib/contact.functions.ts`. It validates the payload on the client and server with the shared Zod schema, includes a honeypot, and applies a basic in-memory limit of three attempts per email/IP combination per 15 minutes.

The form does **not** report success unless the configured Resend request succeeds. If the provider is missing or returns an error, the visitor receives a calm, explicit message that nothing was submitted and is given Charu’s phone number and email address.

Before launch:

1. Create or select a Resend account.
2. Verify the sending domain.
3. Set `CONTACT_EMAIL_FROM` to an address on that verified domain.
4. Configure all three variables in the production host.
5. Send test enquiries from mobile and desktop and confirm delivery, reply-to behaviour and spam placement.

The included rate limit is deliberately lightweight. For horizontally scaled or high-volume hosting, replace the in-memory map with a shared edge/KV or Redis-backed limiter.

## Netlify deployment

The project includes Netlify’s official TanStack Start Vite adapter and a root `netlify.toml`. This preserves SSR, file-based routes and TanStack Start server functions—including the contact form. Netlify generates the required serverless function automatically; do not configure a custom Functions directory.

When importing the Git repository in Netlify, use:

| Setting             | Value            |
| ------------------- | ---------------- |
| Branch to deploy    | `main`           |
| Base directory      | Leave blank      |
| Build command       | `pnpm run build` |
| Publish directory   | `dist/client`    |
| Functions directory | Leave blank      |

The same build settings are committed in `netlify.toml`, so Netlify should detect them automatically. Node.js 22 is also pinned there.

Add these production environment variables in **Site configuration → Environment variables**:

| Variable             | Value                                                                                                                    |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `RESEND_API_KEY`     | The Resend secret API key                                                                                                |
| `CONTACT_EMAIL_TO`   | `mgcharu@gmail.com`                                                                                                      |
| `CONTACT_EMAIL_FROM` | A sender on the verified Resend domain, for example `Connected Mind Psychology <website@connectedmindpsychology.com.au>` |

Do not place the Resend secret in the repository. The first deploy can complete without it, but the contact form will intentionally report that email is not configured until all three values are present.

Before changing DNS from the existing Squarespace site:

1. Deploy to a private preview URL.
2. Verify `/`, `/about`, `/contact`, `/home`, `/robots.txt` and `/sitemap.xml`.
3. Test the configured contact email path end-to-end.
4. Confirm canonical URLs and the `og.png` social card use the production domain.
5. Preserve the `/home` redirect to `/`.
6. Update DNS only after approval and keep a rollback path to the existing site.

## Design rationale

The visual system treats the practice as an intimate editorial sanctuary rather than a clinic directory. Newsreader creates a reflective, book-like cadence while Manrope keeps practical information and forms clear. The existing photography carries the emotional tone: the reflective shore establishes a threshold, the butterfly and autumn leaves support the therapeutic narrative, Charu’s portrait anchors the work in a real person, and golden grass closes the experience with warmth.

Layouts move between open reading space, fine rules, offset photography and a small number of structured panels. The logo’s connected geometry is translated into quiet CSS line motifs rather than decorative technology effects. Motion is limited to navigation state, a restrained hero entrance and the desktop therapeutic-approach reveal; mobile and reduced-motion experiences receive simpler sequences.

Trauma-informed UX choices include predictable navigation, highly visible direct contact details, no urgency language, no invented outcomes, no content hidden behind hover, explicit form feedback, a warning against sharing sensitive or emergency information, and a mobile-specific vertical therapy narrative.

## Source content and image audit

The rebuild was audited against the live Home, About and Contact pages. Preserved verified information includes:

- Charu Mangla Goel’s name and registered psychologist role
- Master’s degree in Clinical Psychology and Bachelor’s degree in Counselling Psychology
- More than 15 years of experience
- Work with adolescents and adults from diverse cultural backgrounds
- Private practice, community and hospital experience
- Trauma-informed recovery knowledge, Practice Lead and supervision experience
- Teaching and psychoanalytic research across universities in India, Finland and the UK
- The listed client concerns and therapeutic modalities
- In-person availability in Viewbank and Doncaster
- Online availability across Australia and internationally
- Phone `(03) 9459 4070`, email `mgcharu@gmail.com`, free 15-minute consultation and Medicare rebate note

Copy was lightly edited for hierarchy, grammar and readability without changing its clinical meaning. Neutral modality descriptions explain terminology without making effectiveness or outcome claims.

## Content decisions requiring confirmation

These items were not fabricated and must be confirmed before launch:

- Current appointment availability and usual response time
- Fees, cancellation policy and Medicare rebate amount or eligibility details
- Whether adolescents, adults **and elders** should remain the preferred public client-focus wording (the current Home page says all three; the About copy says adolescents and adults)
- Whether international online work is permitted for every country and jurisdiction, or needs qualification
- Exact street addresses and whether either should be published (the site intentionally lists suburb and postcode only)
- AHPRA registration number, if Charu wants it displayed publicly
- Privacy policy, data-retention period and the preferred emergency/crisis resource wording
- The final verified-domain sender address for the contact form
- Whether foundational EMDR needs additional public wording or credential context
- Whether professional supervision requires its own fee, eligibility or booking information

## Images, attribution and licensing

The six existing website assets were downloaded into `public/images/originals` and locally optimised into responsive WebP derivatives in `public/images`. Nothing is hotlinked.

- Connected Mind Psychology logo — existing practice asset; ownership/licensing should be confirmed by the practice.
- Charu Mangla Goel portrait — existing practice asset; consent for continued publication should be confirmed.
- Reflective beach sunset, butterfly on red flower and autumn leaves — existing site assets delivered through Squarespace with Unsplash-style filenames; the original photographer and Unsplash licence records were not exposed in the page markup and should be confirmed from the Squarespace media library.
- Golden grass sunset — existing site asset; original creator/licensing should be confirmed from the Squarespace media library.
- `public/og.png` — bespoke social card created for this redesign using the existing beach and logo assets.
- Newsreader and Manrope — open-source fonts from Google Fonts; retain their upstream licence terms when redistributing.

## Project structure

```text
src/routes                 File-based routes and page metadata
src/components             Shared layout and content components
src/components/ui          shadcn-style accessible Radix primitives
src/components/aceternity  SSR-safe, restyled interaction ideas
src/components/sections    Home, About and Contact compositions
src/content                Verified practice content
src/lib                    Validation, utilities and server function
src/styles                 Tailwind v4 tokens and global styles
public/images              Responsive optimised assets
public/images/originals    Highest-quality downloaded source assets
```

## Accessibility and performance notes

- Semantic landmarks and one page-level heading per route
- Skip link, visible focus rings and keyboard-accessible menus, tabs, accordions, selects and checkbox
- Minimum 44px interactive targets
- Inline form errors with associated labels and `aria-describedby`
- Reduced-motion styles and mobile alternatives to sticky interactions
- Responsive `srcset` for key imagery and lazy loading below the fold
- Locally hosted fonts and assets, with no client-side analytics or tracking
- Route-level splitting through TanStack Router’s file-based routing

Run a production Lighthouse and screen-reader pass against the final deployment because network, hosting headers and the configured email provider affect results beyond the local build.
