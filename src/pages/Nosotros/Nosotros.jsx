import React, {useEffect} from 'react';
import { lazy, Suspense } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styles/home.css';
import LoadingSpinner from '../../Componentes/UI/LoadingSpinner.jsx';
const HeroSection = lazy(() => import ('../../Componentes/Sections/HeroSection.jsx'));
import HeroImage from '../../assets/portadas-nuevas-19-sep/hotelesImg/Nosotros_Portada_Japon_Premium_Monte_Fuji.webp';

// Van a verificar las imagenes, aun no las tengo
import karinaImg from "../../assets/jefes/karina_sanchez.webp"; // e.g. /public/images/karina.jpg
import andresImg from "../../assets/jefes/andres_bernal.webp"; // e.g. /public/images/andres.jpg

import LetrasDoradasResponsive from '../../assets/titulosDorados/GRANDENOSOTROS.svg';
import LetrasDoradasDesktop from '../../assets/titulosDorados/GRANDENOSOTROS.svg';
import FlyingButton from '../../Componentes/UI/FlyingButtons/FlyingButton.jsx';

const Testimonios = lazy(() => import ('../../Componentes/Sections/Home/Testimonios.jsx'));
const ConfiarEnNosotros = lazy(() => import ('../../Componentes/Sections/Home/ConfiarEnNosotros.jsx'));
const NosotrosListado = lazy(() => import ('../../Componentes/Sections/MediaFeature/NosotrosListado.jsx'));
const ListadoPreguntas = lazy(() => import ('../../Componentes/Sections/Reutilizable/ListadoPreguntas.jsx'));
const LiderCard = lazy(() => import ('../../Componentes/UI/Cards/LiderCard.jsx'));
const TurismoGlobal = lazy(() => import ('../../Componentes/UI/Cards/TurismoGlobal.jsx'));


  const data = [
  {
    subtitle: "20 Años Convirtiendo Sueños en Viajes Inolvidables",
    text: "En Japón PREMIUM, celebramos  dos décadas de experiencias únicas. Desde nuestros inicios hasta hoy, nuestra pasión ha sido diseñar viajes que trascienden lo común y se convierten en recuerdos inolvidables.",
    image: HeroImage,
    altImg:"Vista del Monte Fuji nevado enmarcado por ramas de cerezos en flor durante la primavera en Japón",
    bgPosition: "50% 70%",
    letrasDoradasResponsive: LetrasDoradasResponsive,
    LetrasDoradasDesktop: LetrasDoradasDesktop, 
  }];

  const leaders = [
    {
      name: "Karina Sánchez",
      role: "DIRECTORA COMERCIAL",
      photo: karinaImg,
      paragraph:
        "Gracias a la preferencia de los viajeros por este gran destino turístico, nacimos hace 20 años con el propósito de crear viajes elaborados a conciencia, buscando que cada uno de nuestros clientes obtenga experiencias más agradables y confortables cuidando cada detalle para hacer de ese momento, único y especial.",
      layout: "image-left", // image on the left, text on the right
    },
    {
      name: "Andrés Bernal",
      role: "DIRECTOR GENERAL",
      photo: andresImg,
      paragraph:
        "Gracias a la confianza de nuestros viajeros, hace 20 años nació nuestro sueño: diseñar experiencias de viaje únicas y memorables. Desde el inicio, nos propusimos crear itinerarios cuidadosamente elaborados, pensando en cada detalle para brindar momentos más placenteros, cómodos y especiales.",
      layout: "image-right", // text on the left, image on the right
    },
  ];

  const faqs = [
  {
      id: 1,
      pregunta: "Nuestros socios",
      respuesta: "Contamos con una selecta red de socios en México y en todo el mundo, elegidos minuciosamente para cumplir con nuestros rigurosos estándares y brindarte la mejor experiencia de viaje para ti y tu familia.",
  }, {
      id: 2,
      pregunta: "Misión de la Empresa",
      respuesta: "Desde nuestros inicios, en Viajes Premium®, nuestra misión ha sido proporcionar las experiencias de viaje más excepcionales a nuestros clientes. Siempre nos esforzamos por ofrecer las mejores vivencias en destinos de México y el resto del mundo.",
  }, {
      id: 3,
      pregunta: "Visión de la Empresa",
      respuesta: "Nuestra visión es convertirnos en líderes en la oferta de las mejores experiencias de viaje en todo el mundo, manteniendo siempre un compromiso inquebrantable con la calidad y la garantía de satisfacción para nuestros viajeros.",
  }, {
      id: 4,
      pregunta: "Actividades Turísticas",
      respuesta: "En Viajes Premium®, ofrecemos una amplia variedad de actividades para toda la familia. Estas actividades varían según el destino que elijas visitar, pero te garantizamos una calidad de servicio de cinco estrellas y la satisfacción respaldada por Viajes Premium® en cada experiencia que elijas.",
  }
  ];



function Nosotros() {
    useEffect(() => {
      document.title = "Conoce Japón PREMIUM® | Nosotros - Viajes a Japón"; 
    }, []);


    useEffect(() => {
    AOS.init({
      duration: 1000, // duración de animaciones
      once: true      // Se anima solo una vez
    });
    }, []);

  return (
    <>
    <FlyingButton />
    <HeroSection data={data}/>
    <Suspense fallback={<LoadingSpinner label="Cargando nuestra historia..." />}>
        <LiderCard leaders={leaders} />
        <ListadoPreguntas faqs={faqs} />
        <TurismoGlobal />
        <ConfiarEnNosotros />
        <Testimonios />
        <NosotrosListado />
    </Suspense>
    </>
  )
}


export default Nosotros;


