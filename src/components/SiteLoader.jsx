import { useEffect, useState } from 'react'
import './SiteLoader.css'

export default function SiteLoader({ isLoading, progress }) {
  const [isVisible, setIsVisible] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (!isLoading) {
      // Start fade out sequence
      setTimeout(() => setShowContent(false), 300)
      setTimeout(() => setIsVisible(false), 600)
    } else {
      setIsVisible(true)
      setShowContent(true)
    }
  }, [isLoading])

  if (!isVisible) return null

  return (
    <div className={`site-loader ${showContent ? 'visible' : 'hidden'}`}>
      <div className="loader-content">
        {/* Logo Container */}
        <div className="logo-container">
          <svg 
            className="logo-svg" 
            width="80" 
            height="80" 
            viewBox="0 0 100 100"
          >
            {/* Shopping Bag */}
            <path
              className="logo-bag"
              d="M30 30 L70 30 L80 50 L80 85 L20 85 L20 50 Z"
              fill="none"
              stroke="var(--secondary)"
              strokeWidth="4"
            />
            {/* Plug Handle */}
            <path
              className="logo-plug-handle"
              d="M45 20 L55 20 L55 30 L45 30 Z"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="3"
            />
            {/* Plug Prongs */}
            <path
              className="logo-plug-prongs"
              d="M40 35 L35 45 M60 35 L65 45"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="2"
            />
          </svg>
          
          <div className="logo-text">
            <h1 className="logo-title">PlugMeUp</h1>
            <p className="logo-subtitle">ONLINE</p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="progress-container">
          <div className="progress-track">
            <div 
              className="progress-bar" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-dots">
            <span className="progress-dot"></span>
            <span className="progress-dot"></span>
            <span className="progress-dot"></span>
          </div>
        </div>

        {/* Loading Message */}
        <p className="loading-message">
          {progress < 80 ? 'Loading your shopping experience...' : 'Almost ready...'}
        </p>
      </div>

      {/* Skeleton Preview (shows what's coming) */}
      <div className="skeleton-preview">
        <div className="skeleton-header"></div>
        <div className="skeleton-hero"></div>
        <div className="skeleton-grid">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="skeleton-card"></div>
          ))}
        </div>
      </div>
    </div>
  )
}
