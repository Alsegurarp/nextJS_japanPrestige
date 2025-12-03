'use client';

import React, { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import styles from './CaminoDeKumano.module.css';
import HeroSection from '../../../Componentes/Sections/HeroSection.jsx';
import HeroImage from '../../../assets/Itinerarios/PortadasItinerarios/Imperio_Japones_Japon_Premium_Templo_Ryoanji_Portada.webp';

const ItinerariosTemplate = lazy(() => import('../../../Componentes/Sections/Reutilizable/ItinerariosTemplate.jsx'));
const DownloadSection = lazy(() => import('../../../Componentes/Sections/Reutilizable/DownloadSection.jsx'));
const CardPrecio = lazy(() => import('../../../Componentes/Sections/Reutilizable/CardPrecioPrueba.jsx'));
const DetallesNoContiene = lazy(() => import('../../../Componentes/Sections/Reutilizable/DetallesNoContiene.jsx'));
const TripDetails = lazy(() => import('../../../Componentes/Sections/Reutilizable/TripDetails.jsx'));
const HotelesJapon = lazy(() => import('../../../Componentes/Sections/Reutilizable/HotelesJapon.jsx'));

import LetrasDoradasResponsive from '../../../assets/titulosDorados/imperiojaponesmovil.svg';
import LetrasDoradasDesktop from '../../../assets/titulosDorados/imperiojaponesweb.svg';


import LlegadaAeropuerto from '../../../assets/Itinerarios/ImperioJapones/Dia_1_Aeropuerto_Japon_Premium_Internacional_Mexico_Viajes_Vacaciones_Boleto_Aeromoza_Turismo.webp';
import LlegadaKansai from '../../../assets/Itinerarios/ImperioJapones/Dia_2_Llegada_Tokio_Japon_Premium_Restaurante_Gastronomia_Ramen_Viajes_Turismo_Tradicional_Cultura.webp';
import VueloEjecutivo from '../../../assets/Itinerarios/ImperioJapones/Dia_3_Tokio_Japon_Premium_Barrio_Shibuya_Tradicion_Modernidad_Explorar_Viajes_Turismo_Descubre_.webp';
import VistaAvion from '../../../assets/Itinerarios/ImperioJapones/Dia_4_Lago_Ashi_Japon_Premiun_Minicrucero_Vistas_Monte_Fuji_Viajes_Turismo_Experiencias.webp';
import EncantoJapan from '../../../assets/Itinerarios/ImperioJapones/Dia_5_Kioto_Japon_Premium_Fushimi_Inari_Taisha_Miles_Torii_Rojos_Viajes_Cultura_Turismo_Espiritualidad.webp';
import MiradorTorre from '../../../assets/Itinerarios/ImperioJapones/Dia_6_Kioto_Japon_Premium_Cuna_Imperial_Templo_Sanjusangen-do_Visita_Viajes_Turismo_Cultura_Historia.webp';
import ToriiFlotante from '../../../assets/Itinerarios/ImperioJapones/Dia_7_Kioto_Japon_Premium_Mercado_Nishiki_Gastronomia_Turismo_Viajes_Dia_Libre.webp';
import TemploNachisan from '../../../assets/Itinerarios/ImperioJapones/Dia_8_Regreso_Japon_Premium_Mexico_Fin_Aventura_Imperio_Sol_Naciente_Recuerdos_Viajes_Aeropuerto_Internacional_Turismo.webp';

import NumeroUno from '../../../assets/numerosDorados/numero1.svg';
import NumeroDos from '../../../assets/numerosDorados/numero2.svg';
import NumeroTres from '../../../assets/numerosDorados/numero3.svg';
import NumeroCuatro from '../../../assets/numerosDorados/numero4.svg';
import NumeroCinco from '../../../assets/numerosDorados/numero5.svg';
import NumeroSeis from '../../../assets/numerosDorados/numero6.svg';
import NumeroSiete from '../../../assets/numerosDorados/numero7.svg';
import NumeroOcho from '../../../assets/numerosDorados/numero8.svg';

import avion from '../../../assets/avion.svg';
import calendario from '../../../assets/calendario.svg';
import user from '../../../assets/user.svg';

// hoteles
import Hotel1 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_New_Otani_Tokyo_Gardent_Tower.webp';
import Hotel2 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kioto/Hotel_Kyoto_Tokyu.webp';
import FlyingButton from '../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';

const data = [
  {
    title: "8 Días - 6 Noches",
    subtitle: "Tokio - Hakone - Nara - Kioto",
    text: "Un viaje ideal para quienes desean descubrir los iconos más representativos de Japón en pocos días: tradición, modernidad y paisajes inolvidables.",
    image: HeroImage,
    altImg: "Vista frontal del Templo Yasukuni en Tokio, Japón, con cielo nublado al atardecer.",
    letrasDoradasResponsive: LetrasDoradasResponsive,
    LetrasDoradasDesktop: LetrasDoradasDesktop,
  }];

const dataSectionCard = [
  {
    title: 'México - Tokio',
    subtitle: NumeroUno,
    subtitleAltText: "Número 1",
    text: "Salida en vuelo intercontinental con destino a Japón.",
    image: LlegadaAeropuerto,
    altText: 'pasajero-observando-el-ala-del-avion-y-el-oceano-desde-la-ventana-durante-vuelo-internacional-hacia-japon-con-japan-Premium.',
  },
  {
    title: 'Tokio',
    subtitle: NumeroDos,
    subtitleAltText: "Número 2",
    text: 'Llegada al aeropuerto internacional de Tokio. Asistencia en español y traslado al hotel. Resto del día libre para descansar o comenzar a explorar la ciudad por tu cuenta. Alojamiento.',
    image: LlegadaKansai,
    altText: 'turista-llegando-al-aeropuerto-de-kioto-japon-siendo-recibida-por-guia-de-japan-Premium-en-la-zona-de-arribos.',
  },
  {
    title: 'Tokio',
    subtitle: NumeroTres,
    subtitleAltText: "Número 3",
    text: 'Desayuno. City Tour por Tokio: visita al Santuario Meiji, la Plaza del Palacio Imperial, el Templo Sensoji en Asakusa, la calle comercial Nakamise y el exclusivo barrio de Ginza. Tarde libre. Alojamiento.',
    image: VueloEjecutivo,
    altText: 'turista-con-kimono-tradicional-japones-posando-en-el-bosque-de-bambu-de-kioto-con-japan-Premium.',
  }, {
    title: 'Tokio - Hakone - Tokio',
    subtitle: NumeroCuatro,
    subtitleAltText: "Número 4",
    text: 'Desayuno. Excursión a Hakone: mini crucero por el Lago Ashi, vistas del Monte Fuji y recorrido por el Valle Owakudani, famoso por sus fumarolas y aguas termales. Almuerzo incluido. Regreso a Tokio. Alojamiento.',
    image: VistaAvion,
    altText: 'viajera-en-mirador-con-vista-a-la-torre-de-tokio-y-el-paisaje-urbano-de-la-capital-de-japon-con-japan-Premium',
  }, {
    title: 'Tokio - Kioto - Nara - Kioto',
    subtitle: NumeroCinco,
    subtitleAltText: "Número 5",
    text: 'Desayuno. Viaje en tren bala Nozomi a Kioto. Excursión a Nara para visitar el Gran Buda del Templo Todaiji y el Parque de los Ciervos. Parada en el icónico Santuario Fushimi Inari, con sus miles de torii rojos. Alojamiento en Kioto.',
    image: EncantoJapan,
    altText: 'viajera-frente-al-torii-flotante-de-miyajima-en-hiroshima-durante-el-atardecer-con-japan-Premium.',
  }, {
    title: 'Kioto',
    subtitle: NumeroSeis,
    subtitleAltText: "Número 6",
    text: 'Desayuno. Visita a los templos y santuarios más famosos de la ciudad: el Templo Ryoanji, el Pabellón Dorado (Kinkakuji), el Templo Sanjusangendo y el tradicional barrio de Gion, célebre por sus  geishas. Almuerzo incluido. Alojamiento.',
    image: MiradorTorre,
    altText: 'pareja-de-turistas-viajando-en-tren-bala-shinkansen-en-japon-con-japan-Premium-disfrutando-del-paisaje-desde-la-ventana.',
  }, {
    title: 'Kioto',
    subtitle: NumeroSiete,
    subtitleAltText: "Número 7",
    text: 'Desayuno. Día libre en Kioto con opción de realizar la excursión opcional a Hiroshima y Miyajima. Alojamiento.',
    image: ToriiFlotante,
    altText: 'pareja-de-turistas-en-el-templo-nachisan-con-pagoda-roja-y-montanas-de-fondo-en-japon-con-japan-Premium.',
  }, {
    title: ' Kioto - México',
    subtitle: NumeroOcho,
    subtitleAltText: "Número 8",
    text: 'Desayuno. Traslado al aeropuerto internacional de Kansai para tomar el vuelo de regreso a México. Fin de nuestros servicios',
    image: TemploNachisan,
    altText: 'pareja-de-turistas-en-dotonbori-osaka-con-los-carteles-luminosos-iconicos-al-fondo-con-japan-Premium.',
  }
];

const downloadData = [
  {
    id: "01",
    title: "japón premium",
    subtitle: "Imperio Japonés",
    dias: "8 Días - 6 Noches",
    urlDescargar: "https://japonpremium.com/pdf/itinerario-japon-premium-imperio-japones.pdf"
  }];

const dataPrecios = [
  {
    title: 'Temporada A',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '6,100' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '7,080' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '6,278' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '7,438' },
    ],
  },
  {
    title: 'Temporada B',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '6,278' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '7,438' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '6,456' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '8,062' },
    ],
  },
  {
    title: 'Temporada C',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '6,563' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '7,901' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '6,743' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '8,617' },
    ],
  },
  {
    title: 'Temporada Cerezos',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '6,830' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '8,347' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '7,009' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '8,942' },
    ],
  },
];

