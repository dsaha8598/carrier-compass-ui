import React from 'react';

const TermsAndPrivacyModal = ({ onAgree, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full overflow-auto max-h-[80vh]">
        <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>
        <p className="text-gray-700 mb-4">
          By using our services, you agree to the following Terms and Conditions. 
          You are responsible for maintaining the confidentiality of your account.
          We reserve the right to modify these terms at any time without prior notice.
        </p>

        <h2 className="text-2xl font-bold mb-4">Privacy & Cookie Policy</h2>
        <p className="text-gray-700 mb-4">
          We respect your privacy and are committed to protecting it. 
          We use cookies to personalize your experience and analyze our traffic.
          Your information will not be shared with third parties without your consent.
        </p>

        <div className="flex justify-end gap-4 mt-6">
          <button 
            className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500"
            onClick={onClose}
          >
            Close
          </button>
          <button 
            className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
            onClick={onAgree}
          >
            Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndPrivacyModal;
