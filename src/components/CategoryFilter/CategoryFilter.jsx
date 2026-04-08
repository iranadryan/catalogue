import styles from './CategoryFilter.module.css'

export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className={styles.wrapper} role="group" aria-label="Filter by category">
      <button
        className={`${styles.btn} ${active === 'all' ? styles.btnActive : ''}`}
        onClick={() => onChange('all')}
        aria-pressed={active === 'all'}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`${styles.btn} ${active === cat ? styles.btnActive : ''}`}
          onClick={() => onChange(cat)}
          aria-pressed={active === cat}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
