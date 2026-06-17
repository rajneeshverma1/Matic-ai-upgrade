import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left column: Brand, Slogan, and Badges */}
        <div className={styles.brandSection}>
          <div className={styles.logoContainer}>
            <div className={styles.logoSymbol}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 26V8H11.5L16 15L20.5 8H26V26" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="6" cy="8" r="2.5" fill="#10b981" />
              </svg>
            </div>
            <span className={styles.logoText}>Matic AI</span>
          </div>
          
          <p className={styles.slogan}>
            The AI video agency. Make videos yourself on our platform, or have our studio produce them for you.
          </p>

          <div className={styles.builtWithLove}>
            Built with <span className={styles.heart}>❤️</span> by <span className={styles.studioText}>Matic Studio</span>
          </div>
        </div>

        {/* Links Grid */}
        <div className={styles.linksGrid}>
          {/* Products */}
          <div className={styles.column}>
            <h3 className={styles.columnHeader}>Products</h3>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.link}>Platform</a></li>
              <li><a href="#" className={styles.link}>Studio</a></li>
              <li><a href="#" className={styles.link}>AI Explainer Video Maker</a></li>
              <li><a href="#" className={styles.link}>Animated Video Maker</a></li>
              <li><a href="#" className={styles.link}>Healthcare Video Production</a></li>
              <li><a href="#" className={styles.link}>Nonprofit Video Production</a></li>
              <li><a href="#" className={styles.link}>Finance Video Production</a></li>
              <li><a href="#" className={styles.link}>Manufacturing Video Production</a></li>
              <li><a href="#" className={styles.link}>Supply Chain & Logistics Video</a></li>
              <li><a href="#" className={styles.link}>MedTech Video</a></li>
            </ul>
          </div>

          {/* Use Cases */}
          <div className={styles.column}>
            <h3 className={styles.columnHeader}>Use Cases</h3>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.link}>Internal Communications</a></li>
              <li><a href="#" className={styles.link}>Onboarding</a></li>
              <li><a href="#" className={styles.link}>Learning & Development</a></li>
              <li><a href="#" className={styles.link}>Training</a></li>
              <li><a href="#" className={styles.link}>Marketing</a></li>
              <li><a href="#" className={styles.link}>Customer Literacy</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className={styles.column}>
            <h3 className={styles.columnHeader}>Resources</h3>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.link}>Articles</a></li>
              <li><a href="#" className={styles.link}>Case Studies</a></li>
              <li><a href="#" className={styles.link}>Knowledge Base</a></li>
              <li><a href="#" className={styles.link}>ROI Calculator</a></li>
            </ul>
          </div>

          {/* Company & Socials */}
          <div className={styles.column}>
            <h3 className={styles.columnHeader}>Company</h3>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.link}>About</a></li>
              <li><a href="#" className={styles.link}>Privacy Policy</a></li>
              <li><a href="#" className={styles.link}>Terms of Service</a></li>
              <li><a href="#" className={styles.link}>Contact</a></li>
            </ul>

            {/* Social Icons */}
            <div className={styles.socialIcons}>
              <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" aria-label="X (formerly Twitter)" className={styles.socialIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
