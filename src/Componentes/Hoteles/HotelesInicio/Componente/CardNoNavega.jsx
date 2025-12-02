'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './CardNoNavega.module.css';

export default function CardNoNavega({ title, image, description, className, style }) {
  /* eslint-disable */
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`${styles.card} ${styles.fadeIn} ${className || ''}`}
      style={style}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >

      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          className={styles.image}
          width={1080}
          height={1350}
          priority={false}
        />

        <div className={styles.overlay} />

        <div className={styles.hoverBorder}>
          <div className={styles.borderGlow} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>
            {title}
          </h3>
        </div>

        <div className={styles.description}>
          <p className={styles.descriptionText}>
            {description || `Explora las maravillas de ${title} con nuestra selección de hoteles premium y experiencias exclusivas.`}
          </p>
          <span>Japón</span>
          <span>{title}</span>
        </div>
      </div>
      <div className={styles.scaleBackground} />
    </div>
  );
};
