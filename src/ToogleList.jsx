import styles from './ToogleList.module.css';
import React from 'react';

const ToogleList = () => {
    return (
        <div className={styles.toogleList}>
            <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default ToogleList;