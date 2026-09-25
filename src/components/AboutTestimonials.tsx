"use client";

import React, { useEffect } from 'react';

export const About = () => (
    <section className="why-choose-us py-5 py-lg-11 py-xl-12">
      <div className="container">
        <div className="row justify-content-between gap-5 gap-xl-0">
          <div className="col-xl-3 col-xxl-3">
            <div className="d-flex flex-column gap-7">
              <div className="d-flex align-items-center gap-7 py-2" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                <span className="round-36 flex-shrink-0 text-white rounded-circle bg-primary hstack justify-content-center fw-medium">01</span>
                <hr className="border-line" />
                <span className="badge text-bg-dark">About us</span>
              </div>
              <h2 className="mb-0" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">ABOUT AERO OCEAN X</h2>
              <p className="mb-0 fs-5" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">At Aero Ocean X, we deliver precision-driven global logistics solutions designed to support modern international trade. With a strong global partner network and deep industry expertise, We provide end-to-end Export-Import management, including seamless freight forwarding and expert customs clearance, connecting Indian businesses to key international markets. We understand that logistics is not just transportation — it is trust, timing, and transparency.</p>
            </div>
          </div>
          <div className="col-xl-9 col-xxl-8 mt-4 mt-xl-11">
            <div className="row">
              <div className="col-lg-4 mb-7 mb-lg-0">
                <div className="card position-relative overflow-hidden bg-primary" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" style={{ borderRadius: '30px', height: '400px' }}>
                  <div className="card-body d-flex flex-column justify-content-between p-7 text-center">
                    <div className="d-flex flex-column gap-3 position-relative z-1">
                      <p className="mb-0 fs-5 text-white fw-bold">Logistics Excellence</p>
                      <p className="mb-0 fs-6 text-white text-opacity-80">Your trusted partner in global trade, providing seamless end-to-end logistics solutions.</p>
                    </div>
                    <div className="position-relative z-1 py-3 mt-auto">
                      <div className="pb-3 mb-3 border-bottom border-white border-opacity-10">
                        <h2 className="mb-0 display-5 fw-bold text-white">100%</h2>
                      </div>
                      <p className="mb-0 fw-bold text-white text-uppercase small">Reliability & Commitment</p>
                    </div>
                    <div className="position-absolute bottom-0 end-0 opacity-25">
                      <img src="/assets/images/backgrounds/customer-satisfaction-bg.svg" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-7 mb-lg-0">
                <div className="d-flex flex-column gap-3" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                  <div className="position-relative">
                    <img src="/assets/images/Aero Ocean AOX 1.jpg" alt="Aero Ocean Operations" className="img-fluid w-100" style={{ height: '200px', objectFit: 'cover', borderRadius: '30px' }} />
                  </div>
                  <div className="card border-0 position-relative overflow-hidden text-white" style={{ 
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/assets/images/Aero ocean.jpg")', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    height: '184px',
                    borderRadius: '30px'
                  }}>
                    <div className="card-body d-flex flex-column justify-content-center py-4">
                      <div className="text-center">
                        <div className="pb-2 mb-2 border-bottom border-white border-opacity-20 mx-auto" style={{ maxWidth: '120px' }}>
                          <h2 className="mb-0 display-6 fw-bold text-white">500+</h2>
                        </div>
                        <p className="mb-0 text-white text-opacity-90 small fw-bold">Successful global deliveries monthly</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-7 mb-lg-0">
                <div className="card border position-relative overflow-hidden" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" style={{ borderRadius: '30px', height: '400px' }}>
                  <div className="card-body d-flex flex-column justify-content-between p-7 text-center">
                    <div>
                      <div className="pb-3 mb-3 border-bottom border-dark border-opacity-10">
                        <h2 className="mb-0 display-5 fw-bold text-dark">238+</h2>
                      </div>
                      <p className="mb-0 text-dark fw-bold text-uppercase small">Brands served worldwide</p>
                    </div>
                    <div className="d-flex flex-column gap-3 mt-auto">
                      <img src="/assets/images/Aero Ocean X logo-02.png" alt="logo" className="img-fluid mx-auto" style={{ height: '40px', objectFit: 'contain' }} />
                      <p className="mb-0 fs-6 text-dark opacity-75 fw-medium"><strong>Fast. Secure. Reliable.</strong> We help businesses expand globally.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
);

