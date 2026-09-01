import React, { useEffect, useRef, useState } from "react";
import "./PurposeSection.css";
import purposeBg from "../assets/img/visionbg.png";

const values = [
  {
    title: "Excellence",
    desc: "Engineering precision in every detail.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    )
  },
  {
    title: "Integrity",
    desc: "Transparent processes and honest commitment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    )
  },
  {
    title: "Innovation",
    desc: "Continuously improving through technology and learning.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5.5 5.5 0 0 0 12 2.5 5.5 5.5 0 0 0 6.5 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/>
        <line x1="9" y1="18" x2="15" y2="18"/>
        <line x1="10" y1="22" x2="14" y2="22"/>
      </svg>
    )
  },
  {
    title: "Collaboration",
    desc: "Building strong partnerships with clients and teams.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
  {
    title: "Sustainability",
    desc: "Designing structures that optimize resources and support a better tomorrow.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 22 2c0 5-1 7-5.9 11.2A7 7 0 0 1 11 20z"/>
        <path d="M9 11l-5 5"/>
      </svg>
    )
  }
];

export default function PurposeSection() {
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
    <section className={`purpose-section ${isVisible ? "is-visible" : ""}`} ref={sectionRef}>
      {/* Full-width background image with dark overlay */}
      <div className="purpose-bg-overlay" style={{ backgroundImage: `url(${purposeBg})` }} />

      <div className="purpose-inner">

        {/* ── HEADER ── */}
        <div className="purpose-header">
          <div className="purpose-tag-row">
          
            <span className="eng-tag">OUR PURPOSE</span>
         
          </div>
          <h2 className="purpose-main-title">
            Our <span className="highlight-text">Vision</span>. Our{" "}
            <span className="highlight-text">Mission</span>. Our{" "}
            <span className="highlight-text">Values</span>.
          </h2>
        </div>

        {/* ── VISION & MISSION CARDS ── */}
        <div className="purpose-cards-row">

          {/* Vision Card */}
          <div className="purpose-card vision-card">
            {/* Icon LEFT | Text RIGHT */}
            <div className="card-circle-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <div className="card-text-content">
              <span className="card-label">OUR VISION</span>
              <h3 className="card-title">Building the Future<br />Through Better Engineering</h3>
              <p className="card-description">
                To become one of India's most trusted engineering companies by delivering innovative,
                high-quality, and sustainable structural solutions that enable industries to build
                faster, smarter, and more efficiently.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="purpose-card mission-card">
            {/* Icon LEFT | Text RIGHT */}
            <div className="card-circle-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#E63A27" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
              </svg>
            </div>
            <div className="card-text-content">
              <span className="card-label">OUR MISSION</span>
              <p className="card-description">
                To combine engineering excellence, advanced technology, and collaborative partnerships to
                deliver high-quality structural solutions that exceed client expectations while ensuring
                precision, safety, and long-term value.
              </p>
            </div>
          </div>

        </div>


        {/* ── VALUES STRIP ── */}
        <div className="values-strip">
          <div className="values-strip-header">
            <span className="values-strip-line" />
            <span className="values-strip-label">OUR VALUES</span>
            <span className="values-strip-line" />
          </div>
          <div className="values-row">
            {values.map((val, idx) => (
              <div className="value-item-col" key={idx}>
                <div className="value-icon-wrap">
                  <div className="value-icon-inner">{val.icon}</div>
                </div>
                <h5 className="value-title">{val.title}</h5>
                <p className="value-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
