import styles from './App.module.css'
import { useState, useRef, useEffect } from 'react'
import aventure from './assets/aventure.jpg'

const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [options]);

  return [containerRef, isVisible];
};

export default function Aventure() {
    const [titleRef, isTitleVisible] = useElementOnScreen({
        threshold: 0.1,
        rootMargin: '100px 0px 0px 0px'
      });
    const [imageRef, isImageVisible] = useElementOnScreen({
        threshold: 0.1,
        rootMargin: '30px 0px 0px 0px'
      });
    const [textRef, isTextVisible] = useElementOnScreen({
        threshold: 0.1,
        rootMargin: '0px'
    });
    return (
        <div className={styles.aventureSection}>
        <div  ref={titleRef} className={`${styles.aventureTitle} ${isTitleVisible ? styles.showAdventure : styles.hiddenAdventure}`}>
          <h2>AVENTURE</h2>
        </div>
        <div className={styles.aventureContent}>
          <div  ref={imageRef} className={`${styles.aventureImage} ${isImageVisible ? styles.showAdventure : styles.hiddenAdventure}`}>
            <img src= {aventure} alt="About"  />
          </div>
          <div  ref={textRef} className={`${styles.aventureText} ${isTextVisible ? styles.showAdventure : styles.hiddenAdventure}`}>
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