import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./IndustriesDetail.css";

import automotive from "../assets/img/industry/automotive.png";
import manufacturing from "../assets/img/industry/manufacturing.png";
import warehousing from "../assets/img/industry/warehousing.png";
import heavy from "../assets/img/industry/heavy.png";
import renewable from "../assets/img/industry/renewable.png";
import industrial from "../assets/img/industry/industrial.png";
import retail from "../assets/img/industry/retail.png";
import food from "../assets/img/industry/food.png";
import infrastructure from "../assets/img/industry/infrastructure.png";
import pebDesignImg from "../assets/img/services/pebdesign.png";

/* ── Tiny SVG icon helpers ───────────────── */
const Icon = ({ d, viewBox = "0 0 24 24", size = 18 }) => (
  <svg viewBox={viewBox} width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {Array.isArray(d) ? d.map((path, i) => <path key={i} d={path} />) : <path d={d} />}
  </svg>
);

const CircleIcon = ({ cx, cy, r, extra = [], size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx={cx} cy={cy} r={r} />
    {extra.map((p, i) => <path key={i} d={p} />)}
  </svg>
);

/* ── Item icons map ──────────────────────── */
const itemIconMap = {
  // Automotive primary
  "Manufacturing Plants": <Icon d={["M2 20h20","M20 20V8l-6 4V8l-6 4V8L2 14v6","M6 8V4h2v4M14 8V4h2v4"]} />,
  "Assembly Facilities": <Icon d={["M12 2l9 7v13H3V9l9-7z","M9 22V12h6v10"]} />,
  "Component Manufacturing Units": <Icon d={["M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2z","M12 12v10","M8 22h8"]} />,
  "Paint Shops": <Icon d={["M19 4a3 3 0 0 1-3 3H2","M19 4a3 3 0 0 0 3 3v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 0 2-2"]} />,
  "Warehousing": <Icon d={["M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35z","M6 18h12","M6 14h12","M6 10h12"]} />,
  "Press Shops": <Icon d={["M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"]} />,
  "Logistics Centers": <Icon d={["M1 3h15v13H1z","M16 8h4l3 3v5h-7V8z","M5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z","M18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"]} />,
  // Automotive secondary
  "Heavy Crane Buildings": <Icon d={["M4 22V6","M4 6l6-4 6 4","M4 6h12v4H4z","M7 22v-6h10v6","M10 14v2","M14 14v2"]} />,
  "Large Span Structures": <Icon d={["M2 20h20","M12 4l-8 16h16L12 4z","M12 4v16"]} />,
  "High Load Floors": <Icon d={["M2 20h20","M2 14h20","M2 8h20","M5 8v12","M19 8v12"]} />,
  "Mezzanine Systems": <Icon d={["M3 5h18","M3 12h18","M3 19h18","M8 5v14","M16 5v14"]} />,
  "Future Expansion Design": <Icon d={["M5 3H3v18h18v-2","M13 3h8v8","M21 3l-9 9"]} />,
  // Warehousing primary
  "Maximum Storage Capacity": <Icon d={["M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35","M2 8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35","M6 18h12","M6 14h12"]} />,
  "Efficient Material Flow": <Icon d={["M5 12h14","M12 5l7 7-7 7"]} />,
  "Faster Construction": <Icon d={["M12 2L2 7l10 5 10-5-10-5z","M2 17l10 5 10-5","M2 12l10 5 10-5"]} />,
  "Racking Systems": <Icon d={["M3 3h18v18H3z","M3 9h18","M3 15h18","M9 3v18","M15 3v18"]} />,
  "Dock Areas": <Icon d={["M3 17h18","M3 17V7l9-4 9 4v10","M3 7h18"]} />,
  "Automation Equipment": <Icon d={["M12 2a5 5 0 0 1 5 5v6a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z","M8 21h8","M12 17v4"]} />,
  // Warehousing secondary
  "Distribution Centers": <Icon d={["M1 3h15v13H1z","M16 8h4l3 3v5h-7V8z"]} />,
  "E-commerce Warehouses": <Icon d={["M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z","M3 6h18","M16 10a4 4 0 0 1-8 0"]} />,
  "Cold Storage": <Icon d={["M8 3.1V4.5a4 4 0 0 0 8 0V3.1","M20.7 7.5l-1.2.7a4 4 0 0 0 0 6.9l1.3.8","M3.3 7.5l1.2.7a4 4 0 0 1 0 6.9l-1.3.8","M8 20.9V19.5a4 4 0 0 1 8 0v1.4","M12 8v8","M10 10l2-2 2 2","M10 14l2 2 2-2"]} />,
  "Fulfilment Centers": <Icon d={["M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z","M12 7v3l2 1"]} />,
  "Third-Party Logistics": <Icon d={["M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2","M23 21v-2a4 4 0 0 0-3-3.87","M16 3.13a4 4 0 0 1 0 7.75"]} />,
  // Manufacturing
  "Equipment Load Analysis": <Icon d={["M2 20h20","M4 20V8h16v12","M8 12h2v4H8z","M14 12h2v4h-2z"]} />,
  "Flexible Production Layouts": <Icon d={["M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7","M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.375-9.375z"]} />,
  "Utility Integration": <Icon d={["M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"]} />,
  "Structural Optimization": <Icon d={["M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z","M13 13l6 6"]} />,
  "Future Expansion Planning": <Icon d={["M5 3H3v18h18v-2","M13 3h8v8","M21 3l-9 9"]} />,
  // Heavy Engineering
  "Fabrication Shops": <Icon d={["M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"]} />,
  "Heavy Machinery Plants": <Icon d={["M2 20h20","M4 20V8h16v12","M8 8V4h8v4"]} />,
  "Steel Processing": <Icon d={["M4 7V4h16v3","M9 20h6","M12 4v16","M2 7h20"]} />,
  "Engineering Workshops": <Icon d={["M3 22h18","M6 22V2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v20","M10 4h11","M21 4v6","M19 10h4v4h-4z"]} />,
  "Industrial Manufacturing": <Icon d={["M2 20h20","M20 20V8l-6 4V8l-6 4V8L2 14v6"]} />,
  "High Capacity Crane Buildings": <Icon d={["M4 22V6","M4 6l6-4 6 4","M10 22V10h8v12"]} />,
  "Heavy Steel Structures": <Icon d={["M2 20h20","M4 20V8h16v12","M8 12h8"]} />,
  "Large Span Roofs": <Icon d={["M3 20l9-16 9 16H3z","M12 4v16"]} />,
  "High Bay Structures": <Icon d={["M3 3h18v18H3z","M3 9h18","M9 3v18"]} />,
  // Industrial
  "Process Plants": <Icon d={["M19 4a3 3 0 0 1-3 3H2","M22 20H2","M12 7v13","M8 11v9","M16 11v9"]} />,
  "Utility Buildings": <Icon d={["M2 20h20","M2 20V8l10-6 10 6v12","M9 20v-8h6v8"]} />,
  "Maintenance Workshops": <Icon d={["M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"]} />,
  "Pipe Rack Structures": <Icon d={["M2 3h20","M2 9h20","M2 15h20","M5 3v18","M12 3v18","M19 3v18"]} />,
  "Equipment Platforms": <Icon d={["M2 20h20","M4 20V10h16v10","M8 10V6h8v4"]} />,
  "Industrial Sheds": <Icon d={["M2 20h20","M3 12l9-8 9 8","M5 12v8h14v-8"]} />,
  // Renewable
  "Solar Module Manufacturing": <Icon d={["M12 2v20","M2 12h20","M12 6l6 6-6 6-6-6 6-6"]} />,
  "Solar Warehouses": <Icon d={["M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35"]} />,
  "Equipment Buildings": <Icon d={["M2 20h20","M2 20V8l10-6 10 6v12"]} />,
  "Steel Structures for Renewable Projects": <Icon d={["M4 7V4h16v3","M9 20h6","M12 4v16","M2 7h20"]} />,
  "Solar Panel Integration": <Icon d={["M2 6h20v12H2z","M6 6v12","M10 6v12","M14 6v12","M18 6v12"]} />,
  "Future Expansion": <Icon d={["M5 3H3v18h18v-2","M13 3h8v8","M21 3l-9 9"]} />,
  "Reduced Material Consumption": <Icon d={["M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"]} />,
  // Retail
  "Retail Stores": <Icon d={["M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z","M9 22V12h6v10"]} />,
  "Commercial Buildings": <Icon d={["M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z","M3 6h18"]} />,
  "Shopping Centres": <Icon d={["M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z","M3 6h18","M16 10a4 4 0 0 1-8 0"]} />,
  "Hypermarkets": <Icon d={["M1 6h22","M1 10h22","M1 14h22","M1 18h22","M5 2v20","M19 2v20"]} />,
  "Service Centres": <Icon d={["M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"]} />,
  // Food
  "Food Manufacturing": <Icon d={["M6 20h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2z"]} />,
  "Packaging Facilities": <Icon d={["M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 2 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"]} />,
  "Distribution Warehouses": <Icon d={["M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35","M2 8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35"]} />,
  // Infrastructure
  "Industrial Infrastructure": <Icon d={["M2 20h20","M4 20V8h16v12","M3 8l9-6 9 6"]} />,
  "Public Facilities": <Icon d={["M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"]} />,
  "Logistics Infrastructure": <Icon d={["M1 3h15v13H1z","M16 8h4l3 3v5h-7V8z"]} />,
};

const getItemIcon = (name) =>
  itemIconMap[name] || (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

/* ── Industry data ───────────────────────── */
const industries = [
  {
    id: "automotive",
    title: "Automotive",
    subtitle: "Built for High-Performance Manufacturing",
    description:
      "Modern automotive plants demand large clear spans, heavy crane systems, production flexibility, and future expansion capabilities.",
    image: automotive,
    primaryList: {
      heading: "OUR ENGINEERING SOLUTIONS SUPPORT",
      items: ["Manufacturing Plants","Assembly Facilities","Component Manufacturing Units","Paint Shops","Warehousing","Press Shops","Logistics Centers"],
    },
    secondaryList: {
      heading: "ENGINEERING EXPERTISE",
      items: ["Heavy Crane Buildings","Large Span Structures","High Load Floors","Mezzanine Systems","Future Expansion Design"],
    },
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2 11.1 2 11.3 2 11.5V16c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" /><path d="M9 17h5" /><circle cx="17" cy="17" r="2" />
      </svg>
    ),
  },
  {
    id: "warehousing",
    title: "Warehousing & Logistics",
    subtitle: "Smarter Structures for Faster Supply Chains",
    description:
      "Warehouses today are more than storage facilities—they are intelligent distribution centers. We engineer structures optimized for maximum efficiency and speed.",
    image: warehousing,
    primaryList: {
      heading: "WE ENGINEER STRUCTURES OPTIMIZED FOR",
      items: ["Maximum Storage Capacity","Efficient Material Flow","Faster Construction","Racking Systems","Dock Areas","Automation Equipment"],
    },
    secondaryList: {
      heading: "IDEAL FOR",
      items: ["Distribution Centers","E-commerce Warehouses","Cold Storage","Fulfilment Centers","Third-Party Logistics"],
    },
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2" /><circle cx="18.5" cy="18.5" r="2" />
      </svg>
    ),
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    subtitle: "Engineered for Productivity",
    description:
      "Manufacturing facilities require highly customized structural solutions capable of accommodating machinery, process equipment, utility systems, and future production expansion.",
    image: manufacturing,
    primaryList: {
      heading: "OUR ENGINEERING FOCUSES ON",
      items: ["Equipment Load Analysis","Flexible Production Layouts","Utility Integration","Structural Optimization","Future Expansion Planning"],
    },
    secondaryList: null,
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 22h14" /><path d="M5 17h2v5H5z" /><path d="M7 18.5h8" />
        <path d="M9 18.5V13a3 3 0 0 1 3-3h1" /><path d="M13 13l4-4a2 2 0 0 0 0-2.8l-.7-.7a2 2 0 0 0-2.8 0l-4 4" />
      </svg>
    ),
  },
  {
    id: "heavy",
    title: "Heavy Engineering",
    subtitle: "Structures Built to Handle Heavy Loads",
    description:
      "Heavy engineering projects require robust structures designed for demanding operational environments with extreme load-bearing requirements.",
    image: heavy,
    primaryList: {
      heading: "APPLICATIONS INCLUDE",
      items: ["Fabrication Shops","Heavy Machinery Plants","Steel Processing","Engineering Workshops","Industrial Manufacturing"],
    },
    secondaryList: {
      heading: "SPECIALIZED ENGINEERING",
      items: ["High Capacity Crane Buildings","Heavy Steel Structures","Large Span Roofs","High Bay Structures"],
    },
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 22h18" /><path d="M6 22V2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v20" />
        <path d="M10 4h11M10 8h8" /><path d="M21 4v6" /><rect x="19" y="10" width="4" height="4" rx="1" />
      </svg>
    ),
  },
  {
    id: "industrial",
    title: "Industrial Projects",
    subtitle: "Engineering Complex Industrial Facilities",
    description:
      "Every industrial project presents unique engineering challenges. We provide structural solutions for complex industrial facilities with precision and efficiency.",
    image: industrial,
    primaryList: {
      heading: "WE PROVIDE STRUCTURAL SOLUTIONS FOR",
      items: ["Process Plants","Utility Buildings","Maintenance Workshops","Pipe Rack Structures","Equipment Platforms","Industrial Sheds"],
    },
    secondaryList: null,
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" /><path d="M20 20V8l-6 4V8l-6 4V8L2 14v6" /><path d="M6 8V4h2v4M14 8V4h2v4" />
      </svg>
    ),
  },
  {
    id: "renewable",
    title: "Renewable Energy",
    subtitle: "Engineering for Sustainable Infrastructure",
    description:
      "As industries embrace renewable energy, engineering requirements continue to evolve. We deliver structures built for sustainability and long-term performance.",
    image: renewable,
    primaryList: {
      heading: "OUR SERVICES SUPPORT",
      items: ["Solar Module Manufacturing","Solar Warehouses","Equipment Buildings","Steel Structures for Renewable Projects"],
    },
    secondaryList: {
      heading: "DESIGNED FOR",
      items: ["Solar Panel Integration","Future Expansion","Reduced Material Consumption"],
    },
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v10M12 12l-7.5-3M12 12l6 7.5" /><path d="M12 22V12" /><circle cx="12" cy="12" r="1.5" />
      </svg>
    ),
  },
  {
    id: "retail",
    title: "Retail & Commercial",
    subtitle: "Modern Spaces with Structural Efficiency",
    description:
      "Commercial buildings require engineering that balances aesthetics with structural performance. We deliver spaces that inspire and endure.",
    image: retail,
    primaryList: {
      heading: "APPLICATIONS INCLUDE",
      items: ["Retail Stores","Commercial Buildings","Shopping Centres","Hypermarkets","Service Centres"],
    },
    secondaryList: null,
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <line x1="9" y1="22" x2="9" y2="12" /><line x1="15" y1="22" x2="15" y2="12" /><line x1="9" y1="12" x2="15" y2="12" />
      </svg>
    ),
  },
  {
    id: "food",
    title: "Food Processing",
    subtitle: "Hygienic & Efficient Industrial Structures",
    description:
      "Food processing facilities require structures that support operational efficiency while accommodating hygiene, ventilation, and specialized utility requirements.",
    image: food,
    primaryList: {
      heading: "SUITABLE FOR",
      items: ["Food Manufacturing","Packaging Facilities","Cold Storage","Distribution Warehouses"],
    },
    secondaryList: null,
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 20h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2z" />
        <path d="M10 2h4M8 7h8" /><circle cx="12" cy="13" r="1.5" />
      </svg>
    ),
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    subtitle: "Engineering the Foundations of Development",
    description:
      "We support infrastructure projects through specialized structural engineering services for public and industrial infrastructure with precision and reliability.",
    image: infrastructure,
    primaryList: {
      heading: "APPLICATIONS INCLUDE",
      items: ["Utility Buildings","Industrial Infrastructure","Public Facilities","Logistics Infrastructure"],
    },
    secondaryList: null,
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18" /><path d="M3 20h18" /><path d="M6 12v8M18 12v8" />
        <path d="M6 12c4-4 8-4 12 0" /><path d="M3 8c6-6 12-6 18 0" /><path d="M12 6v6" />
      </svg>
    ),
  },
];

