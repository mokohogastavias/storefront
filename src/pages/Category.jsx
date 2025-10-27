import { useParams } from 'react-router-dom'

export default function Category() {
  const { slug } = useParams()

  return (
    <div className="container" style={{ padding: 'var(--space-2xl) 0', minHeight: '50vh' }}>
      <h1>Category: {slug}</h1>
      <p>This page will show products in the {slug} category with filters and sorting.</p>
    </div>
  )
}
