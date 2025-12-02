'use client';

import React, { useEffect } from 'react';
import { Suspense } from 'react';
import styles from './SeulATokio.module.css';
import HeroSection from '../../../Componentes/Sections/HeroSection.jsx';
import HeroImage from '../../../assets/Itinerarios/PortadasItinerarios/De_Seul_A_Tokio_Japon_Premium_Palacio_Deoksugung_Portada.webp';

import ItinerariosTemplate from '../../../Componentes/Sections/Reutilizable/ItinerariosTemplate.jsx';

import DownloadSection from '../../../Componentes/Sections/Reutilizable/DownloadSection.jsx';
import CardPrecio from '../../../Componentes/Sections/Reutilizable/CardPrecioPrueba.jsx';
import DetallesNoContiene from '../../../Componentes/Sections/Reutilizable/DetallesNoContiene.jsx';
import TripDetails from '../../../Componentes/Sections/Reutilizable/TripDetails.jsx';
import HotelesJapon from '../../../Componentes/Sections/Reutilizable/HotelesJapon.jsx';

import LetrasDoradasResponsive from '../../../assets/titulosDorados/deseulatokiomovil.svg';
import LetrasDoradasDesktop from '../../../assets/titulosDorados/deseulatokioweb.svg';


import LlegadaAeropuerto from '../../../assets/Itinerarios/SeulATokio/Dia_1_Mexico_JApon_Premium_Salida_Tokio_Vuelo_Aeropuerto_Internacional_Sala_VIP_Aeromexico_Turismo_Viajes.webp';
import LlegadaKansai from '../../../assets/Itinerarios/SeulATokio/Dia_2_Seul_Japon_Premium_Corea_del_Sur_Historico_Insadong_Calle_Cultural_Tradicional_Viajes_Turismo.webp';
import VueloEjecutivo from '../../../assets/Itinerarios/SeulATokio/Dia_3_Seul_Japon_Premium_Fortaleza_Korean_Folk_Village_Viajes_Turismo_Excursion_Cultura_Tradicion.webp';
import VistaAvion from '../../../assets/Itinerarios/SeulATokio/Dia_4_Seul_Fortaleza_Hwaseong_Haenggung_Viajes_Turismo_Explorar_Experiencias.webp';
import EncantoJapan from '../../../assets/Itinerarios/SeulATokio/Dia_5_Jeonju_JApon_PRemium_Seul_Templo_Haiensa_UNESCO_Tripitaka_Koreana_Viajes_Turismo_.webp';
import MiradorTorre from '../../../assets/Itinerarios/SeulATokio/Dia_6_Busan_Japon_Premium_Parque_Yongdusan_Viajes_Turismo_Visitar_Explorar_.webp';
import ToriiFlotante from '../../../assets/Itinerarios/SeulATokio/Dia_7_Iwakuni_Japon_Premium_Puente_Kintai-Kyo_Viajes_Turismo_Explorar_Aventuras.webp';
import TemploNachisan from '../../../assets/Itinerarios/SeulATokio/Dia_8_Matsuyama_Japon_Premium_Tradicional_Dogo_Onsen_Viajes_Turismo_Cultura_Experiencias.webp';
import TurismoDotonbori from '../../../assets/Itinerarios/SeulATokio/Dia_9_Matsuyama_Japon_Premium_Santuario_Kotohira_Viajes_Turismo_Experiencias_Cultura_Actividades.webp';
import JardinKenrokuen from '../../../assets/Itinerarios/SeulATokio/Dia_10_Monte_Koya_Japon_Premium_Mausoleo_Okuno_Viajes_Turismo_Cultura_Historia.webp';
import GrupoTuristas from '../../../assets/Itinerarios/SeulATokio/Dia_11_Kioto_Japon_Premium_Esencia_Pabellon_Dorado_Kinkaku-ji_Visitas_Viajes_Turismo_cultura.webp';
import PaseoEnBarca from '../../../assets/Itinerarios/SeulATokio/Dia_12_Kioto_Japon_Premium_Tren_Bala_Shinkansen_Antigua_Capital_Imperial_Callejones_Templos_Turismo_Viajes.webp';
import CastilloHimeji from '../../../assets/Itinerarios/SeulATokio/Dia_13_Tokio_Japon_Prmeium_Calle_Nakamise_Turismo_Viajes_Cultura_Gastronomia_Recorrido_Panoramico.webp';
import CatarataJapon from '../../../assets/Itinerarios/SeulATokio/Dia_14_Mexico_Japon_Premium_Llegada_Arribo_Ciudad_Finaliza_Viajes_Turismo_Experiencias_.webp';

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

