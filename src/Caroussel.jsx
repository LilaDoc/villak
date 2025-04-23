import { useState } from 'react'
import styles from './App.module.css'
import React from 'react'

// Importez vos images directement
import img1 from './assets/DSCF3980_edit.jpeg'
import img2 from './assets/DSCF3985_edit.jpeg'
import img3 from './assets/DSCF3990_1_edit.jpeg'
import img4 from './assets/DSCF3991_edit.jpeg'
import img5 from './assets/DSCF3996_edit.jpeg'
import img6 from './assets/DSCF3998_edit.jpeg'
import img7 from './assets/DSCF3999_1_edit.jpeg'
import img8 from './assets/DSCF4002_edit.jpeg'
import img9 from './assets/DSCF4003_edit.jpeg'

function Caroussel() {
    // État pour suivre l'index de l'image actuelle
    const [currentIndex, setCurrentIndex] = useState(0)

    // Utilisez les images importées
    const images = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9
    ]

    // Fonctions pour naviguer
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        )
    }

    return (
        // <section className={styles.carouselSection}>
            <div className={styles.carousel}>
                {/* <button className={styles.arrowBtn} onClick={prevSlide}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button> */}
                
                <div className={styles.slideContainer}>
                    <div 
                        className={styles.slideWrapper} 
                        style={{ 
                            transform: `translateX(-${currentIndex * 100}%)` 
                        }}
                    >
                        {images.map((image, index) => (
                            <img 
                                key={index}
                                src={image} 
                                alt={`Slide ${index + 1}`}
                                className={styles.slide}
                            />
                        ))}

                    </div>
                </div>
                <div className={styles.slideMarker}>
                    {images.map((image, index) => (
                        <div 
                            key={index} 
                            className={`${styles.slideMarkerItem} ${index === currentIndex ? styles.active : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        ></div>
                    ))}
                </div>

                {/* <button className={styles.arrowBtn} onClick={nextSlide}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button> */}
            </div>
        // </section>
    )
}

export default Caroussel