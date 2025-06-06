'use client'

import SectionHeader from '@/components/ui/SectionHeader'
import Header from '@/components/ui/Header'
import ProjectCard from '@/components/portfolio/ProjectCard'
import styles from './PortfolioSection.module.scss'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function PortfolioSection() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <Header
        line="Selected works"
        imgSrc="/amphora.png" // your transparent PNG path
        alt="Decorative stroke"
      />
        <SectionHeader line="Portfolio" videoWidth={350}/>
      </div>

      <div className={styles.projects}>
        <ProjectCard
          videoSrc={`${BASE_PATH}/videos/fixmobile.mp4`}
          logoSrc={`${BASE_PATH}/logos/fixmobile.svg`}
          title="FixMobile"
          description="Redesigned the brand identity, including a new logo and cohesive visuals across physical and digital touchpoints. Developed a custom e-commerce website with an integrated admin panel for product and order management, along with SEO optimization to improve performance and visibility."
        />
        <ProjectCard
          videoSrc={`${BASE_PATH}/videos/masterbean.mp4`}
          logoSrc={`${BASE_PATH}/logos/masterbean.svg`}
          title="MasterBean"
          description="Developed a complete branding package with logo and packaging design. Delivered the website concept and built the online store on WordPress, creating a cohesive and user-focused shopping experience."
        />
        <ProjectCard
          videoSrc={`${BASE_PATH}/videos/rubenrub.mp4`}
          logoSrc={`${BASE_PATH}/logos/rubinrub.svg`}
          title="RubinRub"
          description="Created a range of branding and marketing assets, including visuals for social media and promotions. Designed and developed the WordPress website, providing both visual direction and original copy to reflect the café’s identity."
        />
        <ProjectCard
          videoSrc={`${BASE_PATH}/videos/stefanel.mp4`}
          logoSrc={`${BASE_PATH}/logos/stefanel.svg`}
          title="Stefanel"
          description="Handled in-store visual merchandising, planning product layouts and display strategies based on color theory and seasonal collections. Designed marketing visuals to support brand presentation and enhance the retail experience."
        />
        <ProjectCard
          videoSrc={`${BASE_PATH}/videos/btx.mp4`}
          logoSrc={`${BASE_PATH}/logos/btx.svg`}
          title="BTX Outlet"
          description="Redesigned the logo and created consistent visual materials for digital and print. Conducted product photoshoots to create branded imagery for marketing and e-commerce. Designed and developed an e-commerce website on OpenCart, with custom display features to support product presentation and promotions."
        />
        <ProjectCard
          videoSrc={`${BASE_PATH}/videos/seoquill.mp4`}
          logoSrc={`${BASE_PATH}/logos/seo-quill-logo.svg`}
          title="SeoQuill"
          description="Created the brand identity, logo, and core product concept, shaping the platform’s visual and functional direction. Developed a fully custom website with a tailored content ordering system, and designed the interface to support clarity, usability, and streamlined user experience."
        />
      </div>
    </section>
  )
}
