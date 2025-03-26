import styles from './Header.module.css';


const Header = () => {
    return (
      <header className={styles.header}>
        <nav className={styles.navContainer}>
          <div className="logo">
            <p>La Villa K´ribean</p>
          </div>
          <ul className={styles.navLinks}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;