import ServiceLayout from '../../components/ServiceLayout';
import { CheckCircle2 } from 'lucide-react';

const UkVisa = () => {
  return (
    <ServiceLayout 
      title="UK Visa Assistance" 
      intro="Expert assistance for UK visa applications, ensuring your documents are perfectly organized and submitted."
    >
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our UK Visa Assistance Includes:</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {[
          'General UK visa category guidance',
          'Online application assistance',
          'Document checklist tailored to your profile',
          'Supporting document preparation and review',
          'VFS appointment scheduling guidance',
          'Application process guidance'
        ].map((item, i) => (
          <li key={i} className="flex items-start">
            <CheckCircle2 className="text-primary-teal mr-2 flex-shrink-0 mt-1" size={20} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Understanding the Requirements</h3>
      <p>
        The UK visa process places a strong emphasis on documentation, particularly financial evidence and ties to your home country. We guide you through preparing bank statements, employment letters, income tax returns, and travel itineraries to ensure they meet the specific requirements set by UK Visas and Immigration (UKVI).
      </p>

      <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Application Process</h3>
      <p>
        Our team will assist you in navigating the online application portal, ensuring all information is accurate. Once the application is submitted, we guide you on how to upload your supporting documents or prepare them for your biometric appointment at the visa application center.
      </p>
    </ServiceLayout>
  );
};

export default UkVisa;
