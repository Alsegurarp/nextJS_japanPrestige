import React, {useEffect} from 'react';
import { Suspense } from 'react';
import styles from './JaponTailandiaLoMejor.module.css';
import HeroSection from '../../../Componentes/Sections/HeroSection.jsx';
import HeroImage from '../../../assets/Itinerarios/PortadasItinerarios/Japon_&_Tailandia_Rio_Kwai_Kanchanaburi_Japon_Premium_Portada.webp';

import ItinerariosTemplate from '../../../Componentes/Sections/Reutilizable/ItinerariosTemplate.jsx';

import DownloadSection from '../../../Componentes/Sections/Reutilizable/DownloadSection.jsx';
import CardPrecio from '../../../Componentes/Sections/Reutilizable/CardPrecioPrueba.jsx';
import DetallesNoContiene from '../../../Componentes/Sections/Reutilizable/DetallesNoContiene.jsx';
import TripDetails from '../../../Componentes/Sections/Reutilizable/TripDetails.jsx';
import HotelesJapon from '../../../Componentes/Sections/Reutilizable/HotelesJapon.jsx';

import LetrasDoradasResponsive from '../../../assets/titulosDorados/japontailandiamovil.svg';
import LetrasDoradasDesktop from '../../../assets/titulosDorados/japontailandialomejorweb.svg';

// JaponYTailandiaLoMejor
import LlegadaAeropuerto from '../../../assets/Itinerarios/JaponYTailandiaLoMejor/Dia_1_Mexico_Japon_Premium_Vuelo_Intercontinental_Osaka_Viejes_Turismo_Destino_Viajes_Turismo_Aeropuerto_Internacional.webp';
import LlegadaKansai from '../../../assets/Itinerarios/JaponYTailandiaLoMejor/Dia_2_Osaka_Japon_Premium_Aeropuerto_Traslado_Hotel_Rihga_Royal_Restaurante_Cena_Dia_Libre.webp';
import VueloEjecutivo from '../../../assets/Itinerarios/JaponYTailandiaLoMejor/Dia_3_Osaka_Japon_Premium_Nara_Gran_Buda_Templo_Todaiji_Viajes_Turismo_Cultura_Experiencias.webp';
import VistaAvion from '../../../assets/Itinerarios/JaponYTailandiaLoMejor/Dia_4_Kioto_Japon_Premium_Tour_Cultural_Pabellon_Dorado_Kinkakuji_Viajes_Turismo_Cultura_Historia.webp';
import EncantoJapan from '../../../assets/Itinerarios/JaponYTailandiaLoMejor/Dia_5_Kioto_Japon_Premium_Cena_Japonesa_Ryokan_Categoria_Lujo_Viajes_Turismo_Gastronomia.webp';
import MiradorTorre from '../../../assets/Itinerarios/JaponYTailandiaLoMejor/Dia_6_Tokio_Japon_Premium_Torre_Selfie_Viajes_Turismo_Camara_Fotos_Tarde_Libre.webp';
import ToriiFlotante from '../../../assets/Itinerarios/JaponYTailandiaLoMejor/Dia_7_Tokio_Japon_Premium_Tour_Kart_Noche_Viajes_Turismo_Experiencia_Actividades_Diversion.webp';
import TemploNachisan from '../../../assets/Itinerarios/JaponYTailandiaLoMejor/Dia_8_Bangkok_Japon_Premium_Tailandia_Hotel_Holiday_Inn_Silom_Dia_Libre_Habitacion_.webp';
import TurismoDotonbori from '../../../assets/Itinerarios/JaponYTailandiaLoMejor/Dia_9_Bangkok_Japon_Premium_Wat_Benjamabophit_Templo_Marmol_Viajes_Turismo.webp';
import JardinKenrokuen from '../../../assets/Itinerarios/JaponYTailandiaLoMejor/Dia_10_Bangkok_Japon_Premium_Desayuno_Alojamiento_Viajes_Turismo_Gastronomia_Restaurante.webp';
import GrupoTuristas from '../../../assets/Itinerarios/JaponYTailandiaLoMejor/Dia_11_Bangkok_Japon_Premium_Excursion_Rio_Kwai_Kanchanaburi_Viajes_Turismo_Hellfire_Pass_Barco.webp';
import PaseoEnBarca from '../../../assets/Itinerarios/JaponYTailandiaLoMejor/Dia_12_Bangkok_Japon_Premium_Ciudad_Arqueologica_Ayutthaya_Patrimonio_Humanidad_UNESCO_Viajes_Turismo.webp';
import CastilloHimeji from '../../../assets/Itinerarios/JaponYTailandiaLoMejor/Dia_13_Chian_Rai_Japon_Premium_Lago_Payao_Viajes_Turismo_Almuerzo_Alojamiento.webp';
import CatarataJapon from '../../../assets/Itinerarios/JaponYTailandiaLoMejor/Dia_14_Chinag_Rai_Japon_Premium_Excursion_Triangulo_Oro_Tailandia_Birmania_Laos_Viajes_Turismo_Frontera.webp';
import TrasladoMexico from '../../../assets/Itinerarios/JaponYTailandiaLoMejor/Dia_15_Chian_Mai_Japon_Premium_Tribus_Locales_Mujeres_Jirafa_Viajes_Turismo_Cultura_Experiencia.webp';
import FinServiciosImage from '../../../assets/Itinerarios/JaponYTailandiaLoMejor/Dia_16_Chiang_Mai_Japon_Premium_Viajes_Turismo_Vuelo_Vista_Aeropuerto_Avion_Regreso_Mexico.webp';

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


