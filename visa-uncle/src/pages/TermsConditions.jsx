const TermsConditions = () => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
        
        <div className="prose max-w-none text-gray-700 space-y-6">
          <p>
            Welcome to VISA UNCLE. By accessing our website and utilizing our services, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Nature of Services</h2>
          <p>
            VISA UNCLE acts strictly as a consultant and facilitator. We provide visa assistance, application guidance, and documentation support. We do not issue visas. 
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. No Guarantee of Approval</h2>
          <div className="p-4 bg-gray-50 border-l-4 border-primary-orange rounded-r-md my-4">
            <strong>Important Disclaimer:</strong> Visa approval, processing times, and requirements are determined exclusively by the relevant embassy, consulate, immigration authority, or government department. VISA UNCLE does not guarantee visa approval.
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Customer Responsibilities</h2>
          <p>
            Applicants are solely responsible for providing accurate, true, and complete information and documentation. Any false information may lead to the rejection of the visa application and potential legal consequences by the issuing authority.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Changes in Requirements</h2>
          <p>
            Embassy requirements, visa rules, and processing fees are subject to change without prior notice. While we strive to provide the most current information, VISA UNCLE cannot be held responsible for sudden changes implemented by government authorities.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Fees and Refunds</h2>
          <p>
            Consultancy fees paid to VISA UNCLE are for our professional assistance and guidance services. Embassy fees, VFS charges, and other third-party costs are separate. In the event of a visa rejection or withdrawal of the application, embassy fees and our consultancy fees are generally non-refundable. (Please request our specific refund policy document for detailed information).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h2>
          <p>
            VISA UNCLE shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from the delay, rejection, or issuance of a visa by any embassy or consulate, or any travel-related losses incurred by the applicant.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
