import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
// import LogoJaponDesktop from '/FAVICON.svg';
// Mobile logo
import LogoJaponMobile from '/mobile_logo_japon.svg';
// Desktop logo  
import LogoJaponDesktop from '/logo_japon.svg';

import CorreoIcon from '../../../assets/icono-correo.svg'
import iconoCelularBlanco from '../../../assets/iconoCelularBlanco.svg';
import BurgerMenu from '../../../assets/indexImagenes/menu_logo.svg'

import MenuOpen from './MenuOpen.jsx';
import styles from './Navbar.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Initialize AOS once
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

    // Refresh AOS when menu opens
  useEffect(() => {
    if (menuOpen) {
      setTimeout(() => {
        AOS.refresh();
      }, 100); // small delay ensures DOM is ready
    }
  }, [menuOpen]);

  return (
    <>
    <div className={styles.navbarDiv}>
            <Menu onClick={() => setMenuOpen(true)} />

            <NavLink to="/">
              <Logo />
            </NavLink>
            
            <Redes />
    </div>
            {menuOpen && <MenuOpen onClose={() => setMenuOpen(false)} />}
    </>
  )
}

function Menu({onClick}){
    return(
        <div className={styles.menuNavBar}>
            <button onClick={onClick} className={styles.buttonMenu} >
                <img src={BurgerMenu} alt="Menu de navegacion" style={{width: "80px"}}/>
            </button>
        </div>
    )
}


function Logo(){

    return(
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

function Redes(){
    const MESSAGE = "Quiero conocer mas de sus promociones para viajar a japon, Contáctenme";


    const mailtoLink = (email) =>
    `mailto:${email}?subject=${encodeURIComponent(
      "Consulta de promociones a Japon"
    )}&body=${encodeURIComponent(MESSAGE)}`;

  const datos = [{
        id: 1,
        alt: "Ícono de correo electrónico para contacto por email",
        src: CorreoIcon,
        text: "reservaciones@viajespremium.com.mx",
        hrefBuilder: mailtoLink,
        ariaLabel: "Enviar correo",
      },
    ];
    
    return(
        <div className={styles.redesStyleContainer}>
            
            <div className={styles.redesIcons}>
              <a className={styles.redesStyle} href="tel:+5255 53390110">
                <img src={iconoCelularBlanco} alt="iconoCelularBlanco" style={{width: "25px", height: "25px"}} className={styles.redesStyle}/>
              </a>
              <p className={styles.textosRedesStyle} style={{fontFamily: "nohemi"}} >+52 55 5339 0110</p>
            </div>

            <div className={styles.redesStyle}>    
              {datos.map((r) => {
                const href = r.hrefBuilder(r.text);
                  return (
                    <div key={r.id} className={styles.redesIcons}>
                      <a href={href} aria-label={r.ariaLabel} className={styles.redesStyle} style={{textDecoration: "none"}}>
                        <img
                          src={r.src}
                          alt={r.alt}
                          className={styles.redesStyle}
                          style={{width: "25px", height: "25px"}}
                          loading="lazy"
                        />
                      <div className={styles.optionalContainer}>
                        <p className={styles.textosRedesStyle} style={{fontFamily: "nohemi"}}>{r.text}</p>
                      </div>
                      </a>
                    </div>
                  );
                })}
            </div>
        </div>
    )
}