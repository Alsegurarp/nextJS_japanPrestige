'use client';

import React, { useEffect, useMemo } from 'react';
import { lazy, Suspense } from 'react';
import '../../styles/home.css';
import styles from "../../Componentes/UI/Cards/StepsCardsHome.module.css";

// Import WhenVisible component for progressive loading
import WhenVisible from '../../components/UI/WhenVisible.jsx';
import LoadingSpinner from '../../Componentes/UI/LoadingSpinner.jsx';
// Lazy load each section individually for better bundle splitting
const CaracteristicasHome = lazy(() => import('../../Componentes/UI/Cards/CaracteristicasCards.jsx'));
const StepsCardsHome = lazy(() => import('../../Componentes/UI/Cards/StepsCardsHome.jsx'));
const WholeSectionCard = lazy(() => import('../../Componentes/LandingKeyword/WholeSectionCard.jsx'));
const StepCard = lazy(() => import('../../Componentes/UI/Cards/StepCard.jsx'));


import Hero from '../Home/HeroExclusivoHome/Hero.jsx';
import Geisha from '../../assets/Itinerarios/PortadasItinerarios/Samurai_&_Shaolines_Japon_Premium_Portada_Gran_Muralla.webp';
import Concierge from '../../assets/Itinerarios/PortadasItinerarios/Japon_&_Tailandia_A_Tu_Alcance_Japon_Premium_Gran_Palacio_Bangkok_Joyas_Lejano_Oriente.webp';
import Cena from '../../assets/Itinerarios/PortadasItinerarios/Japon_Increible_Japon_Premium_Puente_Nijubashi_Palacio.webp';

import imgBlog1 from '../../assets/ImagenesBlogs/portadasCards/Blog_Visado_Viajar_Japon_Premium.webp';
import imgBlog2 from '../../assets/ImagenesBlogs/portadasCards/Blog_Viajar_Sin_Hablar_Japones_Japon_Premium_Dominar_Idioma_Barrera.webp';
import imgBlog3 from '../../assets/ImagenesBlogs/portadasCards/Blog_Seguro_Viajar_Solo_Japon_Premium_Explorar_Solitario_Descubrimiento_Introspeccion.webp';

import bonsaiDesktop from '../../assets/paquetes_japon/Explorar_Elegancia_Armonia_Paquetes_Japon_Premium_.webp';
import bonsaiMobile from '../../assets/paquetes_japon/mobile_Explorar_Elegancia_Armonia_Paquetes_Japon_Premium_.webp';
import parejaDesktop from '../../assets/paquetes_japon/Cada_Detalle_Pensado_Paquetes_Japon_Premium_.webp';
import parejaMobile from '../../assets/paquetes_japon/mobile_Cada_Detalle_Pensado_Paquetes_Japon_Premium_.webp';
import vistaDesktop from '../../assets/paquetes_japon/Viaja_Sentido_Proposito_Paquetes_Japon_Premium_.webp';
import vistaMobile from '../../assets/paquetes_japon/mobile_Viaja_Sentido_Proposito_Paquetes_Japon_Premium_.webp';

import IconNo1 from '../../assets/indexImagenes/Numero_1_Japon_Premium.svg';
import IconNo2 from '../../assets/indexImagenes/Numero_2_Japon_Premium.svg';
import IconNo3 from '../../assets/indexImagenes/Numero_3_Japon_Premium.svg';

import imagenMobile from '../../assets/paquetes_japon/768_paquetes_a_japon_portada.webp';
import imagenTablet from '../../assets/paquetes_japon/1280_paquetes_a_japon_portada.webp';
import imagenWeb from '../../assets/paquetes_japon/1920_paquetes_a_japon_portada.webp';
import FlyingButton from '../../Componentes/UI/FlyingButtons/FlyingButton.jsx';