// Hoteles imagenes 
import Hotel1 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/osaka/Hotel_New_Otani_Osaka.webp';
import Hotel2 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kioto/Hotel_Cross_Kyoto.webp';
import Hotel3 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/hakone/Hotel_Hakone_Sengokuhara_Prince.webp';
import Hotel4 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/hakone/Hotel_Yumoto_Fujiya.webp';
import Hotel5 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/hakone/Hotel_Hakone_Kowakien_Ten_Yu.webp';
import Hotel6 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/hakone/Hotel_Ryuguden_en_hakone.webp';
import Hotel7 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_Hyatt_Regency_Tokyo.webp';
import Hotel8 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_Park_Hyatt_Tokyo.webp';
import Hotel9 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Tailandia/Hotel_Pullman_Bangkok_G_Tailandia_Japon_Premium.webp';
import Hotel10 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Tailandia/Hotel_COMO_Metropolitan_Bangkok_Tailandia_Japon_Premium.webp';
import Hotel11 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Tailandia/Hotel_Resotel_Rio_Kwai_Kanchanburi_Tailandia_Japon_Premium.webp';
import Hotel12 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Tailandia/Hotel_And_Convention_Centre_Topland_Phitsanulok_Tailandia_Japon_Premium.webp';
import Hotel13 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Tailandia/Hotel_Gran_Vista_Hanoi_Chiang_Rai_Tailandia_Japon_Premium.webp';
import Hotel14 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Tailandia/Hotel_The_Imperial_River_House_Chiang_Rai_TailandiaJapon_Premium.webp';
import Hotel15 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Tailandia/Hotel_Dusit_D2_Chiang_Mai_Tailandia_Japon_Premium.webp';
import FlyingButton from '../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';


    const data = [
      {
        title: "16 Días - 14 Noches",
        subtitle: "Osaka - Tokio - Kioto - Hakone - Bangkok - Ayatthaya - Chiang Rai - Chiang Mai",
        text: "Un viaje excepcional que une lo mejor de Japón, con su mezcla de tradición y modernidad, y la riqueza cultural y natural de Tailandia.",
        image: HeroImage,
        altImg:"Vista frontal del Templo Yasukuni en Tokio, Japón, con cielo nublado al atardecer.",
        letrasDoradasResponsive: LetrasDoradasResponsive,
        LetrasDoradasDesktop: LetrasDoradasDesktop, 
    }];

    const dataSectionCard = [
        {
          title: 'México - Osaka',
          subtitle: NumeroUno,
          subtitleAltText: "ilustracion-de-los-numeros-13-y-14-en-formato-svg-diseno-grafico-japan-Premium",
          text: "Salida en vuelo intercontinental con destino a Japón.",
          image: LlegadaAeropuerto,
          altText: 'pasajero-observando-el-ala-del-avion-y-el-oceano-desde-la-ventana-durante-vuelo-internacional-hacia-japon-con-japan-Premium.',
        },
        {
          title: 'Osaka',
          subtitle: NumeroDos,
          text: 'Llegada al aeropuerto y traslado al hotel. Alojamiento.',
          image: LlegadaKansai,
          altText: 'turista-llegando-al-aeropuerto-de-kioto-japon-siendo-recibida-por-guia-de-japan-Premium-en-la-zona-de-arribos.',
        },
        {
          title: 'Osaka - Nara - Kioto',
          subtitle: NumeroTres,
          text: 'Desayuno. Visita al Castillo de Osaka y continuación hacia Nara: el Gran Buda del Templo Todaiji y el Parque de los Ciervos Sagrados. Almuerzo incluido. Por la tarde, traslado a Kioto con parada en el Santuario Fushimi Inari. Alojamiento.',
          image: VueloEjecutivo,
          altText: 'turista-con-kimono-tradicional-japones-posando-en-el-bosque-de-bambu-de-kioto-con-japan-Premium.',
        },{
          title: 'Kioto',
          subtitle: NumeroCuatro,
          text: 'Desayuno. Tour cultural: el Templo Tenryuji, el Bosque de Bambú de Arashiyama, el Pabellón Dorado (Kinkakuji) y el Castillo de Nijo. Almuerzo incluido. Tiempo libre y regreso por cuenta propia al hotel. Alojamiento.',
        image: VistaAvion,
          altText: 'viajera-en-mirador-con-vista-a-la-torre-de-tokio-y-el-paisaje-urbano-de-la-capital-de-japon-con-japan-Premium',
        },{
          title: 'Kioto - Hakone',
          subtitle: NumeroCinco,
          text: 'Desayuno. Traslado en tren bala Shinkansen a Odawara. Excursión al Parque Nacional de Hakone: mini crucero por el Lago Ashi y subida en teleférico.  Almuerzo incluido. Cena japonesa en Ryokan (categoría lujo) o cena en hotel (categoría estándar/primera). Alojamiento.',
          image: EncantoJapan,
          altText: 'viajera-frente-al-torii-flotante-de-miyajima-en-hiroshima-durante-el-atardecer-con-japan-Premium.',
        },{
          title: ' Hakone - Tokio',
          subtitle: NumeroSeis,
          text: 'Desayuno. Salida hacia Tokio. Visita: Santuario Meiji, la Torre de Tokio y el Templo Sensoji en Asakusa con su calle Nakamise. Almuerzo incluido.  Tarde libre. Alojamiento.',
          image: MiradorTorre,
          altText: 'pareja-de-turistas-viajando-en-tren-bala-shinkansen-en-japon-con-japan-Premium-disfrutando-del-paisaje-desde-la-ventana.',
        },{
          title: 'Tokio',
          subtitle: NumeroSiete,
          text: 'Desayuno. Día libre para compras o actividades personales. Alojamiento.',
          image: ToriiFlotante,
          altText: 'pareja-de-turistas-en-el-templo-nachisan-con-pagoda-roja-y-montanas-de-fondo-en-japon-con-japan-Premium.',
        },{
          title: 'Tokio - Bangkok',
          subtitle: NumeroOcho,
          text: 'Desayuno. Traslado al aeropuerto y vuelo a Bangkok. Llegada y traslado al hotel. Alojamiento.',
          image: TemploNachisan,
          altText: 'pareja-de-turistas-en-dotonbori-osaka-con-los-carteles-luminosos-iconicos-al-fondo-con-japan-Premium.',
        },{
          title: 'Bangkok',
          subtitle: NumeroNueve,
          text: 'Desayuno. City Tour: el Gran Palacio, el Wat Pho (Buda Reclinado), el Wat Benjamabophit (Templo de  Mármol) y el Wat Phra Kaew (Buda Esmeralda).  Visita a una fábrica de piedras preciosas. Alojamiento.',
          image: TurismoDotonbori,
          altText: 'pareja-de-viajeros-disfrutando-del-jardin-kenrokuen-en-kanazawa-japon-con-japan-Premium.',
        },{
          title: 'Bangkok',
          subtitle: NumeroDiez,
          text: 'Desayuno y alojamiento.',
          image: JardinKenrokuen,
          altText: 'grupo-de-viajeros-posando-en-la-aldea-tradicional-de-shirakawago-en-kanazawa-japon-con-japan-Premium.',
        },{
          title: 'Bangkok - khanchanaburi(rio kwai)',
          subtitle: NumeroOnce,
          text: 'Desayuno. Excursión al Río Kwai en Kanchanaburi: cementerio de prisioneros de guerra, Museo de la  Guerra, paseo en barco por el río hasta el puente y recorrido por el famoso tramo ferroviario Hellfire Pass. Almuerzo incluido. Regreso a Bangkok. Alojamiento.',
          image: GrupoTuristas,
          altText: 'pareja-navegando-en-barca-sobre-lago-con-cerezos-en-flor-y-barco-tradicional-al-fondo-en-takayama-con-japan-Premium.',
        },{
          title: 'Bangkok - Ayutthaya - Lopburi - Phitsanulok',
          subtitle: NumeroDoce,
          text: 'Desayuno. Visita a la ciudad arqueológica de Ayutthaya, Patrimonio de la Humanidad UNESCO. Parada en Lopburi, célebre por su Templo de los Monos.  Almuerzo incluido. Llegada a Phitsanulok. Alojamiento.',
          image: PaseoEnBarca,
          altText: 'viajera-frente-al-castillo-de-himeji-en-japon-disfrutando-de-su-arquitectura-tradicional-con-japan-Premium.',
        },{
          title: 'Phitsanulok - Sukhothai - Chiang Rai',
          subtitle: NumeroTrece,
          text: 'Desayuno. Visita a Sukhothai, cuna del reino de Siam y Patrimonio de la Humanidad. Continuación hacia Chiang Rai vía Lampang y el Lago Payao.  Almuerzo incluido. Alojamiento.',
          image: CastilloHimeji,
          altText: 'Turista en avión regresando de Japón a México, en clase ejecutiva con Japan Premium, sosteniendo maleta de viaje.',
        },{
          title: 'Chiang Rai - Chiang Mai',
          subtitle: NumeroCatorce,
          text: 'Desayuno. Excursión al Triángulo de Oro, donde se unen Tailandia, Birmania y Laos. Visita al Museo del Opio y al espectacular Templo Blanco (Wat Rong Khun). Almuerzo incluido. Traslado a Chiang Mai. Alojamiento',
          image: CatarataJapon,
          altText: 'Turista en avión regresando de Japón a México, en clase ejecutiva con Japan Premium, sosteniendo maleta de viaje.',
        },{
          title: 'Chiang Mai',
          subtitle: NumeroQuince,
          text: 'Desayuno. Visita a un campamento de elefantes, demostración de habilidades y safari por la jungla a lomos de elefante. Encuentro con tribus locales, incluidas las Mujeres Jirafa. Almuerzo en ruta. Visita al Templo Doi Suthep, con impresionantes vistas de la ciudad. Alojamiento.',
          image: TrasladoMexico,
          altText: 'Turista en avión regresando de Japón a México, en clase ejecutiva con Japan Premium, sosteniendo maleta de viaje.',
        },{
          title: 'Chiang Mai - México',
          subtitle: NumeroDieciseis,
          text: 'Desayuno. Traslado al aeropuerto para el vuelo de regreso. Fin de nuestros servicios.',
          image: FinServiciosImage,
          altText: 'Turista en avión regresando de Japón a México, en clase ejecutiva con Japan Premium, sosteniendo maleta de viaje.',
        },
    ];

    const downloadData = [
    {
      id: "01",
      title: "japón premium",
      subtitle: "Japón & Tailandia",
      dias: "16 Días - 14 Noches",
      urlDescargar: "https://japonpremium.com/pdf/itinerario-japon-premium-japon-tailandia.pdf"
    }];
    
    const dataPrecios = [
{
    title: 'Temporada A',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '9,948' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '12,232' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '10,896' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '14,101' },
    ],
  },
  {
    title: 'Temporada B',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '10,138' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '12,576' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '11,072' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '14,418' },
    ],
  },
  {
    title: 'Temporada C',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '10,567' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '13,278' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '11,249' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '15,036' },
    ],
  },
  {
    title: 'Temporada Cerezos',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '10,728' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '13,580' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '11,718' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '16,237' },
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
        "Vuelo redondo México – Japón – México.",
        "Traslados aeropuerto–hotel–aeropuerto.",
        "6 noches de alojamiento en hoteles previstos en Japón.",
        "Desayunos diarios, 4 almuerzos y 1 cena.",
        "Viaje en tren bala Shinkansen (Kioto–Odawara) en clase turista.",
        "Visitas y excursiones según programa (bus, minibús o privado según número de pasajeros).",
        "Entradas a templos, santuarios y sitios destacados.",
        "Seguro de viaje.",
        "3 noches en Bangkok + 5 noches en circuito.",
        "Paseo en barco por el Río Kwai.",
        "Visita de medio día “Esplendor del Palacio”.",
        "Alojamiento y desayuno en Bangkok; media pensión en circuito.",
        "Excursiones y visitas según itinerario.",
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
        'Lo que no esté indicado en el apartado "El Viaje a … incluye".'
      ],
      },   {
      id: "03",
      title: "NOTAS IMPORTANTES",
      description: [
        "Para este viaje no se requiere visa estadounidense.",
        "El traslado de salida en Japón no cuenta con asistencia en español.",
        "No es posible habitación triple en categoría lujo (Japón).",
        "Tarifas en dólares estadounidenses, pagaderas al tipo de cambio vigente.",
        "Precios por persona, sujetos a disponibilidad.",
        "Pasaporte con una vigencia mínima de seis meses al momento del viaje.",
        "Tarifas sujetas a cambios sin previo aviso debido a la temporada o la disponibilidad",
        "Las actividades opcionales tienen costo adicional."
        ],
      },
    ];

    const hotels = [
  {
    id: '1',
    imageUrl: Hotel1,
    location: 'Osaka',
    hotelName: 'Hotel New Otani Osaka'
  },
  {
    id: '2',
    imageUrl: Hotel2,
    location: 'Kioto',
    hotelName: 'Hotel Cross Kyoto'
  },
  {
    id: '3',
    imageUrl: Hotel3,
    location: 'hakone',
    hotelName: 'Hotel Hakone Sengokuhara Prince'
  },
  {
    id: '4',
    imageUrl: Hotel4,
    location: 'Hakone',
    hotelName: 'Hotel Yumoto Fujiya'
  },
  {
    id: '5',
    imageUrl: Hotel5,
    location: 'Hakone',
    hotelName: 'Hotel Hakone Kowakien Ten-Yu'
  },
  {
    id: '6',
    imageUrl: Hotel6,
    location: 'Hakone',
    hotelName: 'Hotel Ryuguden'
  },
  {
    id: '7',
    imageUrl: Hotel7,
    location: 'Tokio',
    hotelName: 'Hotel Hyatt Regency Tokyo'
  },
  {
    id: '8',
    imageUrl: Hotel8,
    location: 'Tokio',
    hotelName: 'Hotel Park Hyatt Tokyo'
  },
  {
    id: '9',
    imageUrl: Hotel9,
    country: 'Tailandia',
    location: 'bangkok',
    hotelName: 'Hotel Pullman Bangkok G'
  },
  {
    id: '10',
    imageUrl: Hotel10,
    country: 'Tailandia',
    location: 'bangkok',
    hotelName: 'Hotel Como Metropolitan Bangkok'
  },
  {
    id: '11',
    imageUrl: Hotel11,
    country: 'Tailandia',
    location: 'kanchanaburi',
    hotelName: 'Hotel Resotel River Kwai'
  },
  {
    id: '12',
    imageUrl: Hotel12,
    country: 'Tailandia',
    location: 'Phitsanulok',
    hotelName: 'Hotel and Convention Centre Topland'
  },
  {
    id: '13',
    imageUrl: Hotel13,
    country: 'Tailandia',
    location: 'Chiang-rai',
    hotelName: 'Hotel Grand Vista Hanoi'
  },
  {
    id: '14',
    imageUrl: Hotel14,
    country: 'Tailandia',
    location: 'Chiang-rai',
    hotelName: 'Hotel The Imperial River House'
  },
  {
    id: '15',
    imageUrl: Hotel15,
    country: 'Tailandia',
    location: 'Chiang-mai',
    hotelName: 'Hotel Dusit D2 Chiang Mai'
  }
];


export default function JaponTailandiaLoMejor() {

      useEffect(() => {
          document.title = `Itinerario Japón & Tailandia | Japón PREMIUM®`; 
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


