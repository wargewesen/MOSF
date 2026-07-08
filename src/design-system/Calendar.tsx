import { useState } from 'react'
import styles from './Calendar.module.css'

interface CalendarProps {
  /** Currently selected date. */
  value: Date
  onChange: (date: Date) => void
}

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const Chevron = ({ dir }: { dir: 'left' | 'right' }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d={dir === 'left' ? 'M10 3 5 8l5 5' : 'M6 3l5 5-5 5'}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export function Calendar({ value, onChange }: CalendarProps) {
  const [view, setView] = useState(() => new Date(value.getFullYear(), value.getMonth(), 1))

  const year = view.getFullYear()
  const month = view.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const cells: (number | null)[] = []
  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  const isSelected = (day: number) =>
    value.getFullYear() === year && value.getMonth() === month && value.getDate() === day

  const step = (delta: number) => setView(new Date(year, month + delta, 1))

  return (
    <div className={styles.calendar}>
      <div className={styles.head}>
        <button className={styles.arrow} onClick={() => step(-1)} aria-label="Previous month">
          <Chevron dir="left" />
        </button>
        <span className={styles.month}>
          {MONTHS[month]} {year}
        </span>
        <button className={styles.arrow} onClick={() => step(1)} aria-label="Next month">
          <Chevron dir="right" />
        </button>
      </div>

      <div className={styles.grid}>
        {WEEKDAYS.map((w, i) => (
          <span key={i} className={styles.weekday}>
            {w}
          </span>
        ))}
        {cells.map((day, i) =>
          day === null ? (
            <span key={`e${i}`} />
          ) : (
            <button
              key={day}
              className={`${styles.day} ${isSelected(day) ? styles.selected : ''}`}
              onClick={() => onChange(new Date(year, month, day))}
              aria-pressed={isSelected(day)}
            >
              {day}
            </button>
          ),
        )}
      </div>
    </div>
  )
}
