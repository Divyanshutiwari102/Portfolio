import styles from './About.module.css'
import { personal, education } from '../data/portfolio'
import { useInView } from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={`${styles.grid} ${inView ? styles.visible : ''}`} ref={ref}>

          <div className={styles.left}>
            <span className={styles.label}>01 / about</span>
            <h2 className={styles.heading}>Who I am</h2>
          </div>

          <div className={styles.right}>
            {personal.about.map((para, i) => (
              <p key={i} className={styles.para} style={{ animationDelay: `${i * 0.12}s` }}>
                {para}
              </p>
            ))}

            <div className={styles.details}>
              <div className={styles.detail}>
                <span className={styles.detailKey}>Location</span>
                <span className={styles.detailVal}>{personal.location}</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailKey}>Education</span>
                <span className={styles.detailVal}>{education.institution}</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailKey}>CGPA</span>
                <span className={styles.detailVal}>{education.cgpa}</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailKey}>Graduating</span>
                <span className={styles.detailVal}>Aug 2027</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailKey}>Email</span>
                <a href={`mailto:${personal.email}`} className={styles.detailLink}>{personal.email}</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
