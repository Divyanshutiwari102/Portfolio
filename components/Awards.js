import styles from './Awards.module.css'
import { awards, education } from '../data/portfolio'
import { useInView } from '../hooks/useInView'

export default function Awards() {
  const [ref, inView] = useInView()

  return (
    <section className={styles.section} id="awards">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>05 / recognition</span>
          <h2 className={styles.heading}>Awards & achievements</h2>
        </div>

        <div className={`${styles.grid} ${inView ? styles.visible : ''}`} ref={ref}>
          {/* Education card */}
          <div className={styles.eduCard} style={{ transitionDelay: '0s' }}>
            <span className={styles.eduLabel}>Education</span>
            <h3 className={styles.eduDegree}>{education.degree}</h3>
            <p className={styles.eduInst}>{education.institution}</p>
            <div className={styles.eduMeta}>
              <span>{education.period}</span>
              <span className={styles.cgpa}>CGPA {education.cgpa}</span>
            </div>
          </div>

          {/* Award cards */}
          {awards.map((award, i) => (
            <div key={award.title} className={styles.card} style={{ transitionDelay: `${(i + 1) * 0.08}s` }}>
              <span className={styles.cardNum}>0{i + 1}</span>
              <h3 className={styles.cardTitle}>{award.title}</h3>
              {award.link
                ? <a href={award.link} target="_blank" rel="noopener" className={styles.cardEvent}>{award.event}</a>
                : <p className={styles.cardEvent}>{award.event}</p>
              }
              <p className={styles.cardDesc}>{award.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
