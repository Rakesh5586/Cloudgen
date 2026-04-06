import { useState } from 'react';
import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWrench, faCloud, faFile, faCog, faAnchor,
  faRocket, faSync, faClock, faChartBar, faCheck,
  faRobot, faLock, faShoppingCart, faPalette, faLaptop,
  faGlobe, faPhone, faLink, faCubes, faKey,
  faBullhorn, faBolt, faToolbox, faBars, faTimes, faChevronDown
} from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedDropdowns, setExpandedDropdowns] = useState({});

  // Icon mapping with Font Awesome icons
  const iconMap = {
    'wrench': faWrench,
    'cloud': faCloud,
    'document': faFile,
    'settings': faCog,
    'anchor': faAnchor,
    'rocket': faRocket,
    'refresh': faSync,
    'clock': faClock,
    'chart': faChartBar,
    'check': faCheck,
    'robot': faRobot,
    'lock': faLock,
    'cart': faShoppingCart,
    'palette': faPalette,
    'laptop': faLaptop,
    'globe': faGlobe,
    'phone': faPhone,
    'link': faLink,
    'blockchain': faCubes,
    'key': faKey,
    'megaphone': faBullhorn,
    'bolt': faBolt,
    'tools': faToolbox,
  };

  const getIcon = (iconName) => {
    const icon = iconMap[iconName];
    return icon ? <FontAwesomeIcon icon={icon} /> : null;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setExpandedDropdowns({});
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (itemName) => {
    setExpandedDropdowns((prev) => {
      // If clicking the same item, toggle it
      if (prev[itemName]) {
        return { ...prev, [itemName]: false };
      }
      // If clicking a different item, close all others and open this one
      return { [itemName]: true };
    });
  };

  const handleDropdownEnter = (itemName) => {
    // Only on desktop (hover-based)
    if (window.innerWidth >= 1024) {
      setActiveDropdown(itemName);
    }
  };

  const handleDropdownLeave = () => {
    // Only on desktop (hover-based)
    if (window.innerWidth >= 1024) {
      setActiveDropdown(null);
    }
  };

  const devopsServices = {
    'DEVOPS STRATEGY & CONSULTING': [
      { name: 'DevOps Consulting Services', icon: 'wrench', href: '#' },
      { name: 'AWS DevOps Consulting', icon: 'cloud', href: '#' },
      { name: 'Azure DevOps Consulting', icon: 'cloud', href: '#' },
    ],
    'DEVOPS IMPLEMENTATION & SETUP': [
      { name: 'Infrastructure Setup DevOps', icon: 'document', href: '#' },
      { name: 'Azure DevOps Setup', icon: 'settings', href: '#' },
      { name: 'Kubernetes Consulting', icon: 'anchor', href: '#' },
    ],
    'CI/CD, CONTAINERS & MIGRATION': [
      { name: 'Docker Consulting Services', icon: 'rocket', href: '#' },
      { name: 'Docker Migration Services', icon: 'rocket', href: '#' },
      { name: 'Azure DevOps Migration Tools', icon: 'refresh', href: '#' },
    ],
    'DEVOPS SUPPORT & MANAGEMENT': [
      { name: 'DevOps Support', icon: 'tools', href: '#' },
      { name: 'DevOps Support 24/7', icon: 'clock', href: '#' },
      { name: 'DevOps Management', icon: 'chart', href: '#' },
    ],
    'MONITORING, TESTING & OPTIMIZATION': [
      { name: 'DevOps Testing Services', icon: 'check', href: '#' },
      { name: 'DevOps Maintenance', icon: 'wrench', href: '#' },
      { name: 'AIOps Services', icon: 'robot', href: '#' },
    ],
  };

  const aiMLServices = {
    "LLM'S MODULS": [
      { 
        name: 'LLM Training', 
        desc: 'Get Smart AI Solutions With Our LLM Training & Development Services.',
        icon: 'document',
        href: '#' 
      },
      { 
        name: 'LLM Factuality', 
        desc: 'Ensure Accuracy In Your AI Systems With Our LLM Factuality Services.',
        icon: 'check',
        href: '#' 
      },
      { 
        name: 'Multimodality LLM Training', 
        desc: 'Boost Your AI With Our Multimodal LLM Training Services.',
        icon: 'bolt',
        href: '#' 
      },
      { 
        name: 'Responsible AI', 
        desc: 'Secure Your AI Systems Act Responsibly With Our AI Alignment And Safety Project.',
        icon: 'lock',
        href: '#' 
      },
    ],
    'GENERATIVE AI': [
      { 
        name: 'AI & Data Services', 
        desc: 'We Help Businesses Harness The Power Of Artificial Intelligence And Data Management To Drive Innovation.',
        icon: 'robot',
        href: '#' 
      },
      { 
        name: 'Custom Software Engineering Services', 
        desc: 'We Don\'t Just Build Software — We Engineer Smart, Scalable, And High-Performance Solutions Tailored To Your Unique Business Goals.',
        icon: 'settings',
        href: '#' 
      },
    ],
  };

  const digitalEngineeringServices = [
    {
      name: 'E-Commerce Development Services',
      desc: 'From Concept To Launch, We Handle Every Aspect Of Your E-Commerce Project.',
      icon: 'cart',
      href: '#'
    },
    {
      name: 'User Experience Design',
      desc: 'We Are A Leading User Experience Design Agency Specializing In Crafting Exceptional User Experiences',
      icon: 'palette',
      href: '#'
    },
    {
      name: 'Software Development',
      desc: 'We Offer Top-Tier Custom Software Development Services In Omaha, NE; North Canton, OH; New Philadelphia, OH; San Jose, CA; And Sydney, NSW.',
      icon: 'laptop',
      href: '#'
    },
    {
      name: 'Web Development',
      desc: 'As A Full-Cycle Web Development Partner, We Create Tailored Digital Solutions For Enterprises And SMEs.',
      icon: 'globe',
      href: '#'
    },
    {
      name: 'Mobile Application Development',
      desc: 'Our Mobile App Developers Empower Businesses To Design, Develop, And Modernize Mobile Applications At Speed.',
      icon: 'phone',
      href: '#'
    },
    {
      name: 'Enterprise Application Integration',
      desc: 'Our Enterprise Integration Services Tackle The Most Complex Integration Challenges.',
      icon: 'link',
      href: '#'
    },
  ];

  const cloudServices = [
    {
      name: 'Data Migration Services',
      desc: 'Dataflow Management And Migration Are Frequent Occurrences Within An Organization\'s IT Landscape.',
      icon: 'refresh',
      href: '#'
    },
    {
      name: 'Cloud Marketplaces',
      desc: 'Launch Powerful Cloud-Native Applications With Ease Directly From Trusted Cloud Marketplaces.',
      icon: 'cart',
      href: '#'
    },
    {
      name: 'Startup Acceleration Platform',
      desc: 'With An Experienced And Expert Cloud Team, Startups May Significantly Cut The Time It Takes To Publish And Sell Products.',
      icon: 'rocket',
      href: '#'
    },
    {
      name: 'Cloud Support',
      desc: 'ATH Cloud Platform Support/Helps Cloud Marketplaces SaaS Buyers (Subscribes) And Sellers In Parallel.',
      icon: 'cloud',
      href: '#'
    },
    {
      name: 'Cloud Computing',
      desc: 'We Are A Renowned Cloud Computing Service Provider. We Have A Team Of Certified Cloud Experts',
      icon: 'laptop',
      href: '#'
    },
    {
      name: 'Microsoft PowerApps',
      desc: 'ATH Power Apps Development Services Enable A Broad Range Of App Scenarios To Be Created That Transform Your Manual And Outdated Process.',
      icon: 'bolt',
      href: '#'
    },
    {
      name: 'Microsoft Dynamics 365',
      desc: 'Microsoft Dynamics 365 Provides Business Intelligence And Productivity Through Tight Integration.',
      icon: 'chart',
      href: '#'
    },
  ];

  const blockchainServices = [
    {
      name: 'Blockchain Development',
      desc: 'We Are A Superior Solidity Development Company To Execute Smart Contracts In Any Blockchain.',
      icon: 'blockchain',
      href: '#'
    },
    {
      name: 'Blockchain Services',
      desc: 'We Are A Global Venture Creation And Capital Advice Organization With Blockchain Technology Development And Broker-Dealer Skills.',
      icon: 'key',
      href: '#'
    },
    {
      name: 'Blockchain Marketing',
      desc: 'Blockchain Technology Provides More Significant Data Safety And Transparency Since It Demonstrates And Centralizes The Recording Of All Transactions.',
      icon: 'megaphone',
      href: '#'
    },
    {
      name: 'NFT Development',
      desc: 'NFT Development Firm With A Strong Basis In Decentralized Apps. We Help Businesses And NFT Companies Build An NFT Marketplace Of Their Own To Handle The Selling, Trading, And Bidding.',
      icon: 'palette',
      href: '#'
    },
  ];

  const mainNav = [
    { name: 'AI / ML', href: '#', hasDropdown: true },
    { name: 'Digital Engineering', href: '#', hasDropdown: true },
    { name: 'DevOps', href: '#', hasDropdown: true },
    { name: 'Cloud', href: '#', hasDropdown: true },
    { name: 'Blockchain & NFT', href: '#', hasDropdown: true },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Logo */}
        <div className={styles.headerLogo}>
          <a href="/" className={styles.logoLink}>
            <img 
              src="/images/cloudgen00rem.png" 
              alt="CloudGen Logo" 
              className={styles.headerLogoImg} 
            />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className={styles.mobileToggle}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
        </button>

        {/* Navigation - Center */}
        <nav className={`${styles.headerNav} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          {mainNav.map((item) => (
            <div 
              key={item.name} 
              className={styles.navItemWrapper}
              onMouseEnter={() => item.hasDropdown && handleDropdownEnter(item.name)}
              onMouseLeave={() => item.hasDropdown && handleDropdownLeave()}
            >
              {item.hasDropdown ? (
                <button
                  className={`${styles.navItem} ${activeDropdown === item.name ? styles.active : ''} ${expandedDropdowns[item.name] ? styles.mobileActive : ''}`}
                  onClick={() => toggleDropdown(item.name)}
                >
                  {item.name}
                  <FontAwesomeIcon icon={faChevronDown} className={styles.chevron} />
                </button>
              ) : (
                <a href={item.href} className={`${styles.navItem}`} onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </a>
              )}

              {/* Mega Menu */}
              {item.hasDropdown && (
                <div className={`${styles.megaMenu} ${activeDropdown === item.name || expandedDropdowns[item.name] ? styles.show : ''}`}>
                  <div className={styles.megaMenuContainer}>
                    <div 
                      className={styles.megaMenuGrid}
                      data-menu={
                        item.name === 'AI / ML' ? 'aiml' :
                        item.name === 'Digital Engineering' ? 'digital' :
                        item.name === 'DevOps' ? 'devops' :
                        item.name === 'Cloud' ? 'cloud' :
                        item.name === 'Blockchain & NFT' ? 'blockchain' :
                        'default'
                      }
                    >
                      {(() => {
                        let menuContent = null;
                        
                        if (item.name === 'AI / ML') {
                          menuContent = Object.entries(aiMLServices).map(([category, items]) => (
                            <div key={category} className={`${styles.megaMenuColumn} ${styles.aimlColumn}`}>
                              <h3 className={styles.megaMenuTitle}>{category}</h3>
                              <ul className={styles.megaMenuList}>
                                {items.map((service) => (
                                  <li key={service.name} className={styles.aimlItem}>
                                    <a href={service.href} className={styles.megaMenuLink}>
                                      <span className={styles.itemIcon}>{getIcon(service.icon)}</span>
                                      <div className={styles.itemContent}>
                                        <div className={styles.itemName}>{service.name}</div>
                                        {service.desc && <div className={styles.itemDesc}>{service.desc}</div>}
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ));
                        } else if (item.name === 'Digital Engineering') {
                          // Split into 2 columns for 6 items
                          const firstCol = digitalEngineeringServices.slice(0, 3);
                          const secondCol = digitalEngineeringServices.slice(3, 6);
                          menuContent = [
                            <div key="col1" className={styles.megaMenuColumn}>
                              <ul className={styles.megaMenuList}>
                                {firstCol.map((service) => (
                                  <li key={service.name} className={styles.deItem}>
                                    <a href={service.href} className={styles.megaMenuLink}>
                                      <span className={styles.itemIcon}>{getIcon(service.icon)}</span>
                                      <div className={styles.itemContent}>
                                        <div className={styles.itemName}>{service.name}</div>
                                        {service.desc && <div className={styles.itemDesc}>{service.desc}</div>}
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>,
                            <div key="col2" className={styles.megaMenuColumn}>
                              <ul className={styles.megaMenuList}>
                                {secondCol.map((service) => (
                                  <li key={service.name} className={styles.deItem}>
                                    <a href={service.href} className={styles.megaMenuLink}>
                                      <span className={styles.itemIcon}>{getIcon(service.icon)}</span>
                                      <div className={styles.itemContent}>
                                        <div className={styles.itemName}>{service.name}</div>
                                        {service.desc && <div className={styles.itemDesc}>{service.desc}</div>}
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ];
                        } else if (item.name === 'Cloud') {
                          // Split into 3-4 columns for 7 items
                          const firstCol = cloudServices.slice(0, 3);
                          const secondCol = cloudServices.slice(3, 6);
                          const thirdCol = cloudServices.slice(6, 7);
                          menuContent = [
                            <div key="col1" className={styles.megaMenuColumn}>
                              <ul className={styles.megaMenuList}>
                                {firstCol.map((service) => (
                                  <li key={service.name} className={styles.cloudItem}>
                                    <a href={service.href} className={styles.megaMenuLink}>
                                      <span className={styles.itemIcon}>{getIcon(service.icon)}</span>
                                      <div className={styles.itemContent}>
                                        <div className={styles.itemName}>{service.name}</div>
                                        {service.desc && <div className={styles.itemDesc}>{service.desc}</div>}
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>,
                            <div key="col2" className={styles.megaMenuColumn}>
                              <ul className={styles.megaMenuList}>
                                {secondCol.map((service) => (
                                  <li key={service.name} className={styles.cloudItem}>
                                    <a href={service.href} className={styles.megaMenuLink}>
                                      <span className={styles.itemIcon}>{getIcon(service.icon)}</span>
                                      <div className={styles.itemContent}>
                                        <div className={styles.itemName}>{service.name}</div>
                                        {service.desc && <div className={styles.itemDesc}>{service.desc}</div>}
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>,
                            <div key="col3" className={styles.megaMenuColumn}>
                              <ul className={styles.megaMenuList}>
                                {thirdCol.map((service) => (
                                  <li key={service.name} className={styles.cloudItem}>
                                    <a href={service.href} className={styles.megaMenuLink}>
                                      <span className={styles.itemIcon}>{getIcon(service.icon)}</span>
                                      <div className={styles.itemContent}>
                                        <div className={styles.itemName}>{service.name}</div>
                                        {service.desc && <div className={styles.itemDesc}>{service.desc}</div>}
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ];
                        } else if (item.name === 'Blockchain & NFT') {
                          // Split into 2 columns for 4 items
                          const firstCol = blockchainServices.slice(0, 2);
                          const secondCol = blockchainServices.slice(2, 4);
                          menuContent = [
                            <div key="col1" className={styles.megaMenuColumn}>
                              <ul className={styles.megaMenuList}>
                                {firstCol.map((service) => (
                                  <li key={service.name} className={styles.blockchainItem}>
                                    <a href={service.href} className={styles.megaMenuLink}>
                                      <span className={styles.itemIcon}>{getIcon(service.icon)}</span>
                                      <div className={styles.itemContent}>
                                        <div className={styles.itemName}>{service.name}</div>
                                        {service.desc && <div className={styles.itemDesc}>{service.desc}</div>}
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>,
                            <div key="col2" className={styles.megaMenuColumn}>
                              <ul className={styles.megaMenuList}>
                                {secondCol.map((service) => (
                                  <li key={service.name} className={styles.blockchainItem}>
                                    <a href={service.href} className={styles.megaMenuLink}>
                                      <span className={styles.itemIcon}>{getIcon(service.icon)}</span>
                                      <div className={styles.itemContent}>
                                        <div className={styles.itemName}>{service.name}</div>
                                        {service.desc && <div className={styles.itemDesc}>{service.desc}</div>}
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ];
                        } else {
                          // DevOps
                          menuContent = Object.entries(devopsServices).map(([category, items]) => (
                            <div key={category} className={styles.megaMenuColumn}>
                              <h3 className={styles.megaMenuTitle}>{category}</h3>
                              <ul className={styles.megaMenuList}>
                                {items.map((service) => (
                                  <li key={service.name} className={styles.devopsItem}>
                                    <a href={service.href} className={styles.megaMenuLink}>
                                      <span className={styles.itemIcon}>{getIcon(service.icon)}</span>
                                      <div className={styles.itemContent}>
                                        <div className={styles.itemName}>{service.name}</div>
                                        {service.desc && <div className={styles.itemDesc}>{service.desc}</div>}
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ));
                        }
                        
                        return menuContent;
                      })()}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Section - CTA Button */}
        <div className={styles.headerRight}>
          <a href="#" className={styles.ctaBtn}>
            Get a Quote
          </a>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className={styles.mobileBackdrop}
          onClick={toggleMobileMenu}
        ></div>
      )}
    </header>
  );
}
