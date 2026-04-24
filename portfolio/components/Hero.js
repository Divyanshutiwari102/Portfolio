import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'
import { personal } from '../data/portfolio'

const roles = [
  'Full Stack Java Developer',
  'Backend Systems Engineer',
  'LLM Pipeline Builder',
  'Spring Boot Specialist',
]

export default function Hero() {
  const typeRef = useRef(null)

  useEffect(() => {
    let roleIdx = 0
    let charIdx = 0
    let deleting = false
    let timer

    const type = () => {
      const current = roles[roleIdx]
      if (!typeRef.current) return

      if (!deleting) {
        typeRef.current.textContent = current.slice(0, charIdx + 1)
        charIdx++
        if (charIdx === current.length) {
          deleting = true
          timer = setTimeout(type, 1800)
          return
        }
      } else {
        typeRef.current.textContent = current.slice(0, charIdx - 1)
        charIdx--
        if (charIdx === 0) {
          deleting = false
          roleIdx = (roleIdx + 1) % roles.length
        }
      }
      timer = setTimeout(type, deleting ? 40 : 80)
    }

    timer = setTimeout(type, 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.content}>
        <p className={styles.line}>
          <span className={styles.lineNum}>01</span>
          <span className={styles.lineText}>Greater Noida, India</span>
        </p>

        <h1 className={styles.name}>{personal.name}</h1>

        <div className={styles.roleWrap}>
          <span className={styles.rolePrefix}>{'>'} </span>
          <span ref={typeRef} className={styles.role} />
          <span className={styles.cursor}>_</span>
        </div>

        <p className={styles.desc}>
          {personal.about[0]}
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}
            onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            See my work
          </a>
          <a href="#contact" className={styles.btnGhost}
            onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Get in touch
          </a>
        </div>

        <div className={styles.socials}>
          <a href={personal.github} target="_blank" rel="noopener" className={styles.social}>
            GitHub
          </a>
          <span className={styles.socialDivider}>/</span>
          <a href={personal.linkedin} target="_blank" rel="noopener" className={styles.social}>
            LinkedIn
          </a>
          <span className={styles.socialDivider}>/</span>
          <a href={personal.leetcode} target="_blank" rel="noopener" className={styles.social}>
            LeetCode
          </a>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>scroll</span>
      </div>
    </section>
  )
}
