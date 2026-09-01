import React, { useRef, useEffect, useState } from 'react';
import './ProjectCTA.css';
import ctaBuildingImg from '../assets/img/industry/hero.png';
import ConsultationModal from './ConsultationModal';

export default function ProjectCTA() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(node); }
      },
      { threshold: 0.12 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className={`proj-cta-section ${isVisible ? 'cta-visible' : ''}`}
        id="project-cta"
      >
        {/* ── RIGHT IMAGE — Positioned directly relative to section for 100% right screen edge bleed ── */}
        <div className="proj-cta-right">
          <div className="cta-merged-image-wrapper">
            <img
              src={ctaBuildingImg}
              alt="Industrial Engineering Architecture"
              className="cta-merged-img"
            />
            <div className="cta-merged-blend-overlay" />
          </div>
        </div>

        {/* ── LEFT CONTENT CONTAINER ── */}
        <div className="proj-cta-container">
          <div className="proj-cta-grid">
            <div className="proj-cta-left">
              <h2 className="cta-headline">
                Ready to Build Your<br />
                Next Landmark Project?
              </h2>

              <p className="cta-desc">
                Whether you're planning a manufacturing facility, logistics hub,
                warehouse, or industrial plant, our engineering team is ready
                to partner with you from concept to completion.
              </p>

              <div className="cta-btn-group">
                <button 
                  type="button" 
                  className="cta-btn-primary"
                  onClick={() => setIsConsultationOpen(true)}
                >
                  Discuss Your Project
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />
    </>
  );
}
