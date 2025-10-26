import ProductCard from '../components/ProductCard'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        backgroundColor: 'var(--primary)',
        padding: 'var(--space-xl) 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ 
            fontSize: '2.5rem', 
            marginBottom: 'var(--space-md)',
            color: 'white'
          }}>
            Welcome to YourStore
          </h1>
          <p style={{ 
            fontSize: '1.2rem',
            color: 'white',
            marginBottom: 'var(--space-lg)'
          }}>
            South Africa's #1 Online Marketplace
          </p>
          <button style={{
            backgroundColor: 'var(--secondary)',
            color: 'white',
            border: 'none',
            padding: 'var(--space-md) var(--space-xl)',
            borderRadius: '4px',
            fontSize: '1.1rem',
            cursor: 'pointer'
          }}>
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ padding: 'var(--space-xl) 0' }}>
        <div className="container">
          <h2 style={{ 
            marginBottom: 'var(--space-lg)',
            textAlign: 'center'
          }}>
            Hot Deals 🔥
          </h2>
          <div className="grid grid-4">
            {/* Products will go here */}
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </div>
  )
}