export function Testimonials() {
  useEffect(() => {
    const initCarousel = () => {
      const $ = (window as any).$ || (window as any).jQuery;
      if ($ && $.fn && $.fn.owlCarousel && $('.testimonial-slider .owl-carousel').length) {
        $('.testimonial-slider .owl-carousel').owlCarousel({
          loop: true,
          margin: 30,
          nav: false,
          dots: true,
          autoplay: true,
          autoplayTimeout: 6000,
          responsive: {
              0: {
                  items: 1
              },
              768: {
                  items: 2
              },
              1024: {
                  items: 3
              }
          }
        });
        return true;
      }
      return false;
    };

    // Try initializing, if not ready, retry after a delay
    if (!initCarousel()) {
      const timer = setInterval(() => {
        if (initCarousel()) {
          clearInterval(timer);
        }
      }, 500);
      return () => clearInterval(timer);
    }
  }, []);

  return (
    <section className="testimonial py-5 py-lg-11 py-xl-12 bg-light-gray">
      <div className="container">
        <div className="d-flex flex-column gap-5 gap-xl-11">
          <div className="row gap-7 gap-xl-0">
            <div className="col-xl-4 col-xxl-4">
              <div className="d-flex align-items-center gap-7 py-2" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                <span className="round-36 flex-shrink-0 text-white rounded-circle bg-primary hstack justify-content-center fw-medium">05</span>
                <hr className="border-line bg-white" />
                <span className="badge text-bg-dark">Testimonial</span>
              </div>
            </div>
            <div className="col-xl-8 col-xxl-7">
              <div className="row">
                <div className="col-xxl-8">
                  <div className="d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <h2 className="mb-0">Stories from clients</h2>
                    <p className="fs-5 mb-0 text-opacity-70">Real experiences, genuine feedback—discover how our creative solutions have transformed brands and elevated businesses.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-slider px-3">
            <div className="owl-carousel owl-theme">
              {[
                { name: "Prakash Sharma", company: "Prakash Textiles", text: "Aero Ocean X has been a game-changer for our exports to the UAE. Their focus on trust and timing is unmatched in the industry." },
                { name: "Suresh Gupta", company: "Global Engineering Ltd", text: "Their real-time tracking and customs handling are world-class. We never have to worry about our heavy machinery shipments again." },
                { name: "Ananya Iyer", company: "Fresh Harvest Exports", text: "Fast, secure, and reliable—exactly what they promise. Our perishables always arrive fresh and on schedule." },
                { name: "Vikram Rathore", company: "Auto Component Hub", text: "Professionalism at its peak. Our air freight costs reduced significantly thanks to their optimized logistics strategy." },
                { name: "Mohammed Al-Fayed", company: "Trade Masters Inc", text: "Highly recommend for Middle East and Africa logistics. Their local knowledge of the African trade lanes is invaluable." },
                { name: "Rahul Deshmukh", company: "Smart Electronics", text: "Seamless door-to-door delivery. No more clearance headaches or hidden charges. A truly transparent logistics partner." },
                { name: "Sunita Reddy", company: "Industrial Sol. India", text: "Trustworthy partner for precision-driven supply chain management. They treat our small shipments with the same care as bulk orders." }
              ].map((review, i) => (
                <div className="item" key={i}>
                  <div className="card border-0 shadow-lg p-7 rounded-4 bg-dark h-100 min-h-300 d-flex flex-column justify-content-between">
                    <div className="d-flex flex-column gap-4">
                      <div className="hstack gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <iconify-icon key={star} icon="solar:star-bold" className="fs-6 star-yellow"></iconify-icon>
                        ))}
                      </div>
                      <p className="mb-0 fs-5 text-white text-opacity-80 italic">"{review.text}"</p>
                    </div>
                    <div className="mt-6 pt-6 border-top border-white border-opacity-10">
                      <h5 className="mb-0 text-white fw-bold">{review.name}</h5>
                      <p className="mb-0 text-white text-opacity-70 small fw-medium">{review.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .min-h-300 {
          min-height: 320px;
        }
        .star-yellow {
          color: #FAC001;
        }
      `}</style>
    </section>
  );
}
