import React from 'react'
import Image from 'next/image';
import styles from "./StepCard.module.css";

const StepCard = ({ number, title, description, alt}) => {
    // Extract src from imported image object or use as-is if it's already a string
    const getSrcValue = (img) => {
      if (!img) return null;
      if (typeof img === 'object' && img.src) {
        return img.src;
      }
      if (typeof img === 'string') {
        return img;
      }
      return null;
    };

    const numberSrc = getSrcValue(number);

    return (
      <div className={styles.containerStyle}>
        <div className={styles.numberContainer}>
          {numberSrc && <Image src={numberSrc} alt={alt} width={72} height={72} />}
        </div>
        <div className={styles.titleContainer}>
          <p className={styles.titleStyle}>{title}</p>
        </div>
        <div className={styles.paragraphContainer}>
          <p className={styles.descriptionStyle}>{description}</p>
        </div>
      </div>
    );
  };

export default StepCard; 