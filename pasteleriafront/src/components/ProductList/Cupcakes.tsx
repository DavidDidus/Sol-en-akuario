import React from "react";
import { motion } from "framer-motion";
import cupcakeGroup from "../../images/Cupcakes/grupoCucakes.jpg";
import Muffins from "./Muffins.tsx";


const Cupcakes = () => {
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
              <h2 className="cookie-title">Cupcakes</h2>
    
              <div className="cookie-flex-row">
            
                {/* Imagen y título */}
                <div className="cookie-flex-item cookie-image-container">
                  <motion.img
                    src={cupcakeGroup} 
                    alt="Cookie" 
                    className="cookie-image"
                    //onClick={openModal} 
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
                    <li>Chocolate</li>
                    <li>Vainilla Chips</li>
                    <li>Plátano Nuez</li>
                    <li>Limon Arandanos</li>
                    <li>Limon Frambuesa</li>
                    <li>Manzana Canela con Crumble</li>

                    
                  </ul>
                  
                </div>
    
                
              </div>
            </div>
            <p className='cookie-text'>$1.600 c/u (Mínimo 4 Unidades ) </p>
          </motion.div>
          
        </div>
        <Muffins />
      </section>
    );
    };
    export default Cupcakes;