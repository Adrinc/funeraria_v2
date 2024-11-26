import React from "react";
import RiveComponent from "../../global/animations/riveComponent";
import styles from "../css/indexSeccion2.module.css";

const IndexSeccion2 = () => {
  return (
    <section id="about" className={styles.sectionss}>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          src="/rive/web3.riv"
          artboard="seccion2"
          stateMachines="State Machine 1"
          autoplay={true}
          fit="fill"
        />
      </div>
  


    </section>
  );
};

export default IndexSeccion2;
