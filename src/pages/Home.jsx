import TrustBar from '../components/TrustBar'

export default function Home() {
  const scrollToCategories = () => {
    document.getElementById('categories')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
        padding: 'var(--space-2xl) 0',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ 
            fontSize: '2.5rem', 
            marginBottom: 'var(--space-md)',
            fontWeight: '700'
          }}>
            Affordable Essentials Delivered to Your Doorstep
          </h1>
          <p style={{ 
            fontSize: '1.3rem',
            marginBottom: 'var(--space-xl)',
            opacity: '0.9'
          }}>
            We bring what you need closer to Kempton Park, Midrand & surrounding townships
          </p>
          
          <button 
            onClick={scrollToCategories}
            className="btn btn-accent"
            style={{
              fontSize: '1.2rem',
              padding: 'var(--space-lg) var(--space-2xl)',
              margin: '0 auto'
            }}
          >
            🛍️ Shop Now
          </button>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Categories Section */}
      <section id="categories" style={{ padding: 'var(--space-2xl) 0' }}>
        <div className="container">
          <h2 style={{ 
            textAlign: 'center',
            marginBottom: 'var(--space-xl)',
            fontSize: '2rem',
            color: 'var(--secondary)'
          }}>
            Shop By Category
          </h2>
          
          <div className="grid grid-5">
            {/* Books & Education */}
            <div style={{
              padding: 'var(--space-lg)',
              border: '2px solid var(--border)',
              borderRadius: '12px',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              backgroundColor: 'white',
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>📚</div>
              <h3 style={{ marginBottom: 'var(--space-sm)', fontSize: '1.1rem' }}>
                Books & Education
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                Stationery, study aids, kids learning
              </p>
            </div>

            {/* Clothing */}
            <div style={{
              padding: 'var(--space-lg)',
              border: '2px solid var(--border)',
              borderRadius: '12px',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              backgroundColor: 'white',
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>👕</div>
              <h3 style={{ marginBottom: 'var(--space-sm)', fontSize: '1.1rem' }}>
                Clothing & Shoes
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                Everyday wear, urban styles
              </p>
            </div>

            {/* Gift Vouchers */}
            <div style={{
              padding: 'var(--space-lg)',
              border: '2px solid var(--border)',
              borderRadius: '12px',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              backgroundColor: 'white',
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>🎁</div>
              <h3 style={{ marginBottom: 'var(--space-sm)', fontSize: '1.1rem' }}>
                Gift Vouchers
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                Digital vouchers to send or redeem
              </p>
            </div>

            {/* Health & Beauty */}
            <div style={{
              padding: 'var(--space-lg)',
              border: '2px solid var(--border)',
              borderRadius: '12px',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              backgroundColor: 'white',
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>💄</div>
              <h3 style={{ marginBottom: 'var(--space-sm)', fontSize: '1.1rem' }}>
                Health & Beauty
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                Skincare, hair products, hygiene
              </p>
            </div>

            {/* Home & Living */}
            <div style={{
              padding: 'var(--space-lg)',
              border: '2px solid var(--border)',
              borderRadius: '12px',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              backgroundColor: 'white',
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>🏠</div>
              <h3 style={{ marginBottom: 'var(--space-sm)', fontSize: '1.1rem' }}>
                Home & Living
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                Furniture, chairs, stands, shelves
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section style={{ 
        padding: 'var(--space-2xl) 0',
        backgroundColor: '#F7FAFC'
      }}>
        <div className="container">
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h2 style={{ 
              marginBottom: 'var(--space-lg)',
              fontSize: '2rem',
              color: 'var(--secondary)'
            }}>
              About PlugMeUp
            </h2>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              marginBottom: 'var(--space-lg)',
              color: 'var(--text)'
            }}>
              PlugMeUp.co.za is a community-focused online store based in Kempton Park and serving surrounding townships. 
              We believe everyday items should be affordable, easy to access, and delivered with trust.
            </p>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: 'var(--text)'
            }}>
              <strong>Simple. Safe. Convenient. Plugged into your everyday life.</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
