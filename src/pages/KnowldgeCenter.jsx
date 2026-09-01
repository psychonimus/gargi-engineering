import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../about.css';
import './KnowldgeCenter.css';

// Import images from src/assets/img/blog/
import heroBg from '../assets/img/blog/hero.png';
import blogImg1 from '../assets/img/blog/blog1.png';
import blogImg2 from '../assets/img/blog/blog2.png';
import blogImg3 from '../assets/img/blog/blog3.png';

// ─── 3 Primary Blog Posts Data Provided by User ──────────────────────────────
const blogPostsData = [
  {
    id: 1,
    title: "Why Engineering Design Matters More Than Steel Price in PEB Projects",
    categories: ["PEB Design", "Value Engineering","Industrial Construction"],
    image: blogImg1,
    date: "July 24, 2026",
    readTime: "5 min read",
    author: "Gargi Engineering Team",
    excerpt: "A smart PEB design goes beyond steel cost. Discover how optimized engineering improves safety, reduces construction costs, speeds up execution, and delivers long-term value.",
    sections: [
      {
        type: "paragraph",
        text: "When planning an industrial building, one of the first questions clients ask is, 'What will be the steel cost?' While steel price is undoubtedly an important factor, focusing solely on material cost often overlooks the element that has the greatest influence on project success engineering design."
      },
      {
        type: "paragraph",
        text: "A well-engineered Pre-Engineered Building (PEB) is not simply about reducing steel weight. It is about creating a structure that performs efficiently throughout its lifecycle while balancing safety, functionality, constructability, and long-term operational requirements."
      },
      {
        type: "heading",
        text: "Engineering Determines Overall Project Cost"
      },
      {
        type: "paragraph",
        text: "The true cost of a building extends far beyond the purchase price of steel. Decisions made during the design phase affect fabrication complexity, erection timelines, maintenance requirements, future expansion, and operational efficiency."
      },
      {
        type: "paragraph",
        text: "An optimized structural design can reduce unnecessary material usage, simplify fabrication, minimize on-site modifications, and accelerate project completion."
      },
      {
        type: "heading",
        text: "The Value of Intelligent Structural Design"
      },
      {
        type: "paragraph",
        text: "Every project presents unique challenges. Factors such as crane loads, equipment placement, wind speeds, seismic conditions, roof systems, and future expansion plans all influence the structural design."
      },
      {
        type: "paragraph",
        text: "Rather than applying standard templates, engineering consultants evaluate these variables to develop solutions that are tailored to the specific needs of each project."
      },
      {
        type: "paragraph",
        text: "This results in structures that are:"
      },
      {
        type: "bullets",
        items: [
          "Optimized for material efficiency",
          "Easier to fabricate",
          "Faster to erect",
          "Better suited for future expansion",
          "More economical over the building's lifespan"
        ]
      },
      {
        type: "heading",
        text: "Digital Engineering Makes the Difference"
      },
      {
        type: "paragraph",
        text: "Modern engineering relies on advanced digital tools such as Tekla Structures and STAAD.Pro to model, analyze, and validate every structural component before construction begins."
      },
      {
        type: "paragraph",
        text: "Three-dimensional modelling enables engineers to detect clashes, improve coordination, and generate fabrication-ready drawings that reduce costly errors during execution."
      },
      {
        type: "heading",
        text: "Building for the Long Term"
      },
      {
        type: "paragraph",
        text: "A PEB is a long-term investment. Selecting an experienced engineering partner ensures that every design decision contributes to operational efficiency, structural safety, and long-term value, not just lower upfront costs."
      },
      {
        type: "heading",
        text: "Final Thoughts"
      },
      {
        type: "paragraph",
        text: "When evaluating a PEB project, ask not only 'How much steel will it cost?' but also 'How intelligently has it been engineered?'"
      },
      {
        type: "paragraph",
        text: "The right engineering decisions today can deliver substantial savings and improved performance for years to come."
      }
    ]
  },
  {
    id: 2,
    title: "The Future of Industrial Buildings: Why Digital Engineering is Transforming PEB Design",
    categories: ["Technology", "Digital Engineering","Construction"],
    image: blogImg2,
    date: "July 20, 2026",
    readTime: "6 min read",
    author: "Digital Engineering Wing",
    excerpt: "Discover how digital engineering improves accuracy, speeds up project delivery, enhances collaboration, and reduces construction risks in modern PEB projects.",
    sections: [
      {
        type: "paragraph",
        text: "Industrial construction is evolving rapidly. Today's projects demand greater speed, accuracy, and coordination than ever before. As buildings become more complex, traditional design methods are giving way to digital engineering technologies that improve collaboration and reduce project risks."
      },
      {
        type: "heading",
        text: "What is Digital Engineering?"
      },
      {
        type: "paragraph",
        text: "Digital engineering combines structural analysis, three-dimensional modelling, detailing, and project coordination into a unified workflow."
      },
      {
        type: "paragraph",
        text: "Instead of relying solely on two-dimensional drawings, engineers create intelligent digital models that represent every structural component before fabrication begins."
      },
      {
        type: "paragraph",
        text: "This enables project teams to visualize the building, detect issues early, and improve coordination between design, fabrication, and construction."
      },
      {
        type: "heading",
        text: "Improved Accuracy"
      },
      {
        type: "paragraph",
        text: "One of the biggest advantages of digital engineering is precision."
      },
      {
        type: "paragraph",
        text: "Every beam, column, connection, plate, and bolt is modelled in detail, allowing fabrication drawings to be generated directly from the digital model. This significantly reduces the likelihood of errors during manufacturing and installation."
      },
      {
        type: "heading",
        text: "Faster Project Delivery"
      },
      {
        type: "paragraph",
        text: "When engineering information is accurate and coordinated from the beginning, fabrication can begin earlier and site teams spend less time resolving unexpected issues."
      },
      {
        type: "paragraph",
        text: "The result is:"
      },
      {
        type: "bullets",
        items: [
          "Reduced rework",
          "Faster fabrication",
          "Quicker erection",
          "Better project coordination"
        ]
      },
      {
        type: "heading",
        text: "Better Collaboration"
      },
      {
        type: "paragraph",
        text: "Digital engineering allows architects, consultants, contractors, and fabricators to work from a shared model, improving communication and reducing design conflicts. This collaborative approach is becoming increasingly important for large industrial and infrastructure projects."
      },
      {
        type: "heading",
        text: "Supporting Future Expansion"
      },
      {
        type: "paragraph",
        text: "Industrial facilities rarely remain static. Digital models provide a reliable foundation for future modifications, equipment additions, and building expansions without requiring complete redesign."
      },
      {
        type: "heading",
        text: "Looking Ahead"
      },
      {
        type: "paragraph",
        text: "As industries continue to embrace automation and smart manufacturing, digital engineering will become the standard for industrial construction. Organizations that invest in digitally engineered buildings today will benefit from greater efficiency, lower project risks, and improved operational flexibility."
      }
    ]
  },
  {
    id: 3,
    title: "Five Mistakes Companies Make When Planning a New Industrial Building",
    categories: ["Industrial Construction", "PEB "," Project Planning"],
    image: blogImg3,
    date: "July 16, 2026",
    readTime: "6 min read",
    author: "Industrial Planning Division",
    excerpt: "Avoid costly project delays and budget overruns by understanding the five most common mistakes in industrial building planning and how smart engineering prevents them.",
    sections: [
      {
        type: "paragraph",
        text: "Building a new manufacturing facility or warehouse is a major investment. While every project is unique, many organisations encounter similar challenges that increase costs and delay completion. Here are five common mistakes—and how to avoid them."
      },
      {
        type: "heading",
        text: "1. Prioritising Lowest Cost Over Best Value"
      },
      {
        type: "paragraph",
        text: "Choosing the lowest quotation without evaluating engineering quality can lead to higher costs later through redesign, fabrication issues, and project delays. Engineering expertise should always be part of the evaluation process."
      },
      {
        type: "heading",
        text: "2. Ignoring Future Expansion"
      },
      {
        type: "paragraph",
        text: "Many industrial buildings need to accommodate future production growth. Planning for expansion during the design stage is significantly more cost-effective than modifying an existing structure later."
      },
      {
        type: "heading",
        text: "3. Delaying Engineering Coordination"
      },
      {
        type: "paragraph",
        text: "Structural engineers, architects, MEP consultants, and contractors should collaborate from the earliest stages of the project. Early coordination helps avoid costly changes during construction."
      },
      {
        type: "heading",
        text: "4. Underestimating Operational Requirements"
      },
      {
        type: "paragraph",
        text: "Building design should reflect how the facility will actually operate. Factors such as crane systems, equipment loads, storage layouts, vehicle movement, ventilation, and maintenance access should all influence the engineering design."
      },
      {
        type: "heading",
        text: "5. Overlooking Value Engineering"
      },
      {
        type: "paragraph",
        text: "Value engineering is often misunderstood as cost cutting. In reality, it is a structured engineering process that evaluates multiple design options to improve efficiency while maintaining structural safety and performance. Small improvements in design can deliver significant savings across fabrication, transportation, and construction."
      },
      {
        type: "heading",
        text: "Building Smarter Starts with Better Planning"
      },
      {
        type: "paragraph",
        text: "Successful industrial projects begin long before construction starts. The combination of detailed planning, experienced engineering, digital technologies, and collaborative project management creates buildings that are not only structurally sound but also efficient, adaptable, and economically viable."
      }
    ]
  }
];

