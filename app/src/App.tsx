import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import CloudCostOptimisation from './pages/services/CloudCostOptimisation';
import Chatbot from './components/Chatbot';
import CloudHub from './pages/services/CloudHub';
import CloudManagement from './pages/services/CloudManagement';
import DevOpsDelivery from './pages/services/DevOpsDelivery';
import ContainerPlatform from './pages/services/ContainerPlatform';
import OperationsMonitoring from './pages/services/OperationsMonitoring';
import ServiceNow from './pages/services/ServiceNow';
import ErrorBoundary from './components/ErrorBoundary';
import { trackWebVitals } from './lib/webVitals';
import Cover from './pages/Cover';
import Cover2 from './pages/Cover2';
import Cover3 from './pages/Cover3';

// Placeholder service pages
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import CloudStrategy from './pages/services/CloudStrategy';
import DigitalTransformation from './pages/services/DigitalTransformation';
import ITAssessment from './pages/services/ITAssessment';
import TechnologyRoadmap from './pages/services/TechnologyRoadmap';
import ServerContinuity from './pages/services/ServerContinuity';
import Datacenter from './pages/services/Datacenter';
import HardwareSupport from './pages/services/HardwareSupport';
import SLASupport from './pages/services/SLASupport';
import BusinessContinuity from './pages/services/BusinessContinuity';
import CrossDomainAutomation from './pages/services/CrossDomainAutomation';
import NetworkMonitoring from './pages/services/NetworkMonitoring';
import Observability from './pages/services/Observability';
import LoggingTracing from './pages/services/LoggingTracing';
import AlertingRules from './pages/services/AlertingRules';
import AIOps from './pages/services/AIOps';
import IoTAnalytics from './pages/services/IoTAnalytics';
import DataLakes from './pages/services/DataLakes';
import Geospatial from './pages/services/Geospatial';
import DataFederation from './pages/services/DataFederation';
import DatabaseOptimisation from './pages/services/DatabaseOptimisation';
import Maximo from './pages/services/Maximo';
import InfrastructureHub from './pages/services/InfrastructureHub';
import JiraServiceManagement from './pages/services/JiraServiceManagement';
import CustomDevelopment from './pages/services/CustomDevelopment';
import ServiceDesk from './pages/services/ServiceDesk';
import ServiceDesk2 from './pages/services/ServiceDesk2';
import AIAccelerator from './pages/services/AIAccelerator';
import AIModelDevelopment from './pages/services/AIModelDevelopment';
import MLOps from './pages/services/MLOps';
import AIConsulting from './pages/services/AIConsulting';

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
    // Track Web Vitals performance metrics
    trackWebVitals();
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <ErrorBoundary>
        <div className={`min-h-screen bg-white transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
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
            <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
            <Route path="/services/it-assessment" element={<ITAssessment />} />
            <Route path="/services/technology-roadmap" element={<TechnologyRoadmap />} />
            
            {/* Infrastructure Hub - Landing Page */}
            <Route path="/services/infrastructure" element={<InfrastructureHub />} />
            
            {/* Infrastructure Services */}
            <Route path="/services/server-continuity" element={<ServerContinuity />} />
            <Route path="/services/datacenter" element={<Datacenter />} />
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
          </Routes>
          <Chatbot />
        </div>
      </ErrorBoundary>
    </HashRouter>
  );
}

export default App;
