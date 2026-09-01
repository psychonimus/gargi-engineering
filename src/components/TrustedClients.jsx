import React, { useRef, useEffect, useState } from 'react';
import './TrustedClients.css';

// ─── Import Client Logos ─────────────────────────────────────────────
import blinkitLogo     from '../assets/img/Clients/Blinkit.png';
import advikLogo       from '../assets/img/Clients/advik.png';
import alligatorLogo   from '../assets/img/Clients/alligator.png';
import alohhemyLogo    from '../assets/img/Clients/alohhemy.png';
import antolinLogo     from '../assets/img/Clients/antolin.png';
import ascentLogo      from '../assets/img/Clients/ascent.png';
import balajiLogo      from '../assets/img/Clients/balaji.png';
import coprocessLogo   from '../assets/img/Clients/coprocess.png';
import horizonLogo     from '../assets/img/Clients/horizon.png';
import infrakshLogo    from '../assets/img/Clients/infraksh.png';
import inndrayaneeLogo from '../assets/img/Clients/inndrayanee.png';
import kalyaniLogo     from '../assets/img/Clients/kalyani.png';
import koshLogo        from '../assets/img/Clients/kosh.png';
import maharashtraLogo from '../assets/img/Clients/maharashtra.png';
import mothersonLogo   from '../assets/img/Clients/motherson.png';
import nibeLogo        from '../assets/img/Clients/nibe.png';
import parijatLogo     from '../assets/img/Clients/parijat.png';
import poriteLogo      from '../assets/img/Clients/porite.png';
import prambhLogo      from '../assets/img/Clients/prambh.png';
import rubiconLogo     from '../assets/img/Clients/rubicon.png';
import sahhyadriLogo   from '../assets/img/Clients/sahhyadri.png';
import stirLogo        from '../assets/img/Clients/stir.png';
import ultraLogo       from '../assets/img/Clients/ultra.png';
import zoomlionLogo    from '../assets/img/Clients/zoomlion.png';
import zudioLogo       from '../assets/img/Clients/zudio.png';

const CLIENTS_ROW_1 = [
  { id: 'motherson', logo: mothersonLogo },
  { id: 'blinkit',   logo: blinkitLogo },
  { id: 'kalyani',   logo: kalyaniLogo },
  { id: 'nibe',      logo: nibeLogo },
  { id: 'zoomlion',  logo: zoomlionLogo },
  { id: 'zudio',     logo: zudioLogo },
  { id: 'antolin',   logo: antolinLogo },
  { id: 'advik',     logo: advikLogo },
  { id: 'ascent',    logo: ascentLogo },
  { id: 'ultra',     logo: ultraLogo },
  { id: 'horizon',   logo: horizonLogo },
  { id: 'infraksh',  logo: infrakshLogo },
  { id: 'sahhyadri', logo: sahhyadriLogo },
];

const CLIENTS_ROW_2 = [
  { id: 'kosh',        logo: koshLogo },
  { id: 'alligator',   logo: alligatorLogo },
  { id: 'alohhemy',    logo: alohhemyLogo },
  { id: 'balaji',      logo: balajiLogo },
  { id: 'coprocess',   logo: coprocessLogo },
  { id: 'inndrayanee', logo: inndrayaneeLogo },
  { id: 'maharashtra', logo: maharashtraLogo },
  { id: 'parijat',     logo: parijatLogo },
  { id: 'porite',      logo: poriteLogo },
  { id: 'prambh',      logo: prambhLogo },
  { id: 'rubicon',     logo: rubiconLogo },
  { id: 'stir',        logo: stirLogo },
  { id: 'motherson2',  logo: mothersonLogo },
];

export default function TrustedClients() {
  const sectionRef = useRef(null);
  const marqueeRef = useRef(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [marqueeVisible, setMarqueeVisible] = useState(false);

  useEffect(() => {
    const sectionNode = sectionRef.current;
    const marqueeNode = marqueeRef.current;

    const sectionObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          sectionObs.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const marqueeObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMarqueeVisible(true);
          marqueeObs.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    if (sectionNode) sectionObs.observe(sectionNode);
    if (marqueeNode) marqueeObs.observe(marqueeNode);

    return () => {
      sectionObs.disconnect();
      marqueeObs.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`trusted-clients-section ${sectionVisible ? 'tc-section-visible' : ''}`}
    >
      <div className="container">
        {/* Section Header */}
        <div className="trusted-clients-header text-center">
          <h2 className="trusted-clients-title">
            Trusted by Industry Leaders
          </h2>
        </div>
      </div>

      {/* Infinite 2-Row Continuous Slow Marquee Slider */}
      <div
        ref={marqueeRef}
        className={`trusted-marquee-wrapper ${marqueeVisible ? 'tc-marquee-visible' : ''}`}
      >
        <div className="trusted-slider-fade left" />
        <div className="trusted-slider-fade right" />

        {/* Row 1 — slides left */}
        <div className={`track-row-reveal row-1 ${marqueeVisible ? 'row-visible' : ''}`}>
          <div className="trusted-marquee-track track-left">
            {CLIENTS_ROW_1.concat(CLIENTS_ROW_1).map((client, idx) => (
              <div key={`r1-${idx}`} className="trusted-slider-card">
                <img src={client.logo} alt="Client logo" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — slides right */}
        <div className={`track-row-reveal row-2 ${marqueeVisible ? 'row-visible' : ''}`}>
          <div className="trusted-marquee-track track-right">
            {CLIENTS_ROW_2.concat(CLIENTS_ROW_2).map((client, idx) => (
              <div key={`r2-${idx}`} className="trusted-slider-card">
                <img src={client.logo} alt="Client logo" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
