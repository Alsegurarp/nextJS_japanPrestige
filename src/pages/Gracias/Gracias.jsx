import React, {useEffect} from 'react';
import { Suspense } from 'react';
import LoadingSpinner from '../../Componentes/UI/LoadingSpinner.jsx';


import HeroImage from '../../assets/portadas-nuevas-19-sep/Gracias_Portada_Japon_Premium_Toriii.webp';
import HeroGracias from '../../Componentes/Sections/GraciasComp/HeroGracias.jsx';


import LetrasDoradasResponsive from '../../assets/titulosDorados/tuptoximaventuraMOVIL.svg';
import LetrasDoradasDesktop from '../../assets/titulosDorados/tuptoximaventuraWEB.svg';


    const data = [
      {
        title: "Tu aventura hacia Japón está un paso más cerca.",
        subtitle: "En breve recibirás información personalizada para vivir un viaje inolvidable.",
        image: HeroImage,
        altImg:"Un recorrido diseñado para quienes desean descubrir lo mejor de Japón en  poco tiempo, combinando tradición, modernidad y paisajes inolvidables.",
        letrasDoradasResponsive: LetrasDoradasResponsive,
        LetrasDoradasDesktop: LetrasDoradasDesktop, 
    }];

export default function Gracias() {

  useEffect(() => {
    document.title = `Gracias por confiar en nosotros | Japón PREMIUM®`; 
  }, []);

  return (
    <>
    <HeroGracias data={data}/>
    <Suspense fallback={<LoadingSpinner label="Gracias por contactarnos..." />}>
    </Suspense>
    </>
  )
}
