import { useState } from 'react'
import styles from './App.module.css'
import React from 'react'


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
    const [currentIndex, setCurrentIndex] = useState(0)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    

    const images = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9
    ]


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
    

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX)
    }
    
    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }
    
    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 100) {
            nextSlide()
        }
        
        if (touchStart - touchEnd < -100) {
            prevSlide()
        }
    }

    return (
            <div className={styles.carousel}>

                
                <div className={styles.slideContainer}>
                    <div 
                        className={styles.slideWrapper} 
                        style={{ 
                            transform: `translateX(-${currentIndex * 100}%)` 
                        }}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
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

            </div>
    )
}

export default Caroussel