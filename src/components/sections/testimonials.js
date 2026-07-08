import React, { useState } from "react"
import { testimonials } from "../../data/site"
import * as styles from "./testimonials.module.css"

const QuoteIconSmall = () => (
  <svg width="22" height="22" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28.5847 16.895C28.1454 19.6558 24.6944 22.6049 21.9963 22.6676C21.8081 22.6676 21.6198 22.7304 21.4943 22.8559C21.3688 22.9186 21.2433 22.9814 21.1806 23.1696C20.2394 24.9265 20.7414 26.3069 22.31 27.4364C24.1297 28.754 27.016 27.4364 28.4592 26.2442C32.0985 23.2323 35.8005 18.0245 35.6123 13.0674C36.2397 9.74178 36.1142 6.16534 35.173 3.21626C34.5456 1.33387 32.7259 0.392675 30.8435 0.267183C28.9611 0.141588 25.0709 -0.423025 23.3767 0.706306C21.6826 1.83584 21.5571 4.03197 21.3688 5.91425C21.1806 7.98488 20.6159 11.8753 22.3728 13.5067C24.1297 15.0753 29.1494 13.3812 28.5847 16.895Z" fill="currentColor" />
  </svg>
)

const QuoteIconBig = () => (
  <svg width="48" height="36" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28.5847 16.895C28.1454 19.6558 24.6944 22.6049 21.9963 22.6676C21.8081 22.6676 21.6198 22.7304 21.4943 22.8559C21.3688 22.9186 21.2433 22.9814 21.1806 23.1696C20.2394 24.9265 20.7414 26.3069 22.31 27.4364C24.1297 28.754 27.016 27.4364 28.4592 26.2442C32.0985 23.2323 35.8005 18.0245 35.6123 13.0674C36.2397 9.74178 36.1142 6.16534 35.173 3.21626C34.5456 1.33387 32.7259 0.392675 30.8435 0.267183C28.9611 0.141588 25.0709 -0.423025 23.3767 0.706306C21.6826 1.83584 21.5571 4.03197 21.3688 5.91425C21.1806 7.98488 20.6159 11.8753 22.3728 13.5067C24.1297 15.0753 29.1494 13.3812 28.5847 16.895Z" fill="currentColor" />
  </svg>
)

const initials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const total = testimonials.length

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1))
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1))

  const t = testimonials[current]

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow tp_fade_anim">Kind words</span>
          <h2 className={`section-title ${styles.title} tp_title_anim`}>
            Testimonials
          </h2>
        </div>

        <div className={`${styles.sliderOuter} tp_fade_anim`} data-delay="0.25">
          <button className={styles.arrow} onClick={prev} aria-label="Previous">
            <svg width="22" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.325 0.0894619L0.28 4.36638C0.194 4.43518 0.1234 4.52914 0.0745 4.63977C0.0256 4.7504 0 4.87421 0 5C0 5.12579 0.0256 5.2496 0.0745 5.36023C0.1234 5.47086 0.194 5.56483 0.28 5.63362L6.325 9.91054C6.4428 9.98881 6.5785 10.0168 6.7108 9.9902C6.843 9.96357 6.9642 9.88378 7.0554 9.76343C7.1465 9.64308 7.2023 9.48901 7.2141 9.3255C7.2258 9.16199 7.1928 8.99835 7.1202 8.86038L5.367 5.73335L24.4012 5.73335C24.56 5.73335 24.7123 5.65609 24.8246 5.51856C24.9369 5.38103 25 5.1945 25 5C25 4.8055 24.9369 4.61897 24.8246 4.48144C24.7123 4.34391 24.56 4.26665 24.4012 4.26665L5.367 4.26665L7.1202 1.13963C7.1928 1.00165 7.2258 0.838009 7.2141 0.674501C7.2023 0.510993 7.1465 0.356918 7.0554 0.236567C6.9642 0.116215 6.843 0.0364334 6.7108 0.00979851C6.5785 -0.0168364 6.4428 0.0111909 6.325 0.0894619Z" fill="currentColor"/>
            </svg>
          </button>

          <div className={styles.stage}>
            <div key={current} className={styles.card}>
              <div className={styles.quoteBig}><QuoteIconBig /></div>
              <blockquote>{t.quote}</blockquote>
              <div className={styles.authorRow}>
                <div className={styles.avatar}><span>{initials(t.name)}</span></div>
                <div>
                  <p className={styles.name}>{t.name}</p>
                </div>
              </div>
            </div>
          </div>

          <button className={styles.arrow} onClick={next} aria-label="Next">
            <svg width="22" height="10" viewBox="0 0 25 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.675 0.0894619L24.72 4.36638C24.806 4.43518 24.8766 4.52914 24.9255 4.63977C24.9744 4.7504 25 4.87421 25 5C25 5.12579 24.9744 5.2496 24.9255 5.36023C24.8766 5.47086 24.806 5.56483 24.72 5.63362L18.675 9.91054C18.5572 9.98881 18.4215 10.0168 18.2892 9.9902C18.157 9.96357 18.0358 9.88378 17.9446 9.76343C17.8535 9.64308 17.7977 9.48901 17.7859 9.3255C17.7742 9.16199 17.8072 8.99835 17.8798 8.86038L19.633 5.73335L0.598757 5.73335C0.439957 5.73335 0.287661 5.65609 0.175371 5.51856C0.0630817 5.38103 0 5.1945 0 5C0 4.8055 0.0630817 4.61897 0.175371 4.48144C0.287661 4.34391 0.439957 4.26665 0.598757 4.26665L19.633 4.26665L17.8798 1.13963C17.8072 1.00165 17.7742 0.838009 17.7859 0.674501C17.7977 0.510993 17.8535 0.356918 17.9446 0.236567C18.0358 0.116215 18.157 0.0364334 18.2892 0.00979851C18.4215 -0.0168364 18.5572 0.0111909 18.675 0.0894619Z" fill="currentColor"/>
            </svg>
          </button>
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
