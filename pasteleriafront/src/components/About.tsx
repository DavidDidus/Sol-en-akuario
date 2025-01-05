import React from 'react';
import { Link } from 'react-router-dom';
import Moxito from '../images/moxitopng.png';
import { motion } from "framer-motion";

const About: React.FC = () => {
    return (
        <section
            style={{
            background: "#f5d6eb",
            color: "#333",
            padding: "1rem 0",
            paddingBottom: "14rem",
            textAlign: "center"
            }}>
        {/* Animación del título */}
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ maxWidth: "900px", margin: "0 auto" }}
        >
        <div>
            
            <p>
            Somos una pastelería que se dedica a la elaboración de productos de pastelería y repostería.
            </p>
            <p>
            Nuestros productos son hechos con ingredientes de la más alta calidad y con mucho amor.
            </p>
            <p>
            ¡Ven a visitarnos!
            </p>
        </div>
        </motion.div>
        <img src={Moxito} alt="Moxito" style={{ width: '150px', display: 'block', margin: '0 auto' }} />
        </section>
    );
};

export default About;