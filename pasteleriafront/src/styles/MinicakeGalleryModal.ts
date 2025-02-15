const styles = {
  modal: {
    position: 'absolute' as 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    background: 'white',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '80%',
    maxHeight: '80%',
    overflow: 'auto' as 'auto',
    backgroundColor: '#f5d6eb',
    zIndex: 1000,
    
  },
  overlay: {
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  },
  modalTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold' as 'bold',
    color: '#6A4844',
    textAlign: 'center' as 'center',
    marginBottom: '20px',
    fontFamily: 'Raleway',
  },
  modalText: {
    fontSize: '1rem',
    color: '#6A4844',
    textAlign: 'center' as 'center',
    fontFamily: 'Raleway',
    itemAlign: 'center' as 'center',
  },
  imageSlider: {
    maxWidth: '300px',
    margin: '0 auto',
    
  },
  imageSlide: {
    display: 'flex',
    justifyContent: 'center' as 'center',
    alignItems: 'center' as 'center',
  },
  sliderImage: {
    width: 'auto' as 'auto',
    maxWidth: '150px',
    height: 'auto' as 'auto',
    borderRadius: '10px',
    cursor: 'pointer' as 'pointer',
    itemAlign: 'center' as 'center',
  },
  closeButton: {
    display: 'block',
    margin: '20px auto 0',
    padding: '5px 20px',
    backgroundColor: '#6A4844',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer' as 'pointer',
  },
  imageContainer: {
    display: 'flex',
    AlignItems: 'center' as 'center',
    justifyContent: 'center' as 'center',
    
    gap: '2rem',
    flexWrap: 'wrap' as 'wrap',
  },
  imageItem: {
    textAlign: 'left' as 'left',
    maxWidth: '300px',
  },
  enlargedImageContainer: {
    display: 'flex',
    justifyContent: 'center' as 'center',
    alignItems: 'center' as 'center',
    height: '100%',
  },
  enlargedImage: {
    width: '65%',
    borderRadius: '10px',
  },
  backButton: {
    position: 'absolute' as 'absolute',
    top: '10px',
    left: '10px',
    padding: '5px 10px',
    backgroundColor: '#6A4844',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer' as 'pointer',
  },
};

export default styles;