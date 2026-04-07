import styles from '../styles/Clients.module.css';

const row1 = [
  {
    id: 'aws',
    name: 'Amazon Web Services',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  },
  {
    id: 'google',
    name: 'Google Cloud',
    logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg',
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    logo: 'https://www.vectorlogo.zone/logos/salesforce/salesforce-ar21.svg',
  },
  {
    id: 'shopify',
    name: 'Shopify',
    logo: 'https://www.vectorlogo.zone/logos/shopify/shopify-ar21.svg',
  },
  {
    id: 'databricks',
    name: 'Databricks',
    logo: 'https://www.vectorlogo.zone/logos/databricks/databricks-ar21.svg',
  },
  {
    id: 'openai',
    name: 'OpenAI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
  },
];

const row2 = [
  {
    id: 'nvidia',
    name: 'NVIDIA',
    logo: 'https://www.vectorlogo.zone/logos/nvidia/nvidia-ar21.svg',
  },
  {
    id: 'hashicorp',
    name: 'HashiCorp',
    logo: 'https://www.vectorlogo.zone/logos/hashicorp/hashicorp-ar21.svg',
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    logo: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-ar21.svg',
  },
  {
    id: 'github',
    name: 'GitHub',
    logo: 'https://www.vectorlogo.zone/logos/github/github-ar21.svg',
  },
  {
    id: 'docker',
    name: 'Docker',
    logo: 'https://www.vectorlogo.zone/logos/docker/docker-ar21.svg',
  },
  {
    id: 'terraform',
    name: 'Terraform',
    logo: 'https://www.vectorlogo.zone/logos/terraformio/terraformio-ar21.svg',
  },
  {
    id: 'bigcommerce',
    name: 'BigCommerce',
    logo: 'https://www.vectorlogo.zone/logos/bigcommerce/bigcommerce-ar21.svg',
  },
];

function MarqueeRow({ items, reverse }) {
  const doubled = [...items, ...items];
  return (
    <div className={styles.rowTrack}>
      <div className={`${styles.rowInner} ${reverse ? styles.rowReverse : styles.rowForward}`}>
        {doubled.map((c, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.logoBox}>
              <img src={c.logo} alt={c.name} className={styles.logoImg} />
            </div>
            <span className={styles.clientName}>{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section className={styles.clients}>
      <div className={styles.header}>
        <h2 className={styles.title}>Our Clients</h2>
        <p className={styles.subtitle}>
          Trusted by industry leaders across cloud, AI, and enterprise technology.
        </p>
      </div>

      <MarqueeRow items={row1} reverse={false} />
      <MarqueeRow items={row2} reverse={true} />
    </section>
  );
}