const lista = [
  {
    id: "01",
    icon: avion,
    title: "No incluye: Impuestos aéreos aproximados de 595 USD.",
  },
  {
    id: "02",
    icon: calendario,
    title: "Temporada B y C: Aplica suplemento (Verano - Fin de año) 450 USD.",
  },
  {
    id: "03",
    icon: user,
    title: "Los precios: Son por persona, sujetos a cambios sin previo aviso.",
  }
];

const Travelinfo = [
  {
    id: "01",
    title: "EL VIAJE A JAPÓN INCLUYE",
    description: [
      "Vuelos redondos Ciudad de México - Japón con Aeroméxico.",
      "6 noches de alojamiento en hoteles categoría superior.",
      "Tren bala Tokio-Kioto.",
      "6 desayunos incluidos.",
      "Guías en español durante visitas.",
      "Entradas a templos y atracciones mencionadas.",
      "Excursión a Hakone y Monte Fuji.",
      "Traslados aeropuerto - hotel - aeropuerto.",
      "Asistencia durante todo el viaje.",
      "Seguro básico de asistencia."
    ],
  }, {
    id: "02",
    title: "EL VIAJE A JAPÓN NO INCLUYE",
    description: [
      "Comidas y bebidas no indicadas.",
      "Propinas.",
      "Excursiones opcionales (elefantes, islas, spas).",
      "Seguro de cancelación.",
      "Gastos personales."
    ],
  }, {
    id: "03",
    title: "NOTAS IMPORTANTES",
    description: [
      "Precios en dólares estadounidenses por persona, sujetos a disponibilidad y tipo de cambio.",
      "Pasaporte con una vigencia mínima de seis meses requerido.",
      "El itinerario puede cambiar por motivos climáticos o logísticos.",
      "Algunos traslados podrían realizarse en transporte público si el grupo es pequeño.",
      "Habitaciones triples no disponibles en categoría de lujo."
    ],
  },
];

