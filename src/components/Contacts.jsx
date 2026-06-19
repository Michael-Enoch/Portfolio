import axios from 'axios'
import { useState } from 'react'
import {
  FiArrowUpRight,
  FiGithub,
  FiInstagram,
  FiMail,
  FiMessageCircle,
  FiSend,
} from 'react-icons/fi'
import toast from 'react-hot-toast'
import { PRIMARY_BUTTON, SHELL } from '../styles'
import SectionIntro, { SectionRail } from './SectionIntro'

const CONTACT_EMAIL = 'mike.saviour08@gmail.com'
const INSTAGRAM_URL = 'https://www.instagram.com/myst_erio98/'
const GITHUB_URL = 'https://github.com/Michael-Enoch'

const WHATSAPP_NUMBER = '2349011234375'
const WHATSAPP_MESSAGE =
  "Hi Michael, I came from your portfolio and I'd like to discuss a project."

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

const inputClass =
  'w-full max-w-full border border-line bg-transparent px-4 text-ink outline-none transition placeholder:text-[#878b87] focus:border-brand focus:shadow-[0_0_0_0.1875rem_rgba(51,92,255,0.15)]'

const channelClass =
  'group grid min-h-12 w-full max-w-full grid-cols-[1.375rem_minmax(0,1fr)_auto] items-center gap-3 overflow-hidden border border-line bg-transparent px-3.5 text-left text-xs font-extrabold transition hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white hover:[&_span]:text-white'

export default function Contact() {
  const [loading, setLoading] = useState(false)

  const createMailtoLink = ({ name = '', email = '', projectType = '', message = '' } = {}) => {
    const subject = encodeURIComponent(`Portfolio project inquiry from ${name || 'a visitor'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\nMessage:\n${message}`
    )

    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  const sendEmail = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const name = String(formData.get('name') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const projectType = String(formData.get('projectType') || '').trim()
    const message = String(formData.get('message') || '').trim()

    if (!name || !email || !projectType || !message) {
      toast.error('Please complete every field before sending.')
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(email)) {
      toast.error('Please enter a valid email address.')
      return
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      reply_to: email,
      project_type: projectType,
      message,
      sent_from: 'Portfolio contact form',
    }

    if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
      toast.error('Email service is not configured yet. Opening email instead.')

      window.location.href = createMailtoLink({
        name,
        email,
        projectType,
        message,
      })

      return
    }

    setLoading(true)

    try {
      await axios.post(
        'https://api.emailjs.com/api/v1.0/email/send',
        {
          service_id: emailConfig.serviceId,
          template_id: emailConfig.templateId,
          user_id: emailConfig.publicKey,
          template_params: templateParams,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      toast.success('Your message has been sent.')
      form.reset()
    } catch (error) {
      console.error('EmailJS send failed:', error)
      toast.error('The message could not be sent. Please use email, WhatsApp, or Instagram instead.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      className="relative overflow-hidden border-b border-line bg-paper-bright py-20 text-ink sm:py-24 lg:py-32 xl:py-[9.375rem]"
      id="contact"
    >
      <SectionRail />

      <div
        className={`${SHELL} grid min-w-0 grid-cols-1 gap-12 lg:grid-cols-[minmax(18.75rem,.75fr)_minmax(0,1.55fr)] lg:gap-20 xl:gap-32`}
      >
        <div className="min-w-0">
          <SectionIntro
            number="07"
            title="Have a project in mind?"
            description="Share what you want to build, improve, or launch. I’ll use your message to understand the right next step."
          />

          <div
            className="ml-5 mt-8 grid min-w-0 grid-cols-1 gap-2 sm:ml-8 sm:grid-cols-2 lg:grid-cols-1"
            aria-label="Direct contact options"
          >
            <a className={channelClass} href={`mailto:${CONTACT_EMAIL}`}>
              <FiMail className="shrink-0" aria-hidden="true" />
              <span className="min-w-0 break-words">Email me</span>
              <FiArrowUpRight className="shrink-0" aria-hidden="true" />
            </a>

            <a className={channelClass} href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <FiMessageCircle className="shrink-0" aria-hidden="true" />
              <span className="min-w-0 break-words">WhatsApp</span>
              <FiArrowUpRight className="shrink-0" aria-hidden="true" />
            </a>

            <a className={channelClass} href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <FiInstagram className="shrink-0" aria-hidden="true" />
              <span className="min-w-0 break-words">Instagram</span>
              <FiArrowUpRight className="shrink-0" aria-hidden="true" />
            </a>

            <a className={channelClass} href={GITHUB_URL} target="_blank" rel="noreferrer">
              <FiGithub className="shrink-0" aria-hidden="true" />
              <span className="min-w-0 break-words">GitHub</span>
              <FiArrowUpRight className="shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>

        <form
          className="grid min-w-0 max-w-full gap-4 pl-5 sm:pl-8 lg:pl-0"
          id="contact-form"
          onSubmit={sendEmail}
        >
          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block min-w-0">
              <span className="mb-2 block text-[0.7rem] font-extrabold">Your name</span>
              <input
                className={`${inputClass} h-13`}
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                required
              />
            </label>

            <label className="block min-w-0">
              <span className="mb-2 block text-[0.7rem] font-extrabold">Email address</span>
              <input
                className={`${inputClass} h-13`}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
            </label>
          </div>

          <label className="block min-w-0">
            <span className="mb-2 block text-[0.7rem] font-extrabold">Project type</span>
            <select className={`${inputClass} h-13`} name="projectType" defaultValue="" required>
              <option value="" disabled>
                Select a project type
              </option>
              <option>Business website</option>
              <option>Website redesign</option>
              <option>E-commerce website</option>
              <option>Landing page</option>
              <option>Web app</option>
              <option>Full-stack development</option>
              <option>Something else</option>
            </select>
          </label>

          <label className="block min-w-0">
            <span className="mb-2 block text-[0.7rem] font-extrabold">
              Tell me about your project
            </span>
            <textarea
              className={`${inputClass} min-h-40 resize-y py-4`}
              name="message"
              rows="6"
              placeholder="What do you want to build? Share your goals, audience, and any useful context."
              required
            />
          </label>

          <button
            className={`${PRIMARY_BUTTON} mt-1 w-full sm:w-fit sm:min-w-44`}
            type="submit"
            disabled={loading}
          >
            {loading ? 'Sending…' : 'Send message'} <FiSend aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  )
}