import { useState } from 'react'
import styles from './Projects.module.css'
import { projects } from '../data/portfolio'
import { useInView } from '../hooks/useInView'

const allTags = ['All', ...Array.from(new Set(projects.map(p => p.tag)))]

export default function Projects() {
  const [active, setActive] = useState('All')
  const [ref, inView] = useInView()

  const filtered = active === 'All' ? projects : projects.filter(p => p.tag === active)

  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>04 / projects</span>
          <h2 className={styles.heading}>What I've built</h2>
          <div className={styles.filters}>
            {allTags.map(tag => (
              <button
                key={tag}
                className={`${styles.filter} ${active === tag ? styles.filterActive : ''}`}
                onClick={() => setActive(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className={`${styles.grid} ${inView ? styles.visible : ''}`} ref={ref}>
          {filtered.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article
      className={styles.card}
      style={{ transitionDelay: `${index * 0.07}s` }}
    >
      <div className={styles.cardTop}>
        <span className={styles.cardTag}>{project.tag}</span>
        <div className={styles.cardLinks}>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener" className={styles.cardLink}>
              Live ↗
            </a>
          )}
          <a href={project.github} target="_blank" rel="noopener" className={styles.cardLink}>
            GitHub ↗
          </a>
        </div>
      </div>

      <h3 className={styles.cardTitle}>{project.name}</h3>
      {project.period && <p className={styles.cardPeriod}>{project.period}</p>}

      <p className={styles.cardDesc}>{project.desc}</p>

      <div className={`${styles.highlights} ${expanded ? styles.expanded : ''}`}>
        <ul className={styles.highlightList}>
          {project.highlights.map((h, i) => (
            <li key={i} className={styles.highlight}>{h}</li>
          ))}
        </ul>
      </div>

      <button
        className={styles.expandBtn}
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {expanded ? 'Less detail' : 'More detail'}
        <span className={`${styles.expandIcon} ${expanded ? styles.expandIconOpen : ''}`}>↓</span>
      </button>

      <div className={styles.tech}>
        {project.tech.map(t => (
          <span key={t} className={styles.techTag}>{t}</span>
        ))}
      </div>
    </article>
  )
}
