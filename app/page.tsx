import Link from 'next/link';
import HeroFlow from '@/components/HeroFlow';
import Testimonials from '@/components/Testimonials';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      {/* 1. Cinematic Flow Hero */}
      <HeroFlow />

      {/* 2. Problem / Solution Section */}
      <section className={`${styles.section} ${styles.problemSection}`}>
        <div className={styles.container}>
          <div className={styles.problemGrid}>
            <h2 className={styles.problemTitle}>
              Creative production <br />
              is still broken.
            </h2>
            <div className={styles.problemText}>
              <p className="mb-4 font-semibold text-black">
                Creative production is still slow, expensive, and gated behind specialists. A great idea — a product launch, a training video, a campaign — can take weeks and thousands of dollars to become something a team can actually publish.
              </p>
              <p className="text-gray-500 font-medium">
                MaticStudio combines AI generation with a workflow built for real teams, so what used to take a production agency now takes minutes — at studio-level quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Demo Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>See MaticStudio in Action</h2>
            <p className={styles.sectionSub}>
              Watch how quickly any team member can turn a rough script or prompt into a high-fidelity, polished video.
            </p>
          </div>
          <div className={styles.demoWrapper}>
            <div className={styles.demoVideoFrame}>
              <video 
                className={styles.demoVideo}
                src="https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" 
                autoPlay 
                muted 
                loop 
                playsInline 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. How It Works Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>How it works</h2>
            <p className={styles.sectionSub}>
              Three steps from raw concept to final high-fidelity production-ready creative.
            </p>
          </div>
          <div className={styles.stepsGrid}>
            {/* Step 1 */}
            <div className={styles.stepCard}>
              <div className={styles.stepNum}>1</div>
              <h3 className={styles.stepTitle}>Draft the concept</h3>
              <p className={styles.stepDesc}>
                Upload your document, brief, or write a simple script. MaticStudio breaks down your instructions into structured scenes instantly.
              </p>
            </div>

            {/* Step 2 */}
            <div className={styles.stepCard}>
              <div className={styles.stepNum}>2</div>
              <h3 className={styles.stepTitle}>Configure visual style</h3>
              <p className={styles.stepDesc}>
                Select characters, backgrounds, or voice styles. Our generative pipeline creates matching, brand-aligned elements immediately.
              </p>
            </div>

            {/* Step 3 */}
            <div className={styles.stepCard}>
              <div className={styles.stepNum}>3</div>
              <h3 className={styles.stepTitle}>Refine & publish</h3>
              <p className={styles.stepDesc}>
                Fine-tune timings, adjust prompts in real time, and download high-resolution output ready to publish to any marketing or training channel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials (Social Proof) */}
      <section id="use-cases" className={styles.testimonialsSection}>
        <Testimonials />
      </section>

      {/* 6. Final CTA Band */}
      <section className={`${styles.section} ${styles.ctaBand}`}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Start creating without the wait</h2>
          <p className={styles.ctaSub}>
            Book a 15-minute introductory call to explore how MaticStudio can scale your creative production.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Book a Call
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
