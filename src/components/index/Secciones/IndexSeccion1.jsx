import React from "react";
import RiveComponent from "../../global/animations/riveComponent";
import styles from "../css/indexSeccion1.module.css";

const IndexSeccion1 = () => {
  return (
    <section id="home" className={styles.sectionss}>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          src="/rive/web3.riv"
          artboard="seccion1"
          stateMachines="State Machine 1"
          autoplay={true}
          fit="fill"
        />
      </div>



    </section>
  );
};

export default IndexSeccion1;
