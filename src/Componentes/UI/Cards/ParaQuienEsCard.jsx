import Link from "next/link";
import Image from "next/image";
import styles from "./ParaQuienEsCard.module.css";

// Helper to extract src from imported images
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

// .card_container.reverse

export default function ParaQuienEsCard({ title, text, image, cat, reverse = false, index = 0 }) {
  // Extract src from imported image objects
  const desktopSrc = getSrcValue(image.desktop);
  
  return (
    <div className={`${styles.card_container} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.card_text}>
        <div className={styles.cardContenidoStyle}>
          <h2 className={styles.cardContainerh2} style={{ fontFamily: "nohemi" }}>{title}</h2>
          <p className={styles.cardContainerP} style={{ fontFamily: "nohemi" }}>{text}</p>
          <Link className='buttonCATcaracteristicas' href="/contacto">
            {cat}
          </Link>

        </div>
      </div>
      <div className={styles.card_image}>
        {desktopSrc && (
          <Image
            src={desktopSrc}
            alt={`Imagen de ${title}`}
            width={600}
            height={400}
            loading={index === 0 ? "eager" : "lazy"}
            priority={index === 0}
            className={styles.cardImageContent}
          />
        )}
      </div>
    </div>
  );
}