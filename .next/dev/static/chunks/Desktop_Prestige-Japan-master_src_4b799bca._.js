(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "Form-module__QAxf-W__button",
  "contenedorForm": "Form-module__QAxf-W__contenedorForm",
  "error": "Form-module__QAxf-W__error",
  "formStyle": "Form-module__QAxf-W__formStyle",
  "input": "Form-module__QAxf-W__input",
  "inputContainer": "Form-module__QAxf-W__inputContainer",
  "inputContainerName": "Form-module__QAxf-W__inputContainerName",
  "inputNameApellido": "Form-module__QAxf-W__inputNameApellido",
  "letrasDoradasContainer": "Form-module__QAxf-W__letrasDoradasContainer",
  "letrasDoradasDesktop": "Form-module__QAxf-W__letrasDoradasDesktop",
  "letrasDoradasResponsive": "Form-module__QAxf-W__letrasDoradasResponsive",
  "muted": "Form-module__QAxf-W__muted",
  "phoneRow": "Form-module__QAxf-W__phoneRow",
  "popover": "Form-module__QAxf-W__popover",
  "recaptchaContainer": "Form-module__QAxf-W__recaptchaContainer",
  "subHeader": "Form-module__QAxf-W__subHeader",
  "submitBtn": "Form-module__QAxf-W__submitBtn",
  "success": "Form-module__QAxf-W__success",
  "wrapper": "Form-module__QAxf-W__wrapper",
});
}),
"[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Form",
    ()=>Form,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx")}`;
    }
};
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const ReCAPTCHA = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/Desktop/Prestige-Japan-master/node_modules/react-google-recaptcha/lib/esm/index.js [app-client] (ecmascript, async loader)"));
_c = ReCAPTCHA;
const Calendar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/FormComponents/Calendar.jsx [app-client] (ecmascript, async loader)"));
_c1 = Calendar;
function Form() {
    _s();
    // --- state ---
    const [firstName, setFirstName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [lastName, setLastName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [countryCode, setCountryCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("+52");
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [validCaptcha, setValidCaptcha] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // prueba form
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [serverMsg, setServerMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [serverErr, setServerErr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const maxDate = new Date(2035, 5, 30); // 30 Jun 2035
    const countries = [
        {
            name: "México",
            code: "+52"
        },
        {
            name: "Estados Unidos",
            code: "+1"
        },
        {
            name: "Canadá",
            code: "+1"
        },
        {
            name: "España",
            code: "+34"
        },
        {
            name: "Argentina",
            code: "+54"
        },
        {
            name: "Colombia",
            code: "+57"
        },
        {
            name: "Chile",
            code: "+56"
        },
        {
            name: "Perú",
            code: "+51"
        },
        {
            name: "Guatemala",
            code: "+502"
        },
        {
            name: "Costa Rica",
            code: "+506"
        }
    ];
    const ccDigitsLen = countryCode.replace("+", "").length;
    const fullPhone = `${countryCode}${phone}`; // e.g. +52 5512345678
    // total digits (country + number)
    const totalDigits = ccDigitsLen + phone.length;
    const debounce = (func, wait)=>{
        let timeout;
        return function executedFunction(...args) {
            const later = ()=>{
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };
    // --- regex helpers ---
    // Names: allow any Unicode letter and spaces; strip everything else.
    const cleanName = (v)=>v.normalize("NFC").replace(/[^\p{L}\s]/gu, "") // keep letters/spaces
        .replace(/\s{2,}/g, " ") // collapse double spaces
        .trimStart(); // avoid leading spaces while typing
    // Email: limit length + lower-case while typing
    const cleanEmail = (v)=>v.toLowerCase().slice(0, 50);
    // Phone: keep optional leading '+' then digits only; cap to 13 total chars
    const cleanPhone = (v, cc = countryCode)=>{
        let s = v.replace(/[^\d]/g, ""); // only digits
        const ccLen = cc.replace("+", "").length;
        const maxTotal = 13; // total cap (country + number)
        const maxDigits = Math.max(0, maxTotal - ccLen);
        return s.slice(0, maxDigits);
    };
    // --- validators ---
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const isFirstNameValid = firstName.trim().length > 0;
    const isLastNameValid = lastName.trim().length > 0;
    const isEmailValid = emailRegex.test(email);
    const isPhoneValid = totalDigits >= 10 && totalDigits <= 13;
    // Submit only when all required are valid + captcha
    const isFormValid = isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid && validCaptcha;
    // captcha key
    const reCaptchaKey = __TURBOPACK__import$2e$meta__?.env?.VITE_RECAPTCHA_SITE_KEY;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // --- calendar wiring (unchanged) ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Form.useEffect": ()=>{
            function handleClickOutside(e) {
                if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setOpen(false);
            }
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "Form.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["Form.useEffect"];
        }
    }["Form.useEffect"], []);
    const handleSelect = (d)=>{
        setDate(d);
        setOpen(false);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setSubmitting(true);
        setServerMsg(null);
        setServerErr(null);
        const payload = {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim(),
            countryCode,
            phoneLocal: phone,
            phoneDigits: `${ccDigitsLen}${phone.length}`,
            phoneFull: fullPhone,
            phoneRaw: fullPhone,
            comments: (comments || "").trim() || "-",
            date: date ? date.toLocaleDateString("es-MX", {
                day: "numeric",
                month: "long",
                year: "numeric"
            }) : "-",
            recaptchaToken: validCaptcha
        };
        try {
            if (!validCaptcha) throw new Error("Valida el reCAPTCHA antes de enviar.");
            if (!isFormValid) throw new Error("Verifica que todos los campos requeridos estén completos y correctos.");
            // Build the email body that the server expects
            const to = "contacto@japonpremium.com.mx";
            const cc = "grupo-santa-f@add.nocrm.io, crm@viajespremium.com.mx";
            const subject = `Contacto - Japon Premium: ${payload.firstName} ${payload.lastName}`;
            // A human readable plain text message; we also send an html version
            const text = `
Nuevo contacto desde formulario:
Nombre: ${payload.firstName} ${payload.lastName}
Email: ${payload.email}
Teléfono: ${payload.phoneFull}
Fecha deseada: ${payload.date}
Comentarios: ${payload.comments}
reCAPTCHA token: ${payload.recaptchaToken ? "(present)" : "(missing)"}
      `.trim();
            const html = `
        <h2>Nuevo contacto desde formulario</h2>
        <p><strong>Nombre:</strong> ${payload.firstName} ${payload.lastName}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Teléfono:</strong> ${payload.phoneFull}</p>
        <p><strong>Fecha deseada:</strong> ${payload.date}</p>
        <p><strong>Comentarios:</strong> ${payload.comments}</p>
      `;
            // POST to your backend
            const resp = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${__TURBOPACK__import$2e$meta__.env.VITE_API_BASE}/send-email`, {
                to,
                cc,
                subject,
                text,
                html
            });
            if (resp.status === 200) {
                setServerMsg("¡Enviado con éxito! Te contactaremos pronto.");
                // Reset form
                setFirstName("");
                setLastName("");
                setEmail("");
                setPhone("");
                setComments("");
                setDate(null);
                setValidCaptcha(null);
                // Redirect after a short pause
                setTimeout(()=>router.push("/gracias"), 500);
            } else {
                throw new Error(resp.data?.message || "Error en la respuesta del servidor");
            }
        } catch (err) {
            console.error(err);
            setServerErr(err?.response?.data?.message || err?.message || "Error al enviar el formulario.");
        } finally{
            setSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contenedorForm,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                noValidate: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formStyle,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subHeader,
                            children: "Datos personales"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                            lineNumber: 200,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputContainerName,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "firstName",
                                    type: "text",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputNameApellido,
                                    placeholder: "Tu nombre",
                                    value: firstName,
                                    onChange: (e)=>setFirstName(cleanName(e.target.value)),
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                                    lineNumber: 203,
                                    columnNumber: 15
                                }, this),
                                !isFirstNameValid && firstName !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                                    children: "Sólo letras y espacios."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                                    lineNumber: 213,
                                    columnNumber: 17
                                }, this),
                                firstName.length >= 35 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].warning,
                                    children: [
                                        "Límite: ",
                                        firstName.length,
                                        "/40 caracteres"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                                    lineNumber: 216,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "lastName",
                                    type: "text",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputNameApellido,
                                    placeholder: "Tu apellido",
                                    value: lastName,
                                    onChange: (e)=>setLastName(cleanName(e.target.value)),
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                                    lineNumber: 219,
                                    columnNumber: 15
                                }, this),
                                !isLastNameValid && lastName !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                                    children: "Sólo letras y espacios."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                                    lineNumber: 229,
                                    columnNumber: 17
                                }, this),
                                lastName.length >= 35 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].warning,
                                    children: [
                                        "Límite: ",
                                        lastName.length,
                                        "/40 caracteres"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                                    lineNumber: 232,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                            lineNumber: 202,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputContainer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].phoneRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            "aria-label": "Código de país",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                            value: countryCode,
                                            onChange: (e)=>{
                                                const newCC = e.target.value;
                                                setCountryCode(newCC);
                                                setPhone((prev)=>cleanPhone(prev, newCC));
                                            },
                                            required: true,
                                            children: countries.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: c.code,
                                                    children: [
                                                        c.name,
                                                        " (",
                                                        c.code,
                                                        ")"
                                                    ]
                                                }, c.code + c.name, true, {
                                                    fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                                                    lineNumber: 250,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                                            lineNumber: 238,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "phone",
                                            type: "text",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                            placeholder: "Tu número",
                                            value: phone,
                                            onChange: (e)=>setPhone(cleanPhone(e.target.value)),
                                            inputMode: "tel",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                                            lineNumber: 256,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                                    lineNumber: 237,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].muted,
                                    children: [
                                        "Número completo: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: fullPhone
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                                            lineNumber: 269,
                                            columnNumber: 34
                                        }, this),
                                        " — ",
                                        totalDigits,
                                        " dígitos (mín. 10, máx. 13)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                                    lineNumber: 268,
                                    columnNumber: 15
                                }, this),
                                phone !== "" && !isPhoneValid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                                    children: "Verifica el número: el total (código + número) debe tener entre 10 y 13 dígitos."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                                    lineNumber: 273,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                            lineNumber: 236,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputContainer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "email",
                                    type: "email",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                    placeholder: "correo@ejemplo.com",
                                    value: email,
                                    onChange: (e)=>setEmail(cleanEmail(e.target.value)),
                                    inputMode: "email",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].muted,
                                    children: [
                                        email.length,
                                        "/50"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                                    lineNumber: 290,
                                    columnNumber: 15
                                }, this),
                                email !== "" && !isEmailValid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                                    children: "Debe tener formato válido y terminar en .com, .com.mx o .es"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                                    lineNumber: 292,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                            lineNumber: 279,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subHeader,
                            children: "Sobre tu viaje"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                            lineNumber: 298,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputContainer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "date-display",
                                    children: "Fecha aproximada de viaje"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                                    lineNumber: 301,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: wrapperRef,
                                    style: {
                                        position: "relative",
                                        display: "flex",
                                        flexDirection: "column"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "date-display",
                                            type: "text",
                                            readOnly: true,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                            value: date ? date.toLocaleDateString() : "",
                                            placeholder: "Selecciona una fecha",
                                            onClick: ()=>setOpen((prev)=>!prev)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                                            lineNumber: 303,
                                            columnNumber: 17
                                        }, this),
                                        open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].popover,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Calendar, {
                                                value: date,
                                                onChange: handleSelect,
                                                maxDate: maxDate
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                                                lineNumber: 314,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                                            lineNumber: 313,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                                    lineNumber: 302,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                            lineNumber: 300,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputContainer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "comments",
                                    children: "Comentarios adicionales (opcional)"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                                    lineNumber: 321,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    id: "comments",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                    placeholder: "Escribe cualquier comentario...",
                                    value: comments,
                                    onChange: (e)=>setComments(e.target.value),
                                    rows: 4
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                                    lineNumber: 322,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                            lineNumber: 320,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputContainer} ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].recaptchaContainer}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReCAPTCHA, {
                                sitekey: reCaptchaKey,
                                onChange: (val)=>setValidCaptcha(val),
                                onExpired: ()=>setValidCaptcha(null),
                                onError: ()=>setValidCaptcha(null)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                                lineNumber: 333,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                            lineNumber: 332,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputContainer,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                                type: "submit",
                                disabled: submitting || !isFormValid,
                                children: submitting ? "Enviando…" : "Enviar"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                                lineNumber: 342,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                            lineNumber: 341,
                            columnNumber: 13
                        }, this),
                        serverMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].success,
                            children: serverMsg
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                            lineNumber: 351,
                            columnNumber: 27
                        }, this),
                        serverErr && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$pages$2f$Contacto$2f$Componente$2f$Form$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                            children: serverErr
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                            lineNumber: 352,
                            columnNumber: 27
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                    lineNumber: 199,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
                lineNumber: 198,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Prestige-Japan-master/src/pages/Contacto/Componente/Form.jsx",
            lineNumber: 197,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(Form, "xUsanBtJvC8fW3waJAsKGR0wcuk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c2 = Form;
const __TURBOPACK__default__export__ = Form;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ReCAPTCHA");
__turbopack_context__.k.register(_c1, "Calendar");
__turbopack_context__.k.register(_c2, "Form");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/FlyingButtons/FlyingButton.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "fade-out": "FlyingButton-module__oes-Ea__fade-out",
  "fadeOutDown": "FlyingButton-module__oes-Ea__fadeOutDown",
  "flying_button": "FlyingButton-module__oes-Ea__flying_button",
  "wa_avatar": "FlyingButton-module__oes-Ea__wa_avatar",
  "wa_body": "FlyingButton-module__oes-Ea__wa_body",
  "wa_body_bg": "FlyingButton-module__oes-Ea__wa_body_bg",
  "wa_bubble": "FlyingButton-module__oes-Ea__wa_bubble",
  "wa_bubble_response": "FlyingButton-module__oes-Ea__wa_bubble_response",
  "wa_button": "FlyingButton-module__oes-Ea__wa_button",
  "wa_close": "FlyingButton-module__oes-Ea__wa_close",
  "wa_header": "FlyingButton-module__oes-Ea__wa_header",
  "wa_info": "FlyingButton-module__oes-Ea__wa_info",
  "wa_input": "FlyingButton-module__oes-Ea__wa_input",
  "wa_input_row": "FlyingButton-module__oes-Ea__wa_input_row",
  "wa_modal": "FlyingButton-module__oes-Ea__wa_modal",
  "wa_send": "FlyingButton-module__oes-Ea__wa_send",
  "wa_time": "FlyingButton-module__oes-Ea__wa_time",
});
}),
"[project]/Desktop/Prestige-Japan-master/src/assets/wa_chat/perfil_whatsapp.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/perfil_whatsapp.16fb5ec3.webp");}),
"[project]/Desktop/Prestige-Japan-master/src/assets/wa_chat/perfil_whatsapp.webp.mjs { IMAGE => \"[project]/Desktop/Prestige-Japan-master/src/assets/wa_chat/perfil_whatsapp.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$wa_chat$2f$perfil_whatsapp$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/src/assets/wa_chat/perfil_whatsapp.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$wa_chat$2f$perfil_whatsapp$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 100,
    height: 100,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRuoAAABXRUJQVlA4TN0AAAAvB8ABAM1VICICHghADgIAAIC/Ah4BAQTqE6gRIAAAAAAAAAAAAAAAAABgJAwDAAAMAAYAAAD0doQAADwQgBQGAACA87+1AgAAIAAMAABQWBQAAAAAAAAAAAAAADAAAAACTA+GehhgQBRo74GAEwEAAACc/20LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeUPJF7tcT8AehX+p+IEBECLSaK+e8K1BCyfb4II+fdUqHp9czl7Us7LXW0FWOzW6es+/QMXbyG9NU+9sGXwNd4/p8p6kTQIEEfAA="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Prestige-Japan-master/src/assets/wa_chat/whatsapp_conversacion.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/whatsapp_conversacion.cf547dfc.svg");}),
"[project]/Desktop/Prestige-Japan-master/src/assets/wa_chat/whatsapp_conversacion.svg.mjs { IMAGE => \"[project]/Desktop/Prestige-Japan-master/src/assets/wa_chat/whatsapp_conversacion.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$wa_chat$2f$whatsapp_conversacion$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/src/assets/wa_chat/whatsapp_conversacion.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$wa_chat$2f$whatsapp_conversacion$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 380,
    height: 150,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Prestige-Japan-master/src/assets/wa_chat/chatea_con_nuestra_asistente_verde.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/chatea_con_nuestra_asistente_verde.8d9a849c.svg");}),
"[project]/Desktop/Prestige-Japan-master/src/assets/wa_chat/chatea_con_nuestra_asistente_verde.svg.mjs { IMAGE => \"[project]/Desktop/Prestige-Japan-master/src/assets/wa_chat/chatea_con_nuestra_asistente_verde.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$wa_chat$2f$chatea_con_nuestra_asistente_verde$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/src/assets/wa_chat/chatea_con_nuestra_asistente_verde.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$wa_chat$2f$chatea_con_nuestra_asistente_verde$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 300,
    height: 112,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Prestige-Japan-master/src/assets/wa_chat/icono_enviar_whatsapp.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/icono_enviar_whatsapp.84606acc.svg");}),
"[project]/Desktop/Prestige-Japan-master/src/assets/wa_chat/icono_enviar_whatsapp.svg.mjs { IMAGE => \"[project]/Desktop/Prestige-Japan-master/src/assets/wa_chat/icono_enviar_whatsapp.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$wa_chat$2f$icono_enviar_whatsapp$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/src/assets/wa_chat/icono_enviar_whatsapp.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$wa_chat$2f$icono_enviar_whatsapp$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 40,
    height: 40,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Prestige-Japan-master/src/assets/bgWhatsapp.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/bgWhatsapp.62886de8.webp");}),
"[project]/Desktop/Prestige-Japan-master/src/assets/bgWhatsapp.webp.mjs { IMAGE => \"[project]/Desktop/Prestige-Japan-master/src/assets/bgWhatsapp.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$bgWhatsapp$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/src/assets/bgWhatsapp.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$bgWhatsapp$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 800,
    height: 858,
    blurWidth: 7,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRrIAAABXRUJQVlA4TKYAAAAvBsABAM1VICICHshGDgAAAIAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0D9AADAA9kEAAAAADj/HQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIA9kEAAAAADj/HQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAo8m2DgzjmgjghB1JC4XOk4PwQOI4TECe4IBAC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/FlyingButtons/FlyingButton.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FlyingButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$FlyingButtons$2f$FlyingButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/FlyingButtons/FlyingButton.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$icono$2d$whatsapp$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$icono$2d$whatsapp$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/Prestige-Japan-master/src/assets/icono-whatsapp.svg.mjs { IMAGE => "[project]/Desktop/Prestige-Japan-master/src/assets/icono-whatsapp.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$wa_chat$2f$perfil_whatsapp$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$wa_chat$2f$perfil_whatsapp$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/Prestige-Japan-master/src/assets/wa_chat/perfil_whatsapp.webp.mjs { IMAGE => "[project]/Desktop/Prestige-Japan-master/src/assets/wa_chat/perfil_whatsapp.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$wa_chat$2f$whatsapp_conversacion$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$wa_chat$2f$whatsapp_conversacion$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/Prestige-Japan-master/src/assets/wa_chat/whatsapp_conversacion.svg.mjs { IMAGE => "[project]/Desktop/Prestige-Japan-master/src/assets/wa_chat/whatsapp_conversacion.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$wa_chat$2f$chatea_con_nuestra_asistente_verde$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$wa_chat$2f$chatea_con_nuestra_asistente_verde$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/Prestige-Japan-master/src/assets/wa_chat/chatea_con_nuestra_asistente_verde.svg.mjs { IMAGE => "[project]/Desktop/Prestige-Japan-master/src/assets/wa_chat/chatea_con_nuestra_asistente_verde.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$wa_chat$2f$icono_enviar_whatsapp$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$wa_chat$2f$icono_enviar_whatsapp$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/Prestige-Japan-master/src/assets/wa_chat/icono_enviar_whatsapp.svg.mjs { IMAGE => "[project]/Desktop/Prestige-Japan-master/src/assets/wa_chat/icono_enviar_whatsapp.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$bgWhatsapp$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$bgWhatsapp$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Desktop/Prestige-Japan-master/src/assets/bgWhatsapp.webp.mjs { IMAGE => "[project]/Desktop/Prestige-Japan-master/src/assets/bgWhatsapp.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Prestige-Japan-master/node_modules/aos/dist/aos.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
// Helper to extract src from imported images
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
function FlyingButton({ positionTop = '20px' }) {
    _s();
    const [clicked, setClicked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isClosing, setIsClosing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function handleClick() {
        if (clicked) {
            setIsClosing(true);
            setTimeout(()=>{
                setClicked(false); // desmontar modal
                setIsClosing(false); // resetear estado
            }, 300);
        } else {
            setClicked(true); // mostrar modal directamente
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FlyingButton.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init({
                duration: 1000,
                once: false // Se anima en loop
            });
        }
    }["FlyingButton.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingButton, {
                onClick: handleClick,
                positionTop: positionTop
            }, void 0, false, {
                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/FlyingButtons/FlyingButton.jsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            clicked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormWhatsapp, {
                onClick: handleClick,
                isClosing: isClosing
            }, void 0, false, {
                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/FlyingButtons/FlyingButton.jsx",
                lineNumber: 59,
                columnNumber: 19
            }, this)
        ]
    }, void 0, true);
}
_s(FlyingButton, "4UkLSjJ0Yt5KYdxXaAfEeIEu5hU=");
_c = FlyingButton;
function FloatingButton({ onClick, positionTop }) {
    _s1();
    const [isMobile, setIsMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [isHydrated, setIsHydrated] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const waLargadoSrc = getSrcValue(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$wa_chat$2f$chatea_con_nuestra_asistente_verde$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$wa_chat$2f$chatea_con_nuestra_asistente_verde$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingButton.useEffect": ()=>{
            setIsHydrated(true);
            const isDesktop = window.innerWidth > 768;
            setIsMobile(isDesktop);
            const handleResize = {
                "FloatingButton.useEffect.handleResize": ()=>setIsMobile(window.innerWidth > 768)
            }["FloatingButton.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "FloatingButton.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["FloatingButton.useEffect"];
        }
    }["FloatingButton.useEffect"], []);
    const bottomPosition = isHydrated && isMobile ? '20px' : positionTop;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$FlyingButtons$2f$FlyingButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flying_button,
        onClick: onClick,
        style: {
            bottom: bottomPosition
        },
        children: waLargadoSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: waLargadoSrc,
            width: 140,
            height: 80,
            alt: "WhatsApp Chat"
        }, void 0, false, {
            fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/FlyingButtons/FlyingButton.jsx",
            lineNumber: 85,
            columnNumber: 24
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/FlyingButtons/FlyingButton.jsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s1(FloatingButton, "1eRiBVuyf9LzoluvdmIrjFJos0c=");
_c1 = FloatingButton;
function FormWhatsapp({ onClick, isClosing }) {
    _s2();
    const [nombreCliente, setNombreCliente] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const viajesSrc = getSrcValue(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$wa_chat$2f$perfil_whatsapp$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$wa_chat$2f$perfil_whatsapp$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]);
    const bgSrc = getSrcValue(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$bgWhatsapp$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$bgWhatsapp$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]);
    const conversationSrc = getSrcValue(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$wa_chat$2f$whatsapp_conversacion$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$wa_chat$2f$whatsapp_conversacion$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]);
    const buttonSrc = getSrcValue(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$wa_chat$2f$icono_enviar_whatsapp$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$assets$2f$wa_chat$2f$icono_enviar_whatsapp$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]);
    const handleSubmitName = ()=>{
        const trimmed = nombreCliente.trim();
        if (!trimmed) return;
        // Create message with the input name and send directly to WhatsApp
        const mensaje = `Hola, soy ${trimmed} 😊 Me encantaría saber más sobre las experiencias de Japón Premium 🇯🇵`;
        const whatsappUrl = `https://wa.me/+525572176696?text=${encodeURIComponent(mensaje)}`;
        // Open WhatsApp directly
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        // Close the modal
        onClick();
    };
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmitName();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$FlyingButtons$2f$FlyingButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wa_modal} ${isClosing ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$FlyingButtons$2f$FlyingButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fade_out : ''}`,
        "data-aos": !isClosing ? 'fade-up' : '',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$FlyingButtons$2f$FlyingButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wa_header,
                children: [
                    viajesSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: viajesSrc,
                        alt: "Soporte",
                        width: 40,
                        height: 40,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$FlyingButtons$2f$FlyingButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wa_avatar
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/FlyingButtons/FlyingButton.jsx",
                        lineNumber: 125,
                        columnNumber: 23
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$FlyingButtons$2f$FlyingButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wa_info,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Japón Premium"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/FlyingButtons/FlyingButton.jsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Descubre Japón en un nivel superior"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/FlyingButtons/FlyingButton.jsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/FlyingButtons/FlyingButton.jsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$FlyingButtons$2f$FlyingButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wa_close,
                        onClick: onClick,
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/FlyingButtons/FlyingButton.jsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/FlyingButtons/FlyingButton.jsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$FlyingButtons$2f$FlyingButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wa_body,
                children: [
                    bgSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: bgSrc,
                        alt: "Fondo de conversación WhatsApp",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$FlyingButtons$2f$FlyingButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wa_body_bg,
                        width: 400,
                        height: 300
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/FlyingButtons/FlyingButton.jsx",
                        lineNumber: 134,
                        columnNumber: 19
                    }, this),
                    conversationSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$FlyingButtons$2f$FlyingButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wa_bubble,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: conversationSrc,
                            alt: "Soy anahi, tu asistente virtual, como te llamas?",
                            width: 200,
                            height: 60
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/FlyingButtons/FlyingButton.jsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/FlyingButtons/FlyingButton.jsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$FlyingButtons$2f$FlyingButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wa_input_row,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Escribe tu nombre…",
                                value: nombreCliente,
                                onChange: (e)=>setNombreCliente(e.target.value),
                                onKeyDown: handleKeyDown,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$FlyingButtons$2f$FlyingButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wa_input
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/FlyingButtons/FlyingButton.jsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$src$2f$Componentes$2f$UI$2f$FlyingButtons$2f$FlyingButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wa_send,
                                onClick: handleSubmitName,
                                disabled: !nombreCliente.trim(),
                                "aria-label": "Enviar mensaje a WhatsApp",
                                title: "Enviar a WhatsApp",
                                children: buttonSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Prestige$2d$Japan$2d$master$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: buttonSrc,
                                    alt: "Enviar",
                                    width: 20,
                                    height: 20
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/FlyingButtons/FlyingButton.jsx",
                                    lineNumber: 166,
                                    columnNumber: 27
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/FlyingButtons/FlyingButton.jsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/FlyingButtons/FlyingButton.jsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/FlyingButtons/FlyingButton.jsx",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Prestige-Japan-master/src/Componentes/UI/FlyingButtons/FlyingButton.jsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
_s2(FormWhatsapp, "9dHMvQ712hTRzB7KgQPwfQBGWm4=");
_c2 = FormWhatsapp;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FlyingButton");
__turbopack_context__.k.register(_c1, "FloatingButton");
__turbopack_context__.k.register(_c2, "FormWhatsapp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Prestige-Japan-master_src_4b799bca._.js.map