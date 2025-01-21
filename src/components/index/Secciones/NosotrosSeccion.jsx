import { useEffect, useRef } from "react";
import styles from "../css/indexSeccion6.module.css";
import { useStore } from "@nanostores/react";
import { isEnglish } from "../../../data/variables";

const Nosotros = () => {
  const ingles = useStore(isEnglish);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.section} ${styles.fadeInSection}`}>
  
      <div className={styles.content}>
        <div className={styles.textGroup}>
   
          <h1 className={styles.h1}>
            {ingles ? "About Us" : "Sobre Nosotros"}
          </h1>
          <h2 className={styles.h2}>
            {ingles
              ? "Experience and Commitment since 1977"
              : "Experiencia y Compromiso desde 1977"}
          </h2>
          <p className={styles.p}>
            {ingles
              ? `With nearly 40 years of experience, our memorial park has a capacity for
              40,000 burials and offers niches for urns that can hold up to three urns.
              We offer pre-need and immediate care plans to cover all your funeral needs.`
              : `Con casi 40 años de experiencia, nuestro parque memorial tiene capacidad 
              para 40,000 inhumaciones y ofrece nichos para urnas con espacio para hasta tres urnas. 
              Contamos con planes de previsión y atención inmediata para cubrir todas sus necesidades funerarias.`}
          </p>
        </div>
  
        <div className={styles.videoContainer}> <video className={styles.video} id="background-video" loop autoPlay muted playsInline><source src="../videos/funeraria1.mp4" type="video/mp4" /></video></div>
      </div>
    </section>
  );
  
};

export default Nosotros;
