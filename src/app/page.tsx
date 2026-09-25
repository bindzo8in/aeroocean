import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Banner, Stats } from "@/components/Hero";
import { Projects, Services } from "@/components/ServicesProjects";
import { About, Testimonials } from "@/components/AboutTestimonials";
import { Pricing, Contact } from "@/components/ReachContact";

export default function Home() {
  return (
    <>
      <Header />
      
      <div className="page-wrapper overflow-hidden">
        <Banner />
        <About />
        <Services />
        <Projects />
        <Stats />
        <Testimonials />
        <Pricing />
        <Contact />
      </div>

      <Footer />

    </>
  );
}
