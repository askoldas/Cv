'use client'

import Menu from '@/components/menu/Menu'
import Headline from '@/components/ui/Headline'
import ProjectCard from '@/components/portfolio/ProjectCard'
import styles from './portfolio.module.scss'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function PortfolioPage() {
  return (
    <>
      <Menu />
      <section className={styles.container}>
        <div className={styles.header}>
          <Headline lineTop="Selected works" lineBottom="Portfolio" />
        </div>

        <div className={styles.projects}>
          <ProjectCard
            videoSrc={`${BASE_PATH}/videos/fixmobile.mp4`}
            logoSrc={`${BASE_PATH}/logos/fixmobile.svg`}
            title="FixMobile"
            description="E-commerce | Branding"
          />
          <ProjectCard
            videoSrc={`${BASE_PATH}/videos/masterbean.mp4`}
            logoSrc={`${BASE_PATH}/logos/masterbean.svg`}
            title="MasterBean"
            description="E-commerce | Branding"
          />
          <ProjectCard
            videoSrc={`${BASE_PATH}/videos/rubenrub.mp4`}
            logoSrc={`${BASE_PATH}/logos/rubinrub.svg`}
            title="RubinRub"
            description="Website"
          />
          <ProjectCard
            videoSrc={`${BASE_PATH}/videos/stefanel.mp4`}
            logoSrc={`${BASE_PATH}/logos/stefanel.svg`}
            title="Stefanel"
            description="Marketing materials"
          />
          <ProjectCard
            videoSrc={`${BASE_PATH}/videos/btx.mp4`}
            logoSrc={`${BASE_PATH}/logos/btx.svg`}
            title="BTXoutlet"
            description="E-commerce | Branding"
          />
        </div>
      </section>
    </>
  )
}
