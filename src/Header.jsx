import styles from './App.module.css'
import ToogleButton from './ToogleButton';
import ToogleList from './ToogleList';
import ButtonReservation from './ButtonReservation';
const Header = () => {
    return (
      <header className={styles.header}>
        <nav className={styles.navContainer}>
          <div className={styles.logo}>
            <p>VILLA K'RIBEAN</p>
          </div>
              <ButtonReservation />
        </nav>
      </header>
    );
  };
  
  export default Header;