import avion from '../../../assets/avion.svg';
import calendario from '../../../assets/calendario.svg';
import user from '../../../assets/user.svg';

// Hoteles imagenes 
import Hotel1 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/CoreaDelSur/Hotel_Courtyard_By_Marriot_Seoul_Times_Square_Corea_Del_Sur_Japon_Premium_.webp';
import Hotel2 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/CoreaDelSur/Hotel_JS_Jeonju_Corea_Del_Sur_Japon_Premium.webp';
import Hotel3 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/CoreaDelSur/Hotel_Pungnam_Tourist_Jeonju_Corea_Del_Sur_Japon_Premium.webp';
import Hotel4 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/CoreaDelSur/Hotel_Ibis_Ambassador_Busan_Haeundae_Corea_Del_Sur_Japon_Premium.webp';
import Hotel5 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/kioto/Hotel_Daiwa_Roynet_ariake.webp';
import Hotel6 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/hiroshima/hotel_granvia_hiroshima.webp';
import Hotel7 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/hiroshima/Hotel_Rihga_Royal_Hiroshima.webp';
import Hotel8 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/hiroshima/Hotel_Sheraton_Grand_Hiroshima.webp';
import Hotel9 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/KOBE/Hotel_Ana_Crowne_Plaza_Kobe.webp';
import Hotel10 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/KOBE/Hotel_Kobe_Meriken_Park_Oriental.webp';
import Hotel11 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/kioto/Hotel_Kyoto_Tokyu.webp';
import Hotel12 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_Shinagawa_Prince.webp';
import FlyingButton from '../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';



const data = [
  {
    title: "14 Días - 12 Noches",
    subtitle: "Seúl - Suwon - Jeonju - Busan - Iwakuni - Hiroshima - Matsuyama - Takamatsu - Monte Koya - Kioto - Tokio",
    text: "Un recorrido fascinante que une lo mejor de Corea del Sur y Japón: modernidad, cultura ancestral y paisajes inolvidables.",
    image: HeroImage,
    altImg: "Vista frontal del Templo Yasukuni en Tokio, Japón, con cielo nublado al atardecer.",
    letrasDoradasResponsive: LetrasDoradasResponsive,
    LetrasDoradasDesktop: LetrasDoradasDesktop,
  }];

