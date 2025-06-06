'use client'

import styles from './Header.module.scss'

type SectionHeaderProps = {
  line: string
  imgSrc: string
  alt?: string
  className?: string
}

export default function SectionHeader({
  line,
  imgSrc,
  alt = '',
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`${styles.sectionHeaderWrapper} ${className}`}>
      <img src={imgSrc} alt={alt} className={styles.image} />
      <div className={styles.textContainer}>
        <h2 className={styles.sectionHeaderText}>{line}</h2>
      </div>
    </div>
  )
}
