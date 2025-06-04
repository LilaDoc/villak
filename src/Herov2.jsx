import React, { useState, useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import Video from './Video';
import Arrow from './Down-arrow';
import VideoScreen from './VideoScreen';
import heroImage from './assets/hero.png';
import VideoButton from './VideoButton';
import CallToAction from './CallToAction';
// Ajout du hook personnalisé
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

const Hero = (props) => {
  // Ajout des états nécessaires
  const [imageLoaded, setImageLoaded] = useState(false);
  const [heroTitleRef, isHeroTitleVisible] = useElementOnScreen({
    threshold: 0.4,
    rootMargin: '100px 0px 0px 0px'
  });

  const [heroSubtitleRef, isHeroSubtitleVisible] = useElementOnScreen({
    threshold: 0.4,
    rootMargin: '100px 0px 0px 0px'
  });
  
  // Correction de useelement et ajout de la logique d'apparition
  return (
    <>
    {props.videoOpen && <VideoScreen videoOpen={props.videoOpen} setVideoOpen={props.setVideoOpen} />}
    <section className={styles.hero} id="hero">

        <div className={`${styles.backgroundVideo} ${styles.show}`}
             onLoad={() => setImageLoaded(true)}>
            <Video />
        </div>
        <div className={`${styles.backgroundImage} ${styles.hidden}`}>
            <img src={heroImage} alt="hero" />
        </div>
        <div className={styles.heroArrowTitleContainer}>
            <div className={styles.heroTitlesContainer}>
                <div className={styles.heroTitleContainer}>
                <h1 
                  ref={heroTitleRef}
                  className={`${styles.heroTitle} ${(isHeroTitleVisible && imageLoaded) ? styles.showApparition : styles.hiddenApparition}`}
                >   
                    <span className="capitalize">V</span>ILLA K'RIBEAN
                </h1>
                </div>
                <div className={styles.heroSubtitleContainer}>
                    <h2 
                      ref={heroSubtitleRef}
                      className={`${styles.heroSubtitle} ${(isHeroSubtitleVisible && imageLoaded) ? styles.showApparition : styles.hiddenApparition}`}
                    >
                        LOCATION DE VACANCES AU MOULE
                    </h2>
                    <CallToAction />
                    <VideoButton videoOpen={props.videoOpen} setVideoOpen={props.setVideoOpen} />
                </div>
            </div>
            <div className={styles.heroArrow}>
                <a href="#about"><Arrow color="#ffffff" width="100" height="100" /></a>
            </div>
        </div>
    </section>
    </>
  );
};

export default Hero;