import React from 'react';
import HeroSection from '../../../../Componentes/Sections/HeroSection.jsx';
import styles from './EpocaViajarJapon.module.css';

import HeroImage from '../../../../assets/ImagenesBlogs/PortadasHero/Blog_Mejor_Epoca_Para_Viajar_Japon_Premium.webp';

import LetrasDoradasResponsive from '../../../../assets/titulosBlogs/mejorepocaMOVIL.svg';
import LetrasDoradasDesktop from '../../../../assets/titulosBlogs/mejorepocaWEB.svg';

import imagen1 from '../../../../assets/ImagenesBlogs/EpocaViajar/Epoca_de_sakuras_en_japon_la_mejor_epoca_para_viajar_a_japon.webp';
import imagen2 from '../../../../assets/ImagenesBlogs/EpocaViajar/invierno_en_japon_la_mejor_epoca_para_viajar_a_japon.webp';
import imagen3 from '../../../../assets/ImagenesBlogs/EpocaViajar/la_mejor_epoca_para_viajar_a_japon.webp';
import imagen4 from '../../../../assets/ImagenesBlogs/EpocaViajar/Mejor_Epoca_Para_Viajar_Japon_Premium.webp';
import imagen5 from '../../../../assets/ImagenesBlogs/EpocaViajar/Verano_en_japon_mejor_epoca_para_viajar_a_japon.webp';
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
                title: 'Primavera: sakura y hanami',
                subtitle: 'MEJOR MOMENTO PARA MUCHOS',
                dias: 'MAR-MAY · CLIMA TEMPLADO',
                text: {
                    primerParrafo: 'Entre fines de marzo y principios de mayo florecen los cerezos (sakura). El clima es armonioso y el hanami —contemplar los cerezos— convierte el viaje en un ritual de belleza y cultura.',
                    segundoParrafo: 'El clima es templado, ideal para explorar ciudades y naturaleza. Las festividades del hanami, con picnics bajo los cerezos, son experiencias culturales únicas.',
                    tercerParrafo: 'Consejo: reserva alojamiento con anticipación, especialmente en Kioto y Tokio, donde la demanda es alta durante esta temporada.'
                },
                image: imagen1,
                altText:
                'Sendero con cerezos en flor y visitantes practicando hanami en Japón.'
            },
            {
                title: 'Otoño: hojas rojas y serenidad',
                subtitle: 'VENTANA EXCEPCIONAL',
                dias: 'SEPT-NOV · MOMIJI',
                text: {
                    primerParrafo: 'El otoño, de septiembre a noviembre, ofrece un clima fresco y seco. Los colores del momiji (hojas de arce) transforman paisajes y templos en escenas de serenidad y belleza.',
                    segundoParrafo: 'Es una temporada menos concurrida que la primavera, ideal para quienes buscan tranquilidad. Los festivales otoñales y la gastronomía de temporada enriquecen la experiencia.',
                    tercerParrafo: 'Consejo: visita templos y jardines famosos por su follaje otoñal, como Templo Kiyomizu en Kioto o Parque Rikugien en Tokio.'
                },
                image: imagen2,
                altText:
                'Paisaje otoñal con arces rojos alrededor de un templo japonés.'
            },
            {
                title: 'Verano: festivales y playas',
                subtitle: 'ENERGÍA Y COLOR',
                dias: 'JUN-AGO · MATSURI · TSUYU',
                text: {
                    primerParrafo: 'El verano en Japón, de junio a agosto, es vibrante y lleno de festivales (matsuri). Aunque incluye la temporada de lluvias (tsuyu) en junio, julio y agosto traen calor y eventos culturales.',
                    segundoParrafo: 'Los matsuri, con desfiles, fuegos artificiales y danzas tradicionales, ofrecen una inmersión cultural única. Las playas de Okinawa y la región de Tohoku son destinos populares para escapar del calor.',
                    tercerParrafo: 'Consejo: lleva ropa ligera y prepárate para la humedad. Participa en festivales locales para una experiencia auténtica.'
                },
                image: imagen3,
                altText:
                'Calle japonesa iluminada durante un festival de verano.'
            },
            {
                title: 'Invierno: nieve y onsen',
                subtitle: 'TEMPORADA BAJA EN MUCHAS CIUDADES',
                dias: 'DIC-FEB · ESQUÍ · ILUMINACIONES',
                text: {
                    primerParrafo: 'El invierno, de diciembre a febrero, es frío pero ofrece paisajes nevados impresionantes, especialmente en regiones montañosas como Hokkaido y los Alpes Japoneses.',
                    segundoParrafo: 'Es la temporada ideal para los amantes del esquí y el snowboard. Los onsen (baños termales) son refugios perfectos para relajarse tras un día en la nieve.',
                    tercerParrafo: 'Consejo: disfruta de las iluminaciones invernales en ciudades como Tokio y Osaka, que crean ambientes mágicos durante la temporada festiva.'
                },
                image: imagen4,
                altText:
                'Templo y calles con iluminación invernal y ambiente sereno.'
            },
            {
                title: '¿Entonces, cuándo ir?',
                subtitle: 'DEPENDE DE LO QUE BUSQUES',
                dias: 'PRIMAVERA/OTOÑO · VERANO · INVIERNO',
                text: {
                    primerParrafo: 'La mejor época para visitar Japón depende de tus intereses. Primavera y otoño son ideales para paisajes y clima, verano para festivales y playas, e invierno para deportes de nieve y onsen.',
                    segundoParrafo: 'Cada estación ofrece experiencias únicas: desde el hanami bajo cerezos en flor hasta la serenidad del momiji otoñal, la energía de los matsuri veraniegos y la tranquilidad de los onsen invernales.',
                    tercerParrafo: 'Consejo: considera tus preferencias personales y actividades deseadas al planificar tu viaje. En JAPÓN PREMIUM® te ayudamos a elegir la mejor época según tu estilo y objetivos de viaje.'
                },
                image: imagen5,
                altText:
                'Viajeros disfrutando de Japón en diferentes estaciones, simbolizando personalización del viaje.'
            }
]
function EpocaViajarJapon() {

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

export default EpocaViajarJapon

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
          <img src={image} alt={altText} loading="lazy"/>
        </div>
    </div>
  );
}
