'use client';

import React, { useEffect } from 'react';
import { Suspense } from 'react';
import styles from './JaponYDubaiTotal.module.css';
import HeroSection from '../../../Componentes/Sections/HeroSection.jsx';
import HeroImage from '../../../assets/Itinerarios/PortadasItinerarios/Japon_&_Dubai_Total_Japon_Premium_Mezquita_Sheikh_Zayed_Portada.webp';

import ItinerariosTemplate from '../../../Componentes/Sections/Reutilizable/ItinerariosTemplate.jsx';

import DownloadSection from '../../../Componentes/Sections/Reutilizable/DownloadSection.jsx';
import CardPrecio from '../../../Componentes/Sections/Reutilizable/CardPrecioPrueba.jsx';
import DetallesNoContiene from '../../../Componentes/Sections/Reutilizable/DetallesNoContiene.jsx';
import TripDetails from '../../../Componentes/Sections/Reutilizable/TripDetails.jsx';
import HotelesJapon from '../../../Componentes/Sections/Reutilizable/HotelesJapon.jsx';

import LetrasDoradasResponsive from '../../../assets/titulosDorados/japon_y_dubai_total_celular.svg';
import LetrasDoradasDesktop from '../../../assets/titulosDorados/japon_y_dubai_total_web.svg';


import LlegadaAeropuerto from '../../../assets/Itinerarios/JaponYDubaiTotal/Dia_1_Mexico_Japon_Premium_Salida_Vuelo_Internacional_Mexico_Tokio_Japon_Viajes_Turismo.webp';
import LlegadaKansai from '../../../assets/Itinerarios/JaponYDubaiTotal/Dia_2_Tokio_Japon_Premium_Traslado_Hospejade_Hotel_Villa_Fontaine_Viajes_Turismo_.webp';
import VueloEjecutivo from '../../../assets/Itinerarios/JaponYDubaiTotal/Dia_3_Tokio_Japon_Premium_Torre_Tokio_Vista_Panoramica_Capital_Majestuosa_Tarde_Libre_Viajes_Turismo.webp';
import VistaAvion from '../../../assets/Itinerarios/JaponYDubaiTotal/Dia_4_Hakone_Japon_Premium_Monte_Komagatake_Monte_Fuji_Teleferico_Viajes_Turismo_Vistas_Excursion.webp';
import EncantoJapan from '../../../assets/Itinerarios/JaponYDubaiTotal/Dia_5_Kioto_Japon_Premium_Santuario_Fushimi_Inari_Miles_Torii_Rojos_Dia_Libre_Viajes_Turismo_Experiencias.webp';
import MiradorTorre from '../../../assets/Itinerarios/JaponYDubaiTotal/Dia_6_Kioto_Japon_Premium_Templo_Tenryuji_Viajes_Turismo_Cultura_Historia.webp';
import ToriiFlotante from '../../../assets/Itinerarios/JaponYDubaiTotal/Dia_7_Kioto_Japon_Premium_Castillo_Nijo_Encantos_Imperiales_Historia_Cultura_Viajes_Turismo.webp';
import TemploNachisan from '../../../assets/Itinerarios/JaponYDubaiTotal/Dia_8_Dubai_Japon_Premium_Traslado_Aeropuerto_Hotel_Emiratos_Arabes_Unidos_Viajes_Turismo.webp';
import TurismoDotonbori from '../../../assets/Itinerarios/JaponYDubaiTotal/Dia_9_Dubai_Japon_Premium_Ultima_Jornada_Paseo_Camello_dunas_Rojas_Viajes_Turismo.webp';
import JardinKenrokuen from '../../../assets/Itinerarios/JaponYDubaiTotal/Dia_10_Dubai_Japon_Premium_Moderno_Ciudad_Futurista_Burj_Al_Arab_Compras_Gastronomia_Restaurantes_Viajes_Turismo.webp';
import GrupoTuristas from '../../../assets/Itinerarios/JaponYDubaiTotal/Dia_11_Sharjah_Japon_Premium_Cena_A_Bordo_Dhow_Tradicional_Vistas_Bahia_Viajes_Turismo.webp';
import PaseoEnBarca from '../../../assets/Itinerarios/JaponYDubaiTotal/Dia_12_Emiratos_Arabes_Unidos_Japon_Premium_Louvre_Abu_Dhabi_Viajes_Turismo_Experiencias_Cultura.webp';
import CastilloHimeji from '../../../assets/Itinerarios/JaponYDubaiTotal/Dia_13_Dubai_Japon_Premium_Antiguo_Zoco_del_Oro_Visita_Compras_Viajes_Turismo_Shopping.webp';
import CatarataJapon from '../../../assets/Itinerarios/JaponYDubaiTotal/Dia_14_Dubai_Japon_Premium_Vuelo_Mexico_Noche_A_Bordo_Aeropuerto_Avion_Internacional_Comercial_Viajes_Turismo.webp';
import TrasladoMexico from '../../../assets/Itinerarios/JaponYDubaiTotal/Dia_15_Mexico_Japon_Premium_Travesia_Inolvidable_Tradicion_Japonesa_Lujo_Arabe_Viajes_Aeropuerto_Internacional_Turismo.webp';

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
import NumeroDoce from '../../../assets/numerosDorados/numero12.svg';
import NumeroTrece from '../../../assets/numerosDorados/numero13.svg';
import NumeroCatorce from '../../../assets/numerosDorados/numero14.svg';
import NumeroQuince from '../../../assets/numerosDorados/numero15.svg';

