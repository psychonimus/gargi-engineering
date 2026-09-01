import React, { useState, useEffect } from "react";
import "./TechnologySection.css";
import techThumb from "../assets/img/about/technology.png";
import structureThumb from "../assets/img/about/3dstructure.png";
import connectionthumb from '../assets/img/about/connection.png'
import materialthumb from '../assets/img/about/material.png'
import billthumb from '../assets/img/about/bill.png'
import structuralthumb from '../assets/img/about/structural.png'
import clashthumb from '../assets/img/about/clash.png'
import fabthumb from '../assets/img/about/fabrication.png'
import erectionthumb from '../assets/img/about/erection.png'
import quantitythumb from '../assets/img/about/quantity.png'
import designthumb from '../assets/img/about/design.png'

const capabilities = [
  {
    id: 0,
    title: "3D Structural Modelling",
    desc: "Intelligent virtual design and detailing solutions.",
    image: structureThumb,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    )
  },
  {
    id: 1,
    title: "Connection Design",
    desc: "Rigorous analytical testing for joints and nodes.",
    image: connectionthumb,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    )
  },
  {
    id: 2,
    title: "Material Take-Off",
    desc: "Precise computations to determine necessary building materials.",
    image: materialthumb,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    )
  },
  {
    id: 3,
    title: "Bill of Quantities",
    desc: "Thorough pricing breakdowns to optimize client budgets.",
    image: billthumb,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    )
  },
  {
    id: 4,
    title: "Structural Analysis",
    desc: "Robust stress calculations for optimal safety standards.",
    image: structuralthumb,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    )
  },
  {
    id: 5,
    title: "Clash Detection",
    desc: "Interference checks to solve errors before fabrication.",
    image: clashthumb,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="22" y1="12" x2="18" y2="12"/>
        <line x1="6" y1="12" x2="2" y2="12"/>
        <line x1="12" y1="6" x2="12" y2="2"/>
        <line x1="12" y1="22" x2="12" y2="18"/>
      </svg>
    )
  },
  {
    id: 6,
    title: "Fabrication Drawings",
    desc: "Detail-oriented plans for streamlined structural fabrication.",
    image: fabthumb,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    )
  },
  {
    id: 7,
    title: "Erection Drawings",
    desc: "Clear visual guidelines for safe field installations.",
    image: erectionthumb,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    )
  },
  {
    id: 8,
    title: "Quantity Optimization",
    desc: "Value engineering to reduce steel consumption cost.",
    image: quantitythumb,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"/>
        <line x1="5" y1="12" x2="19" y2="12"/>
      </svg>
    )
  },
  {
    id: 9,
    title: "Design Coordination",
    desc: "Unified design platforms to align all stakeholders.",
    image: designthumb,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  }
];

export default function TechnologySection() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveCardIndex((prevIndex) => (prevIndex + 1) % capabilities.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const activeCapability = capabilities[activeCardIndex];

  return (
    <section 
      id="technology"
      className="tech-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="tech-container">
        
        {/* Header */}
        <div className="tech-modern-header">
          <div className="tech-tag-row">
            <span className="eng-tag">TECHNOLOGY driven workflows</span>
          </div>
          
          <h2 className="tech-modern-title">
            Engineering Powered by Digital Innovation
          </h2>
          
          <p className="tech-modern-subtitle">
            Modern engineering demands precision, coordination, and speed. Our technology-driven workflows enable us to deliver highly accurate, fabrication-ready engineering solutions while reducing rework and improving project efficiency.
          </p>
        </div>

        {/* Dynamic Split Row */}
        <div className="tech-interactive-grid">
          
          {/* Left Cards Block */}
          <div className="tech-cards-column">
            {capabilities.slice(0, 5).map((cap) => (
              <div 
                className={`tech-row-card ${activeCardIndex === cap.id ? 'active' : ''}`}
                key={cap.id}
                onClick={() => setActiveCardIndex(cap.id)}
              >
                <div className="tech-card-icon-wrap">
                  {cap.icon}
                </div>
                <div className="tech-card-text">
                  <h3 className="tech-card-title">{cap.title}</h3>
                  <p className="tech-card-desc">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Graphic Frame with Dynamic Active Image */}
          <div className="tech-center-interactive-col">
            <div className="tech-model-showcase-wrap">
              <div className="tech-model-showcase">
                <img 
                  key={activeCapability.id}
                  src={activeCapability.image} 
                  alt={activeCapability.title} 
                  className="tech-showcase-image img-fade-in" 
                />
              </div>
            </div>
          </div>

          {/* Right Cards Block */}
          <div className="tech-cards-column">
            {capabilities.slice(5, 10).map((cap) => (
              <div 
                className={`tech-row-card ${activeCardIndex === cap.id ? 'active' : ''}`}
                key={cap.id}
                onClick={() => setActiveCardIndex(cap.id)}
              >
                <div className="tech-card-icon-wrap">
                  {cap.icon}
                </div>
                <div className="tech-card-text">
                  <h3 className="tech-card-title">{cap.title}</h3>
                  <p className="tech-card-desc">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
