import { createServerFn } from '@tanstack/react-start'
import { getRequestHeader } from '@tanstack/react-start/server'
import { contactSchema } from './contact-schema'

type RateEntry = { count: number; resetAt: number }
const rateLimitStore = new Map<string, RateEntry>()
const WINDOW_MS = 15 * 60 * 1000
const MAX_ATTEMPTS = 3

function checkRateLimit(key: string) {
  const now = Date.now()
  const current = rateLimitStore.get(key)
  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + WINDOW_MS })
    return true
  }
  if (current.count >= MAX_ATTEMPTS) return false
  current.count += 1
  return true
}

export const submitContact = createServerFn({ method: 'POST' })
  .validator(contactSchema)
  .handler(async ({ data }) => {
    if (data.website) {
      return {
        ok: false as const,
        message:
          'We could not send this enquiry. Please call or email Charu instead.',
      }
    }

    const forwardedFor = getRequestHeader('x-forwarded-for')
      ?.split(',')[0]
      ?.trim()
    const clientKey = `${forwardedFor || 'local'}:${data.email.toLowerCase()}`
    if (!checkRateLimit(clientKey)) {
      return {
        ok: false as const,
        message:
          'There have been several recent attempts. Please wait 15 minutes, or call or email Charu directly.',
      }
    }

    const apiKey = process.env.RESEND_API_KEY
    const to = process.env.CONTACT_EMAIL_TO
    const from = process.env.CONTACT_EMAIL_FROM
    if (!apiKey || !to || !from) {
      return {
        ok: false as const,
        message:
          'The secure email connection is not configured yet. Please call (03) 9459 4070 or email mgcharu@gmail.com.',
      }
    }

    const labels = {
      consultation: 'Free consultation',
      therapy: 'Therapy enquiry',
      supervision: 'Professional supervision',
      general: 'General enquiry',
    } as const

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `Website enquiry: ${labels[data.enquiryType]}`,
        text: [
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          `Phone: ${data.phone || 'Not provided'}`,
          `Preferred contact: ${data.preferredContact}`,
          `Enquiry type: ${labels[data.enquiryType]}`,
          '',
          data.message,
        ].join('\n'),
      }),
    })

    if (!response.ok) {
      return {
        ok: false as const,
        message:
          'Your message could not be sent. Nothing has been submitted. Please call or email Charu instead.',
      }
    }

    return {
      ok: true as const,
      message:
        'Thank you. Your enquiry has been sent to Charu. She can respond using your preferred contact method.',
    }
  })
