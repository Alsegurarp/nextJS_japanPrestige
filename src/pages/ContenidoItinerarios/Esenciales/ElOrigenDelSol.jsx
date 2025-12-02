'use client';

import React, { useEffect } from 'react';
import { Suspense } from 'react';
import styles from './ElOrigenDelSol.module.css';
import HeroSection from '../../../Componentes/Sections/HeroSection.jsx';
import CaminoKumano from '../../../assets/Itinerarios/PortadasItinerarios/El_Origen_del_Sol_Japon_Premium_Portada_Parque_Nacional_Hakone.webp';

import ItinerariosTemplate from '../../../Componentes/Sections/Reutilizable/ItinerariosTemplate.jsx';

import DownloadSection from '../../../Componentes/Sections/Reutilizable/DownloadSection.jsx';
import CardPrecio from '../../../Componentes/Sections/Reutilizable/CardPrecioPrueba.jsx';
import DetallesNoContiene from '../../../Componentes/Sections/Reutilizable/DetallesNoContiene.jsx';
import TripDetails from '../../../Componentes/Sections/Reutilizable/TripDetails.jsx';
import HotelesJapon from '../../../Componentes/Sections/Reutilizable/HotelesJapon.jsx';

import LetrasDoradasResponsive from '../../../assets/titulosDorados/origendelsolmovil.svg';
import LetrasDoradasDesktop from '../../../assets/titulosDorados/origendelsolweb.svg';


// import LlegadaAeropuerto from '../../../assets/Itinerarios/OrigenDelSol/
import LlegadaAeropuerto from '../../../assets/Itinerarios/OrigenDelSol/Dia_1_Salida_Japon_Premium_Vuelo_Ciudad_Mexico_Viajes_Turismo_Experiencias_Conocer.webp';
import LlegadaKansai from '../../../assets/Itinerarios/OrigenDelSol/Dia_2_osaka_Japon_Premium_Aeropuerto_Recepcion_Hotel_Dome_Viajes_Turismo_.webp';
import VueloEjecutivo from '../../../assets/Itinerarios/OrigenDelSol/Dia_3_Kioto_Japon_Premium_Fushimi_Inari_Torii_Rojos_Simbolismos_Espiritualdad_Viajes_Experiencias_Cultura.webp';
import VistaAvion from '../../../assets/Itinerarios/OrigenDelSol/Dia_4_Kioto_Japon_Premium_Pabellon_Dorado_Kinkaku-ji_Principales_Actividades_Viajes_Turismo.webp';
import EncantoJapan from '../../../assets/Itinerarios/OrigenDelSol/Dia_5_Kioto_Japon_Premium_Antigua_Capital_Imperial_Dia_Libre_Conocer_Turismo_Viajes_Explorar.webp';
import MiradorTorre from '../../../assets/Itinerarios/OrigenDelSol/Dia_6_Takayama_Japon_Premium_Encantadora_Ciudad_Arquitectura_Tradicional_Calles_Empedradas_Historia_Cultura_Turismo_Viajes.webp';
import ToriiFlotante from '../../../assets/Itinerarios/OrigenDelSol/Dia_7_Shirakawago_Japon_Premium_Pueblo_Espectacular_Casas_Estilo_Gassho-Zukuri_Patrimonio_Humanidad_Viajes_Turismo_Cultura.webp';
import TemploNachisan from '../../../assets/Itinerarios/OrigenDelSol/Dia_8_Hakone_Japon_Premium_Lago_Ashi_Minicrucero_Vistas_Monte_Fuji_Viajes_Turismo.webp';
import TurismoDotonbori from '../../../assets/Itinerarios/OrigenDelSol/Dia_9_Tokio_Japon_Premium_Templo_Senso-Ji_Recorrido_Panoramico_Iconos_Capital_Cultura_Viajes_Turismo.webp';
import JardinKenrokuen from '../../../assets/Itinerarios/OrigenDelSol/Dia_10_Tokio_Japon_Premium_Santuario_Toshogu_Viajes_Turismo_Cultura_Historia.webp';
import GrupoTuristas from '../../../assets/Itinerarios/OrigenDelSol/Dia_11_Regreso_Japon_Premium_Aeropuerto_Mexico_Belleza_Japonesa_Viaje_Turismo.webp';


