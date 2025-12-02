'use client';

import React, { useEffect } from 'react';
import { Suspense, lazy } from 'react';
import styles from './JaponExpress.module.css';
import LoadingSpinner from '../../../Componentes/UI/LoadingSpinner.jsx';

// Hero section con la heroImage
import HeroSection from '../../../Componentes/Sections/HeroSection.jsx';
import HeroImage from '../../../assets/Itinerarios/PortadasItinerarios/Japon_Express_Portada_Japon_Premium_Santuario_Meiji.webp';

// Itinerarios - Se declara toda la info aqui
const ItinerariosTemplate = lazy(() => import('../../../Componentes/Sections/Reutilizable/ItinerariosTemplate.jsx'));
const DownloadSection = lazy(() => import('../../../Componentes/Sections/Reutilizable/DownloadSection.jsx'));
const CardPrecio = lazy(() => import('../../../Componentes/Sections/Reutilizable/CardPrecioPrueba.jsx'));
const DetallesNoContiene = lazy(() => import('../../../Componentes/Sections/Reutilizable/DetallesNoContiene.jsx'));
const TripDetails = lazy(() => import('../../../Componentes/Sections/Reutilizable/TripDetails.jsx'));
const HotelesJapon = lazy(() => import('../../../Componentes/Sections/Reutilizable/HotelesJapon.jsx'));

/*
import ItinerariosTemplate from '../../../Componentes/Sections/Reutilizable/ItinerariosTemplate.jsx';
import DownloadSection from '../../../Componentes/Sections/Reutilizable/DownloadSection.jsx';
import CardPrecio from '../../../Componentes/Sections/Reutilizable/CardPrecioPrueba.jsx';
import DetallesNoContiene from '../../../Componentes/Sections/Reutilizable/DetallesNoContiene.jsx';
import TripDetails from '../../../Componentes/Sections/Reutilizable/TripDetails.jsx';
import HotelesJapon from '../../../Componentes/Sections/Reutilizable/HotelesJapon.jsx';
*/

// Los numeros de las cards
import NumeroUno from '../../../assets/numerosDorados/numero1.svg';
import NumeroDos from '../../../assets/numerosDorados/numero2.svg';
import NumeroTres from '../../../assets/numerosDorados/numero3.svg';
import NumeroCuatro from '../../../assets/numerosDorados/numero4.svg';
import NumeroCinco from '../../../assets/numerosDorados/numero5.svg';
import NumeroSeis from '../../../assets/numerosDorados/numero6.svg';
import NumeroSiete from '../../../assets/numerosDorados/numero7.svg';
import NumeroOcho from '../../../assets/numerosDorados/numero8.svg';
// Las imagenes de las cards

import LetrasDoradasResponsive from '../../../assets/titulosDorados/japonexpressmovil.svg';
import LetrasDoradasDesktop from '../../../assets/titulosDorados/japonexpressweb.svg';

import LlegadaAeropuerto from '../../../assets/Itinerarios/JaponExpress/Dia_1_Rumbo_Japon_Premium_Vuelo_Abordaje_Despegue_Ciudad_Mexico_Aventura_.webp';
import LlegadaKansai from '../../../assets/Itinerarios/JaponExpress/Dia_2_Osaka_Japon_Premium_Aeropuerto_Internacional_Hotel_Alojamiento_Viajes_Turismo.webp';
import VueloEjecutivo from '../../../assets/Itinerarios/JaponExpress/Dia_3_Parque_Nara_Japon_Premium_Primera_Capital_Ciervos_Sagrados_Excursion.webp';
import VistaAvion from '../../../assets/Itinerarios/JaponExpress/Dia_4_Kioto_Japon_Premium_Templo_Tradicional_Explorar_Aventuras_Cultura_Viajes_Turismo.webp';
import EncantoJapan from '../../../assets/Itinerarios/JaponExpress/Dia_5_Lago_Ashi_Japon_Premium_Minicrucero_Monte_Fuji_Teleferico_Vistas_Turismo_Viajes.webp';
import MiradorTorre from '../../../assets/Itinerarios/JaponExpress/Dia_6_Llegada_Tokio_Japon_Premium.webp';
import ToriiFlotante from '../../../assets/Itinerarios/JaponExpress/Dia_7_Tokio_Japon_PRemium_Dia_Libre_Descansar_Puesto_Callejero_Asakusa_Viajes_Turismo_Gastronomia.webp';
import TemploNachisan from '../../../assets/Itinerarios/JaponExpress/Dia_8_Regreso_Japon_Premium_Aeropuerto_Viaje_Turismo_Trasnporte_Avion.webp';




