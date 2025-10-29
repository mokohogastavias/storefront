export default function TrustBar() {
  return (
    <section style={{
      backgroundColor: 'white',
      padding: 'var(--space-lg) 0',
      borderBottom: '1px solid var(--border)',
      boxShadow: '0 2px 8px rgba(26, 54, 93, 0.08)'
    }}>
      <div className="container-wide">
        <div className="grid grid-4">
          {[
            { icon: '🚚', title: 'Free Delivery', desc: 'On orders over R500' },
            { icon: '💳', title: 'Secure Payment', desc: 'PayFast protected' },
            { icon: '↩️', title: 'Easy Returns', desc: '7-day return policy' },
            { icon: '📞', title: 'Local Support', desc: '068 617 2855' }
          ].map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-md)',
              padding: 'var(--space-sm)'
            }}>
              <div style={{
                fontSize: '2rem',
                background: 'var(--background-light)',
                padding: 'var(--space-sm)',
                borderRadius: 'var(--radius-md)'
              }}>
                {item.icon}
              </div>
              <div>
                <div style={{ fontWeight: '600', fontSize: '0.875rem' }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
