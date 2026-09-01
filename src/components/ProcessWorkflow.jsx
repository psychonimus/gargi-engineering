import React, { useEffect, useRef, useState } from 'react';
import './ProcessWorkflow.css';
import imgProject from '../assets/img/services/project.png';
import imgConcept from '../assets/img/services/concept.png';
import imgStructural from '../assets/img/services/structural.png';
import img3D from '../assets/img/services/3d.png';
import imgDetailed from '../assets/img/services/detailed.png';
import imgFabrication from '../assets/img/services/fabricationicon.png';
import imgCompletion from '../assets/img/services/completion.png';

const workflowSteps = [
  {
    num: '1',
    title: 'Project\nUnderstanding',
    desc: 'We study project requirements, operational needs, and applicable design standards.',
    icon: <img src={imgProject} alt="Project Understanding" className="workflow-img-icon" />
  },
  {
    num: '2',
    title: 'Concept\nEngineering',
    desc: 'Preliminary structural concepts are developed for optimal performance.',
    icon: <img src={imgConcept} alt="Concept Engineering" className="workflow-img-icon" />
  },
  {
    num: '3',
    title: 'Structural\nAnalysis',
    desc: 'Advanced engineering analysis ensures safety and compliance.',
    icon: <img src={imgStructural} alt="Structural Analysis" className="workflow-img-icon" />
  },
  {
    num: '4',
    title: '3D Modelling',
    desc: 'Detailed Tekla models are prepared with complete intelligence.',
    icon: <img src={img3D} alt="3D Modelling" className="workflow-img-icon" />
  },
  {
    num: '5',
    title: 'Detailed\nEngineering',
    desc: 'Shop drawings, connection details, BOQs, and erection drawings are generated.',
    icon: <img src={imgDetailed} alt="Detailed Engineering" className="workflow-img-icon" />
  },
  {
    num: '6',
    title: 'Fabrication\nSupport',
    desc: 'Continuous engineering support during fabrication and construction.',
    icon: <img src={imgFabrication} alt="Fabrication Support" className="workflow-img-icon" />
  },
  {
    num: '7',
    title: 'Project\nCompletion',
    desc: 'Final engineering validation and documentation.',
    icon: <img src={imgCompletion} alt="Project Completion" className="workflow-img-icon" />
  }
];

export default function ProcessWorkflow() {
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
      { threshold: 0.15 }
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
      className={`workflow-section ${isVisible ? 'animate-in' : ''}`}
      ref={sectionRef}
    >
      <div className="container">
        
        <h2 className="workflow-title">
          Our Engineering Workflow
        </h2>
        
       

        <div className="workflow-timeline-container">
          <div className="workflow-timeline">
            {workflowSteps.map((step, index) => (
              <div className="workflow-item" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="workflow-icon-wrapper">
                  <div className="workflow-icon">
                    {step.icon}
                  </div>
                </div>
                
                {/* Connector line dropping down to the number */}
                <div className="workflow-connector"></div>
                
                <div className="workflow-number">{step.num}</div>
                
                <h4 className="workflow-step-title">
                  {step.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}<br />
                    </React.Fragment>
                  ))}
                </h4>
                
                <p className="workflow-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
