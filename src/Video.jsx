import React, { forwardRef } from 'react';
import styles from './App.module.css'
import VideoScreen from './VideoScreen';

const Video = forwardRef((props, ref) => {
    return (
        <section className={styles.videoSection}>
           {/* <div className={styles.videoTitle}>
             <h2><span className='capitalize'>U</span>ne parenthèse au soleil</h2>
          </div> */}
          <iframe
              ref={ref}
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/vuApAB0VHjo?autoplay=1&controls=1&mute=1&loop=1&playlist=vuApAB0VHjo&vq=hd1080"
              title="Villa K'ribean"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.videoFrame}
          ></iframe>
        </section>
    );
});

export default Video;