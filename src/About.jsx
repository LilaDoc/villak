import React from 'react';
import styles from './App.module.css'
import Caroussel from './Caroussel'
import person from './assets/person.svg'
import bed from './assets/bed.svg'
import shower from './assets/shower.svg'
import wifi from './assets/wifi.svg'
import clim from './assets/clim.svg'
import water from './assets/water.svg'
import yard from './assets/yard.svg'
import bebechambre from './assets/bebechambre.svg'
import lavelinge from './assets/lavelinge.svg'
import tv from './assets/tv.svg'
import cafe from './assets/cafe.svg'
import car from './assets/car.svg'
import beach from './assets/beach.jpg'
import decouverte from './assets/decouverte.jpg'
import aventure from './assets/aventure.jpg'
import AroundCard from './AroundCard'
import Video from './Video'
import ButtonReservation from './ButtonReservation'
import ButtonReservationBlack from './ButtonReservationBlack'
import leaf from './assets/black-shadow-leaves-with-sunlight-white-backdrop.jpg'
export default function About() {
  return (
    <>

    <section className={styles.aboutSection} id="about">
      <div className={styles.aboutContainer}>
        <div className={styles.aboutCarousel}>
            <Caroussel />
        </div>
        <div className={styles.aboutTextContainer}>
          <div className={styles.aboutText}>
            <h3 className={styles.playfairDisplay}><span className="capitalize">B</span>ienvenue à la Villa des K&apos;ribean,</h3>
            <p className={styles.playfairDisplay}>Une retraite d&apos;exception au cœur d&apos;un environnement paisible.<br/>
            Nos deux chambres, la salle de bain moderne et le jardin vous garantissent tout le confort nécessaire pour un séjour mémorable. <br/><br/>
            Venez explorer notre havre de paix, où le confort contemporain et la chaleur humaine se combinent pour offrir une expérience d&apos;hébergement inoubliable.
            </p>
          </div>
          <div className={styles.cardText}>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <img src={person} alt="About" className={styles.icon} />
                </div>
                <p>4-6</p>
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

        <div className={styles.aboutServices}>
          <div className={styles.aboutServicesContent}>
              <div className={styles.aboutServicesList}>
                <div className={styles.aboutServicesItem }>
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
                    LIT BÉBÉ
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
        </div>
      </div>
      <div className={styles.aboutServicesContainer}>
        {/* <div className={styles.aboutServicesTitle}>
            <h3 className={styles.playfairDisplay}><span className="capitalize">A</span> votre disposition</h3>
        </div> */}

      </div>
{/* 
        <Video className={styles.noDisplay}/> */}
        <div className={styles.reservation}>
          <div className={styles.reservationContent}>
            <ButtonReservationBlack/>
          </div>
        </div>

      <div className={styles.around}>
        <div className={styles.aroundContainer}>
          <div className={styles.aroundTitle}>
            <h3 className={styles.playfairDisplay}><span className="capitalize">V</span>isitez la Guadeloupe</h3>
          </div>
          <div className={styles.aroundCards}>
            <AroundCard link="https://fr.guadeloupe-tourisme.com/100/plage-des-alizes-le-moule/" image={beach} text="La Villa des K'ribean est située à proximité de nombreux sites touristiques et de loisirs." distance="2,6km" title="Plage des Alizées" />
            <AroundCard link="https://rhum-damoiseau.com/" image={decouverte} text="La Villa des K'ribean est située à proximité de nombreux sites touristiques et de loisirs." distance="3km" title="Distillerie Damoiseau" />
            <AroundCard link="https://www.tripadvisor.fr/Attraction_Review-g147305-d148906-Reviews-Cascade_aux_Ecrevisses-Parc_National_Basse_Terre_Island_Guadeloupe.html" image={aventure} text="La Villa des K'ribean est située à proximité de nombreux sites touristiques et de loisirs." distance="50km" title="Cascade des écrevisses"/>
          </div>
        </div>
      </div>
    </section>

    </>
    )
}