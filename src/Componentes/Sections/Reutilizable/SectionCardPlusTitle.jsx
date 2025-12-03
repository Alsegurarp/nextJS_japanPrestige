'use client';

import React from 'react';
import Image from 'next/image';
import styles from './SectionCardPlusTitle.module.css';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';


const SectionCardPlusTitle = React.memo(function SectionCardPlusTitle({ data }) {

  return (
    <>
      <TitleContenido />
      {data.map((d, index) => (
        <Card
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

export default SectionCardPlusTitle;


function TitleContenido() {

  return (
    <div style={{ justifyItems: "center", height: "15vh", alignContent: "center", backgroundColor: "#111111" }}>
      <h2 style={{ fontFamily: "nohemi", fontSize: "24px", color: "white" }}>Viajes a japón combinados</h2>
    </div>
  )
}


function Card({ image, index, altText, title, subtitle, dias, text }) {
  const ref = useScrollAnimation({
    animation: index % 2 === 1 ? 'fade-left' : 'fade-right',
    delay: index * 200,
    duration: 1
  });

  return (
    <div className={`${index % 2 === 1 ? `${styles.reverse} ${styles.cardContainer}` : `${styles.cardContainer}`}`}>
      <div ref={ref} className={styles.cardText}>
        <div className={styles.cardContenidoStyle}>
          <div style={{ marginBottom: "10px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <h2 className={styles.cardContainerh2} style={{ fontFamily: "nohemi", textTransform: "uppercase" }}>{title}</h2>
            <span style={{ fontFamily: "nohemi", textTransform: "uppercase", fontWeight: "400" }}>{subtitle}</span>
          </div>
          <div style={{ textAlign: "start" }}>
            <span style={{ fontFamily: "nohemi", textTransform: "uppercase" }}>{dias}</span>
            <p className={styles.cardContainerP} style={{ fontFamily: "nohemi" }}>{text}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <ButtonEstilo texto={"Más información"} color={"#121212"} border={"1px solid white"} />
            <ButtonEstilo marginLeft={'30px'} />
          </div>
        </div>
      </div>
      <div className={styles.cardImage}>
        <Image src={image} alt={altText} loading="lazy" width={600} height={450} priority={false} />
      </div>
    </div>
  );
}

function ButtonEstilo({ texto = "Cotiza ahora", color = "#482215", border = "none", marginLeft = "none" }) {

  const estiloButton = {
    backgroundColor: color,
    color: "white",
    padding: "12px 15px",
    fontSize: "14px",
    cursor: "pointer",
    borderRadius: "5px",
    alignSelf: "center",
    border: border,
    marginLeft: marginLeft,
  }

  return (
    <>
      <button style={estiloButton}>
        {texto}
      </button>
    </>
  )
}