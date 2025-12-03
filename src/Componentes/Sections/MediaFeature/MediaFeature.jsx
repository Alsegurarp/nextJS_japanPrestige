import React from "react";
import Image from "next/image";
import styles from "./MediaFeature.module.css";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

export default function MediaFeature(props) {
  // Extract src from imported image object or use as-is if it's already a string
  const getSrcValue = (img) => {
    if (!img) return null;
    // Handle nested objects with desktop/mobile properties
    if (typeof img === 'object') {
      // If it has src property (imported image)
      if (img.src) {
        return img.src;
      }
      // If it has desktop property (structure from MediaFeatureList)
      if (img.desktop) {
        const desktopImg = img.desktop;
        if (typeof desktopImg === 'object' && desktopImg.src) {
          return desktopImg.src;
        }
        if (typeof desktopImg === 'string') {
          return desktopImg;
        }
      }
    }
    // If it's a string path, return it directly
    if (typeof img === 'string') {
      return img;
    }
    return null;
  };

  const imageSrc = getSrcValue(props.image);

  const ref = useScrollAnimation({ animation: 'fade-up' });

  return (
    <div className={styles.beneficiosContainer}>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={props.altText}
          fill
          loading="lazy"
          className={styles.beneficioImage}
          style={{ objectPosition: props.objectPosition || "50% 50%" }}
        />
      )}

      <div ref={ref} className={styles.contenidoBeneficios}>
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
