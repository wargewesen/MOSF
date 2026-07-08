# MOSF
The Museum of Speculative Futures

An interactive prototype of the MOSF ticket-booking flow, built with React + Vite +
TypeScript from the Figma "Website Improvements" design (Flow 1).

## The flow

**Home** → tap *Get tickets* → **Info / Plan a visit** → pick a date + tap *Confirm Booking* → **Confirmation** (generated ticket with QR).

Booking state (date, time slot, visitor count) is carried across screens via
`BookingContext`, so the selected date appears on the confirmation ticket.

## Design system

Token-driven components extracted from the Figma variables live in
[`src/design-system/`](src/design-system/): `Button`, `Card`, `Calendar`, `Accordion`,
`Select`, `EventListItem`, `MembershipCard`, `NavBar`, `AppHeader`, `StatusBar`, `Logo`,
`QRCode`, `SectionLabel`, `Divider`. Tokens (color, spacing, radii, type) are in
[`src/design-system/tokens.css`](src/design-system/tokens.css).

Fonts: **Fragment Mono** (labels/captions), **Anton** (condensed display headlines),
**Archivo** (UI). Anton is used as the closest free stand-in for the design's condensed
display face — swap for a licensed face if available.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start dev server (http://localhost:5173)
npm run build     # typecheck + production build
npm run preview   # serve the production build
npm test          # run the flow tests (Vitest + React Testing Library)
```

## Design doc

See [docs/superpowers/specs/2026-07-08-mosf-booking-flow-design.md](docs/superpowers/specs/2026-07-08-mosf-booking-flow-design.md).
