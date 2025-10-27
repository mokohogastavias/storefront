export default function Cart() {
  return (
    <div className="container" style={{ padding: 'var(--space-2xl) 0', minHeight: '50vh' }}>
      <h1 style={{ marginBottom: 'var(--space-xl)' }}>🛒 Shopping Cart</h1>
      <div style={{ 
        textAlign: 'center', 
        padding: 'var(--space-2xl)',
        backgroundColor: '#F7FAFC',
        borderRadius: '12px'
      }}>
        <p style={{ fontSize: '1.2rem', marginBottom: 'var(--space-md)' }}>
          Your cart is currently empty
        </p>
        <p style={{ color: 'var(--text-light)' }}>
          Browse our categories and add some products!
        </p>
      </div>
    </div>
  )
}
