import React, { useEffect } from 'react';
import styles from './App.module.css';
import closeIcon from './assets/close.svg';
const FullScreenImage = (props) => {
  useEffect(() => {
    // Désactive le scroll du body
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className={styles.fullScreenImage}>
        <div className={styles.fullScreenImageContent}>
          <div className={styles.fullScreenImageClose}>
            {/* <button onClick={() => props.setFullScreenImageOpen(false)}>
              <img src={closeIcon} alt="close" className={styles.CloseIcon}/>
            </button> */}
          </div>
          <img src={props.image} alt="full screen image" className={styles.fullScreenImageImg} />
        </div>
    </div>
  )
}

export default FullScreenImage;