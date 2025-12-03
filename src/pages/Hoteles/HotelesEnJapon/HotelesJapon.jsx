'use client';

import React, { useState, useEffect, Suspense, lazy } from 'react';
import HeroSection from '../../../Componentes/Sections/HeroSection.jsx';
import HeroImage from '../../../assets/portadas-nuevas-19-sep/hotelesPortadas/portada_hoteles_en_japon.webp';
const Buscador = lazy(() => import('../../../Componentes/Hoteles/Carrucel/Buscador.jsx'));


import LetrasDoradasResponsive from '../../../assets/titulosDorados/hotelesSection/hotelesjaponmovil.svg';
import LetrasDoradasDesktop from '../../../assets/titulosDorados/hotelesSection/hotelesjapon.svg';

import NoNavegaSection from '../../../Componentes/Hoteles/HotelesInicio/Componente/NoNavegaSection.jsx';

// atami
import hotel1 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/atami/hotel_resorpia_atami_japon.webp';

// matsuyama
import hotelMatsuyama from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/MATSUYAMA/Hotel_Ana_Crowne_Plaza_Matsuyama.webp';

// nachikatsuura
import hotelNachikatsuura from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/NACHIKATSURA/Hotel_Katsuura_Gyoen.webp';

// ikaho 
import hotelMoriakiIkaho from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/ikaho/hotel_moriaki_ryokan.webp';

// Kanazawa
import hotelKanazawa from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/kanazawa/Hotel_tokyu_kanazawa.webp';

// takayama
import hotelTakayama from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/takayama/Hotel_Associa_Takayama_resort.webp';

// toba 
import hotelToba from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/toba/Hotel_International_Toba.webp';

// wakayama 
import hotelWayakama from '../../../assets/Itinerarios/HotelesDeItinerarios/nuevosHotelesItinerarios/Japon/wakayama/Hotel_Granvia_Wakayama.webp';

// hakone
import hotel2 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/hakone/Hotel_Hakone_Kowakien_Ten_Yu.webp';
import hotel3 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/hakone/Hotel_Hakone_Sengokuhara_Prince.webp';
import hotel4 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/hakone/Hotel_Resorpia_Hakone.webp';
import hotel5 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/hakone/Hotel_Ryuguden_en_hakone.webp';
import hotel6 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/hakone/Hotel_Yumoto_Fujiya.webp';

// osaka
import hotel10 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/osaka/Hotel_New_Otani_Osaka.webp';
import hotel11a from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/osaka/Hotel_Ana_Crowne_Plaza_Osaka.webp';
import hotel11b from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/osaka/Hotel_Candeo_S_Osaka_Namba.webp';
import hotel11c from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/osaka/Hotel_Hearton_Nishi_Umeda.webp';
import hotel11d from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/osaka/Hotel_Hinode_Osaka.webp';
import hotel11e from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/osaka/Hotel_Imperial_Osaka.webp';
import hotel11f from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/osaka/hotel_Monterey_Grassmere_Osaka.webp';
import hotel11g from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/osaka/Hotel_New_Otani_Osaka.webp';
import hotel11h from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/osaka/Hotel_Rihga_Royal_Osaka.webp';
import hotel11i from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/osaka/Hotel_Sheraton_Miyako_Osaka.webp';
import hotel11j from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/osaka/Hotel_Vischio_Osaka_By_Granvia.webp';

// okayama
import hotel12a from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/okayama/Hotel_Ana_Crowne_Plaza_Okayama.webp';
import hotel12b from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/okayama/Hotel_Daiwa_Roynet_kayama_Ekimae.webp';
import hotel12c from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/okayama/Hotel_Granvia_Okayama.webp';
import hotel12d from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/okayama/Hotel_Mitsui_Garden_Okayama.webp';

