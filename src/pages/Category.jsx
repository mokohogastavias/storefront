import { useParams } from 'react-router-dom'

export default function Category() {
  const { slug } = useParams()

  return (
    <div className="container" style={{ padding: 'var(--space-xl) 0' }}>
      <h1>Category: {slug}</h1>
      <p>This page will show products in this category</p>
    </div>
  )
}
