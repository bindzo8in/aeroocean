'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark py-5 py-lg-7 position-relative overflow-hidden">
      <div className="container">
        <div className="row g-7 row-cols-1 row-cols-md-2 row-cols-xl-4 align-items-start">
          <div className="col" data-aos="fade-up">
            <div className="d-flex flex-column gap-6">
              <img src="/assets/images/Aero Ocean X logo-02.png" alt="Aero Ocean X Logo" className="img-fluid" style={{ height: '70px', objectFit: 'contain', alignSelf: 'start' }} />
              <p className="mb-0 text-white text-opacity-60 lh-base" style={{ fontSize: '14px' }}>
                Precision-driven global logistics solutions supporting modern international trade from India to key international markets.
              </p>
            </div>
          </div>
          <div className="col" data-aos="fade-up" data-aos-delay="100">
            <h5 className="text-white fw-bold mb-5 text-uppercase border-bottom border-white border-opacity-10 pb-3" style={{ fontSize: '20px', letterSpacing: '1px' }}>Quick Links</h5>
            <ul className="footer-menu list-unstyled mb-0 d-flex flex-column gap-3">
              <li><a className="link-hover text-white text-opacity-60 text-decoration-none" href="/" style={{ fontSize: '14px' }}>Home</a></li>
              <li><a className="link-hover text-white text-opacity-60 text-decoration-none" href="/about-us" style={{ fontSize: '14px' }}>About Us</a></li>
              <li><a className="link-hover text-white text-opacity-60 text-decoration-none" href="/services" style={{ fontSize: '14px' }}>Services</a></li>
              <li><a className="link-hover text-white text-opacity-60 text-decoration-none" href="/contact" style={{ fontSize: '14px' }}>Contact</a></li>
              <li className="mt-3 pt-3 border-top border-white border-opacity-10">
                <a className="link-hover text-white text-opacity-50 text-decoration-none d-block mb-2" href="/privacy-policy" style={{ fontSize: '14px' }}>Privacy Policy</a>
                <a className="link-hover text-white text-opacity-50 text-decoration-none d-block" href="/terms-of-service" style={{ fontSize: '14px' }}>Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="col" data-aos="fade-up" data-aos-delay="200">
            <h5 className="text-white fw-bold mb-5 text-uppercase border-bottom border-white border-opacity-10 pb-3" style={{ fontSize: '20px', letterSpacing: '1px' }}>Contact Details</h5>
            <div className="d-flex flex-column gap-4">
              <a href="tel:8220992053" className="link-hover hstack gap-3 text-decoration-none text-white text-opacity-60" style={{ fontSize: '14px' }}>
                <iconify-icon icon="solar:phone-bold" className="text-primary" style={{ fontSize: '18px' }}></iconify-icon>
                <span>8220992053</span>
              </a>
              <div className="d-flex flex-column gap-2 mt-2">
                <a href="mailto:sales@aerooceanx.com" className="link-hover hstack gap-3 text-decoration-none text-white text-opacity-60" style={{ fontSize: '13px' }}>
                  <iconify-icon icon="solar:letter-bold" className="text-primary" style={{ fontSize: '16px' }}></iconify-icon>
                  <span>sales@aerooceanx.com</span>
                </a>
                <a href="mailto:purchase@aerooceanx.com" className="link-hover hstack gap-3 text-decoration-none text-white text-opacity-60" style={{ fontSize: '13px' }}>
                  <iconify-icon icon="solar:letter-bold" className="text-primary" style={{ fontSize: '16px' }}></iconify-icon>
                  <span>purchase@aerooceanx.com</span>
                </a>
              </div>
              <div className="hstack gap-3 align-items-start text-white text-opacity-60" style={{ fontSize: '14px' }}>
                <iconify-icon icon="solar:map-point-bold" className="text-primary mt-1" style={{ fontSize: '18px' }}></iconify-icon>
                <span className="lh-base">10A, Velappa Gounder Nagar,<br />Visuavasapuram, Saravanampatti,<br />Coimbatore 641035</span>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-up" data-aos-delay="300">
            <h5 className="text-white fw-bold mb-5 text-uppercase border-bottom border-white border-opacity-10 pb-3" style={{ fontSize: '20px', letterSpacing: '1px' }}>Social Media</h5>
            <div className="d-flex gap-4 mb-6 mt-2">
              <a href="https://www.facebook.com/profile.php?id=61588544313049" target="_blank" className="text-white text-opacity-60 link-hover">
                <iconify-icon icon="mdi:facebook" style={{ fontSize: '28px' }}></iconify-icon>
              </a>
              <a href="https://www.instagram.com/aerooceanx/" target="_blank" className="text-white text-opacity-60 link-hover">
                <iconify-icon icon="mdi:instagram" style={{ fontSize: '28px' }}></iconify-icon>
              </a>
              <a href="https://x.com/aerooceanx" target="_blank" className="text-white text-opacity-60 link-hover">
                <iconify-icon icon="ri:twitter-x-fill" style={{ fontSize: '28px' }}></iconify-icon>
              </a>
              <a href="https://share.google/RLXndW2N7D71UPldZ" target="_blank" className="text-white text-opacity-60 link-hover">
                <iconify-icon icon="mdi:google" style={{ fontSize: '28px' }}></iconify-icon>
              </a>
            </div>
            <div className="pt-4 border-top border-white border-opacity-10">
              <p className="text-white text-opacity-50 small fw-bold text-uppercase mb-3" style={{ letterSpacing: '1px' }}>Our Major Routes</p>
              <div className="d-flex flex-wrap gap-2">
                {["UAE", "SAUDI ARABIA", "AFRICA", "SINGAPORE", "USA", "EUROPE"].map((loc, i) => (
                  <span key={i} className="badge bg-white bg-opacity-10 text-white fw-medium py-2 px-3" style={{ fontSize: '11px' }}>{loc}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-5 border-top border-white border-opacity-10 d-flex flex-column align-items-center justify-content-center gap-2 text-white text-opacity-40 text-center">
          <p className="mb-0 fw-medium" style={{ fontSize: '13px' }}>© {new Date().getFullYear()} Aero Ocean X. All rights reserved.</p>
          <p className="mb-0 hstack gap-2 justify-content-center" style={{ fontSize: '13px' }}>
            Designed by <a className="fw-bold text-decoration-none" href="#" target="_blank" style={{ color: '#FAC001' }}>Design Hub</a>
          </p>
        </div>
      </div>

      <style jsx>{`
        .link-hover {
          transition: all 0.3s ease;
        }
        .link-hover:hover {
          color: #FAC001 !important;
          opacity: 1 !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
