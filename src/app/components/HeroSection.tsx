'use client'

import styles from './HeroSection.module.scss'
import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const fullIntro = "Hi, I'm Askold."
  const fullOutro = "I'm here to make your ideas visible."

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Animate video on scroll
  const videoTime = useTransform(scrollYProgress, [0, 1], [0, 2])
  videoTime.on('change', (t) => {
    const video = videoRef.current
    if (video && video.readyState >= 2) {
      video.currentTime = t
    }
  })

  // Animate intro/outro blocks
  const introOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const introY = useTransform(scrollYProgress, [0, 0.2], [0, -20])
  const outroOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1])
  const outroY = useTransform(scrollYProgress, [0.2, 0.3], [20, 0])

  // Initial typing state
  const [loadTyped, setLoadTyped] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setLoadTyped(fullIntro.slice(0, index + 1))
      index++
      if (index > fullIntro.length) {
        clearInterval(interval)
        setTimeout(() => setMounted(true), 300)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Derived scroll-synced text value
  const typed = useTransform(scrollYProgress, (progress) => {
    if (!mounted) return loadTyped

    if (progress < 0.1) {
      return fullIntro
    } else if (progress >= 0.1 && progress < 0.2) {
      const ratio = (progress - 0.1) / 0.1
      const length = Math.round(fullIntro.length * (1 - ratio))
      return fullIntro.slice(0, length)
    } else if (progress >= 0.2 && progress <= 0.3) {
      const ratio = (progress - 0.2) / 0.1
      const length = Math.round(fullOutro.length * ratio)
      return fullOutro.slice(0, length)
    } else if (progress > 0.3) {
      return fullOutro
    }

    return ''
  })

  // Fix: Convert typed MotionValue to state
  const [typedText, setTypedText] = useState('')
  useEffect(() => {
    const unsubscribe = typed.on('change', (v) => {
      setTypedText(v)
    })
    return () => unsubscribe()
  }, [typed])

  return (
    <section ref={sectionRef} className={styles.container}>
      <div className={styles.heroInner}>
        <div className={styles.leftText}>
          <motion.h1 className={styles.headlinePrimary}>
            <motion.span style={{ display: 'inline-block' }}>
              {typedText}
              <span className={styles.cursor} />
            </motion.span>
          </motion.h1>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ opacity: introOpacity, y: introY }}
            className={styles.introBlock}
          >
            <h2 className={styles.headlineSecondary}>
              Web Engineering · UI/UX · Product & Visual Design
            </h2>
            <p className={styles.introParagraph}>
              I design and build user-focused web products that unite technical precision with thoughtful design. From front-end engineering to interface design, I deliver digital experiences that are intuitive, responsive, and engaging.
            </p>
          </motion.div>

          <motion.div
            style={{ opacity: outroOpacity, y: outroY }}
            className={styles.outroBlock}
          >
            <p className={styles.outroParagraph}>
              Let’s explore how I can help bring your next product or brand to life.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/about" className={`${styles.cta} ${styles.outlined}`}>About Me</Link>
              <Link href="/projects" className={`${styles.cta} ${styles.outlined}`}>Projects</Link>
              <Link href="/stack" className={`${styles.cta} ${styles.outlined}`}>Tech Stack</Link>
              <Link href="/contact" className={`${styles.cta} ${styles.solid}`}>Get in Touch</Link>
            </div>
          </motion.div>
        </div>

        <div className={styles.rightVideo}>
          <video
            ref={videoRef}
            src="/intro.mp4"
            muted
            playsInline
            preload="auto"
            className={styles.video}
          />
        </div>
      </div>
    </section>
  )
}
