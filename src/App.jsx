import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CartAnimationProvider } from './components/CartAnimator'
import SiteLoader from './components/SiteLoader'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Category from './pages/Category'
import Cart from './pages/Cart'

// Import motion styles
import './styles/motion.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadProgress, setLoadProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + 10
      })
    }, 200)

    return () => clearInterval(progressInterval)
  }, [])

  return (
    <CartAnimationProvider>
      <Router>
        <div className="app">
          <SiteLoader isLoading={isLoading} progress={loadProgress} />
          
          {!isLoading && (
            <>
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product/:sku" element={<ProductDetail />} />
                  <Route path="/category/:slug" element={<Category />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
              </main>
              <Footer />
              <WhatsAppFloat />
            </>
          )}
        </div>
      </Router>
    </CartAnimationProvider>
  )
}

export default App

export default App
