import React from "react";
import RiveComponent from "../../global/animations/riveComponent";
import styles from "../css/indexSeccion3.module.css";

const IndexSeccion3 = () => {
  return (
    <section id="home" className={styles.sectionss}>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          src="/rive/adr-metaverse.riv"
          artboard="seccion3"
          stateMachines="State Machine 1"
          autoplay={true}
          fit="fill"
        />
      </div>
      <div className={`${styles.riveContainerMainCircle} `}>

          <div className={`${styles.riveCircle}`}>
            <RiveComponent
                 src="/rive/adr-metaverse.riv"
          artboard="Circle_divider"
              stateMachines="State Machine 1"
              autoplay={true}
              fit="fill"
              />
          </div>

              </div>
    </section>
  );
};

export default IndexSeccion3;
