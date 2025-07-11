import styles from './App.module.css'
import Header from './Header'
import About from './About';
import Location from './Location';
import Contact from './Contact';
import CallToAction from './CallToAction';
import { useState } from 'react';
import Herov2 from './Herov2';
import VideoButton from './VideoButton';
import Footer from './Footer';
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
          <Herov2 videoOpen={videoOpen} setVideoOpen={setVideoOpen} id="hero"/>
          {/* <Hero videoOpen={videoOpen} setVideoOpen={setVideoOpen} id="hero"/> */}
        </section>
        {/* <div className={styles.videoButtonContainer}>
          <VideoButton videoOpen={videoOpen} setVideoOpen={setVideoOpen} />

        </div> */}
        {/* <CallToAction/> */}
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
