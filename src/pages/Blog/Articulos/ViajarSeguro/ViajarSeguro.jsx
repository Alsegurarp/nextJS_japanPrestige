import React from 'react';
import HeroSection from '../../../../Componentes/Sections/HeroSection.jsx';
import Image from 'next/image';
import styles from './ViajarSeguro.module.css';

import HeroImage from '../../../../assets/ImagenesBlogs/PortadasHero/Blog_Seguro_Viajar_Solo_Japon_Premium_Explorar_Solitario_Descubrimiento_Introspeccion.webp';
import LetrasDoradasResponsive from '../../../../assets/titulosBlogs/seguroviajarMOVIL.svg';
import LetrasDoradasDesktop from '../../../../assets/titulosBlogs/seguroviajarWEB.svg';

import imagen1 from '../../../../assets/ImagenesBlogs/ViajarSolo/Blog_1_Seguro_Viajar_Solo_Japon_Premium_Pais_Seguridad_Excelencia.webp';
import imagen2 from '../../../../assets/ImagenesBlogs/ViajarSolo/Blog_2_Seguro_Viajar_Solo_Japon_Premium_Calles_Seguras_Noche.webp';
import imagen3 from '../../../../assets/ImagenesBlogs/ViajarSolo/Blog_3_Seguro_Viajar_Solo_Japon_Premium_Servicios_Pensados_Tranquilidad.webp';
import imagen4 from '../../../../assets/ImagenesBlogs/ViajarSolo/Blog_4_Seguro_Viajar_Solo_Japon_Premium_Preparacion_Ante_Desastres_Naturales.webp';
import imagen5 from '../../../../assets/ImagenesBlogs/ViajarSolo/Blog_5_Seguro_Viajar_Solo_Japon_Premium_Transporte_EficientE_Seguro.webp';
import imagen6 from '../../../../assets/ImagenesBlogs/ViajarSolo/Blog_6_Seguro_Viajar_Solo_Japon_Premium_Aspectos_Tener_Cuenta.webp';
import imagen7 from '../../../../assets/ImagenesBlogs/ViajarSolo/Blog_7_Seguro_Viajar_Solo_Japon_Premium_Mujeres_Viajando_Sola_Experiencia_Positiva.webp';
import FlyingButton from '../../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';


const Herodata = [
{
    text: "Explorar Japón en solitario es una invitación al descubrimiento y la introspección. En Japón  PREMIUM, sabemos que la verdadera aventura comienza cuando la seguridad deja de ser  una preocupación. Por eso, aquí te explicamos por qué viajar solo a Japón es no solo  posible, sino extraordinariamente tranquilo.",
    image: HeroImage,
    altImg:"Vista frontal del Templo Yasukuni en Tokio, Japón, con cielo nublado al atardecer.",
    letrasDoradasResponsive: LetrasDoradasResponsive,
    LetrasDoradasDesktop: LetrasDoradasDesktop, 
}];

