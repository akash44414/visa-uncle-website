import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import LeadForm from '../components/LeadForm';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Ready to Start Your Visa Process?</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Speak with our team and get guidance based on your travel requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-full text-primary-blue mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600 mb-1">Danish</p>
                  <a href="tel:+919319946602" className="text-primary-blue hover:underline text-lg font-medium">+91 9319946602</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-full text-primary-blue mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Office Address</h3>
                  <p className="text-gray-600 font-medium mb-1">VISA UNCLE</p>
                  <p className="text-gray-600 leading-relaxed">
                    Property No. (TBI) 4E/7, 04th Floor,<br/>
                    Jhandewalan Extension,<br/>
                    Near Post Office,<br/>
                    New Delhi – 110055, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="tel:+919319946602" className="btn-primary flex items-center justify-center flex-1">
                <Phone size={20} className="mr-2" /> Call Now
              </a>
              <a 
                href="https://wa.me/919319946602?text=Hello%20VISA%20UNCLE,%20I%20would%20like%20assistance%20with%20my%20visa%20application." 
                target="_blank" rel="noreferrer" 
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium transition-colors shadow-sm flex items-center justify-center flex-1"
              >
                <MessageCircle size={20} className="mr-2" /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <LeadForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
