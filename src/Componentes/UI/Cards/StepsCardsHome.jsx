import React, { useMemo } from 'react'
import styles from "./StepsCardsHome.module.css";

import StepCard from './StepCard.jsx'

import IconNo1 from '../../../assets/indexImagenes/Numero_1_Japon_Premium.svg';
import IconNo2 from '../../../assets/indexImagenes/Numero_2_Japon_Premium.svg';
import IconNo3 from '../../../assets/indexImagenes/Numero_3_Japon_Premium.svg';


const StepsCardsHome = React.memo(function StepsCardsHome(){

    // Memoize pasos array to prevent recreation on each render
    const pasos = useMemo(() => [
      {number: IconNo1,
        title: "Conversemos sobre tu sueño",
        text: "Nos tomamos el tiempo para entender lo que deseas en tu viaje.",
        id:1,
        alt: "Paso 1: Conversemos sobre tu sueño"
      },{
        number: IconNo2,
        title: "Creamos tu itinerario ideal",
        text: "Seleccionamos experiencias únicas y diseñamos un itinerario a tu medida.",
        id:2,
        alt: "Paso 2: Creamos tu itinerario ideal"
      },{
        number: IconNo3,
        title: "Vive tu viaje con Japón PREMIUM®",
        text: "Revisamos cada detalle con precisión para que tú solo disfrutes.",
        id:3,
        alt: "Paso 3: Vive tu viaje con Japón PREMIUM®"
      } 
    ], [])

  return (
    <section className={styles.sectionStyle}>
      <div className={styles.headingStyle}>Así comienza tu viaje transformador a Japón</div>
      <div className={styles.stepsContainerStyle}>
        
        {pasos.map((pasos, index) => 
        <StepCard
          number={pasos.number}
          title={pasos.title}
          description={pasos.text}
          key={pasos.id}
          index={index}
          alt={pasos.alt}
        />)}
      </div>
    </section>
  );
})



export default StepsCardsHome;

