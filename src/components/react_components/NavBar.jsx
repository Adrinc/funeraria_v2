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
      <div className={styles.logopic}>
       {/* add an image logo */}
        <img src="/favicon.webp" alt="Logo" />
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
          <a href="/" className={styles.navLink}>Inicio</a>
        </li>
        <li className={styles.navItem}>
          <a href="/#about" className={styles.navLink}>Nosotros</a>
        </li>
        <li className={styles.navItem}>
          <a href="/#our_adventages" className={styles.navLink}>Adventages</a>
        </li>
        <li className={styles.navItem}>
          <a href="/#our_services" className={styles.navLink}>Servicios y productos</a>
        </li>
        <li className={styles.navItem}>
          <a href="/#tech_stack" className={styles.navLink}>Tech Stack</a>
        </li>
        <li className={styles.navItem}>
          <a href="/#domains" className={styles.navLink}>Domains</a>
        </li>
        <li className={styles.navItem}>
          <a href="/#statistic" className={styles.navLink}>Statistic</a>
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
      <Link to="/work" className={styles.buyButton}>Contacto</Link>
    </nav>
  );
};

export default NavBar;
