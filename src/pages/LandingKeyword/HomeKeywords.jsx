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
import Geisha from '../../assets/Itinerarios/PortadasItinerarios/Japon_&_Dubai_Premium_Cerezos_Oro_Portada.webp';
import Concierge from '../../assets/Itinerarios/PortadasItinerarios/Japon_&_China_Dragones_&_Cerezos_Japon_Premium_Templo_Cielo.webp';
import Cena from '../../assets/Itinerarios/PortadasItinerarios/Japon_&_Corea_del_Sur_Japon_Premium_Portada_Palacio_Real_Gyeongbokgung.webp';

import imgBlog1 from '../../assets/ImagenesBlogs/portadasCards/Blog_Comportamiento_Japon_Premium_Etiqueta_Cortesia_Sofisticacion_Cultural.webp';
import imgBlog2 from '../../assets/ImagenesBlogs/portadasCards/Blog_Compras_Japon_Premium_Experiencia_Exclusiva_Disenada.webp';
import imgBlog3 from '../../assets/ImagenesBlogs/portadasCards/Blog_Mejor_Epoca_Para_Viajar_Japon_Premium.webp';

import bonsaiDesktop from '../../assets/landing_viajes_japon/Cada_Detalle_Pensado_Viajes_Japon_Premium.webp';
import bonsaiMobile from '../../assets/landing_viajes_japon/mobile_Cada_Detalle_Pensado_Viajes_Japon_Premium.webp';
import parejaDesktop from '../../assets/landing_viajes_japon/Explorar_Elegancia_Armonia_Viajes_Premium.webp';
import parejaMobile from '../../assets/landing_viajes_japon/mobile_Explorar_Elegancia_Armonia_Viajes_Premium.webp';
import vistaDesktop from '../../assets/landing_viajes_japon/Viaja_Sentido_Proposito_Viajes_Japon_Premium.webp';
import vistaMobile from '../../assets/landing_viajes_japon/mobile_Viaja_Sentido_Proposito_Viajes_Japon_Premium.webp';

import IconNo1 from '../../assets/indexImagenes/Numero_1_Japon_Premium.svg';
import IconNo2 from '../../assets/indexImagenes/Numero_2_Japon_Premium.svg';
import IconNo3 from '../../assets/indexImagenes/Numero_3_Japon_Premium.svg';

import imagenMobile from '../../assets/landing_viajes_japon/768_viajes_a_japon_desde_mexico_portada.webp';
import imagenTablet from '../../assets/landing_viajes_japon/1280_viajes_a_japon_desde_mexico_portada.webp';
import imagenWeb from '../../assets/landing_viajes_japon/1920_viajes_a_japon_desde_mexico_portada.webp';
import FlyingButton from '../../Componentes/UI/FlyingButtons/FlyingButton.jsx';

const infoCards = [
  {
    id: "01",
    text: "Itinerario exclusivo en el que combinamos arte, cultura y confort en cada paso. Descubre templos, jardines y experiencias únicas con el respaldo de expertos locales.",
    image: Geisha,
    imageAlt: "Geisha con kimono tradicional caminando por las calles de Gion, símbolo de la cultura japonesa"
  },
  {
    id: "02",
    text: "Crea un tour por Japón con alojamientos boutique, cenas privadas y visitas guiadas a los rincones más emblemáticos del país del sol naciente.",
    image: Concierge,
    imageAlt: "Concierge profesional en hotel de lujo japonés, brindando atención personalizada a turistas internacionales"
  },
  {
    id: "03",
    text: "Cada pausa en Japón está diseñada para reconectar contigo. Disfruta de templos zen, baños termales y rituales ancestrales que elevan cuerpo y mente.",
    image: Cena,
    imageAlt: "Exquisita cena japonesa con platos tradicionales servidos en restaurante de alta gama en Japón"
  },
];

