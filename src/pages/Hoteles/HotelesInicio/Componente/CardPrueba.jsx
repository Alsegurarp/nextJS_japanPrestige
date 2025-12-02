import  React, { useState } from 'react';
import styles from './CardPrueba.module.css';
import { Link } from 'react-router-dom';

export default function CardPrueba({ title, image, description, className, style, to }) {
  /* eslint-disable */
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Link to={to}>
      <div
        className={`${styles.card} ${styles.fadeIn} ${className || ''}`}
        style={style}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Image with overlay */}
        <div className={styles.imageContainer}>
          <img
            src={image}
            alt={title}
            className={styles.image}
          />
          
          {/* Gradient overlay */}
          <div className={styles.overlay} />
          
          {/* Golden border animation */}
          <div className={styles.hoverBorder}>
            <div className={styles.borderGlow} />
          </div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.titleContainer}>
            <h3 className={styles.title}>
              {title}
            </h3>
          </div>

          {/* Expandable description */}
          <div className={styles.description}>
            <p className={styles.descriptionText}>
              {description || `Explore the wonders of ${title} with our premium hotel selection and exclusive experiences.`}
            </p>
            
            <div className={styles.exploreContainer}>
              <span className={styles.exploreText}>
                Explora los hoteles
              </span>
              <svg
                className={styles.exploreIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Scale effect background */}
        <div className={styles.scaleBackground} />
      </div>
    </Link>
  );
};