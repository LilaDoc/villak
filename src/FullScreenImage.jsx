import React, { useEffect } from 'react';
import styles from './App.module.css';
const closeIcon = '/images/close.svg';

const FullScreenImage = (props) => {
  return (
    <div className={styles.fullScreenImage}>
      <div className={styles.fullScreenImageContent}>
        <div className={styles.ScreenClose}>
          <button onClick={() => props.setFullScreenImageOpen(false)}>
            <img src={closeIcon} alt="close" />
          </button>
        </div>
        <button
          className={styles.arrowBtn}
          style={{ left: 0 }}
          onClick={props.prevImage}
          aria-label="Précédent"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <img src={props.image} alt="full screen image" className={styles.fullScreenImageImg} onClick={props.nextImage} />

        <button
          className={styles.arrowBtn}
          style={{ right: 0 }}
          onClick={props.nextImage}
          aria-label="Suivant"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FullScreenImage;