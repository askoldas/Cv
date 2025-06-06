'use client'

import SectionHeader from '@/components/ui/SectionHeader'
import ContactForm from '@/app/contact/ContactForm'
import ContactButton from '@/components/ui/ContactButton'
import styles from './ContactSection.module.scss'
import { FaWhatsapp, FaTelegramPlane, FaPhoneAlt } from 'react-icons/fa'

export default function ContactSection() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <SectionHeader line="Contact" videoWidth={280} />
      </div>

      <div className={styles.content}>
        <div className={styles.left}>
          <h3>Get in touch</h3>
          <p>
            Whether you’re planning a new project, need a designer–developer hybrid,
            or just want to chat about creative ideas — I’d love to hear from you.
          </p>

          <div className={styles.contactLinks}>
            <ContactButton
              href="https://wa.me/1234567890"
              icon={<FaWhatsapp />}
              color="#25D366"
            />

            <ContactButton
              href="https://t.me/your_username"
              icon={<FaTelegramPlane />}
              color="#0088CC"
            />

            <ContactButton
              href="tel:+1234567890"
              icon={<FaPhoneAlt />}
              color="#f0c332"
            />

          </div>
        </div>

        <div className={styles.right}>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
