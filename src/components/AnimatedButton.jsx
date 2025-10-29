import './AnimatedButton.css'

export default function AnimatedButton({ 
  children, 
  variant = 'primary',
  loading = false,
  disabled = false,
  onClick,
  className = '',
  ...props 
}) {
  return (
    <button
      className={`
        animated-btn 
        btn-${variant} 
        ${loading ? 'btn-loading' : ''} 
        ${disabled ? 'btn-disabled' : ''} 
        ${className}
      `}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      <span className="btn-content">
        {children}
      </span>
      {loading && (
        <span className="btn-loader">
          <span className="btn-loader-dot"></span>
          <span className="btn-loader-dot"></span>
          <span className="btn-loader-dot"></span>
        </span>
      )}
    </button>
  )
}
