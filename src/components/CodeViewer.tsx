import styles from './CodeViewer.module.css'

interface Props {
  filename: string
  code: string
  language?: string
}

export default function CodeViewer({ filename, code, language = 'js' }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.dots}>
          <span className={styles.dot} data-color="red" />
          <span className={styles.dot} data-color="yellow" />
          <span className={styles.dot} data-color="green" />
        </div>
        <span className={styles.filename}>{filename}</span>
        <span className={styles.lang}>{language}</span>
      </div>
      <pre className={styles.pre}><code className={styles.code}>{code}</code></pre>
    </div>
  )
}
