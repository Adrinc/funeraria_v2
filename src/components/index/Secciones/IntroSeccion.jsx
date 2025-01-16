// IntroSeccion.jsx
import React from 'react';
import styles from '../css/introSeccion.module.css';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';

const IntroSeccion = () => {
  const english = useStore(isEnglish);

  const content = {
    title: english ? "We will do EVERYTHING we can to help you organize a Unique Funeral." : "Haremos TODO lo que podamos para ayudarte a organizar un Funeral Único.",
    description: english
      ? "Aware of the inevitable problems that the loss of a loved one represents for a family, Colinas del Descanso, with almost 40 years of experience, opens its doors to offer you Comprehensive Funeral Services of excellent quality. In addition to having a Crematorium of the highest technology and under all regulations, we put at your disposal our Colinas del Descanso Private Cemetery located in Tijuana, B.C., where in a framework of tranquility and respect for the norms of our cultural traditions, we guarantee a worthy place for the rest of your loved ones. We are sure that within the different service options we offer, you and your family will find the one that best suits your needs."
      : "Conscientes de la inevitable problemática que representa para una familia la pérdida de un ser querido, Colinas del Descanso, con casi 40 años de experiencia, le abre sus puertas para ofrecerle Servicios Funerarios Integrales de excelente calidad. Además de contar con un Crematorio de la más alta tecnología y bajo todas las normas, ponemos a su disposición nuestro Cementerio Privado Colinas del Descanso ubicado en Tijuana, B.C., donde en un marco de tranquilidad y respeto a las normas de nuestras tradiciones culturales, garantizamos un lugar digno para el descanso de sus seres queridos. Estamos seguros de que dentro de las diferentes opciones de servicios que ofrecemos, usted y su familia encontrarán la que mejor se adapte a sus necesidades.",
    tranquility: english ? "Tranquility" : "Tranquilidad",
    respect: english ? "Respect" : "Respeto",
    service: english ? "Service" : "Servicio",
    understanding: english ? "Understanding" : "Comprensión",
  };

  return (
    <section id="intro" className={styles.main}>


    <div className={styles.container}>
      <div className={styles.topRow}>
        <div className={styles.textSection}>
          <h1>
            {content.title.split(' ').map((word, index) =>
              word === 'TODO' || word === 'EVERYTHING'  ? <span key={index} className={styles.highlight}>{word} </span> : `${word} `
            )}
          </h1>
          <p>{content.description}</p>
        </div>
        <div className={styles.imageSection}>
          <img src="./image/bgs/monumento.jpg" alt="Monumento" />
        </div>
      </div>
      <div className={styles.iconSection}>
        {[
          { icon: "planta.png", label: content.tranquility },
          { icon: "handshake.png", label: content.respect },
          { icon: "bookmark.png", label: content.service },
          { icon: "hand_heart.png", label: content.understanding }
        ].map(({ icon, label }) => (
          <div className={styles.iconItem} key={label}>
            <img src={`./icons/${icon}`} alt={label} />
            <p>{label}</p>
          </div>
        ))}
      </div>
    </div>
        </section>
  );
};

export default IntroSeccion;
