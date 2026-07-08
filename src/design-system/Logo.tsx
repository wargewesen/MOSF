import styles from './Logo.module.css'

/** The MOSF starburst mark — an 8-point asterisk used as the logo "O" and app glyph. */
export function BurstMark({ size = 24 }: { size?: number }) {
  const c = size / 2
  const r = size / 2
  const rays = Array.from({ length: 8 }, (_, i) => {
    const a = (Math.PI / 4) * i
    return { x2: c + r * Math.cos(a), y2: c + r * Math.sin(a) }
  })
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      {rays.map((ray, i) => (
        <line
          key={i}
          x1={c}
          y1={c}
          x2={ray.x2}
          y2={ray.y2}
          stroke="currentColor"
          strokeWidth={size * 0.13}
          strokeLinecap="round"
        />
      ))}
    </svg>
  )
}

interface LogoProps {
  variant?: 'full' | 'mark'
  size?: number
}

/**
 * - full: the stacked "Museum of Speculative Futures" name (home header)
 * - mark: the big "M✳SF" wordmark (confirmation ticket)
 */
export function Logo({ variant = 'full', size = 96 }: LogoProps) {
  if (variant === 'mark') {
    return (
      <div className={styles.mark} style={{ fontSize: size }}>
        <span>M</span>
        <BurstMark size={size * 0.62} />
        <span>SF</span>
      </div>
    )
  }
  return (
    <div className={styles.full}>
      Museum of
      <br />
      Speculative
      <br />
      Futures
    </div>
  )
}
