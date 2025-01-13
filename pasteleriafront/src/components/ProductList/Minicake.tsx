import React, { useState } from 'react';
import minicake from '../../images/Minicakes/torta linda.jpg';
import { motion } from "framer-motion";
import '../../styles/MinicakeStyles.css';
import MinicakeGalleryModal from './MinicakeGallery.tsx';

const Minicake = () => {
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
        <div className="product-list-container">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div >
            <h2 className="title">Minicakes</h2>
  
            <div className="flex-row">
              {/* Sabores */}
              <div className="flex-item sabores">
                <h3 className="subtitle">Sabores Bizcocho</h3>
                <ul className="list">
                  <li>Vainilla</li>
                  <li>Chocolate</li>
                  <li>Canela Tiramisú</li>
                  <li>Limón - Naranja</li>
                  <li>Arándanos</li>
                  <li>Zanahoria</li>
                </ul>
              </div>
            
              {/* Imagen y título */}
              <div className="flex-item ">
                <motion.img 
                  src={minicake} 
                  alt="Minicake" 
                  onClick={openModal}
                  className="image"
                  style={{ cursor: 'pointer' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  />
              </div>
    
              {/* Rellenos */}
              <div className="flex-item rellenos">
                
                <h3 className="subtitle">Rellenos</h3>
                <ul className="list">
                  <li>Manjar Nuez</li>
                  <li>Ganashe de Chocolate</li>
                  <li>Piña, Duraznos o Frutilla</li>
                  <li>Salsa de Frutillas / Frutos Rojos</li>
                  <li>Crema Mokka</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text">$9.000 diseño o frase simple</p>
          <p className="text">$11.000 diseño con dibujo</p>
          
          <h2 className="title">¡Presiona la imagen para ver más minicakes!</h2>

        </motion.div>
        <MinicakeGalleryModal isOpen={isModalOpen} onRequestClose={closeModal} />

      </div>
      </section>
    );
};

export default Minicake;
