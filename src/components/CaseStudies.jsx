import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from '../styles/CaseStudies.module.css';

const caseStudies = [
  {
    id: 1,
    category: 'Cloud Managed',
    title: '35% Cost Reduction for a Global Finance Group',
    description:
      'CloudGenius migrated a legacy banking workload to AWS with 24×7 managed operations, automated DR, and FinOps dashboards — delivering 99.99% uptime and a 35% reduction in cloud spend within the first quarter.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
    href: '#',
  },
  {
    id: 2,
    category: 'DevOps & Platform',
    title: 'Deployments Cut from 3 Days to 8 Minutes',
    description:
      'CloudGenius built a full GitOps CI/CD platform with Kubernetes, Terraform IaC, and Prometheus observability for a fast-growing tech startup — eliminating manual deployments and achieving zero production incidents in 6 months.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
    href: '#',
  },
  {
    id: 3,
    category: 'AI & MLOps',
    title: '22% Conversion Boost with AI Recommendations',
    description:
      'CloudGenius delivered a real-time ML recommendation engine on GCP with automated retraining pipelines, increasing conversion rates by 22% and reducing cart abandonment by 18% across 2M+ daily users.',
    image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=600&q=80',
    href: '#',
  },
  {
    id: 4,
    category: 'Security & Compliance',
    title: 'SOC 2 & HIPAA Certified in Just 10 Weeks',
    description:
      'CloudGenius implemented a zero-trust security architecture, automated CIS benchmark audits, and continuous vulnerability scanning for a healthcare provider — achieving full SOC 2 Type II and HIPAA certification in record time.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    href: '#',
  },
  {
    id: 5,
    category: 'Private RAG',
    title: 'Support Queries Resolved 3× Faster with Private AI',
    description:
      'CloudGenius deployed a VPC-isolated Private RAG system with hybrid vector retrieval and citation-backed responses for a logistics firm — slashing query resolution time by 3× with zero data leaving the private network.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
    href: '#',
  },
  {
    id: 6,
    category: 'MLOps',
    title: '60% Less Overhead with One-Click Model Promotion',
    description:
      'CloudGenius built a centralized MLOps registry with drift detection, experiment tracking, and automated model versioning for a consumer analytics company — cutting data science overhead by 60% and accelerating delivery.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80',
    href: '#',
  },
  {
    id: 7,
    category: 'Integrations',
    title: 'Enterprise Onboarding Cut by 65% with Custom SDKs',
    description:
      'CloudGenius shipped custom SDKs, SSO-enabled self-service portals, embeddable AI widgets, and API cost-cap controls for a SaaS startup — reducing enterprise client onboarding time by 65% and quadrupling API adoption.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',
    href: '#',
  },
];

export default function CaseStudies() {
  return (
    <section className={styles.caseStudies}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Real Impact, Proven Results</h2>
          <p className={styles.subtitle}>
            See how we've helped businesses across industries unlock the power of Cloud, AI &amp; DevOps.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          loop={true}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className={styles.swiper}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {caseStudies.map((cs) => (
            <SwiperSlide key={cs.id}>
              <div className={styles.card}>

                {/* Image */}
                <div className={styles.cardImg}>
                  <img src={cs.image} alt={cs.title} />
                </div>

                {/* Body */}
                <div className={styles.cardBody}>
                  <span className={styles.category}>{cs.category}</span>
                  <h3 className={styles.cardTitle}>{cs.title}</h3>
                  <p className={styles.cardDesc}>{cs.description}</p>

                  {/* Footer button */}
                  <div className={styles.cardFooter}>
                    <a href={cs.href} className={styles.btn}>
                      View Case Study
                    </a>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
