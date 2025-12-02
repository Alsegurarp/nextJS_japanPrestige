import React, {useEffect} from 'react';
import { Suspense } from 'react';
import styles from './SamuraisYShaolines.module.css';
import HeroSection from '../../../Componentes/Sections/HeroSection.jsx';
import HeroImage from '../../../assets/Itinerarios/PortadasItinerarios/Samurai_&_Shaolines_Japon_Premium_Portada_Gran_Muralla.webp';

import ItinerariosTemplate from '../../../Componentes/Sections/Reutilizable/ItinerariosTemplate.jsx';

import DownloadSection from '../../../Componentes/Sections/Reutilizable/DownloadSection.jsx';
import CardPrecio from '../../../Componentes/Sections/Reutilizable/CardPrecioPrueba.jsx';
import DetallesNoContiene from '../../../Componentes/Sections/Reutilizable/DetallesNoContiene.jsx';
import TripDetails from '../../../Componentes/Sections/Reutilizable/TripDetails.jsx';
import HotelesJapon from '../../../Componentes/Sections/Reutilizable/HotelesJapon.jsx';

import LetrasDoradasResponsive from '../../../assets/titulosDorados/samuraishaolinesmovil.svg';
import LetrasDoradasDesktop from '../../../assets/titulosDorados/samuraishaolinesweb.svg';

