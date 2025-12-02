import React from 'react';
import HeroSection from '../../../../Componentes/Sections/HeroSection.jsx';
import Image from 'next/image';
import styles from './SaludarBlog.module.css';

import HeroImage from '../../../../assets/ImagenesBlogs/PortadasHero/Blog_Como_Saludar_Agradecer_Geishas_Japon_Premium.webp';
import LetrasDoradasResponsive from '../../../../assets/titulosBlogs/comosaludaryagradecerMOVIL.svg';
import LetrasDoradasDesktop from '../../../../assets/titulosBlogs/comosaludaryagradecerWEB.svg';

import imagen1 from '../../../../assets/ImagenesBlogs/Saludar/Blog_1_Saluda_Agradece_Japon_Premium_Kofuki-ji_Sohei_Respeto_Cultura.webp';
import imagen2 from '../../../../assets/ImagenesBlogs/Saludar/Blog_2_Saludar_Agradecer_Japon_Premium_Frases_Esenciales_Cortesia_Japonesa.webp';
import imagen3 from '../../../../assets/ImagenesBlogs/Saludar/Blog_3_Saludar_Agradecer_Japon_Premium_Guia_PRivado_Experiencia_Cultura.webp';
import imagen4 from '../../../../assets/ImagenesBlogs/Saludar/Blog_4_Saludar_Agradecer_Japon_Premium_Experiencia_elevada_Saludo.webp';
import FlyingButton from '../../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';


const Herodata = [
{
    text: "Adentrarte en la cultura japonesa va más allá de conocer los lugares: es comprender losgestos y palabras que transmiten respeto. En Japón PREMIUM, te compartimos esta guíapara que tus interacciones reflejen elegancia y consideración.",
    image: HeroImage,
    altImg:"Vista frontal del Templo Yasukuni en Tokio, Japón, con cielo nublado al atardecer.",
    letrasDoradasResponsive: LetrasDoradasResponsive,
    LetrasDoradasDesktop: LetrasDoradasDesktop, 
}];

const data = [
        {
            title: '¿Cómo se saluda y se agradece en Japón?',
            subtitle: 'GUÍA DE CORTESÍA',
            dias: 'REVERENCIAS 15° · 30° · 45° · 90°',
            text: {
              primerParrafo: "El ojigi expresa respeto, gratitud y disculpa.",
              segundoParrafo: "Informal (15-30°): para conocidos. Respetuosa (30-45°): negocios y personas de mayor jerarquía. Profunda (45-90°): autoridades o muestras de gran gratitud (restaurantes exclusivos/tiendas de lujo).",
              tercerParrafo: "Consejo: inclina desde la cintura, espalda recta, manos a los costados; evita el contacto visual directo durante la reverencia."
            },
            image: imagen1,
            altText:
            'Dos personas realizando una reverencia tradicional japonesa con el fondo de un templo.'
        },
        {
            title: 'Frases esenciales para complementar tu cortesía japonesa',
            subtitle: 'EXPRESIONES ÚTILES',
            dias: 'SALUDOS · AGRADECIMIENTOS · DISCULPAS · MESA',
            text: {
              primerParrafo: 'Saludos: Konnichiwa (buenos días/tardes), Ohayō gozaimasu (buenos días, formal), Konbanwa (buenas noches). Despedidas: Sayōnara (adiós), Mata ne (hasta luego, informal), Otsukaresama deshita (gracias por tu esfuerzo, al finalizar el trabajo).',
              segundoParrafo: 'Presentaciones: Hajimemashite (encantado de conocerte), Watashi wa [tu nombre] desu (soy [tu nombre]). Preguntar cómo está alguien: Ogenki desu ka? (¿cómo estás?). Responder: Genki desu (estoy bien).',
              tercerParrafo: 'Por favor: Onegaishimasu (por favor, al pedir algo), Kudasai (por favor, al solicitar algo). Gracias: Arigatō (gracias, informal), Dōmo (muchas gracias, informal).',
            },
            image: imagen2,
            altText:
            'Comensales saludando a un chef en un restaurante japonés, ilustrando frases y cortesía en la mesa.'
        },
        {
            title: '¿Qué aporta un guía privado en tu experiencia cultural?',
            subtitle: 'JAPÓN PREMIUM®',
            dias: 'ETIQUETA · CONTEXTO · ACCESO LOCAL',
            text: {
              primerParrafo: 'Un guía privado en Japón enriquece tu viaje con conocimiento cultural profundo, facilitando interacciones auténticas y respetuosas. Te ayuda a navegar normas sociales, tradiciones y etiqueta, asegurando que tus saludos y agradecimientos sean apropiados y bien recibidos.',
              segundoParrafo: 'Contexto cultural: explica el significado detrás de saludos y gestos, ayudándote a comprender su importancia. Acceso exclusivo: abre puertas a experiencias locales y encuentros con artesanos y chefs, enriqueciendo tu viaje.',
              tercerParrafo: 'Tranquilidad: elimina incertidumbres sobre normas sociales, permitiéndote disfrutar plenamente de tu experiencia en Japón con confianza y respeto.'
            },
            image: imagen3, // reemplázala por una imagen tuya de Japón si prefieres
            altText:
            'Viajeros con su guía frente a un santuario, simbolizando acompañamiento cultural personalizado.'
        },
        {
            title: 'Una experiencia elevada desde el saludo',
            subtitle: 'HOSPITALIDAD JAPONESA',
            dias: 'DEL GESTO A LA CONEXIÓN HUMANA',
            text: {
              primerParrafo: 'En Japón, cada saludo y expresión de gratitud es una oportunidad para conectar y mostrar respeto. La hospitalidad japonesa, o omotenashi, se refleja en la atención al detalle y el cuidado genuino hacia los demás.',
              segundoParrafo: 'Desde la reverencia al entrar a un establecimiento hasta el agradecimiento al recibir un servicio, cada gesto es una manifestación de cortesía y consideración. Esta cultura de respeto mutuo crea un ambiente armonioso y acogedor para todos.',
              tercerParrafo: 'Cuidamos cada detalle cultural para que disfrutes con consciencia y hospitalidad. ¿Listo para iniciar un viaje donde cada gesto cuenta?'
            },
            image: imagen4, // usa aquí cualquier imagen hero que tengas para la sección final
            altText:
            'Imagen inspiracional de viaje premium para transmitir hospitalidad y excelencia en el servicio.'
        }
]
function SaludarBlog() {

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

export default SaludarBlog

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
