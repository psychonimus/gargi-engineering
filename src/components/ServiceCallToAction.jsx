import React, { useEffect, useRef, useState } from 'react';
import { LuCalendar, LuArrowRight } from 'react-icons/lu';
import ctaImg from '../assets/img/services/cta.png';
import ConsultationModal from './ConsultationModal';
import './ServiceCTA.css';

export default function ServiceCTA() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.15 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <>
      <section className="service-cta-section" ref={ctaRef}>
        <div className="container">
          <div className="service-cta-card">
            <div className="row align-items-center">
              {/* Left Content Area */}
              <div className="col-lg-6 col-xl-6">
                <div className="service-cta-content">
                  <div className="cta-tag-row">
                    <span className="eng-tag">FINAL CALL TO ACTION</span>
                  </div>

                  <h2 className="cta-heading">
                    Let's Engineer Your Next Landmark Project
                  </h2>

                  <p className="cta-body-text">
                    Whether you're planning a new industrial facility, expanding an existing plant, or looking to optimize your steel structure, our engineering team is ready to collaborate.
                  </p>

                  <div className="cta-button-group">
                    <button 
                      type="button" 
                      className="cta-primary-btn"
                      onClick={() => setIsConsultationOpen(true)}
                    >
                      <LuCalendar className="btn-icon-left" />
                      Schedule a Consultation
                      <LuArrowRight className="btn-icon-right" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Image Area */}
              <div className="col-lg-6 col-xl-6">
                <div className="service-cta-img-wrap">
                  <img 
                    src={ctaImg} 
                    alt="Industrial Plant Blueprint Design" 
                    className="service-cta-img"
                  />
                </div>
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
