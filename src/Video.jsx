import React, { forwardRef } from 'react';
import styles from './App.module.css'
import videoSource from './assets/website.mp4'

const Video = forwardRef((props, ref) => {
    return (
        <section className={styles.videoSection}>
            <video
              ref={ref}
              className={styles.videoFrame}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={videoSource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </section>
    );
});

export default Video;