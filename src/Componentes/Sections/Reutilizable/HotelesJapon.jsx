import React from 'react';
import styles from "./HotelesJapon.module.css";
import HotelCard from './HotelCard';

const tituloHoteles = [
  {
    title: "Hoteles premium",
  }
]


function HotelesJapon({ hotels }) {
  return (
    <>
      {tituloHoteles.map(({ title }, index) => <TituloHoteles key={index} title={title} />)}
      <section className={styles.grid}>
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            imageUrl={hotel.imageUrl}
            country={hotel.country}
            location={hotel.location}
            hotelName={hotel.hotelName}
            alt={`${hotel.hotelName} hotel in ${hotel.location}, Japan`}
          />
        ))}
      </section>
    </>
  )
}

export default HotelesJapon;


function TituloHoteles({ title }) {
  return (
    <section className={styles.contenedor}>
      <div className={styles.titleRow}>
        <div className={styles.divider} />
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.divider} />
      </div>
    </section>
  )
}