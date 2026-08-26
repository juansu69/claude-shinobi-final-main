interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'black' | 'white'
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
  const baseClasses = 'px-8 py-4 rounded-2xl font-bold text-lg cursor-pointer transition-all duration-100 outline-none focus:ring-3 disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_6px_0_rgba(0,0,0,0.25)] active:shadow-[0_2px_0_rgba(0,0,0,0.25)] active:translate-y-1'

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary/30',
    secondary: 'bg-secondary text-white dark:text-black hover:bg-secondary/90 focus:ring-secondary/30',
    success: 'bg-success text-white hover:bg-success/90 focus:ring-success/30',
    warning: 'bg-warning text-white hover:bg-warning/90 focus:ring-warning/30',
    danger: 'bg-danger text-white hover:bg-danger/90 focus:ring-danger/30',
    black: 'bg-black text-white hover:bg-black/80 focus:ring-black/30',
    white: 'bg-white text-black hover:bg-white/80 focus:ring-black/20 border border-black/10'
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