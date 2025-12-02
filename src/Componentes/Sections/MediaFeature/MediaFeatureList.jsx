import React, { useMemo } from 'react';
import MediaFeature from './MediaFeature.jsx';

import bonsaiDesktop from '../../../assets/indexImagenes/detalle_pensado_para_ti.webp';
import bonsaiMobile from '../../../assets/indexImagenes/mobile_detalle_pensado_para_ti.webp';
import parejaDesktop from '../../../assets/indexImagenes/elegancia_y_armonia.webp';
import parejaMobile from '../../../assets/indexImagenes/mobile_elegancia_y_armonia.webp';
import vistaDesktop from '../../../assets/indexImagenes/sentido_y_proposito.webp';
import vistaMobile from '../../../assets/indexImagenes/mobile_sentido_y_proposito.webp';



const MediaFeatureList = React.memo(function MediaFeatureList() {
    const data = useMemo(
    () => [
      {
        title: "Lujo con sentido y propósito",
        subtitle: "JAPÓN PREMIUM®",
        text: "Explorar Japón se convierte en una experiencia profunda...",
        image: {
          desktop: vistaDesktop,
          mobile: vistaMobile,
        },
        altText: "Viajero contemplando el Monte Fuji al amanecer",
        objectPosition: "50% 50%",
      },
      {
        title: "Explorar con elegancia y armonía",
        subtitle: "JAPÓN PREMIUM®",
        text: "Este no es un viaje más, es un encuentro con la belleza...",
        image: {
          desktop: parejaDesktop,
          mobile: parejaMobile,
        },
        altText: "Turista disfrutando de la armonía japonesa",
        objectPosition: "40% 50%",
      },
      {
        title: "Cada detalle pensado para ti",
        subtitle: "JAPÓN PREMIUM®",
        text: "Todo está diseñado con la precisión y el cariño japonés...",
        image: {
          desktop: bonsaiDesktop,
          mobile: bonsaiMobile,
        },
        altText: "Maestro bonsái cuidando una planta milenaria",
        objectPosition: "70% 50%",
      },
    ],
    []
  );
  return (
    <div>
      {data.map((s) => (
        <MediaFeature
          image={s.image}
          altText={s.altText}
          title={s.title}
          subtitle={s.subtitle}
          text={s.text}
          key={s.title}
          objectPosition={s.objectPosition}
        />
      ))}
    </div>
  );
})

export default MediaFeatureList;