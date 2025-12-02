'use client';
import React from 'react'
import Image from 'next/image';
import styles from "./CaracteristicasIcon.module.css";

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

export default function CaracteristicasIcon({icon, title, index}) {
    const iconSrc = getSrcValue(icon);

    return (
        <div className={styles.containerStyle} data-aos="fade-up" data-aos-delay={index * 100} data-aos-duration="100" suppressHydrationWarning>
            <div style={{marginBottom: "10px"}}>
                {iconSrc && <Image src={iconSrc} alt={title} className={styles.iconStyle} width={48} height={48} priority={false} />}
            </div>
            <p className={styles.titleStyle}>{title}</p>
        </div>
    )
}