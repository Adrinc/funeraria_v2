import React from "react";
import RiveComponent from "../../global/animations/riveComponent";
import styles from "../css/indexSeccion2.module.css";

const IndexSeccion2 = () => {
  return (
    <section id="seccion2" className={styles.sectionss}>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          src="/rive/adr-metaverse.riv"
          artboard="seccion2"
          stateMachines="State Machine 1"
          autoplay={true}
          fit="fill"
        />
      </div>
  
      <div className={`${styles.riveContainerMainCard} `}>

          <div className={`${styles.riveContainerL} ${styles.web}`}>
            <RiveComponent
              src="/rive/adr-metaverse.riv"
              artboard="container_only_text"
              stateMachines="State Machine 1"
              autoplay={true}
              fit="fill"
              />
          </div>
          <div className={`${styles.riveContainerR} ${styles.web}`}>
            <RiveComponent
              src="/rive/adr-metaverse.riv"
              artboard="container_only_text 2"
              stateMachines="State Machine 1"
              autoplay={true}
              fit="fill"
              />
          </div>

              </div>


    </section>
  );
};

export default IndexSeccion2;
