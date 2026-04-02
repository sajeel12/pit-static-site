import { Link } from 'react-router-dom';
import { ArrowLeft, Construction } from 'lucide-react';
import Navigation from './Navigation';
import Footer from '../sections/Footer';

interface UnderConstructionProps {
  title?: string;
  backLink?: string;
  backText?: string;
}

const UnderConstruction = ({ 
  title = 'Page Under Construction', 
  backLink = '/',
  backText = 'Back to Home'
}: UnderConstructionProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
            <Construction className="w-10 h-10 text-blue-600" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            We're working hard to bring you comprehensive information about this service. 
            Please check back soon or contact us for immediate assistance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to={backLink}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {backText}
            </Link>
            
            <a 
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default UnderConstruction;
