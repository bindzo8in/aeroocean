"use client";

import React, { useState, useEffect } from 'react';

const PageHeader = ({ title, description }: { title: string; description?: string }) => {
  const images = [
    "/assets/images/Aero ocean AOX.jpg",
    "/assets/images/Aero Ocean X.jpg"
  ];

  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section
      className="bg-dark position-relative overflow-hidden d-flex align-items-center"
      style={{ minHeight: '90vh', paddingTop: '100px', paddingBottom: '60px' }}
    >
      {/* Dynamic Background Slideshow */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: 0 }}>
        {images.map((img, index) => (
          <div
            key={img}
            className={`hero-background-image w-100 h-100 position-absolute top-0 start-0 transition-opacity-2000 ${index === currentIdx ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url("${img}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
        ))}
      </div>

      <div className="container position-relative z-1">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <h1 className="text-white display-5 fw-bold mb-4 animate__animated animate__fadeInDown">{title}</h1>
            {description && (
              <p className="text-white text-opacity-90 fs-4 mb-0 animate__animated animate__fadeInUp fw-medium font-outfit" style={{ maxWidth: '800px', margin: '0 auto' }}>
                {description}
              </p>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-background-image {
          animation: kenBurnsZoomOut 8s infinite alternate ease-in-out;
        }
        
        .transition-opacity-2000 {
          transition: opacity 2s ease-in-out;
        }

        .opacity-100 { opacity: 1; }
        .opacity-0 { opacity: 0; }

        @keyframes kenBurnsZoomOut {
          0% {
            transform: scale(1.15);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};
export default PageHeader;
