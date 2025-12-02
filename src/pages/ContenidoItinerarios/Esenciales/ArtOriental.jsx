import React, {useEffect} from 'react';
import { Suspense } from 'react';
import styles from './ArtOriental.module.css';

import HeroSection from '../../../Componentes/Sections/HeroSection.jsx';
import HeroImage from '../../../assets/Itinerarios/PortadasItinerarios/Art_Oriental_Pabellon_Dorado_Portada_Japon_Premium.webp';


import ItinerariosTemplate from '../../../Componentes/Sections/Reutilizable/ItinerariosTemplate.jsx';
import DownloadSection from '../../../Componentes/Sections/Reutilizable/DownloadSection.jsx';
import CardPrecio from '../../../Componentes/Sections/Reutilizable/CardPrecioPrueba.jsx';
import DetallesNoContiene from '../../../Componentes/Sections/Reutilizable/DetallesNoContiene.jsx';
import TripDetails from '../../../Componentes/Sections/Reutilizable/TripDetails.jsx';
import HotelesJapon from '../../../Componentes/Sections/Reutilizable/HotelesJapon.jsx';

import LetrasDoradasResponsive from '../../../assets/titulosDorados/artorientalmovil.svg';
import LetrasDoradasDesktop from '../../../assets/titulosDorados/artorientalweb.svg';

// images
import LlegadaAeropuerto from '../../../assets/Itinerarios/ArtOriental/Dia_1_Salida_Japon_Premium_Aeropuerto_Mexico_Viajes_Turismo_Experiencias_Aventura.webp';
import LlegadaKansai from '../../../assets/Itinerarios/ArtOriental/Dia_2_Tokio_Japon_Premium_Capital_Actual_Explorar_Visitar_Turismo_Viajes_.webp';
import VueloEjecutivo from '../../../assets/Itinerarios/ArtOriental/Dia_3_Tokio_Japon_Premium_Barrio_Futurista_Shibuya_Lugar_Representativo_Viajes_Turismo_Experiencias.webp';
import VistaAvion from '../../../assets/Itinerarios/ArtOriental/Dia_4_Hakone_JApon_Premium_Paisajes_Naturales_Aguas_Termales_Viajes_Turismo_Cultura_Experiencias.webp';
import EncantoJapan from '../../../assets/Itinerarios/ArtOriental/Dia_5_kanazawa_Japon_Premium_Barrio_Samurais_Kanazawa_Cultura_Turismo.webp';
import MiradorTorre from '../../../assets/Itinerarios/ArtOriental/Dia_6_Takayama_Japon_Premium_Historia_Calles_Empedradas_Turismo_Viajes_Conocer_Experiencias_Cultura.webp';
import ToriiFlotante from '../../../assets/Itinerarios/ArtOriental/Dia_7_Nara_Japon_Premium_Gran_Buda_Experiencias_Cultura_Viajes_Turismo_Templo_.webp';
import TemploNachisan from '../../../assets/Itinerarios/ArtOriental/Dia_8_Kioto_Japon_Premium_Paseo_Bosque_Bambu_Arashiyama_Magico_Viajes_Turismo_Experiencias.webp';
import TurismoDotonbori from '../../../assets/Itinerarios/ArtOriental/Dia_9_Kioto_Japon_Premium_Mitica_Ciudad_Corazon_Cultural_Ancestral_Turismo_Viajes.webp';
import JardinKenrokuen from '../../../assets/Itinerarios/ArtOriental/Dia_10_Osaka_Japon_Premium_Castillo_Gastronomia_Souvenirs_Alojamiento_Viajes_Turismo.webp';
import GrupoTuristas from '../../../assets/Itinerarios/ArtOriental/Dia_11_Aeropuerto_Japon_Premium_Salida_Japon_Travesia_Viajes_Turismo.webp';


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

import avion from '../../../assets/avion.svg';
import calendario from '../../../assets/calendario.svg';
import user from '../../../assets/user.svg';


