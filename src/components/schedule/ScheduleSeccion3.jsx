import React from "react";
import RiveComponent from "../global/animations/riveComponent";
import styles from "./css/scheduleSeccion3.module.css";

const ScheduleSeccion3 = () => {
  return (
    <section id="Schedule3" className={styles.sectionss}>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          src="/rive/adr-metaverse.riv"
          artboard="schedule_seccion3"
          stateMachines="State Machine 3"
          autoplay={true}
          fit="fill"
        />
      </div>



    </section>
  );
};

export default ScheduleSeccion3;
