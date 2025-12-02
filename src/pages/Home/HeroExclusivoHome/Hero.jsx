'use client';

import React, { useMemo } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import Link from "next/link";
import TitleSVG from "./TitleSVG.jsx";


const Hero = React.memo(function Hero({
  title,
  bigTitle = null,
  subtitle,
  altImg = "",
  imgMobile,   // imported image object for 768w OR string path
  imgTablet,   // imported image object for 1280w OR string path
  imgDesktop,  // imported image object for 1920w OR string path
  imgDesktopXL, // imported image object for 1440w+ OR string path
  bgPosition = "50% 50%",
}) {
  // Handle both imported images (objects) and string paths (public folder)
  const getSrcValue = (img) => {
    if (!img) return null;
    // If it's an imported image object, it has a src property
    if (typeof img === 'object' && img.src) {
      return img.src;
    }
    // If it's an object with webp property (Next.js format)
    if (typeof img === 'object' && img.webp) {
      return img.webp;
    }
    // If it's a string path, return it directly
    if (typeof img === 'string') {
      return img;
    }
    return null;
  };

  // Determine which image to use based on viewport (fallback to largest available)
  const fallbackSrc = useMemo(() => {
    const src = getSrcValue(imgDesktop) || getSrcValue(imgTablet) || getSrcValue(imgMobile);
    return src || null;
  }, [imgDesktop, imgTablet, imgMobile]);

  return (
    <section className={styles.hero} aria-label={title}>
      {fallbackSrc && (
        <Image
          src={fallbackSrc}
          alt={altImg}
          fill
          className={styles.heroImg}
          decoding="async"
          priority
          sizes="100vw"
          style={{ objectPosition: bgPosition }}
        />
      )}

      <div className={styles.content} style={{ "--bgPos": bgPosition }}>
        <div >
          <h1 className={styles.title}>{title}</h1>
          {bigTitle && <TitleSVG className={styles.bigTitle} />}

          {/* <img className={styles.bigTitle} 
          src={bigTitle} 
          alt="Premium" 
          decoding="async"
          fetchPriority="high"
          loading="eager" />*/}
        </div>


        {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}

        <Link href="/contacto" rel="noopener noreferrer" className={styles.buttonCATcaracteristicas}>
          Diseña tu viaje ahora
        </Link>
      </div>

      <div className={styles.overlay} aria-hidden="true" />
    </section>
  );
});

export default Hero;