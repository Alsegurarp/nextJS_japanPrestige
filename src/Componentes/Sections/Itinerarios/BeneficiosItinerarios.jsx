import React from 'react';
import Image from 'next/image';
import styles from './BeneficiosItinerarios.module.css';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

import OrigenDelSolJapon from '../../../assets/Itinerarios/PortadasItinerarios/El_Origen_del_Sol_Japon_Premium_Portada_Parque_Nacional_Hakone.webp';
import TurismoDelPacifico from '../../../assets/Itinerarios/PortadasItinerarios/Titanes_del_Pacifico_Portada_Japon_Premium_Cataratas_Shirato.webp';
import ArteOrientalJapan from '../../../assets/Itinerarios/PortadasItinerarios/Art_Oriental_Pabellon_Dorado_Portada_Japon_Premium.webp';
import ImperioDelSolNaciente from '../../../assets/Itinerarios/PortadasItinerarios/Imperio_del_Sol_Naciente_Japon_Premium_Portada_Viaje_Tradicion_Modernidad_Paisajes.webp';
import ElUltimoSamurai from '../../../assets/Itinerarios/PortadasItinerarios/El_Ultimo_Samurai_Portada_Cataratas_Shiraito.webp';
import Link from 'next/link';


const data = [
  {
    title: 'El origen del sol',
    to: '/itinerarios/origen-del-sol',
    subtitle: 'JAPÓN PREMIUM®',
    dias: '11 DÍAS - 9 NOCHES',
    text: "Osaka - Nara - Kioto - Nagoya - Magome - Tsumago - Takayama - Shirakawago - Nagoya - Hakone - Tokio",
    image: OrigenDelSolJapon,
    altText: 'Viajero contemplando el Monte Fuji al atardecer, uno de los paisajes más icónicos de Japón',
  },
  {
    title: 'Titanes del pacifico',
    subtitle: 'JAPÓN PREMIUM®',
    to: '/itinerarios/titanes-del-pacifico',
    dias: '10 DÍAS - 8 NOCHES',
    text: 'Tokio - Nagoya - Kioto - Nagano - Ikaho',
    image: TurismoDelPacifico,
    altText: 'Turista disfrutando de un recorrido natural por Japón, rodeada de paisajes verdes y arquitectura tradicional',
  },
  {
    title: 'Arte oriental',
    subtitle: 'JAPÓN PREMIUM®',
    to: '/itinerarios/art-oriental',
    dias: '11 DÍAS - 9 NOCHES',
    text: 'Tokio - Hakone - Kanazawa - Gikayama - Shirakawago - Gero - Nagoya - Kyoto - Nara - Osaka',
    image: ArteOrientalJapan,
    altText: 'Experiencia cultural con maestro bonsái en jardín zen, actividad exclusiva de Premium Japón',
  }, {
    title: 'Imperio del sol naciente',
    subtitle: 'JAPÓN PREMIUM®',
    to: '/itinerarios/imperio-del-sol',
    dias: '12 DÍAS - 10 NOCHES',
    text: 'Tokio - Hiroshima - Itsukushima - Matsuyama - Tokohira - Takamatsu - Naruto - Kobe - Osaka - Kioto - Tsumago - Matsumoto - Nagano - Kusatsu - Ikaho - Nikko',
    image: ImperioDelSolNaciente,
    altText: 'Viajero contemplando el Monte Fuji al atardecer, uno de los paisajes más icónicos de Japón',
  }, {
    title: 'El último samurái',
    subtitle: 'JAPÓN PREMIUM®',
    to: '/itinerarios/ultimo-samurai',
    dias: '17 DÍAS - 15 NOCHES',
    text: 'Tokio - Kawaguchiko - Kioto - Osaka - Okayama - Hiroshima - Matsuyama - Kobe - Monte Kōya - Nagano - Ikaho',
    image: ElUltimoSamurai,
    altText: 'Viajero contemplando el Monte Fuji al atardecer, uno de los paisajes más icónicos de Japón',
  },
];

const Beneficios = React.memo(function Beneficios() {
  return (
    <div>
      <h2 className={styles.nuestrosPaquetesTitle}>Nuestros paquetes</h2>
      {data.map((s, i) => (
        <Contenido
          to={s.to}
          image={s.image}
          altText={s.altText}
          title={s.title}
          subtitle={s.subtitle}
          dias={s.dias}
          text={s.text}
          key={s.title}
          reverse={i % 2 === 0}
        />
      ))}
    </div>
  );
})

function Contenido(props) {
  let backgroundPositionValue = '0% 0%';

  if (props.image === OrigenDelSolJapon) {
    backgroundPositionValue = '50% 90%';
  } else if (props.image === TurismoDelPacifico) {
    backgroundPositionValue = '40% 0%';
  } else if (props.image === ArteOrientalJapan) {
    backgroundPositionValue = '40% 50%';
  } else if (props.image === ImperioDelSolNaciente) {
    backgroundPositionValue = '80% 50%';
  } else if (props.image === ElUltimoSamurai) {
    backgroundPositionValue = '50% 30%';
  }

  const containerClass = props.reverse
    ? `${styles.beneficiosContainer} ${styles.reverseContainer}`
    : `${styles.beneficiosContainer}`;

  const beneficioItinerario = props.reverse
    ? styles.contenidoBeneficiosItinerariosItinerarios
    : `${styles.contenidoBeneficiosItinerariosItinerarios} ${styles.leftItinerario}`;

  const reverseContent = props.reverse
    ? "" : styles.reverseClassText;


  const ref = useScrollAnimation({ animation: 'fade-right' });

  return (
    <div className={containerClass}>
      <Image
        src={props.image}
        alt={props.altText}
        loading="lazy"
        className={styles.beneficioImage}
        style={{ objectPosition: backgroundPositionValue }}
        width={800}
        height={600}
        priority={false}
      />
      <div ref={ref} className={beneficioItinerario}>
        <div className={styles.titlePlusSubtitle}>
          <h2
            style={{
              fontFamily: 'nohemi',
              fontSize: '20px',
              color: '#fff',
              padding: '0px',
              margin: '0px',
            }}
            className={reverseContent}
          >
            {props.title}
          </h2>
          <span
            style={{
              fontFamily: 'nohemi',
              fontSize: '16px',
              color: '#fff',
            }}
            className={reverseContent}
          >
            {props.subtitle}
          </span>
        </div>
        <span
          className={styles.cantidadDias}
          style={{
            fontFamily: 'nohemi',
            fontSize: '14px',
            color: '#fff',
          }}>{props.dias}</span>
        <p
          style={{
            fontFamily: 'nohemi',
            fontSize: '14px',
            color: '#fff',
          }}
          className={`${reverseContent} textoBeneficiosResponsive`}
        >
          {props.text}
        </p>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-evenly", width: "100%", marginTop: "5px" }}>

          <Link className={`${styles.buttonCATcaracteristicas} ${styles.buttonNegro}`} href={props.to}>
            Más información
          </Link>

          <Link className={styles.buttonCATcaracteristicas} href="/contacto">
            Diseña tu viaje
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Beneficios;