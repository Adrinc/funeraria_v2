// RiveVideoComponent.jsx
import React from "react";
import RiveComponent from "../global/animations/riveComponent";
import styles from "./css/topStart.module.css";

const TopStart = () => {
  return (
    <section id="top" className={styles.sectionss}>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          src="/rive/cbluna-demo-respaldo.riv"
          artboard="TopStart"
          stateMachines="State Machine 1"
          autoplay={true}
          fit="fill"
        />
      </div>
  



    </section>
  );
};

export default TopStart;
