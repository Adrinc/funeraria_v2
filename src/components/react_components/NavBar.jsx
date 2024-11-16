import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el menú en móviles
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo con gradiente */}
      <div className={styles.logo}>
        <h>Enter the Metaverse</h>
      </div>

      {/* Ícono de menú hamburguesa para móviles */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      {/* Menú de navegación */}
      <ul className={`${styles.navMenu} ${isOpen ? styles.active : ""}`}>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>Home</a>
        </li>
        <li className={styles.navItem}>
          <a href="/sponsors" className={styles.navLink}>Sponsors</a>
        </li>
        <li className={styles.navItem}>
          <a href="/presenters" className={styles.navLink}>Presenters</a>
        </li>
        <li className={styles.navItem}>
          <a href="/schedule" className={styles.navLink}>Schedule</a>
        </li>
        <li className={styles.navItem}>
          <a href="/login" className={styles.navLink}>Login</a>
        </li>
      </ul>

      {/* Iconos de redes sociales */}
      <div className={styles.socialIcons}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/facebook.svg" alt="Facebook" className={styles.icon} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/twitter.svg" alt="Twitter" className={styles.icon} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkedin.svg" alt="LinkedIn" className={styles.icon} />
        </a>
      </div>

      {/* Botón de comprar tickets */}
      <Link to="/tickets" className={styles.buyButton}>Buy Tickets</Link>
    </nav>
  );
};

export default NavBar;
