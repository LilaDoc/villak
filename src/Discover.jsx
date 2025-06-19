import styles from './App.module.css'
import React from 'react';
import Aventure from './Adventur'
import DiscoverCard from './Discovercard'

export default function Discover() {
    return (    
        <section className={styles.decouverteSection}> 
          <DiscoverCard
             title="LA POINTE DES CHATEAUX" 
             distance="25" 
             description="Si vous voulez admirer un lever de soleil, c'est l'endroit idéal." 
             image="/villak/images/beach.jpg" 
          />

         <Aventure />
          <DiscoverCard
             title="LA POINTE DES CHATEAUX" 
             distance="25" 
             description="Si vous voulez admirer un lever de soleil, c'est l'endroit idéal." 
             image="/villak/images/decouverte.jpg" 
          />
         
        </section>
    )
}