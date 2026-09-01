import React, { useEffect, useRef, useState } from 'react';
import './ServiceFAQ.css';
import buildingWireframe from '../assets/img/services/back.png'; // Using back.png as a placeholder for the blueprint

const faqs = [
  {
    num: '01',
    question: 'Do you provide only design services?',
    answer: 'No. We offer end-to-end engineering support—from concept design and structural analysis to detailing, value engineering, fabrication support, and construction consulting.'
  },
  {
    num: '02',
    question: 'Which software do you use?',
    answer: 'We primarily work with Tekla Structures, STAAD.Pro, and AutoCAD to deliver accurate, coordinated, and fabrication-ready engineering solutions.'
  },
  {
    num: '03',
    question: 'Do you follow international standards?',
    answer: 'Yes. Our engineering team is experienced in both Indian Standards (IS Codes) and international standards such as AISC, depending on project requirements.'
  },
  {
    num: '04',
    question: 'Can you support existing projects with detailing or optimization?',
    answer: 'Absolutely. We regularly collaborate with fabricators, EPC contractors, consultants, and architects to provide detailing, redesign, value engineering, and technical support for ongoing projects.'
  }
];

export default function ServiceFAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 } // Trigger when 15% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      className={`service-faq-section ${isVisible ? 'animate-in' : ''}`} 
      ref={sectionRef}
    >
      <div className="container">
        <div className="row align-items-center">

          
          {/* Left Column */}
          <div className="col-lg-5 service-faq-left">
            <h2 className="service-faq-title">
              Frequently<br />
              Asked Questions
            </h2>
          
            
           
          </div>

          {/* Right Column (Timeline) */}
          <div className="col-lg-7 service-faq-right">
            <div className="faq-timeline-wrapper">
              {faqs.map((faq, index) => (
                <div className="faq-timeline-item" key={index}>
                  <div className="faq-timeline-node">
                    <span className="faq-timeline-num">{faq.num}</span>
                  </div>
                  <div className="faq-timeline-content">
                    <h4 className="faq-question">{faq.question}</h4>
                    <p className="faq-answer">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
