export const site = {
  name: 'Connected Mind Psychology',
  practitioner: 'Charu Mangla Goel',
  role: 'Registered psychologist and psychotherapist',
  email: 'mgcharu@gmail.com',
  phoneDisplay: '(03) 9459 4070',
  phoneHref: 'tel:+61394594070',
  emailHref: 'mailto:mgcharu@gmail.com',
  url: 'https://www.connectedmindpsychology.com.au',
} as const

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Therapeutic Approach', href: '/#approach' },
  { label: 'Areas of Support', href: '/#support' },
  { label: 'About Charu', href: '/about' },
  { label: 'Supervision', href: '/#supervision' },
  { label: 'Contact', href: '/contact' },
] as const

export const orientation = [
  {
    label: 'Who Charu works with',
    detail: 'Adolescents, adults and elders from diverse cultural backgrounds',
  },
  {
    label: 'How sessions are available',
    detail: 'In person in Viewbank and Doncaster, or online',
  },
  {
    label: 'What the practice focuses on',
    detail: 'Psychodynamic, trauma-informed and reflective psychotherapy',
  },
  {
    label: 'How to begin',
    detail: 'A free 15-minute consultation by phone, email or enquiry form',
  },
] as const

export const approachStages = [
  {
    number: '01',
    title: 'Explore what lies beneath the distress',
    body: 'Together, you can look beneath symptoms, behaviours or relational challenges to better understand the deeper roots of emotional distress.',
    image: '/images/butterfly-red-flower-900.webp',
    alt: 'A patterned butterfly resting on a vivid red flower',
  },
  {
    number: '02',
    title: 'Recognise patterns formed through earlier experiences',
    body: 'Thoughts, beliefs and unconscious patterns can begin as ways of coping early in life. Therapy offers space to notice how they may still shape relationships with yourself and others.',
    image: '/images/autumn-leaves-sunlight-900.webp',
    alt: 'Sunlight filtering through a canopy of warm autumn leaves',
  },
  {
    number: '03',
    title: 'Meet vulnerable parts with compassion',
    body: 'Painful emotions and unresolved experiences can be approached with curiosity and care, in a safe and non-judgmental therapeutic relationship.',
    image: '/images/reflective-beach-sunset-960.webp',
    alt: 'A person reflected in still water beneath a colourful beach sunset',
  },
  {
    number: '04',
    title: 'Integrate, reconnect, and make new choices',
    body: 'Bringing previously hidden parts of experience into awareness can support a more integrated sense of self and create room for different choices.',
    image: null,
    alt: '',
  },
] as const

export const supportGroups = [
  {
    eyebrow: 'Trauma & recovery',
    title: 'When earlier experiences remain present',
    items: [
      'Complex trauma',
      'Post-traumatic stress',
      'Childhood abuse and neglect',
      'Attachment wounds',
    ],
    tone: 'terracotta',
  },
  {
    eyebrow: 'Inner experience',
    title: 'When emotions feel difficult to carry alone',
    items: ['Anxiety', 'Depression', 'Grief and loss', 'Self-esteem'],
    tone: 'ivory',
  },
  {
    eyebrow: 'Relationships & change',
    title: 'When life asks for new ways of relating',
    items: [
      'Relationship concerns',
      'Life transitions',
      'Parenting challenges',
      'Workplace stress',
    ],
    tone: 'olive',
  },
] as const

export const modalities = [
  {
    title: 'Psychodynamic',
    description:
      'Explores how earlier experiences and unconscious patterns may shape present emotions, relationships and ways of coping.',
  },
  {
    title: 'Trauma-informed',
    description:
      'Keeps safety, choice, trust and the wider context of trauma central to how the work is approached.',
  },
  {
    title: 'Cognitive Behavioural Therapy',
    description:
      'Pays attention to the relationship between thoughts, feelings and behaviour, with approaches selected according to individual needs.',
  },
  {
    title: 'EMDR — foundational',
    description:
      'Charu lists foundational EMDR among the approaches she may draw upon, depending on a client’s needs and preferences.',
  },
  {
    title: 'Interpersonal',
    description:
      'Considers relationships, roles and recurring interpersonal patterns as part of understanding current distress.',
  },
  {
    title: 'Narrative',
    description:
      'Creates room to examine the stories through which people understand themselves and their experiences.',
  },
  {
    title: 'Person-centred',
    description:
      'Centres the client’s experience within a warm, collaborative and respectful therapeutic relationship.',
  },
  {
    title: 'Mindfulness',
    description:
      'May include gentle attention to present-moment experience, used in a way that respects each person’s preferences and beliefs.',
  },
] as const

export const aboutFacts = [
  'Master’s degree in Clinical Psychology',
  'Bachelor’s degree in Counselling Psychology',
  'More than 15 years of clinical experience',
  'Private practice, community and hospital settings',
] as const

export const careerNarrative = [
  {
    label: 'Clinical practice',
    title: 'Psychotherapy across cultures and life stages',
    body: 'Charu has worked psychotherapeutically with adolescents and adults from diverse cultural backgrounds across private practice, community and hospital settings.',
  },
  {
    label: 'Trauma-informed work',
    title: 'Knowledge grounded in trauma recovery',
    body: 'Her clinical work is grounded in trauma-informed, evidence-informed models of care, with advanced knowledge and experience supporting people recovering from complex trauma, including survivors of persecution.',
  },
  {
    label: 'Leadership & supervision',
    title: 'Supporting practitioners and service systems',
    body: 'As a Practice Lead in the community sector, Charu provided clinical supervision, professional learning and specialist consultation to counsellors and services supporting trauma-impacted people.',
  },
  {
    label: 'Teaching & research',
    title: 'An international academic perspective',
    body: 'Alongside clinical practice, Charu has taught psychology and been involved with psychoanalytic research at universities in India, Finland and the UK.',
  },
] as const

export const locations = [
  { place: 'Viewbank', detail: 'Victoria 3084', mode: 'In-person sessions' },
  { place: 'Doncaster', detail: 'Victoria 3108', mode: 'In-person sessions' },
  { place: 'Across Australia', detail: 'Via Zoom', mode: 'Online sessions' },
  { place: 'Internationally', detail: 'Via Zoom', mode: 'Online availability' },
] as const
