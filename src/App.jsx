import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import PEBDesign from './pages/PEBDesign'
import PEBDetailing from './pages/PEBDetailing'
import ConnectionDesign from './pages/ConnectionDesign'
import ValueEngineering from './pages/ValueEngineering'
import MaterialTakeOff from './pages/MaterialTakeOff'
import FabricationSupport from './pages/FabricationSupport'
import CivilDesign from './pages/CivilDesign'
import DigitalEngineering from './pages/DigitalEngineering'
import Industries from './pages/Industries'
import Project from './pages/Project'
import KnowldgeCenter from './pages/KnowldgeCenter'
import BlogDetails from './pages/BlogDetails'
import BlogDetails2 from './pages/BlogDetails2'
import BlogDetails3 from './pages/BlogDetails3'
import Contact from './pages/Contact'
import PMC from './pages/PMC'


function ScriptLoader() {
  const location = useLocation();

  useEffect(() => {
    // Remove existing script if any
    const existingScript = document.getElementById('template-main-js');
    if (existingScript) {
      existingScript.remove();
    }

    // Create and append the new script so it executes after React DOM is ready
    const script = document.createElement('script');
    script.src = '/assets/js/main.js';
    script.id = 'template-main-js';
    script.async = false;
    document.body.appendChild(script);
  }, [location.pathname]);

  return null;
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const scroll = () => {
        const id = location.hash.replace('#', '');
        const elem = document.getElementById(id) || document.querySelector(location.hash) || document.getElementById('engineering-across-industries') || document.getElementById('our-services');
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      scroll();
      const t1 = setTimeout(scroll, 150);
      const t2 = setTimeout(scroll, 400);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.hash, location.key]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScriptLoader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/peb-design" element={<PEBDesign />} />
        <Route path="/peb-detailing" element={<PEBDetailing />} />
        <Route path="/connection-design" element={<ConnectionDesign />} />
        <Route path="/value-engineering" element={<ValueEngineering />} />
        <Route path="/material-take-off" element={<MaterialTakeOff />} />
        <Route path="/fabrication-support" element={<FabricationSupport />} />
        <Route path="/civil-design" element={<CivilDesign />} />
        <Route path="/digital-engineering" element={<DigitalEngineering />} />
        <Route path="/pmc" element={<PMC />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/knowledge-center" element={<KnowldgeCenter />} />
        <Route path="/knowldgecenter" element={<KnowldgeCenter />} />
        <Route path="/blog" element={<KnowldgeCenter />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/blog-details-2" element={<BlogDetails2 />} />
        <Route path="/blog-details-3" element={<BlogDetails3 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
