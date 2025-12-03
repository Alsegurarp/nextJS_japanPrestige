'use client';
import Image from 'next/image';
import styles from './HotelesPremiumCard.module.css';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

// Helper function to extract src from imported images
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

export default function HotelesPremiumCard({ icon, title, text, fade = 'fade-up' }) {
  const iconSrc = getSrcValue(icon);
  const ref = useScrollAnimation({ animation: fade });

  return (
    <div ref={ref} className={styles.containerStyle}>
      {iconSrc && <Image src={iconSrc} alt="Hotel Icon" width={48} height={48} className={styles.iconStyle} />}

      <div className={styles.contentStyle}>
        <span className={styles.titleStyle}>{title}</span>
        <div className={styles.underlineStyle}></div>
        <p className={styles.descriptionStyle}>
          {text}
        </p>
      </div>
    </div>
  );
}