import React, { useMemo } from "react";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";
import TitleSVG from "./TitleSVG.jsx";


const Hero = React.memo(function Hero({
  title,
  bigTitle = null,
  subtitle,
  altImg = "",
  imgMobile,   // { webp: mujerKimonoMovil }     // 768w
  imgTablet,   // { webp: mujerKimonoTablet }    // 1280w
  imgDesktop,  // { webp: mujerKimono }          // 1920w
  imgDesktopXL, // { webp: mujerKimonoXL }       // 1440w+
  bgPosition = "50% 50%",
}) {
  // Memoize srcset computation to prevent recalculation on re-renders
  const srcsetWebp = useMemo(() => [
    imgMobile?.webp && `${imgMobile.webp} 768w`,
    imgTablet?.webp && `${imgTablet.webp} 1280w`,
    imgDesktop?.webp && `${imgDesktop.webp} 1440w`,
    imgDesktopXL?.webp && `${imgDesktopXL.webp} 1920w`,
  ]
    .filter(Boolean)
    .join(", "), [imgMobile?.webp, imgTablet?.webp, imgDesktop?.webp, imgDesktopXL?.webp]);

  // Memoize fallback src to prevent unnecessary recalculation
  const fallbackSrc = useMemo(() => 
    imgMobile?.webp || imgTablet?.webp || imgDesktop?.webp || "", 
    [imgMobile?.webp, imgTablet?.webp, imgDesktop?.webp]
  );

  return (
    <section className={styles.hero} aria-label={title}>
      <picture>
        
        {srcsetWebp && (
          <source 
            srcSet={srcsetWebp} 
            sizes="100vw" 
            type="image/webp"
          />
        )}
        
        <img
          className={styles.heroImg}
          decoding="async"
          fetchPriority="high"
          loading="eager"
          src={fallbackSrc}
          alt={altImg}
          sizes="100vw"
          width={1920} 
          height={1080}          
        />
      </picture>


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
        
        <Link to="/contacto" rel="noopener noreferrer" className={styles.buttonCATcaracteristicas}>
          Diseña tu viaje ahora
        </Link>
      </div>

      <div className={styles.overlay} aria-hidden="true" />
    </section>
  );
});

export default Hero;