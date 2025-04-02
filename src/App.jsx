import styles from './App.module.css'
import Header from './Header'
import Hero from './Hero';
import Video from './Video';
import About from './About';
import Location from './Location';
import Discover from './Discover';
import Contact from './Contact';
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
        <Contact/>
      </div>
    </>
  )
}

export default App
