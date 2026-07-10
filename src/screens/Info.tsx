import { useNavigate } from 'react-router-dom'
import {
  Accordion,
  AppHeader,
  Button,
  Calendar,
  Divider,
  NavBar,
  SectionLabel,
  Select,
  StatusBar,
} from '../design-system'
import { useBooking } from '../context/BookingContext'
import {
  address,
  contactEmail,
  faq,
  hours,
  pricing,
  timeSlots,
  visitorOptions,
} from '../data/visit'
import styles from './Info.module.css'

export function Info() {
  const navigate = useNavigate()
  const { date, timeSlot, visitors, setDate, setTimeSlot, setVisitors } = useBooking()

  return (
    <div className={styles.screen}>
      <header className={styles.header}>
        <StatusBar />
        <AppHeader title="Information" />
      </header>

      <main className={styles.container}>
        {/* Booking */}
        <section className={styles.section}>
          <SectionLabel>Book tickets</SectionLabel>
          <Calendar value={date} onChange={setDate} />
          <div className={styles.selects}>
            <Select label="Time slot" value={timeSlot} options={timeSlots} onChange={setTimeSlot} />
            <Select label="Visitors" value={visitors} options={visitorOptions} onChange={setVisitors} />
          </div>
          <Button variant="primary" fullWidth onClick={() => navigate('/confirmation')}>
            Confirm Booking
          </Button>
        </section>

        {/* Hours */}
        <section className={styles.section}>
          <SectionLabel>Hours</SectionLabel>
          <div className={styles.rows}>
            {hours.map((row, i) => (
              <div key={row.day}>
                <div className={styles.row}>
                  <span className={styles.rowKey}>{row.day}</span>
                  <span className={styles.rowValue}>{row.hours}</span>
                </div>
                {i < hours.length - 1 && <Divider />}
              </div>
            ))}
          </div>
        </section>

        {/* Location */}
        <section className={styles.section}>
          <SectionLabel>Hours</SectionLabel>
          <p className={styles.address}>{address.lines.join(' ')}</p>
          <div>
            <Button variant="secondary">View map</Button>
          </div>
        </section>

        {/* Pricing */}
        <section className={styles.section}>
          <SectionLabel>Pricing</SectionLabel>
          <div className={styles.rows}>
            {pricing.map((item, i) => (
              <div key={item.type}>
                <div className={styles.priceRow}>
                  <span className={styles.priceInfo}>
                    <span className={styles.priceType}>{item.type}</span>
                    <span className={styles.priceNote}>{item.note}</span>
                  </span>
                  <span className={styles.price}>{item.price}</span>
                </div>
                {i < pricing.length - 1 && <Divider />}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.section}>
          <SectionLabel>FAQ</SectionLabel>
          <div className={styles.accordions}>
            {faq.map((item) => (
              <Accordion key={item} title={item} />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className={styles.section}>
          <SectionLabel>Contact</SectionLabel>
          <p className={styles.question}>Have any other questions?</p>
          <a className={styles.email} href={`mailto:${contactEmail.toLowerCase()}`}>
            {contactEmail}
          </a>
        </section>
      </main>

      <NavBar active="info" onNavigate={(tab) => tab === 'home' && navigate('/')} />
    </div>
  )
}
