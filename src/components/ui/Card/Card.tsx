interface CardProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  title?: string
  footer?: React.ReactNode
  disabled?: boolean
  className?: string
}

function Card({
  children,
  variant = 'primary',
  size = 'md',
  title,
  footer,
  disabled = false,
  className = ''
}: CardProps) {
  const baseClasses = 'bg-surface border border-border border-l-4 rounded-xl shadow-sm'

  const variantClasses = {
    primary: 'border-l-primary',
    secondary: 'border-l-secondary',
    success: 'border-l-success',
    warning: 'border-l-warning',
    danger: 'border-l-danger',
  }

  const sizeClasses = {
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8',
  }

  const titleSizeClasses = {
    sm: 'text-sm font-semibold mb-2 text-foreground',
    md: 'text-base font-semibold mb-3 text-foreground',
    lg: 'text-lg font-semibold mb-4 text-foreground',
  }

  const cardClass = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled ? 'opacity-50 pointer-events-none' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={cardClass} aria-disabled={disabled}>
      {title && <div className={titleSizeClasses[size]}>{title}</div>}
      <div className="text-foreground">{children}</div>
      {footer && (
        <div className="mt-4 pt-4 border-t border-border text-muted">
          {footer}
        </div>
      )}
    </div>
  )
}

export default Card
