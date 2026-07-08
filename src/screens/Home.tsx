import { useNavigate } from 'react-router-dom'
import {
  Button,
  Card,
  Divider,
  EventListItem,
  Logo,
  BurstMark,
  MembershipCard,
  NavBar,
  SectionLabel,
  StatusBar,
} from '../design-system'
import { events, tours, upcoming, whatsOn } from '../data/content'
import styles from './Home.module.css'

export function Home() {
  const navigate = useNavigate()

  return (
    <div className={styles.screen}>
      <header className={styles.header}>
        <StatusBar />
        <div className={styles.headerAction}>
          <Logo variant="full" />
          <button className={styles.settings} aria-label="Settings">
            <BurstMark size={30} />
          </button>
        </div>
      </header>

      <main className={styles.panel}>
        <div className={styles.homeNav}>
          <Button variant="nav" onClick={() => navigate('/info')}>
            Get tickets
          </Button>
          <Button variant="nav">Explore</Button>
        </div>

        <section className={styles.section}>
          <SectionLabel>What&apos;s on</SectionLabel>
          <Card
            variant="hero"
            image={whatsOn.image}
            dateLabel={whatsOn.dateLabel}
            title={whatsOn.title}
          />
        </section>

        <section className={styles.section}>
          <SectionLabel>Events</SectionLabel>
          <div className={styles.eventList}>
            {events.map((event, i) => (
              <div key={event.title}>
                <EventListItem date={event.date} title={event.title} image={event.image} />
                {i < events.length - 1 && <Divider />}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <SectionLabel>Tours</SectionLabel>
            <Button variant="pill">View all</Button>
          </div>
          <div className={styles.grid}>
            {tours.map((tour, i) => (
              <div className={styles.gridItem} key={tour.title}>
                <Card
                  variant="vertical"
                  image={tour.image}
                  dateLabel={tour.dateLabel}
                  title={tour.title}
                  tag={tour.tag}
                />
                {i < tours.length - 1 && <Divider vertical />}
              </div>
            ))}
          </div>
        </section>

        <MembershipCard />

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <SectionLabel>Upcoming</SectionLabel>
            <Button variant="pill">View all</Button>
          </div>
          <div className={styles.upcoming}>
            {upcoming.map((item) => (
              <Card
                key={item.title}
                variant="hero"
                image={item.image}
                dateLabel={item.dateLabel}
                title={item.title}
              />
            ))}
          </div>
        </section>
      </main>

      <NavBar active="home" onNavigate={(tab) => tab === 'info' && navigate('/info')} />
    </div>
  )
}