// Content Strategy Recommended Topics List


export default function KnowldgeCenter() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="kc-light-wrapper">
      <Navbar />

      {/* ══════════════════ HERO SECTION ══════════════════ */}
      <div
        className="about-page-hero kc-page-hero"
        style={{
          backgroundImage: `url(${heroBg})`
        }}
      >
        <div className="about-page-hero-overlay"></div>
        <div className="container">
          <div className="about-page-hero-content text-start">
            <h1 className="about-hero-title">
              Engineering the Future of <br></br>Industrial Buildings
            </h1>
          </div>
        </div>
      </div>

      {/* ══════════════════ LIGHT THEME BLOG CARDS SECTION ══════════════════ */}
      <section className="kc-blogs-sec">
        <div className="container">
          {/* Section Header */}
          <div className="kc-section-header-light">
          
            <h2 className="kc-section-title-light">Engineering Insights & Technical Articles</h2>
            <div className="kc-title-divider"></div>
            <p className="kc-section-desc">
              Explore in-depth technical blogs written by Gargi Engineering experts to help you make informed decisions about PEB design, digital engineering, and industrial project planning.
            </p>
          </div>

          {/* 3 Blog Cards Grid */}
          <div className="kc-blogs-grid">
            {blogPostsData.map((blog) => (
              <div key={blog.id} className="kc-blog-card">
                <div className="kc-card-image-wrap">
                  <img src={blog.image} alt={blog.title} />
                </div>

                <div className="kc-card-body">
                  <div className="kc-card-category-text">
                    <i className="fal fa-layer-group kc-category-icon"></i>
                    <span className="kc-category-names">{blog.categories.join(" • ")}</span>
                  </div>

                  <h3
                    className="kc-card-title"
                    onClick={() => { window.location.href = blog.id === 2 ? '/blog-details-2' : blog.id === 3 ? '/blog-details-3' : '/blog-details'; }}
                  >
                    {blog.title}
                  </h3>

                  <p className="kc-card-excerpt">{blog.excerpt}</p>

                  <div className="kc-card-footer">
                    <a
                      href={blog.id === 2 ? '/blog-details-2' : blog.id === 3 ? '/blog-details-3' : '/blog-details'}
                      className="kc-read-more-link text-decoration-none"
                    >
                      READ MORE <i className="fas fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      <Footer />
    </div>
  );
}
