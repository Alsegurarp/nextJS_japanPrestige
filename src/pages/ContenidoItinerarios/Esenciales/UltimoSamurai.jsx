import React, {useEffect} from 'react';
import { Suspense } from 'react';
import styles from './UltimoSamurai.module.css';
import HeroSection from '../../../Componentes/Sections/HeroSection.jsx';
import HeroImage from '../../../assets/Itinerarios/PortadasItinerarios/El_Ultimo_Samurai_Portada_Cataratas_Shiraito.webp';

import ItinerariosTemplate from '../../../Componentes/Sections/Reutilizable/ItinerariosTemplate.jsx';

import DownloadSection from '../../../Componentes/Sections/Reutilizable/DownloadSection.jsx';
import CardPrecio from '../../../Componentes/Sections/Reutilizable/CardPrecioPrueba.jsx';
import DetallesNoContiene from '../../../Componentes/Sections/Reutilizable/DetallesNoContiene.jsx';
import TripDetails from '../../../Componentes/Sections/Reutilizable/TripDetails.jsx';
import HotelesJapon from '../../../Componentes/Sections/Reutilizable/HotelesJapon.jsx';

import LetrasDoradasResponsive from '../../../assets/titulosDorados/ultimosamuraimovil.svg';
import LetrasDoradasDesktop from '../../../assets/titulosDorados/ultimosamuraiweb.svg';

import LlegadaAeropuerto from '../../../assets/Itinerarios/ElUltimoSamurai/Dia_1_Salida_Japon_Premium_Ciudad_Mexico_Rumbo_Aventura_Samurai_Viajes_Turismo_.webp';
import LlegadaKansai from '../../../assets/Itinerarios/ElUltimoSamurai/Dia_2_Traslado_Japon_Premium_Tokyo_Cuna_Espiritual_Cultura_Tarde_Libre_Descansar_Descubrir_Joya_Imperial_Turismo_Viajes.webp';
import VueloEjecutivo from '../../../assets/Itinerarios/ElUltimoSamurai/Dia_3_Tokio_Japon_Premium_Akihabara_Barrio_Explora_Viajes_Turismo.webp';
import VistaAvion from '../../../assets/Itinerarios/ElUltimoSamurai/Dia_4_Tokio_Japon_Premium_Monte_Komagatake_Imponente_Vista_Monte_Fuji_Viajes_Turismo.webp';
import EncantoJapan from '../../../assets/Itinerarios/ElUltimoSamurai/Dia_5_Kioto_Japon_Premium_Museo_Toyota_Viajes_Turismo_Automoviles_Historia_Cultura_.webp';
import MiradorTorre from '../../../assets/Itinerarios/ElUltimoSamurai/Dia_6_Pabellon_Dorado_Japon_Premium_Kinkaku-ji_Explorando_Mejor_Kioto_Viajes_Turismo.webp';
import ToriiFlotante from '../../../assets/Itinerarios/ElUltimoSamurai/Dia_7_Nara_Japon_Premium_Gran_Buda_Kioto_Excursion_Viajes_Turismo_Explorar_.webp';
import TemploNachisan from '../../../assets/Itinerarios/ElUltimoSamurai/Dia_8_Osaka_Japon_Premium_Ciudad_Animada_Oeste_Japones_Viajes_Turismo_Experiencias.webp';
import TurismoDotonbori from '../../../assets/Itinerarios/ElUltimoSamurai/Dia_9_hiroshima_Japon_PRemium_Ciudad_Arte_Tradicion_Historia_Viajes_Turismo_Museo_.webp';
import JardinKenrokuen from '../../../assets/Itinerarios/ElUltimoSamurai/Dia_10_Hiroshima_Japon_Premium_Parque_Paz_Biajes_Turismo_Historia_Cultura_.webp';
import GrupoTuristas from '../../../assets/Itinerarios/ElUltimoSamurai/Dia_11_Kobe_Japon_Premium_Puente_de_Naruto_Viajes_Turismo_Experiencias_.webp';
import PaseoEnBarca from '../../../assets/Itinerarios/ElUltimoSamurai/Dia_12_Kawayu_Onsen_Japon_Premium_Santuario_Nachi_Taisha_Ryokan_Tradicional_Viajes_Turismo.webp';
import CastilloHimeji from '../../../assets/Itinerarios/ElUltimoSamurai/Dia_13_Kioto_Japon_Premium_Elegancia_Feudal_Viajes_Turismo.webp';
import CatarataJapon from '../../../assets/Itinerarios/ElUltimoSamurai/Dia_14_Kioto_Japon_Premium_Zen_Famoso_Viajes_Turismo.webp';
import TrasladoMexico from '../../../assets/Itinerarios/ElUltimoSamurai/Dia_15_Nagano_Japon_Premium_Templo_Zonkoji_Viajes_Turismo_Cultura_.webp';
import Dia16 from '../../../assets/Itinerarios/ElUltimoSamurai/Dia_16_Nikko_Japon_Premium_Viajes_Turismo_Cultura_Historio.webp';
import Dia17 from '../../../assets/Itinerarios/ElUltimoSamurai/Dia_17_Japon_Premium_Vuelo_Traslado_Aeropuerto.webp';

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
import NumeroDiecisiete from '../../../assets/numerosDorados/numero17.svg';


