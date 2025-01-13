import React, { useState } from "react";
import minicake from "../../images/Cakes/torta frutillas.jpg";
import { motion } from "framer-motion";
import "../../styles/CakeStyles.css";
import MinicakeGalleryModal from "./MinicakeGallery.tsx";

const CakeMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    sabor: "",
    relleno: "",
    tamaño: "",
  });

  const [customPrice, setCustomPrice] = useState(0);

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
    padding: "20px",
  }}
>
  <div className="cake-list-container">
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Título */}
      <h2 className="cake-title">Tortas</h2>

      {/* Tortas Armadas */}
      <div className="cake-flex-row">
        <div className="cake-flex-item2 cake-sabores">
          <h3 className="cake-subtitle">Selva Negra</h3>
          <p>
            Bizcocho de chocolate, almíbar de ron, crema clásica y mermelada de cereza.
          </p>
          <p><strong>$32.000 - $36.000</strong></p>
        </div>
        <div className="cake-flex-item2 cake-sabores">
          <h3 className="cake-subtitle">Dark</h3>
          <p>
            Bizcocho de chocolate remojado en café, ganache de chocolate y crema mokka.
          </p>
          <p><strong>$32.000 - $36.000</strong></p>
        </div>
      </div>
      <div className="cake-flex-row">
        <div className="cake-flex-item2 cake-sabores">
          <h3 className="cake-subtitle">Tres Leches Vegan</h3>
          <p>
            Bizcocho remojado en tres leches, manjar y crema de vainilla.
          </p>
          <p><strong>$32.000 - $36.000</strong></p>
        </div>
        <div className="cake-flex-item2 cake-sabores">
          <h3 className="cake-subtitle">Vegan Tropical</h3>
          <p>
            Bizcocho de vainilla, almíbar de piña, crema, piña y frutillas frescas.
          </p>
          <p><strong>$32.000 - $36.000</strong></p>
        </div>
      </div>

      

      {/* Tortas Personalizables */}
      <h2 className="cake-title">Arma tu Torta</h2>
      <div className="cake-flex-row">
        {/* Sabores */}
        <div className="cake-flex-item cake-sabores">
          <h3 className="cake-subtitle">Sabores Bizcocho</h3>
          <ul className="cake-list">
            <li>Vainilla</li>
            <li>Limón</li>
            <li>Chocolate</li>
            <li>Zanahoria</li>
            <li>Naranja</li>
            <li>Arándanos</li>
            <li>Canela y Café</li>
          </ul>
        </div>

        {/* Rellenos */}
        <div className="cake-flex-item cake-rellenos">
          <h3 className="cake-subtitle">Rellenos</h3>
          <ul className="cake-list">
            <li>Manjar Vegano</li>
            <li>Nueces</li>
            <li>Salsa de Frutillas</li>
            <li>Salsa de Frutos Rojos</li>
            <li>Salsa de Cerezas</li>
            <li>Ganache de Chocolate</li>
            <li>Piña</li>
            <li>Durazno</li>
            <li>Frutilla</li>
          </ul>
        </div>
         {/* Cremas */}
         <div className="cake-flex-item cake-rellenos">
          <h3 className="cake-subtitle">Cremas</h3>
          <ul className="cake-list">
            <li>Vainilla</li>
            <li>Mokka</li>
            <li>Mantequilla de Mani</li>
            <li>Escencia de Limon, Naranja, Ron o Whiskey</li>
            
            
          </ul>
        </div>
        
      </div>
      <p className="cake-text"><strong>20 cm 8-10 p: $32.000 </strong></p>
      <p className="cake-text"><strong>26 cm 14-15 p: $36.000</strong></p>
      
       
    </motion.div>

    {/* Modal */}
    <MinicakeGalleryModal isOpen={isModalOpen} onRequestClose={closeModal} />
  </div>
</section>
  );
};

export default CakeMenu;