// Hoteles imagenes 
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
        title: "11 Días - 9 Noches",
        subtitle: "Tokio - Hakone - Kanazawa - Gikayama - Shirakawago - Gero - Nagoya - Kyoto - Nara - Osaka",
        text: "Una experiencia única para descubrir el Japón de los contrastes: tradición milenaria, arte, naturaleza y modernidad en un solo recorrido",
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
          text: 'Llegada al aeropuerto internacional y traslado asistido al hotel. Alojamiento.',
          image: LlegadaKansai,
          altText: 'turista-llegando-al-aeropuerto-de-kioto-japon-siendo-recibida-por-guia-de-japan-Premium-en-la-zona-de-arribos.',
        },
        {
          title: 'Tokio',
          subtitle: NumeroTres,
          text: 'Desayuno. Visita guiada por Tokio: el Santuario Meiji, la Plaza del Palacio Imperial, el Templo Sensoji en Asakusa y la animada calle comercial Nakamise. Finalizamos en el elegante barrio de Ginza. Alojamiento.',
          image: VueloEjecutivo,
          altText: 'turista-con-kimono-tradicional-japones-posando-en-el-bosque-de-bambu-de-kioto-con-japan-Premium.',
        },{
          title: 'Tokio - Hakone - Tokio',
          subtitle: NumeroCuatro,
          text: 'Desayuno. Excursión a Hakone: mini crucero por el Lago Ashi, vistas del Monte Fuji, el Valle Owakudani y el Museo al Aire Libre de Hakone, con obras de arte y cerámicas tradicionales japonesas. Alojamiento en Tokio.',
          image: VistaAvion,
          altText: 'viajera-en-mirador-con-vista-a-la-torre-de-tokio-y-el-paisaje-urbano-de-la-capital-de-japon-con-japan-Premium',
        },{
          title: 'Tokio - Kanazawa',
          subtitle: NumeroCinco,
          text: 'Desayuno. Viaje en tren bala Kagayaki a Kanazawa. Visita al Mercado Omicho, el barrio histórico de  Higashi Chaya (antiguo distrito de geishas) y el Jardín Kenrokuen, uno de los más bellos de Japón. Alojamiento.',
          image: EncantoJapan,
          altText: 'viajera-frente-al-torii-flotante-de-miyajima-en-hiroshima-durante-el-atardecer-con-japan-Premium.',
        },{
          title: 'Kanazawa - Shirakawago - Takayama - Gero',
          subtitle: NumeroSeis,
          text: 'Desayuno. Excursión a la aldea histórica Shirakawago (Patrimonio de la Humanidad), con casas tradicionales gassho-zukuri. Continuación a Takayama, visita al barrio antiguo Kami-Sannomachi y al Yatai Kaikan (exposición de carrozas del festival). Noche en un Ryokan en Gero. Alojamiento.',
          image: MiradorTorre,
          altText: 'pareja-de-turistas-viajando-en-tren-bala-shinkansen-en-japon-con-japan-Premium-disfrutando-del-paisaje-desde-la-ventana.',
        },{
          title: 'Gero - Nagoya - Kioto - Nara - Kioto',
          subtitle: NumeroSiete,
          text: 'Desayuno. Traslado en tren bala Nozomi a Kioto. Excursión a Nara para conocer el Gran Buda del Templo Todaiji y el Parque de los Ciervos Sagrados. Parada en el Santuario Fushimi Inari con sus miles de torii rojos. Alojamiento en Kioto.',
          image: ToriiFlotante,
          altText: 'pareja-de-turistas-en-el-templo-nachisan-con-pagoda-roja-y-montanas-de-fondo-en-japon-con-japan-Premium.',
        },{
          title: 'Kioto',
          subtitle: NumeroOcho,
          text: 'Desayuno. Visita guiada en Kioto: el Templo Tenryuji, el Bosque de Bambú de Arashiyama, el Pabellón Dorado (Kinkakuji), el Templo Sanjusangendo con sus mil estatuas y un paseo por el tradicional barrio de Gion. Alojamiento.',
          image: TemploNachisan,
          altText: 'pareja-de-turistas-en-dotonbori-osaka-con-los-carteles-luminosos-iconicos-al-fondo-con-japan-Premium.',
        },{
          title: 'Kioto',
          subtitle: NumeroNueve,
          text: 'Desayuno. Día libre para explorar Kioto a tu manera. Excursión opcional a Hiroshima & Miyajima. Alojamiento.',
          image: TurismoDotonbori,
          altText: 'pareja-de-viajeros-disfrutando-del-jardin-kenrokuen-en-kanazawa-japon-con-japan-Premium.',
        },{
          title: 'Kioto - Osaka',
          subtitle: NumeroDiez,
          text: 'Desayuno. Visita a Osaka: el Castillo de Osaka, el mirador del Umeda Sky Building y el Mercado Kuromon, famoso por su gastronomía y souvenirs.  Alojamiento en Osaka.',
          image: JardinKenrokuen,
          altText: 'grupo-de-viajeros-posando-en-la-aldea-tradicional-de-shirakawago-en-kanazawa-japon-con-japan-Premium.',
        },{
          title: 'Osaka - México',
          subtitle: NumeroOnce,
          text: 'Desayuno. Traslado al aeropuerto de Kansai o Itami para tomar el vuelo de regreso. Fin de nuestros servicios.',
          image: GrupoTuristas,
          altText: 'pareja-navegando-en-barca-sobre-lago-con-cerezos-en-flor-y-barco-tradicional-al-fondo-en-takayama-con-japan-Premium.',
        }
    ];

    const downloadData = [
    {
      id: "01",
      title: "japón premium",
      subtitle: "Art Oriental",
      dias: "11 Días - 9 Noches",
      urlDescargar: "https://japonpremium.com/pdf/itinerario-japon-premium-art-oriental.pdf"
    }];
    
    const dataPrecios = [
{
    title: 'Temporada A',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '7,687' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '9,167' },
    ],
  },
  {
    title: 'Temporada B',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '7,865' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '9,436' },
    ],
  },
  {
    title: 'Temporada C',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '8,044' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '9,793' },
    ],
  },
  {
    title: 'Temporada Cerezos',
    prices: [
      { type: 'DOBLE', category: 'ESTÁNDAR', amount: '8,400' },
      { type: 'SENCILLA', category: 'ESTÁNDAR', amount: '10,238' },
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
            "9 noches de alojamiento en hoteles previstos.",
            "Desayunos diarios.",
            "Trenes bala: Tokio-Kanazawa y Nagoya-Kioto.",
            "Visitas guiadas según programa en bus, minibús, coche privado o transporte público (según número de pasajeros).",
            "Entradas a los templos, santuarios y sitios turísticos mencionados en el itinerario."
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
        "Actividades opcionales tienen costo adicional."
      ],
      },
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
      }
            ];

export default function ArtOriental() {
        
  useEffect(() => {
    document.title = `Itinerario Arte Oriental | Japón PREMIUM®`; 
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

