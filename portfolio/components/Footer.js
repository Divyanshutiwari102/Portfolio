import styles from './Footer.module.css'
import { personal } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.logo}>DT<span className={styles.dot}>.</span></span>
          <span className={styles.copy}>© 2026 Divyanshu Tiwari</span>
        </div>
        <div className={styles.right}>
          <a href={personal.github} target="_blank" rel="noopener" className={styles.link}>GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noopener" className={styles.link}>LinkedIn</a>
          <a href={personal.leetcode} target="_blank" rel="noopener" className={styles.link}>LeetCode</a>
          <a href={`mailto:${personal.email}`} className={styles.link}>Email</a>
        </div>
      </div>
    </footer>
  )
}
