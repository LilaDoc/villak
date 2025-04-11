import styles from './App.module.css'
import React from 'react';


export default function Contact() {
    return (
        <section className={styles.contactSection} id="contact">
<div className={styles.contactContainer}>
  <h2><span className='capitalize'>C</span>ONTACTEZ-NOUS</h2>
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
    )
}
