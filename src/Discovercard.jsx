import React, { useState, useEffect, useRef } from 'react'
import styles from './App.module.css'


const useElementOnScreen = (options) => {
  // Création d'une référence pour l'élément qu'on veut observer
  const containerRef = useRef(null);
  // État pour suivre si l'élément est visible ou non
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Création d'un nouvel observateur d'intersection
    const observer = new IntersectionObserver(([entry]) => {
      // Met à jour l'état quand l'élément entre/sort de la vue
      setIsVisible(entry.isIntersecting);
    }, options);

    // Si l'élément existe, commence à l'observer
    if (containerRef.current) observer.observe(containerRef.current);

    // Nettoyage : arrête d'observer quand le composant est démonté
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [options]);

  // Retourne la référence et l'état de visibilité
  return [containerRef, isVisible];
};

export default function DiscoverCard( props) {
  // Le titre apparaîtra 100px avant d'entrer dans la vue
  const [titleRef, isTitleVisible] = useElementOnScreen({
    threshold: 0.1,
    rootMargin: '10px 0px 0px 0px'  // Format: top right bottom left
  });
  
  // L'image apparaîtra 50px avant d'entrer dans la vue
  const [imageRef, isImageVisible] = useElementOnScreen({
    threshold: 0.1,
    rootMargin: '30px 0px 0px 0px'
  });
  
  // Le texte apparaîtra exactement quand il entre dans la vue
  const [textRef, isTextVisible] = useElementOnScreen({
    threshold: 0.1,
    rootMargin: '0px'
  });

  return (
    <div className={styles.decouverteContainer}>
        <div 
          ref={titleRef} 
          className={`${styles.decouverteTitle} ${isTitleVisible ? styles.show : styles.hidden}`}
        >
            <h2>DÉTENTE</h2>
        </div>
        <div className={styles.decouverteContent}>
            <div 
              ref={imageRef} 
              className={`${styles.decouverteImage} ${isImageVisible ? styles.show : styles.hidden}`}
            >
                <img src={props.image} alt="About" />
            </div>
            <div 
              ref={textRef}
              className={`${styles.decouverteText} ${isTextVisible ? styles.show : styles.hidden}`}
            >
                <p>
                    {props.title}
                    <br />
                    DISTANCE : {props.distance}KM
                    <br />
                    {props.description}
                </p>
            </div>

        </div>
    </div>
  );
}