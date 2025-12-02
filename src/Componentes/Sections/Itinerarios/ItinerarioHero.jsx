'use client';

import React from 'react'
import Image from 'next/image';
import itinerariosViajeRutas from '../../../assets/icono-itinerarios-viaje-rutas.svg';

import japanPremium from '../../../assets/templo-yasukuni-tokio-japon-atardecer.webp';
import styles from './ItinerariosHero.module.css';

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

const data = [
  {title: itinerariosViajeRutas,
    image: japanPremium,
  }]


export default function ItinerarioHero(){

  return(
    <>
      {data.map((s) => (
            <Hero
              image={s.image}
              title={s.title}
              key={s.title}/>
        ))}
    </>
  )
}

function Hero(props){
  const imageSrc = getSrcValue(props.image);
  const iconSrc = getSrcValue(itinerariosViajeRutas);

  return(
    <>
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
        <div className={styles.contenidoBeneficiosItinerariosHeroItinerario} style={{position: 'relative', zIndex: 2}}>
            <div className={styles.titlePlusSubtitleHero} data-aos="fade-right">
              {iconSrc && <Image className={styles.itinerariosImagenHero} src={iconSrc} alt="Ícono de Itinerarios de Viaje - Rutas y Experiencias Turísticas" width={80} height={80} />}
            </div>
        </div>
      </div>
        <div className={styles.stepsContainerStyleHero}>
          <ItinerariesCard number="+15" titulo="Diferentes Itinerarios" id={1} />
          <ItinerariesCard number="+30,750" titulo="Clientes Satisfechos" id={2} />
          <ItinerariesCard number="+20" titulo="Años de Alta Especialización" id={3} />
          <ItinerariesCard number="+10,435,600" titulo="Millas Recorridas al Año" id={4} />
        </div>
    </>
  )

}

function ItinerariesCard({number, titulo, id}) {
  return (
    <div className={styles.itinerarioCardStyleContainer} style={{fontFamily: "nohemi"}} data-aos="fade-up" data-aos-delay={`${id}0`} >
      <div className={styles.numeros}>{number}</div>
      <div className={styles.textos}><p>{titulo}</p></div>
    </div>
  );
};

