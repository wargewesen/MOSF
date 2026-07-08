import { useNavigate } from 'react-router-dom'
import {
  AppHeader,
  Button,
  Divider,
  Logo,
  NavBar,
  QRCode,
  SectionLabel,
  StatusBar,
} from '../design-system'
import { useBooking } from '../context/BookingContext'
import styles from './Confirmation.module.css'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

function formatDate(date: Date) {
  const weekday = date.toLocaleDateString('en-US', { weekday: 'long' })
  const day = String(date.getDate()).padStart(2, '0')
  return { weekday, rest: `${MONTHS[date.getMonth()]} ${day}, ${date.getFullYear()}` }
}

export function Confirmation() {
  const navigate = useNavigate()
  const { date, timeSlot, visitors, guest, bookingId } = useBooking()
  const { weekday, rest } = formatDate(date)

  const qrPayload = JSON.stringify({
    id: bookingId.replace(/\n/g, ''),
    date: date.toISOString().slice(0, 10),
    time: timeSlot,
    visitors,
    guest: guest.name,
  })

  return (
    <div className={styles.screen}>
      <header className={styles.header}>
        <StatusBar />
        <AppHeader
          title="Confirmation"
          onBack={() => navigate('/info')}
          onShare={() => {}}
        />
      </header>

      <main className={styles.container}>
        <div className={styles.ticket}>
          <div className={styles.brand}>
            <Logo variant="mark" size={72} />
            <h1 className={styles.ticketWord}>
              <span className={styles.highlight}>TICKET</span>
            </h1>
          </div>

          <div className={styles.body}>
            <div className={styles.details}>
              <div className={styles.detailBlock}>
                <SectionLabel>Date</SectionLabel>
                <span className={styles.detailValue}>
                  {weekday}
                  <br />
                  {rest}
                </span>
              </div>
              <div className={styles.detailBlock}>
                <SectionLabel>ID</SectionLabel>
                <span className={styles.detailValue}>
                  {bookingId.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </span>
              </div>
            </div>
            <div className={styles.qr}>
              <QRCode value={qrPayload} size={170} />
            </div>
          </div>

          <Divider />

          <div className={styles.guest}>
            <SectionLabel>Guest</SectionLabel>
            <span className={styles.guestName}>{guest.name}</span>
            <span className={styles.guestEmail}>{guest.email}</span>
          </div>
        </div>

        <div className={styles.actions}>
          <Button variant="primary" fullWidth>
            Save to wallet
          </Button>
          <Button variant="primary" fullWidth>
            Get directions
          </Button>
        </div>
      </main>

      <NavBar active="info" onNavigate={(tab) => tab === 'home' && navigate('/')} />
    </div>
  )
}
