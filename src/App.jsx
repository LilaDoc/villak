import styles from './App.module.css'
import About from './About';
import Location from './Location';
import Contact from './Contact';
import { useState } from 'react';
import Herov2 from './Hero';
import Footer from './Footer';
// import Video from './components/Video'

function App() {
  

  return (
    <>
      <div className={styles.page}>
        <section className={styles.landing}>
          <Herov2 id="hero" client:load/>
        </section>
        <div id="about">
          <About id="about"/>
        </div>
        <div id="location">
          <Location />
        </div>

          {/* <Discover/> */}
        <div id="contact" className={styles.hidden480px}>
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
