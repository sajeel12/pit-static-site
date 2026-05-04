import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
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
  ComposedModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  TextInput,
  Form,
  FormGroup,
  Tag,
  Tile,
  ClickableTile,
  InlineNotification,
} from '@carbon/react';
import {
  ArrowRight,
  CheckmarkFilled,
  Compare,
  ChevronRight,
  TemperatureHot,
  RainDrop,
  Warning,
  WindGusts as Wind,
  Settings,
  Meter,
  Certificate,
  Dashboard,
  Search,
  Download,
  Email,
  Phone,
  ChevronUp,
} from '@carbon/icons-react';
import {
  AirConditioner,
  Windy,
  ServerRack,
  CloudManagedServices,
  CloudServices,
  DataCenters,
} from '@carbon/pictograms-react';
import HeroCubeAnimation from '../../components/HeroCubeAnimation';
import HeroGradientPlanes from '../../components/HeroGradientPlanes';
import Footer from '../../sections/Footer';

/* ==============================================================================
   DATA & CONSTANTS
   ============================================================================== */

const SECTIONS = [
  'thermal-failure',
  'how-it-works',
  'assessment',
  'hardware',
  'installation',
  'managed',
  'results',
  'pakistan',
  'faq',
  'cta',
] as const;

const NAV_SECTIONS = [
  'assessment',
  'hardware',
  'installation',
  'managed',
  'faq',
  'cta',
] as const;

const sectionLabels: Record<string, string> = {
  'thermal-failure': 'Thermal Risk',
  'how-it-works': 'Services',
  assessment: '01 Assessment',
  hardware: '02 Procurement',
  installation: '03 Deployment',
  managed: '04 Managed Services',
  faq: 'FAQ',
  cta: 'Get Started',
};


const hardwareCards = [
  {
    icon: TemperatureHot,
    pictogram: AirConditioner,
    title: 'Server Room AC Units',
    short: 'Edge sites & small server rooms up to 50kW.',
    category: 'Room Cooling',
    bullets: [
      'Wall-mounted, ceiling-suspended, and portable units',
      'Designed for edge sites and small server rooms up to 50kW heat load',
      'Split-system and ducted configurations available',
    ],
  },
  {
    icon: Wind,
    pictogram: Windy,
    title: 'Precision Cooling (CRAC/CRAH)',
    short: 'Data centres requiring ±1°C control.',
    category: 'Precision Cooling',
    bullets: [
      'In-row and perimeter CRAC/CRAH units with redundancy options',
      '±1°C temperature control for mission-critical environments',
      'N+1 and 2N redundancy configurations available',
    ],
  },
  {
    icon: Settings,
    pictogram: ServerRack,
    title: 'Large-Scale Facility Cooling',
    short: 'Chillers, cooling towers, free cooling.',
    category: 'Facility Cooling',
    bullets: [
      'Centralised chiller plants and cooling towers',
      'Free-cooling and adiabatic cooling for energy efficiency',
      'Custom designs for facilities >500kW cooling load',
    ],
  },
];

const manufacturerPartners = [
  { name: 'Huawei', logo: '/logos/partners/Partner-Huawei-Logo.svg', width: 80 },
  { name: 'Lenovo', logo: '/logos/partners/Partner-Lenovo-Logo.svg', width: 70 },
  { name: 'Dell', logo: '/logos/partners/Partner-Dell-logo.svg', width: 60 },
  { name: 'HP', logo: '/logos/partners/Partner- Hewlett-Packard-Logo.svg', width: 50 },
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
        style={{ color: '#ffffff' }}
      >
        {label}
      </HeaderMenuItem>
    </div>
  );

  const MegaLink = ({ href, title, desc }: { href: string; title: string; desc?: string }) => (
    <a
      href={href}
      style={{
        display: 'block',
        textDecoration: 'none',
        padding: '0.5rem 0',
        transition: 'color 150ms',
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#0f62fe'; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#525252'; }}
    >
      <span className="cds--body-compact-01" style={{ color: 'inherit', fontWeight: 600 }}>
        {title}
      </span>
      {desc && (
        <span className="cds--helper-text-01" style={{ color: '#8d8d8d', display: 'block', marginTop: '0.125rem' }}>
          {desc}
        </span>
      )}
    </a>
  );

  const megaMenuContent: Record<string, React.ReactNode> = {
    Infrastructure: (
      <Grid>
        <Column lg={4} md={4} sm={4} style={{ marginBottom: '1.5rem' }}>
          <p className="cds--label-01" style={{ color: '#161616', textTransform: 'uppercase', letterSpacing: '0.32px', marginBottom: '1rem', fontWeight: 600 }}>
            Core Infrastructure
          </p>
          <MegaLink href="/#/services/server-continuity" title="Server Continuity" desc="Business continuity & disaster recovery" />
          <MegaLink href="/#/services/hardware-support" title="Hardware Support" desc="Save 60% vs vendor contracts" />
          <MegaLink href="/#/services/sla-support" title="24×7 SLA Support" desc="Guaranteed response times" />
        </Column>

        <Column lg={4} md={4} sm={4} style={{ marginBottom: '1.5rem' }}>
          <p className="cds--label-01" style={{ color: '#161616', textTransform: 'uppercase', letterSpacing: '0.32px', marginBottom: '1rem', fontWeight: 600 }}>
            Network Operations
          </p>
          <MegaLink href="/#/services/cross-domain-automation" title="Cross-Domain Automation" desc="Automate alarm correlation" />
          <MegaLink href="/#/services/network-monitoring" title="Network Monitoring" desc="Real-time visibility & optimisation" />
        </Column>

        <Column lg={4} md={4} sm={4} style={{ marginBottom: '1.5rem' }}>
          <p className="cds--label-01" style={{ color: '#161616', textTransform: 'uppercase', letterSpacing: '0.32px', marginBottom: '1rem', fontWeight: 600 }}>
            Data Centre Services
          </p>
          <MegaLink href="/#/infrastructure/data-centre-services/cooling-airflow" title="Cooling & Airflow" desc="Precision cooling & thermal continuity" />
          <MegaLink href="/#/services/power-ups" title="Power & UPS" desc="UPS & power distribution" />
          <MegaLink href="/#/services/rack-cabinets" title="Rack & Cabinet" desc="Server cabinets & enclosures" />
          <MegaLink href="/#/services/environmental-monitoring" title="Environmental Monitoring" desc="Temp, humidity, leak detection" />
        </Column>

        <Column lg={4} md={4} sm={4} style={{ marginBottom: '1.5rem' }}>
          <p className="cds--label-01" style={{ color: '#161616', textTransform: 'uppercase', letterSpacing: '0.32px', marginBottom: '1rem', fontWeight: 600 }}>
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
          <p className="cds--label-01" style={{ color: '#161616', textTransform: 'uppercase', letterSpacing: '0.32px', marginBottom: '1rem', fontWeight: 600 }}>
            Cloud Services
          </p>
          <MegaLink href="/#/services/cloud-strategy" title="Cloud Strategy" desc="Multi-cloud roadmap & governance" />
          <MegaLink href="/#/services/cloud-cost-optimisation" title="Cloud Cost Optimisation" desc="Reduce spend by 30–40%" />
          <MegaLink href="/#/services/cloud-management" title="Cloud Management" desc="Operations & monitoring" />
        </Column>
        <Column lg={4} md={4} sm={4}>
          <p className="cds--label-01" style={{ color: '#161616', textTransform: 'uppercase', letterSpacing: '0.32px', marginBottom: '1rem', fontWeight: 600 }}>
            Delivery
          </p>
          <MegaLink href="/#/services/devops-delivery" title="DevOps Delivery" desc="CI/CD pipelines & automation" />
          <MegaLink href="/#/services/container-platform" title="Container Platform" desc="Kubernetes & orchestration" />
        </Column>
        <Column lg={8} md={8} sm={4}>
          <Tile style={{ background: '#f4f4f4' }}>
            <p className="cds--label-01" style={{ color: '#0f62fe', textTransform: 'uppercase', letterSpacing: '0.32px', marginBottom: '0.5rem' }}>Featured</p>
            <h4 className="cds--heading-02" style={{ color: '#161616', marginBottom: '0.5rem' }}>Cloud Cost Optimisation</h4>
            <p className="cds--body-compact-01" style={{ color: '#525252' }}>Identify waste, right-size resources, and automate savings.</p>
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
              <span key={t} className="cds--tag cds--tag--outline" style={{ fontSize: '0.6875rem', padding: '0 0.5rem', margin: 0, minHeight: '1.25rem' }}>{t}</span>
            ))}
          </div>
          <MegaLink href="/#/services/data-lakes-warehousing" title="Data Lakes & Warehousing" desc="Cloud-based data warehousing and lakehouse architecture" />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginTop: '-0.25rem', marginBottom: '1rem', paddingLeft: '0.25rem' }}>
            {['Snowflake', 'Azure Synapse', 'AWS S3', 'Delta Lake'].map((t) => (
              <span key={t} className="cds--tag cds--tag--outline" style={{ fontSize: '0.6875rem', padding: '0 0.5rem', margin: 0, minHeight: '1.25rem' }}>{t}</span>
            ))}
          </div>
        </Column>

        <Column lg={4} md={4} sm={4} style={{ marginBottom: '1.5rem' }}>
          <MegaLink href="/#/services/geospatial-analytics" title="Geospatial Analytics" desc="Real-time mobile tower status with mapping" />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginTop: '-0.25rem', marginBottom: '1rem', paddingLeft: '0.25rem' }}>
            {['ArcGIS', 'Mapbox', 'Google Maps API', 'PostGIS'].map((t) => (
              <span key={t} className="cds--tag cds--tag--outline" style={{ fontSize: '0.6875rem', padding: '0 0.5rem', margin: 0, minHeight: '1.25rem' }}>{t}</span>
            ))}
          </div>
          <MegaLink href="/#/services/data-federation" title="Data Federation" desc="Cross-functional central portals for secure data access" />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginTop: '-0.25rem', marginBottom: '1rem', paddingLeft: '0.25rem' }}>
            {['Apache Trino', 'Data Virtualization', 'API Gateway', 'GraphQL'].map((t) => (
              <span key={t} className="cds--tag cds--tag--outline" style={{ fontSize: '0.6875rem', padding: '0 0.5rem', margin: 0, minHeight: '1.25rem' }}>{t}</span>
            ))}
          </div>
        </Column>

        <Column lg={4} md={4} sm={4} style={{ marginBottom: '1.5rem' }}>
          <MegaLink href="/#/services/database-optimisation" title="Database Optimisation" desc="DB2 PureScale, SQL Server, Oracle performance tuning" />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginTop: '-0.25rem', marginBottom: '1rem', paddingLeft: '0.25rem' }}>
            {['DB2 PureScale', 'SQL Server', 'Oracle', 'PostgreSQL'].map((t) => (
              <span key={t} className="cds--tag cds--tag--outline" style={{ fontSize: '0.6875rem', padding: '0 0.5rem', margin: 0, minHeight: '1.25rem' }}>{t}</span>
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
                <Search size={20} style={{ fill: '#ffffff' }} />
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
              background: 'rgba(22, 22, 22, 0.55)',
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
              background: '#ffffff',
              borderBottom: '1px solid #e0e0e0',
              boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
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
      background: '#0a1628',
      overflow: 'hidden',
    }}
  >
    {/* WebGL Background Effects */}
    <HeroCubeAnimation />
    <HeroGradientPlanes />

    <Grid style={{ position: 'relative', zIndex: 10 }}>
      <Column lg={12} md={8} sm={4}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: '2rem' }}>
          <ol style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link to="/" style={{ color: '#78a9ff', textDecoration: 'none' }}>Home</Link></li>
            <li aria-hidden="true"><ChevronRight size={12} style={{ color: '#525252' }} /></li>
            <li><Link to="/services" style={{ color: '#78a9ff', textDecoration: 'none' }}>Services</Link></li>
            <li aria-hidden="true"><ChevronRight size={12} style={{ color: '#525252' }} /></li>
            <li><Link to="/services/datacenter2" style={{ color: '#78a9ff', textDecoration: 'none' }}>Data Centre Services</Link></li>
            <li aria-hidden="true"><ChevronRight size={12} style={{ color: '#525252' }} /></li>
            <li><span style={{ color: '#009d9a', fontWeight: 500 }} aria-current="page">Cooling & Airflow</span></li>
          </ol>
        </nav>

        <h1
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.625rem)',
            fontWeight: 300,
            lineHeight: 1.19,
            color: '#ffffff',
            marginBottom: '2rem',
            maxWidth: '48rem',
          }}
        >
          Precision Cooling & Thermal Continuity for Data Centres
        </h1>
        <p
          style={{
            fontSize: '1rem',
            fontWeight: 600,
            lineHeight: 1.5,
            color: '#c6c6c6',
            marginBottom: '2rem',
            maxWidth: '36rem',
          }}
        >
          Maintain optimal temperatures for your critical infrastructure. We handle everything: thermal assessment, hardware supply, installation, and 24/7 monitoring. One partner, one end-to-end uptime SLA.
        </p>
        <p
          style={{
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.375,
            color: '#a8a8a8',
            marginBottom: '2.5rem',
            maxWidth: '36rem',
          }}
        >
          Engineered for Pakistan&apos;s climate reality: 45°C summers, monsoon humidity spikes, dust infiltration, and unstable grid power.
        </p>
        <ButtonSet style={{ gap: '0.75rem', flexWrap: 'wrap' }}>
          <Button
            kind="primary"
            renderIcon={ArrowRight}
            onClick={() => scrollToSection('cta')}
          >
            Request Thermal Health Check
          </Button>
          <Button
            kind="tertiary"
            onClick={() => scrollToSection('hardware')}
            style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.5)' }}
          >
            Explore Hardware Options
          </Button>
        </ButtonSet>
      </Column>
    </Grid>
  </section>
);

