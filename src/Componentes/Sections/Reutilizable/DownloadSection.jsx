import React, { useState } from 'react';
import styles from './DownloadSection.module.css';
import ItinerarioImg from '../../../assets/ItinerarioViajeJaponPremium.webp'

export default function DownloadSection({title, subtitle, dias, urlDescargar}) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Simula el proceso de descarga
    setTimeout(() => {
      setIsDownloading(false);

      window.open(urlDescargar);
      // Download initiated
    }, 500);
  };

  return (

    <section className={styles.sectionContainer}>

        <div className={styles.contenedor}>
      <img
        src={ItinerarioImg}
        alt="Japan Premium Travel Documentacion"
        className={styles.image}
      />
      <div className={styles.content}>
        <div className={styles.headerGroup}>
          <div className={styles.titleContainer}>
            <span className={styles.title}>{title}</span>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.tripInfo}>
            <div className={styles.tripTitle}>{subtitle}</div>
            <div className={styles.tripDuration}>{dias}</div>
          </div>
        </div>

        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className={styles.button}
          aria-label="Descargar brochure del viaje"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
          >
            <path
              d="M12.2617 16.075C12.1284 16.075 12.0034 16.0543 11.8867 16.013C11.7701 15.9717 11.6617 15.9007 11.5617 15.8L7.96172 12.2C7.76172 12 7.66572 11.7667 7.67372 11.5C7.68172 11.2333 7.77772 11 7.96172 10.8C8.16172 10.6 8.39939 10.496 8.67472 10.488C8.95005 10.48 9.18739 10.5757 9.38672 10.775L11.2617 12.65V5.5C11.2617 5.21667 11.3577 4.97934 11.5497 4.788C11.7417 4.59667 11.9791 4.50067 12.2617 4.5C12.5444 4.49934 12.7821 4.59534 12.9747 4.788C13.1674 4.98067 13.2631 5.218 13.2617 5.5V12.65L15.1367 10.775C15.3367 10.575 15.5744 10.479 15.8497 10.487C16.1251 10.495 16.3624 10.5993 16.5617 10.8C16.7451 11 16.8411 11.2333 16.8497 11.5C16.8584 11.7667 16.7624 12 16.5617 12.2L12.9617 15.8C12.8617 15.9 12.7534 15.971 12.6367 16.013C12.5201 16.055 12.3951 16.0757 12.2617 16.075ZM6.26172 20.5C5.71172 20.5 5.24105 20.3043 4.84972 19.913C4.45839 19.5217 4.26239 19.0507 4.26172 18.5V16.5C4.26172 16.2167 4.35772 15.9793 4.54972 15.788C4.74172 15.5967 4.97905 15.5007 5.26172 15.5C5.54439 15.4993 5.78205 15.5953 5.97472 15.788C6.16739 15.9807 6.26305 16.218 6.26172 16.5V18.5H18.2617V16.5C18.2617 16.2167 18.3577 15.9793 18.5497 15.788C18.7417 15.5967 18.9791 15.5007 19.2617 15.5C19.5444 15.4993 19.7821 15.5953 19.9747 15.788C20.1674 15.9807 20.2631 16.218 20.2617 16.5V18.5C20.2617 19.05 20.0661 19.521 19.6747 19.913C19.2834 20.305 18.8124 20.5007 18.2617 20.5H6.26172Z"
              fill="#290f04"
            />
          </svg>
          <span className={styles.buttonText}>
            {isDownloading ? 'Descargando...' : 'Descargar'}
          </span>
        </button>
      </div>
    </div>

        <div className={styles.headerWrap}>
            <p className={styles.subtitle}>
            Precios por persona con base al tipo de habitación
            </p>
        </div>


    </section>    
  );
}
