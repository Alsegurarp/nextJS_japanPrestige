'use client';

import React, { useEffect } from 'react';
import { Suspense } from 'react';
import styles from './JaponCoreaDelSur.module.css';
import HeroSection from '../../../Componentes/Sections/HeroSection.jsx';
import HeroImage from '../../../assets/Itinerarios/PortadasItinerarios/Japon_&_Corea_del_Sur_Japon_Premium_Portada_Palacio_Real_Gyeongbokgung.webp';

import ItinerariosTemplate from '../../../Componentes/Sections/Reutilizable/ItinerariosTemplate.jsx';

import DownloadSection from '../../../Componentes/Sections/Reutilizable/DownloadSection.jsx';
import CardPrecio from '../../../Componentes/Sections/Reutilizable/CardPrecioPrueba.jsx';
import DetallesNoContiene from '../../../Componentes/Sections/Reutilizable/DetallesNoContiene.jsx';
import TripDetails from '../../../Componentes/Sections/Reutilizable/TripDetails.jsx';
import HotelesJapon from '../../../Componentes/Sections/Reutilizable/HotelesJapon.jsx';

import LetrasDoradasResponsive from '../../../assets/titulosDorados/japoncoreadelsurmovil.svg';
import LetrasDoradasDesktop from '../../../assets/titulosDorados/japoncoreadelsurweb.svg';

import LlegadaAeropuerto from '../../../assets/Itinerarios/JaponYCoreaDelSur/Dia_1_Vuelo_Japon_Premium_Vuelo_Internacional_Ciudad_Mexico_Japon_Gran_Aventura_Asiatica_Viajes_Turismo.webp';
import LlegadaKansai from '../../../assets/Itinerarios/JaponYCoreaDelSur/Dia_2_Tokio_Japon_Premium_Compras_Viajes_Turismo_Tarde_Libre.webp';
import VueloEjecutivo from '../../../assets/Itinerarios/JaponYCoreaDelSur/Dia_3_Tokio_Japon_Premium_Shibuya_Zona_Moderna_Iconos_Ciudad_Tarde_Libre_Explorar_Viajes_Turismo.webp';
import VistaAvion from '../../../assets/Itinerarios/JaponYCoreaDelSur/Dia_4_Hakone_Japon_Premium_Lago_Ashi_Crucero_Monte_Fuji_Imponente_Viajes_Turismo_Vistas_Panorama.webp';
import EncantoJapan from '../../../assets/Itinerarios/JaponYCoreaDelSur/Dia_5_Nara_Japon_Premium_Excursion_Dia_Libre_Ciervos_Sagrados_Disfrutar_Viajes_Turismo_Cultura_Espiritualidad.webp';
import MiradorTorre from '../../../assets/Itinerarios/JaponYCoreaDelSur/Dia_6_Kioto_Japon_Premium_Templo_Sanjusangen-do_Recorrido_Viajes_Turismo_Cultura_Historia.webp';
import ToriiFlotante from '../../../assets/Itinerarios/JaponYCoreaDelSur/Dia_7_Kioto_Japon_Premium_Antigua_Capital_Imperial_Templos_Jardines_Callejones_Historia_Viajes_Cultura_Turismo.webp';
import TemploNachisan from '../../../assets/Itinerarios/JaponYCoreaDelSur/Dia_8_Seul_Japon_Premium_Aeropuerto_Vuelo_Capital_Corea_Sur_Recepcion_Traslado_Viajes_Turismo_Hotel.webp';
import TurismoDotonbori from '../../../assets/Itinerarios/JaponYCoreaDelSur/Dia_9_Seul_Japon_Premium_Palacio_Gyeongbokgung_Imperial_Realeza_Antigua_Corea_Urbana_Moderna.webp';
import JardinKenrokuen from '../../../assets/Itinerarios/JaponYCoreaDelSur/Dia_10_Corea_Sur_Japon_Premium_Fortaleza_Suwon_Historia_Excursion_Viajes_Cultura_Turismo.webp';
import GrupoTuristas from '../../../assets/Itinerarios/JaponYCoreaDelSur/Dia_11_Seul_Japon_Premium_Contemporaneo_Torre_N_Viajes_Corea_Sur_Turismo_Cultura_.webp';
import PaseoEnBarca from '../../../assets/Itinerarios/JaponYCoreaDelSur/Dia_12_Gyeongju_Japon_Premium_Cueva_Seokguram_UNESCO_Viajes_Turismo_Cultura.webp';
import CastilloHimeji from '../../../assets/Itinerarios/JaponYCoreaDelSur/Dia_13_Seul_Japon_Premium_Regreso_Mexico_Aeropuerto_Vuelo_Travesia_Culturas_Milenarias_Viajes_Turismo.webp';

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

import avion from '../../../assets/avion.svg';
import calendario from '../../../assets/calendario.svg';
import user from '../../../assets/user.svg';

