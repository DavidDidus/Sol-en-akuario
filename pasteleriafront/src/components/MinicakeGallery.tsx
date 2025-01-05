import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import torta1 from "../images/torta doja.jpg";
import torta2 from "../images/otratortalinda.jpg";
import torta3 from "../images/torta fubol.jpg";
import torta4 from "../images/torta galleta.jpg";
import torta5 from "../images/torta linda.jpg";
import torta6 from "../images/tortalinda.jpg";



const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const images = [
    torta1,
    torta2,
    torta3,
    torta4,
    torta5,
    torta6,
];

const MinicakeGallery: React.FC = () => {
    return (
        <section
        style={{
            background: "#f5d6eb",
            textAlign: "center",
            fontFamily: "'Quicksand', sans-serif",
            padding: "1rem 0",
        }}
        >
        {/* Animación del título */}
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ maxWidth: "500px", margin: "0 auto" }}
        >
            <h1
            style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#6A4844",
                font: "Quicksand",
            }}
            >
            Galeria
            </h1>
        </motion.div>
        {/* Carrusel de imágenes */}
        <Slider  {...sliderSettings} >
            {images.map((image, index) => (
            <div key={index} style={{ alignItems: "center" }}>
                <img
                src={image}
                alt={`Minicake ${index + 1}`}
                style={{ width: "50%", height: "auto" , borderRadius: "10px"}}
                />
            </div>
            ))}
        </Slider>
        </section>
    );
    }
    export default MinicakeGallery;