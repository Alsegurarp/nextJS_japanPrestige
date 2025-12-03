import React from 'react';
import CardsComponent from '../../../Componentes/Hoteles/HotelesInicio/Componente/CardsComponent.jsx';
import Prueba from '../../../Componentes/Hoteles/HotelesInicio/Componente/Prueba.jsx';

import HeroSection from '../../../Componentes/Sections/HeroSection.jsx';
import HeroImage from '../../../assets/portadas-nuevas-19-sep/hotelesPortadas/portada_hoteles_en_japon.webp';

import LetrasDoradasResponsive from '../../../assets/titulosBlogs/hoteles.svg';
import LetrasDoradasDesktop from '../../../assets/titulosDorados/GRANDEHOTELES.svg';

import imageJapon from '../../../assets/portadas-nuevas-19-sep/hotelesPortadas/hoteles_de_lujo_en_japon.webp';
import imageCorea from '../../../assets/portadas-nuevas-19-sep/hotelesPortadas/hoteles_de_lujo_en_corea_del_sur.webp';
import imageChina from '../../../assets/portadas-nuevas-19-sep/hotelesPortadas/hoteles_de_lujo_en_china.webp';
import imageDubai from '../../../assets/portadas-nuevas-19-sep/hotelesPortadas/hoteles_de_lujo_en_dubai.webp';
import imageTailandia from '../../../assets/portadas-nuevas-19-sep/hotelesPortadas/hoteles_de_lujo_en_tailandia.webp';
import InView from '../../../Componentes/layout/InView/InView.jsx';
import FlyingButton from '../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';

    const data = [
      {
        text: "Explora nuestra selección exclusiva de alojamientos en ciudades emblemáticas como Tokio, Dubái, Pekín, Bangkok y más. Estos hoteles no solo ofrecen comodidad superior y diseño elegante, sino que también se encuentran ubicados en puntos estratégicos para que vivas cada ciudad en su máxima expresión.",
        image: HeroImage,
        altImg:"Vista frontal del Templo Yasukuni en Tokio, Japón, con cielo nublado al atardecer.",
        letrasDoradasResponsive: LetrasDoradasResponsive,
        LetrasDoradasDesktop: LetrasDoradasDesktop, 
    }];

    const destinations = [
  {
    title: "JAPÓN",
    image: imageJapon,
    to: '/hoteles/hoteles-japon',
    description: "Descubre la perfecta armonía entre tradición y modernidad en el País del Sol Naciente."
  },
  {
    title: "COREA DEL SUR",
    image: imageCorea,
    to: '/hoteles/hoteles-corea',
    description: "Explora una cultura vibrante, tecnología avanzada y una gastronomía excepcional."
  },
  {
    title: "CHINA",
    image: imageChina,
    to: '/hoteles/hoteles-china',
    description: "Sumérgete en milenios de historia y contempla el rápido desarrollo de sus metrópolis."
  },
  {
    title: "DUBÁI",
    image: imageDubai,
    to: '/hoteles/hoteles-dubai',
    description: "Experimenta el lujo extremo y la arquitectura futurista en el corazón del desierto."
  },
  {
    title: "TAILANDIA",
    image: imageTailandia,
    to: '/hoteles/hoteles-tailandia',
    description: "Relájate en paraísos tropicales y descubre templos dorados llenos de espiritualidad."
  }
];

function HotelesInicio() {
  return (
    <>
    <FlyingButton />
    <HeroSection data={data}/>
    <InView>
      <Prueba destinations={destinations} />
    </InView>
    </>
  )
}

export default HotelesInicio