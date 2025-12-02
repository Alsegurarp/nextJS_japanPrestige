'use client';

import React, { useState, useEffect, Suspense, lazy } from 'react';
import HeroSection from '../../../Componentes/Sections/HeroSection.jsx';
import HeroImage from '../../../assets/portadas-nuevas-19-sep/hotelesPortadas/portada_hoteles_en_tailandia.webp';

import LetrasDoradasResponsive from '../../../assets/titulosDorados/hotelesSection/hotelestailandiamovil.svg';
import LetrasDoradasDesktop from '../../../assets/titulosDorados/hotelesSection/hotelestailandia.svg';

import hotel1 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Tailandia/Hotel_COMO_Metropolitan_Bangkok_Tailandia_Japon_Premium.webp';
import hotel2 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Tailandia/Hotel_Holiday_Inn_Silom_Bangkok_Japon_Premium.webp';
import hotel3 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Tailandia/Hotel_Pullman_Bangkok_G_Tailandia_Japon_Premium.webp';
import hotel4 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Tailandia/Hotel_Centara_Riverside_Chiang_Mai_Tailandia_Japon_Premiun.webp';
import hotel5 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Tailandia/Hotel_Dusit_D2_Chiang_Mai_Tailandia_Japon_Premium.webp';
import hotel6 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Tailandia/Hotel_Gran_Vista_Hanoi_Chiang_Rai_Tailandia_Japon_Premium.webp';
import hotel7 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Tailandia/Hotel_The_Imperial_River_House_Chiang_Rai_TailandiaJapon_Premium.webp';
import hotel8 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Tailandia/Hotel_Resotel_Rio_Kwai_Kanchanburi_Tailandia_Japon_Premium.webp';
import hotel9 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Tailandia/Hotel_And_Convention_Centre_Topland_Phitsanulok_Tailandia_Japon_Premium.webp';

import imagen1 from '../../../assets/Itinerarios/buscadorImagenes/tailandia/bangkok_tailandia.webp';
import imagen2 from '../../../assets/Itinerarios/buscadorImagenes/tailandia/chiang_mai_tailandia.webp';
import imagen3 from '../../../assets/Itinerarios/buscadorImagenes/tailandia/chiang_rai_tailandia.webp';
import imagen4 from '../../../assets/Itinerarios/buscadorImagenes/tailandia/kanchanaburi_tailandia.webp';
import imagen5 from '../../../assets/Itinerarios/buscadorImagenes/tailandia/Phitsanulok_tailandia.webp';

import NoNavegaSection from '../../../Componentes/Hoteles/HotelesInicio/Componente/NoNavegaSection.jsx';
const Buscador = lazy(() => import('../../../Componentes/Hoteles/Carrucel/Buscador.jsx'));
import InView from '../../../Componentes/Layout/InView/InView.jsx';
import FlyingButton from '../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';


const data = [
  {
    text: "Explora nuestra selección exclusiva de alojamientos en ciudades emblemáticas como Bangkok, Chiang - Mai, Chiang - Rai, y más. Estos hoteles no solo ofrecen comodidad superior y diseño elegante, sino que también se encuentran ubicados en puntos estratégicos para que vivas cada ciudad en su máxima expresión",
    image: HeroImage,
    altImg: "Vista frontal del Templo Yasukuni en Tokio, Japón, con cielo nublado al atardecer.",
    letrasDoradasResponsive: LetrasDoradasResponsive,
    LetrasDoradasDesktop: LetrasDoradasDesktop,
  }];

const destinations = [
  {
    titulo: "Bangkok",
    card: [
      {
        title: "Hotel Como Metropolitan Bangkok",
        image: hotel1,
        description: "Descubre templos majestuosos, y disfrutas de la vibrante vida nocturna de Bangkok."
      },
      {
        title: "Hotel Holiday Inn Bangkok Silom",
        image: hotel2,
        description: "Hospédate en el centro comercial de la ciudad y explora mercados callejeros, templos y modernos centros comerciales."
      },
      {
        title: "Hotel Pullman Bangkok G",
        image: hotel3,
        description: "Disfruta del lujo contemporáneo cerca de Silom y vive la energía cosmopolita de la capital tailandesa."
      }
    ]
  },
  {
    titulo: "Chiang Mai",
    card: [
      {
        title: "Hotel Centara Riverside",
        image: hotel4,
        description: "Explora la ciudad antigua rodeada de murallas, templos budistas y la naturaleza de las montañas del norte."
      },
      {
        title: "Hotel Dusit D2 Chiang Mai",
        image: hotel5,
        description: "Hospédate en el corazón de Chiang Mai y disfruta de mercados nocturnos, cultura local y tradiciones centenarias."
      }
    ]
  },
  {
    titulo: "Chiang Rai",
    card: [
      {
        title: "Hotel Grand Vista Hanoi",
        image: hotel6,
        description: "Visita el famoso Templo Blanco, el Triángulo de Oro y sumérgete en paisajes montañosos únicos."
      },
      {
        title: "Hotel The Imperial River House",
        image: hotel7,
        description: "Relájate junto al río Kok con vistas espectaculares y acceso a maravillas culturales de Chiang Rai."
      }
    ]
  },
  {
    titulo: "Kanchanaburi",
    card: [
      {
        title: "Hotel Resotel River Kwai",
        image: hotel8,
        description: "Conoce el icónico Puente sobre el Río Kwai y disfruta de la naturaleza y tranquilidad de esta región histórica."
      }
    ]
  },
  {
    titulo: "Phitsanulok",
    card: [
      {
        title: "Hotel And Convention Centre Topland",
        image: hotel9,
        description: "Playas vibrantes y espectáculos nocturnos en una de las ciudades más famosas."
      }
    ]
  }
];

const cardsJapon = [
  {
    title: 'Bangkok',
    country: 'Tailandia',
    image: imagen1
  },
  {
    title: 'Chiang Mai',
    country: 'Tailandia',
    image: imagen2
  },
  {
    title: 'Chiang Rai',
    country: 'Tailandia',
    image: imagen3
  },
  {
    title: 'Kanchanaburi',
    country: 'Tailandia',
    image: imagen4
  },
  {
    title: 'Phitsanulok',
    country: 'Tailandia',
    image: imagen5
  },
];



function HotelesTailandia() {
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
    document.title = `Hoteles Tailandia | Japón PREMIUM®`;
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

export default HotelesTailandia