import { Metadata } from 'next';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Terms & Conditions — MaticStudio',
  description: 'Read the Terms & Conditions governing the use of MaticStudio generative video platforms and creative agency workflows.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsAndConditions() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Terms & Conditions</h1>
          <div className={styles.lastUpdated}>Last updated: {currentDate}</div>
        </header>

        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>1. Agreement to Terms</h2>
          <p className={styles.text}>
            By accessing or using MaticStudio.site (the "Service"), you agree to be bound by these Terms & Conditions. If you disagree with any part of these terms, you may not access or use the Service.
          </p>
        </section>

        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>2. Use of Service</h2>
          <p className={styles.text}>
            We grant you a limited, non-exclusive, non-transferable, and revocable license to access our platform solely for creative production workflows, subject to the following rules:
          </p>
          <ul className={styles.list}>
            <li>You may not use the platform to generate synthetic media that infringes on third-party copyrights or trademark protections.</li>
            <li>You may not run automated scraping tools, scripts, or bots designed to compromise server efficiency or access proprietary neural net parameters.</li>
            <li>You are solely responsible for all content, documents, and scripts uploaded through your account.</li>
          </ul>
        </section>

        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>3. Intellectual Property Rights</h2>
          <p className={styles.text}>
            All generative engines, design interfaces, templates, and core platform workflows are owned by MaticStudio. Standard outputs rendered by early users on the platform belong to the respective content creators, subject to structural license rules.
          </p>
        </section>

        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>4. Governing Law</h2>
          <p className={styles.text}>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of Delaware, United States, without regard to conflict of law principles.
          </p>
        </section>

        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>5. Contact Information</h2>
          <p className={styles.text}>
            For any clarifications or legal requests under these Terms & Conditions, please contact us at: <strong>wwrajneesh807@gmail.com</strong>
          </p>
        </section>
      </div>
    </div>
  );
}
