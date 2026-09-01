import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from '../assets/img/services/fabrication.png';
import { 
  LuMessageSquare,
  LuFactory,
  LuUsers,
  LuPenTool,
  LuFileText,
  LuSettings
} from 'react-icons/lu';
import './PEBDesign.css';

export default function FabricationSupport() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    { name: "Technical Clarifications", icon: LuMessageSquare },
    { name: "Fabrication Coordination", icon: LuFactory },
    { name: "Site Engineering Support", icon: LuUsers },
    { name: "Drawing Revisions", icon: LuPenTool },
    { name: "As-built Documentation", icon: LuFileText },
    { name: "Engineering Change Management", icon: LuSettings }
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
                FABRICATION & CONSTRUCTION SUPPORT
              </h1>
              
              <div className="peb-hero-tagline-wrapper">
                <h3 className="peb-hero-tagline">
                  "Engineering doesn't stop at drawings."
                </h3>
              </div>
              
              <p className="peb-hero-text">
                We work closely with fabrication teams and site engineers throughout project execution to ensure smooth coordination, quick issue resolution, and successful project delivery.
              </p>

            </div>

            <div className="col-lg-5 peb-hero-right">
              <div className="peb-hero-image-wrapper">
                <img src={img} alt="Fabrication & Construction Support" className="peb-hero-image" />
              </div>
            </div>
          </section>

          {/* BOTTOM SECTION */}
          <section className="peb-bottom-section row">
            
            {/* CAPABILITIES (Full Width) */}
            <div className="col-lg-12 peb-capabilities-section">
              <h3 className="peb-section-heading">
                Support <span className="peb-heading-orange">Includes</span>
                <span className="peb-heading-line"></span>
              </h3>

              <div className="row g-4">
                {capabilities.map((cap, idx) => (
                  <div key={idx} className="col-lg-4 col-md-6 col-sm-6">
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
