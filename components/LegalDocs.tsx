import React from 'react';

type LegalProps = {
  type: 'privacy' | 'terms' | 'refund' | 'cookie';
};

export const LegalDocs: React.FC<LegalProps> = ({ type }) => {
  const renderContent = () => {
    switch (type) {
      case 'privacy':
        return (
          <>
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-sm text-slate-500 mb-8">Last Updated: January 18, 2026</p>
            
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-2">1. Information We Collect</h2>
                <p>We collect information you provide directly to us, such as when you create an account, request a consultation, or fill out a form. This includes your Name, Email, WhatsApp Number, and Academic Details (CGPA, Major).</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-2">2. How We Use Your Data</h2>
                <p>We use your data solely to: (a) Assess your scholarship eligibility, (b) Contact you regarding your application, and (c) Send relevant educational updates. We do <strong>not</strong> sell your data to third parties.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-2">3. Data Security</h2>
                <p>We implement industry-standard security measures to protect your personal information. Your data is stored on secure servers with restricted access.</p>
              </section>
            </div>
          </>
        );
      case 'terms':
        return (
          <>
            <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-2">1. Services</h2>
                <p>Zynome Scholar provides educational consultancy, SOP editing, and application assistance. We are <strong>advisors</strong>, not university admission officers. We cannot guarantee admission, as the final decision lies with the university.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-2">2. User Responsibilities</h2>
                <p>You agree to provide accurate and authentic documents. Submitting fake degrees or transcripts will result in immediate termination of services without refund.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-2">3. Payments</h2>
                <p>All payments for Premium Services (SOP Review, Done-For-You) must be made in advance. Prices are subject to change based on seasonal demand.</p>
              </section>
            </div>
          </>
        );
      case 'refund':
        return (
          <>
            <h1 className="text-4xl font-bold mb-6">Refund Policy</h1>
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-2">1. Digital Services</h2>
                <p>Due to the nature of digital services (SOP Editing, Consultation Calls), <strong>refunds are not provided</strong> once the work has commenced or the service has been delivered.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-2">2. Done-For-You Applications</h2>
                <p>If we fail to submit your application by the deadline due to our error, a 100% refund will be issued. However, if rejection occurs due to university criteria, no refund is applicable.</p>
              </section>
            </div>
          </>
        );
      default:
        return <div>Page Not Found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6 bg-white rounded-3xl shadow-xl p-12 border border-slate-100">
        {renderContent()}
      </div>
    </div>
  );
};