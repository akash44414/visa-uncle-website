import { useState } from 'react';

const LeadForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, send data to the server here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    e.target.reset();
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Visa Assistance</h3>
      
      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6">
          Thank you! Our team will contact you regarding your visa enquiry.
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-teal focus:border-primary-teal outline-none transition-colors" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
            <input required type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-teal focus:border-primary-teal outline-none transition-colors" placeholder="+91 XXXXX XXXXX" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input required type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-teal focus:border-primary-teal outline-none transition-colors" placeholder="john@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Destination Country</label>
            <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-teal focus:border-primary-teal outline-none transition-colors" placeholder="e.g. USA, UK, France" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Visa Type</label>
            <select required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-teal focus:border-primary-teal outline-none transition-colors bg-white">
              <option value="">Select Visa Type</option>
              <option value="Sticker Visa">Sticker Visa</option>
              <option value="E-Visa">E-Visa</option>
              <option value="USA Visa">USA Visa</option>
              <option value="UK Visa">UK Visa</option>
              <option value="Schengen Visa">Schengen Visa</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Travel Date</label>
            <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-teal focus:border-primary-teal outline-none transition-colors" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Travel Purpose</label>
          <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-teal focus:border-primary-teal outline-none transition-colors" placeholder="Tourism, Business, Study, etc." />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
          <textarea rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-teal focus:border-primary-teal outline-none transition-colors" placeholder="Any specific details or questions..."></textarea>
        </div>

        <button type="submit" className="w-full btn-primary py-3 mt-4">
          Request Visa Assistance
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
