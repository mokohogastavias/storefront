import { createContext, useContext, useRef, useEffect } from 'react'

const CartAnimationContext = createContext()

export function CartAnimationProvider({ children }) {
  const cartIconRef = useRef(null)

  const animateAddToCart = (productElement, productData) => {
    if (!cartIconRef.current) return

    // Create flying element
    const flyElement = document.createElement('div')
    flyElement.className = 'cart-fly-element'
    flyElement.innerHTML = productData.image || '📦'
    flyElement.style.cssText = `
      position: fixed;
      z-index: 10000;
      font-size: 1.5rem;
      pointer-events: none;
      transition: all 450ms var(--ease-out-cubic);
    `

    // Get positions
    const productRect = productElement.getBoundingClientRect()
    const cartRect = cartIconRef.current.getBoundingClientRect()
    
    // Set initial position
    flyElement.style.left = `${productRect.left + productRect.width / 2}px`
    flyElement.style.top = `${productRect.top + productRect.height / 2}px`
    flyElement.style.transform = 'scale(1)'

    document.body.appendChild(flyElement)

    // Animate to cart
    requestAnimationFrame(() => {
      flyElement.style.left = `${cartRect.left + cartRect.width / 2}px`
      flyElement.style.top = `${cartRect.top + cartRect.height / 2}px`
      flyElement.style.transform = 'scale(0.3)'
      flyElement.style.opacity = '0'
    })

    // Clean up
    setTimeout(() => {
      if (document.body.contains(flyElement)) {
        document.body.removeChild(flyElement)
      }
    }, 450)
  }

  return (
    <CartAnimationContext.Provider value={{ animateAddToCart, cartIconRef }}>
      {children}
    </CartAnimationContext.Provider>
  )
}

export const useCartAnimation = () => {
  const context = useContext(CartAnimationContext)
  if (!context) {
    throw new Error('useCartAnimation must be used within CartAnimationProvider')
  }
  return context
}
