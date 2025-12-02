import React from 'react';
import styles from "./CardBlog.module.css";
import { Link } from 'react-router-dom';


const CardBlog = React.memo(function CardBlog({ infoCards }) {

  return (
    <>
      <div className={styles.caracteristicasConteinerMain}>

        <div className={styles.stepsContainerStyle}>
          {infoCards.map((card, i) => (
            <TravelCard
              to={card.to}
              key={i}
              title={card.title}
              image={card.image}
              imageAlt={card.imageAlt}
              subText={card.subText}
              index={i}
            />
          ))}
        </div>

      </div>
    </>
  )
});


function TravelCard({ title, image, imageAlt, subText, to, index }) {


  return (
    <Link to={to} style={{ textDecoration: 'none' }} data-aos="fade-up" data-aos-delay={10 * (index)} >
      <div className={styles.estiloDiv}>
        <img
          className={styles.imageCardStyle}
          src={image}
          alt={imageAlt}
        />
        <div className={styles.textCardStyle}>
          <h2
            className={styles.titleCard}
          > {title} </h2>
          <p
            className={styles.subTextCard}
          >
            {subText}
          </p>
        </div>
      </div>
    </Link>
  );
}




export default CardBlog;