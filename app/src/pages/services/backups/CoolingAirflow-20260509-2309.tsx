import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import styles from './CoolingAirflow.module.css';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderContainer,
  HeaderMenuButton,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  Grid,
  Column,
  Button,
  ButtonSet,
  Accordion,
  AccordionItem,
  Tag,
  Tile,
  ClickableTile,
  Breadcrumb,
  BreadcrumbItem,
  Modal,
  TextInput,
  Form,
  FormGroup,
} from '@carbon/react';
import {
  ArrowRight,
  CheckmarkFilled,
  ChevronLeft,
  ChevronRight,
  TemperatureHot,
  Warning,
  Settings,
  Meter,
  Certificate,
  Dashboard,
  Search,
  ChevronUp,
  ChevronDown,
  Download,
  Temperature,
  ChartLine,
  DataCenter,
  Windy,
} from '@carbon/icons-react';

import HeroCubeAnimation from '../../components/HeroCubeAnimation';
import HeroGradientPlanes from '../../components/HeroGradientPlanes';
import FeaturedTestimonial from '../../components/FeaturedTestimonial';
import Footer from '../../sections/Footer';

/* ==============================================================================
   DATA & CONSTANTS
   ============================================================================== */

/* ------------------------------------------------------------------------------
   Single source of truth for page sections.
   Adding a section here automatically updates scroll-spy AND anchor nav.
   ------------------------------------------------------------------------------ */
const PAGE_SECTIONS = [
  { id: 'services', label: 'Services', inNav: true },
  { id: 'assessment', label: '01 Assessment', inNav: true },
  { id: 'hardware', label: '02 Procurement', inNav: true },
  { id: 'installation', label: '03 Deployment', inNav: true },
  { id: 'managed', label: '04 Managed Services', inNav: true },
  { id: 'results', label: 'Results', inNav: true },
  { id: 'ecosystem', label: 'Ecosystem', inNav: true },
  { id: 'faq', label: 'FAQ', inNav: true },
  { id: 'cta', label: 'Get Started', inNav: true },
] as const;

const SECTIONS = PAGE_SECTIONS.map((s) => s.id);
const NAV_SECTIONS = PAGE_SECTIONS.filter((s) => s.inNav).map((s) => s.id);
const sectionLabels: Record<string, string> = Object.fromEntries(
  PAGE_SECTIONS.map((s) => [s.id, s.label])
);



const manufacturerPartners = [
  { name: 'Huawei', logo: '/logos/partners/Partner-Huawei-Logo.svg', width: 80 },
  { name: 'Lenovo', logo: '/logos/partners/Partner-Lenovo-Logo.svg', width: 70 },
  { name: 'Dell', logo: '/logos/partners/Partner-Dell-logo.svg', width: 60 },
  { name: 'HP', logo: '/logos/partners/Partner- Hewlett-Packard-Logo.svg', width: 50 },
];

const caseStudyData = [
  { stat: '99.97%', label: 'Uptime Achieved', client: 'Mayfair Food', industry: 'Fashion Retail', title: 'Server Migration', desc: 'Replaced legacy AC with in-row cooling and aisle containment. PUE dropped from 1.8 to 1.35.', tags: ['', 'Monsoon Hardening'], outcomes: ['PUE reduced from 1.8 to 1.35', '40% energy savings validated over 12 months', 'Hot-spot elimination across all 8 racks'], logo: '/logos/clients/mayfair logo svg.svg', image: '/case-studies/mayfair-preview.png', link: '/projects/case-study/private-bank-cooling-refresh' },
  { stat: '40%', label: 'Energy Reduction', client: 'Sefam', industry: 'Fashion Retail', title: 'Precision Cooling Refresh', desc: 'Replaced legacy AC with in-row cooling and aisle containment. PUE dropped from 1.8 to 1.35.', tags: ['Textile Manufacturing', 'PUE Optimisation'], outcomes: ['PUE reduced from 1.8 to 1.35', '40% energy savings validated over 12 months', 'Hot-spot elimination across all 8 racks'], logo: '/logos/clients/IFL-logo.png', image: '/case-studies/sefam-preview.png', link: '/projects/case-study/private-bank-cooling-refresh' },
  { stat: '4hrs', label: 'Response Time', client: 'Government IDC', industry: 'Government', title: 'Managed Thermal Service', desc: 'End-to-end cooling supply, install, and managed service with quarterly validation and monsoon standby.', tags: ['Managed Service', 'SLA'], outcomes: ['4-hour on-site response guarantee', 'Quarterly thermal validation reports', 'Monsoon standby protocol with spare CRAC'], logo: null, image: null, link: '/projects/case-study/government-idc-managed-thermal' },
  { stat: '60%', label: 'Capacity Gain', client: 'Textile Manufacturer', industry: 'Manufacturing', title: 'Legacy Cooling Replacement', desc: 'Custom cooling capacity derating for 45°C ambient. High-ambient condensers with thermal mass buffering.', tags: ['Retrofit', 'Precision Cooling'], outcomes: ['60% additional cooling capacity unlocked', 'Condensers rated for 50°C ambient', 'Thermal mass buffering for power fluctuations'], logo: null, image: null, link: '/projects/case-study/textile-manufacturer-cooling-replacement' },
  { stat: '99.9%', label: 'Uptime SLA', client: 'National Bank', industry: 'Financial Services', title: 'Monsoon-Hardened Edge Cooling', desc: 'Quarterly room integrity validation and humidity-compensated CRAC setpoints. Zero unplanned monsoon-related failures.', tags: ['Edge', 'Monsoon Hardening'], outcomes: ['99.9% uptime target met for 24 months under signed Enterprise SLA', 'Zero unplanned monsoon-related cooling failures', 'Automated humidity compensation active'], logo: null, image: null, link: '/projects/case-study/national-bank-edge-cooling' },
  { stat: '35%', label: 'Energy Saved', client: 'Cloud Provider', industry: 'Technology', title: 'Free Cooling Integration', desc: 'Hot/cold aisle containment with free-cooling integration. Energy consumption reduced by 35%.', tags: ['Free Cooling', 'PUE Optimisation'], outcomes: ['35% annual energy reduction', 'Free cooling active 8 months/year', 'Containment retrofit completed without downtime'], logo: null, image: null, link: '/projects/case-study/cloud-provider-free-cooling' },
];

/* ==============================================================================
   HEADER / NAVIGATION — Carbon React UI Shell
   ============================================================================== */

