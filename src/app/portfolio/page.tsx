'use client'

import { useState } from 'react'
import HeroHeadline from '@/components/hero/HeroHeadline'
import Menu from '@/components/menu/Menu'
import styles from './portfolio.module.scss'

const typedText = 'Browse\nFeatured Projects'

const projects = [
  {
    title: 'Project One',
    image: '/projects/project1.jpg',
  },
  {
    title: 'Project Two',
    image: '/projects/project2.jpg',
  },
  {
    title: 'Project Three',
    image: '/projects/project3.jpg',
  },
]

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className={styles.container}>
      {/* Hamburger Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          position: 'fixed',
          top: '1.5rem',
          right: '1.5rem',
          zIndex: 100,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label="Toggle menu"
      >
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            style={{
              width: '24px',
              height: '2px',
              background: '#fff',
              margin: '5px 0',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </button>

      {/* Header */}
      <div className={styles.header}>
        <HeroHeadline typedText={typedText} showCursor={false} />
      </div>

      {/* Project List */}
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={project.image} alt={project.title} />
            <p>{project.title}</p>
          </div>
        ))}
      </div>

      {/* Fullscreen Menu Overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: '#000',
          zIndex: 90,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        }}>
          <Menu />
        </div>
      )}
    </main>
  )
}