const dataSectionCard = [
  {
    title: 'México - Seúl',
    subtitle: NumeroUno,
    subtitleAltText: "Número 1",
    text: "Salida en vuelo intercontinental con destino a Corea del Sur.",
    image: LlegadaAeropuerto,
    altText: 'pasajero-observando-el-ala-del-avion-y-el-oceano-desde-la-ventana-durante-vuelo-internacional-hacia-japon-con-japan-Premium.',
  },
  {
    title: 'Seúl',
    subtitle: NumeroDos,
    subtitleAltText: "Número 2",
    text: 'Llegada y traslado al hotel. Por la tarde, recorrido en metro hacia el Ayuntamiento y Palacio Deoksugung, iluminado de noche. Paseo por Myeongdong, la zona comercial más vibrante de la ciudad. Cena incluida. Alojamiento.',
    image: LlegadaKansai,
    altText: 'turista-llegando-al-aeropuerto-de-kioto-japon-siendo-recibida-por-guia-de-japan-Premium-en-la-zona-de-arribos.',
  },
  {
    title: 'Seúl',
    subtitle: NumeroTres,
    subtitleAltText: "Número 3",
    text: 'Desayuno. Visita panorámica: Changdeokgung Palace (Patrimonio de la Humanidad por la UNESCO), el barrio tradicional Bukchon Hanok Village, el Memorial de la Guerra, el moderno Distrito Gangnam y la Lotte World Tower (entrada no incluida). Almuerzo incluido. Tiempo libre. Alojamiento.',
    image: VueloEjecutivo,
    altText: 'turista-con-kimono-tradicional-japones-posando-en-el-bosque-de-bambu-de-kioto-con-japan-Premium.',
  }, {
    title: 'Seúl - Suwon - Jeonju',
    subtitle: NumeroCuatro,
    subtitleAltText: "Número 4",
    text: 'Desayuno. Visita al Palacio Gyeongbokgung con su ceremonia de cambio de guardia, la Fortaleza de Hwaseong Haenggung y el Samsung Innovation Museum.  Almuerzo incluido. Continuación a Jeonju para conocer su casco histórico y el Hanok Village. Alojamiento.',
    image: VistaAvion,
    altText: 'viajera-en-mirador-con-vista-a-la-torre-de-tokio-y-el-paisaje-urbano-de-la-capital-de-japon-con-japan-Premium',
  }, {
    title: 'Jeonju - Haeinsa - Daegu - Busan',
    subtitle: NumeroCinco,
    subtitleAltText: "Número 5",
    text: 'Desayuno. Excursión al Templo Haeinsa (Patrimonio de la Humanidad por la UNESCO), donde se conserva el Tripitaka Koreana. Visita al museo de medicina oriental en Daegu. Almuerzo incluido. Continuación a Busan, con recorrido por la playa de Haeundae y su puerto deportivo. Alojamiento.',
    image: EncantoJapan,
    altText: 'viajera-frente-al-torii-flotante-de-miyajima-en-hiroshima-durante-el-atardecer-con-japan-Premium.',
  }, {
    title: 'Busan - Ferry nocturno a Japón',
    subtitle: NumeroSeis,
    subtitleAltText: "Número 6",
    text: 'Desayuno. Visita al Templo Haedong Yonggung, al Memorial de Naciones Unidas y al Parque Yongdusan. Almuerzo incluido. Por la noche, embarque en ferry hacia Shimonoseki (Japón) en camarotes dobles con baño. Alojamiento a bordo.',
    image: MiradorTorre,
    altText: 'pareja-de-turistas-viajando-en-tren-bala-shinkansen-en-japon-con-japan-Premium-disfrutando-del-paisaje-desde-la-ventana.',
  }, {
    title: 'Shimonoseki - Iwakuni - Itsukushima - Hiroshima',
    subtitle: NumeroSiete,
    subtitleAltText: "Número 7",
    text: 'Llegada a Japón. Visita a Iwakuni y su puente Kintai-Kyo. Continuación a la isla de Miyajima para conocer el Santuario Itsukushima. En Hiroshima, recorrido por el Memorial de la Paz, la Cúpula de la Bomba y el Museo de la  Paz. Cena incluida. Alojamiento.',
    image: ToriiFlotante,
    altText: 'pareja-de-turistas-en-el-templo-nachisan-con-pagoda-roja-y-montanas-de-fondo-en-japon-con-japan-Premium.',
  }, {
    title: 'Hiroshima - Matsuyama',
    subtitle: NumeroOcho,
    subtitleAltText: "Número 8",
    text: 'Desayuno. Ferry a Shikoku. Visita al Castillo de Matsuyama, el Templo Ishiteji y el tradicional Dogo Onsen. Almuerzo incluido. Alojamiento.',
    image: TemploNachisan,
    altText: 'pareja-de-turistas-en-dotonbori-osaka-con-los-carteles-luminosos-iconicos-al-fondo-con-japan-Premium.',
  }, {
    title: 'Matsuyama - Kotohira - Takamatsu - Naruto - Kobe',
    subtitle: NumeroNueve,
    subtitleAltText: "Número 9",
    text: 'Desayuno. Visita al Santuario Kotohira, los jardines de Ritsurin y el puente de Naruto, famoso por sus remolinos marinos. Almuerzo incluido. Llegada a Kobe. Alojamiento.',
    image: TurismoDotonbori,
    altText: 'pareja-de-viajeros-disfrutando-del-jardin-kenrokuen-en-kanazawa-japon-con-japan-Premium.',
  }, {
    title: 'Kobe - Osaka - Monte Koya',
    subtitle: NumeroDiez,
    subtitleAltText: "Número 10",
    text: 'Desayuno. Visita al Museo Memorial del Terremoto de Kobe. Traslado a Monte Koya, centro espiritual del budismo Shingon. Visita al Mausoleo de  Okuno, el Templo Kongobuji y práctica de meditación zen (Ajikan). Cena vegetariana incluida. Alojamiento en monasterio budista.',
    image: JardinKenrokuen,
    altText: 'grupo-de-viajeros-posando-en-la-aldea-tradicional-de-shirakawago-en-kanazawa-japon-con-japan-Premium.',
  }, {
    title: 'Monte Koya - Kioto',
    subtitle: NumeroOnce,
    subtitleAltText: "Número 11",
    text: 'Desayuno japonés en el templo. Traslado a Kioto: visita al Santuario Fushimi Inari, el Palacio Imperial, el Pabellón Dorado (Kinkakuji) y paseo por el barrio de Gion. Alojamiento.',
    image: GrupoTuristas,
    altText: 'pareja-navegando-en-barca-sobre-lago-con-cerezos-en-flor-y-barco-tradicional-al-fondo-en-takayama-con-japan-Premium.',
  }, {
    title: ' Kioto - Tokio',
    subtitle: NumeroDoce,
    subtitleAltText: "Número 12",
    text: 'Desayuno. Viaje en tren bala hacia Tokio. Llegada y recorrido nocturno en metro por la vibrante zona de Shinjuku. Cena incluida. Alojamiento.',
    image: PaseoEnBarca,
    altText: 'viajera-frente-al-castillo-de-himeji-en-japon-disfrutando-de-su-arquitectura-tradicional-con-japan-Premium.',
  }, {
    title: 'Tokio',
    subtitle: NumeroTrece,
    subtitleAltText: "Número 13",
    text: 'Desayuno. Tour panorámico: Templo Zojoji, el cruce de Shibuya, Santuario Meiji, avenida Omotesando, Palacio Imperial, barrio tecnológico Akihabara, el estadio de sumo Kokugikan y el Templo Sensoji en Asakusa. Almuerzo incluido. Tarde libre. Alojamiento.',
    image: CastilloHimeji,
    altText: 'Turista en avión regresando de Japón a México, en clase ejecutiva con Japan Premium, sosteniendo maleta de viaje.',
  }, {
    title: 'Tokio - México',
    subtitle: NumeroCatorce,
    subtitleAltText: "Número 14",
    text: 'Desayuno. Traslado al aeropuerto para el vuelo de regreso. Fin de nuestros servicios.',
    image: CatarataJapon,
    altText: 'Turista en avión regresando de Japón a México, en clase ejecutiva con Japan Premium, sosteniendo maleta de viaje.',
  }
];

