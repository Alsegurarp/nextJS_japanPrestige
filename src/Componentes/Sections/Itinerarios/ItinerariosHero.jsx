'use client';

import React from 'react';
import Image from 'next/image';
import styles from './ItinerariosHero.module.css';
import itinerariosViajeRutas from '../../../assets/icono-itinerarios-viaje-rutas.svg';

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

// import japanPremium from 'FAVICON.svg';
const japanPremium = '/mobile_logo_japon.svg';

const data = [{
  title: itinerariosViajeRutas,
  cat1: "Cotiza ahora ",
  cat2: "Whatsapp ",
  image: japanPremium,
}]

const ItinerariosHero = React.memo(function ItinerariosHero() {

  return (
    <>
      {data.map((s) => (
        <Hero
          image={s.image}
          title={s.title}
          cat1={s.cat1}
          cat2={s.cat2}
          key={s.title} />
      ))}
    </>
  )
});

export default ItinerariosHero;


function Hero(props) {
  const imageSrc = getSrcValue(props.image);
  const iconSrc = getSrcValue(itinerariosViajeRutas);

  return (
    <div className={styles.beneficiosContainerHero} style={{position: 'relative'}}
      role="img"
      aria-label="Mujer japonesa con kimono, participando en ceremonia tradicional, ideal para viajeros que buscan inmersión cultural">
      {imageSrc && (
        <Image 
          src={imageSrc}
          alt="Mujer japonesa con kimono, participando en ceremonia tradicional, ideal para viajeros que buscan inmersión cultural"
          fill
          priority
          style={{objectFit: 'cover'}}
          className={styles.heroImg}
        />
      )}
      <div className={styles.contenidoBeneficiosItinerarios} style={{position: 'relative', zIndex: 2}}>
        <div data-aos="fade-right">
          {iconSrc && <Image className={styles.itinerariosImagenHero} src={iconSrc} alt="Ícono de Itinerarios de Viaje - Rutas y Experiencias Turísticas" width={80} height={80} />}
        </div>
        <div className={styles.stepsContainerStyleHero}>
          <ItinerariesCard number="+50" titulo="Diferentes Itinerarios" id={1} />
          <ItinerariesCard number="+11,700" titulo="Clientes Satisfechos" id={2} />
          <ItinerariesCard number="+17" titulo="Años de Alta Especilización" id={3} />
          <ItinerariesCard number="+1,435,600" titulo="Millas Recorridas al Año" id={4} />
        </div>
      </div>
    </div>
  )

}

function ItinerariesCard({ number, titulo, id }) {
  return (
    <div className={styles.itinerarioCardStyleContainer} style={{ fontFamily: "nohemi" }} data-aos="fade-up" data-aos-delay={`${id}0`} >
      <div className={styles.numeros}>{number}</div>
      <div className={styles.textos}>{titulo}</div>
    </div>
  );
};