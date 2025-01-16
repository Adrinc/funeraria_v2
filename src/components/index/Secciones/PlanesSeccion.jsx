import { useEffect, useRef } from "react";
import { useStore } from "@nanostores/react";
import { isEnglish } from "../../../data/variables";
import styles from "../css/planesSeccion.module.css";
import gsap from "gsap";

const advantagesData = {
  es: [
    "Tiempo para planear",
    "Claridad de pensamiento para elegir",
    "Puede adquirir un plan de acuerdo a sus necesidades económicas",
    "Mensualidades congeladas al momento de la adquisición",
    "Tranquilidad de tener una solución de precisión",
  ],
  en: [
    "Time to plan",
    "Clear thinking for choosing",
    "Choose a plan according to your budget",
    "Frozen monthly payments at purchase",
    "Peace of mind with a precise solution",
  ],
};

const disadvantagesData = {
  es: [
    "Debe tomar decisiones al momento",
    "Tiene una fuerte carga emotiva que no ayuda a la decisión",
    "Debe pagar de contado y sin opción a financiamiento.",
    "Después de pagar medicinas, hospitales, estudios, etc.",
    "Se expone a la familia a situaciones que pueden evitarse",
  ],
  en: [
    "Must make decisions on the spot",
    "High emotional stress affects decisions",
    "No financing options; full payment required",
    "Additional expenses after medical bills",
    "Family faces avoidable stressful situations",
  ],
};

const PlanesSeccion = () => {
  const ingles = useStore(isEnglish);
  const advantages = ingles ? advantagesData.en : advantagesData.es;
  const disadvantages = ingles ? disadvantagesData.en : disadvantagesData.es;

  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 5, ease: "power4.out", scrollTrigger: containerRef.current }
    );
  }, []);

  return (
    <section id="planes" className={styles.container} ref={containerRef}>
      <h2 className={styles.title}>
        {ingles ? "Prevision Plans" : "Planes de previsión"}
      </h2>
      <p className={styles.description}>
        {ingles
          ? "Funeral planning is a way to prepare ourselves with love and responsibility for the inevitable moment of departure, preventing our families from facing difficult decisions and unexpected expenses in the midst of grief. At Colinas del Descanso, we believe that being prepared not only provides peace of mind, but also the opportunity to honor the memory of our loved ones in the best way. That's why we offer affordable solutions starting at $15 pesos a day, so you can find security and peace every step of the way."
          : "La previsión funeraria es una manera de prepararnos con amor y responsabilidad para el momento inevitable de la partida, evitando que nuestras familias enfrenten decisiones difíciles y gastos inesperados en medio del dolor. En Colinas del Descanso, creemos que estar preparado no solo brinda tranquilidad, sino también la oportunidad de honrar la memoria de nuestros seres queridos de la mejor manera. Por eso, ofrecemos soluciones accesibles desde $15 pesos diarios, para que encuentres seguridad y paz en cada paso del camino."}
      </p>
      <div className={styles.grid}>
        <div className={styles.column}>
          <h3>{ingles ? "Advantages with Funeral Planning" : "Ventajas con previsión funeraria"}</h3>
          <ul>
            {advantages.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h3>{ingles ? "Disadvantages without Funeral Planning" : "Desventajas sin previsión funeraria"}</h3>
          <ul>
            {disadvantages.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PlanesSeccion;
