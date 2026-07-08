import styles from './NavBar.module.css'

type TabId = 'home' | 'search' | 'saved' | 'info'

interface NavBarProps {
  active: TabId
  onNavigate?: (tab: TabId) => void
}

const icons: Record<TabId, JSX.Element> = {
  home: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M4 11l8-6 8 6v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1v-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6" />
      <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  saved: (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M12 20s-7-4.3-7-9.2A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7 2.8C19 15.7 12 20 12 20Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  info: (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 11v5M12 8h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
}

const order: TabId[] = ['home', 'search', 'saved', 'info']

export function NavBar({ active, onNavigate }: NavBarProps) {
  return (
    <nav className={styles.bar}>
      <div className={styles.pill}>
        {order.map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${active === tab ? styles.active : ''}`}
            onClick={() => onNavigate?.(tab)}
            aria-label={tab}
            aria-current={active === tab ? 'page' : undefined}
          >
            {icons[tab]}
          </button>
        ))}
      </div>
    </nav>
  )
}