const infoCards = [
  {
    id: "01",
    text: "Vive un tour por Japón donde la innovación se une con lo ancestral. Descubre templos, arquitectura moderna y arte japonés con un enfoque cultural y personalizado.",
    image: Geisha,
    imageAlt: "Geisha con kimono tradicional caminando por las calles de Gion, símbolo de la cultura japonesa"
  },
  {
    id: "02",
    text: "Nuestros tours a Japón desde México incluyen hospedajes boutique, cenas privadas y actividades que revelan la esencia del país del sol naciente.",
    image: Concierge,
    imageAlt: "Concierge profesional en hotel de lujo japonés, brindando atención personalizada a turistas internacionales"
  },
  {
    id: "03",
    text: "Explora desde los barrios tradicionales hasta las montañas y jardines zen. Cada tour combina emoción, serenidad y el toque de lujo que distingue a JAPÓN PREMIUM®.",
    image: Cena,
    imageAlt: "Exquisita cena japonesa con platos tradicionales servidos en restaurante de alta gama en Japón"
  },
];

const infoCards2 = [
  {
    id: "01",
    text: "Una guía esencial para quienes viajan desde México a Japón. Aprende sobre costumbres, etiqueta y tradiciones para disfrutar cada momento con respeto y elegancia.",
    image: imgBlog1,
    imageAlt: "Geisha con kimono tradicional caminando por las calles de Gion, símbolo de la cultura japonesa"
  },
  {
    id: "02",
    text: "De la moda de lujo a la artesanía japonesa. En nuestros tours a Japón desde México, te llevamos a los mejores distritos de compras y diseño japonés.",
    image: imgBlog2,
    imageAlt: "Concierge profesional en hotel de lujo japonés, brindando atención personalizada a turistas internacionales"
  },
  {
    id: "03",
    text: "Primavera, verano, otoño e invierno. Cada estación ofrece una experiencia distinta para disfrutar Japón en todo su esplendor.",
    image: imgBlog3,
    imageAlt: "Exquisita cena japonesa con platos tradicionales servidos en restaurante de alta gama en Japón"
  },
];

const infoCards3 = [
  {
    title: "Más que un tour, una revelación cultural",
    subtitle: "JAPÓN PREMIUM®",
    text: "Cada experiencia está diseñada para que explorar Japón se convierta en un viaje profundo, transformador y lleno de significado.",
    image: {
      desktop: vistaDesktop,
      mobile: vistaMobile,
    },
    altText: "Viajero contemplando el Monte Fuji al amanecer",
    objectPosition: "50% 50%",
  },
  {
    title: "Explorar Japón con elegancia y equilibrio",
    subtitle: "JAPÓN PREMIUM®",
    text: "En JAPÓN PREMIUM®, transformamos los tours a Japón desde México en una experiencia que equilibra tradición y modernidad.",
    image: {
      desktop: parejaDesktop,
      mobile: parejaMobile,
    },
    altText: "Turista disfrutando de la armonía japonesa",
    objectPosition: "40% 50%",
  },
  {
    title: "Cada instante, una obra maestra",
    subtitle: "JAPÓN PREMIUM®",
    text: "Cada uno de nuestros tours a Japón desde México está planeado con precisión japonesa: desde la selección de hoteles boutique y la gastronomía local, hasta experiencias culturales diseñadas para los viajeros más exigentes.",
    image: {
      desktop: bonsaiDesktop,
      mobile: bonsaiMobile,
    },
    altText: "Maestro bonsái cuidando una planta milenaria",
    objectPosition: "70% 50%",
  },
];

