import { Metadata } from 'next';
import Link from 'next/link';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About Us — Our Story & Mission',
  description: "Learn about the mission, problem, and team behind MaticStudio. We are rebuilding video creation workflow for modern teams.",
  alternates: {
    canonical: '/about',
  },
};

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <span className={styles.eyebrow}>Our Mission</span>
          <h1 className={styles.title}>
            We're building MaticStudio so that any team can turn raw ideas into production-ready creative — without a production team.
          </h1>
        </header>

        {/* 1. The Problem */}
        <section className={styles.storySection}>
          <h2 className={styles.sectionHeading}>The Problem</h2>
          <p className={styles.bodyText}>
            Creative production is still slow, expensive, and gated behind specialists. A great idea — a product launch, a training video, a campaign — can take weeks and thousands of dollars to become something a team can actually publish. Most companies simply skip it, and ship without it.
          </p>
        </section>

        {/* 2. What We're Building */}
        <section className={styles.storySection}>
          <h2 className={styles.sectionHeading}>What We're Building</h2>
          <p className={styles.bodyText}>
            MaticStudio is an AI generative video and creative workflow platform. We combine AI generation with a workflow built for real teams, so what used to take a production agency now takes minutes — at studio-level quality.
          </p>
        </section>

        {/* 3. Why Now */}
        <section className={styles.storySection}>
          <h2 className={styles.sectionHeading}>Why Now</h2>
          <p className={styles.bodyText}>
            Generative video and image models have crossed the quality threshold where output can be used directly in real marketing, training, and product experiences — not just demos. The gap left is workflow, taste, and reliability. That's the gap MaticStudio closes.
          </p>
        </section>

        {/* 4. Our Founders */}
        <section className={styles.storySection}>
          <h2 className={styles.sectionHeading}>Our Founders</h2>
          <p className={styles.bodyText}>
            We started MaticStudio after seeing firsthand how painful and slow it was for product and marketing teams to turn simple copy concepts into high-quality video formats. That experience is why we're building this for collaborative teams.
          </p>
          <div className={styles.foundersGrid}>
            {/* Founder 1 */}
            <div className={styles.founderCard}>
              <div className={styles.founderAvatar}>RV</div>
              <h3 className={styles.founderName}>Rajneesh Verma</h3>
              <span className={styles.founderRole}>Founder & CEO</span>
              <p className={styles.founderBio}>
                Product engineer and creative technologist. Previously led engineering teams building next-generation AI automation.
              </p>
            </div>

            {/* Founder 2 */}
            <div className={styles.founderCard}>
              <div className={styles.founderAvatar}>MS</div>
              <h3 className={styles.founderName}>Matic Team</h3>
              <span className={styles.founderRole}>Co-Founding Team</span>
              <p className={styles.founderBio}>
                Experienced design systems architects, AI research engineers, and video specialists focused on workflow taste.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Our Approach */}
        <section className={styles.storySection}>
          <h2 className={styles.sectionHeading}>Our Approach</h2>
          <p className={styles.bodyText}>
            We believe the best creative tools disappear into the workflow — they don't ask users to become prompt engineers. Every feature we ship is judged against one question: does this get a real team to a usable, on-brand result faster than before.
          </p>
        </section>

        {/* Closing CTA */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaHeading}>Building in the Open</h2>
          <p className={styles.ctaText}>
            We're early, and we're building in the open with the teams who use MaticStudio every day. If that's you — Book a Call and let's talk about what you're trying to create.
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
