import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import pmcImg from '../assets/img/services/pmc.png';
import {
  LuCalendarCheck,
  LuUsers,
  LuShieldCheck,
  LuTrendingUp,
  LuLayers,
  LuBuilding2,
  LuFactory,
  LuFileCheck,
  LuActivity,
  LuClock,
  LuDollarSign,
  LuClipboardCheck,
  LuWorkflow,
  LuHardHat
} from 'react-icons/lu';
import './PEBDesign.css';

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" fill="#f95700" />
    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export default function PMC() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    { name: "Planning & Scheduling", icon: LuCalendarCheck },
    { name: "Stakeholder Coordination", icon: LuUsers },
    { name: "Fabrication Quality Audits", icon: LuFactory },
    { name: "Erection Site Monitoring", icon: LuHardHat },
    { name: "Cost & Budget Control", icon: LuDollarSign },
    { name: "Material Reconciliation", icon: LuLayers },
    { name: "Technical Quality Audits", icon: LuShieldCheck },
    { name: "Risk & Change Management", icon: LuTrendingUp },
    { name: "Drawing Coordination", icon: LuFileCheck },
    { name: "Safety & Compliance", icon: LuClipboardCheck },
    { name: "Progress Reporting", icon: LuActivity },
    { name: "Handover & As-Built Verification", icon: LuWorkflow }
  ];

  const deliverables = [
    "Project Execution Plan (PEP)",
    "Master Schedule & Milestones",
    "Fabrication Quality Audit Reports",
    "Site Progress & Safety Reports",
    "Material Tracking Sheets",
    "Cost & Variance Analysis",
    "Comprehensive Handover Dossier"
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
                PROJECT MANAGEMENT <br />
                CONSULTANCY (PMC)
              </h1>

              <div className="peb-hero-tagline-wrapper">
                <h3 className="peb-hero-tagline">
                  "Overseeing execution, ensuring quality, and delivering on time."
                </h3>
              </div>

              <p className="peb-hero-text">
                Project Management Consultancy refers to specialized project management services, particularly in construction and infrastructure projects. PMCs oversee planning, execution, monitoring, and reporting to ensure projects are completed on time, within budget, and to quality standards.
                <br /><br />
                <strong>Gargi Engineering Services</strong> provides Project Management Consultancy (PMC) services for PEB and structural steel projects, ensuring proper coordination between the client, manufacturer, fabricator, erection team and other project stakeholders. We focus on practical engineering coordination and continuous project monitoring, helping clients maintain control over quality, cost, schedule and execution throughout the PEB project lifecycle.
              </p>
            </div>

            <div className="col-lg-5 peb-hero-right">
              <div className="peb-hero-image-wrapper">
                <img src={pmcImg} alt="Project Management Consultancy" className="peb-hero-image" />
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
