'use client';

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
// import LogoJaponDesktop from '/FAVICON.svg';
// Mobile logo
const LogoJaponMobile = '/mobile_logo_japon.svg';
// Desktop logo  
const LogoJaponDesktop = '/logo_japon.svg';

import MenuOpen from './MenuOpen.jsx';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.navbarDiv}>
        <Menu onClick={() => setMenuOpen(true)} />

        <Link href="/">
          <Logo />
        </Link>

        <Redes />
      </div>
      {menuOpen && <MenuOpen onClose={() => setMenuOpen(false)} />}
    </>
  )
}

function Menu({ onClick }) {
  return (
    <div className={styles.menuNavBar}>
      <button onClick={onClick} className={styles.buttonMenu} >
        <Image src="/assets/indexImagenes/menu_logo.svg" alt="Menu de navegacion" width={80} height={80} />
      </button>
    </div>
  )
}


function Logo() {

  return (
    <div className={styles.logoLink}>
      {/* Mobile logo - visible by default, hidden on desktop */}
      <img
        src={LogoJaponMobile}
        alt="Logo oficial de Japón Premium, agencia especializada en experiencias de lujo en Japón para viajeros latinoamericanos"
        className={styles.logoMobile}
      />
      {/* Desktop logo - hidden by default, visible on desktop */}
      <img
        src={LogoJaponDesktop}
        alt="Logo oficial de Japón Premium, agencia especializada en experiencias de lujo en Japón para viajeros latinoamericanos"
        className={styles.logoDesktop}
      />
    </div>
  )
}

function Redes() {
  const MESSAGE = "Quiero conocer mas de sus promociones para viajar a japon, Contáctenme";

  const mailtoLink = (email) =>
    `mailto:${email}?subject=${encodeURIComponent(
      "Consulta de promociones a Japon"
    )}&body=${encodeURIComponent(MESSAGE)}`;

  const datos = [{
    id: 1,
    alt: "Ícono de correo electrónico para contacto por email",
    src: "/assets/icono-correo.svg",
    text: "reservaciones@viajespremium.com.mx",
    hrefBuilder: mailtoLink,
    ariaLabel: "Enviar correo",
  },
  ];

  return (
    <div className={styles.redesStyleContainer}>

      <div className={styles.redesIcons}>
        <a className={styles.redesStyle} href="tel:+5255 53390110">
          <Image src="/assets/iconoCelularBlanco.svg" alt="iconoCelularBlanco" width={25} height={25} className={styles.redesStyle} />
        </a>
        <p className={styles.textosRedesStyle} style={{ fontFamily: "nohemi" }} >+52 55 5339 0110</p>
      </div>

      <div className={styles.redesStyle}>
        {datos.map((r) => {
          const href = r.hrefBuilder(r.text);
          return (
            <div key={r.id} className={styles.redesIcons}>
              <a href={href} aria-label={r.ariaLabel} className={styles.redesStyle} style={{ textDecoration: "none" }}>
                <Image
                  src={r.src}
                  alt={r.alt}
                  width={25}
                  height={25}
                  className={styles.redesStyle}
                  loading="lazy"
                />
                <div className={styles.optionalContainer}>
                  <p className={styles.textosRedesStyle} style={{ fontFamily: "nohemi" }}>{r.text}</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  )
}