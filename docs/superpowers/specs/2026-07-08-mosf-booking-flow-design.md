# MOSF Booking Flow — Design

**Date:** 2026-07-08
**Source:** Figma "Website Improvements" → Flow 1 (`node-id=1-31565`), file `UNNqUUpG58q36myDOfokzT`

## Overview

Build the "Museum of Speculative Futures" (MOSF) ticket-booking flow as an interactive
web prototype, reproducing the Figma design and its design system in code.

The flow spans three mobile screens:

1. **Home** (`1.1`) — landing screen with What's On, Events, Tours, membership, Upcoming.
2. **Info / Plan a visit** (`1.2`) — booking calendar + selectors, hours, address, pricing, FAQ, contact.
3. **Confirmation** (`1.3`) — generated ticket with QR code and booking/guest details.

Flow: **Home** → tap "Get tickets" → **Info** → tap "Confirm Booking" → **Confirmation**.

## Goals

- Faithful reproduction of the editorial/brutalist visual design (bracket labels, bold
  condensed display type, neon-yellow highlights, 1px rules, mono captions).
- A reusable, token-driven design system in code, extracted from the Figma variables.
- A working, clickable flow with real interactivity (calendar, selects, accordions) and
  booking state carried Home→Info→Confirmation.
- No backend; mock data only.

## Non-Goals (YAGNI)

- No real payment, auth, or persistence.
- No routes/screens beyond the three in Flow 1 (Explore, Search, membership detail, etc.
  are visually present but out of scope — their triggers are inert or no-op).
- No responsive/desktop layout — fixed 430px phone frame, matching the design.
- No pixel-perfect font licensing; use closest web-font equivalents (see Typography).

## Tech Stack

- **React 18 + Vite + TypeScript** — SPA.
- **react-router-dom** — client-side routing between the three screens.
- **Vitest + React Testing Library** — component/flow tests.
- **qrcode.react** (or similar) — runtime QR generation for the ticket.

## Design Tokens (from Figma variables)

Mirrored as CSS custom properties in `src/design-system/tokens.css`.

**Color**
- `--color-ink: #1e1e1e` (primary text / tertiary)
- `--color-surface: #ffffff`
- `--color-brand-yellow: #eaff4e` (brand primary / highlight)
- `--color-brand-blue: #cadfff` (brand secondary)
- `--color-fill-subtle: rgba(30,30,30,0.08)` (surface secondary bg)
- `--color-on-brand: rgba(255,255,255,0.20)`

**Spacing** (px): 4, 8, 12, 16, 24, 32, 48, 56, 120
**Radii** (px): 4, 8, 12, 32, 999 (full)
**Border:** 1px rules
**Shadow (drawer):** `0 4px 24px rgba(0,0,0,0.25)`

**Typography**
- Caption/label font: **Fragment Mono**, 16px, weight 400, line-height 1.3, letter-spacing 1.
  Used for `[BRACKET]` eyebrows, captions, dates.
- Display font: bold condensed grotesque, title size 62px. Used for headlines
  (SPACESHIP EARTH), the MOSF wordmark, and prices. Sourced as the closest available web
  font; swap for licensed files if provided.

## Architecture

```
src/
  main.tsx                # router + providers
  App.tsx                 # phone-frame shell, <Routes>
  context/
    BookingContext.tsx    # {date, timeSlot, visitors, guest} + setters
  design-system/
    tokens.css
    index.ts              # barrel export
    Button.tsx
    Card.tsx              # Hero + Vertical variants
    EventListItem.tsx
    SectionLabel.tsx      # the [BRACKET] eyebrow
    Divider.tsx           # 1px rule
    Accordion.tsx
    Calendar.tsx
    Select.tsx
    MembershipCard.tsx
    StatusBar.tsx
    AppHeader.tsx         # per-screen header (title + back/actions)
    NavBar.tsx            # bottom nav
    QRCode.tsx
  screens/
    Home.tsx
    Info.tsx
    Confirmation.tsx
  data/
    exhibitions.ts        # mock event/exhibition data
    pricing.ts, hours.ts, faq.ts
  assets/                 # images downloaded from Figma
```

Each design-system component is self-contained: presentational, driven by props, styled
with the shared tokens. Screens compose primitives + mock data. `BookingContext` is the
only shared mutable state.

## Data Flow

- `BookingContext` holds `{ date, timeSlot, visitors, guest }`, defaulted to sensible mock
  values so Confirmation renders even if reached directly.
- **Info** writes selected `date` (calendar), `timeSlot` and `visitors` (selects) into
  context; "Confirm Booking" navigates to `/confirmation`.
- **Confirmation** reads context to render the ticket date, a generated booking ID, QR
  payload, and guest name/email (mock guest, "Alyssa Jefferson").

## Screen Detail

### Home (`/`)
Header (logo wordmark + settings glyph), "Get tickets"/"Explore" nav buttons, `[WHAT'S ON]`
hero card, `[EVENTS]` list (3 items + rules), `[TOURS]` horizontal card grid + "View all",
`[JOIN MOSF]` membership card, `[UPCOMING]` hero cards, bottom NavBar.
- "Get tickets" → `/info`. Other actions inert.

### Info (`/info`)
`[INFORMATION]` header (yellow), `[BOOK TICKETS]` interactive month `Calendar`, `TIME SLOT`
+ `VISITORS` `Select`s, "Confirm Booking" button → `/confirmation`. Below: `[HOURS]` table,
`[HOURS]` address + "View map" (inert), `[PRICING]` table, `[FAQ]` accordions
(Accessibility, Directions, Membership), `[CONTACT]` email. Bottom NavBar.

### Confirmation (`/confirmation`)
`[CONFIRMATION]` header (blue) with back → `/info`. MOSF ticket card: wordmark + `TICKET`,
`[DATE]`, `[ID]`, QR code, `[GUEST]` name + email, "Save to wallet" / "Get directions"
buttons (inert). Bottom NavBar.

## Assets

Exhibition/event images downloaded from Figma nodes into `src/assets/` (Spaceship Earth,
Metamaterial, Atmospheric, Re:Finished, The Quiet Spectrum, tour thumbnails, membership art).
QR generated at runtime; no static QR asset.

## Error Handling

Minimal — prototype scope. Confirmation tolerates missing booking selections via context
defaults. Calendar disables out-of-month days; selects always have a valid default.

## Testing

Vitest + React Testing Library:
- Flow: render Home → click "Get tickets" → Info renders → click "Confirm Booking" →
  Confirmation renders.
- Calendar: selecting a day updates selection and writes to context.
- Accordion: toggling expands/collapses one panel.
- Booking propagation: date/visitors chosen on Info appear on Confirmation ticket.
- A couple of design-system unit tests (Button variants, SectionLabel bracket rendering).
```
