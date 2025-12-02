import React from "react";
import styles from "./LiderCard.module.css";


const descripciones = [
    {
        id: "01",
        title: "Visión de Nuestros Directores",
        text: "Detrás de cada viaje único hay un equipo que lidera con visión, pasión y compromiso. Nuestros directores comerciales comparten contigo su perspectiva sobre lo que significa crear experiencias memorables, cuidando cada detalle para que cada itinerario supere expectativas. Sus palabras reflejan la esencia de nuestra filosofía: excelencia, dedicación y el firme propósito de transformar cada viaje en un recuerdo inolvidable."
    }
]


const Leadership = ({leaders}) => {
  
    return (
    <section className={styles.section}>

        <DescripcionNosotros descripciones={descripciones}/>

        <div className={styles.dividerCardLider}>
        {leaders.map((item, i) => (
            <LiderCard item={item} i={i} key={item.name} />
        ))}
        </div>
      
    </section>
    );

};

export default Leadership;


function DescripcionNosotros({descripciones}) {

    return(
        <>
        {descripciones.map((d) => (
            <div className={styles.DescripcionNosotros} key={d.id}>
                <h2 className={styles.DescripcionTitle}>{d.title}</h2>
                <p className={styles.DescripcionParagraph}>{d.text}</p>
            </div>
        ))}
        </>
    );
}




function LiderCard({item, i}) {

    return(
        <div
          key={i}
          className={`${styles.row} ${
            item.layout === "image-left" ? styles.left : styles.right
          }`}
        >
          {/* Image card */}
          <figure className={styles.photoCard}>
            <div className={styles.aspectWrapper}>
              <img
                src={item.photo}
                alt={`${item.name} - ${item.role}`}
                className={styles.photo}
                loading="lazy"
              />
            </div>
          </figure>

          {/* Text card */}
          <article className={styles.textCard}>
            <header className={styles.header}>
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.role}>{item.role}</p>
              <span className={styles.rule} />
            </header>

            <p className={styles.paragraph}>{item.paragraph}</p>
          </article>
        </div>
    );
}