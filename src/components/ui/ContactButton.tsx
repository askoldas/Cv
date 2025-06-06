'use client'

import styles from './ContactButton.module.scss'
import { ReactNode } from 'react'

type ContactButtonProps = {
  href: string
  icon: ReactNode
  color?: string // used for hover background
}

export default function ContactButton({ href, icon, color = '#fff' }: ContactButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      style={{ '--hover-bg': color } as React.CSSProperties}
    >
      <span className={styles.icon}>{icon}</span>
    </a>
  )
}
