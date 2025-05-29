'use client'

import Menu from '@/components/menu/Menu'
import Headline from '@/components/ui/Headline'

export default function PortfolioPage() {
  return (
    <>
      <Menu />
      <section
        style={{
          backgroundColor: 'black',
          color: 'white',
          minHeight: '100vh',
          paddingTop: '64px', // adjust for fixed navbar height
        }}
      >
        <Headline lineTop="Selected works" lineBottom="Portfolio" />

        {/* You can insert portfolio grid or content here later */}
      </section>
    </>
  )
}
