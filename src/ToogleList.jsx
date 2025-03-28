import styles from './ToogleList.module.css';
import React from 'react';

const ToogleList = () => {
    return (
        <div className={styles.toogleList}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default ToogleList;