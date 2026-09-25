"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';

const ImageSlider = ({ images, title }: { images: string[], title: string }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="card-img-top-wrapper overflow-hidden position-relative" style={{ height: '240px' }}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`${title} - ${index + 1}`}
          className={`w-100 h-100 object-fit-cover position-absolute top-0 start-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100 z-1' : 'opacity-0 z-0'
          }`}
          style={{ 
            transition: 'opacity 1.5s ease-in-out',
            zIndex: index === currentIndex ? 1 : 0 
          }}
        />
      ))}
      {images.length > 1 && (
        <div className="position-absolute bottom-0 start-0 w-100 p-3 d-flex justify-content-center gap-2" style={{ zIndex: 2 }}>
          {images.map((_, i) => (
            <div 
              key={i} 
              className={`rounded-circle ${i === currentIndex ? 'bg-primary' : 'bg-white bg-opacity-50'}`}
              style={{ width: '8px', height: '8px', transition: 'all 0.3s' }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function ServicesPage() {
  const services = [
    {
      title: "Air Freight Solutions",
      icon: "lucide:plane",
      images: [
        "/assets/images/services images/Aero Ocean x (18).jpeg",
        "/assets/images/services images/Aero Ocean x (21).jpeg",
        "/assets/images/services images/Aero Ocean x (3).jpeg"
      ],
      desc: "When speed is critical, our air freight services ensure your cargo reaches its destination swiftly across global networks.",
      points: ["Priority Air Express", "Global Door-to-Door", "Charter Services", "Dangerous Goods"]
    },
    {
      title: "Sea Freight Logistics",
      icon: "lucide:ship",
      images: [
        "/assets/images/services images/Aero Ocean x (20).jpeg",
        "/assets/images/services images/Aero Ocean x (2).jpeg"
      ],
      desc: "Cost-effective solutions for international trade, managing everything from full container loads to specialized project cargo.",
      points: ["FCL & LCL Services", "Break-bulk Cargo", "Port-to-Port Delivery", "Carrier Partnerships"]
    },
    {
      title: "Road Transportation",
      icon: "lucide:truck",
      images: [
        "/assets/images/services images/Aero Ocean x (7).jpeg",
        "/assets/images/services images/Aero Ocean x (9).jpeg"
      ],
      desc: "Reliable domestic and cross-border trucking services providing seamless connectivity and last-mile delivery solutions.",
      points: ["Full Truck Load (FTL)", "Less than Truck Load (LTL)", "Local Distribution", "GPS Fleet Tracking"]
    },
    {
      title: "Warehousing & Storage",
      icon: "lucide:warehouse",
      images: [
        "/assets/images/services images/Aero Ocean x (6).jpeg",
        "/assets/images/services images/Aero Ocean x (5).jpeg"
      ],
      desc: "State-of-the-art warehousing facilities offering secure storage, inventory management, and efficient distribution workflows.",
      points: ["Secure Storage", "Inventory Control", "Order Picking & Packaging", "Cross-docking"]
    },
    {
      title: "Perishable Cargo Handling",
      icon: "lucide:thermometer-snowflake",
      images: [
        "/assets/images/services images/Aero Ocean x (10).jpeg",
        "/assets/images/services images/Aero Ocean x (8).jpeg"
      ],
      desc: "Specialized cold chain solutions for temperature-sensitive goods, ensuring freshness through the entire journey.",
      points: ["Refrigerated Trucking", "Cold Storage Transit", "Fresh Goods Priority", "Food Safety Standards"]
    },
    {
      title: "Customs Clearance",
      icon: "lucide:shield-check",
      images: [
        "/assets/images/services images/Aero Ocean x (16).jpeg",
        "/assets/images/services images/Aero Ocean x (11).jpeg"
      ],
      desc: "Expert navigation of complex customs regulations, ensuring your documentation is perfect and clearance is immediate.",
      points: ["Import & Export Docs", "HS Code Classification", "Duty Optimization", "Regulatory Compliance"]
    },
    {
      title: "Export Documentation",
      icon: "lucide:file-text",
      images: [
        "/assets/images/services images/Aero Ocean x (17).jpeg",
        "/assets/images/services images/Aero Ocean x (12).jpeg"
      ],
      desc: "Comprehensive support for all export-related paperwork, minimizing risks and ensuring smooth international transactions.",
      points: ["Bill of Lading & Shipping", "COO Processing", "Commercial Invoices", "Consular Legalization"]
    },
    {
      title: "Supply Chain Consulting",
      icon: "lucide:bar-chart-3",
      images: [
        "/assets/images/services images/Aero Ocean x (13).jpeg",
        "/assets/images/services images/Aero Ocean x (3).jpeg"
      ],
      desc: "Strategic advisory to optimize logistics operations, reduce overheads, and improve overall supply chain efficiency.",
      points: ["Logistics Cost Analysis", "Risk Assessment", "Route Optimization", "Vendor Management"]
    },
    {
      title: "Project Cargo Logistics",
      icon: "lucide:anchor",
      images: [
        "/assets/images/services images/Aero Ocean x (20).jpeg",
        "/assets/images/services images/Aero Ocean x (18).jpeg"
      ],
      desc: "Specialized handling of oversized, heavy, and high-value equipment for large-scale industrial projects worldwide.",
      points: ["Oversized Load Transport", "Heavy Lift Planning", "Custom Route Surveys", "Project Coordination"]
    }
  ];

  return (
    <>
      <Header />
      <div className="page-wrapper overflow-hidden pb-10">
        <PageHeader
          title="OUR SERVICES"
          description="At Aero Ocean X, we understand that logistics is not just transportation — it is trust, timing, and transparency."
        />

        <section className="py-5 py-lg-11 py-xl-12 bg-white">
          <div className="container">
            <div className="row g-5">
              {services.map((service, index) => (
                <div className="col-lg-6 col-xl-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className={`card h-100 border border-dark border-opacity-10 rounded-4 bg-white position-relative overflow-hidden shadow-hover`}>
                    <ImageSlider images={service.images} title={service.title} />
                    <div className={`card-body p-6 text-dark d-flex flex-column`}>
                      <div className="hstack gap-4 mb-4">
                        <iconify-icon icon={service.icon} className={`text-primary`} style={{ fontSize: '40px' }}></iconify-icon>
                        <h3 className="h5 fw-bold mb-0">{service.title}</h3>
                      </div>
                      <p className="mb-5 text-dark text-opacity-70 lh-base" style={{ fontSize: '15px' }}>{service.desc}</p>
                      <ul className="list-unstyled d-flex flex-column gap-2 mb-6">
                        {service.points.map((point, i) => (
                          <li key={i} className="fw-medium hstack gap-3 text-dark" style={{ fontSize: '14px' }}>
                            <iconify-icon icon="solar:round-alt-arrow-right-bold" className={`fs-6 text-primary`}></iconify-icon>
                            {point}
                          </li>
                        ))}
                      </ul>
                      <a href="tel:8220992053" className={`btn btn-primary cta-yellow-btn px-5 py-2 rounded-pill fw-bold hstack gap-3 shadow-lg justify-content-center d-inline-flex mt-auto`}>
                        <span className="btn-text">GET A QUOTE</span>
                        <iconify-icon icon="solar:phone-bold" className="btn-icon bg-white text-dark round-35 rounded-circle hstack justify-content-center fs-7 shadow-sm"></iconify-icon>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5 py-lg-11 py-xl-12 bg-white pb-0" data-aos="fade-up">
          <div className="container">
            <div className="row g-7">
              <div className="col-lg-12 text-center mb-8">
                <h2 className="h3 fw-bold text-dark text-uppercase letter-spacing-1">WHY CHOOSE AERO OCEAN X?</h2>
                <p className="fs-5 text-dark text-opacity-60 mb-0">Discover the precision and reliability that drives our global partnerships.</p>
              </div>

              <div className="col-12">
                <div className="row g-4 text-start">
                  {[
                    { title: "Competitive International Freight Rates", desc: "Optimized shipping costs through our massive global network and volume-based agreements.", icon: "solar:ranking-bold" },
                    { title: "Reliable Transit Schedules", desc: "Meticulous planning ensures your cargo arrives on time, every time, across air and sea.", icon: "solar:clock-circle-bold" },
                    { title: "Transparent Pricing Structure", desc: "No hidden fees. Full cost breakdown with every shipment for complete financial integrity.", icon: "solar:bill-list-bold" },
                    { title: "Dedicated Account Management", desc: "A single point of contact for personalized support, status updates, and expert guidance.", icon: "solar:user-bold" },
                    { title: "Strong Overseas Agent Network", desc: "End-to-end handling globally through our trusted presence in over 50 countries.", icon: "solar:global-bold" },
                    { title: "Real-Time Shipment Updates", desc: "Precision tracking visibility from dispatch to delivery, keeping you informed at every step.", icon: "solar:sidebar-minimalistic-bold" }
                  ].map((item, index) => (
                    <div key={index} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={index * 50}>
                      <div className="card h-100 border border-dark border-opacity-10 p-6 rounded-4 shadow-hover transition-300 bg-white">
                        <div className="d-flex flex-column gap-3">
                          <iconify-icon icon={item.icon} className="fs-8 text-primary"></iconify-icon>
                          <h5 className="mb-2 fw-bold fs-5 text-dark" style={{ lineHeight: '1.4' }}>{item.title}</h5>
                          <p className="mb-0 text-dark text-opacity-60 lh-base" style={{ fontSize: '15px' }}>{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-10 mx-auto mt-7" data-aos="zoom-in">
                <div className="card bg-dark text-white p-7 rounded-5 shadow-lg border-0 text-center">
                  <h3 className="h3 fw-bold mb-4 text-uppercase text-white">Mission Statement</h3>
                  <p className="fs-4 italic mb-0 text-opacity-80 lh-base">"Fast. Secure. Reliable. We help businesses expand globally with confidence. We treat every shipment as mission-critical."</p>
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
                  Whether you're an exporter, importer, or trader, Aero Ocean X is ready to support your global logistics needs with precision and trust.
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
        .shadow-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,0.1) !important;
          border-color: #FAC001 !important;
        }
        .card-img-top-wrapper:hover .card-img-top {
          transform: scale(1.05);
        }
        .transition-300 {
          transition: all 0.3s ease;
        }
        .transition-opacity {
          transition: opacity 1.5s ease-in-out;
        }
        .object-fit-cover {
          object-fit: cover;
        }
        .round-35 {
          width: 35px;
          height: 35px;
          line-height: 35px;
        }
        .z-1 { z-index: 1; }
        .z-0 { z-index: 0; }
        .opacity-100 { opacity: 1; }
        .opacity-0 { opacity: 0; }
      `}</style>
    </>


  );
}
