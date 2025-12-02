import React from 'react';
import HeroSection from '../../../../Componentes/Sections/HeroSection.jsx';
import Image from 'next/image';
import styles from './ComprarJapon.module.css';

import HeroImage from '../../../../assets/ImagenesBlogs/PortadasHero/Blog_Como_Comprar_Hero.webp';


import LetrasDoradasResponsive from '../../../../assets/titulosBlogs/quecompraMOVIL.svg';
import LetrasDoradasDesktop from '../../../../assets/titulosBlogs/quecomprarWEB.svg';

import imagen1 from '../../../../assets/ImagenesBlogs/ComoComprar/Blog_1_Compras_Japon_Premium_Moda_Lujo_Ginza.webp';
import imagen2 from '../../../../assets/ImagenesBlogs/ComoComprar/Blog_2_Compras_Japon_Premium_Artesania_Tradicional_Kioto.webp';
import imagen3 from '../../../../assets/ImagenesBlogs/ComoComprar/Blog_3_Compras_Japon_Premium_Tecnologia_Vanguardia.webp';
import imagen4 from '../../../../assets/ImagenesBlogs/ComoComprar/Blog_4_Compras_Japon_Premium_Recuerdos_Significado_Deauma_Furoshiki.webp';
import imagen5 from '../../../../assets/ImagenesBlogs/ComoComprar/Blog_5_Compras_Japon_Cultura_Pop_Rarezas_Nakano_Broadway.webp';
import FlyingButton from '../../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';

const Herodata = [
{
    text: "Explorar Japón en solitario es una invitación al descubrimiento y la introspección. En Japón  PREMIUM, sabemos que la verdadera aventura comienza cuando la seguridad deja de ser  una preocupación. Por eso, aquí te explicamos por qué viajar solo a Japón es no solo  posible, sino extraordinariamente tranquilo.",
    image: HeroImage,
    altImg:"Vista frontal del Templo Yasukuni en Tokio, Japón, con cielo nublado al atardecer.",
    letrasDoradasResponsive: LetrasDoradasResponsive,
    LetrasDoradasDesktop: LetrasDoradasDesktop,
    bgPosition: "50% 0%"
}];

