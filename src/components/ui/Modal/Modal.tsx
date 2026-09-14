'use client'

import { useEffect, useCallback, useRef } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  footer?: React.ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
}

function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = ''
}: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  const handleClose = useCallback(() => {
    if (!disabled) {
      onClose()
      triggerRef.current?.focus()
    }
  }, [disabled, onClose])

  useEffect(() => {
    if (!isOpen) return

    // Save the element that triggered the modal so focus can return on close
    triggerRef.current = document.activeElement as HTMLElement

    // Move focus into the modal
    requestAnimationFrame(() => {
      const firstFocusable = panelRef.current?.querySelector<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      firstFocusable?.focus()
    })

    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
        return
      }

      // Focus trap
      if (e.key === 'Tab' && panelRef.current) {
        const focusable = Array.from(
          panelRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleClose])

  if (!isOpen) return null

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-2xl'
  }

  const variantHeaderClasses = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white dark:text-black',
    success: 'bg-success text-white',
    warning: 'bg-warning text-amber-900',
    danger: 'bg-danger text-white'
  }

  const variantAccentClasses = {
    primary: 'border-t-4 border-primary',
    secondary: 'border-t-4 border-secondary',
    success: 'border-t-4 border-success',
    warning: 'border-t-4 border-warning',
    danger: 'border-t-4 border-danger'
  }

  const isAlert = variant === 'danger' || variant === 'warning'

  const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )

  return (
    <div
      role={isAlert ? 'alertdialog' : 'dialog'}
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
      aria-describedby="modal-body"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div
        ref={panelRef}
        className={[
          'relative w-full rounded-2xl shadow-2xl bg-surface text-foreground',
          sizeClasses[size],
          variantAccentClasses[variant],
          disabled ? 'opacity-60 pointer-events-none' : '',
          className
        ].filter(Boolean).join(' ')}
      >
        {/* Header with title */}
        {title && (
          <div className={['flex items-center justify-between px-6 py-4 rounded-t-xl', variantHeaderClasses[variant]].join(' ')}>
            <h2 id="modal-title" className="text-lg font-bold">
              {title}
            </h2>
            <button
              onClick={handleClose}
              disabled={disabled}
              aria-label="Close modal"
              className="ml-4 rounded-full w-8 h-8 flex items-center justify-center opacity-80 hover:opacity-100 hover:bg-black/10 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:cursor-not-allowed"
            >
              <CloseIcon />
            </button>
          </div>
        )}

        {/* Close button when no title */}
        {!title && (
          <button
            onClick={handleClose}
            disabled={disabled}
            aria-label="Close modal"
            className="absolute top-4 right-4 rounded-full w-8 h-8 flex items-center justify-center text-muted hover:text-foreground hover:bg-border transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:cursor-not-allowed"
          >
            <CloseIcon />
          </button>
        )}

        {/* Body */}
        <div
          id="modal-body"
          className="px-6 py-5 text-sm leading-relaxed max-h-[calc(100vh-10rem)] overflow-y-auto"
        >
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="px-6 py-4 border-t border-border flex justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal
