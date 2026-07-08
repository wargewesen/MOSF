import styles from './Card.module.css'

interface CardProps {
  variant: 'hero' | 'vertical'
  image: string
  dateLabel: string
  title: string
  /** Small status tag, e.g. "ON VIEW" / "ENDING". */
  tag?: string
  onClick?: () => void
}

export function Card({ variant, image, dateLabel, title, tag, onClick }: CardProps) {
  return (
    <article
      className={variant === 'hero' ? styles.hero : styles.vertical}
      onClick={onClick}
    >
      <div className={styles.imageWrap}>
        <img className={styles.image} src={image} alt={title} loading="lazy" />
      </div>
      <div className={styles.meta}>
        <div className={styles.dateRow}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.date}>{dateLabel}</span>
        </div>
        {tag && <span className={styles.tag}>{tag}</span>}
      </div>
      <h3 className={styles.title}>
        <span className={styles.titleHighlight}>{title}</span>
      </h3>
    </article>
  )
}
