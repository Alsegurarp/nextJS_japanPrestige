import React, {useEffect} from 'react';
import {lazy, Suspense } from 'react';
import styles from './CaminoDeKumano.module.css';
import HeroSection from '../../../Componentes/Sections/HeroSection.jsx';
import CaminoKumano from '../../../assets/Itinerarios/PortadasItinerarios/Camino_Kumano_Portada_Templo_Asakusa_Kannon.webp';

const ItinerariosTemplate = lazy(() => import ('../../../Componentes/Sections/Reutilizable/ItinerariosTemplate.jsx'));
const DownloadSection = lazy(() => import ('../../../Componentes/Sections/Reutilizable/DownloadSection.jsx'));
const CardPrecio = lazy(() => import ('../../../Componentes/Sections/Reutilizable/CardPrecioPrueba.jsx'));
const DetallesNoContiene = lazy(() => import ('../../../Componentes/Sections/Reutilizable/DetallesNoContiene.jsx'));
const TripDetails = lazy(() => import ('../../../Componentes/Sections/Reutilizable/TripDetails.jsx'));
const HotelesJapon = lazy(() => import ('../../../Componentes/Sections/Reutilizable/HotelesJapon.jsx'));

import LetrasDoradasResponsive from '../../../assets/titulosDorados/caminoKumanoResponsive.svg';
import LetrasDoradasDesktop from '../../../assets/titulosDorados/caminoKumanoDesktop.svg';

import LlegadaAeropuerto from '../../../assets/Itinerarios/caminoKumano/Dia-1-Mexico-Japon-Premium-Kansai-Itami-Destino-vuelo-Aeropuerto-Viajes-Turismo-Avion.webp';
import LlegadaKansai from '../../../assets/Itinerarios/caminoKumano/Dia_2_Kioto_Japon_Premium_Aeropuerto_Traslado_Recepcion_Hotel_Keihan_Hachijyoguchi_Viajes_Turismo.webp';
import VueloEjecutivo from '../../../assets/Itinerarios/caminoKumano/Dia_3_Kioto_Japon_Premium_Templo_Sanjusangendo_Visita_Guiada_Viajes_Turismo_Cultura.webp';
import VistaAvion from '../../../assets/Itinerarios/caminoKumano/Dia_4_Kioto_Japon_Premium_Excursion_Nara_Viajes_Turismo_Dia_Libre_Cultura.webp';
import EncantoJapan from '../../../assets/Itinerarios/caminoKumano/Dia_5_Kioto_Japon_Premium_Kurashiki_Barrio_Historico_Bikan_Viajes_Turismo_Cultura.webp';
import MiradorTorre from '../../../assets/Itinerarios/caminoKumano/Dia_6_Hiroshima_Japon_Premium_Santuario_Itsukushima_Viajes_Turismo_Cultura_Miyajima.webp';
import ToriiFlotante from '../../../assets/Itinerarios/caminoKumano/Dia_7_Koyasan_Japon_Premium_Danjo_Garan_Viajes_Turismo_Cultura_Historia_.webp';
import TemploNachisan from '../../../assets/Itinerarios/caminoKumano/Dia_8_Kumano_Kodo_Japon_Premium_Santuario_Kumano_Hongu_Taisha_Viajes_Turismo_Cultura.webp';
import TurismoDotonbori from '../../../assets/Itinerarios/caminoKumano/Dia_9_Osaka_Japon_premium_Dotonbori_Viajes_Turismo_Calle_Iconica_Paseo_Caminata_Viral.webp';
import JardinKenrokuen from '../../../assets/Itinerarios/caminoKumano/Dia_10_Kanazawa_Japon_Premium_Mercado_Oumicho_Gastronomia_Comida_Explorar_Actividades_Experiencias_Cultura_.webp';
import GrupoTuristas from '../../../assets/Itinerarios/caminoKumano/Dia_11_Takayama_Japon_Premium_Museo_Yatai_Kaikan_Historia_Cultura_Aprendizaje_Viajes_Turismo.webp';
import PaseoEnBarca from '../../../assets/Itinerarios/caminoKumano/Dia_12_Hakone_Japon_Premium_Parque_Nacional_Fuji_Lago_Ashi_Teleferico_Vistas_Monte_Fuji_Viajes_Turismo.webp';
import CastilloHimeji from '../../../assets/Itinerarios/caminoKumano/Dia_13_Tokio_Japon_Premium_Calle_Nakamise_Viajes_Turismo_Explorar_Actividades_Cultura_Gastronomia.webp';
import CatarataJapon from '../../../assets/Itinerarios/caminoKumano/Dia_14_Tokio_Japon_Premium_Nikko_Cataratas_Kegon_Viajes_Turismo_Naturaleza_Historia.webp';
import TrasladoMexico from '../../../assets/Itinerarios/caminoKumano/Dia_15_Tokio_Japon_Premium_Traslado_Aeropuerto_Destino_Mexico_Viajes_Turismo.webp';

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

