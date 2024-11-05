import React from "react";
import RiveComponent from "./../global/animations/riveComponent";
import styles from "./css/dividerNeon2.module.css";


const DividerNeon2 = ({ titulo = "Ecosistema", subtitulo = "Tecnológico" }) => {
  return (
    <section id="divider" className={styles.sectionss}>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          src="/rive/cbluna-demo-respaldo.riv"
          artboard="DividerNeon2"
          stateMachines="State Machine 1"
          autoplay={true}
          fit="fill"
          hastext={true}
          textValues={{
            titulo: titulo,
            subtitulo: subtitulo,
          }}
        />
      </div>
    </section>
  );
};


export default DividerNeon2;
