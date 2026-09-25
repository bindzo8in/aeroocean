import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="page-wrapper overflow-hidden pb-10">
        <PageHeader 
          title="PRIVACY POLICY" 
          description="Your trust and privacy are essential to our global logistics relationship."
        />
        
        <section className="py-10">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="card border-0 shadow-sm p-7 rounded-4 bg-white">
                  <div className="card-body p-0 d-flex flex-column gap-7 text-dark text-opacity-80 fs-5">
                    
                    <div className="policy-block">
                      <h3 className="h2 fw-bold text-dark mb-4">1. Information We Collect</h3>
                      <p>Aero Ocean X collects operational and business-critical information necessary to perform international logistics services, including but not limited to:</p>
                      <ul>
                        <li>Shipper and Consignee names, addresses, and contact details.</li>
                        <li>Cargo descriptions, weight, value, and dimensions.</li>
                        <li>Necessary trade documents (Invoices, Packing Lists, Certificates of Origin).</li>
                        <li>Payment and billing information.</li>
                      </ul>
                    </div>

                    <div className="policy-block">
                      <h3 className="h2 fw-bold text-dark mb-4">2. How We Use Your Data</h3>
                      <p>Your data is exclusively used to facilitate global cargo movement, including:</p>
                      <ul>
                        <li>Booking freight with international air and sea carriers.</li>
                        <li>Processing Customs Clearance and regulatory documentation.</li>
                        <li>Providing real-time shipment updates and tracking.</li>
                        <li>Ensuring compliance with international trade and anti-terrorism laws.</li>
                      </ul>
                    </div>

                    <div className="policy-block">
                      <h3 className="h2 fw-bold text-dark mb-4">3. Sharing with Third Parties</h3>
                      <p>We only share data with essential logistics partners such as:</p>
                      <ul>
                        <li>Customs Authorities and Port Terminals.</li>
                        <li>Airlines, Shipping Lines, and Overseas Agents.</li>
                        <li>Regulatory bodies as required by international law.</li>
                      </ul>
                      <p>We do not sell or trade your cargo or contact information to third-party marketing companies.</p>
                    </div>

                    <div className="policy-block">
                      <h3 className="h2 fw-bold text-dark mb-4">4. Data Security</h3>
                      <p>Aero Ocean X employs robust digital and physical security measures to protect your commercial documentation and sensitive shipment data from unauthorized access or breaches.</p>
                    </div>

                    <div className="policy-block">
                      <h3 className="h2 fw-bold text-dark mb-4">5. Contact Privacy Officer</h3>
                      <p>If you have questions regarding our privacy practices, please contact us at <strong>sales@aerooceanx.com</strong>.</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
