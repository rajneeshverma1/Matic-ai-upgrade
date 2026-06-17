import Link from 'next/link';
import styles from './HeroFlow.module.css';

export default function HeroFlow() {
  return (
    <section className={styles.heroSection}>
      {/* Cinematic Background Video Loop */}
      <div className={styles.videoContainer}>
        <video 
          className={styles.videoBackground}
          src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="auto"
        />
        {/* Shadow overlays to ensure text contrast */}
        <div className={styles.overlayTop}></div>
        <div className={styles.overlayBottom}></div>
      </div>

      {/* Hero Content */}
      <div className={styles.contentContainer}>
        <div className={styles.tagline}>
          <span className={styles.tagDot}></span> Target: YC + Google for Startups
        </div>
        <h1 className={styles.headline}>
          Ideas to screen. <br />
          <span className={styles.accentText}>Instantly.</span>
        </h1>
        <p className={styles.subhead}>
          Turn raw concepts into studio-quality creative without the production bottleneck. MaticStudio combines generative foundation models with a workflow built for real teams.
        </p>
        <div className={styles.ctaGroup}>
          <Link href="/contact" className={styles.ctaButton}>
            Book a Call
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.ctaArrow}>
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
          <Link href="/product" className={styles.secondaryButton}>
            Explore Product
          </Link>
        </div>
      </div>

      {/* Subtle bottom scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <span className={styles.scrollText}>Scroll to explore</span>
      </div>
    </section>
  );
}
