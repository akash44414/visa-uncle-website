import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t-4 border-primary-teal">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="bg-white p-2 rounded-md inline-block">
              <img src="/logo.png" alt="VISA UNCLE Logo" className="h-10" />
            </div>
            <p className="text-gray-400 font-medium">Professional Visa Assistance</p>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed">
              Guiding you through the visa application process with professional assistance, transparency, and dedicated support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary-teal transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary-teal transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary-teal transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/sticker-visa" className="hover:text-primary-teal transition-colors">Sticker Visa</Link></li>
              <li><Link to="/e-visa" className="hover:text-primary-teal transition-colors">E-Visa</Link></li>
              <li><Link to="/usa-visa" className="hover:text-primary-teal transition-colors">USA Visa</Link></li>
              <li><Link to="/uk-visa" className="hover:text-primary-teal transition-colors">UK Visa</Link></li>
              <li><Link to="/schengen-visa" className="hover:text-primary-teal transition-colors">Schengen Visa</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-primary-teal flex-shrink-0 mt-1" size={20} />
                <span className="text-sm">Property No. (TBI) 4E/7, 04th Floor,<br/>Jhandewalan Extension, Near Post Office,<br/>New Delhi – 110055, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-primary-teal flex-shrink-0" size={20} />
                <a href="tel:+919319946602" className="text-sm hover:text-white transition-colors">+91 9319946602 (Danish)</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} VISA UNCLE. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
