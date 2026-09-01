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

export default function BlogDetails2() {
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
              The Future of Industrial Buildings: Why Digital Engineering is Transforming PEB Design
            </h1>

            <div className="blog-hero-category">
              <i className="fal fa-layer-group me-1"></i> Technology • Digital Engineering • Construction
            </div>
          </div>

          <div className="row gy-4">
            {/* ══ LEFT MAIN CONTENT (8 COLS) ══ */}
            <div className="col-lg-8">
              <article className="blog-content-card">
                {/* Main Featured Cover Image */}
                <div className="blog-main-image-frame">
                  <img
                    src={blogImg2}
                    alt="The Future of Industrial Buildings: Why Digital Engineering is Transforming PEB Design"
                  />
                </div>

                {/* Introduction Paragraph */}
                <p className="blog-body-p-lead">
                  Industrial construction is evolving rapidly. Today's projects demand greater speed, accuracy, and coordination than ever before. As buildings become more complex, traditional design methods are giving way to digital engineering technologies that improve collaboration and reduce project risks.
                </p>

                {/* Section 1 */}
                <h2 className="blog-h2-heading">
                  What is Digital Engineering?
                </h2>
                <p className="blog-body-p">
                  Digital engineering combines structural analysis, three-dimensional modelling, detailing, and project coordination into a unified workflow.
                </p>
                <p className="blog-body-p">
                  Instead of relying solely on two-dimensional drawings, engineers create intelligent digital models that represent every structural component before fabrication begins.
                </p>
                <p className="blog-body-p">
                  This enables project teams to visualize the building, detect issues early, and improve coordination between design, fabrication, and construction.
                </p>

                {/* Section 2 */}
                <h2 className="blog-h2-heading">
                  Improved Accuracy
                </h2>
                <p className="blog-body-p">
                  One of the biggest advantages of digital engineering is precision. Every beam, column, connection, plate, and bolt is modelled in detail, allowing fabrication drawings to be generated directly from the digital model.
                </p>
                <p className="blog-body-p">
                  This significantly reduces the likelihood of errors during manufacturing and installation.
                </p>

                {/* Section 3 */}
                <h2 className="blog-h2-heading">
                  Faster Project Delivery
                </h2>
                <p className="blog-body-p">
                  When engineering information is accurate and coordinated from the beginning, fabrication can begin earlier and site teams spend less time resolving unexpected issues.
                </p>

                {/* Key Results / Takeaways Box */}
                <div className="blog-takeaways-box">
                  <div className="blog-takeaways-title">
                    <i className="fal fa-check-circle me-1"></i> Key Results of Digital Engineering
                  </div>
                  <ul className="blog-bullets-list">
                    <li>Reduced rework and material waste</li>
                    <li>Faster shop fabrication times</li>
                    <li>Quicker and safer site erection</li>
                    <li>Better project coordination across all stakeholders</li>
                  </ul>
                </div>

                {/* Section 4 */}
                <h2 className="blog-h2-heading">
                  Better Collaboration
                </h2>
                <p className="blog-body-p">
                  Digital engineering allows architects, consultants, contractors, and fabricators to work from a shared model, improving communication and reducing design conflicts.
                </p>
                <p className="blog-body-p">
                  This collaborative approach is becoming increasingly important for large industrial and infrastructure projects.
                </p>

                {/* Section 5 */}
                <h2 className="blog-h2-heading">
                  Supporting Future Expansion
                </h2>
                <p className="blog-body-p">
                  Industrial facilities rarely remain static. Digital models provide a reliable foundation for future modifications, equipment additions, and building expansions without requiring complete redesign.
                </p>

                {/* Section 6 */}
                <h2 className="blog-h2-heading">
                  Looking Ahead
                </h2>
                <p className="blog-body-p">
                  As industries continue to embrace automation and smart manufacturing, digital engineering will become the standard for industrial construction.
                </p>
                <p className="blog-body-p">
                  Organizations that invest in digitally engineered buildings today will benefit from greater efficiency, lower project risks, and improved operational flexibility.
                </p>
              </article>
            </div>

            {/* ══ RIGHT SIDEBAR (4 COLS) ══ */}
            <div className="col-lg-4">
              {/* Widget 1: Project Consultation CTA */}
              <div className="blog-sidebar-widget blog-cta-widget">
                <h3 className="blog-widget-title">Need Digital Engineering Solutions?</h3>
                <p className="blog-cta-p">
                  Our structural engineers utilize Tekla 3D BIM modeling to deliver precision PEB detailing, zero-clash models, and fabrication-ready drawings.
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
                    <img src={blogImg1} alt="PEB Engineering Design" />
                  </div>
                  <div>
                    <span className="recent-post-cat">PEB Design</span>
                    <h4 className="recent-post-info-title">
                      Why Engineering Design Matters More Than Steel Price in PEB Projects
                    </h4>
                  </div>
                </a>

                <a href="/blog-details-3" className="recent-post-link-item">
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
                    <a href="/digital-engineering" className="text-decoration-none text-dark fw-bold d-flex justify-content-between align-items-center">
                      Digital Engineering & BIM <i className="fal fa-angle-right text-primary"></i>
                    </a>
                  </li>
                  <li className="py-2 border-bottom">
                    <a href="/peb-detailing" className="text-decoration-none text-dark fw-bold d-flex justify-content-between align-items-center">
                      Tekla 3D PEB Detailing <i className="fal fa-angle-right text-primary"></i>
                    </a>
                  </li>
                  <li className="py-2 border-bottom">
                    <a href="/peb-design" className="text-decoration-none text-dark fw-bold d-flex justify-content-between align-items-center">
                      PEB Structural Design <i className="fal fa-angle-right text-primary"></i>
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="/value-engineering" className="text-decoration-none text-dark fw-bold d-flex justify-content-between align-items-center">
                      Value Engineering <i className="fal fa-angle-right text-primary"></i>
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
