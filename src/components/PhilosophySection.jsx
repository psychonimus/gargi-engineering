import React, { useEffect, useRef, useState } from "react";
import "./PhilosophySection.css";
import bgImg from "../assets/img/about/background.png";
import precisionImg from "../assets/img/about/precision.png";
import optimizationImg from "../assets/img/about/optimiztion.png";
import collaborationImg from "../assets/img/about/collabration.png";
import executionImg from "../assets/img/about/excution.png";

const principles = [
  {
   
    title: "Precision",
    desc: "Every model, drawing, and calculation is developed with meticulous attention to detail to minimize errors during fabrication and erection.",
    image: precisionImg,
    theme: "#E55206",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="6"/>
        <line x1="12" y1="2" x2="12" y2="22"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
      </svg>
    )
  },
  {
  
    title: "Optimization",
    desc: "Our value engineering approach reduces unnecessary steel consumption while maintaining structural integrity, helping clients achieve significant cost efficiencies.",
    image: optimizationImg,
    theme: "#E55206",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/>
        <path d="M18 9l-5 5-3-3-5 5"/>
        <path d="M18 9h-4v-4"/>
        <rect x="7" y="14" width="2" height="6"/>
        <rect x="11" y="11" width="2" height="9"/>
        <rect x="15" y="8" width="2" height="12"/>
      </svg>
    )
  },
  {
   
    title: "Collaboration",
    desc: "Successful projects are built through close coordination with architects, consultants, contractors, and fabrication teams throughout the project lifecycle.",
    image: collaborationImg,
    theme: "#E55206",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
  {
  
    title: "Execution Focus",
    desc: "Engineering should simplify construction not complicate it. Every deliverable is created with fabrication and site execution in mind, enabling faster installation and smoother project delivery.",
    image: executionImg,
    theme: "#E55206",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18"/>
        <path d="M6 21v-4l-3-3"/>
        <path d="M9 17v4"/>
        <path d="M12 21v-8M12 13L9 9h6l-3 4"/>
        <path d="M8 9h8M10 5h4M12 9V2M9 5H3M21 5h-6"/>
      </svg>
    )
  }
];

export default function PhilosophySection() {
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
    <section id="philosophy" className={`philosophy-section ${isVisible ? "is-visible" : ""}`} ref={sectionRef}>
      <div className="phil-bg-container">
        <img src={bgImg} alt="Engineering Blueprint Background" className="phil-bg-img" />
      </div>
      
      <div className="phil-container">
        {/* Header Block */}
        <div className="phil-header-box">
          <div className="eng-tag">ENGINEERING PHILOSOPHY</div>
          <h2 className="process-main-title">
            Every Structure Begins<br />
            with Better Engineering
          </h2>
         
          <div className="phil-desc-container">
            <p>
              At Gargi Engineering, we believe the quality of construction is determined long before fabrication begins. 
              The foundation of every successful project lies in intelligent engineering, accurate detailing, and collaborative planning.
            </p>
            <p className="phil-bold">Our philosophy is built around four core principles.</p>
          </div>
        </div>

        {/* 4 Cards Carousel */}
        <div className="phil-cards-wrapper">
          {principles.map((pr, idx) => (
            <React.Fragment key={idx}>
              <div className="phil-card">
                <div className="phil-card-img-wrapper">
                  <img src={pr.image} alt={pr.title} className="phil-card-image" />
                  <div className="phil-card-icon" style={{ backgroundColor: pr.theme }}>
                    {pr.icon}
                  </div>
                </div>
                <div className="phil-card-body">
                  <h3 className="phil-card-title" style={{ color: pr.theme }}>{pr.title}</h3>
                  <p className="phil-card-desc">{pr.desc}</p>
                  <div className="phil-card-bottom">
                    <div className="phil-card-line" style={{ backgroundColor: pr.theme }}></div>
                    
                  </div>
                </div>
              </div>
              
              {/* Arrow separator (don't show after last item) */}
              {idx < principles.length - 1 && (
                <div className="phil-arrow-sep">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="#a0aabf" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="phil-pagination">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
}
