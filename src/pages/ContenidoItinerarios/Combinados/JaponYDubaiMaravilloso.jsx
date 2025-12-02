import React, {useEffect} from 'react';
import { Suspense } from 'react';
import styles from './JaponYDubaiMaravilloso.module.css';
import HeroSection from '../../../Componentes/Sections/HeroSection.jsx';
import ImagenHero from '../../../assets/Itinerarios/PortadasItinerarios/Japon_&_Dubai_Premium_Cerezos_Oro_Portada.webp';

import ItinerariosTemplate from '../../../Componentes/Sections/Reutilizable/ItinerariosTemplate.jsx';

import DownloadSection from '../../../Componentes/Sections/Reutilizable/DownloadSection.jsx';
import CardPrecio from '../../../Componentes/Sections/Reutilizable/CardPrecioPrueba.jsx';
import DetallesNoContiene from '../../../Componentes/Sections/Reutilizable/DetallesNoContiene.jsx';
import TripDetails from '../../../Componentes/Sections/Reutilizable/TripDetails.jsx';
import HotelesJapon from '../../../Componentes/Sections/Reutilizable/HotelesJapon.jsx';

import LetrasDoradasResponsive from '../../../assets/titulosDorados/japondubaimaravillosomovil.svg';
import LetrasDoradasDesktop from '../../../assets/titulosDorados/japonydubaimaravillosoweb.svg';


