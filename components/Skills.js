import styles from './Skills.module.css'
import { skills } from '../data/portfolio'
import { useInView } from '../hooks/useInView'

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section className={styles.section} id="skills">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>02 / skills</span>
          <h2 className={styles.heading}>Technical stack</h2>
        </div>

        <div className={`${styles.grid} ${inView ? styles.visible : ''}`} ref={ref}>
          {skills.map((group, i) => (
            <div
              key={group.category}
              className={styles.card}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <h3 className={styles.category}>{group.category}</h3>
              <div className={styles.tags}>
                {group.items.map(item => (
                  <span key={item} className={styles.tag}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
