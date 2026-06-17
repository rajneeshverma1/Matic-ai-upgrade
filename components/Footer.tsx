import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Part: Brand & Mission Brief */}
        <div className={styles.brandSection}>
          <Link href="/" className={styles.logoContainer}>
            <div className={styles.logoSymbol}>
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 26V8H11.5L16 15L20.5 8H26V26" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="6" cy="8" r="2.5" fill="#3b82f6" />
              </svg>
            </div>
            <span className={styles.logoText}>MaticStudio</span>
          </Link>
          <p className={styles.description}>
            AI generative video & creative platform. Turn raw ideas into production-ready creative in minutes.
          </p>
          <div className={styles.builtWithLove}>
            Built with <span className={styles.heart}>❤️</span> by <span className={styles.studioText}>Matic Studio</span>
          </div>
        </div>

        {/* Right Columns Grid */}
        <div className={styles.linksGrid}>
          {/* Product Column */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Product</h4>
            <ul className={styles.linkList}>
              <li><Link href="/" className={styles.link}>Home</Link></li>
              <li><Link href="/product" className={styles.link}>Product</Link></li>
              <li><Link href="/#use-cases" className={styles.link}>Use Cases</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Company</h4>
            <ul className={styles.linkList}>
              <li><Link href="/about" className={styles.link}>About</Link></li>
              <li><Link href="/contact" className={styles.link}>Contact</Link></li>
              <li><Link href="/contact" className={styles.link}>Book a Call</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Legal</h4>
            <ul className={styles.linkList}>
              <li><Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link></li>
              <li><Link href="/terms" className={styles.link}>Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <p className={styles.copyright}>
            © {currentYear} MaticStudio. All rights reserved.
          </p>
          <div className={styles.socials}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="X (formerly Twitter)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
