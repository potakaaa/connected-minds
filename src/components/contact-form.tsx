import { useState } from 'react'
import { LoaderCircle, Send } from 'lucide-react'
import { contactSchema } from '#/lib/contact-schema'
import type { ContactFormData, EnquiryType } from '#/lib/contact-schema'
import { submitContact } from '#/lib/contact.functions'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Textarea } from './ui/textarea'

type ContactFormValues = Omit<ContactFormData, 'consent'> & { consent: boolean }
type Errors = Partial<Record<keyof ContactFormValues, string>>

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  preferredContact: 'email',
  enquiryType: 'consultation',
  message: '',
  consent: false,
  website: '',
}

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string
  label: string
  optional?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 flex items-baseline justify-between gap-3 text-sm font-semibold text-charcoal"
      >
        {label}
        {optional ? (
          <span className="text-xs font-normal text-charcoal/52">Optional</span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-2 text-sm font-medium text-terracotta"
        >
          {error}
        </p>
      ) : null}
    </div>
  )
}

export function ContactForm({
  defaultEnquiry = 'consultation',
}: {
  defaultEnquiry?: EnquiryType
}) {
  const [values, setValues] = useState<ContactFormValues>({
    ...initialValues,
    enquiryType: defaultEnquiry,
  })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<{
    type: 'idle' | 'error' | 'success'
    message: string
  }>({ type: 'idle', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const update = <TField extends keyof ContactFormValues>(
    key: TField,
    value: ContactFormValues[TField],
  ) => {
    setValues((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus({ type: 'idle', message: '' })
    const parsed = contactSchema.safeParse(values)
    if (!parsed.success) {
      const nextErrors: Errors = {}
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof ContactFormValues | undefined
        if (field && !nextErrors[field]) nextErrors[field] = issue.message
      }
      setErrors(nextErrors)
      const firstField = parsed.error.issues[0]?.path[0]
      if (typeof firstField === 'string')
        document.getElementById(firstField)?.focus()
      setStatus({
        type: 'error',
        message:
          'Please review the highlighted fields. Your enquiry has not been sent.',
      })
      return
    }

    setSubmitting(true)
    try {
      const result = await submitContact({ data: parsed.data })
      setStatus({
        type: result.ok ? 'success' : 'error',
        message: result.message,
      })
      if (result.ok) {
        setValues({ ...initialValues, enquiryType: defaultEnquiry })
        setErrors({})
      }
    } catch {
      setStatus({
        type: 'error',
        message:
          'Your enquiry could not be sent. Nothing has been submitted. Please call or email Charu instead.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-6"
      aria-describedby="form-introduction"
    >
      <p id="form-introduction" className="text-sm leading-7 text-charcoal/65">
        Only general contact details are needed. Please do not use this form to
        share clinical records or highly sensitive health information.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name}>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update('name', event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <Input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update('email', event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
        </Field>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="phone" label="Phone" optional error={errors.phone}>
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => update('phone', event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
        </Field>
        <Field
          id="preferredContact"
          label="Preferred contact method"
          error={errors.preferredContact}
        >
          <Select
            value={values.preferredContact}
            onValueChange={(value: ContactFormData['preferredContact']) =>
              update('preferredContact', value)
            }
          >
            <SelectTrigger
              id="preferredContact"
              aria-invalid={Boolean(errors.preferredContact)}
              aria-describedby={
                errors.preferredContact ? 'preferredContact-error' : undefined
              }
            >
              <SelectValue placeholder="Choose a contact method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="phone">Phone</SelectItem>
              <SelectItem value="either">Either email or phone</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>
      <Field
        id="enquiryType"
        label="General enquiry type"
        error={errors.enquiryType}
      >
        <Select
          value={values.enquiryType}
          onValueChange={(value: EnquiryType) => update('enquiryType', value)}
        >
          <SelectTrigger
            id="enquiryType"
            aria-invalid={Boolean(errors.enquiryType)}
            aria-describedby={
              errors.enquiryType ? 'enquiryType-error' : undefined
            }
          >
            <SelectValue placeholder="Choose an enquiry type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="consultation">
              Free 15-minute consultation
            </SelectItem>
            <SelectItem value="therapy">Therapy enquiry</SelectItem>
            <SelectItem value="supervision">
              Professional supervision
            </SelectItem>
            <SelectItem value="general">General enquiry</SelectItem>
          </SelectContent>
        </Select>
      </Field>
      <Field id="message" label="Message" error={errors.message}>
        <Textarea
          id="message"
          name="message"
          value={values.message}
          onChange={(event) => update('message', event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={`message-guidance${errors.message ? ' message-error' : ''}`}
        />
        <p
          id="message-guidance"
          className="mt-2 text-sm leading-6 text-charcoal/58"
        >
          Please do not include urgent, highly sensitive or emergency
          information. This form is not an emergency or crisis service.
        </p>
      </Field>
      <div
        className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="website">Leave this field empty</label>
        <Input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => update('website', event.target.value)}
        />
      </div>
      <div>
        <div className="flex items-start gap-3">
          <Checkbox
            id="consent"
            checked={values.consent}
            onCheckedChange={(checked) => update('consent', checked === true)}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? 'consent-error' : undefined}
          />
          <label
            htmlFor="consent"
            className="text-sm leading-6 text-charcoal/72"
          >
            I consent to Charu using these details to respond to my enquiry.
          </label>
        </div>
        {errors.consent ? (
          <p
            id="consent-error"
            role="alert"
            className="mt-2 text-sm font-medium text-terracotta"
          >
            {errors.consent}
          </p>
        ) : null}
      </div>
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Button type="submit" variant="amber" size="lg" disabled={submitting}>
          {submitting ? (
            <LoaderCircle
              aria-hidden="true"
              className="size-4 animate-spin motion-reduce:animate-none"
            />
          ) : (
            <Send aria-hidden="true" className="size-4" />
          )}
          {submitting ? 'Sending your enquiry…' : 'Send enquiry'}
        </Button>
        <p
          aria-live="polite"
          role="status"
          className={
            status.type === 'error'
              ? 'max-w-xl text-sm leading-6 text-terracotta'
              : status.type === 'success'
                ? 'max-w-xl text-sm font-medium leading-6 text-olive'
                : 'sr-only'
          }
        >
          {status.message}
        </p>
      </div>
    </form>
  )
}
