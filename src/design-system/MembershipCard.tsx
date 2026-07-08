import styles from './MembershipCard.module.css'

interface MembershipCardProps {
  onView?: () => void
}

export function MembershipCard({ onView }: MembershipCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.dots} aria-hidden="true" />
      <h3 className={styles.title}>
        JOIN
        <br />
        MOSF
      </h3>
      <button className={styles.button} onClick={onView}>
        View memberships
      </button>
    </div>
  )
}
