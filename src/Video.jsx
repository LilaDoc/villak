import React from 'react';
import styles from './Video.module.css'

export default function Video() {
    return (
        <section className={styles.videoSection}>

<h2>Venez vous installer</h2>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
</p>
<div className={styles.videoContainer}>
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