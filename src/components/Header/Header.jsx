import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <div className={styles.logoMark}>
            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 6L9 2L15 6V12L9 16L3 12V6Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="9" r="2" fill="currentColor" />
            </svg>
          </div>
          <span className={styles.logoText}>Catalogue</span>
        </div>
        <span className={styles.tagline}>Product Catalog</span>
      </div>
    </header>
  )
}
