import React from 'react';
import HeroSection from '../../../../Componentes/Sections/HeroSection.jsx';
import Image from 'next/image';
import styles from './OnsenTatuajes.module.css';

import HeroImage from '../../../../assets/ImagenesBlogs/PortadasHero/Blog_Onsen_Tatuajes_Japon_Premium_Obstaculo_Experiencia_Elegancia_Cultura_Exclusividad.webp';
import LetrasDoradasResponsive from '../../../../assets/titulosBlogs/entrarosenMOVIL.svg';
import LetrasDoradasDesktop from '../../../../assets/titulosBlogs/entrarosenWEB.svg';

import imagen1 from '../../../../assets/ImagenesBlogs/TatuajesOnsen/Blog_1_Onsen_Tatuajes_Japon_Premium_Tradicion_Etiqueta_Evolucion.webp';
import imagen2 from '../../../../assets/ImagenesBlogs/TatuajesOnsen/Blog_2_Onsen_Tatuajes_Japon_Premium_Opciones_Practicas_Disfrutar.webp';
import imagen3 from '../../../../assets/ImagenesBlogs/TatuajesOnsen/Blog_3_Onsen_Tatuajes_JApon_Premium_Enfoque_Respeto_Cultural.webp';
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
            title: 'Tradición, etiqueta y su evolución',
            subtitle: 'TATUAJES EN ONSEN',
            dias: 'CONTEXTO · CAMBIO SOCIAL',
            text: {
                primerParrafo: "Los tatuajes en Japón tienen una historia compleja. Tradicionalmente asociados con la yakuza (mafia japonesa), los tatuajes eran vistos con desconfianza y estigmatización social. Esta percepción llevó a que muchos onsen (baños termales) y sentō (baños públicos) prohibieran la entrada a personas con tatuajes para mantener un ambiente de respeto y serenidad.",
                segundoParrafo: "Sin embargo, en las últimas décadas, la percepción de los tatuajes ha comenzado a cambiar, especialmente entre las generaciones más jóvenes y con la influencia de la cultura global. Hoy en día, aunque algunos onsen aún mantienen restricciones, hay un número creciente de establecimientos que aceptan tatuajes o tienen áreas designadas para personas tatuadas.",
                tercerParrafo: "Es importante investigar y respetar las políticas de cada onsen antes de visitarlo, y considerar opciones como baños privados o tattoo-friendly para disfrutar plenamente de la experiencia japonesa sin inconvenientes."
            },
            image: imagen1, // ideal: señalización “no tattoos” en calle/baño
            altText:
            'Calle nocturna en Japón con señalización que indica restricciones de tatuajes.'
        },
        {
            title: 'Opciones prácticas para disfrutar del onsen con tatuajes',
            subtitle: 'CÓMO BAÑARSE SI TIENES TATUAJES',
            dias: 'PRIVADOS · TATTOO-FRIENDLY · CUBRIR',
            text: {
                primerParrafo: "Aunque algunos onsen mantienen restricciones, existen varias opciones para quienes tienen tatuajes y desean disfrutar de esta tradición japonesa.",
                segundoParrafo: "• Baños privados (kashikiri): muchos ryokan y hoteles ofrecen onsens privados que se pueden reservar por hora, ideales para quienes buscan privacidad y comodidad sin restricciones.",
                tercerParrafo: "• Tattoo-friendly: el número de onsen que aceptan tatuajes está creciendo. Busca aquellos con el icono “Tattoo OK” o consulta listados oficiales en línea para encontrar opciones adecuadas.",
            },
            image: imagen2, // ideal: foto de onsen interior con bañistas
            altText:
            'Pareja relajándose en un onsen interior rodeado de vegetación, disfrutando con privacidad.'
        },
        {
            title: 'Un enfoque premium con respeto cultural',
            subtitle: 'JAPÓN PREMIUM®',
            dias: 'DISEÑO A MEDIDA · RESPETO CULTURAL',
            text: {
                primerParrafo: "En JAPÓN PREMIUM®, entendemos la importancia de respetar las tradiciones culturales mientras ofrecemos experiencias personalizadas y de alta calidad. Si tienes tatuajes y deseas disfrutar de un onsen, te ayudamos a planificar tu viaje considerando tus necesidades y preferencias.",
                segundoParrafo: "Ofrecemos asesoramiento sobre los mejores onsen y ryokan que aceptan tatuajes o cuentan con baños privados, asegurando que tu experiencia sea cómoda y respetuosa con las normas locales.",
                tercerParrafo: "Nuestro equipo se encarga de todos los detalles, desde la reserva hasta la orientación sobre la etiqueta adecuada en los baños japoneses, para que puedas disfrutar de esta tradición milenaria sin preocupaciones."
            },
            image: imagen3, // ideal: viajera consultando con el personal del ryokan
            altText:
            'Viajera conversando con personal local en una calle tradicional japonesa antes de visitar un onsen.'
        }
]

function OnsenTatuajes() {

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

export default OnsenTatuajes

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
