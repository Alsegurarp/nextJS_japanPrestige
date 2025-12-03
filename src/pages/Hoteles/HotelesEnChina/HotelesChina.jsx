'use client';

import React, { useState, useEffect, Suspense, lazy } from 'react';
import HeroSection from '../../../Componentes/Sections/HeroSection.jsx';
import HeroImage from '../../../assets/portadas-nuevas-19-sep/hotelesPortadas/portada_hoteles_en_china.webp';
import InView from '../../../Componentes/Layout/InView/InView';
const Buscador = lazy(() => import('../../../Componentes/Hoteles/Carrucel/Buscador.jsx'));

import LetrasDoradasResponsive from '../../../assets/titulosDorados/hotelesSection/hoteleschinamovil.svg';
import LetrasDoradasDesktop from '../../../assets/titulosDorados/hotelesSection/hoteleschina.svg';

// HotelesDeItinerarios/Japon-y-China/
import hotel1 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/China/Hotel_Jinglun_Pekin_China_Japon_Premium.webp';
import hotel2 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/China/Hotel_Kuntai_Royal_Pekin_China_Japon_Premium.webp';

import hotel3 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/China/Hotel_Courtyard_By_Marriott_Shangai_Xuijahui_China_Japon_Premium.webp';
import hotel4 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/China/Hotel_Jin_Jiang_Tower_Shanghai_China_Japon_Premium.webp';
import hotel5 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/China/Hotel_Sunrise_On_The_Bund_Shanghai_China_Japon_Premium.webp';

import hotel6 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/China/Hotel_Grand_Nobel_Xian_China_Japon_Premium.webp';
import hotel7 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/China/Hotel_Tianyu_Gloria_Plaza_Xian_China_Japon_Premium.webp';

import imagen1 from '../../../assets/Itinerarios/buscadorImagenes/china/pekin_china.webp';
import imagen2 from '../../../assets/Itinerarios/buscadorImagenes/china/shangai_china.webp';
import imagen3 from '../../../assets/Itinerarios/buscadorImagenes/china/xian_china.webp';

//Itinerarios/HotelesDeItinerarios/Japon-y-China/

import NoNavegaSection from '../../../Componentes/Hoteles/HotelesInicio/Componente/NoNavegaSection.jsx';
import FlyingButton from '../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';


const data = [
  {
    text: 'Explora nuestra selección exclusiva de alojamientos en ciudades emblemáticas como Pekín, Shangái, Xi\'an. Estos hoteles no solo ofrecen comodidad superior y diseño elegante, sino que también se encuentran ubicados en puntos estratégicos para que vivas cada ciudad en su máxima expresión',
    image: HeroImage,
    altImg: "Vista frontal del Templo Yasukuni en Tokio, Japón, con cielo nublado al atardecer.",
    letrasDoradasResponsive: LetrasDoradasResponsive,
    LetrasDoradasDesktop: LetrasDoradasDesktop,
  }];

const destinations = [
  {
    titulo: "Pekín",
    card: [
      {
        title: "Hotel Jinglun",
        image: hotel1,
        description: "Descubre la historia milenaria de la Ciudad Prohibida y la majestuosidad de la Gran Muralla desde la capital china."
      },
      {
        title: "Hotel Kuntai Royal",
        image: hotel2,
        description: "Hospédate en el corazón de Pekín, cerca de la Plaza de Tiananmén y el Templo del Cielo."
      }
    ]
  },
  {
    titulo: "Shanghái",
    card: [
      {
        title: "Hotel Courtyard Shanghai Xujiahui",
        image: hotel3,
        description: "Explora el distrito moderno de Xujiahui y disfruta de la vibrante vida nocturna de Shanghái."
      },
      {
        title: "Hotel Jin Jiang Tower",
        image: hotel4,
        description: "Disfruta de vistas panorámicas al skyline desde uno de los hoteles más icónicos de la ciudad."
      },
      {
        title: "Hotel Sunrise Ont The Bund",
        image: hotel5,
        description: "Vive el contraste entre la arquitectura colonial del Bund y la modernidad de Pudong."
      }
    ]
  },
  {
    titulo: 'Xi\'an',
    card: [
      {
        title: 'Hotel Grand Noble Xi\'an',
        image: hotel6,
        description: "Descubre los Guerreros de Terracota y pasea por las murallas históricas de esta antigua capital china."
      },
      {
        title: 'Hotel Tianyu Gloria Plaza Xi\'an',
        image: hotel7,
        description: 'Hospédate en el centro de Xi\'an y conecta con siglos de cultura e historia china.'
      }
    ]
  }
];

const cardsJapon = [
  {
    title: 'Pekín',
    country: "China",
    image: imagen1
  },
  {
    title: 'Shanghái',
    country: "China",
    image: imagen2
  },
  {
    title: 'Xi\'an',
    country: "China",
    image: imagen3
  }
];




function HotelesChina() {
  const [selectedCiudad, setSelectedCiudad] = useState(null);

  // Normalizar nombres 
  const CANON = { Tokyo: 'Tokio', nachikatsura: 'nachikatsuura' };
  const canon = (name) => CANON[name] || name;

  const handleCardClick = (title) => {
    const normalizado = canon(title);
    setSelectedCiudad(normalizado);
  };

  const clearSelection = () => setSelectedCiudad(null);

  const destinoSeleccionado = selectedCiudad
    ? destinations.find((d) => d.titulo.toLowerCase() === selectedCiudad.toLowerCase())
    : null;

  useEffect(() => {
    document.title = `Hoteles China | Japón PREMIUM®`;
  }, []);

  return (
    <>
      <FlyingButton />
      <HeroSection data={data} />
      <InView>
        <Suspense>
          <Buscador
            cards={cardsJapon}
            onCardClick={handleCardClick}
            active={selectedCiudad}
            onClear={clearSelection}
          />
          <div id="resultados-hoteles">
            {destinoSeleccionado ? (
              <NoNavegaSection destinations={destinoSeleccionado} key={destinoSeleccionado.titulo} />
            ) : (
              destinations.map((d) => <NoNavegaSection destinations={d} key={d.titulo} />)
            )}
          </div>
        </Suspense>
      </InView>
    </>
  )
}

export default HotelesChina

