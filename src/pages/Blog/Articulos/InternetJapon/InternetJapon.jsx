'use client';

import React from 'react';
import HeroSection from '../../../../Componentes/Sections/HeroSection.jsx';
import Image from 'next/image';
import styles from './InternetJapon.module.css';
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation';

import HeroImage from '../../../../assets/ImagenesBlogs/PortadasHero/Blog_Internet_Japon_Premium_Conectividad_Sofisticada_Viaje_Conexion.webp';

import LetrasDoradasResponsive from '../../../../assets/titulosBlogs/comotenerinternetMOVIL.svg';
import LetrasDoradasDesktop from '../../../../assets/titulosBlogs/comotenerinternetWEB.svg';

import imagen1 from '../../../../assets/ImagenesBlogs/ConectividadJapon/Blog_1_Internet_Japon_Premium_Pocket_Wi-fi_Conexion_Compartida.webp';
import imagen2 from '../../../../assets/ImagenesBlogs/ConectividadJapon/Blog_2_Internet_Japon_Premium_ESim_Opcion_Elegante_Ligera.webp';
import imagen3 from '../../../../assets/ImagenesBlogs/ConectividadJapon/Blog_3_Internet_Japon_PRemium_Otras_Alternativas_Consideraciones.webp';
import FlyingButton from '../../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';

const Herodata = [
{
    text: "Explorar Japón en solitario es una invitación al descubrimiento y la introspección. En Japón  PREMIUM, sabemos que la verdadera aventura comienza cuando la seguridad deja de ser  una preocupación. Por eso, aquí te explicamos por qué viajar solo a Japón es no solo  posible, sino extraordinariamente tranquilo.",
    image: HeroImage,
    altImg:"Vista frontal del Templo Yasukuni en Tokio, Japón, con cielo nublado al atardecer.",
    letrasDoradasResponsive: LetrasDoradasResponsive,
    LetrasDoradasDesktop: LetrasDoradasDesktop,
    bgPosition: "50% 0%"
}];

const data = [
        {
            title: 'Opción 1: Pocket Wi-Fi — conexión compartida con estilo',
            subtitle: 'ROUTER PORTÁTIL',
            dias: 'MULTIDISPOSITIVO · RÁPIDO · RECOGIDA FÁCIL',
            text: {
                primerParrafo: "Un Pocket Wi-Fi es un pequeño router que crea tu red privada en cualquier lugar. Ideal si viajas en grupo o necesitas compartir datos entre varios dispositivos.",
                segundoParrafo: "• Conectividad múltiple: permite hasta 10 dispositivos, perfecto para familias o equipos. • Rápido y confiable: cobertura robusta y buena velocidad en todo Japón.",
                tercerParrafo: "• Recogida sencilla y batería para todo el día: suele poder retirarse en el aeropuerto u hotel y la batería aguanta muchas horas."
            },
            image: imagen1, // usa aquí tu foto de cena/mesa si prefieres
            altText:
            'Viajeros cenando mientras consultan el móvil, con un Pocket Wi-Fi compartiendo conexión.'
        },
        {
            title: 'Opción 2: eSIM — la opción más elegante y ligera',
            subtitle: 'SIM DIGITAL EN TU TELÉFONO',
            dias: 'ACTIVACIÓN QR · SIN TARJETA FÍSICA · FLEXIBLE',
            text: {
                primerParrafo: "La eSIM es una SIM digital que se activa en tu smartphone compatible, sin piezas físicas.",
                segundoParrafo: "• Activación instantánea: escanea un código QR antes de volar o al llegar a Japón. • Mantén tu número: añade un plan de datos internacional sin tocar tu línea principal. • Comodidad total: no hay que recoger ni devolver equipos.",
                tercerParrafo: "• Planes con datos generosos y buena cobertura 4G/5G; algunos permiten compartir Internet (hotspot)."
            },
            image: imagen2, // pon una imagen de mostrador/compra de eSIM si la tienes
            altText:
            'Viajero configurando una eSIM en un punto de atención antes de comenzar el viaje.'
        },
        {
            title: 'Otras alternativas y consideraciones',
            subtitle: 'SIM LOCAL · WI-FI PÚBLICO · CONSEJOS',
            dias: 'AEROPUERTO · TIENDAS · HOTELES',
            text: {
                primerParrafo: "Además de Pocket Wi-Fi y eSIM, existen otras opciones para conectarte en Japón.",
                segundoParrafo: "• Tarjetas SIM locales: se compran en aeropuertos o tiendas de electrónica; requieren pasaporte y pueden incluir voz. • Wi-Fi público: disponible en hoteles, cafés y estaciones, pero no confíes en él para trabajo crítico.",
                tercerParrafo: "• Buenas prácticas: activa tu plan antes de aterrizar, lleva batería externa, usa VPN para banca/trabajo y desactiva actualizaciones automáticas. Si viajas en grupo, Pocket Wi-Fi o eSIM con hotspot suele ser lo más práctico."
            },
            image: imagen3, // ideal: foto nocturna en calle con móvil
            altText:
            'Viajera usando su teléfono en una calle iluminada de Tokio con letreros de neón.'
        }
]

function InternetJapon() {

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

export default InternetJapon

function Card({ image, index, altText, title, subtitle, dias, text}) {
  const ref = useScrollAnimation({
    animation: index % 2 === 1 ? 'fade-left' : 'fade-right',
    delay: index * 200,
    duration: 1
  });

  return (
    <div className={`${index % 2 === 1 ? `${styles.reverse} ${styles.card_container}` : `${styles.card_container}`}`}>
        <div ref={ref} className={styles.card_text}>
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
