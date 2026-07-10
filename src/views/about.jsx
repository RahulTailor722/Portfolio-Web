import React, { useRef } from "react"

import PageHeader from "../components/page-header"
import { Reveal } from "../components/reveal"
import { skills, techStack, experience, stats } from "../data/site"
import styles from "../styles/about.module.css"

const TiltCard = ({ title, index, desc }) => {
  const cardRef = useRef(null)

  const onMouseMove = (e) => {
    if (!cardRef.current) return
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const degX = (y / (rect.height / 2)) * -10
    const degY = (x / (rect.width / 2)) * 10
    card.style.transform = `perspective(1000px) rotateX(${degX}deg) rotateY(${degY}deg)`
  }

  const onMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={styles.tiltCard}
      style={{ transition: "transform 0.1s ease", transformStyle: "preserve-3d" }}
    >
      <div style={{ transform: "translateZ(25px)" }}>
        <span className={styles.cardIndex}>0{index}</span>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{desc}</p>
      </div>
    </div>
  )
}

const AboutPage = () => {
  const processItems = [
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

  return (
    <div className={styles.aboutPage}>
        <PageHeader
          eyebrow="Who I Am"
          title="About Me"
          subtitle="Merging design thinking, technical expertise, and custom motion to build premium digital products."
        />

        <section className={styles.bioSection}>
          <div className="container">
            <div className={styles.bioGrid}>
              <Reveal y={-30}>
                <div className={styles.bioText}>
                  <h2>Crafting experiences that drive engagement</h2>
                  <p>
                    I am a Senior Frontend Developer with 6+ years of experience. I
                    specialize in translating complex user flows and brand visions into
                    beautifully responsive, fast, and interactive front-end web
                    applications.
                  </p>
                  <p>
                    Whether it is designing modular components from a Figma workspace,
                    setting up custom animations with GSAP, or implementing highly
                    scalable HubSpot CMS templates, I strive to make sure every line of
                    code is written for durability and performance.
                  </p>
                </div>
              </Reveal>

              <Reveal y={-30} delay={0.1}>
                <div className={styles.statsGrid}>
                  {stats.map((s, idx) => (
                    <div key={idx} className={styles.statItem}>
                      <div className={styles.statVal}>
                        {s.value}
                        {s.suffix}
                      </div>
                      <div className={styles.statLabel}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Skills/Expertise Section */}
        <section className={styles.skillsSection}>
          <div className="container">
            <Reveal>
              <div className={styles.skillsHeader}>
                <h2 className="section-title">Technical Expertise</h2>
                <p className="lead">My tech stack and proficiency across various tools and technologies.</p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className={styles.chipGrid}>
                {techStack.map((tech) => (
                  <div key={tech} className={styles.chip}>{tech}</div>
                ))}
              </div>
            </Reveal>
            <div className={styles.skillsGrid}>
              {skills.map((skill, idx) => (
                <Reveal key={idx} delay={idx * 0.04}>
                  <div className={styles.skillCard}>
                    <div className={styles.ring}>
                      <svg viewBox="0 0 36 36" className={styles.ringSvg}>
                        <path className={styles.ringBg} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        <path className={styles.ringFill} strokeDasharray={`${skill.level}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      </svg>
                      <span className={styles.ringPct}>{skill.level}%</span>
                    </div>
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology / Creative Process (3D Grid Section instead of Certifications) */}
        <section className={styles.processSection}>
          <div className="container">
            <Reveal>
              <div className={styles.processHeader}>
                <h2 className="section-title">My Creative Approach</h2>
                <p className="lead">How I bridge the gap between design and production to create state-of-the-art products.</p>
              </div>
            </Reveal>
            <div className={styles.processGrid}>
              {processItems.map((item, idx) => (
                <Reveal key={idx} delay={idx * 0.08} y={30}>
                  <TiltCard
                    index={idx + 1}
                    title={item.title}
                    desc={item.desc}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className={styles.experienceSection}>
          <div className="container">
            <Reveal>
              <h2 className="section-title">Work Experience</h2>
              <p className="lead">A brief timeline of my professional journey in web engineering.</p>
            </Reveal>
            <div className={styles.timeline}>
              {experience.map((exp, idx) => (
                <Reveal key={idx} delay={idx * 0.08} y={30}>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                      <div className={styles.timeHeader}>
                        <div>
                          <h3>{exp.role}</h3>
                          <div className={styles.company}>{exp.company}</div>
                        </div>
                        <span className={styles.period}>{exp.period}</span>
                      </div>
                      <p className={styles.timeDesc}>{exp.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>
  )
}

export default AboutPage

