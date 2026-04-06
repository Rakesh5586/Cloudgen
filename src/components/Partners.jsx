import styles from '../styles/Partners.module.css';

const partners = [
  // Cloud Managed + DevOps & Platform
  {
    id: 'aws',
    name: 'AWS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    bg: '#fff',
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    bg: '#fff',
  },
  {
    id: 'google-cloud',
    name: 'Google Cloud',
    logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
    bg: '#fff',
  },
  // AI & MLOps
  {
    id: 'vertex',
    name: 'Vertex AI',
    logo: 'https://www.vectorlogo.zone/logos/google/google-icon.svg',
    bg: '#fff',
  },
  {
    id: 'openai',
    name: 'OpenAI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    bg: '#fff',
  },
  {
    id: 'nvidia',
    name: 'NVIDIA',
    logo: 'https://www.vectorlogo.zone/logos/nvidia/nvidia-ar21.svg',
    bg: '#fff',
  },
  // MLOps + Private RAG
  {
    id: 'databricks',
    name: 'Databricks',
    logo: 'https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg',
    bg: '#fff',
  },
  // Integrations
  {
    id: 'salesforce',
    name: 'Salesforce',
    logo: 'https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg',
    bg: '#fff',
  },
  {
    id: 'bigcommerce',
    name: 'BigCommerce',
    logo: 'https://www.vectorlogo.zone/logos/bigcommerce/bigcommerce-icon.svg',
    bg: '#fff',
  },
  {
    id: 'shopify',
    name: 'Shopify',
    logo: 'https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg',
    bg: '#fff',
  },
  // Private RAG / LLM
  {
    id: 'claude',
    name: 'Claude AI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg',
    bg: '#fff',
  },
  // Security & Compliance
  {
    id: 'hashicorp',
    name: 'HashiCorp',
    logo: 'https://www.vectorlogo.zone/logos/hashicorp/hashicorp-icon.svg',
    bg: '#fff',
  },
];

export default function Partners() {
  return (
    <section className={styles.partners}>
      {/* Heading */}
      <div className={styles.partnersHeader}>
        <h2 className={styles.partnersTitle}>Our Partners</h2>
        <p className={styles.partnersSubtitle}>
          Our partnerships ensure that we bring the best tools and expertise to your projects.
        </p>
      </div>

      {/* Grid */}
      <div className={styles.partnersGrid}>
        {partners.map((p) => (
          <div key={p.id} className={styles.partnerCard}>
            <div className={styles.logoBox} style={{ background: p.bg }}>
              <img src={p.logo} alt={p.name} className={styles.logoImg} />
            </div>
            <span className={styles.partnerName}>{p.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
