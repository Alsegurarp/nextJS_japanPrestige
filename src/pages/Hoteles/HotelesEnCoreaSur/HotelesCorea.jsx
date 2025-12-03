'use client';

import React, { useEffect, useState, Suspense, lazy } from 'react';
import HeroSection from '../../../Componentes/Sections/HeroSection.jsx';
import HeroImage from '../../../assets/portadas-nuevas-19-sep/hotelesPortadas/portada_hoteles_en_corea.webp';

import LetrasDoradasResponsive from '../../../assets/titulosDorados/hotelesSection/hotelescoreamovil.svg';
import LetrasDoradasDesktop from '../../../assets/titulosDorados/hotelesSection/hotelescorea.svg';

import hotel1 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/CoreaDelSur/Hotel_Ibis_Ambassador_Busan_Haeundae_Corea_Del_Sur_Japon_Premium.webp';
import hotel2 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/CoreaDelSur/Hotel_Gran_Plaza_Cheongju_Hotel_Corea_Del_Sur_Japon_Premium.webp';
import hotel3 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/CoreaDelSur/Hotel_Commodore_Gyeongju_Corea_Del_Sur_Japon_Premium.webp';
import hotel4 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/CoreaDelSur/Hotel_JS_Jeonju_Corea_Del_Sur_Japon_Premium.webp';
import hotel5 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/CoreaDelSur/Hotel_Pungnam_Tourist_Jeonju_Corea_Del_Sur_Japon_Premium.webp';
import hotel6 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/CoreaDelSur/aventree_jonjno_hotel.webp';
import hotel7 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/CoreaDelSur/Hotel_Courtyard_By_Marriot_Seoul_Times_Square_Corea_Del_Sur_Japon_Premium_.webp';

//import Buscador from '../../../Componentes/Hoteles/Carrucel/Buscador.jsx';
const Buscador = lazy(() => import('../../../Componentes/Hoteles/Carrucel/Buscador.jsx'));
import NoNavegaSection from '../../../Componentes/Hoteles/HotelesInicio/Componente/NoNavegaSection.jsx';
import InView from '../../../Componentes/layout/InView/InView.jsx';

import imagenCheonju from '../../../assets/Itinerarios/buscadorImagenes/corea/cheonju_corea.webp';
import imagenGyeongju from '../../../assets/Itinerarios/buscadorImagenes/corea/gyeongju_corea.webp';
import imagenJeonju from '../../../assets/Itinerarios/buscadorImagenes/corea/jeonju_corea.webp';
import imagenSeul from '../../../assets/Itinerarios/buscadorImagenes/corea/seul_corea.webp';
import imagenAventree from '../../../assets/Itinerarios/buscadorImagenes/corea/busan_corea.webp';
import FlyingButton from '../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';

const data = [
  {
    text: "Explora nuestra selección exclusiva de alojamientos en ciudades emblemáticas como Busan, Jeonju, Cyeongju, Cheongju y más. Estos hoteles no solo ofrecen comodidad superior y diseño elegante, sino que también se encuentran ubicados en puntos estratégicos para que vivas cada ciudad en su máxima expresión",
    image: HeroImage,
    altImg: "Vista frontal del Templo Yasukuni en Tokio, Japón, con cielo nublado al atardecer.",
    letrasDoradasResponsive: LetrasDoradasResponsive,
    LetrasDoradasDesktop: LetrasDoradasDesktop,
  }];

const destinations = [
  {
    titulo: "Busan",
    card: [
      {
        title: "Hotel Ibis Budget Ambassador Busan Haeundae",
        image: hotel1,
        description: "Alójate junto a la playa de Haeundae y disfruta del mercado de pescado de Jagalchi y el colorido Gamcheon Culture Village."
      }
    ]
  },
  {
    titulo: "Cheongju",
    card: [
      {
        title: "Hotel Grand Plaza Cheongju",
        image: hotel2,
        description: "Explora la histórica Fortaleza de Sangdangsanseong y los tranquilos parques ribereños de esta ciudad universitaria."
      }
    ]
  },
  {
    titulo: "Gyeongju",
    card: [
      {
        title: "Hotel Commodore Gyeongju",
        image: hotel3,
        description: "Sumérgete en la 'Roma de Corea' con los túmulos reales de Daereungwon, el observatorio Cheomseongdae y el lago Bomun."
      }
    ]
  },
  {
    titulo: "Jeonju",
    card: [
      {
        title: "Hotel JS",
        image: hotel4,
        description: "Descubre la naturaleza volcánica de Jeju: el monte Hallasan, los tubos de lava de Manjanggul y playas de aguas turquesa."
      },
      {
        title: "Hotel Pungnam Tourist",
        image: hotel5,
        description: "Recorre cascadas como Cheonjiyeon y Jeongbang, y prueba mandarinas frescas y mariscos locales en mercados tradicionales."
      }
    ]
  },
  {
    titulo: "Seúl",
    card: [
      {
        title: "Aventree Jongno",
        image: hotel6,
        description: "Vive el contraste entre palacios como Gyeongbokgung y barrios modernos como Hongdae y Myeongdong, con gastronomía 24/7."
      },
      {
        title: "Hotel Courtyard by Marriott Seoul Times Square",
        image: hotel7,
        description: "Vive el contraste entre palacios como Gyeongbokgung y barrios modernos como Hongdae y Myeongdong, con gastronomía 24/7."
      }
    ]
  }
];

const cardsJapon = [
  {
    title: 'Busan',
    country: "Corea",
    image: imagenAventree
  },
  {
    title: 'Cheongju',
    country: "Corea",
    image: imagenCheonju
  },
  {
    title: 'Gyeongju',
    country: "Corea",
    image: imagenGyeongju
  },
  {
    title: 'Jeonju',
    country: "Corea",
    image: imagenJeonju
  },
  {
    title: 'Seúl',
    country: "Corea",
    image: imagenSeul
  },
];


function HotelesCorea() {
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
    document.title = `Hoteles Corea | Japón PREMIUM®`;
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

export default HotelesCorea
