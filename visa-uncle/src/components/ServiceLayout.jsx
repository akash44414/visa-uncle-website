import { Link } from 'react-router-dom';
import { ArrowRight, Info } from 'lucide-react';

const ServiceLayout = ({ title, intro, children }) => {
  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-primary-blue px-8 py-12 text-white text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">{intro}</p>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="prose max-w-none text-gray-700 space-y-6">
              {children}
            </div>
            
            <div className="mt-12 p-6 bg-blue-50 border-l-4 border-primary-blue rounded-r-lg">
              <div className="flex items-start">
                <Info className="text-primary-blue mr-3 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Important Notice</h4>
                  <p className="text-sm text-gray-700">
                    Requirements, fees and processing times may vary depending on nationality, visa category and current embassy/consulate requirements. Visa decisions are made by the relevant authorities. VISA UNCLE provides assistance and guidance and does not guarantee visa approval.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link to="/contact" className="inline-flex items-center btn-primary text-lg px-8 py-4">
                Get {title} Assistance <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;
