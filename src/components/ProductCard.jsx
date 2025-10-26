import { Link } from 'react-router-dom'

export default function ProductCard() {
  return (
    <div style={{
      border: '1px solid var(--border)',
      borderRadius: '8px',
      padding: 'var(--space-md)',
      transition: 'transform 0.2s, box-shadow 0.2s'
    }}>
      {/* Product Image */}
      <div style={{
        width: '100%',
        height: '200px',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px',
        marginBottom: 'var(--space-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '3rem'
      }}>
        📱
      </div>

      {/* Product Info */}
      <h3 style={{ marginBottom: 'var(--space-sm)' }}>
        <Link to="/product/1" style={{ color: 'inherit', textDecoration: 'none' }}>
          Sample Product
        </Link>
      </h3>
      <p style={{ 
        color: 'var(--text-light)', 
        marginBottom: 'var(--space-md)',
        fontSize: '0.9rem'
      }}>
        High-quality product description goes here
      </p>

      {/* Price & CTA */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{
          fontSize: '1.25rem',
          fontWeight: 'bold',
          color: 'var(--accent)'
        }}>
          R 999
        </span>
        <button style={{
          backgroundColor: 'var(--primary)',
          color: 'white',
          border: 'none',
          padding: 'var(--space-sm) var(--space-md)',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
