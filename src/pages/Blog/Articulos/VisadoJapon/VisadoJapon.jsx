import React from 'react';
import HeroSection from '../../../../Componentes/Sections/HeroSection.jsx';
import styles from './VisadoJapon.module.css';

import HeroImage from '../../../../assets/ImagenesBlogs/PortadasHero/Blog_Visado_Viajar_Japon_Premium.webp';

import LetrasDoradasResponsive from '../../../../assets/titulosBlogs/necesitasvisadoMOVIL.svg';
import LetrasDoradasDesktop from '../../../../assets/titulosBlogs/necesitasvisadoWEB.svg';

import imagen1 from '../../../../assets/ImagenesBlogs/visado/mas_de_90_dias_en_japon_por_trabajo_o_estudios.webp';
import imagen2 from '../../../../assets/ImagenesBlogs/visado/requisitos_de_entrada_a_japon_viajes_a_japon_desde_mexico.webp';
import imagen3 from '../../../../assets/ImagenesBlogs/visado/viaje_a_japon_distancias_cortas_y_distancias_largas.webp';
import imagen4 from '../../../../assets/ImagenesBlogs/visado/viajes_a_japon_desde_mexico_con_japon_premium.webp';
import imagen5 from '../../../../assets/ImagenesBlogs/visado/viajes_a_japon_desde_mexico_pasapor.webp';
import FlyingButton from '../../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';

const Herodata = [
{
    text: "Planificar cuándo viajar a Japón es tan crucial como saber a dónde ir. En Japón PREMIUM,  creemos que sincronizar tu visita con la temporada adecuada transforma un simple viaje en  una experiencia sublime.",
    image: HeroImage,
    altImg:"Vista frontal del Templo Yasukuni en Tokio, Japón, con cielo nublado al atardecer.",
    letrasDoradasResponsive: LetrasDoradasResponsive,
    LetrasDoradasDesktop: LetrasDoradasDesktop, 
}];


const data = [
        {
            title: '¿Necesito visa para Japón si tengo pasaporte mexicano?',
            subtitle: 'EXENCIÓN DE VISADO (ESTANCIAS CORTAS)',
            dias: 'TURISMO · NEGOCIOS · VISITA · HASTA 90 DÍAS',
            text: {
                primerParrafo: 'Si viajas con pasaporte mexicano por turismo, negocios o para visitar familiares/amigos, y tu estancia no supera 90 días ni incluye actividades remuneradas, no necesitas tramitar visa. México tiene acuerdo de exención para estancias cortas.',
                segundoParrafo: 'Tu pasaporte debe tener vigencia suficiente (idealmente más de seis meses). En el control migratorio podrían solicitar tu boleto de salida y, de ser necesario, comprobantes de reservas o itinerario.',
                tercerParrafo: 'Si planeas quedarte más de 90 días, trabajar, estudiar, residir o realizar actividades remuneradas, necesitarás un visado apropiado. En la mayoría de casos se exige un Certificado de Elegibilidad (CoE) emitido por una institución en Japón antes de solicitar la visa en la embajada o consulado.'
            },
            image: imagen1,
            altText:
            'Viajero con pasaporte mexicano preparando su viaje a Japón para una estancia corta sin visa.'
        },
        {
            title: 'Requisitos de entrada básicos',
            subtitle: 'PASAPORTE Y SOPORTES',
            dias: 'VIGENCIA > 6 MESES · BOLETO DE SALIDA',
            text: {
                primerParrafo: 'Si viajas con pasaporte mexicano por turismo, negocios o para visitar familiares/amigos, y tu estancia no supera 90 días ni incluye actividades remuneradas, no necesitas tramitar visa. México tiene acuerdo de exención para estancias cortas.',
            },
            image: imagen2,
            altText:
            'Documentos de viaje y pasaporte listos para el control migratorio en Japón.'
        },
        {
            title: '¿Más de 90 días o actividad remunerada?',
            subtitle: 'VISADO ESPECÍFICO + CoE',
            dias: 'TRABAJO · ESTUDIOS · RESIDENCIA',
            text: {
                primerParrafo: 'Si viajas con pasaporte mexicano por turismo, negocios o para visitar familiares/amigos, y tu estancia no supera 90 días ni incluye actividades remuneradas, no necesitas tramitar visa. México tiene acuerdo de exención para estancias cortas.',
                segundoParrafo: 'Tu pasaporte debe tener vigencia suficiente (idealmente más de seis meses). En el control migratorio podrían solicitar tu boleto de salida y, de ser necesario, comprobantes de reservas o itinerario.',
                tercerParrafo: 'Si planeas quedarte más de 90 días, trabajar, estudiar, residir o realizar actividades remuneradas, necesitarás un visado apropiado. En la mayoría de casos se exige un Certificado de Elegibilidad (CoE) emitido por una institución en Japón antes de solicitar la visa en la embajada o consulado.'
            },
            image: imagen3,
            altText:
            'Solicitante revisando requisitos de visado y Certificado de Elegibilidad para Japón.'
        },
        {
            title: 'Resumen claro',
            subtitle: 'QUÉ APLICA EN TU CASO',
            dias: 'CORTA ESTANCIA · LARGA ESTANCIA',
            text: {
                primerParrafo: 'Si viajas con pasaporte mexicano por turismo, negocios o para visitar familiares/amigos, y tu estancia no supera 90 días ni incluye actividades remuneradas, no necesitas tramitar visa. México tiene acuerdo de exención para estancias cortas.',
                segundoParrafo: 'Tu pasaporte debe tener vigencia suficiente (idealmente más de seis meses). En el control migratorio podrían solicitar tu boleto de salida y, de ser necesario, comprobantes de reservas o itinerario.',
                tercerParrafo: 'Si planeas quedarte más de 90 días, trabajar, estudiar, residir o realizar actividades remuneradas, necesitarás un visado apropiado. En la mayoría de casos se exige un Certificado de Elegibilidad (CoE) emitido por una institución en Japón antes de solicitar la visa en la embajada o consulado.'
            },
            image: imagen4,
            altText:
            'Iconos de calendario y documento ilustrando diferencias entre estancias cortas y largas.'
        },
        {
            title: 'Cómo te ayuda JAPÓN PREMIUM',
            subtitle: 'ASESORÍA Y GESTIONES',
            dias: 'REVISIÓN DE PLAN · REQUISITOS · TRÁMITES',
            text: {
                primerParrafo: 'Si viajas con pasaporte mexicano por turismo, negocios o para visitar familiares/amigos, y tu estancia no supera 90 días ni incluye actividades remuneradas, no necesitas tramitar visa. México tiene acuerdo de exención para estancias cortas.',
                segundoParrafo: 'Tu pasaporte debe tener vigencia suficiente (idealmente más de seis meses). En el control migratorio podrían solicitar tu boleto de salida y, de ser necesario, comprobantes de reservas o itinerario.',
                tercerParrafo: 'Si planeas quedarte más de 90 días, trabajar, estudiar, residir o realizar actividades remuneradas, necesitarás un visado apropiado. En la mayoría de casos se exige un Certificado de Elegibilidad (CoE) emitido por una institución en Japón antes de solicitar la visa en la embajada o consulado.'
            },
            image: imagen5,
            altText:
            'Asesoría personalizada para trámites de viaje a Japón con apoyo en visados y CoE.'
        }
]
function VisadoJapon() {

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

export default VisadoJapon

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
