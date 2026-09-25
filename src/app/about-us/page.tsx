"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { About } from '@/components/AboutTestimonials';

export default function AboutUs() {
  const industries = [
    { title: "Food & Perishables", icon: "lucide:apple" },
    { title: "Textiles & Garments", icon: "lucide:shirt" },
    { title: "Engineering & Industrial Goods", icon: "lucide:settings" },
    { title: "Automobile Components", icon: "lucide:car" },
    { title: "FMCG Products", icon: "lucide:box" },
    { title: "General Commercial Cargo", icon: "lucide:container" }
  ];

  return (
    <>
      <Header />
      <div className="page-wrapper overflow-hidden pb-10">
        <PageHeader 
          title="ABOUT AERO OCEAN X" 
          description="Precision-driven global logistics solutions designed to support modern international trade from India to key international markets."
        />
        
        <About />

        <section className="py-5 py-lg-11 py-xl-12 bg-white position-relative pb-0">
          <div className="container">
            <div className="row g-7 align-items-center">
              <div className="col-lg-5 order-2 order-lg-1">
                 <div className="card bg-dark text-white p-7 rounded-5 shadow-lg border-0">
                    <h3 className="h3 fw-bold mb-4 text-uppercase" style={{ color: '#FAC001' }}>OUR MISSION</h3>
                    <p className="fs-3 mb-6">Fast. Secure. Reliable.</p>
                    <p className="fs-5 text-white mb-0">We help businesses expand globally with confidence. We understand that logistics is not just transportation — it is trust, timing, and transparency. Every shipment we handle is mission-critical.</p>
                 </div>
              </div>
              <div className="col-lg-7 order-1 order-lg-2" data-aos="fade-left">
                 <h2 className="display-6 fw-bold text-dark mb-10">INDUSTRIES WE SERVE</h2>
                 <div className="row g-4 ps-lg-4">
                    {industries.map((item, index) => (
                      <div key={index} className="col-sm-6" data-aos="fade-up" data-aos-delay={index * 100}>
                         <div className="card h-100 border border-dark border-opacity-10 p-4 hstack gap-3 bg-transparent rounded-4">
                            <iconify-icon icon={item.icon} className="fs-7 text-white p-3 bg-primary rounded-circle shadow-sm"></iconify-icon>
                            <h5 className="mb-0 fw-bold fs-6 text-dark">{item.title}</h5>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Standardized "Get a Quote" Section */}
        <section className="py-5 py-lg-11 py-xl-12 bg-white overflow-hidden" data-aos="fade-up">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center d-flex flex-column align-items-center justify-content-center gap-2 mx-auto">
                <h2 className="display-4 fw-bold text-dark mb-4">Contact Us Today</h2>
                <p className="text-dark text-opacity-60 fs-5 mx-auto mb-8 lh-base" style={{ maxWidth: '700px' }}>
                  Whether you're an exporter, importer, or trader, Aero Ocean X is ready to support your global logistics needs.
                </p>
                <a href="tel:8220992053" className="btn btn-primary cta-yellow-btn px-10 py-3 rounded-pill fw-bold d-flex align-items-center gap-3 shadow-lg justify-content-center mx-auto mt-4" style={{ width: 'fit-content' }}>
                  <span className="btn-text">GET A QUOTE</span>
                  <iconify-icon icon="solar:phone-bold" className="btn-icon bg-white text-dark round-45 rounded-circle hstack justify-content-center fs-7 shadow-sm"></iconify-icon>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
