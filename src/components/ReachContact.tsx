"use client";

import React from 'react';

export const Pricing = () => (
  <section className="pricing-section py-5 py-lg-11 py-xl-12">
    <div className="container">
      <div className="d-flex flex-column gap-5 gap-xl-10">
        <div className="d-flex flex-column gap-5 gap-xl-11">
          <div className="row gap-7 gap-xl-0 border-bottom border-dark border-opacity-10 pb-7">
            <div className="col-xl-4 col-xxl-4">
              <div className="d-flex align-items-center gap-7 py-2" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                <span className="round-36 flex-shrink-0 text-white rounded-circle bg-primary hstack justify-content-center fw-medium">06</span>
                <hr className="border-line bg-white" />
                <span className="badge text-bg-dark">Global Reach</span>
              </div>
            </div>
            <div className="col-xl-8 col-xxl-7">
              <div className="row">
                <div className="col-xxl-10">
                  <div className="d-flex flex-column gap-5" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <h2 className="mb-0">OUR GLOBAL FOCUS ROUTES</h2>
                    <p className="fs-5 mb-0 text-dark text-opacity-80">
                      Strategic handling of cargo from India to key international markets.
                      <strong> Specialized handling for Middle East trade lanes.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="marquee-wrapper py-6">
          <div className="marquee-container d-flex align-items-center gap-4 overflow-hidden py-4">
            <div className="marquee-scroll d-flex align-items-center gap-4 py-2">
              {[
                { icon: "circle-flags:ae", label: "UAE (Dubai, Sharjah, Abu Dhabi)" },
                { icon: "circle-flags:sa", label: "Saudi Arabia (Jeddah, Riyadh, Dammam)" },
                { icon: "noto:globe-showing-europe-africa", label: "Africa Countries" },
                { icon: "circle-flags:sg", label: "Singapore" },
                { icon: "circle-flags:au", label: "Australia" },
                { icon: "circle-flags:my", label: "Malaysia" },
                { icon: "circle-flags:us", label: "USA" },
                { icon: "circle-flags:eu", label: "Europe" }
              ].concat([
                { icon: "circle-flags:ae", label: "UAE (Dubai, Sharjah, Abu Dhabi)" },
                { icon: "circle-flags:sa", label: "Saudi Arabia (Jeddah, Riyadh, Dammam)" },
                { icon: "noto:globe-showing-europe-africa", label: "AF Africa Countries" },
                { icon: "circle-flags:sg", label: "Singapore" },
                { icon: "circle-flags:au", label: "Australia" },
                { icon: "circle-flags:my", label: "Malaysia" },
                { icon: "circle-flags:us", label: "USA" },
                { icon: "circle-flags:eu", label: "Europe" }
              ]).map((route, index) => (
                <div className="route-tag px-6 py-4 hstack gap-3 border-end border-dark border-opacity-10 min-w-max" key={index}>
                  <iconify-icon icon={route.icon} className="fs-3 hstack"></iconify-icon>
                  <span className="fw-bold text-dark text-nowrap fs-5">{route.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
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
      `}</style>
  </section>
);

export const Contact = () => (
  <section className="get-in-touch py-5 py-lg-11 py-xl-12">
    <div className="container">
      <div className="d-flex flex-column gap-5 gap-xl-10">
        <div className="row gap-7 gap-xl-0">
          <div className="col-xl-4 col-xxl-4">
            <div className="d-flex align-items-center gap-7 py-2" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
              <span className="round-36 flex-shrink-0 text-white rounded-circle bg-primary hstack justify-content-center fw-medium">07</span>
              <hr className="border-line bg-white" />
              <span className="badge text-bg-dark">Contact us</span>
            </div>
          </div>
          <div className="col-xl-8 col-xxl-7">
            <h2 className="mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Get in touch</h2>
          </div>
        </div>
        <div className="row justify-content-between gap-7 gap-xl-0">
          <div className="col-xl-3">
            <p className="mb-0 fs-5" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">Let’s Move Your Business Forward. Whether you're an exporter, importer, or trader, we're here to help.</p>
          </div>
          <div className="col-xl-8">
            <form
              className="d-flex flex-column gap-7"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              onSubmit={(e) => {
                e.preventDefault();
                const target = e.target as any;
                const name = target[0].value;
                const email = target[1].value;
                const message = target[2].value;
                const text = `Hello Aero Ocean X, I am ${name} (${email}). ${message}`;
                window.open(`https://wa.me/918220992053?text=${encodeURIComponent(text)}`, '_blank');
              }}
            >
              <input type="text" className="form-control border-bottom border-dark" placeholder="Name" required />
              <input type="email" className="form-control border-bottom border-dark" placeholder="Email" required />
              <textarea className="form-control border-bottom border-dark" placeholder="Tell us about your project" rows={3} required></textarea>
              <button type="submit" className="btn btn-primary px-5 py-3 rounded-pill fw-bold hstack gap-3 shadow-lg mt-3">
                <span className="btn-text">SEND VIA WHATSAPP</span>
                <iconify-icon icon="ic:baseline-whatsapp" className="btn-icon bg-white text-dark round-45 rounded-circle hstack justify-content-center fs-5 shadow-sm"></iconify-icon>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);
