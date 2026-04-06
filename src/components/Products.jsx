import { useState } from 'react';
import styles from '../styles/Products.module.css';

const products = [
  {
    id: 'cloudops',
    tab: 'CloudOps Pro',
    title: 'CloudOps Pro',
    description:
      'A fully managed cloud operations platform with real-time dashboards, automated DR, FinOps cost insights, and multi-cloud visibility across AWS, Azure, and GCP. Stay compliant, secure, and always-on — without the operational overhead.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&q=80',
  },
  {
    id: 'pipelineiq',
    tab: 'PipelineIQ',
    title: 'PipelineIQ',
    description:
      'An intelligent DevOps platform that automates CI/CD pipelines, IaC deployments, and GitOps workflows. Built-in Kubernetes orchestration, observability, and SLO tracking — helping engineering teams ship faster with zero downtime.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=700&q=80',
  },
  {
    id: 'ragforge',
    tab: 'RAGForge',
    title: 'RAGForge',
    description:
      'A private RAG and AI infrastructure platform for building secure, citation-backed knowledge bases on your proprietary data. Includes vector store management, model hosting, pipeline automation, and full MLOps governance out of the box.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=700&q=80',
  },
  {
    id: 'shieldai',
    tab: 'ShieldAI',
    title: 'ShieldAI',
    description:
      'An AI-powered security and compliance platform that enforces zero-trust policies, runs continuous vulnerability scans, and automates CIS benchmark audits. Stay ahead of threats and meet SOC 2, ISO 27001, and HIPAA requirements effortlessly.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=700&q=80',
  },
  {
    id: 'modelhub',
    tab: 'ModelHub',
    title: 'ModelHub',
    description:
      'A centralised MLOps registry and integration hub for managing the full model lifecycle — from training and evaluation to deployment and drift monitoring. Ships with SDKs, SSO portals, and cost-cap controls for seamless enterprise adoption.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=700&q=80',
  },
];

// Returns position class based on offset from active index
function getPosClass(index, active, total) {
  const offset = ((index - active) % total + total) % total;
  if (offset === 0) return styles.posCenter;
  if (offset === 1) return styles.posRight;
  if (offset === total - 1) return styles.posLeft;
  return styles.posHidden;
}

export default function Products() {
  const [active, setActive] = useState(2); // RAGForge default
  const total = products.length;

  const handlePrev = () => setActive((a) => (a - 1 + total) % total);
  const handleNext = () => setActive((a) => (a + 1) % total);

  return (
    <section className={styles.products}>
      {/* Heading */}
      <h2 className={styles.productsTitle}>Engineered by CloudGenius, Built for the Future</h2>

      {/* Tab Pills Row */}
      <div className={styles.tabsRow}>
        <button className={styles.arrowBtn} onClick={handlePrev} aria-label="Previous">
          &#8249;
        </button>

        <div className={styles.tabs}>
          {products.map((p, i) => (
            <button
              key={p.id}
              className={`${styles.tab} ${i === active ? styles.tabActive : ''}`}
              onClick={() => setActive(i)}
            >
              {p.tab}
            </button>
          ))}
        </div>

        <button className={styles.arrowBtn} onClick={handleNext} aria-label="Next">
          &#8250;
        </button>
      </div>

      {/* 3D Cards Stage — all cards rendered, position driven by class */}
      <div className={styles.stage}>
        {products.map((p, i) => {
          const posClass = getPosClass(i, active, total);
          const isCenter = posClass === styles.posCenter;
          const isLeft = posClass === styles.posLeft;
          const isRight = posClass === styles.posRight;
          const clickable = isLeft || isRight;

          return (
            <div
              key={p.id}
              className={`${styles.card} ${posClass}`}
              onClick={clickable ? (isLeft ? handlePrev : handleNext) : undefined}
              style={{ cursor: clickable ? 'pointer' : 'default' }}
            >
              <div className={styles.cardImg}>
                <img src={p.image} alt={p.title} />
              </div>
              <div className={styles.cardInfo}>
                <h3 className={`${styles.cardTitle} ${isCenter ? styles.cardTitleActive : ''}`}>
                  {p.title}
                </h3>
                <hr className={styles.cardDivider} />
                <p className={styles.cardDesc}>{p.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
