import React from 'react';
import styles from './RedesSociales.module.css'

import Youtube from '../../../assets/icono-youtube.svg';
import Facebook from '../../../assets/icono-facebook.svg';
import Instagram from '../../../assets/icono-instagram.svg';
import Spotify from '../../../assets/icono-spotify.svg';
import Tiktok from '../../../assets/icono-tiktok.svg';

import CorreoIcon from '../../../assets/icono-correo.svg';
import iconoCelularBlanco from '../../../assets/iconoCelularBlanco.svg';


// <Contactos />

export default function RedesSociales() {
  return (
    <>
    <section className={styles.sectionContenedor}>
      <Redes />
      <ViajesPremiumMapEmbed/>
    </section>
    </>
  )
}

function Contactos() {
  const MESSAGE = "Quiero conocer mas de sus promociones para viajar a japon, Contáctenme";

  // Helper to keep numbers clean and in E.164 format (MX = +52)
  const digits = (s) => s.replace(/[^\d]/g, "");
  const withMx = (s) => {
    const n = digits(s);
    return n.startsWith("52") ? n : `52${n}`;
  };

  const telLink = (num) => `tel:+${withMx(num)}`;

  const mailtoLink = (email) =>
    `mailto:${email}?subject=${encodeURIComponent(
      "Consulta de promociones a Japon"
    )}&body=${encodeURIComponent(MESSAGE)}`;

  const iconContacto = [
    {
      id: 1,
      alt: "Ícono de teléfono para contacto vía celular",
      src: iconoCelularBlanco,
      text: "+ 52 55 1464 8435",
      hrefBuilder: telLink,
      ariaLabel: "Llamar al celular",
    },
    {
      id: 3,
      alt: "Ícono de correo electrónico para contacto por email",
      src: CorreoIcon,
      text: "reservaciones@viajespremium.com.mx",
      hrefBuilder: mailtoLink,
      ariaLabel: "Enviar correo",
    },
  ];

  return (
    <div className={styles.flexColumnGap15}>
      <div className={styles.contenedorMsg}>
        {iconContacto.map((r) => {
          const href = r.hrefBuilder(r.text);
          return (
            <div key={r.id} className={styles.rowStart}>
              <a href={href} aria-label={r.ariaLabel} className={styles.elementosDisplay}>
                <img
                  src={r.src}
                  alt={r.alt}
                  className={styles.iconsContacto}
                  loading="lazy"
                />
              <div className={styles.optionalContainer}>
                <p className={styles.textWhiteSmall}>{r.text}</p>
              </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
function Redes() {
  
  const redes = [
    {
      id: 1,
      alt: 'Ícono de Facebook, enlace al perfil @Viajes Premium',
      src: Facebook,
      link: "https://www.facebook.com/turismosantafeoficial",
      text: '@Viajes Premium',
      subtitulo: 'Facebook: ',
    },
    {
      id: 2,
      alt: 'Ícono de Tiktok, enlace al canal Japón Premium',
      src: Tiktok,
      link: "https://www.tiktok.com/@viajespremium?is_from_webapp=1&sender_device=pc",
      text: '@viajespremium',
      subtitulo: 'Tiktok: ',
    },
    {
      id: 3,
      alt: 'Ícono de Instagram, enlace al perfil @japonPremium',
      src: Instagram,
      link: "https://www.instagram.com/viajespremium.oficial/",
      text: '@viajespremium.oficial',
      subtitulo: 'Instagram: ',
    },
    {
      id: 4,
      alt: 'Ícono de Youtube, enlace al canal Viajes Premium',
      src: Youtube,
      link: "https://www.youtube.com/@viajespremiumelevatuvida",
      text: '@viajespremiumelevatuvida',
      subtitulo: 'Youtube: ',
    },{
      id: 5,
      alt: 'Ícono de Spotify, enlace al perfil ViajesPremium',
      src: Spotify,
      link: "https://open.spotify.com/show/4VmUesUcK08SIuxLxsl3dF?si=54ef4be681dd49d2&nd=1&dlsi=d3d1513495834e9a",
      text: '@viajespremium',
      subtitulo: 'Instagram: ',
    },
  ];

  return (
    <>
      <div className={styles.flexColumnGap15}>
      <span className={styles.titleWhite}>Redes Sociales</span>
      <div className={styles.redesSocialesContainer}>
        {redes.map((r) => (
          <div key={r.id} className={styles.rowStart}>
            <a href={r.link} target="_blank" rel="noopener noreferrer">
              <img src={r.src} alt={r.alt} className={styles.iconsFooter} loading='lazy' />
            </a>
            {/*<span className="subtituloResponsive subtitle">{r.subtitulo}</span> */}
          </div>
        ))}
      </div>
      </div>
    </>
  );
}
function ViajesPremiumMapEmbed({
  title = "Viajes PREMIUM® Turismo Santa Fe — mapa",
  aspect = "16 / 9", // any CSS aspect-ratio value, e.g. "4 / 3" or "1 / 1"
}) {
  const src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.6333683251232!2d-99.173812!3d19.341709299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffdb4d163ac7%3A0x803ca47080338df0!2sViajes%20PREMIUM%C2%AE%20Turismo%20Santa%20Fe!5e0!3m2!1sen!2smx!4v1758305914322!5m2!1sen!2smx";

  return (
    <div 
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: aspect,
        borderRadius: 8,
        overflow: "hidden",
        maxWidth: "630px",
      }}
    >
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
      />
    </div>
  );
}