// tokio
import hotel13 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/tokio/Hotel_Grand_Prince_Takanawa.webp';
import hotel13a from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/tokio/Hotel_Hyatt_Regency_Tokyo.webp';
import hotel14 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/tokio/Hotel_New_Otani_Tokyo_Gardent_Tower.webp';
import hotel15 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/tokio/Hotel_Park_Hyatt_Tokyo.webp';
import hotel16 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/tokio/Hotel_Shinagawa_Prince.webp';
import hotel16a from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/tokio/Hotel_The_Royal_Park_Tokyo_Shiodome.webp';
import hotel16b from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/tokio/Hotel_Tokyo_Dome.webp';
import hotel16c from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/tokio/Hotel_Toshi_Center_Tokyo.webp';
import hotel16d from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/tokio/Hotel_Villa_Fontaine_Roppongi.webp';
import hotel16e from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/tokio/Hotel_Villa_Fontaine_Shiodome.webp';

// nagano
import hotel17 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/NAGANO/Hotel_Metropolitan_Nagano.webp';
import hotel17a from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/NAGANO/Hotel_Nagano_Tokyu_Rei.webp';

// hiroshima
import hotel18a from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/hiroshima/hotel_daiwa_roynet_hiroshima.webp';
import hotel18b from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/hiroshima/hotel_grand_prince_hiroshima.webp';
import hotel18c from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/hiroshima/hotel_granvia_hiroshima.webp';
import hotel18d from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/hiroshima/Hotel_Rihga_Royal_Hiroshima.webp';
import hotel18e from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/hiroshima/Hotel_Sheraton_Grand_Hiroshima.webp';

// kioto
import hotel20a from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/kioto/Hotel_Ana_Crowne_Plaza_Kyoto.webp';
import hotel20b from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/kioto/Hotel_Cross_Kyoto.webp';
import hotel20c from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/kioto/Hotel_Daiwa_Roynet_ariake.webp';
import hotel20d from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/kioto/Hotel_Daiwa_Roynet_ekimae.webp';
import hotel20e from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/kioto/Hotel_Granvia_Kyoto.webp';
import hotelHachijoguchi from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/kioto/Hotel_Royal_Twin_Kyoto_Hachijoguchi.webp';
import hotel20g from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/kioto/Hotel_Kyoto_Tokyu.webp';
import hotel20h from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/kioto/Hotel_Miyako_Kyoto_Hachijo.webp';
import hotel20i from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/kioto/Hotel_Nikko_Princess_Kyoto.webp';
import hotel20j from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/kioto/Hotel_Okura_Kyoto.webp';
import hotel20k from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/kioto/Hotel_Royal_Twin_Kyoto_Hachijoguchi.webp';

// kobe
import hotel22 from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/KOBE/Hotel_Ana_Crowne_Plaza_Kobe.webp';
import hotel22a from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/KOBE/Hotel_Kobe_Meriken_Park_Oriental.webp';

// kawaguchiko
import hotel23a from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/kawaguchiko/Hotel_Fuji_View.webp';
import hotel23b from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/kawaguchiko/Hotel_Oike_Ryokan.webp';
import hotel23c from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/kawaguchiko/Hotel_Onsen_Mifujien.webp';
import hotel23d from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/kawaguchiko/Hotel_Regina_Kawaguchiko.webp';
import hotel23e from '../../../assets/Itinerarios/HotelesItinerariosNuevos/Japon/kawaguchiko/Hotel_Yukemuri_Fuji_No_Yado_Ooike.webp';

