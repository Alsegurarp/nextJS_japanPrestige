module.exports = [
"[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/HotelesPremiumCard.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "containerStyle": "HotelesPremiumCard-module__ZNAEma__containerStyle",
  "contentStyle": "HotelesPremiumCard-module__ZNAEma__contentStyle",
  "descriptionStyle": "HotelesPremiumCard-module__ZNAEma__descriptionStyle",
  "iconStyle": "HotelesPremiumCard-module__ZNAEma__iconStyle",
  "titleStyle": "HotelesPremiumCard-module__ZNAEma__titleStyle",
  "underlineStyle": "HotelesPremiumCard-module__ZNAEma__underlineStyle",
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
"[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/HotelesPremiumCard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HotelesPremiumCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$Cards$2f$HotelesPremiumCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/HotelesPremiumCard.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$hooks$2f$useScrollAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/src/hooks/useScrollAnimation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
// Helper function to extract src from imported images
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
function HotelesPremiumCard({ icon, title, text, fade = 'fade-up' }) {
    const iconSrc = getSrcValue(icon);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$hooks$2f$useScrollAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAnimation"])({
        animation: fade
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$Cards$2f$HotelesPremiumCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].containerStyle,
        children: [
            iconSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: iconSrc,
                alt: "Hotel Icon",
                width: 48,
                height: 48,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$Cards$2f$HotelesPremiumCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iconStyle
            }, void 0, false, {
                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/HotelesPremiumCard.jsx",
                lineNumber: 24,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$Cards$2f$HotelesPremiumCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contentStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$Cards$2f$HotelesPremiumCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].titleStyle,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/HotelesPremiumCard.jsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$Cards$2f$HotelesPremiumCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].underlineStyle
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/HotelesPremiumCard.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$Cards$2f$HotelesPremiumCard$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].descriptionStyle,
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/HotelesPremiumCard.jsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/HotelesPremiumCard.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/Cards/HotelesPremiumCard.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_Prestige-Japan-master_src_8eb9ead7._.js.map