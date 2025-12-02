'use client';

import React, { useEffect } from 'react';
import { Suspense } from 'react';
import styles from './JaponTailandia.module.css';
import HeroSection from '../../../Componentes/Sections/HeroSection.jsx';
import ImagenHero from '../../../assets/Itinerarios/PortadasItinerarios/Japon_&_Tailandia_A_Tu_Alcance_Japon_Premium_Gran_Palacio_Bangkok_Joyas_Lejano_Oriente.webp';

import ItinerariosTemplate from '../../../Componentes/Sections/Reutilizable/ItinerariosTemplate.jsx';

import DownloadSection from '../../../Componentes/Sections/Reutilizable/DownloadSection.jsx';
import CardPrecio from '../../../Componentes/Sections/Reutilizable/CardPrecioPrueba.jsx';
import DetallesNoContiene from '../../../Componentes/Sections/Reutilizable/DetallesNoContiene.jsx';
import TripDetails from '../../../Componentes/Sections/Reutilizable/TripDetails.jsx';
import HotelesJapon from '../../../Componentes/Sections/Reutilizable/HotelesJapon.jsx';

import LetrasDoradasResponsive from '../../../assets/titulosDorados/japontailandiamovil.svg';
import LetrasDoradasDesktop from '../../../assets/titulosDorados/japontailandiaweb.svg';


import LlegadaAeropuerto from '../../../assets/Itinerarios/JaponYTailandia/Dia_1_Mexico_Japonn_Premium_Viajes_Turismo_Aeropuerto_Internacional_Vuelos_Avion_Traslado.webp';
import LlegadaKansai from '../../../assets/Itinerarios/JaponYTailandia/Dia_2_Tokio_Japon_Premium_Hotel_Villa_Fontaine_Roppongi_Traslado_Alojamiento_Viajes_Turismo.webp';
import VueloEjecutivo from '../../../assets/Itinerarios/JaponYTailandia/Dia_3_Tokio_Japon_Premium_City_Tour_Templo_Sensoji_Asakusa_Viajes_Turismo_Tarde_Libre.webp';
import VistaAvion from '../../../assets/Itinerarios/JaponYTailandia/Dia_4_Hakone_Japon_Premum_Crucero_Lago_Ashi_Vistas_Valle_Owakudani_Monte_Fuji_Viajes_Turismo.webp';
import EncantoJapan from '../../../assets/Itinerarios/JaponYTailandia/Dia_5_Nara_Japon_Premium_Santuario_Fushimi_Inari_Viajes_Turismo_Torii_Rojos_Miles.webp';
import MiradorTorre from '../../../assets/Itinerarios/JaponYTailandia/Dia_6_Kioto_Japon_Premium_Templo_Sanjusangendo_Mil_Estatuas_Viajes_Turismo_Tour_Cultural_Historia.webp';
import ToriiFlotante from '../../../assets/Itinerarios/JaponYTailandia/Dia_7_Hiroshima_Japon_Premium_Parque_Memorial_Paz_Viajes_Turismo_Cultura_Historia.webp';
import TemploNachisan from '../../../assets/Itinerarios/JaponYTailandia/Dia_8_Bangkok_Japon_Premium_Hotel_Pullman_Viajes_Turismo_Hospedaje_Alojamiento_Bar_.webp';
import TurismoDotonbori from '../../../assets/Itinerarios/JaponYTailandia/Dia_9_Bangkok_Japon_Premium_Wat_Phra_Kaew_Buda_Esmeralda_Viajes_Turismo_Cultura.webp';
import JardinKenrokuen from '../../../assets/Itinerarios/JaponYTailandia/Dia_10_Bangkok_Japon_Premium_Mercado_Tren_Mae_Klong_Viajes_Turismo_Gastronomia.webp';
import GrupoTuristas from '../../../assets/Itinerarios/JaponYTailandia/Dia_11_Ayutthaya_Japon_Premium_Wat_Mahathat_Viajes_Turismo_Culura_Historia.webp';
import PaseoEnBarca from '../../../assets/Itinerarios/JaponYTailandia/Dia_12_Phitsanulok_Japon_Premium_Patrimonio_Humanidad_Viajes_Cultura_Turismo_Historia.webp';
import CastilloHimeji from '../../../assets/Itinerarios/JaponYTailandia/Dia_13_Chiang_Rai_Japon_Premium_Templo_Blanco_Wat_Rong_Khun_Viajes_Turismo_Cultura_Historia.webp';
import CatarataJapon from '../../../assets/Itinerarios/JaponYTailandia/Dia_14_Chiang_Mai_Japon_Premium_Templo_Doi_Suthep_Vistas_Explora_Experiencia_Actividades_Viajes_Turismo.webp';
import TrasladoMexico from '../../../assets/Itinerarios/JaponYTailandia/Dia_15_Chinag_Mai_Japon_Premium_Mexico_Aeropuerto_Vuelo_Viajes_Turismo_Aerolinea_Traslado.webp';

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
import Hotel1 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_New_Otani_Tokyo_Gardent_Tower.webp';
import Hotel2 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kioto/Hotel_Kyoto_Tokyu.webp';
import Hotel3 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Tailandia/Hotel_Holiday_Inn_Silom_Bangkok_Japon_Premium.webp';
import Hotel4 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Tailandia/Hotel_And_Convention_Centre_Topland_Phitsanulok_Tailandia_Japon_Premium.webp';
import FlyingButton from '../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';


