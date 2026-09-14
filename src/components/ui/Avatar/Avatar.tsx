interface AvatarProps {
  name: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 0 || !parts[0]) return '?'
  if (parts.length === 1) return parts[0][0].toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
}

export default function Avatar({ name, size = 'md', className = '' }: AvatarProps) {
  const classes = [
    'rounded-full flex items-center justify-center font-bold uppercase select-none bg-primary text-white',
    sizeClasses[size],
    className,
  ].filter(Boolean).join(' ')

  return <div className={classes}>{getInitials(name)}</div>
}