const hotels = [
  {
    id: '1',
    imageUrl: Hotel1,
    location: 'TOKIO',
    hotelName: 'HOTEL New Otani Tokyo Gardent Tower'
  },
  {
    id: '2',
    imageUrl: Hotel2,
    location: 'KIOTO',
    hotelName: 'HOTEL Kyoto Tokyu'
  }
];


export default function ImperioJapones() {

  useEffect(() => {
    document.title = `Itinerario Imperio Japonés | Japón PREMIUM®`;
  }, []);


  return (
    <>
      <FlyingButton />
      <HeroSection data={data} />
      <Suspense fallback={<div className={styles.loading}>Cargando contenido...</div>}>
        <ItinerariosTemplate data={dataSectionCard} />

        {downloadData.map(item => (
          <DownloadSection key={item.id} title={item.title} subtitle={item.subtitle} dias={item.dias} urlDescargar={item.urlDescargar} />
        ))}

        {dataPrecios.map((temporada) => (
          <CardPrecio
            key={temporada.title}
            title={temporada.title}
            prices={temporada.prices}
          />
        ))}
        <div className={styles.stepsContainerStyle}>
          {lista.map((l, index) => <DetallesNoContiene key={l.id} icon={l.icon} title={l.title} index={index} />)}
        </div>

        <TripDetails Travelinfo={Travelinfo} />

        <HotelesJapon hotels={hotels} />

      </Suspense>
    </>
  )
}
