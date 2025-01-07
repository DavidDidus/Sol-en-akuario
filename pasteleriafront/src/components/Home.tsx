import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cupcakeImage from '../images/cupcake.jpg';
import tortaDojaImage from '../images/torta doja.jpg';
import tortaFubolImage from '../images/torta fubol.jpg';
import tortaGalletaImage from '../images/torta galleta.jpg';
import tortaLindaImage from '../images/torta linda.jpg';
import TopProduct from "./TopProduct.tsx";



const HeroSection: React.FC = () => {
  // Configuración del carrusel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Lista de imágenes del carrusel
const images = [
    cupcakeImage,
    tortaDojaImage,
    tortaFubolImage,
    tortaGalletaImage,
    tortaLindaImage,
];

  return (
    <section
      style={{
        background: "#f5d6eb",
        textAlign: "center",
        fontFamily: "Raleway",
        padding: "1rem 0",
      }}
    >
      {/* Animación del título */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ maxWidth: "900px", margin: "0 auto" }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#6A4844",
            fontFamily: "Raleway",
            
          }}
        >
        Sol en Akuario
        </h1> 
        
      </motion.div>

      {/* Carrusel de imágenes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ maxWidth: "250px", margin: "2rem auto" }}
      >
        <Slider {...sliderSettings}>
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Imagen ${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
          ))}
        </Slider>
      </motion.div>

      {/* Botón con animación */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          backgroundColor: "#E4A992",
          color: "#FFFFFF",
          padding: "0.75rem 1.5rem",
          border: "none",
          borderRadius: "5px",
          fontSize: "1.25rem",
          cursor: "pointer",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          marginTop: "2rem",
      
        }}
        onClick={() => window.location.href = '/productos'}
      >
        Explorar Productos
      </motion.button>

      <TopProduct />
    </section>
    
  );
};

export default HeroSection;
