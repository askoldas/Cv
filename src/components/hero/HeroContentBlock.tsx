'use client'

import { RefObject } from 'react'
import styles from './HeroSection.module.scss'

type HeroContentBlockProps = {
  introRef: RefObject<HTMLDivElement | null>
  outroRef: RefObject<HTMLDivElement | null>
  onUnlockScroll: () => void
  onNav: (target: 'portfolio' | 'resume' | 'contact') => void
}

export default function HeroContentBlock({
  introRef,
  outroRef,
  onUnlockScroll,
  onNav
}: HeroContentBlockProps) {
  return (
    <div className={styles.blockWrapper}>
      <div ref={introRef} className={styles.introBlock}>
        <h2 className={styles.headlineSecondary}>
          Web Engineering · UI/UX · Product Design
        </h2>
        <p className={styles.introParagraph}>
          I design and build user-focused digital products that combine technical precision with thoughtful design. From front-end development to interface systems, I deliver experiences that are intuitive, responsive, and visually engaging.
        </p>
      </div>

      <div ref={outroRef} className={styles.outroBlock}>
        <p className={styles.outroParagraph}>
          Let’s explore how I can help bring your next product or brand to life.
        </p>
        <div className={styles.ctaButtons}>
          <button
            type="button"
            className={`${styles.cta} ${styles.solid}`}
            onClick={() => {
              onUnlockScroll()
              onNav('contact')
            }}
          >
            Get in Touch
          </button>

          <button
            type="button"
            className={`${styles.cta} ${styles.outlined}`}
            onClick={() => {
              onUnlockScroll()
              onNav('portfolio')
            }}
          >
            Projects
          </button>

          <button
            type="button"
            className={`${styles.cta} ${styles.outlined}`}
            onClick={() => {
              onUnlockScroll()
              onNav('resume')
            }}
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  )
}
