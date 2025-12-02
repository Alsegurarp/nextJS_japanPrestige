'use client';

import React, { useEffect } from 'react';
import { Suspense } from 'react';
import styles from './JaponYChina.module.css';
import HeroSection from '../../../Componentes/Sections/HeroSection.jsx';
import HeroImage from '../../../assets/Itinerarios/PortadasItinerarios/Japon_&_China_Dragones_&_Cerezos_Japon_Premium_Templo_Cielo.webp';

import ItinerariosTemplate from '../../../Componentes/Sections/Reutilizable/ItinerariosTemplate.jsx';

import DownloadSection from '../../../Componentes/Sections/Reutilizable/DownloadSection.jsx';
import CardPrecio from '../../../Componentes/Sections/Reutilizable/CardPrecioPrueba.jsx';
import DetallesNoContiene from '../../../Componentes/Sections/Reutilizable/DetallesNoContiene.jsx';
import TripDetails from '../../../Componentes/Sections/Reutilizable/TripDetails.jsx';
import HotelesJapon from '../../../Componentes/Sections/Reutilizable/HotelesJapon.jsx';

import LetrasDoradasResponsive from '../../../assets/titulosDorados/japonchinamovil.svg';
import LetrasDoradasDesktop from '../../../assets/titulosDorados/japonchinaweb.svg';

// Imagenes dias del itinerario
import LlegadaAeropuerto from '../../../assets/Itinerarios/JaponYChina/Dia_1_Mexico_Japon_Premium_Vuelo_Internacional_Destino_Pekin_Viajes_Turismo_Aerolinea_Aeropuerto_Vuelo.webp';
import LlegadaKansai from '../../../assets/Itinerarios/JaponYChina/Dia_2_Pekin_Japon_Premium_China_Capital_Traslado_Hotel_Jinglun_Habitacion_Viajes_Turismo_Alojamiento.webp';
import VueloEjecutivo from '../../../assets/Itinerarios/JaponYChina/Dia_3_Pekin_Japon_Premium_City_Tour_Templo_del_cielo_ViajeS_turismo_Cultura_Actividades.webp';
import VistaAvion from '../../../assets/Itinerarios/JaponYChina/Dia_4_Pekin_Japon_Premium_Excursion_Palacio_De_Verano_Almuerzo_Viajes_Turismo_Cultura_Historia.webp';
import EncantoJapan from '../../../assets/Itinerarios/JaponYChina/Dia_5_Xian_Japon_Premium_China_Antigua_Capital_Imperial_Restaurante_Gastronomia_Viajes_Turismo.webp';
import MiradorTorre from '../../../assets/Itinerarios/JaponYChina/Dia_6_Xian_Japon_Premium_Corceles_Terracota_Viajes_Turismo_Cultura_Historia_Experiencias.webp';
import ToriiFlotante from '../../../assets/Itinerarios/JaponYChina/Dia_7_Shangai_Japon_Premium_Hotel_Jin_Jiang_Tower_Hospedaje_Alojamiento_Traslado_Viajes_Turismo.webp';
import TemploNachisan from '../../../assets/Itinerarios/JaponYChina/Dia_8_Shangai_Japon_Premium_China_Malecon_del_bund_Viajes_Turismo_Explorar_Conocer_Viajar.webp';
import TurismoDotonbori from '../../../assets/Itinerarios/JaponYChina/Dia_9_Shangai_Japon_Premium_China_Jardin_Yuyuan_Ciudad_Vieja-Arquitectura_Tradicional_Carpas_Koi_Puentes_Antiguos_Dia_Libre.webp';
import JardinKenrokuen from '../../../assets/Itinerarios/JaponYChina/Dia_10_Osaka_Japon_Premium_Hotel_Monterey_Grassmere_Llegada_Viajes_Turismo_Hospedaje_Alojamiento.webp';
import GrupoTuristas from '../../../assets/Itinerarios/JaponYChina/Dia_11_Osaka_Japon_Premium_Castillo_visita_Almuerzo_Viajes_Turismo_Explora_Actividades_Excursion_.webp';
import PaseoEnBarca from '../../../assets/Itinerarios/JaponYChina/Dia_12_Kioto_Japon_Premium_Tour_Cultural_Bosque_Bambu_Arashiyama_Viajes_Turismo_Cultura_Historia.webp';
import CastilloHimeji from '../../../assets/Itinerarios/JaponYChina/Dia_13_Hakone_Japon_Premium_Parque_Nacional_Excursion_Lago_Ashi_Teleferico_Amuerzo_Alojamiento_Viajes_Turismo.webp';
import CatarataJapon from '../../../assets/Itinerarios/JaponYChina/Dia_14_Tokio_Japon_Premium_Santuario_Meiji_ViajeS_Turismo_Torii_Cultura_Capital.webp';
import CapitalJapon from '../../../assets/Itinerarios/JaponYChina/Dia_15_Tokio_Japon_Premium_Capital_Restaurante_Viral_Gastronomia_Comida_Sushi_Dia_Libre_.webp';
import TrasladoMexico from '../../../assets/Itinerarios/JaponYChina/Dia_16_Tokio_Japon_Premium_Aeropuerto_Internacional_Duty_Free_Vuelo_Regreso_Mexico_Viajes_Turismo.webp';

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
import NumeroDieciseis from '../../../assets/numerosDorados/numero16.svg';

