import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../about.css';
import './BlogDetails.css';

// Import images
import blogImg1 from '../assets/img/blog/blog1.png';
import blogImg2 from '../assets/img/blog/blog2.png';
import blogImg3 from '../assets/img/blog/blog3.png';

export default function BlogDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-details-wrapper">
      <Navbar />

      {/* ══════════════════ MAIN BLOG CONTENT & SIDEBAR ══════════════════ */}
      <section className="blog-details-sec">
        <div className="container">
          {/* Top Header Bar */}
          <div className="blog-top-header mb-4">
            <h1 className="blog-page-title">
              Why Engineering Design Matters More Than Steel Price in PEB Projects
            </h1>

            <div className="blog-hero-category">
              <i className="fal fa-layer-group me-1"></i> PEB Design • Value Engineering • Industrial Construction
            </div>
          </div>

          <div className="row gy-4">
            {/* ══ LEFT MAIN CONTENT (8 COLS) ══ */}
            <div className="col-lg-8">
              <article className="blog-content-card">
                {/* Main Featured Cover Image */}
                <div className="blog-main-image-frame">
                  <img
                    src={blogImg1}
                    alt="Why Engineering Design Matters More Than Steel Price in PEB Projects"
                  />
                </div>

                {/* Introduction Paragraphs */}
                <p className="blog-body-p-lead">
                  When planning an industrial building, one of the first questions clients ask is, <strong>"What will be the steel cost?"</strong> While steel price is undoubtedly an important factor, focusing solely on material cost often overlooks the element that has the greatest influence on project success engineering design.
                </p>

                <p className="blog-body-p">
                  A well-engineered Pre-Engineered Building (PEB) is not simply about reducing steel weight. It is about creating a structure that performs efficiently throughout its lifecycle while balancing safety, functionality, constructability, and long-term operational requirements.
                </p>

                {/* Section 1 */}
                <h2 className="blog-h2-heading">
                  Engineering Determines Overall Project Cost
                </h2>
                <p className="blog-body-p">
                  The true cost of a building extends far beyond the purchase price of steel. Decisions made during the design phase affect fabrication complexity, erection timelines, maintenance requirements, future expansion, and operational efficiency.
                </p>
                <p className="blog-body-p">
                  An optimized structural design can reduce unnecessary material usage, simplify fabrication, minimize on-site modifications, and accelerate project completion.
                </p>

                {/* Section 2 */}
                <h2 className="blog-h2-heading">
                  The Value of Intelligent Structural Design
                </h2>
                <p className="blog-body-p">
                  Every project presents unique challenges. Factors such as crane loads, equipment placement, wind speeds, seismic conditions, roof systems, and future expansion plans all influence the structural design.
                </p>
                <p className="blog-body-p">
                  Rather than applying standard templates, engineering consultants evaluate these variables to develop solutions that are tailored to the specific needs of each project.
                </p>

                {/* Takeaways / Results Box */}
                <div className="blog-takeaways-box">
                  <div className="blog-takeaways-title">
                    <i className="fal fa-check-circle me-1"></i> Key Results of Intelligent PEB Design
                  </div>
                  <ul className="blog-bullets-list">
                    <li>Optimized for material efficiency</li>
                    <li>Easier and faster to fabricate</li>
                    <li>Faster and safer to erect on-site</li>
                    <li>Better suited for future expansion</li>
                    <li>More economical over the building's entire lifespan</li>
                  </ul>
                </div>

                {/* Section 3 */}
                <h2 className="blog-h2-heading">
                  Digital Engineering Makes the Difference
                </h2>
                <p className="blog-body-p">
                  Modern engineering relies on advanced digital tools such as Tekla Structures and STAAD.Pro to model, analyze, and validate every structural component before construction begins.
                </p>
                <p className="blog-body-p">
                  Three-dimensional modelling enables engineers to detect clashes, improve coordination, and generate fabrication-ready drawings that reduce costly errors during execution.
                </p>

                {/* Section 4 */}
                <h2 className="blog-h2-heading">
                  Building for the Long Term
                </h2>
                <p className="blog-body-p">
                  A PEB is a long-term investment. Selecting an experienced engineering partner ensures that every design decision contributes to operational efficiency, structural safety, and long-term value, not just lower upfront costs.
                </p>

                {/* Final Thoughts */}
                <h2 className="blog-h2-heading">
                  Final Thoughts
                </h2>
                <p className="blog-body-p">
                  When evaluating a PEB project, ask not only <em>"How much steel will it cost?"</em> but also <em>"How intelligently has it been engineered?"</em>
                </p>
                <p className="blog-body-p">
                  The right engineering decisions today can deliver substantial savings and improved performance for years to come.
                </p>

              </article>
            </div>

            {/* ══ RIGHT SIDEBAR (4 COLS) ══ */}
            <div className="col-lg-4">
              {/* Widget 1: Project Consultation CTA */}
              <div className="blog-sidebar-widget blog-cta-widget">
                <h3 className="blog-widget-title">Need Expert Engineering Advice?</h3>
                <p className="blog-cta-p">
                  Our structural engineers help optimize PEB designs, reduce unnecessary steel tonnage, and ensure complete compliance with Indian and international building standards.
                </p>
                <Link to="/contact" className="btn-gargi-orange">
                  Get Free Consultation <i className="fas fa-arrow-right"></i>
                </Link>
              </div>

              {/* Widget 2: Recent Blog Posts */}
              <div className="blog-sidebar-widget">
                <h3 className="blog-widget-title">Related Technical Blogs</h3>
                
                <a href="/blog-details" className="recent-post-link-item">
                  <div className="recent-post-thumb">
                    <img src={blogImg2} alt="Digital Engineering" />
                  </div>
                  <div>
                    <span className="recent-post-cat">Technology</span>
                    <h4 className="recent-post-info-title">
                      The Future of Industrial Buildings: Why Digital Engineering Transformed PEB
                    </h4>
                  </div>
                </a>

                <a href="/blog-details" className="recent-post-link-item">
                  <div className="recent-post-thumb">
                    <img src={blogImg3} alt="Industrial Construction" />
                  </div>
                  <div>
                    <span className="recent-post-cat">Project Planning</span>
                    <h4 className="recent-post-info-title">
                      Five Mistakes Companies Make When Planning a New Industrial Building
                    </h4>
                  </div>
                </a>
              </div>

              {/* Widget 3: Engineering Services Quick Links */}
              <div className="blog-sidebar-widget">
                <h3 className="blog-widget-title">Our Engineering Services</h3>
                <ul className="list-unstyled mb-0">
                  <li className="py-2 border-bottom">
                    <a href="/peb-design" className="text-decoration-none text-dark fw-bold d-flex justify-content-between align-items-center">
                      PEB Design & Detailing <i className="fal fa-angle-right text-primary"></i>
                    </a>
                  </li>
                  <li className="py-2 border-bottom">
                    <a href="/value-engineering" className="text-decoration-none text-dark fw-bold d-flex justify-content-between align-items-center">
                      Value Engineering <i className="fal fa-angle-right text-primary"></i>
                    </a>
                  </li>
                  <li className="py-2 border-bottom">
                    <a href="/digital-engineering" className="text-decoration-none text-dark fw-bold d-flex justify-content-between align-items-center">
                      Tekla 3D Detailing <i className="fal fa-angle-right text-primary"></i>
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="/connection-design" className="text-decoration-none text-dark fw-bold d-flex justify-content-between align-items-center">
                      Structural Connection Design <i className="fal fa-angle-right text-primary"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
