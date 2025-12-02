import React from 'react';

import Hero from './Componente/Hero.jsx'
import HeroImage from '../../assets/portadas-nuevas-19-sep/hotelesImg/Nosotros_Portada_Japon_Premium_Monte_Fuji.webp';
import LetrasDoradasResponsive from '../../assets/titulosDorados/tuptoximaventuraMOVIL.svg';
import LetrasDoradasDesktop from '../../assets/titulosDorados/tuptoximaventuraWEB.svg';
import FlyingButton from '../../Componentes/UI/FlyingButtons/FlyingButton.jsx';


const Herodata = [
{
    image: HeroImage,
    altImg:"Vista frontal del Templo Yasukuni en Tokio, Japón, con cielo nublado al atardecer.",
    letrasDoradasResponsive: LetrasDoradasResponsive,
    LetrasDoradasDesktop: LetrasDoradasDesktop, 
}];

 
function Contacto() {
  return (
    <>
    <FlyingButton />
        <Hero image={Herodata.image}/>
    </>
  )
}

export default Contacto

