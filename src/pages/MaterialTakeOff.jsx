import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from '../assets/img/services/material.png';
import { 
  LuFileText,
  LuScale,
  LuList,
  LuClipboardList,
  LuShoppingCart,
  LuCalculator
} from 'react-icons/lu';
import './PEBDesign.css';

export default function MaterialTakeOff() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    { name: "Bill of Quantities", icon: LuFileText },
    { name: "Weight Summary", icon: LuScale },
    { name: "Member Lists", icon: LuList },
    { name: "Material Reports", icon: LuClipboardList },
    { name: "Procurement Support", icon: LuShoppingCart },
    { name: "Cost Estimation", icon: LuCalculator }
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
                MATERIAL TAKE-OFF & ESTIMATION
              </h1>
              
              <div className="peb-hero-tagline-wrapper">
                <h3 className="peb-hero-tagline">
                  "Accurate quantities. Better planning."
                </h3>
              </div>
              
              <p className="peb-hero-text">
                Reliable quantity estimation is essential for successful project planning. We prepare precise material take-offs and Bills of Quantities (BOQs) that support procurement, fabrication, costing, and project management.
              </p>

            </div>

            <div className="col-lg-5 peb-hero-right">
              <div className="peb-hero-image-wrapper">
                <img src={img} alt="Material Take-Off & Estimation" className="peb-hero-image" />
              </div>
            </div>
          </section>

          {/* BOTTOM SECTION */}
          <section className="peb-bottom-section row">
            
            {/* CAPABILITIES (Full Width) */}
            <div className="col-lg-12 peb-capabilities-section">
              <h3 className="peb-section-heading">
                Deliverables
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
