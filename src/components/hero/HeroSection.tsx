'use client'

import styles from './HeroSection.module.scss'
import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import HeroHeadline from './HeroHeadline'
import HeroContentBlock from './HeroContentBlock'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    setVh()
    window.addEventListener('resize', setVh)
    window.addEventListener('orientationchange', setVh)

    return () => {
      window.removeEventListener('resize', setVh)
      window.removeEventListener('orientationchange', setVh)
    }
  }, [])

  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const introBlockRef = useRef<HTMLDivElement>(null)
  const outroBlockRef = useRef<HTMLDivElement>(null)

  const introText = "Hello, I'm\nAskold."
  const outroText = "Let's make your ideas\nVisible."

  const [typedText, setTypedText] = useState('')
  const [typingDone, setTypingDone] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  // Typing animation
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setTypedText(introText.slice(0, index + 1))
      index++
      if (index > introText.length) {
        clearInterval(interval)
        setTypingDone(true)
        setShowCursor(false)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Scroll-triggered text switch
  useEffect(() => {
    if (!typingDone || !sectionRef.current) return

    const introLen = introText.length
    const outroLen = outroText.length

    const scroll = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        const p = self.progress

        if (p < 0.1) {
          setTypedText(introText)
        } else if (p >= 0.1 && p < 0.2) {
          const percent = 1 - (p - 0.1) / 0.1
          setTypedText(introText.slice(0, Math.round(introLen * percent)))
        } else if (p >= 0.2 && p < 0.3) {
          const percent = (p - 0.2) / 0.1
          setTypedText(outroText.slice(0, Math.round(outroLen * percent)))
        } else {
          setTypedText(outroText)
        }
      }
    })

    return () => scroll.kill()
  }, [typingDone])

  // Fade in/out blocks & set video time on scroll
  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    const intro = introBlockRef.current
    const outro = outroBlockRef.current

    if (!section || !video || !intro || !outro) return

    gsap.set(outro, { opacity: 0, pointerEvents: 'none', zIndex: 0 })
    gsap.set(intro, { opacity: 1, pointerEvents: 'auto', zIndex: 1 })

    gsap.to(intro, {
      opacity: 0,
      pointerEvents: 'none',
      zIndex: 0,
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'top+=30%',
        scrub: true
      }
    })

    gsap.to(outro, {
      opacity: 1,
      pointerEvents: 'auto',
      zIndex: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top+=32%',
        end: 'top+=50%',
        scrub: true
      }
    })

    // Optional: update video time once on scroll using ScrollTrigger
    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress
        const maxVideoTime = 2
        const targetTime = maxVideoTime * progress

        if (video.readyState >= 2 && isFinite(targetTime)) {
          video.currentTime = targetTime
        }
      }
    })
  }, [])

  return (
    <section ref={sectionRef} className={styles.container}>
      <div className={styles.heroInner}>
        <div className={styles.leftText}>
          <div className={styles.headlineWrapper}>
            <HeroHeadline typedText={typedText} showCursor={showCursor} />
          </div>
          <HeroContentBlock introRef={introBlockRef} outroRef={outroBlockRef} />
        </div>

        <div className={styles.rightVideo}>
          <video
            ref={videoRef}
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/intro.mp4`}
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
