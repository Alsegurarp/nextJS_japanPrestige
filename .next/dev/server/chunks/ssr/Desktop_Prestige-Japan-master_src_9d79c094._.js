module.exports = [
"[project]/Desktop/Prestige-Japan-master/src/Componentes/Sections/MediaFeature/MediaFeature.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "beneficioImage": "MediaFeature-module__nNgmnW__beneficioImage",
  "beneficiosContainer": "MediaFeature-module__nNgmnW__beneficiosContainer",
  "container": "MediaFeature-module__nNgmnW__container",
  "contenidoBeneficios": "MediaFeature-module__nNgmnW__contenidoBeneficios",
  "content": "MediaFeature-module__nNgmnW__content",
  "cta": "MediaFeature-module__nNgmnW__cta",
  "list": "MediaFeature-module__nNgmnW__list",
  "media": "MediaFeature-module__nNgmnW__media",
  "subtitle": "MediaFeature-module__nNgmnW__subtitle",
  "text": "MediaFeature-module__nNgmnW__text",
  "title": "MediaFeature-module__nNgmnW__title",
  "titlePlusSubtitle": "MediaFeature-module__nNgmnW__titlePlusSubtitle",
});
}),
"[project]/Desktop/Prestige-Japan-master/src/hooks/useScrollAnimation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollAnimation",
    ()=>useScrollAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
// Register ScrollTrigger plugin
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useScrollAnimation({ animation = 'fade-up', delay = 0, duration = 1, once = true, offset = 100 } = {}) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Only run on client side
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const element = undefined;
        // Define initial state based on animation type
        const animationConfig = undefined;
        const initialState = undefined;
        // Create animation
        const animation_instance = undefined;
    }, [
        animation,
        delay,
        duration,
        once,
        offset
    ]);
    return ref;
}
}),
"[project]/Desktop/Prestige-Japan-master/src/Componentes/Sections/MediaFeature/MediaFeature.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MediaFeature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Sections$2f$MediaFeature$2f$MediaFeature$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/src/Componentes/Sections/MediaFeature/MediaFeature.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$hooks$2f$useScrollAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/src/hooks/useScrollAnimation.js [app-ssr] (ecmascript)");
;
;
;
;
;
function MediaFeature(props) {
    // Extract src from imported image object or use as-is if it's already a string
    const getSrcValue = (img)=>{
        if (!img) return null;
        // Handle nested objects with desktop/mobile properties
        if (typeof img === 'object') {
            // If it has src property (imported image)
            if (img.src) {
                return img.src;
            }
            // If it has desktop property (structure from MediaFeatureList)
            if (img.desktop) {
                const desktopImg = img.desktop;
                if (typeof desktopImg === 'object' && desktopImg.src) {
                    return desktopImg.src;
                }
                if (typeof desktopImg === 'string') {
                    return desktopImg;
                }
            }
        }
        // If it's a string path, return it directly
        if (typeof img === 'string') {
            return img;
        }
        return null;
    };
    const imageSrc = getSrcValue(props.image);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$hooks$2f$useScrollAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAnimation"])({
        animation: 'fade-up'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Sections$2f$MediaFeature$2f$MediaFeature$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].beneficiosContainer,
        children: [
            imageSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: imageSrc,
                alt: props.altText,
                fill: true,
                loading: "lazy",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Sections$2f$MediaFeature$2f$MediaFeature$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].beneficioImage,
                style: {
                    objectPosition: props.objectPosition || "50% 50%"
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Sections/MediaFeature/MediaFeature.jsx",
                lineNumber: 41,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Sections$2f$MediaFeature$2f$MediaFeature$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contenidoBeneficios,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Sections$2f$MediaFeature$2f$MediaFeature$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].titlePlusSubtitle,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Sections$2f$MediaFeature$2f$MediaFeature$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                children: props.title
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Sections/MediaFeature/MediaFeature.jsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            props.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Sections$2f$MediaFeature$2f$MediaFeature$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                                children: props.subtitle
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Sections/MediaFeature/MediaFeature.jsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Sections/MediaFeature/MediaFeature.jsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    props.text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Sections$2f$MediaFeature$2f$MediaFeature$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].text,
                        children: props.text
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Sections/MediaFeature/MediaFeature.jsx",
                        lineNumber: 58,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Sections/MediaFeature/MediaFeature.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Sections/MediaFeature/MediaFeature.jsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Prestige-Japan-master/src/Componentes/LandingKeyword/WholeSectionCard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Sections$2f$MediaFeature$2f$MediaFeature$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/src/Componentes/Sections/MediaFeature/MediaFeature.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const MediaFeatureList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(function MediaFeatureList({ infoCards: data }) {
    // Guard against undefined data
    if (!data || !Array.isArray(data)) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: data.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Sections$2f$MediaFeature$2f$MediaFeature$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                image: s.image,
                altText: s.altText,
                title: s.title,
                subtitle: s.subtitle,
                text: s.text,
                objectPosition: s.objectPosition
            }, s.title, false, {
                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/LandingKeyword/WholeSectionCard.jsx",
                lineNumber: 16,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/LandingKeyword/WholeSectionCard.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
});
const __TURBOPACK__default__export__ = MediaFeatureList;
}),
];

//# sourceMappingURL=Desktop_Prestige-Japan-master_src_9d79c094._.js.map