import styles from './SectionLabel.module.css'

interface SectionLabelProps {
  children: string
  as?: 'div' | 'span'
}

/** The bracketed mono eyebrow used throughout the design, e.g. [WHAT'S ON]. */
export function SectionLabel({ children, as: Tag = 'div' }: SectionLabelProps) {
  return (
    <Tag className={styles.label} role="heading" aria-level={2}>
      <span aria-hidden="true">[</span>
      {children}
      <span aria-hidden="true">]</span>
    </Tag>
  )
}