const infoCards2 = [
  {
    id: "01",
    text: "Una guía esencial para quienes viajan desde México a Japón y desean vivir la tradición con respeto, elegancia y autenticidad. Aprende los códigos culturales que transformarán tu experiencia.",
    image: imgBlog1,
    imageAlt: "Geisha con kimono tradicional caminando por las calles de Gion, símbolo de la cultura japonesa"
  },
  {
    id: "02",
    text: "De la moda de lujo a la artesanía tradicional, descubre dónde encontrar los mejores artículos japoneses con estilo y personalidad durante tu viaje desde México.",
    image: imgBlog2,
    imageAlt: "Concierge profesional en hotel de lujo japonés, brindando atención personalizada a turistas internacionales"
  },
  {
    id: "03",
    text: "Desde la floración del sakura hasta el momiji otoñal y la nieve en los templos, cada época del año ofrece un encanto distinto para tus viajes a Japón desde México.",
    image: imgBlog3,
    imageAlt: "Exquisita cena japonesa con platos tradicionales servidos en restaurante de alta gama en Japón"
  },
];

const infoCards3 = [
  {
    title: "Lujo con sentido y propósito",
    subtitle: "JAPÓN PREMIUM®",
    text: "Nuestros viajes a Japón desde México combinan el lujo, la introspección y la autenticidad cultural. Cada experiencia está diseñada para que explorar Japón se convierta en un viaje profundo.",
    image: {
      desktop: vistaDesktop,
      mobile: vistaMobile,
    },
    altText: "Viajero contemplando el Monte Fuji al amanecer",
    objectPosition: "50% 50%",
  },
  {
    title: "Explorar con elegancia y armonía",
    subtitle: "JAPÓN PREMIUM®",
    text: "En JAPÓN PREMIUM transformamos los viajes a Japón desde México, son experiencias que equilibran tradición y sofisticación.",
    image: {
      desktop: parejaDesktop,
      mobile: parejaMobile,
    },
    altText: "Turista disfrutando de la armonía japonesa",
    objectPosition: "40% 50%",
  },
  {
    title: "Cada detalle pensado para ti",
    subtitle: "JAPÓN PREMIUM®",
    text: "Todo en nuestros viajes a Japón desde México está planeado con precisión y cariño: hospedajes boutique, gastronomía local y experiencias privadas.",
    image: {
      desktop: bonsaiDesktop,
      mobile: bonsaiMobile,
    },
    altText: "Maestro bonsái cuidando una planta milenaria",
    objectPosition: "70% 50%",
  },
];

function HomeKeywords() {
  useEffect(() => {
    document.title = "Viajes a Japón desde México PREMIUM® | Viajes desde México a Japón";
  }, []);

  return (
    <>
      <FlyingButton />
      <Hero
        title="VIAJES A JAPÓN DESDE MÉXICO"
        subtitle="Explora Japón con itinerarios exclusivos, experiencias auténticas y atención personalizada desde México."
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
          <Subtitle>Itinerario exclusivo en el que combinamos arte, cultura y confort en cada paso. Descubre templos, jardines y experiencias únicas con el respaldo de expertos locales.</Subtitle>
          <CaracteristicasHome infoCards={infoCards} />
        </Suspense>
      </WhenVisible>

      <WhenVisible placeholder={<div style={{ height: '420px' }} />}>
        <Suspense fallback={<LoadingSpinner label="Cargando características..." />}>
          <Title>Inspírate para tu próximo viaje a Japón desde México</Title>
          <Subtitle>Sumérgete en la cultura japonesa con nuestras guías, consejos y artículos exclusivos diseñados para los viajeros que buscan descubrir Japón desde México con lujo, autenticidad y propósito.</Subtitle>
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

export default HomeKeywords


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
      text: "Comenzamos con una reunión personalizada para entender tus expectativas, intereses y el tipo de experiencia que deseas vivir en Japón.",
      id: 1,
      alt: "Paso 1: Conversemos sobre tu sueño"
    }, {
      number: IconNo2,
      title: "Recibe tu propuesta personalizada",
      text: "Creamos un itinerario exclusivo con hoteles boutique, experiencias privadas y actividades que reflejan la esencia japonesa, ideal para viajeros que parten desde México.",
      id: 2,
      alt: "Paso 2: Creamos tu itinerario ideal"
    }, {
      number: IconNo3,
      title: "Viaja a Japón con Japón PREMIUM®",
      text: "Desde tu llegada a Japón hasta el regreso a México, nuestro equipo te acompaña con atención y excelencia en cada paso de tu viaje.",
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
