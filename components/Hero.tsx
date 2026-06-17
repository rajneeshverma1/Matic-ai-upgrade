import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.headline}>
        Better outcomes for <span className={styles.highlight}>patients</span>. No more reading <span className={styles.highlight}>manuals</span>.
      </h1>
      <p className={styles.subheadline}>
        Matic AI Loti uses advanced spatial models to simplify complex medical data, giving you the structural clarity you need exactly when you need it.
      </p>
    </section>
  );
}
