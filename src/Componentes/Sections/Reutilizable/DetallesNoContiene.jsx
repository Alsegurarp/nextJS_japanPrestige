import React from "react";
import Image from "next/image";
import styles from './detallesNoContiene.module.css';

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

export default function DetallesNoContiene({icon, title, index}) {
    const iconSrc = getSrcValue(icon);

    return (
    <div className={styles.containerStyle} data-aos="fade-up" data-aos-delay={index * 10} data-aos-duration="100">
        <div style={{marginBottom: "10px"}}>
            {iconSrc && <Image src={iconSrc} alt={title} width={48} height={48} className={styles.iconStyle} loading="lazy" />}
        </div>
        <p className={styles.titleStyle}>{title}</p>
    </div>
    );
}





          