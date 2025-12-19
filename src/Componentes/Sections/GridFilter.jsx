'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './GridFilter.module.css';

// Importar las portadas
import imageArtOriental from '../../assets/Itinerarios/PortadasItinerarios/Art_Oriental_Pabellon_Dorado_Portada_Japon_Premium.webp';
import imageCaminoKumano from '../../assets/Itinerarios/PortadasItinerarios/Camino_Kumano_Portada_Templo_Asakusa_Kannon.webp';
import imageDeSeulATokio from '../../assets/Itinerarios/PortadasItinerarios/De_Seul_A_Tokio_Japon_Premium_Palacio_Deoksugung_Portada.webp';
import imageElOrigenDelSol from '../../assets/Itinerarios/PortadasItinerarios/El_Origen_del_Sol_Japon_Premium_Portada_Parque_Nacional_Hakone.webp';
import imageElUltimoSamurai from '../../assets/Itinerarios/PortadasItinerarios/El_Ultimo_Samurai_Portada_Cataratas_Shiraito.webp';
import imageImperioDelSolNaciente from '../../assets/Itinerarios/PortadasItinerarios/Imperio_del_Sol_Naciente_Japon_Premium_Portada_Viaje_Tradicion_Modernidad_Paisajes.webp';
import imageImperioJapones from '../../assets/Itinerarios/PortadasItinerarios/Imperio_Japones_Japon_Premium_Templo_Ryoanji_Portada.webp';
import imageJaponChinaDragonesCerezos from '../../assets/Itinerarios/PortadasItinerarios/Japon_&_China_Dragones_&_Cerezos_Japon_Premium_Templo_Cielo.webp';
import imageJaponCoreaDelSur from '../../assets/Itinerarios/PortadasItinerarios/Japon_&_Corea_del_Sur_Japon_Premium_Portada_Palacio_Real_Gyeongbokgung.webp';
import imageJaponDubai from '../../assets/Itinerarios/PortadasItinerarios/Japon_&_Dubai_Premium_Cerezos_Oro_Portada.webp';
import imageJaponDubaiTotal from '../../assets/Itinerarios/PortadasItinerarios/Japon_&_Dubai_Total_Japon_Premium_Mezquita_Sheikh_Zayed_Portada.webp';
import imageJaponTailandiaATuAlcance from '../../assets/Itinerarios/PortadasItinerarios/Japon_&_Tailandia_A_Tu_Alcance_Japon_Premium_Gran_Palacio_Bangkok_Joyas_Lejano_Oriente.webp';
import imageJaponTailandiaRioKwai from '../../assets/Itinerarios/PortadasItinerarios/Japon_&_Tailandia_Rio_Kwai_Kanchanaburi_Japon_Premium_Portada.webp';
import imageJaponExpress from '../../assets/Itinerarios/PortadasItinerarios/Japon_Express_Portada_Japon_Premium_Santuario_Meiji.webp';
import imageJaponIncreible from '../../assets/Itinerarios/PortadasItinerarios/Japon_Increible_Japon_Premium_Puente_Nijubashi_Palacio.webp';
import imageSamuraiShaolines from '../../assets/Itinerarios/PortadasItinerarios/Samurai_&_Shaolines_Japon_Premium_Portada_Gran_Muralla.webp';
import imageTitanesDelPacifico from '../../assets/Itinerarios/PortadasItinerarios/Titanes_del_Pacifico_Portada_Japon_Premium_Cataratas_Shirato.webp';

