import React from 'react';
import './categories/CategoryPages.css';

const PaymentInfo = () => {
  return (
    <div className="payment-info-page fade-in">
      <section className="section bg-gray">
        <div className="container text-center">
          <h1>Payment <span className="text-primary">Transparency</span></h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            We believe in clear, milestone-based financial commitments. 
            Understanding how you pay is as important as understanding what you buy.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3 gap-8 mb-16">
            <div className="p-8 border border-gray-100 rounded-3xl">
              <h3>One-time Payments</h3>
              <p className="text-sm text-gray-600 mt-4">
                Applicable for Assessments and short-term Bootcamps. Provides instant 
                access to digital tools and session bookings.
              </p>
            </div>
            <div className="p-8 border border-gray-100 rounded-3xl">
              <h3>Installment Plans</h3>
              <p className="text-sm text-gray-600 mt-4">
                Available for Programs longer than 3 months. Designed to align with 
                academic terms and families' budget cycles.
              </p>
            </div>
            <div className="p-8 border border-gray-100 rounded-3xl">
              <h3>Milestone-based</h3>
              <p className="text-sm text-gray-600 mt-4">
                Reserved for Full Pathway Packages. Payments are triggered based on 
                delivery stages (e.g., Application submission, Visa approval).
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="p-10 bg-white border border-gray-100 rounded-3xl shadow-sm mb-12">
              <h2 className="mb-8">How Access is Granted</h2>
              <div className="space-y-8">
                <div className="step flex gap-6">
                  <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h4 className="mb-2">Confirmation</h4>
                    <p className="text-sm text-gray-600">Immediate email confirmation with invoice and next steps.</p>
                  </div>
                </div>
                <div className="step flex gap-6">
                  <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h4 className="mb-2">Entitlement Unlock</h4>
                    <p className="text-sm text-gray-600">Your account dashboard is automatically updated with the new modules or session credits.</p>
                  </div>
                </div>
                <div className="step flex gap-6">
                  <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h4 className="mb-2">Onboarding</h4>
                    <p className="text-sm text-gray-600">For Bootcamps and Pathways, a dedicated coordinator reaches out within 24 hours.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-10 rounded-3xl">
              <h2 className="mb-6">Security & Compliance</h2>
              <p className="text-gray-600 mb-8">
                Your financial security is our priority. We partner with industry-leading 
                payment gateways to ensure encrypted and safe transactions.
              </p>
              <div className="grid grid-2 gap-8">
                <div>
                  <h5 className="font-bold mb-2">Supported Methods</h5>
                  <p className="text-xs text-gray-500">Credit/Debit Cards, Net Banking, UPI, and Bank Transfers.</p>
                </div>
                <div>
                  <h5 className="font-bold mb-2">Refund Policy</h5>
                  <p className="text-xs text-gray-500">Clearly defined refund windows based on product type and delivery status. See our full policy for details.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentInfo;
