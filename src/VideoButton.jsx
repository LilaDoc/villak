import React from 'react';
import styles from './App.module.css';
import videoImage from './assets/videoImage.png';

const VideoButton = (props) => {

  return (
    <div >
      <button className={styles.videoButton} onClick={() => props.setVideoOpen(true)}>
        <img src={videoImage} alt="video" className={styles.videoButtonImage} />
        <span className={`${styles.videoButtonText} ${styles.callToActionSpan}`}>Voir la vidéo</span>
      </button>
    </div>
  );
};

export default VideoButton;