// hoteles
import Hotel1 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/gero/hotel_resorpia_atami_japon.webp';
import Hotel2 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/atami/hotel_resorpia_atami_japon.webp';
import Hotel3 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/hakone/Hotel_Resorpia_Hakone.webp';
import Hotel4 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kioto/Hotel_Daiwa_Roynet_ariake.webp';
import Hotel5 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kioto/Hotel_Ana_Crowne_Plaza_Kyoto.webp';
import Hotel6 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/NACHIKATSURA/Hotel_Katsuura_Gyoen.webp';
import Hotel7 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/osaka/Hotel_Sheraton_Miyako_Osaka.webp';
import Hotel8 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/osaka/hotel_Monterey_Grassmere_Osaka.webp';
import Hotel9 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_New_Otani_Tokyo_Gardent_Tower.webp';
import Hotel10 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/toba/Hotel_International_Toba.webp';
import Hotel11 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/takayama/Hotel_Associa_Takayama_resort.webp';
import Hotel12 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/wakayama/Hotel_Granvia_Wakayama.webp';
import FlyingButton from '../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';


    const data = [
      {
        title: "15 Días - 13 Noches",
        subtitle: "Hakone - Tokio - Osaka - Kioto - Nara",
        text: "Un viaje espiritual y cultural que conecta lo mejor de Japón: ciudades vibrantes, templos  ancestrales, paisajes de ensueño y la experiencia única de recorrer la histórica ruta de  peregrinación Kumano Kodo.",
        image: CaminoKumano,
        bgPosition: "50% 30%",
        altImg:"Vista frontal del Templo Yasukuni en Tokio, Japón, con cielo nublado al atardecer.",
        letrasDoradasResponsive: LetrasDoradasResponsive,
        LetrasDoradasDesktop: LetrasDoradasDesktop, 
    }];

    const dataSectionCard = [
        {
          title: 'México - kansai/itami',
          subtitle: NumeroUno,
          subtitleAltText: "ilustracion-de-los-numeros-13-y-14-en-formato-svg-diseno-grafico-japan-Premium",
          text: "Salida en vuelo intercontinental con destino a Japón.",
          image: LlegadaAeropuerto,
          altText: 'pasajero-observando-el-ala-del-avion-y-el-oceano-desde-la-ventana-durante-vuelo-internacional-hacia-japon-con-japan-Premium.',
        },
        {
          title: 'kansai/itami - Kioto',
          subtitle: NumeroDos,
          text: 'Llegada al aeropuerto de Kansai/Itami, recepción en español y traslado al hotel en Kioto. Resto del día libre. Alojamiento en Kioto.',
          image: LlegadaKansai,
          altText: 'turista-llegando-al-aeropuerto-de-kioto-japon-siendo-recibida-por-guia-de-japan-Premium-en-la-zona-de-arribos.',
        },
        {
          title: 'Kioto',
          subtitle: NumeroTres,
          text: 'Desayuno. Visita guiada: Templo Sanjusangendo, Castillo de Nijo, Pabellón Dorado (Kinkakuji), Templo Tenryuji y el Bosque de Bambú de Arashiyama Almuerzo incluido. Alojamiento',
          image: VueloEjecutivo,
          altText: 'turista-con-kimono-tradicional-japones-posando-en-el-bosque-de-bambu-de-kioto-con-japan-Premium.',
        },{
          title: 'Kioto',
          subtitle: NumeroCuatro,
          text: 'Desayuno. Día libre o excursión opcional a Nara y el Santuario Fushimi Inari. Alojamiento.',
        image: VistaAvion,
          altText: 'viajera-en-mirador-con-vista-a-la-torre-de-tokio-y-el-paisaje-urbano-de-la-capital-de-japon-con-japan-Premium',
        },{
          title: 'Kioto - Himeji - Kurashiki - Hiroshima',
          subtitle: NumeroCinco,
          text: 'Desayuno. Tren bala a Himeji para visitar su castillo (Patrimonio UNESCO). Almuerzo incluido y continuación a Kurashiki para recorrer el barrio histórico Bikan y la residencia Ohashi. Traslado a Hiroshima. Alojamiento.',
          image: EncantoJapan,
          altText: 'viajera-frente-al-torii-flotante-de-miyajima-en-hiroshima-durante-el-atardecer-con-japan-Premium.',
        },{
          title: 'Hiroshima',
          subtitle: NumeroSeis,
          text: 'Desayuno. Excursión a Miyajima y su Santuario Itsukushima, además del Parque Conmemorativo de la  Paz y el Museo de la Bomba Atómica. Alojamiento.',
          image: MiradorTorre,
          altText: 'pareja-de-turistas-viajando-en-tren-bala-shinkansen-en-japon-con-japan-Premium-disfrutando-del-paisaje-desde-la-ventana.',
        },{
          title: 'Hiroshima - koyasan',
          subtitle: NumeroSiete,
          text: 'Desayuno. Tren bala a Osaka y traslado a Koyasan, la montaña sagrada del budismo Shingon. Visita a Kongobuji, Danjo Garan y el Mausoleo de Okunoin. Cena vegetariana y alojamiento en monasterio budista (shukubo).',
          image: ToriiFlotante,
          altText: 'pareja-de-turistas-en-el-templo-nachisan-con-pagoda-roja-y-montanas-de-fondo-en-japon-con-japan-Premium.',
        },{
          title: 'Monte Koya - Kumano Kodo - Kawayu Onsen',
          subtitle: NumeroOcho,
          text: 'Desayuno típico japonés en el monasterio. Traslado a Kumano. Almuerzo y caminata de 4 km por la ruta de peregrinación Kumano  Kodo. Visita al Santuario Kumano Hongu Taisha. Cena y alojamiento en Ryokan en Kawayu Onsen',
          image: TemploNachisan,
          altText: 'pareja-de-turistas-en-dotonbori-osaka-con-los-carteles-luminosos-iconicos-al-fondo-con-japan-Premium.',
        },{
          title: 'Kawayu Onsen - Osaka',
          subtitle: NumeroNueve,
          text: 'Desayuno en el ryokan. Traslado a Osaka. Visita al mirador del Umeda Sky Building y paseo por Dotonbori. Alojamiento.',
          image: TurismoDotonbori,
          altText: 'pareja-de-viajeros-disfrutando-del-jardin-kenrokuen-en-kanazawa-japon-con-japan-Premium.',
        },{
          title: 'Osaka - Kanazawa',
          subtitle: NumeroDiez,
          text: 'Desayuno. Tren a Kanazawa: visita al Jardín Kenrokuen, el Mercado Oumicho y los barrios históricos de geishas y samuráis (residencia Nomura. Alojamiento.',
          image: JardinKenrokuen,
          altText: 'grupo-de-viajeros-posando-en-la-aldea-tradicional-de-shirakawago-en-kanazawa-japon-con-japan-Premium.',
        },{
          title: 'Kanazawa - Shirakawago - Takayama',
          subtitle: NumeroOnce,
          text: 'Desayuno. Excursión a la aldea tradicional Shirakawago (Patrimonio UNESCO). Almuerzo y visita a Takayama, incluyendo la calle Kami-Sannomachi y el museo Yatai Kaikan. Cena incluida. Alojamiento en Takayama.',
          image: GrupoTuristas,
          altText: 'pareja-navegando-en-barca-sobre-lago-con-cerezos-en-flor-y-barco-tradicional-al-fondo-en-takayama-con-japan-Premium.',
        },{
          title: 'Takayama - Hakone - Tokio',
          subtitle: NumeroDoce,
          text: 'Desayuno. Traslado a Hakone hacia Nagoya y Odawara. Visita al Parque Nacional Fuji-Hakone: crucero por el Lago Ashi y teleférico con vistas del Monte Fuji (si el clima lo permite). Almuerzo incluido. Traslado a Tokio. Alojamiento.',
          image: PaseoEnBarca,
          altText: 'viajera-frente-al-castillo-de-himeji-en-japon-disfrutando-de-su-arquitectura-tradicional-con-japan-Premium.',
        },{
          title: 'Tokio',
          subtitle: NumeroTrece,
          text: 'Desayuno. Visita guiada: Torre de Tokio, Templo Asakusa Kannon y calle Nakamise. Almuerzo incluido. Tarde libre. Alojamiento.',
          image: CastilloHimeji,
          altText: 'Turista en avión regresando de Japón a México, en clase ejecutiva con Japan Premium, sosteniendo maleta de viaje.',
        },{
          title: 'Tokio',
          subtitle: NumeroCatorce,
          text: 'Desayuno. Día libre o excursión opcional a Nikko: Santuario Toshogu, Lago Chuzenji y Cataratas Kegon. Alojamiento.',
          image: CatarataJapon,
          altText: 'Turista en avión regresando de Japón a México, en clase ejecutiva con Japan Premium, sosteniendo maleta de viaje.',
        },{
          title: 'Tokio - México',
          subtitle: NumeroQuince,
          text: 'Desayuno. Traslado al aeropuerto para el vuelo de regreso. Fin de nuestros servicios.',
          image: TrasladoMexico,
          altText: 'Turista en avión regresando de Japón a México, en clase ejecutiva con Japan Premium, sosteniendo maleta de viaje.',
        },
    ];

    const downloadData = [
    {
      id: "01",
      title: "japón premium",
      subtitle: "El Camino de Kumano",
      dias: "15 Días - 13 Noches",
      urlDescargar: "https://japonpremium.com/pdf/itinerario-japon-premium-camino-de-kumano.pdf"
    }];
    
    const dataPrecios = [
{
    title: 'Temporada A',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '9,811' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '11,720' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '10,346' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '12,702' },
    ],
  },
  {
    title: 'Temporada B',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '9,989' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '11,988' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '10,524' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '12,970' },
    ],
  },
  {
    title: 'Temporada C',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '10,168' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '12,256' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '10,703' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '13,237' },
    ],
  },
  {
    title: 'Temporada Cerezos',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '10,524' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '11,680' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '11,060' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '13,621' },
    ],
  },
    ];

    const lista = [
        {id: "01",
        icon: avion,
        title: "No incluye: Impuestos aéreos aproximados de 595 USD.",
        },
        {id: "02",
        icon: calendario,
        title: "Temporada B y C: Aplica suplemento (Verano - Fin de año) 450 USD.",
        },
        {id: "03",
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
        "13 noches de alojamiento en hoteles previstos.",
        "Desayunos diarios, 7 almuerzos y 3 cenas.",
        "Viajes en tren bala (Nozomi) clase turista según itinerario.",
        "Excursiones y visitas con guías en español.",
        "Entradas a templos, santuarios y sitios mencionados."
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
      },   {
      id: "03",
      title: "NOTAS IMPORTANTES",
      description: [
        "Para este viaje no se requiere visa estadounidense.",
        "El traslado de salida no cuenta con asistencia en español.",
        "Tarifas por persona en dólares estadounidenses, sujetas a disponibilidad.",
        "Pago al tipo de cambio vigente el día de liquidación.",
        "Pasaporte con una vigencia mínima de seis meses al momento del viaje.",
        "Precios sujetos a cambios sin previo aviso debido a la temporada o la disponibilidad",
        "Las actividades opcionales tienen costo adicional."
      ],
      },
    ];

    const hotels = [
  {
    id: '1',
    imageUrl: Hotel1,
    location: 'ATAMI',
    hotelName: 'Hotel Resorpia Atami'
  },
  {
    id: '2',
    imageUrl: Hotel2,
    location: 'GERO',
    hotelName: 'Hotel Suimeikan Karukaya Sansou'
  },
  {
    id: '3',
    imageUrl: Hotel3,
    location: 'HAKONE',
    hotelName: 'Hotel Resorpia Hakone'
  },
  {
    id: '4',
    imageUrl: Hotel4,
    location: 'KIOTO',
    hotelName: 'Hotel Daiwa Roynet Ariake'
  },
  {
    id: '5',
    imageUrl: Hotel5,
    location: 'KIOTO',
    hotelName: 'Hotel ANA Crowne Plaza Kyoto'
  },
  {
    id: '6',
    imageUrl: Hotel6,
    location: 'NACHIKATSUURA',
    hotelName: 'Hotel Katsuura Gyoen'
  },
  {
    id: '7',
    imageUrl: Hotel7,
    location: 'OSAKA',
    hotelName: 'Hotel Sheraton Miyako Osaka'
  },
  {
    id: '8',
    imageUrl: Hotel8,
    location: 'OSAKA',
    hotelName: 'Hotel Monterey Grassmere Osaka'
  },
  {
    id: '9',
    imageUrl: Hotel9,
    location: 'TOKIO',
    hotelName: 'Hotel New Otani Tokyo Garden Tower'
  },
  {
    id: '10',
    imageUrl: Hotel10,
    location: 'TOBA',
    hotelName: 'Hotel International Toba'
  },
  {
    id: '11',
    imageUrl: Hotel11,
    location: 'TAKAYAMA',
    hotelName: 'Hotel Associa Takayama Resort'
  },
  {
    id: '12',
    imageUrl: Hotel12,
    location: 'WAKAYAMA',
    hotelName: 'Hotel Granvia Wakayama'
  }
    ];


export default function CaminoDeKumano() {

      useEffect(() => {
          document.title = `Itinerario Camino de Kumano | Japón PREMIUM®`; 
        }, []);


  return (
    <>
    <FlyingButton />
    <HeroSection data={data}/>
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
          {lista.map((l, index) => <DetallesNoContiene key={l.id} icon={l.icon} title={l.title} index={index}/>)}
        </div>

        <TripDetails Travelinfo={Travelinfo} />

        <HotelesJapon hotels={hotels} />

      </Suspense>
    </>
  )
}