const data = [
    {
        title: 'Japón: un país seguro por excelencia',
        subtitle: 'SEGURIDAD EN VIAJE',
        dias: 'BAJO ÍNDICE DE CRIMEN · HONESTIDAD SOCIAL',
        text: {
            primerParrafo: "Japón posee uno de los índices de criminalidad más bajos del mundo. Delitos como robos, agresiones u hurtos son casos aislados; es habitual que las personas dejen sus pertenencias desatendidas y aún así continúen intactas. Esta tranquilidad se debe a una sociedad basada en el respeto y la honestidad.",
            segundoParrafo: "Consejo: Mantén las precauciones habituales como en cualquier otro país. Evita zonas poco iluminadas o solitarias de noche, y utiliza servicios oficiales de transporte. En caso de emergencia, las comisarías (kōban) están distribuidas estratégicamente y el personal suele hablar inglés.",
            tercerParrafo: "Recuerda que la cortesía y el respeto son valores fundamentales en la cultura japonesa, contribuyendo a un ambiente seguro y armonioso para todos."
        },
        image: imagen1, // si tienes una imagen de policía/comunidad, cámbiala aquí
        altText:
        'Escena urbana en Japón con presencia policial amistosa, símbolo de seguridad y respeto social.'
    },
    {
        title: 'Calles seguras incluso de noche',
        subtitle: 'TOKIO · KIOTO',
        dias: 'AMBIENTES VIBRANTES · BUENA ILUMINACIÓN',
        text: {
            primerParrafo: "Las ciudades japonesas, especialmente Tokio y Kioto, ofrecen ambientes urbanos vibrantes y bien iluminados que invitan a caminar sin temores. Tanto de día como de noche, las calles mantienen un alto nivel de orden y actividad.",
            segundoParrafo: "Consejo: Aunque las calles son seguras, es recomendable seguir las precauciones habituales como en cualquier gran ciudad. Evita zonas poco iluminadas o solitarias de noche, y utiliza servicios oficiales de transporte.",
            tercerParrafo: "Disfruta de la experiencia urbana japonesa con confianza, apreciando la mezcla de modernidad y tradición que caracteriza a sus ciudades."
        },
        image: imagen2, // sustitúyela por una foto de calle nocturna en Japón
        altText:
        'Joven caminando por una calle japonesa iluminada con letreros de neón durante la noche.'
    },
    {
        title: 'Servicios pensados para tu tranquilidad',
        subtitle: 'INFRAESTRUCTURA A TU FAVOR',
        dias: 'KŌBAN · SEÑALIZACIÓN CLARA · ATENCIÓN AL TURISTA',
        text: {
            primerParrafo: "Japón cuenta con una infraestructura diseñada para asistir a los viajeros en caso de necesidad. Desde pequeñas y cercanas comisarías (kōban) hasta señalización clara, la atención al turista es habitual, incluso cuando se viaja solo.",
            segundoParrafo: "Consejo: Familiarízate con la ubicación de las comisarías (kōban) en las áreas que visites. En caso de emergencia, no dudes en acercarte; el personal suele hablar inglés y está dispuesto a ayudar.",
            tercerParrafo: "Además, muchas estaciones de tren y áreas turísticas cuentan con centros de información donde puedes obtener asistencia y orientación para tu viaje."
        },
        image: imagen3, // coloca aquí una imagen de cruce/servicios urbanos de Japón
        altText:
        'Viajeros consultando indicaciones en un cruce peatonal japonés con señalización clara.'
    },
    {
        title: 'Preparación ante desastres naturales',
        subtitle: 'SISTEMAS DE ALERTA Y NORMATIVAS',
        dias: 'TERREMOTOS · TIFONES · LLUVIAS INTENSAS',
        text: {
            primerParrafo: "Japón está ubicado en una zona sísmica activa, lo que implica la posibilidad de terremotos, tifones y lluvias intensas. Sin embargo, el país está altamente preparado para enfrentar estos eventos con sistemas de alerta avanzados y estrictas normativas de construcción.",
            segundoParrafo: "Consejo: Infórmate sobre las medidas de seguridad y los procedimientos a seguir en caso de emergencia. Muchas aplicaciones móviles y sitios web oficiales proporcionan alertas en tiempo real. Familiarízate con las rutas de evacuación y los puntos de encuentro en los lugares que visites.",
            tercerParrafo: "Aunque estos eventos son poco frecuentes, estar preparado te permitirá disfrutar de tu viaje con mayor tranquilidad y confianza."
        },
        image: imagen4, // idealmente reemplaza por una foto de mapa/evacuación en edificio japonés
        altText:
        'Pareja atendiendo a un plano de evacuación en un edificio japonés como parte de la preparación ante emergencias.'
    },{
        title: 'Transporte eficiente y respetuoso',
        subtitle: 'MOVERSE EN JAPÓN',
        dias: 'TRENES · METROS · AUTOBUSES',
        text:{
          primerParrafo: 'El sistema de transporte en Japón es uno de los más eficientes y puntuales del mundo. Trenes, metros y autobuses están diseñados para ofrecer un viaje cómodo y seguro, con personal atento y normas claras de conducta.',
          segundoParrafo: 'Consejo: Durante las horas pico, utiliza los vagones exclusivos para mujeres disponibles en muchas líneas de tren y metro, una medida que añade una capa extra de seguridad y comodidad. Respeta las normas de silencio y orden en los transportes públicos para contribuir a un ambiente agradable para todos los pasajeros.',
          tercerParrafo: 'Además, las estaciones están bien señalizadas y cuentan con personal dispuesto a ayudar, facilitando la navegación incluso para quienes no hablan japonés.'
        },
        image: imagen5, // reemplaza por foto de tren/metro si la tienes
        altText:
        'Dos viajeras en un tren japonés mirando por la ventana, reflejando un transporte limpio y puntual.'
    },
    {
        title: 'Aspectos a tener en cuenta',
        subtitle: 'RECOMENDACIONES PRÁCTICAS',
        dias: 'SEGURO · PRUDENCIA · ESTAFAS OCASIONALES',
        text: {
          primerParrafo: 'Aunque Japón es extremadamente seguro, es importante mantener ciertas precauciones para garantizar una experiencia de viaje sin contratiempos.',
          segundoParrafo: 'Consejo: Contrata un buen seguro de viajes que cubra gastos médicos, repatriación y pérdida de equipaje. Ten precaución en zonas muy turísticas o bares informales, donde pueden ocurrir casos aislados de cuentas infladas o pequeñas estafas. Cuida tus pertenencias, especialmente en lugares concurridos, aunque la probabilidad de robo es baja.',
          tercerParrafo: 'Mantén siempre una actitud respetuosa y cortés, ya que la cultura japonesa valora profundamente estos comportamientos. Con estas recomendaciones en mente, podrás disfrutar plenamente de todo lo que Japón tiene para ofrecer.'
        },
        image: imagen6, // puedes usar una imagen de restaurante/indicaciones
        altText:
        'Cliente pagando en un restaurante japonés, ilustrando recomendaciones y sentido común al viajar.'
    },
    {
        title: '¿Mujeres viajando solas? Una experiencia muy positiva',
        subtitle: 'SEGURIDAD Y RESPETO',
        dias: 'LIBERTAD · CONFIANZA · ACOMPAÑAMIENTO',
        text: {
          primerParrafo: 'Viajar sola por Japón es especialmente recomendable para mujeres. Es uno de los países más seguros del mundo y el respeto por el espacio personal se nota en el día a día.',
          segundoParrafo: 'La cortesía generalizada y medidas como vagones femeninos agregan un extra de resguardo. En JAPÓN PREMIUM® cuidamos que tu viaje en solitario sea transformador y sin preocupaciones, guiándote para disfrutar lo mejor del país con seguridad y cultura.',
          tercerParrafo: 'Además, viajar sola te permite una libertad única para explorar a tu propio ritmo, conectarte con la cultura local y vivir experiencias auténticas que quedarán grabadas en tu memoria.'
        },
        image: imagen7, // idealmente cámbiala por una foto de viajera en la ciudad
        altText:
        'Viajera conversando con una local en una calle japonesa, representando seguridad y hospitalidad.'
    }
];
function ViajarSeguro() {

      return (
    <>
    <FlyingButton/>
    <HeroSection data={Herodata} />
      {data.map((d, index) => (
        <Card
          key={d.title}
          index={index}
          title={d.title}
          subtitle={d.subtitle}
          dias={d.dias}
          text={d.text}
          image={d.image}
          altText={d.altText}
        />
      ))}
    </>
  );
}

