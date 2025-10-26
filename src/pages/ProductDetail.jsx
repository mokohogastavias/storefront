import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  const { sku } = useParams()

  return (
    <div className="container" style={{ padding: 'var(--space-xl) 0' }}>
      <h1>Product Detail Page - SKU: {sku}</h1>
      <p>This page will show individual product details</p>
    </div>
  )
}
