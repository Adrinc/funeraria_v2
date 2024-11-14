import React from "react";
import RiveComponent from "../../global/animations/riveComponent";
import styles from "../css/indexSeccion6.module.css";

const IndexSeccion6 = () => {
  return (
    <section id="home" className={styles.sectionss}>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          src="/rive/adr-metaverse.riv"
          artboard="seccion6"
          stateMachines="State Machine 1"
          autoplay={true}
          fit="fill"
        />
      </div>

    </section>
  );
};

export default IndexSeccion6;
