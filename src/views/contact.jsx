import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  Linkedin,
} from "lucide-react";

import PageHeader from "../components/page-header";
import styles from "../styles/contact.module.css";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rahul-tailor-0a7940283/",
    icon: Linkedin,
  },
];

// Web3Forms access keys are public by design — they only route mail to the
// address they were registered for, and they end up in the client bundle
// either way, so an env var would hide nothing. Get one free at
// https://web3forms.com. See TURNSTILE_SITE_KEY below for the abuse guard.
const WEB3FORMS_KEY = "e85be933-d8fd-4581-ac11-06b05e93b4e9";

// Cloudflare Turnstile site key. The access key above is readable by anyone
// who opens the JS bundle, so on its own nothing stops a scripted POST
// straight to api.web3forms.com from flooding the inbox. Turnstile is what
// actually closes that: once it's switched on in the Web3Forms dashboard,
// submissions without a valid token are rejected server-side.
//
// Two steps, in this order:
//   1. Paste the Turnstile site key below and deploy.
//   2. Then enable Turnstile in the Web3Forms dashboard.
// Doing 2 before 1 rejects every real submission. While this is empty the
// widget is skipped entirely and the form behaves exactly as before.
const TURNSTILE_SITE_KEY = "";

const TURNSTILE_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");
  // With no site key configured there is no challenge to wait on.
  const [captchaReady, setCaptchaReady] = useState(!TURNSTILE_SITE_KEY);
  const captchaRef = useRef(null);
  const widgetIdRef = useRef(null);

  // The success screen replaces the form, so the widget has to be torn down and
  // rebuilt rather than rendered once.
  const showForm = status !== "success";

  // Load Turnstile lazily and render it explicitly — the island can remount on
  // a ClientRouter navigation, and auto-render would miss the second mount.
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || !showForm) return;

    let cancelled = false;

    const teardown = () => {
      if (widgetIdRef.current === null) return;
      try {
        window.turnstile?.remove(widgetIdRef.current);
      } catch {
        // Widget already detached with the form subtree — nothing to clean up.
      }
      widgetIdRef.current = null;
      setCaptchaReady(false);
    };

    const render = () => {
      if (cancelled || widgetIdRef.current !== null) return;
      if (!window.turnstile || !captchaRef.current) return;
      widgetIdRef.current = window.turnstile.render(captchaRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: "dark",
        callback: () => setCaptchaReady(true),
        "expired-callback": () => setCaptchaReady(false),
        "error-callback": () => setCaptchaReady(false),
      });
    };

    if (window.turnstile) {
      render();
      return () => {
        cancelled = true;
        teardown();
      };
    }

    let script = document.querySelector(`script[src="${TURNSTILE_SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = TURNSTILE_SRC;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
    script.addEventListener("load", render);

    return () => {
      cancelled = true;
      script.removeEventListener("load", render);
      teardown();
    };
  }, [showForm]);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!WEB3FORMS_KEY) {
      setErrorMsg("The form isn't configured yet — missing access key.");
      setStatus("error");
      return;
    }
    if (!captchaReady) {
      setErrorMsg("Please complete the verification check first.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    const formData = new FormData(e.target);
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("from_name", "Portfolio Contact Form");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      setErrorMsg(
        err.message === "Failed to fetch"
          ? "Network error — please check your connection and try again."
          : err.message,
      );
      setStatus("error");
      // Turnstile tokens are single-use, so the form needs a fresh one before
      // the visitor can retry.
      if (widgetIdRef.current !== null) {
        window.turnstile?.reset(widgetIdRef.current);
        setCaptchaReady(false);
      }
    }
  };

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
            <a
              href="mailto:rahultailor722@gmail.com"
              className={styles.emailCard}
            >
              <span className={styles.status}>
                <span className={styles.statusDot} aria-hidden="true" />
                Available for new projects
              </span>
              <span className={styles.emailValue}>
                rahultailor722@gmail.com
              </span>
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
                <Phone
                  size={18}
                  className={styles.miniIcon}
                  aria-hidden="true"
                />
                <span className={styles.miniLabel}>Phone</span>
                <span className={styles.miniValue}>+91 6352340795</span>
              </a>
              <div className={styles.miniCard}>
                <MapPin
                  size={18}
                  className={styles.miniIcon}
                  aria-hidden="true"
                />
                <span className={styles.miniLabel}>Location</span>
                <span className={styles.miniValue}>
                  Ahmedabad, India
                  <span className={styles.miniMeta}>IST (UTC+5:30)</span>
                </span>
              </div>
            </div>

            <p className={styles.availability}>
              Time zones aren&apos;t an issue. I keep flexible hours and work
              across the European and North American day — pick a time that
              suits you and I&apos;ll be there.
            </p>

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
            {/* Live regions live OUTSIDE the showForm branch on purpose. A
                region only announces changes that happen while it is already
                in the accessibility tree — mounting a fresh <p role="alert">
                alongside its text is frequently missed, and the success state
                unmounts the whole form, so there was nothing left to announce
                from. These two stay mounted for the life of the page and only
                their text content changes. */}
            <p className="sr-only" role="status" aria-live="polite">
              {status === "sending"
                ? "Sending your message."
                : status === "success"
                  ? "Message sent. Thank you for reaching out — I'll get back to you as soon as possible."
                  : ""}
            </p>
            <p className="sr-only" role="alert">
              {status === "error" ? errorMsg : ""}
            </p>

            {!showForm ? (
              <div className={styles.success}>
                <CheckCircle2
                  size={48}
                  className={styles.successIcon}
                  aria-hidden="true"
                />
                <h3 className={styles.successTitle}>Message sent!</h3>
                <p className={styles.successText}>
                  Thank you for reaching out. I'll get back to you as soon as
                  possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn btn-ghost"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Web3Forms honeypot — bots fill it, humans never see it. */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className={styles.honeypot}
                  tabIndex="-1"
                  autoComplete="off"
                  aria-hidden="true"
                />
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
                      autoComplete="name"
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
                      autoComplete="email"
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

                {/* Turnstile injects its cf-turnstile-response input here, so
                    it must live inside the form for FormData to pick it up. */}
                {TURNSTILE_SITE_KEY && (
                  <div className={styles.captcha} ref={captchaRef} />
                )}

                <div className={styles.formFooter}>
                  <button
                    type="submit"
                    className={`btn btn-primary ${styles.submitBtn}`}
                    disabled={status === "sending" || !captchaReady}
                  >
                    {status === "sending" ? "Sending…" : "Send Message"}{" "}
                    <ArrowUpRight size={18} />
                  </button>
                  <p className={styles.formNote}>
                    Usually replies within 24 hours
                  </p>
                </div>
                {/* Visible copy only — the persistent sr-only region above is
                    what announces this, so no second role="alert" here or
                    screen readers would read the error twice. */}
                {status === "error" && (
                  <p className={styles.formError}>{errorMsg}</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
