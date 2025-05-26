'use client'

import HeroHeadline from '@/components/hero/HeroHeadline'
import styles from '@/components/hero/HeroSection.module.scss'

export default function Menu() {
  const typedText = "Let's make your ideas\nVisible."

  return (
    <section className={styles.container}>
      <div className={styles.heroInner}>
        <div className={styles.leftText}>
          <HeroHeadline typedText={typedText} showCursor={false} />

          <div className={styles.outroBlock}>
            <p className={styles.outroParagraph}>
              Let’s explore how I can help bring your next product or brand to life.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={`${styles.cta} ${styles.solid}`}>Get in Touch</a>
              <a href="/projects" className={`${styles.cta} ${styles.outlined}`}>Projects</a>
              <a href="/stack" className={`${styles.cta} ${styles.outlined}`}>Resume</a>
            </div>
          </div>
        </div>

        <div className={styles.rightVideo}>
          <img
            src="/menu-poster.jpg"
            alt="Sculpture with bonsai tree"
            className={styles.video}
          />
        </div>
      </div>
    </section>
  )
}
