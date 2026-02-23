export interface ProjectConfig {
  name: string
  version: string
  description: string
}

export interface LogEntry {
  id: number
  timestamp: string
  message: string
  level: 'info' | 'success' | 'warning' | 'error'
}
