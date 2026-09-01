import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  LuBuilding2,
  LuLayers,
  LuCompass,
  LuTrendingUp,
  LuCalculator,
  LuWrench,
  LuLandmark,
  LuCpu,
  LuBoxes,
  LuCalendarCheck,
  LuArrowRight
} from 'react-icons/lu';
const CheckIcon = () => (
  <svg className="bullet-check-icon" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

import img1 from '../assets/img/services/pebdesign.png';
import img2 from '../assets/img/services/pebdetailing.png';
import img3 from '../assets/img/services/connection.png';
import img4 from '../assets/img/services/value.png';
import img5 from '../assets/img/services/material.png';
import img6 from '../assets/img/services/fabrication.png';
import img7 from '../assets/img/services/civil2.jpeg';
import img8 from '../assets/img/services/digital.png';
import imgPmc from '../assets/img/services/pmc.png';



import './ServiceCards.css';

const servicesData = [
  {

    title: 'PEB Design & Structural Engineering',
    icon: LuBuilding2,
    image: img1,
    link: '/peb-design'
  },
  {

    title: 'PEB Detailing & Tekla Modelling',
    icon: LuLayers,
    image: img2,
    link: '/peb-detailing'
  },
  {
   
    title: 'Civil Design & Construction Consulting',
    icon: LuLandmark,
    image: img7,
    link: '/civil-design'
  },
  {

    title: 'Connection Design & Engineering',
    icon: LuWrench,
    image: img3,
    link: '/connection-design'
  },

  {

    title: 'Project Management Consultancy',
    icon: LuWrench,
    image: imgPmc,
    link: '/pmc'
  },

  {

    title: 'Value Engineering',
    icon: LuTrendingUp,
    image: img4,
    link: '/value-engineering'
  },
  {

    title: 'Material Take-Off & Estimation',
    icon: LuCalculator,
    image: img5,
    link: '/material-take-off'
  },
  {

    title: 'Fabrication & Construction Support',
    icon: LuWrench,
    image: img6,
    link: '/fabrication-support'
  },
  {
    title: 'Digital Engineering Services',
    icon: LuCpu,
    image: img8,
    link: '/digital-engineering'
  },
  {
    title: 'Project Management Consultancy',
    icon: LuCalendarCheck,
    image: imgPmc,
    link: '/pmc'
  },
];

export default function ServiceCards() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
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
    <section className="service-cards-section" id="our-services" ref={sectionRef}>
      <div className="container service-cards-container">
        {/* Header Section */}
        <div className="service-cards-header text-center">
          <div className="service-section-tag">

          </div>
          <h2 className="service-section-title">
            Our Engineering Services

          </h2>

        </div>

        {/* 9 Cards Grid */}
        <div className="row g-4 justify-content-center">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-4">
                <div className="service-card-item">
                  {/* Background Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-card-bg-img"
                  />

                  {/* Dark Gradient Overlay to make text readable */}
                  <div className="service-card-dark-overlay"></div>

                  {/* Card Content Container */}
                  <div className="service-card-content">
                    {/* Header Row: Title + Icon */}
                    <div className="service-card-title-row">
                      <h3 className="service-card-title-text">{service.title}</h3>
                      <div className="service-card-icon-right">
                        <IconComponent className="service-bare-icon" />
                      </div>
                    </div>
                    {/* Explore Services Link */}
                    {service.link ? (
                      <Link to={service.link} className="service-card-explore-btn">
                        Explore Services <LuArrowRight className="explore-btn-icon" />
                      </Link>
                    ) : (
                      <a href="#" className="service-card-explore-btn">
                        Explore Services <LuArrowRight className="explore-btn-icon" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
