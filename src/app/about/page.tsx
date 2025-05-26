'use client'

import { useState } from 'react'
import Menu from '@/components/menu/Menu'

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
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

      <section style={{ padding: '2rem' }}>
        <h1>About Me</h1>
        <p>
          I’m a web engineer and visual problem solver. My background blends front-end architecture,
          UI/UX design, and branding. I specialize in delivering polished, performant, and purposeful digital experiences.
        </p>
      </section>

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
