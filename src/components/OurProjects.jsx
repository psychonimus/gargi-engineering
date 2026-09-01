import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  LuMapPin,
  LuArrowRight,
  LuChevronLeft,
  LuChevronRight,
  LuBuilding2,
  LuMaximize2,
} from 'react-icons/lu';
import './OurProjects.css';

import mateFactoryImg from '../assets/img/project/hero_bg_1_1.jpeg';
import marelFacilityImg from '../assets/img/project/project2.png';
import steelInteriorPng from '../assets/img/project/project3.png';
import aerialFactoryPng from '../assets/img/project/project4.png';

const projectsData = [
  {
    id: '01',
    badgeColor: 'theme',
    title: 'Motherson Automotive Technologies Engineering (MATE)',
    location: 'Pune, Maharashtra',
    category: 'Automotive Manufacturing',
    description:
      'Designed and detailed a high-capacity industrial manufacturing facility featuring a 50 MT heavy-duty crane system, multi-span structural framing, and optimized PEB solutions engineered for high load capacity.',
    image: mateFactoryImg,
  },
  {
    id: '02',
    badgeColor: 'black',
    title: 'Marel Motherson Automotive Lighting Plant',
    location: 'Chakan, Pune',
    category: 'Automotive Infrastructure',
    description:
      'Delivered comprehensive structural steel engineering, Tekla 3D detailing, and connection design for a state-of-the-art automotive lighting production facility with integrated high-bay shop floors.',
    image: marelFacilityImg,
  },
  {
    id: '03',
    badgeColor: 'theme',
    title: 'Advik Hi-Tech Pvt. Ltd.',
    location: 'Chakan',
    category: 'Automotive Components',
    description:
      'Engineered a modern industrial structure tailored to the operational requirements of automotive component manufacturing while ensuring construction efficiency and long-term reliability.',
    image: steelInteriorPng,
  },
  {
    id: '04',
    badgeColor: 'black',
    title: 'Kalyani Technoforge',
    location: 'Chakan',
    category: 'Manufacturing Industry',
    description:
      'Delivered complete structural engineering and detailing services for a large-scale forging facility, designed to support heavy industrial operations while optimizing structural performance.',
    image: aerialFactoryPng,
    area: '137,000 Sq. Ft.'
  }
];

const OurProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const sectionRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalProjects = projectsData.length;

  const goToSlide = useCallback((index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => {
      setIsAnimating(false);
    }, 450);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((currentIndex + 1) % totalProjects);
  }, [currentIndex, totalProjects, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentIndex - 1 + totalProjects) % totalProjects);
  }, [currentIndex, totalProjects, goToSlide]);

  // Intersection Observer for entrance animation
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  // Autoplay Slider (changes every 4 seconds)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const currentProject = projectsData[currentIndex];

  return (
    <section
      ref={sectionRef}
      className={`our-projects-section overflow-hidden ${isVisible ? 'is-visible' : ''}`}
      id="projects-sec"
    >
      {/* Background Spinning Circle Shapes */}
      <div
        className="shape-mockup faq-spin spin d-xl-block d-none"
        style={{ bottom: '-15%', left: '-12%', position: 'absolute', zIndex: 0 }}
      >
        <img src="/assets/img/normal/about_1_2shape.png" alt="shape" />
      </div>
      <div
        className="shape-mockup faq-spin2 spin d-xl-block d-none z-index-n2"
        style={{ top: '0', right: '-12%', position: 'absolute', zIndex: 0 }}
      >
        <img src="/assets/img/normal/about_1_2shape.png" alt="shape" />
      </div>

      <div className="container z-index-common">
        {/* Header Area */}
        <div className="our-projects-header">
          <span className="sub-title">OUR PROJECTS</span>
          <h2 className="projects-sec-title">
            From Engineering to Execution, We Deliver
          </h2>
        </div>

        {/* Full-Width Horizontal Card Slider Showcase */}
        <div 
          className="project-slider-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Active Horizontal Project Card */}
          <div className={`project-horizontal-card ${isAnimating ? 'fade-slide' : ''}`}>
            
            {/* LEFT SIDE: FULL HEIGHT/WIDTH IMAGE */}
            <div className="project-card-image-col image-anime">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="project-card-img"
                loading="lazy"
                decoding="async"
              />
              
              {/* Gradient Vignette Overlay */}
              <div className="img-overlay-gradient"></div>

              {/* Top Badges overlay on left image */}
              <div className="img-top-badges">
                <span className="img-category-pill">
                  <LuBuilding2 className="pill-icon" /> {currentProject.category}
                </span>
              </div>
            </div>

            {/* RIGHT SIDE: INFORMATION & SPECS */}
            <div className="project-card-content-col">
              
              {/* Header Info: ID Badge & Location */}
              <div className="project-content-header">
                <div className={`project-id-badge badge-${currentProject.badgeColor}`}>
                  {currentProject.id}
                </div>
                <div className="project-meta-loc">
                  <LuMapPin className="pin-icon" /> {currentProject.location}
                </div>
              </div>

              {/* Title */}
              <h3 className="project-card-title">{currentProject.title}</h3>

              {/* Description */}
              <p className="project-card-desc">{currentProject.description}</p>

              {/* Display Area if available */}
              {currentProject.area && (
                <div className="project-single-area-box">
                  <div className="area-icon-wrap">
                    <LuMaximize2 className="area-icon" />
                  </div>
                  <div className="area-text-wrap">
                    <span className="area-label">Area</span>
                    <span className="area-val">{currentProject.area}</span>
                  </div>
                </div>
              )}

              {/* Card Footer: Action Button & Slider Controls */}
              <div className="project-card-footer">
                <Link to="/projects#projects" className="project-details-btn">
                  EXPLORE PROJECT <LuArrowRight className="arrow-icon" />
                </Link>

                {/* Slider Controls */}
                <div className="slider-controls-group">
                  {/* Prev Button */}
                  <button 
                    type="button" 
                    className="slider-nav-btn prev-btn"
                    onClick={prevSlide}
                    aria-label="Previous Project"
                  >
                    <LuChevronLeft />
                  </button>

                  {/* Indicator Dots */}
                  <div className="slider-dots-list">
                    {projectsData.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`slider-dot-item ${currentIndex === idx ? 'active' : ''}`}
                        onClick={() => goToSlide(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Next Button */}
                  <button 
                    type="button" 
                    className="slider-nav-btn next-btn"
                    onClick={nextSlide}
                    aria-label="Next Project"
                  >
                    <LuChevronRight />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default OurProjects;
