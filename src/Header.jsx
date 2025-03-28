import styles from './Header.module.css';
import ToogleButton from './ToogleButton';
import ToogleList from './ToogleList';

const Header = () => {
    return (
      <header className={styles.header}>
        <nav className={styles.navContainer}>
          <div className={styles.logo}>
            <p>VILLA K'RIBEAN</p>
          </div>
          <div className={styles.toogleButtonContainer}>
            <ToogleButton />
          </div>
        </nav>
      </header>
    );
  };
  
  export default Header;