const downloadData = [
  {
    id: "01",
    title: "japón premium",
    subtitle: "De Seúl a Tokio",
    dias: "14 Días - 12 Noches",
    urlDescargar: "https://japonpremium.com/pdf/itinerario-japon-premium-seul-a-tokio.pdf"
  }];

const dataPrecios = [
  {
    title: 'Temporada A',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '8,842' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '10,234' },
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
      "Vuelo redondo México - Seúl / Tokio - México.",
      "Traslados aeropuerto-hotel.",
      "12 noches de alojamiento en hoteles previstos.",
      "11 comidas incluidas (almuerzos o cenas).",
      "Visitas panorámicas en Seúl, Kioto y Tokio.",
      "Traslados nocturnos a Myeongdong (Seúl), Gion (Kioto) y Shinjuku (Tokio).",
      "Entradas a sitios emblemáticos: Changdeokgung, Gyeongbokgung, Fushimi Inari, Itsukushima, Palacio Imperial, Kinkakuji, Sensoji, entre otros.",
      "Ferry nocturno Busan-Shimonoseki.",
      "Ferry Hiroshima-Miyajima y Hiroshima-Matsuyama.",
      "Funicular al Castillo de Matsuyama.",
      "Tren bala Kioto-Tokio.",
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
      "Lo que no esté indicado en el apartado “El Viaje a … incluye”."
    ],
  }, {
    id: "03",
    title: "NOTAS IMPORTANTES",
    description: [
      "Para este viaje no se requiere visa estadounidense.",
      "El traslado de salida no cuenta con asistencia en español.",
      "Tarifas por persona según el tipo de habitación, sujetas a disponibilidad.",
      "Precios en dólares estadounidenses, pagaderos al tipo de cambio vigente.",
      "El pasajero es responsable de contar con Pasaporte con una vigencia mínima de seis meses.",
      "Tarifas sujetas a cambios sin previo aviso debido a la temporada o la disponibilidad",
      "Las actividades opcionales tienen costo adicional."
    ],
  },
];

