
'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Youtube from '../../../assets/icono-youtube.svg';
import Facebook from '../../../assets/icono-facebook.svg';
import Instagram from '../../../assets/icono-instagram.svg';
import Spotify from '../../../assets/icono-spotify.svg';
import Tiktok from '../../../assets/icono-tiktok.svg';

import CorreoIcon from '../../../assets/icono-correo.svg';
import IconWA from '../../../assets/icono-whatsapp.svg';
import iconoCelularBlanco from '../../../assets/iconoCelularBlanco.svg';

import styles from './Footer.module.css';
import FooterAnimation from './FooterAnimation';

// Helper to extract src from imported images
const getSrcValue = (img) => {
  if (!img) return null;
  if (typeof img === 'object' && img.src) {
    return img.src;
  }
  if (typeof img === 'string') {
    return img;
  }
  return null;
};

const Footer = React.memo(function Footer() {
  return (
    <section className={styles.sectionFooter}>
      <FooterAnimation />
      <ContactAndSocials />
      <Separator />
      <SubFooter />
    </section>
  );
});

function ContactAndSocials() {
  return (
    <div className={styles.contactAndSocialsContainer}>
      <Contactos />
      <RedesSociales />
    </div>
  );
}

function Contactos() {
  const MESSAGE = "Quiero conocer más de sus promociones para viajar a Japón, Contáctenme";

  const digits = (s) => s.replace(/[^\d]/g, "");
  const withMx = (s) => {
    const n = digits(s);
    return n.startsWith("52") ? n : `52${n}`;
  };

  const telLink = (num) => `tel:+${withMx(num)}`;
  const waLink = (num) =>
    `https://wa.me/${withMx(num)}?text=${encodeURIComponent(MESSAGE)}`;
  const mailtoLink = (email) =>
    `mailto:${email}?subject=${encodeURIComponent(
      "Consulta de promociones a Japon"
    )}&body=${encodeURIComponent(MESSAGE)}`;

  const iconContacto = [
    {
      id: 1,
      alt: "Ícono de teléfono para contacto vía celular",
      src: getSrcValue(iconoCelularBlanco),
      text: "+52 55 5339 0110",
      hrefBuilder: telLink,
      ariaLabel: "Llamar al celular",
    },
    {
      id: 2,
      alt: "Ícono de WhatsApp para contacto directo vía mensajería",
      src: getSrcValue(IconWA),
      text: "+52 5572176696",
      hrefBuilder: waLink,
      ariaLabel: "Abrir chat de WhatsApp",
    },
    {
      id: 3,
      alt: "Ícono de correo electrónico para contacto por email",
      src: getSrcValue(CorreoIcon),
      text: "reservaciones@viajespremium.com.mx",
      hrefBuilder: mailtoLink,
      ariaLabel: "Enviar correo",
    },
  ];

  return (
    <div className={styles.contactosContainer}>
      {iconContacto.map((r) => {
        const href = r.hrefBuilder(r.text);
        return (
          <a href={href} aria-label={r.ariaLabel} key={r.id} className={styles.contactLink}>
            {r.src && <Image
              src={r.src}
              alt={r.alt}
              width={40}
              height={40}
              className={styles.iconsContacto}
            />}
            <p className={styles.textWhiteSmall}>{r.text}</p>
          </a>
        );
      })}
    </div>
  );
}

function RedesSociales() {
  const redes = [
    { id: 1, alt: 'Ícono de Facebook', src: getSrcValue(Facebook), link: "https://www.facebook.com/turismosantafeoficial" },
    { id: 2, alt: 'Ícono de Tiktok', src: getSrcValue(Tiktok), link: "https://www.tiktok.com/@viajespremium?is_from_webapp=1&sender_device=pc" },
    { id: 3, alt: 'Ícono de Instagram', src: getSrcValue(Instagram), link: "https://www.instagram.com/viajespremium.oficial/" },
    { id: 4, alt: 'Ícono de Youtube', src: getSrcValue(Youtube), link: "https://www.youtube.com/@viajespremiumelevatuvida" },
    { id: 5, alt: 'Ícono de Spotify', src: getSrcValue(Spotify), link: "https://open.spotify.com/show/4VmUesUcK08SIuxLxsl3dF?si=54ef4be681dd49d2&nd=1&dlsi=d3d1513495834e9a" },
  ];

  return (
    <div className={styles.redesSocialesContainer}>
      {redes.map((r) => (
        <a href={r.link} key={r.id} target="_blank" rel="noopener noreferrer">
          {r.src && <Image src={r.src} alt={r.alt} width={40} height={40} className={styles.iconsFooter} />}
        </a>
      ))}
    </div>
  );
}

function Separator() {
  return <div className={styles.separator}></div>;
}

function SubFooter() {
  return (
    <section className={styles.subFooter}>
      <Link href="/aviso-de-privacidad" className={styles.subFooterText}>
        Aviso de Privacidad
      </Link>
      <p className={`${styles.textWhiteSmall} ${styles.copyrightText}`}>
        {' '}
        © 2025 Todas las marcas y servicios que se ofrecen son propiedad de{' '}
        <span className={styles.bold}>BARRANCAS PREMIUM®</span>
        Consulte Términos y Condiciones en el Contrato de Adhesión ante PROFECO con número 7735-2015 & 7180-2015
      </p>
    </section>
  );
}

export default Footer;
