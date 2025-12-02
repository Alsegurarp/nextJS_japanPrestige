import React, { useMemo } from "react";
import comidaDesktop from '../../../assets/indexImagenes/viajeros_exigentes.webp';
import comidaMobile from '../../../assets/indexImagenes/mobile_viajeros_exigentes.webp';
import salaDesktop from '../../../assets/indexImagenes/viajar_sin_preocuparse_por_nada.webp';
import salaMobile from '../../../assets/indexImagenes/mobile_viajar_sin_preocuparse_por_nada.webp';
import fushimiDesktop from '../../../assets/indexImagenes/amantes_del_diseno_y_el_arte.webp';
import fushimiMobile from '../../../assets/indexImagenes/mobile_amantes_del_diseno_y_el_arte.webp';

import ParaQuienEsCard from '../../UI/Cards/ParaQuienEsCard.jsx';


const ParaQuienEs = React.memo(function ParaQuienEs() {

    // Memoize informacion array to prevent recreation on each render
    const informacion = useMemo(
    () => [
      {
        title: "Para viajeros que valoran cada detalle",
        text: "En nuestros paquetes a Japón cuidamos lo que otros pasan por alto: atención personalizada, hospedajes excepcionales y experiencias exclusivas.",
        image: {
          mobile: comidaMobile,
          desktop: comidaDesktop,
        },
        cat: "Diseña tu viaje a Japón",
      },
      {
        title: "Para quienes desean viajar sin preocuparse",
        text: "Con nuestros tours a Japón conectas con lo esencial y disfrutas sin estrés.",
        image: {
          mobile: salaMobile,
          desktop: salaDesktop,
        },
        cat: "Cotiza tu tour a Japón",
      },
      {
        title: "Para amantes del arte, diseño y tradición",
        text: "Nuestros viajes a Japón desde México integran jardines zen, arquitectura tradicional, museos, templos y artesanía. Japón es arte vivo.",
        image: {
          mobile: fushimiMobile,
          desktop: fushimiDesktop,
        },
        cat: "Reserva tu viaje a Japón",
      },
    ],
    []
  );


    return(
        <>
        {informacion.map((info, index) => (
            <ParaQuienEsCard 
            key={index}
            reverse={index === 1}
            title={info.title}
            text={info.text} 
            image={info.image} 
            cat={info.cat}
            index={index}/>
            ))} 
        </>
    )
})


export default ParaQuienEs;