// router.js
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";                 
import NotFound from "../pages/NotFound/NotFound";
import LoadingFallback from "../Componentes/UI/LoadingFallback";
// import { preloadCriticalComponents } from "../utils/criticalPathOptimizer.js";
import { 
  LazyContacto, 
  LazyNosotros, 
  LazyBlog, 
  LazyFaqs, 
  LazyItinerarios, 
  LazyHotelesInicio, 
  LazyAvisoPrivacidad 
} from "../utils/lazyComponents.js";

// Start preloading critical components immediately - temporarily disabled
// preloadCriticalComponents(); 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    HydrateFallback: LoadingFallback,
    children: [
      {
        index: true,
        async lazy() {
          // Optimize critical path - load only Home, Hero is already imported within Home
          const { default: Home } = await import("../pages/Home/Home");
          return { 
            Component: Home,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "blog",
        Component: LazyBlog,
        HydrateFallback: LoadingFallback
      },
      {
        path: "contacto",
        Component: LazyContacto,
        HydrateFallback: LoadingFallback
      },
      {
        path: "nosotros", 
        Component: LazyNosotros,
        HydrateFallback: LoadingFallback
      },
      {
        path: "faqs",
        Component: LazyFaqs,
        HydrateFallback: LoadingFallback
      },
      {
        path: "aviso-de-privacidad",
        Component: LazyAvisoPrivacidad,
        HydrateFallback: LoadingFallback
      },
      {
        path: "gracias",
        async lazy() {
          const { default: Gracias } = await import("../pages/Gracias/Gracias.jsx");
          return { 
            Component: Gracias,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "blog/como-comportarse",
        async lazy() {
          const { default: ComoComportarse } = await import("../pages/Blog/Articulos/ComoComportarse/ComoComportarse.jsx");
          return { 
            Component: ComoComportarse,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "blog/comprar-japon",
        async lazy() {
          const { default: ComprarJapon } = await import("../pages/Blog/Articulos/ComprarJapon/ComprarJapon.jsx");
          return { 
            Component: ComprarJapon,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "blog/epoca-viajar-japon",
        async lazy() {
          const { default: EpocaViajarJapon } = await import("../pages/Blog/Articulos/EpocaViajarJapon/EpocaViajarJapon.jsx");
          return { 
            Component: EpocaViajarJapon,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "blog/forma-pago",
        async lazy() {
          const { default: FormaPago } = await import("../pages/Blog/Articulos/FormaPago/FormaPago.jsx");
          return { 
            Component: FormaPago,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "blog/internet-japon",
        async lazy() {
          const { default: InternetJapon } = await import("../pages/Blog/Articulos/InternetJapon/InternetJapon.jsx");
          return { 
            Component: InternetJapon,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "blog/onsen-tatuajes",
        async lazy() {
          const { default: OnsenTatuajes } = await import("../pages/Blog/Articulos/OnsenTatuajes/OnsenTatuajes.jsx");
          return { 
            Component: OnsenTatuajes,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "blog/saludar-blog",
        async lazy() {
          const { default: SaludarBlog } = await import("../pages/Blog/Articulos/SaludarBlog/SaludarBlog.jsx");
          return { 
            Component: SaludarBlog,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "blog/viaje-seguro",
        async lazy() {
          const { default: ViajarSeguro } = await import("../pages/Blog/Articulos/ViajarSeguro/ViajarSeguro.jsx");
          return { 
            Component: ViajarSeguro,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "blog/viaje-sin-japones",
        async lazy() {
          const { default: ViajeSinJapones } = await import("../pages/Blog/Articulos/ViajeSinJapones/ViajeSinJapones.jsx");
          return { 
            Component: ViajeSinJapones,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "blog/visado-japon",
        async lazy() {
          const { default: VisadoJapon } = await import("../pages/Blog/Articulos/VisadoJapon/VisadoJapon.jsx");
          return { 
            Component: VisadoJapon,
            HydrateFallback: LoadingFallback
          };
        },
      },

      {
        path: "hoteles",
        Component: LazyHotelesInicio,
        HydrateFallback: LoadingFallback
      },
      {
        path: "hoteles/hoteles-tailandia",
        async lazy() {
          const { default: HotelesTailandia } = await import("../pages/Hoteles/HotelesEnTailandia/HotelesTailandia.jsx");
          return { 
            Component: HotelesTailandia,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "hoteles/hoteles-japon",
        async lazy() {
          const { default: HotelesJapon } = await import("../pages/Hoteles/HotelesEnJapon/HotelesJapon.jsx");
          return { 
            Component: HotelesJapon,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "hoteles/hoteles-china",
        async lazy() {
          const { default: HotelesChina } = await import("../pages/Hoteles/HotelesEnChina/HotelesChina.jsx");
          return { 
            Component: HotelesChina,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "hoteles/hoteles-corea",
        async lazy() {
          const { default: HotelesCorea } = await import("../pages/Hoteles/HotelesEnCoreaSur/HotelesCorea.jsx");
          return { 
            Component: HotelesCorea,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "hoteles/hoteles-dubai",
        async lazy() {
          const { default: HotelesDubai } = await import("../pages/Hoteles/HotelesEnDubai/HotelesDubai.jsx");
          return { 
            Component: HotelesDubai,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "itinerarios",
        async lazy() {
          const { default: Itinerarios } = await import("../pages/Itinerarios/Itinerarios");
          return { 
            Component: Itinerarios,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "itinerarios/camino-de-kumano",
        async lazy() {
          const { default: CaminoDeKumano } = await import("../pages/ContenidoItinerarios/Tradicional/CaminoDeKumano.jsx");
          return { 
            Component: CaminoDeKumano,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "itinerarios/imperio-japones",
        async lazy() {
          const { default: ImperioJapones } = await import("../pages/ContenidoItinerarios/Tradicional/ImperioJapones.jsx");
          return { 
            Component: ImperioJapones,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "itinerarios/japon-express",
        async lazy() {
          const { default: JaponExpress } = await import("../pages/ContenidoItinerarios/Esenciales/JaponExpress.jsx");
          return { 
            Component: JaponExpress,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "itinerarios/titanes-del-pacifico",
        async lazy() {
          const { default: TitanesDelPacifico } = await import("../pages/ContenidoItinerarios/Esenciales/TitanesDelPacifico.jsx");
          return { 
            Component: TitanesDelPacifico,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "itinerarios/japon-increible",
        async lazy() {
          const { default: JaponIncreible } = await import("../pages/ContenidoItinerarios/Esenciales/JaponIncreible.jsx");
          return { 
            Component: JaponIncreible,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "itinerarios/art-oriental",
        async lazy() {
          const { default: ArtOriental } = await import("../pages/ContenidoItinerarios/Esenciales/ArtOriental");
          return { 
            Component: ArtOriental,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "itinerarios/origen-del-sol",
        async lazy() {
          const { default: ElOrigenDelSol } = await import("../pages/ContenidoItinerarios/Esenciales/ElOrigenDelSol.jsx");
          return { 
            Component: ElOrigenDelSol,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "itinerarios/imperio-del-sol",
        async lazy() {
          const { default: ImperioDelSol } = await import("../pages/ContenidoItinerarios/Esenciales/ImperioDelSol.jsx");
          return { 
            Component: ImperioDelSol,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "itinerarios/ultimo-samurai",
        async lazy() {
          const { default: ElUltimoSamurai } = await import("../pages/ContenidoItinerarios/Esenciales/UltimoSamurai.jsx");
          return { 
            Component: ElUltimoSamurai,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "itinerarios/japon-corea-del-sur",
        async lazy() {
          const { default: JaponCoreaDelSur } = await import("../pages/ContenidoItinerarios/Combinados/JaponCoreaDelSur.jsx");
          return { 
            Component: JaponCoreaDelSur,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "itinerarios/japon-y-dubai-maravilloso",
        async lazy() {
          const { default: JaponDubaiMaravilloso } = await import("../pages/ContenidoItinerarios/Combinados/JaponYDubaiMaravilloso.jsx");
          return { 
            Component: JaponDubaiMaravilloso,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "itinerarios/japon-y-tailandia-joyas-lejano-oriente",
        async lazy() {
          const { default: JaponYTailandia } = await import("../pages/ContenidoItinerarios/Combinados/JaponTailandia.jsx");
          return { 
            Component: JaponYTailandia,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "itinerarios/samurais-y-shaolines",
        async lazy() {
          const { default: SamuraisYShaolines } = await import("../pages/ContenidoItinerarios/Combinados/SamuraisYShaolines.jsx");
          return { 
            Component: SamuraisYShaolines,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "itinerarios/japon-y-china",
        async lazy() {
          const { default: JaponYChina } = await import("../pages/ContenidoItinerarios/Combinados/JaponYChina.jsx");
          return { 
            Component: JaponYChina,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "itinerarios/seul-a-tokio",
        async lazy() {
          const { default: SeulATokio } = await import("../pages/ContenidoItinerarios/Combinados/SeulATokio.jsx");
          return { 
            Component: SeulATokio,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "itinerarios/japon-y-tailandia-lo-mejor",
        async lazy() {
          const { default: JaponTailandiaLoMejor } = await import("../pages/ContenidoItinerarios/Combinados/JaponTailandiaLoMejor.jsx");
          return { 
            Component: JaponTailandiaLoMejor,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "itinerarios/japon-y-dubai-total",
        async lazy() {
          const { default: JaponYTailandiaTotal } = await import("../pages/ContenidoItinerarios/Combinados/JaponYDubaiTotal.jsx");
          return { 
            Component: JaponYTailandiaTotal,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "/viajes-a-japon-desde-mexico",
        async lazy() {
          const { default: HomeKeywords } = await import("../pages/LandingKeyword/HomeKeywords.jsx");
          return { 
            Component: HomeKeywords,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "/tours-a-japon-desde-mexico",
        async lazy() {
          const { default: ToursJaponKeyword } = await import("../pages/LandingKeyword/ToursJaponKeyword.jsx");
          return { 
            Component: ToursJaponKeyword,
            HydrateFallback: LoadingFallback
          };
        },
      },
      {
        path: "/paquetes-a-japon",
        async lazy() {
          const { default: PaquetesJaponKeyword } = await import("../pages/LandingKeyword/PaquetesJapon.jsx");
          return { 
            Component: PaquetesJaponKeyword,
            HydrateFallback: LoadingFallback
          };
        },
      },
    ],
  },
]);