/* ── Card section icon ───────────────────── */
const GearIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

/* ── Component ───────────────────────────── */
export default function IndustriesDetail() {
  const [activeId, setActiveId]   = useState("automotive");
  const [visible, setVisible]     = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const intervalRef  = useRef(null);
  const pausedRef    = useRef(false);
  const sectionRef   = useRef(null);
  const ctaRef       = useRef(null);
  const active = industries.find((i) => i.id === activeId);

  /* ── Intersection Observer – reveal on scroll ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.08 }
    );
    const ctaObserver = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setCtaVisible(true); ctaObserver.disconnect(); } },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (ctaRef.current) ctaObserver.observe(ctaRef.current);

    return () => {
      observer.disconnect();
      ctaObserver.disconnect();
    };
  }, []);

  /* ── Auto-rotation timer ── */
  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setActiveId((prev) => {
          const idx = industries.findIndex((i) => i.id === prev);
          return industries[(idx + 1) % industries.length].id;
        });
      }
    }, 3000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleTabClick = (id) => {
    setActiveId(id);
    startTimer();
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const rawHash = location.hash.replace('#', '').toLowerCase();
      const aliasMap = {
        logistics: 'warehousing',
        commercial: 'retail',
        industrial: 'industrial',
        heavy: 'heavy',
      };
      const targetId = aliasMap[rawHash] || rawHash;
      const match = industries.find((i) => i.id === targetId);
      if (match) {
        setActiveId(match.id);
      }
    }
  }, [location.hash]);

  return (
    <section
      id="engineering-across-industries"
      ref={sectionRef}
      className={`eid-sec${visible ? " eid-sec--visible" : ""}`}
      onMouseEnter={() => { pausedRef.current = true;  }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      {/* ── Section Header ── */}
      <div className="eid-sec-header eid-anim-header">
        <h2 className="eid-sec-title">Engineering Across Industries</h2>
        <p className="eid-sec-para">
          Our multidisciplinary engineering expertise enables us to understand the operational
          needs of diverse industries and translate them into efficient structural solutions.
        </p>
      </div>

      <div className="eid-wrapper">
        {/* ── Left Sidebar ── */}
        <aside className="eid-sidebar">
          {industries.map((ind, idx) => (
            <button
              key={ind.id}
              className={`eid-tab eid-anim-tab${activeId === ind.id ? " eid-tab--active" : ""}`}
              style={{ "--tab-delay": `${idx * 0.06}s` }}
              onClick={() => handleTabClick(ind.id)}
            >
              <span className="eid-tab-icon">{ind.icon}</span>
              <span className="eid-tab-name">{ind.title}</span>
              <span className="eid-tab-dot" />
              {activeId === ind.id && (
                <span className="eid-tab-progress" key={activeId + "_progress"} />
              )}
            </button>
          ))}
        </aside>

        {/* ── Right Content ── */}
        <div className="eid-content eid-anim-content" key={activeId}>
          {/* Top: text + image side-by-side */}
          <div className="eid-top">
            <div className="eid-top-text">
              <span className="eid-category">{active.title.toUpperCase()}</span>
              <h2 className="eid-heading">{active.subtitle}</h2>
              <p className="eid-desc">{active.description}</p>
              <div className="eid-divider" />
            </div>
            <div className="eid-top-img">
              <img src={active.image} alt={active.title} className="eid-img" />
              <div className="eid-img-glow" />
            </div>
          </div>

          {/* Bottom: cards */}
          <div className={`eid-cards${!active.secondaryList ? " eid-cards--single" : ""}`}>
            {/* Primary card */}
            <div className="eid-card eid-anim-card" style={{ "--card-delay": "0.05s" }}>
              <div className="eid-card-header">
                <span className="eid-card-header-icon"><GearIcon /></span>
                <h4 className="eid-card-title">{active.primaryList.heading}</h4>
              </div>
              <ul className="eid-list">
                {active.primaryList.items.map((item, i) => (
                  <li key={i} className="eid-list-item" style={{ "--item-delay": `${i * 0.05}s` }}>
                    <span className="eid-item-icon">{getItemIcon(item)}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Secondary card */}
            {active.secondaryList && (
              <div className="eid-card eid-anim-card" style={{ "--card-delay": "0.12s" }}>
                <div className="eid-card-header">
                  <span className="eid-card-header-icon"><StarIcon /></span>
                  <h4 className="eid-card-title">{active.secondaryList.heading}</h4>
                </div>
                <ul className="eid-list">
                  {active.secondaryList.items.map((item, i) => (
                    <li key={i} className="eid-list-item" style={{ "--item-delay": `${i * 0.05}s` }}>
                      <span className="eid-item-icon">{getItemIcon(item)}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Modern CTA Section ── */}
      <div
        ref={ctaRef}
        className={`eid-cta${ctaVisible ? " eid-cta--visible" : ""}`}
      >
        <div className="eid-cta-bg-img" style={{ backgroundImage: `url(${pebDesignImg})` }} />
        <div className="eid-cta-container">
          <div className="eid-cta-glow-bg" />
          <div className="eid-cta-content">
           
            <h2 className="eid-cta-heading">Let's Build Your Industry Together</h2>
            <p className="eid-cta-desc">
              Whether you're developing a manufacturing plant, expanding a logistics hub,
              or planning a large-scale industrial facility, our engineering team is ready
              to design solutions that deliver performance, efficiency, and long-term value.
            </p>
            <div className="eid-cta-actions">
              <Link to="/contact" className="eid-cta-btn eid-cta-btn--primary">
                <span>Talk to Our Engineers</span>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
