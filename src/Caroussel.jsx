import { useState } from 'react'
import styles from './App.module.css'
import React from 'react'
import FullScreenImage from './FullScreenImage'

const img1 = '/images/DSCF3980_edit.jpeg'
const img2 = '/images/DSCF3985_edit.jpeg'
const img3 = '/images/DSCF3990_1_edit.jpeg'
const img4 = '/images/DSCF3991_edit.jpeg'
const img5 = '/images/DSCF3996_edit.jpeg'
const img6 = '/images/DSCF3998_edit.jpeg'
const img7 = '/images/DSCF3999_1_edit.jpeg'
const img8 = '/images/DSCF4002_edit.jpeg'
const img9 = '/images/DSCF4003_edit.jpeg'

function Caroussel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const [openImage, setOpenImage] = useState(false)

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
    const handleImageClick = () => {
        setOpenImage(true)
    }

    return (
            <div className={styles.carousel}>

                {openImage && <FullScreenImage 
                    image={images[currentIndex]} 
                    setFullScreenImageOpen={setOpenImage} 
                    nextImage={nextSlide}
                    prevImage={prevSlide}
                />}
                <div className={styles.slideContainer} onClick={handleImageClick}>
                    <div 
                        className={styles.slideWrapper} 
                        style={{ 
                            transform: `translateX(-${currentIndex * 100}%)` 
                        }}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        onClick={() => setOpenImage(true)}
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