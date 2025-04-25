import React from 'react';
import styles from './App.module.css';
import videoImage from './assets/videoImage.png';

const VideoButton = (props) => {

  return (
    <div >
      <button className={styles.videoButton} onClick={() => props.setVideoOpen(true)}>
        <div className={styles.videoButtonImageIcon}>
          <img src={videoImage} alt="video" className={styles.videoButtonImage} />
          <span className={`material-symbols-outlined ${styles.videoButtonIcon}`}>play_arrow</span>
        </div>
        <span className={`${styles.videoButtonText} ${styles.callToActionSpan}`}>Voir la vidéo</span>
      </button>
    </div>
  );
};

export default VideoButton;
