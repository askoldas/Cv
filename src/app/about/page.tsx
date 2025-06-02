'use client'

import { useEffect, useRef } from 'react'
import Menu from '@/components/menu/Menu'
import Headline from '@/components/ui/Headline'
import styles from './about.module.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8
    }

    const onScroll = () => {
      const scrollY = window.scrollY
      const fadeEnd = 400 // Adjust how quickly it fades
      const opacity = Math.max(0, 1 - scrollY / fadeEnd)

      if (wrapperRef.current) {
        wrapperRef.current.style.opacity = String(opacity)
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const steps = gsap.utils.toArray(`.${styles.step}`)
    const activeDotClass = styles.active
    let lastActiveDot: HTMLElement | null = null

    steps.forEach((step: any) => {
      const dot = step.querySelector(`.${styles.dot}`) as HTMLElement
      const content = step.querySelector(`.${styles.leftRight}`)

      ScrollTrigger.create({
        trigger: step,
        start: 'top 60%',
        end: 'bottom 40%',
        onEnter: () => {
          if (lastActiveDot && lastActiveDot !== dot) {
            lastActiveDot.classList.remove(activeDotClass)
          }
          dot.classList.add(activeDotClass)
          lastActiveDot = dot
          gsap.to(content, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
        },
        onEnterBack: () => {
          if (lastActiveDot && lastActiveDot !== dot) {
            lastActiveDot.classList.remove(activeDotClass)
          }
          dot.classList.add(activeDotClass)
          lastActiveDot = dot
          gsap.to(content, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
        },
        onLeave: () => {
          gsap.to(content, { opacity: 0, y: 40, duration: 0.4, ease: 'power1.out' })
          dot.classList.remove(activeDotClass)
        },
        onLeaveBack: () => {
          gsap.to(content, { opacity: 0, y: 40, duration: 0.4, ease: 'power1.out' })
          dot.classList.remove(activeDotClass)
        },
      })
    })
  }, [])

  const steps = [
    {
      number: '00',
      title: '📐 Strategy & Structure',
      description: `Every great project begins with listening...`,
      tools: ['Notion', 'ClickUp', 'Asana', 'Jira', 'Miro'],
    },
    {
      number: '01',
      emoji: '🎨',
      title: 'Design & Creative',
      description:
        'Visual expression is at the heart of everything I build...',
      tools: ['Photoshop', 'Illustrator', 'InDesign', 'After Effects', 'SketchUp'],
    },
    {
      number: '02',
      emoji: '🧪',
      title: 'UI/UX & Prototyping',
      description:
        "I prototype with purpose — validating ideas through wireframes...",
      tools: ['Figma', 'Adobe XD', 'Axure RP', 'Balsamiq'],
    },
    {
      number: '03',
      emoji: '💻',
      title: 'Frontend Development',
      description:
        'My front-end work bridges visuals and interaction...',
      tools: ['HTML', 'CSS', 'Sass', 'JavaScript', 'GSAP', 'React.js', 'Next.js', 'VS Code'],
    },
    {
      number: '04',
      emoji: '🛒',
      title: 'Web Platforms & CMS',
      description:
        'I integrate design and development within powerful content and commerce platforms...',
      tools: ['WordPress', 'WooCommerce', 'Shopify', 'OpenCart', 'Firebase'],
    },
    {
      number: '05',
      emoji: '🤖',
      title: 'AI Powered',
      description:
        'I work hand-in-hand with a growing ecosystem of AI tools...',
      tools: ['ChatGPT', 'Midjourney', 'Adobe Firefly', 'Sora', 'DeepSeek', 'Krea'],
    },
  ]

  return (
    <>
      <div className={styles.videoWrapper} ref={wrapperRef}>
        <video
          ref={videoRef}
          className={styles.videoBackground}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/header-bg.mp4" type="video/mp4" />
        </video>
        <div className={styles.leftFade}></div>
      </div>

      <Menu />

      <section className={styles.container}>
        <div className={styles.header}>
          <Headline lineTop="Askold Makrikov" lineBottom="Resume" />
        </div>

        <div className={styles.aboutSection}>
          <h2>Designer. Developer. Creative Thinker.</h2>
          <p>
            I bridge design and technology to craft engaging, user-focused digital experiences. My background spans frontend development, UI/UX design, and motion — with a passion for both aesthetics and performance.
          </p>
        </div>

        <div className={styles.aboutMeBlock}>
          <div className={styles.left}>
            <h3>About Me</h3>
          </div>
          <div className={styles.right}>
            <p>
              What began as a creative exploration of design tools and web technologies has grown into a practice focused on building digital experiences that are structured, intuitive, and visually engaging.
            </p>
            <p>
              I combine design sensitivity with technical skill — shaping interfaces that feel natural, telling stories through layout and copy, and developing high-performing websites that scale. From UI design to e-commerce builds, every project is an opportunity to craft with purpose and detail.
            </p>
            <p>
              Over the years, I’ve worked across every phase of digital creation — strategy, design, content, front-end development, and platform integration. This hands-on journey has shaped my flexible, end-to-end approach and familiarized me with a wide range of tools, techniques, and workflows that adapt to each project.
            </p>
            <p>
              It’s this blend of creativity, structure, and process awareness that drives the way I think, work, and collaborate.
            </p>

          </div>
        </div>

        <div className={styles.processSection}>
          {steps.map((step, index) => (
            <div className={styles.step} key={index}>
              <div className={styles.leftRight}>
                <div className={styles.left}>
                  <div className={styles.stepNumber}>{step.number}</div>
                  <h3 className={styles.stepTitle}>
                    {step.emoji} {step.title}
                  </h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
                <div className={styles.right}>
                  <div className={styles.toolGrid}>
                    {step.tools.map((tool, i) => (
                      <span key={i}>{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.middle}>
                <div className={styles.dot}></div>
                <div className={styles.line}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.deliverySection}>
        <h2 className={styles.deliveryTitle}>From Idea to Online</h2>
        <p className={styles.deliveryIntro}>
          I don’t just design or code — I deliver complete, launch-ready digital products. From first idea to final pixel, I cover every step of the journey.
        </p>
        <div className={styles.deliveryGrid}>
          <div className={styles.deliveryCard}>
            <h4>Concept Crystallization</h4>
            <p>We clarify goals, users, and positioning — shaping ideas into clear direction and strategy.</p>
          </div>
          <div className={styles.deliveryCard}>
            <h4>Brand Identity</h4>
            <p>Logo design, visual language, and brand systems that unify your message across all channels.</p>
          </div>
          <div className={styles.deliveryCard}>
            <h4>Web Design</h4>
            <p>Responsive and aesthetic UI/UX designs — crafted for clarity, usability, and engagement.</p>
          </div>
          <div className={styles.deliveryCard}>
            <h4>Content & Copywriting</h4>
            <p>Strategic website copy, UX microcopy, and structured content — clear, aligned, and effective.</p>
          </div>
          <div className={styles.deliveryCard}>
            <h4>Web Development</h4>
            <p>Fast, responsive websites built with React, Next.js, or WordPress — clean, scalable, and animated.</p>
          </div>
          <div className={styles.deliveryCard}>
            <h4>SEO & Launch Optimization</h4>
            <p>Technical SEO, performance tuning, and accessibility — ready to perform from day one.</p>
          </div>
        </div>

      </div>
    </>
  )
}
