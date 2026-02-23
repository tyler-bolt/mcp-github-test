import type { ProjectConfig } from '../types'
import styles from './ProjectCard.module.css'

interface Props {
  config: ProjectConfig
}

export default function ProjectCard({ config }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <FolderIcon />
        <span className={styles.cardTitle}>Project Info</span>
      </div>
      <div className={styles.rows}>
        <Row label="Name" value={config.name} mono />
        <Row label="Version" value={config.version} mono />
        <Row label="Description" value={config.description} />
      </div>
    </div>
  )
}

function Row({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className={styles.row}>
      <span className={styles.label}>{label}</span>
      <span className={mono ? styles.valueCode : styles.value}>{value}</span>
    </div>
  )
}

function FolderIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z" />
    </svg>
  )
}
