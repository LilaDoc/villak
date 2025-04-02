import styles from './Discover.module.css'
import React from 'react';
import beach from './assets/beach.jpg'
import aventure from './assets/aventure.jpg'
import decouverte from './assets/decouverte.jpg'

export default function Discover() {
    return (    
        <section className={styles.decouverteSection}> 
          <div className={styles.decouverteContainer}>
            <div className={styles.decouverteTitle}>
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
          <div className={styles.aventureSection}>
            <div className={styles.aventureTitle}>
              <h2>AVENTURE</h2>
            </div>
            <div className={styles.aventureContent}>
              <div className={styles.aventureImage}>
                <img src= {aventure} alt="About"  />
              </div>
              <div className={styles.aventureText}>
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
          <div className={styles.decouverteContainer}>
            <div className={styles.decouverteTitle}>
              <h2>DÉCOUVERTE</h2>
            </div>
            <div className={styles.decouverteContent}>
              <div className={styles.decouverteImage}>
                  <img src={decouverte} alt="About"  />
              </div>
              <div className={styles.decouverteText}>
                <p>
                LA POINTE DES CHATEAUX
                <br />
                DISTANCE : 25KM
                <br />
                Si vous voulez admirer un l ever de soleil, c'est l'endroit idéal. 
                <br />
                Attention, le soleil se lève très tôt ici !
                </p>
              </div>
            </div>
          </div>
        </section>
    )
}