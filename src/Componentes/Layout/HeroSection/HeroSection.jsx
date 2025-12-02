import './HeroSection.css';

import itinerariosViajeRutas from '../../assets/icono-itinerarios-viaje-rutas.svg';
import japanPrestige from '../../assets/itinerarios-japan-prestige.webp';



const data = [
  {title: itinerariosViajeRutas,
    cat1: "Cotiza ahora ",
    cat2: "Whatsapp ",
    image: japanPrestige,
  }]


function Hero(props){



   return(
    <div className='beneficiosContainerHero' style={{backgroundImage: `url(${props.image})`}} alt="Mujer japonesa con kimono, participando en ceremonia tradicional, ideal para viajeros que buscan inmersión cultural">
      <div className='contenidoBeneficiosItinerariosHeroItinerario'>
          <div className="titlePlusSubtitleHero" data-aos="fade-right">
            <img className='itinerariosImagenHero' src={itinerariosViajeRutas} alt="Ícono de Itinerarios de Viaje - Rutas y Experiencias Turísticas" />
          </div>
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

function ItinerariesCard({number, titulo, id}) {
  return (
    <div className="itinerarioCardStyleContainer" style={{fontFamily: "HelveticaRegular"}} data-aos="fade-up" data-aos-delay={`${id}00`} >
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


import React from 'react'

const HeroSection = React.memo(function HeroSection() {


    return (
    <div>
      {data.map((s) => (
            <Hero
              image={s.image}
              title={s.title}
              cat1={s.cat1}
              cat2={s.cat2}
              key={s.title}/>
        ))};
    </div>
  )
});

export default HeroSection