import NumeroUno from '../../../assets/numerosDorados/numero1.svg';
import NumeroDos from '../../../assets/numerosDorados/numero2.svg';
import NumeroTres from '../../../assets/numerosDorados/numero3.svg';
import NumeroCuatro from '../../../assets/numerosDorados/numero4.svg';
import NumeroCinco from '../../../assets/numerosDorados/numero5.svg';
import NumeroSeis from '../../../assets/numerosDorados/numero6.svg';
import NumeroSiete from '../../../assets/numerosDorados/numero7.svg';
import NumeroOcho from '../../../assets/numerosDorados/numero8.svg';
import NumeroNueve from '../../../assets/numerosDorados/numero9.svg';
import NumeroDiez from '../../../assets/numerosDorados/numero10.svg';
import NumeroOnce from '../../../assets/numerosDorados/numero11.svg';

import avion from '../../../assets/avion.svg';
import calendario from '../../../assets/calendario.svg';
import user from '../../../assets/user.svg';

// Hoteles imagenes -  
import Hotel1 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/osaka/Hotel_Vischio_Osaka_By_Granvia.webp';
import Hotel2 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/osaka/Hotel_Hearton_Nishi_Umeda.webp';
import Hotel3 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/osaka/Hotel_Rihga_Royal_Osaka.webp';
import Hotel4 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/osaka/Hotel_Imperial_Osaka.webp';
import Hotel5 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/osaka/Hotel_Ana_Crowne_Plaza_Ozaka.webp';
import Hotel6 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kioto/Hotel_Keihan_Kyoto_Hachijoguchi_Japon_Premium_.webp';
import Hotel7 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kioto/Hotel_Miyako_Kyoto_Hachijo.webp';
import Hotel8 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kioto/Hotel_Granvia_Kyoto.webp';
import Hotel9 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kioto/Hotel_Nikko_Princess_Kyoto.webp';
import Hotel10 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kioto/Hotel_Okura_Kyoto.webp';
import Hotel11 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/takayama/Hotel_Associa_Takayama_resort.webp';
import Hotel12 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/hakone/Hotel_Yumoto_Fujiya.webp';
import Hotel13 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/hakone/Hotel_Ryuguden_en_hakone.webp';
import Hotel14 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/hakone/Hotel_Hakone_Kowakien_Ten_Yu.webp';
import Hotel15 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_Shinagawa_Prince.webp';
import Hotel16 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_Toshi_Center_Tokyo.webp';
import Hotel17 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_New_Otani_Tokyo_Gardent_Tower.webp';
import Hotel18 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_Tokyo_Dome.webp';
import FlyingButton from '../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';

const data = [
  {
    title: "11 Días - 9 Noches",
    subtitle: "Osaka - Nara - Kioto - Nagoya - Magome - Tsumago - Takayama - Shirakawago - Nagoya - Hakone - Tokio",
    text: "Explora la tierra donde nace el sol con un recorrido completo, profundo y emocionante. Este viaje de 11 días te lleva por lo mejor de Japón: templos ancestrales, paisajes naturales, tradiciones milenarias, aldeas de montaña, arquitectura samurái y la energía inigualable de Tokio.",
    image: CaminoKumano,
    altImg: "Vista frontal del Templo Yasukuni en Tokio, Japón, con cielo nublado al atardecer.",
    letrasDoradasResponsive: LetrasDoradasResponsive,
    LetrasDoradasDesktop: LetrasDoradasDesktop,
  }];

