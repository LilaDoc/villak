import React from 'react';

import heroImage from './assets/palmier.jpg';
import Arrow from './Down-arrow';
import styles from './Hero.module.css'

export default function Hero() {
    return (
        <section className={styles.hero}>
        <img 
        src={heroImage} 
        alt="Hero" 
        className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <h1>VILLA K'RIBEAN</h1>
          <div className={styles.heroText}>
            LOCATION DE VACANCES AU MOULE
          </div>
        </div>
        <div className={styles.heroButton}>
          <Arrow color="#ffffff" width="100" height="100" />
        </div>
        {/* add menu button  */}
      </section>
    )
}
