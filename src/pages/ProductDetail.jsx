import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  const { sku } = useParams()

  return (
    <div className="container" style={{ padding: 'var(--space-2xl) 0', minHeight: '50vh' }}>
      <h1>Product Details</h1>
      <p>Product SKU: {sku}</p>
      <p>This page will show individual product details, images, and purchase options.</p>
    </div>
  )
}
