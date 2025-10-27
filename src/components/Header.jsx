import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header style={{
      backgroundColor: 'var(--secondary)',
      color: 'white',
      boxShadow: 'var(--shadow-lg)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      {/* Top Bar */}
      <div style={{
        backgroundColor: 'var(--secondary-light)',
        padding: 'var(--space-sm) 0',
        fontSize: '0.875rem'
      }}>
        <div className="container-wide">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)' }}>
              <span>📍 Kempton Park • Midrand • Surrounding Areas</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)' }}>
              <a href="tel:0686172855" style={{ color: 'white', textDecoration: 'none' }}>
                📞 068 617 2855
              </a>
              <a 
                href="https://wa.me/27686172855" 
                style={{ color: 'white', textDecoration: 'none' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-wide" style={{ padding: 'var(--space-md) 0' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
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
            gap: 'var(--space-sm)',
            minWidth: '140px'
          }}>
            <div style={{
              background: 'var(--primary)',
              padding: 'var(--space-sm)',
              borderRadius: 'var(--radius-md)',
              fontSize: '1.25rem'
            }}>
              🔌
            </div>
            PlugMeUp
          </Link>

          {/* Search Bar */}
          <div style={{ flex: 1, maxWidth: '600px' }}>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Search for products, brands, and categories..."
                style={{
                  width: '100%',
                  padding: 'var(--space-md) var(--space-xl)',
                  borderRadius: 'var(--radius-lg)',
                  border: 'none',
                  fontSize: '1rem',
                  paddingLeft: 'var(--space-2xl)'
                }}
              />
              <span style={{
                position: 'absolute',
                left: 'var(--space-md)',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-light)'
              }}>
                🔍
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-md)'
          }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.75rem', color: '#ccc' }}>Hello, Sign in</div>
              <div style={{ fontSize: '0.875rem', fontWeight: '600' }}>Account & Lists</div>
            </div>
            
            <Link to="/cart" style={{
              color: 'white',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-sm)',
              padding: 'var(--space-sm) var(--space-md)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid transparent',
              transition: 'all 0.15s ease'
            }}>
              <div style={{ position: 'relative' }}>
                🛒
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  background: 'var(--primary)',
                  color: 'white',
                  borderRadius: '50%',
                  width: '18px',
                  height: '18px',
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  0
                </span>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem' }}>R 0.00</div>
                <div style={{ fontSize: '0.875rem', fontWeight: '600' }}>Cart</div>
              </div>
            </Link>
          </nav>
        </div>
      </div>

      {/* Categories Bar */}
      <div style={{
        backgroundColor: 'var(--secondary-light)',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container-wide">
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0',
            overflowX: 'auto',
            padding: 'var(--space-sm) 0'
          }}>
            {[
              'All Categories',
              'Books & Education',
              'Clothing & Shoes', 
              'Gift Vouchers',
              'Health & Beauty',
              'Home & Living',
              'Deals',
              'New Arrivals'
            ].map(category => (
              <Link
                key={category}
                to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="nav-link"
                style={{ 
                  color: 'white', 
                  whiteSpace: 'nowrap',
                  fontSize: '0.875rem'
                }}
              >
                {category}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