const hotels = [
  {
    id: '1',
    imageUrl: Hotel1,
    country: 'Corea del Sur',
    location: 'Seoul',
    hotelName: 'Hotel Courtyard by Marriott Seoul Times Square'
  },
  {
    id: '2',
    imageUrl: Hotel2,
    country: 'Corea del Sur',
    location: 'Seoul',
    hotelName: 'Hotel JS'
  },
  {
    id: '3',
    imageUrl: Hotel3,
    country: 'Corea del Sur',
    location: 'Seoul',
    hotelName: 'Hotel Pungnam Tourist'
  },
  {
    id: '4',
    imageUrl: Hotel4,
    country: 'Corea del Sur',
    location: 'Busan',
    hotelName: 'Hotel Ibis Budget Ambassador Busan Haeundae'
  },
  {
    id: '5',
    imageUrl: Hotel5,
    location: 'TOKIO',
    hotelName: 'Hotel Daiwa Roynet'
  },
  {
    id: '6',
    imageUrl: Hotel6,
    location: 'HIROSHIMA',
    hotelName: 'Hotel Granvia Hiroshima'
  },
  {
    id: '7',
    imageUrl: Hotel7,
    location: 'HIROSHIMA',
    hotelName: 'Hotel Rihga Royal Hiroshima'
  },
  {
    id: '8',
    imageUrl: Hotel8,
    location: 'HIROSHIMA',
    hotelName: 'Hotel Sheraton Grand Hiroshima'
  },
  {
    id: '9',
    imageUrl: Hotel9,
    location: 'MATSUYAMA',
    hotelName: 'Hotel ANA Crowne Plaza Matsuyama'
  },
  {
    id: '10',
    imageUrl: Hotel10,
    location: 'KOBE',
    hotelName: 'Hotel Kobe Meriken Park Oriental'
  },
  {
    id: '11',
    imageUrl: Hotel11,
    location: 'KIOTO',
    hotelName: 'Hotel Kyoto Tokyu'
  },
  {
    id: '12',
    imageUrl: Hotel12,
    location: 'Shinagawa',
    hotelName: 'Hotel Shinagawa Prince'
  }
];


export default function SeulATokio() {

  useEffect(() => {
    document.title = `Itinerario Seúl a Tokio | Japón PREMIUM®`;
  }, []);


  return (
    <>
      <FlyingButton />
      <HeroSection data={data} />
      <Suspense fallback={<div className={styles.loading}>Cargando contenido...</div>}>
        <ItinerariosTemplate data={dataSectionCard} />

        {downloadData.map(item => (
          <DownloadSection key={item.id} kkey={item.id} title={item.title} subtitle={item.subtitle} dias={item.dias} urlDescargar={item.urlDescargar} />
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
