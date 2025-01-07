import React from 'react';
import Moxito from '../images/moxitopng.png';
import { motion } from "framer-motion";
import styles from '../styles/AboutStyles.ts';

const About: React.FC = () => {
    return (
        <section style={styles.section}>
            {/* Animación del título */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={styles.motionDiv}
            >
                <div style={styles.textContainer}>
                    <p>Somos una pastelería que se dedica a la elaboración de productos de pastelería y repostería.</p>
                    <p>Nuestros productos son hechos con ingredientes de la más alta calidad y con mucho amor.</p>
                    <p>¡Ven a visitarnos!</p>
                </div>
                
                <img 
                    src={Moxito} 
                    alt="Moxito" 
                    style={styles.image}
                />
                <p style={styles.paragraph}>{"Dueño y Creador"}</p>
            </motion.div>
        </section>  
    );
};

export default About;