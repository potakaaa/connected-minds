import { z } from 'zod'

export const preferredContactMethods = ['email', 'phone', 'either'] as const
export const enquiryTypes = [
  'consultation',
  'therapy',
  'supervision',
  'general',
] as const

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Please enter your name.')
    .max(100, 'Please keep your name under 100 characters.'),
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address.')
    .max(160),
  phone: z
    .string()
    .trim()
    .max(30, 'Please keep the phone number under 30 characters.'),
  preferredContact: z.enum(preferredContactMethods, {
    error: 'Please choose how you would prefer to be contacted.',
  }),
  enquiryType: z.enum(enquiryTypes, {
    error: 'Please choose an enquiry type.',
  }),
  message: z
    .string()
    .trim()
    .min(20, 'Please add a little more detail (at least 20 characters).')
    .max(2000, 'Please keep your message under 2,000 characters.'),
  consent: z.literal(true, {
    error: 'Please confirm that Charu may contact you about this enquiry.',
  }),
  website: z.string().max(0, 'Unable to submit this enquiry.'),
})

export type ContactFormData = z.infer<typeof contactSchema>
export type EnquiryType = (typeof enquiryTypes)[number]
