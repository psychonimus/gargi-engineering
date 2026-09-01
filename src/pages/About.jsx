import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import aboutBg from '../assets/img/about/about_bg.png';
import EngineeringSection from '../components/EngineeringSection/EngineeringSection';
import PurposeSection from '../components/PurposeSection';
import PhilosophySection from '../components/PhilosophySection';
import LeadershipSection from '../components/LeadershipSection';
import TechnologySection from '../components/TechnologySection';
import '../about.css';

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div
        className="about-page-hero"
        style={{
          backgroundImage: `url(${aboutBg})`
        }}
      >
        <div className="about-page-hero-overlay"></div>
        <div className="container">
          <div className="about-page-hero-content text-start">
           
            <h1 className="about-hero-title">
              ENGINEERING EXCELLENCE.<br />
            BUILT ON PRECISION.
            </h1>
           
          </div>
        </div>
      </div>

      {/* Engineering Section */}
      <EngineeringSection />

      {/* Vision, Mission, and Values Section */}
      <PurposeSection />

      {/* Engineering Philosophy Section */}
      <PhilosophySection />

      {/* Leadership Section */}
      <LeadershipSection />

      {/* Technology Driven Workflows Section */}
      <TechnologySection />

      <Footer />
    </>
  );
}
