import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import MagneticButton from './MagneticButton'

describe('MagneticButton', () => {
  it('renders the button with children', () => {
    render(<MagneticButton>Click Me</MagneticButton>)
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  it('fires onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<MagneticButton onClick={handleClick}>Click Me</MagneticButton>)
    
    fireEvent.click(screen.getByText('Click Me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
