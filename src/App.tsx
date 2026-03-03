import Header from './components/Header'
import ProjectCard from './components/ProjectCard'
import CodeViewer from './components/CodeViewer'
import ConsoleOutput from './components/ConsoleOutput'
import FeatureCard from './components/FeatureCard'
import StatsCard from './components/StatsCard'
import ThemeToggle from './components/ThemeToggle'
import { useTheme } from './hooks/useTheme'
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
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.themeToggleWrapper}>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </div>
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.hero}>
            <h1 className={styles.heroTitle}>MCP GitHub Test</h1>
            <p className={styles.heroDesc}>
              A minimal project for testing GitHub MCP (Model Context Protocol) tools — imported directly from GitHub into Bolt.
            </p>
          </section>

          <section className={styles.statsSection}>
            <div className={styles.statsGrid}>
              <StatsCard value="100%" label="Open Source" />
              <StatsCard value="0" label="Dependencies" />
              <StatsCard value="< 1s" label="Load Time" />
              <StatsCard value="A+" label="Performance" />
            </div>
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

          <section className={styles.featuresSection}>
            <h2 className={styles.sectionTitle}>Key Features</h2>
            <div className={styles.featuresGrid}>
              <FeatureCard
                icon="🚀"
                title="Lightning Fast"
                description="Built with modern tools for optimal performance and instant loading"
              />
              <FeatureCard
                icon="🔧"
                title="Developer Friendly"
                description="Clean code structure with TypeScript support and hot module replacement"
              />
              <FeatureCard
                icon="🎨"
                title="Modern Design"
                description="Beautiful UI with smooth animations and responsive layout"
              />
              <FeatureCard
                icon="📦"
                title="Easy Integration"
                description="Seamlessly import from GitHub using MCP tools and get started quickly"
              />
              <FeatureCard
                icon="🔒"
                title="Type Safe"
                description="Full TypeScript support ensures robust and maintainable code"
              />
              <FeatureCard
                icon="⚡"
                title="Vite Powered"
                description="Next generation frontend tooling for blazing fast development"
              />
            </div>
          </section>

          <section className={styles.techStack}>
            <h2 className={styles.sectionTitle}>Tech Stack</h2>
            <div className={styles.techGrid}>
              <div className={styles.techItem}>
                <span className={styles.techName}>React 18</span>
                <span className={styles.techDesc}>Modern UI library</span>
              </div>
              <div className={styles.techItem}>
                <span className={styles.techName}>TypeScript</span>
                <span className={styles.techDesc}>Type safety</span>
              </div>
              <div className={styles.techItem}>
                <span className={styles.techName}>Vite</span>
                <span className={styles.techDesc}>Build tool</span>
              </div>
              <div className={styles.techItem}>
                <span className={styles.techName}>CSS Modules</span>
                <span className={styles.techDesc}>Scoped styling</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>mcp-github-test &mdash; brought into Bolt via GitHub MCP</span>
      </footer>
    </div>
  )
}