import avion from '../../../assets/avion.svg';
import calendario from '../../../assets/calendario.svg';
import user from '../../../assets/user.svg';

// Las imagenes de los hoteles
import Hotel1 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_Shinagawa_Prince.webp';
import Hotel2 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_Villa_Fontaine_Shiodome.webp';
import Hotel3 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_Villa_Fontaine_Roppongi.webp';
import Hotel4 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kawaguchiko/Hotel_Fuji_View.webp';
import Hotel5 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kawaguchiko/Hotel_Onsen_Mifujien.webp';
import Hotel6 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kawaguchiko/Hotel_Oike_Ryokan.webp';
import Hotel7 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kioto/Hotel_Miyako_Kyoto_Hachijo.webp';
import FlyingButton from '../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';


const data = [
  {
    title: "8 Días - 6 Noches",
    subtitle: "Osaka - Nara - Kioto - Hakone - Tokio",
    text: "Un recorrido diseñado para quienes desean descubrir lo mejor de Japón en  poco tiempo, combinando tradición, modernidad y paisajes inolvidables.",
    image: HeroImage,
    altImg: "Un recorrido diseñado para quienes desean descubrir lo mejor de Japón en  poco tiempo, combinando tradición, modernidad y paisajes inolvidables.",
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
    text: 'Llegada al Aeropuerto Internacional de Osaka y traslado al hotel.  Alojamiento.',
    image: LlegadaKansai,
    altText: 'turista-llegando-al-aeropuerto-de-kioto-japon-siendo-recibida-por-guia-de-japan-Premium-en-la-zona-de-arribos.',
  },
  {
    title: 'Osaka - Nara - Kioto',
    subtitle: NumeroTres,
    subtitleAltText: "Número 3",
    text: 'Visita al Castillo de Osaka y traslado a Nara para conocer el Gran Buda en el Templo Todaiji y el Parque de los Ciervos Sagrados. Almuerzo incluido. Por la tarde llegada a Kioto con parada en el Santuario Fushimi Inari, famoso por sus miles de torii rojos que conforman uno de los paisajes más emblemáticos de Japón. Alojamiento en Kioto.',
    image: VueloEjecutivo,
    altText: 'turista-con-kimono-tradicional-japones-posando-en-el-bosque-de-bambu-de-kioto-con-japan-Premium.',
  }, {
    title: 'Kioto',
    subtitle: NumeroCuatro,
    subtitleAltText: "Número 4",
    text: 'Desayuno. Visita completa de la antigua capital imperial: el Jardín Zen del Templo Tenryuji, el mágico Bosque de Bambú de Arashiyama, el reluciente Pabellón Dorado (Kinkakuji) y el majestuoso Castillo de Nijo. Almuerzo incluido. Tarde libre para explorar la ciudad a tu ritmo.  Alojamiento.',
    image: VistaAvion,
    altText: 'viajera-en-mirador-con-vista-a-la-torre-de-tokio-y-el-paisaje-urbano-de-la-capital-de-japon-con-japan-Premium',
  }, {
    title: 'Kioto - Hakone',
    subtitle: NumeroCinco,
    subtitleAltText: "Número 5",
    text: 'Desayuno. Traslado en tren bala hasta Odawara. Desde allí iniciaremos la excursión al Parque Nacional de Hakone, donde disfrutaremos un Minicrucero por el Lago Ashi y un ascenso en teleférico con vistas espectaculares del Monte Fuji (si el clima lo permite). Almuerzo incluido. Por la noche, cena típica japonesa en un Ryokan de lujo (o cena en hotel según categoría elegida). Alojamiento en Hakone.',
    image: EncantoJapan,
    altText: 'viajera-frente-al-torii-flotante-de-miyajima-en-hiroshima-durante-el-atardecer-con-japan-Premium.',
  }, {
    title: 'Hakone - Tokio',
    subtitle: NumeroSeis,
    subtitleAltText: "Número 6",
    text: 'Desayuno. Salida hacia Tokio. A la llegada, visita guiada por la capital japonesa: el Santuario Meiji, la Torre de Tokio y el vibrante Templo Asakusa Kannon con su tradicional calle comercial Nakamise. Almuerzo incluido. Tarde libre para compras o actividades personales. Alojamiento.',
    image: MiradorTorre,
    altText: 'pareja-de-turistas-viajando-en-tren-bala-shinkansen-en-japon-con-japan-Premium-disfrutando-del-paisaje-desde-la-ventana.',
  }, {
    title: 'Tokio',
    subtitle: NumeroSiete,
    subtitleAltText: "Número 7",
    text: 'Desayuno. Día libre para recorrer Tokio a tu manera: desde la modernidad de Shibuya y Shinjuku hasta los barrios tradicionales como Yanaka.  Alojamiento.',
    image: ToriiFlotante,
    altText: 'pareja-de-turistas-en-el-templo-nachisan-con-pagoda-roja-y-montanas-de-fondo-en-japon-con-japan-Premium.',
  }, {
    title: ' Tokio - México',
    subtitle: NumeroOcho,
    subtitleAltText: "Número 8",
    text: 'Desayuno. Traslado al aeropuerto para tomar el vuelo de regreso. Fin de nuestros servicios.',
    image: TemploNachisan,
    altText: 'pareja-de-turistas-en-dotonbori-osaka-con-los-carteles-luminosos-iconicos-al-fondo-con-japan-Premium.',
  }
];

