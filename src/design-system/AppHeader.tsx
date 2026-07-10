import styles from './AppHeader.module.css'

interface AppHeaderProps {
  title: string
  onBack?: () => void
  onShare?: () => void
}

const BackArrow = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path d="M13 4l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 11h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const Share = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 13V3.5m0 0L6.8 6.7M10 3.5l3.2 3.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.5 10H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

/**
 * Tall screen header: a centered bracketed mono title with optional circular
 * back / share chips. Sits inside a colored header band above the content panel.
 */
export function AppHeader({ title, onBack, onShare }: AppHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.side}>
        {onBack && (
          <button className={styles.chip} onClick={onBack} aria-label="Back">
            <BackArrow />
          </button>
        )}
      </div>
      <span className={styles.title}>[{title}]</span>
      <div className={styles.sideRight}>
        {onShare && (
          <button className={styles.chip} onClick={onShare} aria-label="Share">
            <Share />
          </button>
        )}
      </div>
    </div>
  )
}
