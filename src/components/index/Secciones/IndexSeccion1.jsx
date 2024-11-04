import React from "react";
import RiveComponent from "../../global/animations/riveComponent";
import styles from "../css/indexSeccion1.module.css";

const IndexSeccion1 = () => {
  return (
    <section id="home" className={styles.sectionss}>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          src="/rive/cbluna-demo-respaldo.riv"
          artboard="hero_seccion"
          stateMachines="State Machine 1"
          autoplay={true}
          fit="fill"
        />
      </div>
      <video
        src="/videos/cblunavideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        className={`${styles.videoBackground}`}
      />



    </section>
  );
};

export default IndexSeccion1;
