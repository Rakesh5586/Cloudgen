import styles from '../styles/Industries.module.css';

const industries = [
  {
    id: 'banking',
    label: 'Banking & Finance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M8 10v11M12 10v11M16 10v11M20 10v11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    desc: 'AI-powered fraud detection, cloud-native core banking, MLOps-driven risk models, and DevSecOps pipelines for regulated financial environments.',
  },
  {
    id: 'manufacturing',
    label: 'Manufacturing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    desc: 'Smart factory automation, predictive maintenance with MLOps, Kubernetes-orchestrated workloads, and real-time cloud telemetry for Industry 4.0.',
  },
  {
    id: 'retail',
    label: 'Retail & E-commerce',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9l1 11h16l1-11H3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M8 9V6a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    desc: 'Personalized recommendation engines, scalable e-commerce platforms, RAG-powered product search, and automated CI/CD for zero-downtime deployments.',
  },
  {
    id: 'logistics',
    label: 'Logistics',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="10" width="15" height="9" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 13h4l3 4v2h-7V13z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="5.5" cy="19.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="18.5" cy="19.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    desc: 'Route optimization with AI, real-time fleet tracking on cloud infrastructure, IoT data pipelines, and DevOps workflows for supply-chain resilience.',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C12 22 3 16 3 9a9 9 0 0118 0c0 7-9 13-9 13z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M12 7v6M9 10h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    desc: 'HIPAA-compliant cloud infrastructure, AI-driven diagnostics, private RAG for clinical knowledge bases, and MLOps for medical model governance.',
  },
  {
    id: 'technology',
    label: 'Technology',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="4" y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    desc: 'Platform engineering, Kubernetes-native SaaS architectures, LLM integration, and full-stack DevOps for high-growth technology companies.',
  },
  {
    id: 'consumer-electronics',
    label: 'Consumer Electronics',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="2" width="9" height="14" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="10" y="8" width="9" height="13" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 18h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    desc: 'Edge AI deployment, OTA firmware pipelines, IoT cloud ingestion at scale, and blockchain-enabled product authentication for smart devices.',
  },
  {
    id: 'startups',
    label: 'Startups',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C12 2 7 7.5 7 13a5 5 0 0010 0C17 7.5 12 2 12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 17l-3 3M15 17l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    desc: 'Startup acceleration on cloud marketplaces, lean MLOps stacks, rapid CI/CD bootstrapping, and scalable architecture to go from MVP to enterprise-ready.',
  },
];

export default function Industries() {
  return (
    <section className={styles.industries}>
      <div className={styles.industriesInner}>
        {/* Header */}
        <div className={styles.industriesHeader}>
          <h2 className={styles.industriesTitle}>Powering Every Sector with Intelligent Cloud & AI</h2>
          <p className={styles.industriesSubtitle}>From startups to enterprises — we engineer smart solutions for the industries that matter most</p>
        </div>

        {/* Grid */}
        <div className={styles.industriesGrid}>
          {industries.map((ind) => (
            <div key={ind.id} className={styles.industryCard}>
              <div className={styles.cardIconWrap}>
                {ind.icon}
              </div>
              <h3 className={styles.cardLabel}>{ind.label}</h3>
              <p className={styles.cardDesc}>{ind.desc}</p>
              <div className={styles.cardHoverLine} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
