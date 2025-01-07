import React, { useState } from 'react';
import minicake from '../images/torta linda.jpg';
import { motion } from "framer-motion";
import '../styles/ProductListStyles.css';
import MinicakeGallery from './MinicakeGallery.tsx';
import MinicakeGalleryModal from './MinicakeGallery.tsx';

const ProductList = () => {
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
            
            }}>
        <div className="product-list-container">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="motion-container"
        >
          <div className="content-container">
            <h2 className="title">Minicakes</h2>
  
            <div className="flex-row">
              {/* Sabores */}
              <div className="flex-item sabores">
                <h3 className="subtitle">Sabores Bizcocho</h3>
                <ul className="list">
                  <li>Vainilla</li>
                  <li>Chocolate</li>
                  <li>Canela tiramisu</li>
                  <li>Limón - naranja</li>
                  <li>Arándanos</li>
                  <li>Zanahoria</li>
                </ul>
              </div>
  
              {/* Imagen y título */}
              <div className="flex-item image-container">
                <img 
                  src={minicake} 
                  alt="Minicake" 
                  onClick={openModal}
                  className="image"
                  style={{ cursor: 'pointer' }}
                />
              </div>
  
              {/* Rellenos */}
              <div className="flex-item rellenos">
                <h3 className="subtitle">Rellenos</h3>
                <ul className="list">
                  <li>Crema Clásica Vainilla</li>
                  <li>Manjar Nuez</li>
                  <li>Ganache de Chocolate</li>
                  <li>Piña Crema</li>
                  <li>Salsa de Frutillas / Frutos Rojos</li>
                  <li>Crema Mokka</li>
                  <li>Crema Pastelera</li>
                  <li>Mermelada (Consultar sabores)</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        <MinicakeGalleryModal isOpen={isModalOpen} onRequestClose={closeModal} />
      </div>

   
      
      </section>
      
        

    );
};

export default ProductList;