const data = [
  {
    title: "15 Días - 13 Noches",
    subtitle: "Osaka - Tokio - Kioto - Hakone - Bangkok - Ayatthaya - Chiang Rai - Chiang Mai",
    text: "Un recorrido único que combina lo mejor de Japón -tradición, modernidad y paisajes icónicos- con la espiritualidad, exotismo y naturaleza de Tailandia.",
    image: ImagenHero,
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
    text: 'Llegada al aeropuerto internacional. Asistencia en español y traslado al hotel. Resto del día libre. Alojamiento.',
    image: LlegadaKansai,
    altText: 'turista-llegando-al-aeropuerto-de-kioto-japon-siendo-recibida-por-guia-de-japan-Premium-en-la-zona-de-arribos.',
  },
  {
    title: 'Tokio',
    subtitle: NumeroTres,
    subtitleAltText: "Número 3",
    text: 'Desayuno. City Tour: Santuario Meiji, Plaza del Palacio Imperial, Templo Sensoji en Asakusa y paseo por la calle comercial Nakamise. Finalizamos en el elegante barrio de Ginza. Tarde libre. Alojamiento.',
    image: VueloEjecutivo,
    altText: 'turista-con-kimono-tradicional-japones-posando-en-el-bosque-de-bambu-de-kioto-con-japan-Premium.',
  }, {
    title: 'Tokio - Hakone - Tokio',
    subtitle: NumeroCuatro,
    subtitleAltText: "Número 4",
    text: 'Desayuno. Excursión al Parque Nacional de Hakone: crucero por el Lago Ashi con vistas al Monte Fuji, visita al Valle Owakudani y regreso a Tokio.  Almuerzo incluido. Alojamiento.',
    image: VistaAvion,
    altText: 'viajera-en-mirador-con-vista-a-la-torre-de-tokio-y-el-paisaje-urbano-de-la-capital-de-japon-con-japan-Premium',
  }, {
    title: 'Tokio - Nara - Kioto',
    subtitle: NumeroCinco,
    subtitleAltText: "Número 5",
    text: 'Desayuno. Viaje en tren bala Nozomi a Kioto. En ruta visitamos el Santuario Fushimi Inari y continuamos hacia Nara para conocer el Gran Buda del Templo Todaiji y el Parque de los Ciervos Sagrados. Alojamiento en Kioto.',
    image: EncantoJapan,
    altText: 'viajera-frente-al-torii-flotante-de-miyajima-en-hiroshima-durante-el-atardecer-con-japan-Premium.',
  }, {
    title: 'Kioto',
    subtitle: NumeroSeis,
    subtitleAltText: "Número 6",
    text: 'Desayuno. Tour cultural: el Templo Ryoanji, el Pabellón Dorado (Kinkakuji), el Templo Sanjusangendo con sus mil estatuas y un paseo por el tradicional barrio de Gion. Almuerzo incluido. Alojamiento.',
    image: MiradorTorre,
    altText: 'pareja-de-turistas-viajando-en-tren-bala-shinkansen-en-japon-con-japan-Premium-disfrutando-del-paisaje-desde-la-ventana.',
  }, {
    title: 'Kioto',
    subtitle: NumeroSiete,
    subtitleAltText: "Número 7",
    text: 'Desayuno. Día libre con posibilidad de realizar la excursión opcional a Hiroshima y Miyajima. Alojamiento.',
    image: ToriiFlotante,
    altText: 'pareja-de-turistas-en-el-templo-nachisan-con-pagoda-roja-y-montanas-de-fondo-en-japon-con-japan-Premium.',
  }, {
    title: 'Kioto - Bangkok',
    subtitle: NumeroOcho,
    subtitleAltText: "Número 8",
    text: 'Desayuno. Traslado al aeropuerto y vuelo a Bangkok. Llegada y traslado al hotel. Alojamiento.',
    image: TemploNachisan,
    altText: 'pareja-de-turistas-en-dotonbori-osaka-con-los-carteles-luminosos-iconicos-al-fondo-con-japan-Premium.',
  }, {
    title: 'Bangkok',
    subtitle: NumeroNueve,
    subtitleAltText: "Número 9",
    text: 'Desayuno. City Tour: Gran Palacio, Wat Pho (Buda Reclinado), Wat Benjamabophit (Templo de Mármol) y el Wat Phra Kaew (Buda Esmeralda). Visita a una fábrica de piedras preciosas. Alojamiento.',
    image: TurismoDotonbori,
    altText: 'pareja-de-viajeros-disfrutando-del-jardin-kenrokuen-en-kanazawa-japon-con-japan-Premium.',
  }, {
    title: 'Bangkok',
    subtitle: NumeroDiez,
    subtitleAltText: "Número 10",
    text: 'Desayuno. Excursión al Mercado Flotante de Damnoen Saduak y al Mercado del Tren de Mae Klong. Paseo en barca por los canales y tiempo libre en el mercado. Alojamiento.',
    image: JardinKenrokuen,
    altText: 'grupo-de-viajeros-posando-en-la-aldea-tradicional-de-shirakawago-en-kanazawa-japon-con-japan-Premium.',
  }, {
    title: 'Bangkok - Ayutthaya - Phitsanulok',
    subtitle: NumeroOnce,
    subtitleAltText: "Número 11",
    text: 'Desayuno. Salida a Ayutthaya, antigua capital del reino de Siam: visita a Wat Mahathat, Wat Phra Sri Sanphet y Wat Yai Chai Mongkol. Almuerzo incluido. Continuación a Phitsanulok. Alojamiento.',
    image: GrupoTuristas,
    altText: 'pareja-navegando-en-barca-sobre-lago-con-cerezos-en-flor-y-barco-tradicional-al-fondo-en-takayama-con-japan-Premium.',
  }, {
    title: 'Phitsanulok - Sukhothai - Chiang Rai',
    subtitle: NumeroDoce,
    subtitleAltText: "Número 12",
    text: 'Desayuno. Visita a Sukhothai, Patrimonio de la Humanidad. Continuación hacia el norte pasando por Lampang y el Lago Payao. Almuerzo incluido.  Llegada a Chiang Rai. Alojamiento.',
    image: PaseoEnBarca,
    altText: 'viajera-frente-al-castillo-de-himeji-en-japon-disfrutando-de-su-arquitectura-tradicional-con-japan-Premium.',
  }, {
    title: 'Chiang Rai - Chiang Mai',
    subtitle: NumeroTrece,
    subtitleAltText: "Número 13",
    text: 'Desayuno. Excursión al Triángulo de Oro (frontera de Tailandia, Birmania y Laos), visita a la Casa del Opio y al Templo Blanco (Wat Rong Khun).  Traslado a Chiang Mai. Alojamiento.',
    image: CastilloHimeji,
    altText: 'Turista en avión regresando de Japón a México, en clase ejecutiva con Japan Premium, sosteniendo maleta de viaje.',
  }, {
    title: 'Chiang Mai',
    subtitle: NumeroCatorce,
    subtitleAltText: "Número 14",
    text: 'Desayuno. Excursión a un campamento de elefantes para conocer su importancia cultural y a un jardín de orquídeas. Almuerzo incluido. Por la tarde, visita al templo Doi Suthep, con espectaculares vistas de la ciudad. Alojamiento.',
    image: CatarataJapon,
    altText: 'Turista en avión regresando de Japón a México, en clase ejecutiva con Japan Premium, sosteniendo maleta de viaje.',
  }, {
    title: 'Chiang Mai - México',
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
    subtitle: "Japón & Tailandia a tu Alcance",
    dias: "15 Días - 13 Noches",
    urlDescargar: "https://japonpremium.com/pdf/itinerario-japon-premium-japon-tailandia-a-tu-alcance.pdf"
  }];

