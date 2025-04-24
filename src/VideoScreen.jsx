import React from 'react';
import styles from './App.module.css';
import closeIcon from './assets/close.svg';
const VideoScreen = (props) => {
  return (
    <div className={styles.videoScreen}>
        <div className={styles.videoScreenContent}>
          <div className={styles.videoScreenClose}>
            <button onClick={() => props.setVideoOpen(false)}>
              <img src={closeIcon} alt="close" />
            </button>
          </div>
        <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/oahxGMXj0Ls?autoplay=1&mute=1&loop=1&playlist=oahxGMXj0Ls"
              title="Villa K'ribean"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.videoFrame}
          ></iframe>
        </div>
    </div>
  )
}

export default VideoScreen;