import ServiceLayout from '../../components/ServiceLayout';
import { CheckCircle2 } from 'lucide-react';

const SchengenVisa = () => {
  return (
    <ServiceLayout 
      title="Schengen Visa Assistance" 
      intro="Comprehensive guidance for Schengen visa applications to help you explore European destinations seamlessly."
    >
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Schengen Visa Assistance Includes:</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {[
          'Schengen visa category and rules overview',
          'Determining the correct embassy/consulate',
          'Document checklist and preparation guidance',
          'Travel itinerary and flight reservation guidance',
          'Travel insurance requirements assistance',
          'Appointment scheduling and document submission guidance'
        ].map((item, i) => (
          <li key={i} className="flex items-start">
            <CheckCircle2 className="text-primary-teal mr-2 flex-shrink-0 mt-1" size={20} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Schengen Visa Overview</h3>
      <p>
        A Schengen visa allows you to travel to any of the 27 Schengen Area countries. Applying requires strict adherence to documentation rules, including providing proof of accommodation, detailed travel itineraries, adequate financial means, and approved travel medical insurance.
      </p>

      <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Application Strategy</h3>
      <p>
        We assist you in identifying the correct country to apply to based on your primary destination or port of entry. We then guide you in collating the extensive paperwork required, filling out the application form, and preparing for your submission appointment.
      </p>
    </ServiceLayout>
  );
};

export default SchengenVisa;
