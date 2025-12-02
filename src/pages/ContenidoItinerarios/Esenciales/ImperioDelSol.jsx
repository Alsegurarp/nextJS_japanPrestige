import React, {useEffect} from 'react';
import { Suspense } from 'react';
import styles from './ImperioDelSol.module.css';

import HeroSection from '../../../Componentes/Sections/HeroSection.jsx';
import HeroImage from '../../../assets/Itinerarios/PortadasItinerarios/Imperio_del_Sol_Naciente_Japon_Premium_Portada_Viaje_Tradicion_Modernidad_Paisajes.webp';

import ItinerariosTemplate from '../../../Componentes/Sections/Reutilizable/ItinerariosTemplate.jsx';

import DownloadSection from '../../../Componentes/Sections/Reutilizable/DownloadSection.jsx';
import CardPrecio from '../../../Componentes/Sections/Reutilizable/CardPrecioPrueba.jsx';
import DetallesNoContiene from '../../../Componentes/Sections/Reutilizable/DetallesNoContiene.jsx';
import TripDetails from '../../../Componentes/Sections/Reutilizable/TripDetails.jsx';
import HotelesJapon from '../../../Componentes/Sections/Reutilizable/HotelesJapon.jsx';

import LetrasDoradasResponsive from '../../../assets/titulosDorados/imperiodelsolNacientemovil.svg';
import LetrasDoradasDesktop from '../../../assets/titulosDorados/imperiodelsolwebNaciente.svg';


import LlegadaAeropuerto from '../../../assets/Itinerarios/ImperioDelSolNaciente/Dia_1_Salida_Japon_Premium_Mexico_Aeropuerto_Internacional_Viajes_Aventura_Turismo_Cultura.webp';
import LlegadaKansai from '../../../assets/Itinerarios/ImperioDelSolNaciente/Dia_2_Tokio_Japon_PRemium_Dia_Libre_Descansar_Puesto_Callejero_Asakusa_Viajes_Turismo_Gastronomia.webp';
import VueloEjecutivo from '../../../assets/Itinerarios/ImperioDelSolNaciente/Dia_3_Torre_Tokyo_Japon_Premium_Iconica_Viajes_Turismo_Atracciones_Cultura.webp';
import VistaAvion from '../../../assets/Itinerarios/ImperioDelSolNaciente/Dia_4_Hiroshima_Japon_Premium_Cupula_Bomba_Atomica_Museo_Viajes_Cultura_Historia_Turismo.webp';
import EncantoJapan from '../../../assets/Itinerarios/ImperioDelSolNaciente/Dia_5_Matsuyama_Japon_Premium_Ferry_Isla_Shikoku_Castillo_Templo_Viajes_Turismo.webp';
import MiradorTorre from '../../../assets/Itinerarios/ImperioDelSolNaciente/Dia_6_Matsuyama_Japon_Premium_Santuario_Kotohira_Dios_Marineros_Viajes_Turismo.webp';
import ToriiFlotante from '../../../assets/Itinerarios/ImperioDelSolNaciente/Dia_7_Tsumago_Japon_Premium_Samurais_Casco_Antiguo_Era_Edo_Viajes_Turismo.webp';
import TemploNachisan from '../../../assets/Itinerarios/ImperioDelSolNaciente/Dia_8_monte koya_Japon_Premium_Viajes_Turismo_Cultura_Experienicas_Aventura.webp';
import TurismoDotonbori from '../../../assets/Itinerarios/ImperioDelSolNaciente/Dia_9_kioto_Japon_Premium_Tradicional_Barrio_Geishas_Arte_Elegancia_Viajes_Turismo_Cultura.webp';
import JardinKenrokuen from '../../../assets/Itinerarios/ImperioDelSolNaciente/Dia_10_Nagano_Japon_Premium_Parque_Monos_Jigokudani_Macacos_Aguas_Termales_Viajes_Turismo.webp';
import GrupoTuristas from '../../../assets/Itinerarios/ImperioDelSolNaciente/Dia_11_Nikko_Japon_Premium_Excursion_Visita_Santuario_Toshogu_Viajes_Turismo.webp';
import PaseoEnBarca from '../../../assets/Itinerarios/ImperioDelSolNaciente/Dia_12_Regreso_Japon_Premium_Mexico_Vuelo_Aeropuerto_Internacional_Cultura_Historia_Aventura.webp';


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


