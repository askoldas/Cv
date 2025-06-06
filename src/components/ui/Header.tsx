'use client'

import styles from './Header.module.scss'

type SectionHeaderProps = {
  line: string
  imgSrc: string
  alt?: string
  className?: string
  headerRefs?: {
    imageRef: React.RefObject<HTMLImageElement>
    textRef: React.RefObject<HTMLHeadingElement>
  }
}

export default function Header({
  line,
  imgSrc,
  alt = '',
  className = '',
  headerRefs,
}: SectionHeaderProps) {
  return (
    <div className={`${styles.sectionHeaderWrapper} ${className}`}>
      {/* 👇 Place TEXT first */}
      <div className={styles.textContainer}>
        <h2 ref={headerRefs?.textRef} className={styles.sectionHeaderText}>
          {line}
        </h2>
      </div>

      {/* 👇 Image comes after */}
      <img
        ref={headerRefs?.imageRef}
        src={imgSrc}
        alt={alt}
        className={styles.image}
      />
    </div>
  )
}