const ThermalRiskSection = () => {
  const failureCards = [
    {
      step: '01',
      title: 'Overheat',
      temp: '45°C+',
      desc: 'Server inlet temperatures exceed 27°C. Thermal throttling begins. Performance drops 30–50% before hard shutdown.',
      icon: TemperatureHot,
      iconColor: '#cf0a2c',
      bg: 'linear-gradient(135deg, #fff1f1 0%, #ffffff 100%)',
      borderColor: '#cf0a2c',
    },
    {
      step: '02',
      title: 'Condensation',
      temp: '90% RH',
      desc: 'Humidity exceeds dew point inside cabinets. Corrosion begins on boards and contacts. Latent damage not visible for weeks.',
      icon: RainDrop,
      iconColor: '#009d9a',
      bg: 'linear-gradient(135deg, #e5f6ff 0%, #ffffff 100%)',
      borderColor: '#009d9a',
    },
    {
      step: '03',
      title: 'Downtime',
      temp: 'PKR 2–5M/day',
      desc: 'Cascading thermal shutdowns trigger SLA penalties, client churn, and emergency CapEx.',
      icon: Warning,
      iconColor: '#f1c21b',
      bg: 'linear-gradient(135deg, #fcf4d6 0%, #ffffff 100%)',
      borderColor: '#f1c21b',
    },
  ];

  return (
    <section id="thermal-failure" style={{ padding: '4rem 0', background: 'var(--cds-background, #ffffff)' }}>
      <Grid>
        <Column lg={12} md={8} sm={4}>
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ width: 24, height: 2, background: '#cf0a2c', marginBottom: 8 }} />
            <p className="cds--label-01" style={{ color: '#cf0a2c', textTransform: 'uppercase', letterSpacing: '0.32px' }}>
              Thermal Risk
            </p>
          </div>
          <h2
            className="cds--fluid-heading-05"
            style={{ color: 'var(--cds-text-primary, #161616)', marginBottom: '1rem' }}
          >
            What Happens at 45°C / 90% RH
          </h2>
          <p
            className="cds--body-compact-01"
            style={{ color: 'var(--cds-text-secondary, #525252)', marginBottom: '2.5rem', maxWidth: '48rem' }}
          >
            Pakistan&apos;s summer peaks push standard cooling beyond its design limits. When ambient exceeds 35°C and humidity crosses 80%, three failure modes cascade — and they cascade fast.
          </p>
        </Column>
      </Grid>

      {/* Failure cascade cards */}
      <Grid>
        {failureCards.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Column lg={4} md={4} sm={4} key={item.step} style={{ marginBottom: '1.5rem' }}>
              <div style={{ position: 'relative', height: '100%' }}>
                <Tile
                  style={{
                    height: '100%',
                    padding: '1.5rem',
                    background: item.bg,
                    borderTop: `4px solid ${item.borderColor}`,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        background: item.borderColor,
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 600,
                        fontSize: '1rem',
                      }}
                    >
                      {item.step}
                    </div>
                    <Icon size={28} style={{ color: item.iconColor }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <h3 className="cds--heading-02" style={{ color: 'var(--cds-text-primary, #161616)' }}>
                      {item.title}
                    </h3>
                    <span
                      className="cds--label-01"
                      style={{
                        color: item.borderColor,
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.32px',
                        fontSize: '0.625rem',
                        border: `1px solid ${item.borderColor}`,
                        padding: '2px 6px',
                      }}
                    >
                      {item.temp}
                    </span>
                  </div>
                  <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary, #525252)' }}>
                    {item.desc}
                  </p>
                </Tile>

                {/* Cascade arrow — desktop only, between cards */}
                {idx < 2 && (
                  <div
                    className="cascade-arrow"
                    style={{
                      display: 'none',
                      position: 'absolute',
                      top: '50%',
                      right: '-1.5rem',
                      transform: 'translateY(-50%)',
                      zIndex: 10,
                    }}
                  >
                    <ArrowRight size={20} style={{ color: '#c6c6c6' }} />
                  </div>
                )}
              </div>
            </Column>
          );
        })}
      </Grid>


    </section>
  );
};

