import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import WaitlistForm from './WaitlistForm'
import { submitEmail } from '../lib/mailchimp'

// Mock the mailchimp logic so we don't fire real network requests
vi.mock('../lib/mailchimp', () => ({
  submitEmail: vi.fn(),
}))

describe('WaitlistForm', () => {
  it('renders the inline form with input and submit button', () => {
    render(<WaitlistForm />)
    expect(screen.getByPlaceholderText('Enter your email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Join Waitlist/i })).toBeInTheDocument()
  })

  it('keeps the submit button disabled until a valid email is typed', () => {
    render(<WaitlistForm />)
    
    const input = screen.getByPlaceholderText('Enter your email address')
    const button = screen.getByRole('button', { name: /Join Waitlist/i })

    expect(button).toBeDisabled()

    fireEvent.change(input, { target: { value: 'invalid-email' } })
    expect(button).toBeDisabled()

    fireEvent.change(input, { target: { value: 'test@example.com' } })
    expect(button).not.toBeDisabled()
  })

  it('shows success UI when submission succeeds', async () => {
    submitEmail.mockResolvedValueOnce({ success: true })
    render(<WaitlistForm />)
    
    const input = screen.getByPlaceholderText('Enter your email address')
    const button = screen.getByRole('button', { name: /Join Waitlist/i })

    fireEvent.change(input, { target: { value: 'test@example.com' } })
    fireEvent.click(button)

    await waitFor(() => {
      expect(screen.getByText("You're in.")).toBeInTheDocument()
    })
  })
})
