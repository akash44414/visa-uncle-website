import ServiceLayout from '../../components/ServiceLayout';
import { CheckCircle2 } from 'lucide-react';

const UsaVisa = () => {
  return (
    <ServiceLayout 
      title="USA Visa Assistance" 
      intro="Professional guidance and support for your USA visa application, documentation, and interview preparation."
    >
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our USA Visa Assistance Includes:</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {[
          'Understanding various visa categories (B1/B2, F1, etc.)',
          'Step-by-step application guidance',
          'Comprehensive document preparation',
          'DS-160 form filling assistance',
          'Visa interview preparation and mock sessions',
          'Ongoing application-related support'
        ].map((item, i) => (
          <li key={i} className="flex items-start">
            <CheckCircle2 className="text-primary-teal mr-2 flex-shrink-0 mt-1" size={20} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">General Documentation Guidance</h3>
      <p>
        Applying for a US visa requires careful preparation of documents. While specific requirements depend on your visa category and individual circumstances, common documents include a valid passport, DS-160 confirmation, appointment confirmation, photograph meeting US specifications, and strong ties to your home country (financial, professional, or family). Our team will provide a tailored checklist based on your profile.
      </p>

      <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">The Process</h3>
      <p>
        We assist you from the initial consultation to understanding the requirements, filling out the application accurately, scheduling your appointments (OFC and Consular), and preparing you for the consular interview, which is a critical part of the USA visa process.
      </p>
    </ServiceLayout>
  );
};

export default UsaVisa;
