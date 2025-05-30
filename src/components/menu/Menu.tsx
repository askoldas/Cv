'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Menu.module.scss'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)

  return (
    <>
      {/* Top Navigation */}
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          <img src={`${basePath}/as-logo.svg`} alt="Askold Logo" />
        </Link>
        <button className={styles.burger} onClick={toggleMenu} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Fullscreen Overlay */}
      <div className={`${styles.menuOverlay} ${isOpen ? styles.open : ''}`}>
        {/* Left Column: Headline + Text + Buttons */}
        <div className={styles.menuContent}>
          {/* Headline */}
          <h1 className={styles.headline}>
            <div className={styles.lineTop}>Let’s make your ideas</div>
            <div className={styles.lineBottom}>Visible.</div>
          </h1>

          {/* Paragraph + CTA Buttons */}
          <div>
            <p className={styles.menuText}>
              Let’s explore how I can help bring your next product or brand to life.
            </p>

            <div className={styles.ctaButtons}>
              <Link href="/contact" className={`${styles.cta} ${styles.solid}`}>Get in touch</Link>
              <Link href="/portfolio" className={`${styles.cta} ${styles.outlined}`}>Projects</Link>
              <Link href="/about" className={`${styles.cta} ${styles.outlined}`}>Resume</Link>
            </div>
          </div>
        </div>

        {/* Right Column: Poster Image */}
        <div className={styles.posterWrapper}>
          <img
            src={`${basePath}/menu-poster.jpeg`}
            alt="Menu Poster"
            className={styles.posterImage}
          />
        </div>
      </div>
    </>
  )
}
