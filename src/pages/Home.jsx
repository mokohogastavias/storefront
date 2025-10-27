import TrustBar from '../components/TrustBar'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const featuredProducts = [
    { id: 1, name: 'Wireless Earbuds', price: 299, originalPrice: 499, rating: 4.5, reviews: 128, image: '🎧', badge: 'hot' },
    { id: 2, name: 'Smart Watch', price: 799, originalPrice: 999, rating: 4.2, reviews: 89, image: '⌚', badge: 'sale' },
    { id: 3, name: 'Backpack', price: 449, originalPrice: 599, rating: 4.7, reviews: 256, image: '🎒', badge: 'new' },
    { id: 4, name: 'Water Bottle', price: 199, originalPrice: 299, rating: 4.3, reviews: 167, image: '💧', badge: null },
    { id: 5, name: 'Desk Lamp', price: 349, originalPrice: 449, rating: 4.1, reviews: 93, image: '💡', badge: 'sale' },
    { id: 6, name: 'Phone Case', price: 149, originalPrice: 199, rating: 4.6, reviews: 312, image: '📱', badge: 'hot' }
  ]

  return (
    <div style={{ backgroundColor: 'var(--background-light)' }}>
      {/* Hero Carousel */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
        padding: 'var(--space-3xl) 0',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container-wide">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-2xl)',
            alignItems: 'center'
          }}>
            <div>
              <h1 style={{ 
                fontSize: '3rem', 
                marginBottom: 'var(--space-md)',
                fontWeight: '700',
                lineHeight: '1.1'
              }}>
                Affordable Essentials
                <br />
                <span style={{ color: 'var(--secondary)' }}>Delivered to You</span>
              </h1>
              <p style={{ 
                fontSize: '1.25rem',
                marginBottom: 'var(--space-2xl)',
                opacity: '0.9',
                lineHeight: '1.6'
              }}>
                Serving Kempton Park, Midrand, and surrounding townships with fast delivery and trusted service.
              </p>
              
              <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                <button className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: 'var(--space-lg) var(--space-2xl)' }}>
                  🛍️ Start Shopping
                </button>
                <button className="btn" style={{ 
                  background: 'rgba(255,255,255,0.2)', 
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: 'white',
                  fontSize: '1.1rem',
                  padding: 'var(--space-lg) var(--space-2xl)'
                }}>
                  📞 Call to Order
                </button>
              </div>
            </div>
            
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-2xl)',
              textAlign: 'center',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ fontSize: '8rem', marginBottom: 'var(--space-md)' }}>🛒</div>
              <p style={{ fontSize: '1.1rem', opacity: '0.9' }}>
                Fast Delivery • Easy Returns • Trusted Service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Categories Section */}
      <section className="container-wide" style={{ padding: 'var(--space-3xl) 0' }}>
        <h2 style={{ 
          textAlign: 'center',
          marginBottom: 'var(--space-2xl)',
          fontSize: '2.25rem',
          color: 'var(--text)'
        }}>
          Shop Popular Categories
        </h2>
        
        <div className="grid grid-5">
          {[
            { emoji: '📚', name: 'Books & Education', items: '124 products' },
            { emoji: '👕', name: 'Clothing & Shoes', items: '89 products' },
            { emoji: '🎁', name: 'Gift Vouchers', items: '32 products' },
            { emoji: '💄', name: 'Health & Beauty', items: '156 products' },
            { emoji: '🏠', name: 'Home & Living', items: '78 products' }
          ].map((category, index) => (
            <div key={index} className="card" style={{ textAlign: 'center', padding: 'var(--space-xl)' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: 'var(--space-md)' }}>
                {category.emoji}
              </div>
              <h3 style={{ 
                marginBottom: 'var(--space-sm)',
                fontSize: '1.125rem',
                fontWeight: '600'
              }}>
                {category.name}
              </h3>
              <p style={{ 
                fontSize: '0.875rem',
                color: 'var(--text-light)',
                marginBottom: 'var(--space-md)'
              }}>
                {category.items}
              </p>
              <button className="btn btn-outline" style={{ width: '100%' }}>
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ backgroundColor: 'white', padding: 'var(--space-3xl) 0' }}>
        <div className="container-wide">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: 'var(--space-2xl)'
          }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--text)' }}>
              🔥 Hot Deals of the Week
            </h2>
            <button className="btn btn-outline">
              View All Deals
            </button>
          </div>
          
          <div className="grid grid-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section style={{ padding: 'var(--space-3xl) 0', backgroundColor: 'var(--background-dark)' }}>
        <div className="container">
          <div className="grid grid-3">
            {[
              { icon: '🚚', title: 'Fast Delivery', desc: '1-3 day delivery in Kempton Park & surrounding areas' },
              { icon: '💳', title: 'Secure Payment', desc: 'PayFast secured payments with multiple options' },
              { icon: '📞', title: 'Local Support', desc: 'Dedicated WhatsApp & phone support for local customers' }
            ].map((item, index) => (
              <div key={index} style={{ textAlign: 'center', padding: 'var(--space-xl)' }}>
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: 'var(--space-md)',
                  background: 'white',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--space-md) auto',
                  boxShadow: 'var(--shadow-md)'
                }}>
                  {item.icon}
                </div>
                <h3 style={{ marginBottom: 'var(--space-sm)', fontSize: '1.25rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
