import React from "react";
import Image from "next/image";
import styles from "./TestimonioCard.module.css";

export default function TestimonioCard({
  id,
  src,
  alt,
  textMinimo,
  nombre,
  onQuestionClick,
  isSelected
}) {
  // Removed IntersectionObserver to prevent viewport interference

  // Click + keyboard handlers to notify parent
  const handleClick = () => onQuestionClick(id);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onQuestionClick(id);
    }
  };

  // Render card
  return (
    <div
      className={`${styles.containerTestimonio} ${styles.visible} ${isSelected ? styles.selected : ""}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="option"
      aria-selected={isSelected}
      aria-label={`Ver testimonio completo de ${nombre}`}
    >
      <div className={styles.imageContainerTestimonio}>
        <Image
            src={src}
            alt={alt}
            className={styles.imagenEstiloTestimonio}
            width={150}
            height={150}
            priority={false}
        />
      </div>
      <div className={styles.contendorTestimonioTextos}>
        <h3 className={styles.nombresTestimonios}>{nombre}</h3>
        <p className={styles.textosTestimonio}>{textMinimo}</p>
      </div>
    </div>
  );
}