const dataSectionCard = [
  {
    title: 'México - Osaka',
    subtitle: NumeroUno,
    subtitleAltText: "Número 1",
    text: "Salida en vuelo intercontinental con destino a Japón.",
    image: LlegadaAeropuerto,
    altText: 'pasajero-observando-el-ala-del-avion-y-el-oceano-desde-la-ventana-durante-vuelo-internacional-hacia-japon-con-japan-Premium.',
  },
  {
    title: 'Osaka',
    subtitle: NumeroDos,
    subtitleAltText: "Número 2",
    text: 'Llegada al aeropuerto y traslado al hotel. Alojamiento.',
    image: LlegadaKansai,
    altText: 'turista-llegando-al-aeropuerto-de-kioto-japon-siendo-recibida-por-guia-de-japan-Premium-en-la-zona-de-arribos.',
  },
  {
    title: 'Osaka - Nara - Kioto',
    subtitle: NumeroTres,
    subtitleAltText: "Número 3",
    text: 'Desayuno. Visita al Castillo de Osaka y continuación hacia Nara para conocer el Gran Buda del Templo Todaiji y el Parque de los Ciervos Sagrados.  Almuerzo incluido. Por la tarde, llegada a Kioto, con parada en el icónico Santuario Fushimi Inari. Alojamiento en Kioto.',
    image: VueloEjecutivo,
    altText: 'turista-con-kimono-tradicional-japones-posando-en-el-bosque-de-bambu-de-kioto-con-japan-Premium.',
  }, {
    title: 'Kioto',
    subtitle: NumeroCuatro,
    subtitleAltText: "Número 4",
    text: 'Desayuno. Visita de la ciudad: el Castillo de Nijo, el Templo Dorado Kinkakuji y el Santuario Heian. Almuerzo incluido. Tiempo libre para explorar Kioto a tu ritmo. Alojamiento.',
    image: VistaAvion,
    altText: 'viajera-en-mirador-con-vista-a-la-torre-de-tokio-y-el-paisaje-urbano-de-la-capital-de-japon-con-japan-Premium',
  }, {
    title: 'Kioto',
    subtitle: NumeroCinco,
    subtitleAltText: "Número 5",
    text: 'Desayuno. Día libre para disfrutar de la ciudad o realizar la excursión opcional a Hiroshima y Miyajima. Alojamiento.',
    image: EncantoJapan,
    altText: 'viajera-frente-al-torii-flotante-de-miyajima-en-hiroshima-durante-el-atardecer-con-japan-Premium.',
  }, {
    title: 'Kioto - Nagoya - Magome - Tsumago - Takayama',
    subtitle: NumeroSeis,
    subtitleAltText: "Número 6",
    text: 'Desayuno. Viaje en tren bala a Nagoya. Excursión por la antigua ruta Nakasendo visitando los pueblos históricos de Magome y Tsumago, donde conocerás el antiguo hospedaje samurái Waki Honjin. Almuerzo tipo picnic incluido. Continuación a Takayama, paseo por la calle tradicional Kami Sannomachi. Cena incluida. Alojamiento',
    image: MiradorTorre,
    altText: 'pareja-de-turistas-viajando-en-tren-bala-shinkansen-en-japon-con-japan-Premium-disfrutando-del-paisaje-desde-la-ventana.',
  }, {
    title: 'Takayama - Shirakawago - Nagoya - Hakone',
    subtitle: NumeroSiete,
    subtitleAltText: "Número 7",
    text: 'Desayuno. Salida a Shirakawago, Patrimonio de la Humanidad, con sus casas tradicionales  gassho-zukuri. Traslado en tren bala Nagoya-Odawara y continuación a Hakone. Cena incluida en Ryokan (categoría lujo) o en hotel (categorías estándar y superior). Alojamiento.',
    image: ToriiFlotante,
    altText: 'pareja-de-turistas-en-el-templo-nachisan-con-pagoda-roja-y-montanas-de-fondo-en-japon-con-japan-Premium.',
  }, {
    title: 'Hakone - Tokio',
    subtitle: NumeroOcho,
    subtitleAltText: "Número 8",
    text: 'Desayuno. Visita al Parque Nacional de Hakone: mini crucero por el Lago Ashi y subida en teleférico. Almuerzo incluido. Traslado por carretera a Tokio y visita de la Torre de Tokio. Alojamiento.',
    image: TemploNachisan,
    altText: 'pareja-de-turistas-en-dotonbori-osaka-con-los-carteles-luminosos-iconicos-al-fondo-con-japan-Premium.',
  }, {
    title: 'Tokio',
    subtitle: NumeroNueve,
    subtitleAltText: "Número 9",
    text: 'Desayuno. Visita de la capital: el Templo Sensoji en Asakusa, el barrio futurista de Odaiba y un paseo en barco por la bahía. Almuerzo incluido. Tarde libre. Alojamiento.',
    image: TurismoDotonbori,
    altText: 'pareja-de-viajeros-disfrutando-del-jardin-kenrokuen-en-kanazawa-japon-con-japan-Premium.',
  }, {
    title: 'Tokio',
    subtitle: NumeroDiez,
    subtitleAltText: "Número 10",
    text: 'Desayuno. Día libre con posibilidad de realizar una excursión opcional a Nikko, famosa por su santuario Toshogu y sus paisajes naturales. Alojamiento.',
    image: JardinKenrokuen,
    altText: 'grupo-de-viajeros-posando-en-la-aldea-tradicional-de-shirakawago-en-kanazawa-japon-con-japan-Premium.',
  }, {
    title: 'Tokio - México',
    subtitle: NumeroOnce,
    subtitleAltText: "Número 11",
    text: 'Desayuno. Traslado al aeropuerto para tomar el vuelo de regreso. Fin de nuestros servicios',
    image: GrupoTuristas,
    altText: 'pareja-navegando-en-barca-sobre-lago-con-cerezos-en-flor-y-barco-tradicional-al-fondo-en-takayama-con-japan-Premium.',
  }
];

