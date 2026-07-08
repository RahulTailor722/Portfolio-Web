import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import * as styles from "./preloader.module.css"

const Preloader = ({ showText = true }) => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    }
  }, [])

  const firstName = "RAHUL"
  const lastName = "TAILOR"
  const allLetters = [...firstName, " ", ...lastName]

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} Z`
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} 0 Q${dimension.width / 2} 0 0 0 Z`

  const curve = {
    initial: {
      d: initialPath,
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] },
    },
  }

  const textAnimation = {
    initial: {
      y: 110,
    },
    animate: (i) => ({
      y: 0,
      transition: { duration: 0.45, ease: [0.215, 0.61, 0.355, 1], delay: 0.03 * i },
    }),
    exit: (i) => ({
      y: -110,
      transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1], delay: 0.012 * i },
    }),
  }

  if (dimension.width === 0) return null

  return (
    <motion.div
      className={styles.preloader}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <svg className={styles.svg}>
        <motion.path
          variants={curve}
          initial="initial"
          exit="exit"
          fill="#141416"
        />
      </svg>

      {showText && (
        <div className={styles.textContainer}>
          {allLetters.map((char, i) => (
            <div key={i} className={styles.charWrapper}>
              <motion.span
                custom={i}
                variants={textAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                className={`${styles.char} ${i < firstName.length ? styles.firstName : i > firstName.length ? styles.lastName : ""}`}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default Preloader
