import { Route, Routes } from 'react-router-dom'
import { Home } from './screens/Home'
import { Info } from './screens/Info'
import { Confirmation } from './screens/Confirmation'
import styles from './App.module.css'

export function App() {
  return (
    <div className={styles.stage}>
      <div className={styles.frame}>
        <div className={styles.viewport}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </div>
        <div className={styles.homeIndicator} aria-hidden="true" />
      </div>
    </div>
  )
}
