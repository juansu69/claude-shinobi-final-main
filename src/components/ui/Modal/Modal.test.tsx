import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import Modal from './Modal'

describe('Modal', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders when isOpen is true', () => {
    render(
      <Modal isOpen onClose={() => {}} title="Test Modal">
        Modal content
      </Modal>
    )
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Test Modal')).toBeInTheDocument()
    expect(screen.getByText('Modal content')).toBeInTheDocument()
  })

  it('does not render when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={() => {}} title="Hidden Modal">
        Content
      </Modal>
    )
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', () => {
    const handleClose = vi.fn()
    render(
      <Modal isOpen onClose={handleClose} title="Closable Modal">
        Content
      </Modal>
    )
    fireEvent.click(screen.getByLabelText('Close modal'))
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when backdrop is clicked', () => {
    const handleClose = vi.fn()
    render(
      <Modal isOpen onClose={handleClose} title="Backdrop Modal">
        Content
      </Modal>
    )
    // The backdrop is the element with aria-hidden
    const backdrop = document.querySelector('[aria-hidden="true"]') as HTMLElement
    fireEvent.click(backdrop)
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when Escape key is pressed', () => {
    const handleClose = vi.fn()
    render(
      <Modal isOpen onClose={handleClose} title="Escape Modal">
        Content
      </Modal>
    )
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('does not call onClose when disabled', () => {
    const handleClose = vi.fn()
    render(
      <Modal isOpen onClose={handleClose} title="Disabled Modal" disabled>
        Content
      </Modal>
    )
    fireEvent.click(screen.getByLabelText('Close modal'))
    expect(handleClose).not.toHaveBeenCalled()
  })

  it('renders with different variants', () => {
    render(
      <Modal isOpen onClose={() => {}} title="Danger Modal" variant="danger">
        Danger content
      </Modal>
    )
    // danger/warning variants use alertdialog role
    expect(screen.getByRole('alertdialog')).toBeInTheDocument()
    expect(screen.getByText('Danger Modal')).toBeInTheDocument()
  })

  it('renders without a title', () => {
    render(
      <Modal isOpen onClose={() => {}}>
        No title content
      </Modal>
    )
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('No title content')).toBeInTheDocument()
    expect(screen.getByLabelText('Close modal')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <Modal isOpen onClose={() => {}} className="custom-modal">
        Content
      </Modal>
    )
    const panel = document.querySelector('.custom-modal')
    expect(panel).toBeInTheDocument()
  })
})
