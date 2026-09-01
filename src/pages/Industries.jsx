import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IndustriesDetail from "../components/IndustriesDetail";
import heroBg from "../assets/img/industry/hero.png";
import infoBg from "../assets/img/industry/info.png";
import automotive from '../assets/img/industry/automotive.png'
import manufacturing from '../assets/img/industry/manufacturing.png'
import warehousing from '../assets/img/industry/warehousing.png'
import heavy from '../assets/img/industry/heavy.png'
import renewable from '../assets/img/industry/renewable.png'
import industrial from '../assets/img/industry/industrial.png'
import retail from '../assets/img/industry/retail.png'
import food from '../assets/img/industry/food.png'
import infrastructure from '../assets/img/industry/infrastructure.png'

import "./Industries.css";

// Industries data with high-quality icons and curated Unsplash images
const industriesData = [
  {
    title: "Automotive",
    image: automotive,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2 11.1 2 11.3 2 11.5V16c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <path d="M9 17h5" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    )
  },
  {
    title: "Manufacturing",
    image: manufacturing,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 22h14" />
        <path d="M5 17h2v5H5z" />
        <path d="M7 18.5h8" />
        <path d="M9 18.5V13a3 3 0 0 1 3-3h1" />
        <path d="M13 13l4-4a2 2 0 0 0 0-2.8l-.7-.7a2 2 0 0 0-2.8 0l-4 4" />
        <path d="M17 9l2-2M15 7l2-2" />
      </svg>
    )
  },
  {
    title: "Warehousing & Logistics",
    image: warehousing,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2" />
        <circle cx="18.5" cy="18.5" r="2" />
      </svg>
    )
  },
  {
    title: "Heavy Engineering",
    image: heavy,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 22h18" />
        <path d="M6 22V2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v20" />
        <path d="M10 4h11M10 8h8" />
        <path d="M21 4v6" />
        <rect x="19" y="10" width="4" height="4" rx="1" />
        <path d="M6 10l4-4M6 16l4-4" />
      </svg>
    )
  },
  {
    title: "Renewable Energy",
    image: renewable,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v10M12 12l-7.5-3M12 12l6 7.5" />
        <path d="M12 22V12" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    )
  },
  {
    title: "Retail & Commercial",
    image: retail,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <line x1="9" y1="22" x2="9" y2="12" />
        <line x1="15" y1="22" x2="15" y2="12" />
        <line x1="9" y1="12" x2="15" y2="12" />
      </svg>
    )
  },
  {
    title: "Industrial Projects",
    image: industrial,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" />
        <path d="M20 20V8l-6 4V8l-6 4V8L2 14v6" />
        <path d="M6 8V4h2v4M14 8V4h2v4" />
      </svg>
    )
  },
  {
    title: "Food Processing",
    image: food,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 20h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2z" />
        <path d="M10 2h4M8 7h8" />
        <circle cx="12" cy="13" r="1.5" />
      </svg>
    )
  },
  {
    title: "Infrastructure",
    image: infrastructure,
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18" />
        <path d="M3 20h18" />
        <path d="M6 12v8M18 12v8" />
        <path d="M6 12c4-4 8-4 12 0" />
        <path d="M3 8c6-6 12-6 18 0" />
        <path d="M12 6v6" />
      </svg>
    )
  }
];

export default function Industries() {
  const [infoVisible, setInfoVisible] = React.useState(false);
  const [supportVisible, setSupportVisible] = React.useState(false);
  const infoRef = React.useRef(null);
  const supportRef = React.useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observerOptions = { threshold: 0.1 };

    const infoObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInfoVisible(true);
        infoObserver.disconnect();
      }
    }, observerOptions);

    const supportObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSupportVisible(true);
        supportObserver.disconnect();
      }
    }, observerOptions);

    if (infoRef.current) infoObserver.observe(infoRef.current);
    if (supportRef.current) supportObserver.observe(supportRef.current);

    return () => {
      infoObserver.disconnect();
      supportObserver.disconnect();
    };
  }, []);

  return (
    <div className="industries-page">
      <Navbar />

      {/* Hero Section */}
      <div
        className="about-page-hero industries-hero"
        style={{
          backgroundImage: `url(${heroBg})`
        }}
      >
        <div className="about-page-hero-overlay"></div>
        <div className="container">
          <div className="about-page-hero-content text-start">
            <h1 className="about-hero-title">
              Engineering Solutions Designed <br></br>for Every Industry
            </h1>
          </div>
        </div>
      </div>

      {/* Engineering Solutions Info Section */}
      <section
        ref={infoRef}
        className={`industries-info-sec${infoVisible ? " industries-info-sec--visible" : ""}`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 industries-info-text-col">
              <h2 className="industries-info-title">
                Designed for Every Industry
              </h2>

              <p className="industries-info-text">
                Every industry has unique operational challenges, structural requirements, and compliance standards. At Gargi Engineering, we combine engineering expertise, digital design, and practical construction knowledge to deliver structures that are purpose-built for your business.
              </p>
              <p className="industries-info-text">
                From high-capacity manufacturing plants to modern logistics hubs and complex industrial facilities, our engineering solutions are designed to maximize efficiency, optimize costs, and accelerate project execution.
              </p>
            </div>

            <div className="col-lg-6 col-md-12 mt-4 mt-lg-0 industries-info-img-col">
              <div className="industries-info-img-box">
                <img src={infoBg} alt="Engineering Solutions Background" className="industries-info-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Support Section */}
      <section
        ref={supportRef}
        className={`industries-support-sec${supportVisible ? " industries-support-sec--visible" : ""}`}
      >
        <div className="container-fluid px-lg-5">
          <div className="industries-support-title-container">
            <span className="title-line-left"></span>
            <h2>INDUSTRIES WE SUPPORT</h2>
            <span className="title-line-right"></span>
          </div>

          <div className="industries-cards-grid">
            {industriesData.map((item, index) => {
              const hashId = item.title.toLowerCase().includes('auto') ? 'automotive'
                : item.title.toLowerCase().includes('warehous') ? 'warehousing'
                : item.title.toLowerCase().includes('manufactur') ? 'manufacturing'
                : item.title.toLowerCase().includes('heavy') ? 'heavy'
                : item.title.toLowerCase().includes('renew') ? 'renewable'
                : item.title.toLowerCase().includes('retail') ? 'retail'
                : item.title.toLowerCase().includes('food') ? 'food'
                : item.title.toLowerCase().includes('infras') ? 'infrastructure'
                : 'industrial';
              return (
                <a
                  key={index}
                  href={`#${hashId}`}
                  className="industries-card-item"
                  style={{ "--card-delay": `${index * 0.07}s`, textDecoration: 'none', cursor: 'pointer' }}
                >
                  <div className="ind-card-img-wrapper">
                    <img src={item.image} alt={item.title} className="ind-card-img" />
                    <div className="ind-card-overlay"></div>
                    <h4 className="ind-card-label">{item.title}</h4>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Detail Section */}
      <IndustriesDetail />

      <div className="position-relative">
        <div className="industries-bg-grid"></div>
      </div>

      <Footer />
    </div>
  );
}
