export default function About() {
  return (
    <div className="container" style={{ padding: 'var(--space-2xl) 0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: 'var(--space-xl)' }}>About PlugMeUp</h1>
        
        <div style={{ lineHeight: '1.8' }}>
          <p style={{ marginBottom: 'var(--space-lg)' }}>
            PlugMeUp.co.za is a community-focused online store based in Kempton Park and surrounding townships.
            We believe everyday items should be affordable, easy to access, and delivered with trust.
          </p>
          
          <p style={{ marginBottom: 'var(--space-lg)' }}>
            Whether it's clothing, home furniture, beauty essentials, or study materials, we source quality items 
            and bring them directly to your doorstep — no long queues, no complicated processes.
          </p>
          
          <p style={{ marginBottom: 'var(--space-lg)' }}>
            We also work with local creators, resellers, and small businesses by helping them list their products 
            and reach more customers. So when you shop with PlugMeUp, you're not just buying — you're supporting local growth.
          </p>
          
          <p style={{ marginBottom: 'var(--space-lg)' }}>
            <strong>Simple. Safe. Convenient. Plugged into your everyday life.</strong>
          </p>
        </div>
        
        <div style={{ 
          backgroundColor: '#F7FAFC', 
          padding: 'var(--space-xl)',
          borderRadius: 'var(--radius-md)',
          marginTop: 'var(--space-xl)'
        }}>
          <h3 style={{ marginBottom: 'var(--space-md)' }}>Our Service Areas</h3>
          <ul style={{ lineHeight: '2' }}>
            <li>Kempton Park</li>
            <li>Midrand</li>
            <li>Tembisa</li>
            <li>Olifantsfontein</li>
            <li>Ivory Park</li>
            <li>And surrounding townships</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
