import ServiceLayout from '../../components/ServiceLayout';
import { CheckCircle2 } from 'lucide-react';

const EVisa = () => {
  return (
    <ServiceLayout 
      title="E-Visa Assistance" 
      intro="Simple and fast assistance for electronic visa authorizations for eligible destinations and travelers."
    >
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our E-Visa Assistance Includes:</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {[
          'Eligibility assessment for your destination',
          'Online application assistance',
          'Digital document preparation guidance',
          'Form-filling and submission support',
          'Payment process guidance',
          'Status tracking and application support'
        ].map((item, i) => (
          <li key={i} className="flex items-start">
            <CheckCircle2 className="text-primary-teal mr-2 flex-shrink-0 mt-1" size={20} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">What is an E-Visa?</h3>
      <p>
        An e-Visa is an electronic visa authorization that allows eligible travelers to apply for their visa online without needing to visit an embassy or consulate. The approval is usually linked electronically to your passport or provided as a printable document.
      </p>

      <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">How We Help</h3>
      <p>
        While e-Visas are generally simpler to obtain than traditional sticker visas, errors in the application or incorrect document formats can lead to delays or rejections. We assist in ensuring your digital photograph, passport scans, and application details are perfectly aligned with the destination country's requirements.
      </p>
    </ServiceLayout>
  );
};

export default EVisa;
