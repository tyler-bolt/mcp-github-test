import { useState } from 'react'
import type { LogEntry } from '../types'
import styles from './ConsoleOutput.module.css'

const INITIAL_LOGS: LogEntry[] = [
  { id: 1, timestamp: '', message: 'Initializing MCP GitHub tools...', level: 'info' },
  { id: 2, timestamp: '', message: 'Hello from GitHub MCP!', level: 'success' },
  { id: 3, timestamp: '', message: 'Connection established', level: 'success' },
]

function formatTime(d: Date) {
  return d.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
}

export default function ConsoleOutput() {
  const [logs, setLogs] = useState<LogEntry[]>(() =>
    INITIAL_LOGS.map((l) => ({ ...l, timestamp: formatTime(new Date()) }))
  )
  const [running, setRunning] = useState(false)

  function runScript() {
    if (running) return
    setRunning(true)
    const msgs: Array<{ message: string; level: LogEntry['level']; delay: number }> = [
      { message: 'Running hello.js...', level: 'info', delay: 0 },
      { message: 'Hello from GitHub MCP!', level: 'success', delay: 600 },
      { message: 'Script exited with code 0', level: 'info', delay: 1100 },
    ]
    msgs.forEach(({ message, level, delay }) => {
      setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          { id: Date.now() + delay, timestamp: formatTime(new Date()), message, level },
        ])
        if (delay === 1100) setRunning(false)
      }, delay)
    })
  }

  function clearLogs() {
    setLogs([])
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <TerminalIcon />
        <span className={styles.title}>Console Output</span>
        <div className={styles.actions}>
          <button className={styles.btn} onClick={runScript} disabled={running}>
            {running ? 'Running...' : 'Run hello.js'}
          </button>
          <button className={styles.btnGhost} onClick={clearLogs}>Clear</button>
        </div>
      </div>
      <div className={styles.console}>
        {logs.length === 0 && (
          <span className={styles.empty}>No output. Click "Run hello.js" to execute the script.</span>
        )}
        {logs.map((log) => (
          <div key={log.id} className={`${styles.line} ${styles[log.level]}`}>
            <span className={styles.ts}>{log.timestamp}</span>
            <span className={styles.msg}>{log.message}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function TerminalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15H1.75A1.75 1.75 0 010 13.25V2.75zm1.75-.25a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25H1.75zM7.25 8a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L5.44 8 3.72 6.28a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm1.5 1.5a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
    </svg>
  )
}
