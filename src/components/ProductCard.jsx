import { useState } from 'react'
import { useCartAnimation } from './CartAnimator'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const { animateAddToCart } = useCartAnimation()

  const discount = product.originalPrice ? 
    Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0

  const handleAddToCart = (e) => {
    e.stopPropagation()
    setIsAdding(true)
    
    // Trigger fly animation
    animateAddToCart(e.currentTarget, product)
    
    // Reset loading state
    setTimeout(() => setIsAdding(false), 600)
  }

  return (
    <div 
      className={`product-card ${isHovered ? 'card-hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      {product.badge && (
        <div className="product-badges">
          <span className={`badge badge-${product.badge}`}>
            {product.badge}
          </span>
          {discount > 0 && (
            <span className="badge badge-discount">
              {discount}% OFF
            </span>
          )}
        </div>
      )}

      {/* Product Image */}
      <div className="product-image">
        {product.image}
        <div className={`quick-add ${isHovered ? 'quick-add-visible' : ''}`}>
          <button 
            className={`quick-add-btn ${isAdding ? 'quick-add-loading' : ''}`}
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? 'Adding...' : 'Add to Cart'}
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h3 className="product-title">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="product-rating">
          <span className="rating-stars">⭐ {product.rating}</span>
          <span className="rating-count">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="product-pricing">
          <span className="product-price">R {product.price}</span>
          {product.originalPrice && (
            <span className="product-original-price">R {product.originalPrice}</span>
          )}
        </div>

        {/* Stock & Delivery */}
        <div className="product-meta">
          <span className="stock-status">✓ In stock</span>
          <span className="delivery-info">• Free delivery</span>
        </div>
      </div>
    </div>
  )
}
