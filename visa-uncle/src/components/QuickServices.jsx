import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plane, Globe, Map, Briefcase, FileSignature } from 'lucide-react';

const services = [
  {
    title: 'Sticker Visa',
    desc: 'Professional assistance for sticker visa applications and documentation.',
    icon: <FileSignature className="text-primary-orange" size={32} />,
    path: '/sticker-visa'
  },
  {
    title: 'E-Visa',
    desc: 'Simple and convenient assistance for eligible e-visa destinations.',
    icon: <Globe className="text-primary-teal" size={32} />,
    path: '/e-visa'
  },
  {
    title: 'USA Visa',
    desc: 'Guidance for USA visa applications, documentation and interview preparation.',
    icon: <Plane className="text-primary-blue" size={32} />,
    path: '/usa-visa'
  },
  {
    title: 'UK Visa',
    desc: 'Professional assistance for UK visa applications and documentation.',
    icon: <Briefcase className="text-primary-blue" size={32} />,
    path: '/uk-visa'
  },
  {
    title: 'Schengen Visa',
    desc: 'Guidance for Schengen visa applications and supporting documentation.',
    icon: <Map className="text-primary-teal" size={32} />,
    path: '/schengen-visa'
  }
];

const QuickServices = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visa Services We Specialize In</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Expert guidance tailored to your destination and travel purpose.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              <div className="bg-gray-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                {service.desc}
              </p>
              <Link to={service.path} className="text-primary-blue font-semibold text-sm flex items-center group-hover:text-blue-800 transition-colors mt-auto">
                Learn More <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickServices;
