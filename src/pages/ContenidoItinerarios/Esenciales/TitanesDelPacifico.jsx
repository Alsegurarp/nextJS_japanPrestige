import React, {useEffect} from 'react';
import { Suspense } from 'react';
import styles from './JaponExpress.module.css';

// Hero section con la heroImages
import HeroSection from '../../../Componentes/Sections/HeroSection.jsx';
import HeroImage from '../../../assets/Itinerarios/PortadasItinerarios/Titanes_del_Pacifico_Portada_Japon_Premium_Cataratas_Shirato.webp';

// Itinerarios - Se declara toda la info aqui
import ItinerariosTemplate from '../../../Componentes/Sections/Reutilizable/ItinerariosTemplate.jsx';

import DownloadSection from '../../../Componentes/Sections/Reutilizable/DownloadSection.jsx';
import CardPrecio from '../../../Componentes/Sections/Reutilizable/CardPrecioPrueba.jsx';
import DetallesNoContiene from '../../../Componentes/Sections/Reutilizable/DetallesNoContiene.jsx';
import TripDetails from '../../../Componentes/Sections/Reutilizable/TripDetails.jsx';
import HotelesJapon from '../../../Componentes/Sections/Reutilizable/HotelesJapon.jsx';

// Los numeros de las cards
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
// Las imagenes de las cards

import LlegadaAeropuerto from '../../../assets/Itinerarios/TitanesDelPacifico/Dia_1_Salida_Cdmx_Japon_Premium_Aeropuerto_Rumbo_Japon_Viaje_Turismo_Pasaporte.webp';
import LlegadaKansai from '../../../assets/Itinerarios/TitanesDelPacifico/Dia_2_Tokio_Japon_Premium_Corazon_Japon_Aeropuerto_Viajes_Turismo.webp';
import VueloEjecutivo from '../../../assets/Itinerarios/TitanesDelPacifico/Dia_3_Tokio_Japon_Premium_Jardines_Palacio_Imperial_Viaje_Turismo_Turistico_Experiencias.webp';
import VistaAvion from '../../../assets/Itinerarios/TitanesDelPacifico/Dia_4_Tokio_Japon_Premium_Lago_Ashi_Minicrucero_Vista_Monte_Fuji_Cafe_Viajes_Turismo.webp';
import EncantoJapan from '../../../assets/Itinerarios/TitanesDelPacifico/Dia_5_Iyashi_No_Sato_Nenba_Japon_Premium_Cataratas_Shiraito_Viajes_Turismo_Naturaleza_Experiencias.webp';
import MiradorTorre from '../../../assets/Itinerarios/TitanesDelPacifico/Dia_6_Higashi_Chaya-agi_Japon_Premium_Tradicional_Barrio_Geishas__Kanazawa_Arte_Elegancia_Viajes_Turismo_Cultura.webp';
import ToriiFlotante from '../../../assets/Itinerarios/TitanesDelPacifico/Dia_7_Tsumago_Japon_Premiun_Pueblos_Madera_Viajes_Turismo_Historia_Cultura.webp';
import TemploNachisan from '../../../assets/Itinerarios/TitanesDelPacifico/Dia_8_Kawayu_Onsen_Japon_Premium_Ryokan_Baño_Termal_Relajacion_Viaje_Turismo_Cultura.webp';
import TurismoDotonbori from '../../../assets/Itinerarios/TitanesDelPacifico/Dia_9_Nikko_Japon_Premium_Majestuoso_Templo_Toshogu_Cultura_Viajes_Turismo.webp';
import JardinKenrokuen from '../../../assets/Itinerarios/TitanesDelPacifico/Dia_10_Mexico_Japon_Premium_Turismo_Viajes_Aeropuerto_Internacional_Vuelo_Avion.webp';

import LetrasDoradasResponsive from '../../../assets/titulosDorados/titanesmovil.svg';
import LetrasDoradasDesktop from '../../../assets/titulosDorados/titanesweb.svg';


import avion from '../../../assets/avion.svg';
import calendario from '../../../assets/calendario.svg';
import user from '../../../assets/user.svg';