import avion from '../../../assets/avion.svg';
import calendario from '../../../assets/calendario.svg';
import user from '../../../assets/user.svg';


// Hoteles imagenes - assets/Itinerarios/HotelesDeItinerarios/JaponYChina/habitacion-Kuntai-Royal-japon-premium.webp
import Hotel1 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/China/Hotel_Kuntai_Royal_Pekin_China_Japon_Premium.webp';
import Hotel2 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/China/Hotel_Jinglun_Pekin_China_Japon_Premium.webp';
import Hotel3 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/China/Hotel_Tianyu_Gloria_Plaza_Xian_China_Japon_Premium.webp';
import Hotel4 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/China/Hotel_Grand_Nobel_Xian_China_Japon_Premium.webp';
import Hotel5 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/China/Hotel_Courtyard_By_Marriott_Shangai_Xuijahui_China_Japon_Premium.webp';
import Hotel6 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/China/Hotel_Jin_Jiang_Tower_Shanghai_China_Japon_Premium.webp';
import Hotel7 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/China/Hotel_Sunrise_On_The_Bund_Shanghai_China_Japon_Premium.webp';
import Hotel8 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/osaka/Hotel_New_Otani_Osaka.webp';
import Hotel9 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/kioto/Hotel_Cross_Kyoto.webp';
import Hotel10 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/hakone/Hotel_Hakone_Sengokuhara_Prince.webp';
import Hotel11 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/hakone/Hotel_Yumoto_Fujiya.webp';
import Hotel12 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/tokio/Hotel_Hyatt_Regency_Tokyo.webp';
import FlyingButton from '../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';



const data = [
  {
    title: "16 Días - 14 Noches",
    subtitle: "Pekín - Xi'an - Shanghái - Osaka - Nara - Kioto- Hakone - Toki",
    text: "Un recorrido fascinante que combina dos grandes civilizaciones milenarias: la majestuosidad de China y la tradición refinada de Japón.",
    image: HeroImage,
    altImg: "Vista frontal del Templo Yasukuni en Tokio, Japón, con cielo nublado al atardecer.",
    letrasDoradasResponsive: LetrasDoradasResponsive,
    LetrasDoradasDesktop: LetrasDoradasDesktop,
  }];

