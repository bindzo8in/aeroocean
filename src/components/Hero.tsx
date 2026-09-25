'use client';

import React, { useState, useEffect } from 'react';

export const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="banner-section position-relative d-flex align-items-end min-vh-100 overflow-hidden bg-black" style={{ backgroundColor: '#000' }}>
      <video 
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" 
        autoPlay 
        muted 
        loop 
        playsInline 
        preload="metadata"
      >
        <source src="/assets/images/Aero ocean logistics.mp4" type="video/mp4" />
      </video>
      {/* Mobile Dark Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-black d-md-none" style={{ opacity: 0.4 }}></div>

      <div className="container position-relative z-1">
        <div className="d-flex flex-column gap-3 gap-md-4 pb-10 pb-md-11">
          <div className="row">
            <div className="col-xl-6">
              <div 
                className="d-flex align-items-center gap-3 gap-md-4" 
              >
                <img 
                  src="/assets/images/svgs/primary-leaf-yellow.svg" 
                  alt="" 
                  className="img-fluid animate-spin" 
                  style={{ width: '40px' }} 
                  loading="eager"
                  fetchPriority="high"
                />
                <p className="mb-0 text-white fs-6 fs-md-5 text-opacity-70">We deliver <span style={{ color: '#FAC001' }}>precision-driven</span> global logistics solutions for modern international trade.</p>
              </div>
            </div>
          </div>
          <div 
            className="d-flex flex-column align-items-start gap-3 gap-md-4" 
          >
            <div>
              <h1 className="mb-0 text-white lh-1 display-1 fw-bold" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>Aero Ocean <span style={{ color: '#FAC001' }}>X</span></h1>
              <p className="fs-5 fs-md-4 text-white mt-2">Fast. Secure. Reliable.</p>
            </div>
            <a href="/services" className="btn btn-primary cta-yellow-btn px-4 px-md-5 py-3 rounded-pill fw-bold hstack justify-content-between gap-3 shadow-lg mt-2" style={{ minWidth: '180px' }}>
              <span className="btn-text">OUR SERVICES</span>
              <iconify-icon icon="lucide:arrow-up-right" className="btn-icon bg-white text-dark round-45 rounded-circle hstack justify-content-center fs-7 shadow-sm"></iconify-icon>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .round-45 {
          width: 45px !important;
          height: 45px !important;
          flex-shrink: 0;
        }
        @media (max-width: 767.98px) {
          .round-45 {
            width: 35px !important;
            height: 35px !important;
          }
          .btn-text {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};



const Counter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = React.useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <span ref={elementRef} className="count">{count}</span>;
};

export const Stats = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="stats-facts py-5 py-lg-11 py-xl-12 position-relative overflow-hidden">
      <div className="container">
        <div className="row gap-7 gap-xl-0">
          <div className="col-xl-4 col-xxl-4">
            <div 
              className="d-flex align-items-center gap-7 py-2" 
              {...(!isMobile ? { "data-aos": "fade-right", "data-aos-delay": "100", "data-aos-duration": "1000" } : {})}
            >
              <span className="round-36 flex-shrink-0 text-white rounded-circle bg-primary hstack justify-content-center fw-medium">04</span>
              <hr className="border-line" />
              <span className="badge text-bg-dark">Stats & facts</span>
            </div>
          </div>
          <div className="col-xl-8 col-xxl-7">
            <div className="d-flex flex-column gap-9">
              <div className="row">
                <div className="col-xxl-8">
                  <div 
                    className="d-flex flex-column gap-6" 
                    {...(!isMobile ? { "data-aos": "fade-up", "data-aos-delay": "100", "data-aos-duration": "1000" } : {})}
                  >
                    <h2 className="mb-0">Reliable logistics solutions you can trust.</h2>
                    <p className="fs-5 mb-0">We understand that logistics is not just transportation — it is trust, timing, and transparency.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4 mb-7 mb-lg-0">
                  <div 
                    className="d-flex flex-column gap-6 pt-9 border-top" 
                    {...(!isMobile ? { "data-aos": "fade-up", "data-aos-delay": "200", "data-aos-duration": "1000" } : {})}
                  >
                    <h2 className="mb-0 fs-14 text-dark"><Counter end={1500} />K+</h2>
                    <p className="mb-0">Global shipments handled annually</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-7 mb-lg-0">
                  <div 
                    className="d-flex flex-column gap-6 pt-9 border-top" 
                    {...(!isMobile ? { "data-aos": "fade-up", "data-aos-delay": "300", "data-aos-duration": "1000" } : {})}
                  >
                    <h2 className="mb-0 fs-14 text-dark"><Counter end={50} />+</h2>
                    <p className="mb-0">Export-import focus countries</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-7 mb-lg-0">
                  <div 
                    className="d-flex flex-column gap-6 pt-9 border-top" 
                    {...(!isMobile ? { "data-aos": "fade-up", "data-aos-delay": "400", "data-aos-duration": "1000" } : {})}
                  >
                    <h2 className="mb-0 fs-14 text-dark"><Counter end={24} />/7</h2>
                    <p className="mb-0">Real-time coordination and support</p>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <a href="/about-us" className="btn btn-primary cta-yellow-btn px-5 py-3 rounded-pill fw-bold hstack gap-3 shadow-lg">
                  <span className="btn-text">Who we are</span>
                  <iconify-icon icon="lucide:arrow-up-right" className="btn-icon bg-white text-dark round-45 rounded-circle hstack justify-content-center fs-7 shadow-sm"></iconify-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div 
        className="position-absolute bottom-0 start-0" 
        {...(!isMobile ? { "data-aos": "zoom-in", "data-aos-delay": "100", "data-aos-duration": "1000" } : {})}
      >
        <img 
          src="/assets/images/backgrounds/stats-facts-bg.svg" 
          alt="" 
          className="img-fluid" 
          loading="eager"
        />
      </div>
    </section>
  );
};