import LlegadaAeropuerto from '../../../assets/Itinerarios/JaponDubaiMaravilloso/Dia_1_Inicio_Japon_Premium_Aeropuerto_Internacional_Ciudad_MExico_Viajes_Turismo_Rumbo_Aventura_Explorar.webp';
import LlegadaKansai from '../../../assets/Itinerarios/JaponDubaiMaravilloso/Dia_2_Tokio_Japon_Premium_Ciudad_Vibrante_Restaurante_Gastronomia_Conocer_Viajes_Turismo.webp';
import VueloEjecutivo from '../../../assets/Itinerarios/JaponDubaiMaravilloso/Dia_3_Tokio_Japon_Premium_Templo_Senso-ji_Espiritualidad_Viajes_Turismo_Cultura.webp';
import VistaAvion from '../../../assets/Itinerarios/JaponDubaiMaravilloso/Dia_4_Hakone_Japon_Premium_Crucero_Lago_Asshi_Espectacular_Vista_Monte_Fuji_Viajes_Turismo_.webp';
import EncantoJapan from '../../../assets/Itinerarios/JaponDubaiMaravilloso/Dia_5_Parque_Nara_Japon_Premium_Ciervos_Sagrados_Excursion_Dia_Libre_Viajes_Turismo_Reverencia_.webp';
import MiradorTorre from '../../../assets/Itinerarios/JaponDubaiMaravilloso/Dia_6_Kioto_Japon_Premium_Explorar_Templos_Jardines_Calles_Tradicionales_Gastronomia_Restaurante_Cafeteria_Vaijes_Turismo.webp';
import ToriiFlotante from '../../../assets/Itinerarios/JaponDubaiMaravilloso/Dia_7_Kioto_Japon_Premium_Castillo_Nijo_Maravillad_Explorar_Disfrutar_Experiencias_Viajes_Turismo_Cultura.webp';
import TemploNachisan from '../../../assets/Itinerarios/JaponDubaiMaravilloso/Dia_8_Duabi_Japon_Premium_Vuelo_Ciudad_Simbolo_Lujo_Moderno_Viajes_Turismo_Experiencias.webp';
import TurismoDotonbori from '../../../assets/Itinerarios/JaponDubaiMaravilloso/Dia_9_Dubai_Japon_Premium_Burj_Khalifa_Iconos__Futuro_Vista_Viajes_Turismo_Tarde_Libre_Futurismo_Moderno.webp';
import JardinKenrokuen from '../../../assets/Itinerarios/JaponDubaiMaravilloso/Dia_10_Dubai_Japon_Premium_Safari_4x4_Dunas_Cena_Show_Campamento_Beduino_Turismo_Viaje_.webp';
import GrupoTuristas from '../../../assets/Itinerarios/JaponDubaiMaravilloso/Dia_11_Dubai_Japon_Premium_Visita_Abu_Dhabi_Turismo_Viajes_Dia_Libre_Cultura_Religion_Experiencia.webp';
import PaseoEnBarca from '../../../assets/Itinerarios/JaponDubaiMaravilloso/Dia_12_Dubai_Japon_Premium_Regreso_Mexico_Vuelo_Aeropuerto_Internacional_Viajes_Combinados_Turismo.webp';

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
import Hotel1 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_New_Otani_Tokyo_Gardent_Tower.webp';
import Hotel2 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kioto/Hotel_Kyoto_Tokyu.webp';
import Hotel3 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_Novotel_Deira_City_Centre_Dubai_Japon_Premium.webp';
import FlyingButton from '../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';


    const data = [
      {
        title: "12 Días - 10 Noches",
        subtitle: "Tokio - Hakone - Kioto - Nara - Osaka - Dubái",
        text: "Un viaje que combina lo mejor de Oriente: la tradición y modernidad de Japón con el lujo y exotismo de Dubái.",
        image: ImagenHero,
        altImg:"Vista frontal del Templo Yasukuni en Tokio, Japón, con cielo nublado al atardecer.",
        letrasDoradasResponsive: LetrasDoradasResponsive,
        LetrasDoradasDesktop: LetrasDoradasDesktop, 
    }];

    const dataSectionCard = [
        {
          title: ' México - Tokio',
          subtitle: NumeroUno,
          subtitleAltText: "ilustracion-de-los-numeros-13-y-14-en-formato-svg-diseno-grafico-japan-Premium",
          text: "Salida en vuelo intercontinental con destino a Japón.",
          image: LlegadaAeropuerto,
          altText: 'pasajero-observando-el-ala-del-avion-y-el-oceano-desde-la-ventana-durante-vuelo-internacional-hacia-japon-con-japan-Premium.',
        },
        {
          title: 'Tokio',
          subtitle: NumeroDos,
          text: 'Llegada al aeropuerto internacional. Asistencia en español y traslado al hotel. Resto del día libre. Alojamiento.',
          image: LlegadaKansai,
          altText: 'turista-llegando-al-aeropuerto-de-kioto-japon-siendo-recibida-por-guia-de-japan-Premium-en-la-zona-de-arribos.',
        },
        {
          title: 'Tokio',
          subtitle: NumeroTres,
          text: 'Desayuno. City Tour por la capital japonesa: el Santuario Meiji, la Plaza del Palacio Imperial, el Templo  Sensoji en Asakusa, la calle comercial Nakamise y el exclusivo barrio de Ginza. Tarde libre. Alojamiento.',
          image: VueloEjecutivo,
          altText: 'turista-con-kimono-tradicional-japones-posando-en-el-bosque-de-bambu-de-kioto-con-japan-Premium.',
        },{
          title: 'Tokio - Hakone - Tokio',
          subtitle: NumeroCuatro,
          text: 'Desayuno. Excursión a Hakone: mini crucero por el Lago Ashi, vistas del Monte Fuji y recorrido por el Valle Owakudani, famoso por sus fumarolas. Almuerzo incluido. Regreso a Tokio. Alojamiento.',
          image: VistaAvion,
          altText: 'viajera-en-mirador-con-vista-a-la-torre-de-tokio-y-el-paisaje-urbano-de-la-capital-de-japon-con-japan-Premium',
        },{
          title: 'Tokio - Kioto - Nara - Kioto',
          subtitle: NumeroCinco,
          text: 'Desayuno. Viaje en tren bala Nozomi a Kioto. Excursión a Nara para visitar el Gran Buda del Templo Todaiji y el Parque de los Ciervos. Parada en el Santuario Fushimi Inari con sus miles de torii rojos. Alojamiento en Kioto.',
          image: EncantoJapan,
          altText: 'viajera-frente-al-torii-flotante-de-miyajima-en-hiroshima-durante-el-atardecer-con-japan-Premium.',
        },{
          title: 'Kioto',
          subtitle: NumeroSeis,
          text: 'Desayuno. Visita al Templo Ryoanji, el Pabellón Dorado (Kinkakuji), el Templo Sanjusangendo y el tradicional barrio de Gion, famoso por sus geishas.  Almuerzo incluido. Alojamiento.',
          image: MiradorTorre,
          altText: 'pareja-de-turistas-viajando-en-tren-bala-shinkansen-en-japon-con-japan-Premium-disfrutando-del-paisaje-desde-la-ventana.',
        },{
          title: 'Kioto',
          subtitle: NumeroSiete,
          text: 'Desayuno. Día libre para recorrer la ciudad por tu cuenta o realizar la excursión opcional a Hiroshima y Miyajima. Alojamiento.',
          image: ToriiFlotante,
          altText: 'pareja-de-turistas-en-el-templo-nachisan-con-pagoda-roja-y-montanas-de-fondo-en-japon-con-japan-Premium.',
        },{
          title: 'Kioto - Dubái',
          subtitle: NumeroOcho,
          text: 'Desayuno. Traslado al aeropuerto para volar hacia Dubái. Recepción y traslado al hotel. Alojamiento.',
          image: TemploNachisan,
          altText: 'pareja-de-turistas-en-dotonbori-osaka-con-los-carteles-luminosos-iconicos-al-fondo-con-japan-Premium.',
        },{
          title: 'Dubái',
          subtitle: NumeroNueve,
          text: 'Desayuno. City Tour por Dubái: el Zoco de las Especies, el Museo de Dubái, la Mezquita de Jumeirah, fotos en el Burj Al Arab y tiempo libre en el Dubai Mall, con vistas al imponente Burj Khalifa. Alojamiento.',
          image: TurismoDotonbori,
          altText: 'pareja-de-viajeros-disfrutando-del-jardin-kenrokuen-en-kanazawa-japon-con-japan-Premium.',
        },{
          title: 'Dubái - Safari por el desierto',
          subtitle: NumeroDiez,
          text: 'Desayuno. Mañana libre.  Por la tarde, excursión en 4x4 por las dunas del desierto y cena árabe en campamento con espectáculo de danza y música tradicional. Alojamiento.',
          image: JardinKenrokuen,
          altText: 'grupo-de-viajeros-posando-en-la-aldea-tradicional-de-shirakawago-en-kanazawa-japon-con-japan-Premium.',
        },{
          title: 'Dubái - Sharjah - Abu Dhabi - Dubái',
          subtitle: NumeroOnce,
          text: 'Desayuno. Excursión de día completo: visita a Sharjah, la Mezquita Sheikh Zayed en Abu Dhabi, y  recorrido por la Corniche Road. Parada en el Ferrari World (sin entrada). Regreso a Dubái. Alojamiento.',
          image: GrupoTuristas,
          altText: 'pareja-navegando-en-barca-sobre-lago-con-cerezos-en-flor-y-barco-tradicional-al-fondo-en-takayama-con-japan-Premium.',
        },{
          title: ' Dubái - México',
          subtitle: NumeroDoce,
          text: 'Desayuno. Traslado al aeropuerto para el vuelo de regreso. Fin de nuestros servicios.',
          image: PaseoEnBarca,
          altText: 'viajera-frente-al-castillo-de-himeji-en-japon-disfrutando-de-su-arquitectura-tradicional-con-japan-Premium.',
        }
    ];

    const downloadData = [
    {
      id: "01",
      title: "japón premium",
      subtitle: "Japón & Dubái Maravilloso",
      dias: "12 Días - 10 Noches",
      urlDescargar: "https://japonpremium.com/pdf/itinerario-japon-premium-japon-dubai.pdf"
    }];
    
    const dataPrecios = [
{
    title: 'Temporada A',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '8,484' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '9,942' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '8,874' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '10,693' },
    ],
  },
  {
    title: 'Temporada B',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '8,663' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '10,301' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '8,932' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '11,317' },
    ],
  },
  {
    title: 'Temporada C',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '8,947' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '10,763' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '9,338' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '11,873' },
    ],
  },
  {
    title: 'Temporada Cerezos',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '9,215' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '11,209' },
      { type: 'DOBLE', category: 'SUPERIOR', amount: '9,604' },
      { type: 'SENCILLA', category: 'SUPERIOR', amount: '12,318' },
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
        "Vuelo interno Osaka - Dubái.",
        "6 noches de alojamiento en Japón (con desayunos diarios y 2 almuerzos).",
        "Viaje en tren bala Nozomi (Tokio-Kioto) en clase turista.",
        "Excursiones y visitas guiadas según programa.",
        "Entradas a templos, santuarios y sitios mencionados en el itinerario.",
        "Traslados con asistencia en inglés.",
        "4 noches de alojamiento en hotel con desayuno buffet en Dubái.",
        "Transporte durante las visitas.",
        "City Tour en Dubái con guía en español.",
        "Safari por el desierto con cena y transporte.",
        "Excursión de día completo a Abu Dhabi con guía en español.",
        "Entradas según itinerario.",
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
        "La asistencia en español en traslados y excursiones por el desierto está sujeta a disponibilidad; en caso contrario será en inglés.",
        "Durante el mes de Ramadán no se realiza el espectáculo de Danza del Vientre.",
        "Se requiere visa para Dubái.",
        "Para Japón no se requiere visa estadounidense.",
        "Tarifas en dólares estadounidenses, pagaderas al tipo de cambio vigente.",
        "Precios por persona, según el tipo de habitación y sujetos a disponibilidad.",
        "Pasaporte con una vigencia mínima de seis meses al momento del viaje.",
        "Precios sujetos a cambios sin previo aviso debido a la temporada o la disponibilidad.",
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
    country: 'Emiratos Árabes Unidos',
    location: 'Dubai',
    hotelName: 'Hotel Novotel Dubai Deira City Centre'
  }
];


export default function JaponYDubaiMaravilloso() {

      useEffect(() => {
          document.title = `Itinerario Japon y Dubái Maravilloso | Japón PREMIUM®`; 
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

