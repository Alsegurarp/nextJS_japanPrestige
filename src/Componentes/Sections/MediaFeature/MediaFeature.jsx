import React from "react";
import styles from "./MediaFeature.module.css";

export default function MediaFeature(props) {
  return (
    <div className={styles.beneficiosContainer}>
      <picture>
        <source srcSet={props.image.mobile} media="(max-width: 768px)" />
        <source srcSet={props.image.desktop} media="(min-width: 769px)" />
        <img
          src={props.image.desktop}
          alt={props.altText}
          loading="lazy"
          className={styles.beneficioImage}
          style={{ objectPosition: props.objectPosition || "50% 50%" }}
        />
      </picture>

      <div className={styles.contenidoBeneficios} data-aos="fade-up">
        <div className={styles.titlePlusSubtitle}>
          <h2 className={styles.title}>{props.title}</h2>
          {props.subtitle && (
            <span className={styles.subtitle}>{props.subtitle}</span>
          )}
        </div>
        {props.text && <p className={styles.text}>{props.text}</p>}
      </div>
    </div>
  );
}
