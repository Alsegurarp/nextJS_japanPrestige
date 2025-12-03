'use client';

import './HeroSection.css';
import Image from 'next/image';
import React from 'react'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

import itinerariosViajeRutas from '../../assets/icono-itinerarios-viaje-rutas.svg';
import japanPrestige from '../../assets/itinerarios-japan-prestige.webp';

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
  {
    title: itinerariosViajeRutas,
    cat1: "Cotiza ahora ",
    cat2: "Whatsapp ",
    image: japanPrestige,
  }]


function Hero(props) {
  const imageSrc = getSrcValue(props.image);
  const iconSrc = getSrcValue(itinerariosViajeRutas);

  return (
    <div className='beneficiosContainerHero' style={{ position: 'relative' }}>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt="Mujer japonesa con kimono, participando en ceremonia tradicional, ideal para viajeros que buscan inmersión cultural"
          fill
          priority
          style={{ objectFit: 'cover' }}
          className='heroImg'
        />
      )}
      <div className='contenidoBeneficiosItinerariosHeroItinerario' style={{ position: 'relative', zIndex: 2 }}>
        <TitleSection />
        <div className='stepsContainerStyleHero'>
          <ItinerariesCard number="+50" titulo="Diferentes Itinerarios" id={1} />
          <ItinerariesCard number="+11,700" titulo="Clientes Satisfechos" id={2} />
          <ItinerariesCard number="+17" titulo="Años de Alta Especilización" id={3} />
          <ItinerariesCard number="+1,435,600" titulo="Millas Recorridas al Año" id={4} />
        </div>
      </div>
    </div>
  )
}

function TitleSection() {
  const ref = useScrollAnimation({ animation: 'fade-right' });
  const iconSrc = getSrcValue(itinerariosViajeRutas);

  return (
    <div ref={ref} className="titlePlusSubtitleHero">
      {iconSrc && <Image className='itinerariosImagenHero' src={iconSrc} alt="Ícono de Itinerarios de Viaje - Rutas y Experiencias Turísticas" width={80} height={80} />}
    </div>
  );
}

function ItinerariesCard({ number, titulo, id }) {
  const ref = useScrollAnimation({
    animation: 'fade-up',
    delay: id * 100
  });

  return (
    <div ref={ref} className="itinerarioCardStyleContainer" style={{ fontFamily: "HelveticaRegular" }}>
      <div style={styles.number}>{number}</div>
      <div style={styles.text}>{titulo}</div>
    </div>
  );
};

const styles = {
  number: {
    fontSize: '32px',
    fontWeight: '300',
  },
  text: {
    fontSize: '16px',
    marginTop: '8px',
    fontWeight: '200',
  },
};


const HeroSection = React.memo(function HeroSection() {
  return (
    <div>
      {data.map((s) => (
        <Hero
          image={s.image}
          title={s.title}
          cat1={s.cat1}
          cat2={s.cat2}
          key={s.title} />
      ))};
    </div>
  )
});

export default HeroSection