const downloadData = [
  {
    id: "01",
    title: "japón premium",
    subtitle: "El Origen del Sol",
    dias: "11 Días - 9 Noches",
    urlDescargar: "https://japonpremium.com/pdf/itinerario-japon-premium-origen-del-sol.pdf"
  }];

const dataPrecios = [
  {
    title: 'Temporada A',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '8,087' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '9,383' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '8,776' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '11,056' },
      { type: 'DOBLE', category: 'LUJO', amount: '10,223' },
      { type: 'SENCILLA', category: 'LUJO', amount: '13,028' },
    ],
  },
  {
    title: 'Temporada B',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '8,370' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '9,764' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '9,038' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '11,670' },
      { type: 'DOBLE', category: 'LUJO', amount: '10,396' },
      { type: 'SENCILLA', category: 'LUJO', amount: '13,620' },
    ],
  },
  {
    title: 'Temporada C',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '8,790' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '10,276' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '9,443' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '12,008' },
      { type: 'DOBLE', category: 'LUJO', amount: '11,431' },
      { type: 'SENCILLA', category: 'LUJO', amount: '15,136' },
    ],
  },
  {
    title: 'Temporada D',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '8,933' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '10,500' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '9,616' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '13,786' },
      { type: 'DOBLE', category: 'LUJO', amount: '11,243' },
      { type: 'SENCILLA', category: 'LUJO', amount: '15,150' },
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
      "Vuelo redondo México - Japón - México.",
      "Traslados aeropuerto-hotel-aeropuerto.",
      "9 noches de alojamiento en hoteles previstos en régimen de desayuno.",
      "Desayunos diarios, 6 almuerzos y 2 cenas.",
      "Trayectos en tren bala (Shinkansen): Kioto-Nagoya y Nagoya-Odawara.",
      "Excursiones y visitas guiadas según programa en bus, minibús, coche privado o transporte público (según número de pasajeros).",
      "Entradas a templos, santuarios y monumentos mencionados en el itinerario.",
      "Seguro de viaje."
    ],
  }, {
    id: "02",
    title: "EL VIAJE A JAPÓN NO INCLUYE",
    description: [
      "Comidas y bebidas no mencionadas.",
      "Actividades opcionales.",
      "Propinas.",
      "Gastos personales.",
      "Seguro de cancelación.",
      'Lo que no esté indicado en el apartado "El Viaje a … incluye".'
    ],
  }, {
    id: "03",
    title: "NOTAS IMPORTANTES",
    description: [
      "Precios en dólares estadounidenses, pagaderos al tipo de cambio vigente.",
      "Tarifas por persona con base en tipo de habitación seleccionada, sujetas a disponibilidad.",
      "Precios sujetos a cambios sin previo aviso debido a la temporada o la disponibilidad",
      "En categoría de lujo no es posible habitación triple.",
      "Algunos traslados podrán realizarse en transporte público dependiendo del número de participantes.",
      "El pasajero es responsable de contar con Pasaporte con una vigencia mínima de seis meses al momento del viaje.",
      "También es responsabilidad del pasajero tramitar visas, ETAs, vacunas y demás requisitos migratorios en caso de ser necesarios. La agencia no se hace responsable si el pasajero no puede viajar por falta de documentos.",
      "Las actividades opcionales tienen costo adicional."
    ],
  },
];

