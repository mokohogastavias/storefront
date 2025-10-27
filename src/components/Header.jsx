import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header style={{
      backgroundColor: 'var(--secondary)',
      color: 'white',
      padding: 'var(--space-md) 0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-lg)'
        }}>
          {/* Logo */}
          <Link to="/" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-sm)'
          }}>
            🛍️ PlugMeUp
          </Link>

          {/* Search Bar */}
          <div style={{ flex: 1, maxWidth: '500px' }}>
            <input
              type="text"
              placeholder="Search products, categories..."
              style={{
                width: '100%',
                padding: 'var(--space-sm) var(--space-md)',
                borderRadius: '24px',
                border: 'none',
                fontSize: '1rem'
              }}
            />
          </div>

          {/* Navigation */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-lg)'
          }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Home
            </Link>
            <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>
              Cart (0)
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
