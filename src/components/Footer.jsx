import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--secondary)',
      color: 'white',
      padding: 'var(--space-2xl) 0',
      marginTop: 'var(--space-2xl)'
    }}>
      <div className="container">
        <div className="grid grid-4">
          {/* About */}
          <div>
            <h3 style={{ marginBottom: 'var(--space-md)' }}>About PlugMeUp</h3>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
              Community-focused online store serving Kempton Park, Midrand, and surrounding townships. 
              Affordable essentials delivered to your doorstep.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ marginBottom: 'var(--space-md)' }}>Contact Us</h3>
            <div style={{ color: '#ccc', lineHeight: '2' }}>
              <p>📞 068 617 2855</p>
              <p>📧 info@plugmeup.co.za</p>
              <p>💬 WhatsApp Support</p>
              <p>📍 Kempton Park • Midrand • Townships</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ marginBottom: 'var(--space-md)' }}>Quick Links</h3>
            <div style={{ color: '#ccc', lineHeight: '2' }}>
              <div><Link to="/about" style={{ color: '#ccc', textDecoration: 'none' }}>About Us</Link></div>
              <div><Link to="/terms" style={{ color: '#ccc', textDecoration: 'none' }}>Terms & Conditions</Link></div>
              <div><Link to="/privacy" style={{ color: '#ccc', textDecoration: 'none' }}>Privacy Policy</Link></div>
              <div><Link to="/returns" style={{ color: '#ccc', textDecoration: 'none' }}>Returns & Refunds</Link></div>
            </div>
          </div>

          {/* Trust Signals */}
          <div>
            <h3 style={{ marginBottom: 'var(--space-md)' }}>Secure Shopping</h3>
            <div style={{ color: '#ccc', lineHeight: '2' }}>
              <p>🔒 SSL Secured</p>
              <p>💳 PayFast Protected</p>
              <p>🚚 Local Delivery</p>
              <p>✅ Trusted Seller</p>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid #555',
          marginTop: 'var(--space-xl)',
          paddingTop: 'var(--space-md)',
          textAlign: 'center',
          color: '#ccc'
        }}>
          <p>&copy; 2024 PlugMeUp.co.za. All rights reserved. CIPC Registration Pending</p>
          <p style={{ marginTop: 'var(--space-sm)', fontSize: '0.9rem' }}>
            We bring what you need closer
          </p>
        </div>
      </div>
    </footer>
  )
}
