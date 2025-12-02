(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/StepsCardsHome.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "headingStyle": "StepsCardsHome-module__XK2PCa__headingStyle",
  "sectionStyle": "StepsCardsHome-module__XK2PCa__sectionStyle",
  "stepsContainerStyle": "StepsCardsHome-module__XK2PCa__stepsContainerStyle",
});
}),
"[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/StepCard.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "containerStyle": "StepCard-module__oBjcZq__containerStyle",
  "descriptionStyle": "StepCard-module__oBjcZq__descriptionStyle",
  "numberContainer": "StepCard-module__oBjcZq__numberContainer",
  "paragraphContainer": "StepCard-module__oBjcZq__paragraphContainer",
  "titleContainer": "StepCard-module__oBjcZq__titleContainer",
  "titleStyle": "StepCard-module__oBjcZq__titleStyle",
});
}),
"[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/StepCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$Cards$2f$StepCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/StepCard.module.css [app-client] (css module)");
;
;
;
;
const StepCard = ({ number, title, description, alt })=>{
    // Extract src from imported image object or use as-is if it's already a string
    const getSrcValue = (img)=>{
        if (!img) return null;
        if (typeof img === 'object' && img.src) {
            return img.src;
        }
        if (typeof img === 'string') {
            return img;
        }
        return null;
    };
    const numberSrc = getSrcValue(number);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$Cards$2f$StepCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].containerStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$Cards$2f$StepCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].numberContainer,
                children: numberSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: numberSrc,
                    alt: alt,
                    width: 72,
                    height: 72
                }, void 0, false, {
                    fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/StepCard.jsx",
                    lineNumber: 23,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/StepCard.jsx",
                lineNumber: 22,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$Cards$2f$StepCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$Cards$2f$StepCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleStyle,
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/StepCard.jsx",
                    lineNumber: 26,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/StepCard.jsx",
                lineNumber: 25,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$Cards$2f$StepCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].paragraphContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$Cards$2f$StepCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].descriptionStyle,
                    children: description
                }, void 0, false, {
                    fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/StepCard.jsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/StepCard.jsx",
                lineNumber: 28,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/StepCard.jsx",
        lineNumber: 21,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
_c = StepCard;
const __TURBOPACK__default__export__ = StepCard;
var _c;
__turbopack_context__.k.register(_c, "StepCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Prestige-Japan-master/src/assets/indexImagenes/Numero_1_Japon_Premium.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Numero_1_Japon_Premium.8c27623c.svg");}),
"[project]/Desktop/Prestige-Japan-master/src/assets/indexImagenes/Numero_1_Japon_Premium.svg.mjs { IMAGE => \"[project]/Desktop/Prestige-Japan-master/src/assets/indexImagenes/Numero_1_Japon_Premium.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$indexImagenes$2f$Numero_1_Japon_Premium$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/src/assets/indexImagenes/Numero_1_Japon_Premium.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$indexImagenes$2f$Numero_1_Japon_Premium$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 400,
    height: 400,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Prestige-Japan-master/src/assets/indexImagenes/Numero_2_Japon_Premium.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Numero_2_Japon_Premium.9e1b9d74.svg");}),
"[project]/Desktop/Prestige-Japan-master/src/assets/indexImagenes/Numero_2_Japon_Premium.svg.mjs { IMAGE => \"[project]/Desktop/Prestige-Japan-master/src/assets/indexImagenes/Numero_2_Japon_Premium.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$indexImagenes$2f$Numero_2_Japon_Premium$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/src/assets/indexImagenes/Numero_2_Japon_Premium.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$indexImagenes$2f$Numero_2_Japon_Premium$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 400,
    height: 400,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Prestige-Japan-master/src/assets/indexImagenes/Numero_3_Japon_Premium.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Numero_3_Japon_Premium.22aec224.svg");}),