export default ViajarSeguro

function Card({ image, index, altText, title, subtitle, dias, text}) {


  return (
    <div className={`${index % 2 === 1 ? `${styles.reverse} ${styles.card_container}` : `${styles.card_container}`}`}>
        <div className={styles.card_text} data-aos={index % 2 === 1 ? 'fade-left' : 'fade-right'} data-aos-delay={index * 200} data-aos-duration="1000">
          <div className={styles.cardContenidoStyle}>
            <div style={{marginBottom: "10px", display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
              <h2 className={styles.cardContainerh2} style={{fontFamily: "nohemi", textTransform: "uppercase"}}>{title}</h2>
              <span style={{fontFamily: "nohemi", textTransform: "uppercase", fontWeight: "400"}}>{subtitle}</span>
            </div>
              <div style={{textAlign: "start"}}>
                <span style={{fontFamily: "nohemi", textTransform: "uppercase"}}>{dias}</span>
                <p className={styles.cardContainerP} style={{fontFamily: "nohemi"}}>{text.primerParrafo}</p>
                  <br/>
                <p className={styles.cardContainerP} style={{fontFamily: "nohemi"}}>{text.segundoParrafo}</p>
                  <br/>
                <p className={styles.cardContainerP} style={{fontFamily: "nohemi"}}>{text.tercerParrafo}</p>
              </div>
     </div>
      </div>
      <div className={styles.card_image}>
          <Image src={image} alt={altText} loading="lazy" width={600} height={400} priority={false}/>
        </div>
    </div>
  );
}
