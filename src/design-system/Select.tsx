import styles from './Select.module.css'

interface SelectProps {
  label: string
  value: string
  options: string[]
  onChange: (value: string) => void
}

const Chevron = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M3 5l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export function Select({ label, value, options, onChange }: SelectProps) {
  return (
    <label className={styles.wrap}>
      <span className={styles.label}>{label}</span>
      <span className={styles.field}>
        <select
          className={styles.select}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label={label}
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <span className={styles.chevron}>
          <Chevron />
        </span>
      </span>
    </label>
  )
}
