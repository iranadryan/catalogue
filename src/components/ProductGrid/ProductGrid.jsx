import ProductCard from '../ProductCard/ProductCard'
import styles from './ProductGrid.module.css'

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <div className={styles.grid}>
        <div className={styles.empty}>
          <div className={styles.emptyIcon} aria-hidden="true">
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.33337 7L6.99671 2.33333L11.6667 7M6.99671 2.33333V19.8333M25.6667 21L21 25.6667L16.3334 21M21 25.6667V8.16667"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className={styles.emptyTitle}>No products found</p>
          <p className={styles.emptyDesc}>
            There are no products in this category yet. Try a different filter.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  )
}
