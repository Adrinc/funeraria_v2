import React from "react";
import RiveComponent from "../../global/animations/riveComponent";
import styles from "../css/indexSeccion7.module.css";

const IndexSeccion7 = () => {
  return (
    <section id="home" className={styles.sectionss}>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          src="/rive/web3.riv"
          artboard="seccion7"
          stateMachines="State Machine 1"
          autoplay={true}
          fit="fill"
        />
      </div>



    </section>
  );
};

export default IndexSeccion7;
