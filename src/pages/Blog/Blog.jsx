import React from 'react';
import { Suspense, lazy } from 'react';
import japanPremium from '../../assets/portadas-nuevas-19-sep/hotelesImg/Blog_Portada_Japon_PRemium_.webp';
import LoadingSpinner from '../../Componentes/UI/LoadingSpinner.jsx';

const Card = lazy(() => import('../../Componentes/UI/Cards/CardBlog.jsx'));
import HeroSection from '../../Componentes/Sections/HeroSection';

import LetrasDoradasResponsive from '../../assets/titulosBlogs/TITULOBLOG.svg';
import LetrasDoradasDesktop from '../../assets/titulosDorados/GRANDEBLOG.svg';

import comoAgradecerBlog from '../../assets/ImagenesBlogs/Blog_Como_Saludar_Agradecer_Geishas_Japon_Premium.webp';
import comoComportarse from '../../assets/ImagenesBlogs/portadasCards/Blog_Comportamiento_Japon_Premium_Etiqueta_Cortesia_Sofisticacion_Cultural.webp';
import ComprasExperiencia from '../../assets/ImagenesBlogs/portadasCards/Blog_Compras_Japon_Premium_Experiencia_Exclusiva_Disenada.webp';
import FormaPago from '../../assets/ImagenesBlogs/portadasCards/Blog_Efectivo_Tarjeta_Mejor_Forma_Pagar_Japon_Premium.webp';
import InternetJapon from '../../assets/ImagenesBlogs/portadasCards/Blog_Internet_Japon_Premium_Conectividad_Sofisticada_Viaje_Conexion.webp';
import MejorEpoca from '../../assets/ImagenesBlogs/portadasCards/Blog_Mejor_Epoca_Para_Viajar_Japon_Premium.webp';
import OnsenTatuajes from '../../assets/ImagenesBlogs/portadasCards/Blog_Onsen_Tatuajes_Japon_Premium_Obstaculo_Experiencia_Elegancia_Cultura_Exclusividad.webp';
import ViajaSeguro from '../../assets/ImagenesBlogs/portadasCards/Blog_Seguro_Viajar_Solo_Japon_Premium_Explorar_Solitario_Descubrimiento_Introspeccion.webp';
import ViajarSinHablar from '../../assets/ImagenesBlogs/portadasCards/Blog_Viajar_Sin_Hablar_Japones_Japon_Premium_Dominar_Idioma_Barrera.webp';
import VisadoViajar from '../../assets/ImagenesBlogs/portadasCards/Blog_Visado_Viajar_Japon_Premium.webp';
import FlyingButton from '../../Componentes/UI/FlyingButtons/FlyingButton.jsx';


const data = [
    {
        text: "Adentrarte en la cultura japonesa va más allá de conocer los lugares: es comprender losgestos y palabras que transmiten respeto. En Japón PREMIUM, te compartimos esta guíapara que tus interacciones reflejen elegancia y consideración.",
        image: japanPremium,
        altImg: "Vista frontal del Templo Yasukuni en Tokio, Japón, con cielo nublado al atardecer.",
        letrasDoradasResponsive: LetrasDoradasResponsive,
        LetrasDoradasDesktop: LetrasDoradasDesktop,
    }];


const infoCards = [
    {
        key: 1,
        title: "Etiqueta y cultura en Japón",
        subText: "Una guía para vivir la tradición con respeto, elegancia y autenticidad.",
        image: comoComportarse,
        imageAlt: "CaminoKumano con kimono tradicional caminando por las calles de Gion, símbolo de la cultura japonesa",
        to: '/blog/como-comportarse'
    },
    {
        key: 2,
        title: "Compras con identidad en Japón",
        subText: "De la moda de lujo a la artesanía, la tecnología y la cultura pop.",
        image: ComprasExperiencia,
        imageAlt: "ViveJapon profesional en hotel de lujo japonés, brindando atención personalizada a turistas internacionales",
        to: '/blog/comprar-japon'
    },
    {
        key: 3,
        title: "Japón en cada estación",
        subText: "Sakura, momiji, festivales y nieve: un viaje distinto según la época del año.",
        image: MejorEpoca,
        imageAlt: "Exquisita PaqueCerezos japonesa con platos tradicionales servidos en restaurante de alta gama en Japón",
        to: '/blog/epoca-viajar-japon'
    },
    {
        key: 4,
        title: "Pagos en Japón: efectivo y tarjetas",
        subText: "Equilibrio entre tradición y modernidad para viajar sin contratiempos.",
        image: FormaPago,
        imageAlt: "CaminoKumano con kimono tradicional caminando por las calles de Gion, símbolo de la cultura japonesa",
        to: '/blog/forma-pago'
    },
    {
        key: 5,
        title: "Conectividad en Japón",
        subText: "Pocket Wi-Fi, eSIM y otras opciones para estar siempre en línea.",
        image: InternetJapon,
        imageAlt: "ViveJapon profesional en hotel de lujo japonés, brindando atención personalizada a turistas internacionales",
        to: '/blog/internet-japon'
    },
    {
        key: 6,
        title: "Tatuajes y onsen en Japón",
        subText: "Tradición, cambios sociales y opciones para disfrutar respetando la cultura.",
        image: OnsenTatuajes,
        imageAlt: "Exquisita PaqueCerezos japonesa con platos tradicionales servidos en restaurante de alta gama en Japón",
        to: '/blog/onsen-tatuajes'
    },
    {
        key: 7,
        title: "Cortesía y hospitalidad en Japón",
        subText: "Reverencias, expresiones y gestos que conectan con la esencia cultural.",
        image: comoAgradecerBlog,
        imageAlt: "CaminoKumano con kimono tradicional caminando por las calles de Gion, símbolo de la cultura japonesa",
        to: '/blog/saludar-blog'
    },
    {
        key: 8,
        title: "Seguridad en Japón",
        subText: "Un país confiable y preparado donde viajar es sinónimo de tranquilidad.",
        image: ViajaSeguro,
        imageAlt: "ViveJapon profesional en hotel de lujo japonés, brindando atención personalizada a turistas internacionales",
        to: '/blog/viaje-seguro'
    },
    {
        key: 9,
        title: "Rompiendo la barrera del idioma en Japón",
        subText: "Tecnología, guías privados y frases útiles para una comunicación auténtica.",
        image: ViajarSinHablar,
        imageAlt: "Exquisita PaqueCerezos japonesa con platos tradicionales servidos en restaurante de alta gama en Japón",
        to: '/blog/viaje-sin-japones'
    },
    {
        key: 10,
        title: "Requisitos de entrada a Japón para mexicanos",
        subText: "Visa, exenciones y trámites clave según la duración y propósito del viaje.",
        image: VisadoViajar,
        imageAlt: "CaminoKumano con kimono tradicional caminando por las calles de Gion, símbolo de la cultura japonesa",
        to: '/blog/visado-japon'
    }
];



export default function Blog() {
    return (
        <>
            <FlyingButton />
            <HeroSection data={data} />
            <Suspense
                fallback={<LoadingSpinner label="Cargando artículos del blog..." />}>
                <Card infoCards={infoCards} key={infoCards.key} />
            </Suspense>
        </>
    )
};