import avion from '../../../assets/avion.svg';
import calendario from '../../../assets/calendario.svg';
import user from '../../../assets/user.svg';

// Hoteles imagenes 
import Hotel1 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/tokio/Hotel_New_Otani_Tokyo_Gardent_Tower.webp';
import Hotel2 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/kioto/Hotel_Kyoto_Tokyu.webp';
import Hotel3 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Dubai/Hotel_Novotel_Deira_City_Centre_Dubai_Japon_Premium.webp';
import FlyingButton from '../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';



const data = [
  {
    title: "15 Días - 13 Noches",
    subtitle: "Hakone - Tokio - Osaka - Kioto - Nara",
    text: "Un viaje espiritual y cultural que conecta lo mejor de Japón: ciudades vibrantes, templos  ancestrales, paisajes de ensueño y la experiencia única de recorrer la histórica ruta de  peregrinación Kumano Kodo.",
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
    text: 'Llegada al aeropuerto de Narita. Recepción y traslado al hotel en servicio regular. Resto del día libre. Alojamiento.',
    image: LlegadaKansai,
    altText: 'turista-llegando-al-aeropuerto-de-kioto-japon-siendo-recibida-por-guia-de-japan-Premium-en-la-zona-de-arribos.',
  },
  {
    title: 'Tokio',
    subtitle: NumeroTres,
    subtitleAltText: "Número 3",
    text: 'Desayuno. City Tour: Palacio Imperial (exterior), Santuario Meiji, Templo Sensoji en Asakusa, la calle Nakamise y el exclusivo barrio de Ginza.  Tarde libre. Alojamiento.',
    image: VueloEjecutivo,
    altText: 'turista-con-kimono-tradicional-japones-posando-en-el-bosque-de-bambu-de-kioto-con-japan-Premium.',
  }, {
    title: 'Tokio - Hakone - Tokio',
    subtitle: NumeroCuatro,
    subtitleAltText: "Número 4",
    text: 'Desayuno. Excursión al Parque Nacional de Hakone: crucero por el Lago Ashi, teleférico y visita al Valle Owakudani. Almuerzo incluido. Visita al Museo al Aire Libre de Hakone. Alojamiento en Tokio.',
    image: VistaAvion,
    altText: 'viajera-en-mirador-con-vista-a-la-torre-de-tokio-y-el-paisaje-urbano-de-la-capital-de-japon-con-japan-Premium',
  }, {
    title: 'Tokio - Nara - Kioto',
    subtitle: NumeroCinco,
    subtitleAltText: "Número 5",
    text: 'Desayuno. Viaje en tren bala Nozomi hacia Kioto. En ruta, visita al Santuario Fushimi Inari y excursión a Nara para conocer el Gran Buda del Templo Todaiji y el Parque de los Ciervos Sagrados. Alojamiento en Kioto.',
    image: EncantoJapan,
    altText: 'viajera-frente-al-torii-flotante-de-miyajima-en-hiroshima-durante-el-atardecer-con-japan-Premium.',
  }, {
    title: 'Kioto',
    subtitle: NumeroSeis,
    subtitleAltText: "Número 6",
    text: 'Desayuno. Tour completo por Kioto: Templo Tenryuji, Bosque de Bambú de Arashiyama, Pabellón Dorado (Kinkakuji), Templo Sanjusangendo con sus mil estatuas y paseo por el barrio de  Gion, hogar de las geishas. Almuerzo incluido. Alojamiento',
    image: MiradorTorre,
    altText: 'pareja-de-turistas-viajando-en-tren-bala-shinkansen-en-japon-con-japan-Premium-disfrutando-del-paisaje-desde-la-ventana.',
  }, {
    title: 'Kioto',
    subtitle: NumeroSiete,
    subtitleAltText: "Número 7",
    text: 'Desayuno. Día libre para actividades personales o excursión opcional a Hiroshima y Miyajima. Alojamiento.',
    image: ToriiFlotante,
    altText: 'pareja-de-turistas-en-el-templo-nachisan-con-pagoda-roja-y-montanas-de-fondo-en-japon-con-japan-Premium.',
  }, {
    title: ' Kioto - osaka - Dubái',
    subtitle: NumeroOcho,
    subtitleAltText: "Número 8",
    text: 'Desayuno. Traslado al aeropuerto de Osaka y vuelo hacia Dubái. Llegada y traslado al hotel. Alojamiento.',
    image: TemploNachisan,
    altText: 'pareja-de-turistas-en-dotonbori-osaka-con-los-carteles-luminosos-iconicos-al-fondo-con-japan-Premium.',
  }, {
    title: 'Dubái - Safari por el desierto',
    subtitle: NumeroNueve,
    subtitleAltText: "Número 9",
    text: 'Desayuno. Mañana libre. Por la tarde, excursión en vehículos 4x4 por las dunas, cena y espectáculo en campamento beduino. Alojamiento.',
    image: TurismoDotonbori,
    altText: 'pareja-de-viajeros-disfrutando-del-jardin-kenrokuen-en-kanazawa-japon-con-japan-Premium.',
  }, {
    title: 'Dubái',
    subtitle: NumeroDiez,
    subtitleAltText: "Número 10",
    text: 'Desayuno. City Tour: Zoco de las Especias, Zoco de Oro, Museo de Dubái, recorrido por Jumeirah, foto en el Burj Al Arab y visita al Dubai Mall.  Tiempo libre. Alojamiento.',
    image: JardinKenrokuen,
    altText: 'grupo-de-viajeros-posando-en-la-aldea-tradicional-de-shirakawago-en-kanazawa-japon-con-japan-Premium.',
  }, {
    title: 'Dubái - Sharjah - Crucero Dhow',
    subtitle: NumeroOnce,
    subtitleAltText: "Número 11",
    text: 'Desayuno. Excursión a Sharjah: la Rotonda de la Cultura, el Museo de Historia Natural y la Corniche. Por la noche, cena a bordo de un Dhow tradicional con vistas a la bahía. Alojamiento.',
    image: GrupoTuristas,
    altText: 'pareja-navegando-en-barca-sobre-lago-con-cerezos-en-flor-y-barco-tradicional-al-fondo-en-takayama-con-japan-Premium.',
  }, {
    title: ' Dubái - Abu Dhabi - Dubái',
    subtitle: NumeroDoce,
    subtitleAltText: "Número 12",
    text: 'Desayuno. Excursión de día completo a Abu Dhabi: Mezquita Sheikh Zayed, Corniche Road, zona de palacios reales y el Marina Mall. Almuerzo incluido. Alojamiento.',
    image: PaseoEnBarca,
    altText: 'viajera-frente-al-castillo-de-himeji-en-japon-disfrutando-de-su-arquitectura-tradicional-con-japan-Premium.',
  }, {
    title: 'Dubái',
    subtitle: NumeroTrece,
    subtitleAltText: "Número 13",
    text: 'Desayuno. Día libre para compras o actividades personales. Alojamiento.',
    image: CastilloHimeji,
    altText: 'Turista en avión regresando de Japón a México, en clase ejecutiva con Japan Premium, sosteniendo maleta de viaje.',
  }, {
    title: 'Dubái',
    subtitle: NumeroCatorce,
    subtitleAltText: "Número 14",
    text: 'Desayuno. Día libre para disfrutar del lujo y modernidad de Dubái. Alojamiento.',
    image: CatarataJapon,
    altText: 'Turista en avión regresando de Japón a México, en clase ejecutiva con Japan Premium, sosteniendo maleta de viaje.',
  }, {
    title: 'Dubái - México',
    subtitle: NumeroQuince,
    subtitleAltText: "Número 15",
    text: 'Desayuno. Traslado al aeropuerto para el vuelo de regreso. Fin de nuestros servicios.',
    image: TrasladoMexico,
    altText: 'Turista en avión regresando de Japón a México, en clase ejecutiva con Japan Premium, sosteniendo maleta de viaje.',
  },
];