function ToursJaponKeyword() {
  useEffect(() => {
    document.title = "Viajes a Japón desde México PREMIUM® | Tours desde México a Japón";
  }, []);

  return (
    <>
      <FlyingButton />
      <Hero
        title="Paquetes a Japón desde México"
        subtitle="Nuestros tours a Japón desde México están diseñados para quienes buscan lujo, cultura y conexión profunda."
        altImg="Pareja con kimono en calle tradicional de Kioto"
        imgMobile={imagenMobile}
        imgTablet={imagenTablet}
        imgDesktop={imagenWeb}
        bgPosition="50% 40%"
      />
      {/* CaracteristicasHome - Load immediately after hero */}
      <WhenVisible placeholder={<div style={{ height: '420px' }} />}>
        <Suspense fallback={<LoadingSpinner label="Cargando características..." />}>
          <Title>Itinerarios personalizados para cada viajero</Title>
          <Subtitle>Cada viajero tiene una historia, por eso en JAPÓN PREMIUM® diseñamos tours a Japón desde México adaptados a tus intereses y estilo.</Subtitle>
          <CaracteristicasHome infoCards={infoCards} />
        </Suspense>
      </WhenVisible>

      <WhenVisible placeholder={<div style={{ height: '420px' }} />}>
        <Suspense fallback={<LoadingSpinner label="Cargando características..." />}>
          <Title>Inspírate para tu próximo tour a Japón desde México</Title>
          <Subtitle>Descubre cómo nuestros tours a Japón desde México te permiten vivir Japón con lujo, autenticidad y propósito.</Subtitle>
          <CaracteristicasHome infoCards={infoCards2} />
        </Suspense>
      </WhenVisible>

      {/* BeneficiosHome */}
      <WhenVisible placeholder={<div style={{ height: '480px' }} />}>
        <Suspense fallback={<LoadingSpinner label="Cargando beneficios..." />}>
          <WholeSectionCard infoCards={infoCards3} />
        </Suspense>
      </WhenVisible>

      {/* StepsCardsHome */}
      <WhenVisible placeholder={<div style={{ height: '520px' }} />}>
        <Suspense fallback={<LoadingSpinner label="Cargando proceso..." />}>
          <StepCardsList />
        </Suspense>
      </WhenVisible>
    </>
  )
}

export default ToursJaponKeyword;


function Title({ children }) {
  const headingStyle = {
    textAlign: 'center',
    fontSize: '24px',
    marginTop: '40px',
    marginBottom: '20px',
    color: '#ffffff',
    fontFamily: "nohemi"
  };

  return (
    <p style={headingStyle}>{children}</p>
  )

}

function Subtitle({ children }) {
  const containerStyle = {
    justifyItems: 'center',
  }


  const headingStyle = {
    textAlign: 'center',
    fontSize: '16px',
    marginTop: '20px',
    marginBottom: '20px',
    color: '#ffffff',
    fontFamily: "nohemi",
    padding: '30px',
    maxWidth: '500px',
  };

  return (
    <div style={containerStyle}>
      <p style={headingStyle}>{children}</p>
    </div>
  )

}



const StepCardsList = React.memo(function StepCardsList() {

  // Memoize pasos array to prevent recreation on each render
  const pasos = useMemo(() => [
    {
      number: IconNo1,
      title: "Inicia tu planeación",
      text: "Comienza con una sesión personalizada con nuestros expertos para definir el tipo de experiencia que deseas vivir en Japón.",
      id: 1,
      alt: "Paso 1: Conversemos sobre tu sueño"
    }, {
      number: IconNo2,
      title: "Recibe tu propuesta personalizada",
      text: "Diseñamos un itinerario a medida con hospedajes, actividades y experiencias únicas para tu tour a Japón desde México.",
      id: 2,
      alt: "Paso 2: Creamos tu itinerario ideal"
    }, {
      number: IconNo3,
      title: "Viaja a Japón con Japón PREMIUM®",
      text: "Disfruta un tour con atención personalizada, lujo discreto y una conexión auténtica con la cultura japonesa.",
      id: 3,
      alt: "Paso 3: Vive tu viaje con Japón PREMIUM®"
    }
  ], [])

  return (
    <section className={styles.sectionStyle}>
      <div className={styles.headingStyle}>Así comienza tu viaje transformador a Japón</div>
      <div className={styles.stepsContainerStyle}>

        {pasos.map((pasos, index) =>
          <StepCard
            number={pasos.number}
            title={pasos.title}
            description={pasos.text}
            key={pasos.id}
            index={index}
            alt={pasos.alt}
          />)}
      </div>
    </section>
  );
})
