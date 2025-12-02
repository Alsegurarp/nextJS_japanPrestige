import { Link } from "react-router-dom";
import styles from "./ParaQuienEsCard.module.css";


// .card_container.reverse

export default function ParaQuienEsCard({ title, text, image, cat, reverse = false, index = 0 }) {
    return (
      <div className={`${styles.card_container} ${reverse ? styles.reverse : ''}`}>
        <div className={styles.card_text}>
          <div className={styles.cardContenidoStyle}>
              <h2 className={styles.cardContainerh2} style={{fontFamily: "nohemi"}}>{title}</h2>
              <p className={styles.cardContainerP} style={{fontFamily: "nohemi"}}>{text}</p>
            <Link className='buttonCATcaracteristicas' to="/contacto">
            {cat}
            </Link>
            
          </div>
        </div>
        <div className={styles.card_image}>
        <picture>
          <source
            srcSet={image.mobile}
            media="(max-width: 768px)"
            type="image/webp"
          />
          <source
            srcSet={image.desktop}
            media="(min-width: 769px)"
            type="image/webp"
          />
          <img
            src={image.desktop}
            alt={`Imagen de ${title}`}
            loading="lazy"
            decoding="async"
            fetchPriority={index === 0 ? "high" : "auto"} // optional: prioritize the first card
          />
        </picture>
      </div>
      </div>
    );
  }