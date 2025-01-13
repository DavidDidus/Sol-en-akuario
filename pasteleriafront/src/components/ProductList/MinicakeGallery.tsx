import React, { useState } from "react";
import { motion } from "framer-motion";
import torta1 from "../../images/Minicakes/Minicake Albahaca.jpg";
import torta2 from "../../images/Minicakes/otratortalinda.jpg";
import torta3 from "../../images/Minicakes/torta fubol.jpg";
import torta4 from "../../images/Minicakes/torta galleta.jpg";
import torta5 from "../../images/Minicakes/torta linda.jpg";
import torta6 from "../../images/Minicakes/tortalinda.jpg";
import Modal from "react-modal";
import styles from '../../styles/MinicakeGalleryModal.ts';

const product = [
  { name: "Minicake Albahaca", image: torta1},
  { name: "Torta fubol", image: torta3},
  { name: "Torta galleta", image: torta4},
  { name: "Torta linda", image: torta5},
  { name: "Torta linda", image: torta6},
];

const MinicakeGalleryModal = ({ isOpen, onRequestClose }) => {

    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<{ name: string, image: string } | null>(null);
      
    const openImageModal = (product) => {
        setSelectedImage(product);
        setIsImageModalOpen(true);
    };
      
    const closeImageModal = () => {
        setSelectedImage(null);
        setIsImageModalOpen(false);
    };
      
    return (
        <div className="motion-container">
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
            {product.map((product, index) => (
            <div key={index} style={styles.imageItem}>
                <motion.img
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1,delay: index * 0.3  }}
                  src={product.image}
                  alt={`Minicake ${index + 1}`}
                  style={styles.sliderImage}
                  onClick={() => openImageModal(product)}
                />
                {/*<p style={styles.modalText} >{product.name}</p>]*/}
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
          <>
          <motion.img
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1}}
            src={selectedImage.image}
            alt="Selected Minicake"
            style={styles.enlargedImage}
          />
          </>
          
        )}
        
        </div>
      </Modal>

      </div>
    );
};

export default MinicakeGalleryModal;



    
