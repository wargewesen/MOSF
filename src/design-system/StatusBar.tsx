import styles from './StatusBar.module.css'

/** iOS-style status bar. Inherits text color from parent (currentColor). */
export function StatusBar() {
  return (
    <div className={styles.bar} aria-hidden="true">
      <span className={styles.time}>9:41</span>
      <span className={styles.icons}>
        <svg width="18" height="11" viewBox="0 0 18 11" fill="currentColor">
          <rect x="0" y="7" width="3" height="4" rx="0.5" />
          <rect x="5" y="5" width="3" height="6" rx="0.5" />
          <rect x="10" y="2.5" width="3" height="8.5" rx="0.5" />
          <rect x="15" y="0" width="3" height="11" rx="0.5" />
        </svg>
        <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor">
          <path d="M8 2.2c2.2 0 4.2.8 5.7 2.2l1.1-1.2A10 10 0 0 0 8 .5 10 10 0 0 0 1.2 3.2l1.1 1.2A8.3 8.3 0 0 1 8 2.2Zm0 3.1c1.3 0 2.5.5 3.4 1.3l1.1-1.2A6.9 6.9 0 0 0 8 4.6a6.9 6.9 0 0 0-4.5 1.8l1.1 1.2A5 5 0 0 1 8 5.3Zm0 3.1c.6 0 1.2.2 1.6.7L8 10.5 6.4 9.1c.4-.5 1-.7 1.6-.7Z" />
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke="currentColor" opacity="0.4" />
          <rect x="2" y="2" width="18" height="8" rx="1.5" fill="currentColor" />
          <rect x="23" y="4" width="1.5" height="4" rx="0.75" fill="currentColor" opacity="0.4" />
        </svg>
      </span>
    </div>
  )
}
