import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'USA Visa', path: '/usa-visa' },
    { name: 'UK Visa', path: '/uk-visa' },
    { name: 'Schengen Visa', path: '/schengen-visa' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src="/logo.png" alt="VISA UNCLE Logo" className="h-10 md:h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 font-medium hover:text-primary-blue transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link to="/contact" className="btn-primary">
              Get Visa Assistance
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <a href="tel:+919319946602" className="text-primary-blue p-2 rounded-full bg-blue-50">
              <Phone size={20} />
            </a>
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t mt-2 pb-4 shadow-lg absolute w-full left-0">
          <div className="flex flex-col px-4 pt-2 pb-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-800 font-medium py-2 border-b border-gray-100 hover:text-primary-blue"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 flex flex-col space-y-3">
              <a href="https://wa.me/919319946602?text=Hello%20VISA%20UNCLE,%20I%20would%20like%20assistance%20with%20my%20visa%20application.%20Please%20guide%20me%20regarding%20the%20process%20and%20required%20documents." target="_blank" rel="noreferrer" className="flex items-center justify-center space-x-2 bg-green-500 text-white py-3 rounded-md font-medium">
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
              </a>
              <Link to="/contact" className="btn-primary text-center">
                Get Visa Assistance
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
