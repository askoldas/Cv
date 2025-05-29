'use client'

import styles from './Headline.module.scss'

type HeadlineProps = {
  lineTop: string
  lineBottom: string
  className?: string
}

export default function Headline({ lineTop, lineBottom, className = '' }: HeadlineProps) {
  return (
    <div className={`${styles.headlineWrapper} ${className}`}>
      <h1 className={styles.headlinePrimary}>
        <div className={styles.lineTop}>{lineTop}</div>
        <div className={styles.lineBottom}>{lineBottom}</div>
      </h1>
    </div>
  )
}
