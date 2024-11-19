import React from "react";
import RiveComponent from "../global/animations/riveComponent";
import styles from "./css/scheduleSeccion1.module.css";

const ScheduleSeccion1 = () => {
  return (
    <section id="Schedule1" className={styles.sectionss}>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          src="/rive/adr-metaverse.riv"
          artboard="schedule_seccion1"
          stateMachines="State Machine 1"
          autoplay={true}
          fit="fill"
        />
      </div>



    </section>
  );
};

export default ScheduleSeccion1;