import AtamiImagen from '../../../assets/Itinerarios/buscadorImagenes/atami_japon.webp';
import GeroImagen from '../../../assets/Itinerarios/buscadorImagenes/gero_japon.webp';
import hakoneImagen from '../../../assets/Itinerarios/buscadorImagenes/hakone_japon.webp';
import hiroshimaImagen from '../../../assets/Itinerarios/buscadorImagenes/hiroshima_japon.webp';
import IkahoImagen from '../../../assets/Itinerarios/buscadorImagenes/ikaho_japon.webp';
import KanazawaImagen from '../../../assets/Itinerarios/buscadorImagenes/kanazawa_japon.webp';
import KawaguchikoImagen from '../../../assets/Itinerarios/buscadorImagenes/kawaguchiko_japon.webp';
import kiotoImagen from '../../../assets/Itinerarios/buscadorImagenes/kioto_japon.webp';
import kobeImagen from '../../../assets/Itinerarios/buscadorImagenes/kobe_japon.webp';
import MatsuyaImagen from '../../../assets/Itinerarios/buscadorImagenes/matsuya_japon.webp';
import nachikatsuraImagen from '../../../assets/Itinerarios/buscadorImagenes/nachikatsura_japon.webp';
import naganoImagen from '../../../assets/Itinerarios/buscadorImagenes/nagano_japon.webp';
import okayamaImagen from '../../../assets/Itinerarios/buscadorImagenes/okayama_japon.webp';
import OsakaImagen from '../../../assets/Itinerarios/buscadorImagenes/osaka_japon.webp';
import takayamaImagen from '../../../assets/Itinerarios/buscadorImagenes/takayama_japon.webp';
import tobaImagen from '../../../assets/Itinerarios/buscadorImagenes/toba_japon.webp';
import tokioImagen from '../../../assets/Itinerarios/buscadorImagenes/tokio_japon.webp';
import SuimeikanImagen from '../../../assets/Itinerarios/buscadorImagenes/suimeikan_japon.webp';
import wakayamaImagen from '../../../assets/Itinerarios/buscadorImagenes/wakayama_japon.webp';


import InView from '../../../Componentes/layout/InView/InView';
import FlyingButton from '../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';


const data = [
  {
    text: "Explora nuestra selección exclusiva de alojamientos en ciudades emblemáticas como Tokio, Kioto, Osaka, Hiroshima y más. Estos hoteles no solo ofrecen comodidad superior y diseño elegante, sino que también se encuentran ubicados en puntos estratégicos para que vivas cada ciudad en su máxima expresión",
    image: HeroImage,
    altImg: "Vista frontal del Templo Yasukuni en Tokio, Japón, con cielo nublado al atardecer.",
    letrasDoradasResponsive: LetrasDoradasResponsive,
    LetrasDoradasDesktop: LetrasDoradasDesktop,
  }];

