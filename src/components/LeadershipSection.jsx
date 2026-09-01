import React, { useEffect, useRef, useState } from "react";
import "./LeadershipSection.css";
import leaderImg from "../assets/img/about/leaderperson.png";
import testiBg from "../assets/img/testi_bg_1.png";

const principles = [
  {
    title: "Engineering First",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E55206" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    )
  },
  {
    title: "Customer Partnership",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E55206" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    title: "Continuous Innovation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E55206" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5.5 5.5 0 0 0 12 2.5 5.5 5.5 0 0 0 6.5 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
        <line x1="9" y1="18" x2="15" y2="18" />
        <line x1="10" y1="22" x2="14" y2="22" />
      </svg>
    )
  },
  {
    title: "Accountability",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E55206" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 11 11 13 15 9" />
      </svg>
    )
  }
];

export default function LeadershipSection() {
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
    <section id="leadership" className={`lead-section ${isVisible ? "is-visible" : ""}`} ref={sectionRef}>
      <div className="lead-container">

        {/* Main Dark Navy Container */}
        <div className="lead-card-box">

          {/* Content Split: Left Text + Right Person Photo */}
          <div className="lead-content-grid">

            {/* Left Side details */}
            <div className="lead-text-side">
              <span className="eng-tag">LEADERSHIP</span>

              <h2 className="lead-main-heading">
                Driven by Engineering.<br />
                Inspired by Innovation.
              </h2>

             

              <p className="lead-desc-para">
                At Gargi Engineering, we combine precise engineering with forward-thinking innovation to deliver exceptional results.
              </p>
              <p className="lead-desc-para">
                From structural steel to custom roofing, our solutions are built on quality, efficiency, and integrity.
              </p>
            </div>

            {/* Right Side Leader Person Cutout */}
            <div className="lead-person-side">
              <img src={leaderImg} alt="Gargi Engineering Leadership" className="lead-person-img" />
            </div>

          </div>

          {/* Bottom Floating White Container */}
          <div className="lead-white-strip">
            {principles.map((item, idx) => (
              <div className="lead-strip-item" key={idx}>
                <div className="lead-strip-icon">{item.icon}</div>
                <span className="lead-strip-title">{item.title}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
