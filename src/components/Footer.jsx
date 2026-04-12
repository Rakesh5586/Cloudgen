import styles from '../styles/Footer.module.css';

const footerLinks = {
  'AI / ML': [
    { label: 'LLM Training & Development', href: '#' },
    { label: 'LLM Factuality Services', href: '#' },
    { label: 'Multimodal LLM Training', href: '#' },
    { label: 'Responsible AI & Safety', href: '#' },
    { label: 'AI & Data Services', href: '#' },
    { label: 'Generative AI Solutions', href: '#' },
  ],
  'DevOps & Cloud': [
    { label: 'DevOps Consulting Services', href: '#' },
    { label: 'AWS DevOps Consulting', href: '#' },
    { label: 'Azure DevOps Consulting', href: '#' },
    { label: 'Kubernetes Consulting', href: '#' },
    { label: 'Docker & Container Services', href: '#' },
    { label: 'CI/CD Pipeline Setup', href: '#' },
    { label: 'Cloud Migration Services', href: '#' },
    { label: 'Cloud Managed Services', href: '#' },
  ],
  'Services': [
    { label: 'Cloud Managed Operations', href: '#' },
    { label: 'DevOps & Platform Engineering', href: '#' },
    { label: 'AI & MLOps Infrastructure', href: '#' },
    { label: 'Security & Compliance', href: '#' },
    { label: 'Private RAG Systems', href: '#' },
    { label: 'MLOps & Model Lifecycle', href: '#' },
    { label: 'Enterprise Integrations', href: '#' },
    { label: 'Digital Engineering', href: '#' },
    { label: 'Blockchain & NFT', href: '#' },
  ],
  'Company': [
    { label: 'About Us', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Industries We Serve', href: '#' },
    { label: 'Our Products', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact Us', href: '#' },
  ],
};

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
    ),
  },
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#000" /></svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* ── Top Bar ── */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>

          {/* Logo + tagline */}
          <div className={styles.topLogo}>
            <img src="/images/cloudgen00rem.png" alt="CloudGenius" className={styles.logoImg} />
            <p className={styles.topTagline}>
              From cloud migrations to full AI infrastructure, CloudGenius delivers end-to-end
              managed solutions your enterprise can rely on — 24×7, at any scale.
            </p>
          </div>

          {/* Contact box */}
          <a href="tel:+1234567890" className={styles.contactBox}>
            <div className={styles.contactIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013 1.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16z" />
              </svg>
            </div>
            <div>
              <span className={styles.contactLabel}>Say Hello to CloudGenius</span>
              <span className={styles.contactNumber}>+1 (800) CLOUDGEN</span>
            </div>
          </a>

          {/* Social box */}
          <div className={styles.socialBox}>
            <span className={styles.socialLabel}>Social Connect</span>
            <div className={styles.socialIcons}>
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className={styles.socialIcon}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Divider ── */}
      <hr className={styles.divider} />

      {/* ── Links Grid ── */}
      <div className={styles.linksSection}>
        <div className={styles.linksInner}>
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col} className={styles.col}>
              <h4 className={styles.colTitle}>{col}</h4>
              <hr className={styles.colDivider} />
              <ul className={styles.colList}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={styles.colLink}>
                      <span className={styles.arrow}>›</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Compliance Section only under Company column */}
              {col === 'Company' && (
                <div className={styles.complianceWrap}>
                  <h4 className={styles.colTitle} style={{ marginTop: '2rem' }}>Compliance</h4>
                  <hr className={styles.colDivider} />
                  <div className={styles.complianceGrid}>
                    <div className={styles.complianceBadge}>
                      <img src="https://placehold.co/200x80/ffffff/094396.png?text=HIPAA" alt="HIPAA Certified" className={styles.complianceImg} />
                    </div>
                    <div className={styles.complianceBadge}>
                      <img src="https://placehold.co/200x80/ffffff/094396.png?text=GDPR" alt="GDPR Compliant" className={styles.complianceImg} />
                    </div>
                    <div className={styles.complianceBadge}>
                      <img src="https://placehold.co/200x80/ffffff/094396.png?text=PCI+DSS" alt="PCI DSS Compliant" className={styles.complianceImg} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <hr className={styles.divider} />
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} CloudGenius. All rights reserved.
        </p>
        <div className={styles.bottomLinks}>
          <a href="#" className={styles.bottomLink}>Privacy Policy</a>
          <a href="#" className={styles.bottomLink}>Terms of Service</a>
          <a href="#" className={styles.bottomLink}>Cookie Policy</a>
        </div>
      </div>

    </footer>
  );
}