const CarbonHeader = () => {
  // @ts-ignore
  const SNavItem = SideNavMenuItem as any;
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!activeMenu) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target) && navRef.current && !navRef.current.contains(target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [activeMenu]);

  const menuTrigger = (label: string, hasDropdown: boolean) => (
    <div
      style={{ position: 'relative', height: '100%' }}
      onMouseEnter={() => hasDropdown && setActiveMenu(label)}
    >
      <HeaderMenuItem
        href={label === 'Projects' ? '/#/projects' : label === 'About' ? '/#/about' : '/#/services'}
        style={{ color: 'var(--cds-text-inverse)' }}
      >
        {label}
      </HeaderMenuItem>
    </div>
  );

  const MegaLink = ({ href, title, desc }: { href: string; title: string; desc?: string }) => (
    <a href={href} className="mega-link">
      <span className="cds--body-compact-01" style={{ color: 'inherit', fontWeight: 600 }}>
        {title}
      </span>
      {desc && (
        <span className="cds--helper-text-01 mega-link__desc" style={{ display: 'block', marginTop: '0.125rem' }}>
          {desc}
        </span>
      )}
    </a>
  );

  const megaMenuContent: Record<string, React.ReactNode> = {
    Infrastructure: (
      <Grid>
        <Column lg={4} md={4} sm={4} style={{ marginBottom: '1.5rem' }}>
          <p className="cds--label-01" style={{ color: 'var(--cds-text-primary)', textTransform: 'uppercase', letterSpacing: '0.32px', marginBottom: '1rem', fontWeight: 600 }}>
            Core Infrastructure
          </p>
          <MegaLink href="/#/services/server-continuity" title="Server Continuity" desc="Business continuity & disaster recovery" />
          <MegaLink href="/#/services/hardware-support" title="Hardware Support" desc="Save 60% vs vendor contracts" />
          <MegaLink href="/#/services/sla-support" title="24×7 SLA Support" desc="Guaranteed response times" />
        </Column>

        <Column lg={4} md={4} sm={4} style={{ marginBottom: '1.5rem' }}>
          <p className="cds--label-01" style={{ color: 'var(--cds-text-primary)', textTransform: 'uppercase', letterSpacing: '0.32px', marginBottom: '1rem', fontWeight: 600 }}>
            Network Operations
          </p>
          <MegaLink href="/#/services/cross-domain-automation" title="Cross-Domain Automation" desc="Automate alarm correlation" />
          <MegaLink href="/#/services/network-monitoring" title="Network Monitoring" desc="Real-time visibility & optimisation" />
        </Column>

        <Column lg={4} md={4} sm={4} style={{ marginBottom: '1.5rem' }}>
          <p className="cds--label-01" style={{ color: 'var(--cds-text-primary)', textTransform: 'uppercase', letterSpacing: '0.32px', marginBottom: '1rem', fontWeight: 600 }}>
            Data Centre Services
          </p>
          <MegaLink href="/#/infrastructure/data-centre-services/cooling-airflow" title="Cooling & Airflow" desc="Precision cooling & thermal continuity" />
          <MegaLink href="/#/services/power-ups" title="Power & UPS" desc="UPS & power distribution" />
          <MegaLink href="/#/services/rack-cabinets" title="Rack & Cabinet" desc="Server cabinets & enclosures" />
          <MegaLink href="/#/services/environmental-monitoring" title="Environmental Monitoring" desc="Temp, humidity, leak detection" />
        </Column>

        <Column lg={4} md={4} sm={4} style={{ marginBottom: '1.5rem' }}>
          <p className="cds--label-01" style={{ color: 'var(--cds-text-primary)', textTransform: 'uppercase', letterSpacing: '0.32px', marginBottom: '1rem', fontWeight: 600 }}>
            Data Centre Services
          </p>
          <MegaLink href="/#/services/fire-suppression" title="Fire Suppression" desc="FM200 & clean-agent protection" />
          <MegaLink href="/#/services/design-build" title="Design & Build" desc="End-to-end construction & CFD" />
          <MegaLink href="/#/services/migration-relocation" title="Migration & Relocation" desc="Zero-downtime moves" />
          <MegaLink href="/#/services/maintenance-support" title="Maintenance & Support" desc="SLA-backed contracts" />
        </Column>
      </Grid>
    ),

    Cloud: (
      <Grid>
        <Column lg={4} md={4} sm={4}>
          <p className="cds--label-01" style={{ color: 'var(--cds-text-primary)', textTransform: 'uppercase', letterSpacing: '0.32px', marginBottom: '1rem', fontWeight: 600 }}>
            Cloud Services
          </p>
          <MegaLink href="/#/services/cloud-strategy" title="Cloud Strategy" desc="Multi-cloud roadmap & governance" />
          <MegaLink href="/#/services/cloud-cost-optimisation" title="Cloud Cost Optimisation" desc="Reduce spend by 30–40%" />
          <MegaLink href="/#/services/cloud-management" title="Cloud Management" desc="Operations & monitoring" />
        </Column>
        <Column lg={4} md={4} sm={4}>
          <p className="cds--label-01" style={{ color: 'var(--cds-text-primary)', textTransform: 'uppercase', letterSpacing: '0.32px', marginBottom: '1rem', fontWeight: 600 }}>
            Delivery
          </p>
          <MegaLink href="/#/services/devops-delivery" title="DevOps Delivery" desc="CI/CD pipelines & automation" />
          <MegaLink href="/#/services/container-platform" title="Container Platform" desc="Kubernetes & orchestration" />
        </Column>
        <Column lg={8} md={8} sm={4}>
          <Tile style={{ background: 'var(--cds-layer)' }}>
            <p className="cds--label-01" style={{ color: 'var(--cds-interactive)', textTransform: 'uppercase', letterSpacing: '0.32px', marginBottom: '0.5rem' }}>Featured</p>
            <h4 className="cds--heading-02" style={{ color: 'var(--cds-text-primary)', marginBottom: '0.5rem' }}>Cloud Cost Optimisation</h4>
            <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)' }}>Identify waste, right-size resources, and automate savings.</p>
          </Tile>
        </Column>
      </Grid>
    ),

    'Data and Analytics': (
      <Grid>
        <Column lg={4} md={4} sm={4} style={{ marginBottom: '1.5rem' }}>
          <MegaLink href="/#/services/iot-data-analytics" title="IoT Data Analytics" desc="Real-time sensor data processing & analytics" />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginTop: '-0.25rem', marginBottom: '1rem', paddingLeft: '0.25rem' }}>
            {['Databricks', 'Azure', 'MQTT', 'Data Lakes'].map((t) => (
              <span key={t} className="cds--tag cds--tag--outline">{t}</span>
            ))}
          </div>
          <MegaLink href="/#/services/data-lakes-warehousing" title="Data Lakes & Warehousing" desc="Cloud-based data warehousing and lakehouse architecture" />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginTop: '-0.25rem', marginBottom: '1rem', paddingLeft: '0.25rem' }}>
            {['Snowflake', 'Azure Synapse', 'AWS S3', 'Delta Lake'].map((t) => (
              <span key={t} className="cds--tag cds--tag--outline">{t}</span>
            ))}
          </div>
        </Column>

        <Column lg={4} md={4} sm={4} style={{ marginBottom: '1.5rem' }}>
          <MegaLink href="/#/services/geospatial-analytics" title="Geospatial Analytics" desc="Real-time mobile tower status with mapping" />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginTop: '-0.25rem', marginBottom: '1rem', paddingLeft: '0.25rem' }}>
            {['ArcGIS', 'Mapbox', 'Google Maps API', 'PostGIS'].map((t) => (
              <span key={t} className="cds--tag cds--tag--outline">{t}</span>
            ))}
          </div>
          <MegaLink href="/#/services/data-federation" title="Data Federation" desc="Cross-functional central portals for secure data access" />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginTop: '-0.25rem', marginBottom: '1rem', paddingLeft: '0.25rem' }}>
            {['Apache Trino', 'Data Virtualization', 'API Gateway', 'GraphQL'].map((t) => (
              <span key={t} className="cds--tag cds--tag--outline">{t}</span>
            ))}
          </div>
        </Column>

        <Column lg={4} md={4} sm={4} style={{ marginBottom: '1.5rem' }}>
          <MegaLink href="/#/services/database-optimisation" title="Database Optimisation" desc="DB2 PureScale, SQL Server, Oracle performance tuning" />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginTop: '-0.25rem', marginBottom: '1rem', paddingLeft: '0.25rem' }}>
            {['DB2 PureScale', 'SQL Server', 'Oracle', 'PostgreSQL'].map((t) => (
              <span key={t} className="cds--tag cds--tag--outline">{t}</span>
            ))}
          </div>
        </Column>
      </Grid>
    ),

    AI: (
      <Grid>
        <Column lg={4} md={4} sm={4}>
          <MegaLink href="/#/services/ai-strategy" title="AI Strategy" desc="AI roadmap & use-case prioritisation" />
          <MegaLink href="/#/services/mlops" title="MLOps" desc="Model deployment & monitoring" />
        </Column>
        <Column lg={4} md={4} sm={4}>
          <MegaLink href="/#/services/generative-ai" title="Generative AI" desc="LLM integration & fine-tuning" />
          <MegaLink href="/#/services/ai-governance" title="AI Governance" desc="Compliance & ethics frameworks" />
        </Column>
      </Grid>
    ),

    'IT Platforms': (
      <Grid>
        <Column lg={4} md={4} sm={4}>
          <MegaLink href="/#/services/servicenow" title="ServiceNow" desc="ITSM & enterprise workflows" />
          <MegaLink href="/#/services/salesforce" title="Salesforce" desc="CRM implementation & customisation" />
        </Column>
        <Column lg={4} md={4} sm={4}>
          <MegaLink href="/#/services/microsoft-365" title="Microsoft 365" desc="Migration & governance" />
          <MegaLink href="/#/services/cybersecurity-platform" title="Cybersecurity" desc="SOC & threat detection" />
        </Column>
      </Grid>
    ),

    Consultancy: (
      <Grid>
        <Column lg={4} md={4} sm={4}>
          <MegaLink href="/#/services/it-assessment" title="IT Assessment" desc="Current-state analysis & gaps" />
          <MegaLink href="/#/services/technology-roadmap" title="Technology Roadmap" desc="3-year planning & prioritisation" />
        </Column>
        <Column lg={4} md={4} sm={4}>
          <MegaLink href="/#/services/digital-transformation" title="Digital Transformation" desc="Process modernisation" />
        </Column>
      </Grid>
    ),
  };

  return (
    <>
      <HeaderContainer
        render={({ isSideNavExpanded: expanded, onClickSideNavExpand }) => (
          <Header
            aria-label="Perception IT"
            className="cooling-airflow-header cds--header--dark"
          >
            <HeaderMenuButton
              aria-label={expanded ? 'Close menu' : 'Open menu'}
              onClick={onClickSideNavExpand}
              isActive={expanded}
              aria-expanded={expanded}
            />
            <HeaderName href="/#/" prefix="">
              Perception IT
            </HeaderName>
            <HeaderNavigation aria-label="Main navigation" ref={navRef as React.RefObject<HTMLElement>}>
              {menuTrigger('Solutions', true)}
              {menuTrigger('Consultancy', true)}
              {menuTrigger('Cloud', true)}
              {menuTrigger('Infrastructure', true)}
              {menuTrigger('Data and Analytics', true)}
              {menuTrigger('AI', true)}
              {menuTrigger('IT Platforms', true)}
              {menuTrigger('Projects', false)}
              {menuTrigger('About', false)}
            </HeaderNavigation>
            <HeaderGlobalBar>
              <HeaderGlobalAction aria-label="Search">
                <Search size={20} style={{ fill: 'var(--cds-icon-inverse)' }} />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
            <SideNav
              aria-label="Side navigation"
              expanded={expanded}
              isPersistent={false}
              onOverlayClick={onClickSideNavExpand}
            >
              <SideNavItems>
                <SNavItem href="/#/">Home</SNavItem>
                <SideNavMenu title="Services">
                  <SNavItem href="/#/services/cloud-strategy">Cloud Strategy</SNavItem>
                  <SNavItem href="/#/infrastructure/data-centre-services/cooling-airflow">Cooling & Airflow</SNavItem>
                  <SNavItem href="/#/services/server-continuity">Server Continuity</SNavItem>
                  <SNavItem href="/#/services/hardware-support">Hardware Support</SNavItem>
                  <SNavItem href="/#/services/sla-support">24×7 SLA Support</SNavItem>
                  <SNavItem href="/#/services/cross-domain-automation">Cross-Domain Automation</SNavItem>
                  <SNavItem href="/#/services/network-monitoring">Network Monitoring</SNavItem>
                </SideNavMenu>
                <SideNavMenu title="Data Centre">
                  <SNavItem href="/#/infrastructure/data-centre-services/cooling-airflow">Cooling & Airflow</SNavItem>
                  <SNavItem href="/#/services/power-ups">Power & UPS</SNavItem>
                  <SNavItem href="/#/services/rack-cabinets">Rack & Cabinets</SNavItem>
                  <SNavItem href="/#/services/environmental-monitoring">Environmental Monitoring</SNavItem>
                  <SNavItem href="/#/services/fire-suppression">Fire Suppression</SNavItem>
                  <SNavItem href="/#/services/design-build">Design & Build</SNavItem>
                  <SNavItem href="/#/services/migration-relocation">Migration & Relocation</SNavItem>
                  <SNavItem href="/#/services/maintenance-support">Maintenance & Support</SNavItem>
                </SideNavMenu>
                <SNavItem href="/#/about">About</SNavItem>
                <SNavItem href="/#/projects">Projects</SNavItem>
                <SNavItem href="/#/contact">Contact</SNavItem>
              </SideNavItems>
            </SideNav>
          </Header>
        )}
      />

      {/* Mega Menu Backdrop + Panel — rendered via portal */}
      {activeMenu && megaMenuContent[activeMenu] && createPortal(
        <>
          {/* Backdrop */}
          <div
            onClick={() => setActiveMenu(null)}
            style={{
              position: 'fixed',
              top: '3rem',
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9998,
              background: 'var(--cds-overlay)',
              backdropFilter: 'blur(2px)',
              WebkitBackdropFilter: 'blur(2px)',
            }}
          />
          {/* Panel */}
          <div
            ref={menuRef}
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
            style={{
              position: 'fixed',
              top: '3rem',
              left: 0,
              right: 0,
              zIndex: 9999,
              background: 'var(--cds-background)',
              borderBottom: '1px solid var(--cds-border-subtle)',
              boxShadow: 'var(--cds-shadow)',
              maxHeight: 'calc(100vh - 3rem)',
              overflowY: 'auto',
            }}
          >
            <div style={{ maxWidth: '99rem', margin: '0 auto', padding: '2rem 1.5rem' }}>
              {megaMenuContent[activeMenu]}
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  );
};

/* ==============================================================================
   SECTION COMPONENTS
   ============================================================================== */

const HeroSection = ({ scrollToSection }: { scrollToSection: (id: string) => void }) => (
  <section
    id="overview"
    style={{
      position: 'relative',
      paddingTop: '10rem',
      paddingBottom: '5rem',
      background: 'var(--cds-background-inverse)',
      overflow: 'hidden',
    }}
  >
    {/* WebGL Background Effects */}
    <HeroCubeAnimation />
    <HeroGradientPlanes />

    {/* Dark gradient overlay for text readability */}
    <div className={styles['hero-overlay']} />

    <Grid style={{ position: 'relative', zIndex: 10 }}>
      <Column lg={12} md={8} sm={4}>
        {/* Breadcrumb */}
        <Breadcrumb noTrailingSlash className={styles['hero-breadcrumb']} style={{ marginBottom: 'var(--cds-spacing-07)' }}>
          <BreadcrumbItem href="/#/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/#/services">Services</BreadcrumbItem>
          <BreadcrumbItem href="/#/services/datacenter2">Data Centre Services</BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>Cooling & Airflow</BreadcrumbItem>
        </Breadcrumb>

        <h1
          className="cds--fluid-heading-06"
          style={{
            color: 'var(--cds-text-inverse)',
            marginBottom: '2rem',
            maxWidth: '48rem',
          }}
        >
          Precision Cooling & Thermal Continuity for Data Centres
        </h1>
        <p
          className="cds--body-compact-02"
          style={{
            color: 'var(--cds-text-inverse)',
            marginBottom: '2rem',
            maxWidth: '36rem',
            fontWeight: 600,
          }}
        >
          One partner, one end-to-end uptime SLA; We handle everything:
          <br />
          Thermal assessment, hardware supply, installation, and 24/7 monitoring.
        </p>
        <p
          className="cds--body-compact-02"
          style={{
            color: 'var(--cds-text-inverse-secondary)',
            marginBottom: '2.5rem',
            maxWidth: '36rem',
          }}
        >
          Engineered for Pakistan&apos;s climate reality:
          <br />
          45°C summers, monsoon humidity spikes, dust infiltration, and unstable grid power.
        </p>
        <ButtonSet className={styles['hero-btn-set']}>
          <Button
            kind="primary"
            renderIcon={ArrowRight}
            onClick={() => scrollToSection('cta')}
          >
            Request Thermal Health Check
          </Button>
          <Button
            kind="ghost"
            renderIcon={ArrowRight}
            onClick={() => scrollToSection('hardware')}
            style={{ color: '#ffffff' }}
          >
            Explore Hardware Options
          </Button>
        </ButtonSet>
      </Column>
    </Grid>
  </section>
);


const TrustBarSection = () => (
  <section style={{ padding: '3rem 0', background: 'var(--cds-layer)', borderTop: '1px solid var(--cds-border-subtle)', borderBottom: '1px solid var(--cds-border-subtle)' }}>
    <Grid>
      <Column lg={16} md={8} sm={4}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <p className="cds--label-01" style={{ color: 'var(--cds-text-helper)', textTransform: 'uppercase', letterSpacing: '0.32px', marginBottom: '0.5rem' }}>
              Trusted Partners
            </p>
            <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-primary)', fontWeight: 600 }}>
              Tier-1 manufacturer relationships. Single-point accountability.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
            {manufacturerPartners.map((partner) => (
              <img
                key={partner.name}
                src={partner.logo}
                alt={partner.name}
                className={styles['partner-logo']}
                style={{ width: partner.width, height: 'auto' }}
              />
            ))}
          </div>
        </div>
      </Column>
    </Grid>
  </section>
);
const PillarNavSection = ({ scrollToSection }: { scrollToSection: (id: string) => void }) => {
  const pillars = [
    {
      num: '01',
      title: 'Assessment',
      hook: '90-minute thermal audit with IR mapping and risk scorecard.',
      sectionId: 'assessment',
      icon: Meter,
    },
    {
      num: '02',
      title: 'Procurement',
      hook: 'Tier-1 hardware validated for 45°C ambient, monsoon, and dust.',
      sectionId: 'hardware',
      icon: TemperatureHot,
    },
    {
      num: '03',
      title: 'Deployment',
      hook: '4-phase install, validate, commission, and monitor.',
      sectionId: 'installation',
      icon: Settings,
    },
    {
      num: '04',
      title: 'Managed Services',
      hook: '24/7 NOC monitoring with SLA-backed response.',
      sectionId: 'managed',
      icon: Dashboard,
    },
  ];

  return (
    <section id="services" style={{ padding: 'var(--cds-spacing-06) 0', background: 'var(--cds-background)', borderBottom: '1px solid var(--cds-border-subtle)' }}>
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
            <p className="cds--label-01" style={{ color: 'var(--cds-interactive)', textTransform: 'uppercase', letterSpacing: '0.32px', marginBottom: '0.5rem' }}>
              Services
            </p>
            <h2 className="cds--fluid-heading-05" style={{ color: 'var(--cds-text-primary)' }}>
              Four Services. Zero Failure Modes.
            </h2>
          </div>
          <Grid>
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <Column lg={4} md={4} sm={4} key={p.num} style={{ marginBottom: '1rem' }}>
                  <ClickableTile
                    onClick={() => scrollToSection(p.sectionId)}
                    className={styles['pillar-tile']}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <div style={{
                        width: 40,
                        height: 40,
                        background: 'var(--cds-interactive)',
                        color: 'var(--cds-text-inverse)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        flexShrink: 0,
                      }}>
                        {p.num}
                      </div>
                      <Icon size={24} style={{ color: 'var(--cds-interactive)' }} />
                    </div>
                    <h3 className="cds--heading-02" style={{ color: 'var(--cds-text-primary)', marginBottom: '0.5rem' }}>
                      {p.title}
                    </h3>
                    <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: '1rem' }}>
                      {p.hook}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--cds-interactive)' }}>
                      <span className="cds--label-01" style={{ textTransform: 'uppercase', letterSpacing: '0.32px' }}>Learn more</span>
                      <ChevronRight size={16} />
                    </div>
                  </ClickableTile>
                </Column>
              );
            })}
          </Grid>
        </Column>
      </Grid>
    </section>
  );
};