// Sample data - replace with your actual cards
const defaultCards = [
  {
    id: '1',
    slug: 'art-oriental',
    title: 'Art Oriental',
    category: '11 días - 13 días',
    image: imageArtOriental,
    description: 'Experiencia romántica'
  },
  {
    id: '2',
    slug: 'camino-de-kumano',
    title: 'Camino de Kumano',
    category: '14 días - 15 días',
    image: imageCaminoKumano,
    description: 'Para los valientes'
  },
  {
    id: '3',
    slug: 'seul-a-tokio',
    title: 'Seul a Tokio',
    category: '14 días - 15 días',
    image: imageDeSeulATokio,
    description: 'Viaje en tren'
  },
  {
    id: '4',
    slug: 'origen-del-sol',
    title: 'Origen del Sol',
    category: '11 días - 13 días',
    image: imageElOrigenDelSol,
    description: 'Lo más popular'
  },
  {
    id: '5',
    slug: 'ultimo-samurai',
    title: 'Ultimo Samurai',
    category: '16 días - 18 días',
    image: imageElUltimoSamurai,
    description: 'Perfecta para parejas'
  },
  {
    id: '6',
    slug: 'imperio-del-sol',
    title: 'Imperio del Sol Naciente',
    category: '11 días - 13 días',
    image: imageImperioDelSolNaciente,
    description: 'Ruta de montaña'
  },
  {
    id: '7',
    slug: 'imperio-japones',
    title: 'Imperio Japones',
    category: '8 días - 10 días',
    image: imageImperioJapones,
    description: 'Primera clase'
  },
  {
    id: '8',
    slug: 'japon-y-china',
    title: 'Japon y China: Dragones y Cerezos',
    category: '16 días - 18 días',
    image: imageJaponChinaDragonesCerezos,
    description: 'Más vendido'
  },

  {
    id: '9',
    slug: 'japon-corea-del-sur',
    title: 'Japon y Corea del Sur: Corazón del lejano Oriente',
    category: '11 días - 13 días',
    image: imageJaponCoreaDelSur,
    description: 'Más vendido'
  },

  {
    id: '10',
    slug: 'japon-y-dubai-maravilloso',
    title: 'Japon y Dubai: Maravilloso',
    category: '11 días - 13 días',
    image: imageJaponDubai,
    description: 'Más vendido'
  },

  {
    id: '11',
    slug: 'japon-y-dubai-total',
    title: 'Japon y Dubai: Total',
    category: '14 días - 15 días',
    image: imageJaponDubaiTotal,
    description: 'Más vendido'
  },

  {
    id: '12',
    slug: 'japon-y-tailandia-joyas-lejano-oriente',
    title: 'Japon y Tailandia: Joyas del lejano Oriente',
    category: '14 días - 15 días',
    image: imageJaponTailandiaATuAlcance,
    description: 'Más vendido'
  },

  {
    id: '13',
    slug: 'japon-y-tailandia-lo-mejor',
    title: 'Japon y Tailandia: Lo Mejor',
    category: '16 días - 18 días',
    image: imageJaponTailandiaRioKwai,
    description: 'Más vendido'
  },

  {
    id: '14',
    slug: 'japon-express',
    title: 'Japon Express',
    category: '8 días - 10 días',
    image: imageJaponExpress,
    description: 'Más vendido'
  },

  {
    id: '15',
    slug: 'japon-increible',
    title: 'Japon Increible',
    category: '11 días - 13 días',
    image: imageJaponIncreible,
    description: 'Más vendido'
  },

  {
    id: '16',
    slug: 'samurais-y-shaolines',
    title: 'Samurais y Shaolines',
    category: '14 días - 15 días',
    image: imageSamuraiShaolines,
    description: 'Más vendido'
  },
  {
    id: '17',
    slug: 'titanes-del-pacifico',
    title: 'Titanes del Pacifico',
    category: '8 días - 10 días',
    image: imageTitanesDelPacifico,
    description: 'Más vendido'
  },
];

const categories = ['8 días - 10 días', '11 días - 13 días', '14 días - 15 días', '16 días - 18 días'];

function GridFilter({
  title = 'Nuestros itinerarios',
  subtitle = 'Explora los mejores destinos y experiencias',
  cards = defaultCards
}) {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState(null);

  // Filter cards based on active filter
  const filteredCards = activeFilter
    ? cards.filter(card => card.category === activeFilter)
    : cards;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            {title}
          </h2>
          <p className={styles.subtitle}>
            {subtitle}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={styles.filterContainerOuter}>
          <div className={styles.filterContainerInner}>
            {/* All Button */}
            <motion.button
              onClick={() => setActiveFilter(null)}
              className={`${styles.button} ${activeFilter === null
                ? styles.buttonActive
                : styles.buttonInactive
                }`}
              whileHover={{ scale: 0.90 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver todos
            </motion.button>

            {/* Category Buttons */}
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`${styles.button} ${styles.buttonCapitalize} ${activeFilter === category
                  ? styles.buttonActive
                  : styles.buttonInactive
                  }`}
                whileHover={{ scale: 0.90 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards Grid - Scrollable Container */}
      <div className={styles.cardsContainer}>
        <motion.div
          layout
          className={styles.cardsGrid}
        >
          {filteredCards.map((card, index) => (
            <motion.div
              key={card.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => router.push(`/itinerarios/${card.slug}`)}
              className={`${styles.card} group`}
            >
              {/* Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className={`${styles.cardImage} group-hover:scale-110`}
              />

              {/* Overlay */}
              <div className={styles.overlay} />

              {/* Category Badge */}
              <div className={styles.badge}>
                <span className={styles.badgeText}>
                  {card.category}
                </span>
              </div>

              {/* Content */}
              <div className={styles.cardContent}>
                <h3 className={`${styles.cardTitle} group-hover:translate-y-0`}>
                  {card.title}
                </h3>
                {card.description && (
                  <p className={styles.cardDescription}>
                    {card.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* No Results Message */}
      {filteredCards.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={styles.noResults}
        >
          <p className={styles.noResultsText}>
            No hay experiencias en esta categoría
          </p>
        </motion.div>
      )}
    </section>

  );
}

export default GridFilter;
