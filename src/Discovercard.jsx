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

export default function DiscoverCard(props) {
  // Animation settings for both sections
  const [titleRef, isTitleVisible] = useElementOnScreen({
    threshold: 0,
    rootMargin: '100px 0px 0px 0px'
  });
  
  const [imageRef, isImageVisible] = useElementOnScreen({
    threshold: 0,
    rootMargin: '100px 0px 0px 0px'
  });
  
  const [textRef, isTextVisible] = useElementOnScreen({
    threshold: 0,
    rootMargin: '100px 0px 0px 0px'
  });

  // Determine which styles to use based on the type prop
  const getAnimationClass = (isVisible) => {
    if (props.type === 'aventure') {
      return isVisible ? styles.showAdventure : styles.hiddenAdventure;
    }
    return isVisible ? styles.show : styles.hidden;
  };

  return props.type === 'aventure' ? (
    <div className={styles.aventureSection}>
        <div 
          ref={titleRef} 
          className={`${styles.aventureTitle} ${getAnimationClass(isTitleVisible)}`}
        >
            <h2>AVENTURE</h2>
        </div>
        <div className={styles.aventureContent}>
            <div 
              ref={imageRef} 
              className={`${styles.aventureImage} ${getAnimationClass(isImageVisible)}`}
            >
                <img src={props.image} alt="Adventure" />
            </div>
            <div 
              ref={textRef}
              className={`${styles.aventureText} ${getAnimationClass(isTextVisible)}`}
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
  ) : (
    <div className={styles.decouverteContainer}>
        <div 
          ref={titleRef} 
          className={`${styles.decouverteTitle} ${getAnimationClass(isTitleVisible)}`}
        >
            <h2>DÉTENTE</h2>
        </div>
        <div className={styles.decouverteContent}>
            <div 
              ref={imageRef} 
              className={`${styles.decouverteImage} ${getAnimationClass(isImageVisible)}`}
            >
                <img src={props.image} alt="About" />
            </div>
            <div 
              ref={textRef}
              className={`${styles.decouverteText} ${getAnimationClass(isTextVisible)}`}
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