// Hoteles imagenes 
import Hotel1 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_New_Otani_Tokyo_Gardent_Tower.webp';
import Hotel2 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kioto/Hotel_Kyoto_Tokyu.webp';
import Hotel3 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_Gran_Plaza_Cheongju_Hotel_Corea_Del_Sur_Japon_Premium.webp';
import Hotel4 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/tokio/Hotel_Commodore_Gyeongju_Corea_Del_Sur_Japon_Premium.webp';
import FlyingButton from '../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';


const data = [
  {
    title: "13 Días - 11 Noches",
    subtitle: "Tokio - Hakone - Kioto - Nara - Osaka - Seúl - Suwon - Songnisan - Haeinsa - Gyeongju",
    text: "Un viaje excepcional que une dos culturas fascinantes: la tradición milenaria de Japón y la modernidad vibrante de Corea del Sur.",
    image: HeroImage,
    altImg: "Vista frontal del Templo Yasukuni en Tokio, Japón, con cielo nublado al atardecer.",
    letrasDoradasResponsive: LetrasDoradasResponsive,
    LetrasDoradasDesktop: LetrasDoradasDesktop,
  }];

const dataSectionCard = [
  {
    title: ' México - Tokio',
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
    text: 'Llegada al aeropuerto de Narita. Asistencia en español para tomar el traslado en servicio regular al hotel. Resto del día libre. Alojamiento.',
    image: LlegadaKansai,
    altText: 'turista-llegando-al-aeropuerto-de-kioto-japon-siendo-recibida-por-guia-de-japan-Premium-en-la-zona-de-arribos.',
  },
  {
    title: 'Tokio',
    subtitle: NumeroTres,
    subtitleAltText: "Número 3",
    text: 'Desayuno. Visita panorámica: Palacio Imperial (exterior), Santuario Meiji, Templo Sensoji en Asakusa,  calle comercial Nakamise y el barrio de lujo Ginza. Tarde libre. Alojamiento.',
    image: VueloEjecutivo,
    altText: 'turista-con-kimono-tradicional-japones-posando-en-el-bosque-de-bambu-de-kioto-con-japan-Premium.',
  }, {
    title: 'Tokio - Hakone - Tokio',
    subtitle: NumeroCuatro,
    subtitleAltText: "Número 4",
    text: 'Desayuno. Excursión al Parque Nacional de Hakone: crucero por el Lago Ashi, visita al Valle Owakudani con sus fumarolas y al Museo al Aire Libre de Hakone. Almuerzo incluido. Regreso a Tokio. Alojamiento.',
    image: VistaAvion,
    altText: 'viajera-en-mirador-con-vista-a-la-torre-de-tokio-y-el-paisaje-urbano-de-la-capital-de-japon-con-japan-Premium',
  }, {
    title: 'Tokio - Nara - Kioto',
    subtitle: NumeroCinco,
    subtitleAltText: "Número 5",
    text: 'Desayuno. Viaje en tren bala Nozomi hacia Kioto. Parada en el Santuario Fushimi Inari y visita a Nara: el Gran Buda del Templo Todaiji y el Parque de los Ciervos Sagrados. Alojamiento en Kioto.',
    image: EncantoJapan,
    altText: 'viajera-frente-al-torii-flotante-de-miyajima-en-hiroshima-durante-el-atardecer-con-japan-Premium.',
  }, {
    title: 'Kioto',
    subtitle: NumeroSeis,
    subtitleAltText: "Número 6",
    text: 'Desayuno. Visita a los tesoros de la ciudad: Templo Tenryuji, Bosque de Bambú de Arashiyama, Pabellón Dorado (Kinkakuji), Templo Sanjusangendo con sus mil estatuas y paseo por el barrio de Gion. Almuerzo incluido. Tarde libre. Alojamiento.',
    image: MiradorTorre,
    altText: 'pareja-de-turistas-viajando-en-tren-bala-shinkansen-en-japon-con-japan-Premium-disfrutando-del-paisaje-desde-la-ventana.',
  }, {
    title: 'Kioto',
    subtitle: NumeroSiete,
    subtitleAltText: "Número 7",
    text: 'Desayuno. Día libre para actividades personales o realizar la excursión opcional a Hiroshima y  Miyajima. Alojamiento.',
    image: ToriiFlotante,
    altText: 'pareja-de-turistas-en-el-templo-nachisan-con-pagoda-roja-y-montanas-de-fondo-en-japon-con-japan-Premium.',
  }, {
    title: 'Kioto - Osaka - Seúl',
    subtitle: NumeroOcho,
    subtitleAltText: "Número 8",
    text: 'Desayuno. Traslado al aeropuerto de Osaka y vuelo incluido a Seúl. Llegada y traslado al hotel. Alojamiento',
    image: TemploNachisan,
    altText: 'pareja-de-turistas-en-dotonbori-osaka-con-los-carteles-luminosos-iconicos-al-fondo-con-japan-Premium.',
  }, {
    title: 'Seúl',
    subtitle: NumeroNueve,
    subtitleAltText: "Número 9",
    text: 'Desayuno. Tour de la capital: Palacio Real Gyeongbokgung, Museo Folk, el barrio tradicional Bukchon Hanok Village, el Templo Jogyesa, paseo por Insadong y degustación de té en casa tradicional. Alojamiento.',
    image: TurismoDotonbori,
    altText: 'pareja-de-viajeros-disfrutando-del-jardin-kenrokuen-en-kanazawa-japon-con-japan-Premium.',
  }, {
    title: ' Seúl - Suwon - Cheongju',
    subtitle: NumeroDiez,
    subtitleAltText: "Número 10",
    text: 'Desayuno. Salida hacia Suwon para conocer la Fortaleza Hwaseong y el Museo de la Innovación. Continuación hacia Cheongju. Alojamiento.',
    image: JardinKenrokuen,
    altText: 'grupo-de-viajeros-posando-en-la-aldea-tradicional-de-shirakawago-en-kanazawa-japon-con-japan-Premium.',
  }, {
    title: 'Cheongju - Songnisan - Gyeongju',
    subtitle: NumeroOnce,
    subtitleAltText: "Número 11",
    text: 'Desayuno. Excursión a Songnisan y continuación hacia Gyeongju. Alojamiento.',
    image: GrupoTuristas,
    altText: 'pareja-navegando-en-barca-sobre-lago-con-cerezos-en-flor-y-barco-tradicional-al-fondo-en-takayama-con-japan-Premium.',
  }, {
    title: 'Gyeongju - Seúl',
    subtitle: NumeroDoce,
    subtitleAltText: "Número 12",
    text: 'Desayuno. Visita al Templo Bulguksa y la Cueva de Seokguram (UNESCO). Paseo por el Parque de los Túmulos y visita al Observatorio Cheomseongdae (634 d.C.). Traslado en tren KTX de regreso a Seúl. Alojamiento.',
    image: PaseoEnBarca,
    altText: 'viajera-frente-al-castillo-de-himeji-en-japon-disfrutando-de-su-arquitectura-tradicional-con-japan-Premium.',
  }, {
    title: 'Seúl - México',
    subtitle: NumeroTrece,
    subtitleAltText: "Número 13",
    text: 'Desayuno. Traslado al aeropuerto para el vuelo de regreso. Fin de nuestros servicios.',
    image: CastilloHimeji,
    altText: 'Turista en avión regresando de Japón a México, en clase ejecutiva con Japan Premium, sosteniendo maleta de viaje.',
  }
];

