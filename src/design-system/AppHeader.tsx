import styles from './AppHeader.module.css'

interface AppHeaderProps {
  title: string
  onBack?: () => void
  onShare?: () => void
}

const BackArrow = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Share = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 13V3m0 0L6.5 6.5M10 3l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 10v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

/** Header with a back control, centered bracket title, and optional share action. */
export function AppHeader({ title, onBack, onShare }: AppHeaderProps) {
  return (
    <header className={styles.header}>
      <button className={styles.side} onClick={onBack} aria-label="Back">
        {onBack && <BackArrow />}
      </button>
      <span className={styles.title}>[{title}]</span>
      <button className={styles.side} onClick={onShare} aria-label="Share">
        {onShare && <Share />}
      </button>
    </header>
  )
}
