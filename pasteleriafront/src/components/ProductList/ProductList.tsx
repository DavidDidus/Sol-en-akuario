import React, { useEffect, useState } from 'react';
import Minicake from './Minicake.tsx';
import Cookie from './Cookie.tsx';
import Focaccia from './Focaccia.tsx';
import CakeMenu from './Cake.tsx';
import Cupcakes from './Cupcakes.tsx';
import { useLocation } from 'react-router-dom';
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
          <li><a href="#minicake-section" onClick={(e) => { e.preventDefault(); handleSectionClick('minicake'); }}><strong>Minicakes</strong></a></li>
          <li><a href="#cookie-section" onClick={(e) => { e.preventDefault(); handleSectionClick('cookie'); }}><strong>Galletas</strong></a></li>
          <li><a href="#focaccia-section" onClick={(e) => { e.preventDefault(); handleSectionClick('focaccia'); }}><strong>Focaccias</strong></a></li>
          <li><a href="#cake-section" onClick={(e) => { e.preventDefault(); handleSectionClick('cake'); }}><strong>Tortas</strong></a></li>
          <li><a href="#cupcake-section" onClick={(e) => { e.preventDefault(); handleSectionClick('cupcake'); }}><strong>Cupcakes</strong></a></li>
          <li><a href="#tart-section" onClick={(e) => { e.preventDefault(); handleSectionClick('tart'); }}><strong>Tartas</strong></a></li>
          <li><a href="#sweat-section" onClick={(e) => { e.preventDefault(); handleSectionClick('sweat'); }}><strong>Dulces y postres</strong></a></li>
          <li><a href="#salad-section" onClick={(e) => { e.preventDefault(); handleSectionClick('salad'); }}><strong>Salados</strong></a></li>
          <li><a href="#coctel-section" onClick={(e) => { e.preventDefault(); handleSectionClick('coctel'); }}><strong>Cóctel</strong></a></li>
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
        {visibleSection === 'cupcake' && (
          <div id="cupcake-section" className="section">
            <Cupcakes />
          </div>
        )}
      </div>
    </div>
    );
};

export default ProductList;
