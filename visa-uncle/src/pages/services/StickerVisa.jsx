import ServiceLayout from '../../components/ServiceLayout';
import { CheckCircle2 } from 'lucide-react';

const StickerVisa = () => {
  return (
    <ServiceLayout 
      title="Sticker Visa Assistance" 
      intro="Professional support for traditional sticker visa applications requiring physical document submission."
    >
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Sticker Visa Assistance Includes:</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {[
          'Comprehensive application guidance',
          'Physical documentation preparation and support',
          'Appointment scheduling guidance',
          'Application submission guidance',
          'General process explanation and timeline estimates',
          'Collection and tracking guidance'
        ].map((item, i) => (
          <li key={i} className="flex items-start">
            <CheckCircle2 className="text-primary-teal mr-2 flex-shrink-0 mt-1" size={20} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Understanding Sticker Visas</h3>
      <p>
        A sticker visa is a physical visa affixed directly to a page in your passport. Unlike e-visas, the sticker visa process generally requires the submission of your original passport along with supporting physical documents to an embassy, consulate, or designated visa application center.
      </p>

      <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Our Process</h3>
      <p>
        We guide you through the meticulous process of compiling the hard copies of your application. This includes verifying that all documents meet the specific formatting and translation requirements, assisting with booking your submission appointment, and guiding you on the biometric enrollment process if required.
      </p>
    </ServiceLayout>
  );
};

export default StickerVisa;
