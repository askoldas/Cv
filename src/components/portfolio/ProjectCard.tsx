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
      {
        threshold: 0.5
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current)
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const slowdownCheck = () => {
      const { currentTime, duration } = video

      if (duration && currentTime >= duration * 0.85) {
        const progress = (currentTime - duration * 0.85) / (duration * 0.15)
        const eased = 1 - (3 * progress ** 2 - 2 * progress ** 3) // smoothstep
        video.playbackRate = Math.max(0.5, eased)
      } else {
        video.playbackRate = 1
      }

      rafId.current = requestAnimationFrame(slowdownCheck)
    }

    if (isInView) {
      video.currentTime = 0
      video.playbackRate = 1
      video.play().catch(() => {})
      rafId.current = requestAnimationFrame(slowdownCheck)
    } else {
      video.pause()
      video.currentTime = 0
      video.playbackRate = 1
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
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
        <img src={logoSrc} alt={title} className={styles.logo} />
      </div>
      <div className={styles.textContent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}
