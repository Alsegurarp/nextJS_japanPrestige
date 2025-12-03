module.exports = [
"[project]/Desktop/Prestige-Japan-master/node_modules/react-spinners/esm/helpers/animation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAnimation",
    ()=>createAnimation
]);
var createAnimation = function(loaderName, frames, suffix) {
    var animationName = "react-spinners-".concat(loaderName, "-").concat(suffix);
    if ("TURBOPACK compile-time truthy", 1) {
        return animationName;
    }
    //TURBOPACK unreachable
    ;
    var styleEl;
    var styleSheet;
    var keyFrames;
};
}),
"[project]/Desktop/Prestige-Japan-master/node_modules/react-spinners/esm/helpers/unitConverter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cssValue",
    ()=>cssValue,
    "parseLengthAndUnit",
    ()=>parseLengthAndUnit
]);
var cssUnit = {
    cm: true,
    mm: true,
    in: true,
    px: true,
    pt: true,
    pc: true,
    em: true,
    ex: true,
    ch: true,
    rem: true,
    vw: true,
    vh: true,
    vmin: true,
    vmax: true,
    "%": true
};
function parseLengthAndUnit(size) {
    if (typeof size === "number") {
        return {
            value: size,
            unit: "px"
        };
    }
    var value;
    var valueString = (size.match(/^[0-9.]*/) || "").toString();
    if (valueString.includes(".")) {
        value = parseFloat(valueString);
    } else {
        value = parseInt(valueString, 10);
    }
    var unit = (size.match(/[^0-9]*$/) || "").toString();
    if (cssUnit[unit]) {
        return {
            value: value,
            unit: unit
        };
    }
    console.warn("React Spinners: ".concat(size, " is not a valid css value. Defaulting to ").concat(value, "px."));
    return {
        value: value,
        unit: "px"
    };
}
function cssValue(value) {
    var lengthWithunit = parseLengthAndUnit(value);
    return "".concat(lengthWithunit.value).concat(lengthWithunit.unit);
}
}),
"[project]/Desktop/Prestige-Japan-master/node_modules/react-spinners/esm/SyncLoader.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$helpers$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/react-spinners/esm/helpers/animation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$helpers$2f$unitConverter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/react-spinners/esm/helpers/unitConverter.js [app-ssr] (ecmascript)");
"use client";
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
var sync = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$helpers$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAnimation"])("SyncLoader", "33% {transform: translateY(10px)}\n  66% {transform: translateY(-10px)}\n  100% {transform: translateY(0)}", "sync");
function SyncLoader(_a) {
    var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 15 : _f, _g = _a.margin, margin = _g === void 0 ? 2 : _g, additionalprops = __rest(_a, [
        "loading",
        "color",
        "speedMultiplier",
        "cssOverride",
        "size",
        "margin"
    ]);
    var wrapper = __assign({
        display: "inherit"
    }, cssOverride);
    var style = function(i) {
        return {
            backgroundColor: color,
            width: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$helpers$2f$unitConverter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cssValue"])(size),
            height: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$helpers$2f$unitConverter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cssValue"])(size),
            margin: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$helpers$2f$unitConverter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cssValue"])(margin),
            borderRadius: "100%",
            display: "inline-block",
            animation: "".concat(sync, " ").concat(0.6 / speedMultiplier, "s ").concat(i * 0.07, "s infinite ease-in-out"),
            animationFillMode: "both"
        };
    };
    if (!loading) {
        return null;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", __assign({
        style: wrapper
    }, additionalprops), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", {
        style: style(1)
    }), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", {
        style: style(2)
    }), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", {
        style: style(3)
    }));
}
const __TURBOPACK__default__export__ = SyncLoader;
}),
"[project]/Desktop/Prestige-Japan-master/node_modules/react-spinners/esm/SyncLoader.js [app-ssr] (ecmascript) <export default as SyncLoader>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SyncLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$SyncLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$SyncLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/react-spinners/esm/SyncLoader.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=05cd3_react-spinners_esm_d1e679ca._.js.map