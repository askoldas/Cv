'use client'

import { RefObject } from 'react'
import styles from './HeroSection.module.scss'
import Link from 'next/link'

export default function HeroContentBlock({
  introRef,
  outroRef,
}: {
  introRef: RefObject<HTMLDivElement | null>
  outroRef: RefObject<HTMLDivElement | null>
}) {
  return (
    <>
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
          <Link href="/contact" className={`${styles.cta} ${styles.solid}`}>Get in Touch</Link>
          <Link href="/portfolio" className={`${styles.cta} ${styles.outlined}`}>Projects</Link>
          <Link href="/about" className={`${styles.cta} ${styles.outlined}`}>Resume</Link>
        </div>
      </div>
    </>
  )
}
