import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Left: Logo */}
      <div className={styles.logo}>
        Matic.AI
      </div>

      {/* Center: Nav Links */}
      <nav className={styles.navLinks}>
        <div className={styles.navItem}>
          Products
          <span className={styles.dropdownArrow}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </div>
        <div className={styles.navItem}>
          Solutions
          <span className={styles.dropdownArrow}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </div>
        <div className={styles.navItem}>Resources</div>
        <div className={styles.navItem}>Pricing</div>
      </nav>

      {/* Right: Actions */}
      <div className={styles.actions}>
        <button className={`${styles.button} ${styles.buttonSecondary}`}>Log In</button>
        <button className={`${styles.button} ${styles.buttonPrimary}`}>Book Demo</button>
      </div>
    </header>
  );
}
