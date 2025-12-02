import React from 'react'
import styles from "./StepCard.module.css";

const StepCard = ({ number, title, description, alt}) => {

    return (
      <div className={styles.containerStyle}>
        <div className={styles.numberContainer}>
          <img src={number} alt={alt} style={{ width: '72px'}} />
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