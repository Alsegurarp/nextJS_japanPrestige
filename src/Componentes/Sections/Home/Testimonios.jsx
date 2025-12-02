import React, { useMemo, useState } from 'react';

import TuristaJapon from '../../../assets/indexImagenes/eduardo_reyes_cliente.webp';
import FamiliaJapon from '../../../assets/indexImagenes/arantza_iriarte_clienta.webp';
import ParejaJapon from '../../../assets/indexImagenes/ana_laura_montes_cliente.webp';

import EstrellaGold from '../../../assets/estrellaGold.svg';
// import LogoJapon from '/FAVICON.svg'
import LogoJapon from '/mobile_logo_japon.svg';


import styles from "./Testimonios.module.css";
import TestimonioCard from '../../UI/Cards/TestimonioCard';

const Testimonios = React.memo(function Testimonios() {
  const testimoniosLista = useMemo(() => ([
    {
      id: "1",
      src: FamiliaJapon,
      alt: "Grupo de viajeros explorando un santuario en Japón, parte del tour guiado de Premium Japón.",
      text: "Recorrer Japón con mis amigas fue una experiencia llena de magia y descubrimientos. Cada paisaje y cada sonrisa nos recordaron por qué este viaje es único. ¡Anímate a vivirlo!",
      textMinimo: "Siempre había soñado con descubrir los tesoros de Japón a través del Camino de Kumano...",
      estrella: EstrellaGold,
      nombre: "María Alveldrado",
    },
    {
      id: "2",
      src: TuristaJapon,
      alt: "Pareja de turistas latinoamericanos disfrutando de un tour guiado por Japón.",
      text: "Japón superó todo lo que imaginé: cultura, modernidad y una calma que se siente en el alma. Una experiencia que marca para siempre. ¡No esperes más para vivirla!",
      textMinimo: "Viajar a Japón fue un sueño hecho realidad. Cada rincón, cada experiencia, cada tradición...",
      estrella: EstrellaGold,
      nombre: "Andrés Molina",
    },
    {
      id: "3",
      src: ParejaJapon,
      alt: "Pareja caminando entre cerezos en flor en Japón, ideal para lunas de miel y escapadas románticas.",
      text: "Japón superó todas nuestras expectativas: cultura, paz y maravillas en cada rincón. No lo imagines, vívelo. Esta experiencia cambia la forma de ver el mundo.",
      textMinimo: "Desde el majestuoso Pabellón Dorado hasta los jardines tranquilos que...",
      estrella: EstrellaGold,
      nombre: "Ana y Tomás Montes",
    },
  ]), []);

  // panel visible by default with the first testimonial
  const [selectedId, setSelectedId] = useState(testimoniosLista[0].id);
  const selected = testimoniosLista.find(t => t.id === selectedId) ?? testimoniosLista[0];

  const handleCardClick = (id) => setSelectedId(id);

  return (
    <section className={styles.containerTestimonios}>
      <h2 className={styles.testimoniosTitle} style={{ fontFamily: "nohemi" }}>
        Historias que nos recomiendan
      </h2>

      <div className={styles.columnas}>
        <div className={styles.testimoniosDescription} role="listbox" aria-label="Listado de testimonios">
          {testimoniosLista.map((t) => (
            <TestimonioCard
              key={t.id}
              id={t.id}
              src={t.src}
              alt={t.alt}
              textMinimo={t.textMinimo}
              nombre={t.nombre}
              onQuestionClick={handleCardClick}
              isSelected={selectedId === t.id}
            />
          ))}
        </div>

        <div className={styles.bottomPanel} aria-labelledby="testimonio-title">
          <div
            key={selectedId}
            className={styles.panelContent}
          >
            <img
              src={selected.src}
              alt={selected.alt}
              className={styles.panelImage}
              loading="lazy"
            />
            <div className={styles.panelText}>
              <img 
                loading="lazy" 
                alt="Logo oficial de Japón Premium, agencia especializada en experiencias de lujo en Japón para viajeros latinoamericanos"
                src={LogoJapon}
                className={styles.logoJapon}
              />
              <p className={styles.panelQuote}>{selected.text}</p>
              <h3 id="testimonio-title" className={styles.panelName}>{selected.nombre}</h3>
              <div className={styles.testimonioEstrellas}>
                {Array.from({ length: 5 }, (_, i) => (
                  <img
                    src={selected.estrella}
                    key={i}
                    alt="estrella"
                    className={styles.starIcon}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Testimonios;