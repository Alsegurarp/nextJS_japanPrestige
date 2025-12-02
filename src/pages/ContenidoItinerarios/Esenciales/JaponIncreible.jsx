import React, {useEffect} from 'react';
import { Suspense } from 'react';
import styles from './JaponIncreible.module.css';

import HeroSection from '../../../Componentes/Sections/HeroSection.jsx';
import HeroImage from '../../../assets/Itinerarios/PortadasItinerarios/Japon_Increible_Japon_Premium_Puente_Nijubashi_Palacio.webp';

import ItinerariosTemplate from '../../../Componentes/Sections/Reutilizable/ItinerariosTemplate.jsx';
import DownloadSection from '../../../Componentes/Sections/Reutilizable/DownloadSection.jsx';
import CardPrecio from '../../../Componentes/Sections/Reutilizable/CardPrecioPrueba.jsx';
import DetallesNoContiene from '../../../Componentes/Sections/Reutilizable/DetallesNoContiene.jsx';
import TripDetails from '../../../Componentes/Sections/Reutilizable/TripDetails.jsx';
import HotelesJapon from '../../../Componentes/Sections/Reutilizable/HotelesJapon.jsx';
// Componentes 

import LetrasDoradasResponsive from '../../../assets/titulosDorados/japonincreiblemovil.svg';
import LetrasDoradasDesktop from '../../../assets/titulosDorados/japonincreibleweb.svg';

import LlegadaAeropuerto from '../../../assets/Itinerarios/JaponIncreible/Dia_1_Salida_Japon_Premium_Ciudad_Mexico_Rumbo_Destino_Viajes_Turismo.webp';
import LlegadaKansai from '../../../assets/Itinerarios/JaponIncreible/Dia_2_Tokio_Japon_Premium_Vibrante_Ciudad_Explorar_Conocer_Viajes_Turismo_.webp';
import VueloEjecutivo from '../../../assets/Itinerarios/JaponIncreible/Dia_3_Torre_Tokio_Japon_Premium_Principales_Puntos_Interes_Viaje_Turismo_Experiencia.webp';
import VistaAvion from '../../../assets/Itinerarios/JaponIncreible/Dia_4_Tokio_Japon_Premium_Lago_Ashi_Barco_Vistas_Monte_Fuji_Turismo_Viajes.webp';
import EncantoJapan from '../../../assets/Itinerarios/JaponIncreible/Dia_5_Iyashi_No_Sato_Nenba_Japon_Premium_Pueblo_Museo_Viajes_Turismo_Cultura_Historia.webp';
import MiradorTorre from '../../../assets/Itinerarios/JaponIncreible/Dia_6_Fushimi_Inari_Taisha_Japon_Premium_Torii_Rojos_Santuraio_Cultura_Turismo_Viajes.webp';
import ToriiFlotante from '../../../assets/Itinerarios/JaponIncreible/Dia_7_Dotonbori_Japon_VIP_Shirahama_Vibrante_Zona_Conocer_Turistas_Viajes_Calles_Emblematicas.webp';
import TemploNachisan from '../../../assets/Itinerarios/JaponIncreible/Dia_8_Castillo_Samurai_Japon_Premium_Patrimonio_Humanidad_Himeji_Viaje_Cultura_Turismo.webp';
import TurismoDotonbori from '../../../assets/Itinerarios/JaponIncreible/Dia_9_Santuario_Itsukushima_Japon_VIP_Miyajima_Isla_Sagrada_Ferry_Torii_Flotante.webp';
import JardinKenrokuen from '../../../assets/Itinerarios/JaponIncreible/Dia_10_Tren_Bala_Japon_Premium_Tokio_Metrpolos_Tradicion_Futuro_Viajes_Turismo_Explorar.webp';
import GrupoTuristas from '../../../assets/Itinerarios/JaponIncreible/Dia_11_Regreso_Japon_Premium_Aeropuerto_Despedida_Viajes_Turismo_Experiencias.webp';
// all images

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
// todos los numeros dorados

