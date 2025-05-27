'use client'

import styles from './HeroSection.module.scss'
import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import HeroHeadline from './HeroHeadline'
import HeroContentBlock from './HeroContentBlock'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const introBlockRef = useRef<HTMLDivElement>(null)
  const outroBlockRef = useRef<HTMLDivElement>(null)

  const introText = "Hello, I'm\nAskold."
  const outroText = "Let's make your ideas\nVisible."

  const [typedText, setTypedText] = useState('')
  const [typingDone, setTypingDone] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  // Typing on mount
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

  // Scroll-driven headline text transition
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
          const sliceLen = Math.round(introLen * percent)
          setTypedText(introText.slice(0, sliceLen))
        } else if (p >= 0.2 && p < 0.3) {
          const percent = (p - 0.2) / 0.1
          const sliceLen = Math.round(outroLen * percent)
          setTypedText(outroText.slice(0, sliceLen))
        } else {
          setTypedText(outroText)
        }
      }
    })

    return () => scroll.kill()
  }, [typingDone])

  // Block transitions + video scroll sync
  useEffect(() => {
    if (!sectionRef.current || !videoRef.current) return

    const video = videoRef.current
    const intro = introBlockRef.current
    const outro = outroBlockRef.current
    const section = sectionRef.current

    // 1. Intro block fades out fully between 0% and ~30% scroll
    gsap.fromTo(intro,
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'top+=30%',
          scrub: true,
        },
      }
    )

    // 2. Outro block fades in after intro is gone (~30% onward)
    gsap.fromTo(outro,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top+=32%',
          end: 'top+=50%',
          scrub: true,
        },
      }
    )

    // 3. Video scroll sync
    const maxVideoTime = 2
    let rafId: number

    const updateVideo = () => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const scrollY = window.scrollY
      const progress = Math.min(Math.max((scrollY - sectionTop) / sectionHeight, 0), 1)
      const targetTime = maxVideoTime * progress

      if (video.readyState >= 2) {
        video.currentTime = targetTime
      }

      rafId = requestAnimationFrame(updateVideo)
    }

    rafId = requestAnimationFrame(updateVideo)

    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <section ref={sectionRef} className={styles.container}>
      <div className={styles.heroInner}>
        <div className={styles.leftText}>
          <HeroHeadline typedText={typedText} showCursor={showCursor} />
          <HeroContentBlock introRef={introBlockRef} outroRef={outroBlockRef} />
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