const destinations = [
  {
    titulo: "Atami",
    card: [
      {
        title: "Hotel Resorpia Atami",
        image: hotel1,
        description: "Disfruta de las aguas termales y las vistas al mar en esta joya costera de Japón."
      }
    ]
  },
  {
    titulo: "Gero",
    card: [
      {
        title: "Hotel Suimeikan Karukaya Sansou",
        image: SuimeikanImagen,
        description: "Disfruta de las aguas termales y las vistas al mar en esta joya costera de Japón."
      }
    ]
  },
  {
    titulo: "Hakone",
    card: [
      {
        title: "Hotel Hakone Kowakien Ten-Yu",
        image: hotel2,
        description: "Relájate en los onsen al aire libre con vistas al Monte Fuji."
      },
      {
        title: "Hotel Hakone Sengokuhara Prince",
        image: hotel3,
        description: "Descubre la naturaleza de Hakone y sus museos al aire libre."
      },
      {
        title: "Hotel Resorpia Hakone",
        image: hotel4,
        description: "Experimenta la tranquilidad de los bosques y aguas termales de la región."
      },
      {
        title: "Hotel Ryuguden",
        image: hotel5,
        description: "Hospédate con vistas espectaculares al lago Ashi y al Monte Fuji."
      },
      {
        title: "Hotel Yumoto Fujiya",
        image: hotel6,
        description: "Vive la experiencia de un tradicional ryokan con modernas comodidades."
      }
    ]
  },
  {
    titulo: "Ikaho",
    card: [
      {
        title: "Hotel Moriaki Ryokan",
        image: hotelMoriakiIkaho,
        description: "Disfruta de las aguas termales y las vistas al mar en esta joya costera de Japón."
      }
    ]
  },
  {
    titulo: "Kanazawa",
    card: [
      {
        title: "Hotel Kanazawa Tokyu",
        image: hotelKanazawa,
        description: "Disfruta de las aguas termales y las vistas al mar en esta joya costera de Japón."
      }
    ]
  },
  {
    titulo: "Kawaguchiko",
    card: [
      {
        title: "Hotel Fuji View",
        image: hotel23a,
        description: "Maravíllate con la vista privilegiada al Monte Fuji desde el lago Kawaguchi."
      },
      {
        title: "Hotel Oike Ryokan",
        image: hotel23b,
        description: "Maravíllate con la vista privilegiada al Monte Fuji desde el lago Kawaguchi."
      },
      {
        title: "Hotel Onsen Mifujien",
        image: hotel23c,
        description: "Maravíllate con la vista privilegiada al Monte Fuji desde el lago Kawaguchi."
      },
      {
        title: "Hotel Regina Kawaguchiko",
        image: hotel23d,
        description: "Maravíllate con la vista privilegiada al Monte Fuji desde el lago Kawaguchi."
      },
      {
        title: "Hotel Yukemuri Fuji-No Yado Ooike",
        image: hotel23e,
        description: "Maravíllate con la vista privilegiada al Monte Fuji desde el lago Kawaguchi."
      },
    ]
  },
  {
    titulo: "Osaka",
    card: [
      {
        title: "Hotel New Otani Osaka",
        image: hotel10,
        description: "Hospédate junto al castillo de Osaka y disfruta de vistas panorámicas."
      },
      {
        title: "Hotel Ana Crowne Plaza Ozaka",
        image: hotel11a,
        description: "Vive el lujo en el corazón de una de las ciudades más dinámicas de Japón."
      },
      {
        title: "Hotel Candeo S Osaka Namba",
        image: hotel11b,
        description: "Vive el lujo en el corazón de una de las ciudades más dinámicas de Japón."
      },
      {
        title: "Hotel Hearton Nishi Umeda",
        image: hotel11c,
        description: "Vive el lujo en el corazón de una de las ciudades más dinámicas de Japón."
      },
      {
        title: "Hotel Hinode Osaka",
        image: hotel11d,
        description: "Vive el lujo en el corazón de una de las ciudades más dinámicas de Japón."
      },
      {
        title: "Hotel Imperial Osaka",
        image: hotel11e,
        description: "Vive el lujo en el corazón de una de las ciudades más dinámicas de Japón."
      },
      {
        title: "Hotel Monterey Grassmere Osaka",
        image: hotel11f,
        description: "Vive el lujo en el corazón de una de las ciudades más dinámicas de Japón."
      },
      {
        title: "Hotel New Otani Osaka",
        image: hotel11g,
        description: "Vive el lujo en el corazón de una de las ciudades más dinámicas de Japón."
      },
      {
        title: "Hotel Rihga Royal Osaka",
        image: hotel11h,
        description: "Vive el lujo en el corazón de una de las ciudades más dinámicas de Japón."
      },
      {
        title: "Hotel Sheraton Miyako Osaka",
        image: hotel11i,
        description: "Vive el lujo en el corazón de una de las ciudades más dinámicas de Japón."
      },
      {
        title: "Hotel Vischio Osaka By Granvia",
        image: hotel11j,
        description: "Vive el lujo en el corazón de una de las ciudades más dinámicas de Japón."
      },

    ]
  },
  {
    titulo: "Okayama",
    card: [
      {
        title: "Hotel Ana Crowne Plaza Okayama",
        image: hotel12a,
        description: "Visita el famoso Jardín Korakuen y el castillo negro de Okayama."
      },
      {
        title: "Hotel Daiwa Roynet kayama Ekimae",
        image: hotel12b,
        description: "Visita el famoso Jardín Korakuen y el castillo negro de Okayama."
      },
      {
        title: "Hotel Granvia Okayama",
        image: hotel12c,
        description: "Visita el famoso Jardín Korakuen y el castillo negro de Okayama."
      },
      {
        title: "Hotel Mitsui Garden Okayama",
        image: hotel12d,
        description: "Visita el famoso Jardín Korakuen y el castillo negro de Okayama."
      },
    ]
  },
  {
    titulo: "Tokio",
    card: [
      {
        title: "Hotel Grand Prince Takanawa",
        image: hotel13,
        description: "Experimenta la modernidad y tradición de la capital japonesa."
      },
      {
        title: "Hotel Hyatt Regency Tokyo",
        image: hotel13a,
        description: "Hospédate en Shinjuku, rodeado de rascacielos y vida nocturna."
      },
      {
        title: "Hotel New Otani Tokyo Gardent Tower",
        image: hotel14,
        description: "Descubre un Tokio vibrante desde uno de sus barrios más dinámicos."
      },
      {
        title: "Hotel Park Hyatt Tokyo",
        image: hotel15,
        description: "Relájate en sus jardines japoneses en pleno centro de Tokio."
      },
      {
        title: "Hotel Shinagawa Prince",
        image: hotel16,
        description: "Disfruta de la energía de Shinjuku con todas las comodidades modernas."
      },
      {
        title: "Hotel The Royal Park Tokyo Shiodome",
        image: hotel16a,
        description: "Disfruta de la energía de Shinjuku con todas las comodidades modernas."
      },
      {
        title: "Hotel Tokyo Dome",
        image: hotel16b,
        description: "Disfruta de la energía de Shinjuku con todas las comodidades modernas."
      },
      {
        title: "Hotel Toshi Center Tokyo",
        image: hotel16c,
        description: "Disfruta de la energía de Shinjuku con todas las comodidades modernas."
      },
      {
        title: "Hotel Villa Fontaine Roppongi",
        image: hotel16d,
        description: "Disfruta de la energía de Shinjuku con todas las comodidades modernas."
      },
      {
        title: "Hotel Villa Fontaine Shiodome",
        image: hotel16e,
        description: "Disfruta de la energía de Shinjuku con todas las comodidades modernas."
      },
    ]
  },
  {
    titulo: "Nagano",
    card: [
      {
        title: "Hotel Metropolitan Nagano",
        image: hotel17,
        description: "Explora los Alpes Japoneses y la serenidad del templo Zenko-ji."
      },
      {
        title: "Hotel Nagano Tokyu Rei",
        image: hotel17a,
        description: "Explora los Alpes Japoneses y la serenidad del templo Zenko-ji."
      }
    ]
  },
  {
    titulo: "Takayama",
    card: [
      {
        title: "Hotel Associa Takayama Resort",
        image: hotelTakayama,
        description: "Explora los Alpes Japoneses y la serenidad del templo Zenko-ji."
      }
    ]
  },
  {
    titulo: "Toba",
    card: [
      {
        title: "Hotel International Toba",
        image: hotelToba,
        description: "Explora los Alpes Japoneses y la serenidad del templo Zenko-ji."
      }
    ]
  },
  {
    titulo: "Wakayama",
    card: [
      {
        title: "Hotel Granvia Wakayama",
        image: hotelWayakama,
        description: "Explora los Alpes Japoneses y la serenidad del templo Zenko-ji."
      }
    ]
  },
  {
    titulo: "Hiroshima",
    card: [
      {
        title: "Hotel Daiwa Roynet",
        image: hotel18a,
        description: "Visita el Parque Memorial de la Paz y descubre la resiliencia de la ciudad."
      },
      {
        title: "Hotel Grand Prince",
        image: hotel18b,
        description: "Visita el Parque Memorial de la Paz y descubre la resiliencia de la ciudad."
      },
      {
        title: "Hotel Granvia Hiroshima",
        image: hotel18c,
        description: "Visita el Parque Memorial de la Paz y descubre la resiliencia de la ciudad."
      },
      {
        title: "Hotel Rihga Royal Hiroshima",
        image: hotel18d,
        description: "Visita el Parque Memorial de la Paz y descubre la resiliencia de la ciudad."
      },
      {
        title: "Hotel Sheraton Grand Hiroshima",
        image: hotel18e,
        description: "Visita el Parque Memorial de la Paz y descubre la resiliencia de la ciudad."
      },
    ]
  },
  {
    titulo: "Kioto",
    card: [
      {
        title: "Hotel Ana Crowne Plaza Kyoto",
        image: hotel20a,
        description: "Descubre templos antiguos y jardines zen en la capital cultural de Japón."
      },
      {
        title: "Hotel Cross Kyoto",
        image: hotel20b,
        description: "Vive la experiencia de la hospitalidad japonesa en un entorno tradicional."
      },
      {
        title: "Hotel Daiwa Roynet Ariake",
        image: hotel20c,
        description: "Descubre templos antiguos y jardines zen en la capital cultural de Japón."
      },
      {
        title: "Hotel Daiwa Roynet Ekimae",
        image: hotel20d,
        description: "Vive la experiencia de la hospitalidad japonesa en un entorno tradicional."
      },
      {
        title: "Hotel Granvia Kyoto",
        image: hotel20e,
        description: "Descubre templos antiguos y jardines zen en la capital cultural de Japón."
      },
      {
        title: "Hotel Keihan Kyoto Hachijyoguchi",
        image: hotelHachijoguchi,
        description: "Vive la experiencia de la hospitalidad japonesa en un entorno tradicional."
      },
      {
        title: "Hotel Kyoto Tokyu",
        image: hotel20g,
        description: "Descubre templos antiguos y jardines zen en la capital cultural de Japón."
      },
      {
        title: "Hotel Miyako Kyoto Hachijo",
        image: hotel20h,
        description: "Vive la experiencia de la hospitalidad japonesa en un entorno tradicional."
      },
      {
        title: "Hotel Nikko Princess Kyoto",
        image: hotel20i,
        description: "Descubre templos antiguos y jardines zen en la capital cultural de Japón."
      },
      {
        title: "Hotel Okura Kyoto",
        image: hotel20j,
        description: "Vive la experiencia de la hospitalidad japonesa en un entorno tradicional."
      },
      {
        title: "Hotel Royal Twin Kyoto Hachijoguchi",
        image: hotel20k,
        description: "Vive la experiencia de la hospitalidad japonesa en un entorno tradicional."
      },
    ]
  },
  {
    titulo: "Matsuyama",
    card: [
      {
        title: "Hotel Ana Crowne Plaza Matsuyama",
        image: hotelMatsuyama,
        description: "Disfruta de las aguas termales y las vistas al mar en esta joya costera de Japón."
      }
    ]
  },
  {
    titulo: "Nachikatsuura",
    card: [
      {
        title: "Hotel Katsuura Gyoen",
        image: hotelNachikatsuura,
        description: "Disfruta de las aguas termales y las vistas al mar en esta joya costera de Japón."
      }
    ]
  },
  {
    titulo: "Kobe",
    card: [
      {
        title: "Hotel Ana Crowne Plaza Kobe",
        image: hotel22,
        description: "Prueba la famosa carne de Kobe y pasea por su puerto moderno."
      },
      {
        title: "Hotel Kobe Meriken Park Oriental",
        image: hotel22a,
        description: "Prueba la famosa carne de Kobe y pasea por su puerto moderno."
      }
    ]
  },

];

