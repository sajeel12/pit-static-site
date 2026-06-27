import { useState, useEffect, lazy, Suspense } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Chatbot from './components/Chatbot';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ErrorBoundary from './components/ErrorBoundary';
import { trackWebVitals } from './lib/webVitals';
import Cover from './pages/Cover';
import Cover2 from './pages/Cover2';
import Cover3 from './pages/Cover3';

// Core pages — keep eager (first impression, small, or layout)
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import { HuaweiPartnership } from './pages/partners';

// Tiny service pages — keep eager
import TechnologyRoadmap from './pages/services/TechnologyRoadmap';
import CoreInfrastructure from './pages/services/CoreInfrastructure';
import NetworkOperations from './pages/services/NetworkOperations';

// Heavy service pages — lazy-loaded to cut initial bundle
const CloudCostOptimisation = lazy(() => import('./pages/services/CloudCostOptimisation'));
const CloudHub = lazy(() => import('./pages/services/CloudHub'));
const CloudManagement = lazy(() => import('./pages/services/CloudManagement'));
const DevOpsDelivery = lazy(() => import('./pages/services/DevOpsDelivery'));
const ContainerPlatform = lazy(() => import('./pages/services/ContainerPlatform'));
const OperationsMonitoring = lazy(() => import('./pages/services/OperationsMonitoring'));
const ServiceNow = lazy(() => import('./pages/services/ServiceNow'));
const CloudStrategy = lazy(() => import('./pages/services/CloudStrategy'));
const CloudOperations = lazy(() => import('./pages/services/CloudOperations'));
const DigitalTransformation = lazy(() => import('./pages/services/DigitalTransformation'));
const ITAssessment = lazy(() => import('./pages/services/ITAssessment'));
const ServerContinuity = lazy(() => import('./pages/services/ServerContinuity'));
const Datacenter = lazy(() => import('./pages/services/Datacenter'));
const Datacenter2 = lazy(() => import('./pages/services/Datacenter2'));
const CoolingThermal = lazy(() => import('./pages/services/CoolingThermal'));
const PowerUPS = lazy(() => import('./pages/services/PowerUPS'));
const RackAndCabinets = lazy(() => import('./pages/services/RackAndCabinets'));
const Monitoring = lazy(() => import('./pages/services/Monitoring'));
const MigrationRelocation = lazy(() => import('./pages/services/MigrationRelocation'));
const MaintenanceSupport = lazy(() => import('./pages/services/MaintenanceSupport'));
const OperationalEfficiency = lazy(() => import('./pages/infrastructure/OperationalEfficiency'));
const DataCentreInfrastructureHub = lazy(() => import('./pages/services/DataCentreInfrastructureHub'));
const HardwareSupport = lazy(() => import('./pages/services/HardwareSupport'));
const SLASupport = lazy(() => import('./pages/services/SLASupport'));
const BusinessContinuity = lazy(() => import('./pages/services/BusinessContinuity'));
const CrossDomainAutomation = lazy(() => import('./pages/services/CrossDomainAutomation'));
const NetworkMonitoring = lazy(() => import('./pages/services/NetworkMonitoring'));
const Observability = lazy(() => import('./pages/services/Observability'));
const LoggingTracing = lazy(() => import('./pages/services/LoggingTracing'));
const AlertingRules = lazy(() => import('./pages/services/AlertingRules'));
const AIOps = lazy(() => import('./pages/services/AIOps'));
const IoTAnalytics = lazy(() => import('./pages/services/IoTAnalytics'));
const DataLakes = lazy(() => import('./pages/services/DataLakes'));
const Geospatial = lazy(() => import('./pages/services/Geospatial'));
const DataFederation = lazy(() => import('./pages/services/DataFederation'));
const DatabaseOptimisation = lazy(() => import('./pages/services/DatabaseOptimisation'));
const Maximo = lazy(() => import('./pages/services/Maximo'));
const InfrastructureHub = lazy(() => import('./pages/services/InfrastructureHub'));
const JiraServiceManagement = lazy(() => import('./pages/services/JiraServiceManagement'));
const CustomDevelopment = lazy(() => import('./pages/services/CustomDevelopment'));
const ServiceDesk = lazy(() => import('./pages/services/ServiceDesk'));
const ServiceDesk2 = lazy(() => import('./pages/services/ServiceDesk2'));
const AIAccelerator = lazy(() => import('./pages/services/AIAccelerator'));
const AIModelDevelopment = lazy(() => import('./pages/services/AIModelDevelopment'));
const MLOps = lazy(() => import('./pages/services/MLOps'));
const AIConsulting = lazy(() => import('./pages/services/AIConsulting'));
const StaffPortal = lazy(() => import('./pages/StaffPortal'));

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [isLoaded] = useState(true);

  useEffect(() => {
    trackWebVitals();
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <ErrorBoundary>
        <div className={`min-h-screen bg-white transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <Suspense fallback={<div className="min-h-screen bg-white" />}>
            <Routes>
              {/* Home */}
              <Route path="/" element={<Cover />} />

              {/* Projects */}
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:category" element={<Projects />} />
              <Route path="/projects/case-study/:slug" element={<ProjectDetail />} />

              {/* Services Landing */}
              <Route path="/services" element={<Services />} />

              {/* Cloud Services */}
              <Route path="/services/cloud" element={<CloudHub />} />
              <Route path="/services/cloud-cost-optimization" element={<CloudCostOptimisation />} />
              <Route path="/services/cloud-management" element={<CloudManagement />} />
              <Route path="/services/devops-delivery" element={<DevOpsDelivery />} />
              <Route path="/services/container-platform" element={<ContainerPlatform />} />
              <Route path="/services/operations-monitoring" element={<OperationsMonitoring />} />

              {/* Consultancy Services */}
              <Route path="/services/cloud-strategy" element={<CloudStrategy />} />
              <Route path="/services/devops-cloud" element={<CloudOperations />} />
              <Route path="/services/cloud-operations" element={<Navigate to="/services/devops-cloud" replace />} />
              <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/services/it-assessment" element={<ITAssessment />} />
              <Route path="/services/technology-roadmap" element={<TechnologyRoadmap />} />

              {/* Infrastructure Hub - Landing Page */}
              <Route path="/services/infrastructure" element={<InfrastructureHub />} />

              {/* Data Centre Infrastructure Services */}
              <Route path="/infrastructure/data-centre-services" element={<DataCentreInfrastructureHub />} />
              <Route path="/infrastructure/data-centre-services/cost-optimisation" element={<OperationalEfficiency />} />
              <Route path="/infrastructure/data-centre-services/cooling" element={<CoolingThermal />} />
              <Route path="/infrastructure/data-centre-services/power-ups" element={<PowerUPS />} />
              <Route path="/infrastructure/data-centre-services/rack-cabinets" element={<RackAndCabinets />} />
              <Route path="/infrastructure/data-centre-services/monitoring" element={<Monitoring />} />
              <Route path="/infrastructure/data-centre-services/migration-relocation" element={<MigrationRelocation />} />
              <Route path="/infrastructure/data-centre-services/maintenance-support" element={<MaintenanceSupport />} />

              {/* Data Centre Infrastructure legacy redirects */}
              <Route path="/infrastructure/operational-efficiency" element={<Navigate to="/infrastructure/data-centre-services/cost-optimisation" replace />} />
              <Route path="/infrastructure/data-centre-services/cooling-airflow" element={<Navigate to="/infrastructure/data-centre-services/cooling" replace />} />
              <Route path="/infrastructure/data-centre-services/cooling-thermal" element={<Navigate to="/infrastructure/data-centre-services/cooling" replace />} />
              <Route path="/services/cooling-airflow" element={<Navigate to="/infrastructure/data-centre-services/cooling" replace />} />
              <Route path="/services/cooling-airflow2" element={<Navigate to="/infrastructure/data-centre-services/cooling" replace />} />
              <Route path="/services/power-ups" element={<Navigate to="/infrastructure/data-centre-services/power-ups" replace />} />
              <Route path="/services/rack-cabinets" element={<Navigate to="/infrastructure/data-centre-services/rack-cabinets" replace />} />
              <Route path="/services/monitoring" element={<Navigate to="/infrastructure/data-centre-services/monitoring" replace />} />
              <Route path="/services/environmental-monitoring" element={<Navigate to="/infrastructure/data-centre-services/monitoring" replace />} />
              <Route path="/services/migration-relocation" element={<Navigate to="/infrastructure/data-centre-services/migration-relocation" replace />} />
              <Route path="/services/maintenance-support" element={<Navigate to="/infrastructure/data-centre-services/maintenance-support" replace />} />

              {/* Core Infrastructure & Network Operations */}
              <Route path="/services/server-continuity" element={<ServerContinuity />} />
              <Route path="/services/datacenter" element={<Datacenter />} />
              <Route path="/services/datacenter2" element={<Datacenter2 />} />
              <Route path="/services/core-infrastructure" element={<CoreInfrastructure />} />
              <Route path="/services/network-operations" element={<NetworkOperations />} />

              <Route path="/services/hardware-support" element={<HardwareSupport />} />
              <Route path="/services/sla-support" element={<SLASupport />} />
              <Route path="/services/business-continuity" element={<BusinessContinuity />} />

              {/* Operations Services */}
              <Route path="/services/observability" element={<Observability />} />
              <Route path="/services/logging-tracing" element={<LoggingTracing />} />
              <Route path="/services/alerting-rules" element={<AlertingRules />} />
              <Route path="/services/network-monitoring" element={<NetworkMonitoring />} />
              <Route path="/services/cross-domain-automation" element={<CrossDomainAutomation />} />
              <Route path="/services/aiops" element={<AIOps />} />

              {/* Data & Analytics Services */}
              <Route path="/services/iot-analytics" element={<IoTAnalytics />} />
              <Route path="/services/data-lakes" element={<DataLakes />} />
              <Route path="/services/geospatial" element={<Geospatial />} />
              <Route path="/services/data-federation" element={<DataFederation />} />
              <Route path="/services/database-optimisation" element={<DatabaseOptimisation />} />

              {/* IT Platforms Services */}
              <Route path="/services/servicenow" element={<ServiceNow />} />
              <Route path="/services/maximo" element={<Maximo />} />
              <Route path="/services/jira-service-management" element={<JiraServiceManagement />} />
              <Route path="/services/custom-development" element={<CustomDevelopment />} />
              <Route path="/services/service-desk" element={<ServiceDesk />} />
              <Route path="/services/service-desk2" element={<ServiceDesk2 />} />

              {/* AI Services */}
              <Route path="/services/ai-accelerator" element={<AIAccelerator />} />
              <Route path="/services/ai-model-development" element={<AIModelDevelopment />} />
              <Route path="/services/mlops" element={<MLOps />} />
              <Route path="/services/ai-consulting" element={<AIConsulting />} />

              {/* About & Contact */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              {/* Alternative Covers */}
              <Route path="/cover" element={<Cover />} />
              <Route path="/cover2" element={<Cover2 />} />
              <Route path="/cover3" element={<Cover3 />} />

              {/* Partner Pages */}
              <Route path="/partners/huawei" element={<HuaweiPartnership />} />

              {/* Staff Portal */}
              <Route path="/portal" element={<StaffPortal />} />
            </Routes>
          </Suspense>
          <Chatbot />
          <FloatingWhatsApp />
        </div>
      </ErrorBoundary>
    </HashRouter>
  );
}

export default App;