import avion from '../../../assets/avion.svg';
import calendario from '../../../assets/calendario.svg';
import user from '../../../assets/user.svg';

// Hoteles imagenes 
import Hotel1 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_Villa_Fontaine_Shiodome.webp';
import Hotel2 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_Villa_Fontaine_Roppongi.webp';
import Hotel3 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_Shinagawa_Prince.webp';
import Hotel4 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/hiroshima/hotel_granvia_hiroshima.webp';
import Hotel5 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/hiroshima/Hotel_Sheraton_Grand_Hiroshima.webp';
import Hotel6 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/hiroshima/Hotel_Rihga_Royal_Hiroshima.webp';
import Hotel7 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/hiroshima/hotel_daiwa_roynet_hiroshima.webp';
import Hotel8 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/MATSUYAMA/Hotel_Ana_Crowne_Plaza_Matsuyama.webp';
import Hotel9 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/KOBE/Hotel_Kobe_Meriken_Park_Oriental.webp';
import Hotel10 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kioto/Hotel_Miyako_Kyoto_Hachijo.webp';
import Hotel11 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kioto/Hotel_Kyoto_Tokyu.webp';
import Hotel12 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/NAGANO/Hotel_Nagano_Tokyu_Rei.webp';
import Hotel13 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_Villa_Fontaine_Shiodome.webp';
import FlyingButton from '../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';

    const data = [
      {
        title: "12 Días - 10 Noches",
        subtitle: "Tokio - Hiroshima - Itsukushima - Matsuyama - Kotohira - Takamatsu - Naruto - Kobe - Osaka - Kioto - Tsumago - Matsumoto - Nagano - Kusatsu - Ikaho - Nikko",
        text: "Un recorrido fascinante que combina tradición, modernidad y paisajes únicos. Desde los  templos milenarios hasta las ciudades más vibrantes, este viaje es una verdadera inmersión  en el alma de Japón.",
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
          text: 'Llegada y recepción en el aeropuerto. Traslado al hotel en shuttle bus. Por la tarde, paseo por Shinjuku y cena de bienvenida en restaurante local. Alojamiento.',
          image: LlegadaKansai,
          altText: 'turista-llegando-al-aeropuerto-de-kioto-japon-siendo-recibida-por-guia-de-japan-Premium-en-la-zona-de-arribos.',
        },
        {
          title: 'Tokio',
          subtitle: NumeroTres,
          text: 'Desayuno. Tour panorámico por la capital: Santuario Meiji, el Cruce de Shibuya, la avenida Omotesando, el Puente Nijubashi del Palacio Imperial, el barrio tecnológico Akihabara, el estadio de sumo Kokugikan y el tradicional Templo Sensoji en Asakusa con la calle Nakamise. Almuerzo incluido. Alojamiento.',
          image: VueloEjecutivo,
          altText: 'turista-con-kimono-tradicional-japones-posando-en-el-bosque-de-bambu-de-kioto-con-japan-Premium.',
        },{
          title: 'Tokio - Hiroshima - Itsukushima - Hiroshima',
          subtitle: NumeroCuatro,
          text: 'Desayuno. Viaje en tren bala hacia Hiroshima. Visita al Memorial de la Paz, la Cúpula de la Bomba Atómica y el Museo de la Paz. Ferry hacia la isla de Miyajima, con el icónico Santuario Itsukushima, construido sobre el mar. Cena incluida. Alojamiento en Hiroshima.',
        image: VistaAvion,
          altText: 'viajera-en-mirador-con-vista-a-la-torre-de-tokio-y-el-paisaje-urbano-de-la-capital-de-japon-con-japan-Premium',
        },{
          title: 'Hiroshima - Matsuyama',
          subtitle: NumeroCinco,
          text: 'Desayuno. Ferry a la isla de Shikoku. En Matsuyama, visita al Castillo de Matsuyama y al templo Ishiteji. Ingreso a Dogo Onsen, un histórico baño japonés del siglo XIX. Alojamiento.',
          image: EncantoJapan,
          altText: 'viajera-frente-al-torii-flotante-de-miyajima-en-hiroshima-durante-el-atardecer-con-japan-Premium.',
        },{
          title: 'Matsuyama - Kotohira - Takamatsu - Naruto - Kobe',
          subtitle: NumeroSeis,
          text: 'Desayuno. Visita al Santuario Kotohira, dedicado al dios de los marineros, y a los espectaculares Jardines Ritsurin. Continuación a Naruto, famoso por sus puentes y vistas al mar. Llegada a Kobe. Alojamiento.',
          image: MiradorTorre,
          altText: 'pareja-de-turistas-viajando-en-tren-bala-shinkansen-en-japon-con-japan-Premium-disfrutando-del-paisaje-desde-la-ventana.',
        },{
          title: 'Kobe - osaka - monte koya',
          subtitle: NumeroSiete,
          text: 'Desayuno. Visita al Museo Memorial del Terremoto de Kobe. Continuación hacia Tsumago, pueblo histórico de madera, y luego a Matsumoto para visitar su imponente castillo del siglo XVI. Llegada a Nagano. Alojamiento',
          image: ToriiFlotante,
          altText: 'pareja-de-turistas-en-el-templo-nachisan-con-pagoda-roja-y-montanas-de-fondo-en-japon-con-japan-Premium.',
        },{
          title: 'Monte Koya - Kioto',
          subtitle: NumeroOcho,
          text: 'Desayuno. Traslado al Monte Koya para vivir una experiencia espiritual: alojamiento en monasterio budista, práctica de meditación zen (Ajikan) y cena vegetariana tradicional. Alojamiento.',
          image: TemploNachisan,
          altText: 'pareja-de-turistas-en-dotonbori-osaka-con-los-carteles-luminosos-iconicos-al-fondo-con-japan-Premium.',
        },{
          title: 'Kioto - Tsumago - Matsumoto - Nagano',
          subtitle: NumeroNueve,
          text: 'Desayuno. Tour completo en Kioto: el Santuario Fushimi Inari, el Palacio Imperial, el Pabellón Dorado (Kinkakuji) y el barrio de Gion, famoso por sus geishas. Alojamiento.',
          image: TurismoDotonbori,
          altText: 'pareja-de-viajeros-disfrutando-del-jardin-kenrokuen-en-kanazawa-japon-con-japan-Premium.',
        },{
          title: 'Nagano - Parque de los Monos - Kusatsu - Ikaho Onsen',
          subtitle: NumeroDiez,
          text: 'Desayuno. Visita al Templo Zenkoji, ceremonia de Gomakuyo y excursión al Parque de los Monos de  Jigokudani, donde los macacos se bañan en aguas termales. Continuación a Kusatsu para presenciar el espectáculo Yumomi y traslado a Ikaho Onsen, con alojamiento en ryokan tradicional y cena japonesa incluida',
          image: JardinKenrokuen,
          altText: 'grupo-de-viajeros-posando-en-la-aldea-tradicional-de-shirakawago-en-kanazawa-japon-con-japan-Premium.',
        },{
          title: 'Ikaho - Nikko - Tokio',
          subtitle: NumeroOnce,
          text: 'Desayuno. Excursión a Nikko para visitar el Santuario Toshogu, el Mausoleo Taiyuinbyo y el paseo de Kanmangafuchi con sus estatuas Jizo. Regreso a Tokio. Alojamiento',
          image: GrupoTuristas,
          altText: 'pareja-navegando-en-barca-sobre-lago-con-cerezos-en-flor-y-barco-tradicional-al-fondo-en-takayama-con-japan-Premium.',
        },{
          title: 'Tokio - México',
          subtitle: NumeroDoce,
          text: 'Desayuno. Traslado al aeropuerto para tomar el vuelo de regreso. Fin de nuestros servicios.',
          image: PaseoEnBarca,
          altText: 'viajera-frente-al-castillo-de-himeji-en-japon-disfrutando-de-su-arquitectura-tradicional-con-japan-Premium.',
        }
    ];

    const downloadData = [
    {
      id: "01",
      title: "japón premium",
      subtitle: "Imperio del Sol Naciente",
      dias: "12 Días - 10 Noches",
      urlDescargar: "https://japonpremium.com/pdf/itinerario-japon-premium-imperio-sol-naciente.pdf"
    }];
    
    const dataPrecios = [
{
    title: 'Temporada A',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '8,749' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '10,878' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '10,324' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '13,085' },
    ],
  },
  {
    title: 'Temporada B',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '8,988' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '11,447' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '10,464' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '13,640' },
    ],
  },
  {
    title: 'Temporada C',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '9,367' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '11,988' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '11,131' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '14,764' },
    ],
  },
  {
    title: 'Temporada D',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '9,529' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '12,311' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '11,286' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '15,115' },
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
        "10 noches de alojamiento en hoteles previstos.",
        "9 comidas incluidas (almuerzos o cenas).",
        "Traslados nocturnos a Shinjuku (Tokio) y Gion (Kioto).",
        "Trayectos en tren bala (Shinkansen): Tokio-Hiroshima.",
        "Ferries: Hiroshima-Miyajima y Hiroshima-Matsuyama.",
        "Funicular: acceso al Castillo de Matsuyama.",
        "Entradas a templos, santuarios y sitios destacados: Zojoji, Meiji, Sensoji, Museo de la Paz en Hiroshima, Dogo Onsen, Ishiteji, Kotohira, Jardines Ritsurin, Puente de Naruto, Museo del Terremoto en Kobe, Mausoleo de Okuno, Kongobuji, Fushimi Inari, Palacio Imperial, Kinkakuji, Castillo de Matsumoto, Zenkoji, ceremonia de Gomakuyo, Parque de los Monos de Jigokudani, espectáculo Yumomi, Toshogu y Taiyuinbyo en Nikko."
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
        "Precios en dólares estadounidenses, pagaderos al tipo de cambio vigente.",
        "Tarifas por persona según el tipo de habitación y sujetas a disponibilidad.",
        "Tarifas sujetas a cambios sin previo aviso debido a la temporada o la disponibilidad.",
        "En categoría de lujo no se permite habitación triple.",
        "Algunos traslados podrán realizarse en transporte público dependiendo del número de participantes.",
        "Es responsabilidad del pasajero contar con un pasaporte con una vigencia mínima de seis meses al momento del viaje.",
        "Cada viajero es responsable de tramitar visas, ETAs, vacunas o requisitos migratorios en caso de ser necesarios. La agencia no asume responsabilidad si no se cumple con los documentos requeridos.",
        "Las excursiones opcionales tienen costo adicional."
        ],
      },
    ];

    const hotels = [
  {
    id: '1',
    imageUrl: Hotel1,
    location: 'TOKIO',
    hotelName: 'HOTEL Villa Fontaine Shiodome'
  },
  {
    id: '2',
    imageUrl: Hotel2,
    location: 'TOKIO',
    hotelName: 'HOTEL Villa Fontaine Roppongi'
  },
  {
    id: '3',
    imageUrl: Hotel3,
    location: 'TOKIO',
    hotelName: 'HOTEL Shinagawa Prince'
  },
  {
    id: '4',
    imageUrl: Hotel4,
    location: 'HIROSHIMA',
    hotelName: 'HOTEL Granvia Hiroshima'
  },
  {
    id: '5',
    imageUrl: Hotel5,
    location: 'HIROSHIMA',
    hotelName: 'HOTEL Sheraton Grand Hiroshima'
  },
  {
    id: '6',
    imageUrl: Hotel6,
    location: 'HIROSHIMA',
    hotelName: 'HOTEL Rihga Royal Hiroshima'
  },
  {
    id: '7',
    imageUrl: Hotel7,
    location: 'HIROSHIMA',
    hotelName: 'HOTEL Daiwa Roynet'
  },
  {
    id: '8',
    imageUrl: Hotel8,
    location: 'MATSUYAMA',
    hotelName: 'HOTEL ANA Crowne Plaza Matsuyama'
  },
  {
    id: '9',
    imageUrl: Hotel9,
    location: 'KOBE',
    hotelName: 'HOTEL Kobe Meriken Park Oriental'
  },
  {
    id: '10',
    imageUrl: Hotel10,
    location: 'KIOTO',
    hotelName: 'HOTEL Miyako Kyoto Hachijo'
  },
  {
    id: '11',
    imageUrl: Hotel11,
    location: 'KIOTO',
    hotelName: 'HOTEL Kyoto Tokyu'
  },
  {
    id: '12',
    imageUrl: Hotel12,
    location: 'NAGANO',
    hotelName: 'HOTEL Nagano Tokyu Rei'
  },
  {
    id: '13',
    imageUrl: Hotel13,
    location: 'IKAHO',
    hotelName: 'HOTEL Moriaki Ryokan'
  }
];


export default function ImperioDelSol() {
  useEffect(() => {
      document.title = `Itinerario Imperio del Sol | Japón PREMIUM®`; 
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

