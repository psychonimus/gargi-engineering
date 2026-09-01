import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from '../assets/img/services/connection.png';
import { 
  LuSettings, 
  LuShieldCheck, 
  LuTrendingUp, 
  LuWrench,
  LuLayers,
  LuBoxes,
  LuFileText,
  LuPenTool,
  LuMonitor,
  LuActivity,
  LuAnchor
} from 'react-icons/lu';
import './PEBDesign.css';

export default function ConnectionDesign() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    { name: "Moment Connections", icon: LuTrendingUp },
    { name: "Base Plate Design", icon: LuLayers },
    { name: "Bracing Connections", icon: LuWrench },
    { name: "Crane Connections", icon: LuSettings },
    { name: "Beam Connections", icon: LuBoxes },
    { name: "Column Connections", icon: LuMonitor },
    { name: "Weld Design", icon: LuPenTool },
    { name: "Bolt Design", icon: LuSettings },
    { name: "Anchor Bolt Design", icon: LuAnchor }
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
                CONNECTION DESIGN & ENGINEERING
              </h1>
              
              <div className="peb-hero-tagline-wrapper">
                <h3 className="peb-hero-tagline">
                  "Every connection matters."
                </h3>
              </div>
              
              <p className="peb-hero-text">
                Connections are the backbone of every steel structure. Our engineers develop robust, code-compliant connection designs that simplify fabrication while ensuring structural integrity and long-term reliability.
              </p>

            </div>

            <div className="col-lg-5 peb-hero-right">
              <div className="peb-hero-image-wrapper">
                <img src={img} alt="Connection Design & Engineering" className="peb-hero-image" />
              </div>
            </div>
          </section>

          {/* BOTTOM SECTION */}
          <section className="peb-bottom-section row">
            
            {/* CAPABILITIES (Full Width) */}
            <div className="col-lg-12 peb-capabilities-section">
              <h3 className="peb-section-heading">
               Include
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
