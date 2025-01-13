import React, { useEffect, useState } from 'react';
import Minicake from './Minicake.tsx';
import Cookie from './Cookie.tsx';
import { useLocation } from 'react-router-dom';
import Focaccia from './Focaccia.tsx';
import CakeMenu from './Cake.tsx';
import '../../styles/ProductListStyles.css';

const ProductList = () => {

  const location = useLocation();
  const [visibleSection, setVisibleSection] = useState('minicake');

  useEffect(() => {
    const sectionId = location.pathname.split('/').pop() || 'minicake';
    setVisibleSection(sectionId);
  }, [location]);

  const handleSectionClick = (section) => {
    setVisibleSection(section);
  };

    return (
      <div className="container">
      <div className="sidebar">
        <ul>
          <li><a href="#minicake-section" onClick={(e) => { e.preventDefault(); handleSectionClick('minicake'); }}>Minicakes</a></li>
          <li><a href="#cookie-section" onClick={(e) => { e.preventDefault(); handleSectionClick('cookie'); }}>Cookies</a></li>
          <li><a href="#focaccia-section" onClick={(e) => { e.preventDefault(); handleSectionClick('focaccia'); }}>Focaccias</a></li>
          <li><a href="#cake-section" onClick={(e) => { e.preventDefault(); handleSectionClick('cake'); }}>Tortas</a></li>
        </ul>
      </div>
      <div className="content">
        {visibleSection === 'minicake' && (
          <div id="minicake-section" >
            <Minicake />
          </div>
        )}
        {visibleSection === 'cookie' && (
          <div id="cookie-section" className="section">
            <Cookie />
          </div>
        )}
        {visibleSection === 'focaccia' && (
          <div id="focaccia-section" className="section">
            <Focaccia />
          </div>
        )}
        {visibleSection === 'cake' && (
          <div id="cake-section" className="section">
            <CakeMenu />
          </div>
        )}
      </div>
    </div>
    );
};

export default ProductList;
