import React, { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import PageHeader from "../components/page-header"
import Seo from "../components/seo"
import * as styles from "../styles/contact.module.css"

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
        />

        <div className="container">
          <div className={styles.grid}>
            <motion.div
              className={styles.formCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <h3 style={{ fontSize: "2rem", marginBottom: "16px", color: "var(--accent)" }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: "var(--muted)" }}>
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-ghost"
                    style={{ marginTop: "24px" }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Your Name
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
                      Your Email
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

                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.label}>
                      Subject
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
                      Your Message
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

                  <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                    Send Message <ArrowUpRight size={18} />
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div
              className={styles.infoSidebar}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className={styles.infoBlock}>
                <h3>Email Me</h3>
                <a href="mailto:rahultailor722@gmail.com" className={styles.infoLink}>
                  rahultailor722@gmail.com
                </a>
              </div>

              <div className={styles.infoBlock}>
                <h3>Find Me</h3>
                <p className={styles.address}>
                  Ahmedabad, Gujarat,
                  <br />
                  India
                </p>
              </div>

              <div className={styles.infoBlock}>
                <h3>Socials</h3>
                <div className={styles.socialsList}>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.socialItem}
                  >
                    LinkedIn <ArrowUpRight size={14} />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.socialItem}
                  >
                    GitHub <ArrowUpRight size={14} />
                  </a>
                  <a
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.socialItem}
                  >
                    Dribbble <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
    </div>
  )
}

export default ContactPage

export const Head = () => <Seo title="Contact Rahul Tailor — Senior Frontend Developer" />
