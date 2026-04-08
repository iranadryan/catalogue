import { imageUrl } from '../../lib/sanityClient'
import styles from './ProductCard.module.css'

export default function ProductCard({ product }) {
  const { name, image, category, external_url } = product
  const src = imageUrl(image)

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        {src ? (
          <img
            src={src}
            alt={name}
            className={styles.image}
            loading="lazy"
          />
        ) : (
          <div className={styles.imagePlaceholder} aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
              <circle cx="16" cy="20" r="4" stroke="currentColor" strokeWidth="2" />
              <path d="M4 32l10-8 8 6 8-10 14 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          {category && <span className={styles.category}>{category}</span>}
          <h2 className={styles.name}>{name}</h2>
        </div>

        <a
          href={external_url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
          aria-label={`View ${name}`}
        >
          View Product
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              d="M3.33337 8H12.6667M12.6667 8L8.66671 4M12.6667 8L8.66671 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </article>
  )
}
