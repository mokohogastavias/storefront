import React from 'react'

function App() {
  return (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#2E8B57' }}>🚀 PlugMeUp.co.za</h1>
      <p>Welcome to your store! If you can see this, it's working!</p>
      <p>📍 Serving Kempton Park, Midrand & surrounding townships</p>
      <button style={{
        padding: '1rem 2rem',
        backgroundColor: '#2E8B57',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '1.2rem',
        marginTop: '1rem'
      }}>
        Shop Now
      </button>
    </div>
  )
}

export default App
