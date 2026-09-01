import React from 'react';
import logoImg from '../assets/img/footerlogo.png';
import { 
  LuMapPin, 
  LuPhone, 
  LuMail, 
  LuGlobe, 
  LuChevronRight
} from 'react-icons/lu';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="exact-footer">

      <div className="footer-main-container">
        <div className="footer-grid">
          
          {/* Column 1: Logo & Description */}
          <div className="footer-col footer-col-brand">
            <div className="footer-logo-wrap">
              <a href="/">
                <img src={logoImg} alt="Gargi Engineering Services" className="footer-logo-img" />
              </a>
            </div>
            <p className="footer-brand-desc">
              Delivering innovative and cost-effective engineering solutions in Pre-Engineered Buildings, structural design, and turnkey engineering support.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links-list">
              <li><a href="/"><LuChevronRight className="link-arrow" /> Home</a></li>
              <li><a href="/about"><LuChevronRight className="link-arrow" /> About Us</a></li>
              <li><a href="/service"><LuChevronRight className="link-arrow" /> Our Services</a></li>
              <li><a href="/projects"><LuChevronRight className="link-arrow" /> Projects</a></li>
              <li><a href="/knowledge-center"><LuChevronRight className="link-arrow" /> Blog</a></li>
              <li><a href="/contact"><LuChevronRight className="link-arrow" /> Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="footer-col">
            <h3 className="footer-title">Our Services</h3>
            <ul className="footer-links-list">
              <li><a href="/peb-design"><LuChevronRight className="link-arrow" /> PEB Design</a></li>
              <li><a href="/peb-detailing"><LuChevronRight className="link-arrow" /> PEB Detailing</a></li>
              <li><a href="/civil-design"><LuChevronRight className="link-arrow" /> Civil Design</a></li>
              <li><a href="/connection-design"><LuChevronRight className="link-arrow" /> Connection Design</a></li>
              <li><a href="/pmc"><LuChevronRight className="link-arrow" /> Project Management (PMC)</a></li>
              <li><a href="/value-engineering"><LuChevronRight className="link-arrow" /> Value Engineering</a></li>
              <li><a href="/digital-engineering"><LuChevronRight className="link-arrow" /> Digital Engineering</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="footer-col">
            <h3 className="footer-title">Contact Us</h3>
            <div className="footer-contact-list">
              <div className="contact-item">
                <div className="contact-icon-circle"><LuMapPin /></div>
                <span className="contact-text">
                  PCMC Chinchwad Pune and Nagpur, Maharashtra, India
                </span>
              </div>
              <div className="contact-item">
                <div className="contact-icon-circle"><LuPhone /></div>
                <div className="contact-text-group">
                  <a href="tel:+917875800441" className="contact-link">+91 78758 00441</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon-circle"><LuMail /></div>
                <a href="mailto:pebgargiengineering@gmail.com" className="contact-text contact-link">
                  pebgargiengineering@gmail.com
                </a>
              </div>
             
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-main-container bottom-flex">
          <p className="copyright-text">
            © 2026 All Rights Reserved <span className="brand-orange">Gargi Engineering Services</span>
          </p>
          <div className="bottom-links">
            <a href="/about">Privacy Policy</a>
            <span className="divider">|</span>
            <a href="/about">Terms & Conditions</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
