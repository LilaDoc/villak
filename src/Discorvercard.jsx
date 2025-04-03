import React from 'react'
import styles from './App.module.css'
import beach from './assets/beach.jpg'
import { useInView } from 'react-intersection-observer'
export default function DiscoverCard() {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    return (

        <div className={styles.decouverteContainer}>
        <div ref={ref} className={`${styles.decouverteTitle} ${inView ? styles.slideIn : ''}`}>
          <h2>DÉTENTE</h2>
        </div>
        <div className={styles.decouverteContent}>
          <div className={styles.decouverteImage}>
              <img src={beach} alt="About"  />
          </div>
          <div className={styles.decouverteText}>
            <p>
            LA POINTE DES CHATEAUX
            <br />
            DISTANCE : 25KM
            <br />
            Si vous voulez admirer un lever de soleil, c'est l'endroit idéal. 
            <br />
            Attention, le soleil se lève très tôt ici !
            </p>
          </div>
        </div>
      </div>
    )
}