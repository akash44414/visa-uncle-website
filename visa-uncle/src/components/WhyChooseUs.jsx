import { motion } from 'framer-motion';
import { UserCheck, FileCheck, Target, Eye, Headphones, Smartphone } from 'lucide-react';

const benefits = [
  {
    title: 'Expert Visa Guidance',
    desc: 'Get professional assistance throughout the application process.',
    icon: <UserCheck className="text-white" size={24} />
  },
  {
    title: 'Documentation Support',
    desc: 'Understand the documents and information required for your visa application.',
    icon: <FileCheck className="text-white" size={24} />
  },
  {
    title: 'Personalized Assistance',
    desc: 'Get guidance based on your travel purpose and destination.',
    icon: <Target className="text-white" size={24} />
  },
  {
    title: 'Transparent Process',
    desc: 'Clear communication and guidance at every stage.',
    icon: <Eye className="text-white" size={24} />
  },
  {
    title: 'Dedicated Support',
    desc: 'Our team is available to assist you with your visa-related queries.',
    icon: <Headphones className="text-white" size={24} />
  },
  {
    title: 'Convenient Communication',
    desc: 'Connect with us directly through phone or WhatsApp.',
    icon: <Smartphone className="text-white" size={24} />
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose VISA UNCLE?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We make the complex visa process simpler through dedicated professional assistance.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-sm">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
