import styles from './App.module.css'
import Header from './Header'
import heroImage from './assets/palmier.jpg'
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
// import Video from './components/Video'

function App() {


  return (
    <>
      <div className={styles.page}>
        <section className={styles.landing}>
          <div className={styles.header}>
            <Header />
          </div>
          <section className={styles.hero}>
            <img 
            src={heroImage} 
            alt="Hero" 
            className={styles.heroImage}
            />
            <div className={styles.heroOverlay}>
              <h1>VILLA K'RIBEAN</h1>
              <div className={styles.heroText}>
                LOCATION DE VACANCES AU MOULE
              </div>
            </div>
            <div className={styles.heroButton}>
              <Arrow color="#ffffff" width="100" height="100" />
            </div>
            {/* add menu button  */}
          </section>
        </section>
        <section className={styles.videoSection}>

            <h2>Venez vous installer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p>
            <div className={styles.videoContainer}>
              {/* <Video /> */}
            </div>
            

        </section>
        <section className={styles.aboutSection}>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutCarousel}>
                <Caroussel />
            </div>
            <div className={styles.aboutTextContainer}>
              <div className={styles.aboutText}>
                <p>
                Bienvenue à la Villa des K'ribean, une retraite d'exception au cœur d'un environnement paisible. Nos deux chambres, la salle de bain moderne et le jardin vous garantissent tout le confort nécessaire pour un séjour mémorable. Notre villa allie avec finesse élégance et praticité, offrant un espace bien aménagé où chaque détail est conçu pour votre bien-être. Venez explorer notre havre de paix, où le confort contemporain et la chaleur humaine se combinent pour offrir une expérience d&apos;hébergement inoubliable.
                </p>
              </div>
              <div className={styles.cardText}>
                <div className={styles.cardContainer}>
                  <div className={styles.card}>
                    <div className={styles.cardImage}>
                      <img src={person} alt="About" className={styles.icon} />
                    </div>
                    <p>6</p>
                    <p>VOYAGEURS</p>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.cardImage}>
                      <img src={bed} alt="About" className={styles.icon} />
                    </div>
                    <p>2</p>
                    <p>CHAMBRES</p> 
                  </div>
                  <div className={styles.card}>
                    <div className={styles.cardImage}>
                      <img src={shower} alt="About" className={styles.icon} />
                    </div>
                    <p>1</p>
                    <p>SDB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.aboutServicesTitle}>
              <h2>A VOTRE DISPOSITION</h2>
          </div>
          <div className={styles.aboutServices}>
  
            <div className={styles.aboutServicesContent}>
                <div className={styles.aboutServicesList}>
                  <div className={styles.aboutServicesItem}>
                      <div className={styles.aboutServicesItemImage}>
                      <img src={wifi} alt="About" height={30} width={30} />
                    </div>
                    <p>
                      WIFI
                    </p>
                  </div>
                  <div className={styles.aboutServicesItem}>
                    <div className={styles.aboutServicesItemImage}>
                      <img src={clim} alt="About" height={30} width={30} />
                    </div>
                    <p>
                      CLIMATISATION
                    </p>
                  </div>
                  <div className={styles.aboutServicesItem}>
                    <div className={styles.aboutServicesItemImage}>
                      <img src={water} alt="About" height={30} width={30} />
                    </div>
                    <p>
                      CITERNE D'EAU
                    </p>
                  </div>
                </div>
                <div className={styles.aboutServicesList}>
                <div className={styles.aboutServicesItem}>
                    <div className={styles.aboutServicesItemImage}>
                      <img src={car} alt="About" height={30} width={30} />
                    </div>
                    <p>
                      PARKING
                    </p>
                  </div>
                  <div className={styles.aboutServicesItem}>
                    <div className={styles.aboutServicesItemImage}>
                      <img src={yard} alt="About" height={30} width={30} />
                    </div>
                    <p>
                      JARDIN & TERRASSSE
                    </p>
                  </div>
                  <div className={styles.aboutServicesItem}>
                    <div className={styles.aboutServicesItemImage}>
                      <img src={bebechambre} alt="About" height={30} width={30} />
                    </div>
                    <p>
                      LIT BÉbÉ
                    </p>
                  </div>
                </div>
                <div className={styles.aboutServicesList}>
                <div className={styles.aboutServicesItem}>
                    <div className={styles.aboutServicesItemImage}>
                      <img src={lavelinge} alt="About" height={30} width={30} />
                    </div>
                    <p>
                      LAVE-LINGE
                    </p>
                  </div>
                  <div className={styles.aboutServicesItem}>
                    <div className={styles.aboutServicesItemImage}>
                      <img src={tv} alt="About" height={30} width={30} />
                    </div>
                    <p>
                      TV
                    </p>
                  </div>
                  <div className={styles.aboutServicesItem}>
                    <div className={styles.aboutServicesItemImage}>
                      <img src={cafe} alt="About" height={30} width={30} />
                    </div>
                    <p>
                      MACHINE À CAFÉ
                    </p>
                  </div>
                </div>
            </div>
            
          </div>
        </section>
        <section className={styles.locationSection}>
          <div className={styles.locationContainer}>
              <img src={map} alt="About"  />
            
          </div>

        </section>
        <section className={styles.decouverteSection}> 
          <div className={styles.decouverteContainer}>
            <div className={styles.decouverteTitle}>
              <h2>DÉTENTE</h2>
            </div>
            <div className={styles.decouverteContent}>
              <div className={styles.decouverteImage}>
                  <img src={beach} alt="About"  />
              </div>
              <div className={styles.decouverteText}>
                <p>
                LA POINTE DES CHATEAUX
                <br />
                DISTANCE : 25KM
                <br />
                Si vous voulez admirer un lever de soleil, c'est l'endroit idéal. 
                <br />
                Attention, le soleil se lève très tôt ici !
                </p>
              </div>
            </div>
          </div>
          <div className={styles.aventureSection}>
            <div className={styles.aventureTitle}>
              <h2>AVENTURE</h2>
            </div>
            <div className={styles.aventureContent}>
              <div className={styles.aventureImage}>
                <img src= {aventure} alt="About"  />
              </div>
              <div className={styles.aventureText}>
                <p>
                  LA POINTE DES CHATEAUX
                  <br />
                  DISTANCE : 25KM
                  <br />
                  Si vous voulez admirer un lever de soleil, c'est l'endroit idéal. 
                  <br />
                  Attention, le soleil se lève très tôt ici !
                </p>
              </div>
            </div>
          </div>
          <div className={styles.decouverteContainer}>
            <div className={styles.decouverteTitle}>
              <h2>DÉCOUVERTE</h2>
            </div>
            <div className={styles.decouverteContent}>
              <div className={styles.decouverteImage}>
                  <img src={decouverte} alt="About"  />
              </div>
              <div className={styles.decouverteText}>
                <p>
                LA POINTE DES CHATEAUX
                <br />
                DISTANCE : 25KM
                <br />
                Si vous voulez admirer un l ever de soleil, c'est l'endroit idéal. 
                <br />
                Attention, le soleil se lève très tôt ici !
                </p>
              </div>
            </div>
          </div>
          
        </section>
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
