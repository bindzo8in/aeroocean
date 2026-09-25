"use client";

import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Hide preloader after window load for a high-quality experience
    const handleLoad = () => {
      setFadeOut(true);
      setTimeout(() => {
        document.body.classList.add('loaded');
        setLoading(false);
      }, 500);
    };

    // Fallback timeout to ensure the site isn't blocked if large assets load slowly
    const timeoutFallback = setTimeout(() => {
      handleLoad();
    }, 3000);

    // Initial state
    document.body.classList.remove('loaded');

    if (document.readyState === "complete") {
      clearTimeout(timeoutFallback);
      handleLoad();
    } else {
      const onLoad = () => {
        clearTimeout(timeoutFallback);
        handleLoad();
      };
      window.addEventListener("load", onLoad);
      return () => {
        window.removeEventListener("load", onLoad);
        clearTimeout(timeoutFallback);
      };
    }
  }, []);

  if (!loading) return null;

  return (
    <div className={`preloader-overlay ${fadeOut ? "fade-out-complete" : ""}`}>
      <div className="preloader-content text-center d-flex flex-column align-items-center justify-content-center">
        <div className="logo-container">
          <img 
            src="/assets/images/Aero Ocean X logo-02.png" 
            alt="Aero Ocean Logo" 
            className="preloader-logo img-fluid" 
            style={{ maxWidth: '320px', width: '100%', objectFit: 'contain' }}
            loading="eager"
            fetchPriority="high"
          />
        </div>
        
        <div className="loader-orbit-wrapper mt-10">
           <div className="loader-line-premium"></div>
        </div>
        
        <p className="tagline mt-6 fs-7 fw-bold text-dark text-opacity-30 letter-spacing-4 text-uppercase font-outfit">
          Precision Logistics Wing
        </p>
      </div>

      <style jsx>{`
        /* The overlay MUST be visible immediately to stop the flash. No entrance animation on overlay. */
        .preloader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #ffffff;
          z-index: 100000;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.6s cubic-bezier(1, 0, 0, 1);
        }

        .fade-out-complete {
          transform: translateY(-100%);
          pointer-events: none;
        }

        /* Sequential appearance */
        .logo-container {
          opacity: 0;
          animation: logoShow 0.8s ease forwards;
          animation-delay: 0.1s;
        }

        .loader-orbit-wrapper {
          opacity: 0;
          animation: logoShow 0.8s ease forwards;
          animation-delay: 0.4s;
        }

        .tagline {
          opacity: 0;
          animation: logoShow 0.8s ease forwards;
          animation-delay: 0.7s;
        }

        .loader-line-premium {
          width: 220px;
          height: 2px;
          background: #f1f1f1;
          position: relative;
          border-radius: 10px;
          overflow: hidden;
        }

        .loader-line-premium::after {
          content: "";
          position: absolute;
          left: -100%;
          top: 0;
          width: 80%;
          height: 100%;
          background: linear-gradient(90deg, transparent, #FAC001, transparent);
          animation: slidingX 1.5s infinite ease-in-out;
        }

        .letter-spacing-4 {
          letter-spacing: 4px;
        }

        @keyframes slidingX {
          0% { left: -100%; }
          100% { left: 220px; }
        }

        @keyframes logoShow {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