const hotels = [
  {
    id: '1',
    imageUrl: Hotel1,
    location: 'OSAKA',
    hotelName: 'HOTEL Vischio Osaka by Granvia'
  },
  {
    id: '2',
    imageUrl: Hotel2,
    location: 'OSAKA',
    hotelName: 'HOTEL Hearton Nishi Umeda'
  },
  {
    id: '3',
    imageUrl: Hotel3,
    location: 'OSAKA',
    hotelName: 'HOTEL Rihga Royal Osaka'
  },
  {
    id: '4',
    imageUrl: Hotel4,
    location: 'OSAKA',
    hotelName: 'HOTEL Imperial Osaka'
  },
  {
    id: '5',
    imageUrl: Hotel5,
    location: 'OSAKA',
    hotelName: 'HOTEL ANA Crowne Plaza Osaka'
  },
  {
    id: '6',
    imageUrl: Hotel6,
    location: 'KIOTO',
    hotelName: 'HOTEL Keihan Kyoto Hachijoguchi'
  },
  {
    id: '7',
    imageUrl: Hotel7,
    location: 'KIOTO',
    hotelName: 'HOTEL Miyako Kyoto Hachijo'
  },
  {
    id: '8',
    imageUrl: Hotel8,
    location: 'KIOTO',
    hotelName: 'HOTEL Granvia Kyoto'
  },
  {
    id: '9',
    imageUrl: Hotel9,
    location: 'KIOTO',
    hotelName: 'HOTEL Nikko Princess Kyoto'
  },
  {
    id: '10',
    imageUrl: Hotel10,
    location: 'KIOTO',
    hotelName: 'HOTEL Okura Kyoto'
  },
  {
    id: '11',
    imageUrl: Hotel11,
    location: 'TAKAYAMA',
    hotelName: 'HOTEL Associa Takayama Resort'
  },
  {
    id: '12',
    imageUrl: Hotel12,
    location: 'HAKONE',
    hotelName: 'HOTEL Yumoto Fujiya'
  },
  {
    id: '13',
    imageUrl: Hotel13,
    location: 'HAKONE',
    hotelName: 'HOTEL Ryuguden'
  },
  {
    id: '14',
    imageUrl: Hotel14,
    location: 'HAKONE',
    hotelName: 'HOTEL Hakone Kowakien Ten-Yu'
  },
  {
    id: '15',
    imageUrl: Hotel15,
    location: 'TOKIO',
    hotelName: 'HOTEL Shinagawa Prince'
  },
  {
    id: '16',
    imageUrl: Hotel16,
    location: 'TOKIO',
    hotelName: 'HOTEL Toshi Center Tokyo'
  }, {
    id: '17',
    imageUrl: Hotel17,
    location: 'TOKIO',
    hotelName: 'Hotel New Otani Tokyo Gardent Tower'
  }, {
    id: '18',
    imageUrl: Hotel18,
    location: 'TOKIO',
    hotelName: 'Hotel Tokyo Dome'
  }
];


export default function ElOrigenDelSol() {
  useEffect(() => {
    document.title = `Itinerario El Origen del Sol | Japón PREMIUM®`;
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
