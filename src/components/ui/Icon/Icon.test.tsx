import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import Icon from './Icon'

describe('Icon', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders with default props', () => {
    render(<Icon aria-label="star icon">★</Icon>)
    const icon = screen.getByRole('img', { name: /star icon/i })
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveClass('bg-primary')
  })

  it('renders children content', () => {
    render(<Icon>★</Icon>)
    expect(screen.getByText('★')).toBeInTheDocument()
  })

  it('applies primary variant classes', () => {
    render(<Icon variant="primary" aria-label="primary icon">★</Icon>)
    expect(screen.getByRole('img')).toHaveClass('bg-primary')
  })

  it('applies secondary variant classes', () => {
    render(<Icon variant="secondary" aria-label="secondary icon">★</Icon>)
    expect(screen.getByRole('img')).toHaveClass('bg-secondary')
  })

  it('applies success variant classes', () => {
    render(<Icon variant="success" aria-label="success icon">★</Icon>)
    expect(screen.getByRole('img')).toHaveClass('bg-success')
  })

  it('applies danger variant classes', () => {
    render(<Icon variant="danger" aria-label="danger icon">★</Icon>)
    expect(screen.getByRole('img')).toHaveClass('bg-danger')
  })

  it('applies warning variant classes', () => {
    render(<Icon variant="warning" aria-label="warning icon">★</Icon>)
    expect(screen.getByRole('img')).toHaveClass('bg-warning')
  })

  it('applies sm size classes', () => {
    render(<Icon size="sm" aria-label="small icon">★</Icon>)
    expect(screen.getByRole('img')).toHaveClass('w-8', 'h-8')
  })

  it('applies md size classes by default', () => {
    render(<Icon aria-label="medium icon">★</Icon>)
    expect(screen.getByRole('img')).toHaveClass('w-12', 'h-12')
  })

  it('applies lg size classes', () => {
    render(<Icon size="lg" aria-label="large icon">★</Icon>)
    expect(screen.getByRole('img')).toHaveClass('w-16', 'h-16')
  })

  it('applies disabled styles when disabled', () => {
    render(<Icon disabled aria-label="disabled icon">★</Icon>)
    const icon = screen.getByRole('img')
    expect(icon).toHaveClass('opacity-50')
    expect(icon).toHaveAttribute('aria-disabled', 'true')
  })

  it('applies custom className', () => {
    render(<Icon className="custom-class" aria-label="custom icon">★</Icon>)
    expect(screen.getByRole('img')).toHaveClass('custom-class')
  })

  it('renders as a circular element', () => {
    render(<Icon aria-label="circle icon">★</Icon>)
    expect(screen.getByRole('img')).toHaveClass('rounded-full')
  })
})
