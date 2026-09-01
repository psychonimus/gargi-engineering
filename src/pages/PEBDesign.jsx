import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import pebdesignImg from '../assets/img/services/pebpage.png';
import {
  LuSettings,
  LuShieldCheck,
  LuFactory,
  LuHammer,
  LuBuilding2,
  LuLayers,
  LuWarehouse
} from 'react-icons/lu';
import './PEBDesign.css';

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" fill="#f95700" />
    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export default function PEBDesign() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const capabilities = [
    { name: "Structural Analysis", icon: LuBuilding2 },
    { name: "PEB Design", icon: LuWarehouse },
    { name: "Steel Building Design", icon: LuLayers },
    { name: "Crane Building Design", icon: LuSettings },
    { name: "Multi-storey Steel Structures", icon: LuBuilding2 },
    { name: "Industrial Buildings", icon: LuFactory },
    { name: "Warehouse Structures", icon: LuWarehouse },
    { name: "Mezzanine Floors", icon: LuLayers },
    { name: "Pipe Rack Systems", icon: LuSettings },
    { name: "Canopies", icon: LuBuilding2 },
    { name: "Staircases", icon: LuLayers },
    { name: "Platform Structures", icon: LuSettings }
  ];

  const deliverables = [
    "Structural Calculations",
    "Design Reports",
    "Load Analysis",
    "Engineering Drawings",
    "Fabrication Drawings",
    "Construction Support"
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
                PEB DESIGN & STRUCTURAL <br />
                ENGINEERING
              </h1>

              <div className="peb-hero-tagline-wrapper">
                <h3 className="peb-hero-tagline">
                  "Strong engineering begins with intelligent design."
                </h3>
              </div>

              <p className="peb-hero-text">
                We provide complete Pre-Engineered Building (PEB) design solutions with a focus on structural safety, material optimization and cost-effective engineering. Our design approach ensures that every structure is optimized as per project requirements, site conditions and applicable design standards. <br /><br />
                Gargi Engineering knowledge archives has variety
                of design codes such as AISC, MBMA, AWS, UBC,
                ASCE, IBC, IS. The buildings are designed as per
                universal codes like AISC/ IS as per utility of the
                building in consultation with the client/ consultant. The
                latest software that is used for design is STAAD pro.

              </p>

            </div>

            <div className="col-lg-5 peb-hero-right">
              <div className="peb-hero-image-wrapper">
                <img src={pebdesignImg} alt="PEB Design" className="peb-hero-image" />
              </div>
            </div>
          </section>



          {/* BOTTOM SECTION (Capabilities & Deliverables) */}
          <section className="peb-bottom-section row">

            {/* CAPABILITIES (Left) */}
            <div className="col-lg-8 peb-capabilities-section">
              <h3 className="peb-section-heading">
                OUR <span className="peb-heading-orange">CAPABILITIES</span>
                <span className="peb-heading-line"></span>
              </h3>

              <div className="row g-4">
                {capabilities.map((cap, idx) => (
                  <div key={idx} className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className="peb-capability-card">
                      <cap.icon className="peb-cap-icon" />
                      <h6 className="peb-cap-title">{cap.name}</h6>
                      <div className="peb-cap-line"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DELIVERABLES (Right) */}
            <div className="col-lg-4 peb-deliverables-wrap">
              <div className="peb-deliverables-panel">
                <h3 className="peb-panel-heading">
                  DELIVERABLES
                  <span className="peb-panel-heading-line"></span>
                </h3>

                <ul className="peb-deliverables-list">
                  {deliverables.map((item, idx) => (
                    <li key={idx} className="peb-deliv-item">
                      <CheckIcon />
                      <span className="peb-deliv-text">{item}</span>
                    </li>
                  ))}
                </ul>
                {/* Subtle blueprint overlay for panel */}
                <div className="peb-panel-bg"></div>
              </div>
            </div>

          </section>



        </div>
      </main>

      <Footer />
    </div>
  );
}