const cardsJapon = [
  {
    title: 'Atami',
    image: AtamiImagen
  },
  {
    title: 'Gero',
    image: GeroImagen
  },
  {
    title: 'Hakone',
    image: hakoneImagen
  },
  {
    title: 'Hiroshima',
    image: hiroshimaImagen
  },
  {
    title: 'Ikaho',
    image: IkahoImagen
  },
  {
    title: 'Kanazawa',
    image: KanazawaImagen
  },
  {
    title: 'Kawaguchiko',
    image: KawaguchikoImagen
  },
  {
    title: 'Kioto',
    image: kiotoImagen
  },
  {
    title: 'Kobe',
    image: kobeImagen
  },
  {
    title: 'Matsuyama',
    image: MatsuyaImagen
  },
  {
    title: 'nachikatsuura',
    image: nachikatsuraImagen
  },
  {
    title: 'Nagano',
    image: naganoImagen
  },
  {
    title: 'okayama',
    image: okayamaImagen
  },
  {
    title: 'Osaka',
    image: OsakaImagen
  },
  {
    title: 'takayama',
    image: takayamaImagen
  },
  {
    title: 'Toba',
    image: tobaImagen
  },
  {
    title: 'Tokio',
    image: tokioImagen
  },
  {
    title: 'wakayama',
    image: wakayamaImagen
  },
];