const downloadData = [
  {
    id: "01",
    title: "japón premium",
    subtitle: "Japon express",
    dias: "8 Días - 6 Noches",
    urlDescargar: "https://japonpremium.com/pdf/itinerario-japon-8-dias-express.pdf"
  }
]

const dataPrecios = [
  {
    title: 'Temporada A',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '7,512' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '10,160' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '8,321' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '10,548' },
    ],
  },
  {
    title: 'Temporada B',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '7,703' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '9,305' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '8,496' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '10,865' },
    ],
  },
  {
    title: 'Temporada C',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '8,131' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '10,007' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '8,672' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '11,483' },
    ],
  },
  {
    title: 'Temporada Cerezos',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '8,292' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '10,309' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '9,620' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '12,684' },
    ],
  },
];

const Travelinfo = [
  {
    title: "EL VIAJE A JAPÓN INCLUYE",
    description: [
      "Vuelo redondo México - Japón - México.",
      "Traslados aeropuerto-hotel-aeropuerto.",
      "13 noches de alojamiento en hoteles previstos.",
      "Desayunos diarios, 7 almuerzos y 3 cenas.",
      "Viajes en tren bala (Nozomi) clase turista según itinerario.",
      "Excursiones y visitas con guías en español.",
      "Entradas a templos, santuarios y sitios mencionados."
    ],
  }, {
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

const hotels = [
  {
    id: '1',
    imageUrl: Hotel1,
    location: 'TOKIO',
    hotelName: 'HOTEL SHINAGAWA PRINCE'
  },
  {
    id: '2',
    imageUrl: Hotel2,
    location: 'TOKIO',
    hotelName: 'HOTEL VILLA FONTAINE SHIODOME'
  },
  {
    id: '3',
    imageUrl: Hotel3,
    location: 'TOKIO',
    hotelName: 'HOTEL VILLA FONTAINE ROPPONGI'
  },
  {
    id: '4',
    imageUrl: Hotel4,
    location: 'KAWAGUCHIKO',
    hotelName: 'HOTEL FUJI VIEW'
  },
  {
    id: '5',
    imageUrl: Hotel5,
    location: 'KAWAGUCHIKO',
    hotelName: 'HOTEL ONSEN MIFUJIEN'
  },
  {
    id: '6',
    imageUrl: Hotel6,
    location: 'KAWAGUCHIKO',
    hotelName: 'HOTEL OIKE RYOKAN'
  },
  {
    id: '7',
    imageUrl: Hotel7,
    location: 'KIOTO',
    hotelName: 'HOTEL MIYAKO KYOTO HACHIJŌ'
  },

];

export default function JaponExpress() {

  useEffect(() => {
    document.title = `Itinerario Japón Express | Japón PREMIUM®`;
  }, []);

  return (
    <>
      <FlyingButton />
      <HeroSection data={data} />
      <Suspense fallback={<LoadingSpinner label="Cargando Japón Express..." />}>
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