const AssessmentInsightsGrid = () => {
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [healthHover, setHealthHover] = useState(false);
  const [engineeringHover, setEngineeringHover] = useState(false);
  return (
    <section id="assessment" style={{ padding: 'var(--cds-spacing-10) 0' }}>
      <Grid>
        <Column lg={16} md={8} sm={4} style={{ marginBottom: 'var(--cds-spacing-07)' }}>
          <p className="cds--label-01" style={{ color: 'var(--cds-text-helper)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)' }}>
            01 Assessment Options
          </p>
          <h2 className="cds--fluid-heading-05" style={{ color: 'var(--cds-text-primary)' }}>
            Choose Your Assessment Path
          </h2>
        </Column>
      </Grid>

      <Grid>
        <Column lg={16} md={8} sm={4}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            <Tile style={{ gridColumn: 'span 2', gridRow: 'span 2', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', maxHeight: 400 }}>
              <img src="/3D images/Cooling and Airflow/Cooling - Assesment.png" alt="Pakistani field engineer in Perception-IT polo, holding thermal camera and tablet with heat-map" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
              <div style={{ position: 'absolute', bottom: 'var(--cds-spacing-06)', right: 'var(--cds-spacing-06)', maxWidth: 480, background: 'rgba(22, 22, 22, 0.88)', padding: 'var(--cds-spacing-06)', borderLeft: '3px solid var(--cds-interactive)' }}>
                <p className="cds--label-01" style={{ color: 'var(--cds-text-inverse)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)' }}>01 Assessment</p>
                <h3 className="cds--heading-02" style={{ color: 'var(--cds-text-inverse)', marginBottom: 'var(--cds-spacing-03)', lineHeight: 1.25 }}>Two Assessment Options</h3>
                <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-inverse)', lineHeight: 1.5, opacity: 0.85, marginBottom: 'var(--cds-spacing-02)' }}>Rapid health check for routine confidence.</p>
                <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-inverse)', lineHeight: 1.5, opacity: 0.85 }}>Engineering-grade analysis before major spend.</p>
              </div>
            </Tile>

            <Tile
              style={{
                gridColumn: '3 / span 1',
                gridRow: 'span 2',
                padding: 'var(--cds-spacing-06)',
                display: 'flex',
                flexDirection: 'column',
                background: healthHover ? 'var(--cds-interactive)' : 'transparent',
                transition: 'background 0.25s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setHealthHover(true)}
              onMouseLeave={() => setHealthHover(false)}
            >
              <Search size={32} style={{ color: healthHover ? '#ffffff' : 'var(--cds-interactive)', marginBottom: 'var(--cds-spacing-05)', transition: 'color 0.25s ease' }} />
              <div style={{ marginTop: 'auto' }}>
                <p className="cds--label-01" style={{ color: healthHover ? 'rgba(255,255,255,0.8)' : 'var(--cds-text-secondary)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)', transition: 'color 0.25s ease' }}>Entry</p>
                <h3 className="cds--heading-02" style={{ color: healthHover ? '#ffffff' : 'var(--cds-text-primary)', marginBottom: 'var(--cds-spacing-03)', transition: 'color 0.25s ease' }}>Rapid Thermal Health Check</h3>
                <p className="cds--body-compact-01" style={{ color: healthHover ? 'rgba(255,255,255,0.8)' : 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-05)', lineHeight: 1.5, transition: 'color 0.25s ease' }}>90-minute on-site audit with IR mapping and risk scorecard.</p>
                <a href="#cta" className="cds--body-compact-01" style={{ color: healthHover ? '#ffffff' : 'var(--cds-interactive)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 'var(--cds-spacing-03)', transition: 'color 0.25s ease' }}>Book Thermal Health Check <ArrowRight size={16} style={{ color: healthHover ? '#ffffff' : 'var(--cds-interactive)', transition: 'color 0.25s ease' }} /></a>
              </div>
            </Tile>

            <Tile
              style={{
                gridColumn: '4 / span 1',
                gridRow: 'span 2',
                padding: 'var(--cds-spacing-06)',
                display: 'flex',
                flexDirection: 'column',
                background: engineeringHover ? 'var(--cds-interactive)' : 'transparent',
                transition: 'background 0.25s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setEngineeringHover(true)}
              onMouseLeave={() => setEngineeringHover(false)}
            >
              <ChartLine size={32} style={{ color: engineeringHover ? '#ffffff' : 'var(--cds-interactive)', marginBottom: 'var(--cds-spacing-05)', transition: 'color 0.25s ease' }} />
              <div style={{ marginTop: 'auto' }}>
                <p className="cds--label-01" style={{ color: engineeringHover ? 'rgba(255,255,255,0.8)' : 'var(--cds-text-secondary)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)', transition: 'color 0.25s ease' }}>Engineering</p>
                <h3 className="cds--heading-02" style={{ color: engineeringHover ? '#ffffff' : 'var(--cds-text-primary)', marginBottom: 'var(--cds-spacing-03)', transition: 'color 0.25s ease' }}>Precision Thermal Engineering</h3>
                <p className="cds--body-compact-01" style={{ color: engineeringHover ? 'rgba(255,255,255,0.8)' : 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-05)', lineHeight: 1.5, transition: 'color 0.25s ease' }}>CFD modelling, capacity calculations, and engineering sign-off.</p>
                <a href="mailto:contact@perception-it.com?subject=Precision%20Thermal%20Engineering%20Proposal%20Request" className="cds--body-compact-01" style={{ color: engineeringHover ? '#ffffff' : 'var(--cds-interactive)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 'var(--cds-spacing-03)', transition: 'color 0.25s ease' }}>Request CFD Proposal <ArrowRight size={16} style={{ color: engineeringHover ? '#ffffff' : 'var(--cds-interactive)', transition: 'color 0.25s ease' }} /></a>
              </div>
            </Tile>
          </div>
        </Column>
      </Grid>

      <Grid style={{ marginTop: 'var(--cds-spacing-07)' }}>
        <Column lg={16} md={8} sm={4}>
          <Tile style={{ padding: 'var(--cds-spacing-07)', background: 'linear-gradient(135deg, #0a1628 0%, #1a2b4a 100%)', borderLeft: '4px solid var(--cds-interactive)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--cds-spacing-06)' }}>
              <div style={{ flex: '1 1 400px' }}>
                <h3 className="cds--heading-02" style={{ color: '#ffffff', marginBottom: 'var(--cds-spacing-03)' }}>Need help choosing?</h3>
                <p className="cds--body-compact-01" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                  {isComparisonOpen
                    ? 'Review the detailed comparison below, or speak directly with our thermal engineering team.'
                    : 'See the detailed comparison or have our engineers recommend a path based on your density and compliance.'}
                </p>
              </div>
              <div style={{ display: 'flex', gap: 'var(--cds-spacing-03)', flexWrap: 'wrap', alignItems: 'center' }}>
                <Button
                  kind="ghost"
                  onClick={() => setIsComparisonOpen(!isComparisonOpen)}
                  renderIcon={isComparisonOpen ? ChevronUp : ChevronDown}
                  style={{ color: '#ffffff', minWidth: '11rem' }}
                >
                  {isComparisonOpen ? 'Close' : 'View Comparison'}
                </Button>
                <Button
                  kind="primary"
                  href="mailto:contact@perception-it.com?subject=Assessment%20Consultation%20Request"
                  style={{ minWidth: '11rem' }}
                >
                  Consult an Engineer
                </Button>
              </div>
            </div>
          </Tile>
        </Column>
      </Grid>

      {isComparisonOpen && (
        <Grid style={{ marginTop: 'var(--cds-spacing-05)' }}>
          <Column lg={16} md={8} sm={4}>
            <Grid style={{ padding: 'var(--cds-spacing-03) 0 var(--cds-spacing-05)' }}>
              <Column lg={8} md={4} sm={4} style={{ marginBottom: 'var(--cds-spacing-05)' }}>
                <Tile style={{ height: '100%', padding: 'var(--cds-spacing-05)', background: 'var(--cds-layer-01)' }}>
                  <p className="cds--label-01" style={{ color: 'var(--cds-support-success)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-04)' }}>Rapid — Thermal Health Check</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[{ label: 'Best for', value: 'Routine maintenance, edge sites, budget planning' }, { label: 'Deliverable', value: 'Photo log + "Fix / Watch / OK" list' }, { label: 'Precision', value: 'Qualitative assessment' }, { label: 'Method', value: 'Visual inspection + structured checklist' }, { label: 'Tools', value: 'IR camera, airflow meter, checklist' }, { label: 'Time on-site', value: '2–4 hours' }, { label: 'Turnaround', value: 'Report within 48 hours' }].map((item) => (
                    <li key={item.label} className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-04)', display: 'flex', gap: 'var(--cds-spacing-03)', lineHeight: 1.5 }}>
                      <CheckmarkFilled size={16} style={{ color: 'var(--cds-support-success)', flexShrink: 0, marginTop: 'var(--cds-spacing-01)' }} />
                      <span><strong style={{ color: 'var(--cds-text-primary)', fontWeight: 600 }}>{item.label}:</strong> {item.value}</span>
                    </li>
                    ))}
                  </ul>
                </Tile>
              </Column>
              <Column lg={8} md={4} sm={4} style={{ marginBottom: 'var(--cds-spacing-05)' }}>
                <Tile style={{ height: '100%', padding: 'var(--cds-spacing-05)', background: 'var(--cds-layer-01)' }}>
                  <p className="cds--label-01" style={{ color: 'var(--cds-interactive)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-04)' }}>Engineering-Grade — Precision Thermal Engineering</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[{ label: 'Best for', value: 'New builds, high-density, compliance, root cause' }, { label: 'Deliverable', value: '3D heat maps + capacity calculations' }, { label: 'Precision', value: 'Quantitative analysis' }, { label: 'Method', value: 'CFD modeling + engineering analysis' }, { label: 'Tools', value: '6SigmaDC/ANSYS, thermal sensors, load data' }, { label: 'Time on-site', value: '1–2 days' }, { label: 'Turnaround', value: 'Analysis within 1–2 weeks' }].map((item) => (
                    <li key={item.label} className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-04)', display: 'flex', gap: 'var(--cds-spacing-03)', lineHeight: 1.5 }}>
                      <CheckmarkFilled size={16} style={{ color: 'var(--cds-interactive)', flexShrink: 0, marginTop: 'var(--cds-spacing-01)' }} />
                      <span><strong style={{ color: 'var(--cds-text-primary)', fontWeight: 600 }}>{item.label}:</strong> {item.value}</span>
                    </li>
                    ))}
                  </ul>
                </Tile>
              </Column>
              <Column lg={16} md={8} sm={4} style={{ marginBottom: 'var(--cds-spacing-03)' }}>
                <Tile style={{ padding: 'var(--cds-spacing-05)', background: 'var(--cds-layer-01)', borderLeft: '4px solid var(--cds-support-success)', display: 'flex', gap: 'var(--cds-spacing-05)', alignItems: 'flex-start' }}>
                  <Certificate size={24} style={{ color: 'var(--cds-support-success)', flexShrink: 0, marginTop: 'var(--cds-spacing-01)' }} />
                  <div>
                    <p className="cds--label-01" style={{ color: 'var(--cds-support-success)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-02)' }}>Upgrade Path</p>
                    <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.6 }}>If your Health Check reveals complexity, <strong style={{ color: 'var(--cds-text-primary)' }}>20% of your report fee</strong> is credited toward Precision Thermal Engineering when upgraded within 60 days. Travel and visitation charges are not included in the credit.</p>
                  </div>
                </Tile>
              </Column>
              <Column lg={16} md={8} sm={4} style={{ marginBottom: 'var(--cds-spacing-03)' }}>
                <Tile style={{ padding: 'var(--cds-spacing-05)', background: 'var(--cds-layer-01)', borderLeft: '4px solid var(--cds-text-placeholder)', display: 'flex', gap: 'var(--cds-spacing-05)', alignItems: 'flex-start' }}>
                  <Warning size={24} style={{ color: 'var(--cds-text-placeholder)', flexShrink: 0, marginTop: 'var(--cds-spacing-01)' }} />
                  <div>
                    <p className="cds--label-01" style={{ color: 'var(--cds-text-placeholder)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-02)' }}>What's Not Included</p>
                    <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.6 }}>Both Assessments cover audit, scoring, and recommendation only. Excludes implementation, hardware supply, ongoing monitoring, and travel or visitation charges.</p>
                  </div>
                </Tile>
              </Column>
            </Grid>
          </Column>

          <Column lg={16} md={8} sm={4}>
            <Tile style={{ padding: 'var(--cds-spacing-06)', background: 'linear-gradient(135deg, #0a1628 0%, #1a2b4a 100%)', borderLeft: '4px solid var(--cds-interactive)' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--cds-spacing-06)' }}>
                <Button kind="ghost" onClick={() => setIsComparisonOpen(false)} style={{ color: '#ffffff' }}>Close comparison</Button>
                <Button kind="primary" href="mailto:contact@perception-it.com?subject=Assessment%20Consultation%20Request">Still not sure? Speak to an engineer</Button>
              </div>
            </Tile>
          </Column>
        </Grid>
      )}

    </section>
  );
};

const ProcurementInsightsGrid = () => {
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [roomCoolingHover, setRoomCoolingHover] = useState(false);
  const [precisionCoolingHover, setPrecisionCoolingHover] = useState(false);
  const [facilityCoolingHover, setFacilityCoolingHover] = useState(false);
  const [isDatasheetModalOpen, setIsDatasheetModalOpen] = useState(false);
  const [datasheetForm, setDatasheetForm] = useState({ name: '', email: '', company: '', phone: '' });
  return (
    <section id="hardware" style={{ padding: 'var(--cds-spacing-10) 0' }}>
      <Grid>
        <Column lg={16} md={8} sm={4} style={{ marginBottom: 'var(--cds-spacing-07)' }}>
          <p className="cds--label-01" style={{ color: 'var(--cds-text-helper)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)' }}>
            02 Procurement
          </p>
          <h2 className="cds--fluid-heading-05" style={{ color: 'var(--cds-text-primary)' }}>
            Cooling Hardware
          </h2>
        </Column>
      </Grid>

      <Grid>
        <Column lg={16} md={8} sm={4}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: '1fr 1fr', gap: 0 }}>
            <Tile style={{ gridColumn: 'span 2', gridRow: 'span 2', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', maxHeight: 400 }}>
              <img src="/3D images/Cooling and Airflow/Cooling - Procurement.png" alt="Cooling hardware procurement" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
              <div style={{ position: 'absolute', bottom: 'var(--cds-spacing-06)', right: 'var(--cds-spacing-06)', maxWidth: 480, background: 'rgba(22, 22, 22, 0.88)', padding: 'var(--cds-spacing-06)', borderLeft: '3px solid var(--cds-interactive)' }}>
                <p className="cds--label-01" style={{ color: 'var(--cds-text-inverse)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)' }}>02 Procurement</p>
                <h3 className="cds--heading-02" style={{ color: 'var(--cds-text-inverse)', marginBottom: 'var(--cds-spacing-03)', lineHeight: 1.25 }}>Right-sized hardware, certified for Pakistan</h3>
                <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-inverse)', lineHeight: 1.5, opacity: 0.85 }}>We source cooling equipment from tier-1 manufacturers and validate every unit for 45°C ambient, monsoon humidity, and dust infiltration before it ships.</p>
              </div>
            </Tile>

            <Tile
              style={{
                gridColumn: '3 / span 1',
                gridRow: '1 / span 1',
                padding: 'var(--cds-spacing-06)',
                display: 'flex',
                flexDirection: 'column',
                background: roomCoolingHover ? 'var(--cds-interactive)' : 'transparent',
                transition: 'background 0.25s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setRoomCoolingHover(true)}
              onMouseLeave={() => setRoomCoolingHover(false)}
            >
              <Temperature size={32} style={{ color: roomCoolingHover ? '#ffffff' : 'var(--cds-interactive)', marginBottom: 'var(--cds-spacing-05)', transition: 'color 0.25s ease' }} />
              <div style={{ marginTop: 'auto' }}>
                <p className="cds--label-01" style={{ color: roomCoolingHover ? 'rgba(255,255,255,0.8)' : 'var(--cds-text-secondary)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)', transition: 'color 0.25s ease' }}>Room Cooling</p>
                <h3 className="cds--heading-02" style={{ color: roomCoolingHover ? '#ffffff' : 'var(--cds-text-primary)', marginBottom: 'var(--cds-spacing-03)', transition: 'color 0.25s ease' }}>Server Room AC Units</h3>
                {!roomCoolingHover ? (
                  <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-05)', lineHeight: 1.5 }}>Edge sites & small server rooms up to 50kW.</p>
                ) : (
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {['Wall-mounted, ceiling-suspended, and portable units', 'Designed for edge sites and small server rooms up to 50kW heat load', 'Split-system and ducted configurations available'].map((item) => (
                      <li key={item} className="cds--body-compact-01" style={{ color: '#ffffff', marginBottom: 'var(--cds-spacing-03)', display: 'flex', gap: 'var(--cds-spacing-03)', lineHeight: 1.5 }}>
                        <CheckmarkFilled size={16} style={{ color: '#ffffff', flexShrink: 0, marginTop: 'var(--cds-spacing-01)' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Tile>

            <Tile
              style={{
                gridColumn: '4 / span 1',
                gridRow: '1 / span 1',
                padding: 'var(--cds-spacing-06)',
                display: 'flex',
                flexDirection: 'column',
                background: precisionCoolingHover ? 'var(--cds-interactive)' : 'transparent',
                transition: 'background 0.25s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setPrecisionCoolingHover(true)}
              onMouseLeave={() => setPrecisionCoolingHover(false)}
            >
              <Windy size={32} style={{ color: precisionCoolingHover ? '#ffffff' : 'var(--cds-interactive)', marginBottom: 'var(--cds-spacing-05)', transition: 'color 0.25s ease' }} />
              <div style={{ marginTop: 'auto' }}>
                <p className="cds--label-01" style={{ color: precisionCoolingHover ? 'rgba(255,255,255,0.8)' : 'var(--cds-text-secondary)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)', transition: 'color 0.25s ease' }}>Precision Cooling</p>
                <h3 className="cds--heading-02" style={{ color: precisionCoolingHover ? '#ffffff' : 'var(--cds-text-primary)', marginBottom: 'var(--cds-spacing-03)', transition: 'color 0.25s ease' }}>Precision Cooling (CRAC/CRAH)</h3>
                {!precisionCoolingHover ? (
                  <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-05)', lineHeight: 1.5 }}>Data centres requiring ±1°C control.</p>
                ) : (
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {['In-row and perimeter CRAC/CRAH units with redundancy options', '±1°C temperature control for mission-critical environments', 'N+1 and 2N redundancy configurations available'].map((item) => (
                      <li key={item} className="cds--body-compact-01" style={{ color: '#ffffff', marginBottom: 'var(--cds-spacing-03)', display: 'flex', gap: 'var(--cds-spacing-03)', lineHeight: 1.5 }}>
                        <CheckmarkFilled size={16} style={{ color: '#ffffff', flexShrink: 0, marginTop: 'var(--cds-spacing-01)' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Tile>

            <Tile
              style={{
                padding: 'var(--cds-spacing-06)',
                display: 'flex',
                flexDirection: 'column',
                background: facilityCoolingHover ? 'var(--cds-interactive)' : 'transparent',
                transition: 'background 0.25s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setFacilityCoolingHover(true)}
              onMouseLeave={() => setFacilityCoolingHover(false)}
            >
              <DataCenter size={32} style={{ color: facilityCoolingHover ? '#ffffff' : 'var(--cds-interactive)', marginBottom: 'var(--cds-spacing-05)', transition: 'color 0.25s ease' }} />
              <div style={{ marginTop: 'auto' }}>
                <p className="cds--label-01" style={{ color: facilityCoolingHover ? 'rgba(255,255,255,0.8)' : 'var(--cds-text-secondary)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)', transition: 'color 0.25s ease' }}>Facility Cooling</p>
                <h3 className="cds--heading-02" style={{ color: facilityCoolingHover ? '#ffffff' : 'var(--cds-text-primary)', marginBottom: 'var(--cds-spacing-03)', transition: 'color 0.25s ease' }}>Large-Scale Facility Cooling</h3>
                {!facilityCoolingHover ? (
                  <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-05)', lineHeight: 1.5 }}>Chillers, cooling towers, free cooling.</p>
                ) : (
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {['Centralised chiller plants and cooling towers', 'Free-cooling and adiabatic cooling for energy efficiency', 'Custom designs for facilities >500kW cooling load'].map((item) => (
                      <li key={item} className="cds--body-compact-01" style={{ color: '#ffffff', marginBottom: 'var(--cds-spacing-03)', display: 'flex', gap: 'var(--cds-spacing-03)', lineHeight: 1.5 }}>
                        <CheckmarkFilled size={16} style={{ color: '#ffffff', flexShrink: 0, marginTop: 'var(--cds-spacing-01)' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Tile>
          </div>
        </Column>
      </Grid>

      {/* Dark CTA band — toggles comparison + consultation */}
      <Grid style={{ marginTop: 'var(--cds-spacing-07)' }}>
        <Column lg={16} md={8} sm={4}>
          <Tile style={{ padding: 'var(--cds-spacing-07)', background: 'linear-gradient(135deg, #0a1628 0%, #1a2b4a 100%)', borderLeft: '4px solid var(--cds-interactive)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--cds-spacing-06)' }}>
              <div style={{ flex: '1 1 400px' }}>
                <h3 className="cds--heading-02" style={{ color: '#ffffff', marginBottom: 'var(--cds-spacing-03)' }}>Need help choosing?</h3>
                <p className="cds--body-compact-01" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                  {isComparisonOpen
                    ? 'Review the detailed comparison below, or request a consultation with our procurement engineer.'
                    : 'We procure from tier-1 manufacturers.'}
                </p>
              </div>
              <div style={{ display: 'flex', gap: 'var(--cds-spacing-03)', flexWrap: 'wrap', alignItems: 'center' }}>
                <Button
                  kind="ghost"
                  onClick={() => setIsComparisonOpen(!isComparisonOpen)}
                  renderIcon={isComparisonOpen ? ChevronUp : ChevronDown}
                  style={{ color: '#ffffff', minWidth: '11rem' }}
                >
                  {isComparisonOpen ? 'Close' : 'View Comparison'}
                </Button>
                <Button
                  kind="primary"
                  href="mailto:contact@perception-it.com?subject=Hardware%20Consultation%20Request"
                >
                  Still not sure? Speak to an engineer
                </Button>
              </div>
            </div>
          </Tile>
        </Column>
      </Grid>

      {/* Comparison tiles — conditionally rendered */}
      {isComparisonOpen && (
        <Grid style={{ marginTop: 'var(--cds-spacing-05)' }}>
          <Column lg={16} md={8} sm={4}>
            <Grid style={{ padding: 'var(--cds-spacing-03) 0 var(--cds-spacing-05)' }}>
              <Column lg={8} md={4} sm={4} style={{ marginBottom: 'var(--cds-spacing-05)' }}>
                <Tile style={{ height: '100%', padding: 'var(--cds-spacing-05)', background: 'var(--cds-layer-01)' }}>
                  <p className="cds--label-01" style={{ color: 'var(--cds-support-success)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-04)' }}>Room Cooling — Server Room AC</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[{ label: 'Best for', value: 'Edge sites, small server rooms, offices' }, { label: 'Capacity', value: 'Up to 50kW per unit' }, { label: 'Precision', value: '±2–3°C' }, { label: 'Install', value: 'Wall or floor mount' }, { label: 'Maintenance', value: 'Filter clean, refrigerant check' }, { label: 'Lead time', value: '2–4 weeks' }].map((item) => (
                    <li key={item.label} className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-04)', display: 'flex', gap: 'var(--cds-spacing-03)', lineHeight: 1.5 }}>
                      <CheckmarkFilled size={16} style={{ color: 'var(--cds-support-success)', flexShrink: 0, marginTop: 'var(--cds-spacing-01)' }} />
                      <span><strong style={{ color: 'var(--cds-text-primary)', fontWeight: 600 }}>{item.label}:</strong> {item.value}</span>
                    </li>
                    ))}
                  </ul>
                </Tile>
              </Column>
              <Column lg={8} md={4} sm={4} style={{ marginBottom: 'var(--cds-spacing-05)' }}>
                <Tile style={{ height: '100%', padding: 'var(--cds-spacing-05)', background: 'var(--cds-layer-01)' }}>
                  <p className="cds--label-01" style={{ color: 'var(--cds-interactive)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-04)' }}>Precision Cooling — CRAC/CRAH</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[{ label: 'Best for', value: 'Data centres, high-density racks' }, { label: 'Capacity', value: '50kW – 500kW+ per unit' }, { label: 'Precision', value: '±1°C, ±5% RH' }, { label: 'Install', value: 'Raised floor, ducted supply' }, { label: 'Maintenance', value: 'Quarterly service, sensor cal' }, { label: 'Lead time', value: '4–8 weeks' }].map((item) => (
                    <li key={item.label} className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-04)', display: 'flex', gap: 'var(--cds-spacing-03)', lineHeight: 1.5 }}>
                      <CheckmarkFilled size={16} style={{ color: 'var(--cds-interactive)', flexShrink: 0, marginTop: 'var(--cds-spacing-01)' }} />
                      <span><strong style={{ color: 'var(--cds-text-primary)', fontWeight: 600 }}>{item.label}:</strong> {item.value}</span>
                    </li>
                    ))}
                  </ul>
                </Tile>
              </Column>
              <Column lg={16} md={8} sm={4} style={{ marginBottom: 'var(--cds-spacing-03)' }}>
                <Tile style={{ padding: 'var(--cds-spacing-05)', background: 'var(--cds-layer-01)', borderLeft: '4px solid var(--cds-support-success)', display: 'flex', gap: 'var(--cds-spacing-05)', alignItems: 'flex-start' }}>
                  <Certificate size={24} style={{ color: 'var(--cds-support-success)', flexShrink: 0, marginTop: 'var(--cds-spacing-01)' }} />
                  <div>
                    <p className="cds--label-01" style={{ color: 'var(--cds-support-success)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-02)' }}>Capacity Planning</p>
                    <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.6 }}>All procurement includes a free site survey to confirm cooling load, airflow path, and electrical capacity before order placement.</p>
                  </div>
                </Tile>
              </Column>
              <Column lg={16} md={8} sm={4} style={{ marginBottom: 'var(--cds-spacing-03)' }}>
                <Tile style={{ padding: 'var(--cds-spacing-05)', background: 'var(--cds-layer-01)', borderLeft: '4px solid var(--cds-text-placeholder)', display: 'flex', gap: 'var(--cds-spacing-05)', alignItems: 'flex-start' }}>
                  <Warning size={24} style={{ color: 'var(--cds-text-placeholder)', flexShrink: 0, marginTop: 'var(--cds-spacing-01)' }} />
                  <div>
                    <p className="cds--label-01" style={{ color: 'var(--cds-text-placeholder)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-02)' }}>What's Not Included</p>
                    <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.6 }}>Procurement covers hardware supply and delivery only. Excludes installation, piping, ducting, commissioning, and ongoing maintenance unless specified in the order.</p>
                  </div>
                </Tile>
              </Column>
              <Column lg={16} md={8} sm={4}>
                <Tile style={{ padding: 'var(--cds-spacing-06)', background: 'linear-gradient(135deg, #0a1628 0%, #1a2b4a 100%)', borderLeft: '4px solid var(--cds-interactive)' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--cds-spacing-06)' }}>
                    <Button kind="ghost" onClick={() => setIsComparisonOpen(false)} style={{ color: '#ffffff' }}>Close comparison</Button>
                    <Button kind="primary" href="mailto:contact@perception-it.com?subject=Hardware%20Consultation%20Request">Still not sure? Speak to an engineer</Button>
                  </div>
                </Tile>
              </Column>
            </Grid>
          </Column>
        </Grid>
      )}

      <Grid style={{ marginTop: 'var(--cds-spacing-10)' }}>
        <Column lg={16} md={8} sm={4} style={{ marginBottom: 'var(--cds-spacing-06)' }}>
          <p className="cds--label-01" style={{ color: 'var(--cds-text-helper)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)' }}>Certified Supply Chain</p>
          <h2 className="cds--fluid-heading-05" style={{ color: 'var(--cds-text-primary)' }}>Direct Manufacturer Partnerships</h2>
          <p className="cds--body-01" style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.6, marginTop: 'var(--cds-spacing-03)' }}>We procure from tier-1 manufacturers. Every unit is factory-accepted and pre-validated for Pakistan's 45°C ambient, monsoon humidity, and dust infiltration before it ships.</p>
        </Column>

        <Column lg={16} md={8} sm={4}>
          <div className={styles['partner-grid']}>
            {[
              { name: 'Huawei', src: '/logos/partners/Partner-Huawei-Logo.svg' },
              { name: 'Lenovo', src: '/logos/partners/Partner-Lenovo-Logo.svg' },
              { name: 'Dell', src: '/logos/partners/Partner-Dell-logo.svg' },
              { name: 'HP', src: '/logos/partners/Partner-%20Hewlett-Packard-Logo.svg' },
            ].map((partner, i) => (
              <Tile key={partner.name} style={{ padding: 'var(--cds-spacing-05)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: i > 0 ? '1px solid var(--cds-border-subtle)' : 'none', background: 'var(--cds-layer)' }}>
                <img src={partner.src} alt={partner.name} className={styles['partner-logo']} loading="lazy" style={partner.name === 'Huawei' ? { maxWidth: 260, maxHeight: 80 } : undefined} />
              </Tile>
            ))}
          </div>
        </Column>

        <Column lg={16} md={8} sm={4} style={{ marginBottom: 'var(--cds-spacing-07)', marginTop: 'var(--cds-spacing-07)' }}>
          <Tile className={styles['featured-product']}>
            <div className={styles['featured-product__media']}>
              <span className={styles['featured-badge']}>Featured Hardware</span>
              <img src="/3D images/Cooling and Airflow/FusionCool.png" alt="FusionCol8000-E cooling unit" loading="lazy" />
            </div>
            <div className={styles['featured-product__body']}>
              <h3 className="cds--heading-02" style={{ color: 'var(--cds-text-primary)', fontWeight: 600, marginBottom: 'var(--cds-spacing-03)' }}>FusionCol8000-E</h3>
              <p className="cds--body-01" style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.6, marginBottom: 'var(--cds-spacing-05)' }}>
                Enterprise-grade precision cooling for high-density data centres. In-row and perimeter deployment, ±1°C control, N+1 redundancy ready.
              </p>
              <div style={{ display: 'flex', gap: 'var(--cds-spacing-06)', marginBottom: 'var(--cds-spacing-06)', padding: 'var(--cds-spacing-04) var(--cds-spacing-05)', background: 'var(--cds-layer-01)', borderRadius: 0, border: '1px solid var(--cds-border-subtle)' }}>
                <div>
                  <p className="cds--label-01" style={{ color: 'var(--cds-text-secondary)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-02)', letterSpacing: '0.32px' }}>Cooling Type</p>
                  <p className="cds--heading-03" style={{ color: 'var(--cds-text-primary)', marginBottom: 0 }}>CRAC/CRAH</p>
                </div>
                <div style={{ width: '1px', background: 'var(--cds-border-subtle)' }} />
                <div>
                  <p className="cds--label-01" style={{ color: 'var(--cds-text-secondary)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-02)', letterSpacing: '0.32px' }}>Capacity</p>
                  <p className="cds--heading-03" style={{ color: 'var(--cds-text-primary)', marginBottom: 0 }}>Up to 500kW</p>
                </div>
                <div style={{ width: '1px', background: 'var(--cds-border-subtle)' }} />
                <div>
                  <p className="cds--label-01" style={{ color: 'var(--cds-text-secondary)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-02)', letterSpacing: '0.32px' }}>Redundancy</p>
                  <p className="cds--heading-03" style={{ color: 'var(--cds-text-primary)', marginBottom: 0 }}>N+1 Ready</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--cds-spacing-03)', flexWrap: 'wrap' }}>
                <Button kind="primary" renderIcon={ArrowRight} href="mailto:contact@perception-it.com?subject=FusionCol8000-E%20Enquiry">Enquire Now</Button>
                <Button kind="tertiary" renderIcon={Download} onClick={() => setIsDatasheetModalOpen(true)} style={{ minWidth: '11rem' }}>Get Datasheet</Button>
              </div>
            </div>
          </Tile>
        </Column>

      </Grid>

      {/* Datasheet download modal */}
      <Modal
        open={isDatasheetModalOpen}
        onRequestClose={() => setIsDatasheetModalOpen(false)}
        onRequestSubmit={() => {
          const link = document.createElement('a');
          link.href = '/3D%20images/Cooling%20and%20Airflow%20Data%20sheet%20/FusionCol8000-E260%26400%2BDatasheet.pdf';
          link.download = 'FusionCol8000-E_Datasheet.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setIsDatasheetModalOpen(false);
          setDatasheetForm({ name: '', email: '', company: '', phone: '' });
        }}
        modalHeading="Download Datasheet"
        primaryButtonText="Download"
        secondaryButtonText="Cancel"
        size="sm"
      >
        <Form onSubmit={(e) => e.preventDefault()}>
          <FormGroup legendText="Please share your details to receive the datasheet.">
            <TextInput
              id="ds-name"
              labelText="Full name"
              value={datasheetForm.name}
              onChange={(e) => setDatasheetForm({ ...datasheetForm, name: e.target.value })}
              style={{ marginBottom: 'var(--cds-spacing-04)' }}
              required
            />
            <TextInput
              id="ds-email"
              labelText="Business email"
              type="email"
              value={datasheetForm.email}
              onChange={(e) => setDatasheetForm({ ...datasheetForm, email: e.target.value })}
              style={{ marginBottom: 'var(--cds-spacing-04)' }}
              required
            />
            <TextInput
              id="ds-company"
              labelText="Company"
              value={datasheetForm.company}
              onChange={(e) => setDatasheetForm({ ...datasheetForm, company: e.target.value })}
              style={{ marginBottom: 'var(--cds-spacing-04)' }}
              required
            />
            <TextInput
              id="ds-phone"
              labelText="Phone (optional)"
              type="tel"
              value={datasheetForm.phone}
              onChange={(e) => setDatasheetForm({ ...datasheetForm, phone: e.target.value })}
            />
          </FormGroup>
        </Form>
      </Modal>
    </section>
  );
};

const DeploymentSection = () => {
  const [mechHover, setMechHover] = useState(false);
  const [thermalHover, setThermalHover] = useState(false);
  const [commHover, setCommHover] = useState(false);
  const [isProcessOpen, setIsProcessOpen] = useState(false);

  return (
    <section id="installation" style={{ padding: 'var(--cds-spacing-10) 0' }}>
      <Grid>
        <Column lg={16} md={8} sm={4} style={{ marginBottom: 'var(--cds-spacing-07)' }}>
          <p className="cds--label-01" style={{ color: 'var(--cds-text-helper)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)' }}>
            03 Deployment
          </p>
          <h2 className="cds--fluid-heading-05" style={{ color: 'var(--cds-text-primary)' }}>
            Deployment & Commissioning
          </h2>
        </Column>
      </Grid>

      <Grid>
        <Column lg={16} md={8} sm={4}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: '1fr 1fr', gap: 0 }}>
            {/* Hero tile — 2x2 */}
            <Tile style={{ gridColumn: 'span 2', gridRow: 'span 2', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', maxHeight: 400 }}>
              <img src="/3D images/Cooling and Airflow/Deployment- Cooling.png" alt="Cooling system deployment and commissioning" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
              <div style={{ position: 'absolute', bottom: 'var(--cds-spacing-06)', right: 'var(--cds-spacing-06)', maxWidth: 480, background: 'rgba(22, 22, 22, 0.88)', padding: 'var(--cds-spacing-06)', borderLeft: '3px solid var(--cds-interactive)' }}>
                <p className="cds--label-01" style={{ color: 'var(--cds-text-inverse)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)' }}>03 Deployment</p>
                <h3 className="cds--heading-02" style={{ color: 'var(--cds-text-inverse)', marginBottom: 'var(--cds-spacing-03)', lineHeight: 1.25 }}>Thermal continuity is won or lost at installation</h3>
                <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-inverse)', lineHeight: 1.5, opacity: 0.85 }}>4-phase deployment: mechanical install, thermal validation, commissioning sign-off, and monitoring integration — validated for Pakistan&apos;s climate before handover.</p>
              </div>
            </Tile>

            {/* Mechanical Installation */}
            <Tile
              style={{
                gridColumn: '3 / span 1',
                gridRow: '1 / span 1',
                padding: 'var(--cds-spacing-06)',
                display: 'flex',
                flexDirection: 'column',
                background: mechHover ? 'var(--cds-interactive)' : 'transparent',
                transition: 'background 0.25s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setMechHover(true)}
              onMouseLeave={() => setMechHover(false)}
            >
              <Settings size={32} style={{ color: mechHover ? '#ffffff' : 'var(--cds-interactive)', marginBottom: 'var(--cds-spacing-05)', transition: 'color 0.25s ease' }} />
              <div style={{ marginTop: 'auto' }}>
                <p className="cds--label-01" style={{ color: mechHover ? 'rgba(255,255,255,0.8)' : 'var(--cds-text-secondary)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)', transition: 'color 0.25s ease' }}>Step 01</p>
                <h3 className="cds--heading-02" style={{ color: mechHover ? '#ffffff' : 'var(--cds-text-primary)', marginBottom: 'var(--cds-spacing-03)', transition: 'color 0.25s ease' }}>Mechanical Installation</h3>
                {!mechHover ? (
                  <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-05)', lineHeight: 1.5 }}>Positioning, refrigerant lines, drains, electrical.</p>
                ) : (
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {['Positioning and levelling', 'Refrigerant line brazing and pressure testing', 'Condensate drain routing', 'Electrical connection and breaker sizing'].map((item) => (
                      <li key={item} className="cds--body-compact-01" style={{ color: '#ffffff', marginBottom: 'var(--cds-spacing-03)', display: 'flex', gap: 'var(--cds-spacing-03)', lineHeight: 1.5 }}>
                        <CheckmarkFilled size={16} style={{ color: '#ffffff', flexShrink: 0, marginTop: 'var(--cds-spacing-01)' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Tile>

            {/* Thermal Validation */}
            <Tile
              style={{
                gridColumn: '4 / span 1',
                gridRow: '1 / span 1',
                padding: 'var(--cds-spacing-06)',
                display: 'flex',
                flexDirection: 'column',
                background: thermalHover ? 'var(--cds-interactive)' : 'transparent',
                transition: 'background 0.25s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setThermalHover(true)}
              onMouseLeave={() => setThermalHover(false)}
            >
              <Meter size={32} style={{ color: thermalHover ? '#ffffff' : 'var(--cds-interactive)', marginBottom: 'var(--cds-spacing-05)', transition: 'color 0.25s ease' }} />
              <div style={{ marginTop: 'auto' }}>
                <p className="cds--label-01" style={{ color: thermalHover ? 'rgba(255,255,255,0.8)' : 'var(--cds-text-secondary)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)', transition: 'color 0.25s ease' }}>Step 02</p>
                <h3 className="cds--heading-02" style={{ color: thermalHover ? '#ffffff' : 'var(--cds-text-primary)', marginBottom: 'var(--cds-spacing-03)', transition: 'color 0.25s ease' }}>Thermal Validation</h3>
                {!thermalHover ? (
                  <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-05)', lineHeight: 1.5 }}>IR mapping, CFD simulation, load-bank testing.</p>
                ) : (
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {['Infrared thermal mapping of rack inlets', 'CFD airflow simulation for hotspot elimination', 'Load-bank testing at design capacity', 'Failover simulation: primary → secondary → portable'].map((item) => (
                      <li key={item} className="cds--body-compact-01" style={{ color: '#ffffff', marginBottom: 'var(--cds-spacing-03)', display: 'flex', gap: 'var(--cds-spacing-03)', lineHeight: 1.5 }}>
                        <CheckmarkFilled size={16} style={{ color: '#ffffff', flexShrink: 0, marginTop: 'var(--cds-spacing-01)' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Tile>

            {/* Commissioning */}
            <Tile
              style={{
                padding: 'var(--cds-spacing-06)',
                display: 'flex',
                flexDirection: 'column',
                background: commHover ? 'var(--cds-interactive)' : 'transparent',
                transition: 'background 0.25s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setCommHover(true)}
              onMouseLeave={() => setCommHover(false)}
            >
              <Certificate size={32} style={{ color: commHover ? '#ffffff' : 'var(--cds-interactive)', marginBottom: 'var(--cds-spacing-05)', transition: 'color 0.25s ease' }} />
              <div style={{ marginTop: 'auto' }}>
                <p className="cds--label-01" style={{ color: commHover ? 'rgba(255,255,255,0.8)' : 'var(--cds-text-secondary)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)', transition: 'color 0.25s ease' }}>Step 03–04</p>
                <h3 className="cds--heading-02" style={{ color: commHover ? '#ffffff' : 'var(--cds-text-primary)', marginBottom: 'var(--cds-spacing-03)', transition: 'color 0.25s ease' }}>Commissioning & Monitoring</h3>
                {!commHover ? (
                  <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-05)', lineHeight: 1.5 }}>Sign-off docs, calibration, DCIM integration.</p>
                ) : (
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {['As-built documentation and capacity report', 'Setpoint calibration (temperature & humidity)', 'DCIM integration and alert configuration', 'NOC dashboard onboarding'].map((item) => (
                      <li key={item} className="cds--body-compact-01" style={{ color: '#ffffff', marginBottom: 'var(--cds-spacing-03)', display: 'flex', gap: 'var(--cds-spacing-03)', lineHeight: 1.5 }}>
                        <CheckmarkFilled size={16} style={{ color: '#ffffff', flexShrink: 0, marginTop: 'var(--cds-spacing-01)' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Tile>
          </div>
        </Column>
      </Grid>

      {/* Dark CTA band */}
      <Grid style={{ marginTop: 'var(--cds-spacing-07)' }}>
        <Column lg={16} md={8} sm={4}>
          <Tile style={{ padding: 'var(--cds-spacing-07)', background: 'linear-gradient(135deg, #0a1628 0%, #1a2b4a 100%)', borderLeft: '4px solid var(--cds-interactive)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--cds-spacing-06)' }}>
              <div style={{ flex: '1 1 400px' }}>
                <h3 className="cds--heading-02" style={{ color: '#ffffff', marginBottom: 'var(--cds-spacing-03)' }}>60% of cooling failures are installation-related</h3>
                <p className="cds--body-compact-01" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                  Independent studies across Pakistan data centres show that the majority of thermal outages within the first 12 months trace back to installation shortcuts — not hardware defects.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 'var(--cds-spacing-03)', flexWrap: 'wrap', alignItems: 'center' }}>
                <Button
                  kind="ghost"
                  onClick={() => setIsProcessOpen(!isProcessOpen)}
                  renderIcon={isProcessOpen ? ChevronUp : ChevronDown}
                  style={{ color: '#ffffff', minWidth: '11rem' }}
                >
                  {isProcessOpen ? 'Close' : 'View Full Process'}
                </Button>
                <Button
                  kind="primary"
                  href="mailto:contact@perception-it.com?subject=Deployment%20Consultation%20Request"
                >
                  Discuss Deployment Timeline
                </Button>
              </div>
            </div>
          </Tile>
        </Column>
      </Grid>

      {/* Expandable process detail */}
      {isProcessOpen && (
        <Grid style={{ marginTop: 'var(--cds-spacing-05)' }}>
          <Column lg={16} md={8} sm={4}>
            <Grid style={{ padding: 'var(--cds-spacing-03) 0 var(--cds-spacing-05)' }}>
              <Column lg={8} md={4} sm={4} style={{ marginBottom: 'var(--cds-spacing-05)' }}>
                <Tile style={{ height: '100%', padding: 'var(--cds-spacing-05)', background: 'var(--cds-layer-01)' }}>
                  <p className="cds--label-01" style={{ color: 'var(--cds-support-error)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-04)' }}>Common Installation Failures</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[{ label: 'Refrigerant charge', value: 'Incorrect charge causes 40% of first-year failures' }, { label: 'Condensate drains', value: 'Undersized drains flood during monsoon humidity' }, { label: 'Thermal validation', value: 'Missing validation leaves hotspots undetected' }].map((item) => (
                      <li key={item.label} className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-04)', display: 'flex', gap: 'var(--cds-spacing-03)', lineHeight: 1.5 }}>
                        <Warning size={16} style={{ color: 'var(--cds-support-error)', flexShrink: 0, marginTop: 'var(--cds-spacing-01)' }} />
                        <span><strong style={{ color: 'var(--cds-text-primary)', fontWeight: 600 }}>{item.label}:</strong> {item.value}</span>
                      </li>
                    ))}
                  </ul>
                </Tile>
              </Column>
              <Column lg={8} md={4} sm={4} style={{ marginBottom: 'var(--cds-spacing-05)' }}>
                <Tile style={{ height: '100%', padding: 'var(--cds-spacing-05)', background: 'var(--cds-layer-01)' }}>
                  <p className="cds--label-01" style={{ color: 'var(--cds-interactive)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-04)' }}>Our Deployment Protocol</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[{ label: 'Site survey', value: 'Thermal load, airflow path, electrical capacity' }, { label: 'Placement design', value: 'CFD-validated layout for optimal airflow' }, { label: 'Monsoon hardening', value: 'Drain sizing, seal verification, humidity buffers' }, { label: 'Start-up & balancing', value: 'Load-bank test, setpoint calibration, failover' }, { label: 'As-built docs', value: 'Full documentation and operator handover' }].map((item) => (
                      <li key={item.label} className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-04)', display: 'flex', gap: 'var(--cds-spacing-03)', lineHeight: 1.5 }}>
                        <CheckmarkFilled size={16} style={{ color: 'var(--cds-interactive)', flexShrink: 0, marginTop: 'var(--cds-spacing-01)' }} />
                        <span><strong style={{ color: 'var(--cds-text-primary)', fontWeight: 600 }}>{item.label}:</strong> {item.value}</span>
                      </li>
                    ))}
                  </ul>
                </Tile>
              </Column>
              <Column lg={16} md={8} sm={4} style={{ marginBottom: 'var(--cds-spacing-03)' }}>
                <Tile style={{ padding: 'var(--cds-spacing-05)', background: 'var(--cds-layer-01)', borderLeft: '4px solid var(--cds-support-success)', display: 'flex', gap: 'var(--cds-spacing-05)', alignItems: 'flex-start' }}>
                  <Certificate size={24} style={{ color: 'var(--cds-support-success)', flexShrink: 0, marginTop: 'var(--cds-spacing-01)' }} />
                  <div>
                    <p className="cds--label-01" style={{ color: 'var(--cds-support-success)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-02)' }}>45°C+ Ambient Rated</p>
                    <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.6 }}>Every installation is validated for Pakistan&apos;s peak summer conditions. We test at 45°C ambient and 80% RH to ensure your cooling system performs when it matters most.</p>
                  </div>
                </Tile>
              </Column>
              <Column lg={16} md={8} sm={4} style={{ marginBottom: 'var(--cds-spacing-03)' }}>
                <Tile style={{ padding: 'var(--cds-spacing-05)', background: 'var(--cds-layer-01)', borderLeft: '4px solid var(--cds-text-placeholder)', display: 'flex', gap: 'var(--cds-spacing-05)', alignItems: 'flex-start' }}>
                  <Warning size={24} style={{ color: 'var(--cds-text-placeholder)', flexShrink: 0, marginTop: 'var(--cds-spacing-01)' }} />
                  <div>
                    <p className="cds--label-01" style={{ color: 'var(--cds-text-placeholder)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-02)' }}>What&apos;s Not Included</p>
                    <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.6 }}>Deployment covers installation, validation, and commissioning only. Excludes: thermal capacity planning, monsoon hardening engineering, and SLA guarantees.</p>
                  </div>
                </Tile>
              </Column>
              <Column lg={16} md={8} sm={4}>
                <Tile style={{ padding: 'var(--cds-spacing-06)', background: 'linear-gradient(135deg, #0a1628 0%, #1a2b4a 100%)', borderLeft: '4px solid var(--cds-interactive)' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--cds-spacing-06)' }}>
                    <Button kind="ghost" onClick={() => setIsProcessOpen(false)} style={{ color: '#ffffff' }}>Close details</Button>
                    <Button kind="primary" href="mailto:contact@perception-it.com?subject=Deployment%20Consultation%20Request">Discuss Deployment Timeline</Button>
                  </div>
                </Tile>
              </Column>
            </Grid>
          </Column>
        </Grid>
      )}
    </section>
  );
};

const ManagedServicesSection = () => {
  const [essentialHover, setEssentialHover] = useState(false);
  const [proHover, setProHover] = useState(false);
  const [enterpriseHover, setEnterpriseHover] = useState(false);
  const [isTiersOpen, setIsTiersOpen] = useState(false);

  const tiers = [
    {
      name: 'Essential',
      price: 'PKR 65K',
      period: '/mo',
      items: [
        'Quarterly preventive maintenance',
        'Filter replacement',
        'Refrigerant check',
        'Basic telemetry review',
      ],
    },
    {
      name: 'Professional',
      price: 'PKR 145K',
      period: '/mo',
      items: [
        'Monthly preventive maintenance',
        '8-hour response SLA',
        'Predictive alerts',
        'Thermal trending report',
        'Spare parts pre-staging',
        'Remote monitoring',
      ],
    },
    {
      name: 'Enterprise',
      price: 'PKR 380K+',
      period: '/mo',
      items: [
        '24/7 NOC monitoring (3 hubs)',
        '4-hour response SLA',
        'Monsoon standby engineers',
        'Quarterly room integrity validation',
        '99.9% uptime target under signed SLA',
        'Predictive alerts',
        'On-site spare parts pre-staged',
      ],
    },
  ];

  return (
    <section id="managed" style={{ padding: 'var(--cds-spacing-10) 0' }}>
      <Grid>
        <Column lg={16} md={8} sm={4} style={{ marginBottom: 'var(--cds-spacing-07)' }}>
          <p className="cds--label-01" style={{ color: 'var(--cds-text-helper)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)' }}>
            04 Managed Services
          </p>
          <h2 className="cds--fluid-heading-05" style={{ color: 'var(--cds-text-primary)' }}>
            24/7 Managed Thermal Services
          </h2>
        </Column>
      </Grid>

      <Grid>
        <Column lg={16} md={8} sm={4}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: '1fr 1fr', gap: 0 }}>
            {/* Hero tile — 2x2 */}
            <Tile style={{ gridColumn: 'span 2', gridRow: 'span 2', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', maxHeight: 400 }}>
              <img src="/3D images/Cooling and Airflow/managed service - Cooling - page.png" alt="Network operations centre with thermal monitoring dashboards" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
              <div style={{ position: 'absolute', bottom: 'var(--cds-spacing-06)', right: 'var(--cds-spacing-06)', maxWidth: 480, background: 'rgba(22, 22, 22, 0.88)', padding: 'var(--cds-spacing-06)', borderLeft: '3px solid var(--cds-interactive)' }}>
                <p className="cds--label-01" style={{ color: 'var(--cds-text-inverse)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)' }}>04 Managed Services</p>
                <h3 className="cds--heading-02" style={{ color: 'var(--cds-text-inverse)', marginBottom: 'var(--cds-spacing-03)', lineHeight: 1.25 }}>Thermal continuity does not end at handover</h3>
                <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-inverse)', lineHeight: 1.5, opacity: 0.85 }}>Filters clog. Refrigerant leaks. Setpoints drift. Our managed service catches degradation before it becomes an outage — with NOC engineers who understand Pakistan&apos;s climate stress cycles.</p>
              </div>
            </Tile>

            {/* Essential tier */}
            <Tile
              style={{
                gridColumn: '3 / span 1',
                gridRow: '1 / span 1',
                padding: 'var(--cds-spacing-06)',
                display: 'flex',
                flexDirection: 'column',
                background: essentialHover ? 'var(--cds-interactive)' : 'transparent',
                transition: 'background 0.25s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setEssentialHover(true)}
              onMouseLeave={() => setEssentialHover(false)}
            >
              <Settings size={32} style={{ color: essentialHover ? '#ffffff' : 'var(--cds-interactive)', marginBottom: 'var(--cds-spacing-05)', transition: 'color 0.25s ease' }} />
              <div style={{ marginTop: 'auto' }}>
                <p className="cds--label-01" style={{ color: essentialHover ? 'rgba(255,255,255,0.8)' : 'var(--cds-text-secondary)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)', transition: 'color 0.25s ease' }}>Tier 1</p>
                <h3 className="cds--heading-02" style={{ color: essentialHover ? '#ffffff' : 'var(--cds-text-primary)', marginBottom: 'var(--cds-spacing-03)', transition: 'color 0.25s ease' }}>Essential</h3>
                {!essentialHover ? (
                  <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-05)', lineHeight: 1.5 }}>Quarterly maintenance and basic telemetry.</p>
                ) : (
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {tiers[0].items.map((item) => (
                      <li key={item} className="cds--body-compact-01" style={{ color: '#ffffff', marginBottom: 'var(--cds-spacing-03)', display: 'flex', gap: 'var(--cds-spacing-03)', lineHeight: 1.5 }}>
                        <CheckmarkFilled size={16} style={{ color: '#ffffff', flexShrink: 0, marginTop: 'var(--cds-spacing-01)' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Tile>

            {/* Professional tier */}
            <Tile
              style={{
                gridColumn: '4 / span 1',
                gridRow: '1 / span 1',
                padding: 'var(--cds-spacing-06)',
                display: 'flex',
                flexDirection: 'column',
                background: proHover ? 'var(--cds-interactive)' : 'transparent',
                transition: 'background 0.25s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setProHover(true)}
              onMouseLeave={() => setProHover(false)}
            >
              <Dashboard size={32} style={{ color: proHover ? '#ffffff' : 'var(--cds-interactive)', marginBottom: 'var(--cds-spacing-05)', transition: 'color 0.25s ease' }} />
              <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--cds-spacing-03)', marginBottom: 'var(--cds-spacing-03)' }}>
                  <p className="cds--label-01" style={{ color: proHover ? 'rgba(255,255,255,0.8)' : 'var(--cds-text-secondary)', textTransform: 'uppercase', transition: 'color 0.25s ease' }}>Tier 2</p>
                  <Tag type="blue">Recommended</Tag>
                </div>
                <h3 className="cds--heading-02" style={{ color: proHover ? '#ffffff' : 'var(--cds-text-primary)', marginBottom: 'var(--cds-spacing-03)', transition: 'color 0.25s ease' }}>Professional</h3>
                {!proHover ? (
                  <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-05)', lineHeight: 1.5 }}>Monthly maintenance, 8hr SLA, predictive alerts.</p>
                ) : (
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {tiers[1].items.map((item) => (
                      <li key={item} className="cds--body-compact-01" style={{ color: '#ffffff', marginBottom: 'var(--cds-spacing-03)', display: 'flex', gap: 'var(--cds-spacing-03)', lineHeight: 1.5 }}>
                        <CheckmarkFilled size={16} style={{ color: '#ffffff', flexShrink: 0, marginTop: 'var(--cds-spacing-01)' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Tile>

            {/* Enterprise tier */}
            <Tile
              style={{
                padding: 'var(--cds-spacing-06)',
                display: 'flex',
                flexDirection: 'column',
                background: enterpriseHover ? 'var(--cds-interactive)' : 'transparent',
                transition: 'background 0.25s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setEnterpriseHover(true)}
              onMouseLeave={() => setEnterpriseHover(false)}
            >
              <Certificate size={32} style={{ color: enterpriseHover ? '#ffffff' : 'var(--cds-interactive)', marginBottom: 'var(--cds-spacing-05)', transition: 'color 0.25s ease' }} />
              <div style={{ marginTop: 'auto' }}>
                <p className="cds--label-01" style={{ color: enterpriseHover ? 'rgba(255,255,255,0.8)' : 'var(--cds-text-secondary)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)', transition: 'color 0.25s ease' }}>Tier 3</p>
                <h3 className="cds--heading-02" style={{ color: enterpriseHover ? '#ffffff' : 'var(--cds-text-primary)', marginBottom: 'var(--cds-spacing-03)', transition: 'color 0.25s ease' }}>Enterprise</h3>
                {!enterpriseHover ? (
                  <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-05)', lineHeight: 1.5 }}>24/7 NOC, 4hr SLA, monsoon standby, 99.9% uptime.</p>
                ) : (
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {tiers[2].items.map((item) => (
                      <li key={item} className="cds--body-compact-01" style={{ color: '#ffffff', marginBottom: 'var(--cds-spacing-03)', display: 'flex', gap: 'var(--cds-spacing-03)', lineHeight: 1.5 }}>
                        <CheckmarkFilled size={16} style={{ color: '#ffffff', flexShrink: 0, marginTop: 'var(--cds-spacing-01)' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Tile>
          </div>
        </Column>
      </Grid>

      {/* Dark CTA band */}
      <Grid style={{ marginTop: 'var(--cds-spacing-07)' }}>
        <Column lg={16} md={8} sm={4}>
          <Tile style={{ padding: 'var(--cds-spacing-07)', background: 'linear-gradient(135deg, #0a1628 0%, #1a2b4a 100%)', borderLeft: '4px solid var(--cds-interactive)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--cds-spacing-06)' }}>
              <div style={{ flex: '1 1 400px' }}>
                <h3 className="cds--heading-02" style={{ color: '#ffffff', marginBottom: 'var(--cds-spacing-03)' }}>Not sure which tier fits your facility?</h3>
                <p className="cds--body-compact-01" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                  Most mid-size data centres in Pakistan start with Professional. We can assess your cooling load, criticality, and budget in a 30-minute call.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 'var(--cds-spacing-03)', flexWrap: 'wrap', alignItems: 'center' }}>
                <Button
                  kind="ghost"
                  onClick={() => setIsTiersOpen(!isTiersOpen)}
                  renderIcon={isTiersOpen ? ChevronUp : ChevronDown}
                  style={{ color: '#ffffff', minWidth: '11rem' }}
                >
                  {isTiersOpen ? 'Close' : 'Compare All Tiers'}
                </Button>
                <Button
                  kind="primary"
                  href="mailto:contact@perception-it.com?subject=Managed%20Services%20Consultation"
                >
                  Choose Your Service Tier
                </Button>
              </div>
            </div>
          </Tile>
        </Column>
      </Grid>

      {/* Expandable tier comparison */}
      {isTiersOpen && (
        <Grid style={{ marginTop: 'var(--cds-spacing-05)' }}>
          <Column lg={16} md={8} sm={4}>
            <Grid style={{ padding: 'var(--cds-spacing-03) 0 var(--cds-spacing-05)' }}>
              {tiers.map((tier) => (
                <Column lg={5} md={4} sm={4} key={tier.name} style={{ marginBottom: 'var(--cds-spacing-05)' }}>
                  <Tile style={{ height: '100%', padding: 'var(--cds-spacing-05)', background: 'var(--cds-layer-01)', borderTop: '4px solid var(--cds-interactive)' }}>
                    <p className="cds--label-01" style={{ color: 'var(--cds-interactive)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-04)' }}>{tier.name}</p>
                    <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-02)' }}>From</p>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: 'var(--cds-spacing-05)' }}>
                      <span className="cds--fluid-heading-03" style={{ color: 'var(--cds-text-primary)', fontWeight: 300 }}>{tier.price}</span>
                      <span className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)' }}>{tier.period}</span>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {tier.items.map((item) => (
                        <li key={item} className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-04)', display: 'flex', gap: 'var(--cds-spacing-03)', lineHeight: 1.5 }}>
                          <CheckmarkFilled size={16} style={{ color: 'var(--cds-interactive)', flexShrink: 0, marginTop: 'var(--cds-spacing-01)' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Tile>
                </Column>
              ))}
              <Column lg={16} md={8} sm={4} style={{ marginBottom: 'var(--cds-spacing-03)' }}>
                <Tile style={{ padding: 'var(--cds-spacing-05)', background: 'var(--cds-layer-01)', borderLeft: '4px solid var(--cds-support-success)', display: 'flex', gap: 'var(--cds-spacing-05)', alignItems: 'flex-start' }}>
                  <Certificate size={24} style={{ color: 'var(--cds-support-success)', flexShrink: 0, marginTop: 'var(--cds-spacing-01)' }} />
                  <div>
                    <p className="cds--label-01" style={{ color: 'var(--cds-support-success)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-02)' }}>SLA-Backed Uptime</p>
                    <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.6 }}>Enterprise tier includes a signed SLA with 99.9% uptime target, 4-hour on-site response, and dedicated monsoon standby engineers. Professional tier offers 8-hour response with remote monitoring.</p>
                  </div>
                </Tile>
              </Column>
              <Column lg={16} md={8} sm={4} style={{ marginBottom: 'var(--cds-spacing-03)' }}>
                <Tile style={{ padding: 'var(--cds-spacing-05)', background: 'var(--cds-layer-01)', borderLeft: '4px solid var(--cds-text-placeholder)', display: 'flex', gap: 'var(--cds-spacing-05)', alignItems: 'flex-start' }}>
                  <Warning size={24} style={{ color: 'var(--cds-text-placeholder)', flexShrink: 0, marginTop: 'var(--cds-spacing-01)' }} />
                  <div>
                    <p className="cds--label-01" style={{ color: 'var(--cds-text-placeholder)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-02)' }}>What&apos;s Not Included</p>
                    <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.6 }}>Managed Services covers monitoring, maintenance, and response only. Excludes: hardware replacement costs (covered under warranty or separate procurement), facility structural modifications, and third-party software licensing.</p>
                  </div>
                </Tile>
              </Column>
              <Column lg={16} md={8} sm={4}>
                <Tile style={{ padding: 'var(--cds-spacing-06)', background: 'linear-gradient(135deg, #0a1628 0%, #1a2b4a 100%)', borderLeft: '4px solid var(--cds-interactive)' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--cds-spacing-06)' }}>
                    <Button kind="ghost" onClick={() => setIsTiersOpen(false)} style={{ color: '#ffffff' }}>Close comparison</Button>
                    <Button kind="primary" href="mailto:contact@perception-it.com?subject=Managed%20Services%20Consultation">Choose Your Service Tier</Button>
                  </div>
                </Tile>
              </Column>
            </Grid>
          </Column>
        </Grid>
      )}
    </section>
  );
};

/* ==============================================================================
   RESULTS SECTION — Testimonials + Case Studies
   ============================================================================== */
const ResultsSection = ({ caseStudyPage, setCaseStudyPage, testimonialPage, setTestimonialPage }: {
  caseStudyPage: number;
  setCaseStudyPage: (p: number) => void;
  testimonialPage: number;
  setTestimonialPage: (p: number) => void;
}) => {
  return (
    <section id="results" className={styles['section-pad-inverse']}>
      <Grid>
        <Column lg={16} md={8} sm={4}>
          {/* Header */}
          <div style={{ marginBottom: 'var(--cds-spacing-09)' }}>
            <p className="cds--label-01" style={{ color: 'var(--cds-text-inverse)', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.32px', marginBottom: 'var(--cds-spacing-03)' }}>
              Results
            </p>
            <h2 className="cds--fluid-heading-05" style={{ color: 'var(--cds-text-inverse)' }}>Client Voice</h2>
          </div>

          {/* Testimonials */}
          {([
            {
              context: { client: 'Ibrahim Fibres', desc: 'Deployed ServerLife Extend™ to Critical Infrastructure and deferred CapEx spend without compromise on quality and continuity', link: '/projects/case-study/out-of-warranty-server-support-ibrahim-fibres', solutionLink: '/services/server-continuity' },
              bgImage: '/case-studies/ibrahim-fibres/hero-1920.jpg',
              quote: "Perception IT transformed our server infrastructure from a risk into a reliable engine for operations. With 48 critical Lenovo servers supporting our production and financial systems, any downtime could have cost us millions. Their 24/7 support, same-day hardware replacements, and proactive maintenance have kept our systems running without a single major incident.\n\nWe now operate with confidence knowing our IT backbone is in expert hands. For any organization managing critical hardware, I highly recommend their service.",
              author: 'Mr. Usman Zafar',
              role: 'Head of IT, Ibrahim Fibres Limited',
              initials: 'UZ',
              logo: '/logos/clients/IFL-logo.png',
            },
            {
              context: { client: 'National Telecom Operator', desc: 'Monsoon-hardened precision cooling across 3 sites', link: null, solutionLink: null },
              bgImage: null,
              quote: 'Their quarterly monsoon validation protocol caught a condensate drain issue before it became an outage. That proactive approach is why we renewed for three more years.',
              author: 'DC Operations Manager',
              role: 'National Telecom Operator',
              initials: 'NT',
              logo: null,
            },
          ] as const).filter((_, i) => i === testimonialPage).map((item) => (
            <FeaturedTestimonial
              key={item.context.client}
              quote={item.quote}
              author={item.author}
              role={item.role}
              client={item.context.client}
              initials={item.initials}
              clientLogo={item.logo}
              bgImage={item.bgImage}
              contextDesc={item.context.desc}
              contextLink={item.context.link}
              solutionLink={item.context.solutionLink}
              solutionLabel="ServerLife Extend™ Solution details"
              valueProps={[
                { title: 'PKR 75,000 Flat Fee', desc: 'Professional report focused on your specific environment.' },
                { title: '90-Minute On-Site Review', desc: 'Rapid data collection led by specialized NOC engineers.' },
                { title: 'Prioritized Action Plan', desc: 'A graded scorecard featuring priority-ranked technical fixes.' },
                { title: 'Zero Obligation', desc: 'Complete transparency to help you decide your next steps.' },
              ]}
              showNav
              onPrev={() => setTestimonialPage(testimonialPage === 0 ? 1 : 0)}
              onNext={() => setTestimonialPage(testimonialPage === 0 ? 1 : 0)}
              variant="dark"
            />
          ))}

          {/* Testimonial Pagination */}
          <div style={{ marginTop: 'var(--cds-spacing-06)', marginBottom: 'var(--cds-spacing-10)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <button
              onClick={() => setTestimonialPage(0)}
              aria-label="Testimonial 1"
              className={`${styles['pagination-dot']} ${testimonialPage === 0 ? styles['pagination-dot--active'] : ''}`}
            />
            <button
              onClick={() => setTestimonialPage(1)}
              aria-label="Testimonial 2"
              className={`${styles['pagination-dot']} ${testimonialPage === 1 ? styles['pagination-dot--active'] : ''}`}
            />
          </div>

          {/* Infrastructure Projects Header */}
          <div style={{ marginBottom: 'var(--cds-spacing-05)', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div>
              <p className="cds--label-01" style={{ color: 'var(--cds-text-inverse)', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.32px', marginBottom: 'var(--cds-spacing-03)' }}>Projects</p>
              <h3 className="cds--fluid-heading-04" style={{ color: 'var(--cds-text-inverse)' }}>Infrastructure Projects</h3>
            </div>
            <Link to="/projects" style={{ color: 'var(--cds-link-inverse)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              View all projects <ArrowRight size={16} />
            </Link>
          </div>

          {/* Case Study Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: 'var(--cds-spacing-07)' }}>
            {caseStudyData.slice(caseStudyPage * 3, caseStudyPage * 3 + 3).map((study) => (
              <div key={study.title} style={{ background: 'var(--cds-layer-01)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                {study.image && (
                  <div style={{ width: '100%', height: '10rem', background: 'var(--cds-background)', overflow: 'hidden' }}>
                    <img src={study.image} alt={study.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}
                <div style={{ padding: 'var(--cds-spacing-05)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--cds-spacing-03)', marginBottom: 'var(--cds-spacing-03)' }}>
                    {study.logo && <img src={study.logo} alt={study.client} style={{ height: '24px', objectFit: 'contain' }} />}
                    <span className="cds--label-01" style={{ color: 'var(--cds-text-secondary)' }}>{study.client}</span>
                  </div>
                  <h4 className="cds--heading-01" style={{ color: 'var(--cds-text-primary)', marginBottom: 'var(--cds-spacing-02)' }}>{study.title}</h4>
                  <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-04)', lineHeight: 1.5 }}>{study.desc}</p>
                  <div style={{ marginTop: 'auto' }}>
                    <Link to={study.link} style={{ color: 'var(--cds-link-primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }} className="cds--label-01">
                      Read case study <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Case Study Pagination */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--cds-spacing-04)' }}>
            <button
              onClick={() => setCaseStudyPage(Math.max(0, caseStudyPage - 1))}
              disabled={caseStudyPage === 0}
              className="cds--btn cds--btn--ghost"
              style={{ color: caseStudyPage === 0 ? 'var(--cds-text-disabled)' : 'var(--cds-text-inverse)' }}
            >
              <ChevronLeft size={16} /> Previous
            </button>
            <span className="cds--body-compact-01" style={{ color: 'var(--cds-text-inverse)' }}>
              Page {caseStudyPage + 1} of {Math.ceil(caseStudyData.length / 3)}
            </span>
            <button
              onClick={() => setCaseStudyPage(Math.min(Math.ceil(caseStudyData.length / 3) - 1, caseStudyPage + 1))}
              disabled={caseStudyPage >= Math.ceil(caseStudyData.length / 3) - 1}
              className="cds--btn cds--btn--ghost"
              style={{ color: caseStudyPage >= Math.ceil(caseStudyData.length / 3) - 1 ? 'var(--cds-text-disabled)' : 'var(--cds-text-inverse)' }}
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        </Column>
      </Grid>
    </section>
  );
};

const EcosystemSection = () => {
  const dependencyChain = [
    { title: 'UPS Power', desc: 'Sizing, distribution, and generator integration for cooling load.', href: '/#/services/power-ups', icon: Meter },
    { title: 'Rack Layout', desc: 'Hot/cold aisle containment and cable management for airflow.', href: '/#/services/rack-cabinets', icon: DataCenter },
    { title: 'Monitoring', desc: 'Real-time temp, humidity, and leak detection across the facility.', href: '/#/services/environmental-monitoring', icon: Dashboard },
    { title: 'Security', desc: 'Access control, surveillance, and audit trails for the data hall.', href: '/#/services/security', icon: Certificate },
    { title: 'Fire Suppression', desc: 'FM200 and clean-agent systems that protect without damaging electronics.', href: '/#/services/fire-suppression', icon: Warning },
  ];

  return (
    <section id="ecosystem" className={styles['section-pad']} style={{ background: 'var(--cds-background)' }}>
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <div className={styles['section-label']} style={{ marginBottom: '2rem' }}>
            <p className="cds--label-01" style={{ color: 'var(--cds-interactive)', textTransform: 'uppercase', letterSpacing: '0.32px' }}>
              Ecosystem
            </p>
          </div>
          <h2 className="cds--fluid-heading-05" style={{ color: 'var(--cds-text-primary)', marginBottom: '1rem' }}>
            Cooling Doesn&apos;t Work in Isolation
          </h2>
          <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-05)', maxWidth: '48rem' }}>
            Precision cooling is only as reliable as the infrastructure around it: stable power, sealed containment, rack-level monitoring, and fire-suppression integration. A fault in any single layer triggers thermal cascade across the entire facility. We map these dependencies upfront — so performance is validated, not assumed.
          </p>
          {/* Dependency chain */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', gap: 0, marginBottom: 'var(--cds-spacing-07)' }}>
            {dependencyChain.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} style={{ display: 'flex', alignItems: 'stretch', flex: '1 1 180px' }}>
                  <Tile style={{ flex: 1, padding: 'var(--cds-spacing-05)', background: 'var(--cds-layer)', border: 'none', borderRadius: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--cds-spacing-03)', marginBottom: 'var(--cds-spacing-03)' }}>
                      <Icon size={20} style={{ color: 'var(--cds-interactive)' }} />
                      <h3 className="cds--heading-02" style={{ color: 'var(--cds-text-primary)', marginBottom: 0 }}>{svc.title}</h3>
                    </div>
                    <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-03)', lineHeight: 1.5 }}>{svc.desc}</p>
                    <a href={svc.href} className="cds--label-01" style={{ color: 'var(--cds-interactive)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.32px', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                      Learn more <ChevronRight size={14} />
                    </a>
                  </Tile>
                  {idx < dependencyChain.length - 1 && (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, flexShrink: 0 }}>
                      <ArrowRight size={16} style={{ color: 'var(--cds-text-placeholder)' }} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Approach statement */}
          <Tile style={{ padding: 'var(--cds-spacing-06)', background: 'var(--cds-layer-01)', borderLeft: '4px solid var(--cds-interactive)' }}>
            <div style={{ display: 'flex', gap: 'var(--cds-spacing-05)', alignItems: 'flex-start' }}>
              <Settings size={24} style={{ color: 'var(--cds-interactive)', flexShrink: 0, marginTop: 'var(--cds-spacing-01)' }} />
              <div>
                <p className="cds--label-01" style={{ color: 'var(--cds-interactive)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-02)', letterSpacing: '0.32px' }}>Our Approach</p>
                <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.6 }}>
                  Every cooling engagement includes a dependency audit. Before we specify a single unit, we validate that your power capacity, rack airflow patterns, monitoring coverage, and suppression readiness can support the thermal load. Performance is engineered — not assumed.
                </p>
              </div>
            </div>
          </Tile>
        </Column>
      </Grid>
    </section>
  );
};
const CoolingAirflow = () => {
  const [activeSection, setActiveSection] = useState('thermal-failure');
  const [navScrolled, setNavScrolled] = useState(false);
  const [testimonialPage, setTestimonialPage] = useState(0);
  const [caseStudyPage, setCaseStudyPage] = useState(0);
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false);
  const [assessmentForm, setAssessmentForm] = useState({ name: '', email: '', company: '', phone: '', subject: 'Requesting Thermal assessment', message: '' });
  const [isChecklistModalOpen, setIsChecklistModalOpen] = useState(false);
  const [checklistForm, setChecklistForm] = useState({ name: '', email: '', company: '', phone: '' });

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 400);
      const scrollPosition = window.scrollY + 150;
      for (const id of SECTIONS) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target as Element);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cds-background)' }}>
      <CarbonHeader />

      {/* Schema.org BreadcrumbList */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://perception-it.com/' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://perception-it.com/services' },
            { '@type': 'ListItem', position: 3, name: 'Infrastructure' },
            { '@type': 'ListItem', position: 4, name: 'Data Centre Services' },
            { '@type': 'ListItem', position: 5, name: 'Cooling & Airflow', item: 'https://perception-it.com/#/infrastructure/data-centre-services/cooling-airflow' },
          ],
        })}
      </script>

      <HeroSection scrollToSection={scrollToSection} />

      {/* Anchor Nav */}
      <nav
        className={`${styles['sticky-nav']} desktop-anchor-nav`}
        style={{ background: navScrolled ? 'var(--cds-layer)' : 'var(--cds-background)', boxShadow: navScrolled ? 'var(--cds-shadow)' : 'none' }}
      >
        <Grid>
          <Column lg={16} md={8} sm={4}>
            <ul className="anchor-nav-list">
              {NAV_SECTIONS.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`anchor-nav-item ${activeSection === id ? 'anchor-nav-item--active' : ''}`}
                  >
                    {sectionLabels[id]}
                  </button>
                </li>
              ))}
            </ul>
          </Column>
        </Grid>
      </nav>

      <PillarNavSection scrollToSection={scrollToSection} />
      <AssessmentInsightsGrid />
      <ProcurementInsightsGrid />

      {/* Placeholder sections for remaining content */}
      <DeploymentSection />

      <ManagedServicesSection />
      <ResultsSection
        caseStudyPage={caseStudyPage}
        setCaseStudyPage={setCaseStudyPage}
        testimonialPage={testimonialPage}
        setTestimonialPage={setTestimonialPage}
      />
      <EcosystemSection />

      {/* Related hub pages */}
      <section style={{ padding: 'var(--cds-spacing-07) 0', background: 'var(--cds-layer)', borderTop: '1px solid var(--cds-border-subtle)' }}>
        <Grid>
          <Column lg={16} md={8} sm={4}>
            <p className="cds--label-01" style={{ color: 'var(--cds-text-helper)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)' }}>Related Pages</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--cds-spacing-03)' }}>
              <Button kind="primary" renderIcon={ArrowRight} href="/#/services/server-continuity">Server Continuity Suite</Button>
              <Button kind="tertiary" href="/#/services/datacenter2">Data Centre Services</Button>
            </div>
          </Column>
        </Grid>
      </section>

      <section id="faq" className={styles['section-pad']} style={{ background: 'var(--cds-background)' }}>
        <Grid>
          <Column lg={16} md={8} sm={4}>
            <div className={styles['section-label']} style={{ marginBottom: '1.5rem' }}>
              <p className="cds--label-01" style={{ color: 'var(--cds-support-success)', textTransform: 'uppercase', letterSpacing: '0.32px' }}>
                FAQ
              </p>
            </div>
            <h2 className="cds--fluid-heading-05" style={{ color: 'var(--cds-text-primary)', marginBottom: '2rem' }}>
              Frequently Asked Questions
            </h2>
            <Accordion>
              <AccordionItem title="What is a Thermal Health Check?">
                A 90-minute on-site assessment using infrared thermal mapping and structured checklists. You receive a Fix / Watch / OK scorecard with Pakistan-specific derating validation within 48 hours.
              </AccordionItem>
              <AccordionItem title="How is Precision Thermal Engineering different?">
                It uses CFD modeling and engineering analysis to produce 3D heat maps, hotspot predictions, and containment recommendations. Ideal for new builds, high-density loads, and compliance documentation.
              </AccordionItem>
              <AccordionItem title="Do you supply cooling hardware directly?">
                Yes. We source from tier-1 manufacturers (Huawei, Lenovo, Dell, HP) and validate every unit for 45°C ambient, monsoon humidity, and dust infiltration before shipping.
              </AccordionItem>
              <AccordionItem title="What is the upgrade path between assessments?">
                If your Health Check reveals complexity, 20% of your PKR 75,000 fee (PKR 15,000) is credited toward Precision Thermal Engineering when upgraded within 60 days.
              </AccordionItem>
            </Accordion>
          </Column>
        </Grid>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section
        id="cta"
        style={{
          padding: 'var(--cds-spacing-10) 0',
          background: 'var(--cds-background)',
          borderTop: '1px solid var(--cds-border-subtle)',
        }}
      >
        <Grid>
          <Column lg={16} md={8} sm={4}>
            <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
              <p className="cds--label-01" style={{ color: 'var(--cds-interactive)', textTransform: 'uppercase', letterSpacing: '0.32px', marginBottom: 'var(--cds-spacing-03)' }}>
                Contact
              </p>
              <h2 className="cds--fluid-heading-04" style={{ color: 'var(--cds-text-primary)', marginBottom: 'var(--cds-spacing-05)', lineHeight: 1.2 }}>
                Get Thermal Certainty Before a Crisis
              </h2>
              <p className="cds--body-02" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-06)', lineHeight: 1.5 }}>
                Stop guessing about your infrastructure health. Our 90-minute thermal health assessment provides a graded scorecard and clear actionable next steps with no obligation and no follow-up pressure.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 'var(--cds-spacing-04)', marginBottom: 'var(--cds-spacing-07)' }}>
                <Button kind="primary" onClick={() => setIsAssessmentModalOpen(true)}>
                  Request Thermal Health Check
                </Button>
                <Button
                  kind="tertiary"
                  onClick={() => setIsChecklistModalOpen(true)}
                >
                  Download Thermal Readiness Checklist
                </Button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--cds-spacing-06)', textAlign: 'left', marginBottom: 'var(--cds-spacing-07)' }}>
                {[
                  { title: 'PKR 75,000 Flat Fee', desc: 'Professional report focused on your specific environment.' },
                  { title: '90-Minute On-Site Review', desc: 'Rapid data collection led by specialized NOC engineers.' },
                  { title: 'Prioritized Action Plan', desc: 'A graded scorecard featuring priority-ranked technical fixes.' },
                  { title: 'Zero Obligation', desc: 'Complete transparency to help you decide your next steps.' },
                ].map((item) => (
                  <div key={item.title}>
                    <p className="cds--heading-01" style={{ color: 'var(--cds-text-primary)', marginBottom: 'var(--cds-spacing-02)', fontWeight: 600 }}>{item.title}</p>
                    <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="cds--helper-text-01" style={{ color: 'var(--cds-text-helper)', lineHeight: 1.4 }}>
                *PKR 75,000 fixed report fee. Excludes site-visit Day Rate and expenses.
              </p>
            </div>
          </Column>
        </Grid>
      </section>

      <Footer />
    </div>
  );
};

export default CoolingAirflow;
