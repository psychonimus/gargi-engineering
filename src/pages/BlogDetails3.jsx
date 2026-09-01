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

// Recommended engineering strategy topics
const strategyTopics = [
  "PEB vs Conventional RCC Buildings: Which is Right for Your Project?",
  "How Value Engineering Reduces Steel Consumption Without Compromising Safety",
  "Understanding Crane Load Design in Industrial Buildings",
  "Common Structural Design Mistakes in Warehouse Projects",
  "The Role of Tekla Structures in Modern Steel Construction",
  "Why Fabrication-Ready Drawings Reduce Project Delays",
  "How to Choose the Right PEB Design Consultant",
  "Designing Industrial Buildings for Future Expansion",
  "Sustainability in Steel Structures: Designing for Energy Efficiency",
  "A Complete Guide to Structural Audits for Existing Industrial Buildings"
];

export default function BlogDetails3() {
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
              Five Mistakes Companies Make When Planning a New Industrial Building
            </h1>

            <div className="blog-hero-category">
              <i className="fal fa-layer-group me-1"></i> Industrial Construction • PEB • Project Planning
            </div>
          </div>

          <div className="row gy-4">
            {/* ══ LEFT MAIN CONTENT (8 COLS) ══ */}
            <div className="col-lg-8">
              <article className="blog-content-card">
                {/* Main Featured Cover Image */}
                <div className="blog-main-image-frame">
                  <img
                    src={blogImg3}
                    alt="Five Mistakes Companies Make When Planning a New Industrial Building"
                  />
                </div>

                {/* Introduction Paragraph */}
                <p className="blog-body-p-lead">
                  Building a new manufacturing facility or warehouse is a major investment. While every project is unique, many organisations encounter similar challenges that increase costs and delay completion. Here are five common mistakes—and how to avoid them.
                </p>

                {/* Mistake 1 */}
                <h2 className="blog-h2-heading">
                  1. Prioritising Lowest Cost Over Best Value
                </h2>
                <p className="blog-body-p">
                  Choosing the lowest quotation without evaluating engineering quality can lead to higher costs later through redesign, fabrication issues, and project delays. Engineering expertise should always be part of the evaluation process.
                </p>

                {/* Mistake 2 */}
                <h2 className="blog-h2-heading">
                  2. Ignoring Future Expansion
                </h2>
                <p className="blog-body-p">
                  Many industrial buildings need to accommodate future production growth. Planning for expansion during the design stage is significantly more cost-effective than modifying an existing structure later.
                </p>

                {/* Mistake 3 */}
                <h2 className="blog-h2-heading">
                  3. Delaying Engineering Coordination
                </h2>
                <p className="blog-body-p">
                  Structural engineers, architects, MEP consultants, and contractors should collaborate from the earliest stages of the project. Early coordination helps avoid costly changes during construction.
                </p>

                {/* Mistake 4 */}
                <h2 className="blog-h2-heading">
                  4. Underestimating Operational Requirements
                </h2>
                <p className="blog-body-p">
                  Building design should reflect how the facility will actually operate. Factors such as crane systems, equipment loads, storage layouts, vehicle movement, ventilation, and maintenance access should all influence the engineering design.
                </p>

                {/* Mistake 5 */}
                <h2 className="blog-h2-heading">
                  5. Overlooking Value Engineering
                </h2>
                <p className="blog-body-p">
                  Value engineering is often misunderstood as cost cutting. In reality, it is a structured engineering process that evaluates multiple design options to improve efficiency while maintaining structural safety and performance. Small improvements in design can deliver significant savings across fabrication, transportation, and construction.
                </p>

                {/* Summary Section */}
                <h2 className="blog-h2-heading">
                  Building Smarter Starts with Better Planning
                </h2>
                <p className="blog-body-p">
                  Successful industrial projects begin long before construction starts. The combination of detailed planning, experienced engineering, digital technologies, and collaborative project management creates buildings that are not only structurally sound but also efficient, adaptable, and economically viable.
                </p>

                {/* ════════ Content Strategy Recommendation Section ════════ */}
                <div className="blog-takeaways-box mt-5">
                  <div className="blog-takeaways-title">
                    <i className="fal fa-lightbulb me-1"></i> Content Strategy Recommendation
                  </div>
                  <p className="blog-body-p mb-3 text-dark fw-bold">
                    These three blogs form the beginning of a larger "Engineering Insights" series that can establish Gargi Engineering as a trusted authority. We recommend building a library of 20–30 articles over time around critical technical topics:
                  </p>

                  <div className="row g-2 mb-3">
                    {strategyTopics.map((topic, index) => (
                      <div key={index} className="col-12 col-md-6">
                        <div className="p-2 border rounded bg-white small text-dark font-weight-bold d-flex align-items-center">
                          <span className="badge bg-primary me-2">{String(index + 1).padStart(2, '0')}</span>
                          <span>{topic}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="small text-muted mb-0 font-italic border-top pt-2">
                    <strong>SEO & Authority Positioning:</strong> This approach will significantly strengthen your website's SEO while positioning Gargi Engineering as an engineering consultancy with deep technical expertise rather than simply another PEB service provider.
                  </p>
                </div>
              </article>
            </div>

            {/* ══ RIGHT SIDEBAR (4 COLS) ══ */}
            <div className="col-lg-4">
              {/* Widget 1: Project Consultation CTA */}
              <div className="blog-sidebar-widget blog-cta-widget">
                <h3 className="blog-widget-title">Planning an Industrial Facility?</h3>
                <p className="blog-cta-p">
                  Consult with Gargi Engineering experts to optimize your industrial building layout, PEB design, and structural plans before construction.
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

                <a href="/blog-details-2" className="recent-post-link-item">
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
              </div>

              {/* Widget 3: Engineering Services Quick Links */}
              <div className="blog-sidebar-widget">
                <h3 className="blog-widget-title">Our Engineering Services</h3>
                <ul className="list-unstyled mb-0">
                  <li className="py-2 border-bottom">
                    <a href="/peb-design" className="text-decoration-none text-dark fw-bold d-flex justify-content-between align-items-center">
                      PEB Structural Design <i className="fal fa-angle-right text-primary"></i>
                    </a>
                  </li>
                  <li className="py-2 border-bottom">
                    <a href="/value-engineering" className="text-decoration-none text-dark fw-bold d-flex justify-content-between align-items-center">
                      Value Engineering <i className="fal fa-angle-right text-primary"></i>
                    </a>
                  </li>
                  <li className="py-2 border-bottom">
                    <a href="/material-take-off" className="text-decoration-none text-dark fw-bold d-flex justify-content-between align-items-center">
                      Material Take-Off (MTO) <i className="fal fa-angle-right text-primary"></i>
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="/civil-design" className="text-decoration-none text-dark fw-bold d-flex justify-content-between align-items-center">
                      Industrial Civil Design <i className="fal fa-angle-right text-primary"></i>
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
