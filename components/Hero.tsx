import styles from './Hero.module.css';

export default function Hero({ brand = "matic" }: { brand?: "matic" | "knowlify" }) {
  const isMatic = brand === "matic";

  return (
    <section className={styles.hero}>
      {isMatic ? (
        <>
          <h1 className={styles.headline}>
            Better outcomes for <span className={styles.highlight}>patients</span>. No more reading <span className={styles.highlight}>manuals</span>.
          </h1>
          <p className={styles.subheadline}>
            Matic AI Loti uses advanced spatial models to simplify complex medical data, giving you the structural clarity you need exactly when you need it.
          </p>
        </>
      ) : (
        <>
          <h1 className={styles.headline}>
            Matic AI Platform
          </h1>
          <p className={styles.subheadline}>
            You make the video. Upload a doc, a blog post, or an idea and get a narrated, animated video in minutes. Edit it just by chatting.
          </p>
          <button className={styles.exploreBtn}>Explore</button>
        </>
      )}
    </section>
  );
}
