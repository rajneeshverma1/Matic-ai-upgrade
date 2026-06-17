import { Metadata } from 'next';
import Link from 'next/link';
import styles from './product.module.css';

export const metadata: Metadata = {
  title: 'Product — Features & Workflow walkthrough',
  description: 'Explore MaticStudio features: Generative layout engine, custom voice synthesis, instant Customizer custom edit, and HD multi-channel exports.',
  alternates: {
    canonical: '/product',
  },
};

export default function Product() {
  return (
    <div className={styles.productPage}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <span className={styles.eyebrow}>Platform Walkthrough</span>
          <h1 className={styles.title}>Reimagining the creative video workflow</h1>
          <p className={styles.subtitle}>
            A complete suite of generative tools combined in a unified dashboard designed for modern marketing, product, and training teams.
          </p>
        </header>

        {/* Features Stack */}
        <div className={styles.featuresStack}>
          {/* Feature 1 */}
          <div className={styles.featureRow}>
            <div className={styles.featureInfo}>
              <span className={styles.featureNum}>Feature 01</span>
              <h2 className={styles.featureTitle}>Generative Layout Mapping</h2>
              <p className={styles.featureDesc}>
                 MaticStudio parses your scripts or documents, extracting core themes to generate and lay out typography, illustrations, background loops, and transitions across scenes dynamically. No canvas manipulation required.
              </p>
            </div>
            <div className={styles.featureVisual}>
              <div className={styles.visualFrame}>
                <video 
                  className={styles.videoLoop}
                  src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                />
              </div>
            </div>
          </div>

          {/* Feature 2 (Reversed) */}
          <div className={styles.featureRowReversed}>
            <div className={styles.featureInfo}>
              <span className={styles.featureNum}>Feature 02</span>
              <h2 className={styles.featureTitle}>Cohesive Voice Synthesis</h2>
              <p className={styles.featureDesc}>
                Generate natural-sounding, ultra-realistic voice narrations with controlled pacing, specific accents, and clear pauses. Match your script content directly to our premium selection of pre-trained vocal models.
              </p>
            </div>
            <div className={styles.featureVisual}>
              <div className={styles.visualFrame}>
                <video 
                  className={styles.videoLoop}
                  src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                />
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className={styles.featureRow}>
            <div className={styles.featureInfo}>
              <span className={styles.featureNum}>Feature 03</span>
              <h2 className={styles.featureTitle}>Real-time Studio Customizer</h2>
              <p className={styles.featureDesc}>
                Refine scripts, adjust visual prompts, replace backgrounds, and sync background audio tracks in real time. Watch updates compile instantly in your browser before rendering.
              </p>
            </div>
            <div className={styles.featureVisual}>
              <div className={styles.visualFrame}>
                <video 
                  className={styles.videoLoop}
                  src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                />
              </div>
            </div>
          </div>

          {/* Feature 4 (Reversed) */}
          <div className={styles.featureRowReversed}>
            <div className={styles.featureInfo}>
              <span className={styles.featureNum}>Feature 04</span>
              <h2 className={styles.featureTitle}>Multi-Channel Exporting</h2>
              <p className={styles.featureDesc}>
                Export your finalized video directly in standard widescreen formats, 9:16 vertical sizes for mobile, or square ratios for social platforms. Render in full 1080p HD, optimized for fast loading and crisp resolution.
              </p>
            </div>
            <div className={styles.featureVisual}>
              <div className={styles.visualFrame}>
                <video 
                  className={styles.videoLoop}
                  src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaHeading}>Ready to supercharge production?</h2>
          <p className={styles.ctaText}>
            Book a dedicated consultation call with us to explore custom templates and early access features.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Book a Call
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </Link>
        </section>
      </div>
    </div>
  );
}
