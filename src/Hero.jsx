import React from 'react';

import heroImage from './assets/palmier.jpg';
import Arrow from './Down-arrow';
import styles from './App.module.css'
import { useState, useEffect, useRef } from 'react'

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

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [heroTitleRef, isHeroTitleVisible] = useElementOnScreen({
    threshold: 0.4,
    rootMargin: '100px 0px 0px 0px'
  });

  return (
    <section className={styles.hero}>
      <img 
        src={heroImage} 
        alt="Hero" 
        className={styles.heroImage}
        onLoad={() => setImageLoaded(true)}
      />
      <h1 
        ref={heroTitleRef}
        className={`${styles.heroTitle} ${(isHeroTitleVisible && imageLoaded) ? styles.showApparition : styles.hiddenApparition}`}
      >
        <span className="capitalize">V</span>ILLA K'RIBEAN
      </h1>
      <div className={styles.heroOverlay}>
        <div className={styles.heroText}>
          <h2>LOCATION DE VACANCES AU MOULE</h2>
        </div>
      </div>
      <div className={styles.heroButton}>
        <Arrow color="#ffffff" width="100" height="100" />
      </div>
      {/* add menu button  */}
    </section>
  );
}
