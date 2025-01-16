import styles from "./css/tarjeraCementerio.module.css";

const TarjeraCementerioContainer = ({ image, titleEs, titleEn, descriptionEs, descriptionEn, isEnglish }) => {
  const descriptionList = (isEnglish ? descriptionEn : descriptionEs).split("\n");

  return (
    <div className={styles.card}>
      <img src={image} alt={isEnglish ? titleEn : titleEs} className={styles.cardImage} />
      <h3 className={styles.cardTitle}>{isEnglish ? titleEn : titleEs}</h3>
      <ul className={styles.cardDescription}>
        {descriptionList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button className={styles.cardButton}>
        {isEnglish ? "Choose Plan" : "Elegir plan"}
      </button>
    </div>
  );
};

export default TarjeraCementerioContainer;
