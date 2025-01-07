import React, { useState } from 'react';
import { motion } from 'framer-motion';
import cookieImage from '../../images/galletas.jpg'; // Asegúrate de ajustar la ruta de la imagen
import CookieGalleryModal from './CookieGallery.tsx';
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
          <h2 className="cookie-title">Galletas</h2>

          <div className="cookie-flex-row">
        
            {/* Imagen y título */}
            <div className="cookie-flex-item cookie-image-container">
              <img 
                src={cookieImage} 
                alt="Cookie" 
                className="cookie-image"
                onClick={openModal} // Abre el modal al hacer clic en la imagen
                style={{ cursor: 'pointer' }} // Cambia el cursor para indicar que es clicable
              />
            </div>
            {/* Sabores */}
            <div className="cookie-flex-item cookie-sabores">
              <h3 className="cookie-subtitle">Sabores de Galletas</h3>
              <ul className="cookie-list">
                <li>Chocolate Chip</li>
                <li>Avena y Pasas</li>
                <li>Red Velvet</li>
                <li>Snickerdoodle</li>
                <li>Macadamia</li>
                <li>Triple Chocolate</li>
              </ul>
            </div>

            
          </div>
        </div>
        <h2 className="cookie-title">¡Presiona la imagen para ver más galletas!</h2>
      </motion.div>
      <CookieGalleryModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  </section>
);
};

export default Cookie;