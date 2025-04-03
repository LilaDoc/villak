import styles from './App.module.css'
import React from 'react';
import Aventure from './Adventur'
import decouverte from './assets/decouverte.jpg'
import DiscoverCard from './Discovercard'
import beach from './assets/beach.jpg'
export default function Discover() {
    return (    
        <section className={styles.decouverteSection}> 
          <DiscoverCard
             title="LA POINTE DES CHATEAUX" 
             distance="25" 
             description="Si vous voulez admirer un lever de soleil, c'est l'endroit idéal." 
             image={beach} 
          />

         <Aventure />
          <DiscoverCard
             title="LA POINTE DES CHATEAUX" 
             distance="25" 
             description="Si vous voulez admirer un lever de soleil, c'est l'endroit idéal." 
             image={decouverte} 
          />
         
        </section>
    )
}