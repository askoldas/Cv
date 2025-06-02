'use client'

import { useEffect, useRef } from 'react'
import styles from './HeaderBackground.module.scss'

export default function HeaderBackground() {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const fadeEnd = 400 // fade ends after 400px scroll
      const opacity = Math.max(0, 1 - scrollY / fadeEnd)

      if (wrapperRef.current) {
        wrapperRef.current.style.opacity = String(opacity)
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={styles.videoWrapper} ref={wrapperRef}>
      <video
        className={styles.videoBackground}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/header-bg.mp4" type="video/mp4" />
      </video>
      <div className={styles.leftFade} />
    </div>
  )
}
