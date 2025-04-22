import styles from './App.module.css'
import React from 'react'

export default function CallToAction() {
    return (
        <section className={styles.callToAction}>
            <div className={styles.callToActionContainer}>
                <h2><a href="mailto:contact@villedeskribean.com">Réservez votre séjour</a></h2>
            </div>
        </section>
    )
}