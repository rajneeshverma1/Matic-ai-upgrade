import { Metadata } from 'next';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy — MaticStudio',
  description: 'Understand how MaticStudio processes and protects personal user information in compliance with Google and Y Combinator review guidelines.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <div className={styles.lastUpdated}>Last updated: {currentDate}</div>
        </header>

        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
          <p className={styles.text}>
            At MaticStudio, we are committed to protecting your privacy. We collect personal information to provide and improve our services, including:
          </p>
          <ul className={styles.list}>
            <li><strong>Account Data:</strong> Names, emails, and phone numbers when you sign up or schedule a discovery call.</li>
            <li><strong>Usage Data:</strong> Analytical logs mapping page navigation, dashboard interactions, and device screen aspect ratios.</li>
            <li><strong>Creative Assets:</strong> Scripts, document uploads, and generated video timelines created on the platform.</li>
          </ul>
        </section>

        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>2. How We Use Information</h2>
          <p className={styles.text}>
            We process your personal information to achieve the following core objectives:
          </p>
          <ul className={styles.list}>
            <li>Provision, maintenance, and personalization of creative studio assets.</li>
            <li>Direct communication, meeting scheduling via Google Calendar, and confirmation invitations.</li>
            <li>Security auditing, bot detection, and general product development.</li>
          </ul>
        </section>

        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>3. Cookies & Tracking Technologies</h2>
          <p className={styles.text}>
            We use essential and performance cookies to track traffic, remember browser session settings, and optimize page performance. You have the ability to toggle or disable non-essential tracking mechanisms in your browser preferences at any time.
          </p>
        </section>

        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>4. Contact Us</h2>
          <p className={styles.text}>
            If you have questions, concerns, or requests regarding this Privacy Policy, please reach out to us at: <strong>wwrajneesh807@gmail.com</strong>
          </p>
        </section>
      </div>
    </div>
  );
}
