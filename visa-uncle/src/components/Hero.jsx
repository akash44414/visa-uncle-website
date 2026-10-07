import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Clock, FileText, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f4cda 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            Your Trusted Partner for <span className="text-primary-blue">Visa Assistance</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Professional visa assistance for international travel, business and tourism. Get expert guidance for USA, UK, Schengen and other visa requirements.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/contact" className="w-full sm:w-auto btn-primary text-lg px-8 py-4 shadow-lg shadow-blue-500/30 flex items-center justify-center">
              Get Visa Assistance <ArrowRight className="ml-2" size={20} />
            </Link>
            <a href="tel:+919319946602" className="w-full sm:w-auto btn-secondary text-lg px-8 py-4">
              Talk to an Expert
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap justify-center gap-6 sm:gap-12 text-sm md:text-base font-medium text-gray-500"
          >
            <div className="flex items-center"><ShieldCheck className="text-primary-teal mr-2" size={20} /> Professional Guidance</div>
            <div className="flex items-center"><Clock className="text-primary-teal mr-2" size={20} /> Simple Process</div>
            <div className="flex items-center"><FileText className="text-primary-teal mr-2" size={20} /> Dedicated Support</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
