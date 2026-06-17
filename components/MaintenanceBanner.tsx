import styles from './MaintenanceBanner.module.css';

export default function MaintenanceBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <span className={styles.icon}>⚠️</span>
        <span className={styles.text}>
          Website is under maintenance. For contact reach out to:{' '}
          <a href="mailto:wwrajneesh807@gmail.com" className={styles.link}>
            wwrajneesh807@gmail.com
          </a>
        </span>
      </div>
    </div>
  );
}
