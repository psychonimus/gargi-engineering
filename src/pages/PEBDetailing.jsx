import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from '../assets/img/services/pebdetailing.png';
import { 
  LuSettings, 
  LuShieldCheck, 
  LuTrendingUp, 
  LuWrench,
  LuLayers,
  LuBoxes,
  LuFileText,
  LuLayoutTemplate,
  LuPenTool,
  LuMonitor,
  LuCpu
} from 'react-icons/lu';
import './PEBDesign.css';

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" fill="#f95700"/>
    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

export default function PEBDetailing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    { name: "3D Structural Modelling", icon: LuBoxes },
    { name: "General Arrangement Drawings", icon: LuLayers },
    { name: "Assembly Drawings", icon: LuLayoutTemplate },
    { name: "Shop Drawings", icon: LuFileText },
    { name: "Erection Drawings", icon: LuPenTool },
    { name: "Part Drawings", icon: LuMonitor },
    { name: "Connection Detailing", icon: LuWrench },
    { name: "Bolt & Weld Detailing", icon: LuSettings },
    { name: "CNC Data Generation", icon: LuCpu },
    { name: "Clash Detection", icon: LuShieldCheck },
    { name: "Revision Management", icon: LuTrendingUp }
  ];

  return (
    <div className="peb-exact-page">
      <Navbar />

      <main className="peb-exact-main">
        {/* Background Grid Pattern */}
        <div className="peb-bg-grid"></div>

        <div className="container">
          {/* HERO SECTION */}
          <section className="peb-hero-section row align-items-center">
            <div className="col-lg-7 peb-hero-left">
              <h1 className="peb-hero-title">
                PEB DETAILING & TEKLA MODELLING
              </h1>
              
              <div className="peb-hero-tagline-wrapper">
                <h3 className="peb-hero-tagline">
                  "Precision that eliminates errors before construction begins."
                </h3>
              </div>
              
              <p className="peb-hero-text">
                Our detailing team converts engineering concepts into highly accurate fabrication-ready models using Tekla Structures. Every connection, bolt, plate, and member is modeled with precision to reduce fabrication errors and accelerate site execution.
              </p>

            </div>

            <div className="col-lg-5 peb-hero-right">
              <div className="peb-hero-image-wrapper">
                <img src={img} alt="PEB Detailing & Tekla Modelling" className="peb-hero-image" />
              </div>
            </div>
          </section>

          {/* BOTTOM SECTION (Capabilities & Deliverables) */}
          <section className="peb-bottom-section row">
            
            {/* CAPABILITIES (Full Width) */}
            <div className="col-lg-12 peb-capabilities-section">
              <h3 className="peb-section-heading">
                Services  <span className="peb-heading-orange">Include</span>
                <span className="peb-heading-line"></span>
              </h3>

              <div className="row g-4">
                {capabilities.map((cap, idx) => (
                  <div key={idx} className="col-lg-3 col-md-4 col-sm-6">
                    <div className="peb-capability-card">
                      <cap.icon className="peb-cap-icon" />
                      <h6 className="peb-cap-title">{cap.name}</h6>
                      <div className="peb-cap-line"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
