'use client'

import styles from './Button.module.scss'
import { ReactNode } from 'react'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'solid' | 'outlined'
  icon?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>


export default function Button({ children, variant = 'solid', icon }: ButtonProps) {
  return (
    <button className={`${styles.cta} ${styles[variant]}`}> 
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  )
}
