import { useState } from 'react'
import styles from './Accordion.module.css'

interface AccordionProps {
  title: string
  children?: React.ReactNode
}

export function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.item}>
      <button
        className={styles.header}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className={styles.title}>{title}</span>
        <span className={styles.icon} aria-hidden="true">
          {open ? '–' : '+'}
        </span>
      </button>
      {open && (
        <div className={styles.body}>
          {children ?? (
            <p className={styles.placeholder}>
              Details about {title.toLowerCase()} will appear here.
            </p>
          )}
        </div>
      )}
    </div>
  )
}
