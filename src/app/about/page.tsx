'use client'

import { useEffect } from 'react'
import Menu from '@/components/menu/Menu'
import Headline from '@/components/ui/Headline'
import styles from './about.module.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  useEffect(() => {
    gsap.utils.toArray('.' + styles.step).forEach((step: any) => {
      gsap.fromTo(
        step,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
          },
        }
      )
    })
  }, [])

  return (
    <>
      <Menu />
      <section className={styles.container}>
        {/* Page Header */}
        <div className={styles.header}>
          <Headline lineTop="Askold Makrikov" lineBottom="Resume" />
        </div>

        {/* About Intro */}
        <div className={styles.aboutSection}>
          <h2>Designer. Developer. Creative Thinker.</h2>
          <p>
            I bridge design and technology to craft engaging, user-focused digital experiences. My background spans frontend development, UI/UX design, and motion — with a passion for both aesthetics and performance.
          </p>
        </div>

        {/* Step Sections */}
        <div className={styles.processSection}>
          {/* Step 00 – Understand */}
          <div className={styles.step}>
            <div className={styles.stepNumber}>00</div>
            <h3 className={styles.stepTitle}>🧠 Understand</h3>
            <p className={styles.stepDescription}>
              Every great project begins with listening. I collaborate closely with clients to understand business goals, user needs, and creative vision. Beyond discovery, I plan the digital architecture — designing content structures, data flow, and functionality with clarity and intent.
            </p>
          </div>


          {/* Step 1 – Design & Creative */}
          <div className={styles.step}>
            <div className={styles.stepNumber}>01</div>
            <h3 className={styles.stepTitle}>🎨 Design & Creative</h3>
            <p className={styles.stepDescription}>
              Visual expression is at the heart of everything I build. I work fluently across industry-standard tools to craft intuitive, aesthetic, and meaningful digital experiences — from branding and layout to motion and presentation.
            </p>
            <div className={styles.toolGrid}>
              <span>Photoshop</span>
              <span>Illustrator</span>
              <span>InDesign</span>
              <span>After Effects</span>
              <span>SketchUp</span>
            </div>
          </div>

          {/* Step 2 – UI/UX & Prototyping */}
          <div className={styles.step}>
            <div className={styles.stepNumber}>02</div>
            <h3 className={styles.stepTitle}>🧪 UI/UX & Prototyping</h3>
            <p className={styles.stepDescription}>
              I prototype with purpose — validating ideas through wireframes, flows, and interactive mockups. Whether it's early low-fidelity sketching or polished UI systems, I choose the right fidelity for each phase.
            </p>
            <div className={styles.toolGrid}>
              <span>Figma</span>
              <span>Adobe XD</span>
              <span>Axure RP</span>
              <span>Balsamiq</span>
            </div>
          </div>

          {/* Step 3 – Frontend Development */}
          <div className={styles.step}>
            <div className={styles.stepNumber}>03</div>
            <h3 className={styles.stepTitle}>💻 Frontend Development</h3>
            <p className={styles.stepDescription}>
              My front-end work bridges visuals and interaction. I develop responsive, accessible, and performant UIs using modern frameworks — enhancing them with animations and a focus on clean, maintainable code.
            </p>
            <div className={styles.toolGrid}>
              <span>HTML</span>
              <span>CSS</span>
              <span>Sass</span>
              <span>JavaScript</span>
              <span>GSAP</span>
              <span>React.js</span>
              <span>Next.js</span>
              <span>VS Code</span>
            </div>
          </div>

          {/* Step 4 – Web Platforms & CMS */}
          <div className={styles.step}>
            <div className={styles.stepNumber}>04</div>
            <h3 className={styles.stepTitle}>🛒 Web Platforms & CMS</h3>
            <p className={styles.stepDescription}>
              I integrate design and development within powerful content and commerce platforms. From headless solutions to CMS-based builds, I deliver sites that are editable, scalable, and client-friendly.
            </p>
            <div className={styles.toolGrid}>
              <span>WordPress</span>
              <span>WooCommerce</span>
              <span>Shopify</span>
              <span>OpenCart</span>
              <span>Firebase</span>
            </div>
          </div>

          {/* Step 05 – AI Powered */}
          <div className={styles.step}>
            <div className={styles.stepNumber}>05</div>
            <h3 className={styles.stepTitle}>🤖 AI Powered</h3>
            <p className={styles.stepDescription}>
              I work hand-in-hand with a growing ecosystem of AI tools — from design ideation to code generation and content workflows. This supercharges creativity, speed, and quality across every phase of the process.
            </p>
            <div className={styles.toolGrid}>
              <span>ChatGPT</span>
              <span>Midjourney</span>
              <span>GitHub Copilot</span>
              <span>Notion AI</span>
              <span>Figma AI</span>
              <span>Adobe Firefly</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
