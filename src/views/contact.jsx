import React, { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Mail, MapPin, Phone, CheckCircle2, Linkedin, Github, Twitter } from "lucide-react"

import PageHeader from "../components/page-header"
import styles from "../styles/contact.module.css"

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
]

const ContactPage = () => {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated form submission
    setSubmitted(true)
    setFormState({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className={styles.contactPage}>
      <PageHeader
        eyebrow="Get in touch"
        title="Let's build something"
        subtitle="Feel free to reach out for new projects, inquiries, or just to say hello."
        watermark="CONTACT"
      />

      <div className="container">
        <div className={styles.grid}>
          <motion.aside
            className={styles.info}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="mailto:rahultailor722@gmail.com" className={styles.emailCard}>
              <span className={styles.status}>
                <span className={styles.statusDot} aria-hidden="true" />
                Available for new projects
              </span>
              <span className={styles.emailValue}>rahultailor722@gmail.com</span>
              <span className={styles.emailHint}>
                <Mail size={15} aria-hidden="true" />
                Drop me a line anytime
              </span>
              <span className={styles.arrowCircle} aria-hidden="true">
                <ArrowUpRight size={20} />
              </span>
            </a>

            <div className={styles.miniGrid}>
              <a href="tel:+916352340795" className={styles.miniCard}>
                <Phone size={18} className={styles.miniIcon} aria-hidden="true" />
                <span className={styles.miniLabel}>Phone</span>
                <span className={styles.miniValue}>+91 6352340795</span>
              </a>
              <div className={styles.miniCard}>
                <MapPin size={18} className={styles.miniIcon} aria-hidden="true" />
                <span className={styles.miniLabel}>Location</span>
                <span className={styles.miniValue}>
                  Ahmedabad, India
                  <span className={styles.miniMeta}>IST (UTC+5:30)</span>
                </span>
              </div>
            </div>

            <div className={styles.socialsRow}>
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialBtn}
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
              <span className={styles.socialsHint}>Find me on socials</span>
            </div>
          </motion.aside>

          <motion.div
            className={styles.formCard}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div className={styles.success}>
                <CheckCircle2 size={48} className={styles.successIcon} aria-hidden="true" />
                <h3 className={styles.successTitle}>Message sent!</h3>
                <p className={styles.successText}>
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-ghost">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      <span className={styles.labelIndex}>01</span> Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      <span className={styles.labelIndex}>02</span> Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>
                    <span className={styles.labelIndex}>03</span> Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiries / Full-time Role"
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    <span className={styles.labelIndex}>04</span> Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Hi Rahul, I'd love to chat about..."
                    className={styles.textarea}
                  />
                </div>

                <div className={styles.formFooter}>
                  <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                    Send Message <ArrowUpRight size={18} />
                  </button>
                  <p className={styles.formNote}>Usually replies within 24 hours</p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
