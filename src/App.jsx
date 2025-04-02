import styles from './App.module.css'
import Header from './Header'

import person from './assets/person.svg'
import bed from './assets/bed.svg'
import shower from './assets/shower.svg'
import wifi from './assets/wifi.svg'
import clim from './assets/clim.svg'
import water from './assets/water.svg'
import map from './assets/map.png'
import beach from './assets/beach.jpg'
import aventure from './assets/aventure.jpg'
import decouverte from './assets/decouverte.jpg'
import yard from './assets/yard.svg'
import bebechambre from './assets/bebechambre.svg'
import lavelinge from './assets/lavelinge.svg'
import tv from './assets/tv.svg'
import cafe from './assets/cafe.svg'
import car from './assets/car.svg'  
import Caroussel from './Caroussel'
import Arrow from './Down-arrow';
import Hero from './Hero';
import Video from './Video';
import About from './About';
import Location from './Location';
import Discover from './Discover';
// import Video from './components/Video'

function App() {


  return (
    <>
      <div className={styles.page}>
        <section className={styles.landing}>
          <div className={styles.header}>
            < Header />
          </div>

          <Hero />
        </section>
        <Video/>
       <About/>
       <Location/>
        <Discover/>
        <section className={styles.contactSection} id="contact">
          <div className={styles.contactContainer}>
            <h2>CONTACTEZ-NOUS</h2>
            <p>
              Nous sommes à votre écoute pour toute question ou demande. Contactez-nous par mail à <a href="mailto:contact@villedeskribean.com">contact@villedeskribean.com</a>
            </p>

            {/* <div className={styles.contactForm}>
              <form>
                <input type="text" placeholder="Nom" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"  />
                <button type="submit" onClick={handleSubmit}>Envoyer</button>
              </form>
            </div>
            */}
          </div>
        </section>
      </div>
    </>
  )
}

export default App
