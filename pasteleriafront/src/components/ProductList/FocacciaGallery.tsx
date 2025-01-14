import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../../styles/MinicakeGalleryModal.ts';
import focacciapesto from '../../images/Focaccia/focaccia pesto redondo.jpg';
import focacciaqueso from '../../images/Focaccia/Focaccia queso redondo.jpg';

const images = [
    focacciapesto,
    focacciaqueso,
  
];

const FocacciaGalleryModal = ({ isOpen, onRequestClose }) => {
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
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={{
            overlay: styles.overlay,
            content: styles.modal,
            }}
      >
        <h2 style={styles.modalTitle}>Galeria de Focaccias</h2>
        <div style={styles.imageContainer}>
          {images.map((image, index) => (
            <div key={index} style={styles.imageItem}>
              <img
                src={image}
                alt={`Cookie ${index + 1}`}
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
              alt="Selected Cookie"
              style={styles.enlargedImage}
            />
          )}
        </div>
        
      </Modal>
    </>
  );
};

export default FocacciaGalleryModal;