export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--secondary)',
      color: 'white',
      padding: 'var(--space-xl) 0',
      marginTop: 'var(--space-xl)'
    }}>
      <div className="container">
        <div className="grid grid-4">
          {/* About */}
          <div>
            <h3 style={{ marginBottom: 'var(--space-md)' }}>About Us</h3>
            <p style={{ color: '#ccc' }}>
              South Africa's fastest growing online marketplace. 
              Trusted by thousands of customers.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ marginBottom: 'var(--space-md)' }}>Contact</h3>
            <div style={{ color: '#ccc' }}>
              <p>📞 +27 12 345 6789</p>
              <p>📧 hello@yourstore.co.za</p>
              <p>💬 WhatsApp Support</p>
            </div>
          </div>

          {/* Trust Signals */}
          <div>
            <h3 style={{ marginBottom: 'var(--space-md)' }}>Secure Shopping</h3>
            <div style={{ color: '#ccc' }}>
              <p>🔒 SSL Secured</p>
              <p>💳 PayFast Protected</p>
              <p>🚚 Free Delivery</p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 style={{ marginBottom: 'var(--space-md)' }}>Legal</h3>
            <div style={{ color: '#ccc' }}>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Returns & Refunds</p>
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
          <p>&copy; 2024 YourStore. All rights reserved. CIPC Registration Pending</p>
        </div>
      </div>
    </footer>
  )
}
