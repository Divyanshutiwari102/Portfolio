import styles from './Experience.module.css'
import { experience } from '../data/portfolio'
import { useInView } from '../hooks/useInView'

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section className={styles.section} id="experience">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>03 / experience</span>
          <h2 className={styles.heading}>Where I've worked</h2>
        </div>

        <div className={`${styles.list} ${inView ? styles.visible : ''}`} ref={ref}>
          {experience.map((job, i) => (
            <div key={job.company} className={styles.item} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className={styles.meta}>
                <span className={styles.period}>{job.period}</span>
              </div>
              <div className={styles.body}>
                <div className={styles.top}>
                  <h3 className={styles.role}>{job.role}</h3>
                  <span className={styles.company}>{job.company}</span>
                </div>
                <ul className={styles.points}>
                  {job.points.map((p, j) => (
                    <li key={j} className={styles.point}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
