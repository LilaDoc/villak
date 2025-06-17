import React from 'react';
import styles from './App.module.css'
const map = '/images/map.png';

export default function Location() {
    return (
        <section className={styles.locationSection} id="location">
<div className={styles.locationContainer}>
    <img src={map} alt="About"  />
  
</div>

</section>
    )
}