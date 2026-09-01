import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from '../assets/img/services/civil2.jpeg';
import img2 from '../assets/img/civil-car-1.jpeg';
import img3 from '../assets/img/civil-car-2.jpeg';
import img4 from '../assets/img/civil-car-3.jpeg';
import {
  LuBuilding,
  LuLayers,
  LuMessageSquare,
  LuSettings,
  LuUsers,
  LuCalendar,
  LuChevronLeft,
  LuChevronRight
} from 'react-icons/lu';
import './PEBDesign.css';

const carouselImages = [img, img2, img3, img4];

export default function CivilDesign() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Automatic slide transition every 3.5s
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const capabilities = [
    { name: "RCC Design", icon: LuBuilding },
    { name: "Foundation Design", icon: LuLayers },
    { name: "Structural Consultancy", icon: LuMessageSquare },
    { name: "Construction Management", icon: LuSettings },
    { name: "Site Coordination", icon: LuUsers },
    { name: "Project Planning", icon: LuCalendar }
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
            <div className="col-lg-6 peb-hero-left">
              <h1 className="peb-hero-title" style={{ lineHeight: '1.4' }}>
                CIVIL DESIGN & CONSTRUCTION<br></br> <span className="heading-tag">CONSULTING</span>
              </h1>

              <div className="peb-hero-tagline-wrapper" style={{ borderLeftColor: 'transparent', paddingLeft: 0, marginTop: '30px' }}>
                <p className="peb-hero-text" style={{ marginTop: 0 }}>
                  Beyond structural steel, we provide civil engineering support that integrates seamlessly with your building design. <br /><br />
                  We provide complete Civil and RCC Design & Execution services for PEB and industrial projects, covering all civil infrastructure required for the project—from foundation to miscellaneous supporting structures like RCC Office Building Design, Water Tank Design, Security Cabin Design, Utility & Service Structures, Paint Shop Civil & RCC Design
                </p>
              </div>

            </div>

            <div className="col-lg-6 peb-hero-right">
              <div
                className="peb-hero-image-wrapper"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="peb-hero-carousel-wrapper">
                  <div
                    className="peb-hero-carousel-track"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {carouselImages.map((imageSrc, index) => (
                      <div key={index} className="peb-hero-carousel-slide">
                        <img
                          src={imageSrc}
                          alt={`Civil Design & Construction Consulting Slide ${index + 1}`}
                          className="peb-hero-image"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    type="button"
                    className="peb-hero-carousel-arrow prev"
                    onClick={handlePrev}
                    aria-label="Previous Slide"
                  >
                    <LuChevronLeft />
                  </button>
                  <button
                    type="button"
                    className="peb-hero-carousel-arrow next"
                    onClick={handleNext}
                    aria-label="Next Slide"
                  >
                    <LuChevronRight />
                  </button>

                  {/* Indicators / Dots */}
                  <div className="peb-hero-carousel-dots">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`peb-hero-dot ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BOTTOM SECTION */}
          <section className="peb-bottom-section row">

            {/* CAPABILITIES (Full Width) */}
            <div className="col-lg-12 peb-capabilities-section">
              <h3 className="peb-section-heading">
                Services
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
