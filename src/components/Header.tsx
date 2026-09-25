'use client';

import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 60);
    };
    // Initial check
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className={`header position-fixed start-0 top-0 w-100 ${isScrolled ? 'fixed-header' : ''}`} style={{ zIndex: 1000 }}>
      <div className="container">
        <div className="header-wrapper d-flex align-items-center py-3">
          {/* Left: Logo */}
          <div className="header-left d-flex align-items-center" style={{ flex: 1 }}>
            <div className="logo">
              <a href="/">
                <img src="/assets/images/Aero Ocean X logo-02.png" alt="Aero Ocean Logo" className="img-fluid header-logo" style={{ maxHeight: '70px' }} loading="eager" fetchPriority="high" />
              </a>
            </div>
          </div>

          {/* Center: Menu for Desktop */}
          <nav className="d-none d-lg-flex justify-content-center align-items-center" style={{ flex: '0 0 auto' }}>
            <ul className="header-menu list-unstyled mb-0 d-flex align-items-center gap-4">
              {navLinks.map((link) => (
                <li key={link.name} className="header-item">
                  <a href={link.href} className="header-link fw-normal text-dark text-decoration-none d-flex align-items-center gap-1">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: CTA and Mobile Toggle */}
          <div className="header-right d-flex align-items-center justify-content-end gap-3" style={{ flex: 1 }}>
            <a href="tel:8220992053" className="btn btn-primary cta-yellow-btn d-none d-lg-flex px-5 py-3 rounded-pill fw-bold hstack gap-3 shadow-lg">
              <span className="btn-text">CALL NOW</span>
              <iconify-icon icon="solar:phone-bold" className="btn-icon bg-white text-dark round-45 rounded-circle hstack justify-content-center fs-7 shadow-sm"></iconify-icon>
            </a>

            {/* Mobile Menu Button */}
            <div className="d-lg-none">
              <button
                className="bg-transparent border-0 p-0 shadow-none d-flex align-items-center justify-content-center"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
                style={{ width: '40px', height: '40px' }}
              >
                <iconify-icon
                  icon={isMenuOpen ? "lucide:x" : "lucide:menu"}
                  style={{ fontSize: '32px', color: '#000' }}
                ></iconify-icon>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay d-lg-none position-fixed top-0 start-0 w-100 h-100 bg-black text-white ${isMenuOpen ? 'open' : ''}`}
        style={{
          zIndex: 999,
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.77, 0.2, 0.05, 1.0)',
          visibility: isMenuOpen ? 'visible' : 'hidden'
        }}
      >
        <div className="container h-100 d-flex flex-column py-4" style={{ overflowY: 'auto' }}>
          {/* Mobile Overlay Header */}
          <div className="d-flex align-items-center justify-content-between mb-8 px-3 flex-shrink-0">
            <div className="logo">
              <img src="/assets/images/Aero Ocean X logo-02.png" alt="Aero Ocean Logo" className="img-fluid" style={{ maxHeight: '90px', filter: 'brightness(0) invert(1)' }} />
            </div>
            <button
              className="bg-transparent border-0 p-1 shadow-none d-flex align-items-center justify-content-center"
              onClick={() => setIsMenuOpen(false)}
              style={{ width: '40px', height: '40px' }}
            >
              <iconify-icon icon="lucide:x" style={{ fontSize: '32px', color: '#fff' }}></iconify-icon>
            </button>
          </div>

          <ul className="mobile-nav-list list-unstyled mb-5">
            {navLinks.map((link, index) => (
              <li key={link.name} className="mb-4" style={{
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.4s ease ${index * 0.1}s`
              }}>
                <a
                  href={link.href}
                  className="display-5 fw-bold text-white text-decoration-none d-block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div
            className="mb-8 flex-shrink-0"
            style={{
              opacity: isMenuOpen ? 1 : 0,
              transition: 'all 0.4s ease 0.5s'
            }}
          >
            <a href="tel:8220992053" className="btn btn-primary cta-yellow-btn w-auto px-5 py-4 rounded-pill fw-bold d-inline-flex align-items-center justify-content-center gap-3 shadow-lg">
              <span className="btn-text">CALL NOW</span>
              <iconify-icon icon="solar:phone-bold" className="btn-icon bg-white text-dark round-45 rounded-circle d-flex align-items-center justify-content-center fs-7 shadow-sm"></iconify-icon>
            </a>
          </div>

        </div>
      </div>

      <style jsx>{`
        @media (max-width: 991.98px) {
          .header {
            background-color: #ffffff !important;
            box-shadow: 0 2px 15px rgba(0,0,0,0.1);
          }
          .header-logo {
            max-height: 80px !important;
          }
        }
        .header-link {
          font-size: 14px !important;
          white-space: nowrap;
          color: white !important;
          transition: all 0.3s ease;
        }
        .fixed-header .header-link {
          color: #1F2A2E !important;
        }
        .header-link:hover, .mobile-nav-list a:hover {
          color: #FAC001 !important;
        }
        .cta-yellow-btn .btn-text {
          color: #000 !important;
        }
        .round-45 {
          width: 45px !important;
          height: 45px !important;
          flex-shrink: 0;
        }
        .pt-10 {
            padding-top: 100px;
        }
        .fs-8 {
            font-size: 24px;
        }
        .mobile-menu-overlay {
            overflow-y: auto;
        }
        .header-item {
          padding: 10px 0;
        }
        .fixed-header {
          background-color: #ffffff !important;
          box-shadow: 0 2px 15px rgba(0,0,0,0.1);
        }
      `}</style>
    </header>
  );
};

export default Header;

