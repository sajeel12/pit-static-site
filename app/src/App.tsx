import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import ClientLogos from './sections/ClientLogos';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import CaseStudies from './sections/CaseStudies';
import About from './sections/About';
import Delivery from './sections/Delivery';
import Reliability from './sections/Reliability';
import Partnerships from './sections/Partnerships';
import Closing from './sections/Closing';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import CloudCostOptimization from './pages/services/CloudCostOptimization';

// Homepage component
const HomePage = () => {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ClientLogos />
        <Services />
        <Testimonials />
        <CaseStudies />
        <About />
        <Delivery />
        <Reliability />
        <Partnerships />
        <Closing />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className={`min-h-screen bg-white transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:category" element={<Projects />} />
          <Route path="/projects/case-study/:slug" element={<ProjectDetail />} />
          <Route path="/services/cloud-cost-optimization" element={<CloudCostOptimization />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
