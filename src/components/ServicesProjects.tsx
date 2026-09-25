"use client";

import React, { useEffect } from 'react';

export const Projects = () => {
  const specialties = [
    {
      title: "Air Freight Solutions",
      img: "services images/Aero Ocean x (18).jpeg",
      tags: ["Airport-to-Airport", "Cargo Door-to-Door", "Express Delivery", "Consolidated Shipments", "Perishable Handling"]
    },
    {
      title: "Sea Freight Logistics",
      img: "services images/Aero Ocean x (2).jpeg",
      tags: ["FCL & LCL", "Break Bulk", "Project Cargo", "Port-to-Port", "End-to-End Logistics"]
    },
    {
      title: "Customs Clearance",
      img: "services images/Aero Ocean x (16).jpeg",
      tags: ["Export Clearance", "Import Clearance", "HS Code Support", "Compliance Advisory"]
    },
    {
      title: "Documentation Support",
      img: "services images/Aero Ocean x (17).jpeg",
      tags: ["Shipping Bill", "Bill of Lading", "Certificate of Origin", "Inspection Docs"]
    }
  ];

  useEffect(() => {
    const initCarousel = () => {
      const $ = (window as any).$ || (window as any).jQuery;
      if ($ && $.fn && $.fn.owlCarousel && $('.featured-projects-slider .owl-carousel').length) {
        $('.featured-projects-slider .owl-carousel').owlCarousel({
          center: true,
          loop: true,
          margin: 30,
          nav: false,
          dots: false,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: false,
          responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 },
            1200: { items: 4 }
          }
        });
        return true;
      }
      return false;
    };

    if (!initCarousel()) {
      const timer = setInterval(() => {
        if (initCarousel()) clearInterval(timer);
      }, 500);
      return () => clearInterval(timer);
    }
  }, []);

  return (
    <section className="featured-projects py-5 py-lg-11 py-xl-12 bg-light-gray">
      <div className="d-flex flex-column gap-5 gap-xl-11">
        <div className="container">
          <div className="row gap-7 gap-xl-0">
            <div className="col-xl-4 col-xxl-4">
              <div className="d-flex align-items-center gap-7 py-2" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                <span className="round-36 flex-shrink-0 text-white rounded-circle bg-primary hstack justify-content-center fw-medium">03</span>
                <hr className="border-line" />
                <span className="badge text-bg-dark">Specialties</span>
              </div>
            </div>
            <div className="col-xl-8 col-xxl-7">
              <div className="row">
                <div className="col-xxl-8">
                  <div className="d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <h2 className="mb-0">Specialized logistics solutions</h2>
                    <p className="fs-5 mb-0">A glimpse into our diverse expertise—exploring innovative freight categories and successful global delivery models.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="featured-projects-slider px-3">
          <div className="owl-carousel owl-theme">
            {specialties.map((service, i) => (
              <div className="item" key={i}>
                <div className="portfolio d-flex flex-column gap-6">
                  <div className="portfolio-img position-relative overflow-hidden rounded-4 shadow-sm" style={{ height: '350px' }}>
                    <img src={`/assets/images/${service.img}`} alt={service.title} className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} />
                    <div className="portfolio-overlay">
                      <a href="/services" className="position-absolute top-50 start-50 translate-middle bg-primary round-64 rounded-circle hstack justify-content-center">
                        <iconify-icon icon="lucide:arrow-up-right" className="fs-8 text-dark"></iconify-icon>
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-details d-flex flex-column gap-3">
                    <h3 className="mb-2 fw-bold h4">{service.title}</h3>
                    <div className="d-flex flex-wrap gap-2">
                      {service.tags.map((tag, j) => (
                        <span key={j} className="badge border border-dark border-opacity-10 text-dark fw-normal py-1 px-2" style={{ fontSize: '12px' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Services = () => {
  const serviceImages = [
    "services images/Aero Ocean x (18).jpeg",
    "services images/Aero Ocean x (2).jpeg",
    "services images/Aero Ocean x (16).jpeg",
    "services images/Aero Ocean x (17).jpeg"
  ];

  return (
    <section className="services py-5 py-lg-11 py-xl-12 bg-dark" id="services">
      <div className="container">
        <div className="d-flex flex-column gap-5 gap-xl-10">
          <div className="row gap-7 gap-xl-0 border-bottom border-white border-opacity-10 pb-7">
            <div className="col-xl-4 col-xxl-4">
              <div className="d-flex align-items-center gap-7 py-2" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                <span className="round-36 flex-shrink-0 text-white rounded-circle bg-primary hstack justify-content-center fw-medium">02</span>
                <hr className="border-line bg-white" />
                <span className="badge text-dark bg-white">Services</span>
              </div>
            </div>
            <div className="col-xl-8 col-xxl-7">
              <div className="row">
                <div className="col-xxl-10">
                  <div className="d-flex flex-column gap-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <h2 className="mb-0 text-white display-6 fw-bold">OUR SERVICES</h2>
                    <p className="fs-5 mb-0 text-white text-opacity-70">Aero Ocean X provides comprehensive global logistics solutions designed to support modern international trade.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services-tab pt-3">
            <div className="row gap-5 gap-xl-0">
              <div className="col-xl-4">
                <div className="tab-content" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
                  {serviceImages.map((img, index) => (
                    <div className={`tab-pane ${index === 0 ? 'active' : ''}`} id={`pane-${index}`} role="tabpanel" key={index}>
                      <img src={`/assets/images/${img}`} alt="services" className="img-fluid rounded-4 shadow-lg pt-lg-5 pt-4" style={{ height: '480px', objectFit: 'cover', width: '100%' }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-xl-8">
                <div className="d-flex flex-column h-100 justify-content-center gap-5 ps-xl-5 mt-xl-n5 mt-lg-n4 mt-n3">
                  <ul className="nav nav-tabs border-0 flex-column mb-0" id="myTab" role="tablist" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <li className="nav-item border-bottom border-white border-opacity-10" role="presentation">
                      <button className="nav-link w-100 text-start py-4 py-lg-5 fs-5 fw-bold text-white border-0 bg-transparent active" id="air-tab" data-bs-toggle="tab" data-bs-target="#pane-0" type="button" role="tab">
                        Air Freight Services
                        <p className="mb-0 fs-6 text-white text-opacity-50 fw-normal mt-2">Fast transit times with real-time coordination and priority handling.</p>
                      </button>
                    </li>
                    <li className="nav-item border-bottom border-white border-opacity-10" role="presentation">
                      <button className="nav-link w-100 text-start py-4 py-lg-5 fs-5 fw-bold text-white border-0 bg-transparent" id="sea-tab" data-bs-toggle="tab" data-bs-target="#pane-1" type="button" role="tab">
                        Sea Freight Services
                        <p className="mb-0 fs-6 text-white text-opacity-50 fw-normal mt-2">Cost-effective solutions for bulk shipments with global route presence.</p>
                      </button>
                    </li>
                    <li className="nav-item border-bottom border-white border-opacity-10" role="presentation">
                      <button className="nav-link w-100 text-start py-4 py-lg-5 fs-5 fw-bold text-white border-0 bg-transparent" id="customs-tab" data-bs-toggle="tab" data-bs-target="#pane-2" type="button" role="tab">
                        Customs Clearance
                        <p className="mb-0 fs-6 text-white text-opacity-50 fw-normal mt-2">Hassle-free documentation and compliance for seamless movement.</p>
                      </button>
                    </li>
                    <li className="nav-item border-bottom border-white border-opacity-10" role="presentation">
                      <button className="nav-link w-100 text-start py-4 py-lg-5 fs-5 fw-bold text-white border-0 bg-transparent" id="doc-tab" data-bs-toggle="tab" data-bs-target="#pane-3" type="button" role="tab">
                        Documentation Support
                        <p className="mb-0 fs-6 text-white text-opacity-50 fw-normal mt-2">Expert paperwork handling including Certificates of Origin and Bills of Lading.</p>
                      </button>
                    </li>
                  </ul>
                  <div className="mt-2">
                    <a href="/services" className="btn btn-primary cta-yellow-btn px-5 py-3 rounded-pill fw-bold hstack gap-3 shadow-lg" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                      <span className="btn-text">Explore All Our Services</span>
                      <iconify-icon icon="lucide:arrow-up-right" className="btn-icon bg-white text-dark round-45 rounded-circle hstack justify-content-center fs-7 shadow-sm"></iconify-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .nav-link.active {
          color: #FAC001 !important;
        }
      `}</style>
    </section>
  );
};
