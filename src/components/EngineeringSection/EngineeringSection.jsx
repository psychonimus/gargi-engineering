import React, { useEffect, useRef, useState } from "react";
import "./EngineeringSection.css";
import overviewVideo from "../../assets/img/overviewvideo.mp4";

const advantages = [
  {
    label: "Complete PEB Engineering Solutions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
  {
    label: "Fabrication-Ready Detailing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
      </svg>
    ),
  },
  {
    label: "Value Engineering for Material Optimization",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
  {
    label: "Zero-Error Engineering Philosophy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
        <line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/>
        <line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/>
      </svg>
    ),
  },
  {
    label: "Digital Engineering using Tekla & STAAD",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    label: "Fast Turnaround with High Accuracy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 1-10 10"/><polyline points="12 6 12 12 16 14"/>
        <path d="M2 12C2 6.48 6.48 2 12 2"/>
      </svg>
    ),
  },
  {
    label: "Compliance with Indian & International Design Standards",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
];

const EngineeringSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="company" className={`eng-section ${isVisible ? "is-visible" : ""}`} ref={sectionRef}>
      {/* ── TOP: text + image ── */}
      <div className="eng-top">
        <div className="eng-text">
          <span className="eng-tag">OVERVIEW</span>
          <h2 className="eng-heading">
            Engineering Beyond
          Structures
          </h2>
          <p className="eng-para">
            Gargi Engineering Services is a specialized structural engineering and PEB consulting company delivering end-to-end solutions for industrial, commercial, and infrastructure projects. Our expertise spans Pre-Engineered Buildings (PEB), structural steel design, detailing, estimation, value engineering, and turnkey engineering support.
          </p>
          <p className="eng-para">
            We believe engineering is more than calculations it is about creating structures that are stronger, more efficient, easier to fabricate, and faster to construct. Every solution is developed with a focus on reducing project complexity, optimizing material usage, and ensuring seamless execution on-site.
          </p>
          <p className="eng-para">
            Working closely with architects, fabricators, EPC contractors, and project owners, we deliver engineering solutions that balance functionality, safety, aesthetics, and commercial viability.
          </p>
        </div>

        <div className="eng-image-wrap">
          <video 
            src={overviewVideo} 
            className="eng-img" 
            autoPlay 
            loop 
            muted 
            playsInline 
          />
        </div>
      </div>

      {/* ── BOTTOM: What Sets Us Apart card ── */}
      <div className="eng-apart-card">
        <div className="eng-apart-heading-row">
          <span className="eng-apart-line" />
          <h3 className="eng-apart-title">What Sets Us Apart</h3>
          <span className="eng-apart-line" />
        </div>

        <div className="eng-apart-grid">
          {advantages.map((item, i) => (
            <div className="eng-apart-item" key={i}>
              <span className="eng-apart-icon">{item.icon}</span>
              <span className="eng-apart-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* bottom skyline decoration */}
      <div className="eng-skyline-bar" />
    </section>
  );
};

export default EngineeringSection;