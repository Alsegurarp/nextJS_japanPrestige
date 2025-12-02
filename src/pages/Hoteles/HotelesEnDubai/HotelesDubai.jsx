import React, {useState, useEffect, Suspense, lazy} from 'react';
import HeroSection from '../../../Componentes/Sections/HeroSection.jsx';
import HeroImage from '../../../assets/portadas-nuevas-19-sep/hotelesPortadas/portada_hoteles_en_dubai.webp';
const Buscador = lazy(() => import ('../../../Componentes/Hoteles/Carrucel/Buscador.jsx'));
import InView from '../../../Componentes/Layout/InView/InView.jsx';

import LetrasDoradasResponsive from '../../../assets/titulosDorados/hotelesSection/hotelesdubaimovil.svg';
import LetrasDoradasDesktop from '../../../assets/titulosDorados/hotelesSection/hotelesduabai.svg';

import imageHotel from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Dubai/Hotel_Novotel_Deira_City_Centre_Dubai_Japon_Premium.webp';

import NoNavegaSection from '../HotelesInicio/Componente/NoNavegaSection.jsx';

import DubaiImagen from '../../../assets/Itinerarios/buscadorImagenes/dubai/deira_dubai.webp';
import FlyingButton from '../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';

    const data = [
      {
        text: "Explora nuestra selección exclusiva de alojamientos en ciudades emblemáticas como Dubái. Este hotel no solo ofrece comodidad superior y diseño elegante, sino que también se encuentra ubicado en un punto estratégico para que vivas la ciudad en su máxima expresión",
        image: HeroImage,
        altImg:"Vista frontal del Templo Yasukuni en Tokio, Japón, con cielo nublado al atardecer.",
        letrasDoradasResponsive: LetrasDoradasResponsive,
        LetrasDoradasDesktop: LetrasDoradasDesktop, 
    }];

    const destinations = [
  {
    titulo: "Dubái",
    card: [
      {
        title: "Hotel Novotel Dubái Deira City Centre",
        image: imageHotel,
        description: "Explora la modernidad de Dubái con sus rascacielos icónicos, centros de lujo y el tradicional zoco del oro."
      }
    ]
  }
    ];

    const cardsDubai = [
  {
    title: 'Dubái',
    country: "Dubái",
    image: DubaiImagen
  },
    ];


function HotelesDubai() {
    const [selectedCiudad, setSelectedCiudad] = useState(null);
  
    // Normalizar nombres 
    const CANON = { Tokyo: 'Tokio', nachikatsura: 'nachikatsuura'};
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
                document.title = `Hoteles Dubái | Japón PREMIUM®`; 
            }, []);

  return (
    <>
        <FlyingButton />
      <HeroSection data={data} />
      <InView>
        <Suspense>
            <Buscador
              cards={cardsDubai}
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

export default HotelesDubai
