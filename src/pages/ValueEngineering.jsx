import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from '../assets/img/services/value.png';
import { 
  LuTrendingDown,
  LuFactory,
  LuDollarSign,
  LuWrench,
  LuClock,
  LuTrendingUp
} from 'react-icons/lu';
import './PEBDesign.css';

export default function ValueEngineering() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    { name: "Reduced Steel Consumption", icon: LuTrendingDown },
    { name: "Optimized Fabrication", icon: LuFactory },
    { name: "Lower Construction Cost", icon: LuDollarSign },
    { name: "Simplified Installation", icon: LuWrench },
    { name: "Reduced Project Timelines", icon: LuClock },
    { name: "Better Return on Investment", icon: LuTrendingUp }
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
                VALUE ENGINEERING
              </h1>
              
              <div className="peb-hero-tagline-wrapper">
                <h3 className="peb-hero-tagline">
                  "Engineering smarter, not heavier."
                </h3>
              </div>
              
              <p className="peb-hero-text">
                Our value engineering process focuses on optimizing structural performance while reducing unnecessary material consumption and project costs. We analyze multiple design alternatives to achieve the most economical solution without compromising safety or functionality.
              </p>

            </div>

            <div className="col-lg-5 peb-hero-right">
              <div className="peb-hero-image-wrapper">
                <img src={img} alt="Value Engineering" className="peb-hero-image" />
              </div>
            </div>
          </section>

          {/* BOTTOM SECTION */}
          <section className="peb-bottom-section row">
            
            {/* CAPABILITIES (Full Width) */}
            <div className="col-lg-12 peb-capabilities-section">
              <h3 className="peb-section-heading">
                Benefits
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
