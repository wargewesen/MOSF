import type { ReactNode } from 'react'
import styles from './Button.module.css'

type Variant = 'primary' | 'secondary' | 'pill' | 'nav'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  fullWidth?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
  ariaLabel?: string
}

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M4 10h11M11 5l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/**
 * The design's button set.
 * - primary:   full dark bar (Confirm Booking, Save to wallet)
 * - secondary: subtle-fill pill-ish action (View map)
 * - pill:      small rounded-full chip (View all)
 * - nav:       large tappable card with label + arrow (Get tickets / Explore)
 */
export function Button({
  children,
  variant = 'primary',
  fullWidth = false,
  onClick,
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const className = [styles.base, styles[variant], fullWidth ? styles.fullWidth : '']
    .filter(Boolean)
    .join(' ')

  if (variant === 'nav') {
    return (
      <button type={type} className={className} onClick={onClick} aria-label={ariaLabel}>
        <span className={styles.navLabel}>{children}</span>
        <span className={styles.navArrow}>
          <ArrowRight />
        </span>
      </button>
    )
  }

  return (
    <button type={type} className={className} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