const dataSectionCard = [
  {
    title: 'México - Pekín',
    subtitle: NumeroUno,
    subtitleAltText: "Número 1",
    text: "Salida en vuelo intercontinental con destino a Pekín.",
    image: LlegadaAeropuerto,
    altText: 'pasajero-observando-el-ala-del-avion-y-el-oceano-desde-la-ventana-durante-vuelo-internacional-hacia-japon-con-japan-Premium.',
  },
  {
    title: 'Pekín',
    subtitle: NumeroDos,
    subtitleAltText: "Número 2",
    text: 'Llegada a la capital de China. Traslado al hotel y resto del día libre. Alojamiento.',
    image: LlegadaKansai,
    altText: 'turista-llegando-al-aeropuerto-de-kioto-japon-siendo-recibida-por-guia-de-japan-Premium-en-la-zona-de-arribos.',
  },
  {
    title: 'Pekín',
    subtitle: NumeroTres,
    subtitleAltText: "Número 3",
    text: 'Desayuno. City Tour: Plaza Tiananmen, Ciudad Prohibida, Templo del Cielo y paseo por el Mercado de la Seda. Almuerzo con degustación del famoso Pato Laqueado de Pekín. Alojamiento.',
    image: VueloEjecutivo,
    altText: 'turista-con-kimono-tradicional-japones-posando-en-el-bosque-de-bambu-de-kioto-con-japan-Premium.',
  }, {
    title: 'Pekín',
    subtitle: NumeroCuatro,
    subtitleAltText: "Número 4",
    text: 'Desayuno. Excursión a la Gran Muralla (Badaling) y visita al Palacio de Verano. Parada fotográfica frente al Nido del Pájaro (Estadio Nacional) y al Cubo del Agua. Almuerzo incluido. Alojamiento.',
    image: VistaAvion,
    altText: 'viajera-en-mirador-con-vista-a-la-torre-de-tokio-y-el-paisaje-urbano-de-la-capital-de-japon-con-japan-Premium',
  }, {
    title: 'Pekín - Xi’an',
    subtitle: NumeroCinco,
    subtitleAltText: "Número 5",
    text: 'Desayuno. Salida en tren de alta velocidad hacia Xi’an, antigua capital imperial y punto de inicio de la Ruta de la Seda. Alojamiento.',
    image: EncantoJapan,
    altText: 'viajera-frente-al-torii-flotante-de-miyajima-en-hiroshima-durante-el-atardecer-con-japan-Premium.',
  }, {
    title: 'Xi’an',
    subtitle: NumeroSeis,
    subtitleAltText: "Número 6",
    text: 'Desayuno. Visita al Museo de Guerreros y Corceles de Terracota. Almuerzo incluido. Por la tarde, visita a la Pequeña Pagoda de la Oca Silvestre (sin subir) y recorrido por la Muralla Antigua (exterior). Alojamiento.',
    image: MiradorTorre,
    altText: 'pareja-de-turistas-viajando-en-tren-bala-shinkansen-en-japon-con-japan-Premium-disfrutando-del-paisaje-desde-la-ventana.',
  }, {
    title: 'Xi’an - Shanghái',
    subtitle: NumeroSiete,
    subtitleAltText: "Número 7",
    text: 'Desayuno. Traslado al aeropuerto y vuelo a Shanghái. Llegada y traslado al hotel. Alojamiento.',
    image: ToriiFlotante,
    altText: 'pareja-de-turistas-en-el-templo-nachisan-con-pagoda-roja-y-montanas-de-fondo-en-japon-con-japan-Premium.',
  }, {
    title: 'Shanghái',
    subtitle: NumeroOcho,
    subtitleAltText: "Número 8",
    text: 'Desayuno. Visita al Jardín Yuyuan, el Templo del Buda de Jade y paseo por el Malecón del Bund. Tarde libre. Alojamiento.',
    image: TemploNachisan,
    altText: 'pareja-de-turistas-en-dotonbori-osaka-con-los-carteles-luminosos-iconicos-al-fondo-con-japan-Premium.',
  }, {
    title: 'Shanghái',
    subtitle: NumeroNueve,
    subtitleAltText: "Número 9",
    text: 'Desayuno. Día libre para explorar la ciudad a tu ritmo. Alojamiento.',
    image: TurismoDotonbori,
    altText: 'pareja-de-viajeros-disfrutando-del-jardin-kenrokuen-en-kanazawa-japon-con-japan-Premium.',
  }, {
    title: 'Shanghái - Osaka',
    subtitle: NumeroDiez,
    subtitleAltText: "Número 10",
    text: 'Desayuno. Vuelo a Osaka (no incluido). Llegada y traslado al hotel. Alojamiento.',
    image: JardinKenrokuen,
    altText: 'grupo-de-viajeros-posando-en-la-aldea-tradicional-de-shirakawago-en-kanazawa-japon-con-japan-Premium.',
  }, {
    title: 'Osaka - Nara - Kioto',
    subtitle: NumeroOnce,
    subtitleAltText: "Número 11",
    text: 'Desayuno. Visita al Castillo de Osaka. Salida a Nara para conocer el Gran Buda del Templo Todaiji y el Parque de los Ciervos Sagrados. Almuerzo incluido. En ruta hacia Kioto, parada en el Santuario Fushimi Inari. Alojamiento en Kioto.',
    image: GrupoTuristas,
    altText: 'pareja-navegando-en-barca-sobre-lago-con-cerezos-en-flor-y-barco-tradicional-al-fondo-en-takayama-con-japan-Premium.',
  }, {
    title: 'Kioto',
    subtitle: NumeroDoce,
    subtitleAltText: "Número 12",
    text: 'Desayuno. Tour cultural: Templo Tenryuji, Bosque de Bambú de Arashiyama, Pabellón Dorado (Kinkakuji) y el Castillo de Nijo. Tiempo libre. Alojamiento.',
    image: PaseoEnBarca,
    altText: 'viajera-frente-al-castillo-de-himeji-en-japon-disfrutando-de-su-arquitectura-tradicional-con-japan-Premium.',
  }, {
    title: 'Kioto - Hakone',
    subtitle: NumeroTrece,
    subtitleAltText: "Número 13",
    text: 'Desayuno. Traslado en tren bala Shinkansen a Odawara. Excursión al Parque Nacional de Hakone: mini crucero por el Lago Ashi y subida en teleférico.  Almuerzo incluido. Cena buffet en el hotel. Alojamiento en Hakone.',
    image: CastilloHimeji,
    altText: 'Turista en avión regresando de Japón a México, en clase ejecutiva con Japan Premium, sosteniendo maleta de viaje.',
  }, {
    title: 'Hakone - Tokio',
    subtitle: NumeroCatorce,
    subtitleAltText: "Número 14",
    text: 'Desayuno. Salida hacia Tokio. Visita al Santuario Meiji, la Torre de Tokio y el Templo Sensoji en Asakusa con su calle comercial Nakamise. Almuerzo incluido. Alojamiento.',
    image: CatarataJapon,
    altText: 'Turista en avión regresando de Japón a México, en clase ejecutiva con Japan Premium, sosteniendo maleta de viaje.',
  }, {
    title: 'Tokio',
    subtitle: NumeroQuince,
    subtitleAltText: "Número 15",
    text: 'Desayuno. Día libre para compras o actividades personales. Alojamiento.',
    image: CapitalJapon,
    altText: 'Turista en avión regresando de Japón a México, en clase ejecutiva con Japan Premium, sosteniendo maleta de viaje.',
  }, {
    title: 'Tokio - México',
    subtitle: NumeroDieciseis,
    subtitleAltText: "Número 16",
    text: 'Desayuno. Traslado al aeropuerto para el vuelo de regreso. Fin de nuestros servicios.',
    image: TrasladoMexico,
    altText: 'Turista en avión regresando de Japón a México, en clase ejecutiva con Japan Premium, sosteniendo maleta de viaje.',
  },
];

