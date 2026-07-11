import React, { useEffect, useRef, useState } from "react"

import Link from "../components/link"
import CTA from "../components/sections/cta"
import { skills, techStack, experience, stats } from "../data/site"
import styles from "../styles/about.module.css"

/* Eased count-up that starts when the number scrolls into view. */
const CountUp = ({ value }) => {
  const ref = useRef(null)
  const started = useRef(false)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === "undefined") {
      setDisplay(value)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1300
          const start = performance.now()
          const tick = (now) => {
            const p = Math.min(1, (now - start) / duration)
            const eased = 1 - Math.pow(1 - p, 3)
            setDisplay(Math.round(eased * value))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return <span ref={ref}>{display}</span>
}

/* Skill pill matching the homepage about-intro design: round icon on the
   left, name + big count-up percentage on the right. */
const SkillItem = ({ skill, delay }) => (
  <div className={`${styles.skillWrap} tp_fade_anim`} data-delay={delay}>
    <span className={styles.skillIcon}>
      <img src={skill.icon} alt="" loading="lazy" width="40" height="40" />
    </span>
    <div className={styles.skillContent}>
      <span className={styles.skillName}>{skill.name}</span>
      <h3 className={styles.skillPct}>
        <CountUp value={skill.level} />
        <span className={styles.pctSign}>%</span>
      </h3>
    </div>
  </div>
)

const approach = [
  {
    title: "User-First Empathy",
    desc: "Designing layouts and interactions with a deep understanding of user behaviors and accessibility requirements.",
  },
  {
    title: "Precision Engineering",
    desc: "Writing clean, componentized, and semantic code that scales easily and runs efficiently across all browsers.",
  },
  {
    title: "Immersive Motion",
    desc: "Crafting smooth, high-fidelity micro-interactions and transitions using GSAP and Framer Motion that breathe life into the UI.",
  },
  {
    title: "Constant Innovation",
    desc: "Continuously learning and integrating the latest technologies like AI, modern CMS tooling (HubSpot), and next-generation frameworks.",
  },
]

const marqueeWords = ["Design", "Develop", "Animate", "Optimize", "Deploy"]

const AboutPage = () => {
  const extraTech = techStack.filter((t) => !skills.some((s) => s.name === t))

  return (
    <div className={styles.aboutPage}>
      {/* ------------------------------ Hero ------------------------------ */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <span className={styles.watermark} aria-hidden="true">
          ABOUT
        </span>
        <div className="container">
          <p className={`${styles.eyebrow} tp_fade_anim`} data-delay="0.1">
            <span className={styles.dot} />
            Who I Am
          </p>
          <h1 className={`${styles.heroTitle} tp_title_anim`} data-delay="0.2">
            Designer at heart, <span className="text-accent">engineer</span>{" "}
            <span className={styles.heroOutline}>by craft.</span>
          </h1>
          <div className={styles.heroBottom}>
            <p className={`${styles.heroStatement} tp_text_invert`}>
              I&apos;m Rahul — a senior frontend developer with 6+ years of
              experience translating complex user flows and brand visions into
              beautifully responsive, fast, and interactive web applications.
            </p>
            <ul className={styles.heroMeta}>
              <li className="tp_fade_anim" data-fade-from="right" data-delay="0.4">
                <span className={styles.metaLabel}>Role</span>
                <span className={styles.metaValue}>Senior Frontend Developer</span>
              </li>
              <li className="tp_fade_anim" data-fade-from="right" data-delay="0.5">
                <span className={styles.metaLabel}>Focus</span>
                <span className={styles.metaValue}>UI Engineering · Motion · CMS</span>
              </li>
              <li className="tp_fade_anim" data-fade-from="right" data-delay="0.6">
                <span className={styles.metaLabel}>Status</span>
                <span className={styles.available}>
                  <span className={styles.pulse} />
                  Open to new projects
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --------------------------- Stats band --------------------------- */}
      <section className={styles.statsBand}>
        <div className={`container ${styles.statsRow}`}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`${styles.stat} tp_fade_anim`}
              data-delay={`${0.1 + i * 0.08}`}
            >
              <div className={styles.statVal}>
                <CountUp value={s.value} />
                <span className={styles.statSuffix}>{s.suffix}</span>
              </div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------ Story ------------------------------ */}
      <section className={`section ${styles.story}`}>
        <div className={`container ${styles.storyGrid}`}>
          <div className={styles.storySticky}>
            <span className="eyebrow tp_fade_anim">My Story</span>
            <h2 className={`section-title ${styles.storyTitle} tp_title_anim`}>
              Crafting experiences that{" "}
              <span className="text-accent">drive engagement</span>
            </h2>
            <Link to="/contact" className={styles.storyLink} data-cursor="hover">
              Let&apos;s work together
              <span className={styles.storyArrow} aria-hidden="true">
                &#8594;
              </span>
            </Link>
          </div>
          <div className={styles.storyBody}>
            <p className={`${styles.storyLede} tp_text_invert`}>
              Whether it is designing modular components from a Figma workspace,
              setting up custom animations with GSAP, or implementing highly
              scalable HubSpot CMS templates, I make sure every detail serves
              both the user and the business.
            </p>
            <p className={`${styles.storyPara} tp_fade_anim`}>
              My work sits at the intersection of design and engineering. I
              partner with founders, agencies, and product teams to take ideas
              from rough sketches to polished, production-ready interfaces —
              owning everything from information architecture to the final
              micro-interaction.
            </p>
            <p className={`${styles.storyPara} tp_fade_anim`}>
              Performance and accessibility aren&apos;t afterthoughts in my
              process; they are the baseline. Every project ships with clean,
              semantic markup, lean bundles, and motion that respects the
              content instead of competing with it.
            </p>
            <blockquote className={`${styles.storyQuote} tp_fade_anim`}>
              <p>
                &ldquo;Every line of code is written for durability and
                performance — every pixel placed with intent.&rdquo;
              </p>
              <cite>— my working principle</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ------------------------- Marquee divider ------------------------- */}
      <div className={`${styles.marquee} moving-text`} aria-hidden="true">
        <div className="wrapper-text">
          <div className={styles.marqueeTrack}>
            {[...marqueeWords, ...marqueeWords].map((word, i) => (
              <span
                key={i}
                className={i % 2 ? styles.marqueeOutline : styles.marqueeSolid}
              >
                {word}
                <span className={styles.marqueeStar}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------------------- Tech stack ---------------------------- */}
      <section className={`section ${styles.tech}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow tp_fade_anim">Toolbox</span>
              <h2 className="section-title tp_title_anim">
                Technical <span className="text-accent">expertise</span>
              </h2>
            </div>
            <p className={`${styles.sectionSub} tp_fade_anim`} data-fade-from="right">
              The tools I reach for every day — and the proficiency I bring to
              each of them.
            </p>
          </div>
          <div className={styles.skillGrid}>
            {skills.map((skill, i) => (
              <SkillItem key={skill.name} skill={skill} delay={`${0.1 + (i % 4) * 0.08}`} />
            ))}
          </div>
          <div className={`${styles.alsoRow} tp_fade_anim`}>
            <span className={styles.alsoLabel}>Also fluent in</span>
            <div className={styles.alsoChips}>
              {extraTech.map((tech) => (
                <span key={tech} className={styles.alsoChip}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------- Approach ----------------------------- */}
      <section className={`section ${styles.approach}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow tp_fade_anim">How I Think</span>
              <h2 className="section-title tp_title_anim">
                My creative <span className="text-accent">approach</span>
              </h2>
            </div>
            <p className={`${styles.sectionSub} tp_fade_anim`} data-fade-from="right">
              How I bridge the gap between design and production to create
              state-of-the-art products.
            </p>
          </div>
          <div className={styles.approachList}>
            {approach.map((item, i) => (
              <div
                key={item.title}
                className={`${styles.approachRow} tp_fade_anim`}
                data-delay={`${0.08 + i * 0.08}`}
              >
                <span className={styles.approachNum}>0{i + 1}</span>
                <h3 className={styles.approachTitle}>{item.title}</h3>
                <p className={styles.approachDesc}>{item.desc}</p>
                <span className={styles.approachArrow} aria-hidden="true">
                  &#8599;
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------- Experience ---------------------------- */}
      <section className={`section ${styles.exp}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow tp_fade_anim">Career</span>
              <h2 className="section-title tp_title_anim">
                Work <span className="text-accent">experience</span>
              </h2>
            </div>
            <p className={`${styles.sectionSub} tp_fade_anim`} data-fade-from="right">
              A brief timeline of my professional journey in web engineering.
            </p>
          </div>
          <div className={styles.expList}>
            {experience.map((exp, i) => (
              <div
                key={`${exp.company}-${exp.role}`}
                className={`${styles.expRow} tp_fade_anim`}
                data-delay={`${0.08 + i * 0.08}`}
              >
                <span className={styles.expPeriod}>{exp.period}</span>
                <div className={styles.expRoleWrap}>
                  <h3 className={styles.expRole}>{exp.role}</h3>
                  <span className={styles.expCompany}>{exp.company}</span>
                </div>
                <p className={styles.expDesc}>{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}

export default AboutPage
