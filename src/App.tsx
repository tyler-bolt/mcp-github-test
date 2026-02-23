import Header from './components/Header'
import ProjectCard from './components/ProjectCard'
import CodeViewer from './components/CodeViewer'
import ConsoleOutput from './components/ConsoleOutput'
import type { ProjectConfig } from './types'
import styles from './App.module.css'

const PROJECT_CONFIG: ProjectConfig = {
  name: 'mcp-github-test',
  version: '1.0.0',
  description: 'Testing GitHub MCP tools',
}

const HELLO_JS = `console.log('Hello from GitHub MCP!');`

const CONFIG_JSON = `{
  "name": "mcp-github-test",
  "version": "1.0.0",
  "description": "Testing GitHub MCP tools"
}`

export default function App() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.hero}>
            <h1 className={styles.heroTitle}>MCP GitHub Test</h1>
            <p className={styles.heroDesc}>
              A minimal project for testing GitHub MCP (Model Context Protocol) tools — imported directly from GitHub into Bolt.
            </p>
          </section>

          <div className={styles.grid}>
            <div className={styles.col}>
              <ProjectCard config={PROJECT_CONFIG} />
              <ConsoleOutput />
            </div>
            <div className={styles.col}>
              <CodeViewer filename="hello.js" code={HELLO_JS} language="JavaScript" />
              <CodeViewer filename="config.json" code={CONFIG_JSON} language="JSON" />
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>mcp-github-test &mdash; brought into Bolt via GitHub MCP</span>
      </footer>
    </div>
  )
}
