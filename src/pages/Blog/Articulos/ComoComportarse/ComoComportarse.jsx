'use client';

import React from 'react';
// import HeroSection from '../../../../Componentes/Sections/HeroSection.jsx';
const HeroSection = React.lazy(() => import('../../../../Componentes/Sections/HeroSection.jsx'));
import Image from 'next/image';
import styles from './ComoComportarse.module.css';
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation';

import HeroImage from '../../../../assets/ImagenesBlogs/PortadasHero/Blog_Comportamiento_Japon_Premium_Etiqueta_Cortesia_Sofisticacion_Cultural.webp';


import LetrasDoradasResponsive from '../../../../assets/titulosBlogs/comocomportarseMOVIL.svg';
import LetrasDoradasDesktop from '../../../../assets/titulosBlogs/comocomportarseWEB.svg';

import imagen1 from '../../../../assets/ImagenesBlogs/ComoComportarse/Blog_1_Comportamiento_Japon_Premium_Respeto_Ryokan_Alta_Gama.webp';
import imagen2 from '../../../../assets/ImagenesBlogs/ComoComportarse/Blog_2_Comportamiento_Japon_Premium_Gastronomia_Manifestacion_Arte_Cuidado.webp';
import imagen3 from '../../../../assets/ImagenesBlogs/ComoComportarse/Blog_3_Comportamiento_Japon_Premium_Encuentros_Tradicion_Serenidad_Torii.webp';
import imagen4 from '../../../../assets/ImagenesBlogs/ComoComportarse/Blog_4_Comportamiento_Japon_Premium_Panorama_General_Etiqueta_JAponesa.webp';
import imagen5 from '../../../../assets/ImagenesBlogs/ComoComportarse/Blog_5_Comportamiento_Japon_Premium_Experiencia_Autenticidad_Elegancia_Respeto.webp';
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
            title: 'Respeto en un ryokan de alta gama',
            subtitle: 'HOSPEDAJE Y ONSEN',
            dias: 'ZAPATOS · YUKATA · ONSEN',
            text: {
                primerParrafo: "Al cruzar las puertas de un ryokan, cada detalle importa. • Zapatos fuera: retira tu calzado en el genkan y utiliza las zapatillas que te proporcionan. En el baño, cambia a las específicas de baño.",
                segundoParrafo: "• Uso correcto del yukata: coloca siempre la solapa izquierda sobre la derecha (al revés se usa en funerales).",
                tercerParrafo: "• En el onsen: dúchate cuidadosamente antes de entrar; disfruta del silencio y la serenidad. Algunos ryokan ofrecen onsens privados para una experiencia íntima y exclusiva."
            },
            image: imagen1, // ideal: foto de ryokan/onsen
            altText:
            'Huésped dejando sus zapatos y vistiendo un yukata en un ryokan japonés.'
        },
        {
            title: 'Gastronomía como manifestación de arte y cuidado',
            subtitle: 'A LA MESA',
            dias: 'PALILLOS · FRASES · DISCRECIÓN',
            text: {
                primerParrafo: "Comer en Japón es un ritual de gratitud y exquisitez. • Palillos bien usados: no clavar verticalmente ni pasar comida de palillo a palillo; ambos son tabú funerario.",
                segundoParrafo: "• Frases que honran el plato: antes de comer, “itadakimasu”; al terminar, “gochisōsama deshita”.",
                tercerParrafo: "• Discreción al comer: evita ruidos exagerados; sorber fideos, en cambio, es aceptado y denota placer culinario."
            },
            image: imagen2, // ideal: foto de comida japonesa
            altText:
            'Comensal disfrutando de cocina japonesa con palillos frente a una mesa servida.'
        },
        {
            title: 'Encuentros con tradición y serenidad',
            subtitle: 'TEMPLOS · RITUALES · ARTESANOS',
            dias: 'REVERENCIA · PURIFICACIÓN · HUMILDAD',
            text: {
                primerParrafo: "En templos y santuarios, tu actitud marca la diferencia. • Templos y santuarios: haz una reverencia al pasar bajo el torii; purifícate con agua y saliva en el temizuya antes de acercarte al altar.",
                segundoParrafo: "• Ceremonia del té: sigue las indicaciones del anfitrión y, al recibir la taza, gírala ligeramente para no beber por el lado más ornamentado.",
                tercerParrafo: "• Ante artesanos: muestra admiración con atención y humildad; tu comportamiento refleja tu compromiso con la autenticidad del viaje."
            },
            image: imagen3, // ideal: torii / ceremonia del té
            altText:
            'Visitante caminando bajo un torii y participando con respeto en ceremonias japonesas.'
        },
        {
            title: 'Panorama general de etiqueta japonesa',
            subtitle: 'CONVIVENCIA COTIDIANA',
            dias: 'FILAS · HONNE/TATEMAE · EN CASA',
            text: {
                primerParrafo: "Japón valora la armonía social y el respeto mutuo en cada interacción. • Colas y silencio: Japón valora el orden y la sobriedad; evita hacer ruido, correr o usar el móvil en espacios públicos, especialmente en trenes.",
                segundoParrafo: "• Honne y tatemae: cuida el equilibrio entre lo que sientes (honne) y lo que expresas (tatemae) para mantener la armonía social.",
                tercerParrafo: "• Etiqueta en casa: quítate los zapatos al entrar; usa pantuflas adecuadas y colócalas apuntando hacia la puerta. Otras buenas prácticas: no comas ni bebas mientras caminas; evita fotos directas a geishas o maikos; no des propinas (salvo excepciones); separa la basura y, si no hay contenedores, llévatela hasta encontrar uno.",
            },
            image: imagen4, // ideal: escena urbana japonesa / tren
            altText:
            'Viajero en una calle japonesa siguiendo normas de convivencia y etiqueta.'
        },
        {
            title: 'Tu viaje elevado con JAPÓN PREMIUM',
            subtitle: 'LUJO CONSCIENTE · RESPETO CULTURAL',
            dias: 'AUTENTICIDAD · ELEGANCIA · TRADICIONES',
            text: {
                primerParrafo: "Cada gesto, palabra o reverencia es una llave cultural. En JAPÓN PREMIUM®, te preparamos para vivir cada experiencia con autenticidad, elegancia y profundo respeto por las tradiciones japonesas.",
                segundoParrafo: "Nuestro compromiso es que cada interacción refleje lujo consciente y apreciación cultural, desde la elección de un ryokan exclusivo hasta la participación en ceremonias ancestrales.",
                tercerParrafo: "¿Listo para que tu comportamiento refleje el lujo consciente y la apreciación de una cultura fascinante?"
            },
            image: imagen5, // reemplázala por tu imagen de Nara/ciervos si la tienes
            altText:
            'Dos viajeras caminando entre ciervos en Nara, Japón, en un paseo arbolado.'
        }
]


function ComoComportarse() {

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

export default ComoComportarse

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
