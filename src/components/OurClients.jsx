import React, { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './OurClients.css';

import coprocessLogo from '../assets/img/Clients/coprocess.png';
import ascentLogo from '../assets/img/Clients/ascent.png';
import alohhemylogo from '../assets/img/Clients/alohhemy.png';
import alligatorlogo from '../assets/img/Clients/alligator.png';
import antolinlogo from '../assets/img/Clients/antolin.png';
import Blinkitlogo from '../assets/img/Clients/Blinkit.png';
import kalyanilogo from '../assets/img/Clients/kalyani.png';
import kshlogo from '../assets/img/Clients/infraksh.png';
import mothersonlogo from '../assets/img/Clients/motherson.png';
import adviklogo from '../assets/img/Clients/advik.png';
import nibelogo from '../assets/img/Clients/nibe.png';
import rubiconlogo from '../assets/img/Clients/rubicon.png';
import sahhyadrilogo from '../assets/img/Clients/sahhyadri.png';
import balajilogo from '../assets/img/Clients/balaji.png';
import stirlogo from '../assets/img/Clients/stir.png';
import ultralogo from '../assets/img/Clients/ultra.png';
import zoomlionlogo from '../assets/img/Clients/zoomlion.png';
import zudiologo from '../assets/img/Clients/zudio.png';
import poritelogo from '../assets/img/Clients/porite.png';
import maharashtralogo from '../assets/img/Clients/maharashtra.png';
import horizonlogo from '../assets/img/Clients/horizon.png';
import inndrayaneelogo from '../assets/img/Clients/inndrayanee.png';
import koshlogo from '../assets/img/Clients/kosh.png';
import parijatlogo from '../assets/img/Clients/parijat.png';
import prambhlogo from '../assets/img/Clients/prambh.png';

const clients = [
  { id: 1, name: 'Coprocess', logo: coprocessLogo, textLogo: 'ÈCOPROCESS' },
  { id: 2, name: 'Ascent', logo: ascentLogo, textLogo: 'ASCENT' },
  { id: 3, name: 'Alohhemy', logo: alohhemylogo, textLogo: 'ALoHEMY' },
  { id: 4, name: 'Alligator', logo: alligatorlogo, textLogo: 'ALLIGATOR' },
  { id: 5, name: 'Antolin', logo: antolinlogo, textLogo: 'ANTOLIN' },
  { id: 6, name: 'Blinkit', logo: Blinkitlogo, textLogo: 'blinkit', isBlinkit: true },
  { id: 7, name: 'Kalyani', logo: kalyanilogo, textLogo: 'KALYANI' },
  { id: 8, name: 'KSH', logo: kshlogo, textLogo: 'KSH' },
  { id: 9, name: 'Motherson', logo: mothersonlogo, textLogo: 'MOTHERSON' },
  { id: 10, name: 'Advik', logo: adviklogo, textLogo: 'ADVIK' },
  { id: 11, name: 'Nibe', logo: nibelogo, textLogo: 'NIBE' },
  { id: 12, name: 'Rubicon', logo: rubiconlogo, textLogo: 'RUBICON' },
  { id: 13, name: 'Sahhyadri', logo: sahhyadrilogo, textLogo: 'SAHYADRI' },
  { id: 14, name: 'Balaji', logo: balajilogo, textLogo: 'BALAJI' },
  { id: 15, name: 'Stir', logo: stirlogo, textLogo: 'STIR' },
  { id: 16, name: 'Ultra', logo: ultralogo, textLogo: 'ULTRA' },
  { id: 17, name: 'Zoomlion', logo: zoomlionlogo, textLogo: 'ZOOMLION' },
  { id: 18, name: 'Zudio', logo: zudiologo, textLogo: 'ZUDIO' },
  { id: 19, name: 'Porite', logo: poritelogo, textLogo: 'PORITE' },
  { id: 20, name: 'Maharashtra', logo: maharashtralogo, textLogo: 'MAHARASHTRA' },
  { id: 21, name: 'Horizon', logo: horizonlogo, textLogo: 'HORIZON' },
  { id: 22, name: 'Indrayani', logo: inndrayaneelogo, textLogo: 'INDRAYANI' },
  { id: 23, name: 'Kosh', logo: koshlogo, textLogo: 'KOSH' },
  { id: 24, name: 'Parijat', logo: parijatlogo, textLogo: 'PARIJAT' },
  { id: 25, name: 'Prambh', logo: prambhlogo, textLogo: 'PRAMBH' },
];

export default function OurClients() {
  const trackRef = useRef(null);

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -240, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 240, behavior: 'smooth' });
    }
  };

  return (
    <div className="clients-marquee-section">
      <div className="clients-marquee-full">
        {/* Header */}
          <div className="marquee-header">
            <span className="sub-title">OUR CLIENTS</span>
            <h3 className="marquee-title">Trusted by Industry Leaders</h3>
          </div>

          {/* Marquee Slider Track Container */}
          <div className="marquee-slider-row">
            <button className="marquee-nav-btn left" onClick={scrollLeft} aria-label="Previous">
              <FiChevronLeft size={20} />
            </button>

            <div className="marquee-viewport" ref={trackRef}>
              <div className="marquee-track">
                {/* Loop 1 */}
                {clients.map((client, idx) => (
                  <div className="marquee-item" key={`orig-${client.id}-${idx}`}>
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={client.name}
                        className={`marquee-logo-img ${client.isBlinkit ? 'blinkit-marquee-logo' : ''}`}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <span className="marquee-text-logo">{client.textLogo}</span>
                    )}
                    <span className="marquee-divider" />
                  </div>
                ))}

                {/* Duplicated for seamless infinite marquee loop */}
                {clients.map((client, idx) => (
                  <div className="marquee-item" key={`dup-${client.id}-${idx}`}>
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={client.name}
                        className={`marquee-logo-img ${client.isBlinkit ? 'blinkit-marquee-logo' : ''}`}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <span className="marquee-text-logo">{client.textLogo}</span>
                    )}
                    <span className="marquee-divider" />
                  </div>
                ))}
              </div>
            </div>

            <button className="marquee-nav-btn right" onClick={scrollRight} aria-label="Next">
              <FiChevronRight size={20} />
            </button>
          </div>
      </div>
    </div>
  );
}
