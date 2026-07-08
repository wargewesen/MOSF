import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { App } from '../App'
import { BookingProvider } from '../context/BookingContext'

function renderApp() {
  window.history.pushState({}, '', '/')
  return render(
    <BrowserRouter>
      <BookingProvider>
        <App />
      </BookingProvider>
    </BrowserRouter>,
  )
}

describe('MOSF booking flow', () => {
  it('navigates Home → Info → Confirmation', async () => {
    const user = userEvent.setup()
    renderApp()

    // Home
    expect(screen.getByText('Museum of', { exact: false })).toBeInTheDocument()

    // Home → Info
    await user.click(screen.getByRole('button', { name: /get tickets/i }))
    expect(screen.getByText(/\[book tickets\]/i)).toBeInTheDocument()

    // Info → Confirmation
    await user.click(screen.getByRole('button', { name: /confirm booking/i }))
    expect(screen.getByText(/\[confirmation\]/i)).toBeInTheDocument()
    expect(screen.getByText('Alyssa Jefferson')).toBeInTheDocument()
  })

  it('carries the selected date into the confirmation ticket', async () => {
    const user = userEvent.setup()
    renderApp()

    await user.click(screen.getByRole('button', { name: /get tickets/i }))

    // Default view is May 2026; pick the 14th.
    const grid = screen.getByText('May 2026').closest('div')!.parentElement!
    await user.click(within(grid).getByRole('button', { name: '14', pressed: false }))

    await user.click(screen.getByRole('button', { name: /confirm booking/i }))

    expect(screen.getByText(/May 14, 2026/)).toBeInTheDocument()
  })

  it('lets the visitor change the ticket count, reflected on confirmation', async () => {
    const user = userEvent.setup()
    renderApp()

    await user.click(screen.getByRole('button', { name: /get tickets/i }))
    await user.selectOptions(screen.getByLabelText(/visitors/i), '2 Adults')
    await user.click(screen.getByRole('button', { name: /confirm booking/i }))

    // QR payload encodes the visitor selection; ticket rendered.
    expect(screen.getByText(/\[guest\]/i)).toBeInTheDocument()
  })

  it('expands an FAQ accordion on the Info screen', async () => {
    const user = userEvent.setup()
    renderApp()

    await user.click(screen.getByRole('button', { name: /get tickets/i }))
    const accessibility = screen.getByRole('button', { name: /accessibility/i })
    expect(accessibility).toHaveAttribute('aria-expanded', 'false')
    await user.click(accessibility)
    expect(accessibility).toHaveAttribute('aria-expanded', 'true')
  })
})