import avion from '../../../assets/avion.svg';
import calendario from '../../../assets/calendario.svg';
import user from '../../../assets/user.svg';

// Hoteles imagenes '../../../assets/Itinerarios/HotelesDeItinerarios/
import Hotel1 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_Villa_Fontaine_Shiodome.webp';
import Hotel2 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/tokio/Hotel_Villa_Fontaine_Roppongi.webp';
import Hotel3 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kawaguchiko/Hotel_Oike_Ryokan.webp';
import Hotel4 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kawaguchiko/Hotel_Onsen_Mifujien.webp';
import Hotel5 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kawaguchiko/Hotel_Fuji_View.webp';
import Hotel6 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kioto/Hotel_Miyako_Kyoto_Hachijo.webp';
import Hotel7 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kioto/Hotel_Kyoto_Tokyu.webp';
import Hotel8 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/osaka/Hotel_Candeo_S_Osaka_Namba.webp';
import Hotel9 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/osaka/Hotel_Hinode_Osaka.webp';
import Hotel10 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/okayama/Hotel_Ana_Crowne_Plaza_Okayama.webp';
import Hotel11 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/okayama/Hotel_Mitsui_Garden_Okayama.webp';
import Hotel12 from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/okayama/Hotel_Daiwa_Roynet_kayama_Ekimae.webp';
import FlyingButton from '../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';




    const data = [
      {
        title: "11 Días - 9 Noches",
        subtitle: "Tokio - Monte Fuji - Kawaguchiko - Nagoya - Kioto - Nara - Osaka - Okayama - Hiroshima",
        text: "Un viaje completo que combina lo mejor de Japón: sus ciudades futuristas, templos ancestrales, paisajes de ensueño y una inmersión en su cultura  milenaria.",
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
          text: 'Llegada y asistencia en el aeropuerto. Traslado en shuttle bus al hotel. Por la tarde, recorrido en metro hasta Shinjuku, seguido de una cena de bienvenida en un restaurante local. Alojamiento.',
          image: LlegadaKansai,
          altText: 'turista-llegando-al-aeropuerto-de-kioto-japon-siendo-recibida-por-guia-de-japan-Premium-en-la-zona-de-arribos.',
        },
        {
          title: 'Tokio',
          subtitle: NumeroTres,
          text: 'Desayuno. Tour panorámico de la ciudad: el Templo Zojoji, el famoso Cruce de Shibuya, el Santuario Meiji, la elegante avenida Omotesando, los jardines y el Puente Nijubashi del Palacio Imperial, el barrio tecnológico Akihabara, el estadio de sumo Kokugikan y el tradicional Templo Sensoji en Asakusa con su calle Nakamise. Almuerzo incluido. Alojamiento.',
          image: VueloEjecutivo,
          altText: 'turista-con-kimono-tradicional-japones-posando-en-el-bosque-de-bambu-de-kioto-con-japan-Premium.',
        },{
          title: 'Tokio - Monte Fuji - Kawaguchiko',
          subtitle: NumeroCuatro,
          text: 'Desayuno. Excursión al Monte Fuji: visita al Arakurayama Sengen Park, paseo en barco por el Lago Kawaguchiko y ascenso hasta la quinta estación (2,305 m). Noche en Ryokan tradicional con onsen, con cena japonesa incluida. Alojamiento en Kawaguchiko.',
        image: VistaAvion,
          altText: 'viajera-en-mirador-con-vista-a-la-torre-de-tokio-y-el-paisaje-urbano-de-la-capital-de-japon-con-japan-Premium',
        },{
          title: ' Kawaguchiko - Iyashi No Sato Nenba - Toyota - Kioto',
          subtitle: NumeroCinco,
          text: 'Desayuno. Visita al pueblo museo Iyashi No Sato Nenba, a las espectaculares Cataratas de Shiraito y al Museo Toyota en Nagoya. Llegada a Kioto. Alojamiento.',
          image: EncantoJapan,
          altText: 'viajera-frente-al-torii-flotante-de-miyajima-en-hiroshima-durante-el-atardecer-con-japan-Premium.',
        },{
          title: 'Kioto',
          subtitle: NumeroSeis,
          text: 'Desayuno. Día completo en la antigua capital imperial: Arashiyama y su Bosque de Bambú, el Templo Tenryuji, el Santuario Fushimi Inari, el Palacio Imperial, el Pabellón Dorado (Kinkakuji) y paseo por el tradicional barrio de Gion, famoso por sus geishas. Alojamiento',
          image: MiradorTorre,
          altText: 'pareja-de-turistas-viajando-en-tren-bala-shinkansen-en-japon-con-japan-Premium-disfrutando-del-paisaje-desde-la-ventana.',
        },{
          title: 'Kioto - Nara - Osaka',
          subtitle: NumeroSiete,
          text: 'Desayuno. Excursión a Nara para visitar el Templo Todaiji con su Gran Buda y el Parque de los Ciervos. Almuerzo incluido. Continuación al Templo Horyuji, Patrimonio de la Humanidad, y traslado a Osaka. Paseo nocturno por Dotonbori, barrio lleno de luces y vida. Alojamiento.',
          image: ToriiFlotante,
          altText: 'pareja-de-turistas-en-el-templo-nachisan-con-pagoda-roja-y-montanas-de-fondo-en-japon-con-japan-Premium.',
        },{
          title: ' Osaka - Engyoji - Himeji - Okayama',
          subtitle: NumeroOcho,
          text: 'Desayuno. Visita al complejo de templos Engyoji en el Monte Shosa (donde se filmó El Último Samurai), al impresionante Castillo de Himeji y al jardín Korakuen en Okayama. Almuerzo incluido. Alojamiento.',
          image: TemploNachisan,
          altText: 'pareja-de-turistas-en-dotonbori-osaka-con-los-carteles-luminosos-iconicos-al-fondo-con-japan-Premium.',
        },{
          title: 'Okayama - Kurashiki - Itsukushima - Hiroshima',
          subtitle: NumeroNueve,
          text: 'Desayuno. Visita a Kurashiki y continuación a Hiroshima, con recorrido por el Memorial de la Paz, la Cúpula de la Bomba Atómica y el Museo de la Paz.  Ferry a la isla de Itsukushima (Miyajima) para visitar su famoso santuario sobre el mar. Cena incluida. Alojamiento en Hiroshima.',
          image: TurismoDotonbori,
          altText: 'pareja-de-viajeros-disfrutando-del-jardin-kenrokuen-en-kanazawa-japon-con-japan-Premium.',
        },{
          title: 'Hiroshima - Tokio',
          subtitle: NumeroDiez,
          text: 'Desayuno. Traslado en tren bala (Shinkansen) hacia Tokio. Llegada y traslado al hotel. Alojamiento.',
          image: JardinKenrokuen,
          altText: 'grupo-de-viajeros-posando-en-la-aldea-tradicional-de-shirakawago-en-kanazawa-japon-con-japan-Premium.',
        },{
          title: 'Tokio - México',
          subtitle: NumeroOnce,
          text: 'Desayuno. Traslado al aeropuerto para tomar el vuelo de regreso. Fin de nuestros servicios.',
          image: GrupoTuristas,
          altText: 'pareja-navegando-en-barca-sobre-lago-con-cerezos-en-flor-y-barco-tradicional-al-fondo-en-takayama-con-japan-Premium.',
        }
    ];

    const downloadData = [
    {
      id: "01",
      title: "japón premium",
      subtitle: "Japón Increíble",
      dias: "11 Días - 9 Noches",
      urlDescargar: "https://japonpremium.com/pdf/itinerario-japon-premium-increible.pdf"
    }];
    
    const dataPrecios = [
    {
        title: 'Precios por persona',
        prices: [
            { type: 'DOBLE', category: 'ESTÁNDAR', amount: '7,916' },
            { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '9,019' }
        ],
    }];

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
            "9 noches de alojamiento en hoteles previstos.",
            "6 comidas incluidas (almuerzos o cenas) en Tokio, Kawaguchiko, Nara, Himeji y Hiroshima.",
            "Experiencias únicas: paseo en barco en el Lago Kawaguchiko, ferry a Miyajima, funicular en Engyoji y trayecto en tren bala Hiroshima-Tokio.",
            "Traslados nocturnos a Shinjuku (Tokio) y al barrio de Gion (Kioto).",
            "Entradas a templos, santuarios y sitios emblemáticos: Zojoji, Meiji, Sensoji, Arakurayama Sengen Park, Santuario Fuji Sengen, Iyashi No Sato Nenba, Museo Toyota, Tenryuji, Bosque de Bambú de Arashiyama, Fushimi Inari, Palacio Imperial, Kinkakuji, Castillo de Matsumoto, Zenkoji (con ceremonia budista), Parque de los Monos de Jigokudani, espectáculo Yumomi, Templo Toshogu y Mausoleo Taiyuinbyo."
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
        "Precios en dólares estadounidenses, pago al tipo de cambio vigente el día de liquidación.",
        "Pasaporte con una vigencia mínima de seis meses al momento del viaje.",
        "Precios sujetos a cambios sin previo aviso debido a la temporada o la disponibilidad",
        "Actividades opcionales tienen costo adicional."
      ],
      },
    ];

    const hotels = [
  {
    id: '1',
    imageUrl: Hotel1,
    location: 'TOKIO',
    hotelName: 'HOTEL VILLA FONTAINE SHIODOME'
  },
  {
    id: '2',
    imageUrl: Hotel2,
    location: 'TOKIO',
    hotelName: 'HOTEL VILLA FONTAINE ROPPONGI'
  },
  {
    id: '3',
    imageUrl: Hotel3,
    location: 'KAWAGUCHIKO',
    hotelName: 'HOTEL OIKE RYOKAN'
  },
  {
    id: '4',
    imageUrl: Hotel4,
    location: 'KAWAGUCHIKO',
    hotelName: 'HOTEL ONSEN MIFUJIEN'
  },
  {
    id: '5',
    imageUrl: Hotel5,
    location: 'KAWAGUCHIKO',
    hotelName: 'HOTEL FUJI VIEW'
  },
  {
    id: '6',
    imageUrl: Hotel6,
    location: 'KIOTO',
    hotelName: 'HOTEL MIYAKO KYOTO HACHIJO'
  },
  {
    id: '7',
    imageUrl: Hotel7,
    location: 'KIOTO',
    hotelName: 'HOTEL KIOTO TOKYU'
  },
  {
    id: '8',
    imageUrl: Hotel8,
    location: 'OSAKA',
    hotelName: 'HOTEL CANDEO OSAKA NAMBA'
  },
  {
    id: '9',
    imageUrl: Hotel9,
    location: 'OSAKA',
    hotelName: 'HOTEL HINODE OSAKA'
  },
  {
    id: '10',
    imageUrl: Hotel10,
    location: 'OKAYAMA',
    hotelName: 'HOTEL ANA CROWNE PLAZA OKAYAMA'
  },
  {
    id: '11',
    imageUrl: Hotel11,
    location: 'OKAYAMA',
    hotelName: 'HOTEL MITSUI GARDEN OKAYAMA'
  },
  {
    id: '12',
    imageUrl: Hotel12,
    location: 'OKAYAMA',
    hotelName: 'HOTEL DAIWA ROYNET OKAYAMA EKIMAE'
  }
    ];

export default function JaponIncreible() {

  useEffect(() => {
    document.title = `Itinerario Japón Increíble | Japón PREMIUM®`; 
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

