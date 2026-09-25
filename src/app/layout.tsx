import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import Script from "next/script";
import FloatingActions from "@/components/FloatingActions";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Aero Ocean | Global Logistics Solutions",
  description: "Precision-driven global logistics solutions for modern international trade. Air freight, sea freight, and customs clearance.",
  icons: {
    icon: "/Favicon.png",
    shortcut: "/Favicon.png",
    apple: "/Favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/png" href="/Favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/libs/aos-master/dist/aos.css" />
        <link rel="stylesheet" href="/assets/css/styles.css" />
        <style>{`
          /* Global Dark Theme Color Override */
          :root {
            --bs-dark: #002D59 !important;
            --bs-dark-rgb: 0, 45, 89 !important;
          }
          .bg-dark {
            background-color: #002D59 !important;
          }
          .text-bg-dark {
            background-color: #002D59 !important;
            color: #fff !important;
          }
          
          .btn-primary.cta-yellow-btn,
          .btn.btn-primary,
          .cta-yellow-btn {
            background-color: #FAC001 !important;
            color: #000000 !important;
            border-color: #FAC001 !important;
          }
          .btn-primary.cta-yellow-btn .btn-text,
          .btn.btn-primary .btn-text,
          .cta-yellow-btn .btn-text {
            background-color: transparent !important;
          }
          .btn-primary.cta-yellow-btn *,
          .btn.btn-primary *,
          .cta-yellow-btn * {
            color: #000000 !important;
          }
          .btn-primary.cta-yellow-btn:hover,
          .btn.btn-primary:hover,
          .cta-yellow-btn:hover {
            background-color: #E5AF01 !important;
            color: #ffffff !important;
          }
          .btn-primary.cta-yellow-btn:hover *,
          .btn.btn-primary:hover *,
          .cta-yellow-btn:hover * {
            color: #ffffff !important;
          }
          
          /* Lenis Styling */
          html.lenis {
            height: auto;
          }
          .lenis.lenis-smooth {
            scroll-behavior: auto;
          }
          .lenis.lenis-smooth [data-lenis-prevent] {
            overscroll-behavior: contain;
          }
          .lenis.lenis-stopped {
            overflow: hidden;
          }
          .lenis.lenis-scrolling iframe {
            pointer-events: none;
          }
        `}</style>
      </head>
      <body className={`${manrope.className} ${outfit.variable}`}>
        <SmoothScroll />
        <div id="main-content">
          {children}
        </div>
        <FloatingActions />
        
        {/* Scripts */}
        <Script src="https://code.jquery.com/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" strategy="beforeInteractive" />
        <Script src="/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/libs/aos-master/dist/aos.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/iconify-icon@1.0.8/dist/iconify-icon.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/custom.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
