import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from '../assets/img/services/digital.png';
import { 
  LuBoxes,
  LuActivity,
  LuPenTool
} from 'react-icons/lu';
import './PEBDesign.css';

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" fill="#f95700"/>
    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

export default function DigitalEngineering() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const techStack = [
    {
      software: "Tekla Structures",
      icon: LuBoxes,
      features: [
        "3D Modelling",
        "Fabrication Drawings",
        "Steel Detailing",
        "Connection Modelling"
      ]
    },
    {
      software: "STAAD.Pro",
      icon: LuActivity,
      features: [
        "Structural Analysis",
        "Load Calculations",
        "Code Compliance",
        "Design Optimization"
      ]
    },
    {
      software: "AutoCAD",
      icon: LuPenTool,
      features: [
        "Construction Drawings",
        "Detailing",
        "General Arrangement Drawings"
      ]
    }
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
                DIGITAL ENGINEERING SERVICES
              </h1>
              
              <div className="peb-hero-tagline-wrapper">
                <h3 className="peb-hero-tagline">
                  "Engineering Driven by Technology"
                </h3>
              </div>
              
              <p className="peb-hero-text">
                Our engineering workflow leverages industry-leading software to deliver faster, more accurate, and fabrication-ready solutions.
              </p>

            </div>

            <div className="col-lg-5 peb-hero-right">
              <div className="peb-hero-image-wrapper">
                <img src={img} alt="Digital Engineering Services" className="peb-hero-image" />
              </div>
            </div>
          </section>

          {/* BOTTOM SECTION */}
          <section className="peb-bottom-section row">
            
            {/* TECHNOLOGY STACK (Full Width) */}
            <div className="col-lg-12 peb-capabilities-section">
              <h3 className="peb-section-heading">
                Technology <span className="peb-heading-orange">Stack</span>
                <span className="peb-heading-line"></span>
              </h3>

              <div className="row g-4">
                {techStack.map((tech, idx) => (
                  <div key={idx} className="col-lg-4 col-md-6">
                    <div className="peb-deliverables-panel" style={{ height: '100%', marginTop: 0 }}>
                      <h3 className="peb-panel-heading" style={{ fontSize: '22px', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <tech.icon style={{ color: '#f95700', fontSize: '28px', flexShrink: 0 }} />
                        {tech.software}
                        <span className="peb-panel-heading-line"></span>
                      </h3>

                      <ul className="peb-deliverables-list">
                        {tech.features.map((item, fIdx) => (
                          <li key={fIdx} className="peb-deliv-item" style={{ padding: '15px 0' }}>
                            <CheckIcon />
                            <span className="peb-deliv-text">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="peb-panel-bg"></div>
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
