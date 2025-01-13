import React, { useEffect } from 'react';
import Minicake from './Minicake.tsx';
import Cookie from './Cookie.tsx';
import { useLocation } from 'react-router-dom';
import Focaccia from './Focaccia.tsx';
import CakeMenu from './Cake.tsx';

const ProductList = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/productos/cookie') {
      const cookieSection = document.getElementById('cookie-section');
      if (cookieSection) {
        cookieSection.scrollIntoView({ behavior: 'smooth' });
      }
    }else if(location.pathname === '/productos/focaccia'){
      const focacciaSection = document.getElementById('focaccia-section');
      if (focacciaSection) {
        focacciaSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

    return (
      <div>
      <div id="minicake-section">
        <Minicake />
      </div>
      <div id="cake-section">
        <CakeMenu />
      </div>
      <div id="cookie-section">
        <Cookie />
      </div>
      <div id="focaccia-section">
        <Focaccia />
      </div>
    </div>
    );
};

export default ProductList;
