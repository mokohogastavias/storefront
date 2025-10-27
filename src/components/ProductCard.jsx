import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  const discount = product.originalPrice ? 
    Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0

  return (
    <div className="card" style={{ padding: 'var(--space-md)', height: '100%' }}>
      {/* Badge */}
      {product.badge && (
        <div style={{ 
          position: 'absolute', 
          top: 'var(--space-sm)', 
          left: 'var(--space-sm)',
          zIndex: 2
        }}>
          <span className={`badge badge-${product.badge === 'hot' ? 'accent' : product.badge === 'sale' ? 'primary' : 'success'}`}>
            {product.badge}
          </span>
        </div>
      )}
      
      {/* Discount Badge */}
      {discount > 0 && (
        <div style={{ 
          position: 'absolute', 
          top: 'var(--space-sm)', 
          right: 'var(--space-sm)',
          background: 'var(--accent)',
          color: 'white',
          padding: 'var(--space-xs) var(--space-sm)',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.75rem',
          fontWeight: '600',
          zIndex: 2
        }}>
          {discount}% OFF
        </div>
      )}

      {/* Product Image */}
      <div style={{
        width: '100%',
        height: '160px',
        backgroundColor: 'var(--background-light)',
        borderRadius: 'var(--radius-md)',
        marginBottom: 'var(--space-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '4rem',
        position: 'relative'
      }}>
        {product.image}
      </div>

      {/* Product Info */}
      <div style={{ flex: 1 }}>
        <h3 style={{ 
          marginBottom: 'var(--space-sm)',
          fontSize: '0.875rem',
          lineHeight: '1.4',
          height: '2.8rem',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical'
        }}>
          <Link to={`/product/${product.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
            {product.name}
          </Link>
        </h3>

        {/* Rating */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            background: 'var(--success)',
            color: 'white',
            padding: 'var(--space-xs) var(--space-sm)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.75rem',
            fontWeight: '600'
          }}>
            ⭐ {product.rating}
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div style={{ marginBottom: 'var(--space-md)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--accent)' }}>
              R {product.price}
            </span>
            {product.originalPrice && (
              <span style={{ 
                fontSize: '0.875rem', 
                color: 'var(--text-light)', 
                textDecoration: 'line-through' 
              }}>
                R {product.originalPrice}
              </span>
            )}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--success)' }}>
            ✓ In stock • Free delivery
          </div>
        </div>

        {/* CTA Button */}
        <button className="btn btn-primary" style={{ width: '100%' }}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
