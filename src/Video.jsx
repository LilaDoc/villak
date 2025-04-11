import React from 'react';
import styles from './App.module.css'
import leaf from '/home/lyj/Dev/vilakarib/src/assets/hayley-maxwell-Z-yBoorc158-unsplash.jpg'
export default function Video() {
    return (
        <section className={styles.videoSection}>

<div className={styles.videoContainer}>
  
  <div className={styles.videoTitle}>
    <h2><span className='capitalize'>U</span>ne parenthèse au soleil</h2>
  </div>
  <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/oahxGMXj0Ls" // ID corrigé sans le D
    title="Villa K'ribean"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className={styles.videoFrame}
  ></iframe>
</div>



</section>
    )
}