const dataPrecios = [
  {
    title: 'Temporada A',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '8,437' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '10,482' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '8,833' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '9,702' },
    ],
  },
  {
    title: 'Temporada B',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '8,618' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '10,840' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '9,175' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '12,293' },
    ],
  },
  {
    title: 'Temporada C',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '8,904' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '11,303' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '9,462' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '12,847' },
    ],
  },
  {
    title: 'Temporada Cerezos',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '9,172' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '10,549' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '9,728' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '13,294' },
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
      "Vuelo redondo México - Tokio / Chiang Mai - México.",
      "Traslados aeropuerto-hotel-aeropuerto.",
      "Noches de alojamiento en hoteles previstos en Japón.",
      "Desayunos diarios y 2 almuerzos incluidos.",
      "Viaje en tren bala Nozomi (Tokio-Kioto) en clase turista.",
      "Visitas y excursiones según itinerario (bus, minibús o privado según número de pasajeros).",
      "Entradas a templos, santuarios y monumentos mencionados.",
      "Traslados de llegada y salida.",
      "3 noches en Bangkok + 4 noches en circuito.",
      "Alojamiento y desayuno en Bangkok; media pensión en circuito.",
      "Visitas mencionadas en itinerario.",
      "Guías locales en español y entradas incluidas.",
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
      "Tarifas por persona en dólares estadounidenses, sujetas a disponibilidad.",
      "Pago al tipo de cambio vigente el día de liquidación.",
      "Pasaporte con una vigencia mínima de seis meses al momento del viaje.",
      "Precios sujetos a cambios sin previo aviso debido a la temporada o la disponibilidad",
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
    country: 'Tailandia',
    location: 'Bangkok',
    hotelName: 'Hotel Holiday Inn Bangkok Silom'
  },
  {
    id: '4',
    imageUrl: Hotel4,
    country: 'Tailandia',
    location: 'Phitsanulok',
    hotelName: 'Hotel and Convention Centre Topland'
  }
];


export default function JaponTailandia() {

  useEffect(() => {
    document.title = `Itinerario Japon y Tailandia | Japón PREMIUM®`;
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
