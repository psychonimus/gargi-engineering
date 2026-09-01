import React, { useState, useEffect } from 'react';
import { HiOutlineUserGroup, HiOutlineLightBulb, HiOutlineDocumentText } from 'react-icons/hi2';
import { FaBuilding, FaHardHat } from 'react-icons/fa';
import { MdOutlineWarehouse, MdOutlineArchitecture } from 'react-icons/md';
import './EngineeringProcess.css';

import sketchImage from '../assets/img/sketch.png';
import bg1Image from '../assets/img/bg-1.webp';
import clientBriefImg from '../assets/img/process/briefimg.png';
import conceptImg from '../assets/img/process/concept.png';
import structuralImg from '../assets/img/process/structural.png';
import teklaImg from '../assets/img/process/teka.png';
import detailingImg from '../assets/img/process/detail.png';
import fabricationImg from '../assets/img/process/Fabrication.png';
import siteSupportImg from '../assets/img/process/site.png';

const processSteps = [
  {
    id: '01',
    number: '01',
    name: 'Client Brief',
    badge: 'STEP 01',
    title: 'Client Brief',
    description:
      'We begin by understanding your vision, requirements and project goals to lay the foundation for success.',
    image: clientBriefImg,
    icon: <HiOutlineUserGroup size={24} />
  },
  {
    id: '02',
    number: '02',
    name: 'Concept Engineering',
    badge: 'STEP 02',
    title: 'Concept Engineering',
    description:
      'Developing innovative and optimized conceptual structural frameworks tailored specifically to your project constraints and engineering specifications.',
    image: conceptImg,
    icon: <HiOutlineLightBulb size={24} />
  },
  {
    id: '03',
    number: '03',
    name: 'Structural Engineering',
    badge: 'STEP 03',
    title: 'Structural Engineering',
    description:
      'Performing comprehensive load calculations, stress analysis, and structural integrity modeling to meet international design standards.',
    image: structuralImg,
    icon: <FaBuilding size={22} />
  },
  {
    id: '04',
    number: '04',
    name: 'Tekla Modelling',
    badge: 'STEP 04',
    title: 'Tekla Modelling',
    description:
      'Constructing detailed 3D Building Information Modeling (BIM) structural models using advanced Tekla software for high-precision coordination.',
    image: teklaImg,
    icon: <MdOutlineWarehouse size={24} />
  },
  {
    id: '05',
    number: '05',
    name: 'Detailing',
    badge: 'STEP 05',
    title: 'Detailing',
    description:
      'Translating structural designs into comprehensive connection details, structural schedules, and precision component specifications.',
    image: detailingImg,
    icon: <HiOutlineDocumentText size={24} />
  },
  {
    id: '06',
    number: '06',
    name: 'Fabrication Drawings',
    badge: 'STEP 06',
    title: 'Fabrication Drawings',
    description:
      'Generating complete shop floor assembly drawings, bill of materials, and CNC data files for accurate off-site manufacturing.',
    image: fabricationImg,
    icon: <MdOutlineArchitecture size={24} />
  },
  {
    id: '07',
    number: '07',
    name: 'Site Support',
    badge: 'STEP 07',
    title: 'Site Support',
    description:
      'Providing technical assistance during erection, resolving on-site discrepancies swiftly, and ensuring flawless structural assembly.',
    image: siteSupportImg,
    icon: <FaHardHat size={22} />
  }
];

export default function EngineeringProcess() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const stepRefs = React.useRef([]);
  const timelineContainerRef = React.useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStepIndex((prevIndex) => (prevIndex + 1) % processSteps.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll timeline to keep active step visible without vertically jumping the page
  useEffect(() => {
    if (stepRefs.current[activeStepIndex] && timelineContainerRef.current) {
      const container = timelineContainerRef.current;
      const activeStep = stepRefs.current[activeStepIndex];
      
      // Calculate position to center the active step horizontally
      const scrollLeftPos = activeStep.offsetLeft - (container.clientWidth / 2) + (activeStep.clientWidth / 2);
      
      container.scrollTo({
        left: scrollLeftPos,
        behavior: 'smooth'
      });
    }
  }, [activeStepIndex]);

  const handlePrevStep = () => {
    setActiveStepIndex((prev) => (prev === 0 ? processSteps.length - 1 : prev - 1));
  };

  const handleNextStep = () => {
    setActiveStepIndex((prev) => (prev === processSteps.length - 1 ? 0 : prev + 1));
  };

  const currentStep = processSteps[activeStepIndex];

  return (
    <section className="process-section" id="process-sec">
      {/* Slowly moving background image */}
      <div className="process-bg-moving-wrapper">
        <img src={bg1Image} alt="" className="process-bg-moving" aria-hidden="true" loading="lazy" decoding="async" />
      </div>



      <div className="container process-container">
        {/* Section Header */}
        <div className="process-header">
          <span className="sub-title">OUR PROCESS</span>
          <h2 className="process-main-title heading">Our Engineering Process</h2>
        </div>

        {/* 7 Steps Horizontal Timeline Bar */}
        <div className="process-timeline-container" ref={timelineContainerRef}>
          <div className="process-steps-wrapper">
            {processSteps.map((step, index) => {
              const isActive = index === activeStepIndex;
              const isPast = index < activeStepIndex;

              return (
                <React.Fragment key={step.id}>
                  {/* Step Item */}
                  <div
                    ref={(el) => (stepRefs.current[index] = el)}
                    className={`process-step-node ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveStepIndex(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setActiveStepIndex(index)}
                  >
                    <div className="process-icon-box">
                      {step.icon}
                    </div>
                    <div className="process-step-labels">
                      <span className="process-step-number">{step.number}</span>
                      <span className="process-step-title">{step.name}</span>
                    </div>
                  </div>

                  {/* Inter-step Connector line with Dot (if not last) */}
                  {index < processSteps.length - 1 && (
                    <div className={`process-connector ${isPast ? 'completed' : ''} ${index === activeStepIndex ? 'active-next' : ''}`}>
                      <div className="connector-line left-line"></div>
                      <div className={`connector-dot ${isPast || index === activeStepIndex ? 'active-dot' : ''}`}></div>
                      <div className="connector-line right-line"></div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Active Step Main Presentation Card */}
        <div className="process-card-wrapper">
          {/* Left Arrow Button */}
          <button
            className="process-arrow-btn arrow-prev"
            onClick={handlePrevStep}
            aria-label="Previous step"
            type="button"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Card Body */}
          <div className="process-main-card">
            <div className="process-card-content-grid">
              {/* Left Side Details */}
              <div className="process-card-text-side">
                <span className="process-card-badge">{currentStep.badge}</span>
                
                <h3 className="process-card-heading">{currentStep.title}</h3>
                <div className="process-card-red-bar"></div>
                
                <p className="process-card-body">{currentStep.description}</p>
              </div>

              {/* Right Side Image */}
              <div className="process-card-media-side">
                <div className="process-card-image-container">
                  <img
                    src={currentStep.image}
                    alt={currentStep.title}
                    className="process-card-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            className="process-arrow-btn arrow-next"
            onClick={handleNextStep}
            aria-label="Next step"
            type="button"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

