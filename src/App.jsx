import styles from './App.module.css'
import Header from './Header'
import Hero from './Hero';
import Video from './Video';
import About from './About';
import Location from './Location';
import Discover from './Discover';
import Contact from './Contact';
import CallToAction from './CallToAction';
import { useState } from 'react';
// import Video from './components/Video'

function App() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <div className={styles.page}>
        <section className={styles.landing}>
          <div className={styles.header}>
            < Header videoOpen={videoOpen} setVideoOpen={setVideoOpen} />
          </div>
          <Hero videoOpen={videoOpen} setVideoOpen={setVideoOpen} id="hero"/>
        </section>
        {/* <CallToAction/> */}
        <div id="about">
          <About />
        </div>
        <div id="location">
          <Location />
        </div>

          {/* <Discover/> */}
        <div id="contact">
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
