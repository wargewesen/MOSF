import styles from './Divider.module.css'

interface DividerProps {
  vertical?: boolean
}

/** 1px rule ("Rules" component in Figma). */
export function Divider({ vertical = false }: DividerProps) {
  return <div className={vertical ? styles.vertical : styles.horizontal} role="separator" />
}
