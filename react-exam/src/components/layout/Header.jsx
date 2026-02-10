import { Link } from 'react-router-dom';
import { useWitcherAuth } from '../../context/WitcherAuthContext';
import styles from './Header.module.css'; // Assure-toi d'avoir le CSS module

const Header = () => {
  const { currentWitcher, logout } = useWitcherAuth();

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.brand}>Guilde des Sorceleurs</Link>
      
      <div className={styles.userSection}>
        {currentWitcher ? (
          <>
            <span>🐺 {currentWitcher.name}</span>
            <button onClick={logout} className={styles.logoutBtn}>Déconnexion</button>
          </>
        ) : (
          <Link to="/login" className={styles.loginLink}>Se connecter</Link>
        )}
      </div>
    </nav>
  );
};

export default Header;