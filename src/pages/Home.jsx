import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CountUp from '../components/CountUp';
import EngineeringProcess from '../components/EngineeringProcess';
import DigitalEngineeringUSP from '../components/DigitalEngineeringUSP';
import OurProjects from '../components/OurProjects';
import OurClients from '../components/OurClients';
import BrochureModal from '../components/BrochureModal';
import ConsultationModal from '../components/ConsultationModal';
import heroVideo from '../assets/img/herovedio.mp4';
import buildingImage from '../assets/img/about/building_image.png';
import aboutImage from '../assets/img/about/about.png';
import PEBImage from '../assets/img/what_we_do/PEB_design.png';
import PEBDetail from '../assets/img/what_we_do/peb_detailing.png';
import PEBDetail2 from '../assets/img/peb-detailing-new.png';
import steelImage from '../assets/img/what_we_do/steel.png';
import steelImage2 from '../assets/img/steel-structuring-new2.png';
import structuralImage from '../assets/img/what_we_do/counsultancy.png';
import valueImage from '../assets/img/what_we_do/value.png';
import constructionImage from '../assets/img/what_we_do/construction.png';
import blog1 from '../assets/img/blog/blog1.png';
import blog2 from '../assets/img/blog/blog2.png';
import blog3 from '../assets/img/blog/blog3.png';
import '../hero.css';
import '../about.css';

const testimonialsData = [
  {
    name: "Mr. Dagade",
    designation: "ASCENT PRECISION DIRECTOR",
    image: "/assets/img/testimonials/testi_1_1.jpg",
    text: "Working with Gargi Engineering Services was a smooth and professional experience throughout the project. Their expertise in PEB structural design, attention to technical details, and understanding of project requirements were highly appreciated. The team was responsive, technically strong, and always focused on providing practical and reliable engineering solutions. We would definitely be happy to work with them again on future projects."
  },
  {
    name: "Mr. Akkalkote",
    designation: "Sahyadri Industries DIRECTOR",
    image: "/assets/img/testimonials/testi_1_2.png",
    text: "Excellent experience with Gargi Engineering Services. The team provided reliable PEB structural solutions with good technical understanding, quick coordination, and quality-focused execution. Looking forward to working with them on future projects."
  },
  {
    name: "Er. Sagar Chauhan",
    designation: "Prarambh Industries MD Owner",
    image: "/assets/img/testimonials/testi_1_3.png",
    text: "Gargi Engineering Services has delivered a very professional experience in PEB structural consultancy. Their strength lies not only in their technical knowledge but also in their ability to understand the overall project requirements and provide practical engineering solutions. The team maintained excellent coordination, responded promptly to our queries, and paid close attention to design accuracy and detailing. Their commitment to quality and timely deliverables was clearly evident throughout the project. We are completely satisfied with their services and would confidently recommend Gargi Engineering Services for PEB structural design and consultancy."
  },
  {
    name: "Mr. Karnawat",
    designation: "HORIZON INDUSTRIES DIRECTOR",
    image: "/assets/img/testimonials/testi_1_4.png",
    text: "We had a very positive experience working with Gargi Engineering Services. Right from the beginning, the team was cooperative, responsive, and clear in their technical approach. They understood our requirements properly and handled the PEB structural design and coordination with great attention to detail. Whenever we faced technical challenges, the team was quick to understand the issue and provide practical solutions. Their professional attitude, engineering knowledge, and timely support made a significant difference to our project. We would be happy to work with them again and recommend their services to others."
  },
  {
    name: "Sumit Agarwal",
    designation: "Camron Industries Owner- Director",
    image: "/assets/img/testimonials/testi_1_5.png",
    text: "We were looking for more than a structural consultant; we needed a partner who could understand the project from an overall engineering and execution perspective. Their team brought together structural design, PEB, detailing, estimation, and technical support seamlessly. Their practical approach and commitment to quality made them a dependable engineering partner."
  },
  {
    name: "",
    designation: "SHLOK ENTERPRISES",
    image: "/assets/img/testimonials/testi_1_6.png",
    text: "Their approach goes beyond simply providing structural designs. The team actively looks for opportunities to optimise the structure, reduce material consumption, and improve constructability without compromising safety or performance. Their value-engineering inputs helped us achieve meaningful cost efficiencies while maintaining project timelines."
  },
  {
    name: "Krunal Kanthale",
    designation: "ALLIGATOR DIRECTOR",
    image: "/assets/img/testimonials/testi_1_7.png",
    text: "We are very satisfied with the services provided by Gargi Engineering Services. Their team is professional, responsive, and technically strong, with a clear focus on practical and reliable structural solutions."
  }
];

