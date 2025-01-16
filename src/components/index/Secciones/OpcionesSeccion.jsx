import React, { useEffect, useRef } from "react";
import { useStore } from "@nanostores/react";
import TarjeraCementerioContainer from "../TarjeraCementerioContainer.jsx";
import { isEnglish } from "../../../data/variables.js";
import styles from "../css/opcionesSeccion.module.css";

const data = [
    {
      image: "./image/sistema_americano.jpg",
      titleEs: "Sistema Americano",
      titleEn: "American System",
      descriptionEs: "Espacio para 2 Gavetas\nPlaca de mármol\nConstrucción de bóveda de concreto\nTerreno de 1.00 m X 2.50 m\nServicio completo de inhumación (maestro de ceremonias, carpa, sillas, base para ataúd, sepultura, sellado de losas con cemento)",
      descriptionEn: "Space for 2 Graves\nMarble plaque\nConcrete vault construction\n1.00 m X 2.50 m plot\nComplete burial service (ceremony master, tent, chairs, coffin stand, burial, sealing of slabs with cement)"
    },
    {
      image: "./image/sistema_de_nichos.jpg",
      titleEs: "Sistema Tradicional",
      titleEn: "Traditional System",
      descriptionEs: "Espacio para 2 Gavetas\nCon banqueta (sin pasto)\nTerreno de 1.00 m X 2.50 m\nServicio completo de inhumación (maestro de ceremonias, carpa, sillas, base para ataúd, sepultura, sellado de losas con cemento)",
      descriptionEn: "Space for 2 Graves\nWith sidewalk (without grass)\n1.00 m X 2.50 m plot\nComplete burial service (ceremony master, tent, chairs, coffin stand, burial, sealing of slabs with cement)"
    },
    {
      image: "./image/sistema_familiar.jpg",
      titleEs: "Sistema Familiar",
      titleEn: "Family System",
      descriptionEs: "Lotes de 4 y 6 Gavetas\nPlaca de mármol\nConstrucción de bóveda de concreto\nServicio completo de inhumación (maestro de ceremonias, carpa, sillas, base para ataúd, sepultura, sellado de losas con cemento)",
      descriptionEn: "Lots for 4 and 6 Graves\nMarble plaque\nConcrete vault construction\nComplete burial service (ceremony master, tent, chairs, coffin stand, burial, sealing of slabs with cement)"
    },
    {
      image: "./image/sistema_de_nichos.jpg",
      titleEs: "Sistema de Nichos",
      titleEn: "Niche System",
      descriptionEs: "Capacidad para 3 urnas de cenizas\nAcabados en mármol\nEspacio a perpetuidad de 25 × 25 × 60 cm",
      descriptionEn: "Capacity for 3 ash urns\nMarble finishes\nPerpetual space of 25 × 25 × 60 cm"
    }
  ];
  

const PlanesSeccion = () => {
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
    <section id="Planes" ref={sectionRef} className={`${styles.section} ${styles.fadeInSection}`}>
      {data.map((item, index) => (
        <TarjeraCementerioContainer
          key={index}
          image={item.image}
          titleEs={item.titleEs}
          titleEn={item.titleEn}
          descriptionEs={item.descriptionEs}
          descriptionEn={item.descriptionEn}
          isEnglish={ingles}
        />
      ))}
    </section>
  );
};

export default PlanesSeccion;
