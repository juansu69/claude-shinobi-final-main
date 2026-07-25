interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled = false, 
  type = 'button',
  className = ''
}: ButtonProps) {
  const baseClasses = 'px-8 py-4 rounded-2xl font-bold text-lg cursor-pointer transition-colors duration-200 outline-none focus:ring-3 disabled:opacity-60 disabled:cursor-not-allowed'

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary/30',
    secondary: 'bg-secondary text-white dark:text-black hover:bg-secondary/90 focus:ring-secondary/30',
    success: 'bg-success text-white hover:bg-success/90 focus:ring-success/30',
    warning: 'bg-warning text-white hover:bg-warning/90 focus:ring-warning/30',
    danger: 'bg-danger text-white hover:bg-danger/90 focus:ring-danger/30'
  }

  const buttonClass = [
    baseClasses,
    variantClasses[variant],
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button