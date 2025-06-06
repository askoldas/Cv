'use client'

import Menu from '@/components/menu/Menu'
import Headline from '@/components/ui/Headline'
import ContactForm from '@/app/contact/ContactForm'
import styles from './contact.module.scss'

export default function ContactPage() {
  return (
    <>
      <Menu />
      <section className={styles.container}>
        <div className={styles.header}>
          <Headline lineTop="Let's Connect" lineBottom="Contact" />
        </div>

        <div className={styles.content}>
          <div className={styles.left}>
            <h3>Get in touch</h3>
            <p>
              Whether you’re planning a new project, need a designer–developer hybrid, or just want to chat about creative ideas — I’d love to hear from you.
            </p>

            <div className={styles.contactLinks}>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <a href="https://t.me/your_username" target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
              <a href="tel:+1234567890">
                Call
              </a>
            </div>
          </div>

          <div className={styles.right}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
