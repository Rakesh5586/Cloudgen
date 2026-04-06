import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Video */}
      <video
        className={styles.heroBgVideo}
        src="/images/bannervideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className={styles.heroOverlay} />

      {/* Content */}
      <div className={styles.heroContent}>
        {/* Badge */}
        <div className={styles.heroBadge}>
          <span>AWS • Azure • GCP • Kubernetes</span>
        </div>

        {/* Heading */}
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleLine1}>Modern Cloud</span>
          <span className={styles.heroTitleLine2}>
            <span className={styles.heroGradient}>DevOps & AI</span>
            {' '}With{' '}
            <span className={styles.heroGradient}>Neon Precision</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className={styles.heroSubtitle}>
          From IaC and platform engineering to RAG and MLOps, CloudGenius keeps your stack fast, secure, and reliable — 24x7
        </p>

        {/* CTA Buttons */}
        <div className={styles.heroBtns}>
          <a href="#contact" className={styles.heroBtnPrimary}>
            Free Consultation
          </a>
          <a href="#case-studies" className={styles.heroBtnOutline}>
            See Case Studies &nbsp;&rsaquo;
          </a>
        </div>
      </div>
    </section>
  );
}
