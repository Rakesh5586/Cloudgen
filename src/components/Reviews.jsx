import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from '../styles/Reviews.module.css';

const reviews = [
  {
    id: 1,
    rating: 5.0,
    text: '"CloudGenius\'s Cloud service completely changed how we operate on AWS. Zero downtime, proactive patching, and FinOps savings of 35% in the first quarter alone. Their engineers feel like an extension of our own team."',
    role: 'VP Infrastructure, NovaTech Solutions',
    name: 'Daniel Harrington',
  },
  {
    id: 2,
    rating: 5.0,
    text: '"Their DevOps & Platform team built our entire CI/CD pipeline and Kubernetes setup from scratch. Deployments that used to take days now take minutes. The observability stack they delivered is world-class."',
    role: 'Head of Engineering, Launchpad Ventures',
    name: 'Priya Mehrotra',
  },
  {
    id: 3,
    rating: 4.8,
    text: '"CloudGenius deployed a Private RAG system on our internal knowledge base with full citation tracking and audit trails. Our support team now resolves queries 3x faster with zero hallucination risk. Truly impressive work."',
    role: 'Director of AI, Meridian Finance Group',
    name: 'Oliver Bassett',
  },
  {
    id: 4,
    rating: 5.0,
    text: '"The Security & Compliance team helped us achieve SOC 2 Type II certification in under 3 months. Their zero-trust implementation and automated vulnerability scanning gave our board complete confidence in our posture."',
    role: 'CISO, PulseHealth Technologies',
    name: 'Amara Osei-Bonsu',
  },
  {
    id: 5,
    rating: 4.7,
    text: '"CloudGenius set up our full MLOps pipeline — from model training and evaluation to drift monitoring and registry. Our data science team can now promote models to production in a single click. Game changer."',
    role: 'Chief Data Officer, Nexora Analytics',
    name: 'Lena Volkova',
  },
  {
    id: 6,
    rating: 5.0,
    text: '"The Integrations team built custom SDKs and an SSO-enabled self-service portal for our enterprise clients in record time. Cost caps and quota controls work flawlessly. CloudGenius delivered above and beyond expectations."',
    role: 'CTO, Orbis Commerce Platform',
    name: 'Marcus Delacroix',
  },
];

function StarRating({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <div className={styles.stars}>
      <span className={styles.ratingNum}>{rating.toFixed(1)}</span>
      {Array(full).fill(null).map((_, i) => (
        <span key={`f${i}`} className={styles.starFull}>★</span>
      ))}
      {half && <span className={styles.starHalf}>★</span>}
      {Array(empty).fill(null).map((_, i) => (
        <span key={`e${i}`} className={styles.starEmpty}>★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className={styles.reviews}>
      <div className={styles.container}>
      <div className={styles.reviewsHeader}>
        <h2 className={styles.reviewsTitle}>What Our Clients Say</h2>
        <p className={styles.reviewsSubtitle}>
          Real feedback from businesses we've helped transform with cloud, AI & DevOps solutions.
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className={styles.swiper}
        breakpoints={{
          0:    { slidesPerView: 1 },
          640:  { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((r) => (
          <SwiperSlide key={r.id}>
            <div className={styles.card}>
              <StarRating rating={r.rating} />
              <p className={styles.cardText}>{r.text}</p>
              <div className={styles.cardFooter}>
                <div className={styles.clientInfo}>
                  <span className={styles.clientRole}>{r.role}</span>
                  <span className={styles.clientName}>{r.name}</span>
                </div>
                <div className={styles.verified}>
                  <svg viewBox="0 0 20 20" fill="currentColor" className={styles.verifiedIcon}>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Verified Review</span>
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
