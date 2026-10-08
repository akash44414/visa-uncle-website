import { ShieldCheck, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Making Visa Assistance Simpler</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At VISA UNCLE, we help travelers understand and navigate complex visa application processes with professional guidance and personalized assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          <div className="bg-gray-50 p-8 rounded-xl text-center border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 text-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Guidance</h3>
            <p className="text-gray-600">We provide accurate information and structured processes to ensure your application meets all necessary requirements.</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl text-center border border-gray-100">
            <div className="w-16 h-16 bg-teal-100 text-primary-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Support</h3>
            <p className="text-gray-600">Every traveler's profile is unique. We tailor our document guidance to match your specific circumstances.</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl text-center border border-gray-100">
            <div className="w-16 h-16 bg-orange-100 text-primary-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Process</h3>
            <p className="text-gray-600">We maintain clear communication throughout the process, ensuring you know exactly where your application stands.</p>
          </div>
        </div>

        <div className="bg-primary-blue text-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              We understand that obtaining a visa can be a stressful part of planning international travel. Our goal is to alleviate that stress by providing a clear, structured, and supportive service environment. We pride ourselves on offering honest assessments and reliable guidance.
            </p>
            <div className="bg-white/10 p-6 rounded-lg text-left inline-block">
              <h4 className="font-semibold text-xl mb-2">For More information Contact Us</h4>
              <p className="text-blue-100 mb-1">Danish</p>
              <p className="text-blue-100 mb-3">+91 9319946602</p>
              <p className="text-blue-100 text-sm">
                Property No. (TBI) 4E/7, 04th Floor,<br/>
                Jhandewalan Extension, Near Post Office,<br/>
                New Delhi – 110055, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
