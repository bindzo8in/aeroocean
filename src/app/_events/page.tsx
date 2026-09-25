"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

export default function EventsPage() {
  const routeTags = [
    { icon: "circle-flags:ae", label: "UAE (Dubai, Sharjah, Abu Dhabi)" },
    { icon: "circle-flags:sa", label: "Saudi Arabia (Jeddah, Riyadh, Dammam)" },
    { icon: "noto:globe-showing-europe-africa", label: "Africa Countries" },
    { icon: "circle-flags:sg", label: "Singapore" },
    { icon: "circle-flags:au", label: "Australia" },
    { icon: "circle-flags:my", label: "Malaysia" },
    { icon: "circle-flags:us", label: "USA" },
    { icon: "circle-flags:eu", label: "Europe" }
  ];

  const fullRoutes = routeTags.concat(routeTags);

  return (
    <>
      <Header />
      <div className="page-wrapper overflow-hidden pb-10 bg-white">
        <PageHeader
          title="GLOBAL ROUTES & UPDATES"
          description="Precision-driven handling from India to key international markets."
        />

        <section className="global-reach-section py-5 py-lg-11 py-xl-12 bg-white pb-0">
          <div className="container">
            <div className="row justify-content-center text-center mb-8">
              <div className="col-lg-8" data-aos="fade-up">
                <h2 className="display-6 fw-bold text-dark text-uppercase letter-spacing-1 mb-4">OUR GLOBAL FOCUS ROUTES</h2>
                <p className="fs-5 text-dark text-opacity-70 lh-base">
                  Strategic handling of cargo from India to key international markets.<br />
                  <strong className="text-primary">Specialized handling for Middle East trade lanes.</strong>
                </p>
              </div>
            </div>

            <div className="marquee-wrapper py-4 border-top border-bottom border-dark border-opacity-10 mt-6">
              <div className="marquee-container d-flex align-items-center gap-4 overflow-hidden py-4">
                <div className="marquee-scroll d-flex align-items-center gap-4 py-2">
                  {fullRoutes.map((route, index) => (
                    <div className="route-tag px-6 py-4 hstack gap-3 border-end border-dark border-opacity-10 min-w-max" key={index}>
                      <iconify-icon icon={route.icon} className="fs-3 hstack"></iconify-icon>
                      <span className="fw-bold text-dark text-nowrap fs-5">{route.label}</span>
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
      <style jsx>{`
        .min-w-max {
          min-width: max-content;
        }
        .marquee-scroll {
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-wrapper:hover .marquee-scroll {
          animation-play-state: paused;
        }
        .letter-spacing-1 {
          letter-spacing: 2px;
        }
      `}</style>
    </>
  );
}
