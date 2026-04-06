import styles from '../styles/Services.module.css';

const CircuitIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.cardIcon}>
    <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 12H4M15 12H20M12 9V4M12 15V20M6 6L9 9M18 6L15 9M6 18L9 15M18 18L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const services = [
  {
    id: 'cloud-managed',
    title: 'Cloud Managed',
    description:
      'We provide fully managed cloud operations with 24x7 monitoring, automated disaster recovery, proactive patching, and FinOps cost optimization. Our certified engineers handle security hardening, compliance audits, and infrastructure scaling across AWS, Azure, and GCP — so your team can focus on building, not maintaining.',
    large: true,
    bgImage: '/images/cloudgen00.jpeg',
  },
  {
    id: 'devops',
    title: 'DevOps & Platform',
    description:
      'Accelerate your delivery pipeline with enterprise-grade DevOps practices. We design and implement Infrastructure as Code, GitOps workflows, CI/CD pipelines, and Kubernetes platforms with full observability, secrets management, and SLO-driven reliability — enabling your teams to ship faster with confidence.',
    large: false,
  },
  {
    id: 'ai-mlops',
    title: 'AI & MLOps',
    description:
      'From RAG pipelines and vector search to scalable model hosting and automated retraining, we build the AI infrastructure your business needs. Our MLOps frameworks enforce governance, lineage tracking, and safety guardrails — ensuring your models stay accurate, auditable, and production-ready at any scale.',
    large: false,
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    description:
      'Protect your cloud and AI workloads with a zero-trust security architecture. We implement CIS benchmarks, continuous vulnerability management, identity & access policies as code, and automated compliance reporting — helping you meet SOC 2, ISO 27001, HIPAA, and other regulatory frameworks with ease.',
    large: false,
  },
  {
    id: 'private-rag',
    title: 'Private RAG',
    description:
      'Deploy private, on-premises or VPC-isolated Retrieval-Augmented Generation systems tailored to your proprietary data. We handle embeddings, vector store setup, hybrid retrieval strategies, and citation-backed responses — giving you a secure, auditable AI knowledge base your stakeholders can trust.',
    large: false,
  },
  {
    id: 'mlops',
    title: 'MLOps',
    description:
      'Streamline the full model lifecycle from training and evaluation to promotion and monitoring. Our MLOps platform provides drift detection alerts, experiment tracking dashboards, model versioning, and a centralized registry — ensuring your AI systems remain accurate, governed, and continuously improving.',
    large: false,
  },
  {
    id: 'integrations',
    title: 'Integrations',
    description:
      'Connect your AI and cloud services to any existing workflow with our integration layer. We deliver SDKs, embeddable web chat widgets, self-service portals with SSO, usage quotas, and cost cap controls — making it simple for your teams and customers to adopt and govern AI-powered capabilities at scale.',
    large: false,
    wide: true,
  },
];

export default function Services() {
  return (
    <section className={styles.services}>
      {/* Section Heading */}
      <div className={styles.servicesHeader}>
        <h2 className={styles.servicesTitle}>Cloud, AI & DevOps — End to End</h2>
        <p className={styles.servicesSubtitle}>Managed infrastructure, intelligent pipelines, and secure integrations for modern enterprises</p>
      </div>

      {/* Grid */}
      <div className={styles.servicesGrid}>

        {/* Row 1: Large left + 2 stacked right */}
        <div className={styles.row1}>
          {/* Large card */}
          <div
            className={`${styles.card} ${styles.cardLarge}`}
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80)` }}
          >
            <div className={styles.cardImgOverlay} />
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{services[0].title}</h3>
              <p className={styles.cardDesc}>{services[0].description}</p>
              <a href="#" className={styles.cardLink}>LEARN MORE →</a>
            </div>
            <CircuitIcon />
          </div>

          {/* Right stacked */}
          <div className={styles.row1Right}>
            {[services[1], services[2]].map((s) => (
              <div key={s.id} className={`${styles.card} ${styles.cardSmall}`}>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <p className={styles.cardDesc}>{s.description}</p>
                  <a href="#" className={styles.cardLink}>LEARN MORE →</a>
                </div>
                <CircuitIcon />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: 3 equal cards */}
        <div className={styles.row2}>
          {[services[3], services[4], services[5]].map((s) => (
            <div key={s.id} className={`${styles.card} ${styles.cardMed}`}>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.description}</p>
                <a href="#" className={styles.cardLink}>LEARN MORE →</a>
              </div>
              <CircuitIcon />
            </div>
          ))}
        </div>

        {/* Row 3: Full-width card */}
        <div className={`${styles.card} ${styles.cardWide}`}>
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>{services[6].title}</h3>
            <p className={styles.cardDesc}>{services[6].description}</p>
            <a href="#" className={styles.cardLink}>LEARN MORE →</a>
          </div>
          <CircuitIcon />
        </div>

      </div>
    </section>
  );
}
