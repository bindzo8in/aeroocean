"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="page-wrapper overflow-hidden pb-10 bg-white text-dark">
        <PageHeader
          title="CONTACT US"
          description="Let’s Move Your Business Forward with precision and trust."
        />

        <section className="py-5 py-lg-11 py-xl-12 bg-white">
          <div className="container">
            {/* Top Info Cards */}
            <div className="row g-4 mb-12">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="card h-100 p-7 border border-dark border-opacity-10 bg-white rounded-5 shadow-sm">
                  <h6 className="text-uppercase fw-bold text-dark letter-spacing-1 mb-4 border-bottom pb-2 font-outfit">ADDRESS:</h6>
                  <p className="fs-5 text-dark text-opacity-80 mb-0 font-outfit">
                    10A, Velappa Gounder Nagar,<br />
                    Visuavasapuram, Saravanampatti,<br />
                    Coimbatore 641035
                  </p>
                </div>
              </div>
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div className="card h-100 p-7 border border-dark border-opacity-10 bg-white rounded-5 shadow-sm">
                  <h6 className="text-uppercase fw-bold text-dark letter-spacing-1 mb-4 border-bottom pb-2 font-outfit">CONTACT:</h6>
                  <div className="d-flex flex-column gap-2">
                    <p className="fs-5 text-dark text-opacity-80 mb-0 font-outfit text-decoration-none">
                        <strong>PHONE:</strong><br />
                        <a href="tel:8220992053" className="text-dark text-decoration-none">8220992053</a>
                    </p>
                    <div className="fs-5 text-dark text-opacity-80 mb-0 font-outfit mt-3">
                        <strong>EMAILS:</strong><br />
                        <div className="d-flex flex-column gap-1">
                          <a href="mailto:sales@aerooceanx.com" className="text-dark text-decoration-none">sales@aerooceanx.com</a>
                          <a href="mailto:purchase@aerooceanx.com" className="text-dark text-decoration-none">purchase@aerooceanx.com</a>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                <div className="card h-100 p-7 border border-dark border-opacity-10 bg-white rounded-5 shadow-sm">
                  <h6 className="text-uppercase fw-bold text-dark letter-spacing-1 mb-4 border-bottom pb-2 font-outfit">GLOBAL ROUTES:</h6>
                  <div className="d-flex flex-wrap gap-2 mt-4">
                    {["UAE", "SAUDI ARABIA", "AFRICA", "SINGAPORE", "USA", "EUROPE"].map((route, i) => (
                      <span key={i} className="text-dark fw-bold border border-dark border-opacity-20 py-1 px-3 fs-7 font-outfit" style={{ borderRadius: '6px' }}>{route}</span>
                    ))}
                  </div>
                  <p className="text-dark text-opacity-40 mt-4 italic mb-0 font-outfit" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>
                    Specialized handling for Middle East trade lanes.
                  </p>
                </div>
              </div>
            </div>

            {/* Form and Map Section - Full Width Layout */}
            <div className="row g-7 align-items-stretch">
               <div className="col-lg-6" data-aos="fade-right">
                  <div className="d-flex flex-column h-100 p-0">
                    <span className="text-primary fw-bold text-uppercase letter-spacing-2 mb-3 small d-block font-outfit">Contact Specialist</span>
                    <h2 className="display-6 fw-bold text-dark mb-8">Send Us A Message</h2>
                    
                    <form className="d-flex flex-column gap-4 flex-grow-1" onSubmit={(e) => {
                      e.preventDefault();
                      const target = e.target as any;
                      const name = target[0].value;
                      const email = target[1].value;
                      const subject = target[2].value;
                      const message = target[3].value;
                      const text = `Contact Inquiry from ${name} (${email}): [${subject}] ${message}`;
                      window.open(`https://wa.me/918220992053?text=${encodeURIComponent(text)}`, '_blank');
                    }}>
                        <div className="form-group border border-dark border-opacity-10 p-3 rounded-3 bg-light-gray bg-opacity-30">
                           <input className="form-control border-0 bg-transparent text-dark focus-none font-outfit py-1" type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group border border-dark border-opacity-10 p-3 rounded-3 bg-light-gray bg-opacity-30">
                           <input className="form-control border-0 bg-transparent text-dark focus-none font-outfit py-1" type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group border border-dark border-opacity-10 p-3 rounded-3 bg-light-gray bg-opacity-30">
                           <input className="form-control border-0 bg-transparent text-dark focus-none font-outfit py-1" type="text" placeholder="Subject" required />
                        </div>
                        <div className="form-group border border-dark border-opacity-10 p-3 rounded-3 bg-light-gray bg-opacity-30">
                           <textarea className="form-control border-0 bg-transparent text-dark focus-none font-outfit py-1" placeholder="Message" rows={3} required></textarea>
                        </div>
                        
                        <div className="d-flex flex-wrap gap-4 mt-3">
                          <button type="submit" className="btn btn-primary cta-yellow-btn px-8 py-3 rounded-pill fw-bold hstack gap-3 shadow-lg justify-content-center w-fit-content">
                            <span className="btn-text font-outfit">SEND VIA WHATSAPP</span>
                            <iconify-icon icon="ic:baseline-whatsapp" className="btn-icon bg-white text-dark round-45 rounded-circle hstack justify-content-center fs-5 shadow-sm"></iconify-icon>
                          </button>
                          <a href="tel:8220992053" className="btn btn-primary cta-yellow-btn px-8 py-3 rounded-pill fw-bold hstack gap-3 shadow-lg justify-content-center w-fit-content">
                            <span className="btn-text font-outfit">GET A QUOTE</span>
                            <iconify-icon icon="solar:phone-bold" className="btn-icon bg-white text-dark round-45 rounded-circle hstack justify-content-center fs-7 shadow-sm"></iconify-icon>
                          </a>
                        </div>
                    </form>
                  </div>
               </div>

               <div className="col-lg-6 mt-5 mt-lg-0" data-aos="fade-left">
                  <div className="position-relative overflow-hidden rounded-5 shadow-sm border border-dark border-opacity-10 h-100 min-h-400">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.70819810666367!2d77.00553892085239!3d11.088677181613523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f7894748d6c1%3A0xe3ce0f5ab8c2a7de!2s10%2C%20Velappa%20Gounder%20Nagar%2C%20Sahara%20City%2C%20Saravanampatti%2C%20Coimbatore%2C%20Tamil%20Nadu%20641035%2C%20India!5e0!3m2!1sen!2sus!4v1774352744599!5m2!1sen!2sus" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <style jsx>{`
        .w-fit-content {
          width: fit-content;
        }
        .min-h-400 {
          min-height: 400px;
        }
        .letter-spacing-2 {
          letter-spacing: 2px;
        }
        .focus-none:focus {
          box-shadow: none;
          outline: none;
        }
        .card:hover {
          transform: translateY(-5px);
          transition: transform 0.3s ease;
        }
      `}</style>
    </>
  );
}
