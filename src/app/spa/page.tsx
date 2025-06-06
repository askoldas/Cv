'use client'

import { useEffect, useRef, useState } from 'react'
import HeroSection from '@/components/hero/HeroSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import ResumeSection from '@/components/sections/ResumeSection' 
import ContactSection from '@/components/sections/ContactSection'
import styles from './spa.module.scss'

export default function SpaPage() {
  const [scrollEnabled, setScrollEnabled] = useState(false)

  const portfolioRef = useRef<HTMLDivElement>(null)
  const resumeRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const handleNavClick = (ref: React.RefObject<HTMLDivElement>) => {
    setScrollEnabled(true)
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <main className={styles.pageWrapper}>
      <HeroSection
        onUnlockScroll={() => setScrollEnabled(true)}
        onNav={(target: 'portfolio' | 'resume' | 'contact') => {
          if (target === 'portfolio') handleNavClick(portfolioRef)
          if (target === 'resume') handleNavClick(resumeRef)
          if (target === 'contact') handleNavClick(contactRef)
        }}
      />

      <div
        className={`${styles.contentWrapper} ${
          scrollEnabled ? styles.visible : styles.hidden
        }`}
      >
       

        <section ref={resumeRef}>
          <ResumeSection />
        </section>

         <section ref={portfolioRef}>
          <PortfolioSection />
        </section>

         <section ref={portfolioRef}>
          <ContactSection />
        </section>

      </div>
    </main>
  )
}
