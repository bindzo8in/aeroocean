import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

export default function TermsOfService() {
  return (
    <>
      <Header />
      <div className="page-wrapper overflow-hidden pb-10">
        <PageHeader 
          title="TERMS OF SERVICE" 
          description="Standard terms and conditions of global logistics services provided by Aero Ocean X."
        />
        
        <section className="py-10">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="card border-0 shadow-sm p-7 rounded-4 bg-white">
                  <div className="card-body p-0 d-flex flex-column gap-7 text-dark text-opacity-80 fs-5 pb-5">
                    
                    <div className="policy-block">
                      <h3 className="h2 fw-bold text-dark mb-4">1. Scope of Services</h3>
                      <p>Aero Ocean X (hereinafter "the Company") provides international freight forwarding, air and sea cargo handling, customs brokerage, and supply chain management services according to these terms and conditions.</p>
                    </div>

                    <div className="policy-block">
                      <h3 className="h2 fw-bold text-dark mb-4">2. Liability Limits</h3>
                      <p>The Company acts as a Freight Forwarder and is not a common carrier. Our liability for loss or damage to goods is governed by international treaties (e.g., Hague-Visby Rules for Sea, Warsaw/Montreal Convention for Air) and local Indian regulations where applicable.</p>
                      <p>Standard cargo insurance is recommended for all shipments and can be arranged upon written request from the shipper.</p>
                    </div>

                    <div className="policy-block">
                      <h3 className="h2 fw-bold text-dark mb-4">3. Quotations and Pricing</h3>
                      <p>All quotes provided are subject to carrier space availability, current fuel/currency surcharges, and other fluctuating market and terminal conditions at the time of shipment booking.</p>
                    </div>

                    <div className="policy-block">
                      <h3 className="h2 fw-bold text-dark mb-4">4. Compliance and Documentation</h3>
                      <p>The Shipper (Client) is responsible for ensuring that all goods and documentation provided meet international trade compliance, export/import laws, and safety regulations. The Company is not liable for delays or fines resulting from inaccurate or fraudulent documentation provided by the Client.</p>
                    </div>

                    <div className="policy-block">
                      <h3 className="h2 fw-bold text-dark mb-4">5. Payment and Liens</h3>
                      <p>Unless otherwise agreed in writing, all freight, customs duties, and service fees are payable as per the invoice terms. The Company shall have a specific and general lien on all goods and documents in its possession for all sums due at any time from the Client.</p>
                    </div>

                    <div className="policy-block">
                      <h3 className="h2 fw-bold text-dark mb-4">6. Jurisdiction</h3>
                      <p>Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in India where the Company's branch office or headquarters is located.</p>
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
