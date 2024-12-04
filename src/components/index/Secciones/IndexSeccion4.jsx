import React from "react";
import RiveComponent from "../../global/animations/riveComponent";
import styles from "../css/indexSeccion4.module.css";

const IndexSeccion4 = () => {
  return (
    <section id="experience" className={styles.sectionss}>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          src="/rive/cbluna.riv"
          artboard="seccion4"
          stateMachines="State Machine 1"
          autoplay={true}
          fit="contain"
        />
      </div>

    </section>
  );
};

export default IndexSeccion4;
