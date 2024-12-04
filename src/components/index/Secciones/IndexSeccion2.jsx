import React from "react";
import RiveComponent from "../../global/animations/riveComponent";
import styles from "../css/indexSeccion2.module.css";

const IndexSeccion2 = () => {
  return (
    <section id="about" className={styles.sectionss}>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          src="/rive/cbluna.riv"
          artboard="seccion2"
          stateMachines="State Machine 1"
          autoplay={true}
          fit="fill"
          client:visible
        />
      </div>
  


    </section>
  );
};

export default IndexSeccion2;
