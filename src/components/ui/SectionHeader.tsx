'use client'

import styles from './SectionHeader.module.scss'

type SectionHeaderProps = {
  line: string
  className?: string
  videoWidth?: number | string // px number or full CSS value
}

export default function SectionHeader({
  line,
  className = '',
  videoWidth = 360, // default size
}: SectionHeaderProps) {
  return (
    <div className={`${styles.sectionHeaderWrapper} ${className}`}>
      <div className={styles.inner}>
        <video
          className={styles.video}
          src="/rocks.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ width: typeof videoWidth === 'number' ? `${videoWidth}px` : videoWidth }}
        />
        <h2 className={styles.sectionHeaderText}>{line}</h2>
      </div>
    </div>
  )
}