const TrustBarSection = () => (
  <section style={{ padding: '3rem 0', background: '#f4f4f4', borderTop: '1px solid #e0e0e0', borderBottom: '1px solid #e0e0e0' }}>
    <Grid>
      <Column lg={16} md={8} sm={4}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <p className="cds--label-01" style={{ color: '#8d8d8d', textTransform: 'uppercase', letterSpacing: '0.32px', marginBottom: '0.5rem' }}>
              Trusted Partners
            </p>
            <p className="cds--body-compact-01" style={{ color: '#161616', fontWeight: 600 }}>
              Tier-1 manufacturer relationships. Single-point accountability.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
            {manufacturerPartners.map((partner) => (
              <img
                key={partner.name}
                src={partner.logo}
                alt={partner.name}
                style={{ width: partner.width, height: 'auto', opacity: 0.7, transition: 'opacity 200ms' }}
                onMouseEnter={(e) => { (e.target as HTMLImageElement).style.opacity = '1'; }}
                onMouseLeave={(e) => { (e.target as HTMLImageElement).style.opacity = '0.7'; }}
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
    <section style={{ padding: '3rem 0', background: '#ffffff', borderBottom: '1px solid #e0e0e0' }}>
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
            <div style={{ width: 24, height: 2, background: '#0f62fe', margin: '0 auto 8px' }} />
            <p className="cds--label-01" style={{ color: '#0f62fe', textTransform: 'uppercase', letterSpacing: '0.32px', marginBottom: '0.5rem' }}>
              Services
            </p>
            <h2 className="cds--fluid-heading-05" style={{ color: '#161616' }}>
              From Cooling Assessment to 24/7 Accountability
            </h2>
          </div>
          <Grid>
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <Column lg={4} md={4} sm={4} key={p.num} style={{ marginBottom: '1rem' }}>
                  <ClickableTile
                    onClick={() => scrollToSection(p.sectionId)}
                    style={{ height: '100%', padding: '1.5rem', border: '1px solid #e0e0e0', transition: 'background 150ms' }}
                    onMouseEnter={(e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.background = '#f4f4f4'; }}
                    onMouseLeave={(e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.background = '#ffffff'; }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <div style={{
                        width: 40,
                        height: 40,
                        background: '#0f62fe',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        flexShrink: 0,
                      }}>
                        {p.num}
                      </div>
                      <Icon size={24} style={{ color: '#0f62fe' }} />
                    </div>
                    <h3 className="cds--heading-02" style={{ color: '#161616', marginBottom: '0.5rem' }}>
                      {p.title}
                    </h3>
                    <p className="cds--body-compact-01" style={{ color: '#525252', marginBottom: '1rem' }}>
                      {p.hook}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f62fe' }}>
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
  return (
    <section style={{ padding: 'var(--cds-spacing-10) 0', background: 'var(--cds-background)', borderTop: '1px solid var(--cds-border-subtle)' }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid var(--cds-border-subtle)' }}>
            <Tile style={{ gridColumn: 'span 2', gridRow: 'span 2', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', maxHeight: 400 }}>
              <img src="/3D images/Cooling and Airflow/Cooling - Assesment.png" alt="Pakistani field engineer in Perception-IT polo, holding thermal camera and tablet with heat-map" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
              <div style={{ position: 'absolute', bottom: 'var(--cds-spacing-06)', right: 'var(--cds-spacing-06)', maxWidth: 480, background: 'rgba(22, 22, 22, 0.88)', padding: 'var(--cds-spacing-06)', borderLeft: '3px solid var(--cds-interactive)' }}>
                <p className="cds--label-01" style={{ color: 'var(--cds-text-inverse)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)' }}>01 Assessment</p>
                <h3 className="cds--heading-02" style={{ color: 'var(--cds-text-inverse)', marginBottom: 'var(--cds-spacing-03)', lineHeight: 1.25 }}>Two Assessment Options</h3>
                <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-inverse)', lineHeight: 1.5, opacity: 0.85, marginBottom: 'var(--cds-spacing-02)' }}>Rapid health check for routine confidence.</p>
                <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-inverse)', lineHeight: 1.5, opacity: 0.85 }}>Engineering-grade analysis before major spend.</p>
              </div>
            </Tile>

            <Tile style={{ gridColumn: '3 / span 1', gridRow: 'span 2', padding: 'var(--cds-spacing-06)', display: 'flex', flexDirection: 'column', borderLeft: '1px solid var(--cds-border-subtle)' }}>
              <DataCenters style={{ width: 48, height: 48, fill: 'var(--cds-interactive)', marginBottom: 'var(--cds-spacing-05)' }} />
              <div style={{ marginTop: 'auto' }}>
                <p className="cds--label-01" style={{ color: 'var(--cds-text-secondary)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)' }}>Entry</p>
                <h3 className="cds--heading-02" style={{ color: 'var(--cds-text-primary)', marginBottom: 'var(--cds-spacing-03)' }}>Rapid Thermal Health Check</h3>
                <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-05)', lineHeight: 1.5 }}>90-minute on-site audit with IR mapping and risk scorecard.</p>
                <a href="#cta" className="cds--body-compact-01" style={{ color: 'var(--cds-interactive)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 'var(--cds-spacing-03)' }}>Book Thermal Health Check <ArrowRight size={16} /></a>
              </div>
            </Tile>

            <Tile style={{ gridColumn: '4 / span 1', gridRow: 'span 2', padding: 'var(--cds-spacing-06)', display: 'flex', flexDirection: 'column', borderLeft: '1px solid var(--cds-border-subtle)' }}>
              <ServerRack style={{ width: 48, height: 48, fill: 'var(--cds-interactive)', marginBottom: 'var(--cds-spacing-05)' }} />
              <div style={{ marginTop: 'auto' }}>
                <p className="cds--label-01" style={{ color: 'var(--cds-text-secondary)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)' }}>Engineering</p>
                <h3 className="cds--heading-02" style={{ color: 'var(--cds-text-primary)', marginBottom: 'var(--cds-spacing-03)' }}>Precision Thermal Engineering</h3>
                <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-05)', lineHeight: 1.5 }}>CFD modelling, capacity calculations, and engineering sign-off.</p>
                <a href="mailto:contact@perception-it.com?subject=Precision%20Thermal%20Engineering%20Proposal%20Request" className="cds--body-compact-01" style={{ color: 'var(--cds-interactive)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 'var(--cds-spacing-03)' }}>Request CFD Proposal <ArrowRight size={16} /></a>
              </div>
            </Tile>
          </div>
        </Column>
      </Grid>

      <Grid style={{ marginTop: 'var(--cds-spacing-07)' }}>
        <Column lg={16} md={8} sm={4}>
          <Accordion>
            <AccordionItem title="Detailed Comparison of the Assessments" className="assessment-comparison-item" open={isComparisonOpen} onHeadingClick={() => setIsComparisonOpen(!isComparisonOpen)}>
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
                <Column lg={16} md={8} sm={4}>
                  <button type="button" onClick={() => setIsComparisonOpen(false)} className="cds--body-compact-01" style={{ color: 'var(--cds-interactive)', background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 'var(--cds-spacing-03)', padding: 'var(--cds-spacing-03) 0', width: '100%', justifyContent: 'flex-end' }}>
                    Close comparison <ChevronUp size={16} />
                  </button>
                </Column>
              </Grid>
            </AccordionItem>
          </Accordion>
        </Column>
      </Grid>

      <Grid style={{ marginTop: 'var(--cds-spacing-07)' }}>
        <Column lg={16} md={8} sm={4}>
          <Tile style={{ padding: 'var(--cds-spacing-07)', background: 'linear-gradient(135deg, #0a1628 0%, #1a2b4a 100%)', borderLeft: '4px solid var(--cds-interactive)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--cds-spacing-06)' }}>
              <div style={{ flex: '1 1 400px' }}>
                <h3 className="cds--heading-02" style={{ color: '#ffffff', marginBottom: 'var(--cds-spacing-03)' }}>Not sure which assessment fits your site?</h3>
                <p className="cds--body-compact-01" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>Our engineers can recommend the right option based on your cooling load, rack density, and compliance requirements.</p>
              </div>
              <Button kind="primary" href="mailto:contact@perception-it.com?subject=Assessment%20Consultation%20Request">Speak to an Engineer</Button>
            </div>
          </Tile>
        </Column>
      </Grid>

    </section>
  );
};

const ProcurementInsightsGrid = () => {
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [roomCoolingHover, setRoomCoolingHover] = useState(false);
  return (
    <section style={{ padding: 'var(--cds-spacing-10) 0', background: 'var(--cds-background)', borderTop: '1px solid var(--cds-border-subtle)' }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid var(--cds-border-subtle)' }}>
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
                gridRow: 'span 1',
                padding: 'var(--cds-spacing-06)',
                display: 'flex',
                flexDirection: 'column',
                borderLeft: '1px solid var(--cds-border-subtle)',
                background: roomCoolingHover ? 'var(--cds-interactive)' : 'var(--cds-layer)',
                transition: 'background 0.25s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setRoomCoolingHover(true)}
              onMouseLeave={() => setRoomCoolingHover(false)}
            >
              <AirConditioner style={{ width: 48, height: 48, fill: roomCoolingHover ? '#ffffff' : 'var(--cds-interactive)', marginBottom: 'var(--cds-spacing-05)', transition: 'fill 0.25s ease' }} />
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

            <Tile style={{ gridColumn: '4 / span 1', gridRow: 'span 2', padding: 'var(--cds-spacing-06)', display: 'flex', flexDirection: 'column', borderLeft: '1px solid var(--cds-border-subtle)' }}>
              <Windy style={{ width: 48, height: 48, fill: 'var(--cds-interactive)', marginBottom: 'var(--cds-spacing-05)' }} />
              <div style={{ marginTop: 'auto' }}>
                <p className="cds--label-01" style={{ color: 'var(--cds-text-secondary)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)' }}>Precision Cooling</p>
                <h3 className="cds--heading-02" style={{ color: 'var(--cds-text-primary)', marginBottom: 'var(--cds-spacing-03)' }}>Precision Cooling (CRAC/CRAH)</h3>
                <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-05)', lineHeight: 1.5 }}>Data centres requiring ±1°C control.</p>
              </div>
            </Tile>

            <Tile style={{ gridColumn: '1 / span 2', gridRow: '3 / span 2', padding: 0, display: 'flex', borderTop: '1px solid var(--cds-border-subtle)', overflow: 'hidden', position: 'relative' }}>
              <div style={{ width: '50%', minWidth: 200, background: 'linear-gradient(135deg, #0a1628 0%, #1a2b4a 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: 'var(--cds-spacing-05)' }}>
                <span className="cds--label-01" style={{ position: 'absolute', top: 'var(--cds-spacing-03)', left: 'var(--cds-spacing-03)', color: '#ffffff', background: 'var(--cds-interactive)', padding: '2px 8px', textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px' }}>Featured Product</span>
                <img src="/3D images/Cooling and Airflow/FusionCol8000-E.png" alt="FusionCol8000-E cooling unit" style={{ maxWidth: '90%', maxHeight: 180, objectFit: 'contain' }} loading="lazy" />
              </div>
              <div style={{ width: '50%', minWidth: 200, padding: 'var(--cds-spacing-06)', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderLeft: '1px solid var(--cds-border-subtle)' }}>
                <h3 className="cds--heading-02" style={{ color: 'var(--cds-text-primary)', marginBottom: 'var(--cds-spacing-02)' }}>FusionCol8000-E</h3>
                <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.5, marginBottom: 'var(--cds-spacing-02)' }}>Precision Cooling / CRAC</p>
                <p className="cds--label-01" style={{ color: 'var(--cds-interactive)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-05)', fontSize: '0.7rem' }}>Data Centres up to 500kW</p>
                <div style={{ display: 'flex', gap: 'var(--cds-spacing-03)' }}>
                  <Button kind="primary" size="sm" style={{ flex: 1 }}>Enquire</Button>
                  <Button kind="tertiary" size="sm" style={{ flex: 1 }}>Datasheet</Button>
                </div>
              </div>
            </Tile>

            <Tile style={{ gridColumn: '3 / span 1', gridRow: '2 / span 1', padding: 'var(--cds-spacing-06)', display: 'flex', flexDirection: 'column', borderLeft: '1px solid var(--cds-border-subtle)', borderTop: '1px solid var(--cds-border-subtle)' }}>
              <ServerRack style={{ width: 48, height: 48, fill: 'var(--cds-interactive)', marginBottom: 'var(--cds-spacing-05)' }} />
              <div style={{ marginTop: 'auto' }}>
                <p className="cds--label-01" style={{ color: 'var(--cds-text-secondary)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)' }}>Facility Cooling</p>
                <h3 className="cds--heading-02" style={{ color: 'var(--cds-text-primary)', marginBottom: 'var(--cds-spacing-03)' }}>Large-Scale Facility Cooling</h3>
                <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary)', marginBottom: 'var(--cds-spacing-05)', lineHeight: 1.5 }}>Chillers, cooling towers, free cooling.</p>
              </div>
            </Tile>
          </div>
        </Column>
      </Grid>

      <Grid style={{ marginTop: 'var(--cds-spacing-07)' }}>
        <Column lg={16} md={8} sm={4}>
          <Accordion>
            <AccordionItem title="Detailed Comparison of Cooling Categories" className="assessment-comparison-item" open={isComparisonOpen} onHeadingClick={() => setIsComparisonOpen(!isComparisonOpen)}>
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
                <Column lg={8} md={4} sm={4} style={{ marginBottom: 'var(--cds-spacing-03)' }}>
                  <InlineNotification kind="info" title="Capacity Planning" subtitle="All procurement includes a free site survey to confirm cooling load, airflow path, and electrical capacity before order placement." hideCloseButton lowContrast />
                </Column>
                <Column lg={8} md={4} sm={4} style={{ marginBottom: 'var(--cds-spacing-03)' }}>
                  <InlineNotification kind="warning" title="What's Not Included" subtitle="Procurement covers hardware supply and delivery only. Excludes installation, piping, ducting, commissioning, and ongoing maintenance unless specified in the order." hideCloseButton lowContrast />
                </Column>
                <Column lg={16} md={8} sm={4}>
                  <button type="button" onClick={() => setIsComparisonOpen(false)} className="cds--body-compact-01" style={{ color: 'var(--cds-interactive)', background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 'var(--cds-spacing-03)', padding: 'var(--cds-spacing-03) 0', width: '100%', justifyContent: 'flex-end' }}>
                    Close comparison <ChevronUp size={16} />
                  </button>
                </Column>
              </Grid>
            </AccordionItem>
          </Accordion>
        </Column>
      </Grid>

      <Grid style={{ marginTop: 'var(--cds-spacing-10)' }}>
        <Column lg={16} md={8} sm={4} style={{ marginBottom: 'var(--cds-spacing-06)' }}>
          <p className="cds--label-01" style={{ color: 'var(--cds-text-helper)', textTransform: 'uppercase', marginBottom: 'var(--cds-spacing-03)' }}>Certified Supply Chain</p>
          <h2 className="cds--fluid-heading-05" style={{ color: 'var(--cds-text-primary)' }}>Manufacturer Partnerships</h2>
        </Column>

        <Column lg={16} md={8} sm={4}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid var(--cds-border-subtle)', marginBottom: 'var(--cds-spacing-07)' }}>
            {['Huawei', 'Lenovo', 'Dell', 'HP'].map((brand, i) => (
              <Tile key={brand} style={{ padding: 'var(--cds-spacing-07)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: i > 0 ? '1px solid var(--cds-border-subtle)' : 'none', background: 'var(--cds-layer)' }}>
                <p className="cds--heading-02" style={{ color: 'var(--cds-text-secondary)', fontWeight: 600, letterSpacing: '0.5px' }}>{brand}</p>
              </Tile>
            ))}
          </div>
        </Column>

        <Column lg={10} md={5} sm={4} style={{ marginBottom: 'var(--cds-spacing-06)' }}>
          <p className="cds--body-01" style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.6, marginBottom: 'var(--cds-spacing-05)' }}>
            Manufacturer warranty administered through Perception-IT — we handle claims, diagnostics, and replacement logistics. You deal with one partner, not the manufacturer. Extended warranty and spare-part bundling available via ServerLife Extend™.
          </p>
        </Column>

        <Column lg={16} md={8} sm={4}>
          <Tile style={{ padding: 'var(--cds-spacing-07)', background: 'var(--cds-layer-01)', borderLeft: '4px solid var(--cds-interactive)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--cds-spacing-06)' }}>
              <div style={{ flex: '1 1 400px' }}>
                <h3 className="cds--heading-03" style={{ color: 'var(--cds-text-primary)', marginBottom: 'var(--cds-spacing-03)' }}>Need hardware validated for Pakistan?</h3>
                <p className="cds--body-01" style={{ color: 'var(--cds-text-secondary)', lineHeight: 1.6 }}>Speak to a procurement engineer about sizing, lead times, and monsoon-hardened specifications.</p>
              </div>
              <Button kind="primary" href="mailto:contact@perception-it.com?subject=Hardware%20Consultation%20Request">Request Hardware Consultation</Button>
            </div>
          </Tile>
        </Column>
      </Grid>
    </section>
  );
};

const ProcurementSection = () => {
  const [expanded, setExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/3D images/Cooling and Airflow Data sheet /FusionCol8000-E260&400+Datasheet.pdf';
    link.download = 'FusionCol8000-E_Datasheet.pdf';
    link.click();
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      handleDownload();
      setModalOpen(false);
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '' });
    }, 800);
  };

  return (
    <section id="hardware" style={{ padding: '4rem 0', background: '#f4f4f4' }}>
      <Grid>
        <Column lg={16} md={8} sm={4}>
          {/* ============================================================
              SCAN LAYER — Always visible
              ============================================================ */}
          <Grid>
            {/* Text — left side */}
            <Column lg={8} md={4} sm={4}>
              {/* Section label */}
              <div style={{ borderLeft: '2px solid #009d9a', paddingLeft: '0.75rem', marginBottom: '0.75rem' }}>
                <p className="cds--label-01" style={{ color: '#009d9a', textTransform: 'uppercase', letterSpacing: '0.32px', fontWeight: 600 }}>
                  02 Procurement
                </p>
              </div>
              <p className="cds--body-compact-01" style={{ color: '#525252', marginBottom: '1rem' }}>
                Right-sized hardware, certified for Pakistan
              </p>

              <h2 className="cds--fluid-heading-05" style={{ color: '#161616', marginBottom: '1rem' }}>
                Cooling Hardware Procurement
              </h2>
              <p className="cds--body-compact-01" style={{ color: '#161616', fontWeight: 600, marginBottom: '0.5rem' }}>
                Thermal continuity depends on hardware that survives Pakistan&apos;s reality.
              </p>
              <p className="cds--body-compact-01" style={{ color: '#525252', marginBottom: '1.5rem' }}>
                We source cooling equipment from tier-1 manufacturers and validate every unit for 45°C ambient, monsoon humidity, and dust infiltration before it ships. From procurement to deployment, one partner handles the full stack. No guesswork, no incompatible hardware, full accountability.
              </p>

              {/* Hardware categories list */}
              <div style={{ borderTop: '1px solid #e0e0e0' }}>
                <p className="cds--label-01" style={{ color: '#8d8d8d', textTransform: 'uppercase', letterSpacing: '0.32px', paddingTop: '1rem', marginBottom: '0.5rem' }}>
                  Hardware categories
                </p>
                {[
                  {
                    title: 'Server Room AC Units',
                    desc: 'Wall-mounted, ceiling, and portable units for edge sites up to 50kW.',
                  },
                  {
                    title: 'In-Row & CRAC Precision Cooling',
                    desc: 'Close-coupled cooling from 5kW to 150kW with N+1 redundancy.',
                  },
                  {
                    title: 'Large-Scale Facility Cooling',
                    desc: 'Centralised chilled water and hybrid systems for facilities above 500kW.',
                  },
                ].map((item, idx, arr) => (
                  <div
                    key={item.title}
                    style={{
                      padding: '1rem 0',
                      borderBottom: idx < arr.length - 1 ? '1px solid #e0e0e0' : 'none',
                    }}
                  >
                    <p className="cds--heading-01" style={{ color: '#161616', fontWeight: 600, marginBottom: '0.25rem' }}>
                      {item.title}
                    </p>
                    <p className="cds--body-compact-01" style={{ color: '#525252' }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Manufacturer Partners — always visible trust builder */}
              <Tile style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                <Grid>
                  <Column lg={8} md={4} sm={4} style={{ marginBottom: '1rem' }}>
                    <p className="cds--body-compact-01" style={{ color: '#525252' }}>
                      Warranty administered through Perception-IT. One partner for claims, diagnostics, and replacement — not the manufacturer.
                    </p>
                  </Column>
                  <Column lg={8} md={4} sm={4}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'flex-start' }}>
                      {manufacturerPartners.map((partner) => (
                        <img
                          key={partner.name}
                          src={partner.logo}
                          alt={partner.name}
                          style={{ width: partner.width, height: 'auto', opacity: 0.7, transition: 'opacity 200ms' }}
                          onMouseEnter={(e) => { (e.target as HTMLImageElement).style.opacity = '1'; }}
                          onMouseLeave={(e) => { (e.target as HTMLImageElement).style.opacity = '0.7'; }}
                        />
                      ))}
                    </div>
                  </Column>
                </Grid>
              </Tile>

              {/* CTA + expand trigger */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                <Button kind="primary" renderIcon={ArrowRight} href="#cta">
                  Request Hardware Consultation
                </Button>
                {!expanded && (
                  <button
                    onClick={() => setExpanded(true)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#0f62fe',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: 400,
                      lineHeight: 1.28572,
                      letterSpacing: '0.16px',
                      padding: 0,
                    }}
                  >
                    <Settings size={20} />
                    View hardware details
                    <ChevronRight size={16} />
                  </button>
                )}
              </div>
            </Column>

            {/* Image + Featured Product — right side */}
            <Column lg={8} md={4} sm={4} style={{ marginBottom: 'var(--cds-spacing-06, 1.5rem)' }}>
              <div style={{ width: '100%', height: 360, background: '#f4f4f4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src="/3D images/Cooling and Airflow/perceptionit_cooling_ibm_style_v2.png"
                  alt="Precision cooling hardware showcase — CRAC and ACU units in a data centre environment with hot and cold aisle containment"
                  style={{ maxWidth: '100%', maxHeight: 360, objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>

              {/* Featured Product */}
              <Tile style={{ marginTop: '1.5rem', borderLeft: '4px solid #cf0a2c' }}>
                <p className="cds--label-01" style={{ color: '#cf0a2c', textTransform: 'uppercase', letterSpacing: '0.32px', marginBottom: '0.75rem' }}>
                  Featured Product
                </p>
                <h3 className="cds--heading-02" style={{ color: '#161616', marginBottom: '1rem' }}>
                  FusionCol8000-E
                </h3>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <Tag type="blue">TYPE</Tag>
                  <span className="cds--body-compact-01" style={{ color: '#525252' }}>Precision Cooling / CRAC</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <Tag type="blue">FOR</Tag>
                  <span className="cds--body-compact-01" style={{ color: '#525252' }}>Data Centres up to 500kW</span>
                </div>
                <ButtonSet>
                  <Button kind="primary" renderIcon={Email} href="mailto:contact@perception-it.com?subject=FusionCol8000-E%20Enquiry">
                    Enquire
                  </Button>
                  <Button kind="secondary" renderIcon={Download} onClick={() => setModalOpen(true)}>
                    Download Datasheet
                  </Button>
                </ButtonSet>
              </Tile>
            </Column>
          </Grid>

          {/* ============================================================
              DETAIL LAYER — Expandable
              ============================================================ */}
          <div
            style={{
              maxHeight: expanded ? 4000 : 0,
              overflow: 'hidden',
              opacity: expanded ? 1 : 0,
              transition: 'max-height 400ms cubic-bezier(0.25, 0.1, 0.25, 1), opacity 300ms ease',
              marginTop: expanded ? '2rem' : 0,
            }}
          >
            {/* Close link */}
            <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
              <button
                onClick={() => setExpanded(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#0f62fe',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  lineHeight: 1.28572,
                  letterSpacing: '0.16px',
                  padding: 0,
                }}
              >
                <ChevronRight size={16} style={{ transform: 'rotate(180deg)' }} />
                Collapse details
              </button>
            </div>

            {/* Hardware category cards */}
            <Grid style={{ marginBottom: '2rem' }}>
              {hardwareCards.map((card) => {
                const Pictogram = card.pictogram;
                return (
                  <Column lg={4} md={4} sm={4} key={card.title} style={{ marginBottom: '1rem' }}>
                    <Tile style={{ height: '100%', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                      {/* Top accent */}
                      <div style={{ height: 3, background: 'linear-gradient(135deg, #002d9c, #4589ff)', marginBottom: '1.25rem' }} />

                      {/* Category label */}
                      <span className="cds--label-01" style={{
                        color: '#525252',
                        textTransform: 'uppercase',
                        letterSpacing: '0.32px',
                        fontSize: '0.625rem',
                        fontWeight: 600,
                        border: '1px solid #c6c6c6',
                        padding: '3px 8px',
                        display: 'inline-block',
                        marginBottom: '0.75rem',
                      }}>
                        {card.category}
                      </span>

                      {/* Title + short */}
                      <h3 className="cds--heading-02" style={{ color: '#161616', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                        {card.title}
                      </h3>
                      <p className="cds--body-compact-01" style={{ color: '#525252', marginBottom: '1.25rem' }}>
                        {card.short}
                      </p>

                      {/* Pictogram */}
                      <Pictogram style={{ width: 64, height: 64, marginBottom: '1.25rem', fill: '#0f62fe' }} />

                      {/* Divider */}
                      <div style={{ height: 1, background: '#e0e0e0', marginBottom: '1.25rem' }} />

                      {/* Bullet list */}
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                        {card.bullets.map((bullet) => (
                          <li key={bullet} className="cds--body-compact-01" style={{ color: '#525252', marginBottom: '0.75rem', display: 'flex', gap: '0.75rem', lineHeight: 1.5 }}>
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0f62fe', marginTop: 6, flexShrink: 0 }} />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </Tile>
                  </Column>
                );
              })}
            </Grid>

            {/* Exclusions */}
            <Tile style={{ marginBottom: '2rem', background: '#ffffff', borderLeft: '4px solid #009d9a' }}>
              <p className="cds--body-compact-01" style={{ color: '#525252' }}>
                Procurement covers hardware supply and manufacturer warranty administration only; thermal capacity planning, monsoon/dust hardening, commissioning validation, uptime SLAs, and 24/7 monitoring are scoped separately under Assessment, Deployment, and Managed Services.
              </p>
            </Tile>

            {/* Manufacturer Partners */}
            <Tile style={{ marginBottom: '2rem' }}>
              <Grid>
                <Column lg={8} md={4} sm={4} style={{ marginBottom: '1rem' }}>
                  <p className="cds--body-compact-01" style={{ color: '#525252' }}>
                    Warranty administered through Perception-IT. One partner for claims, diagnostics, and replacement — not the manufacturer.
                  </p>
                </Column>
                <Column lg={8} md={4} sm={4}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'flex-start' }}>
                    {manufacturerPartners.map((partner) => (
                      <img
                        key={partner.name}
                        src={partner.logo}
                        alt={partner.name}
                        style={{ width: partner.width, height: 'auto', opacity: 0.7, transition: 'opacity 200ms' }}
                        onMouseEnter={(e) => { (e.target as HTMLImageElement).style.opacity = '1'; }}
                        onMouseLeave={(e) => { (e.target as HTMLImageElement).style.opacity = '0.7'; }}
                      />
                    ))}
                  </div>
                </Column>
              </Grid>
            </Tile>

          </div>
        </Column>
      </Grid>

      {/* Email-Gated Datasheet Modal */}
      <ComposedModal
        open={modalOpen}
        onClose={() => { setModalOpen(false); setSubmitted(false); }}
        size="sm"
        preventCloseOnClickOutside={false}
      >
        <ModalHeader
          title="Download FusionCol8000-E Datasheet"
          label="Datasheet Request"
        />
        <ModalBody hasForm>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <CheckmarkFilled size={48} style={{ color: '#24a148', marginBottom: '1rem' }} />
              <h3 className="cds--heading-02" style={{ color: '#161616', marginBottom: '0.5rem' }}>
                Thank you!
              </h3>
              <p className="cds--body-compact-01" style={{ color: '#525252' }}>
                Your download is starting automatically.
              </p>
            </div>
          ) : (
            <Form onSubmit={handleSubmit}>
              <p className="cds--body-compact-01" style={{ color: '#525252', marginBottom: '1.5rem' }}>
                Enter your details below and we&apos;ll send the datasheet to your inbox.
              </p>
              <FormGroup legendText="">
                <TextInput
                  id="ds-name"
                  labelText="Name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <div style={{ marginTop: '1rem' }}>
                  <TextInput
                    id="ds-email"
                    labelText="Email"
                    placeholder="you@company.com"
                    type="email"
                    value={formData.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <TextInput
                    id="ds-company"
                    labelText="Company"
                    placeholder="Your organisation"
                    value={formData.company}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, company: e.target.value })}
                    required
                  />
                </div>
              </FormGroup>
            </Form>
          )}
        </ModalBody>
        {!submitted && (
          <ModalFooter
            primaryButtonText="Download Datasheet"
            secondaryButtonText="Cancel"
            onRequestSubmit={handleSubmit}
            onRequestClose={() => setModalOpen(false)}
          >
            {null}
          </ModalFooter>
        )}
      </ComposedModal>
    </section>
  );
};
const DeploymentSection = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const deployTabs = [
    {
      step: '01',
      icon: Settings,
      title: 'Mechanical Installation',
      items: [
        'Positioning and levelling',
        'Refrigerant line brazing and pressure testing',
        'Condensate drain routing',
        'Electrical connection and breaker sizing',
      ],
      image: {
        src: '/3D images/Cooling and Airflow/perceptionit_mechanical_final.webp',
        alt: 'Mechanical installation of precision cooling unit showing positioning, refrigerant line brazing, condensate drain routing, and electrical connections',
      },
    },
    {
      step: '02',
      icon: Meter,
      title: 'Thermal Validation',
      items: [
        'Infrared thermal mapping of rack inlets',
        'CFD airflow simulation for hotspot elimination',
        'Load-bank testing at design capacity',
        'Failover simulation: primary → secondary → portable',
      ],
      image: {
        src: '/3D images/Cooling and Airflow/perceptionit_thermal_validation_final.webp',
        alt: 'Thermal validation process showing infrared thermal mapping, CFD airflow simulation, load-bank testing, and failover simulation for precision cooling systems',
      },
    },
    {
      step: '03',
      icon: Certificate,
      title: 'Commissioning Sign-Off',
      items: [
        'As-built documentation',
        'Cooling capacity test report',
        'Setpoint calibration (temperature & humidity)',
        'Operator training handover',
      ],
      image: {
        src: '/3D images/Cooling and Airflow/perceptionit_commissioning_people_final.webp',
        alt: 'Commissioning sign-off process showing as-built documentation, cooling capacity test reports, setpoint calibration, and operator training handover',
      },
    },
    {
      step: '04',
      icon: Dashboard,
      title: 'Monitoring Integration',
      items: [
        'Sensor placement (rack inlet, return air, under-floor)',
        'DCIM integration (Huawei iManager, Schneider StruxureWare)',
        'Alert threshold configuration',
        'NOC dashboard onboarding',
      ],
      image: {
        src: '/3D images/Cooling and Airflow/perceptionit_monitoring_integration.png',
        alt: 'Monitoring integration showing sensor placement, DCIM dashboard integration, alert threshold configuration, and NOC onboarding',
      },
    },
  ];

  const activeTabData = deployTabs[activeTab];

  const failureModes = [
    { num: '01', text: 'Incorrect refrigerant charge' },
    { num: '02', text: 'Undersized condensate drains' },
    { num: '03', text: 'Missing thermal validation' },
  ];

  return (
    <section id="installation" style={{ padding: '4rem 0', background: '#ffffff' }}>
      <Grid>
        <Column lg={16} md={8} sm={4}>
          {/* ============================================================
              SCAN LAYER — Always visible
              ============================================================ */}
          <Grid>
            {/* Text — left side */}
            <Column lg={8} md={4} sm={4}>
              <div style={{ borderLeft: '2px solid #009d9a', paddingLeft: '0.75rem', marginBottom: '0.75rem' }}>
                <p className="cds--label-01" style={{ color: '#009d9a', textTransform: 'uppercase', letterSpacing: '0.32px', fontWeight: 600 }}>
                  03 Deployment
                </p>
              </div>
              <p className="cds--body-compact-01" style={{ color: '#525252', marginBottom: '1rem' }}>
                Install, validate, commission, monitor
              </p>

              <h2 className="cds--fluid-heading-05" style={{ color: '#161616', marginBottom: '1rem' }}>
                Deployment & Commissioning
              </h2>
              <p className="cds--body-compact-01" style={{ color: '#161616', fontWeight: 600, marginBottom: '0.5rem' }}>
                Thermal continuity is won or lost at installation.
              </p>
              <p className="cds--body-compact-01" style={{ color: '#525252', marginBottom: '1.5rem' }}>
                Core deployment covers mechanical installation and power-on verification. Thermal validation, airflow mapping, failover testing, and monitoring integration are scoped to your contract — and validated for Pakistan&apos;s grid instability, dust loads, and monsoon humidity before handover.
              </p>

              {/* 4 step cards */}
              <Grid style={{ marginBottom: '1.5rem' }}>
                {deployTabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <Column lg={8} md={4} sm={2} key={tab.step} style={{ marginBottom: '0.5rem' }}>
                      <Tile style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ width: 40, height: 40, background: '#161616', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '0.875rem', flexShrink: 0 }}>
                          {tab.step}
                        </div>
                        <Icon size={20} style={{ color: '#525252', flexShrink: 0 }} />
                        <span className="cds--body-compact-01" style={{ color: '#161616', fontWeight: 500 }}>
                          {tab.title}
                        </span>
                      </Tile>
                    </Column>
                  );
                })}
              </Grid>

              {/* CTA + expand trigger */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
                <Button kind="primary" renderIcon={ArrowRight} href="#cta">
                  Discuss Deployment Timeline
                </Button>
                {!expanded && (
                  <button
                    onClick={() => setExpanded(true)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#0f62fe',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: 400,
                      lineHeight: 1.28572,
                      letterSpacing: '0.16px',
                      padding: 0,
                    }}
                  >
                    <Settings size={20} />
                    View full deployment process
                    <ChevronRight size={16} />
                  </button>
                )}
              </div>
            </Column>

            {/* Image — right side */}
            <Column lg={8} md={4} sm={4} style={{ marginBottom: 'var(--cds-spacing-06, 1.5rem)' }}>
              <div style={{ width: '100%', height: 360, background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src="/3D images/Cooling and Airflow/perceptionit_mechanical_final.webp"
                  alt="Mechanical installation of precision cooling unit showing positioning, refrigerant line brazing, condensate drain routing, and electrical connections"
                  style={{ maxWidth: '100%', maxHeight: 360, objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
            </Column>
          </Grid>

          {/* ============================================================
              DETAIL LAYER — Expandable
              ============================================================ */}
          <div
            style={{
              maxHeight: expanded ? 4000 : 0,
              overflow: 'hidden',
              opacity: expanded ? 1 : 0,
              transition: 'max-height 400ms cubic-bezier(0.25, 0.1, 0.25, 1), opacity 300ms ease',
              marginTop: expanded ? '2rem' : 0,
            }}
          >
            {/* Close link */}
            <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
              <button
                onClick={() => setExpanded(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#0f62fe',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  lineHeight: 1.28572,
                  letterSpacing: '0.16px',
                  padding: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <ChevronRight size={16} style={{ transform: 'rotate(180deg)' }} />
                Close details
              </button>
            </div>

            {/* Full 4-tab interface */}
            <Grid>
              <Column lg={16} md={8} sm={4}>
                <Tile style={{ padding: 0, overflow: 'hidden' }}>
                  {/* Desktop Tab Bar */}
                  <div
                    className="deploy-tabs-desktop"
                    style={{
                      borderBottom: '1px solid var(--cds-border-subtle, #e0e0e0)',
                    }}
                  >
                    {deployTabs.map((tab, idx) => {
                      const isActive = idx === activeTab;
                      const Icon = tab.icon;
                      return (
                        <button
                          key={tab.title}
                          onClick={() => setActiveTab(idx)}
                          role="tab"
                          aria-selected={isActive}
                          style={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            padding: '1rem 0.75rem',
                            fontSize: '0.875rem',
                            background: isActive ? 'rgba(15, 98, 254, 0.04)' : 'transparent',
                            border: 'none',
                            borderBottom: `2px solid ${isActive ? '#0f62fe' : 'transparent'}`,
                            color: isActive ? '#0f62fe' : '#525252',
                            fontWeight: isActive ? 600 : 400,
                            cursor: 'pointer',
                            transition: 'all 150ms cubic-bezier(0.25, 0.1, 0.25, 1)',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <span style={{ fontSize: '0.625rem', fontFamily: 'monospace', color: isActive ? '#0f62fe' : '#a8a8a8' }}>{tab.step}</span>
                          <Icon size={16} style={{ color: isActive ? '#0f62fe' : '#a8a8a8', transition: 'color 150ms' }} />
                          <span>{tab.title}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Mobile Stepper */}
                  <div
                    className="deploy-tabs-mobile"
                    style={{
                      borderBottom: '1px solid var(--cds-border-subtle, #e0e0e0)',
                    }}
                  >
                    {deployTabs.map((tab, idx) => {
                      const isActive = idx === activeTab;
                      const Icon = tab.icon;
                      return (
                        <button
                          key={tab.title}
                          onClick={() => setActiveTab(idx)}
                          role="tab"
                          aria-selected={isActive}
                          style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.75rem 1rem',
                            fontSize: '0.875rem',
                            background: isActive ? 'rgba(15, 98, 254, 0.04)' : 'transparent',
                            border: 'none',
                            borderLeft: `4px solid ${isActive ? '#0f62fe' : 'transparent'}`,
                            color: isActive ? '#0f62fe' : '#525252',
                            fontWeight: isActive ? 600 : 400,
                            cursor: 'pointer',
                            transition: 'all 150ms cubic-bezier(0.25, 0.1, 0.25, 1)',
                          }}
                        >
                          <span style={{ fontSize: '0.625rem', fontFamily: 'monospace', color: isActive ? '#0f62fe' : '#a8a8a8' }}>{tab.step}</span>
                          <Icon size={16} style={{ color: isActive ? '#0f62fe' : '#a8a8a8' }} />
                          <span>{tab.title}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Tab Panel */}
                  <div role="tabpanel" style={{ padding: '1.5rem' }}>
                    <Grid>
                      <Column lg={9} md={5} sm={4}>
                        <h3 className="cds--fluid-heading-03" style={{ color: 'var(--cds-text-primary, #161616)', marginBottom: '1rem' }}>
                          {activeTabData.title}
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {activeTabData.items.map((item) => (
                            <li
                              key={item}
                              className="cds--body-compact-01"
                              style={{ color: 'var(--cds-text-primary, #161616)', marginBottom: '0.75rem', display: 'flex', gap: '0.75rem' }}
                            >
                              <CheckmarkFilled size={16} style={{ color: '#0f62fe', marginTop: 2, flexShrink: 0 }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </Column>
                      <Column lg={7} md={3} sm={4}>
                        <div style={{ width: '100%', height: 360, background: '#f4f4f4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <img
                            src={activeTabData.image.src}
                            alt={activeTabData.image.alt}
                            style={{ maxWidth: '100%', maxHeight: 360, objectFit: 'contain' }}
                            loading="lazy"
                          />
                        </div>
                      </Column>
                    </Grid>
                  </div>
                </Tile>
              </Column>
            </Grid>

            {/* Common Failures */}
            <Grid style={{ marginTop: '2rem' }}>
              <Column lg={16} md={8} sm={4}>
                <Grid>
                  <Column lg={8} md={4} sm={4} style={{ marginBottom: '1.5rem' }}>
                    <h3 className="cds--fluid-heading-04" style={{ color: 'var(--cds-text-primary, #161616)', marginBottom: '1rem' }}>
                      60% of cooling failures are installation-related
                    </h3>
                    <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary, #525252)', marginBottom: '1.5rem' }}>
                      Independent studies across Pakistan data centres show that the majority of thermal outages within the first 12 months trace back to installation shortcuts — not hardware defects.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {failureModes.map((mode) => (
                        <div key={mode.num} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <span style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(207, 10, 44, 0.08)', color: '#cf0a2c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '0.75rem', flexShrink: 0 }}>
                            {mode.num}
                          </span>
                          <span className="cds--body-compact-01" style={{ color: 'var(--cds-text-primary, #161616)' }}>{mode.text}</span>
                        </div>
                      ))}
                    </div>
                  </Column>

                  <Column lg={8} md={4} sm={4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ position: 'relative', width: 160, height: 160 }}>
                      <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e0e0e0" strokeWidth={3} />
                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#cf0a2c" strokeWidth={3} strokeDasharray="60, 100" />
                      </svg>
                      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: '2rem', fontWeight: 300, color: '#cf0a2c' }}>60%</span>
                        <span className="cds--label-01" style={{ color: '#525252' }}>Installation failures</span>
                      </div>
                    </div>
                  </Column>
                </Grid>
              </Column>
            </Grid>

            {/* Exclusions + next step */}
            <Grid style={{ marginTop: '2rem' }}>
              <Column lg={16} md={8} sm={4}>
                <Tile style={{ background: 'rgba(0, 157, 154, 0.1)', borderLeft: '4px solid #009d9a', marginBottom: '1.5rem' }}>
                  <p className="cds--label-01" style={{ color: '#161616', textTransform: 'uppercase', letterSpacing: '0.32px', marginBottom: '0.25rem' }}>Explicit Exclusions</p>
                  <p className="cds--helper-text-01" style={{ color: '#525252' }}>
                    Deployment covers installation, validation, and commissioning only. Excludes: thermal capacity planning, monsoon hardening engineering, and SLA guarantees.
                  </p>
                </Tile>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--cds-border-subtle, #e0e0e0)' }}>
                  <ArrowRight size={16} style={{ color: '#0f62fe', marginTop: 3, flexShrink: 0 }} />
                  <p className="cds--body-compact-01" style={{ color: 'var(--cds-text-secondary, #525252)' }}>
                    <span style={{ color: '#0f62fe', fontWeight: 500 }}>Next:</span> After commissioning, thermal continuity depends on what happens next — proactive monitoring, seasonal validation, and engineers who understand Pakistan&apos;s climate stress cycles.
                  </p>
                </div>
              </Column>
            </Grid>
          </div>
        </Column>
      </Grid>
    </section>
  );
};
const ManagedServicesSection = () => {
  const [expanded, setExpanded] = useState(false);
  const [matrixExpanded, setMatrixExpanded] = useState(false);

  const tiers = [
    {
      name: 'Essential',
      price: 'PKR 65K',
      period: '/mo',
      pictogram: CloudManagedServices,
      items: [
        'Quarterly preventive maintenance',
        'Filter replacement',
        'Refrigerant check',
        'Basic telemetry review',
      ],
      cta: 'Enquire',
      ctaKind: 'tertiary' as const,
      recommended: false,
    },
    {
      name: 'Professional',
      price: 'PKR 145K',
      period: '/mo',
      pictogram: CloudServices,
      items: [
        'Monthly preventive maintenance',
        '8-hour response SLA',
        'Predictive alerts',
        'Thermal trending report',
        'Spare parts pre-staging',
        'Remote monitoring',
      ],
      cta: 'Get Started',
      ctaKind: 'primary' as const,
      recommended: true,
    },
    {
      name: 'Enterprise',
      price: 'PKR 380K+',
      period: '/mo',
      pictogram: DataCenters,
      items: [
        '24/7 NOC monitoring (3 hubs)',
        '4-hour response SLA',
        'Monsoon standby engineers',
        'Quarterly room integrity validation',
        '99.9% uptime target under signed SLA',
        'Predictive alerts',
        'On-site spare parts pre-staged',
      ],
      cta: 'Contact Sales',
      ctaKind: 'tertiary' as const,
      recommended: false,
    },
  ];

  const matrixRows = [
    { feature: 'Preventive Maintenance', essential: 'Quarterly', professional: 'Monthly', enterprise: 'Monthly + on-demand' },
    { feature: 'Response SLA', essential: '—', professional: '8 hours', enterprise: '4 hours' },
    { feature: 'NOC Monitoring', essential: '—', professional: 'Remote monitoring', enterprise: '24/7 NOC (3 hubs)' },
    { feature: 'Predictive Alerts', essential: '—', professional: 'Yes', enterprise: 'Yes' },
    { feature: 'Thermal Reporting', essential: 'Basic telemetry', professional: 'Thermal trending', enterprise: 'Quarterly integrity validation' },
    { feature: 'Spare Parts', essential: '—', professional: 'Pre-staged at depot', enterprise: 'Pre-staged at your site' },
    { feature: 'Monsoon Standby', essential: '—', professional: '—', enterprise: 'Dedicated engineers' },
    { feature: 'Uptime Target', essential: '—', professional: '—', enterprise: '99.9% under signed SLA' },
  ];

  return (
    <section id="managed" style={{ padding: '4rem 0', background: '#f4f4f4' }}>
      <Grid>
        <Column lg={16} md={8} sm={4}>
          {/* ============================================================
              SCAN LAYER — Always visible
              ============================================================ */}
          <Grid>
            {/* Text — left side */}
            <Column lg={8} md={4} sm={4}>
              <div style={{ borderLeft: '2px solid #009d9a', paddingLeft: '0.75rem', marginBottom: '0.75rem' }}>
                <p className="cds--label-01" style={{ color: '#009d9a', textTransform: 'uppercase', letterSpacing: '0.32px', fontWeight: 600 }}>
                  04 Managed Services
                </p>
              </div>
              <p className="cds--body-compact-01" style={{ color: '#525252', marginBottom: '1rem' }}>
                Thermal continuity does not end at handover
              </p>

              <h2 className="cds--fluid-heading-05" style={{ color: '#161616', marginBottom: '1rem' }}>
                24/7 Managed Thermal Services
              </h2>
              <p className="cds--body-compact-01" style={{ color: '#161616', fontWeight: 600, marginBottom: '0.5rem' }}>
                Filters clog. Refrigerant leaks. Setpoints drift.
              </p>
              <p className="cds--body-compact-01" style={{ color: '#525252', marginBottom: '1.5rem' }}>
                Our managed service catches degradation before it becomes an outage — with NOC engineers who understand Pakistan&apos;s monsoon season, dust cycles, and grid stress patterns.
              </p>

              {/* Tier summaries */}
              <div style={{ borderTop: '1px solid #e0e0e0' }}>
                <p className="cds--label-01" style={{ color: '#8d8d8d', textTransform: 'uppercase', letterSpacing: '0.32px', paddingTop: '1rem', marginBottom: '0.5rem' }}>
                  Service tiers
                </p>
                {tiers.map((tier, idx, arr) => (
                  <div
                    key={tier.name}
                    style={{
                      padding: '1rem 0',
                      borderBottom: idx < arr.length - 1 ? '1px solid #e0e0e0' : 'none',
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      gap: '0.5rem',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <p className="cds--heading-01" style={{ color: '#161616', fontWeight: 600 }}>{tier.name}</p>
                        {tier.recommended && <Tag type="blue">Recommended</Tag>}
                      </div>
                      <p className="cds--body-compact-01" style={{ color: '#525252' }}>
                        {tier.items.slice(0, 2).join(' · ')}
                      </p>
                    </div>
                    <p className="cds--label-01" style={{ color: '#0f62fe', fontWeight: 500, whiteSpace: 'nowrap' }}>
                      {tier.price}<span style={{ color: '#525252', fontWeight: 400 }}>{tier.period}</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA + expand trigger */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                <Button kind="primary" renderIcon={ArrowRight} href="#cta">
                  Choose Your Service Tier
                </Button>
                {!expanded && (
                  <button
                    onClick={() => setExpanded(true)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#0f62fe',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: 400,
                      lineHeight: 1.28572,
                      letterSpacing: '0.16px',
                      padding: 0,
                    }}
                  >
                    <Dashboard size={20} />
                    Compare tiers in detail
                    <ChevronRight size={16} />
                  </button>
                )}
              </div>
            </Column>

            {/* Image — right side */}
            <Column lg={8} md={4} sm={4} style={{ marginBottom: 'var(--cds-spacing-06, 1.5rem)' }}>
              <div style={{ width: '100%', height: 360, background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src="/3D images/Cooling and Airflow/perceptionit_noc_bg_e8edf2.png"
                  alt="Network operations centre with large monitoring screens displaying thermal dashboards, cooling telemetry, and real-time infrastructure alerts"
                  style={{ maxWidth: '100%', maxHeight: 360, objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
            </Column>
          </Grid>

          {/* ============================================================
              DETAIL LAYER — Expandable
              ============================================================ */}
          <div
            style={{
              maxHeight: expanded ? 8000 : 0,
              overflow: 'hidden',
              opacity: expanded ? 1 : 0,
              transition: 'max-height 400ms cubic-bezier(0.25, 0.1, 0.25, 1), opacity 300ms ease',
              marginTop: expanded ? '2rem' : 0,
            }}
          >
            {/* Close link */}
            <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
              <button
                onClick={() => setExpanded(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#0f62fe',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  lineHeight: 1.28572,
                  letterSpacing: '0.16px',
                  padding: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <ChevronRight size={16} style={{ transform: 'rotate(180deg)' }} />
                Close details
              </button>
            </div>

            {/* Full tier cards */}
            <Grid style={{ marginBottom: '2.5rem' }}>
              {tiers.map((tier) => {
                const Pictogram = tier.pictogram;
                return (
                  <Column lg={4} md={4} sm={4} key={tier.name} style={{ marginBottom: '1rem' }}>
                    <Tile style={{ height: '100%', padding: 0, display: 'flex', flexDirection: 'column', border: tier.recommended ? '2px solid #0f62fe' : '1px solid #e0e0e0', overflow: 'hidden' }}>
                      {/* Top accent */}
                      <div style={{ height: 4, background: 'linear-gradient(135deg, #002d9c, #4589ff)' }} />

                      {/* Recommended badge */}
                      {tier.recommended ? (
                        <div style={{ padding: '0.75rem 1.5rem 0' }}>
                          <Tag type="blue">Recommended</Tag>
                        </div>
                      ) : (
                        <div style={{ padding: '0.75rem 1.5rem 0', minHeight: '2.5rem' }} />
                      )}

                      {/* Header */}
                      <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #e0e0e0' }}>
                        <Pictogram style={{ width: 48, height: 48, marginBottom: '0.75rem', fill: '#0f62fe' }} />
                        <h3 className="cds--heading-02" style={{ color: '#161616', marginBottom: '0.5rem' }}>{tier.name}</h3>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                          <span className="cds--fluid-heading-03" style={{ color: tier.recommended ? '#0f62fe' : '#161616', fontWeight: 300 }}>{tier.price}</span>
                          <span className="cds--body-compact-01" style={{ color: '#525252' }}>{tier.period}</span>
                        </div>
                      </div>

                      {/* Feature list */}
                      <div style={{ padding: '1.5rem', flex: 1 }}>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {tier.items.map((item) => (
                            <li key={item} className="cds--body-compact-01" style={{ color: '#161616', marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                              <CheckmarkFilled size={16} style={{ color: '#0f62fe', marginTop: 2, flexShrink: 0 }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <div style={{ padding: '1.5rem', borderTop: '1px solid #e0e0e0' }}>
                        <Button
                          kind={tier.ctaKind}
                          href="#cta"
                          style={{ width: '100%', justifyContent: 'center' }}
                        >
                          {tier.cta}
                        </Button>
                      </div>
                    </Tile>
                  </Column>
                );
              })}
            </Grid>

            {/* Comparison Matrix — Accordion trigger */}
            <div style={{ marginBottom: '2rem' }}>
              <button
                onClick={() => setMatrixExpanded(!matrixExpanded)}
                aria-expanded={matrixExpanded}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.5rem',
                  borderLeft: '6px solid #0f62fe',
                  background: matrixExpanded ? 'rgba(15, 98, 254, 0.04)' : 'rgba(15, 98, 254, 0.06)',
                  border: 'none',
                  borderLeftWidth: 6,
                  borderLeftStyle: 'solid',
                  borderLeftColor: '#0f62fe',
                  cursor: 'pointer',
                  transition: 'background 150ms',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <div style={{ width: 56, height: 56, background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Compare size={28} style={{ color: '#0f62fe' }} />
                  </div>
                  <div>
                    <p className="cds--heading-02" style={{ color: '#161616', marginBottom: '0.25rem' }}>Compare service tiers in detail</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      {['Essential', 'Professional', 'Enterprise'].map((t, i) => (
                        <span key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span className="cds--label-01" style={{ color: '#525252', border: '1px solid #c6c6c6', padding: '2px 6px', fontSize: '0.625rem' }}>{t}</span>
                          {i < 2 && <span style={{ width: 16, height: 1, background: '#c6c6c6' }} />}
                        </span>
                      ))}
                    </div>
                    <p className="cds--body-compact-01" style={{ color: '#525252' }}>See the full capability breakdown across all three service levels.</p>
                  </div>
                </div>
                <ChevronRight size={16} style={{ transform: matrixExpanded ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 200ms', flexShrink: 0, color: '#0f62fe' }} />
              </button>

              {/* Matrix table */}
              <div
                style={{
                  maxHeight: matrixExpanded ? 2000 : 0,
                  overflow: 'hidden',
                  opacity: matrixExpanded ? 1 : 0,
                  transition: 'max-height 300ms ease, opacity 200ms ease',
                }}
              >
                <div style={{ overflowX: 'auto', padding: '1.5rem', background: '#ffffff', border: '1px solid #e0e0e0', borderTop: 'none' }}>
                  <table style={{ width: '100%', fontSize: '0.875rem', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
                        <th style={{ textAlign: 'left', padding: '0.75rem 1rem', fontWeight: 600, color: '#161616', width: '25%' }}>Feature</th>
                        <th style={{ textAlign: 'left', padding: '0.75rem 1rem', fontWeight: 600, color: '#161616', width: '25%' }}>Essential</th>
                        <th style={{ textAlign: 'left', padding: '0.75rem 1rem', fontWeight: 600, color: '#0f62fe', width: '25%' }}>Professional</th>
                        <th style={{ textAlign: 'left', padding: '0.75rem 1rem', fontWeight: 600, color: '#161616', width: '25%' }}>Enterprise</th>
                      </tr>
                    </thead>
                    <tbody>
                      {matrixRows.map((row, i) => (
                        <tr key={row.feature} style={{ borderBottom: '1px solid #e0e0e0', background: i % 2 === 1 ? '#ffffff' : 'transparent' }}>
                          <td style={{ padding: '0.75rem 1rem', color: '#525252', fontWeight: 500 }}>{row.feature}</td>
                          <td style={{ padding: '0.75rem 1rem', color: '#525252' }}>{row.essential}</td>
                          <td style={{ padding: '0.75rem 1rem', color: '#0f62fe', fontWeight: 500 }}>{row.professional}</td>
                          <td style={{ padding: '0.75rem 1rem', color: '#525252' }}>{row.enterprise}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Exclusions */}
            <Tile style={{ marginBottom: '2rem', background: '#ffffff', borderLeft: '4px solid #009d9a' }}>
              <p className="cds--body-compact-01" style={{ color: '#525252' }}>
                Managed Services covers monitoring, maintenance, and response only. Excludes: hardware replacement costs (covered under warranty or separate procurement), facility structural modifications, and third-party software licensing.
              </p>
            </Tile>
          </div>
        </Column>
      </Grid>
    </section>
  );
};
const EcosystemSection = () => {
  const relatedServices = [
    {
      title: 'Power & UPS',
      desc: 'UPS sizing, power distribution, and generator integration for cooling load.',
      href: '/#/services/power-ups',
      icon: Meter,
    },
    {
      title: 'Rack & Cabinets',
      desc: 'Hot/cold aisle containment and cable management for thermal efficiency.',
      href: '/#/services/rack-cabinets',
      icon: ServerRack,
    },
    {
      title: 'Environmental Monitoring',
      desc: 'Real-time temp, humidity, and leak detection across your facility.',
      href: '/#/services/environmental-monitoring',
      icon: Dashboard,
    },
    {
      title: 'Fire Suppression',
      desc: 'FM200 and clean-agent systems that protect without damaging electronics.',
      href: '/#/services/fire-suppression',
      icon: Warning,
    },
    {
      title: 'Network Operations',
      desc: '24/7 NOC monitoring and cross-domain automation for full-stack visibility.',
      href: '/#/services/network-monitoring',
      icon: Settings,
    },
  ];

  return (
    <section style={{ padding: '4rem 0', background: '#ffffff' }}>
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ width: 24, height: 2, background: '#0f62fe', marginBottom: 8 }} />
            <p className="cds--label-01" style={{ color: '#0f62fe', textTransform: 'uppercase', letterSpacing: '0.32px' }}>
              Ecosystem
            </p>
          </div>
          <h2 className="cds--fluid-heading-05" style={{ color: '#161616', marginBottom: '1rem' }}>
            Part of the Server Continuity Suite
          </h2>
          <p className="cds--body-compact-01" style={{ color: '#525252', marginBottom: '2.5rem', maxWidth: '48rem' }}>
            Explore the supporting services that keep your infrastructure running. Every layer — power, containment, monitoring, fire protection — affects thermal performance.
          </p>

          <Grid>
            {relatedServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <Column lg={4} md={4} sm={4} key={svc.title} style={{ marginBottom: '1rem' }}>
                  <Tile style={{ height: '100%', padding: '1.5rem', display: 'flex', flexDirection: 'column', border: '1px solid #e0e0e0', transition: 'border-color 150ms, box-shadow 150ms' }}
                    onMouseEnter={(e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.borderColor = '#0f62fe'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'; }}
                    onMouseLeave={(e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.borderColor = '#e0e0e0'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <div style={{ width: 40, height: 40, background: 'rgba(15, 98, 254, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size={20} style={{ color: '#0f62fe' }} />
                      </div>
                      <h3 className="cds--heading-02" style={{ color: '#161616' }}>{svc.title}</h3>
                    </div>
                    <p className="cds--body-compact-01" style={{ color: '#525252', marginBottom: '1rem', flex: 1 }}>
                      {svc.desc}
                    </p>
                    <a href={svc.href} style={{ color: '#0f62fe', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 400, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      Learn more <ChevronRight size={16} />
                    </a>
                  </Tile>
                </Column>
              );
            })}
          </Grid>
        </Column>
      </Grid>
    </section>
  );
};
const CoolingAirflow = () => {
  const [activeSection, setActiveSection] = useState('thermal-failure');
  const [navScrolled, setNavScrolled] = useState(false);

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
    <div style={{ minHeight: '100vh', background: 'var(--cds-background, #ffffff)' }}>
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

      {/* Desktop Horizontal Anchor Nav */}
      <nav
        style={{
          position: 'sticky',
          top: '3rem',
          zIndex: 30,
          borderBottom: '1px solid var(--cds-border-subtle, #e0e0e0)',
          background: navScrolled ? '#f4f4f4' : 'var(--cds-background, #ffffff)',
          boxShadow: navScrolled ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
          transition: 'all 150ms ease',
          display: 'block',
        }}
        className="desktop-anchor-nav"
      >
        <Grid>
          <Column lg={16} md={8} sm={4}>
            <ul style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', overflowX: 'auto', padding: '0.5rem 0', listStyle: 'none', margin: 0 }}>
              {NAV_SECTIONS.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    style={{
                      padding: '0.5rem 0.75rem',
                      fontSize: '0.875rem',
                      whiteSpace: 'nowrap',
                      background: 'none',
                      border: 'none',
                      borderBottom: `2px solid ${activeSection === id ? '#0f62fe' : 'transparent'}`,
                      color: activeSection === id ? '#0f62fe' : '#525252',
                      fontWeight: activeSection === id ? 500 : 400,
                      cursor: 'pointer',
                      transition: 'all 150ms cubic-bezier(0.25, 0.1, 0.25, 1)',
                    }}
                  >
                    {sectionLabels[id]}
                  </button>
                </li>
              ))}
            </ul>
          </Column>
        </Grid>
      </nav>

      <ThermalRiskSection />
      <TrustBarSection />
      <PillarNavSection scrollToSection={scrollToSection} />
      <AssessmentInsightsGrid />
      <ProcurementInsightsGrid />
      <ProcurementSection />

      {/* Placeholder sections for remaining content */}
      <DeploymentSection />

      <ManagedServicesSection />
      <EcosystemSection />
      <section id="faq" style={{ padding: '4rem 0', background: 'var(--cds-background, #ffffff)' }}>
        <Grid>
          <Column lg={16} md={8} sm={4}>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ width: 24, height: 2, background: '#009d9a', marginBottom: 8 }} />
              <p className="cds--label-01" style={{ color: '#009d9a', textTransform: 'uppercase', letterSpacing: '0.32px' }}>
                FAQ
              </p>
            </div>
            <h2 className="cds--fluid-heading-05" style={{ color: 'var(--cds-text-primary, #161616)', marginBottom: '2rem' }}>
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

      <section id="cta" style={{ padding: '4rem 0', background: '#0a1628' }}>
        <Grid>
          <Column lg={12} md={8} sm={4}>
            <h2
              className="cds--fluid-heading-05"
              style={{ color: '#ffffff', marginBottom: '1rem' }}
            >
              Ready to protect your infrastructure?
            </h2>
            <p
              className="cds--body-compact-01"
              style={{ color: '#c6c6c6', marginBottom: '2rem', maxWidth: '36rem' }}
            >
              Book a free 15-minute call with our thermal team. We&apos;ll discuss your facility, identify risks, and recommend the right assessment path.
            </p>
            <ButtonSet>
              <Button kind="primary" renderIcon={ArrowRight} href="mailto:contact@perception-it.com?subject=Cooling%20%26%20Airflow%20Consultation">
                Book Free Consultation
              </Button>
              <Button
                kind="tertiary"
                renderIcon={Phone}
                href="tel:+923001234567"
                style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.5)' }}
              >
                Call Now
              </Button>
            </ButtonSet>
          </Column>
        </Grid>
      </section>

      <Footer />
    </div>
  );
};

export default CoolingAirflow;
