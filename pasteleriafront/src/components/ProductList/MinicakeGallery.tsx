import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import torta1 from "../../images/torta doja.jpg";
import torta2 from "../../images/otratortalinda.jpg";
import torta3 from "../../images/torta fubol.jpg";
import torta4 from "../../images/torta galleta.jpg";
import torta5 from "../../images/torta linda.jpg";
import torta6 from "../../images/tortalinda.jpg";
import Modal from "react-modal";
import styles from '../../styles/MinicakeGalleryModal.ts';

const images = [
    torta1,
    torta2,
    torta3,
    torta4,
    torta5,
    torta6,
];

const MinicakeGalleryModal = ({ isOpen, onRequestClose }) => {

    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
      
    const openImageModal = (image) => {
        setSelectedImage(image);
        setIsImageModalOpen(true);
    };
      
    const closeImageModal = () => {
        setSelectedImage(null);
        setIsImageModalOpen(false);
    };
      
    return (
        <motion.image
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="motion-container"
                >
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={{
            overlay: styles.overlay,
            content: styles.modal,
            }}
        >
        <h2 style={styles.modalTitle}>Galeria de Minicakes</h2>
            <div style={styles.imageContainer}>
            {images.map((image, index) => (
            <div key={index} style={styles.imageItem}>
                <img
                src={image}
                alt={`Minicake ${index + 1}`}
                style={styles.sliderImage}
                onClick={() => openImageModal(image)}
                />
            </div>
            ))}
        </div>
        <button onClick={onRequestClose} style={styles.closeButton}>Cerrar</button>
        </Modal>

        <Modal
        isOpen={isImageModalOpen}
        onRequestClose={closeImageModal}
        style={{
          overlay: styles.overlay,
          content: styles.modal,
        }}
        
      >
        <button onClick={closeImageModal} style={styles.backButton}>
          ← Volver
        </button>
        <div style={styles.enlargedImageContainer}>
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected Minicake"
            style={styles.enlargedImage}
          />
        )}
        </div>
      </Modal>

      </motion.image>
    );
};

export default MinicakeGalleryModal;



    
