import React from "react";
import RiveComponent from "../../global/animations/riveComponent";
import styles from "../css/indexSeccion3.module.css";

const IndexSeccion3 = () => {
  return (
    <section id="our_adventages" className={styles.sectionss}>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          src="/rive/web3.riv"
          artboard="seccion3"
          stateMachines="State Machine 1"
          autoplay={true}
          fit="fill"
        />
      </div>

    </section>
  );
};

export default IndexSeccion3;
