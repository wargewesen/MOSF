import spaceshipEarth from '../assets/spaceship-earth.jpg'
import metamaterial from '../assets/metamaterial.jpg'
import atmospheric from '../assets/atmospheric.jpg'
import reFinished from '../assets/re-finished.jpg'
import quietSpectrum from '../assets/quiet-spectrum.jpg'
import atmosphericThresholds from '../assets/atmospheric-thresholds.jpg'
import postHumanJewelry from '../assets/post-human-jewelry.jpg'
import controlledRelease from '../assets/controlled-release.jpg'

export interface Exhibition {
  title: string
  dateLabel: string
  image: string
  tag?: string
}

export interface EventItem {
  date: string
  title: string
  image: string
}

export const whatsOn: Exhibition = {
  title: 'Spaceship Earth',
  dateLabel: '01.29–04.27, 2026',
  image: spaceshipEarth,
}

export const events: EventItem[] = [
  {
    date: '07.10.2026',
    title: 'Preview: Atmospheric Thresholds',
    image: atmosphericThresholds,
  },
  {
    date: '07.22.2026',
    title: 'Opening Weekend: Post-Human Jewelry exhibition',
    image: postHumanJewelry,
  },
  {
    date: '08.08.2026',
    title: 'Artist talk: Keith Ellison discussing Controlled Release',
    image: controlledRelease,
  },
]

export const tours: Exhibition[] = [
  {
    title: 'Metamaterial',
    dateLabel: '01.29–04.27, 2026',
    image: metamaterial,
    tag: 'On view',
  },
  {
    title: 'Atmospheric',
    dateLabel: '01.16–02.28, 2026',
    image: atmospheric,
    tag: 'Ending',
  },
]

export const upcoming: Exhibition[] = [
  {
    title: 'Re:Finished',
    dateLabel: '03.06–08.18, 2026',
    image: reFinished,
  },
  {
    title: 'The Quiet Spectrum',
    dateLabel: '05.16–08.21, 2026',
    image: quietSpectrum,
  },
]