const downloadData = [
  {
    id: "01",
    title: "japón premium",
    subtitle: "Japón y China",
    dias: "16 Días - 14 Noches",
    urlDescargar: "https://japonpremium.com/pdf/itinerario-japon-premium-japon-china.pdf"
  }];

const dataPrecios = [
  {
    title: 'Precio por persona',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '11,842' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '13,234' },
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
      "Traslados de llegada y salida.",
      "Guías locales en español en todas las visitas.",
      "3 almuerzos (uno de ellos con Pato Laqueado en Pekín).",
      'Tren de alta velocidad Pekín-Xi\'an en 2ª clase.',
      'Vuelo Xi\'an-Shanghái con tasas incluidas.',
      "Seguro de viaje.",
      "Vuelo redondo México - Japón - México.",
      "Vuelo Shanghái - Osaka.",
      "Alojamiento en hoteles previstos o similares.",
      "6 desayunos, 4 almuerzos y 1 cena buffet.",
      "Tren bala Shinkansen Kioto-Odawara en clase turista.",
      "Guía acompañante/asistencia en español durante el recorrido (excepto en trayectos en tren bala).",
      "Visitas según programa (bus, minibús o privado según número de pasajeros).",
      "Traslados aeropuerto-hotel-aeropuerto en español.",
      "Entradas a los monumentos y sitios visitados.",
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
      "Tarifas en dólares estadounidenses, pagaderas al tipo de cambio vigente.",
      "Precios por persona según tipo de habitación, sujetos a disponibilidad.",
      "Pasaporte con una vigencia mínima de seis meses al momento del viaje.",
      "Tarifas sujetas a cambios sin previo aviso por temporada o confirmación.",
      "Actividades opcionales tienen costo adicional."
    ],
  },
];

