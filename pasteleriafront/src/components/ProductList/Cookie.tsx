import React, { useState } from 'react';
import { motion } from 'framer-motion';
import cookieImage from '../../images/galletas.jpg'; // Asegúrate de ajustar la ruta de la imagen
import CookieGalleryModal from './CookieGallery.tsx';
import noSugar from '../../images/iconSugar.png';
import '../../styles/CookieStyles.css';

const Cookie = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
            style={{
            background: "#f5d6eb",
            color: "#333",
            fontFamily: "Raleway",
            
            }}>
    <div className="cookie-list-container">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="motion-container"
      >
        <div className="content-container">
          <h2 className="cookie-title">Galletas 60gr.</h2>

          <div className="cookie-flex-row">
        
            {/* Imagen y título */}
            <div className="cookie-flex-item cookie-image-container">
              <motion.img
                src={cookieImage} 
                alt="Cookie" 
                className="cookie-image"
                onClick={openModal} 
                style={{ cursor: 'pointer' }} 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                />
            </div>
            {/* Sabores */}
            <div className="cookie-flex-item cookie-sabores">
              <h3 className="cookie-subtitle">Sabores</h3>
              <ul className="cookie-list">
                <li>Mantequilla de maní <img src={noSugar} alt='Sugar Free' className='icon'/></li>
                <li>Limon Arandanos <img src={noSugar} alt='Sugar Free' className='icon'/></li>
                <li>Naranja nuez <img src={noSugar} alt='Sugar Free' className='icon'/> </li>
                <li>Rellenas Crema de Avellanas <img src={noSugar} alt='Sugar Free' className='icon'/></li>
                <li>Matcha</li>
                <li>Vainilla Chunks de Cholocalate</li>
                <li>Chocolate y Caramelo Salado</li>
                <li>Manzana Canela</li>
                <li>Frambuesa y Chocolate Blanco</li>
                
              </ul>
              
            </div>

            
          </div>
        </div>
        <p className='cookie-text'>$2.500 c/u (Mínimo 4 Unidades ) </p>
        <p className='cookie-text'>$3.000 c/u Sin Azúcar (Mínimo 4 Unidades) </p>
        
        <h2 className="cookie-title">¡Presiona la imagen para ver más galletas!</h2>
      </motion.div>
      <CookieGalleryModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  </section>
);
};

export default Cookie;