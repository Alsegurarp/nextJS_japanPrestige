import Image from 'next/image';
import styles from './HotelesPremiumCard.module.css';

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

export default function HotelesPremiumCard({icon, title, text, fade}) {
  const iconSrc = getSrcValue(icon);

  return (
    <div className={styles.containerStyle} data-aos={fade}>
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