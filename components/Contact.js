import { useState } from 'react'
import styles from './Contact.module.css'
import { personal } from '../data/portfolio'
import { useInView } from '../hooks/useInView'

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('Thanks — I\'ll get back to you soon.')
    setForm({ name: '', email: '', message: '' })
  }

  const links = [
    { label: 'Email', val: personal.email, href: `mailto:${personal.email}` },
    { label: 'GitHub', val: 'Divyanshutiwari102', href: personal.github },
    { label: 'LinkedIn', val: 'divyanshu-tiwari', href: personal.linkedin },
    { label: 'LeetCode', val: 'divyanshutiwari337 · 250+ solved', href: personal.leetcode },
    { label: 'Phone', val: personal.phone, href: `tel:${personal.phone.replace(/ /g, '')}` },
  ]

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>06 / contact</span>
          <h2 className={styles.heading}>Let's talk</h2>
          <p className={styles.sub}>
            Open to internships, full-time roles, and interesting projects.
          </p>
        </div>

        <div className={`${styles.grid} ${inView ? styles.visible : ''}`} ref={ref}>
          <div className={styles.left}>
            <div className={styles.linksList}>
              {links.map(l => (
                <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener" className={styles.linkRow}>
                  <span className={styles.linkLabel}>{l.label}</span>
                  <span className={styles.linkVal}>{l.val} →</span>
                </a>
              ))}
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel} htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className={`${styles.input} ${styles.textarea}`}
                placeholder="What's on your mind?"
                rows={5}
                required
              />
            </div>
            <button type="submit" className={styles.submit}>
              Send message →
            </button>
            {status && <p className={styles.statusMsg}>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
