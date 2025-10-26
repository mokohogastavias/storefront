import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'books-education',
    name: 'Books & Education',
    description: 'Stationery, study aids, kids learning materials',
    emoji: '📚',
    color: '#4299E1'
  },
  {
    id: 'clothing-shoes',
    name: 'Clothing, Shoes & Accessories',
    description: 'Everyday wear, urban styles, township vibes',
    emoji: '👕',
    color: '#ED8936'
  },
  {
    id: 'gift-vouchers',
    name: 'Gift Vouchers & Coupons',
    description: 'Digital vouchers to send or redeem',
    emoji: '🎁',
    color: '#9F7AEA'
  },
  {
    id: 'health-beauty',
    name: 'Health & Beauty',
    description: 'Skincare, hair products, fragrances, hygiene',
    emoji: '💄',
    color: '#F687B3'
  },
  {
    id: 'home-living',
    name: 'Home & Living',
    description: 'Steel furniture, chairs, stands, shelves',
    emoji: '🏠',
    color: '#48BB78'
  }
];

export default function CategoryGrid() {
  return (
    <section style={{ padding: 'var(--space-2xl) 0' }}>
      <div className="container">
        <h2 style={{ 
          textAlign: 'center',
          marginBottom: 'var(--space-xl)',
          fontSize: '2rem'
        }}>
          Shop By Category
        </h2>
        
        <div className="grid grid-5">
          {categories.map(category => (
            <Link 
              key={category.id}
              to={`/category/${category.id}`}
              style={{
                display: 'block',
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <div style={{
                padding: 'var(--space-lg)',
                border: '2px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                backgroundColor: 'white'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = category.color;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: 'var(--space-md)'
                }}>
                  {category.emoji}
                </div>
                <h3 style={{
                  marginBottom: 'var(--space-sm)',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  {category.name}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-light)',
                  lineHeight: '1.4'
                }}>
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
