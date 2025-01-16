import React from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import styles from './baner.module.css';

const Baner = ({ imagen, titleEn="", subtitleEn="", titleEs="", subtitleEs="", height = "400px", idSeccion="" }) => {
  const english = useStore(isEnglish);

  return (
    <div
      id={idSeccion || ''}
      className={styles.bannerContainer}
      style={{ backgroundImage: `url(${imagen || 'default-image.jpg'})`, '--height': height }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {english ? titleEn || 'Main Title' : titleEs || 'Título Principal'}
        </h1>
        <p className={styles.subtitle}>
          {english ? subtitleEn || '' : subtitleEs || ''}
        </p>
      </div>
    </div>
  );
};

export default Baner;
