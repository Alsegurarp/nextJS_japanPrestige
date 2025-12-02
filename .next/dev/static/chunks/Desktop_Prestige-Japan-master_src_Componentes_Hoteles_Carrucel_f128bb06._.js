(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/buscador.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "arrow": "buscador-module__sZ1_Za__arrow",
  "cardWrapper": "buscador-module__sZ1_Za__cardWrapper",
  "carouselSection": "buscador-module__sZ1_Za__carouselSection",
  "container": "buscador-module__sZ1_Za__container",
  "dot": "buscador-module__sZ1_Za__dot",
  "dotActive": "buscador-module__sZ1_Za__dotActive",
  "dots": "buscador-module__sZ1_Za__dots",
  "dragging": "buscador-module__sZ1_Za__dragging",
  "navArrow": "buscador-module__sZ1_Za__navArrow",
  "navArrowLeft": "buscador-module__sZ1_Za__navArrowLeft",
  "navigationControls": "buscador-module__sZ1_Za__navigationControls",
  "sr-only": "buscador-module__sZ1_Za__sr-only",
  "track": "buscador-module__sZ1_Za__track",
});
}),
"[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/carrucelCard.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "carrucelCard-module__B8Wesq__active",
  "badge": "carrucelCard-module__B8Wesq__badge",
  "badgeStack": "carrucelCard-module__B8Wesq__badgeStack",
  "caracteristicasImage": "carrucelCard-module__B8Wesq__caracteristicasImage",
  "card": "carrucelCard-module__B8Wesq__card",
  "contenedorImagen": "carrucelCard-module__B8Wesq__contenedorImagen",
  "content": "carrucelCard-module__B8Wesq__content",
  "gradDark": "carrucelCard-module__B8Wesq__gradDark",
  "gradGlass": "carrucelCard-module__B8Wesq__gradGlass",
  "img": "carrucelCard-module__B8Wesq__img",
  "imgLoaded": "carrucelCard-module__B8Wesq__imgLoaded",
  "media": "carrucelCard-module__B8Wesq__media",
  "title": "carrucelCard-module__B8Wesq__title",
  "titleBand": "carrucelCard-module__B8Wesq__titleBand",
});
}),
"[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/CarrucelCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CarrucelCard.jsx
__turbopack_context__.s([
    "default",
    ()=>CarrucelCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$carrucelCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/carrucelCard.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function CarrucelCard({ title, image, onClick, active = false, country = "Japón" }) {
    _s();
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Track pointer/touch interaction to distinguish click from drag
    const pointerStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0,
        time: 0
    });
    const isDragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const DRAG_THRESHOLD = 5; // Pixels - movement beyond this is considered a drag
    const MAX_CLICK_DURATION = 500; // Milliseconds - clicks longer than this won't trigger
    // Handle pointer start (mouse down or touch start)
    const handlePointerDown = (e)=>{
        const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
        const clientY = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
        pointerStart.current = {
            x: clientX,
            y: clientY,
            time: Date.now()
        };
        isDragging.current = false;
    };
    // Handle pointer move - detect if user is dragging
    const handlePointerMove = (e)=>{
        if (isDragging.current) return; // Already detected as drag
        const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
        const clientY = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
        const deltaX = Math.abs(clientX - pointerStart.current.x);
        const deltaY = Math.abs(clientY - pointerStart.current.y);
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        if (distance > DRAG_THRESHOLD) {
            isDragging.current = true;
        }
    };
    // Handle pointer end (mouse up or touch end) - trigger click if not dragging
    const handlePointerUp = (e)=>{
        const duration = Date.now() - pointerStart.current.time;
        // Only trigger click if:
        // 1. Not dragging (movement under threshold)
        // 2. Duration is reasonable for a click/tap
        // 3. onClick handler exists
        if (!isDragging.current && duration <= MAX_CLICK_DURATION && onClick) {
            e.preventDefault();
            e.stopPropagation();
            onClick();
        }
        // Reset state
        isDragging.current = false;
    };
    // Prevent default click behavior - we handle it in pointer events
    const handleClick = (e)=>{
        e.preventDefault();
        e.stopPropagation();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$carrucelCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card} ${active ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$carrucelCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`,
        onPointerDown: handlePointerDown,
        onPointerMove: handlePointerMove,
        onPointerUp: handlePointerUp,
        onTouchStart: handlePointerDown,
        onTouchMove: handlePointerMove,
        onTouchEnd: handlePointerUp,
        onMouseDown: handlePointerDown,
        onMouseMove: handlePointerMove,
        onMouseUp: handlePointerUp,
        onClick: handleClick,
        "aria-pressed": active,
        "aria-label": `${title}, ${country}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$carrucelCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].media,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: image,
                        alt: title,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$carrucelCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].img} ${loaded ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$carrucelCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imgLoaded : ""}`,
                        loading: "lazy",
                        width: 400,
                        height: 300,
                        onLoadingComplete: ()=>setLoaded(true),
                        priority: false
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/CarrucelCard.jsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$carrucelCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gradDark,
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/CarrucelCard.jsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$carrucelCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gradGlass,
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/CarrucelCard.jsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/CarrucelCard.jsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$carrucelCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$carrucelCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleBand,
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/CarrucelCard.jsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$carrucelCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/CarrucelCard.jsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$carrucelCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeStack,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$carrucelCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badge,
                                children: country
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/CarrucelCard.jsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$carrucelCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badge,
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/CarrucelCard.jsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/CarrucelCard.jsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/CarrucelCard.jsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/CarrucelCard.jsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_s(CarrucelCard, "a5o4H4a+AmFsWn+EL6mP2LthyQQ=");
_c = CarrucelCard;
var _c;
__turbopack_context__.k.register(_c, "CarrucelCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/Buscador.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Buscador
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$buscador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/buscador.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$CarrucelCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/CarrucelCard.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function Buscador({ cards = [], onCardClick, active }) {
    _s();
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [cardWidth, setCardWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [slidesToShow, setSlidesToShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dragStartX, setDragStartX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dragDeltaX, setDragDeltaX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [initialTouchY, setInitialTouchY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVerticalScroll, setIsVerticalScroll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [touchStartTime, setTouchStartTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMouseDown, setIsMouseDown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const count = cards?.length || 0;
    // Determine slidesToShow via container width (no magic numbers in JS)
    const measure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Buscador.useCallback[measure]": ()=>{
            const container = containerRef.current;
            const track = trackRef.current;
            if (!container || !track) return;
            const rect = container.getBoundingClientRect();
            const width = rect.width;
            let show = 1;
            if (width >= 1200) show = 3;
            else if (width >= 900) show = 3; // upper tablet (fits 3)
            else if (width >= 641) show = 2; // tablet
            else show = 1; // mobile
            setSlidesToShow(show);
            // Card width = first child width (accounts for CSS clamp + gaps)
            const firstCard = track.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$buscador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardWrapper}`);
            if (firstCard) {
                const cw = firstCard.getBoundingClientRect().width;
                setCardWidth(cw);
            }
        }
    }["Buscador.useCallback[measure]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Buscador.useEffect": ()=>{
            measure();
            // ResizeObserver for precise card measurements
            const ro = new ResizeObserver({
                "Buscador.useEffect": ()=>measure()
            }["Buscador.useEffect"]);
            if (containerRef.current) ro.observe(containerRef.current);
            return ({
                "Buscador.useEffect": ()=>ro.disconnect()
            })["Buscador.useEffect"];
        }
    }["Buscador.useEffect"], [
        measure
    ]);
    // Clamp index to bounds - allow scrolling through all cards
    const maxIndex = Math.max(0, count - slidesToShow);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Buscador.useEffect": ()=>{
            setIndex({
                "Buscador.useEffect": (i)=>Math.min(Math.max(i, 0), maxIndex)
            }["Buscador.useEffect"]);
        }
    }["Buscador.useEffect"], [
        count,
        maxIndex,
        slidesToShow
    ]);
    // Pages for dots (mobile/tablet requirement)
    const pages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Buscador.useMemo[pages]": ()=>Math.max(1, Math.ceil(count / slidesToShow))
    }["Buscador.useMemo[pages]"], [
        count,
        slidesToShow
    ]);
    const currentPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Buscador.useMemo[currentPage]": ()=>Math.min(pages - 1, Math.floor(index / slidesToShow))
    }["Buscador.useMemo[currentPage]"], [
        index,
        slidesToShow,
        pages
    ]);
    const goToIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Buscador.useCallback[goToIndex]": (next, smooth = true)=>{
            // Allow scrolling through all cards, not just count - 1
            const clamped = Math.max(0, Math.min(next, count - slidesToShow));
            // Ensure smooth animation for programmatic navigation
            if (smooth && trackRef.current) {
                // Temporarily ensure dragging class is removed for smooth transition
                trackRef.current.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$buscador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dragging);
                setIsDragging(false);
                setDragDeltaX(0);
            }
            setIndex(clamped);
        }
    }["Buscador.useCallback[goToIndex]"], [
        count,
        slidesToShow
    ]);
    const goPrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Buscador.useCallback[goPrev]": ()=>goToIndex(index - 1)
    }["Buscador.useCallback[goPrev]"], [
        index,
        goToIndex
    ]);
    const goNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Buscador.useCallback[goNext]": ()=>goToIndex(index + 1)
    }["Buscador.useCallback[goNext]"], [
        index,
        goToIndex
    ]);
    const goToPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Buscador.useCallback[goToPage]": (p)=>{
            const firstIdxOfPage = p * slidesToShow;
            goToIndex(firstIdxOfPage);
        }
    }["Buscador.useCallback[goToPage]"], [
        slidesToShow,
        goToIndex
    ]);
    // Keyboard navigation 
    const onKeyDown = (e)=>{
        switch(e.key){
            case "ArrowLeft":
                e.preventDefault();
                goPrev();
                break;
            case "ArrowRight":
                e.preventDefault();
                goNext();
                break;
            case "Home":
                e.preventDefault();
                goToIndex(0);
                break;
            case "End":
                e.preventDefault();
                goToIndex(count - 1);
                break;
            default:
                break;
        }
    };
    // Enhanced touch/pointer handling for better iOS compatibility
    const onPointerDown = (e)=>{
        // For mouse events, only respond to left click
        if (e.type === 'mousedown') {
            if (e.button !== 0) return; // Only left mouse button
            setIsMouseDown(true);
            setDragStartX(e.clientX);
            setTouchStartTime(Date.now());
            setInitialTouchY(e.clientY);
        } else if (e.type === 'touchstart') {
            const touch = e.touches[0];
            if (!touch) return; // iOS safety check
            setInitialTouchY(touch.clientY);
            setDragStartX(touch.clientX);
            setTouchStartTime(Date.now());
            setIsMouseDown(false); // Ensure mouse state is clean for touch
        }
        setDragDeltaX(0);
        setIsVerticalScroll(false);
        setIsDragging(false); // Don't set dragging immediately
    };
    const onPointerMove = (e)=>{
        if (isVerticalScroll) return;
        // For mouse events, only respond if mouse button is pressed
        if (e.type === 'mousemove' && !isMouseDown) return;
        let currentX, currentY;
        if (e.type === 'touchmove') {
            const touch = e.touches[0];
            if (!touch) return; // iOS safety check
            currentX = touch.clientX;
            currentY = touch.clientY;
        } else {
            currentX = e.clientX;
            currentY = e.clientY;
        }
        const deltaX = currentX - dragStartX;
        const deltaY = Math.abs(currentY - initialTouchY);
        // iOS specific: more lenient horizontal detection
        const isHorizontalIntent = Math.abs(deltaX) > Math.abs(deltaY) * 0.7;
        // Detect if this is vertical scrolling (iOS priority)
        if (deltaY > Math.abs(deltaX) && deltaY > 8) {
            setIsVerticalScroll(true);
            setIsDragging(false);
            return;
        }
        // Start horizontal dragging with lower threshold for iOS
        if (Math.abs(deltaX) > 5 && !isVerticalScroll && isHorizontalIntent) {
            setIsDragging(true);
            setDragDeltaX(deltaX);
            // Add CSS class to track for better iOS handling
            if (trackRef.current) {
                trackRef.current.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$buscador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dragging);
            }
            // Always prevent default for horizontal swipes on iOS
            if (e.type === 'touchmove') {
                e.preventDefault();
            } else if (Math.abs(deltaX) > Math.abs(deltaY)) {
                e.preventDefault();
            }
        }
    };
    const endDrag = ()=>{
        // Reset mouse state
        setIsMouseDown(false);
        // Always clean up dragging state first for iOS
        if (trackRef.current) {
            trackRef.current.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$buscador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dragging);
        }
        if (!isDragging || isVerticalScroll) {
            setIsDragging(false);
            setDragDeltaX(0);
            setIsVerticalScroll(false);
            return;
        }
        const touchDuration = Date.now() - touchStartTime;
        // More sensitive threshold for iOS
        const threshold = Math.max(25, cardWidth * 0.1);
        // More lenient navigation criteria for iOS
        if (touchDuration > 100 && Math.abs(dragDeltaX) > threshold) {
            if (dragDeltaX < -threshold) {
                goToIndex(index + 1, true);
            } else if (dragDeltaX > threshold) {
                goToIndex(index - 1, true);
            }
        }
        // Always clean up dragging state
        setIsDragging(false);
        setDragDeltaX(0);
        setIsVerticalScroll(false);
    };
    // Compute translateX (index * cardWidth + gaps) from actual DOM gap via CSS var
    const gapPx = getComputedGap();
    function getComputedGap() {
        // Default fallback; actual gap is provided via CSS var --gap
        if (!containerRef.current) return 8;
        const gap = getComputedStyle(containerRef.current).getPropertyValue("--gap");
        const parsed = parseFloat(gap);
        return Number.isFinite(parsed) ? parsed : 8;
    }
    const offsetX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Buscador.useMemo[offsetX]": ()=>{
            const x = -(index * (cardWidth + gapPx));
            // Add drag preview
            return isDragging ? x + dragDeltaX : x;
        }
    }["Buscador.useMemo[offsetX]"], [
        index,
        cardWidth,
        gapPx,
        isDragging,
        dragDeltaX
    ]);
    const showArrows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Buscador.useMemo[showArrows]": ()=>{
            // Desktop arrows are now hidden - use navigation controls instead
            return false;
        }
    }["Buscador.useMemo[showArrows]"], []);
    const trackId = "carousel-track";
    // Early return after all hooks
    if (!count) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$buscador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselSection,
        style: {
            "--pages": pages
        },
        role: "region",
        "aria-roledescription": "carousel",
        "aria-label": "Hoteles destacados",
        onKeyDown: onKeyDown,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$buscador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
                ref: containerRef,
                tabIndex: 0,
                "aria-controls": trackId,
                "aria-live": "polite",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: trackId,
                        ref: trackRef,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$buscador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].track} ${isDragging ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$buscador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dragging : ""}`,
                        style: {
                            transform: `translate3d(${offsetX}px, 0, 0)`,
                            WebkitTransform: `translate3d(${offsetX}px, 0, 0)`,
                            willChange: "transform"
                        },
                        onMouseDown: onPointerDown,
                        onMouseMove: onPointerMove,
                        onMouseUp: endDrag,
                        onMouseLeave: ()=>{
                            setIsMouseDown(false);
                            endDrag();
                        },
                        onTouchStart: (e)=>{
                            // iOS specific: prevent default only if we might be handling horizontally
                            onPointerDown(e);
                        },
                        onTouchMove: (e)=>{
                            // iOS specific: let the move handler decide about preventDefault
                            onPointerMove(e);
                        },
                        onTouchEnd: endDrag,
                        onTouchCancel: endDrag,
                        children: cards.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$buscador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$CarrucelCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    title: c.title,
                                    image: c.image,
                                    country: c.country,
                                    active: active === c.title,
                                    onClick: ()=>onCardClick?.(c.title)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/Buscador.jsx",
                                    lineNumber: 300,
                                    columnNumber: 15
                                }, this)
                            }, `${c.title}-${i}`, false, {
                                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/Buscador.jsx",
                                lineNumber: 299,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/Buscador.jsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    showArrows && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$buscador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrow} ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$buscador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].left}`,
                                "aria-label": "Anterior",
                                onClick: goPrev,
                                disabled: index === 0,
                                children: "‹"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/Buscador.jsx",
                                lineNumber: 314,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$buscador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrow} ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$buscador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].right}`,
                                "aria-label": "Siguiente",
                                onClick: goNext,
                                disabled: index >= maxIndex,
                                children: "›"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/Buscador.jsx",
                                lineNumber: 322,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/Buscador.jsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$buscador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navigationControls,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$buscador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navArrow} ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$buscador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navArrowLeft}`,
                        "aria-label": "Ver tarjetas anteriores",
                        onClick: goPrev,
                        disabled: index === 0,
                        type: "button",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M15 18L9 12L15 6",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/Buscador.jsx",
                                    lineNumber: 351,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/Buscador.jsx",
                                lineNumber: 343,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Anterior"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/Buscador.jsx",
                                lineNumber: 359,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/Buscador.jsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$buscador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navArrow} ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$buscador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navArrowRight}`,
                        "aria-label": "Ver tarjetas siguientes",
                        onClick: goNext,
                        disabled: index >= maxIndex,
                        type: "button",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M9 18L15 12L9 6",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/Buscador.jsx",
                                    lineNumber: 377,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/Buscador.jsx",
                                lineNumber: 369,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Siguiente"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/Buscador.jsx",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/Buscador.jsx",
                        lineNumber: 362,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/Buscador.jsx",
                lineNumber: 335,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$buscador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dots,
                role: "tablist",
                "aria-label": "Paginación del carrusel",
                children: Array.from({
                    length: pages
                }).map((_, p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        role: "tab",
                        "aria-selected": currentPage === p,
                        "aria-controls": trackId,
                        tabIndex: currentPage === p ? 0 : -1,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$buscador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot} ${currentPage === p ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$Hoteles$2f$Carrucel$2f$buscador$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dotActive : ""}`,
                        onClick: ()=>goToPage(p),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/Buscador.jsx",
                            lineNumber: 401,
                            columnNumber: 13
                        }, this)
                    }, p, false, {
                        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/Buscador.jsx",
                        lineNumber: 392,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/Buscador.jsx",
                lineNumber: 390,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/Hoteles/Carrucel/Buscador.jsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
}
_s(Buscador, "jSfU9dHboIsjTT2+mmrMRZd58/M=");
_c = Buscador;
var _c;
__turbopack_context__.k.register(_c, "Buscador");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Prestige-Japan-master_src_Componentes_Hoteles_Carrucel_f128bb06._.js.map