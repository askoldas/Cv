'use client'

import styles from './HeroSection.module.scss'
import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const introText = "Hello, I'm\nAskold."
  const outroText = "Let's make your ideas\nVisible."

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const videoTime = useTransform(scrollYProgress, [0, 1], [0, 2])
  videoTime.on('change', (t) => {
    const video = videoRef.current
    if (video && video.readyState >= 2) {
      video.currentTime = t
    }
  })

  const introOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const introY = useTransform(scrollYProgress, [0, 0.2], [0, -20])
  const outroOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1])
  const outroY = useTransform(scrollYProgress, [0.2, 0.3], [20, 0])

  const [loadTyped, setLoadTyped] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setLoadTyped(introText.slice(0, index + 1))
      index++
      if (index > introText.length) {
        clearInterval(interval)
        setTimeout(() => setMounted(true), 300)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const typed = useTransform(scrollYProgress, (progress) => {
    if (!mounted) return loadTyped

    if (progress < 0.1) return introText
    if (progress < 0.2) return introText.slice(0, Math.round(introText.length * (1 - (progress - 0.1) / 0.1)))
    if (progress <= 0.3) return outroText.slice(0, Math.round(outroText.length * ((progress - 0.2) / 0.1)))
    return outroText
  })

  const [typedText, setTypedText] = useState('')
  useEffect(() => {
    const unsubscribe = typed.on('change', setTypedText)
    return () => unsubscribe()
  }, [typed])

  const [topLine, bottomLine] = typedText.split('\n')

  return (
    <section ref={sectionRef} className={styles.container}>
      <div className={styles.heroInner}>
        <div className={styles.leftText}>
          <motion.h1 className={styles.headlinePrimary}>
            <span className={styles.lineTop}>
              {topLine}
              <span className={styles.cursor} />
            </span>
            <span className={`${styles.lineBottom} ${styles.wordHighlight}`}>
              {bottomLine}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ opacity: introOpacity, y: introY }}
            className={styles.introBlock}
          >
            <h2 className={styles.headlineSecondary}>
              Web Engineering · UI/UX · Product Design
            </h2>
            <p className={styles.introParagraph}>
              I design and build user-focused digital products that combine technical precision with thoughtful design. From front-end development to interface systems, I deliver experiences that are intuitive, responsive, and visually engaging.
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
              <Link href="/contact" className={`${styles.cta} ${styles.solid}`}>Get in Touch</Link>
              <Link href="/portfolio" className={`${styles.cta} ${styles.outlined}`}>Projects</Link>
              <Link href="/about" className={`${styles.cta} ${styles.outlined}`}>Resume</Link>
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