export default function Home() {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [isCounterVisible, setIsCounterVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const counterRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const node = counterRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsCounterVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  useEffect(() => {
    const node = aboutRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAboutVisible(true);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <>

      <Navbar />

      {/* Hero Section */}
      <div className="th-hero-wrapper hero-1" id="hero">
        <video
          className="hero-video-bg"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          src={heroVideo}
        ></video>
        <div className="hero-video-overlay"></div>
        <div className="container">
          <div className="row align-items-center justify-content-start">
            <div className="col-lg-10 col-xl-9 col-md-11">
              <div className="hero-style1">
                <h1 className="hero-title text-white">
                  ENGINEERING SMARTER STEEL STRUCTURES FOR TOMORROW'S INDUSTRIES
                </h1>
                <p className="hero-text text-white">
                  Structural Design | PEB Design + Tekla Detailing | Civil Turnkey Project Solution
                </p>
                <div className="btn-group">
                  <Link to="/projects#projects" className="th-btn style3">
                    VIEW OUR PROJECTS
                    <i className="fa-regular fa-arrow-right ms-2"></i>
                  </Link>
                  <button
                    type="button"
                    className="th-btn style2"
                    onClick={() => setIsConsultOpen(true)}
                  >
                    TALK TO A CONSULTANT<i className="fa-regular fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Counter Bar - Image 2 Styled Design with Image 1 Content */}
      <div className="hero-counter-wrap">
        <div className="hero-counter-container">
          <div ref={counterRef} className={`hero-counter-grid ${isCounterVisible ? 'is-visible' : ''}`}>

            {/* Item 1 */}
            <div className="hero-counter-card">
              <div className="counter-dots counter-dots-tl"></div>
              <div className="counter-dots counter-dots-br"></div>
              <div className="counter-accents">
                <span className="counter-sq sq-orange"></span>
                <span className="counter-sq sq-white"></span>
              </div>
              <div className="counter-content-box">
                <div className="counter-icon-wrap">
                  <i className="fa-solid fa-city"></i>
                </div>
                <div className="counter-text-wrap">
                  <div className="counter-number-val">
                    <span className="num-highlight"><CountUp end={15} /></span>
                    <span className="plus-sign">+</span>
                  </div>
                  <p className="counter-label-text">Years of Experience</p>
                </div>
              </div>
              <div className="counter-bottom-line"></div>
            </div>

            {/* Item 2 */}
            <div className="hero-counter-card">
              <div className="counter-dots counter-dots-tl"></div>
              <div className="counter-dots counter-dots-br"></div>
              <div className="counter-accents">
                <span className="counter-sq sq-orange"></span>
                <span className="counter-sq sq-white"></span>
              </div>
              <div className="counter-content-box">
                <div className="counter-icon-wrap">
                  <i className="fa-solid fa-user-gear"></i>
                </div>
                <div className="counter-text-wrap">
                  <div className="counter-number-val">
                    <span className="num-highlight"><CountUp end={500} /></span>
                    <span className="plus-sign">+</span>
                  </div>
                  <p className="counter-label-text">Projects Delivered</p>
                </div>
              </div>
              <div className="counter-bottom-line"></div>
            </div>

            {/* Item 3 */}
            <div className="hero-counter-card">
              <div className="counter-dots counter-dots-tl"></div>
              <div className="counter-dots counter-dots-br"></div>
              <div className="counter-accents">
                <span className="counter-sq sq-orange"></span>
                <span className="counter-sq sq-white"></span>
              </div>
              <div className="counter-content-box">
                <div className="counter-icon-wrap">
                  <i className="fa-solid fa-thumbs-up"></i>
                </div>
                <div className="counter-text-wrap">
                  <div className="counter-number-val text-nowrap">
                    <span className="num-highlight"><CountUp end={5} /></span>
                    <span className="plus-sign">+</span>
                    <span className="num-highlight ms-1">Million</span>
                  </div>
                  <p className="counter-label-text">Sq.ft Designed</p>
                </div>
              </div>
              <div className="counter-bottom-line"></div>
            </div>

            {/* Item 4 */}
            <div className="hero-counter-card">
              <div className="counter-dots counter-dots-tl"></div>
              <div className="counter-dots counter-dots-br"></div>
              <div className="counter-accents">
                <span className="counter-sq sq-orange"></span>
                <span className="counter-sq sq-white"></span>
              </div>
              <div className="counter-content-box">
                <div className="counter-icon-wrap">
                  <i className="fa-solid fa-drafting-compass"></i>
                </div>
                <div className="counter-text-wrap">
                  <div className="counter-number-val">
                    <span className="num-highlight"><CountUp end={100} /></span>
                    <span className="plus-sign">+</span>
                  </div>
                  <p className="counter-label-text">Industrial Clients</p>
                </div>
              </div>
              <div className="counter-bottom-line"></div>
            </div>

            {/* Item 5 */}
            <div className="hero-counter-card">
              <div className="counter-dots counter-dots-tl"></div>
              <div className="counter-dots counter-dots-br"></div>
              <div className="counter-accents">
                <span className="counter-sq sq-orange"></span>
                <span className="counter-sq sq-white"></span>
              </div>
              <div className="counter-content-box">
                <div className="counter-icon-wrap">
                  <i className="fa-solid fa-shield-check"></i>
                </div>
                <div className="counter-text-wrap">
                  <div className="counter-number-val text-nowrap">
                    <span className="num-highlight">Zero Error</span>
                  </div>
                  <p className="counter-label-text">Engineering Philosophy</p>
                </div>
              </div>
              <div className="counter-bottom-line"></div>
            </div>

          </div>
        </div>
      </div>

      {/* About Section - Exact Match Design from Uploaded Image */}
      <div ref={aboutRef} className={`gargi-about-section overflow-hidden ${isAboutVisible ? 'is-visible' : ''}`} id="about-sec">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            {/* Left Column: Single Full-Height Hero Image (Tablet and Desktop) */}
            <div className="col-md-6 col-lg-6 d-none d-md-block">
              <div className="gargi-about-single-img-wrap">
                <img
                  src={aboutImage}
                  alt="Engineers inspecting 3D structural steel building frame"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Right Column: Title, Underline, Paragraphs & Download Brochure Button */}
            <div className="col-md-6 col-lg-6">
              <div className="gargi-about-content">
                <div className="gargi-about-tag-row">

                  <span className="eng-tag">ABOUT US</span>
                </div>

                <h2 className="process-main-title">
                  Innovative Engineering for Modern Infrastructure
                </h2>

                {/* Mobile Image: Shown after heading on small mobile screens (< 768px) */}
                <div className="gargi-about-single-img-wrap d-block d-md-none mb-4 mt-2">
                  <img
                    src={aboutImage}
                    alt="Engineers inspecting 3D structural steel building frame"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <p className="gargi-about-p">
                  Gargi Engineering Services is a specialized structural engineering and PEB consulting company delivering end-to-end solutions for industrial, commercial, and infrastructure projects. Our expertise spans Pre-Engineered Buildings (PEB), structural steel design, detailing, estimation, value engineering, and turnkey engineering support.
                </p>

                <p className="gargi-about-p">
                  We believe engineering is more than calculations. It is about creating structures that are stronger, more efficient, easier to fabricate, and faster to construct. Every solution is developed with a focus on reducing project complexity, optimizing material usage, and ensuring seamless execution on-site.
                </p>

                <p className="gargi-about-p">
                  Working closely with architects, fabricators, EPC contractors, and project owners, we deliver engineering solutions that balance functionality, safety, aesthetics, and commercial viability.
                </p>

                <button
                  type="button"
                  className="gargi-download-btn"
                  onClick={() => setIsBrochureOpen(true)}
                >
                  <i className="fa-solid fa-download"></i>
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="space" id="service-sec">
        <div className="container z-index-common">
          {/* Header with Navigation Keys */}
          <div className="row justify-content-between align-items-end mb-40">
            <div className="col-md-8 text-md-start text-center">
              <div className="title-area mb-0">
                <span className="sub-title">WHAT WE DO</span>
                <h2 className="sec-title">Comprehensive PEB & Structural Services</h2>
              </div>
            </div>
            <div className="col-md-4 d-none d-md-flex justify-content-end">
              <div className="service-slider-arrows mb-0">
                <button
                  data-slick-prev="#service-slider1"
                  className="slick-arrow slick-prev"
                  aria-label="Previous Service"
                >
                  <i className="fa-regular fa-arrow-left-long"></i>
                </button>
                <button
                  data-slick-next="#service-slider1"
                  className="slick-arrow slick-next"
                  aria-label="Next Service"
                >
                  <i className="fa-regular fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          </div>

          <div
            className="row slider-shadow th-carousel"
            id="service-slider1"
            data-slide-show="2"
            data-lg-slide-show="2"
            data-md-slide-show="2"
            data-sm-slide-show="1"
          >
            <div className="col-md-6 col-lg-6">
              <div className="service-featured">
                <div className="service-featured_img">
                  <Link to="/peb-design">
                    <img src={PEBDetail} alt="PEB Design" />
                    {/* <img src={steelImage} alt="PEB Design" /> */}
                  </Link>
                </div>

                <div className="service-featured_content">
                  <div className="service-bg-shape">
                    <img
                      src="/assets/img/service/service_box_shape1.jpg"
                      alt="img"
                    />
                  </div>

                  <h3 className="box-title">
                    <Link to="/peb-design">PEB Design</Link>
                  </h3>
                  <p className="service-featured_text">
                    Comprehensive pre-engineered steel structure design & load optimization.
                  </p>
                  <Link to="/peb-design" className="link-btn">
                    Read More<i className="fa-solid fa-arrow-up-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="service-featured">
                <div className="service-featured_img">
                  <Link to="/peb-detailing">
                    <img src={PEBDetail2} alt="PEB Detailing" />
                  </Link>
                </div>
                <div className="service-featured_content">
                  <div className="service-bg-shape">
                    <img
                      src="/assets/img/service/service_box_shape1.jpg"
                      alt="img"
                    />
                  </div>

                  <h3 className="box-title">
                    <Link to="/peb-detailing">PEB Detailing</Link>
                  </h3>
                  <p className="service-featured_text">
                    High-precision Tekla 3D modeling and structural component shop drawings.
                  </p>
                  <Link to="/peb-detailing" className="link-btn">
                    Read More<i className="fa-solid fa-arrow-up-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="service-featured steel-card">
                <div className="service-featured_img">
                  <Link to="/peb-design">
                    <img src={steelImage2} alt="Steel Structuring" />
                  </Link>
                </div>
                <div className="service-featured_content">
                  <div className="service-bg-shape">
                    <img
                      src="/assets/img/service/service_box_shape1.jpg"
                      alt="img"
                    />
                  </div>

                  <h3 className="box-title">
                    <Link to="/peb-design">Steel Structuring</Link>
                  </h3>
                  <p className="service-featured_text">
                    Custom heavy industrial steel framework engineering & assembly plans.
                  </p>
                  <Link to="/peb-design" className="link-btn">
                    Read More<i className="fa-solid fa-arrow-up-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="service-featured">
                <div className="service-featured_img">
                  <Link to="/connection-design">
                    <img src={structuralImage} alt="Structural Consultancy" />
                  </Link>
                </div>
                <div className="service-featured_content">
                  <div className="service-bg-shape">
                    <img
                      src="/assets/img/service/service_box_shape1.jpg"
                      alt="img"
                    />
                  </div>

                  <h3 className="box-title">
                    <Link to="/connection-design">Structural Consultancy</Link>
                  </h3>
                  <p className="service-featured_text">
                    Expert engineering guidance, stress load analysis, and structural audits.
                  </p>
                  <Link to="/connection-design" className="link-btn">
                    Read More<i className="fa-solid fa-arrow-up-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="service-featured">
                <div className="service-featured_img">
                  <Link to="/value-engineering">
                    <img src={valueImage} alt="Value Engineering" />
                  </Link>
                </div>
                <div className="service-featured_content">
                  <div className="service-bg-shape">
                    <img
                      src="/assets/img/service/service_box_shape1.jpg"
                      alt="img"
                    />
                  </div>

                  <h3 className="box-title">
                    <Link to="/civil-design">Civil Design and Construction</Link>
                  </h3>
                  <p className="service-featured_text">
                    Structural design, foundation engineering, and construction execution for industrial & commercial projects.
                  </p>
                  <Link to="/civil-design" className="link-btn">
                    Read More<i className="fa-solid fa-arrow-up-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="service-featured">
                <div className="service-featured_img">
                  <Link to="/fabrication-support">
                    <img src={constructionImage} alt="Construction Support" />
                  </Link>
                </div>
                <div className="service-featured_content">
                  <div className="service-bg-shape">
                    <img
                      src="/assets/img/service/service_box_shape1.jpg"
                      alt="img"
                    />
                  </div>

                  <h3 className="box-title">
                    <Link to="/fabrication-support">Construction Support</Link>
                  </h3>
                  <p className="service-featured_text">
                    On-site erection assistance, discrepancy resolution & quality assembly.
                  </p>
                  <Link to="/fabrication-support" className="link-btn">
                    Read More<i className="fa-solid fa-arrow-up-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Arrows */}
          <div className="service-slider-arrows d-flex d-md-none justify-content-center mt-4 mb-2">
            <button
              data-slick-prev="#service-slider1"
              className="slick-arrow slick-prev"
              aria-label="Previous Service"
            >
              <i className="fa-regular fa-arrow-left-long"></i>
            </button>
            <button
              data-slick-next="#service-slider1"
              className="slick-arrow slick-next"
              aria-label="Next Service"
            >
              <i className="fa-regular fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Our Engineering Process Section */}
      <EngineeringProcess />

      <DigitalEngineeringUSP />

      <OurProjects />

      <div className="bg-white overflow-hidden">
        <OurClients />
      </div>






      <section
        className="testi-area-1 overflow-hidden space-bottom"
        data-bg-src="/assets/img/bg/testi_bg_1.png"
      >
        <div className="container z-index-common">
          {/* Header at Top */}
          <div className="row justify-content-between align-items-end mb-40">
            <div className="col-md-8 text-md-start text-center">
              <div className="title-area mb-0">
                <span className="sub-title">TESTIMONIALS</span>
                <h2 className="sec-title text-white">What Clients Say About Us</h2>
              </div>
            </div>
            <div className="col-md-4 d-none d-md-flex justify-content-end">
              <div className="testimonial-slider-arrow1 mb-0">
                <button
                  data-slick-prev="#testimonial-slider1"
                  className="slick-arrow slick-prev"
                  aria-label="Previous"
                >
                  <i className="fa-regular fa-arrow-left-long"></i>
                </button>
                <button
                  data-slick-next="#testimonial-slider1"
                  className="slick-arrow slick-next"
                  aria-label="Next"
                >
                  <i className="fa-regular fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Slider - 1 at a time horizontally (100% width) */}
          <div
            className="th-carousel testi-slider1"
            id="testimonial-slider1"
            data-slide-show="1"
            data-ml-slide-show="1"
            data-lg-slide-show="1"
            data-md-slide-show="1"
            data-sm-slide-show="1"
            data-xs-slide-show="1"
            data-dots="false"
            data-arrows="false"
            data-auto-play="true"
            data-auto-play-timeout="4000"
          >
            {testimonialsData.map((testi, idx) => (
              <div key={idx} className="testi-slide-item">
                <div className="testi-card">
                  <div
                    className="testi-card_bg-shape shape-mockup spin d-xl-block d-none"
                    data-right="-35%"
                    data-top="-35%"
                  >
                    <img src="/assets/img/normal/about_1_2shape.png" alt="shape" />
                  </div>
                  <div className="testi-card_profile">
                    <div className="media-left">
                      <div className="testi-card_avater">
                        <img
                          src={testi.image}
                          alt={testi.name || "Testimonial"}
                        />
                      </div>
                      <div className="testi-card_quote">
                        <img
                          src="/assets/img/icon/blog-quote1.svg"
                          alt="quote"
                        />
                      </div>
                    </div>
                    <div className="media-body">
                      <div className="testi-rating-stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      {testi.name && <h3 className="testi-card_name">{testi.name}</h3>}
                      <span className="testi-card_desig">{testi.designation}</span>
                      <p className="testi-card_text">
                        {testi.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Arrows */}
          <div className="testimonial-slider-arrow1 d-flex d-md-none justify-content-center mt-3 mb-1">
            <button
              data-slick-prev="#testimonial-slider1"
              className="slick-arrow slick-prev"
              aria-label="Previous"
            >
              <i className="fa-regular fa-arrow-left-long"></i>
            </button>
            <button
              data-slick-next="#testimonial-slider1"
              className="slick-arrow slick-next"
              aria-label="Next"
            >
              <i className="fa-regular fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </section>



      <section className="overflow-hidden space" id="blog-sec">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Blog & News</span>
            <h2 className="sec-title">Latest Blog & News</h2>
          </div>
          <div
            className="row slider-shadow th-carousel arrow-style2"
            data-slide-show="3"
            data-lg-slide-show="2"
            data-md-slide-show="2"
            data-sm-slide-show="1"
            data-arrows="true"
          >
            <div className="col-md-6 col-xl-4">
              <div className="blog-card">
                <div className="blog-img">
                  <Link to="/blog-details">
                    <img src={blog1} alt="PEB Design" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link to="/knowledge-center">
                      <i className="fa-solid fa-layer-group"></i>PEB Design • Value Engineering
                    </Link>
                  </div>
                  <h3 className="box-title">
                    <Link to="/blog-details">
                      Why Engineering Design Matters More Than Steel Price in PEB Projects
                    </Link>
                  </h3>
                  <p className="blog-text">
                    A smart PEB design goes beyond steel cost. Discover how optimized engineering improves safety, reduces construction costs, speeds up execution, and delivers long-term value.
                  </p>
                  <div className="blog-bottom">
                    <Link to="/blog-details" className="link-btn">
                      Read More <i className="fa-solid fa-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="blog-card">
                <div className="blog-img">
                  <Link to="/blog-details-2">
                    <img src={blog2} alt="Digital Engineering" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link to="/knowledge-center">
                      <i className="fa-solid fa-layer-group"></i>Technology • Digital Engineering
                    </Link>
                  </div>
                  <h3 className="box-title">
                    <Link to="/blog-details-2">
                      The Future of Industrial Buildings: Why Digital Engineering is Transforming PEB Design
                    </Link>
                  </h3>
                  <p className="blog-text">
                    Discover how digital engineering improves accuracy, speeds up project delivery, enhances collaboration, and reduces construction risks in modern PEB projects.
                  </p>
                  <div className="blog-bottom">
                    <Link to="/blog-details-2" className="link-btn">
                      Read More <i className="fa-solid fa-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="blog-card">
                <div className="blog-img">
                  <Link to="/blog-details-3">
                    <img src={blog3} alt="Project Planning" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link to="/knowledge-center">
                      <i className="fa-solid fa-layer-group"></i>Industrial Construction • Project Planning
                    </Link>
                  </div>
                  <h3 className="box-title">
                    <Link to="/blog-details-3">
                      Five Mistakes Companies Make When Planning a New Industrial Building
                    </Link>
                  </h3>
                  <p className="blog-text">
                    Avoid costly project delays and budget overruns by understanding the five most common mistakes in industrial building planning and how smart engineering prevents them.
                  </p>
                  <div className="blog-bottom">
                    <Link to="/blog-details-3" className="link-btn">
                      Read More <i className="fa-solid fa-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
      />
    </>
  );
}
