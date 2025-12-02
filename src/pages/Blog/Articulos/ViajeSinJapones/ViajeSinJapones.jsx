import React from 'react';
import HeroSection from '../../../../Componentes/Sections/HeroSection.jsx';
import Image from 'next/image';
import styles from './ViajeSinJapones.module.css';

import HeroImage from '../../../../assets/ImagenesBlogs/PortadasHero/Blog_Viajar_Sin_Hablar_Japones_Japon_Premium_Dominar_Idioma_Barrera.webp';
import LetrasDoradasResponsive from '../../../../assets/titulosBlogs/esdificilviajarMOVIL.svg';
import LetrasDoradasDesktop from '../../../../assets/titulosBlogs/esdificilviajarWEB.svg';

import imagen1 from '../../../../assets/ImagenesBlogs/ViajarSinJapones/Blog_1_Viajar_Sin_Hablar_Japones_Japon_Premium_Tecnologia_Servicio_Viaje.webp';
import imagen2 from '../../../../assets/ImagenesBlogs/ViajarSinJapones/Blog_2_Viajar_Sin_Hablar_Japones_Japon_Premium_Guia_Privado_Puente_Cultural.webp';
import imagen3 from '../../../../assets/ImagenesBlogs/ViajarSinJapones/Blog_3_Viajar_Sin_Hablar_Japones_Japon_Premium_Detalles_Marcan_Diferencia.webp';
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
            title: 'Tecnología al servicio de tu viaje',
            subtitle: 'TRADUCTORES · MAPAS · CONECTIVIDAD',
            dias: 'POCKET WI-FI O eSIM · DATOS ESTABLES',
            text: {
                primerParrafo: 'El idioma puede ser una barrera, pero la tecnología la minimiza. Apps como Google Maps y Hyperdia facilitan la navegación por transporte público y calles. Traductores como Google Translate ayudan con menús y señales.',
                segundoParrafo: 'Aunque en zonas turísticas se usa algo de inglés, apoyarte en herramientas digitales es clave. Google Translate traduce textos en tiempo real, menús y carteles, e incluso sostiene conversaciones básicas.',
                tercerParrafo: 'Para que todo funcione sin interrupciones, viaja con una conexión de datos rápida y confiable mediante Pocket Wi-Fi o eSIM; nosotros nos encargamos de configurarlo por ti.'
            },
            image: imagen1,
            altText:
            'Viajero usando el teléfono junto a una local japonesa para traducir y orientarse.'
        },
        {
            title: 'Tu guía privado como puente cultural',
            subtitle: 'ACCESO · CONTEXTO · TRANQUILIDAD',
            dias: 'INTERPRETACIÓN · RESERVAS · LOGÍSTICA',
            text: {
                primerParrafo: 'Contar con un guía privado transforma la experiencia. Más que traducir, un guía privado interpreta gestos y contexto, te introduce a historias y costumbres, y abre puertas que un viajero común no recibe.',
                segundoParrafo: 'Una visita o cena con guía se vuelve una experiencia inmersiva: acceso a artesanos, espacios auténticos y reservas en lugares exclusivos. Además, gestiona transportes y traslados para que solo te ocupes de disfrutar.',
                tercerParrafo: 'Con JAPÓN PREMIUM®, la barrera del idioma desaparece: combinamos tecnología y guía privada para que vivas encuentros auténticos.'
            },
            image: imagen2,
            altText:
            'Pareja conversando con su guía privado frente a cerezos en flor.'
        },
        {
            title: 'Detalles que marcan la diferencia',
            subtitle: 'FRASES ÚTILES EN JAPONÉS',
            dias: 'ARIGATŌ · SUMIMASEN · KONNICHIWA',
            text: {
                primerParrafo: 'Aunque no hables japonés, aprender unas pocas frases clave mejora la experiencia. Frases como “Arigatō gozaimasu” (muchas gracias), “Sumimasen” (disculpa / perdón) y “Konnichiwa” (hola) son muy valoradas.',
                segundoParrafo: 'Los japoneses aprecian el esfuerzo por comunicarse en su idioma, incluso con pronunciación imperfecta. Usar estas frases con respeto abre sonrisas y crea conexiones genuinas.',
                tercerParrafo: 'Consejo: practica la pronunciación antes del viaje. Tu guía privado puede ayudarte a usarlas en contexto, haciendo que tus interacciones sean aún más significativas.'
            },
            image: imagen3,
            altText:
            'Viajera saludando cordialmente a mujeres con kimono en una calle tradicional japonesa.'
        }
]
function ViajeSinJapones() {

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

export default ViajeSinJapones

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
