import React, {useState} from 'react'
import styles from './HotelCard.module.css';

export default function HotelCard({ country = 'Japón',location, hotelName, imageUrl, className = '', style, alt}) {
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
            <img
              src={imageUrl}
              alt={alt}
              className={styles.image}
            />
            
            <div className={styles.overlay} />
            
            <div className={styles.hoverBorder}>
              <div className={styles.borderGlow} />
            </div>
          </div>
          
          <div className={styles.content}>
            <div className={styles.titleContainer}>
              <h3 className={styles.title}>
                {hotelName}
              </h3>
            </div>
            
            <div className={styles.description}>
              <p className={styles.descriptionText}>
                {`Explora las maravillas de ${hotelName} con nuestra selección de hoteles premium y experiencias exclusivas.`}
              </p>
              <span>{country}</span>
              <span>{location}</span>
            </div>
          </div>
          <div className={styles.scaleBackground} />
        </div>
  );
}