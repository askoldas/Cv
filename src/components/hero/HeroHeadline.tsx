'use client'

import styles from './HeroSection.module.scss'

export default function HeroHeadline({
  typedText,
  showCursor = true,
}: {
  typedText: string
  showCursor?: boolean
}) {
  const [topLine, bottomLine] = typedText.split('\n')

  return (
    <h1 className={styles.headlinePrimary}>
      <span className={styles.lineTop}>
        {topLine}
        {showCursor && <span className={styles.cursor} />}
      </span>
      <span className={`${styles.lineBottom} ${styles.wordHighlight}`}>
        {bottomLine}
      </span>
    </h1>
  )
}
