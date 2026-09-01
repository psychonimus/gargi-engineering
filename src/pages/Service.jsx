import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCards from "../components/ServiceCards";
import ProcessWorkflow from "../components/ProcessWorkflow";
import ServiceFAQ from "../components/ServiceFAQ";
import ServiceCTA from "../components/ServiceCallToAction";
import herobg from '../assets/img/services/herobg.png';
import serviceBackImg from '../assets/img/services/back.png';
import '../pages/service.css'

export default function Service() {
  const introRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.15 }
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => {
      if (introRef.current) {
        observer.unobserve(introRef.current);
      }
    };
  }, []);
  return (
    <>
      <Navbar />

      {/* Hero Section */}
           <div
             className="about-page-hero service-page-hero"
             style={{
               backgroundImage: `url(${herobg})`
             }}
           >
             <div className="about-page-hero-overlay"></div>
             <div className="container">
               <div className="about-page-hero-content text-start">
                
                 <h1 className="about-hero-title">
                  Engineering Solutions That 
<br />
                Transform Ideas  into Buildable Structures

                 </h1>
                
               </div>
             </div>
           </div>

      {/* Overview Intro Section */}
      <section className="service-intro-section" ref={introRef}>
        <div className="container-fluid p-0">
          <div className="row align-items-stretch g-0">
            <div className="col-lg-6 col-xl-6">
              <div className="service-intro-content">
                <span className="eng-tag service-tag">OVERVIEW</span>
                <h3 className="service-intro-heading">Comprehensive Structural & <br></br>PEB Solutions</h3>
                <p className="service-intro-body">
                  Whether you're planning a new industrial facility, expanding an existing plant, or optimizing a complex steel structure, Gargi Engineering delivers comprehensive engineering solutions that combine{" "}
                  <span className="service-highlight-blue">technical precision</span>,{" "}
                  <span className="service-highlight-blue">digital expertise</span>, and{" "}
                  <span className="service-highlight-blue">practical execution</span>.
                </p>
                <p className="service-intro-body">
                  From concept engineering to fabrication-ready detailing, we partner with clients throughout the project lifecycle to ensure every structure is optimized for performance, efficiency, and long-term value.
                </p>
               
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="service-intro-img-wrap">
                <img
                  src={serviceBackImg}
                  alt="Gargi Engineering Steel Structure Solutions"
                  className="service-intro-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <ServiceCards />
      <ProcessWorkflow />
      <ServiceFAQ />
      <ServiceCTA />
      <Footer />
    </>
  );
}
