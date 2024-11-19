import React from "react";
import RiveComponent from "../global/animations/riveComponent";
import styles from "./css/scheduleSeccion2.module.css";

const ScheduleSeccion2 = () => {
  return (
    <section id="Schedule2" className={styles.sectionss}>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          src="/rive/adr-metaverse.riv"
          artboard="schedule_seccion2"
          stateMachines="State Machine 2"
          autoplay={true}
          fit="fill"
        />
      </div>



    </section>
  );
};

export default ScheduleSeccion2;
