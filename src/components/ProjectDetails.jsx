import React, { useState, useRef, useEffect } from 'react';
import './ProjectDetails.css';

// ─── React Icons Imports ──────────────────────────────────────────────
import {
  FaCarSide,
  FaIndustry,
  FaWarehouse,
  FaHelmetSafety,
  FaStore,
  FaGears,
  FaLayerGroup
} from 'react-icons/fa6';

// ─── Image Imports ───────────────────────────────────────────────────
import motherson1Img from '../assets/img/project/motherson1.jpeg';
import motherson2Img from '../assets/img/project/motherson2.jpeg';
import marelliImg from '../assets/img/project/marelli.jpeg';
import fritzmeier1Img from '../assets/img/project/Motherson Fritzmeier1.jpeg';
import fritzmeier2Img from '../assets/img/project/Motherson Fritzmeier2.jpeg';
import advikImg from '../assets/img/project/advik.jpeg';
import advikImg2 from '../assets/img/project/advik2.jpg';

import antolinImg from '../assets/img/project/groupantollin.jpeg';
import antolinImg2 from '../assets/img/project/groupantollin2.jpg';
import antolinImg3 from '../assets/img/project/groupantollin3.jpeg';


import kalyani1Img from '../assets/img/project/kalyni.jpeg';
import kalyani2Img from '../assets/img/project/kalyni2.jpeg';
import kshImg from '../assets/img/project/ksh.jpeg';
import ultraImg from '../assets/img/project/ultra.jpeg';
import ascentImg from '../assets/img/project/ascent.jpeg';

import blinkit1Img from '../assets/img/project/blinkit.jpeg';
import blinkit2Img from '../assets/img/project/blinkit2.jpeg';


import shlokImg from '../assets/img/project/sholk.jpeg';
import shlokImg2 from '../assets/img/project/sholk2.jpg';
import shlokImg3 from '../assets/img/project/sholk3.jpg';

import nibe1Img from '../assets/img/project/nibe1.jpg';
import nibe2Img from '../assets/img/project/nibe2.jpeg';
import nibe3Img from '../assets/img/project/nibe3.jpeg';

import zoomlion1Img from '../assets/img/project/ZOOMLION 1.jpeg';
import zoomlion2Img from '../assets/img/project/ZOOMLION 2.jpg';

import starBazaar1Img from '../assets/img/project/starbazzazudio1.jpg';
import starBazaar2Img from '../assets/img/project/starbazzazudio2.jpeg';
import starBazaar3Img from '../assets/img/project/starbazzazudio3.jpeg';

import economyImg from '../assets/img/project/economy.jpg';
import economyImg2 from '../assets/img/project/economy2.jpg';

import horizonImg from '../assets/img/project/horizon.jpeg';
import koshImg from '../assets/img/project/kosh.jpeg';
import koshImg2 from '../assets/img/project/kosh2.jpg';

import sahyadriImg from '../assets/img/project/sahydri.jpeg';

// ─── SVG Icons ───────────────────────────────────────────────────────
const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const AreaIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
  </svg>
);

const WeightIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// ─── Image Slider Component (Auto 3-Second Transition) ───────────────
function ProjectImageSlider({ images, singleImage, location, title }) {
  const imageList = (images && images.length > 0) ? images : [singleImage];
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (imageList.length <= 1 || isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, 3000); // 3-second auto slide
    return () => clearInterval(interval);
  }, [imageList.length, isHovered]);

  return (
    <div
      className="bento-img-wrap"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {imageList.map((imgSrc, idx) => (
        <img
          key={idx}
          src={imgSrc}
          alt={`${title} - slide ${idx + 1}`}
          loading="lazy"
          className={`bento-slider-img ${idx === currentIndex ? 'active' : ''}`}
        />
      ))}

      <div className="bento-img-overlay" />
      <div className="bento-img-sheen" />

      {/* Top Overlay Badges */}
      {location && (
        <div className="bento-img-badges">
          <span className="bento-loc-pill">
            <MapPinIcon /> {location}
          </span>
        </div>
      )}
    </div>
  );
}

