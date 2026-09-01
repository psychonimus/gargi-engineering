import React from 'react';
import {
  LuBuilding2,
  LuFactory,
  LuBox,
  LuTriangleAlert,
  LuHexagon,
  LuLandmark
} from 'react-icons/lu';
import './DigitalEngineeringUSP.css';

const uspItems = [
  {
    id: 1,
    icon: <LuLandmark size={52} />,
    title: 'STAAD',
    description: 'Structural analysis and design solutions',
  },
  {
    id: 2,
    icon: <LuBuilding2 size={52} />,
    title: 'TEKLA',
    description: 'Advanced 3D modelling for accurate detailing',
  },
  {
    id: 3,
    icon: <LuBox size={52} />,
    title: 'AutoCAD',
    description: 'Precise 2D drafting and detailed documentation',
  },
  {
    id: 4,
    icon: <LuHexagon size={52} />,
    title: 'BIM',
    description: 'Building information modeling for greater collaboration',
  },
  {
    id: 5,
    icon: <LuBox size={52} />,
    title: '3D Coordination',
    description: 'Coordinated 3D models to strike true and efficient designs',
  },
  {
    id: 6,
    icon: <LuTriangleAlert size={52} />,
    title: 'Clash Detection',
    description: 'Identify and resolve clashes early for accurate execution',
  },
  {
    id: 7,
    icon: <LuFactory size={52} />,
    title: 'Fabrication Ready Drawings',
    description: 'Accurate, detailed shop information ready for manufacturing',
  },
];

const DigitalEngineeringUSP = () => {
  return (
    <section className="usp-section">
      <div className="usp-container">
        {/* Header */}
        <div className="usp-header">
          <h2 className="usp-title">Digital Engineering USP</h2>
          <div className="usp-title-bar" />
          <p className="usp-subtitle">Advanced tools. Smarter design. Better results.</p>
        </div>

        {/* Row 1 — 4 cards */}
        <div className="usp-grid usp-grid-4">
          {uspItems.slice(0, 4).map((item) => (
            <div className="usp-card" key={item.id}>
              <div className="usp-card-icon">{item.icon}</div>
              <h3 className="usp-card-title">{item.title}</h3>
              <p className="usp-card-desc">{item.description}</p>
              <div className="usp-card-bar" />
            </div>
          ))}
        </div>

        {/* Row 2 — 3 cards centered */}
        <div className="usp-grid usp-grid-3">
          {uspItems.slice(4).map((item) => (
            <div className="usp-card" key={item.id}>
              <div className="usp-card-icon">{item.icon}</div>
              <h3 className="usp-card-title">{item.title}</h3>
              <p className="usp-card-desc">{item.description}</p>
              <div className="usp-card-bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalEngineeringUSP;