import avion from '../../../assets/avion.svg';
import calendario from '../../../assets/calendario.svg';
import user from '../../../assets/user.svg';

// Hoteles imagenes '../../../assets/Itinerarios/HotelesDeItinerarios/';
import Hotel1 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_Shinagawa_Prince.webp';
import Hotel2 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_Park_Hyatt_Tokyo.webp';
import Hotel3 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_Villa_Fontaine_Shiodome.webp';
import Hotel4 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_Villa_Fontaine_Roppongi.webp';
import Hotel5 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kawaguchiko/Hotel_Fuji_View.webp';
import Hotel6 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kawaguchiko/Hotel_Onsen_Mifujien.webp';
import Hotel7 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kawaguchiko/Hotel_Oike_Ryokan.webp';
import Hotel8 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kawaguchiko/Hotel_Regina_Kawaguchiko.webp';
import Hotel9 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kioto/Hotel_Miyako_Kyoto_Hachijo.webp';
import Hotel10 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kioto/Hotel_Kyoto_Tokyu.webp';
import Hotel11 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/osaka/Hotel_Candeo_S_Osaka_Namba.webp';
import Hotel12 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/osaka/Hotel_Hinode_Osaka.webp';
import Hotel13 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/okayama/Hotel_Granvia_Okayama.webp';
import Hotel14 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/okayama/Hotel_Ana_Crowne_Plaza_Okayama.webp';
import Hotel15 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/okayama/Hotel_Mitsui_Garden_Okayama.webp';
import Hotel16 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kioto/Hotel_Daiwa_Roynet_ekimae.webp';
import Hotel17 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/hiroshima/hotel_granvia_hiroshima.webp';
import Hotel18 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/hiroshima/Hotel_Rihga_Royal_Hiroshima.webp';
import Hotel19 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/hiroshima/hotel_daiwa_roynet_hiroshima.webp';
import Hotel20 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/MATSUYAMA/Hotel_Ana_Crowne_Plaza_Matsuyama.webp';
import FlyingButton from '../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';


    const data = [
      {
        title: "17 Días - 15 Noches",
        subtitle: "Tokio - Kawaguchiko - Kioto - Osaka - Okayama - Hiroshima - Matsuyama - Kobe - Monte Koya - Nagano - Ikaho",
        text: "Un recorrido épico para quienes desean vivir Japón en toda su grandeza: desde la espiritualidad de sus templos, hasta la modernidad de sus ciudades y la magia de sus paisajes.",
        image: HeroImage,
        altImg:"Vista frontal del Templo Yasukuni en Tokio, Japón, con cielo nublado al atardecer.",
        letrasDoradasResponsive: LetrasDoradasResponsive,
        LetrasDoradasDesktop: LetrasDoradasDesktop, 
    }];

    const dataSectionCard = [
        {
          title: 'México - Tokio',
          subtitle: NumeroUno,
          subtitleAltText: "ilustracion-de-los-numeros-13-y-14-en-formato-svg-diseno-grafico-japan-Premium",
          text: "Salida en vuelo intercontinental con destino a Japón.",
          image: LlegadaAeropuerto,
          altText: 'pasajero-observando-el-ala-del-avion-y-el-oceano-desde-la-ventana-durante-vuelo-internacional-hacia-japon-con-japan-Premium.',
        },
        {
          title: 'Tokio',
          subtitle: NumeroDos,
          text: 'Llegada y recepción en el aeropuerto. Traslado al hotel en shuttle bus. Por la tarde, recorrido en metro por Shinjuku y cena de bienvenida en restaurante local. Alojamiento.',
          image: LlegadaKansai,
          altText: 'turista-llegando-al-aeropuerto-de-kioto-japon-siendo-recibida-por-guia-de-japan-Premium-en-la-zona-de-arribos.',
        },
        {
          title: 'Tokio',
          subtitle: NumeroTres,
          text: 'Desayuno. Tour panorámico: el Templo Zojoji, el Cruce de Shibuya, el Santuario Meiji, la elegante avenida Omotesando, el Puente Nijubashi del Palacio Imperial, el barrio tecnológico Akihabara, el estadio de sumo Kokugikan y el tradicional Templo Sensoji en Asakusa. Almuerzo incluido. Alojamiento.',
          image: VueloEjecutivo,
          altText: 'turista-con-kimono-tradicional-japones-posando-en-el-bosque-de-bambu-de-kioto-con-japan-Premium.',
        },{
          title: 'Tokio - Monte Fuji - Kawaguchiko',
          subtitle: NumeroCuatro,
          text: 'Desayuno. Visita al Arakurayama Sengen Park, paseo en barco por el Lago Kawaguchiko y ascenso hasta la quinta estación del Monte Fuji (2,305 m). Cena y estancia en Ryokan tradicional con onsen. Alojamiento.',
        image: VistaAvion,
          altText: 'viajera-en-mirador-con-vista-a-la-torre-de-tokio-y-el-paisaje-urbano-de-la-capital-de-japon-con-japan-Premium',
        },{
          title: 'Kawaguchiko - Iyashi No Sato Nenba - Toyota - Kioto',
          subtitle: NumeroCinco,
          text: 'Desayuno. Visita al pueblo museo Iyashi No Sato Nenba, las Cataratas de Shiraito y el Museo Toyota. Llegada a Kioto. Alojamiento.',
          image: EncantoJapan,
          altText: 'viajera-frente-al-torii-flotante-de-miyajima-en-hiroshima-durante-el-atardecer-con-japan-Premium.',
        },{
          title: 'Kioto',
          subtitle: NumeroSeis,
          text: 'Desayuno. Visita al Gran Buda del Templo Todaiji y el Parque de los Ciervos en Nara. Almuerzo incluido. Visita al Templo Horyuji (Patrimonio de la Humanidad). Por la tarde, llegada a Osaka y paseo por Dotonbori, barrio de luces y vida nocturna. Alojamiento.',
          image: MiradorTorre,
          altText: 'pareja-de-turistas-viajando-en-tren-bala-shinkansen-en-japon-con-japan-Premium-disfrutando-del-paisaje-desde-la-ventana.',
        },{
          title: 'Osaka - Engyoji - Himeji - Okayama',
          subtitle: NumeroSiete,
          text: 'Desayuno. Excursión al Monte Shosa y el Templo Engyoji (donde se filmó El Último Samurái). Visita al Castillo de Himeji y al jardín Korakuen en Okayama. Almuerzo incluido. Alojamiento.',
          image: ToriiFlotante,
          altText: 'pareja-de-turistas-en-el-templo-nachisan-con-pagoda-roja-y-montanas-de-fondo-en-japon-con-japan-Premium.',
        },{
          title: 'Osaka - Engyoji - Himeji - Okayama',
          subtitle: NumeroOcho,
          text: 'Desayuno. Excursión al Monte Shosa y el Templo Engyoji (donde se filmó El Último Samurái). Visita al Castillo de Himeji y al jardín Korakuen en Okayama. Almuerzo incluido. Alojamiento.',
          image: TemploNachisan,
          altText: 'pareja-de-turistas-en-dotonbori-osaka-con-los-carteles-luminosos-iconicos-al-fondo-con-japan-Premium.',
        },{
          title: 'Okayama - Kurashiki - Hiroshima - Itsukushima - Hiroshima',
          subtitle: NumeroNueve,
          text: 'Desayuno. Visita al pueblo histórico Kurashiki. Continuación a Hiroshima: el Memorial de la Paz, la Cúpula de la Bomba y el Museo de la Paz. Ferry a Miyajima para visitar el famoso Santuario Itsukushima. Cena incluida. Alojamiento en Hiroshima.',
          image: TurismoDotonbori,
          altText: 'pareja-de-viajeros-disfrutando-del-jardin-kenrokuen-en-kanazawa-japon-con-japan-Premium.',
        },{
          title: 'Hiroshima - Matsuyama',
          subtitle: NumeroDiez,
          text: 'Desayuno. Ferry a Shikoku. En Matsuyama: visita al Castillo, el Templo Ishiteji y entrada al tradicional Dogo Onsen (baño japonés del siglo XIX). Alojamiento.',
          image: JardinKenrokuen,
          altText: 'grupo-de-viajeros-posando-en-la-aldea-tradicional-de-shirakawago-en-kanazawa-japon-con-japan-Premium.',
        },{
          title: 'Matsuyama - Kotohira - Takamatsu - Naruto - Kobe',
          subtitle: NumeroOnce,
          text: 'Desayuno. Visita al Santuario Kotohira, los Jardines Ritsurin y el Puente de Naruto. Llegada a Kobe. Alojamiento.',
          image: GrupoTuristas,
          altText: 'pareja-navegando-en-barca-sobre-lago-con-cerezos-en-flor-y-barco-tradicional-al-fondo-en-takayama-con-japan-Premium.',
        },{
          title: 'Kobe - Osaka - Monte Koya',
          subtitle: NumeroDoce,
          text: 'Desayuno. Visita al Museo Memorial del Terremoto de Kobe. Traslado al Monte Koya, centro del budismo Shingon: visita al Mausoleo de Okuno y al Templo Kongobuji. Cena vegetariana y experiencia espiritual con meditación zen. Alojamiento en monasterio budista.',
          image: PaseoEnBarca,
          altText: 'viajera-frente-al-castillo-de-himeji-en-japon-disfrutando-de-su-arquitectura-tradicional-con-japan-Premium.',
        },{
          title: 'Monte Koya - Kioto',
          subtitle: NumeroTrece,
          text: 'Desayuno. Traslado a Kioto. Día libre para explorar a tu ritmo. Alojamiento.',
          image: CastilloHimeji,
          altText: 'Turista en avión regresando de Japón a México, en clase ejecutiva con Japan Premium, sosteniendo maleta de viaje.',
        },{
          title: 'Kioto - Tsumago - Matsumoto - Nagano',
          subtitle: NumeroCatorce,
          text: 'Desayuno. Visita a Tsumago, uno de los pueblos más bellos de Japón. Continuación a Matsumoto para conocer su imponente castillo del siglo XVI. Almuerzo incluido. Alojamiento en Nagano.',
          image: CatarataJapon,
          altText: 'Turista en avión regresando de Japón a México, en clase ejecutiva con Japan Premium, sosteniendo maleta de viaje.',
        },{
          title: 'Nagano - Parque de los Monos - Kusatsu - Ikaho Onsen',
          subtitle: NumeroQuince,
          text: 'Desayuno. Visita al Templo Zenkoji y ceremonia de Gomakuyo. Excursión al Parque de los Monos de Jigokudani, espectáculo tradicional Yumomi en Kusatsu y alojamiento en Ryokan en Ikaho, con cena japonesa incluida.',
          image: TrasladoMexico,
          altText: 'Turista en avión regresando de Japón a México, en clase ejecutiva con Japan Premium, sosteniendo maleta de viaje.',
        },
        {
          title: ' Ikaho - Nikko - Tokio',
          subtitle: NumeroDieciseis,
          text: 'Desayuno. Excursión a Nikko: el Santuario Toshogu, el Mausoleo Taiyuinbyo y paseo por Kanmangafuchi con sus estatuas Jizo. Regreso a Tokio. Alojamiento.',
          image: Dia16,
          altText: 'Turista en avión regresando de Japón a México, en clase ejecutiva con Japan Premium, sosteniendo maleta de viaje.',
        },
        {
          title: 'Tokio - México',
          subtitle: NumeroDiecisiete,
          text: 'Desayuno. Traslado al aeropuerto para el vuelo de regreso. Fin de nuestros servicios.',
          image: Dia17,
          altText: 'Turista en avión regresando de Japón a México, en clase ejecutiva con Japan Premium, sosteniendo maleta de viaje.',
        },
    ];

    const downloadData = [
    {
      id: "01",
      title: "japón premium",
      subtitle: "Imperio del Sol Naciente",
      dias: "17 Días - 15 Noches",
      urlDescargar: "https://japonpremium.com/pdf/itinerario-japon-premium-ultimo-samurai.pdf"
    }];
    
    const dataPrecios = [
{
    title: 'Precios por persona',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '10,493' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '12,047' },
    ],
  }
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
    location: 'TOKIO',
    hotelName: 'HOTEL Shinagawa Prince'
  },
  {
    id: '2',
    imageUrl: Hotel2,
    location: 'TOKIO',
    hotelName: 'HOTEL Park Hyatt Tokyo'
  },
  {
    id: '3',
    imageUrl: Hotel3,
    location: 'TOKIO',
    hotelName: 'HOTEL Villa Fontaine Shiodome'
  },
  {
    id: '4',
    imageUrl: Hotel4,
    location: 'TOKIO',
    hotelName: 'HOTEL Villa Fontaine Roppongi'
  },
  {
    id: '5',
    imageUrl: Hotel5,
    location: 'KAWAGUCHIKO',
    hotelName: 'HOTEL Fuji View'
  },
  {
    id: '6',
    imageUrl: Hotel6,
    location: 'KAWAGUCHIKO',
    hotelName: 'HOTEL Onsen Mifujien'
  },
  {
    id: '7',
    imageUrl: Hotel7,
    location: 'KAWAGUCHIKO',
    hotelName: 'HOTEL Oike Ryokan'
  },
  {
    id: '8',
    imageUrl: Hotel8,
    location: 'KAWAGUCHIKO',
    hotelName: 'HOTEL Regina Kawaguchiko'
  },
  {
    id: '9',
    imageUrl: Hotel9,
    location: 'KIOTO',
    hotelName: 'HOTEL Miyako Kyoto Hachijo'
  },
  {
    id: '10',
    imageUrl: Hotel10,
    location: 'KIOTO',
    hotelName: 'HOTEL Kyoto Tokyu'
  },
  {
    id: '11',
    imageUrl: Hotel11,
    location: 'OSAKA',
    hotelName: 'HOTEL Candeo`s Osaka Namba'
  },
  {
    id: '12',
    imageUrl: Hotel12,
    location: 'OSAKA',
    hotelName: 'HOTEL Hinode Osaka'
  },
  {
    id: '13',
    imageUrl: Hotel13,
    location: 'OKAYAMA',
    hotelName: 'HOTEL Granvia Okayama'
  },
  {
    id: '14',
    imageUrl: Hotel14,
    location: 'OKAYAMA',
    hotelName: 'HOTEL ANA Crowne Plaza Okayama'
  },
  {
    id: '15',
    imageUrl: Hotel15,
    location: 'OKAYAMA',
    hotelName: 'HOTEL Mitsui Garden Okayama'
  },
  {
    id: '16',
    imageUrl: Hotel16,
    location: 'OKAYAMA',
    hotelName: 'HOTEL Daiwa Roynet Okayama Ekimae'
  },
  {
    id: '17',
    imageUrl: Hotel17,
    location: 'HIROSHIMA',
    hotelName: 'HOTEL Granvia Hiroshima'
  },
  {
    id: '18',
    imageUrl: Hotel18,
    location: 'HIROSHIMA',
    hotelName: 'HOTEL Rihga Royal Hiroshima'
  },
  {
    id: '19',
    imageUrl: Hotel19,
    location: 'HIROSHIMA',
    hotelName: 'HOTEL Daiwa Roynet'
  },
  {
    id: '20',
    imageUrl: Hotel20,
    location: 'MATSUYAMA',
    hotelName: 'HOTEL ANA Crowne Plaza Matsuyama'
  }
];


export default function UltimoSamurai() {

  useEffect(() => {
    document.title = `Itinerario El Último Samurái | Japón PREMIUM®`; 
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