"[project]/Desktop/Prestige-Japan-master/src/assets/indexImagenes/Numero_3_Japon_Premium.svg.mjs { IMAGE => \"[project]/Desktop/Prestige-Japan-master/src/assets/indexImagenes/Numero_3_Japon_Premium.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$indexImagenes$2f$Numero_3_Japon_Premium$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/src/assets/indexImagenes/Numero_3_Japon_Premium.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$indexImagenes$2f$Numero_3_Japon_Premium$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 400,
    height: 400,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/StepsCardsHome.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$Cards$2f$StepsCardsHome$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/StepsCardsHome.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$Cards$2f$StepCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/StepCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$indexImagenes$2f$Numero_1_Japon_Premium$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$indexImagenes$2f$Numero_1_Japon_Premium$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/Prestige-Japan-master/src/assets/indexImagenes/Numero_1_Japon_Premium.svg.mjs { IMAGE => "[project]/Desktop/Prestige-Japan-master/src/assets/indexImagenes/Numero_1_Japon_Premium.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$indexImagenes$2f$Numero_2_Japon_Premium$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$indexImagenes$2f$Numero_2_Japon_Premium$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/Prestige-Japan-master/src/assets/indexImagenes/Numero_2_Japon_Premium.svg.mjs { IMAGE => "[project]/Desktop/Prestige-Japan-master/src/assets/indexImagenes/Numero_2_Japon_Premium.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$indexImagenes$2f$Numero_3_Japon_Premium$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$indexImagenes$2f$Numero_3_Japon_Premium$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/Prestige-Japan-master/src/assets/indexImagenes/Numero_3_Japon_Premium.svg.mjs { IMAGE => "[project]/Desktop/Prestige-Japan-master/src/assets/indexImagenes/Numero_3_Japon_Premium.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const StepsCardsHome = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = _s(function StepsCardsHome() {
    _s();
    // Memoize pasos array to prevent recreation on each render
    const pasos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StepsCardsHome.StepsCardsHome.useMemo[pasos]": ()=>[
                {
                    number: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$indexImagenes$2f$Numero_1_Japon_Premium$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$indexImagenes$2f$Numero_1_Japon_Premium$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    title: "Conversemos sobre tu sueño",
                    text: "Nos tomamos el tiempo para entender lo que deseas en tu viaje.",
                    id: 1,
                    alt: "Paso 1: Conversemos sobre tu sueño"
                },
                {
                    number: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$indexImagenes$2f$Numero_2_Japon_Premium$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$indexImagenes$2f$Numero_2_Japon_Premium$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    title: "Creamos tu itinerario ideal",
                    text: "Seleccionamos experiencias únicas y diseñamos un itinerario a tu medida.",
                    id: 2,
                    alt: "Paso 2: Creamos tu itinerario ideal"
                },
                {
                    number: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$indexImagenes$2f$Numero_3_Japon_Premium$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$indexImagenes$2f$Numero_3_Japon_Premium$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    title: "Vive tu viaje con Japón PREMIUM®",
                    text: "Revisamos cada detalle con precisión para que tú solo disfrutes.",
                    id: 3,
                    alt: "Paso 3: Vive tu viaje con Japón PREMIUM®"
                }
            ]
    }["StepsCardsHome.StepsCardsHome.useMemo[pasos]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$Cards$2f$StepsCardsHome$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$Cards$2f$StepsCardsHome$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headingStyle,
                children: "Así comienza tu viaje transformador a Japón"
            }, void 0, false, {
                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/StepsCardsHome.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$Cards$2f$StepsCardsHome$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepsContainerStyle,
                children: pasos.map((pasos, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$Cards$2f$StepCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        number: pasos.number,
                        title: pasos.title,
                        description: pasos.text,
                        index: index,
                        alt: pasos.alt
                    }, pasos.id, false, {
                        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/StepsCardsHome.jsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/StepsCardsHome.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/StepsCardsHome.jsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}, "WUNJ+/v7fmak/yLT9n8T2z6jn5s=")), "WUNJ+/v7fmak/yLT9n8T2z6jn5s=");
_c1 = StepsCardsHome;
const __TURBOPACK__default__export__ = StepsCardsHome;
var _c, _c1;
__turbopack_context__.k.register(_c, "StepsCardsHome$React.memo");
__turbopack_context__.k.register(_c1, "StepsCardsHome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Prestige-Japan-master_src_f057b626._.js.map