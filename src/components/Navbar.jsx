import React, { useState, useEffect, useRef, useCallback } from 'react';
import logoImg from '../assets/img/gargilogo.png';
import logoVideo from '../assets/img/logoback.mp4';
import ConsultationModal from './ConsultationModal';

export default function Navbar() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeBtnRef = useRef(null);

  const closeMobileMenu = useCallback((e) => {
    if (e && typeof e.stopPropagation === 'function') {
      e.stopPropagation();
    }
    setIsMobileMenuOpen(false);
    document.querySelectorAll('.th-menu-wrapper').forEach((el) => {
      el.classList.remove('th-body-visible');
    });
  }, []);

  const openMobileMenu = useCallback((e) => {
    if (e && typeof e.stopPropagation === 'function') {
      e.stopPropagation();
    }
    setIsMobileMenuOpen(true);
    document.querySelectorAll('.th-menu-wrapper').forEach((el) => {
      el.classList.add('th-body-visible');
    });
  }, []);

  // Capture phase native listener to ensure close handler runs before jQuery native stopPropagation
  useEffect(() => {
    const btn = closeBtnRef.current;
    if (!btn) return;

    const handleNativeClose = (e) => {
      closeMobileMenu(e);
    };

    btn.addEventListener('click', handleNativeClose, true);
    btn.addEventListener('touchstart', handleNativeClose, true);

    // Unbind jQuery click traps on menu wrapper
    const clearJQueryTraps = () => {
      if (window.jQuery) {
        window.jQuery('.th-menu-wrapper').off('click');
        window.jQuery('.th-menu-wrapper div').off('click');
      }
    };
    clearJQueryTraps();
    const t1 = setTimeout(clearJQueryTraps, 300);
    const t2 = setTimeout(clearJQueryTraps, 800);

    return () => {
      btn.removeEventListener('click', handleNativeClose, true);
      btn.removeEventListener('touchstart', handleNativeClose, true);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [closeMobileMenu]);

  return (
    <>
      <div className="preloader">
        <button className="th-btn style2 preloaderCls">Cancel Preloader</button>
        <div className="preloader-inner"><span className="loader"></span></div>
      </div>

      <div className="popup-search-box d-none d-xl-block">
        <button className="searchClose"><i className="fal fa-times"></i></button>
        <form action="#">
          <input type="text" placeholder="What are you looking for?" />
          <button type="submit"><i className="fal fa-search"></i></button>
        </form>
      </div>

      {/* ══ MOBILE MENU DRAWER ══ */}
      <div
        className={`th-menu-wrapper ${isMobileMenuOpen ? 'th-body-visible' : ''}`}
        onClick={closeMobileMenu}
      >
        <div className="th-menu-area text-center" onClick={(e) => e.stopPropagation()}>
          <button type="button" className="th-menu-close-btn" ref={closeBtnRef} onClick={closeMobileMenu}>
            <i className="far fa-times"></i>
          </button>
          <div className="mobile-logo">
            <a href="/" onClick={closeMobileMenu}>
              <img src={logoImg} className="custom-logo" alt="Gargi Engineering" />
            </a>
          </div>
          <div className="th-mobile-menu">
            <ul>
              <li><a href="/" onClick={closeMobileMenu}>Home</a></li>
              <li className="menu-item-has-children">
                <a href="/about" onClick={closeMobileMenu}>About Us</a>
                <ul className="sub-menu">
                  <li><a href="/about#company" onClick={closeMobileMenu}>Company</a></li>
                  <li><a href="/about#leadership" onClick={closeMobileMenu}>Leadership</a></li>
                  <li><a href="/about#philosophy" onClick={closeMobileMenu}>Engineering Philosophy</a></li>
                  <li><a href="/about#technology" onClick={closeMobileMenu}>Technology</a></li>
                  <li><a href="/about#careers" onClick={closeMobileMenu}>Careers</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="/service" onClick={closeMobileMenu}>Services</a>
                <ul className="sub-menu">
                  <li><a href="/peb-design" onClick={closeMobileMenu}>PEB Design & Structural Engineering</a></li>
                  <li><a href="/peb-detailing" onClick={closeMobileMenu}>PEB Detailing & Tekla Modelling</a></li>
                  <li><a href="/civil-design" onClick={closeMobileMenu}>Civil Design & Construction Consulting</a></li>
                  <li><a href="/connection-design" onClick={closeMobileMenu}>Connection Design & Engineering</a></li>
                  <li><a href="/pmc" onClick={closeMobileMenu}>Project Management Consultancy</a></li>
                  {/* <li><a href="/value-engineering" onClick={closeMobileMenu}>Value Engineering</a></li>
                  <li><a href="/material-take-off" onClick={closeMobileMenu}>Material Take-Off & Estimation</a></li>
                  <li><a href="/fabrication-support" onClick={closeMobileMenu}>Fabrication & Construction Support</a></li>
                  <li><a href="/digital-engineering" onClick={closeMobileMenu}>Digital Engineering Services</a></li> */}
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="/industries" onClick={closeMobileMenu}>Industries</a>
                <ul className="sub-menu">
                  <li><a href="/industries#automotive" onClick={closeMobileMenu}>Automotive</a></li>
                  <li><a href="/industries#warehousing" onClick={closeMobileMenu}>Warehousing & Logistics</a></li>
                  <li><a href="/industries#manufacturing" onClick={closeMobileMenu}>Manufacturing</a></li>
                  <li><a href="/industries#heavy" onClick={closeMobileMenu}>Heavy Engineering</a></li>
                  <li><a href="/industries#renewable" onClick={closeMobileMenu}>Renewable Energy</a></li>
                  <li><a href="/industries#retail" onClick={closeMobileMenu}>Retail & Commercial</a></li>
                  <li><a href="/industries#industrial" onClick={closeMobileMenu}>Industrial Projects</a></li>
                  <li><a href="/industries#food" onClick={closeMobileMenu}>Food Processing</a></li>
                  <li><a href="/industries#infrastructure" onClick={closeMobileMenu}>Infrastructure</a></li>
                </ul>
              </li>
              <li><a href="/projects" onClick={closeMobileMenu}>Projects</a></li>
              <li><a href="/knowledge-center" onClick={closeMobileMenu}>Knowledge Center</a></li>
              <li><a href="/contact" onClick={closeMobileMenu}>Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>

      <header className="th-header header-layout1">
        <div className="sticky-wrapper">
          <div className="header-top">
            <ul className="hc-contact-list">
              <li className="hc-phone">
                <i className="far fa-phone hc-icon"></i>
                <a href="tel:+917875800441" className="hc-link">+91 78758 00441</a>
              </li>
              <li className="hc-divider"></li>
              <li className="hc-email">
                <i className="far fa-envelope-open hc-icon"></i>
                <a href="mailto:pebgargiengineering@gmail.com" className="hc-link">pebgargiengineering@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="menu-area">
            <div className="container th-container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <a href="/">
                      <img src={logoImg} className="custom-logo" alt="Gargi Engineering" />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-xl-inline-block">
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li className="menu-item-has-children">
                        <a href="/about">About Us</a>
                        <ul className="sub-menu">
                          <li><a href="/about#company">Company</a></li>
                          <li><a href="/about#leadership">Leadership</a></li>
                          <li><a href="/about#philosophy">Engineering Philosophy</a></li>
                          <li><a href="/about#technology">Technology</a></li>
                          <li><a href="/about#careers">Careers</a></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="/service">Services</a>
                        <ul className="sub-menu">
                          <li><a href="/peb-design">PEB Design & Structural Engineering</a></li>
                          <li><a href="/peb-detailing">PEB Detailing & Tekla Modelling</a></li>
                          <li><a href="/civil-design">Civil Design & Construction Consulting</a></li>
                          <li><a href="/connection-design">Connection Design & Engineering</a></li>
                          <li><a href="/pmc">Project Management Consultancy</a></li>
                          {/* <li><a href="/value-engineering">Value Engineering</a></li>
                          <li><a href="/material-take-off">Material Take-Off & Estimation</a></li>
                          <li><a href="/fabrication-support">Fabrication & Construction Support</a></li>
                          <li><a href="/digital-engineering">Digital Engineering Services</a></li> */}
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="/industries">Industries</a>
                        <ul className="sub-menu">
                          <li><a href="/industries#automotive">Automotive</a></li>
                          <li><a href="/industries#warehousing">Warehousing & Logistics</a></li>
                          <li><a href="/industries#manufacturing">Manufacturing</a></li>
                          <li><a href="/industries#heavy">Heavy Engineering</a></li>
                          <li><a href="/industries#renewable">Renewable Energy</a></li>
                          <li><a href="/industries#retail">Retail & Commercial</a></li>
                          <li><a href="/industries#industrial">Industrial Projects</a></li>
                          <li><a href="/industries#food">Food Processing</a></li>
                          <li><a href="/industries#infrastructure">Infrastructure</a></li>
                        </ul>
                      </li>
                      <li><a href="/projects">Projects</a></li>
                      <li><a href="/knowledge-center">Knowledge Center</a></li>
                      <li><a href="/contact">Contact Us</a></li>
                    </ul>
                  </nav>

                  {/* Mobile Menu Toggle Button */}
                  <button
                    type="button"
                    className="th-menu-open-btn d-block d-xl-none"
                    onClick={openMobileMenu}
                  >
                    <i className="far fa-bars"></i>
                  </button>
                </div>

                <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                    <button
                      type="button"
                      className="th-btn"
                      onClick={() => setIsConsultationOpen(true)}
                    >
                      Get a Quote<i className="fas fa-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="logo-bg">
            <video
              src={logoVideo}
              className="logo-bg-sketch"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </header>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </>
  );
}