// ─── Scroll Reveal Industry Section Component ───────────────────────
function ScrollRevealSection({ ind, indIdx, activeIndustry, sectionRefs }) {
  const sectionRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [activeIndustry]);

  React.useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 60);
    return () => clearTimeout(timer);
  }, [activeIndustry]);

  return (
    <div
      id={ind.id}
      ref={(el) => {
        sectionRef.current = el;
        if (sectionRefs.current) {
          sectionRefs.current[ind.id] = el;
        }
      }}
      className={`bento-industry-section ${isVisible ? 'is-visible pd-section-visible' : ''}`}
    >
      {/* Industry Header Banner */}
      <div className="bento-industry-header">
        <div className="bento-category-tag">
          <span className="tag-icon">{ind.icon}</span>
          <span className="tag-text">{ind.title}</span>
        </div>
        <div className="bento-header-content">
          <h2 className="bento-industry-title">{ind.subtitle}</h2>
          <p className="bento-industry-desc">{ind.desc}</p>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="bento-grid">
        {ind.projects.map((proj, pIdx) => (
          <div
            key={proj.title}
            className={`bento-card ${proj.featured ? 'bento-card-featured' : ''}`}
            style={{ transitionDelay: `${pIdx * 0.16}s` }}
          >
            {/* Visual Media Container Slider */}
            <ProjectImageSlider
              images={proj.images}
              singleImage={proj.image}
              location={proj.location}
              title={proj.title}
            />

            {/* Content Area */}
            <div className="bento-card-body">
              {/* Meta Tags Row */}
              <div className="bento-meta-row">
                {proj.area && (
                  <span className="bento-spec-badge area">
                    <AreaIcon /> {proj.area}
                  </span>
                )}
                {proj.tonnage && (
                  <span className="bento-spec-badge weight">
                    <WeightIcon /> {proj.tonnage}
                  </span>
                )}
              </div>

              {/* Title & Overview */}
              <h3 className="bento-card-title">{proj.title}</h3>
              <p className="bento-card-desc">{proj.overview}</p>

              {/* Scope Checklist (if provided) */}
              {proj.scope && (
                <div className="bento-scope-container">
                  <span className="bento-scope-label">SCOPE OF WORK</span>
                  <div className="bento-scope-tags">
                    {proj.scope.map((item) => (
                      <span key={item} className="bento-scope-tag">
                        <CheckIcon /> {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Industry Projects Data ──────────────────────────────────────────
const INDUSTRY_DATA = [
  {
    id: 'automotive',
    title: 'Automotive Industry',
    subtitle: 'Engineering High-Performance Manufacturing Facilities',
    icon: <FaCarSide />,
    desc: 'The automotive industry demands structures that support heavy machinery, overhead cranes, flexible production lines, and future expansion. Our engineering solutions deliver operational efficiency, structural integrity, and long-term performance.',
    projects: [
      {
        id: 'mate',
        title: 'Motherson Automotive Technologies Engineering (MATE)',
        location: 'Pune',
        category: 'Automotive Manufacturing',
        images: [motherson1Img, motherson2Img],
        featured: true,
        overview: 'Designed a high-capacity industrial facility to support heavy manufacturing operations with a 50 MT crane system, ensuring structural stability, optimized load distribution, and seamless operational efficiency.',
        scope: ['PEB Design', 'Structural Engineering', 'Crane Building Design', 'Detailing', 'Engineering Support']
      },
      
      {
        id: 'advik',
        title: 'Advik Hi-Tech Pvt. Ltd.',
        location: 'Chakan',
        category: 'Automotive Components',
        images: [advikImg, advikImg2],
        overview: 'Engineered a modern industrial structure tailored to the operational requirements of automotive component manufacturing while ensuring construction efficiency and long-term reliability.'
      },
      {
        id: 'antolin',
        title: 'Group Antolin',
        location: 'Chakan',
        category: 'Automotive Interiors',
        area: '157,000 Sq. Ft.',

        images: [antolinImg3,antolinImg, antolinImg2],
        overview: 'Provided structural engineering services for a large-scale manufacturing facility with a focus on optimized steel consumption and faster project delivery.'
      }
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing Industry',
    subtitle: 'Engineering Production Facilities for Maximum Efficiency',
    icon: <FaIndustry />,
    desc: 'Manufacturing facilities require customized engineering that supports production equipment, material movement, and future operational growth.',
    projects: [
      {
        id: 'kalyani',
        title: 'Kalyani Technoforge',
        location: 'Chakan',
        area: '137,000 Sq. Ft.',
        category: 'Industrial Forging',
        images: [kalyani1Img, kalyani2Img],
        overview: 'Delivered complete structural engineering and detailing services for a large-scale forging facility, designed to support heavy industrial operations while optimizing structural performance.'
      },
      {
        id: 'ksh',
        title: 'KSH Industries',
        location: 'Chakan',
        area: '95,000 Sq. Ft.',
        category: 'Industrial Manufacturing',
        image: kshImg,
        overview: 'Engineered an industrial manufacturing facility focused on efficient space utilization and streamlined construction.'
      },
      {
        id: 'ultra',
        title: 'Ultra Industries',
        location: 'Pune',
        area: '117,000 Sq. Ft.',
        category: 'Manufacturing Facility',
        image: ultraImg,
        overview: 'Designed a high-performance industrial structure with optimized layouts and fabrication-ready detailing for efficient project execution.'
      },
      {
        id: 'ascent',
        title: 'Ascent Precision India',
        location: 'Pune',
        area: '50,000 Sq. Ft.',
        category: 'Precision Manufacturing',
        image: ascentImg,
        overview: 'Developed structural engineering solutions tailored for precision manufacturing operations.'
      }
    ]
  },
  {
    id: 'warehousing',
    title: 'Warehousing & Logistics',
    subtitle: 'Structures Designed for Faster Supply Chains',
    icon: <FaWarehouse />,
    desc: 'Modern warehouses require large clear spans, optimized storage layouts, and future-ready structural systems.',
    projects: [
      {
        id: 'blinkit',
        title: 'Blinkit Distribution Centre',
        location: 'Chakan',
        area: '217,000 Sq. Ft.',
        category: 'Logistics & Warehousing',
        images: [blinkit1Img, blinkit2Img, ],
        overview: 'Engineered a large-scale logistics facility designed to maximize storage efficiency, streamline material movement, and support high-volume warehouse operations.'
      },
      {
        id: 'nibe',
        title: 'NIBE India Forging Plant',
        location: 'Shirdi',
        area: '275,000 Sq. Ft.',
        tonnage: '3,400 MT Steel',
        category: 'Heavy Forging Plant',
        images: [nibe1Img, nibe2Img, nibe3Img],
        overview: 'Designed one of our largest industrial structures, engineered to support heavy forging operations while maintaining structural safety, durability, and optimized material utilization.'
      },
    ]
  },
  {
    id: 'heavy-engineering',
    title: 'Heavy Engineering',
    subtitle: 'Built to Support Heavy Industrial Operations',
    icon: <FaHelmetSafety />,
    desc: 'Specialized structural solutions for mega-scale industrial and forging plants built for heavy dynamic loads and durability.',
    projects: [
      {
        id: 'shlok',
        title: 'Shlok Enterprises',
        location: 'Pune',
        area: '245,000 Sq. Ft.',
        category: 'Modern Warehousing',
        images: [shlokImg,shlokImg2,shlokImg3],
        overview: 'Delivered structural engineering services for a modern warehousing facility emphasizing operational flexibility and efficient construction.'
      },
      
      {
        id: 'zoomlion',
        title: 'Zoomlion India',
        location: 'Chakan',
        category: 'Heavy Equipment Plant',
        images: [zoomlion1Img, zoomlion2Img],
        overview: 'Provided engineering and detailing services for a heavy equipment manufacturing facility, designed to support large machinery and industrial operations.'
      }
    ]
  },
  {
    id: 'retail',
    title: 'Retail & Commercial',
    subtitle: 'Modern Commercial Spaces Built with Engineering Precision',
    icon: <FaStore />,
    desc: 'Commercial structures combining aesthetic elegance with structural safety, efficient floor space utilization, and rapid deployment.',
    projects: [
      {
        id: 'starbazaar',
        title: 'Star Bazaar & Zudio',
        location: 'Pimpri-Chinchwad',
        area: '55,000 Sq. Ft.',
        category: 'Commercial Retail',
        images: [starBazaar1Img, starBazaar3Img],
        featured: true,
        overview: 'Engineered a commercial facility designed for efficient space utilization, long-term durability, and rapid construction.'
      }
    ]
  },
  {
    id: 'industrial',
    title: 'Industrial Projects',
    subtitle: 'Delivering Tailored Engineering Solutions',
    icon: <FaGears />,
    desc: 'Custom industrial buildings engineered for optimized structural layouts, seamless material movement, and future expansion flexibility.',
    projects: [
      {
        id: 'economy',
        title: 'Economy Process Solutions',
        location: 'Chakan',
        area: '105,000 Sq. Ft.',
        category: 'Specialized Industrial',
        images: [economyImg, economyImg2],
        overview: 'Delivered structural engineering and detailing services for a specialized industrial facility, ensuring efficient project coordination and optimized design.'
      },
      {
        id: 'horizon',
        title: 'Horizon Industries',
        location: 'Pune',
        area: '75,000 Sq. Ft.',
        category: 'Industrial Manufacturing',
        image: horizonImg,
        overview: 'Designed an industrial building to support manufacturing operations with flexibility for future expansion.'
      },
      {
        id: 'kosh',
        title: 'Kosh Innovations',
        location: 'Pune',
        area: '85,000 Sq. Ft.',
        category: 'Modern Industrial',
        images: [koshImg, koshImg2],
        overview: 'Engineered a modern industrial facility with optimized structural layouts and efficient detailing.'
      },
      {
        id: 'sahyadri',
        title: 'Sahyadri Industries',
        location: 'Pune',
        area: '65,000 Sq. Ft.',
        category: 'Industrial Manufacturing',
        image: sahyadriImg,
        overview: 'Provided comprehensive structural engineering solutions for an industrial manufacturing project with a focus on construction efficiency.'
      },
      {
        id: 'marelli',
        title: 'Marelli Motherson Automotive Lighting',
        location: 'Chakan, Pune',
        category: 'Automotive Lighting',
        image: marelliImg,
        overview: 'Delivered complete structural engineering and detailing solutions for a large-scale manufacturing facility with heavy crane operations, focusing on precision, safety, and fabrication efficiency.'
      },
      {
        id: 'fritzmeier',
        title: 'Motherson Fritzmeier Cabin Engineering',
        location: 'Pune',
        category: 'Automotive Cabin Engineering',
        images: [fritzmeier1Img, fritzmeier2Img],
        overview: 'Designed structural solutions to support advanced manufacturing operations, emphasizing optimized layouts, future scalability, and efficient project execution.'
      },
    ]
  }
];

export default function ProjectDetails() {
  const [activeIndustry, setActiveIndustry] = useState('all');
  const sectionRefs = useRef({});
  const wrapperRef = useRef(null);
  const [isWrapperVisible, setIsWrapperVisible] = useState(false);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsWrapperVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const handleTabClick = (id) => {
    setActiveIndustry(id);
    if (id !== 'all' && sectionRefs.current[id]) {
      sectionRefs.current[id].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Total projects count
  const totalProjectsCount = INDUSTRY_DATA.reduce((acc, curr) => acc + curr.projects.length, 0);

  return (
    <section
      ref={wrapperRef}
      className={`bento-details-wrapper ${isWrapperVisible ? 'pd-visible' : ''}`}
      id="projects"
    >
      {/* ── SECTION HEADER: FEATURED PROJECTS ── */}
      <div className="container">
        <div className="proj-featured-sec-header">
          <h2 className="proj-featured-main-title">
            Featured Projects
          </h2>
        </div>
      </div>

      {/* ── STICKY GLASS NAVIGATION BAR ── */}
      <div className="bento-filter-sticky">
        <div className="container">
          <div className="bento-tabs-header">
            <span className="bento-filter-title">FILTER BY INDUSTRY:</span>
            <div className="bento-tabs-scroll">
              <button
                className={`bento-tab-btn ${activeIndustry === 'all' ? 'active' : ''}`}
                onClick={() => handleTabClick('all')}
              >
                <span className="tab-icon"><FaLayerGroup /></span>
                All Projects
                {/* <span className="bento-tab-count">{totalProjectsCount}</span> */}
              </button>

              {INDUSTRY_DATA.map((ind) => (
                <button
                  key={ind.id}
                  className={`bento-tab-btn ${activeIndustry === ind.id ? 'active' : ''}`}
                  onClick={() => handleTabClick(ind.id)}
                >
                  <span className="tab-icon">{ind.icon}</span>
                  {ind.title.replace(' Industry', '')}
                  {/* <span className="bento-tab-count">{ind.projects.length}</span> */}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── INDUSTRY SECTIONS DOSSIER SHOWCASE ── */}
      <div className="container">
        {INDUSTRY_DATA.filter((ind) => activeIndustry === 'all' || activeIndustry === ind.id).map((ind, indIdx) => (
          <ScrollRevealSection
            key={ind.id}
            ind={ind}
            indIdx={indIdx}
            activeIndustry={activeIndustry}
            sectionRefs={sectionRefs}
          />
        ))}
      </div>
    </section>
  );
}