const hotels = [
  {
    id: '1',
    imageUrl: Hotel1,
    country: 'China',
    location: 'PEKIN',
    hotelName: 'Hotel Kuntai Royal'
  },
  {
    id: '2',
    imageUrl: Hotel2,
    country: 'China',
    location: 'PEKIN',
    hotelName: 'Hotel Jinglun'
  },
  {
    id: '3',
    imageUrl: Hotel3,
    country: 'China',
    location: 'XI\'AN',
    hotelName: 'Hotel Tianyu Gloria Plaza Xian'
  },
  {
    id: '4',
    imageUrl: Hotel4,
    country: 'China',
    location: 'XI\'AN',
    hotelName: 'Hotel Grand Noble Xian'
  },
  {
    id: '5',
    imageUrl: Hotel5,
    country: 'China',
    location: 'SHANGAI',
    hotelName: 'Hotel Courtyard Shanghai Xujiahui'
  },
  {
    id: '6',
    imageUrl: Hotel6,
    country: 'China',
    location: 'SHANGAI',
    hotelName: 'Hotel Jin Jiang Tower'
  },
  {
    id: '7',
    imageUrl: Hotel7,
    country: 'China',
    location: 'SHANGAI',
    hotelName: 'Hotel Sunrise on the Bund'
  },
  {
    id: '8',
    imageUrl: Hotel8,
    country: 'Japón',
    location: 'OSAKA',
    hotelName: 'Hotel New Otani Osaka'
  },
  {
    id: '9',
    imageUrl: Hotel9,
    country: 'Japón',
    location: 'KIOTO',
    hotelName: 'Hotel Cross Kyoto'
  },
  {
    id: '10',
    imageUrl: Hotel10,
    country: 'Japón',
    location: 'HAKONE',
    hotelName: 'Hotel Hakone Sengokuhara Prince'
  },
  {
    id: '11',
    imageUrl: Hotel11,
    country: 'Japón',
    location: 'HAKONE',
    hotelName: 'Hotel Yumoto Fujiya'
  },
  {
    id: '12',
    imageUrl: Hotel12,
    country: 'Japón',
    location: 'TOKIO',
    hotelName: 'Hotel Hyatt Regency Tokyo'
  }
];


export default function JaponYChina() {

  useEffect(() => {
    document.title = `Itinerario Japon y China | Japón PREMIUM®`;
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

