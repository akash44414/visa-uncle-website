import { useState } from 'react';

const LeadForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // 1. Prepare WhatsApp Message
    const waText = `*New Visa Enquiry*%0A
*Name:* ${data.name}%0A
*Mobile:* ${data.mobile}%0A
*Email:* ${data.email}%0A
*Destination:* ${data.destination}%0A
*Visa Type:* ${data.visaType}%0A
*Travel Date:* ${data.travelDate || 'Not specified'}%0A
*Purpose:* ${data.purpose}%0A
*Message:* ${data.message || 'None'}`;
    
    const waUrl = `https://wa.me/919319946602?text=${waText}`;

    // 2. Send Email via FormSubmit (AJAX)
    try {
      await fetch("https://formsubmit.co/ajax/info.visauncle@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: data.name,
          Mobile: data.mobile,
          Email: data.email,
          Destination: data.destination,
          "Visa Type": data.visaType,
          "Travel Date": data.travelDate,
          Purpose: data.purpose,
          Message: data.message,
          _subject: `New Visa Enquiry from ${data.name}`
        })
      });
    } catch (error) {
      console.error("Error sending email:", error);
    }

    // 3. Open WhatsApp in a new tab
    window.open(waUrl, '_blank');

    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    e.target.reset();
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Visa Assistance</h3>
      
      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6">
          Thank you! Our team has received your enquiry and will contact you shortly.
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Anti-spam honeypot for formsubmit */}
        <input type="text" name="_honey" style={{ display: 'none' }} />
        <input type="hidden" name="_captcha" value="false" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input required name="name" type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-teal focus:border-primary-teal outline-none transition-colors" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
            <input required name="mobile" type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-teal focus:border-primary-teal outline-none transition-colors" placeholder="+91 XXXXX XXXXX" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input required name="email" type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-teal focus:border-primary-teal outline-none transition-colors" placeholder="john@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Destination Country</label>
            <input required name="destination" type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-teal focus:border-primary-teal outline-none transition-colors" placeholder="e.g. USA, UK, France" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Visa Type</label>
            <select required name="visaType" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-teal focus:border-primary-teal outline-none transition-colors bg-white">
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
            <input type="date" name="travelDate" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-teal focus:border-primary-teal outline-none transition-colors" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Travel Purpose</label>
          <input required name="purpose" type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-teal focus:border-primary-teal outline-none transition-colors" placeholder="Tourism, Business, Study, etc." />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
          <textarea name="message" rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-teal focus:border-primary-teal outline-none transition-colors" placeholder="Any specific details or questions..."></textarea>
        </div>

        <button type="submit" disabled={isSubmitting} className="w-full btn-primary py-3 mt-4 disabled:opacity-75 flex justify-center items-center">
          {isSubmitting ? 'Sending...' : 'Request Visa Assistance'}
        </button>
      </form>
      <p className="text-xs text-gray-500 mt-4 text-center">
        By submitting this form, you will also be directed to our WhatsApp to share these details directly with our team.
      </p>
    </div>
  );
};

export default LeadForm;