import LlegadaAeropuerto from '../../../assets/Itinerarios/SamuraisXShangolines/Dia_1_Mexico_Japon_Premium_Vuelo_Aeromexico_Rumbo_Aeropuerto_Internacional_Tokio_Entre_Imperios.webp';
import LlegadaKansai from '../../../assets/Itinerarios/SamuraisXShangolines/Dia_2_Tokio_Japon_Premium_Barrio_Omotesando_Tradicional_Moderno_Viajes_Turismo_Shopping_Compras.webp';
import VueloEjecutivo from '../../../assets/Itinerarios/SamuraisXShangolines/Dia_3_Tokio_Japon_Premium_Purikura_Cabina_Fotos_Experiencia_Divertida_Viajes_Turismo_Tiendas_.webp';
import VistaAvion from '../../../assets/Itinerarios/SamuraisXShangolines/Dia_4_Hakone_Japon_Premium_Lago_Ashi_Monte_Fuji_Torii_Turismo_Viajes_.webp';
import EncantoJapan from '../../../assets/Itinerarios/SamuraisXShangolines/Dia_5_Kioto_Japon_Prmeium_Parque_Nara_Ciervos_Sagrados_Reverencias_Animales_Viajes_Turismo_Animales.webp';
import MiradorTorre from '../../../assets/Itinerarios/SamuraisXShangolines/Dia_6_Gion_Japon_Premium_Tradicional_Barrio_Historia_Arte_Espiritualidad_Viajes_Cultura_Turismo.webp';
import ToriiFlotante from '../../../assets/Itinerarios/SamuraisXShangolines/Dia_7_Kioto_Japon_Premium_Shinkansen_Capital_Cultural_Ceremonia_del_Te_Viajes_Turismo.webp';
import TemploNachisan from '../../../assets/Itinerarios/SamuraisXShangolines/Dia_8_Pekin_JApon_Premium_Beijing_China_Traslado_Aeropuerto_Hotel_Recepcion_Viajes_Turismo.webp';
import TurismoDotonbori from '../../../assets/Itinerarios/SamuraisXShangolines/Dia_9_Gran_Muralla_China_Japon_Premium_Tramo_Badaling_Iconico_Mas_Visitada_Viajes_Turismo_Cultura_Historia.webp';
import JardinKenrokuen from '../../../assets/Itinerarios/SamuraisXShangolines/Dia_10_Pekin_Japon_Premium_Imperial_Historico_Templo_Cielo_Jornada_Historica_Arquitectura_Legado_Viajes_Turismo.webp';
import GrupoTuristas from '../../../assets/Itinerarios/SamuraisXShangolines/Dia_11_Pekin_Japon_Premium_China_Templo_Lamas_Historia_Cultura_Viajes_Turismo.webp';
import PaseoEnBarca from '../../../assets/Itinerarios/SamuraisXShangolines/Dia_12_Xian_Japon_Premium_China_Guerrero_Terracota_Oscatava_Maravilla_Mundo_Viajes_Turismo_Cultura_Historia.webp';
import CastilloHimeji from '../../../assets/Itinerarios/SamuraisXShangolines/Dia_13_Shangai_Japon_Premium_China_Traslado_Metropolis_Cosmopolita_Skyline_Viajes_Turismo.webp';
import CatarataJapon from '../../../assets/Itinerarios/SamuraisXShangolines/Dia_14_Shangai_Japon_PRemium_China_Templo_Buda_JAde_Historia_Vanguardia_Viajes_Cultura_Turismo.webp';
import TrasladoMexico from '../../../assets/Itinerarios/SamuraisXShangolines/Dia_15_Mexico_Japon_PRemium_China_Traslado_Aeropuerto_Internacional_Gran_Viaje_Imperios_Milenarios_Turismo.webp';

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
import Hotel2 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/kioto/Hotel_Kyoto_Tokyu.webp';
import Hotel3 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/China/Hotel_Kuntai_Royal_Pekin_China_Japon_Premium.webp';
import Hotel4 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/China/Hotel_Tianyu_Gloria_Plaza_Xian_China_Japon_Premium.webp';
import Hotel5 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_New_Otani_Tokyo_Gardent_Tower.webp';
import Hotel6 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/China/Hotel_Jin_Jiang_Tower_Shanghai_China_Japon_Premium.webp';
import Hotel7 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/China/Hotel_Sunrise_On_The_Bund_Shanghai_China_Japon_Premium.webp';
import FlyingButton from '../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';


    const data = [
      {
        title: "15 Días - 13 Noches",
        subtitle: "Tokio - Hakone - Kioto - Nara - Osaka - Pekin - Xi'an - Shanghái",
        text: "Un viaje épico que combina lo mejor de Japón y China: templos sagrados, paisajes únicos y la grandeza cultural de dos civilizaciones milenarias.",
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
          text: 'Llegada al aeropuerto de Narita o Haneda. Asistencia en español y traslado al hotel. Resto del día libre. Alojamiento.',
          image: LlegadaKansai,
          altText: 'turista-llegando-al-aeropuerto-de-kioto-japon-siendo-recibida-por-guia-de-japan-Premium-en-la-zona-de-arribos.',
        },
        {
          title: 'Tokio',
          subtitle: NumeroTres,
          text: 'Desayuno. Visita panorámica: Palacio Imperial (exterior), Santuario Meiji, Templo Sensoji en Asakusa, calle comercial Nakamise y barrio de Ginza.  Tarde libre. Alojamiento.',
          image: VueloEjecutivo,
          altText: 'turista-con-kimono-tradicional-japones-posando-en-el-bosque-de-bambu-de-kioto-con-japan-Premium.',
        },{
          title: 'Tokio - Hakone - Tokio',
          subtitle: NumeroCuatro,
          text: 'Desayuno. Excursión al Parque Nacional de Hakone: crucero por el Lago Ashi, teleférico Komagatake y el Valle Owakudani, famoso por sus fumarolas.  Almuerzo incluido. Regreso a Tokio. Alojamiento',
        image: VistaAvion,
          altText: 'viajera-en-mirador-con-vista-a-la-torre-de-tokio-y-el-paisaje-urbano-de-la-capital-de-japon-con-japan-Premium',
        },{
          title: 'Tokio - Kioto - Nara - Kioto',
          subtitle: NumeroCinco,
          text: 'Desayuno. Viaje en tren bala Hikari a Kioto. Excursión a Nara para visitar el Gran Buda del Templo Todaiji y el Parque de los Ciervos Sagrados.  Almuerzo incluido. De regreso, vista panorámica de la Pagoda de Kofukuji. Alojamiento en Kioto.',
          image: EncantoJapan,
          altText: 'viajera-frente-al-torii-flotante-de-miyajima-en-hiroshima-durante-el-atardecer-con-japan-Premium.',
        },{
          title: 'Kioto',
          subtitle: NumeroSeis,
          text: 'Desayuno. Visita al Santuario Heian, el Pabellón Dorado (Kinkakuji) y paseo por el barrio de Gion, hogar de las geishas. Tarde libre. Alojamiento.',
          image: MiradorTorre,
          altText: 'pareja-de-turistas-viajando-en-tren-bala-shinkansen-en-japon-con-japan-Premium-disfrutando-del-paisaje-desde-la-ventana.',
        },{
          title: 'Kioto',
          subtitle: NumeroSiete,
          text: 'Desayuno. Día libre con posibilidad de realizar excursión opcional a Hiroshima. Alojamiento.',
          image: ToriiFlotante,
          altText: 'pareja-de-turistas-en-el-templo-nachisan-con-pagoda-roja-y-montanas-de-fondo-en-japon-con-japan-Premium.',
        },{
          title: 'Kioto - osaka - Pekín',
          subtitle: NumeroOcho,
          text: 'Desayuno. Traslado al aeropuerto de Osaka y vuelo incluido a Pekín. Llegada y traslado al hotel. Alojamiento.',
          image: TemploNachisan,
          altText: 'pareja-de-turistas-en-dotonbori-osaka-con-los-carteles-luminosos-iconicos-al-fondo-con-japan-Premium.',
        },{
          title: 'Pekín',
          subtitle: NumeroNueve,
          text: 'Desayuno. Excursión a la Gran Muralla (Badaling). Almuerzo incluido. Por la tarde, paseo por el moderno barrio de Sanlitun y cena de bienvenida de Pato Laqueado de Pekín. Alojamiento.',
          image: TurismoDotonbori,
          altText: 'pareja-de-viajeros-disfrutando-del-jardin-kenrokuen-en-kanazawa-japon-con-japan-Premium.',
        },{
          title: 'Pekín',
          subtitle: NumeroDiez,
          text: 'Desayuno. Visita de la ciudad: Plaza Tiananmen, Palacio Imperial y el Palacio de Verano. Almuerzo incluido. Alojamiento.',
          image: JardinKenrokuen,
          altText: 'grupo-de-viajeros-posando-en-la-aldea-tradicional-de-shirakawago-en-kanazawa-japon-con-japan-Premium.',
        },{
          title: 'Pekín - Xi’an',
          subtitle: NumeroOnce,
          text: 'Desayuno. Visita al Templo del Cielo. Almuerzo incluido. Traslado en tren de alta velocidad a Xi’an. Alojamiento.',
          image: GrupoTuristas,
          altText: 'pareja-navegando-en-barca-sobre-lago-con-cerezos-en-flor-y-barco-tradicional-al-fondo-en-takayama-con-japan-Premium.',
        },{
          title: 'Xi’an',
          subtitle: NumeroDoce,
          text: 'Desayuno. Excursión al Museo de Guerreros y Corceles de Terracota y la fábrica de terracota. Almuerzo incluido. Por la tarde, visita a la Pagoda de la Oca Silvestre, el Barrio Musulmán y la Gran Mezquita. Alojamiento.',
          image: PaseoEnBarca,
          altText: 'viajera-frente-al-castillo-de-himeji-en-japon-disfrutando-de-su-arquitectura-tradicional-con-japan-Premium.',
        },{
          title: 'Xi’an - Shanghái',
          subtitle: NumeroTrece,
          text: 'Desayuno. Vuelo incluido hacia Shanghái. Llegada y traslado al hotel. Alojamiento.',
          image: CastilloHimeji,
          altText: 'Turista en avión regresando de Japón a México, en clase ejecutiva con Japan Premium, sosteniendo maleta de viaje.',
        },{
          title: 'Shanghái',
          subtitle: NumeroCatorce,
          text: 'Desayuno. Visita de la ciudad: Jardín Yuyuan, Templo del Buda de Jade y paseo por el Malecón del Bund. Almuerzo incluido. Tarde libre. Alojamiento.',
          image: CatarataJapon,
          altText: 'Turista en avión regresando de Japón a México, en clase ejecutiva con Japan Premium, sosteniendo maleta de viaje.',
        },{
          title: 'Shanghái - México',
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
      subtitle: "Samurais & Shaolines",
      dias: "15 Días - 13 Noches",
      urlDescargar: "https://japonpremium.com/pdf/itinerario-japon-premium-samurai-shaolines.pdf"
    }];
    
    const dataPrecios = [
{
    title: 'Temporada A',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '9,563' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '11,898' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '9,803' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '12,354' },
    ],
  },
  {
    title: 'Temporada B',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '9,798' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '12,354' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '10,020' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '13,158' },
    ],
  },
  {
    title: 'Temporada C',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '10,135' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '12,923' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '10,368' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '13,728' },
    ],
  },
  {
    title: 'Temporada Cerezos',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '10,368' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '13,392' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '10,590' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '14,298' },
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
        "Vuelo interno Osaka - Pekín.",
        "6 noches de alojamiento en Japón.",
        "6 desayunos y 2 almuerzos.",
        "Viaje en tren bala JR Hikari (Tokio-Kioto) en clase turista.",
        "Transporte de equipaje Tokio-Kioto (día 6).",
        "Visitas guiadas en español (excepto traslados aeropuerto-hotel).",
        "Internet portátil premium ilimitado (velocidad de 187 Mbps).",
        "Seguro de viaje.",
        "7 noches de alojamiento en hoteles previstos.",
        "6 comidas (5 almuerzos + 1 cena).",
        "Tren de alta velocidad Pekín-Xi’an en clase turista.",
        "Guía de habla hispana durante todo el recorrido.",
        "Visitas y entradas según itinerario.",
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
      },   {
      id: "03",
      title: "NOTAS IMPORTANTES",
      description: [
        "Para este viaje no se requiere visa estadounidense.",
        "El traslado de salida no cuenta con asistencia en español.",
        "Tarifas en dólares estadounidenses, pagaderas al tipo de cambio vigente.",
        "Precios por persona según habitación, sujetos a disponibilidad.",
        "El pasajero debe contar con pasaporte vigente mínimo 6 meses al momento del viaje.",
        "Tarifas sujetas a cambios sin previo aviso por temporada o confirmación.",
        "Actividades opcionales tienen costo adicional."
        ],
      },
    ];

    const hotels = [
  {
    id: '1',
    imageUrl: Hotel1,
    country: 'Japón',
    location: 'TOKIO',
    hotelName: 'Hotel New Otani Tokyo Gardent Tower'
  },
  {
    id: '2',
    imageUrl: Hotel2,
    country: 'Japón',
    location: 'KIOTO',
    hotelName: 'Hotel Kyoto Tokyu'
  },
  {
    id: '3',
    imageUrl: Hotel3,
    country: 'China',
    location: 'PEKIN',
    hotelName: 'Hotel Kuntai Royal'
  },
  {
    id: '4',
    imageUrl: Hotel4,
    country: 'China',
    location: 'Xi\'an',
    hotelName: 'Hotel Tianyu Gloria Plaza Xian'
  },
  {
    id: '5',
    imageUrl: Hotel5,
    country: 'China',
    location: 'Xi\'an',
    hotelName: 'Hotel Grand Noble Xian'
  },
  {
    id: '6',
    imageUrl: Hotel6,
    country: 'China',
    location: 'JinJiang',
    hotelName: 'Hotel Jin Jiang Tower'
  },
  {
    id: '7',
    imageUrl: Hotel7,
    country: 'China',
    location: 'Shanghai',
    hotelName: 'Hotel Courtyard Shanghai Xujiahui'
  }
];


export default function SamuraisYShaolines() {

      useEffect(() => {
          document.title = `Itinerario Samuráis & Shaolines | Japón PREMIUM®`; 
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
