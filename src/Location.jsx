import React from 'react';
import styles from './Location.module.css';
import map from './assets/map.png';

export default function Location() {
    return (
        <section className={styles.locationSection}>
<div className={styles.locationContainer}>
    <img src={map} alt="About"  />
  
</div>

</section>
    )
}