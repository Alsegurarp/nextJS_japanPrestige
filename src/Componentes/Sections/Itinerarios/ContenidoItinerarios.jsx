import React from 'react';
import Image from 'next/image';
import styles from './ContenidoItinerarios.module.css';

import japonDubai from '../../../assets/Itinerarios/PortadasItinerarios/Japon_&_Dubai_Premium_Cerezos_Oro_Portada.webp';
import JaponChina from '../../../assets/Itinerarios/PortadasItinerarios/Japon_&_China_Dragones_&_Cerezos_Japon_Premium_Templo_Cielo.webp';
import JaponCorea from '../../../assets/Itinerarios/PortadasItinerarios/Japon_&_Corea_del_Sur_Japon_Premium_Portada_Palacio_Real_Gyeongbokgung.webp';
import MurallaChina from '../../../assets/Itinerarios/PortadasItinerarios/Samurai_&_Shaolines_Japon_Premium_Portada_Gran_Muralla.webp';
import JaponTailandia from '../../../assets/Itinerarios/PortadasItinerarios/Japon_&_Tailandia_Rio_Kwai_Kanchanaburi_Japon_Premium_Portada.webp';
import Link from 'next/link';


const ContenidoItinerarios = React.memo(function ContenidoItinerarios() {

  const data = [
    {
      title: 'Japón & Dubái',
      to: '/itinerarios/japon-y-dubai-maravilloso',
      subtitle: 'JAPÓN PREMIUM®',
      dias: '12 DÍAS - 10 NOCHES',
      text: "Tokio - Hakone - Kioto - Nara - Osaka - Dubái",
      image: japonDubai,
      altText: 'Vista panorámica del Burj Al Arab en Dubái, Emiratos Árabes Unidos, con cielo despejado y arquitectura moderna al atardecer, ideal para viajeros que buscan lujo y exclusividad en Oriente Medio.',
    },
    {
      title: 'China  & Japón',
      to: '/itinerarios/japon-y-china',
      subtitle: 'JAPÓN PREMIUM®',
      dias: '16 DÍAS - 14 NOCHES',
      text: 'Pekín - Xi\'an - Shanghái - Osaka - Nara - Kioto - Hakone - Tokio',
      image: JaponChina,
      altText: 'Vista panorámica de la Gran Muralla China entre montañas cubiertas de follaje otoñal, un destino turístico imperdible para los amantes de la historia, la cultura asiática y los paisajes naturales en China.',
    },
    {
      title: 'Japón & Corea del Sur',
      to: '/itinerarios/japon-corea-del-sur',
      subtitle: 'JAPÓN PREMIUM®',
      dias: '13 DÍAS - 11 NOCHES',
      text: 'Tokio - Hakone - Kioto - Nara - Osaka - Seúl - Suwon - Songnisan - Haeinsa - Gyeongju',
      image: JaponCorea,
      altText: 'Templo budista tradicional en Corea del Sur rodeado de árboles otoñales, visitantes y ofrendas, una experiencia cultural única para los viajeros interesados en la espiritualidad asiática y la arquitectura coreana.',
    }, {
      title: 'Japón & China',
      to: '/itinerarios/samurais-y-shaolines',
      subtitle: 'JAPÓN PREMIUM®',
      dias: '15 DÍAS - 13 NOCHES',
      text: 'Tokio - Hakone - Kioto - Nara - Osaka - Pekin - Xi\'an - Shanghái',
      image: MurallaChina,
      altText: 'Vista frontal del palacio principal de la Ciudad Prohibida en Pekín, China, con arquitectura imperial y cielo despejado, destino cultural imprescindible para turistas interesados en la historia milenaria china.',
    }, {
      title: 'Japón & Tailandia',
      to: '/itinerarios/japon-y-tailandia-lo-mejor',
      subtitle: 'JAPÓN PREMIUM®',
      dias: '16 DÍAS - 14 NOCHES',
      text: 'Osaka - Tokio - Kioto - Hakone - Bangkok - Ayatthaya - Chiang Rai - Chiang Mai',
      image: JaponTailandia,
      altText: 'Templo tailandés iluminado durante la noche en Bangkok, con elaborados detalles dorados y cielo azul profundo, una atracción turística destacada para los amantes de la cultura y espiritualidad en Tailandia.',
    },
  ];

  return (
    <>
      <TitleContenido />

      {data.map((d, index) => (
        <Card
          to={d.to}
          key={d.title}
          index={index}
          title={d.title}
          subtitle={d.subtitle}
          dias={d.dias}
          text={d.text}
          image={d.image}
          altText={d.altText} />))}
    </>
  )
}
)

export default ContenidoItinerarios;


function Card({ image, index, altText, title, subtitle, dias, text, to }) {


  return (
    <div className={`${index % 2 === 1 ? `${styles.reverse} ${styles.cardContainer}` : `${styles.cardContainer}`}`}>
      <div className={styles.cardText} data-aos={index % 2 === 1 ? 'fade-left' : 'fade-right'} data-aos-delay={index * 10} data-aos-duration="100">
        <div className={styles.cardContenidoStyle}>
          <div style={{ marginBottom: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h2 className={styles.cardContainerh2} style={{ fontFamily: "nohemi", textTransform: "uppercase" }}>{title}</h2>
            <span style={{ fontFamily: "nohemi", textTransform: "uppercase", fontWeight: "400" }}>{subtitle}</span>
          </div>
          <div style={{ textAlign: "center" }}>
            <span style={{ fontFamily: "nohemi", textTransform: "uppercase" }}>{dias}</span>
            <p className={styles.cardContainerP} style={{ fontFamily: "nohemi" }}>{text}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px", flexWrap: "wrap" }}>
            <Link className={`${styles.buttonCATcaracteristicas} ${styles.buttonNegro}`} href={to}>
              Más información
            </Link>
            <Link className={styles.buttonCATcaracteristicas} href="/contacto">
              Diseña tu viaje
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.cardImage}>
        <Image src={image} alt={altText} loading="lazy" width={600} height={450} priority={false} />
      </div>
    </div>
  );
}

function TitleContenido() {

  return (
    <div style={{ justifyItems: "center", height: "15vh", alignContent: "center", backgroundColor: "#111111" }}>
      <h2 style={{ fontFamily: "nohemi", fontSize: "24px", color: "white" }}>Viajes a Japón combinados</h2>
    </div>
  )
}