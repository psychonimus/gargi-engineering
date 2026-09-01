import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectDetails from '../components/ProjectDetails';
import TrustedClients from '../components/TrustedClients';
import ProjectCTA from '../components/ProjectCTA';
import '../about.css';
import './Project.css';
import heroFallback   from '../assets/img/project/hero.png';
import structureImg  from '../assets/img/project/project3.png';






// ─── Intersection observer hook ──────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(node);
    return () => { if (node) obs.unobserve(node); };
  }, [threshold]);
  return [ref, visible];
}



// ─── Intro / Overview Component ───────────────────────────────────────
function ProjectIntro() {
  const [ref, visible] = useInView(0.1);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const elem = document.getElementById('projects');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={ref}
      className={`proj-intro-section ${visible ? 'is-visible' : ''}`}
    >
      {/* subtle dot pattern bg */}
      <div className="proj-intro-bg-dots" aria-hidden="true" />

      <div className="container">
        <div className="proj-intro-grid">

          {/* ══ COL 1 — TEXT ══ */}
          <div className="proj-intro-col-text">
           
            {/* Headline */}
            <h2 className="proj-intro-headline">
              Every structure tells a story of{' '}
             
                innovation, precision, and collaboration.
              
            </h2>

            {/* Body */}
            <p className="proj-intro-body">
              Over the years, Gargi Engineering has delivered structural engineering
              and PEB consulting solutions for some of India's leading manufacturers,
              automotive companies, logistics providers, retail brands, and industrial
              organizations. From large-scale manufacturing facilities to complex
              warehouse structures, our projects reflect our commitment to engineering
              excellence, digital precision, and value-driven design.
            </p>
            <p className="proj-intro-body">
              Explore our portfolio by industry and discover how we help businesses
              build smarter, stronger, and more efficiently.
            </p>

            {/* CTA */}
            <a href="#projects" className="proj-intro-cta" onClick={handleScrollToProjects}>
              Explore Projects
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

          {/* ══ COL 2 — STRUCTURE IMAGE & FLOATING GLASS CARDS ══ */}
          <div className="proj-intro-col-img">
            {/* Radial glow background */}
            <div className="proj-intro-img-glow" />
            {/* Decorative ring */}
            <div className="proj-intro-img-ring" />
            


            {/* Structure Image Wrapper with Sheen Effect */}
            <div className="proj-intro-img-frame">
              <img
                src={structureImg}
                alt="Steel structure"
                className="proj-intro-structure-img"
              />
              <div className="img-sheen" />
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}

// ─── Main Page Component ──────────────────────────────────────────────

export default function Project() {
  return (
    <>
      <Navbar />

      <div
        className="projects-page-hero"
        style={{ backgroundImage: `url(${heroFallback})` }}
      >
        <div className="projects-page-hero-overlay" />
        <div className="container">
          <div className="projects-page-hero-content text-start">
            <h1 className="projects-hero-title">
              Engineering Excellence <br></br> Across Industries
            </h1>
          </div>
        </div>
      </div>

      {/* ══════════════════ INTRO / OVERVIEW SECTION ══════════════════ */}
      <ProjectIntro />

      {/* ══════════════════ INDUSTRY PROJECTS SECTION ══════════════════ */}
      <ProjectDetails />

      {/* ══════════════════ TRUSTED CLIENTS SECTION ══════════════════ */}
      <TrustedClients />

      {/* ══════════════════ CTA SECTION ══════════════════ */}
      <ProjectCTA />

      <Footer />
    </>
  );
}
