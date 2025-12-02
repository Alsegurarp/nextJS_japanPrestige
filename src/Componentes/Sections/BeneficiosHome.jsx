import React, { useMemo } from 'react';
import vista from "../../assets/indexImagenes/sentido_y_proposito.webp";
import pareja from "../../assets/indexImagenes/elegancia_y_armonia.webp";
import bonsai from "../../assets/indexImagenes/detalle_pensado_para_ti.webp";

import MediaFeatureList from "../Sections/MediaFeature/MediaFeatureList.jsx";

const BeneficiosHome = React.memo(function BeneficiosHome() {
  // Memoize data array to prevent recreation on each render
  const data = useMemo(() => [
    {
      title: "Lujo con sentido y proposito",
      subtitle: "JAPÓN PREMIUM®",
      text: "Explorar Japón se convierte...",
      image: vista,
      altText: "Viajero contemplando el Monte Fuji...",
      objectPosition: "50% 50%",
    },
    {
      title: "Explorar con elegancia y armonía",
      subtitle: "JAPÓN PREMIUM®",
      text: "Este no es un viaje más...",
      image: pareja,
      altText: "Turista disfrutando...",
      objectPosition: "40% 50%",
    },
    {
      title: "Cada detalle pensado para ti",
      subtitle: "JAPÓN PREMIUM®",
      text: "Todo está diseñado...",
      image: bonsai,
      altText: "Experiencia cultural con maestro bonsái...",
      objectPosition: "70% 50%",
    },
  ], []);

  return <MediaFeatureList items={data} />;
});

export default BeneficiosHome;
