import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    desc: 'Discuss your travel plans and visa requirements.'
  },
  {
    number: '02',
    title: 'Document Assessment',
    desc: 'Review the required documents and application information.'
  },
  {
    number: '03',
    title: 'Application Assistance',
    desc: 'Get guidance through the application process.'
  },
  {
    number: '04',
    title: 'Application Follow-Up',
    desc: 'Receive assistance and updates throughout the process.'
  }
];

const ProcessTimeline = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">A clean, transparent, and structured approach to your visa assistance.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative text-center"
              >
                <div className="w-24 h-24 mx-auto bg-white border-4 border-primary-teal rounded-full flex items-center justify-center mb-6 shadow-sm z-10 relative">
                  <span className="text-2xl font-bold text-primary-blue">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed px-2">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
