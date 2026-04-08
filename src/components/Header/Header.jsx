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
        <a
          href="/catalogue/studio"
          className={styles.studioLink}
          title="Open Sanity Studio"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
            <path d="M8 4.5a.75.75 0 0 1 .75.75v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5A.75.75 0 0 1 8 4.5z" fill="currentColor"/>
          </svg>
          Studio
        </a>
      </div>
    </header>
  )
}
