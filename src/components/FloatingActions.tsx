'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Hide floating icons when in the hero section (first ~600px of the page)
      // but only on the homepage. On other pages, they might want them visible immediately.
      const isHeroSection = pathname === '/' && window.scrollY < 600;
      
      if (isHeroSection) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`floating-action-container p-3 d-flex flex-column gap-3 ${isVisible ? 'visible' : 'hidden'}`}
         style={{ 
             opacity: isVisible ? 1 : 0, 
             pointerEvents: isVisible ? 'auto' : 'none',
             transition: 'all 0.4s ease'
         }}>
      {/* Scroll to Top */}
      <button 
        onClick={scrollToTop}
        className="btn btn-primary cta-yellow-btn p-3 rounded-circle shadow-lg hstack justify-content-center border-0 floating-btn"
        id="scroll-top" 
        style={{ 
            width: '55px', 
            height: '55px', 
            display: 'flex',
            background: '#FAC001',
            color: '#000',
        }}
      >
        <iconify-icon icon="lucide:arrow-up" style={{ fontSize: '24px' }}></iconify-icon>
      </button>

      {/* WhatsApp Link */}
      <a href="https://wa.me/918220992053" target="_blank" 
         className="btn text-white p-3 rounded-circle shadow-lg hstack justify-content-center border-0 floating-btn whatsapp-btn pulse"
         style={{ width: '55px', height: '55px', backgroundColor: '#25D366' }}>
        <iconify-icon icon="ic:baseline-whatsapp" style={{ fontSize: '28px' }}></iconify-icon>
      </a>



      <style jsx>{`
        .floating-action-container {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 9999;
          transition: all 0.3s ease;
        }
        
        .floating-btn {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .floating-btn:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2) !important;
        }

        .pulse {
          animation: pulse-animation 2s infinite;
        }

        @keyframes pulse-animation {
          0% {
            box-shadow: 0 0 0 0px rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0px rgba(37, 211, 102, 0);
          }
        }

        @media (max-width: 576px) {
          .floating-action-container {
            bottom: 1rem;
            right: 1rem;
            gap: 0.5rem;
          }
          .floating-btn {
            width: 48px !important;
            height: 48px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingActions;


