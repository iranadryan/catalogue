import { useState, useEffect, useMemo } from 'react'
import { client } from './lib/sanityClient'
import Header from './components/Header/Header'
import CategoryFilter from './components/CategoryFilter/CategoryFilter'
import ProductGrid from './components/ProductGrid/ProductGrid'
import './App.css'

const PRODUCTS_QUERY = `*[_type == "product"] | order(_createdAt asc) {
  _id,
  name,
  image,
  category,
  external_url
}`

export default function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    client
      .fetch(PRODUCTS_QUERY)
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Sanity fetch error:', err)
        setError(err.message || 'Failed to load products')
        setLoading(false)
      })
  }, [])

  const categories = useMemo(() => {
    const cats = products
      .map((p) => p.category)
      .filter(Boolean)
    return [...new Set(cats)].sort()
  }, [products])

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return products
    return products.filter((p) => p.category === activeCategory)
  }, [products, activeCategory])

  return (
    <div className="app">
      <Header />

      <main className="main">
        <section className="hero">
          <div className="heroEyebrow">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1L8.854 4.757L13 5.364L10 8.282L10.708 12.41L7 10.46L3.292 12.41L4 8.282L1 5.364L5.146 4.757L7 1Z"
                stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
            </svg>
            Product Catalog
          </div>
          <h1 className="heroTitle">
            Discover our<br /><span>latest products</span>
          </h1>
          <p className="heroDesc">
            Browse our curated collection. Click any product to explore it on the official page.
          </p>
        </section>

        <div className="divider" />

        {loading && (
          <div className="stateContainer">
            <div className="spinner" role="status" aria-label="Loading products" />
            <p className="stateTitle">Loading products…</p>
            <p className="stateDesc">Fetching your catalog from Sanity.</p>
          </div>
        )}

        {error && (
          <div className="stateContainer">
            <div className="errorIcon" aria-hidden="true">
              <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 9.33333V14M14 18.6667H14.0117M5.38167 23.3333H22.6183C24.3767 23.3333 25.4533 21.42 24.57 19.8967L15.9517 4.56667C15.0683 3.04333 12.9317 3.04333 12.0483 4.56667L3.43 19.8967C2.54667 21.42 3.62333 23.3333 5.38167 23.3333Z"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="stateTitle">Failed to load products</p>
            <p className="stateDesc">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="filterBar">
              <CategoryFilter
                categories={categories}
                active={activeCategory}
                onChange={setActiveCategory}
              />
              <span className="filterCount">
                <strong>{filtered.length}</strong> {filtered.length === 1 ? 'product' : 'products'}
              </span>
            </div>

            <ProductGrid products={filtered} />
          </>
        )}
      </main>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Catalogue. All rights reserved.
      </footer>
    </div>
  )
}
