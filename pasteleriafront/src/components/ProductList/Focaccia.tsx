import React, { useState } from "react";
import { motion } from "framer-motion";
import focacciaImage from "../../images/Focaccia/focachia.jpg";
import "../../styles/FocacciaStyles.css";
import FocacciaGalleryModal from "./FocacciaGallery.tsx";

const Focaccia: React.FC = () => {

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
        <div className="focaccia-list-container">
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="motion-container"
            >
            <div className="content-container">
                <h2 className="focaccia-title">Vegan Focaccia</h2>
                <p className="focaccia-text">Puedes elegir entre harina común o integral</p>

                <div className="focaccia-flex-row">
                <div className="focaccia-flex-item focaccia-image-container">
                    <motion.img  
                    src={focacciaImage} 
                    alt="Focaccia" 
                    className="focaccia-image"
                    onClick={openModal} 
                    style={{ cursor: 'pointer' }} 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    />
                </div>
                <div className="focaccia-flex-item focaccia-sabores">
                    <h3 className="focaccia-subtitle">Sabores</h3>
                    <ul className="focaccia-list">
                        <li>
                            <p className="focaccia-list title">Toscana:</p>
                            <p className="focaccia-list text" >Aceitunas - Pimenton Rojo - Cebolla Morada - Orégano</p></li>
                        <li>
                            <p className="focaccia-list title">Green:</p>
                            <p className="focaccia-list text" >Albahaca Fresca - Champiñones Laminados - Pesto Vegano</p></li>
                        <li>
                            <p className="focaccia-list title">Cheese:</p>
                            <p className="focaccia-list text" >Not Cheese - Ajo y Cebolla - Romero</p></li>
                        <li>
                            <p className="focaccia-list title">Classic:</p>
                            <p className="focaccia-list text" >Tomate Cherry - Cebolla Morada - Orégano</p></li>
                            <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "20px",
              marginLeft: "0px",
              fontFamily: "Raleway", color: "#6A4844",fontSize: "1.5rem" 
            }}
          >
            <div style={{ textAlign: "center",}}>
              <p style = {{fontWeight: "bold"}}>Disco de Pan de 20cm</p>
              <p>300gr</p>
              <p>$5.000</p>
            </div>
            <div style={{ textAlign: "center",}}>
              <p style = {{fontWeight: "bold"}}>Pan Rectangular</p>
              <p>500gr</p>
              <p>$7.500</p>
            </div>
          </div>
                    </ul>
                </div>
                </div>
            </div>
            <p className="focaccia-text">*Todas las focaccias son rociadas con aceite de oliva</p>
           
            </motion.div>
        </div>
        <FocacciaGalleryModal isOpen={isModalOpen} onRequestClose={closeModal} />
        </section>

    );
}

export default Focaccia;