import React from "react";
import styles from "./NosotrosListado.module.css";

const NosotrosListado = () => {


  const leftTimelineItems = [
    { year: "2005", description: "Nacimos como Viajes Liberación, iniciando operaciones con entusiasmo y dedicación al servicio del viajero." },
    { year: "2007", description: "Consolidamos una red de atención más amplia, manteniendo la cercanía y confianza con nuestros viajeros frecuentes." },
    { year: "2009", description: "Fortalecimos alianzas estratégicas con proveedores clave para ofrecer una experiencia aún más premium." },
    { year: "2012", description: "Oficializamos el nombre Viajes PREMIUM®, marcando una nueva etapa como operador turístico especializado." },
    { year: "2021", description: "Reactivamos operaciones con itinerarios rediseñados y protocolos de bioseguridad en todos los destinos." },
    { year: "2025", description: "Celebramos 20 años de trayectoria con nuevos destinos, alianzas internacionales y una visión más global que nunca." }
  ];

  const rightTimelineItems = [
    { year: "2006", description: "Abrimos nuestra primera sucursal oficial en el centro de la Ciudad de México, dando el primer paso hacia la expansión." },
    { year: "2008", description: "Incorporamos nuevos destinos internacionales a nuestro catálogo, elevando la experiencia de viaje a otro nivel." },
    { year: "2010", description: "Renacimos como Turismo Santa Fe, reflejando nuestra evolución y compromiso con la excelencia operativa." },
    { year: "2020", description: "Nos adaptamos a los retos de la pandemia, manteniendo el compromiso con nuestros clientes a través de atención personalizada y cambios flexibles." },
    { year: "2022", description: "Apostamos por experiencias más íntimas, selectas y profundas: nació la línea Japón Premium." }
  ];

  const items = [...leftTimelineItems, ...rightTimelineItems].sort(
    (a, b) => parseInt(a.year, 10) - parseInt(b.year, 10)
  );

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Trayectoria que marca la diferencia</h2>
      </div>

      {/* Mobile */}
      <div className={styles.mobileTimeline}>
        {items.map((item, i) => (
          <div key={`${item.year}-${i}`} className={styles.mobileItem}>
            <span className={styles.mobileDot} />
            <span className={styles.mobileLine} />
            <div className={styles.mobileContent}>
              <div className={styles.mobileYear}>{item.year}</div>
              <p className={styles.mobileDescripcion}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div className={styles.desktopWrap}>
        <span className={styles.centerLine} />
        <div className={styles.desktopList}>
          {items.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={`${item.year}-d-${index}`}
                className={`${styles.desktopItem} ${
                  isLeft ? styles.justifyEnd : styles.justifyStart
                }`}
              >
                <span className={styles.desktopDot} />
                <div
                  className={`${styles.desktopContent} ${
                    isLeft ? styles.rightAligned : styles.leftAligned
                  }`}
                >
                  <div className={styles.desktopYear}>{item.year}</div>
                  <p className={styles.desktopDesc}>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NosotrosListado;