function HotelesJapon() {
  const [mode, setMode] = useState("allHotels"); // "allHotels" | "destinations"
  const [selectedCiudad, setSelectedCiudad] = useState(null);

  // Normalizar nombres 
  const CANON = { Tokyo: 'Tokio', nachikatsura: 'nachikatsuura' };
  const canon = (name) => CANON[name] || name;

  const handleCardClick = (title) => {
    const normalizado = canon(title);
    setSelectedCiudad(normalizado);
    setMode("destinations");

    // Removed forced scroll/focus - let user maintain current viewport position
    // Screen readers will announce content changes via aria-live region
  };

  const clearSelection = () => {
    setSelectedCiudad(null);
    setMode("allHotels");
  };

  const destinoSeleccionado = selectedCiudad
    ? destinations.find((d) => d.titulo.toLowerCase() === selectedCiudad.toLowerCase())
    : null;

  useEffect(() => {
    document.title = `Hoteles Japón | Japón PREMIUM®`;
  }, []);

  return (
    <>
      <FlyingButton />
      <HeroSection data={data} />
      <InView>
        <Suspense>
          <Buscador
            cards={cardsJapon}
            onCardClick={handleCardClick}
            active={selectedCiudad}
          />
          {/* Screen reader status announcements */}
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            {selectedCiudad && `Mostrando hoteles en ${selectedCiudad}`}
            {mode === "allHotels"}
          </div>

          <div id="resultados-hoteles">
            {mode === "allHotels" ? (
              // Show all destinations
              destinations.map((d) => <NoNavegaSection destinations={d} key={d.titulo} />)
            ) : (
              // Show selected destination or empty state
              <>
                <div style={{ marginBottom: "20px", textAlign: "center" }}>
                  <button
                    onClick={clearSelection}
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "rgba(212, 175, 55, 0.95)",
                      color: "#111",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontFamily: "nohemi",
                      fontSize: "14px",
                      textTransform: "uppercase"
                    }}
                  >
                    ← Volver a todos los hoteles
                  </button>
                </div>
                {destinoSeleccionado ? (
                  <NoNavegaSection destinations={destinoSeleccionado} key={destinoSeleccionado.titulo} />
                ) : (
                  <div style={{
                    textAlign: "center",
                    color: "white",
                    padding: "40px 20px",
                    fontFamily: "nohemi"
                  }}>
                    <h2>No se encontraron destinos</h2>
                    <p>No hay hoteles disponibles para "{selectedCiudad}"</p>
                  </div>
                )}
              </>
            )}
          </div>
        </Suspense>
      </InView>

    </>
  );
}

export default HotelesJapon;