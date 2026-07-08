import styles from './EventListItem.module.css'

interface EventListItemProps {
  date: string
  title: string
  image: string
  onClick?: () => void
}

export function EventListItem({ date, title, image, onClick }: EventListItemProps) {
  return (
    <button className={styles.row} onClick={onClick}>
      <span className={styles.text}>
        <span className={styles.date}>{date}</span>
        <span className={styles.title}>{title}</span>
      </span>
      <span className={styles.thumbWrap}>
        <img className={styles.thumb} src={image} alt={title} loading="lazy" />
      </span>
    </button>
  )
}
