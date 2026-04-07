import styles from '../styles/Stats.module.css';

const stats = [
  {
    id: 1,
    number: '20+',
    label: 'CERTIFIED\nPROFESSIONALS',
    desc: 'Certified experts across all leading and advanced technologies.',
  },
  {
    id: 2,
    number: '10+',
    label: 'GLOBAL\nRECOGNITIONS',
    desc: 'Recognized globally for delivering innovative, high-impact digital solutions.',
  },
  {
    id: 3,
    number: '5+',
    label: 'YEARS OF\nEXPERIENCE',
    desc: 'A half-decade of expertise in building scalable, enterprise-grade technology solutions.',
  },
  {
    id: 4,
    number: '150+',
    label: 'PROJECTS',
    desc: 'Successfully delivered 150+ projects across industries with measurable outcomes.',
  },
];

export default function Stats() {
  // Duplicate for seamless infinite loop
  const items = [...stats, ...stats];

  return (
    <section className={styles.stats}>
      <div className={styles.track}>
        <div className={styles.marquee}>
          {items.map((s, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.number}>{s.number}</span>
                <span className={styles.label}>{s.label}</span>
              </div>
              <p className={styles.desc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
