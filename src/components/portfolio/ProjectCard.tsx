'use client'

import { useRef, useEffect, useState } from 'react'
import styles from './ProjectCard.module.scss'
import gsap from 'gsap'

interface ProjectCardProps {
  videoSrc: string
  logoSrc: string
  title: string
  description: string
}

export default function ProjectCard({
  videoSrc,
  logoSrc,
  title,
  description
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLImageElement>(null)
  const rafId = useRef<number | null>(null)

  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting
        setIsInView(visible)

        if (visible) {
          gsap.to(cardRef.current, {
            scale: 1.05,
            duration: 0.5,
            ease: 'power2.out'
          })
        } else {
          gsap.to(cardRef.current, {
            scale: 1,
            duration: 0.5,
            ease: 'power2.out'
          })
        }
      },
      { threshold: 0.5 }
    )

    if (cardRef.current) observer.observe(cardRef.current)
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current)
    }
  }, [])

  useEffect(() => {
  const video = videoRef.current
  const overlay = overlayRef.current
  const logo = logoRef.current
  if (!video || !overlay || !logo) return

  if (isInView) {
    video.currentTime = 0
    video.playbackRate = 1
    video.play().catch(() => {})

    // Show overlay and logo right away
    gsap.to(overlay, { opacity: 0.6, duration: 0.5, ease: 'power2.out' })
    gsap.to(logo, { opacity: 1, duration: 0.5, ease: 'power2.out' })
  } else {
    video.pause()
    video.currentTime = 0
    video.playbackRate = 1

    // Hide them instantly or with fade out
    gsap.to(overlay, { opacity: 0, duration: 0.3 })
    gsap.to(logo, { opacity: 0, duration: 0.3 })
  }
}, [isInView])

  return (
    <div className={styles.card} ref={cardRef}>
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          playsInline
          preload="auto"
          className={styles.video}
        />
        <div className={styles.overlay} ref={overlayRef} />
        <img src={logoSrc} alt={title} className={styles.logo} ref={logoRef} />
      </div>
      <div className={styles.textContent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}
