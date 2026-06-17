import styles from './Header.module.css';

export default function Header({ brand = "matic" }: { brand?: "matic" | "knowlify" }) {
  const isMatic = brand === "matic";

  return (
    <header className={styles.header}>
      {/* Left: Logo */}
      {isMatic ? (
        <div className={styles.logoText}>Matic AI</div>
      ) : (
        <div className={styles.logoContainer}>
          <svg className={styles.logoIcon} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 22h20L12 2zm0 3.99L18.47 18H5.53L12 5.99z"/>
            <circle cx="12" cy="14" r="2"/>
          </svg>
          <span className={styles.logoText}>Matic AI</span>
        </div>
      )}

      {/* Center: Nav Links */}
      <nav className={styles.navLinks}>
        <div className={styles.navItem}>
          Products
          <span className={styles.dropdownArrow}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </div>
        <div className={styles.navItem}>
          Solutions
          <span className={styles.dropdownArrow}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </div>
        {!isMatic && <div className={styles.navItem}>Enterprise</div>}
        <div className={styles.navItem}>Pricing</div>
        <div className={styles.navItem}>
          Resources
          <span className={styles.dropdownArrow}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </div>
      </nav>

      {/* Right: Actions */}
      <div className={styles.actions}>
        <button className={`${styles.button} ${styles.buttonSecondary}`}>
          {isMatic ? "Log In" : "Start free"}
        </button>
        <button className={`${styles.button} ${styles.buttonPrimary}`}>
          {isMatic ? "Book Demo" : "Book a demo"}
        </button>
      </div>
    </header>
  );
}
