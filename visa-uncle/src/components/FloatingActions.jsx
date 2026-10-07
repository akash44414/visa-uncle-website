import { MessageCircle, Phone } from 'lucide-react';

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      {/* Mobile-only Call Button */}
      <a
        href="tel:+919319946602"
        className="md:hidden bg-primary-blue text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="Call Us"
      >
        <Phone size={24} fill="currentColor" />
      </a>
      
      {/* WhatsApp Button - All Devices */}
      <a
        href="https://wa.me/919319946602?text=Hello%20VISA%20UNCLE,%20I%20would%20like%20assistance%20with%20my%20visa%20application.%20Please%20guide%20me%20regarding%20the%20process%20and%20required%20documents."
        target="_blank"
        rel="noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default FloatingActions;