import Hotel1 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_Shinagawa_Prince.webp';
import Hotel2 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_Villa_Fontaine_Shiodome.webp';
import Hotel3 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_Villa_Fontaine_Roppongi.webp';
import Hotel4 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kawaguchiko/Hotel_Fuji_View.webp';
import Hotel5 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kawaguchiko/Hotel_Onsen_Mifujien.webp';
import Hotel6 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kawaguchiko/Hotel_Oike_Ryokan.webp';
import Hotel7 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kioto/Hotel_Miyako_Kyoto_Hachijo.webp';
import Hotel8 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kioto/Hotel_Kyoto_Tokyu.webp';
import Hotel9 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/NAGANO/Hotel_Nagano_Tokyu_Rei.webp';
import Hotel10 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/NAGANO/Hotel_Metropolitan_Nagano.webp';
import Hotel11 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kawaguchiko/Hotel_Oike_Ryokan.webp';
import FlyingButton from '../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';


    const data = [
      {
        title: "10 Días - 8 Noches",
        subtitle: "Tokio - Nagoya - Kioto - Nagano - Ikaho",
        text: "Un viaje diseñado para quienes buscan una experiencia completa en Japón, combinando  sus metrópolis futuristas, templos milenarios y paisajes naturales únicos.",
        image: HeroImage,
        altImg:"Un recorrido diseñado para quienes desean descubrir lo mejor de Japón en  poco tiempo, combinando tradición, modernidad y paisajes inolvidables.",
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
          text: '¡Bienvenidos a Japón! Recepción en el aeropuerto y traslado en shuttle bus al hotel. Por la tarde (si el horario lo permite), recorreremos en metro la vibrante zona de Shinjuku y disfrutaremos de una cena de bienvenida en restaurante local. Alojamiento.',
          image: LlegadaKansai,
          altText: 'turista-llegando-al-aeropuerto-de-kioto-japon-siendo-recibida-por-guia-de-japan-Premium-en-la-zona-de-arribos.',
        },
        {
          title: 'Tokio',
          subtitle: NumeroTres,
          text: 'Desayuno. Tour panorámico de la capital: el Templo Zojoji, el famoso Cruce de Shibuya, el Santuario Meiji, la elegante avenida Omotesando, los jardines del Palacio Imperial, el puente de  Nijubashi, el barrio tecnológico de Akihabara, el estadio de sumo Kokugikan y el histórico Templo Sensoji en Asakusa con su calle Nakamise. Almuerzo incluido. Alojamiento.',
          image: VueloEjecutivo,
          altText: 'turista-con-kimono-tradicional-japones-posando-en-el-bosque-de-bambu-de-kioto-con-japan-Premium.',
        },{
          title: 'Tokio - Monte Fuji - Kawaguchiko',
          subtitle: NumeroCuatro,
          text: 'Desayuno. Excursión a la región del Monte Fuji: visita al Arakurayama Sengen Park, paseo en barco por el Lago Kawaguchiko y ascenso en carretera hasta la famosa quinta estación del Fuji (2,305 m). Por la noche, alojamiento en Ryokan tradicional con onsen y cena japonesa incluida. Alojamiento en Kawaguchiko.',
        image: VistaAvion,
          altText: 'viajera-en-mirador-con-vista-a-la-torre-de-tokio-y-el-paisaje-urbano-de-la-capital-de-japon-con-japan-Premium',
        },{
          title: 'Kawaguchiko - Iyashi No Sato Nenba - Toyota - Kioto',
          subtitle: NumeroCinco,
          text: 'Desayuno. Ruta panorámica con visita al pintoresco pueblo museo de Iyashi No Sato Nenba, a las espectaculares Cataratas de Shiraito y al Museo Toyota en Nagoya. Continuación a Kioto. Alojamiento.',
          image: EncantoJapan,
          altText: 'viajera-frente-al-torii-flotante-de-miyajima-en-hiroshima-durante-el-atardecer-con-japan-Premium.',
        },{
          title: 'Kioto',
          subtitle: NumeroSeis,
          text: 'Desayuno. Día completo en la antigua capital imperial: el Templo Tenryuji, el Bosque de Bambú de  Arashiyama, el Santuario Fushimi Inari, el Palacio Imperial, el Pabellón Dorado (Kinkakuji) y un paseo por el tradicional barrio de Gion, famoso por sus geishas. Alojamiento.',
          image: MiradorTorre,
          altText: 'pareja-de-turistas-viajando-en-tren-bala-shinkansen-en-japon-con-japan-Premium-disfrutando-del-paisaje-desde-la-ventana.',
        },{
          title: 'Kioto - Tsumago - Matsumoto - Nagano',
          subtitle: NumeroSiete,
          text: 'Desayuno. Visita a Tsumago, uno de los pueblos de madera más bellos de Japón, seguido de  Matsumoto, con su emblemático castillo del siglo XVI.  Continuación a Nagano. Almuerzo incluido. Alojamiento.',
          image: ToriiFlotante,
          altText: 'pareja-de-turistas-en-el-templo-nachisan-con-pagoda-roja-y-montanas-de-fondo-en-japon-con-japan-Premium.',
        },{
          title: 'Nagano - Alpes Japoneses - Kusatsu - Ikaho Onsen',
          subtitle: NumeroOcho,
          text: 'Desayuno. Visita al Templo Zenkoji con ceremonia budista, excursión al Parque de los Monos de Jigokudani y recorrido por los Alpes Japoneses.  En Kusatsu presenciaremos el espectáculo tradicional Yumomi y disfrutaremos de un paseo en sus aguas termales. Continuación a Ikaho, alojamiento en Ryokan con baños termales y cena japonesa incluida.',
          image: TemploNachisan,
          altText: 'pareja-de-turistas-en-dotonbori-osaka-con-los-carteles-luminosos-iconicos-al-fondo-con-japan-Premium.',
        },{
            title: ' Ikaho - Nikko - Tokio',
            subtitle: NumeroNueve,
            text: 'Desayuno. Visita a Nikko: el majestuoso Templo Toshogu, el Mausoleo Taiyuinbyo y el paseo de Kanmangafuchi con cientos de estatuas Jizo. Regreso a Tokio para cerrar con broche de oro en el famoso Robot Restaurant, un show de luces, robots, música y danza único en el mundo. Cena espectáculo incluida. Alojamiento.',
            image: TurismoDotonbori,
            altText: 'pareja-de-viajeros-disfrutando-del-jardin-kenrokuen-en-kanazawa-japon-con-japan-Premium.',
        },{
            title: 'Tokio - México',
            subtitle: NumeroDiez,
            text: 'Desayuno. Traslado al aeropuerto para el vuelo de regreso. Fin de nuestros servicios.',
            image: JardinKenrokuen,
            altText: 'grupo-de-viajeros-posando-en-la-aldea-tradicional-de-shirakawago-en-kanazawa-japon-con-japan-Premium.',
        }
    ];

    const downloadData = [
        {
            id: "01",
            title: "japón premium",
            subtitle: "Titanes del Pacífico",
            dias: "10 Días - 8 Noches",
            urlDescargar: "https://japonpremium.com/pdf/itinerario-japon-premium-titanes-pacifico.pdf"
        }
    ]
    
    const dataPrecios = [
    {
    title: 'Precios por persona',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '7,180' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '8,288' }
    ],
    }];

    const Travelinfo = [
    {
    title: "EL VIAJE A JAPÓN INCLUYE",
    description: [
        "Vuelo redondo México - Japón - México.",
        "Traslados aeropuerto-hotel-aeropuerto.",
        "8 noches de alojamiento en hoteles previstos.",
        "6 comidas incluidas (almuerzos y cenas) en Tokio, Kawaguchiko, Tsumago, Nagano e Ikaho.",
        "Experiencias exclusivas: paseo en barco en el Lago Kawaguchiko, traslado nocturno a Shinjuku y al barrio de Gion en Kioto.",
        "Entradas a templos, santuarios y sitios destacados: Zojoji, Meiji, Sensoji, Arakurayama Sengen Park, Santuario Fuji Sengen, Iyashi No Sato Nenba, Museo Toyota, Tenryuji, Bosque de Bambú de Arashiyama, Fushimi Inari, Palacio Imperial, Kinkakuji, Castillo de Matsumoto, Zenkoji (con ceremonia Gomakuyo), Parque de los Monos de Jigokudani, espectáculo Yumomi, Templo Toshogu y Mausoleo Taiyuinbyo en Nikko.",
        "Visitas guiadas con transporte privado o público, según el número de participantes."
    ]
    }, {
    title: "EL VIAJE A JAPÓN NO INCLUYE",
    description: [
        "Comidas y bebidas no mencionadas.",
        "Actividades opcionales.",
        "Propinas.",
        "Gastos personales.",
        "Seguro de cancelación.",
        "Lo que no esté indicado en el apartado “El Viaje a … incluye”."
    ]},{
    title: "NOTAS IMPORTANTES",
    description: [
        "Para este viaje no se requiere visa estadounidense.",
        "El traslado de salida no cuenta con asistencia en español.",
        "Tarifas por persona en base al tipo de habitación seleccionada, sujetas a disponibilidad.",
        "Precios en dólares estadounidenses, pagaderos al tipo de cambio vigente el día del pago.",
        "Es responsabilidad del pasajero contar con pasaporte vigente mínimo 6 meses al momento del viaje.",
        "Tarifas sujetas a cambios sin previo aviso debido a temporada o disponibilidad.",
        "Excursiones opcionales tienen costo adicional."
    ]}];

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
  {
    id: '8',
    imageUrl: Hotel8,
    location: 'KIOTO',
    hotelName: 'HOTEL KIOTO TOKYU'
  },
  {
    id: '9',
    imageUrl: Hotel9,
    location: 'NAGANO',
    hotelName: 'HOTEL NAGANO TOKYU REI'
  },
  {
    id: '10',
    imageUrl: Hotel10,
    location: 'NAGANO',
    hotelName: 'HOTEL METROPOLITAN NAGANO'
  },
  {
    id: '11',
    imageUrl: Hotel11,
    location: 'IKAHO',
    hotelName: 'HOTEL MORIAKI RYOKAN'
  }
        ];

export default function TitanesDelPacifico() {
    useEffect(() => {
    document.title = `Itinerario Titanes del Pacífico | Japón PREMIUM®`; 
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
        <TripDetails  Travelinfo={Travelinfo}/>
        <HotelesJapon hotels={hotels} />

      </Suspense>
    </>
  )
}



