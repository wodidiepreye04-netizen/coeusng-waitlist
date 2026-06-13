import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HeroSection from './HeroSection'

describe('HeroSection', () => {
  it('renders the correct headline', () => {
    render(<HeroSection />)
    expect(screen.getByText(/You've been/)).toBeInTheDocument()
    expect(screen.getByText(/"Fine"/)).toBeInTheDocument()
    expect(screen.getByText(/for too long/)).toBeInTheDocument()
  })

  it('renders the correct subheadline copy', () => {
    render(<HeroSection />)
    expect(screen.getByText(/COEUS gives you someone to talk to, anytime/)).toBeInTheDocument()
  })
})
