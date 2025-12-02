import React, {useEffect} from 'react';
import { Suspense, lazy } from 'react';
import LoadingSpinner from '../../Componentes/UI/LoadingSpinner.jsx';
import FlyingButton from '../../Componentes/UI/FlyingButtons/FlyingButton.jsx';

const ItinerarioHero = lazy(() => import ('../../Componentes/Sections/Itinerarios/ItinerarioHero.jsx'));
const CaracteristicasItinerarios = lazy(() => import ('../../Componentes/Sections/Itinerarios/CaracteristicasItinerarios.jsx'));
const PaquetesIncluyen = lazy(() => import ('../../Componentes/Sections/Itinerarios/PaquetesIncluyen.jsx'));
const BeneficiosItinerarios = lazy(() => import ('../../Componentes/Sections/Itinerarios/BeneficiosItinerarios.jsx'));
const ContenidoItinerarios = lazy(() => import ('../../Componentes/Sections/Itinerarios/ContenidoItinerarios.jsx'));


export default function Itinerarios() {
  useEffect(() => {
    document.title = "Itinerarios | Japón Premium"; 
  }, []);

  return (
    <>
    <FlyingButton />
        <ItinerarioHero />
        <Suspense 
          fallback={<LoadingSpinner label="Cargando itinerarios premium..." />}>
              <CaracteristicasItinerarios />
              <PaquetesIncluyen />
              <BeneficiosItinerarios />
              <ContenidoItinerarios />
        </Suspense>
    </>
  )
};