const downloadData = [
  {
    id: "01",
    title: "japón premium",
    subtitle: "Japón & Corea del Sur",
    dias: "13 Días - 11 Noches",
    urlDescargar: "https://japonpremium.com/pdf/itinerario-japon-premium-japon-corea-sur.pdf"
  }];

const dataPrecios = [
  {
    title: 'Temporada A',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '13,403' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '16,366' }
    ],
  },
  {
    title: 'Temporada B',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '13,118' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '15,638' }
    ],
  },
  {
    title: 'Temporada C',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '12,848' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '14,828' }
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
      "Vuelo Osaka - Seúl.",
      "6 desayunos y 2 almuerzos incluidos.",
      "6 noches de alojamiento en hoteles previstos.",
      "Transporte de equipaje Tokio-Kioto (día 4).",
      "Viaje en tren bala Nozomi (Tokio-Kioto).",
      "Visitas con guías en español (excepto traslados aeropuerto-hotel).",
      "Seguro de viaje.",
      "Alojamiento y desayuno en hoteles seleccionados.",
      "Traslados en vehículo privado con aire acondicionado.",
      "Guías de habla hispana (excepto días 8 y 13).",
      "Entradas a los sitios mencionados en el itinerario.",
      "Tren KTX en segunda clase (Gyeongju-Seúl).",
      "Impuestos gubernamentales vigentes.",
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
      "Precios por persona según el tipo de habitación, sujetos a disponibilidad.",
      "Los precios pueden variar sin previo aviso debido a la temporada o la disponibilidad.",
      "El pasajero es responsable de contar con pasaporte vigente mínimo 6 meses al momento del viaje.",
      "Las actividades opcionales tienen costo adicional."
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
    location: 'TOKIO',
    hotelName: 'Hotel Grand Plaza Cheongju'
  },
  {
    id: '4',
    imageUrl: Hotel4,
    location: 'TOKIO',
    hotelName: 'Hotel Commodore Gyeongju'
  }
];


export default function JaponCoreaDelSur() {

  useEffect(() => {
    document.title = `Itinerario Japon y Corea del Sur | Japón PREMIUM®`;
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
