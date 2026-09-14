import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import Card from './Card'

describe('Card', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders with default props', () => {
    render(<Card>Card content</Card>)
    expect(screen.getByText('Card content')).toBeInTheDocument()
    const card = screen.getByText('Card content').closest('div[aria-disabled]')
    expect(card).toHaveClass('border-l-primary')
    expect(card).toHaveClass('p-5')
  })

  it('renders with different variants', () => {
    const { unmount } = render(<Card variant="danger">Danger Card</Card>)
    const card = screen.getByText('Danger Card').closest('div[aria-disabled]')
    expect(card).toHaveClass('border-l-danger')
    unmount()

    render(<Card variant="success">Success Card</Card>)
    const successCard = screen.getByText('Success Card').closest('div[aria-disabled]')
    expect(successCard).toHaveClass('border-l-success')
  })

  it('renders with different sizes', () => {
    const { unmount } = render(<Card size="sm">Small Card</Card>)
    expect(screen.getByText('Small Card').closest('div[aria-disabled]')).toHaveClass('p-3')
    unmount()

    render(<Card size="lg">Large Card</Card>)
    expect(screen.getByText('Large Card').closest('div[aria-disabled]')).toHaveClass('p-8')
  })

  it('renders a title when provided', () => {
    render(<Card title="My Card Title">Body content</Card>)
    expect(screen.getByText('My Card Title')).toBeInTheDocument()
    expect(screen.getByText('Body content')).toBeInTheDocument()
  })

  it('does not render a title element when title is not provided', () => {
    render(<Card>No title card</Card>)
    expect(screen.getByText('No title card')).toBeInTheDocument()
    // Only one child div inside the card (the body), not the title div
    const card = screen.getByText('No title card').closest('div[aria-disabled]')
    const titleDivs = card?.querySelectorAll('div')
    expect(titleDivs?.length).toBe(1)
  })

  it('renders a footer when provided', () => {
    render(<Card footer={<span>Footer text</span>}>Body</Card>)
    expect(screen.getByText('Footer text')).toBeInTheDocument()
  })

  it('applies disabled state', () => {
    render(<Card disabled>Disabled Card</Card>)
    const card = screen.getByText('Disabled Card').closest('div[aria-disabled]')
    expect(card).toHaveClass('opacity-50')
    expect(card).toHaveClass('pointer-events-none')
    expect(card).toHaveAttribute('aria-disabled', 'true')
  })

  it('applies custom className', () => {
    render(<Card className="custom-card">Custom Card</Card>)
    const card = screen.getByText('Custom Card').closest('div[aria-disabled]')
    expect(card).toHaveClass('custom-card')
  })
})
