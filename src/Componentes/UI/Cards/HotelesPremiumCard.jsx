import styles from './HotelesPremiumCard.module.css';

export default function HotelesPremiumCard({icon, title, text, fade}) {

  return (
    <div className={styles.containerStyle} data-aos={fade}>
      <img src={icon} alt="Hotel Icon" className={styles.iconStyle} />

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