const downloadData = [
  {
    id: "01",
    title: "japón premium",
    subtitle: "Japón & Dubái",
    dias: "15 Días - 13 Noches",
    urlDescargar: "https://japonpremium.com/pdf/itinerario-japon-premium-japon-dubai-total.pdf"
  }];

const dataPrecios = [
  {
    title: 'Temporada A',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '8,948' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '10,764' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '9,478' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '11,776' },
    ],
  },
  {
    title: 'Temporada B',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '9,126' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '11,123' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '9,655' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '12,640' },
    ],
  },
  {
    title: 'Temporada C',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '9,412' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '11,585' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '9,942' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '12,954' },
    ],
  }
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
      "Vuelo interno Osaka - Dubái.",
      "Noches de alojamiento en hoteles previstos en Japón.",
      "Desayunos diarios + 2 almuerzos incluidos.",
      "Viaje en tren bala Nozomi (Tokio-Kioto).",
      "Excursiones y visitas guiadas según itinerario (bus, minibús o privado según número de pasajeros).",
      "Entradas a templos, santuarios y sitios destacados.",
      "Traslados con asistencia en inglés.",
      "7 noches de alojamiento con desayuno buffet.",
      "Safari por el desierto con cena y espectáculo.",
      "City Tour de Dubái con guía en español.",
      "Excursión a Sharjah con guía en español.",
      "Crucero Dhow con cena incluida.",
      "Excursión de día completo a Abu Dhabi con guía en español y almuerzo.",
      "Transporte durante las visitas.",
      "Entradas según itinerario.",
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
      "Para este viaje no se requiere visa estadounidense.",
      "El traslado de salida no cuenta con asistencia en español.",
      "Precios en dólares estadounidenses, pagaderos al tipo de cambio vigente.",
      "Tarifas por persona según habitación y sujetas a disponibilidad.",
      "Es responsabilidad del pasajero contar con Pasaporte con una vigencia mínima de seis meses.",
      "Tarifas sujetas a cambios sin previo aviso por temporada o confirmación.",
      "Actividades opcionales tienen costo adicional."
    ],
  },
];

const hotels = [
  {
    id: '1',
    imageUrl: Hotel1,
    location: 'TOKIO',
    hotelName: 'Hotel New Otani Tokyo Gardent Tower'
  },
  {
    id: '2',
    imageUrl: Hotel2,
    location: 'KIOTO',
    hotelName: 'Hotel Kyoto Tokyu'
  },
  {
    id: '3',
    imageUrl: Hotel3,
    country: 'Emiratos Árabes Unidos',
    location: 'Dubai',
    hotelName: 'Hotel Novotel Dubai Deira City Centre'
  }
];


export default function JaponYDubaiTotal() {

  useEffect(() => {
    document.title = `Itinerario Japón & Dubái | Japón PREMIUM®`;
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
