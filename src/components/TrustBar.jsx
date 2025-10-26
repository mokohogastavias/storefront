export default function TrustBar() {
  return (
    <section style={{
      backgroundColor: '#F8F9FA',
      padding: 'var(--space-md) 0',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container">
        <div className="grid grid-3" style={{ textAlign: 'center' }}>
          <div className="trust-badge">
            <span>📞</span>
            <div>
              <strong>068 617 2855</strong>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Call Us</div>
            </div>
          </div>
          
          <div className="trust-badge">
            <span>💬</span>
            <div>
              <strong>WhatsApp Us</strong>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Instant Help</div>
            </div>
          </div>
          
          <div className="trust-badge">
            <span>📧</span>
            <div>
              <strong>info@plugmeup.co.za</strong>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Email Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