const data = [
            {
                title: 'Moda y lujo en Ginza y Omotesando',
                subtitle: 'COMPRAS DE ALTA GAMA',
                dias: 'BOUTIQUES · DISEÑO · EXCLUSIVIDAD',
                text: {
                    primerParrafo: "Explora las boutiques de lujo en barrios como Ginza y Omotesando: desde diseñadores japoneses a marcas internacionales. Atención meticulosa, sastrería impecable y piezas de diseño distintivo con materiales de alta calidad; muchas tiendas ofrecen tax-free y empaques exquisitos.",
                    segundoParrafo: "Consejo: Visita durante días laborables para evitar multitudes y recibir atención personalizada. No dudes en pedir recomendaciones al personal, que suele hablar inglés y está bien informado sobre las últimas tendencias.",
                    tercerParrafo: "Además de ropa, explora joyería, relojes y accesorios exclusivos que reflejan la artesanía japonesa y el diseño contemporáneo."
                },
                image: imagen1,
                altText:
                'Pareja paseando con bolsas de compra en un distrito elegante de Tokio, símbolo de lujo y moda.'
            },
            {
                title: 'Artesanía tradicional de Kioto',
                subtitle: 'MAESTROS ARTESANOS',
                dias: 'KIMONO · LACA · CERÁMICA · ABANICOS',
                text: {
                    primerParrafo: "Sumérgete en talleres y mercados de Kioto. Las piezas artesanales—desde abanicos y cerámica hasta telas teñidas y lacas—se elaboran con técnicas centenarias. Compra con calma y busca certificaciones de origen para llevarte obras con autenticidad y valor cultural.",
                    segundoParrafo: "Consejo: Visita tiendas especializadas y mercados locales como Nishiki para encontrar piezas únicas. Pregunta sobre el proceso de fabricación y la historia detrás de cada artículo; los artesanos suelen estar encantados de compartir su conocimiento.",
                    tercerParrafo: "Considera adquirir un kimono auténtico o una pieza de cerámica hecha a mano como recuerdo especial de tu viaje."
                },
                image: imagen2,
                altText:
                'Artesano japonés mostrando un abanico hecho a mano en una tienda tradicional de Kioto.'
            },
            {
                title: 'Tecnología de vanguardia',
                subtitle: 'AKIHABARA Y MÁS',
                dias: 'CÁMARAS · CONSOLAS · AUDIO · GADGETS',
                text: {
                    primerParrafo: "Japón es sinónimo de innovación: de cámaras y consolas a audio Hi-Res y kits de robótica. Cada dispositivo refleja precisión y creatividad.",
                    segundoParrafo: "Consejo: verifica compatibilidades de voltaje y garantías internacionales; muchas tiendas ofrecen compras tax-free con pasaporte.",
                    tercerParrafo: "Explora barrios como Akihabara en Tokio, donde la tecnología de última generación se exhibe en tiendas especializadas y grandes almacenes."
                },
                image: imagen3,
                altText:
                'Viajeros en una zona comercial luminosa repleta de letreros, señalando escaparates tecnológicos.'
            },
            {
                title: 'Recuerdos con significado',
                subtitle: 'OBJETOS CON ALMA',
                dias: 'DARUMA · OMAMORI · TÉ · DULCES',
                text: {
                    primerParrafo: "Los recuerdos en Japón son más que objetos; son portadores de historia y simbolismo. Desde darumas que representan metas y perseverancia, hasta omamoris que ofrecen protección y buena suerte, cada artículo tiene un significado especial.",
                    segundoParrafo: "Consejo: Elige obsequios que cuenten historias: daruma para marcar metas, amuletos omamori, té matcha selecto o artesanías locales. Prefiere piezas hechas en Japón y evita imitaciones. Un envoltorio cuidado y una nota personal convertirán tu recuerdo en un regalo memorable.",
                    tercerParrafo: "Visita tiendas de recuerdos en templos y santuarios, así como mercados locales, para encontrar artículos auténticos que reflejen la cultura japonesa."
                },
                image: imagen4,
                altText:
                'Viajera sosteniendo un daruma rojo en una tienda de recuerdos, simbolizando metas y buena suerte.'
            },
            {
                title: 'Cultura pop y rarezas en Nakano Broadway',
                subtitle: 'MANGA · ANIME · VINTAGE',
                dias: 'FIGURAS · POSTERS · COLECCIONABLES',
                text: {
                    primerParrafo: "Nakano Broadway es un paraíso para los amantes del manga, anime y cultura pop. Tiendas especializadas ofrecen desde ediciones limitadas y vinilos hasta cámaras vintage y curiosidades de la cultura otaku.",
                    segundoParrafo: "Consejo: Lleva efectivo, revisa el estado de las piezas y pregunta por sellos de autenticidad; muchas compras son tax-free. Explora cada rincón para descubrir tesoros escondidos y ediciones raras que no encontrarás en ningún otro lugar.",
                    tercerParrafo: "Además de tiendas, Nakano Broadway alberga cafés temáticos y eventos especiales que celebran la cultura pop japonesa, ofreciendo una experiencia completa para los fans."
                },
                image: imagen5,
                altText:
                'Dos viajeras caminando por un pasillo de Nakano Broadway, observando vitrinas llenas de coleccionables.'
            }
]

function ComprarJapon() {

      return (
    <>
    <FlyingButton/>
    <HeroSection data={Herodata} />
      {data.map((d, index) => (
        <Card
          key={d.title}
          index={index}
          title={d.title}
          subtitle={d.subtitle}
          dias={d.dias}
          text={d.text}
          image={d.image}
          altText={d.altText}
        />
      ))}
    </>
  );
}

export default ComprarJapon

function Card({ image, index, altText, title, subtitle, dias, text}) {


  return (
    <div className={`${index % 2 === 1 ? `${styles.reverse} ${styles.card_container}` : `${styles.card_container}`}`}>
        <div className={styles.card_text} data-aos={index % 2 === 1 ? 'fade-left' : 'fade-right'} data-aos-delay={index * 200} data-aos-duration="1000">
          <div className={styles.cardContenidoStyle}>
            <div style={{marginBottom: "10px", display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
              <h2 className={styles.cardContainerh2} style={{fontFamily: "nohemi", textTransform: "uppercase"}}>{title}</h2>
              <span style={{fontFamily: "nohemi", textTransform: "uppercase", fontWeight: "400"}}>{subtitle}</span>
            </div>
              <div style={{textAlign: "start"}}>
                <span style={{fontFamily: "nohemi", textTransform: "uppercase"}}>{dias}</span>
                <p className={styles.cardContainerP} style={{fontFamily: "nohemi"}}>{text.primerParrafo}</p>
                  <br/>
                <p className={styles.cardContainerP} style={{fontFamily: "nohemi"}}>{text.segundoParrafo}</p>
                  <br/>
                <p className={styles.cardContainerP} style={{fontFamily: "nohemi"}}>{text.tercerParrafo}</p>
              </div>
     </div>
      </div>
      <div className={styles.card_image}>
          <Image src={image} alt={altText} loading="lazy" width={600} height={400} priority={false}/>
        </div>
    </div>
  );
}
