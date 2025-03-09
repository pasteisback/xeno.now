import {r as w, R as M0, F as R0} from "./monaco-Dj3DcQT7.js";
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity),
        i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
}
)();
var Mf = {
    exports: {}
}
  , Us = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D0 = w
  , A0 = Symbol.for("react.element")
  , L0 = Symbol.for("react.fragment")
  , V0 = Object.prototype.hasOwnProperty
  , I0 = D0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , _0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Rf(e, t, n) {
    var r, i = {}, s = null, o = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        V0.call(t, r) && !_0.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: A0,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: I0.current
    }
}
Us.Fragment = L0;
Us.jsx = Rf;
Us.jsxs = Rf;
Mf.exports = Us;
var u = Mf.exports
  , Df = {
    exports: {}
}
  , Oe = {}
  , Af = {
    exports: {}
}
  , Lf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(M, I) {
        var _ = M.length;
        M.push(I);
        e: for (; 0 < _; ) {
            var G = _ - 1 >>> 1
              , ie = M[G];
            if (0 < i(ie, I))
                M[G] = I,
                M[_] = ie,
                _ = G;
            else
                break e
        }
    }
    function n(M) {
        return M.length === 0 ? null : M[0]
    }
    function r(M) {
        if (M.length === 0)
            return null;
        var I = M[0]
          , _ = M.pop();
        if (_ !== I) {
            M[0] = _;
            e: for (var G = 0, ie = M.length, Pn = ie >>> 1; G < Pn; ) {
                var dt = 2 * (G + 1) - 1
                  , pr = M[dt]
                  , ft = dt + 1
                  , Tn = M[ft];
                if (0 > i(pr, _))
                    ft < ie && 0 > i(Tn, pr) ? (M[G] = Tn,
                    M[ft] = _,
                    G = ft) : (M[G] = pr,
                    M[dt] = _,
                    G = dt);
                else if (ft < ie && 0 > i(Tn, _))
                    M[G] = Tn,
                    M[ft] = _,
                    G = ft;
                else
                    break e
            }
        }
        return I
    }
    function i(M, I) {
        var _ = M.sortIndex - I.sortIndex;
        return _ !== 0 ? _ : M.id - I.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var o = Date
          , a = o.now();
        e.unstable_now = function() {
            return o.now() - a
        }
    }
    var l = []
      , c = []
      , d = 1
      , f = null
      , h = 3
      , v = !1
      , y = !1
      , x = !1
      , S = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function g(M) {
        for (var I = n(c); I !== null; ) {
            if (I.callback === null)
                r(c);
            else if (I.startTime <= M)
                r(c),
                I.sortIndex = I.expirationTime,
                t(l, I);
            else
                break;
            I = n(c)
        }
    }
    function k(M) {
        if (x = !1,
        g(M),
        !y)
            if (n(l) !== null)
                y = !0,
                nn(j);
            else {
                var I = n(c);
                I !== null && J(k, I.startTime - M)
            }
    }
    function j(M, I) {
        y = !1,
        x && (x = !1,
        m(N),
        N = -1),
        v = !0;
        var _ = h;
        try {
            for (g(I),
            f = n(l); f !== null && (!(f.expirationTime > I) || M && !F()); ) {
                var G = f.callback;
                if (typeof G == "function") {
                    f.callback = null,
                    h = f.priorityLevel;
                    var ie = G(f.expirationTime <= I);
                    I = e.unstable_now(),
                    typeof ie == "function" ? f.callback = ie : f === n(l) && r(l),
                    g(I)
                } else
                    r(l);
                f = n(l)
            }
            if (f !== null)
                var Pn = !0;
            else {
                var dt = n(c);
                dt !== null && J(k, dt.startTime - I),
                Pn = !1
            }
            return Pn
        } finally {
            f = null,
            h = _,
            v = !1
        }
    }
    var C = !1
      , T = null
      , N = -1
      , A = 5
      , R = -1;
    function F() {
        return !(e.unstable_now() - R < A)
    }
    function ce() {
        if (T !== null) {
            var M = e.unstable_now();
            R = M;
            var I = !0;
            try {
                I = T(!0, M)
            } finally {
                I ? De() : (C = !1,
                T = null)
            }
        } else
            C = !1
    }
    var De;
    if (typeof p == "function")
        De = function() {
            p(ce)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var Pt = new MessageChannel
          , tn = Pt.port2;
        Pt.port1.onmessage = ce,
        De = function() {
            tn.postMessage(null)
        }
    } else
        De = function() {
            S(ce, 0)
        }
        ;
    function nn(M) {
        T = M,
        C || (C = !0,
        De())
    }
    function J(M, I) {
        N = S(function() {
            M(e.unstable_now())
        }, I)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(M) {
        M.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        y || v || (y = !0,
        nn(j))
    }
    ,
    e.unstable_forceFrameRate = function(M) {
        0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < M ? Math.floor(1e3 / M) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return h
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(M) {
        switch (h) {
        case 1:
        case 2:
        case 3:
            var I = 3;
            break;
        default:
            I = h
        }
        var _ = h;
        h = I;
        try {
            return M()
        } finally {
            h = _
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(M, I) {
        switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            M = 3
        }
        var _ = h;
        h = M;
        try {
            return I()
        } finally {
            h = _
        }
    }
    ,
    e.unstable_scheduleCallback = function(M, I, _) {
        var G = e.unstable_now();
        switch (typeof _ == "object" && _ !== null ? (_ = _.delay,
        _ = typeof _ == "number" && 0 < _ ? G + _ : G) : _ = G,
        M) {
        case 1:
            var ie = -1;
            break;
        case 2:
            ie = 250;
            break;
        case 5:
            ie = 1073741823;
            break;
        case 4:
            ie = 1e4;
            break;
        default:
            ie = 5e3
        }
        return ie = _ + ie,
        M = {
            id: d++,
            callback: I,
            priorityLevel: M,
            startTime: _,
            expirationTime: ie,
            sortIndex: -1
        },
        _ > G ? (M.sortIndex = _,
        t(c, M),
        n(l) === null && M === n(c) && (x ? (m(N),
        N = -1) : x = !0,
        J(k, _ - G))) : (M.sortIndex = ie,
        t(l, M),
        y || v || (y = !0,
        nn(j))),
        M
    }
    ,
    e.unstable_shouldYield = F,
    e.unstable_wrapCallback = function(M) {
        var I = h;
        return function() {
            var _ = h;
            h = I;
            try {
                return M.apply(this, arguments)
            } finally {
                h = _
            }
        }
    }
}
)(Lf);
Af.exports = Lf;
var F0 = Af.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var O0 = w
  , _e = F0;
function E(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Vf = new Set
  , Gr = {};
function Sn(e, t) {
    qn(e, t),
    qn(e + "Capture", t)
}
function qn(e, t) {
    for (Gr[e] = t,
    e = 0; e < t.length; e++)
        Vf.add(t[e])
}
var wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Jo = Object.prototype.hasOwnProperty
  , z0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Wu = {}
  , $u = {};
function B0(e) {
    return Jo.call($u, e) ? !0 : Jo.call(Wu, e) ? !1 : z0.test(e) ? $u[e] = !0 : (Wu[e] = !0,
    !1)
}
function U0(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function H0(e, t, n, r) {
    if (t === null || typeof t > "u" || U0(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Ce(e, t, n, r, i, s, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = o
}
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ge[e] = new Ce(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ge[t] = new Ce(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ge[e] = new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ge[e] = new Ce(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ge[e] = new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ge[e] = new Ce(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ge[e] = new Ce(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ge[e] = new Ce(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ge[e] = new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var hl = /[\-:]([a-z])/g;
function pl(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(hl, pl);
    ge[t] = new Ce(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(hl, pl);
    ge[t] = new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(hl, pl);
    ge[t] = new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ge[e] = new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ge.xlinkHref = new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ge[e] = new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function ml(e, t, n, r) {
    var i = ge.hasOwnProperty(t) ? ge[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (H0(t, n, i, r) && (n = null),
    r || i === null ? B0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Ct = O0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Ei = Symbol.for("react.element")
  , En = Symbol.for("react.portal")
  , Mn = Symbol.for("react.fragment")
  , gl = Symbol.for("react.strict_mode")
  , ea = Symbol.for("react.profiler")
  , If = Symbol.for("react.provider")
  , _f = Symbol.for("react.context")
  , vl = Symbol.for("react.forward_ref")
  , ta = Symbol.for("react.suspense")
  , na = Symbol.for("react.suspense_list")
  , yl = Symbol.for("react.memo")
  , Et = Symbol.for("react.lazy")
  , Ff = Symbol.for("react.offscreen")
  , Ku = Symbol.iterator;
function yr(e) {
    return e === null || typeof e != "object" ? null : (e = Ku && e[Ku] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var q = Object.assign, po;
function Tr(e) {
    if (po === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            po = t && t[1] || ""
        }
    return `
` + po + e
}
var mo = !1;
function go(e, t) {
    if (!e || mo)
        return "";
    mo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var i = c.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, a = s.length - 1; 1 <= o && 0 <= a && i[o] !== s[a]; )
                a--;
            for (; 1 <= o && 0 <= a; o--,
            a--)
                if (i[o] !== s[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--,
                            a--,
                            0 > a || i[o] !== s[a]) {
                                var l = `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        mo = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Tr(e) : ""
}
function W0(e) {
    switch (e.tag) {
    case 5:
        return Tr(e.type);
    case 16:
        return Tr("Lazy");
    case 13:
        return Tr("Suspense");
    case 19:
        return Tr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = go(e.type, !1),
        e;
    case 11:
        return e = go(e.type.render, !1),
        e;
    case 1:
        return e = go(e.type, !0),
        e;
    default:
        return ""
    }
}
function ra(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Mn:
        return "Fragment";
    case En:
        return "Portal";
    case ea:
        return "Profiler";
    case gl:
        return "StrictMode";
    case ta:
        return "Suspense";
    case na:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case _f:
            return (e.displayName || "Context") + ".Consumer";
        case If:
            return (e._context.displayName || "Context") + ".Provider";
        case vl:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case yl:
            return t = e.displayName || null,
            t !== null ? t : ra(e.type) || "Memo";
        case Et:
            t = e._payload,
            e = e._init;
            try {
                return ra(e(t))
            } catch {}
        }
    return null
}
function $0(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return ra(t);
    case 8:
        return t === gl ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Kt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Of(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function K0(e) {
    var t = Of(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(o) {
                r = "" + o,
                s.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Mi(e) {
    e._valueTracker || (e._valueTracker = K0(e))
}
function zf(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Of(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function us(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function ia(e, t) {
    var n = t.checked;
    return q({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Gu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Kt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Bf(e, t) {
    t = t.checked,
    t != null && ml(e, "checked", t, !1)
}
function sa(e, t) {
    Bf(e, t);
    var n = Kt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? oa(e, t.type, n) : t.hasOwnProperty("defaultValue") && oa(e, t.type, Kt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Xu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function oa(e, t, n) {
    (t !== "number" || us(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var br = Array.isArray;
function Kn(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Kt(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function aa(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(E(91));
    return q({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Yu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(E(92));
            if (br(n)) {
                if (1 < n.length)
                    throw Error(E(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Kt(n)
    }
}
function Uf(e, t) {
    var n = Kt(t.value)
      , r = Kt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Qu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Hf(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function la(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Hf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Ri, Wf = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Ri = Ri || document.createElement("div"),
        Ri.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Ri.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Xr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Lr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , G0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Lr).forEach(function(e) {
    G0.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Lr[t] = Lr[e]
    })
});
function $f(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Lr.hasOwnProperty(e) && Lr[e] ? ("" + t).trim() : t + "px"
}
function Kf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = $f(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var X0 = q({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function ua(e, t) {
    if (t) {
        if (X0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(E(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(E(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(E(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(E(62))
    }
}
function ca(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var da = null;
function xl(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var fa = null
  , Gn = null
  , Xn = null;
function Zu(e) {
    if (e = wi(e)) {
        if (typeof fa != "function")
            throw Error(E(280));
        var t = e.stateNode;
        t && (t = Gs(t),
        fa(e.stateNode, e.type, t))
    }
}
function Gf(e) {
    Gn ? Xn ? Xn.push(e) : Xn = [e] : Gn = e
}
function Xf() {
    if (Gn) {
        var e = Gn
          , t = Xn;
        if (Xn = Gn = null,
        Zu(e),
        t)
            for (e = 0; e < t.length; e++)
                Zu(t[e])
    }
}
function Yf(e, t) {
    return e(t)
}
function Qf() {}
var vo = !1;
function Zf(e, t, n) {
    if (vo)
        return e(t, n);
    vo = !0;
    try {
        return Yf(e, t, n)
    } finally {
        vo = !1,
        (Gn !== null || Xn !== null) && (Qf(),
        Xf())
    }
}
function Yr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Gs(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(E(231, t, typeof n));
    return n
}
var ha = !1;
if (wt)
    try {
        var xr = {};
        Object.defineProperty(xr, "passive", {
            get: function() {
                ha = !0
            }
        }),
        window.addEventListener("test", xr, xr),
        window.removeEventListener("test", xr, xr)
    } catch {
        ha = !1
    }
function Y0(e, t, n, r, i, s, o, a, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (d) {
        this.onError(d)
    }
}
var Vr = !1
  , cs = null
  , ds = !1
  , pa = null
  , Q0 = {
    onError: function(e) {
        Vr = !0,
        cs = e
    }
};
function Z0(e, t, n, r, i, s, o, a, l) {
    Vr = !1,
    cs = null,
    Y0.apply(Q0, arguments)
}
function q0(e, t, n, r, i, s, o, a, l) {
    if (Z0.apply(this, arguments),
    Vr) {
        if (Vr) {
            var c = cs;
            Vr = !1,
            cs = null
        } else
            throw Error(E(198));
        ds || (ds = !0,
        pa = c)
    }
}
function kn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function qf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function qu(e) {
    if (kn(e) !== e)
        throw Error(E(188))
}
function J0(e) {
    var t = e.alternate;
    if (!t) {
        if (t = kn(e),
        t === null)
            throw Error(E(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var s = i.alternate;
        if (s === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === s.child) {
            for (s = i.child; s; ) {
                if (s === n)
                    return qu(i),
                    e;
                if (s === r)
                    return qu(i),
                    t;
                s = s.sibling
            }
            throw Error(E(188))
        }
        if (n.return !== r.return)
            n = i,
            r = s;
        else {
            for (var o = !1, a = i.child; a; ) {
                if (a === n) {
                    o = !0,
                    n = i,
                    r = s;
                    break
                }
                if (a === r) {
                    o = !0,
                    r = i,
                    n = s;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = s.child; a; ) {
                    if (a === n) {
                        o = !0,
                        n = s,
                        r = i;
                        break
                    }
                    if (a === r) {
                        o = !0,
                        r = s,
                        n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!o)
                    throw Error(E(189))
            }
        }
        if (n.alternate !== r)
            throw Error(E(190))
    }
    if (n.tag !== 3)
        throw Error(E(188));
    return n.stateNode.current === n ? e : t
}
function Jf(e) {
    return e = J0(e),
    e !== null ? eh(e) : null
}
function eh(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = eh(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var th = _e.unstable_scheduleCallback
  , Ju = _e.unstable_cancelCallback
  , eg = _e.unstable_shouldYield
  , tg = _e.unstable_requestPaint
  , re = _e.unstable_now
  , ng = _e.unstable_getCurrentPriorityLevel
  , wl = _e.unstable_ImmediatePriority
  , nh = _e.unstable_UserBlockingPriority
  , fs = _e.unstable_NormalPriority
  , rg = _e.unstable_LowPriority
  , rh = _e.unstable_IdlePriority
  , Hs = null
  , at = null;
function ig(e) {
    if (at && typeof at.onCommitFiberRoot == "function")
        try {
            at.onCommitFiberRoot(Hs, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var et = Math.clz32 ? Math.clz32 : ag
  , sg = Math.log
  , og = Math.LN2;
function ag(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (sg(e) / og | 0) | 0
}
var Di = 64
  , Ai = 4194304;
function Er(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function hs(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , s = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var a = o & ~i;
        a !== 0 ? r = Er(a) : (s &= o,
        s !== 0 && (r = Er(s)))
    } else
        o = n & ~i,
        o !== 0 ? r = Er(o) : s !== 0 && (r = Er(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    s = t & -t,
    i >= s || i === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - et(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function lg(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function ug(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var o = 31 - et(s)
          , a = 1 << o
          , l = i[o];
        l === -1 ? (!(a & n) || a & r) && (i[o] = lg(a, t)) : l <= t && (e.expiredLanes |= a),
        s &= ~a
    }
}
function ma(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function ih() {
    var e = Di;
    return Di <<= 1,
    !(Di & 4194240) && (Di = 64),
    e
}
function yo(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function yi(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - et(t),
    e[t] = n
}
function cg(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - et(n)
          , s = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~s
    }
}
function Sl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - et(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var U = 0;
function sh(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var oh, kl, ah, lh, uh, ga = !1, Li = [], It = null, _t = null, Ft = null, Qr = new Map, Zr = new Map, Rt = [], dg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ec(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        It = null;
        break;
    case "dragenter":
    case "dragleave":
        _t = null;
        break;
    case "mouseover":
    case "mouseout":
        Ft = null;
        break;
    case "pointerover":
    case "pointerout":
        Qr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Zr.delete(t.pointerId)
    }
}
function wr(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    },
    t !== null && (t = wi(t),
    t !== null && kl(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function fg(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return It = wr(It, e, t, n, r, i),
        !0;
    case "dragenter":
        return _t = wr(_t, e, t, n, r, i),
        !0;
    case "mouseover":
        return Ft = wr(Ft, e, t, n, r, i),
        !0;
    case "pointerover":
        var s = i.pointerId;
        return Qr.set(s, wr(Qr.get(s) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return s = i.pointerId,
        Zr.set(s, wr(Zr.get(s) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function ch(e) {
    var t = un(e.target);
    if (t !== null) {
        var n = kn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = qf(n),
                t !== null) {
                    e.blockedOn = t,
                    uh(e.priority, function() {
                        ah(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Yi(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = va(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            da = r,
            n.target.dispatchEvent(r),
            da = null
        } else
            return t = wi(n),
            t !== null && kl(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function tc(e, t, n) {
    Yi(e) && n.delete(t)
}
function hg() {
    ga = !1,
    It !== null && Yi(It) && (It = null),
    _t !== null && Yi(_t) && (_t = null),
    Ft !== null && Yi(Ft) && (Ft = null),
    Qr.forEach(tc),
    Zr.forEach(tc)
}
function Sr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    ga || (ga = !0,
    _e.unstable_scheduleCallback(_e.unstable_NormalPriority, hg)))
}
function qr(e) {
    function t(i) {
        return Sr(i, e)
    }
    if (0 < Li.length) {
        Sr(Li[0], e);
        for (var n = 1; n < Li.length; n++) {
            var r = Li[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (It !== null && Sr(It, e),
    _t !== null && Sr(_t, e),
    Ft !== null && Sr(Ft, e),
    Qr.forEach(t),
    Zr.forEach(t),
    n = 0; n < Rt.length; n++)
        r = Rt[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Rt.length && (n = Rt[0],
    n.blockedOn === null); )
        ch(n),
        n.blockedOn === null && Rt.shift()
}
var Yn = Ct.ReactCurrentBatchConfig
  , ps = !0;
function pg(e, t, n, r) {
    var i = U
      , s = Yn.transition;
    Yn.transition = null;
    try {
        U = 1,
        jl(e, t, n, r)
    } finally {
        U = i,
        Yn.transition = s
    }
}
function mg(e, t, n, r) {
    var i = U
      , s = Yn.transition;
    Yn.transition = null;
    try {
        U = 4,
        jl(e, t, n, r)
    } finally {
        U = i,
        Yn.transition = s
    }
}
function jl(e, t, n, r) {
    if (ps) {
        var i = va(e, t, n, r);
        if (i === null)
            bo(e, t, r, ms, n),
            ec(e, r);
        else if (fg(i, e, t, n, r))
            r.stopPropagation();
        else if (ec(e, r),
        t & 4 && -1 < dg.indexOf(e)) {
            for (; i !== null; ) {
                var s = wi(i);
                if (s !== null && oh(s),
                s = va(e, t, n, r),
                s === null && bo(e, t, r, ms, n),
                s === i)
                    break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else
            bo(e, t, r, null, n)
    }
}
var ms = null;
function va(e, t, n, r) {
    if (ms = null,
    e = xl(r),
    e = un(e),
    e !== null)
        if (t = kn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = qf(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return ms = e,
    null
}
function dh(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (ng()) {
        case wl:
            return 1;
        case nh:
            return 4;
        case fs:
        case rg:
            return 16;
        case rh:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var At = null
  , Nl = null
  , Qi = null;
function fh() {
    if (Qi)
        return Qi;
    var e, t = Nl, n = t.length, r, i = "value"in At ? At.value : At.textContent, s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++)
        ;
    return Qi = i.slice(e, 1 < r ? 1 - r : void 0)
}
function Zi(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Vi() {
    return !0
}
function nc() {
    return !1
}
function ze(e) {
    function t(n, r, i, s, o) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = s,
        this.target = o,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(s) : s[a]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Vi : nc,
        this.isPropagationStopped = nc,
        this
    }
    return q(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Vi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Vi)
        },
        persist: function() {},
        isPersistent: Vi
    }),
    t
}
var lr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Cl = ze(lr), xi = q({}, lr, {
    view: 0,
    detail: 0
}), gg = ze(xi), xo, wo, kr, Ws = q({}, xi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Pl,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== kr && (kr && e.type === "mousemove" ? (xo = e.screenX - kr.screenX,
        wo = e.screenY - kr.screenY) : wo = xo = 0,
        kr = e),
        xo)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : wo
    }
}), rc = ze(Ws), vg = q({}, Ws, {
    dataTransfer: 0
}), yg = ze(vg), xg = q({}, xi, {
    relatedTarget: 0
}), So = ze(xg), wg = q({}, lr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Sg = ze(wg), kg = q({}, lr, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), jg = ze(kg), Ng = q({}, lr, {
    data: 0
}), ic = ze(Ng), Cg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Pg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Tg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function bg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Tg[e]) ? !!t[e] : !1
}
function Pl() {
    return bg
}
var Eg = q({}, xi, {
    key: function(e) {
        if (e.key) {
            var t = Cg[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Zi(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Pg[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Pl,
    charCode: function(e) {
        return e.type === "keypress" ? Zi(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Zi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Mg = ze(Eg)
  , Rg = q({}, Ws, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , sc = ze(Rg)
  , Dg = q({}, xi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pl
})
  , Ag = ze(Dg)
  , Lg = q({}, lr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Vg = ze(Lg)
  , Ig = q({}, Ws, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , _g = ze(Ig)
  , Fg = [9, 13, 27, 32]
  , Tl = wt && "CompositionEvent"in window
  , Ir = null;
wt && "documentMode"in document && (Ir = document.documentMode);
var Og = wt && "TextEvent"in window && !Ir
  , hh = wt && (!Tl || Ir && 8 < Ir && 11 >= Ir)
  , oc = " "
  , ac = !1;
function ph(e, t) {
    switch (e) {
    case "keyup":
        return Fg.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function mh(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Rn = !1;
function zg(e, t) {
    switch (e) {
    case "compositionend":
        return mh(t);
    case "keypress":
        return t.which !== 32 ? null : (ac = !0,
        oc);
    case "textInput":
        return e = t.data,
        e === oc && ac ? null : e;
    default:
        return null
    }
}
function Bg(e, t) {
    if (Rn)
        return e === "compositionend" || !Tl && ph(e, t) ? (e = fh(),
        Qi = Nl = At = null,
        Rn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return hh && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Ug = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function lc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ug[e.type] : t === "textarea"
}
function gh(e, t, n, r) {
    Gf(r),
    t = gs(t, "onChange"),
    0 < t.length && (n = new Cl("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var _r = null
  , Jr = null;
function Hg(e) {
    Th(e, 0)
}
function $s(e) {
    var t = Ln(e);
    if (zf(t))
        return e
}
function Wg(e, t) {
    if (e === "change")
        return t
}
var vh = !1;
if (wt) {
    var ko;
    if (wt) {
        var jo = "oninput"in document;
        if (!jo) {
            var uc = document.createElement("div");
            uc.setAttribute("oninput", "return;"),
            jo = typeof uc.oninput == "function"
        }
        ko = jo
    } else
        ko = !1;
    vh = ko && (!document.documentMode || 9 < document.documentMode)
}
function cc() {
    _r && (_r.detachEvent("onpropertychange", yh),
    Jr = _r = null)
}
function yh(e) {
    if (e.propertyName === "value" && $s(Jr)) {
        var t = [];
        gh(t, Jr, e, xl(e)),
        Zf(Hg, t)
    }
}
function $g(e, t, n) {
    e === "focusin" ? (cc(),
    _r = t,
    Jr = n,
    _r.attachEvent("onpropertychange", yh)) : e === "focusout" && cc()
}
function Kg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return $s(Jr)
}
function Gg(e, t) {
    if (e === "click")
        return $s(t)
}
function Xg(e, t) {
    if (e === "input" || e === "change")
        return $s(t)
}
function Yg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var nt = typeof Object.is == "function" ? Object.is : Yg;
function ei(e, t) {
    if (nt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Jo.call(t, i) || !nt(e[i], t[i]))
            return !1
    }
    return !0
}
function dc(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function fc(e, t) {
    var n = dc(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = dc(n)
    }
}
function xh(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? xh(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function wh() {
    for (var e = window, t = us(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = us(e.document)
    }
    return t
}
function bl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Qg(e) {
    var t = wh()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && xh(n.ownerDocument.documentElement, n)) {
        if (r !== null && bl(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , s = Math.min(r.start, i);
                r = r.end === void 0 ? s : Math.min(r.end, i),
                !e.extend && s > r && (i = r,
                r = s,
                s = i),
                i = fc(n, s);
                var o = fc(n, r);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Zg = wt && "documentMode"in document && 11 >= document.documentMode
  , Dn = null
  , ya = null
  , Fr = null
  , xa = !1;
function hc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    xa || Dn == null || Dn !== us(r) || (r = Dn,
    "selectionStart"in r && bl(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Fr && ei(Fr, r) || (Fr = r,
    r = gs(ya, "onSelect"),
    0 < r.length && (t = new Cl("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Dn)))
}
function Ii(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var An = {
    animationend: Ii("Animation", "AnimationEnd"),
    animationiteration: Ii("Animation", "AnimationIteration"),
    animationstart: Ii("Animation", "AnimationStart"),
    transitionend: Ii("Transition", "TransitionEnd")
}
  , No = {}
  , Sh = {};
wt && (Sh = document.createElement("div").style,
"AnimationEvent"in window || (delete An.animationend.animation,
delete An.animationiteration.animation,
delete An.animationstart.animation),
"TransitionEvent"in window || delete An.transitionend.transition);
function Ks(e) {
    if (No[e])
        return No[e];
    if (!An[e])
        return e;
    var t = An[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Sh)
            return No[e] = t[n];
    return e
}
var kh = Ks("animationend")
  , jh = Ks("animationiteration")
  , Nh = Ks("animationstart")
  , Ch = Ks("transitionend")
  , Ph = new Map
  , pc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Qt(e, t) {
    Ph.set(e, t),
    Sn(t, [e])
}
for (var Co = 0; Co < pc.length; Co++) {
    var Po = pc[Co]
      , qg = Po.toLowerCase()
      , Jg = Po[0].toUpperCase() + Po.slice(1);
    Qt(qg, "on" + Jg)
}
Qt(kh, "onAnimationEnd");
Qt(jh, "onAnimationIteration");
Qt(Nh, "onAnimationStart");
Qt("dblclick", "onDoubleClick");
Qt("focusin", "onFocus");
Qt("focusout", "onBlur");
Qt(Ch, "onTransitionEnd");
qn("onMouseEnter", ["mouseout", "mouseover"]);
qn("onMouseLeave", ["mouseout", "mouseover"]);
qn("onPointerEnter", ["pointerout", "pointerover"]);
qn("onPointerLeave", ["pointerout", "pointerover"]);
Sn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Sn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Sn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Sn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Sn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Mr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , ev = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));
function mc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    q0(r, t, void 0, e),
    e.currentTarget = null
}
function Th(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o]
                      , l = a.instance
                      , c = a.currentTarget;
                    if (a = a.listener,
                    l !== s && i.isPropagationStopped())
                        break e;
                    mc(i, a, c),
                    s = l
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (a = r[o],
                    l = a.instance,
                    c = a.currentTarget,
                    a = a.listener,
                    l !== s && i.isPropagationStopped())
                        break e;
                    mc(i, a, c),
                    s = l
                }
        }
    }
    if (ds)
        throw e = pa,
        ds = !1,
        pa = null,
        e
}
function W(e, t) {
    var n = t[Na];
    n === void 0 && (n = t[Na] = new Set);
    var r = e + "__bubble";
    n.has(r) || (bh(t, e, 2, !1),
    n.add(r))
}
function To(e, t, n) {
    var r = 0;
    t && (r |= 4),
    bh(n, e, r, t)
}
var _i = "_reactListening" + Math.random().toString(36).slice(2);
function ti(e) {
    if (!e[_i]) {
        e[_i] = !0,
        Vf.forEach(function(n) {
            n !== "selectionchange" && (ev.has(n) || To(n, !1, e),
            To(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[_i] || (t[_i] = !0,
        To("selectionchange", !1, t))
    }
}
function bh(e, t, n, r) {
    switch (dh(t)) {
    case 1:
        var i = pg;
        break;
    case 4:
        i = mg;
        break;
    default:
        i = jl
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !ha || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function bo(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || a.nodeType === 8 && a.parentNode === i)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var l = o.tag;
                        if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo,
                        l === i || l.nodeType === 8 && l.parentNode === i))
                            return;
                        o = o.return
                    }
                for (; a !== null; ) {
                    if (o = un(a),
                    o === null)
                        return;
                    if (l = o.tag,
                    l === 5 || l === 6) {
                        r = s = o;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    Zf(function() {
        var c = s
          , d = xl(n)
          , f = [];
        e: {
            var h = Ph.get(e);
            if (h !== void 0) {
                var v = Cl
                  , y = e;
                switch (e) {
                case "keypress":
                    if (Zi(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    v = Mg;
                    break;
                case "focusin":
                    y = "focus",
                    v = So;
                    break;
                case "focusout":
                    y = "blur",
                    v = So;
                    break;
                case "beforeblur":
                case "afterblur":
                    v = So;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    v = rc;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    v = yg;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    v = Ag;
                    break;
                case kh:
                case jh:
                case Nh:
                    v = Sg;
                    break;
                case Ch:
                    v = Vg;
                    break;
                case "scroll":
                    v = gg;
                    break;
                case "wheel":
                    v = _g;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    v = jg;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    v = sc
                }
                var x = (t & 4) !== 0
                  , S = !x && e === "scroll"
                  , m = x ? h !== null ? h + "Capture" : null : h;
                x = [];
                for (var p = c, g; p !== null; ) {
                    g = p;
                    var k = g.stateNode;
                    if (g.tag === 5 && k !== null && (g = k,
                    m !== null && (k = Yr(p, m),
                    k != null && x.push(ni(p, k, g)))),
                    S)
                        break;
                    p = p.return
                }
                0 < x.length && (h = new v(h,y,null,n,d),
                f.push({
                    event: h,
                    listeners: x
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover",
                v = e === "mouseout" || e === "pointerout",
                h && n !== da && (y = n.relatedTarget || n.fromElement) && (un(y) || y[St]))
                    break e;
                if ((v || h) && (h = d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window,
                v ? (y = n.relatedTarget || n.toElement,
                v = c,
                y = y ? un(y) : null,
                y !== null && (S = kn(y),
                y !== S || y.tag !== 5 && y.tag !== 6) && (y = null)) : (v = null,
                y = c),
                v !== y)) {
                    if (x = rc,
                    k = "onMouseLeave",
                    m = "onMouseEnter",
                    p = "mouse",
                    (e === "pointerout" || e === "pointerover") && (x = sc,
                    k = "onPointerLeave",
                    m = "onPointerEnter",
                    p = "pointer"),
                    S = v == null ? h : Ln(v),
                    g = y == null ? h : Ln(y),
                    h = new x(k,p + "leave",v,n,d),
                    h.target = S,
                    h.relatedTarget = g,
                    k = null,
                    un(d) === c && (x = new x(m,p + "enter",y,n,d),
                    x.target = g,
                    x.relatedTarget = S,
                    k = x),
                    S = k,
                    v && y)
                        t: {
                            for (x = v,
                            m = y,
                            p = 0,
                            g = x; g; g = bn(g))
                                p++;
                            for (g = 0,
                            k = m; k; k = bn(k))
                                g++;
                            for (; 0 < p - g; )
                                x = bn(x),
                                p--;
                            for (; 0 < g - p; )
                                m = bn(m),
                                g--;
                            for (; p--; ) {
                                if (x === m || m !== null && x === m.alternate)
                                    break t;
                                x = bn(x),
                                m = bn(m)
                            }
                            x = null
                        }
                    else
                        x = null;
                    v !== null && gc(f, h, v, x, !1),
                    y !== null && S !== null && gc(f, S, y, x, !0)
                }
            }
            e: {
                if (h = c ? Ln(c) : window,
                v = h.nodeName && h.nodeName.toLowerCase(),
                v === "select" || v === "input" && h.type === "file")
                    var j = Wg;
                else if (lc(h))
                    if (vh)
                        j = Xg;
                    else {
                        j = Kg;
                        var C = $g
                    }
                else
                    (v = h.nodeName) && v.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (j = Gg);
                if (j && (j = j(e, c))) {
                    gh(f, j, n, d);
                    break e
                }
                C && C(e, h, c),
                e === "focusout" && (C = h._wrapperState) && C.controlled && h.type === "number" && oa(h, "number", h.value)
            }
            switch (C = c ? Ln(c) : window,
            e) {
            case "focusin":
                (lc(C) || C.contentEditable === "true") && (Dn = C,
                ya = c,
                Fr = null);
                break;
            case "focusout":
                Fr = ya = Dn = null;
                break;
            case "mousedown":
                xa = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                xa = !1,
                hc(f, n, d);
                break;
            case "selectionchange":
                if (Zg)
                    break;
            case "keydown":
            case "keyup":
                hc(f, n, d)
            }
            var T;
            if (Tl)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var N = "onCompositionStart";
                        break e;
                    case "compositionend":
                        N = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        N = "onCompositionUpdate";
                        break e
                    }
                    N = void 0
                }
            else
                Rn ? ph(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
            N && (hh && n.locale !== "ko" && (Rn || N !== "onCompositionStart" ? N === "onCompositionEnd" && Rn && (T = fh()) : (At = d,
            Nl = "value"in At ? At.value : At.textContent,
            Rn = !0)),
            C = gs(c, N),
            0 < C.length && (N = new ic(N,e,null,n,d),
            f.push({
                event: N,
                listeners: C
            }),
            T ? N.data = T : (T = mh(n),
            T !== null && (N.data = T)))),
            (T = Og ? zg(e, n) : Bg(e, n)) && (c = gs(c, "onBeforeInput"),
            0 < c.length && (d = new ic("onBeforeInput","beforeinput",null,n,d),
            f.push({
                event: d,
                listeners: c
            }),
            d.data = T))
        }
        Th(f, t)
    })
}
function ni(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function gs(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , s = i.stateNode;
        i.tag === 5 && s !== null && (i = s,
        s = Yr(e, n),
        s != null && r.unshift(ni(e, s, i)),
        s = Yr(e, t),
        s != null && r.push(ni(e, s, i))),
        e = e.return
    }
    return r
}
function bn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function gc(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , c = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && c !== null && (a = c,
        i ? (l = Yr(n, s),
        l != null && o.unshift(ni(n, l, a))) : i || (l = Yr(n, s),
        l != null && o.push(ni(n, l, a)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var tv = /\r\n?/g
  , nv = /\u0000|\uFFFD/g;
function vc(e) {
    return (typeof e == "string" ? e : "" + e).replace(tv, `
`).replace(nv, "")
}
function Fi(e, t, n) {
    if (t = vc(t),
    vc(e) !== t && n)
        throw Error(E(425))
}
function vs() {}
var wa = null
  , Sa = null;
function ka(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ja = typeof setTimeout == "function" ? setTimeout : void 0
  , rv = typeof clearTimeout == "function" ? clearTimeout : void 0
  , yc = typeof Promise == "function" ? Promise : void 0
  , iv = typeof queueMicrotask == "function" ? queueMicrotask : typeof yc < "u" ? function(e) {
    return yc.resolve(null).then(e).catch(sv)
}
: ja;
function sv(e) {
    setTimeout(function() {
        throw e
    })
}
function Eo(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    qr(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    qr(t)
}
function Ot(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function xc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var ur = Math.random().toString(36).slice(2)
  , ot = "__reactFiber$" + ur
  , ri = "__reactProps$" + ur
  , St = "__reactContainer$" + ur
  , Na = "__reactEvents$" + ur
  , ov = "__reactListeners$" + ur
  , av = "__reactHandles$" + ur;
function un(e) {
    var t = e[ot];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[St] || n[ot]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = xc(e); e !== null; ) {
                    if (n = e[ot])
                        return n;
                    e = xc(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function wi(e) {
    return e = e[ot] || e[St],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Ln(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(E(33))
}
function Gs(e) {
    return e[ri] || null
}
var Ca = []
  , Vn = -1;
function Zt(e) {
    return {
        current: e
    }
}
function $(e) {
    0 > Vn || (e.current = Ca[Vn],
    Ca[Vn] = null,
    Vn--)
}
function H(e, t) {
    Vn++,
    Ca[Vn] = e.current,
    e.current = t
}
var Gt = {}
  , ke = Zt(Gt)
  , Ee = Zt(!1)
  , gn = Gt;
function Jn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Gt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, s;
    for (s in n)
        i[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function Me(e) {
    return e = e.childContextTypes,
    e != null
}
function ys() {
    $(Ee),
    $(ke)
}
function wc(e, t, n) {
    if (ke.current !== Gt)
        throw Error(E(168));
    H(ke, t),
    H(Ee, n)
}
function Eh(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(E(108, $0(e) || "Unknown", i));
    return q({}, n, r)
}
function xs(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Gt,
    gn = ke.current,
    H(ke, e),
    H(Ee, Ee.current),
    !0
}
function Sc(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(E(169));
    n ? (e = Eh(e, t, gn),
    r.__reactInternalMemoizedMergedChildContext = e,
    $(Ee),
    $(ke),
    H(ke, e)) : $(Ee),
    H(Ee, n)
}
var pt = null
  , Xs = !1
  , Mo = !1;
function Mh(e) {
    pt === null ? pt = [e] : pt.push(e)
}
function lv(e) {
    Xs = !0,
    Mh(e)
}
function qt() {
    if (!Mo && pt !== null) {
        Mo = !0;
        var e = 0
          , t = U;
        try {
            var n = pt;
            for (U = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            pt = null,
            Xs = !1
        } catch (i) {
            throw pt !== null && (pt = pt.slice(e + 1)),
            th(wl, qt),
            i
        } finally {
            U = t,
            Mo = !1
        }
    }
    return null
}
var In = []
  , _n = 0
  , ws = null
  , Ss = 0
  , He = []
  , We = 0
  , vn = null
  , mt = 1
  , gt = "";
function sn(e, t) {
    In[_n++] = Ss,
    In[_n++] = ws,
    ws = e,
    Ss = t
}
function Rh(e, t, n) {
    He[We++] = mt,
    He[We++] = gt,
    He[We++] = vn,
    vn = e;
    var r = mt;
    e = gt;
    var i = 32 - et(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var s = 32 - et(t) + i;
    if (30 < s) {
        var o = i - i % 5;
        s = (r & (1 << o) - 1).toString(32),
        r >>= o,
        i -= o,
        mt = 1 << 32 - et(t) + i | n << i | r,
        gt = s + e
    } else
        mt = 1 << s | n << i | r,
        gt = e
}
function El(e) {
    e.return !== null && (sn(e, 1),
    Rh(e, 1, 0))
}
function Ml(e) {
    for (; e === ws; )
        ws = In[--_n],
        In[_n] = null,
        Ss = In[--_n],
        In[_n] = null;
    for (; e === vn; )
        vn = He[--We],
        He[We] = null,
        gt = He[--We],
        He[We] = null,
        mt = He[--We],
        He[We] = null
}
var Ve = null
  , Le = null
  , X = !1
  , Je = null;
function Dh(e, t) {
    var n = $e(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function kc(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Ve = e,
        Le = Ot(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Ve = e,
        Le = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = vn !== null ? {
            id: mt,
            overflow: gt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = $e(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Ve = e,
        Le = null,
        !0) : !1;
    default:
        return !1
    }
}
function Pa(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Ta(e) {
    if (X) {
        var t = Le;
        if (t) {
            var n = t;
            if (!kc(e, t)) {
                if (Pa(e))
                    throw Error(E(418));
                t = Ot(n.nextSibling);
                var r = Ve;
                t && kc(e, t) ? Dh(r, n) : (e.flags = e.flags & -4097 | 2,
                X = !1,
                Ve = e)
            }
        } else {
            if (Pa(e))
                throw Error(E(418));
            e.flags = e.flags & -4097 | 2,
            X = !1,
            Ve = e
        }
    }
}
function jc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ve = e
}
function Oi(e) {
    if (e !== Ve)
        return !1;
    if (!X)
        return jc(e),
        X = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !ka(e.type, e.memoizedProps)),
    t && (t = Le)) {
        if (Pa(e))
            throw Ah(),
            Error(E(418));
        for (; t; )
            Dh(e, t),
            t = Ot(t.nextSibling)
    }
    if (jc(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(E(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Le = Ot(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Le = null
        }
    } else
        Le = Ve ? Ot(e.stateNode.nextSibling) : null;
    return !0
}
function Ah() {
    for (var e = Le; e; )
        e = Ot(e.nextSibling)
}
function er() {
    Le = Ve = null,
    X = !1
}
function Rl(e) {
    Je === null ? Je = [e] : Je.push(e)
}
var uv = Ct.ReactCurrentBatchConfig;
function jr(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(E(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(E(147, e));
            var i = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
                var a = i.refs;
                o === null ? delete a[s] : a[s] = o
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(E(284));
        if (!n._owner)
            throw Error(E(290, e))
    }
    return e
}
function zi(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Nc(e) {
    var t = e._init;
    return t(e._payload)
}
function Lh(e) {
    function t(m, p) {
        if (e) {
            var g = m.deletions;
            g === null ? (m.deletions = [p],
            m.flags |= 16) : g.push(p)
        }
    }
    function n(m, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(m, p),
            p = p.sibling;
        return null
    }
    function r(m, p) {
        for (m = new Map; p !== null; )
            p.key !== null ? m.set(p.key, p) : m.set(p.index, p),
            p = p.sibling;
        return m
    }
    function i(m, p) {
        return m = Ht(m, p),
        m.index = 0,
        m.sibling = null,
        m
    }
    function s(m, p, g) {
        return m.index = g,
        e ? (g = m.alternate,
        g !== null ? (g = g.index,
        g < p ? (m.flags |= 2,
        p) : g) : (m.flags |= 2,
        p)) : (m.flags |= 1048576,
        p)
    }
    function o(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function a(m, p, g, k) {
        return p === null || p.tag !== 6 ? (p = _o(g, m.mode, k),
        p.return = m,
        p) : (p = i(p, g),
        p.return = m,
        p)
    }
    function l(m, p, g, k) {
        var j = g.type;
        return j === Mn ? d(m, p, g.props.children, k, g.key) : p !== null && (p.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Et && Nc(j) === p.type) ? (k = i(p, g.props),
        k.ref = jr(m, p, g),
        k.return = m,
        k) : (k = is(g.type, g.key, g.props, null, m.mode, k),
        k.ref = jr(m, p, g),
        k.return = m,
        k)
    }
    function c(m, p, g, k) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== g.containerInfo || p.stateNode.implementation !== g.implementation ? (p = Fo(g, m.mode, k),
        p.return = m,
        p) : (p = i(p, g.children || []),
        p.return = m,
        p)
    }
    function d(m, p, g, k, j) {
        return p === null || p.tag !== 7 ? (p = pn(g, m.mode, k, j),
        p.return = m,
        p) : (p = i(p, g),
        p.return = m,
        p)
    }
    function f(m, p, g) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = _o("" + p, m.mode, g),
            p.return = m,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case Ei:
                return g = is(p.type, p.key, p.props, null, m.mode, g),
                g.ref = jr(m, null, p),
                g.return = m,
                g;
            case En:
                return p = Fo(p, m.mode, g),
                p.return = m,
                p;
            case Et:
                var k = p._init;
                return f(m, k(p._payload), g)
            }
            if (br(p) || yr(p))
                return p = pn(p, m.mode, g, null),
                p.return = m,
                p;
            zi(m, p)
        }
        return null
    }
    function h(m, p, g, k) {
        var j = p !== null ? p.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return j !== null ? null : a(m, p, "" + g, k);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case Ei:
                return g.key === j ? l(m, p, g, k) : null;
            case En:
                return g.key === j ? c(m, p, g, k) : null;
            case Et:
                return j = g._init,
                h(m, p, j(g._payload), k)
            }
            if (br(g) || yr(g))
                return j !== null ? null : d(m, p, g, k, null);
            zi(m, g)
        }
        return null
    }
    function v(m, p, g, k, j) {
        if (typeof k == "string" && k !== "" || typeof k == "number")
            return m = m.get(g) || null,
            a(p, m, "" + k, j);
        if (typeof k == "object" && k !== null) {
            switch (k.$$typeof) {
            case Ei:
                return m = m.get(k.key === null ? g : k.key) || null,
                l(p, m, k, j);
            case En:
                return m = m.get(k.key === null ? g : k.key) || null,
                c(p, m, k, j);
            case Et:
                var C = k._init;
                return v(m, p, g, C(k._payload), j)
            }
            if (br(k) || yr(k))
                return m = m.get(g) || null,
                d(p, m, k, j, null);
            zi(p, k)
        }
        return null
    }
    function y(m, p, g, k) {
        for (var j = null, C = null, T = p, N = p = 0, A = null; T !== null && N < g.length; N++) {
            T.index > N ? (A = T,
            T = null) : A = T.sibling;
            var R = h(m, T, g[N], k);
            if (R === null) {
                T === null && (T = A);
                break
            }
            e && T && R.alternate === null && t(m, T),
            p = s(R, p, N),
            C === null ? j = R : C.sibling = R,
            C = R,
            T = A
        }
        if (N === g.length)
            return n(m, T),
            X && sn(m, N),
            j;
        if (T === null) {
            for (; N < g.length; N++)
                T = f(m, g[N], k),
                T !== null && (p = s(T, p, N),
                C === null ? j = T : C.sibling = T,
                C = T);
            return X && sn(m, N),
            j
        }
        for (T = r(m, T); N < g.length; N++)
            A = v(T, m, N, g[N], k),
            A !== null && (e && A.alternate !== null && T.delete(A.key === null ? N : A.key),
            p = s(A, p, N),
            C === null ? j = A : C.sibling = A,
            C = A);
        return e && T.forEach(function(F) {
            return t(m, F)
        }),
        X && sn(m, N),
        j
    }
    function x(m, p, g, k) {
        var j = yr(g);
        if (typeof j != "function")
            throw Error(E(150));
        if (g = j.call(g),
        g == null)
            throw Error(E(151));
        for (var C = j = null, T = p, N = p = 0, A = null, R = g.next(); T !== null && !R.done; N++,
        R = g.next()) {
            T.index > N ? (A = T,
            T = null) : A = T.sibling;
            var F = h(m, T, R.value, k);
            if (F === null) {
                T === null && (T = A);
                break
            }
            e && T && F.alternate === null && t(m, T),
            p = s(F, p, N),
            C === null ? j = F : C.sibling = F,
            C = F,
            T = A
        }
        if (R.done)
            return n(m, T),
            X && sn(m, N),
            j;
        if (T === null) {
            for (; !R.done; N++,
            R = g.next())
                R = f(m, R.value, k),
                R !== null && (p = s(R, p, N),
                C === null ? j = R : C.sibling = R,
                C = R);
            return X && sn(m, N),
            j
        }
        for (T = r(m, T); !R.done; N++,
        R = g.next())
            R = v(T, m, N, R.value, k),
            R !== null && (e && R.alternate !== null && T.delete(R.key === null ? N : R.key),
            p = s(R, p, N),
            C === null ? j = R : C.sibling = R,
            C = R);
        return e && T.forEach(function(ce) {
            return t(m, ce)
        }),
        X && sn(m, N),
        j
    }
    function S(m, p, g, k) {
        if (typeof g == "object" && g !== null && g.type === Mn && g.key === null && (g = g.props.children),
        typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case Ei:
                e: {
                    for (var j = g.key, C = p; C !== null; ) {
                        if (C.key === j) {
                            if (j = g.type,
                            j === Mn) {
                                if (C.tag === 7) {
                                    n(m, C.sibling),
                                    p = i(C, g.props.children),
                                    p.return = m,
                                    m = p;
                                    break e
                                }
                            } else if (C.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Et && Nc(j) === C.type) {
                                n(m, C.sibling),
                                p = i(C, g.props),
                                p.ref = jr(m, C, g),
                                p.return = m,
                                m = p;
                                break e
                            }
                            n(m, C);
                            break
                        } else
                            t(m, C);
                        C = C.sibling
                    }
                    g.type === Mn ? (p = pn(g.props.children, m.mode, k, g.key),
                    p.return = m,
                    m = p) : (k = is(g.type, g.key, g.props, null, m.mode, k),
                    k.ref = jr(m, p, g),
                    k.return = m,
                    m = k)
                }
                return o(m);
            case En:
                e: {
                    for (C = g.key; p !== null; ) {
                        if (p.key === C)
                            if (p.tag === 4 && p.stateNode.containerInfo === g.containerInfo && p.stateNode.implementation === g.implementation) {
                                n(m, p.sibling),
                                p = i(p, g.children || []),
                                p.return = m,
                                m = p;
                                break e
                            } else {
                                n(m, p);
                                break
                            }
                        else
                            t(m, p);
                        p = p.sibling
                    }
                    p = Fo(g, m.mode, k),
                    p.return = m,
                    m = p
                }
                return o(m);
            case Et:
                return C = g._init,
                S(m, p, C(g._payload), k)
            }
            if (br(g))
                return y(m, p, g, k);
            if (yr(g))
                return x(m, p, g, k);
            zi(m, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g,
        p !== null && p.tag === 6 ? (n(m, p.sibling),
        p = i(p, g),
        p.return = m,
        m = p) : (n(m, p),
        p = _o(g, m.mode, k),
        p.return = m,
        m = p),
        o(m)) : n(m, p)
    }
    return S
}
var tr = Lh(!0)
  , Vh = Lh(!1)
  , ks = Zt(null)
  , js = null
  , Fn = null
  , Dl = null;
function Al() {
    Dl = Fn = js = null
}
function Ll(e) {
    var t = ks.current;
    $(ks),
    e._currentValue = t
}
function ba(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Qn(e, t) {
    js = e,
    Dl = Fn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (be = !0),
    e.firstContext = null)
}
function Ge(e) {
    var t = e._currentValue;
    if (Dl !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Fn === null) {
            if (js === null)
                throw Error(E(308));
            Fn = e,
            js.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Fn = Fn.next = e;
    return t
}
var cn = null;
function Vl(e) {
    cn === null ? cn = [e] : cn.push(e)
}
function Ih(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    Vl(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    kt(e, r)
}
function kt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Mt = !1;
function Il(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function _h(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function vt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function zt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    z & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        kt(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    Vl(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    kt(e, n)
}
function qi(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Sl(e, n)
    }
}
function Cc(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? i = s = o : s = s.next = o,
                n = n.next
            } while (n !== null);
            s === null ? i = s = t : s = s.next = t
        } else
            i = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Ns(e, t, n, r) {
    var i = e.updateQueue;
    Mt = !1;
    var s = i.firstBaseUpdate
      , o = i.lastBaseUpdate
      , a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a
          , c = l.next;
        l.next = null,
        o === null ? s = c : o.next = c,
        o = l;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        a = d.lastBaseUpdate,
        a !== o && (a === null ? d.firstBaseUpdate = c : a.next = c,
        d.lastBaseUpdate = l))
    }
    if (s !== null) {
        var f = i.baseState;
        o = 0,
        d = c = l = null,
        a = s;
        do {
            var h = a.lane
              , v = a.eventTime;
            if ((r & h) === h) {
                d !== null && (d = d.next = {
                    eventTime: v,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var y = e
                      , x = a;
                    switch (h = t,
                    v = n,
                    x.tag) {
                    case 1:
                        if (y = x.payload,
                        typeof y == "function") {
                            f = y.call(v, f, h);
                            break e
                        }
                        f = y;
                        break e;
                    case 3:
                        y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = x.payload,
                        h = typeof y == "function" ? y.call(v, f, h) : y,
                        h == null)
                            break e;
                        f = q({}, f, h);
                        break e;
                    case 2:
                        Mt = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                h = i.effects,
                h === null ? i.effects = [a] : h.push(a))
            } else
                v = {
                    eventTime: v,
                    lane: h,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                d === null ? (c = d = v,
                l = f) : d = d.next = v,
                o |= h;
            if (a = a.next,
            a === null) {
                if (a = i.shared.pending,
                a === null)
                    break;
                h = a,
                a = h.next,
                h.next = null,
                i.lastBaseUpdate = h,
                i.shared.pending = null
            }
        } while (!0);
        if (d === null && (l = f),
        i.baseState = l,
        i.firstBaseUpdate = c,
        i.lastBaseUpdate = d,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                o |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            s === null && (i.shared.lanes = 0);
        xn |= o,
        e.lanes = o,
        e.memoizedState = f
    }
}
function Pc(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(E(191, i));
                i.call(r)
            }
        }
}
var Si = {}
  , lt = Zt(Si)
  , ii = Zt(Si)
  , si = Zt(Si);
function dn(e) {
    if (e === Si)
        throw Error(E(174));
    return e
}
function _l(e, t) {
    switch (H(si, t),
    H(ii, e),
    H(lt, Si),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : la(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = la(t, e)
    }
    $(lt),
    H(lt, t)
}
function nr() {
    $(lt),
    $(ii),
    $(si)
}
function Fh(e) {
    dn(si.current);
    var t = dn(lt.current)
      , n = la(t, e.type);
    t !== n && (H(ii, e),
    H(lt, n))
}
function Fl(e) {
    ii.current === e && ($(lt),
    $(ii))
}
var Y = Zt(0);
function Cs(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Ro = [];
function Ol() {
    for (var e = 0; e < Ro.length; e++)
        Ro[e]._workInProgressVersionPrimary = null;
    Ro.length = 0
}
var Ji = Ct.ReactCurrentDispatcher
  , Do = Ct.ReactCurrentBatchConfig
  , yn = 0
  , Z = null
  , le = null
  , de = null
  , Ps = !1
  , Or = !1
  , oi = 0
  , cv = 0;
function ve() {
    throw Error(E(321))
}
function zl(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!nt(e[n], t[n]))
            return !1;
    return !0
}
function Bl(e, t, n, r, i, s) {
    if (yn = s,
    Z = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Ji.current = e === null || e.memoizedState === null ? pv : mv,
    e = n(r, i),
    Or) {
        s = 0;
        do {
            if (Or = !1,
            oi = 0,
            25 <= s)
                throw Error(E(301));
            s += 1,
            de = le = null,
            t.updateQueue = null,
            Ji.current = gv,
            e = n(r, i)
        } while (Or)
    }
    if (Ji.current = Ts,
    t = le !== null && le.next !== null,
    yn = 0,
    de = le = Z = null,
    Ps = !1,
    t)
        throw Error(E(300));
    return e
}
function Ul() {
    var e = oi !== 0;
    return oi = 0,
    e
}
function st() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return de === null ? Z.memoizedState = de = e : de = de.next = e,
    de
}
function Xe() {
    if (le === null) {
        var e = Z.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = le.next;
    var t = de === null ? Z.memoizedState : de.next;
    if (t !== null)
        de = t,
        le = e;
    else {
        if (e === null)
            throw Error(E(310));
        le = e,
        e = {
            memoizedState: le.memoizedState,
            baseState: le.baseState,
            baseQueue: le.baseQueue,
            queue: le.queue,
            next: null
        },
        de === null ? Z.memoizedState = de = e : de = de.next = e
    }
    return de
}
function ai(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Ao(e) {
    var t = Xe()
      , n = t.queue;
    if (n === null)
        throw Error(E(311));
    n.lastRenderedReducer = e;
    var r = le
      , i = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = s.next,
            s.next = o
        }
        r.baseQueue = i = s,
        n.pending = null
    }
    if (i !== null) {
        s = i.next,
        r = r.baseState;
        var a = o = null
          , l = null
          , c = s;
        do {
            var d = c.lane;
            if ((yn & d) === d)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var f = {
                    lane: d,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                l === null ? (a = l = f,
                o = r) : l = l.next = f,
                Z.lanes |= d,
                xn |= d
            }
            c = c.next
        } while (c !== null && c !== s);
        l === null ? o = r : l.next = a,
        nt(r, t.memoizedState) || (be = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            s = i.lane,
            Z.lanes |= s,
            xn |= s,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Lo(e) {
    var t = Xe()
      , n = t.queue;
    if (n === null)
        throw Error(E(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , s = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do
            s = e(s, o.action),
            o = o.next;
        while (o !== i);
        nt(s, t.memoizedState) || (be = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function Oh() {}
function zh(e, t) {
    var n = Z
      , r = Xe()
      , i = t()
      , s = !nt(r.memoizedState, i);
    if (s && (r.memoizedState = i,
    be = !0),
    r = r.queue,
    Hl(Hh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || de !== null && de.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        li(9, Uh.bind(null, n, r, i, t), void 0, null),
        fe === null)
            throw Error(E(349));
        yn & 30 || Bh(n, t, i)
    }
    return i
}
function Bh(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = Z.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Z.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Uh(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Wh(t) && $h(e)
}
function Hh(e, t, n) {
    return n(function() {
        Wh(t) && $h(e)
    })
}
function Wh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !nt(e, n)
    } catch {
        return !0
    }
}
function $h(e) {
    var t = kt(e, 1);
    t !== null && tt(t, e, 1, -1)
}
function Tc(e) {
    var t = st();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ai,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = hv.bind(null, Z, e),
    [t.memoizedState, e]
}
function li(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = Z.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Z.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Kh() {
    return Xe().memoizedState
}
function es(e, t, n, r) {
    var i = st();
    Z.flags |= e,
    i.memoizedState = li(1 | t, n, void 0, r === void 0 ? null : r)
}
function Ys(e, t, n, r) {
    var i = Xe();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (le !== null) {
        var o = le.memoizedState;
        if (s = o.destroy,
        r !== null && zl(r, o.deps)) {
            i.memoizedState = li(t, n, s, r);
            return
        }
    }
    Z.flags |= e,
    i.memoizedState = li(1 | t, n, s, r)
}
function bc(e, t) {
    return es(8390656, 8, e, t)
}
function Hl(e, t) {
    return Ys(2048, 8, e, t)
}
function Gh(e, t) {
    return Ys(4, 2, e, t)
}
function Xh(e, t) {
    return Ys(4, 4, e, t)
}
function Yh(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Qh(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Ys(4, 4, Yh.bind(null, t, e), n)
}
function Wl() {}
function Zh(e, t) {
    var n = Xe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && zl(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function qh(e, t) {
    var n = Xe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && zl(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Jh(e, t, n) {
    return yn & 21 ? (nt(n, t) || (n = ih(),
    Z.lanes |= n,
    xn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    be = !0),
    e.memoizedState = n)
}
function dv(e, t) {
    var n = U;
    U = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Do.transition;
    Do.transition = {};
    try {
        e(!1),
        t()
    } finally {
        U = n,
        Do.transition = r
    }
}
function ep() {
    return Xe().memoizedState
}
function fv(e, t, n) {
    var r = Ut(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    tp(e))
        np(t, n);
    else if (n = Ih(e, t, n, r),
    n !== null) {
        var i = Ne();
        tt(n, e, r, i),
        rp(n, t, r)
    }
}
function hv(e, t, n) {
    var r = Ut(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (tp(e))
        np(t, i);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var o = t.lastRenderedState
                  , a = s(o, n);
                if (i.hasEagerState = !0,
                i.eagerState = a,
                nt(a, o)) {
                    var l = t.interleaved;
                    l === null ? (i.next = i,
                    Vl(t)) : (i.next = l.next,
                    l.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = Ih(e, t, i, r),
        n !== null && (i = Ne(),
        tt(n, e, r, i),
        rp(n, t, r))
    }
}
function tp(e) {
    var t = e.alternate;
    return e === Z || t !== null && t === Z
}
function np(e, t) {
    Or = Ps = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function rp(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Sl(e, n)
    }
}
var Ts = {
    readContext: Ge,
    useCallback: ve,
    useContext: ve,
    useEffect: ve,
    useImperativeHandle: ve,
    useInsertionEffect: ve,
    useLayoutEffect: ve,
    useMemo: ve,
    useReducer: ve,
    useRef: ve,
    useState: ve,
    useDebugValue: ve,
    useDeferredValue: ve,
    useTransition: ve,
    useMutableSource: ve,
    useSyncExternalStore: ve,
    useId: ve,
    unstable_isNewReconciler: !1
}
  , pv = {
    readContext: Ge,
    useCallback: function(e, t) {
        return st().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Ge,
    useEffect: bc,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        es(4194308, 4, Yh.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return es(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return es(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = st();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = st();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = fv.bind(null, Z, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = st();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Tc,
    useDebugValue: Wl,
    useDeferredValue: function(e) {
        return st().memoizedState = e
    },
    useTransition: function() {
        var e = Tc(!1)
          , t = e[0];
        return e = dv.bind(null, e[1]),
        st().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = Z
          , i = st();
        if (X) {
            if (n === void 0)
                throw Error(E(407));
            n = n()
        } else {
            if (n = t(),
            fe === null)
                throw Error(E(349));
            yn & 30 || Bh(r, t, n)
        }
        i.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return i.queue = s,
        bc(Hh.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        li(9, Uh.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = st()
          , t = fe.identifierPrefix;
        if (X) {
            var n = gt
              , r = mt;
            n = (r & ~(1 << 32 - et(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = oi++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = cv++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , mv = {
    readContext: Ge,
    useCallback: Zh,
    useContext: Ge,
    useEffect: Hl,
    useImperativeHandle: Qh,
    useInsertionEffect: Gh,
    useLayoutEffect: Xh,
    useMemo: qh,
    useReducer: Ao,
    useRef: Kh,
    useState: function() {
        return Ao(ai)
    },
    useDebugValue: Wl,
    useDeferredValue: function(e) {
        var t = Xe();
        return Jh(t, le.memoizedState, e)
    },
    useTransition: function() {
        var e = Ao(ai)[0]
          , t = Xe().memoizedState;
        return [e, t]
    },
    useMutableSource: Oh,
    useSyncExternalStore: zh,
    useId: ep,
    unstable_isNewReconciler: !1
}
  , gv = {
    readContext: Ge,
    useCallback: Zh,
    useContext: Ge,
    useEffect: Hl,
    useImperativeHandle: Qh,
    useInsertionEffect: Gh,
    useLayoutEffect: Xh,
    useMemo: qh,
    useReducer: Lo,
    useRef: Kh,
    useState: function() {
        return Lo(ai)
    },
    useDebugValue: Wl,
    useDeferredValue: function(e) {
        var t = Xe();
        return le === null ? t.memoizedState = e : Jh(t, le.memoizedState, e)
    },
    useTransition: function() {
        var e = Lo(ai)[0]
          , t = Xe().memoizedState;
        return [e, t]
    },
    useMutableSource: Oh,
    useSyncExternalStore: zh,
    useId: ep,
    unstable_isNewReconciler: !1
};
function Ze(e, t) {
    if (e && e.defaultProps) {
        t = q({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Ea(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : q({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Qs = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? kn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ne()
          , i = Ut(e)
          , s = vt(r, i);
        s.payload = t,
        n != null && (s.callback = n),
        t = zt(e, s, i),
        t !== null && (tt(t, e, i, r),
        qi(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ne()
          , i = Ut(e)
          , s = vt(r, i);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = zt(e, s, i),
        t !== null && (tt(t, e, i, r),
        qi(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ne()
          , r = Ut(e)
          , i = vt(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = zt(e, i, r),
        t !== null && (tt(t, e, r, n),
        qi(t, e, r))
    }
};
function Ec(e, t, n, r, i, s, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !ei(n, r) || !ei(i, s) : !0
}
function ip(e, t, n) {
    var r = !1
      , i = Gt
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = Ge(s) : (i = Me(t) ? gn : ke.current,
    r = t.contextTypes,
    s = (r = r != null) ? Jn(e, i) : Gt),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Qs,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function Mc(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Qs.enqueueReplaceState(t, t.state, null)
}
function Ma(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = {},
    Il(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = Ge(s) : (s = Me(t) ? gn : ke.current,
    i.context = Jn(e, s)),
    i.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (Ea(e, t, s, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && Qs.enqueueReplaceState(i, i.state, null),
    Ns(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function rr(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += W0(r),
            r = r.return;
        while (r);
        var i = n
    } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function Vo(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Ra(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var vv = typeof WeakMap == "function" ? WeakMap : Map;
function sp(e, t, n) {
    n = vt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Es || (Es = !0,
        Ba = r),
        Ra(e, t)
    }
    ,
    n
}
function op(e, t, n) {
    n = vt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            Ra(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        Ra(e, t),
        typeof r != "function" && (Bt === null ? Bt = new Set([this]) : Bt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function Rc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new vv;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = Rv.bind(null, e, t, n),
    t.then(e, e))
}
function Dc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Ac(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = vt(-1, 1),
    t.tag = 2,
    zt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var yv = Ct.ReactCurrentOwner
  , be = !1;
function je(e, t, n, r) {
    t.child = e === null ? Vh(t, null, n, r) : tr(t, e.child, n, r)
}
function Lc(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return Qn(t, i),
    r = Bl(e, t, n, r, s, i),
    n = Ul(),
    e !== null && !be ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    jt(e, t, i)) : (X && n && El(t),
    t.flags |= 1,
    je(e, t, r, i),
    t.child)
}
function Vc(e, t, n, r, i) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !ql(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        ap(e, t, s, r, i)) : (e = is(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & i)) {
        var o = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : ei,
        n(o, r) && e.ref === t.ref)
            return jt(e, t, i)
    }
    return t.flags |= 1,
    e = Ht(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function ap(e, t, n, r, i) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (ei(s, r) && e.ref === t.ref)
            if (be = !1,
            t.pendingProps = r = s,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (be = !0);
            else
                return t.lanes = e.lanes,
                jt(e, t, i)
    }
    return Da(e, t, n, r, i)
}
function lp(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            H(zn, Ae),
            Ae |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                H(zn, Ae),
                Ae |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            H(zn, Ae),
            Ae |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        H(zn, Ae),
        Ae |= r;
    return je(e, t, i, n),
    t.child
}
function up(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Da(e, t, n, r, i) {
    var s = Me(n) ? gn : ke.current;
    return s = Jn(t, s),
    Qn(t, i),
    n = Bl(e, t, n, r, s, i),
    r = Ul(),
    e !== null && !be ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    jt(e, t, i)) : (X && r && El(t),
    t.flags |= 1,
    je(e, t, n, i),
    t.child)
}
function Ic(e, t, n, r, i) {
    if (Me(n)) {
        var s = !0;
        xs(t)
    } else
        s = !1;
    if (Qn(t, i),
    t.stateNode === null)
        ts(e, t),
        ip(t, n, r),
        Ma(t, n, r, i),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , a = t.memoizedProps;
        o.props = a;
        var l = o.context
          , c = n.contextType;
        typeof c == "object" && c !== null ? c = Ge(c) : (c = Me(n) ? gn : ke.current,
        c = Jn(t, c));
        var d = n.getDerivedStateFromProps
          , f = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || l !== c) && Mc(t, o, r, c),
        Mt = !1;
        var h = t.memoizedState;
        o.state = h,
        Ns(t, r, o, i),
        l = t.memoizedState,
        a !== r || h !== l || Ee.current || Mt ? (typeof d == "function" && (Ea(t, n, d, r),
        l = t.memoizedState),
        (a = Mt || Ec(t, n, a, r, h, l, c)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        o.props = r,
        o.state = l,
        o.context = c,
        r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        _h(e, t),
        a = t.memoizedProps,
        c = t.type === t.elementType ? a : Ze(t.type, a),
        o.props = c,
        f = t.pendingProps,
        h = o.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = Ge(l) : (l = Me(n) ? gn : ke.current,
        l = Jn(t, l));
        var v = n.getDerivedStateFromProps;
        (d = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== f || h !== l) && Mc(t, o, r, l),
        Mt = !1,
        h = t.memoizedState,
        o.state = h,
        Ns(t, r, o, i);
        var y = t.memoizedState;
        a !== f || h !== y || Ee.current || Mt ? (typeof v == "function" && (Ea(t, n, v, r),
        y = t.memoizedState),
        (c = Mt || Ec(t, n, c, r, h, y, l) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, l),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, l)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = y),
        o.props = r,
        o.state = y,
        o.context = l,
        r = c) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Aa(e, t, n, r, s, i)
}
function Aa(e, t, n, r, i, s) {
    up(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return i && Sc(t, n, !1),
        jt(e, t, s);
    r = t.stateNode,
    yv.current = t;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = tr(t, e.child, null, s),
    t.child = tr(t, null, a, s)) : je(e, t, a, s),
    t.memoizedState = r.state,
    i && Sc(t, n, !0),
    t.child
}
function cp(e) {
    var t = e.stateNode;
    t.pendingContext ? wc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && wc(e, t.context, !1),
    _l(e, t.containerInfo)
}
function _c(e, t, n, r, i) {
    return er(),
    Rl(i),
    t.flags |= 256,
    je(e, t, n, r),
    t.child
}
var La = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Va(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function dp(e, t, n) {
    var r = t.pendingProps, i = Y.current, s = !1, o = (t.flags & 128) !== 0, a;
    if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    H(Y, i & 1),
    e === null)
        return Ta(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = o) : s = Js(o, r, 0, null),
        e = pn(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = Va(n),
        t.memoizedState = La,
        e) : $l(t, o));
    if (i = e.memoizedState,
    i !== null && (a = i.dehydrated,
    a !== null))
        return xv(e, t, o, r, a, i, n);
    if (s) {
        s = r.fallback,
        o = t.mode,
        i = e.child,
        a = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = Ht(i, l),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        a !== null ? s = Ht(a, s) : (s = pn(s, o, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        o = e.child.memoizedState,
        o = o === null ? Va(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        s.memoizedState = o,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = La,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = Ht(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function $l(e, t) {
    return t = Js({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Bi(e, t, n, r) {
    return r !== null && Rl(r),
    tr(t, e.child, null, n),
    e = $l(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function xv(e, t, n, r, i, s, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Vo(Error(E(422))),
        Bi(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        i = t.mode,
        r = Js({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        s = pn(s, i, o, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && tr(t, e.child, null, o),
        t.child.memoizedState = Va(o),
        t.memoizedState = La,
        s);
    if (!(t.mode & 1))
        return Bi(e, t, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        s = Error(E(419)),
        r = Vo(s, r, void 0),
        Bi(e, t, o, r)
    }
    if (a = (o & e.childLanes) !== 0,
    be || a) {
        if (r = fe,
        r !== null) {
            switch (o & -o) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i,
            i !== 0 && i !== s.retryLane && (s.retryLane = i,
            kt(e, i),
            tt(r, e, i, -1))
        }
        return Zl(),
        r = Vo(Error(E(421))),
        Bi(e, t, o, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Dv.bind(null, e),
    i._reactRetry = t,
    null) : (e = s.treeContext,
    Le = Ot(i.nextSibling),
    Ve = t,
    X = !0,
    Je = null,
    e !== null && (He[We++] = mt,
    He[We++] = gt,
    He[We++] = vn,
    mt = e.id,
    gt = e.overflow,
    vn = t),
    t = $l(t, r.children),
    t.flags |= 4096,
    t)
}
function Fc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    ba(e.return, t, n)
}
function Io(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = i)
}
function fp(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , s = r.tail;
    if (je(e, t, r.children, n),
    r = Y.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Fc(e, n, t);
                else if (e.tag === 19)
                    Fc(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (H(Y, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && Cs(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            Io(t, !1, i, n, s);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && Cs(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            Io(t, !0, n, null, s);
            break;
        case "together":
            Io(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function ts(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function jt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    xn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(E(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Ht(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Ht(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function wv(e, t, n) {
    switch (t.tag) {
    case 3:
        cp(t),
        er();
        break;
    case 5:
        Fh(t);
        break;
    case 1:
        Me(t.type) && xs(t);
        break;
    case 4:
        _l(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        H(ks, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (H(Y, Y.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? dp(e, t, n) : (H(Y, Y.current & 1),
            e = jt(e, t, n),
            e !== null ? e.sibling : null);
        H(Y, Y.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return fp(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        H(Y, Y.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        lp(e, t, n)
    }
    return jt(e, t, n)
}
var hp, Ia, pp, mp;
hp = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Ia = function() {}
;
pp = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        dn(lt.current);
        var s = null;
        switch (n) {
        case "input":
            i = ia(e, i),
            r = ia(e, r),
            s = [];
            break;
        case "select":
            i = q({}, i, {
                value: void 0
            }),
            r = q({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            i = aa(e, i),
            r = aa(e, r),
            s = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = vs)
        }
        ua(n, r);
        var o;
        n = null;
        for (c in i)
            if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
                if (c === "style") {
                    var a = i[c];
                    for (o in a)
                        a.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Gr.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
        for (c in r) {
            var l = r[c];
            if (a = i != null ? i[c] : void 0,
            r.hasOwnProperty(c) && l !== a && (l != null || a != null))
                if (c === "style")
                    if (a) {
                        for (o in a)
                            !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in l)
                            l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}),
                            n[o] = l[o])
                    } else
                        n || (s || (s = []),
                        s.push(c, n)),
                        n = l;
                else
                    c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (s = s || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Gr.hasOwnProperty(c) ? (l != null && c === "onScroll" && W("scroll", e),
                    s || a === l || (s = [])) : (s = s || []).push(c, l))
        }
        n && (s = s || []).push("style", n);
        var c = s;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
mp = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Nr(e, t) {
    if (!X)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function ye(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Sv(e, t, n) {
    var r = t.pendingProps;
    switch (Ml(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return ye(t),
        null;
    case 1:
        return Me(t.type) && ys(),
        ye(t),
        null;
    case 3:
        return r = t.stateNode,
        nr(),
        $(Ee),
        $(ke),
        Ol(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Oi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Je !== null && (Wa(Je),
        Je = null))),
        Ia(e, t),
        ye(t),
        null;
    case 5:
        Fl(t);
        var i = dn(si.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            pp(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(E(166));
                return ye(t),
                null
            }
            if (e = dn(lt.current),
            Oi(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[ot] = t,
                r[ri] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    W("cancel", r),
                    W("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    W("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < Mr.length; i++)
                        W(Mr[i], r);
                    break;
                case "source":
                    W("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    W("error", r),
                    W("load", r);
                    break;
                case "details":
                    W("toggle", r);
                    break;
                case "input":
                    Gu(r, s),
                    W("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    W("invalid", r);
                    break;
                case "textarea":
                    Yu(r, s),
                    W("invalid", r)
                }
                ua(n, s),
                i = null;
                for (var o in s)
                    if (s.hasOwnProperty(o)) {
                        var a = s[o];
                        o === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && Fi(r.textContent, a, e),
                        i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && Fi(r.textContent, a, e),
                        i = ["children", "" + a]) : Gr.hasOwnProperty(o) && a != null && o === "onScroll" && W("scroll", r)
                    }
                switch (n) {
                case "input":
                    Mi(r),
                    Xu(r, s, !0);
                    break;
                case "textarea":
                    Mi(r),
                    Qu(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = vs)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Hf(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[ot] = t,
                e[ri] = r,
                hp(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = ca(n, r),
                    n) {
                    case "dialog":
                        W("cancel", e),
                        W("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        W("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < Mr.length; i++)
                            W(Mr[i], e);
                        i = r;
                        break;
                    case "source":
                        W("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        W("error", e),
                        W("load", e),
                        i = r;
                        break;
                    case "details":
                        W("toggle", e),
                        i = r;
                        break;
                    case "input":
                        Gu(e, r),
                        i = ia(e, r),
                        W("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = q({}, r, {
                            value: void 0
                        }),
                        W("invalid", e);
                        break;
                    case "textarea":
                        Yu(e, r),
                        i = aa(e, r),
                        W("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    ua(n, i),
                    a = i;
                    for (s in a)
                        if (a.hasOwnProperty(s)) {
                            var l = a[s];
                            s === "style" ? Kf(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && Wf(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Xr(e, l) : typeof l == "number" && Xr(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Gr.hasOwnProperty(s) ? l != null && s === "onScroll" && W("scroll", e) : l != null && ml(e, s, l, o))
                        }
                    switch (n) {
                    case "input":
                        Mi(e),
                        Xu(e, r, !1);
                        break;
                    case "textarea":
                        Mi(e),
                        Qu(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Kt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? Kn(e, !!r.multiple, s, !1) : r.defaultValue != null && Kn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = vs)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return ye(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            mp(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(E(166));
            if (n = dn(si.current),
            dn(lt.current),
            Oi(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[ot] = t,
                (s = r.nodeValue !== n) && (e = Ve,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Fi(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Fi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[ot] = t,
                t.stateNode = r
        }
        return ye(t),
        null;
    case 13:
        if ($(Y),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (X && Le !== null && t.mode & 1 && !(t.flags & 128))
                Ah(),
                er(),
                t.flags |= 98560,
                s = !1;
            else if (s = Oi(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(E(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(E(317));
                    s[ot] = t
                } else
                    er(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                ye(t),
                s = !1
            } else
                Je !== null && (Wa(Je),
                Je = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || Y.current & 1 ? ue === 0 && (ue = 3) : Zl())),
        t.updateQueue !== null && (t.flags |= 4),
        ye(t),
        null);
    case 4:
        return nr(),
        Ia(e, t),
        e === null && ti(t.stateNode.containerInfo),
        ye(t),
        null;
    case 10:
        return Ll(t.type._context),
        ye(t),
        null;
    case 17:
        return Me(t.type) && ys(),
        ye(t),
        null;
    case 19:
        if ($(Y),
        s = t.memoizedState,
        s === null)
            return ye(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = s.rendering,
        o === null)
            if (r)
                Nr(s, !1);
            else {
                if (ue !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = Cs(e),
                        o !== null) {
                            for (t.flags |= 128,
                            Nr(s, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                o = s.alternate,
                                o === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = o.childLanes,
                                s.lanes = o.lanes,
                                s.child = o.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = o.memoizedProps,
                                s.memoizedState = o.memoizedState,
                                s.updateQueue = o.updateQueue,
                                s.type = o.type,
                                e = o.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return H(Y, Y.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && re() > ir && (t.flags |= 128,
                r = !0,
                Nr(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Cs(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Nr(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !o.alternate && !X)
                        return ye(t),
                        null
                } else
                    2 * re() - s.renderingStartTime > ir && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Nr(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = s.last,
            n !== null ? n.sibling = o : t.child = o,
            s.last = o)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = re(),
        t.sibling = null,
        n = Y.current,
        H(Y, r ? n & 1 | 2 : n & 1),
        t) : (ye(t),
        null);
    case 22:
    case 23:
        return Ql(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ae & 1073741824 && (ye(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : ye(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(E(156, t.tag))
}
function kv(e, t) {
    switch (Ml(t),
    t.tag) {
    case 1:
        return Me(t.type) && ys(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return nr(),
        $(Ee),
        $(ke),
        Ol(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Fl(t),
        null;
    case 13:
        if ($(Y),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(E(340));
            er()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return $(Y),
        null;
    case 4:
        return nr(),
        null;
    case 10:
        return Ll(t.type._context),
        null;
    case 22:
    case 23:
        return Ql(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Ui = !1
  , we = !1
  , jv = typeof WeakSet == "function" ? WeakSet : Set
  , D = null;
function On(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                te(e, t, r)
            }
        else
            n.current = null
}
function _a(e, t, n) {
    try {
        n()
    } catch (r) {
        te(e, t, r)
    }
}
var Oc = !1;
function Nv(e, t) {
    if (wa = ps,
    e = wh(),
    bl(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , a = -1
                      , l = -1
                      , c = 0
                      , d = 0
                      , f = e
                      , h = null;
                    t: for (; ; ) {
                        for (var v; f !== n || i !== 0 && f.nodeType !== 3 || (a = o + i),
                        f !== s || r !== 0 && f.nodeType !== 3 || (l = o + r),
                        f.nodeType === 3 && (o += f.nodeValue.length),
                        (v = f.firstChild) !== null; )
                            h = f,
                            f = v;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (h === n && ++c === i && (a = o),
                            h === s && ++d === r && (l = o),
                            (v = f.nextSibling) !== null)
                                break;
                            f = h,
                            h = f.parentNode
                        }
                        f = v
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Sa = {
        focusedElem: e,
        selectionRange: n
    },
    ps = !1,
    D = t; D !== null; )
        if (t = D,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            D = e;
        else
            for (; D !== null; ) {
                t = D;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var x = y.memoizedProps
                                  , S = y.memoizedState
                                  , m = t.stateNode
                                  , p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Ze(t.type, x), S);
                                m.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(E(163))
                        }
                } catch (k) {
                    te(t, t.return, k)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    D = e;
                    break
                }
                D = t.return
            }
    return y = Oc,
    Oc = !1,
    y
}
function zr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var s = i.destroy;
                i.destroy = void 0,
                s !== void 0 && _a(t, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}
function Zs(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Fa(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function gp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    gp(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[ot],
    delete t[ri],
    delete t[Na],
    delete t[ov],
    delete t[av])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function vp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function zc(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || vp(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Oa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = vs));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Oa(e, t, n),
        e = e.sibling; e !== null; )
            Oa(e, t, n),
            e = e.sibling
}
function za(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (za(e, t, n),
        e = e.sibling; e !== null; )
            za(e, t, n),
            e = e.sibling
}
var he = null
  , qe = !1;
function Tt(e, t, n) {
    for (n = n.child; n !== null; )
        yp(e, t, n),
        n = n.sibling
}
function yp(e, t, n) {
    if (at && typeof at.onCommitFiberUnmount == "function")
        try {
            at.onCommitFiberUnmount(Hs, n)
        } catch {}
    switch (n.tag) {
    case 5:
        we || On(n, t);
    case 6:
        var r = he
          , i = qe;
        he = null,
        Tt(e, t, n),
        he = r,
        qe = i,
        he !== null && (qe ? (e = he,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : he.removeChild(n.stateNode));
        break;
    case 18:
        he !== null && (qe ? (e = he,
        n = n.stateNode,
        e.nodeType === 8 ? Eo(e.parentNode, n) : e.nodeType === 1 && Eo(e, n),
        qr(e)) : Eo(he, n.stateNode));
        break;
    case 4:
        r = he,
        i = qe,
        he = n.stateNode.containerInfo,
        qe = !0,
        Tt(e, t, n),
        he = r,
        qe = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!we && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var s = i
                  , o = s.destroy;
                s = s.tag,
                o !== void 0 && (s & 2 || s & 4) && _a(n, t, o),
                i = i.next
            } while (i !== r)
        }
        Tt(e, t, n);
        break;
    case 1:
        if (!we && (On(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                te(n, t, a)
            }
        Tt(e, t, n);
        break;
    case 21:
        Tt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (we = (r = we) || n.memoizedState !== null,
        Tt(e, t, n),
        we = r) : Tt(e, t, n);
        break;
    default:
        Tt(e, t, n)
    }
}
function Bc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new jv),
        t.forEach(function(r) {
            var i = Av.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function Ye(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var s = e
                  , o = t
                  , a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        he = a.stateNode,
                        qe = !1;
                        break e;
                    case 3:
                        he = a.stateNode.containerInfo,
                        qe = !0;
                        break e;
                    case 4:
                        he = a.stateNode.containerInfo,
                        qe = !0;
                        break e
                    }
                    a = a.return
                }
                if (he === null)
                    throw Error(E(160));
                yp(s, o, i),
                he = null,
                qe = !1;
                var l = i.alternate;
                l !== null && (l.return = null),
                i.return = null
            } catch (c) {
                te(i, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            xp(t, e),
            t = t.sibling
}
function xp(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Ye(t, e),
        rt(e),
        r & 4) {
            try {
                zr(3, e, e.return),
                Zs(3, e)
            } catch (x) {
                te(e, e.return, x)
            }
            try {
                zr(5, e, e.return)
            } catch (x) {
                te(e, e.return, x)
            }
        }
        break;
    case 1:
        Ye(t, e),
        rt(e),
        r & 512 && n !== null && On(n, n.return);
        break;
    case 5:
        if (Ye(t, e),
        rt(e),
        r & 512 && n !== null && On(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                Xr(i, "")
            } catch (x) {
                te(e, e.return, x)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var s = e.memoizedProps
              , o = n !== null ? n.memoizedProps : s
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && s.type === "radio" && s.name != null && Bf(i, s),
                    ca(a, o);
                    var c = ca(a, s);
                    for (o = 0; o < l.length; o += 2) {
                        var d = l[o]
                          , f = l[o + 1];
                        d === "style" ? Kf(i, f) : d === "dangerouslySetInnerHTML" ? Wf(i, f) : d === "children" ? Xr(i, f) : ml(i, d, f, c)
                    }
                    switch (a) {
                    case "input":
                        sa(i, s);
                        break;
                    case "textarea":
                        Uf(i, s);
                        break;
                    case "select":
                        var h = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!s.multiple;
                        var v = s.value;
                        v != null ? Kn(i, !!s.multiple, v, !1) : h !== !!s.multiple && (s.defaultValue != null ? Kn(i, !!s.multiple, s.defaultValue, !0) : Kn(i, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    i[ri] = s
                } catch (x) {
                    te(e, e.return, x)
                }
        }
        break;
    case 6:
        if (Ye(t, e),
        rt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(E(162));
            i = e.stateNode,
            s = e.memoizedProps;
            try {
                i.nodeValue = s
            } catch (x) {
                te(e, e.return, x)
            }
        }
        break;
    case 3:
        if (Ye(t, e),
        rt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                qr(t.containerInfo)
            } catch (x) {
                te(e, e.return, x)
            }
        break;
    case 4:
        Ye(t, e),
        rt(e);
        break;
    case 13:
        Ye(t, e),
        rt(e),
        i = e.child,
        i.flags & 8192 && (s = i.memoizedState !== null,
        i.stateNode.isHidden = s,
        !s || i.alternate !== null && i.alternate.memoizedState !== null || (Xl = re())),
        r & 4 && Bc(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (we = (c = we) || d,
        Ye(t, e),
        we = c) : Ye(t, e),
        rt(e),
        r & 8192) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !d && e.mode & 1)
                for (D = e,
                d = e.child; d !== null; ) {
                    for (f = D = d; D !== null; ) {
                        switch (h = D,
                        v = h.child,
                        h.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            zr(4, h, h.return);
                            break;
                        case 1:
                            On(h, h.return);
                            var y = h.stateNode;
                            if (typeof y.componentWillUnmount == "function") {
                                r = h,
                                n = h.return;
                                try {
                                    t = r,
                                    y.props = t.memoizedProps,
                                    y.state = t.memoizedState,
                                    y.componentWillUnmount()
                                } catch (x) {
                                    te(r, n, x)
                                }
                            }
                            break;
                        case 5:
                            On(h, h.return);
                            break;
                        case 22:
                            if (h.memoizedState !== null) {
                                Hc(f);
                                continue
                            }
                        }
                        v !== null ? (v.return = h,
                        D = v) : Hc(f)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (d === null) {
                        d = f;
                        try {
                            i = f.stateNode,
                            c ? (s = i.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = f.stateNode,
                            l = f.memoizedProps.style,
                            o = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = $f("display", o))
                        } catch (x) {
                            te(e, e.return, x)
                        }
                    }
                } else if (f.tag === 6) {
                    if (d === null)
                        try {
                            f.stateNode.nodeValue = c ? "" : f.memoizedProps
                        } catch (x) {
                            te(e, e.return, x)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    d === f && (d = null),
                    f = f.return
                }
                d === f && (d = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        Ye(t, e),
        rt(e),
        r & 4 && Bc(e);
        break;
    case 21:
        break;
    default:
        Ye(t, e),
        rt(e)
    }
}
function rt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (vp(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(E(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (Xr(i, ""),
                r.flags &= -33);
                var s = zc(e);
                za(e, s, i);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , a = zc(e);
                Oa(e, a, o);
                break;
            default:
                throw Error(E(161))
            }
        } catch (l) {
            te(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Cv(e, t, n) {
    D = e,
    wp(e)
}
function wp(e, t, n) {
    for (var r = (e.mode & 1) !== 0; D !== null; ) {
        var i = D
          , s = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || Ui;
            if (!o) {
                var a = i.alternate
                  , l = a !== null && a.memoizedState !== null || we;
                a = Ui;
                var c = we;
                if (Ui = o,
                (we = l) && !c)
                    for (D = i; D !== null; )
                        o = D,
                        l = o.child,
                        o.tag === 22 && o.memoizedState !== null ? Wc(i) : l !== null ? (l.return = o,
                        D = l) : Wc(i);
                for (; s !== null; )
                    D = s,
                    wp(s),
                    s = s.sibling;
                D = i,
                Ui = a,
                we = c
            }
            Uc(e)
        } else
            i.subtreeFlags & 8772 && s !== null ? (s.return = i,
            D = s) : Uc(e)
    }
}
function Uc(e) {
    for (; D !== null; ) {
        var t = D;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        we || Zs(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !we)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Ze(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && Pc(t, s, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Pc(t, o, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var d = c.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && qr(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(E(163))
                    }
                we || t.flags & 512 && Fa(t)
            } catch (h) {
                te(t, t.return, h)
            }
        }
        if (t === e) {
            D = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            D = n;
            break
        }
        D = t.return
    }
}
function Hc(e) {
    for (; D !== null; ) {
        var t = D;
        if (t === e) {
            D = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            D = n;
            break
        }
        D = t.return
    }
}
function Wc(e) {
    for (; D !== null; ) {
        var t = D;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Zs(4, t)
                } catch (l) {
                    te(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        te(t, i, l)
                    }
                }
                var s = t.return;
                try {
                    Fa(t)
                } catch (l) {
                    te(t, s, l)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    Fa(t)
                } catch (l) {
                    te(t, o, l)
                }
            }
        } catch (l) {
            te(t, t.return, l)
        }
        if (t === e) {
            D = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            D = a;
            break
        }
        D = t.return
    }
}
var Pv = Math.ceil
  , bs = Ct.ReactCurrentDispatcher
  , Kl = Ct.ReactCurrentOwner
  , Ke = Ct.ReactCurrentBatchConfig
  , z = 0
  , fe = null
  , oe = null
  , me = 0
  , Ae = 0
  , zn = Zt(0)
  , ue = 0
  , ui = null
  , xn = 0
  , qs = 0
  , Gl = 0
  , Br = null
  , Te = null
  , Xl = 0
  , ir = 1 / 0
  , ht = null
  , Es = !1
  , Ba = null
  , Bt = null
  , Hi = !1
  , Lt = null
  , Ms = 0
  , Ur = 0
  , Ua = null
  , ns = -1
  , rs = 0;
function Ne() {
    return z & 6 ? re() : ns !== -1 ? ns : ns = re()
}
function Ut(e) {
    return e.mode & 1 ? z & 2 && me !== 0 ? me & -me : uv.transition !== null ? (rs === 0 && (rs = ih()),
    rs) : (e = U,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : dh(e.type)),
    e) : 1
}
function tt(e, t, n, r) {
    if (50 < Ur)
        throw Ur = 0,
        Ua = null,
        Error(E(185));
    yi(e, n, r),
    (!(z & 2) || e !== fe) && (e === fe && (!(z & 2) && (qs |= n),
    ue === 4 && Dt(e, me)),
    Re(e, r),
    n === 1 && z === 0 && !(t.mode & 1) && (ir = re() + 500,
    Xs && qt()))
}
function Re(e, t) {
    var n = e.callbackNode;
    ug(e, t);
    var r = hs(e, e === fe ? me : 0);
    if (r === 0)
        n !== null && Ju(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Ju(n),
        t === 1)
            e.tag === 0 ? lv($c.bind(null, e)) : Mh($c.bind(null, e)),
            iv(function() {
                !(z & 6) && qt()
            }),
            n = null;
        else {
            switch (sh(r)) {
            case 1:
                n = wl;
                break;
            case 4:
                n = nh;
                break;
            case 16:
                n = fs;
                break;
            case 536870912:
                n = rh;
                break;
            default:
                n = fs
            }
            n = bp(n, Sp.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Sp(e, t) {
    if (ns = -1,
    rs = 0,
    z & 6)
        throw Error(E(327));
    var n = e.callbackNode;
    if (Zn() && e.callbackNode !== n)
        return null;
    var r = hs(e, e === fe ? me : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Rs(e, r);
    else {
        t = r;
        var i = z;
        z |= 2;
        var s = jp();
        (fe !== e || me !== t) && (ht = null,
        ir = re() + 500,
        hn(e, t));
        do
            try {
                Ev();
                break
            } catch (a) {
                kp(e, a)
            }
        while (!0);
        Al(),
        bs.current = s,
        z = i,
        oe !== null ? t = 0 : (fe = null,
        me = 0,
        t = ue)
    }
    if (t !== 0) {
        if (t === 2 && (i = ma(e),
        i !== 0 && (r = i,
        t = Ha(e, i))),
        t === 1)
            throw n = ui,
            hn(e, 0),
            Dt(e, r),
            Re(e, re()),
            n;
        if (t === 6)
            Dt(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !Tv(i) && (t = Rs(e, r),
            t === 2 && (s = ma(e),
            s !== 0 && (r = s,
            t = Ha(e, s))),
            t === 1))
                throw n = ui,
                hn(e, 0),
                Dt(e, r),
                Re(e, re()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(E(345));
            case 2:
                on(e, Te, ht);
                break;
            case 3:
                if (Dt(e, r),
                (r & 130023424) === r && (t = Xl + 500 - re(),
                10 < t)) {
                    if (hs(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        Ne(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = ja(on.bind(null, e, Te, ht), t);
                    break
                }
                on(e, Te, ht);
                break;
            case 4:
                if (Dt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var o = 31 - et(r);
                    s = 1 << o,
                    o = t[o],
                    o > i && (i = o),
                    r &= ~s
                }
                if (r = i,
                r = re() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Pv(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = ja(on.bind(null, e, Te, ht), r);
                    break
                }
                on(e, Te, ht);
                break;
            case 5:
                on(e, Te, ht);
                break;
            default:
                throw Error(E(329))
            }
        }
    }
    return Re(e, re()),
    e.callbackNode === n ? Sp.bind(null, e) : null
}
function Ha(e, t) {
    var n = Br;
    return e.current.memoizedState.isDehydrated && (hn(e, t).flags |= 256),
    e = Rs(e, t),
    e !== 2 && (t = Te,
    Te = n,
    t !== null && Wa(t)),
    e
}
function Wa(e) {
    Te === null ? Te = e : Te.push.apply(Te, e)
}
function Tv(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!nt(s(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Dt(e, t) {
    for (t &= ~Gl,
    t &= ~qs,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - et(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function $c(e) {
    if (z & 6)
        throw Error(E(327));
    Zn();
    var t = hs(e, 0);
    if (!(t & 1))
        return Re(e, re()),
        null;
    var n = Rs(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ma(e);
        r !== 0 && (t = r,
        n = Ha(e, r))
    }
    if (n === 1)
        throw n = ui,
        hn(e, 0),
        Dt(e, t),
        Re(e, re()),
        n;
    if (n === 6)
        throw Error(E(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    on(e, Te, ht),
    Re(e, re()),
    null
}
function Yl(e, t) {
    var n = z;
    z |= 1;
    try {
        return e(t)
    } finally {
        z = n,
        z === 0 && (ir = re() + 500,
        Xs && qt())
    }
}
function wn(e) {
    Lt !== null && Lt.tag === 0 && !(z & 6) && Zn();
    var t = z;
    z |= 1;
    var n = Ke.transition
      , r = U;
    try {
        if (Ke.transition = null,
        U = 1,
        e)
            return e()
    } finally {
        U = r,
        Ke.transition = n,
        z = t,
        !(z & 6) && qt()
    }
}
function Ql() {
    Ae = zn.current,
    $(zn)
}
function hn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    rv(n)),
    oe !== null)
        for (n = oe.return; n !== null; ) {
            var r = n;
            switch (Ml(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && ys();
                break;
            case 3:
                nr(),
                $(Ee),
                $(ke),
                Ol();
                break;
            case 5:
                Fl(r);
                break;
            case 4:
                nr();
                break;
            case 13:
                $(Y);
                break;
            case 19:
                $(Y);
                break;
            case 10:
                Ll(r.type._context);
                break;
            case 22:
            case 23:
                Ql()
            }
            n = n.return
        }
    if (fe = e,
    oe = e = Ht(e.current, null),
    me = Ae = t,
    ue = 0,
    ui = null,
    Gl = qs = xn = 0,
    Te = Br = null,
    cn !== null) {
        for (t = 0; t < cn.length; t++)
            if (n = cn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    s.next = i,
                    r.next = o
                }
                n.pending = r
            }
        cn = null
    }
    return e
}
function kp(e, t) {
    do {
        var n = oe;
        try {
            if (Al(),
            Ji.current = Ts,
            Ps) {
                for (var r = Z.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                Ps = !1
            }
            if (yn = 0,
            de = le = Z = null,
            Or = !1,
            oi = 0,
            Kl.current = null,
            n === null || n.return === null) {
                ue = 1,
                ui = t,
                oe = null;
                break
            }
            e: {
                var s = e
                  , o = n.return
                  , a = n
                  , l = t;
                if (t = me,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var c = l
                      , d = a
                      , f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var h = d.alternate;
                        h ? (d.updateQueue = h.updateQueue,
                        d.memoizedState = h.memoizedState,
                        d.lanes = h.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var v = Dc(o);
                    if (v !== null) {
                        v.flags &= -257,
                        Ac(v, o, a, s, t),
                        v.mode & 1 && Rc(s, c, t),
                        t = v,
                        l = c;
                        var y = t.updateQueue;
                        if (y === null) {
                            var x = new Set;
                            x.add(l),
                            t.updateQueue = x
                        } else
                            y.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Rc(s, c, t),
                            Zl();
                            break e
                        }
                        l = Error(E(426))
                    }
                } else if (X && a.mode & 1) {
                    var S = Dc(o);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256),
                        Ac(S, o, a, s, t),
                        Rl(rr(l, a));
                        break e
                    }
                }
                s = l = rr(l, a),
                ue !== 4 && (ue = 2),
                Br === null ? Br = [s] : Br.push(s),
                s = o;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var m = sp(s, l, t);
                        Cc(s, m);
                        break e;
                    case 1:
                        a = l;
                        var p = s.type
                          , g = s.stateNode;
                        if (!(s.flags & 128) && (typeof p.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Bt === null || !Bt.has(g)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var k = op(s, a, t);
                            Cc(s, k);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            Cp(n)
        } catch (j) {
            t = j,
            oe === n && n !== null && (oe = n = n.return);
            continue
        }
        break
    } while (!0)
}
function jp() {
    var e = bs.current;
    return bs.current = Ts,
    e === null ? Ts : e
}
function Zl() {
    (ue === 0 || ue === 3 || ue === 2) && (ue = 4),
    fe === null || !(xn & 268435455) && !(qs & 268435455) || Dt(fe, me)
}
function Rs(e, t) {
    var n = z;
    z |= 2;
    var r = jp();
    (fe !== e || me !== t) && (ht = null,
    hn(e, t));
    do
        try {
            bv();
            break
        } catch (i) {
            kp(e, i)
        }
    while (!0);
    if (Al(),
    z = n,
    bs.current = r,
    oe !== null)
        throw Error(E(261));
    return fe = null,
    me = 0,
    ue
}
function bv() {
    for (; oe !== null; )
        Np(oe)
}
function Ev() {
    for (; oe !== null && !eg(); )
        Np(oe)
}
function Np(e) {
    var t = Tp(e.alternate, e, Ae);
    e.memoizedProps = e.pendingProps,
    t === null ? Cp(e) : oe = t,
    Kl.current = null
}
function Cp(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = kv(n, t),
            n !== null) {
                n.flags &= 32767,
                oe = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                ue = 6,
                oe = null;
                return
            }
        } else if (n = Sv(n, t, Ae),
        n !== null) {
            oe = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            oe = t;
            return
        }
        oe = t = e
    } while (t !== null);
    ue === 0 && (ue = 5)
}
function on(e, t, n) {
    var r = U
      , i = Ke.transition;
    try {
        Ke.transition = null,
        U = 1,
        Mv(e, t, n, r)
    } finally {
        Ke.transition = i,
        U = r
    }
    return null
}
function Mv(e, t, n, r) {
    do
        Zn();
    while (Lt !== null);
    if (z & 6)
        throw Error(E(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(E(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (cg(e, s),
    e === fe && (oe = fe = null,
    me = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Hi || (Hi = !0,
    bp(fs, function() {
        return Zn(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = Ke.transition,
        Ke.transition = null;
        var o = U;
        U = 1;
        var a = z;
        z |= 4,
        Kl.current = null,
        Nv(e, n),
        xp(n, e),
        Qg(Sa),
        ps = !!wa,
        Sa = wa = null,
        e.current = n,
        Cv(n),
        tg(),
        z = a,
        U = o,
        Ke.transition = s
    } else
        e.current = n;
    if (Hi && (Hi = !1,
    Lt = e,
    Ms = i),
    s = e.pendingLanes,
    s === 0 && (Bt = null),
    ig(n.stateNode),
    Re(e, re()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (Es)
        throw Es = !1,
        e = Ba,
        Ba = null,
        e;
    return Ms & 1 && e.tag !== 0 && Zn(),
    s = e.pendingLanes,
    s & 1 ? e === Ua ? Ur++ : (Ur = 0,
    Ua = e) : Ur = 0,
    qt(),
    null
}
function Zn() {
    if (Lt !== null) {
        var e = sh(Ms)
          , t = Ke.transition
          , n = U;
        try {
            if (Ke.transition = null,
            U = 16 > e ? 16 : e,
            Lt === null)
                var r = !1;
            else {
                if (e = Lt,
                Lt = null,
                Ms = 0,
                z & 6)
                    throw Error(E(331));
                var i = z;
                for (z |= 4,
                D = e.current; D !== null; ) {
                    var s = D
                      , o = s.child;
                    if (D.flags & 16) {
                        var a = s.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var c = a[l];
                                for (D = c; D !== null; ) {
                                    var d = D;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        zr(8, d, s)
                                    }
                                    var f = d.child;
                                    if (f !== null)
                                        f.return = d,
                                        D = f;
                                    else
                                        for (; D !== null; ) {
                                            d = D;
                                            var h = d.sibling
                                              , v = d.return;
                                            if (gp(d),
                                            d === c) {
                                                D = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = v,
                                                D = h;
                                                break
                                            }
                                            D = v
                                        }
                                }
                            }
                            var y = s.alternate;
                            if (y !== null) {
                                var x = y.child;
                                if (x !== null) {
                                    y.child = null;
                                    do {
                                        var S = x.sibling;
                                        x.sibling = null,
                                        x = S
                                    } while (x !== null)
                                }
                            }
                            D = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null)
                        o.return = s,
                        D = o;
                    else
                        e: for (; D !== null; ) {
                            if (s = D,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    zr(9, s, s.return)
                                }
                            var m = s.sibling;
                            if (m !== null) {
                                m.return = s.return,
                                D = m;
                                break e
                            }
                            D = s.return
                        }
                }
                var p = e.current;
                for (D = p; D !== null; ) {
                    o = D;
                    var g = o.child;
                    if (o.subtreeFlags & 2064 && g !== null)
                        g.return = o,
                        D = g;
                    else
                        e: for (o = p; D !== null; ) {
                            if (a = D,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Zs(9, a)
                                    }
                                } catch (j) {
                                    te(a, a.return, j)
                                }
                            if (a === o) {
                                D = null;
                                break e
                            }
                            var k = a.sibling;
                            if (k !== null) {
                                k.return = a.return,
                                D = k;
                                break e
                            }
                            D = a.return
                        }
                }
                if (z = i,
                qt(),
                at && typeof at.onPostCommitFiberRoot == "function")
                    try {
                        at.onPostCommitFiberRoot(Hs, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            U = n,
            Ke.transition = t
        }
    }
    return !1
}
function Kc(e, t, n) {
    t = rr(n, t),
    t = sp(e, t, 1),
    e = zt(e, t, 1),
    t = Ne(),
    e !== null && (yi(e, 1, t),
    Re(e, t))
}
function te(e, t, n) {
    if (e.tag === 3)
        Kc(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Kc(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Bt === null || !Bt.has(r))) {
                    e = rr(n, e),
                    e = op(t, e, 1),
                    t = zt(t, e, 1),
                    e = Ne(),
                    t !== null && (yi(t, 1, e),
                    Re(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Rv(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Ne(),
    e.pingedLanes |= e.suspendedLanes & n,
    fe === e && (me & n) === n && (ue === 4 || ue === 3 && (me & 130023424) === me && 500 > re() - Xl ? hn(e, 0) : Gl |= n),
    Re(e, t)
}
function Pp(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ai,
    Ai <<= 1,
    !(Ai & 130023424) && (Ai = 4194304)) : t = 1);
    var n = Ne();
    e = kt(e, t),
    e !== null && (yi(e, t, n),
    Re(e, n))
}
function Dv(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Pp(e, n)
}
function Av(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(E(314))
    }
    r !== null && r.delete(t),
    Pp(e, n)
}
var Tp;
Tp = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ee.current)
            be = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return be = !1,
                wv(e, t, n);
            be = !!(e.flags & 131072)
        }
    else
        be = !1,
        X && t.flags & 1048576 && Rh(t, Ss, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        ts(e, t),
        e = t.pendingProps;
        var i = Jn(t, ke.current);
        Qn(t, n),
        i = Bl(null, t, r, e, i, n);
        var s = Ul();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Me(r) ? (s = !0,
        xs(t)) : s = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        Il(t),
        i.updater = Qs,
        t.stateNode = i,
        i._reactInternals = t,
        Ma(t, r, e, n),
        t = Aa(null, t, r, !0, s, n)) : (t.tag = 0,
        X && s && El(t),
        je(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (ts(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = Vv(r),
            e = Ze(r, e),
            i) {
            case 0:
                t = Da(null, t, r, e, n);
                break e;
            case 1:
                t = Ic(null, t, r, e, n);
                break e;
            case 11:
                t = Lc(null, t, r, e, n);
                break e;
            case 14:
                t = Vc(null, t, r, Ze(r.type, e), n);
                break e
            }
            throw Error(E(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ze(r, i),
        Da(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ze(r, i),
        Ic(e, t, r, i, n);
    case 3:
        e: {
            if (cp(t),
            e === null)
                throw Error(E(387));
            r = t.pendingProps,
            s = t.memoizedState,
            i = s.element,
            _h(e, t),
            Ns(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    i = rr(Error(E(423)), t),
                    t = _c(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = rr(Error(E(424)), t),
                    t = _c(e, t, r, n, i);
                    break e
                } else
                    for (Le = Ot(t.stateNode.containerInfo.firstChild),
                    Ve = t,
                    X = !0,
                    Je = null,
                    n = Vh(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (er(),
                r === i) {
                    t = jt(e, t, n);
                    break e
                }
                je(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Fh(t),
        e === null && Ta(t),
        r = t.type,
        i = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        o = i.children,
        ka(r, i) ? o = null : s !== null && ka(r, s) && (t.flags |= 32),
        up(e, t),
        je(e, t, o, n),
        t.child;
    case 6:
        return e === null && Ta(t),
        null;
    case 13:
        return dp(e, t, n);
    case 4:
        return _l(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = tr(t, null, r, n) : je(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ze(r, i),
        Lc(e, t, r, i, n);
    case 7:
        return je(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return je(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return je(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            s = t.memoizedProps,
            o = i.value,
            H(ks, r._currentValue),
            r._currentValue = o,
            s !== null)
                if (nt(s.value, o)) {
                    if (s.children === i.children && !Ee.current) {
                        t = jt(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var a = s.dependencies;
                        if (a !== null) {
                            o = s.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (s.tag === 1) {
                                        l = vt(-1, n & -n),
                                        l.tag = 2;
                                        var c = s.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var d = c.pending;
                                            d === null ? l.next = l : (l.next = d.next,
                                            d.next = l),
                                            c.pending = l
                                        }
                                    }
                                    s.lanes |= n,
                                    l = s.alternate,
                                    l !== null && (l.lanes |= n),
                                    ba(s.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (s.tag === 10)
                            o = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (o = s.return,
                            o === null)
                                throw Error(E(341));
                            o.lanes |= n,
                            a = o.alternate,
                            a !== null && (a.lanes |= n),
                            ba(o, n, t),
                            o = s.sibling
                        } else
                            o = s.child;
                        if (o !== null)
                            o.return = s;
                        else
                            for (o = s; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (s = o.sibling,
                                s !== null) {
                                    s.return = o.return,
                                    o = s;
                                    break
                                }
                                o = o.return
                            }
                        s = o
                    }
            je(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        Qn(t, n),
        i = Ge(i),
        r = r(i),
        t.flags |= 1,
        je(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = Ze(r, t.pendingProps),
        i = Ze(r.type, i),
        Vc(e, t, r, i, n);
    case 15:
        return ap(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ze(r, i),
        ts(e, t),
        t.tag = 1,
        Me(r) ? (e = !0,
        xs(t)) : e = !1,
        Qn(t, n),
        ip(t, r, i),
        Ma(t, r, i, n),
        Aa(null, t, r, !0, e, n);
    case 19:
        return fp(e, t, n);
    case 22:
        return lp(e, t, n)
    }
    throw Error(E(156, t.tag))
}
;
function bp(e, t) {
    return th(e, t)
}
function Lv(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function $e(e, t, n, r) {
    return new Lv(e,t,n,r)
}
function ql(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Vv(e) {
    if (typeof e == "function")
        return ql(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === vl)
            return 11;
        if (e === yl)
            return 14
    }
    return 2
}
function Ht(e, t) {
    var n = e.alternate;
    return n === null ? (n = $e(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function is(e, t, n, r, i, s) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        ql(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case Mn:
            return pn(n.children, i, s, t);
        case gl:
            o = 8,
            i |= 8;
            break;
        case ea:
            return e = $e(12, n, t, i | 2),
            e.elementType = ea,
            e.lanes = s,
            e;
        case ta:
            return e = $e(13, n, t, i),
            e.elementType = ta,
            e.lanes = s,
            e;
        case na:
            return e = $e(19, n, t, i),
            e.elementType = na,
            e.lanes = s,
            e;
        case Ff:
            return Js(n, i, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case If:
                    o = 10;
                    break e;
                case _f:
                    o = 9;
                    break e;
                case vl:
                    o = 11;
                    break e;
                case yl:
                    o = 14;
                    break e;
                case Et:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(E(130, e == null ? e : typeof e, ""))
        }
    return t = $e(o, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function pn(e, t, n, r) {
    return e = $e(7, e, r, t),
    e.lanes = n,
    e
}
function Js(e, t, n, r) {
    return e = $e(22, e, r, t),
    e.elementType = Ff,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function _o(e, t, n) {
    return e = $e(6, e, null, t),
    e.lanes = n,
    e
}
function Fo(e, t, n) {
    return t = $e(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Iv(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = yo(0),
    this.expirationTimes = yo(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = yo(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function Jl(e, t, n, r, i, s, o, a, l) {
    return e = new Iv(e,t,n,a,l),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = $e(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Il(s),
    e
}
function _v(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: En,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Ep(e) {
    if (!e)
        return Gt;
    e = e._reactInternals;
    e: {
        if (kn(e) !== e || e.tag !== 1)
            throw Error(E(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Me(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(E(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Me(n))
            return Eh(e, n, t)
    }
    return t
}
function Mp(e, t, n, r, i, s, o, a, l) {
    return e = Jl(n, r, !0, e, i, s, o, a, l),
    e.context = Ep(null),
    n = e.current,
    r = Ne(),
    i = Ut(n),
    s = vt(r, i),
    s.callback = t ?? null,
    zt(n, s, i),
    e.current.lanes = i,
    yi(e, i, r),
    Re(e, r),
    e
}
function eo(e, t, n, r) {
    var i = t.current
      , s = Ne()
      , o = Ut(i);
    return n = Ep(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = vt(s, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = zt(i, t, o),
    e !== null && (tt(e, i, o, s),
    qi(e, i, o)),
    o
}
function Ds(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Gc(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function eu(e, t) {
    Gc(e, t),
    (e = e.alternate) && Gc(e, t)
}
function Fv() {
    return null
}
var Rp = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function tu(e) {
    this._internalRoot = e
}
to.prototype.render = tu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(E(409));
    eo(e, t, null, null)
}
;
to.prototype.unmount = tu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        wn(function() {
            eo(null, e, null, null)
        }),
        t[St] = null
    }
}
;
function to(e) {
    this._internalRoot = e
}
to.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = lh();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++)
            ;
        Rt.splice(n, 0, e),
        n === 0 && ch(e)
    }
}
;
function nu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function no(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Xc() {}
function Ov(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var c = Ds(o);
                s.call(c)
            }
        }
        var o = Mp(t, r, e, 0, null, !1, !1, "", Xc);
        return e._reactRootContainer = o,
        e[St] = o.current,
        ti(e.nodeType === 8 ? e.parentNode : e),
        wn(),
        o
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var c = Ds(l);
            a.call(c)
        }
    }
    var l = Jl(e, 0, !1, null, null, !1, !1, "", Xc);
    return e._reactRootContainer = l,
    e[St] = l.current,
    ti(e.nodeType === 8 ? e.parentNode : e),
    wn(function() {
        eo(t, l, n, r)
    }),
    l
}
function ro(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var l = Ds(o);
                a.call(l)
            }
        }
        eo(t, o, e, i)
    } else
        o = Ov(n, t, e, i, r);
    return Ds(o)
}
oh = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Er(t.pendingLanes);
            n !== 0 && (Sl(t, n | 1),
            Re(t, re()),
            !(z & 6) && (ir = re() + 500,
            qt()))
        }
        break;
    case 13:
        wn(function() {
            var r = kt(e, 1);
            if (r !== null) {
                var i = Ne();
                tt(r, e, 1, i)
            }
        }),
        eu(e, 1)
    }
}
;
kl = function(e) {
    if (e.tag === 13) {
        var t = kt(e, 134217728);
        if (t !== null) {
            var n = Ne();
            tt(t, e, 134217728, n)
        }
        eu(e, 134217728)
    }
}
;
ah = function(e) {
    if (e.tag === 13) {
        var t = Ut(e)
          , n = kt(e, t);
        if (n !== null) {
            var r = Ne();
            tt(n, e, t, r)
        }
        eu(e, t)
    }
}
;
lh = function() {
    return U
}
;
uh = function(e, t) {
    var n = U;
    try {
        return U = e,
        t()
    } finally {
        U = n
    }
}
;
fa = function(e, t, n) {
    switch (t) {
    case "input":
        if (sa(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = Gs(r);
                    if (!i)
                        throw Error(E(90));
                    zf(r),
                    sa(r, i)
                }
            }
        }
        break;
    case "textarea":
        Uf(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Kn(e, !!n.multiple, t, !1)
    }
}
;
Yf = Yl;
Qf = wn;
var zv = {
    usingClientEntryPoint: !1,
    Events: [wi, Ln, Gs, Gf, Xf, Yl]
}
  , Cr = {
    findFiberByHostInstance: un,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Bv = {
    bundleType: Cr.bundleType,
    version: Cr.version,
    rendererPackageName: Cr.rendererPackageName,
    rendererConfig: Cr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ct.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Jf(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Cr.findFiberByHostInstance || Fv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Wi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Wi.isDisabled && Wi.supportsFiber)
        try {
            Hs = Wi.inject(Bv),
            at = Wi
        } catch {}
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zv;
Oe.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!nu(t))
        throw Error(E(200));
    return _v(e, t, null, n)
}
;
Oe.createRoot = function(e, t) {
    if (!nu(e))
        throw Error(E(299));
    var n = !1
      , r = ""
      , i = Rp;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = Jl(e, 1, !1, null, null, n, !1, r, i),
    e[St] = t.current,
    ti(e.nodeType === 8 ? e.parentNode : e),
    new tu(t)
}
;
Oe.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","),
        Error(E(268, e)));
    return e = Jf(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Oe.flushSync = function(e) {
    return wn(e)
}
;
Oe.hydrate = function(e, t, n) {
    if (!no(t))
        throw Error(E(200));
    return ro(null, e, t, !0, n)
}
;
Oe.hydrateRoot = function(e, t, n) {
    if (!nu(e))
        throw Error(E(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , s = ""
      , o = Rp;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = Mp(t, null, e, 1, n ?? null, i, !1, s, o),
    e[St] = t.current,
    ti(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new to(t)
}
;
Oe.render = function(e, t, n) {
    if (!no(t))
        throw Error(E(200));
    return ro(null, e, t, !1, n)
}
;
Oe.unmountComponentAtNode = function(e) {
    if (!no(e))
        throw Error(E(40));
    return e._reactRootContainer ? (wn(function() {
        ro(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[St] = null
        })
    }),
    !0) : !1
}
;
Oe.unstable_batchedUpdates = Yl;
Oe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!no(n))
        throw Error(E(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(E(38));
    return ro(e, t, n, !1, r)
}
;
Oe.version = "18.3.1-next-f1338f8080-20240426";
function Dp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dp)
        } catch (e) {
            console.error(e)
        }
}
Dp(),
Df.exports = Oe;
var Uv = Df.exports, Ap, Yc = Uv;
Ap = Yc.createRoot,
Yc.hydrateRoot;
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ci() {
    return ci = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    ci.apply(this, arguments)
}
var Vt;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Vt || (Vt = {}));
const Qc = "popstate";
function Hv(e) {
    e === void 0 && (e = {});
    function t(r, i) {
        let {pathname: s, search: o, hash: a} = r.location;
        return $a("", {
            pathname: s,
            search: o,
            hash: a
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }
    function n(r, i) {
        return typeof i == "string" ? i : As(i)
    }
    return $v(t, n, null, e)
}
function ae(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Lp(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function Wv() {
    return Math.random().toString(36).substr(2, 8)
}
function Zc(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function $a(e, t, n, r) {
    return n === void 0 && (n = null),
    ci({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? cr(t) : t, {
        state: n,
        key: t && t.key || r || Wv()
    })
}
function As(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function cr(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function $v(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: i=document.defaultView, v5Compat: s=!1} = r
      , o = i.history
      , a = Vt.Pop
      , l = null
      , c = d();
    c == null && (c = 0,
    o.replaceState(ci({}, o.state, {
        idx: c
    }), ""));
    function d() {
        return (o.state || {
            idx: null
        }).idx
    }
    function f() {
        a = Vt.Pop;
        let S = d()
          , m = S == null ? null : S - c;
        c = S,
        l && l({
            action: a,
            location: x.location,
            delta: m
        })
    }
    function h(S, m) {
        a = Vt.Push;
        let p = $a(x.location, S, m);
        c = d() + 1;
        let g = Zc(p, c)
          , k = x.createHref(p);
        try {
            o.pushState(g, "", k)
        } catch (j) {
            if (j instanceof DOMException && j.name === "DataCloneError")
                throw j;
            i.location.assign(k)
        }
        s && l && l({
            action: a,
            location: x.location,
            delta: 1
        })
    }
    function v(S, m) {
        a = Vt.Replace;
        let p = $a(x.location, S, m);
        c = d();
        let g = Zc(p, c)
          , k = x.createHref(p);
        o.replaceState(g, "", k),
        s && l && l({
            action: a,
            location: x.location,
            delta: 0
        })
    }
    function y(S) {
        let m = i.location.origin !== "null" ? i.location.origin : i.location.href
          , p = typeof S == "string" ? S : As(S);
        return p = p.replace(/ $/, "%20"),
        ae(m, "No window.location.(origin|href) available to create URL for href: " + p),
        new URL(p,m)
    }
    let x = {
        get action() {
            return a
        },
        get location() {
            return e(i, o)
        },
        listen(S) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return i.addEventListener(Qc, f),
            l = S,
            () => {
                i.removeEventListener(Qc, f),
                l = null
            }
        },
        createHref(S) {
            return t(i, S)
        },
        createURL: y,
        encodeLocation(S) {
            let m = y(S);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: h,
        replace: v,
        go(S) {
            return o.go(S)
        }
    };
    return x
}
var qc;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(qc || (qc = {}));
function Kv(e, t, n) {
    return n === void 0 && (n = "/"),
    Gv(e, t, n, !1)
}
function Gv(e, t, n, r) {
    let i = typeof t == "string" ? cr(t) : t
      , s = ru(i.pathname || "/", n);
    if (s == null)
        return null;
    let o = Vp(e);
    Xv(o);
    let a = null;
    for (let l = 0; a == null && l < o.length; ++l) {
        let c = sy(s);
        a = ry(o[l], c, r)
    }
    return a
}
function Vp(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let i = (s, o, a) => {
        let l = {
            relativePath: a === void 0 ? s.path || "" : a,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: o,
            route: s
        };
        l.relativePath.startsWith("/") && (ae(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let c = Wt([r, l.relativePath])
          , d = n.concat(l);
        s.children && s.children.length > 0 && (ae(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')),
        Vp(s.children, t, d, c)),
        !(s.path == null && !s.index) && t.push({
            path: c,
            score: ty(c, s.index),
            routesMeta: d
        })
    }
    ;
    return e.forEach( (s, o) => {
        var a;
        if (s.path === "" || !((a = s.path) != null && a.includes("?")))
            i(s, o);
        else
            for (let l of Ip(s.path))
                i(s, o, l)
    }
    ),
    t
}
function Ip(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , i = n.endsWith("?")
      , s = n.replace(/\?$/, "");
    if (r.length === 0)
        return i ? [s, ""] : [s];
    let o = Ip(r.join("/"))
      , a = [];
    return a.push(...o.map(l => l === "" ? s : [s, l].join("/"))),
    i && a.push(...o),
    a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function Xv(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : ny(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const Yv = /^:[\w-]+$/
  , Qv = 3
  , Zv = 2
  , qv = 1
  , Jv = 10
  , ey = -2
  , Jc = e => e === "*";
function ty(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Jc) && (r += ey),
    t && (r += Zv),
    n.filter(i => !Jc(i)).reduce( (i, s) => i + (Yv.test(s) ? Qv : s === "" ? qv : Jv), r)
}
function ny(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function ry(e, t, n) {
    let {routesMeta: r} = e
      , i = {}
      , s = "/"
      , o = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a]
          , c = a === r.length - 1
          , d = s === "/" ? t : t.slice(s.length) || "/"
          , f = ed({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: c
        }, d)
          , h = l.route;
        if (!f && c && n && !r[r.length - 1].route.index && (f = ed({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, d)),
        !f)
            return null;
        Object.assign(i, f.params),
        o.push({
            params: i,
            pathname: Wt([s, f.pathname]),
            pathnameBase: uy(Wt([s, f.pathnameBase])),
            route: h
        }),
        f.pathnameBase !== "/" && (s = Wt([s, f.pathnameBase]))
    }
    return o
}
function ed(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = iy(e.path, e.caseSensitive, e.end)
      , i = t.match(n);
    if (!i)
        return null;
    let s = i[0]
      , o = s.replace(/(.)\/+$/, "$1")
      , a = i.slice(1);
    return {
        params: r.reduce( (c, d, f) => {
            let {paramName: h, isOptional: v} = d;
            if (h === "*") {
                let x = a[f] || "";
                o = s.slice(0, s.length - x.length).replace(/(.)\/+$/, "$1")
            }
            const y = a[f];
            return v && !y ? c[h] = void 0 : c[h] = (y || "").replace(/%2F/g, "/"),
            c
        }
        , {}),
        pathname: s,
        pathnameBase: o,
        pattern: e
    }
}
function iy(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Lp(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, a, l) => (r.push({
        paramName: a,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i,t ? void 0 : "i"), r]
}
function sy(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Lp(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function ru(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function oy(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: i=""} = typeof e == "string" ? cr(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : ay(n, t) : t,
        search: cy(r),
        hash: dy(i)
    }
}
function ay(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function Oo(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function ly(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function _p(e, t) {
    let n = ly(e);
    return t ? n.map( (r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function Fp(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == "string" ? i = cr(e) : (i = ci({}, e),
    ae(!i.pathname || !i.pathname.includes("?"), Oo("?", "pathname", "search", i)),
    ae(!i.pathname || !i.pathname.includes("#"), Oo("#", "pathname", "hash", i)),
    ae(!i.search || !i.search.includes("#"), Oo("#", "search", "hash", i)));
    let s = e === "" || i.pathname === "", o = s ? "/" : i.pathname, a;
    if (o == null)
        a = n;
    else {
        let f = t.length - 1;
        if (!r && o.startsWith("..")) {
            let h = o.split("/");
            for (; h[0] === ".."; )
                h.shift(),
                f -= 1;
            i.pathname = h.join("/")
        }
        a = f >= 0 ? t[f] : "/"
    }
    let l = oy(i, a)
      , c = o && o !== "/" && o.endsWith("/")
      , d = (s || o === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (c || d) && (l.pathname += "/"),
    l
}
const Wt = e => e.join("/").replace(/\/\/+/g, "/")
  , uy = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , cy = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , dy = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function fy(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Op = ["post", "put", "patch", "delete"];
new Set(Op);
const hy = ["get", ...Op];
new Set(hy);
/**
 * React Router v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function di() {
    return di = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    di.apply(this, arguments)
}
const iu = w.createContext(null)
  , py = w.createContext(null)
  , jn = w.createContext(null)
  , io = w.createContext(null)
  , Nn = w.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , zp = w.createContext(null);
function my(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    ki() || ae(!1);
    let {basename: r, navigator: i} = w.useContext(jn)
      , {hash: s, pathname: o, search: a} = Hp(e, {
        relative: n
    })
      , l = o;
    return r !== "/" && (l = o === "/" ? r : Wt([r, o])),
    i.createHref({
        pathname: l,
        search: a,
        hash: s
    })
}
function ki() {
    return w.useContext(io) != null
}
function dr() {
    return ki() || ae(!1),
    w.useContext(io).location
}
function Bp(e) {
    w.useContext(jn).static || w.useLayoutEffect(e)
}
function Up() {
    let {isDataRoute: e} = w.useContext(Nn);
    return e ? by() : gy()
}
function gy() {
    ki() || ae(!1);
    let e = w.useContext(iu)
      , {basename: t, future: n, navigator: r} = w.useContext(jn)
      , {matches: i} = w.useContext(Nn)
      , {pathname: s} = dr()
      , o = JSON.stringify(_p(i, n.v7_relativeSplatPath))
      , a = w.useRef(!1);
    return Bp( () => {
        a.current = !0
    }
    ),
    w.useCallback(function(c, d) {
        if (d === void 0 && (d = {}),
        !a.current)
            return;
        if (typeof c == "number") {
            r.go(c);
            return
        }
        let f = Fp(c, JSON.parse(o), s, d.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : Wt([t, f.pathname])),
        (d.replace ? r.replace : r.push)(f, d.state, d)
    }, [t, r, o, s, e])
}
function Hp(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {future: r} = w.useContext(jn)
      , {matches: i} = w.useContext(Nn)
      , {pathname: s} = dr()
      , o = JSON.stringify(_p(i, r.v7_relativeSplatPath));
    return w.useMemo( () => Fp(e, JSON.parse(o), s, n === "path"), [e, o, s, n])
}
function vy(e, t) {
    return yy(e, t)
}
function yy(e, t, n, r) {
    ki() || ae(!1);
    let {navigator: i} = w.useContext(jn)
      , {matches: s} = w.useContext(Nn)
      , o = s[s.length - 1]
      , a = o ? o.params : {};
    o && o.pathname;
    let l = o ? o.pathnameBase : "/";
    o && o.route;
    let c = dr(), d;
    if (t) {
        var f;
        let S = typeof t == "string" ? cr(t) : t;
        l === "/" || (f = S.pathname) != null && f.startsWith(l) || ae(!1),
        d = S
    } else
        d = c;
    let h = d.pathname || "/"
      , v = h;
    if (l !== "/") {
        let S = l.replace(/^\//, "").split("/");
        v = "/" + h.replace(/^\//, "").split("/").slice(S.length).join("/")
    }
    let y = Kv(e, {
        pathname: v
    })
      , x = jy(y && y.map(S => Object.assign({}, S, {
        params: Object.assign({}, a, S.params),
        pathname: Wt([l, i.encodeLocation ? i.encodeLocation(S.pathname).pathname : S.pathname]),
        pathnameBase: S.pathnameBase === "/" ? l : Wt([l, i.encodeLocation ? i.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
    })), s, n, r);
    return t && x ? w.createElement(io.Provider, {
        value: {
            location: di({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: Vt.Pop
        }
    }, x) : x
}
function xy() {
    let e = Ty()
      , t = fy(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , i = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return w.createElement(w.Fragment, null, w.createElement("h2", null, "Unexpected Application Error!"), w.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? w.createElement("pre", {
        style: i
    }, n) : null, null)
}
const wy = w.createElement(xy, null);
class Sy extends w.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? w.createElement(Nn.Provider, {
            value: this.props.routeContext
        }, w.createElement(zp.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function ky(e) {
    let {routeContext: t, match: n, children: r} = e
      , i = w.useContext(iu);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(Nn.Provider, {
        value: t
    }, r)
}
function jy(e, t, n, r) {
    var i;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var s;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let o = e
      , a = (i = n) == null ? void 0 : i.errors;
    if (a != null) {
        let d = o.findIndex(f => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0);
        d >= 0 || ae(!1),
        o = o.slice(0, Math.min(o.length, d + 1))
    }
    let l = !1
      , c = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < o.length; d++) {
            let f = o[d];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = d),
            f.route.id) {
                let {loaderData: h, errors: v} = n
                  , y = f.route.loader && h[f.route.id] === void 0 && (!v || v[f.route.id] === void 0);
                if (f.route.lazy || y) {
                    l = !0,
                    c >= 0 ? o = o.slice(0, c + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight( (d, f, h) => {
        let v, y = !1, x = null, S = null;
        n && (v = a && f.route.id ? a[f.route.id] : void 0,
        x = f.route.errorElement || wy,
        l && (c < 0 && h === 0 ? (y = !0,
        S = null) : c === h && (y = !0,
        S = f.route.hydrateFallbackElement || null)));
        let m = t.concat(o.slice(0, h + 1))
          , p = () => {
            let g;
            return v ? g = x : y ? g = S : f.route.Component ? g = w.createElement(f.route.Component, null) : f.route.element ? g = f.route.element : g = d,
            w.createElement(ky, {
                match: f,
                routeContext: {
                    outlet: d,
                    matches: m,
                    isDataRoute: n != null
                },
                children: g
            })
        }
        ;
        return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0) ? w.createElement(Sy, {
            location: n.location,
            revalidation: n.revalidation,
            component: x,
            error: v,
            children: p(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : p()
    }
    , null)
}
var Wp = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(Wp || {})
  , Ls = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Ls || {});
function Ny(e) {
    let t = w.useContext(iu);
    return t || ae(!1),
    t
}
function Cy(e) {
    let t = w.useContext(py);
    return t || ae(!1),
    t
}
function Py(e) {
    let t = w.useContext(Nn);
    return t || ae(!1),
    t
}
function $p(e) {
    let t = Py()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || ae(!1),
    n.route.id
}
function Ty() {
    var e;
    let t = w.useContext(zp)
      , n = Cy(Ls.UseRouteError)
      , r = $p(Ls.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function by() {
    let {router: e} = Ny(Wp.UseNavigateStable)
      , t = $p(Ls.UseNavigateStable)
      , n = w.useRef(!1);
    return Bp( () => {
        n.current = !0
    }
    ),
    w.useCallback(function(i, s) {
        s === void 0 && (s = {}),
        n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, di({
            fromRouteId: t
        }, s)))
    }, [e, t])
}
const td = {};
function Ey(e, t) {
    td[t] || (td[t] = !0,
    console.warn(t))
}
const nd = (e, t, n) => Ey(e, "⚠️ React Router Future Flag Warning: " + t + ". " + ("You can use the `" + e + "` future flag to opt-in early. ") + ("For more information, see " + n + "."));
function My(e, t) {
    (e == null ? void 0 : e.v7_startTransition) === void 0 && nd("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition"),
    (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 && !t && nd("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")
}
function it(e) {
    ae(!1)
}
function Ry(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: i=Vt.Pop, navigator: s, static: o=!1, future: a} = e;
    ki() && ae(!1);
    let l = t.replace(/^\/*/, "/")
      , c = w.useMemo( () => ({
        basename: l,
        navigator: s,
        static: o,
        future: di({
            v7_relativeSplatPath: !1
        }, a)
    }), [l, a, s, o]);
    typeof r == "string" && (r = cr(r));
    let {pathname: d="/", search: f="", hash: h="", state: v=null, key: y="default"} = r
      , x = w.useMemo( () => {
        let S = ru(d, l);
        return S == null ? null : {
            location: {
                pathname: S,
                search: f,
                hash: h,
                state: v,
                key: y
            },
            navigationType: i
        }
    }
    , [l, d, f, h, v, y, i]);
    return x == null ? null : w.createElement(jn.Provider, {
        value: c
    }, w.createElement(io.Provider, {
        children: n,
        value: x
    }))
}
function Dy(e) {
    let {children: t, location: n} = e;
    return vy(Ka(t), n)
}
new Promise( () => {}
);
function Ka(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return w.Children.forEach(e, (r, i) => {
        if (!w.isValidElement(r))
            return;
        let s = [...t, i];
        if (r.type === w.Fragment) {
            n.push.apply(n, Ka(r.props.children, s));
            return
        }
        r.type !== it && ae(!1),
        !r.props.index || !r.props.children || ae(!1);
        let o = {
            id: r.props.id || s.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (o.children = Ka(r.props.children, s)),
        n.push(o)
    }
    ),
    n
}
/**
 * React Router DOM v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ga() {
    return Ga = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Ga.apply(this, arguments)
}
function Ay(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), i, s;
    for (s = 0; s < r.length; s++)
        i = r[s],
        !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
function Ly(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function Vy(e, t) {
    return e.button === 0 && (!t || t === "_self") && !Ly(e)
}
const Iy = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , _y = "6";
try {
    window.__reactRouterVersion = _y
} catch {}
const Fy = "startTransition"
  , rd = M0[Fy];
function Oy(e) {
    let {basename: t, children: n, future: r, window: i} = e
      , s = w.useRef();
    s.current == null && (s.current = Hv({
        window: i,
        v5Compat: !0
    }));
    let o = s.current
      , [a,l] = w.useState({
        action: o.action,
        location: o.location
    })
      , {v7_startTransition: c} = r || {}
      , d = w.useCallback(f => {
        c && rd ? rd( () => l(f)) : l(f)
    }
    , [l, c]);
    return w.useLayoutEffect( () => o.listen(d), [o, d]),
    w.useEffect( () => My(r), [r]),
    w.createElement(Ry, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: o,
        future: r
    })
}
const zy = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , By = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , $t = w.forwardRef(function(t, n) {
    let {onClick: r, relative: i, reloadDocument: s, replace: o, state: a, target: l, to: c, preventScrollReset: d, viewTransition: f} = t, h = Ay(t, Iy), {basename: v} = w.useContext(jn), y, x = !1;
    if (typeof c == "string" && By.test(c) && (y = c,
    zy))
        try {
            let g = new URL(window.location.href)
              , k = c.startsWith("//") ? new URL(g.protocol + c) : new URL(c)
              , j = ru(k.pathname, v);
            k.origin === g.origin && j != null ? c = j + k.search + k.hash : x = !0
        } catch {}
    let S = my(c, {
        relative: i
    })
      , m = Uy(c, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: d,
        relative: i,
        viewTransition: f
    });
    function p(g) {
        r && r(g),
        g.defaultPrevented || m(g)
    }
    return w.createElement("a", Ga({}, h, {
        href: y || S,
        onClick: x || s ? r : p,
        ref: n,
        target: l
    }))
});
var id;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(id || (id = {}));
var sd;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(sd || (sd = {}));
function Uy(e, t) {
    let {target: n, replace: r, state: i, preventScrollReset: s, relative: o, viewTransition: a} = t === void 0 ? {} : t
      , l = Up()
      , c = dr()
      , d = Hp(e, {
        relative: o
    });
    return w.useCallback(f => {
        if (Vy(f, n)) {
            f.preventDefault();
            let h = r !== void 0 ? r : As(c) === As(d);
            l(e, {
                replace: h,
                state: i,
                preventScrollReset: s,
                relative: o,
                viewTransition: a
            })
        }
    }
    , [c, l, d, r, i, n, e, s, o, a])
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Hy = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wy = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , O = (e, t) => {
    const n = w.forwardRef( ({color: r="currentColor", size: i=24, strokeWidth: s=2, absoluteStrokeWidth: o, className: a="", children: l, ...c}, d) => w.createElement("svg", {
        ref: d,
        ...Hy,
        width: i,
        height: i,
        stroke: r,
        strokeWidth: o ? Number(s) * 24 / Number(i) : s,
        className: ["lucide", `lucide-${Wy(e)}`, a].join(" "),
        ...c
    }, [...t.map( ([f,h]) => w.createElement(f, h)), ...Array.isArray(l) ? l : [l]]));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kp = O("AlertCircle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $y = O("ArrowLeft", [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const so = O("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ky = O("Award", [["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}], ["path", {
    d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",
    key: "em7aur"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const od = O("CheckCircle", [["path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
    key: "g774vq"
}], ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = O("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gy = O("Code", [["polyline", {
    points: "16 18 22 12 16 6",
    key: "z7tu5w"
}], ["polyline", {
    points: "8 6 2 12 8 18",
    key: "1eg1df"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xy = O("Coins", [["circle", {
    cx: "8",
    cy: "8",
    r: "6",
    key: "3yglwk"
}], ["path", {
    d: "M18.09 10.37A6 6 0 1 1 10.34 18",
    key: "t5s6rm"
}], ["path", {
    d: "M7 6h1v4",
    key: "1obek4"
}], ["path", {
    d: "m16.71 13.88.7.71-2.82 2.82",
    key: "1rbuyh"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gp = O("Copy", [["rect", {
    width: "14",
    height: "14",
    x: "8",
    y: "8",
    rx: "2",
    ry: "2",
    key: "17jyea"
}], ["path", {
    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
    key: "zix9uf"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oo = O("Download", [["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["polyline", {
    points: "7 10 12 15 17 10",
    key: "2ggqvy"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "15",
    y2: "3",
    key: "1vk2je"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xp = O("ExternalLink", [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ad = O("FileCode2", [["path", {
    d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
    key: "1pf5j1"
}], ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
}], ["path", {
    d: "m5 12-3 3 3 3",
    key: "oke12k"
}], ["path", {
    d: "m9 18 3-3-3-3",
    key: "112psh"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yy = O("FileText", [["path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    key: "1rqfz7"
}], ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
}], ["path", {
    d: "M10 9H8",
    key: "b1mrlr"
}], ["path", {
    d: "M16 13H8",
    key: "t4e002"
}], ["path", {
    d: "M16 17H8",
    key: "z1uh3a"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qy = O("Fingerprint", [["path", {
    d: "M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4",
    key: "1jc9o5"
}], ["path", {
    d: "M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2",
    key: "1mxgy1"
}], ["path", {
    d: "M17.29 21.02c.12-.6.43-2.3.5-3.02",
    key: "ptglia"
}], ["path", {
    d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",
    key: "1nerag"
}], ["path", {
    d: "M8.65 22c.21-.66.45-1.32.57-2",
    key: "13wd9y"
}], ["path", {
    d: "M14 13.12c0 2.38 0 6.38-1 8.88",
    key: "o46ks0"
}], ["path", {
    d: "M2 16h.01",
    key: "1gqxmh"
}], ["path", {
    d: "M21.8 16c.2-2 .131-5.354 0-6",
    key: "drycrb"
}], ["path", {
    d: "M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2",
    key: "1fgabc"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zy = O("FolderOpen", [["path", {
    d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
    key: "usdka0"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qy = O("Gift", [["rect", {
    x: "3",
    y: "8",
    width: "18",
    height: "4",
    rx: "1",
    key: "bkv52"
}], ["path", {
    d: "M12 8v13",
    key: "1c76mn"
}], ["path", {
    d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",
    key: "6wjy6b"
}], ["path", {
    d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
    key: "1ihvrl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jy = O("Github", [["path", {
    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
    key: "tonef"
}], ["path", {
    d: "M9 18c-4.51 2-5-2-7-2",
    key: "9comsn"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ex = O("HelpCircle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
    key: "1u773s"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tx = O("Loader2", [["path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56",
    key: "13zald"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nx = O("Lock", [["rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2",
    key: "1w4ew1"
}], ["path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4",
    key: "fwvmzm"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rx = O("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ix = O("Minus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sx = O("Pen", [["path", {
    d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",
    key: "5qss01"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xa = O("Play", [["polygon", {
    points: "5 3 19 12 5 21 5 3",
    key: "191637"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yp = O("Plus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "M12 5v14",
    key: "s699le"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ox = O("Save", [["path", {
    d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
    key: "1owoqh"
}], ["polyline", {
    points: "17 21 17 13 7 13 7 21",
    key: "1md35c"
}], ["polyline", {
    points: "7 3 7 8 15 8",
    key: "8nz8an"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ax = O("Search", [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ya = O("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ld = O("Sparkles", [["path", {
    d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
    key: "17u4zn"
}], ["path", {
    d: "M5 3v4",
    key: "bklmnn"
}], ["path", {
    d: "M19 17v4",
    key: "iiml17"
}], ["path", {
    d: "M3 5h4",
    key: "nem4j1"
}], ["path", {
    d: "M17 19h4",
    key: "lbex7p"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ud = O("Terminal", [["polyline", {
    points: "4 17 10 11 4 5",
    key: "akl6gq"
}], ["line", {
    x1: "12",
    x2: "20",
    y1: "19",
    y2: "19",
    key: "q2wloq"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cd = O("Trash2", [["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
    key: "4alrt4"
}], ["path", {
    d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
    key: "v07s0e"
}], ["line", {
    x1: "10",
    x2: "10",
    y1: "11",
    y2: "17",
    key: "1uufr5"
}], ["line", {
    x1: "14",
    x2: "14",
    y1: "11",
    y2: "17",
    key: "xtxkd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lx = O("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ux = O("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cx = O("Zap", [["polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
    key: "45s27k"
}]])
  , su = w.createContext({});
function ou(e) {
    const t = w.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const ao = w.createContext(null)
  , au = w.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
});
class dx extends w.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0,
            r.width = n.offsetWidth || 0,
            r.top = n.offsetTop,
            r.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function fx({children: e, isPresent: t}) {
    const n = w.useId()
      , r = w.useRef(null)
      , i = w.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    })
      , {nonce: s} = w.useContext(au);
    return w.useInsertionEffect( () => {
        const {width: o, height: a, top: l, left: c} = i.current;
        if (t || !r.current || !o || !a)
            return;
        r.current.dataset.motionPopId = n;
        const d = document.createElement("style");
        return s && (d.nonce = s),
        document.head.appendChild(d),
        d.sheet && d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
            document.head.removeChild(d)
        }
    }
    , [t]),
    u.jsx(dx, {
        isPresent: t,
        childRef: r,
        sizeRef: i,
        children: w.cloneElement(e, {
            ref: r
        })
    })
}
const hx = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: s, mode: o}) => {
    const a = ou(px)
      , l = w.useId()
      , c = w.useCallback(f => {
        a.set(f, !0);
        for (const h of a.values())
            if (!h)
                return;
        r && r()
    }
    , [a, r])
      , d = w.useMemo( () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: c,
        register: f => (a.set(f, !1),
        () => a.delete(f))
    }), s ? [Math.random(), c] : [n, c]);
    return w.useMemo( () => {
        a.forEach( (f, h) => a.set(h, !1))
    }
    , [n]),
    w.useEffect( () => {
        !n && !a.size && r && r()
    }
    , [n]),
    o === "popLayout" && (e = u.jsx(fx, {
        isPresent: n,
        children: e
    })),
    u.jsx(ao.Provider, {
        value: d,
        children: e
    })
}
;
function px() {
    return new Map
}
function Qp(e=!0) {
    const t = w.useContext(ao);
    if (t === null)
        return [!0, null];
    const {isPresent: n, onExitComplete: r, register: i} = t
      , s = w.useId();
    w.useEffect( () => {
        e && i(s)
    }
    , [e]);
    const o = w.useCallback( () => e && r && r(s), [s, r, e]);
    return !n && r ? [!1, o] : [!0]
}
const $i = e => e.key || "";
function dd(e) {
    const t = [];
    return w.Children.forEach(e, n => {
        w.isValidElement(n) && t.push(n)
    }
    ),
    t
}
const lu = typeof window < "u"
  , Zp = lu ? w.useLayoutEffect : w.useEffect
  , fi = ({children: e, custom: t, initial: n=!0, onExitComplete: r, presenceAffectsLayout: i=!0, mode: s="sync", propagate: o=!1}) => {
    const [a,l] = Qp(o)
      , c = w.useMemo( () => dd(e), [e])
      , d = o && !a ? [] : c.map($i)
      , f = w.useRef(!0)
      , h = w.useRef(c)
      , v = ou( () => new Map)
      , [y,x] = w.useState(c)
      , [S,m] = w.useState(c);
    Zp( () => {
        f.current = !1,
        h.current = c;
        for (let k = 0; k < S.length; k++) {
            const j = $i(S[k]);
            d.includes(j) ? v.delete(j) : v.get(j) !== !0 && v.set(j, !1)
        }
    }
    , [S, d.length, d.join("-")]);
    const p = [];
    if (c !== y) {
        let k = [...c];
        for (let j = 0; j < S.length; j++) {
            const C = S[j]
              , T = $i(C);
            d.includes(T) || (k.splice(j, 0, C),
            p.push(C))
        }
        s === "wait" && p.length && (k = p),
        m(dd(k)),
        x(c);
        return
    }
    const {forceRender: g} = w.useContext(su);
    return u.jsx(u.Fragment, {
        children: S.map(k => {
            const j = $i(k)
              , C = o && !a ? !1 : c === S || d.includes(j)
              , T = () => {
                if (v.has(j))
                    v.set(j, !0);
                else
                    return;
                let N = !0;
                v.forEach(A => {
                    A || (N = !1)
                }
                ),
                N && (g == null || g(),
                m(h.current),
                o && (l == null || l()),
                r && r())
            }
            ;
            return u.jsx(hx, {
                isPresent: C,
                initial: !f.current || n ? void 0 : !1,
                custom: C ? void 0 : t,
                presenceAffectsLayout: i,
                mode: s,
                onExitComplete: C ? void 0 : T,
                children: k
            }, j)
        }
        )
    })
}
  , Ie = e => e;
let Qa = Ie;
function uu(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const sr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , yt = e => e * 1e3
  , xt = e => e / 1e3
  , mx = {
    skipAnimations: !1,
    useManualTiming: !1
};
function gx(e) {
    let t = new Set
      , n = new Set
      , r = !1
      , i = !1;
    const s = new WeakSet;
    let o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function a(c) {
        s.has(c) && (l.schedule(c),
        e()),
        c(o)
    }
    const l = {
        schedule: (c, d=!1, f=!1) => {
            const v = f && r ? t : n;
            return d && s.add(c),
            v.has(c) || v.add(c),
            c
        }
        ,
        cancel: c => {
            n.delete(c),
            s.delete(c)
        }
        ,
        process: c => {
            if (o = c,
            r) {
                i = !0;
                return
            }
            r = !0,
            [t,n] = [n, t],
            t.forEach(a),
            t.clear(),
            r = !1,
            i && (i = !1,
            l.process(c))
        }
    };
    return l
}
const Ki = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , vx = 40;
function qp(e, t) {
    let n = !1
      , r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , s = () => n = !0
      , o = Ki.reduce( (m, p) => (m[p] = gx(s),
    m), {})
      , {read: a, resolveKeyframes: l, update: c, preRender: d, render: f, postRender: h} = o
      , v = () => {
        const m = performance.now();
        n = !1,
        i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, vx), 1),
        i.timestamp = m,
        i.isProcessing = !0,
        a.process(i),
        l.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        h.process(i),
        i.isProcessing = !1,
        n && t && (r = !1,
        e(v))
    }
      , y = () => {
        n = !0,
        r = !0,
        i.isProcessing || e(v)
    }
    ;
    return {
        schedule: Ki.reduce( (m, p) => {
            const g = o[p];
            return m[p] = (k, j=!1, C=!1) => (n || y(),
            g.schedule(k, j, C)),
            m
        }
        , {}),
        cancel: m => {
            for (let p = 0; p < Ki.length; p++)
                o[Ki[p]].cancel(m)
        }
        ,
        state: i,
        steps: o
    }
}
const {schedule: K, cancel: Xt, state: pe, steps: zo} = qp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ie, !0)
  , Jp = w.createContext({
    strict: !1
})
  , fd = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , or = {};
for (const e in fd)
    or[e] = {
        isEnabled: t => fd[e].some(n => !!t[n])
    };
function yx(e) {
    for (const t in e)
        or[t] = {
            ...or[t],
            ...e[t]
        }
}
const xx = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Vs(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || xx.has(e)
}
let em = e => !Vs(e);
function wx(e) {
    e && (em = t => t.startsWith("on") ? !Vs(t) : e(t))
}
try {
    wx(require("@emotion/is-prop-valid").default)
} catch {}
function Sx(e, t, n) {
    const r = {};
    for (const i in e)
        i === "values" && typeof e.values == "object" || (em(i) || n === !0 && Vs(i) || !t && !Vs(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
function kx(e) {
    if (typeof Proxy > "u")
        return e;
    const t = new Map
      , n = (...r) => e(...r);
    return new Proxy(n,{
        get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)),
        t.get(i))
    })
}
const lo = w.createContext({});
function hi(e) {
    return typeof e == "string" || Array.isArray(e)
}
function uo(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const cu = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , du = ["initial", ...cu];
function co(e) {
    return uo(e.animate) || du.some(t => hi(e[t]))
}
function tm(e) {
    return !!(co(e) || e.variants)
}
function jx(e, t) {
    if (co(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || hi(n) ? n : void 0,
            animate: hi(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function Nx(e) {
    const {initial: t, animate: n} = jx(e, w.useContext(lo));
    return w.useMemo( () => ({
        initial: t,
        animate: n
    }), [hd(t), hd(n)])
}
function hd(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Cx = Symbol.for("motionComponentSymbol");
function Bn(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function Px(e, t, n) {
    return w.useCallback(r => {
        r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Bn(n) && (n.current = r))
    }
    , [t])
}
const fu = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , Tx = "framerAppearId"
  , nm = "data-" + fu(Tx)
  , {schedule: hu, cancel: nk} = qp(queueMicrotask, !1)
  , rm = w.createContext({});
function bx(e, t, n, r, i) {
    var s, o;
    const {visualElement: a} = w.useContext(lo)
      , l = w.useContext(Jp)
      , c = w.useContext(ao)
      , d = w.useContext(au).reducedMotion
      , f = w.useRef(null);
    r = r || l.renderer,
    !f.current && r && (f.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: c,
        blockInitialAnimation: c ? c.initial === !1 : !1,
        reducedMotionConfig: d
    }));
    const h = f.current
      , v = w.useContext(rm);
    h && !h.projection && i && (h.type === "html" || h.type === "svg") && Ex(f.current, n, i, v);
    const y = w.useRef(!1);
    w.useInsertionEffect( () => {
        h && y.current && h.update(n, c)
    }
    );
    const x = n[nm]
      , S = w.useRef(!!x && !(!((s = window.MotionHandoffIsComplete) === null || s === void 0) && s.call(window, x)) && ((o = window.MotionHasOptimisedAnimation) === null || o === void 0 ? void 0 : o.call(window, x)));
    return Zp( () => {
        h && (y.current = !0,
        window.MotionIsMounted = !0,
        h.updateFeatures(),
        hu.render(h.render),
        S.current && h.animationState && h.animationState.animateChanges())
    }
    ),
    w.useEffect( () => {
        h && (!S.current && h.animationState && h.animationState.animateChanges(),
        S.current && (queueMicrotask( () => {
            var m;
            (m = window.MotionHandoffMarkAsComplete) === null || m === void 0 || m.call(window, x)
        }
        ),
        S.current = !1))
    }
    ),
    h
}
function Ex(e, t, n, r) {
    const {layoutId: i, layout: s, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: c} = t;
    e.projection = new n(e.latestValues,t["data-framer-portal-id"] ? void 0 : im(e.parent)),
    e.projection.setOptions({
        layoutId: i,
        layout: s,
        alwaysMeasureLayout: !!o || a && Bn(a),
        visualElement: e,
        animationType: typeof s == "string" ? s : "both",
        initialPromotionConfig: r,
        layoutScroll: l,
        layoutRoot: c
    })
}
function im(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : im(e.parent)
}
function Mx({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i}) {
    var s, o;
    e && yx(e);
    function a(c, d) {
        let f;
        const h = {
            ...w.useContext(au),
            ...c,
            layoutId: Rx(c)
        }
          , {isStatic: v} = h
          , y = Nx(c)
          , x = r(c, v);
        if (!v && lu) {
            Dx();
            const S = Ax(h);
            f = S.MeasureLayout,
            y.visualElement = bx(i, x, h, t, S.ProjectionNode)
        }
        return u.jsxs(lo.Provider, {
            value: y,
            children: [f && y.visualElement ? u.jsx(f, {
                visualElement: y.visualElement,
                ...h
            }) : null, n(i, c, Px(x, y.visualElement, d), x, v, y.visualElement)]
        })
    }
    a.displayName = `motion.${typeof i == "string" ? i : `create(${(o = (s = i.displayName) !== null && s !== void 0 ? s : i.name) !== null && o !== void 0 ? o : ""})`}`;
    const l = w.forwardRef(a);
    return l[Cx] = i,
    l
}
function Rx({layoutId: e}) {
    const t = w.useContext(su).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function Dx(e, t) {
    w.useContext(Jp).strict
}
function Ax(e) {
    const {drag: t, layout: n} = or;
    if (!t && !n)
        return {};
    const r = {
        ...t,
        ...n
    };
    return {
        MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}
const Lx = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function pu(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(Lx.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function pd(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach( (n, r) => {
        t[0][r] = n.get(),
        t[1][r] = n.getVelocity()
    }
    ),
    t
}
function mu(e, t, n, r) {
    if (typeof t == "function") {
        const [i,s] = pd(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
        const [i,s] = pd(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    return t
}
const Za = e => Array.isArray(e)
  , Vx = e => !!(e && typeof e == "object" && e.mix && e.toValue)
  , Ix = e => Za(e) ? e[e.length - 1] || 0 : e
  , Se = e => !!(e && e.getVelocity);
function os(e) {
    const t = Se(e) ? e.get() : e;
    return Vx(t) ? t.toValue() : t
}
function _x({scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n}, r, i, s) {
    const o = {
        latestValues: Fx(r, i, s, e),
        renderState: t()
    };
    return n && (o.onMount = a => n({
        props: r,
        current: a,
        ...o
    }),
    o.onUpdate = a => n(a)),
    o
}
const sm = e => (t, n) => {
    const r = w.useContext(lo)
      , i = w.useContext(ao)
      , s = () => _x(e, t, r, i);
    return n ? s() : ou(s)
}
;
function Fx(e, t, n, r) {
    const i = {}
      , s = r(e, {});
    for (const h in s)
        i[h] = os(s[h]);
    let {initial: o, animate: a} = e;
    const l = co(e)
      , c = tm(e);
    t && c && !l && e.inherit !== !1 && (o === void 0 && (o = t.initial),
    a === void 0 && (a = t.animate));
    let d = n ? n.initial === !1 : !1;
    d = d || o === !1;
    const f = d ? a : o;
    if (f && typeof f != "boolean" && !uo(f)) {
        const h = Array.isArray(f) ? f : [f];
        for (let v = 0; v < h.length; v++) {
            const y = mu(e, h[v]);
            if (y) {
                const {transitionEnd: x, transition: S, ...m} = y;
                for (const p in m) {
                    let g = m[p];
                    if (Array.isArray(g)) {
                        const k = d ? g.length - 1 : 0;
                        g = g[k]
                    }
                    g !== null && (i[p] = g)
                }
                for (const p in x)
                    i[p] = x[p]
            }
        }
    }
    return i
}
const fr = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , Cn = new Set(fr)
  , om = e => t => typeof t == "string" && t.startsWith(e)
  , am = om("--")
  , Ox = om("var(--")
  , gu = e => Ox(e) ? zx.test(e.split("/*")[0].trim()) : !1
  , zx = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , lm = (e, t) => t && typeof e == "number" ? t.transform(e) : e
  , Nt = (e, t, n) => n > t ? t : n < e ? e : n
  , hr = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , pi = {
    ...hr,
    transform: e => Nt(0, 1, e)
}
  , Gi = {
    ...hr,
    default: 1
}
  , ji = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , bt = ji("deg")
  , ut = ji("%")
  , V = ji("px")
  , Bx = ji("vh")
  , Ux = ji("vw")
  , md = {
    ...ut,
    parse: e => ut.parse(e) / 100,
    transform: e => ut.transform(e * 100)
}
  , Hx = {
    borderWidth: V,
    borderTopWidth: V,
    borderRightWidth: V,
    borderBottomWidth: V,
    borderLeftWidth: V,
    borderRadius: V,
    radius: V,
    borderTopLeftRadius: V,
    borderTopRightRadius: V,
    borderBottomRightRadius: V,
    borderBottomLeftRadius: V,
    width: V,
    maxWidth: V,
    height: V,
    maxHeight: V,
    top: V,
    right: V,
    bottom: V,
    left: V,
    padding: V,
    paddingTop: V,
    paddingRight: V,
    paddingBottom: V,
    paddingLeft: V,
    margin: V,
    marginTop: V,
    marginRight: V,
    marginBottom: V,
    marginLeft: V,
    backgroundPositionX: V,
    backgroundPositionY: V
}
  , Wx = {
    rotate: bt,
    rotateX: bt,
    rotateY: bt,
    rotateZ: bt,
    scale: Gi,
    scaleX: Gi,
    scaleY: Gi,
    scaleZ: Gi,
    skew: bt,
    skewX: bt,
    skewY: bt,
    distance: V,
    translateX: V,
    translateY: V,
    translateZ: V,
    x: V,
    y: V,
    z: V,
    perspective: V,
    transformPerspective: V,
    opacity: pi,
    originX: md,
    originY: md,
    originZ: V
}
  , gd = {
    ...hr,
    transform: Math.round
}
  , vu = {
    ...Hx,
    ...Wx,
    zIndex: gd,
    size: V,
    fillOpacity: pi,
    strokeOpacity: pi,
    numOctaves: gd
}
  , $x = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , Kx = fr.length;
function Gx(e, t, n) {
    let r = ""
      , i = !0;
    for (let s = 0; s < Kx; s++) {
        const o = fr[s]
          , a = e[o];
        if (a === void 0)
            continue;
        let l = !0;
        if (typeof a == "number" ? l = a === (o.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0,
        !l || n) {
            const c = lm(a, vu[o]);
            if (!l) {
                i = !1;
                const d = $x[o] || o;
                r += `${d}(${c}) `
            }
            n && (t[o] = c)
        }
    }
    return r = r.trim(),
    n ? r = n(t, i ? "" : r) : i && (r = "none"),
    r
}
function yu(e, t, n) {
    const {style: r, vars: i, transformOrigin: s} = e;
    let o = !1
      , a = !1;
    for (const l in t) {
        const c = t[l];
        if (Cn.has(l)) {
            o = !0;
            continue
        } else if (am(l)) {
            i[l] = c;
            continue
        } else {
            const d = lm(c, vu[l]);
            l.startsWith("origin") ? (a = !0,
            s[l] = d) : r[l] = d
        }
    }
    if (t.transform || (o || n ? r.transform = Gx(t, e.transform, n) : r.transform && (r.transform = "none")),
    a) {
        const {originX: l="50%", originY: c="50%", originZ: d=0} = s;
        r.transformOrigin = `${l} ${c} ${d}`
    }
}
const Xx = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , Yx = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function Qx(e, t, n=1, r=0, i=!0) {
    e.pathLength = 1;
    const s = i ? Xx : Yx;
    e[s.offset] = V.transform(-r);
    const o = V.transform(t)
      , a = V.transform(n);
    e[s.array] = `${o} ${a}`
}
function vd(e, t, n) {
    return typeof e == "string" ? e : V.transform(t + n * e)
}
function Zx(e, t, n) {
    const r = vd(t, e.x, e.width)
      , i = vd(n, e.y, e.height);
    return `${r} ${i}`
}
function xu(e, {attrX: t, attrY: n, attrScale: r, originX: i, originY: s, pathLength: o, pathSpacing: a=1, pathOffset: l=0, ...c}, d, f) {
    if (yu(e, c, f),
    d) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: h, style: v, dimensions: y} = e;
    h.transform && (y && (v.transform = h.transform),
    delete h.transform),
    y && (i !== void 0 || s !== void 0 || v.transform) && (v.transformOrigin = Zx(y, i !== void 0 ? i : .5, s !== void 0 ? s : .5)),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    o !== void 0 && Qx(h, o, a, l, !1)
}
const wu = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
})
  , um = () => ({
    ...wu(),
    attrs: {}
})
  , Su = e => typeof e == "string" && e.toLowerCase() === "svg";
function cm(e, {style: t, vars: n}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const s in n)
        e.style.setProperty(s, n[s])
}
const dm = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function fm(e, t, n, r) {
    cm(e, t, void 0, r);
    for (const i in t.attrs)
        e.setAttribute(dm.has(i) ? i : fu(i), t.attrs[i])
}
const Is = {};
function qx(e) {
    Object.assign(Is, e)
}
function hm(e, {layout: t, layoutId: n}) {
    return Cn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Is[e] || e === "opacity")
}
function ku(e, t, n) {
    var r;
    const {style: i} = e
      , s = {};
    for (const o in i)
        (Se(i[o]) || t.style && Se(t.style[o]) || hm(o, e) || ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[o] = i[o]);
    return s
}
function pm(e, t, n) {
    const r = ku(e, t, n);
    for (const i in e)
        if (Se(e[i]) || Se(t[i])) {
            const s = fr.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[s] = e[i]
        }
    return r
}
function Jx(e, t) {
    try {
        t.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
    } catch {
        t.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}
const yd = ["x", "y", "width", "height", "cx", "cy", "r"]
  , e1 = {
    useVisualState: sm({
        scrapeMotionValuesFromProps: pm,
        createRenderState: um,
        onUpdate: ({props: e, prevProps: t, current: n, renderState: r, latestValues: i}) => {
            if (!n)
                return;
            let s = !!e.drag;
            if (!s) {
                for (const a in i)
                    if (Cn.has(a)) {
                        s = !0;
                        break
                    }
            }
            if (!s)
                return;
            let o = !t;
            if (t)
                for (let a = 0; a < yd.length; a++) {
                    const l = yd[a];
                    e[l] !== t[l] && (o = !0)
                }
            o && K.read( () => {
                Jx(n, r),
                K.render( () => {
                    xu(r, i, Su(n.tagName), e.transformTemplate),
                    fm(n, r)
                }
                )
            }
            )
        }
    })
}
  , t1 = {
    useVisualState: sm({
        scrapeMotionValuesFromProps: ku,
        createRenderState: wu
    })
};
function mm(e, t, n) {
    for (const r in t)
        !Se(t[r]) && !hm(r, n) && (e[r] = t[r])
}
function n1({transformTemplate: e}, t) {
    return w.useMemo( () => {
        const n = wu();
        return yu(n, t, e),
        Object.assign({}, n.vars, n.style)
    }
    , [t])
}
function r1(e, t) {
    const n = e.style || {}
      , r = {};
    return mm(r, n, e),
    Object.assign(r, n1(e, t)),
    r
}
function i1(e, t) {
    const n = {}
      , r = r1(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    n.style = r,
    n
}
function s1(e, t, n, r) {
    const i = w.useMemo( () => {
        const s = um();
        return xu(s, t, Su(r), e.transformTemplate),
        {
            ...s.attrs,
            style: {
                ...s.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const s = {};
        mm(s, e.style, e),
        i.style = {
            ...s,
            ...i.style
        }
    }
    return i
}
function o1(e=!1) {
    return (n, r, i, {latestValues: s}, o) => {
        const l = (pu(n) ? s1 : i1)(r, s, o, n)
          , c = Sx(r, typeof n == "string", e)
          , d = n !== w.Fragment ? {
            ...c,
            ...l,
            ref: i
        } : {}
          , {children: f} = r
          , h = w.useMemo( () => Se(f) ? f.get() : f, [f]);
        return w.createElement(n, {
            ...d,
            children: h
        })
    }
}
function a1(e, t) {
    return function(r, {forwardMotionProps: i}={
        forwardMotionProps: !1
    }) {
        const o = {
            ...pu(r) ? e1 : t1,
            preloadedFeatures: e,
            useRender: o1(i),
            createVisualElement: t,
            Component: r
        };
        return Mx(o)
    }
}
function gm(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function fo(e, t, n) {
    const r = e.getProps();
    return mu(r, t, n !== void 0 ? n : r.custom, e)
}
const l1 = uu( () => window.ScrollTimeline !== void 0);
class u1 {
    constructor(t) {
        this.stop = () => this.runAll("stop"),
        this.animations = t.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(t => "finished"in t ? t.finished : t))
    }
    getAll(t) {
        return this.animations[0][t]
    }
    setAll(t, n) {
        for (let r = 0; r < this.animations.length; r++)
            this.animations[r][t] = n
    }
    attachTimeline(t, n) {
        const r = this.animations.map(i => {
            if (l1() && i.attachTimeline)
                return i.attachTimeline(t);
            if (typeof n == "function")
                return n(i)
        }
        );
        return () => {
            r.forEach( (i, s) => {
                i && i(),
                this.animations[s].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(t) {
        this.setAll("time", t)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(t) {
        this.setAll("speed", t)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let t = 0;
        for (let n = 0; n < this.animations.length; n++)
            t = Math.max(t, this.animations[n].duration);
        return t
    }
    runAll(t) {
        this.animations.forEach(n => n[t]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class c1 extends u1 {
    then(t, n) {
        return Promise.all(this.animations).then(t).catch(n)
    }
}
function ju(e, t) {
    return e ? e[t] || e.default || e : void 0
}
const qa = 2e4;
function vm(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < qa; )
        t += n,
        r = e.next(t);
    return t >= qa ? 1 / 0 : t
}
function Nu(e) {
    return typeof e == "function"
}
function xd(e, t) {
    e.timeline = t,
    e.onfinish = null
}
const Cu = e => Array.isArray(e) && typeof e[0] == "number"
  , d1 = {
    linearEasing: void 0
};
function f1(e, t) {
    const n = uu(e);
    return () => {
        var r;
        return (r = d1[t]) !== null && r !== void 0 ? r : n()
    }
}
const _s = f1( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , ym = (e, t, n=10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++)
        r += e(sr(0, i - 1, s)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
}
;
function xm(e) {
    return !!(typeof e == "function" && _s() || !e || typeof e == "string" && (e in Ja || _s()) || Cu(e) || Array.isArray(e) && e.every(xm))
}
const Rr = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , Ja = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Rr([0, .65, .55, 1]),
    circOut: Rr([.55, 0, 1, .45]),
    backIn: Rr([.31, .01, .66, -.59]),
    backOut: Rr([.33, 1.53, .69, .99])
};
function wm(e, t) {
    if (e)
        return typeof e == "function" && _s() ? ym(e, t) : Cu(e) ? Rr(e) : Array.isArray(e) ? e.map(n => wm(n, t) || Ja.easeOut) : Ja[e]
}
const Qe = {
    x: !1,
    y: !1
};
function Sm() {
    return Qe.x || Qe.y
}
function h1(e, t, n) {
    var r;
    if (e instanceof Element)
        return [e];
    if (typeof e == "string") {
        let i = document;
        const s = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
        return s ? Array.from(s) : []
    }
    return Array.from(e)
}
function km(e, t) {
    const n = h1(e)
      , r = new AbortController
      , i = {
        passive: !0,
        ...t,
        signal: r.signal
    };
    return [n, i, () => r.abort()]
}
function wd(e) {
    return t => {
        t.pointerType === "touch" || Sm() || e(t)
    }
}
function p1(e, t, n={}) {
    const [r,i,s] = km(e, n)
      , o = wd(a => {
        const {target: l} = a
          , c = t(a);
        if (typeof c != "function" || !l)
            return;
        const d = wd(f => {
            c(f),
            l.removeEventListener("pointerleave", d)
        }
        );
        l.addEventListener("pointerleave", d, i)
    }
    );
    return r.forEach(a => {
        a.addEventListener("pointerenter", o, i)
    }
    ),
    s
}
const jm = (e, t) => t ? e === t ? !0 : jm(e, t.parentElement) : !1
  , Pu = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , m1 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function g1(e) {
    return m1.has(e.tagName) || e.tabIndex !== -1
}
const Dr = new WeakSet;
function Sd(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}
function Bo(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const v1 = (e, t) => {
    const n = e.currentTarget;
    if (!n)
        return;
    const r = Sd( () => {
        if (Dr.has(n))
            return;
        Bo(n, "down");
        const i = Sd( () => {
            Bo(n, "up")
        }
        )
          , s = () => Bo(n, "cancel");
        n.addEventListener("keyup", i, t),
        n.addEventListener("blur", s, t)
    }
    );
    n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
}
;
function kd(e) {
    return Pu(e) && !Sm()
}
function y1(e, t, n={}) {
    const [r,i,s] = km(e, n)
      , o = a => {
        const l = a.currentTarget;
        if (!kd(a) || Dr.has(l))
            return;
        Dr.add(l);
        const c = t(a)
          , d = (v, y) => {
            window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", h),
            !(!kd(v) || !Dr.has(l)) && (Dr.delete(l),
            typeof c == "function" && c(v, {
                success: y
            }))
        }
          , f = v => {
            d(v, n.useGlobalTarget || jm(l, v.target))
        }
          , h = v => {
            d(v, !1)
        }
        ;
        window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", h, i)
    }
    ;
    return r.forEach(a => {
        !g1(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i),
        a.addEventListener("focus", c => v1(c, i), i)
    }
    ),
    s
}
function x1(e) {
    return e === "x" || e === "y" ? Qe[e] ? null : (Qe[e] = !0,
    () => {
        Qe[e] = !1
    }
    ) : Qe.x || Qe.y ? null : (Qe.x = Qe.y = !0,
    () => {
        Qe.x = Qe.y = !1
    }
    )
}
const Nm = new Set(["width", "height", "top", "left", "right", "bottom", ...fr]);
let as;
function w1() {
    as = void 0
}
const ct = {
    now: () => (as === void 0 && ct.set(pe.isProcessing || mx.useManualTiming ? pe.timestamp : performance.now()),
    as),
    set: e => {
        as = e,
        queueMicrotask(w1)
    }
};
function Tu(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function bu(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class Eu {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Tu(this.subscriptions, t),
        () => bu(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let s = 0; s < i; s++) {
                    const o = this.subscriptions[s];
                    o && o(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
function Cm(e, t) {
    return t ? e * (1e3 / t) : 0
}
const jd = 30
  , S1 = e => !isNaN(parseFloat(e));
class k1 {
    constructor(t, n={}) {
        this.version = "11.18.2",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (r, i=!0) => {
            const s = ct.now();
            this.updatedAt !== s && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = ct.now(),
        this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = S1(this.current))
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Eu);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            K.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = ct.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > jd)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, jd);
        return Cm(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function mi(e, t) {
    return new k1(e,t)
}
function j1(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, mi(n))
}
function N1(e, t) {
    const n = fo(e, t);
    let {transitionEnd: r={}, transition: i={}, ...s} = n || {};
    s = {
        ...s,
        ...r
    };
    for (const o in s) {
        const a = Ix(s[o]);
        j1(e, o, a)
    }
}
function C1(e) {
    return !!(Se(e) && e.add)
}
function el(e, t) {
    const n = e.getValue("willChange");
    if (C1(n))
        return n.add(t)
}
function Pm(e) {
    return e.props[nm]
}
const Tm = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , P1 = 1e-7
  , T1 = 12;
function b1(e, t, n, r, i) {
    let s, o, a = 0;
    do
        o = t + (n - t) / 2,
        s = Tm(o, r, i) - e,
        s > 0 ? n = o : t = o;
    while (Math.abs(s) > P1 && ++a < T1);
    return o
}
function Ni(e, t, n, r) {
    if (e === t && n === r)
        return Ie;
    const i = s => b1(s, 0, 1, e, n);
    return s => s === 0 || s === 1 ? s : Tm(i(s), t, r)
}
const bm = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , Em = e => t => 1 - e(1 - t)
  , Mm = Ni(.33, 1.53, .69, .99)
  , Mu = Em(Mm)
  , Rm = bm(Mu)
  , Dm = e => (e *= 2) < 1 ? .5 * Mu(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , Ru = e => 1 - Math.sin(Math.acos(e))
  , Am = Em(Ru)
  , Lm = bm(Ru)
  , Vm = e => /^0[^.\s]+$/u.test(e);
function E1(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Vm(e) : !0
}
const Hr = e => Math.round(e * 1e5) / 1e5
  , Du = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function M1(e) {
    return e == null
}
const R1 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Au = (e, t) => n => !!(typeof n == "string" && R1.test(n) && n.startsWith(e) || t && !M1(n) && Object.prototype.hasOwnProperty.call(n, t))
  , Im = (e, t, n) => r => {
    if (typeof r != "string")
        return r;
    const [i,s,o,a] = r.match(Du);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(s),
        [n]: parseFloat(o),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , D1 = e => Nt(0, 255, e)
  , Uo = {
    ...hr,
    transform: e => Math.round(D1(e))
}
  , fn = {
    test: Au("rgb", "red"),
    parse: Im("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + Uo.transform(e) + ", " + Uo.transform(t) + ", " + Uo.transform(n) + ", " + Hr(pi.transform(r)) + ")"
};
function A1(e) {
    let t = ""
      , n = ""
      , r = ""
      , i = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    i = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    i = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const tl = {
    test: Au("#"),
    parse: A1,
    transform: fn.transform
}
  , Un = {
    test: Au("hsl", "hue"),
    parse: Im("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + ut.transform(Hr(t)) + ", " + ut.transform(Hr(n)) + ", " + Hr(pi.transform(r)) + ")"
}
  , xe = {
    test: e => fn.test(e) || tl.test(e) || Un.test(e),
    parse: e => fn.test(e) ? fn.parse(e) : Un.test(e) ? Un.parse(e) : tl.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? fn.transform(e) : Un.transform(e)
}
  , L1 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function V1(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(Du)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(L1)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const _m = "number"
  , Fm = "color"
  , I1 = "var"
  , _1 = "var("
  , Nd = "${}"
  , F1 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function gi(e) {
    const t = e.toString()
      , n = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , i = [];
    let s = 0;
    const a = t.replace(F1, l => (xe.test(l) ? (r.color.push(s),
    i.push(Fm),
    n.push(xe.parse(l))) : l.startsWith(_1) ? (r.var.push(s),
    i.push(I1),
    n.push(l)) : (r.number.push(s),
    i.push(_m),
    n.push(parseFloat(l))),
    ++s,
    Nd)).split(Nd);
    return {
        values: n,
        split: a,
        indexes: r,
        types: i
    }
}
function Om(e) {
    return gi(e).values
}
function zm(e) {
    const {split: t, types: n} = gi(e)
      , r = t.length;
    return i => {
        let s = "";
        for (let o = 0; o < r; o++)
            if (s += t[o],
            i[o] !== void 0) {
                const a = n[o];
                a === _m ? s += Hr(i[o]) : a === Fm ? s += xe.transform(i[o]) : s += i[o]
            }
        return s
    }
}
const O1 = e => typeof e == "number" ? 0 : e;
function z1(e) {
    const t = Om(e);
    return zm(e)(t.map(O1))
}
const Yt = {
    test: V1,
    parse: Om,
    createTransformer: zm,
    getAnimatableNone: z1
}
  , B1 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function U1(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(Du) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let s = B1.has(t) ? 1 : 0;
    return r !== n && (s *= 100),
    t + "(" + s + i + ")"
}
const H1 = /\b([a-z-]*)\(.*?\)/gu
  , nl = {
    ...Yt,
    getAnimatableNone: e => {
        const t = e.match(H1);
        return t ? t.map(U1).join(" ") : e
    }
}
  , W1 = {
    ...vu,
    color: xe,
    backgroundColor: xe,
    outlineColor: xe,
    fill: xe,
    stroke: xe,
    borderColor: xe,
    borderTopColor: xe,
    borderRightColor: xe,
    borderBottomColor: xe,
    borderLeftColor: xe,
    filter: nl,
    WebkitFilter: nl
}
  , Lu = e => W1[e];
function Bm(e, t) {
    let n = Lu(e);
    return n !== nl && (n = Yt),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const $1 = new Set(["auto", "none", "0"]);
function K1(e, t, n) {
    let r = 0, i;
    for (; r < e.length && !i; ) {
        const s = e[r];
        typeof s == "string" && !$1.has(s) && gi(s).values.length && (i = e[r]),
        r++
    }
    if (i && n)
        for (const s of t)
            e[s] = Bm(n, i)
}
const Cd = e => e === hr || e === V
  , Pd = (e, t) => parseFloat(e.split(", ")[t])
  , Td = (e, t) => (n, {transform: r}) => {
    if (r === "none" || !r)
        return 0;
    const i = r.match(/^matrix3d\((.+)\)$/u);
    if (i)
        return Pd(i[1], t);
    {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? Pd(s[1], e) : 0
    }
}
  , G1 = new Set(["x", "y", "z"])
  , X1 = fr.filter(e => !G1.has(e));
function Y1(e) {
    const t = [];
    return X1.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
const ar = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: Td(4, 13),
    y: Td(5, 14)
};
ar.translateX = ar.x;
ar.translateY = ar.y;
const mn = new Set;
let rl = !1
  , il = !1;
function Um() {
    if (il) {
        const e = Array.from(mn).filter(r => r.needsMeasurement)
          , t = new Set(e.map(r => r.element))
          , n = new Map;
        t.forEach(r => {
            const i = Y1(r);
            i.length && (n.set(r, i),
            r.render())
        }
        ),
        e.forEach(r => r.measureInitialState()),
        t.forEach(r => {
            r.render();
            const i = n.get(r);
            i && i.forEach( ([s,o]) => {
                var a;
                (a = r.getValue(s)) === null || a === void 0 || a.set(o)
            }
            )
        }
        ),
        e.forEach(r => r.measureEndState()),
        e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    il = !1,
    rl = !1,
    mn.forEach(e => e.complete()),
    mn.clear()
}
function Hm() {
    mn.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (il = !0)
    }
    )
}
function Q1() {
    Hm(),
    Um()
}
class Vu {
    constructor(t, n, r, i, s, o=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = n,
        this.name = r,
        this.motionValue = i,
        this.element = s,
        this.isAsync = o
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (mn.add(this),
        rl || (rl = !0,
        K.read(Hm),
        K.resolveKeyframes(Um))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: n, element: r, motionValue: i} = this;
        for (let s = 0; s < t.length; s++)
            if (t[s] === null)
                if (s === 0) {
                    const o = i == null ? void 0 : i.get()
                      , a = t[t.length - 1];
                    if (o !== void 0)
                        t[0] = o;
                    else if (r && n) {
                        const l = r.readValue(n, a);
                        l != null && (t[0] = l)
                    }
                    t[0] === void 0 && (t[0] = a),
                    i && o === void 0 && i.set(t[0])
                } else
                    t[s] = t[s - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        mn.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        mn.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Wm = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
  , Z1 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function q1(e) {
    const t = Z1.exec(e);
    if (!t)
        return [, ];
    const [,n,r,i] = t;
    return [`--${n ?? r}`, i]
}
function $m(e, t, n=1) {
    const [r,i] = q1(e);
    if (!r)
        return;
    const s = window.getComputedStyle(t).getPropertyValue(r);
    if (s) {
        const o = s.trim();
        return Wm(o) ? parseFloat(o) : o
    }
    return gu(i) ? $m(i, t, n + 1) : i
}
const Km = e => t => t.test(e)
  , J1 = {
    test: e => e === "auto",
    parse: e => e
}
  , Gm = [hr, V, ut, bt, Ux, Bx, J1]
  , bd = e => Gm.find(Km(e));
class Xm extends Vu {
    constructor(t, n, r, i, s) {
        super(t, n, r, i, s, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: n, name: r} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let l = 0; l < t.length; l++) {
            let c = t[l];
            if (typeof c == "string" && (c = c.trim(),
            gu(c))) {
                const d = $m(c, n.current);
                d !== void 0 && (t[l] = d),
                l === t.length - 1 && (this.finalKeyframe = c)
            }
        }
        if (this.resolveNoneKeyframes(),
        !Nm.has(r) || t.length !== 2)
            return;
        const [i,s] = t
          , o = bd(i)
          , a = bd(s);
        if (o !== a)
            if (Cd(o) && Cd(a))
                for (let l = 0; l < t.length; l++) {
                    const c = t[l];
                    typeof c == "string" && (t[l] = parseFloat(c))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: n} = this
          , r = [];
        for (let i = 0; i < t.length; i++)
            E1(t[i]) && r.push(i);
        r.length && K1(t, r, n)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: n, name: r} = this;
        if (!t || !t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = ar[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
        n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var t;
        const {element: n, name: r, unresolvedKeyframes: i} = this;
        if (!n || !n.current)
            return;
        const s = n.getValue(r);
        s && s.jump(this.measuredOrigin, !1);
        const o = i.length - 1
          , a = i[o];
        i[o] = ar[r](n.measureViewportBox(), window.getComputedStyle(n.current)),
        a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
        !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach( ([l,c]) => {
            n.getValue(l).set(c)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const Ed = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Yt.test(e) || e === "0") && !e.startsWith("url("));
function ew(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function tw(e, t, n, r) {
    const i = e[0];
    if (i === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const s = e[e.length - 1]
      , o = Ed(i, t)
      , a = Ed(s, t);
    return !o || !a ? !1 : ew(e) || (n === "spring" || Nu(n)) && r
}
const nw = e => e !== null;
function ho(e, {repeat: t, repeatType: n="loop"}, r) {
    const i = e.filter(nw)
      , s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !s || r === void 0 ? i[s] : r
}
const rw = 40;
class Ym {
    constructor({autoplay: t=!0, delay: n=0, type: r="keyframes", repeat: i=0, repeatDelay: s=0, repeatType: o="loop", ...a}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = ct.now(),
        this.options = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: s,
            repeatType: o,
            ...a
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > rw ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && Q1(),
        this._resolved
    }
    onKeyframesResolved(t, n) {
        this.resolvedAt = ct.now(),
        this.hasAttemptedResolve = !0;
        const {name: r, type: i, velocity: s, delay: o, onComplete: a, onUpdate: l, isGenerator: c} = this.options;
        if (!c && !tw(t, r, i, s))
            if (o)
                this.options.duration = 0;
            else {
                l && l(ho(t, this.options, n)),
                a && a(),
                this.resolveFinishedPromise();
                return
            }
        const d = this.initPlayback(t, n);
        d !== !1 && (this._resolved = {
            keyframes: t,
            finalKeyframe: n,
            ...d
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(t, n) {
        return this.currentFinishedPromise.then(t, n)
    }
    flatten() {
        this.options.type = "keyframes",
        this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t => {
            this.resolveFinishedPromise = t
        }
        )
    }
}
const Q = (e, t, n) => e + (t - e) * n;
function Ho(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function iw({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let i = 0
      , s = 0
      , o = 0;
    if (!t)
        i = s = o = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t
          , l = 2 * n - a;
        i = Ho(l, a, e + 1 / 3),
        s = Ho(l, a, e),
        o = Ho(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(s * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}
function Fs(e, t) {
    return n => n > 0 ? t : e
}
const Wo = (e, t, n) => {
    const r = e * e
      , i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i)
}
  , sw = [tl, fn, Un]
  , ow = e => sw.find(t => t.test(e));
function Md(e) {
    const t = ow(e);
    if (!t)
        return !1;
    let n = t.parse(e);
    return t === Un && (n = iw(n)),
    n
}
const Rd = (e, t) => {
    const n = Md(e)
      , r = Md(t);
    if (!n || !r)
        return Fs(e, t);
    const i = {
        ...n
    };
    return s => (i.red = Wo(n.red, r.red, s),
    i.green = Wo(n.green, r.green, s),
    i.blue = Wo(n.blue, r.blue, s),
    i.alpha = Q(n.alpha, r.alpha, s),
    fn.transform(i))
}
  , aw = (e, t) => n => t(e(n))
  , Ci = (...e) => e.reduce(aw)
  , sl = new Set(["none", "hidden"]);
function lw(e, t) {
    return sl.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function uw(e, t) {
    return n => Q(e, t, n)
}
function Iu(e) {
    return typeof e == "number" ? uw : typeof e == "string" ? gu(e) ? Fs : xe.test(e) ? Rd : fw : Array.isArray(e) ? Qm : typeof e == "object" ? xe.test(e) ? Rd : cw : Fs
}
function Qm(e, t) {
    const n = [...e]
      , r = n.length
      , i = e.map( (s, o) => Iu(s)(s, t[o]));
    return s => {
        for (let o = 0; o < r; o++)
            n[o] = i[o](s);
        return n
    }
}
function cw(e, t) {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = Iu(e[i])(e[i], t[i]));
    return i => {
        for (const s in r)
            n[s] = r[s](i);
        return n
    }
}
function dw(e, t) {
    var n;
    const r = []
      , i = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let s = 0; s < t.values.length; s++) {
        const o = t.types[s]
          , a = e.indexes[o][i[o]]
          , l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
        r[s] = l,
        i[o]++
    }
    return r
}
const fw = (e, t) => {
    const n = Yt.createTransformer(t)
      , r = gi(e)
      , i = gi(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? sl.has(e) && !i.values.length || sl.has(t) && !r.values.length ? lw(e, t) : Ci(Qm(dw(r, i), i.values), n) : Fs(e, t)
}
;
function Zm(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Q(e, t, n) : Iu(e)(e, t)
}
const hw = 5;
function qm(e, t, n) {
    const r = Math.max(t - hw, 0);
    return Cm(n - e(r), t - r)
}
const ee = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , $o = .001;
function pw({duration: e=ee.duration, bounce: t=ee.bounce, velocity: n=ee.velocity, mass: r=ee.mass}) {
    let i, s, o = 1 - t;
    o = Nt(ee.minDamping, ee.maxDamping, o),
    e = Nt(ee.minDuration, ee.maxDuration, xt(e)),
    o < 1 ? (i = c => {
        const d = c * o
          , f = d * e
          , h = d - n
          , v = ol(c, o)
          , y = Math.exp(-f);
        return $o - h / v * y
    }
    ,
    s = c => {
        const f = c * o * e
          , h = f * n + n
          , v = Math.pow(o, 2) * Math.pow(c, 2) * e
          , y = Math.exp(-f)
          , x = ol(Math.pow(c, 2), o);
        return (-i(c) + $o > 0 ? -1 : 1) * ((h - v) * y) / x
    }
    ) : (i = c => {
        const d = Math.exp(-c * e)
          , f = (c - n) * e + 1;
        return -$o + d * f
    }
    ,
    s = c => {
        const d = Math.exp(-c * e)
          , f = (n - c) * (e * e);
        return d * f
    }
    );
    const a = 5 / e
      , l = gw(i, s, a);
    if (e = yt(e),
    isNaN(l))
        return {
            stiffness: ee.stiffness,
            damping: ee.damping,
            duration: e
        };
    {
        const c = Math.pow(l, 2) * r;
        return {
            stiffness: c,
            damping: o * 2 * Math.sqrt(r * c),
            duration: e
        }
    }
}
const mw = 12;
function gw(e, t, n) {
    let r = n;
    for (let i = 1; i < mw; i++)
        r = r - e(r) / t(r);
    return r
}
function ol(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const vw = ["duration", "bounce"]
  , yw = ["stiffness", "damping", "mass"];
function Dd(e, t) {
    return t.some(n => e[n] !== void 0)
}
function xw(e) {
    let t = {
        velocity: ee.velocity,
        stiffness: ee.stiffness,
        damping: ee.damping,
        mass: ee.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Dd(e, yw) && Dd(e, vw))
        if (e.visualDuration) {
            const n = e.visualDuration
              , r = 2 * Math.PI / (n * 1.2)
              , i = r * r
              , s = 2 * Nt(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
            t = {
                ...t,
                mass: ee.mass,
                stiffness: i,
                damping: s
            }
        } else {
            const n = pw(e);
            t = {
                ...t,
                ...n,
                mass: ee.mass
            },
            t.isResolvedFromDuration = !0
        }
    return t
}
function Jm(e=ee.visualDuration, t=ee.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {restSpeed: r, restDelta: i} = n;
    const s = n.keyframes[0]
      , o = n.keyframes[n.keyframes.length - 1]
      , a = {
        done: !1,
        value: s
    }
      , {stiffness: l, damping: c, mass: d, duration: f, velocity: h, isResolvedFromDuration: v} = xw({
        ...n,
        velocity: -xt(n.velocity || 0)
    })
      , y = h || 0
      , x = c / (2 * Math.sqrt(l * d))
      , S = o - s
      , m = xt(Math.sqrt(l / d))
      , p = Math.abs(S) < 5;
    r || (r = p ? ee.restSpeed.granular : ee.restSpeed.default),
    i || (i = p ? ee.restDelta.granular : ee.restDelta.default);
    let g;
    if (x < 1) {
        const j = ol(m, x);
        g = C => {
            const T = Math.exp(-x * m * C);
            return o - T * ((y + x * m * S) / j * Math.sin(j * C) + S * Math.cos(j * C))
        }
    } else if (x === 1)
        g = j => o - Math.exp(-m * j) * (S + (y + m * S) * j);
    else {
        const j = m * Math.sqrt(x * x - 1);
        g = C => {
            const T = Math.exp(-x * m * C)
              , N = Math.min(j * C, 300);
            return o - T * ((y + x * m * S) * Math.sinh(N) + j * S * Math.cosh(N)) / j
        }
    }
    const k = {
        calculatedDuration: v && f || null,
        next: j => {
            const C = g(j);
            if (v)
                a.done = j >= f;
            else {
                let T = 0;
                x < 1 && (T = j === 0 ? yt(y) : qm(g, j, C));
                const N = Math.abs(T) <= r
                  , A = Math.abs(o - C) <= i;
                a.done = N && A
            }
            return a.value = a.done ? o : C,
            a
        }
        ,
        toString: () => {
            const j = Math.min(vm(k), qa)
              , C = ym(T => k.next(j * T).value, j, 30);
            return j + "ms " + C
        }
    };
    return k
}
function Ad({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: s=500, modifyTarget: o, min: a, max: l, restDelta: c=.5, restSpeed: d}) {
    const f = e[0]
      , h = {
        done: !1,
        value: f
    }
      , v = N => a !== void 0 && N < a || l !== void 0 && N > l
      , y = N => a === void 0 ? l : l === void 0 || Math.abs(a - N) < Math.abs(l - N) ? a : l;
    let x = n * t;
    const S = f + x
      , m = o === void 0 ? S : o(S);
    m !== S && (x = m - f);
    const p = N => -x * Math.exp(-N / r)
      , g = N => m + p(N)
      , k = N => {
        const A = p(N)
          , R = g(N);
        h.done = Math.abs(A) <= c,
        h.value = h.done ? m : R
    }
    ;
    let j, C;
    const T = N => {
        v(h.value) && (j = N,
        C = Jm({
            keyframes: [h.value, y(h.value)],
            velocity: qm(g, N, h.value),
            damping: i,
            stiffness: s,
            restDelta: c,
            restSpeed: d
        }))
    }
    ;
    return T(0),
    {
        calculatedDuration: null,
        next: N => {
            let A = !1;
            return !C && j === void 0 && (A = !0,
            k(N),
            T(N)),
            j !== void 0 && N >= j ? C.next(N - j) : (!A && k(N),
            h)
        }
    }
}
const ww = Ni(.42, 0, 1, 1)
  , Sw = Ni(0, 0, .58, 1)
  , e0 = Ni(.42, 0, .58, 1)
  , kw = e => Array.isArray(e) && typeof e[0] != "number"
  , Ld = {
    linear: Ie,
    easeIn: ww,
    easeInOut: e0,
    easeOut: Sw,
    circIn: Ru,
    circInOut: Lm,
    circOut: Am,
    backIn: Mu,
    backInOut: Rm,
    backOut: Mm,
    anticipate: Dm
}
  , Vd = e => {
    if (Cu(e)) {
        Qa(e.length === 4);
        const [t,n,r,i] = e;
        return Ni(t, n, r, i)
    } else if (typeof e == "string")
        return Qa(Ld[e] !== void 0),
        Ld[e];
    return e
}
;
function jw(e, t, n) {
    const r = []
      , i = n || Zm
      , s = e.length - 1;
    for (let o = 0; o < s; o++) {
        let a = i(e[o], e[o + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[o] || Ie : t;
            a = Ci(l, a)
        }
        r.push(a)
    }
    return r
}
function Nw(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const s = e.length;
    if (Qa(s === t.length),
    s === 1)
        return () => t[0];
    if (s === 2 && t[0] === t[1])
        return () => t[1];
    const o = e[0] === e[1];
    e[0] > e[s - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const a = jw(t, r, i)
      , l = a.length
      , c = d => {
        if (o && d < e[0])
            return t[0];
        let f = 0;
        if (l > 1)
            for (; f < e.length - 2 && !(d < e[f + 1]); f++)
                ;
        const h = sr(e[f], e[f + 1], d);
        return a[f](h)
    }
    ;
    return n ? d => c(Nt(e[0], e[s - 1], d)) : c
}
function Cw(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = sr(0, t, r);
        e.push(Q(n, 1, i))
    }
}
function Pw(e) {
    const t = [0];
    return Cw(t, e.length - 1),
    t
}
function Tw(e, t) {
    return e.map(n => n * t)
}
function bw(e, t) {
    return e.map( () => t || e0).splice(0, e.length - 1)
}
function Os({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const i = kw(r) ? r.map(Vd) : Vd(r)
      , s = {
        done: !1,
        value: t[0]
    }
      , o = Tw(n && n.length === t.length ? n : Pw(t), e)
      , a = Nw(o, t, {
        ease: Array.isArray(i) ? i : bw(t, i)
    });
    return {
        calculatedDuration: e,
        next: l => (s.value = a(l),
        s.done = l >= e,
        s)
    }
}
const Ew = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: () => K.update(t, !0),
        stop: () => Xt(t),
        now: () => pe.isProcessing ? pe.timestamp : ct.now()
    }
}
  , Mw = {
    decay: Ad,
    inertia: Ad,
    tween: Os,
    keyframes: Os,
    spring: Jm
}
  , Rw = e => e / 100;
class _u extends Ym {
    constructor(t) {
        super(t),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = () => {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: l} = this.options;
            l && l()
        }
        ;
        const {name: n, motionValue: r, element: i, keyframes: s} = this.options
          , o = (i == null ? void 0 : i.KeyframeResolver) || Vu
          , a = (l, c) => this.onKeyframesResolved(l, c);
        this.resolver = new o(s,a,n,r,i),
        this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(),
        this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(t) {
        const {type: n="keyframes", repeat: r=0, repeatDelay: i=0, repeatType: s, velocity: o=0} = this.options
          , a = Nu(n) ? n : Mw[n] || Os;
        let l, c;
        a !== Os && typeof t[0] != "number" && (l = Ci(Rw, Zm(t[0], t[1])),
        t = [0, 100]);
        const d = a({
            ...this.options,
            keyframes: t
        });
        s === "mirror" && (c = a({
            ...this.options,
            keyframes: [...t].reverse(),
            velocity: -o
        })),
        d.calculatedDuration === null && (d.calculatedDuration = vm(d));
        const {calculatedDuration: f} = d
          , h = f + i
          , v = h * (r + 1) - i;
        return {
            generator: d,
            mirroredGenerator: c,
            mapPercentToKeyframes: l,
            calculatedDuration: f,
            resolvedDuration: h,
            totalDuration: v
        }
    }
    onPostResolved() {
        const {autoplay: t=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
    }
    tick(t, n=!1) {
        const {resolved: r} = this;
        if (!r) {
            const {keyframes: N} = this.options;
            return {
                done: !0,
                value: N[N.length - 1]
            }
        }
        const {finalKeyframe: i, generator: s, mirroredGenerator: o, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: c, totalDuration: d, resolvedDuration: f} = r;
        if (this.startTime === null)
            return s.next(0);
        const {delay: h, repeat: v, repeatType: y, repeatDelay: x, onUpdate: S} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - d / this.speed, this.startTime)),
        n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const m = this.currentTime - h * (this.speed >= 0 ? 1 : -1)
          , p = this.speed >= 0 ? m < 0 : m > d;
        this.currentTime = Math.max(m, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = d);
        let g = this.currentTime
          , k = s;
        if (v) {
            const N = Math.min(this.currentTime, d) / f;
            let A = Math.floor(N)
              , R = N % 1;
            !R && N >= 1 && (R = 1),
            R === 1 && A--,
            A = Math.min(A, v + 1),
            !!(A % 2) && (y === "reverse" ? (R = 1 - R,
            x && (R -= x / f)) : y === "mirror" && (k = o)),
            g = Nt(0, 1, R) * f
        }
        const j = p ? {
            done: !1,
            value: l[0]
        } : k.next(g);
        a && (j.value = a(j.value));
        let {done: C} = j;
        !p && c !== null && (C = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
        const T = this.holdTime === null && (this.state === "finished" || this.state === "running" && C);
        return T && i !== void 0 && (j.value = ho(l, this.options, i)),
        S && S(j.value),
        T && this.finish(),
        j
    }
    get duration() {
        const {resolved: t} = this;
        return t ? xt(t.calculatedDuration) : 0
    }
    get time() {
        return xt(this.currentTime)
    }
    set time(t) {
        t = yt(t),
        this.currentTime = t,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t,
        n && (this.time = xt(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: t=Ew, onPlay: n, startTime: r} = this.options;
        this.driver || (this.driver = t(s => this.tick(s))),
        n && n();
        const i = this.driver.now();
        this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = r ?? this.calcStartTime(),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: t} = this.options;
        t && t()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
}
const Dw = new Set(["opacity", "clipPath", "filter", "transform"]);
function Aw(e, t, n, {delay: r=0, duration: i=300, repeat: s=0, repeatType: o="loop", ease: a="easeInOut", times: l}={}) {
    const c = {
        [t]: n
    };
    l && (c.offset = l);
    const d = wm(a, i);
    return Array.isArray(d) && (c.easing = d),
    e.animate(c, {
        delay: r,
        duration: i,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: s + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    })
}
const Lw = uu( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , zs = 10
  , Vw = 2e4;
function Iw(e) {
    return Nu(e.type) || e.type === "spring" || !xm(e.ease)
}
function _w(e, t) {
    const n = new _u({
        ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let r = {
        done: !1,
        value: e[0]
    };
    const i = [];
    let s = 0;
    for (; !r.done && s < Vw; )
        r = n.sample(s),
        i.push(r.value),
        s += zs;
    return {
        times: void 0,
        keyframes: i,
        duration: s - zs,
        ease: "linear"
    }
}
const t0 = {
    anticipate: Dm,
    backInOut: Rm,
    circInOut: Lm
};
function Fw(e) {
    return e in t0
}
class Id extends Ym {
    constructor(t) {
        super(t);
        const {name: n, motionValue: r, element: i, keyframes: s} = this.options;
        this.resolver = new Xm(s, (o, a) => this.onKeyframesResolved(o, a),n,r,i),
        this.resolver.scheduleResolve()
    }
    initPlayback(t, n) {
        let {duration: r=300, times: i, ease: s, type: o, motionValue: a, name: l, startTime: c} = this.options;
        if (!a.owner || !a.owner.current)
            return !1;
        if (typeof s == "string" && _s() && Fw(s) && (s = t0[s]),
        Iw(this.options)) {
            const {onComplete: f, onUpdate: h, motionValue: v, element: y, ...x} = this.options
              , S = _w(t, x);
            t = S.keyframes,
            t.length === 1 && (t[1] = t[0]),
            r = S.duration,
            i = S.times,
            s = S.ease,
            o = "keyframes"
        }
        const d = Aw(a.owner.current, l, t, {
            ...this.options,
            duration: r,
            times: i,
            ease: s
        });
        return d.startTime = c ?? this.calcStartTime(),
        this.pendingTimeline ? (xd(d, this.pendingTimeline),
        this.pendingTimeline = void 0) : d.onfinish = () => {
            const {onComplete: f} = this.options;
            a.set(ho(t, this.options, n)),
            f && f(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: d,
            duration: r,
            times: i,
            type: o,
            ease: s,
            keyframes: t
        }
    }
    get duration() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {duration: n} = t;
        return xt(n)
    }
    get time() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {animation: n} = t;
        return xt(n.currentTime || 0)
    }
    set time(t) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: r} = n;
        r.currentTime = yt(t)
    }
    get speed() {
        const {resolved: t} = this;
        if (!t)
            return 1;
        const {animation: n} = t;
        return n.playbackRate
    }
    set speed(t) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: r} = n;
        r.playbackRate = t
    }
    get state() {
        const {resolved: t} = this;
        if (!t)
            return "idle";
        const {animation: n} = t;
        return n.playState
    }
    get startTime() {
        const {resolved: t} = this;
        if (!t)
            return null;
        const {animation: n} = t;
        return n.startTime
    }
    attachTimeline(t) {
        if (!this._resolved)
            this.pendingTimeline = t;
        else {
            const {resolved: n} = this;
            if (!n)
                return Ie;
            const {animation: r} = n;
            xd(r, t)
        }
        return Ie
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.playState === "finished" && this.updateFinishedPromise(),
        n.play()
    }
    pause() {
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n, keyframes: r, duration: i, type: s, ease: o, times: a} = t;
        if (n.playState === "idle" || n.playState === "finished")
            return;
        if (this.time) {
            const {motionValue: c, onUpdate: d, onComplete: f, element: h, ...v} = this.options
              , y = new _u({
                ...v,
                keyframes: r,
                duration: i,
                type: s,
                ease: o,
                times: a,
                isGenerator: !0
            })
              , x = yt(this.time);
            c.setWithVelocity(y.sample(x - zs).value, y.sample(x).value, zs)
        }
        const {onStop: l} = this.options;
        l && l(),
        this.cancel()
    }
    complete() {
        const {resolved: t} = this;
        t && t.animation.finish()
    }
    cancel() {
        const {resolved: t} = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {motionValue: n, name: r, repeatDelay: i, repeatType: s, damping: o, type: a} = t;
        if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
            return !1;
        const {onUpdate: l, transformTemplate: c} = n.owner.getProps();
        return Lw() && r && Dw.has(r) && !l && !c && !i && s !== "mirror" && o !== 0 && a !== "inertia"
    }
}
const Ow = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , zw = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , Bw = {
    type: "keyframes",
    duration: .8
}
  , Uw = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , Hw = (e, {keyframes: t}) => t.length > 2 ? Bw : Cn.has(e) ? e.startsWith("scale") ? zw(t[1]) : Ow : Uw;
function Ww({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: a, from: l, elapsed: c, ...d}) {
    return !!Object.keys(d).length
}
const Fu = (e, t, n, r={}, i, s) => o => {
    const a = ju(r, e) || {}
      , l = a.delay || r.delay || 0;
    let {elapsed: c=0} = r;
    c = c - yt(l);
    let d = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -c,
        onUpdate: h => {
            t.set(h),
            a.onUpdate && a.onUpdate(h)
        }
        ,
        onComplete: () => {
            o(),
            a.onComplete && a.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: s ? void 0 : i
    };
    Ww(a) || (d = {
        ...d,
        ...Hw(e, d)
    }),
    d.duration && (d.duration = yt(d.duration)),
    d.repeatDelay && (d.repeatDelay = yt(d.repeatDelay)),
    d.from !== void 0 && (d.keyframes[0] = d.from);
    let f = !1;
    if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (d.duration = 0,
    d.delay === 0 && (f = !0)),
    f && !s && t.get() !== void 0) {
        const h = ho(d.keyframes, a);
        if (h !== void 0)
            return K.update( () => {
                d.onUpdate(h),
                d.onComplete()
            }
            ),
            new c1([])
    }
    return !s && Id.supports(d) ? new Id(d) : new _u(d)
}
;
function $w({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function n0(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
    var s;
    let {transition: o=e.getDefaultTransition(), transitionEnd: a, ...l} = t;
    r && (o = r);
    const c = []
      , d = i && e.animationState && e.animationState.getState()[i];
    for (const f in l) {
        const h = e.getValue(f, (s = e.latestValues[f]) !== null && s !== void 0 ? s : null)
          , v = l[f];
        if (v === void 0 || d && $w(d, f))
            continue;
        const y = {
            delay: n,
            ...ju(o || {}, f)
        };
        let x = !1;
        if (window.MotionHandoffAnimation) {
            const m = Pm(e);
            if (m) {
                const p = window.MotionHandoffAnimation(m, f, K);
                p !== null && (y.startTime = p,
                x = !0)
            }
        }
        el(e, f),
        h.start(Fu(f, h, v, e.shouldReduceMotion && Nm.has(f) ? {
            type: !1
        } : y, e, x));
        const S = h.animation;
        S && c.push(S)
    }
    return a && Promise.all(c).then( () => {
        K.update( () => {
            a && N1(e, a)
        }
        )
    }
    ),
    c
}
function al(e, t, n={}) {
    var r;
    const i = fo(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
    let {transition: s=e.getDefaultTransition() || {}} = i || {};
    n.transitionOverride && (s = n.transitionOverride);
    const o = i ? () => Promise.all(n0(e, i, n)) : () => Promise.resolve()
      , a = e.variantChildren && e.variantChildren.size ? (c=0) => {
        const {delayChildren: d=0, staggerChildren: f, staggerDirection: h} = s;
        return Kw(e, t, d + c, f, h, n)
    }
    : () => Promise.resolve()
      , {when: l} = s;
    if (l) {
        const [c,d] = l === "beforeChildren" ? [o, a] : [a, o];
        return c().then( () => d())
    } else
        return Promise.all([o(), a(n.delay)])
}
function Kw(e, t, n=0, r=0, i=1, s) {
    const o = []
      , a = (e.variantChildren.size - 1) * r
      , l = i === 1 ? (c=0) => c * r : (c=0) => a - c * r;
    return Array.from(e.variantChildren).sort(Gw).forEach( (c, d) => {
        c.notify("AnimationStart", t),
        o.push(al(c, t, {
            ...s,
            delay: n + l(d)
        }).then( () => c.notify("AnimationComplete", t)))
    }
    ),
    Promise.all(o)
}
function Gw(e, t) {
    return e.sortNodePosition(t)
}
function Xw(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(s => al(e, s, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = al(e, t, n);
    else {
        const i = typeof t == "function" ? fo(e, t, n.custom) : t;
        r = Promise.all(n0(e, i, n))
    }
    return r.then( () => {
        e.notify("AnimationComplete", t)
    }
    )
}
const Yw = du.length;
function r0(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const n = e.parent ? r0(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial),
        n
    }
    const t = {};
    for (let n = 0; n < Yw; n++) {
        const r = du[n]
          , i = e.props[r];
        (hi(i) || i === !1) && (t[r] = i)
    }
    return t
}
const Qw = [...cu].reverse()
  , Zw = cu.length;
function qw(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => Xw(e, n, r)))
}
function Jw(e) {
    let t = qw(e)
      , n = _d()
      , r = !0;
    const i = l => (c, d) => {
        var f;
        const h = fo(e, d, l === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
        if (h) {
            const {transition: v, transitionEnd: y, ...x} = h;
            c = {
                ...c,
                ...x,
                ...y
            }
        }
        return c
    }
    ;
    function s(l) {
        t = l(e)
    }
    function o(l) {
        const {props: c} = e
          , d = r0(e.parent) || {}
          , f = []
          , h = new Set;
        let v = {}
          , y = 1 / 0;
        for (let S = 0; S < Zw; S++) {
            const m = Qw[S]
              , p = n[m]
              , g = c[m] !== void 0 ? c[m] : d[m]
              , k = hi(g)
              , j = m === l ? p.isActive : null;
            j === !1 && (y = S);
            let C = g === d[m] && g !== c[m] && k;
            if (C && r && e.manuallyAnimateOnMount && (C = !1),
            p.protectedKeys = {
                ...v
            },
            !p.isActive && j === null || !g && !p.prevProp || uo(g) || typeof g == "boolean")
                continue;
            const T = e2(p.prevProp, g);
            let N = T || m === l && p.isActive && !C && k || S > y && k
              , A = !1;
            const R = Array.isArray(g) ? g : [g];
            let F = R.reduce(i(m), {});
            j === !1 && (F = {});
            const {prevResolvedValues: ce={}} = p
              , De = {
                ...ce,
                ...F
            }
              , Pt = J => {
                N = !0,
                h.has(J) && (A = !0,
                h.delete(J)),
                p.needsAnimating[J] = !0;
                const M = e.getValue(J);
                M && (M.liveStyle = !1)
            }
            ;
            for (const J in De) {
                const M = F[J]
                  , I = ce[J];
                if (v.hasOwnProperty(J))
                    continue;
                let _ = !1;
                Za(M) && Za(I) ? _ = !gm(M, I) : _ = M !== I,
                _ ? M != null ? Pt(J) : h.add(J) : M !== void 0 && h.has(J) ? Pt(J) : p.protectedKeys[J] = !0
            }
            p.prevProp = g,
            p.prevResolvedValues = F,
            p.isActive && (v = {
                ...v,
                ...F
            }),
            r && e.blockInitialAnimation && (N = !1),
            N && (!(C && T) || A) && f.push(...R.map(J => ({
                animation: J,
                options: {
                    type: m
                }
            })))
        }
        if (h.size) {
            const S = {};
            h.forEach(m => {
                const p = e.getBaseTarget(m)
                  , g = e.getValue(m);
                g && (g.liveStyle = !0),
                S[m] = p ?? null
            }
            ),
            f.push({
                animation: S
            })
        }
        let x = !!f.length;
        return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (x = !1),
        r = !1,
        x ? t(f) : Promise.resolve()
    }
    function a(l, c) {
        var d;
        if (n[l].isActive === c)
            return Promise.resolve();
        (d = e.variantChildren) === null || d === void 0 || d.forEach(h => {
            var v;
            return (v = h.animationState) === null || v === void 0 ? void 0 : v.setActive(l, c)
        }
        ),
        n[l].isActive = c;
        const f = o(l);
        for (const h in n)
            n[h].protectedKeys = {};
        return f
    }
    return {
        animateChanges: o,
        setActive: a,
        setAnimateFunction: s,
        getState: () => n,
        reset: () => {
            n = _d(),
            r = !0
        }
    }
}
function e2(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !gm(t, e) : !1
}
function rn(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function _d() {
    return {
        animate: rn(!0),
        whileInView: rn(),
        whileHover: rn(),
        whileTap: rn(),
        whileDrag: rn(),
        whileFocus: rn(),
        exit: rn()
    }
}
class Jt {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
class t2 extends Jt {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = Jw(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        uo(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
        (t = this.unmountControls) === null || t === void 0 || t.call(this)
    }
}
let n2 = 0;
class r2 extends Jt {
    constructor() {
        super(...arguments),
        this.id = n2++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then( () => n(this.id))
    }
    mount() {
        const {register: t} = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const i2 = {
    animation: {
        Feature: t2
    },
    exit: {
        Feature: r2
    }
};
function vi(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
function Pi(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const s2 = e => t => Pu(t) && e(t, Pi(t));
function Wr(e, t, n, r) {
    return vi(e, t, s2(n), r)
}
const Fd = (e, t) => Math.abs(e - t);
function o2(e, t) {
    const n = Fd(e.x, t.x)
      , r = Fd(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class i0 {
    constructor(t, n, {transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const f = Go(this.lastMoveEventInfo, this.history)
              , h = this.startEvent !== null
              , v = o2(f.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!h && !v)
                return;
            const {point: y} = f
              , {timestamp: x} = pe;
            this.history.push({
                ...y,
                timestamp: x
            });
            const {onStart: S, onMove: m} = this.handlers;
            h || (S && S(this.lastMoveEvent, f),
            this.startEvent = this.lastMoveEvent),
            m && m(this.lastMoveEvent, f)
        }
        ,
        this.handlePointerMove = (f, h) => {
            this.lastMoveEvent = f,
            this.lastMoveEventInfo = Ko(h, this.transformPagePoint),
            K.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (f, h) => {
            this.end();
            const {onEnd: v, onSessionEnd: y, resumeAnimation: x} = this.handlers;
            if (this.dragSnapToOrigin && x && x(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const S = Go(f.type === "pointercancel" ? this.lastMoveEventInfo : Ko(h, this.transformPagePoint), this.history);
            this.startEvent && v && v(f, S),
            y && y(f, S)
        }
        ,
        !Pu(t))
            return;
        this.dragSnapToOrigin = s,
        this.handlers = n,
        this.transformPagePoint = r,
        this.contextWindow = i || window;
        const o = Pi(t)
          , a = Ko(o, this.transformPagePoint)
          , {point: l} = a
          , {timestamp: c} = pe;
        this.history = [{
            ...l,
            timestamp: c
        }];
        const {onSessionStart: d} = n;
        d && d(t, Go(a, this.history)),
        this.removeListeners = Ci(Wr(this.contextWindow, "pointermove", this.handlePointerMove), Wr(this.contextWindow, "pointerup", this.handlePointerUp), Wr(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Xt(this.updatePoint)
    }
}
function Ko(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function Od(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Go({point: e}, t) {
    return {
        point: e,
        delta: Od(e, s0(t)),
        offset: Od(e, a2(t)),
        velocity: l2(t, .1)
    }
}
function a2(e) {
    return e[0]
}
function s0(e) {
    return e[e.length - 1]
}
function l2(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const i = s0(e);
    for (; n >= 0 && (r = e[n],
    !(i.timestamp - r.timestamp > yt(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const s = xt(i.timestamp - r.timestamp);
    if (s === 0)
        return {
            x: 0,
            y: 0
        };
    const o = {
        x: (i.x - r.x) / s,
        y: (i.y - r.y) / s
    };
    return o.x === 1 / 0 && (o.x = 0),
    o.y === 1 / 0 && (o.y = 0),
    o
}
const o0 = 1e-4
  , u2 = 1 - o0
  , c2 = 1 + o0
  , a0 = .01
  , d2 = 0 - a0
  , f2 = 0 + a0;
function Fe(e) {
    return e.max - e.min
}
function h2(e, t, n) {
    return Math.abs(e - t) <= n
}
function zd(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = Q(t.min, t.max, e.origin),
    e.scale = Fe(n) / Fe(t),
    e.translate = Q(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= u2 && e.scale <= c2 || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= d2 && e.translate <= f2 || isNaN(e.translate)) && (e.translate = 0)
}
function $r(e, t, n, r) {
    zd(e.x, t.x, n.x, r ? r.originX : void 0),
    zd(e.y, t.y, n.y, r ? r.originY : void 0)
}
function Bd(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + Fe(t)
}
function p2(e, t, n) {
    Bd(e.x, t.x, n.x),
    Bd(e.y, t.y, n.y)
}
function Ud(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + Fe(t)
}
function Kr(e, t, n) {
    Ud(e.x, t.x, n.x),
    Ud(e.y, t.y, n.y)
}
function m2(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? Q(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Q(n, e, r.max) : Math.min(e, n)),
    e
}
function Hd(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function g2(e, {top: t, left: n, bottom: r, right: i}) {
    return {
        x: Hd(e.x, n, i),
        y: Hd(e.y, t, r)
    }
}
function Wd(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function v2(e, t) {
    return {
        x: Wd(e.x, t.x),
        y: Wd(e.y, t.y)
    }
}
function y2(e, t) {
    let n = .5;
    const r = Fe(e)
      , i = Fe(t);
    return i > r ? n = sr(t.min, t.max - r, e.min) : r > i && (n = sr(e.min, e.max - i, t.min)),
    Nt(0, 1, n)
}
function x2(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const ll = .35;
function w2(e=ll) {
    return e === !1 ? e = 0 : e === !0 && (e = ll),
    {
        x: $d(e, "left", "right"),
        y: $d(e, "top", "bottom")
    }
}
function $d(e, t, n) {
    return {
        min: Kd(e, t),
        max: Kd(e, n)
    }
}
function Kd(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const Gd = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Hn = () => ({
    x: Gd(),
    y: Gd()
})
  , Xd = () => ({
    min: 0,
    max: 0
})
  , ne = () => ({
    x: Xd(),
    y: Xd()
});
function Ue(e) {
    return [e("x"), e("y")]
}
function l0({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function S2({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function k2(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function Xo(e) {
    return e === void 0 || e === 1
}
function ul({scale: e, scaleX: t, scaleY: n}) {
    return !Xo(e) || !Xo(t) || !Xo(n)
}
function an(e) {
    return ul(e) || u0(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function u0(e) {
    return Yd(e.x) || Yd(e.y)
}
function Yd(e) {
    return e && e !== "0%"
}
function Bs(e, t, n) {
    const r = e - n
      , i = t * r;
    return n + i
}
function Qd(e, t, n, r, i) {
    return i !== void 0 && (e = Bs(e, i, r)),
    Bs(e, n, r) + t
}
function cl(e, t=0, n=1, r, i) {
    e.min = Qd(e.min, t, n, r, i),
    e.max = Qd(e.max, t, n, r, i)
}
function c0(e, {x: t, y: n}) {
    cl(e.x, t.translate, t.scale, t.originPoint),
    cl(e.y, n.translate, n.scale, n.originPoint)
}
const Zd = .999999999999
  , qd = 1.0000000000001;
function j2(e, t, n, r=!1) {
    const i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let s, o;
    for (let a = 0; a < i; a++) {
        s = n[a],
        o = s.projectionDelta;
        const {visualElement: l} = s.options;
        l && l.props.style && l.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && $n(e, {
            x: -s.scroll.offset.x,
            y: -s.scroll.offset.y
        }),
        o && (t.x *= o.x.scale,
        t.y *= o.y.scale,
        c0(e, o)),
        r && an(s.latestValues) && $n(e, s.latestValues))
    }
    t.x < qd && t.x > Zd && (t.x = 1),
    t.y < qd && t.y > Zd && (t.y = 1)
}
function Wn(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function Jd(e, t, n, r, i=.5) {
    const s = Q(e.min, e.max, i);
    cl(e, t, n, s, r)
}
function $n(e, t) {
    Jd(e.x, t.x, t.scaleX, t.scale, t.originX),
    Jd(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function d0(e, t) {
    return l0(k2(e.getBoundingClientRect(), t))
}
function N2(e, t, n) {
    const r = d0(e, n)
      , {scroll: i} = t;
    return i && (Wn(r.x, i.offset.x),
    Wn(r.y, i.offset.y)),
    r
}
const f0 = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , C2 = new WeakMap;
class P2 {
    constructor(t) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = ne(),
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1}={}) {
        const {presenceContext: r} = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const i = d => {
            const {dragSnapToOrigin: f} = this.getProps();
            f ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(Pi(d).point)
        }
          , s = (d, f) => {
            const {drag: h, dragPropagation: v, onDragStart: y} = this.getProps();
            if (h && !v && (this.openDragLock && this.openDragLock(),
            this.openDragLock = x1(h),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Ue(S => {
                let m = this.getAxisMotionValue(S).get() || 0;
                if (ut.test(m)) {
                    const {projection: p} = this.visualElement;
                    if (p && p.layout) {
                        const g = p.layout.layoutBox[S];
                        g && (m = Fe(g) * (parseFloat(m) / 100))
                    }
                }
                this.originPoint[S] = m
            }
            ),
            y && K.postRender( () => y(d, f)),
            el(this.visualElement, "transform");
            const {animationState: x} = this.visualElement;
            x && x.setActive("whileDrag", !0)
        }
          , o = (d, f) => {
            const {dragPropagation: h, dragDirectionLock: v, onDirectionLock: y, onDrag: x} = this.getProps();
            if (!h && !this.openDragLock)
                return;
            const {offset: S} = f;
            if (v && this.currentDirection === null) {
                this.currentDirection = T2(S),
                this.currentDirection !== null && y && y(this.currentDirection);
                return
            }
            this.updateAxis("x", f.point, S),
            this.updateAxis("y", f.point, S),
            this.visualElement.render(),
            x && x(d, f)
        }
          , a = (d, f) => this.stop(d, f)
          , l = () => Ue(d => {
            var f;
            return this.getAnimationState(d) === "paused" && ((f = this.getAxisMotionValue(d).animation) === null || f === void 0 ? void 0 : f.play())
        }
        )
          , {dragSnapToOrigin: c} = this.getProps();
        this.panSession = new i0(t,{
            onSessionStart: i,
            onStart: s,
            onMove: o,
            onSessionEnd: a,
            resumeAnimation: l
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: c,
            contextWindow: f0(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(),
        !r)
            return;
        const {velocity: i} = n;
        this.startAnimation(i);
        const {onDragEnd: s} = this.getProps();
        s && K.postRender( () => s(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {drag: i} = this.getProps();
        if (!r || !Xi(t, i, this.currentDirection))
            return;
        const s = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (o = m2(o, this.constraints[t], this.elastic[t])),
        s.set(o)
    }
    resolveConstraints() {
        var t;
        const {dragConstraints: n, dragElastic: r} = this.getProps()
          , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout
          , s = this.constraints;
        n && Bn(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = g2(i.layoutBox, n) : this.constraints = !1,
        this.elastic = w2(r),
        s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && Ue(o => {
            this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = x2(i.layoutBox[o], this.constraints[o]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !Bn(t))
            return !1;
        const r = t.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const s = N2(r, i.root, this.visualElement.getTransformPagePoint());
        let o = v2(i.layout.layoutBox, s);
        if (n) {
            const a = n(S2(o));
            this.hasMutatedConstraints = !!a,
            a && (o = l0(a))
        }
        return o
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: a} = this.getProps()
          , l = this.constraints || {}
          , c = Ue(d => {
            if (!Xi(d, n, this.currentDirection))
                return;
            let f = l && l[d] || {};
            o && (f = {
                min: 0,
                max: 0
            });
            const h = i ? 200 : 1e6
              , v = i ? 40 : 1e7
              , y = {
                type: "inertia",
                velocity: r ? t[d] : 0,
                bounceStiffness: h,
                bounceDamping: v,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...f
            };
            return this.startAxisValueAnimation(d, y)
        }
        );
        return Promise.all(c).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return el(this.visualElement, t),
        r.start(Fu(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        Ue(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        Ue(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
          , r = this.visualElement.getProps()
          , i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Ue(n => {
            const {drag: r} = this.getProps();
            if (!Xi(n, r, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , s = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: o, max: a} = i.layout.layoutBox[n];
                s.set(t[n] - Q(o, a, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!Bn(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        Ue(o => {
            const a = this.getAxisMotionValue(o);
            if (a && this.constraints !== !1) {
                const l = a.get();
                i[o] = y2({
                    min: l,
                    max: l
                }, this.constraints[o])
            }
        }
        );
        const {transformTemplate: s} = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        Ue(o => {
            if (!Xi(o, t, null))
                return;
            const a = this.getAxisMotionValue(o)
              , {min: l, max: c} = this.constraints[o];
            a.set(Q(l, c, i[o]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        C2.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = Wr(t, "pointerdown", l => {
            const {drag: c, dragListener: d=!0} = this.getProps();
            c && d && this.start(l)
        }
        )
          , r = () => {
            const {dragConstraints: l} = this.getProps();
            Bn(l) && l.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: i} = this.visualElement
          , s = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(),
        i.updateLayout()),
        K.read(r);
        const o = vi(window, "resize", () => this.scalePositionWithinConstraints())
          , a = i.addEventListener("didUpdate", ({delta: l, hasLayoutChanged: c}) => {
            this.isDragging && c && (Ue(d => {
                const f = this.getAxisMotionValue(d);
                f && (this.originPoint[d] += l[d].translate,
                f.set(f.get() + l[d].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            o(),
            n(),
            s(),
            a && a()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: s=!1, dragElastic: o=ll, dragMomentum: a=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: o,
            dragMomentum: a
        }
    }
}
function Xi(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function T2(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class b2 extends Jt {
    constructor(t) {
        super(t),
        this.removeGroupControls = Ie,
        this.removeListeners = Ie,
        this.controls = new P2(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Ie
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const ef = e => (t, n) => {
    e && K.postRender( () => e(t, n))
}
;
class E2 extends Jt {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Ie
    }
    onPointerDown(t) {
        this.session = new i0(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: f0(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: ef(t),
            onStart: ef(n),
            onMove: r,
            onEnd: (s, o) => {
                delete this.session,
                i && K.postRender( () => i(s, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Wr(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const ls = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function tf(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const Pr = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (V.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = tf(e, t.target.x)
          , r = tf(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , M2 = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e
          , i = Yt.parse(e);
        if (i.length > 5)
            return r;
        const s = Yt.createTransformer(e)
          , o = typeof i[0] != "number" ? 1 : 0
          , a = n.x.scale * t.x
          , l = n.y.scale * t.y;
        i[0 + o] /= a,
        i[1 + o] /= l;
        const c = Q(a, l, .5);
        return typeof i[2 + o] == "number" && (i[2 + o] /= c),
        typeof i[3 + o] == "number" && (i[3 + o] /= c),
        s(i)
    }
};
class R2 extends w.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props
          , {projection: s} = t;
        qx(D2),
        s && (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        s.setOptions({
            ...s.options,
            onExitComplete: () => this.safeToRemove()
        })),
        ls.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: i, isPresent: s} = this.props
          , o = r.projection;
        return o && (o.isPresent = s,
        i || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(),
        t.isPresent !== s && (s ? o.promote() : o.relegate() || K.postRender( () => {
            const a = o.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        hu.postRender( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: i} = t;
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function h0(e) {
    const [t,n] = Qp()
      , r = w.useContext(su);
    return u.jsx(R2, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: w.useContext(rm),
        isPresent: t,
        safeToRemove: n
    })
}
const D2 = {
    borderRadius: {
        ...Pr,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Pr,
    borderTopRightRadius: Pr,
    borderBottomLeftRadius: Pr,
    borderBottomRightRadius: Pr,
    boxShadow: M2
};
function A2(e, t, n) {
    const r = Se(e) ? e : mi(e);
    return r.start(Fu("", r, t, n)),
    r.animation
}
function L2(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
const V2 = (e, t) => e.depth - t.depth;
class I2 {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        Tu(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        bu(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(V2),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function _2(e, t) {
    const n = ct.now()
      , r = ({timestamp: i}) => {
        const s = i - n;
        s >= t && (Xt(r),
        e(s - t))
    }
    ;
    return K.read(r, !0),
    () => Xt(r)
}
const p0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , F2 = p0.length
  , nf = e => typeof e == "string" ? parseFloat(e) : e
  , rf = e => typeof e == "number" || V.test(e);
function O2(e, t, n, r, i, s) {
    i ? (e.opacity = Q(0, n.opacity !== void 0 ? n.opacity : 1, z2(r)),
    e.opacityExit = Q(t.opacity !== void 0 ? t.opacity : 1, 0, B2(r))) : s && (e.opacity = Q(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let o = 0; o < F2; o++) {
        const a = `border${p0[o]}Radius`;
        let l = sf(t, a)
          , c = sf(n, a);
        if (l === void 0 && c === void 0)
            continue;
        l || (l = 0),
        c || (c = 0),
        l === 0 || c === 0 || rf(l) === rf(c) ? (e[a] = Math.max(Q(nf(l), nf(c), r), 0),
        (ut.test(c) || ut.test(l)) && (e[a] += "%")) : e[a] = c
    }
    (t.rotate || n.rotate) && (e.rotate = Q(t.rotate || 0, n.rotate || 0, r))
}
function sf(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const z2 = m0(0, .5, Am)
  , B2 = m0(.5, .95, Ie);
function m0(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(sr(e, t, r))
}
function of(e, t) {
    e.min = t.min,
    e.max = t.max
}
function Be(e, t) {
    of(e.x, t.x),
    of(e.y, t.y)
}
function af(e, t) {
    e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
function lf(e, t, n, r, i) {
    return e -= t,
    e = Bs(e, 1 / n, r),
    i !== void 0 && (e = Bs(e, 1 / i, r)),
    e
}
function U2(e, t=0, n=1, r=.5, i, s=e, o=e) {
    if (ut.test(t) && (t = parseFloat(t),
    t = Q(o.min, o.max, t / 100) - o.min),
    typeof t != "number")
        return;
    let a = Q(s.min, s.max, r);
    e === s && (a -= t),
    e.min = lf(e.min, t, n, a, i),
    e.max = lf(e.max, t, n, a, i)
}
function uf(e, t, [n,r,i], s, o) {
    U2(e, t[n], t[r], t[i], t.scale, s, o)
}
const H2 = ["x", "scaleX", "originX"]
  , W2 = ["y", "scaleY", "originY"];
function cf(e, t, n, r) {
    uf(e.x, t, H2, n ? n.x : void 0, r ? r.x : void 0),
    uf(e.y, t, W2, n ? n.y : void 0, r ? r.y : void 0)
}
function df(e) {
    return e.translate === 0 && e.scale === 1
}
function g0(e) {
    return df(e.x) && df(e.y)
}
function ff(e, t) {
    return e.min === t.min && e.max === t.max
}
function $2(e, t) {
    return ff(e.x, t.x) && ff(e.y, t.y)
}
function hf(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function v0(e, t) {
    return hf(e.x, t.x) && hf(e.y, t.y)
}
function pf(e) {
    return Fe(e.x) / Fe(e.y)
}
function mf(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class K2 {
    constructor() {
        this.members = []
    }
    add(t) {
        Tu(this.members, t),
        t.scheduleRender()
    }
    remove(t) {
        if (bu(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0)
            return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const s = this.members[i];
            if (s.isPresent !== !1) {
                r = s;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender(),
            t.resumeFrom = r,
            n && (t.resumeFrom.preserveOpacity = !0),
            r.snapshot && (t.snapshot = r.snapshot,
            t.snapshot.latestValues = r.animationValues || r.latestValues),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: i} = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function G2(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x
      , s = e.y.translate / t.y
      , o = (n == null ? void 0 : n.z) || 0;
    if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {transformPerspective: c, rotate: d, rotateX: f, rotateY: h, skewX: v, skewY: y} = n;
        c && (r = `perspective(${c}px) ${r}`),
        d && (r += `rotate(${d}deg) `),
        f && (r += `rotateX(${f}deg) `),
        h && (r += `rotateY(${h}deg) `),
        v && (r += `skewX(${v}deg) `),
        y && (r += `skewY(${y}deg) `)
    }
    const a = e.x.scale * t.x
      , l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`),
    r || "none"
}
const ln = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
}
  , Ar = typeof window < "u" && window.MotionDebug !== void 0
  , Yo = ["", "X", "Y", "Z"]
  , X2 = {
    visibility: "hidden"
}
  , gf = 1e3;
let Y2 = 0;
function Qo(e, t, n, r) {
    const {latestValues: i} = t;
    i[e] && (n[e] = i[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function y0(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: t} = e.options;
    if (!t)
        return;
    const n = Pm(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: i, layoutId: s} = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", K, !(i || s))
    }
    const {parent: r} = e;
    r && !r.hasCheckedOptimisedAppear && y0(r)
}
function x0({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(o={}, a=t == null ? void 0 : t()) {
            this.id = Y2++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                Ar && (ln.totalNodes = ln.resolvedTargetDeltas = ln.recalculatedProjection = 0),
                this.nodes.forEach(q2),
                this.nodes.forEach(rS),
                this.nodes.forEach(iS),
                this.nodes.forEach(J2),
                Ar && window.MotionDebug.record(ln)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = o,
            this.root = a ? a.root || a : this,
            this.path = a ? [...a.path, a] : [],
            this.parent = a,
            this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new I2)
        }
        addEventListener(o, a) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Eu),
            this.eventHandlers.get(o).add(a)
        }
        notifyListeners(o, ...a) {
            const l = this.eventHandlers.get(o);
            l && l.notify(...a)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o, a=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = L2(o),
            this.instance = o;
            const {layoutId: l, layout: c, visualElement: d} = this.options;
            if (d && !d.current && d.mount(o),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            a && (c || l) && (this.isLayoutDirty = !0),
            e) {
                let f;
                const h = () => this.root.updateBlockedByResize = !1;
                e(o, () => {
                    this.root.updateBlockedByResize = !0,
                    f && f(),
                    f = _2(h, 250),
                    ls.hasAnimatedSinceResize && (ls.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(yf))
                }
                )
            }
            l && this.root.registerSharedNode(l, this),
            this.options.animate !== !1 && d && (l || c) && this.addEventListener("didUpdate", ({delta: f, hasLayoutChanged: h, hasRelativeTargetChanged: v, layout: y}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const x = this.options.transition || d.getDefaultTransition() || uS
                  , {onLayoutAnimationStart: S, onLayoutAnimationComplete: m} = d.getProps()
                  , p = !this.targetLayout || !v0(this.targetLayout, y) || v
                  , g = !h && v;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || g || h && (p || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(f, g);
                    const k = {
                        ...ju(x, "layout"),
                        onPlay: S,
                        onComplete: m
                    };
                    (d.shouldReduceMotion || this.options.layoutRoot) && (k.delay = 0,
                    k.type = !1),
                    this.startAnimation(k)
                } else
                    h || yf(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = y
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            Xt(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(sS),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: o} = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && y0(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let d = 0; d < this.path.length; d++) {
                const f = this.path[d];
                f.shouldResetTransform = !0,
                f.updateScroll("snapshot"),
                f.options.layoutRoot && f.willUpdate(!1)
            }
            const {layoutId: a, layout: l} = this.options;
            if (a === void 0 && !l)
                return;
            const c = this.getTransformTemplate();
            this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(vf);
                return
            }
            this.isUpdating || this.nodes.forEach(tS),
            this.isUpdating = !1,
            this.nodes.forEach(nS),
            this.nodes.forEach(Q2),
            this.nodes.forEach(Z2),
            this.clearAllSnapshots();
            const a = ct.now();
            pe.delta = Nt(0, 1e3 / 60, a - pe.timestamp),
            pe.timestamp = a,
            pe.isProcessing = !0,
            zo.update.process(pe),
            zo.preRender.process(pe),
            zo.render.process(pe),
            pe.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            hu.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(eS),
            this.sharedNodes.forEach(oS)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            K.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            K.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = ne(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: a} = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o="measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1),
            a) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: o,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!i)
                return;
            const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , a = this.projectionDelta && !g0(this.projectionDelta)
              , l = this.getTransformTemplate()
              , c = l ? l(this.latestValues, "") : void 0
              , d = c !== this.prevTransformTemplateValue;
            o && (a || an(this.latestValues) || d) && (i(this.instance, c),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(o=!0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return o && (l = this.removeTransform(l)),
            cS(l),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var o;
            const {visualElement: a} = this.options;
            if (!a)
                return ne();
            const l = a.measureViewportBox();
            if (!(((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) || this.path.some(dS))) {
                const {scroll: d} = this.root;
                d && (Wn(l.x, d.offset.x),
                Wn(l.y, d.offset.y))
            }
            return l
        }
        removeElementScroll(o) {
            var a;
            const l = ne();
            if (Be(l, o),
            !((a = this.scroll) === null || a === void 0) && a.wasRoot)
                return l;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c]
                  , {scroll: f, options: h} = d;
                d !== this.root && f && h.layoutScroll && (f.wasRoot && Be(l, o),
                Wn(l.x, f.offset.x),
                Wn(l.y, f.offset.y))
            }
            return l
        }
        applyTransform(o, a=!1) {
            const l = ne();
            Be(l, o);
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                !a && d.options.layoutScroll && d.scroll && d !== d.root && $n(l, {
                    x: -d.scroll.offset.x,
                    y: -d.scroll.offset.y
                }),
                an(d.latestValues) && $n(l, d.latestValues)
            }
            return an(this.latestValues) && $n(l, this.latestValues),
            l
        }
        removeTransform(o) {
            const a = ne();
            Be(a, o);
            for (let l = 0; l < this.path.length; l++) {
                const c = this.path[l];
                if (!c.instance || !an(c.latestValues))
                    continue;
                ul(c.latestValues) && c.updateSnapshot();
                const d = ne()
                  , f = c.measurePageBox();
                Be(d, f),
                cf(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, d)
            }
            return an(this.latestValues) && cf(a, this.latestValues),
            a
        }
        setTargetDelta(o) {
            this.targetDelta = o,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== pe.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o=!1) {
            var a;
            const l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            const c = !!this.resumingFrom || this !== l;
            if (!(o || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: f, layoutId: h} = this.options;
            if (!(!this.layout || !(f || h))) {
                if (this.resolvedRelativeTargetAt = pe.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const v = this.getClosestProjectingParent();
                    v && v.layout && this.animationProgress !== 1 ? (this.relativeParent = v,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = ne(),
                    this.relativeTargetOrigin = ne(),
                    Kr(this.relativeTargetOrigin, this.layout.layoutBox, v.layout.layoutBox),
                    Be(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = ne(),
                    this.targetWithTransforms = ne()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    p2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Be(this.target, this.layout.layoutBox),
                    c0(this.target, this.targetDelta)) : Be(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const v = this.getClosestProjectingParent();
                        v && !!v.resumingFrom == !!this.resumingFrom && !v.options.layoutScroll && v.target && this.animationProgress !== 1 ? (this.relativeParent = v,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = ne(),
                        this.relativeTargetOrigin = ne(),
                        Kr(this.relativeTargetOrigin, this.target, v.target),
                        Be(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    Ar && ln.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || ul(this.parent.latestValues) || u0(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var o;
            const a = this.getLead()
              , l = !!this.resumingFrom || this !== a;
            let c = !0;
            if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (c = !1),
            l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1),
            this.resolvedRelativeTargetAt === pe.timestamp && (c = !1),
            c)
                return;
            const {layout: d, layoutId: f} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(d || f))
                return;
            Be(this.layoutCorrected, this.layout.layoutBox);
            const h = this.treeScale.x
              , v = this.treeScale.y;
            j2(this.layoutCorrected, this.treeScale, this.path, l),
            a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox,
            a.targetWithTransforms = ne());
            const {target: y} = a;
            if (!y) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (af(this.prevProjectionDelta.x, this.projectionDelta.x),
            af(this.prevProjectionDelta.y, this.projectionDelta.y)),
            $r(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
            (this.treeScale.x !== h || this.treeScale.y !== v || !mf(this.projectionDelta.x, this.prevProjectionDelta.x) || !mf(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", y)),
            Ar && ln.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o=!0) {
            var a;
            if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(),
            o) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Hn(),
            this.projectionDelta = Hn(),
            this.projectionDeltaWithTransform = Hn()
        }
        setAnimationOrigin(o, a=!1) {
            const l = this.snapshot
              , c = l ? l.latestValues : {}
              , d = {
                ...this.latestValues
            }
              , f = Hn();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !a;
            const h = ne()
              , v = l ? l.source : void 0
              , y = this.layout ? this.layout.source : void 0
              , x = v !== y
              , S = this.getStack()
              , m = !S || S.members.length <= 1
              , p = !!(x && !m && this.options.crossfade === !0 && !this.path.some(lS));
            this.animationProgress = 0;
            let g;
            this.mixTargetDelta = k => {
                const j = k / 1e3;
                xf(f.x, o.x, j),
                xf(f.y, o.y, j),
                this.setTargetDelta(f),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Kr(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                aS(this.relativeTarget, this.relativeTargetOrigin, h, j),
                g && $2(this.relativeTarget, g) && (this.isProjectionDirty = !1),
                g || (g = ne()),
                Be(g, this.relativeTarget)),
                x && (this.animationValues = d,
                O2(d, c, this.latestValues, j, p, m)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = j
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (Xt(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = K.update( () => {
                ls.hasAnimatedSinceResize = !0,
                this.currentAnimation = A2(0, gf, {
                    ...o,
                    onUpdate: a => {
                        this.mixTargetDelta(a),
                        o.onUpdate && o.onUpdate(a)
                    }
                    ,
                    onComplete: () => {
                        o.onComplete && o.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(gf),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {targetWithTransforms: a, target: l, layout: c, latestValues: d} = o;
            if (!(!a || !l || !c)) {
                if (this !== o && this.layout && c && w0(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
                    l = this.target || ne();
                    const f = Fe(this.layout.layoutBox.x);
                    l.x.min = o.target.x.min,
                    l.x.max = l.x.min + f;
                    const h = Fe(this.layout.layoutBox.y);
                    l.y.min = o.target.y.min,
                    l.y.max = l.y.min + h
                }
                Be(a, l),
                $n(a, d),
                $r(this.projectionDeltaWithTransform, this.layoutCorrected, a, d)
            }
        }
        registerSharedNode(o, a) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new K2),
            this.sharedNodes.get(o).add(a);
            const c = a.options.initialPromotionConfig;
            a.promote({
                transition: c ? c.transition : void 0,
                preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var o;
            const {layoutId: a} = this.options;
            return a ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this
        }
        getPrevLead() {
            var o;
            const {layoutId: a} = this.options;
            return a ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0
        }
        getStack() {
            const {layoutId: o} = this.options;
            if (o)
                return this.root.sharedNodes.get(o)
        }
        promote({needsReset: o, transition: a, preserveFollowOpacity: l}={}) {
            const c = this.getStack();
            c && c.promote(this, l),
            o && (this.projectionDelta = void 0,
            this.needsReset = !0),
            a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: o} = this.options;
            if (!o)
                return;
            let a = !1;
            const {latestValues: l} = o;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
            !a)
                return;
            const c = {};
            l.z && Qo("z", o, c, this.animationValues);
            for (let d = 0; d < Yo.length; d++)
                Qo(`rotate${Yo[d]}`, o, c, this.animationValues),
                Qo(`skew${Yo[d]}`, o, c, this.animationValues);
            o.render();
            for (const d in c)
                o.setStaticValue(d, c[d]),
                this.animationValues && (this.animationValues[d] = c[d]);
            o.scheduleRender()
        }
        getProjectionStyles(o) {
            var a, l;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return X2;
            const c = {
                visibility: ""
            }
              , d = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                c.opacity = "",
                c.pointerEvents = os(o == null ? void 0 : o.pointerEvents) || "",
                c.transform = d ? d(this.latestValues, "") : "none",
                c;
            const f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                const x = {};
                return this.options.layoutId && (x.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                x.pointerEvents = os(o == null ? void 0 : o.pointerEvents) || ""),
                this.hasProjected && !an(this.latestValues) && (x.transform = d ? d({}, "") : "none",
                this.hasProjected = !1),
                x
            }
            const h = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(),
            c.transform = G2(this.projectionDeltaWithTransform, this.treeScale, h),
            d && (c.transform = d(h, c.transform));
            const {x: v, y} = this.projectionDelta;
            c.transformOrigin = `${v.origin * 100}% ${y.origin * 100}% 0`,
            f.animationValues ? c.opacity = f === this ? (l = (a = h.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : c.opacity = f === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
            for (const x in Is) {
                if (h[x] === void 0)
                    continue;
                const {correct: S, applyTo: m} = Is[x]
                  , p = c.transform === "none" ? h[x] : S(h[x], f);
                if (m) {
                    const g = m.length;
                    for (let k = 0; k < g; k++)
                        c[m[k]] = p
                } else
                    c[x] = p
            }
            return this.options.layoutId && (c.pointerEvents = f === this ? os(o == null ? void 0 : o.pointerEvents) || "" : "none"),
            c
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var a;
                return (a = o.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }
            ),
            this.root.nodes.forEach(vf),
            this.root.sharedNodes.clear()
        }
    }
}
function Q2(e) {
    e.updateLayout()
}
function Z2(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: i} = e.layout
          , {animationType: s} = e.options
          , o = n.source !== e.layout.source;
        s === "size" ? Ue(f => {
            const h = o ? n.measuredBox[f] : n.layoutBox[f]
              , v = Fe(h);
            h.min = r[f].min,
            h.max = h.min + v
        }
        ) : w0(s, n.layoutBox, r) && Ue(f => {
            const h = o ? n.measuredBox[f] : n.layoutBox[f]
              , v = Fe(r[f]);
            h.max = h.min + v,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[f].max = e.relativeTarget[f].min + v)
        }
        );
        const a = Hn();
        $r(a, r, n.layoutBox);
        const l = Hn();
        o ? $r(l, e.applyTransform(i, !0), n.measuredBox) : $r(l, r, n.layoutBox);
        const c = !g0(a);
        let d = !1;
        if (!e.resumeFrom) {
            const f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const {snapshot: h, layout: v} = f;
                if (h && v) {
                    const y = ne();
                    Kr(y, n.layoutBox, h.layoutBox);
                    const x = ne();
                    Kr(x, r, v.layoutBox),
                    v0(y, x) || (d = !0),
                    f.options.layoutRoot && (e.relativeTarget = x,
                    e.relativeTargetOrigin = y,
                    e.relativeParent = f)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: c,
            hasRelativeTargetChanged: d
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function q2(e) {
    Ar && ln.totalNodes++,
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function J2(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function eS(e) {
    e.clearSnapshot()
}
function vf(e) {
    e.clearMeasurements()
}
function tS(e) {
    e.isLayoutDirty = !1
}
function nS(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function yf(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function rS(e) {
    e.resolveTargetDelta()
}
function iS(e) {
    e.calcProjection()
}
function sS(e) {
    e.resetSkewAndRotation()
}
function oS(e) {
    e.removeLeadSnapshot()
}
function xf(e, t, n) {
    e.translate = Q(t.translate, 0, n),
    e.scale = Q(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function wf(e, t, n, r) {
    e.min = Q(t.min, n.min, r),
    e.max = Q(t.max, n.max, r)
}
function aS(e, t, n, r) {
    wf(e.x, t.x, n.x, r),
    wf(e.y, t.y, n.y, r)
}
function lS(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const uS = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Sf = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , kf = Sf("applewebkit/") && !Sf("chrome/") ? Math.round : Ie;
function jf(e) {
    e.min = kf(e.min),
    e.max = kf(e.max)
}
function cS(e) {
    jf(e.x),
    jf(e.y)
}
function w0(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !h2(pf(t), pf(n), .2)
}
function dS(e) {
    var t;
    return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}
const fS = x0({
    attachResizeListener: (e, t) => vi(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , Zo = {
    current: void 0
}
  , S0 = x0({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!Zo.current) {
            const e = new fS({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            Zo.current = e
        }
        return Zo.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , hS = {
    pan: {
        Feature: E2
    },
    drag: {
        Feature: b2,
        ProjectionNode: S0,
        MeasureLayout: h0
    }
};
function Nf(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n
      , s = r[i];
    s && K.postRender( () => s(t, Pi(t)))
}
class pS extends Jt {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = p1(t, n => (Nf(this.node, n, "Start"),
        r => Nf(this.node, r, "End"))))
    }
    unmount() {}
}
class mS extends Jt {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Ci(vi(this.node.current, "focus", () => this.onFocus()), vi(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function Cf(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n)
      , s = r[i];
    s && K.postRender( () => s(t, Pi(t)))
}
class gS extends Jt {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = y1(t, n => (Cf(this.node, n, "Start"),
        (r, {success: i}) => Cf(this.node, r, i ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const dl = new WeakMap
  , qo = new WeakMap
  , vS = e => {
    const t = dl.get(e.target);
    t && t(e)
}
  , yS = e => {
    e.forEach(vS)
}
;
function xS({root: e, ...t}) {
    const n = e || document;
    qo.has(n) || qo.set(n, {});
    const r = qo.get(n)
      , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(yS,{
        root: e,
        ...t
    })),
    r[i]
}
function wS(e, t, n) {
    const r = xS(t);
    return dl.set(e, n),
    r.observe(e),
    () => {
        dl.delete(e),
        r.unobserve(e)
    }
}
const SS = {
    some: 0,
    all: 1
};
class kS extends Jt {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: i="some", once: s} = t
          , o = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : SS[i]
        }
          , a = l => {
            const {isIntersecting: c} = l;
            if (this.isInView === c || (this.isInView = c,
            s && !c && this.hasEnteredView))
                return;
            c && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", c);
            const {onViewportEnter: d, onViewportLeave: f} = this.node.getProps()
              , h = c ? d : f;
            h && h(l)
        }
        ;
        return wS(this.node.current, o, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(jS(t, n)) && this.startObserver()
    }
    unmount() {}
}
function jS({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const NS = {
    inView: {
        Feature: kS
    },
    tap: {
        Feature: gS
    },
    focus: {
        Feature: mS
    },
    hover: {
        Feature: pS
    }
}
  , CS = {
    layout: {
        ProjectionNode: S0,
        MeasureLayout: h0
    }
}
  , fl = {
    current: null
}
  , k0 = {
    current: !1
};
function PS() {
    if (k0.current = !0,
    !!lu)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => fl.current = e.matches;
            e.addListener(t),
            t()
        } else
            fl.current = !1
}
const TS = [...Gm, xe, Yt]
  , bS = e => TS.find(Km(e))
  , Pf = new WeakMap;
function ES(e, t, n) {
    for (const r in t) {
        const i = t[r]
          , s = n[r];
        if (Se(i))
            e.addValue(r, i);
        else if (Se(s))
            e.addValue(r, mi(i, {
                owner: e
            }));
        else if (s !== i)
            if (e.hasValue(r)) {
                const o = e.getValue(r);
                o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i)
            } else {
                const o = e.getStaticValue(r);
                e.addValue(r, mi(o !== void 0 ? o : i, {
                    owner: e
                }))
            }
    }
    for (const r in n)
        t[r] === void 0 && e.removeValue(r);
    return t
}
const Tf = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class MS {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: s, visualState: o}, a={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = Vu,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const v = ct.now();
            this.renderScheduledAt < v && (this.renderScheduledAt = v,
            K.render(this.render, !1, !0))
        }
        ;
        const {latestValues: l, renderState: c, onUpdate: d} = o;
        this.onUpdate = d,
        this.latestValues = l,
        this.baseTarget = {
            ...l
        },
        this.initialValues = n.initial ? {
            ...l
        } : {},
        this.renderState = c,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.options = a,
        this.blockInitialAnimation = !!s,
        this.isControllingVariants = co(n),
        this.isVariantNode = tm(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: f, ...h} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const v in h) {
            const y = h[v];
            l[v] !== void 0 && Se(y) && y.set(l[v], !1)
        }
    }
    mount(t) {
        this.current = t,
        Pf.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (n, r) => this.bindToMotionValue(r, n)),
        k0.current || PS(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : fl.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        Pf.delete(this.current),
        this.projection && this.projection.unmount(),
        Xt(this.notifyUpdate),
        Xt(this.render),
        this.valueSubscriptions.forEach(t => t()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const t in this.events)
            this.events[t].clear();
        for (const t in this.features) {
            const n = this.features[t];
            n && (n.unmount(),
            n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = Cn.has(t)
          , i = n.on("change", a => {
            this.latestValues[t] = a,
            this.props.onUpdate && K.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , s = n.on("renderRequest", this.scheduleRender);
        let o;
        window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, n)),
        this.valueSubscriptions.set(t, () => {
            i(),
            s(),
            o && o(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in or) {
            const n = or[t];
            if (!n)
                continue;
            const {isEnabled: r, Feature: i} = n;
            if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)),
            this.features[t]) {
                const s = this.features[t];
                s.isMounted ? s.update() : (s.mount(),
                s.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ne()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < Tf.length; r++) {
            const i = Tf[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const s = "on" + i
              , o = t[s];
            o && (this.propEventSubscriptions[i] = this.on(i, o))
        }
        this.prevMotionValues = ES(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = mi(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t, n) {
        var r;
        let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
        return i != null && (typeof i == "string" && (Wm(i) || Vm(i)) ? i = parseFloat(i) : !bS(i) && Yt.test(n) && (i = Bm(t, n)),
        this.setBaseTarget(t, Se(i) ? i.get() : i)),
        Se(i) ? i.get() : i
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {initial: r} = this.props;
        let i;
        if (typeof r == "string" || typeof r == "object") {
            const o = mu(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            o && (i = o[t])
        }
        if (r && i !== void 0)
            return i;
        const s = this.getBaseTargetFromProps(this.props, t);
        return s !== void 0 && !Se(s) ? s : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Eu),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class j0 extends MS {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = Xm
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        Se(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
function RS(e) {
    return window.getComputedStyle(e)
}
class DS extends j0 {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = cm
    }
    readValueFromInstance(t, n) {
        if (Cn.has(n)) {
            const r = Lu(n);
            return r && r.default || 0
        } else {
            const r = RS(t)
              , i = (am(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return d0(t, n)
    }
    build(t, n, r) {
        yu(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return ku(t, n, r)
    }
}
class AS extends j0 {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = ne
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (Cn.has(n)) {
            const r = Lu(n);
            return r && r.default || 0
        }
        return n = dm.has(n) ? n : fu(n),
        t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return pm(t, n, r)
    }
    build(t, n, r) {
        xu(t, n, this.isSVGTag, r.transformTemplate)
    }
    renderInstance(t, n, r, i) {
        fm(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = Su(t.tagName),
        super.mount(t)
    }
}
const LS = (e, t) => pu(e) ? new AS(t) : new DS(t,{
    allowProjection: e !== w.Fragment
})
  , VS = a1({
    ...i2,
    ...NS,
    ...hS,
    ...CS
}, LS)
  , b = kx(VS);
function IS() {
    const [e,t] = w.useState(!1)
      , [n,r] = w.useState(!1)
      , i = dr()
      , [s,o] = w.useState( () => {
        const d = localStorage.getItem("isExecutorMode");
        return d ? JSON.parse(d) : !0
    }
    );
    w.useEffect( () => {
        const d = () => r(window.scrollY > 20);
        window.addEventListener("scroll", d);
        const f = () => {
            const h = localStorage.getItem("isExecutorMode");
            o(h ? JSON.parse(h) : !0)
        }
        ;
        return window.addEventListener("storage", f),
        () => {
            window.removeEventListener("scroll", d),
            window.removeEventListener("storage", f)
        }
    }
    , []);
    const a = [{
        to: "/",
        label: "Home"
    }, {
        to: "/tutorial",
        label: "Help"
    }, {
        to: "/executor",
        label: "Executor"
    }, {
        to: "/download",
        label: "Download"
    }, {
        to: "/credits",
        label: "Credits"
    }, {
        to: "/donate",
        label: "Donate"
    }]
      , l = {
        hidden: {
            y: -100,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: .6,
                ease: "easeOut"
            }
        }
    }
      , c = {
        hover: {
            scale: 1.05,
            transition: {
                duration: .2,
                ease: "easeInOut"
            }
        }
    };
    return u.jsxs(b.nav, {
        initial: "hidden",
        animate: "visible",
        variants: l,
        className: `fixed w-full z-50 transition-all duration-300 ${n ? "py-4" : "py-6"}`,
        children: [u.jsxs("div", {
            className: `absolute inset-0 transition-all duration-500 ${n || e ? "opacity-100" : "opacity-0"}`,
            children: [u.jsx("div", {
                className: "absolute inset-0 bg-black/40 backdrop-blur-2xl"
            }), u.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"
            }), u.jsx("div", {
                className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"
            }), u.jsx("div", {
                className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-20"
            }), u.jsx("div", {
                className: "absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
            })]
        }), u.jsx("div", {
            className: "relative max-w-7xl mx-auto px-6",
            children: u.jsxs("div", {
                className: "flex items-center justify-between",
                children: [u.jsxs($t, {
                    to: "/",
                    className: "flex items-center space-x-3 group",
                    children: [u.jsxs(b.div, {
                        className: "relative",
                        whileHover: {
                            scale: 1.1
                        },
                        transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 10
                        },
                        children: [u.jsx("div", {
                            className: "absolute -inset-2 bg-gradient-to-r from-white/30 via-white/10 to-white/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                        }), u.jsxs("div", {
                            className: "relative",
                            children: [u.jsx(b.img, {
                                whileHover: {
                                    rotate: 360
                                },
                                transition: {
                                    duration: .8
                                },
                                className: "h-10 w-10 rounded-full",
                                src: "https://i.ibb.co/k0Y4yB1/xeno.png",
                                alt: "Xeno"
                            }), u.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full"
                            })]
                        })]
                    }), u.jsx(b.span, {
                        className: "text-2xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                        whileHover: {
                            scale: 1.05
                        },
                        transition: {
                            duration: .2
                        },
                        children: "Xeno"
                    })]
                }), u.jsx("div", {
                    className: "hidden md:flex items-center space-x-1",
                    children: a.map( ({to: d, label: f}) => u.jsx(b.div, {
                        variants: c,
                        whileHover: "hover",
                        children: u.jsxs($t, {
                            to: d,
                            className: "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 overflow-hidden group",
                            children: [i.pathname === d && u.jsx(b.div, {
                                layoutId: "navbar-indicator",
                                className: "absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/5 rounded-lg -z-10",
                                transition: {
                                    type: "spring",
                                    bounce: .2,
                                    duration: .6
                                }
                            }), u.jsx("span", {
                                className: `relative z-10 ${i.pathname === d ? "text-white" : "text-gray-400 group-hover:text-white"}`,
                                children: f
                            }), u.jsx("div", {
                                className: "absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                            })]
                        })
                    }, d))
                }), u.jsx(b.div, {
                    className: "hidden md:block",
                    whileHover: {
                        scale: 1.05
                    },
                    whileTap: {
                        scale: .95
                    },
                    children: u.jsxs("a", {
                        href: "https://discord.gg/getxeno",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "group relative inline-flex items-center space-x-2 px-4 py-2 rounded-lg overflow-hidden",
                        children: [u.jsx("div", {
                            className: "absolute inset-0 bg-black/20 backdrop-blur-sm"
                        }), u.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                        }), u.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                        }), u.jsx("img", {
                            src: "https://i.ibb.co/JFFnTYsK/Discord-Icon-White.png",
                            alt: "Discord",
                            className: "relative w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                        }), u.jsx("span", {
                            className: "relative text-sm font-medium text-white group-hover:text-gray-200 transition-colors",
                            children: "Join Discord"
                        })]
                    })
                }), u.jsxs(b.button, {
                    whileHover: {
                        scale: 1.1
                    },
                    whileTap: {
                        scale: .9
                    },
                    onClick: () => t(!e),
                    className: "md:hidden relative group p-2 rounded-lg overflow-hidden",
                    children: [u.jsx("div", {
                        className: "absolute inset-0 bg-white/5 backdrop-blur-sm"
                    }), u.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    }), u.jsx(rx, {
                        className: "relative w-6 h-6 text-white"
                    })]
                })]
            })
        }), u.jsx(fi, {
            children: e && u.jsxs(b.div, {
                initial: {
                    opacity: 0,
                    height: 0
                },
                animate: {
                    opacity: 1,
                    height: "auto"
                },
                exit: {
                    opacity: 0,
                    height: 0
                },
                transition: {
                    duration: .3
                },
                className: "md:hidden relative",
                children: [u.jsx("div", {
                    className: "absolute inset-0 bg-black/40 backdrop-blur-2xl"
                }), u.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"
                }), u.jsx("div", {
                    className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"
                }), u.jsxs("div", {
                    className: "relative px-6 py-4 space-y-1",
                    children: [a.map( ({to: d, label: f}, h) => u.jsx(b.div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            delay: h * .1
                        },
                        children: u.jsxs($t, {
                            to: d,
                            className: `block px-4 py-2 text-base font-medium rounded-lg transition-all duration-300 relative group overflow-hidden ${i.pathname === d ? "text-white" : "text-gray-400 hover:text-white"}`,
                            onClick: () => t(!1),
                            children: [u.jsx("div", {
                                className: "absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
                            }), u.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                            }), u.jsx("span", {
                                className: "relative",
                                children: f
                            })]
                        })
                    }, d)), u.jsx(b.div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            delay: a.length * .1
                        },
                        children: u.jsxs("a", {
                            href: "https://discord.gg/getxeno",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center space-x-2 px-4 py-2 text-base font-medium text-white rounded-lg relative group overflow-hidden",
                            onClick: () => t(!1),
                            children: [u.jsx("div", {
                                className: "absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
                            }), u.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                            }), u.jsx("img", {
                                src: "https://i.ibb.co/JFFnTYsK/Discord-Icon-White.png",
                                alt: "Discord",
                                className: "relative w-5 h-5 opacity-75 group-hover:opacity-100 transition-opacity"
                            }), u.jsx("span", {
                                className: "relative",
                                children: "Join Discord"
                            })]
                        })
                    })]
                })]
            })
        })]
    })
}
function _S() {
    const e = [{
        icon: () => u.jsx("img", {
            src: "https://i.ibb.co/JFFnTYsK/Discord-Icon-White.png",
            alt: "Discord",
            className: "w-6 h-6 opacity-75 group-hover:opacity-100 transition-opacity"
        }),
        href: "https://discord.gg/getxeno",
        label: "Discord"
    }, {
        icon: Jy,
        href: "https://github.com/Riz-ve",
        label: "GitHub"
    }]
      , t = [{
        to: "/credits",
        label: "Credits"
    }, {
        to: "/tutorial",
        label: "Help"
    }, {
        to: "/download",
        label: "Download"
    }, {
        to: "/donate",
        label: "Donate"
    }];
    return u.jsxs("footer", {
        className: "relative bg-black/50 backdrop-blur-xl border-t border-white/5",
        children: [u.jsxs("div", {
            className: "absolute inset-0",
            children: [u.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
            }), u.jsx("div", {
                className: "absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.1),rgba(255,255,255,0))]"
            })]
        }), u.jsx("div", {
            className: "relative max-w-7xl mx-auto px-6 py-8",
            children: u.jsxs("div", {
                className: "grid md:grid-cols-3 gap-8 items-center",
                children: [u.jsxs(b.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .6
                    },
                    className: "flex items-center gap-6 justify-center md:justify-start",
                    children: [u.jsxs($t, {
                        to: "/",
                        className: "group relative",
                        children: [u.jsx("div", {
                            className: "absolute -inset-2 bg-gradient-to-r from-white/20 via-white/10 to-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                        }), u.jsx(b.img, {
                            whileHover: {
                                scale: 1.1
                            },
                            transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 10
                            },
                            src: "https://i.ibb.co/k0Y4yB1/xeno.png",
                            alt: "Xeno",
                            className: "h-10 w-10 rounded-full"
                        })]
                    }), u.jsx("div", {
                        className: "h-8 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
                    }), u.jsx("div", {
                        className: "text-lg bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent font-medium",
                        children: "Experience the future"
                    })]
                }), u.jsx(b.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .6,
                        delay: .2
                    },
                    className: "flex flex-wrap justify-center gap-6",
                    children: t.map( (n, r) => u.jsx($t, {
                        to: n.to,
                        className: "text-gray-400 hover:text-white transition-colors relative group",
                        children: u.jsxs("span", {
                            className: "relative",
                            children: [n.label, u.jsx("span", {
                                className: "absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-white/0 via-white to-white/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                            })]
                        })
                    }, n.to))
                }), u.jsx(b.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .6,
                        delay: .4
                    },
                    className: "flex items-center justify-center md:justify-end gap-6",
                    children: e.map( ({icon: n, href: r, label: i}) => u.jsxs(b.a, {
                        href: r,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "group relative",
                        "aria-label": i,
                        whileHover: {
                            scale: 1.1
                        },
                        transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 10
                        },
                        children: [u.jsx("div", {
                            className: "absolute -inset-3 bg-gradient-to-r from-white/20 via-white/10 to-white/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"
                        }), typeof n == "function" ? u.jsx("div", {
                            className: "relative transform transition-all duration-300",
                            children: u.jsx(n, {})
                        }) : u.jsx(n, {
                            className: "w-6 h-6 text-gray-400 group-hover:text-white transition-all duration-300"
                        })]
                    }, i))
                })]
            })
        })]
    })
}
const en = () => u.jsxs(u.Fragment, {
    children: [u.jsxs("div", {
        className: "absolute inset-0 overflow-hidden",
        children: [u.jsx("div", {
            className: "absolute inset-0 opacity-20",
            children: u.jsx(b.div, {
                animate: {
                    backgroundPosition: ["0% 0%", "100% 100%"]
                },
                transition: {
                    duration: 20,
                    repeat: 1 / 0,
                    ease: "linear"
                },
                className: "absolute inset-0",
                style: {
                    backgroundImage: "linear-gradient(45deg, transparent 95%, rgba(255,255,255,0.3) 95%), linear-gradient(-45deg, transparent 95%, rgba(255,255,255,0.3) 95%)",
                    backgroundSize: "60px 60px"
                }
            })
        }), u.jsx("div", {
            className: "absolute inset-0",
            children: [...Array(20)].map( (e, t) => u.jsx(b.div, {
                animate: {
                    y: ["0%", "100%"],
                    x: t % 2 === 0 ? ["-10%", "10%"] : ["10%", "-10%"],
                    opacity: [0, 1, 0]
                },
                transition: {
                    duration: Math.random() * 10 + 10,
                    repeat: 1 / 0,
                    delay: Math.random() * 5,
                    ease: "linear"
                },
                className: "absolute w-1 h-1 bg-white rounded-full",
                style: {
                    left: `${Math.random() * 100}%`,
                    top: "-5%"
                }
            }, t))
        })]
    }), u.jsx("div", {
        className: "absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black pointer-events-none"
    })]
});
function FS({children: e, className: t="", duration: n=2, clockwise: r=!0}) {
    const [i,s] = w.useState(!1)
      , [o,a] = w.useState("TOP")
      , l = f => {
        const h = ["TOP", "RIGHT", "BOTTOM", "LEFT"]
          , v = h.indexOf(f)
          , y = r ? (v + 1) % h.length : (v - 1 + h.length) % h.length;
        return h[y]
    }
      , c = {
        TOP: "radial-gradient(20% 50% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
        RIGHT: "radial-gradient(20% 50% at 100% 50%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
        BOTTOM: "radial-gradient(20% 50% at 50% 100%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
        LEFT: "radial-gradient(20% 50% at 0% 50%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)"
    }
      , d = "radial-gradient(70% 100% at 50% 50%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)";
    return w.useEffect( () => {
        if (!i) {
            const f = setInterval( () => {
                a(h => l(h))
            }
            , n * 1e3);
            return () => clearInterval(f)
        }
    }
    , [i, n, r]),
    u.jsxs("div", {
        className: `relative ${t}`,
        onMouseEnter: () => s(!0),
        onMouseLeave: () => s(!1),
        children: [u.jsx(b.div, {
            className: "absolute -inset-[2px] rounded-3xl overflow-hidden",
            initial: {
                background: c[o]
            },
            animate: {
                background: i ? d : c[o]
            },
            transition: {
                duration: n / 2,
                ease: "linear"
            },
            style: {
                filter: "blur(8px)"
            }
        }), u.jsx("div", {
            className: "relative",
            children: e
        })]
    })
}
function OS({item: e, index: t, isOpen: n, onToggle: r}) {
    return u.jsxs(b.div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: .5,
            delay: .1 * t
        },
        className: "relative group",
        children: [u.jsx("div", {
            className: "absolute -inset-0.5 bg-gradient-to-r from-white/20 to-white/0 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"
        }), u.jsx("div", {
            className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden transition-all duration-300 group-hover:border-white/20",
            children: u.jsxs("button", {
                onClick: r,
                className: "relative w-full p-6 text-left transition-all duration-300",
                children: [u.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [u.jsx("h3", {
                        className: "text-xl font-semibold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent group-hover:text-white transition-colors",
                        children: e.q
                    }), u.jsxs("div", {
                        className: "relative flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300",
                        children: [n ? u.jsx(ix, {
                            className: "w-4 h-4 text-white"
                        }) : u.jsx(Yp, {
                            className: "w-4 h-4 text-white"
                        }), u.jsx("div", {
                            className: "absolute inset-0 rounded-full border border-white/10 group-hover:border-white/20 transition-all duration-300"
                        })]
                    })]
                }), u.jsx(b.div, {
                    initial: !1,
                    animate: {
                        height: n ? "auto" : 0,
                        opacity: n ? 1 : 0,
                        marginTop: n ? 16 : 0
                    },
                    transition: {
                        duration: .3
                    },
                    className: "overflow-hidden",
                    children: u.jsxs("div", {
                        className: "relative",
                        children: [u.jsx("div", {
                            className: "absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-white/30 to-transparent rounded-full"
                        }), u.jsx("p", {
                            className: "text-gray-400 pl-4 leading-relaxed",
                            children: e.a
                        })]
                    })
                })]
            })
        })]
    })
}
function zS() {
    const [e,t] = w.useState(null)
      , n = [{
        q: "Is Xeno Safe?",
        a: `Yes, Xeno is safe to use. Sometimes antivirus programs might flag it as a Trojan or malware, but that's usually just a false positive. To be safe, you can always do a quick search, like "Is Xeno legit? Reddit," to double-check. Also, make sure you're downloading exploits directly from their official sources.`
    }, {
        q: "Can i get banned with Xeno?",
        a: "Using third-party software like Xeno does come with risks. Roblox typically conducts ban waves every three months, and the penalties progress as follows: 1-day ban → 3-day ban → 7-day ban → permanent ban. However, according to a Roblox Staff on Reddit, Bitdancer, the ban progression might reset to a 1-day ban if you avoid getting banned for a while."
    }, {
        q: "How often does Xeno update?",
        a: "Xeno gets regular updates, usually within 24 hours, to keep everything running smoothly and stay compatible with the latest changes."
    }]
      , r = i => {
        t(e === i ? null : i)
    }
    ;
    return u.jsxs("div", {
        className: "relative min-h-screen bg-black text-white overflow-hidden",
        children: [u.jsx(en, {}), u.jsxs("div", {
            className: "relative min-h-screen flex flex-col",
            children: [u.jsx("div", {
                className: "flex-1 flex items-center justify-center pt-12 sm:pt-24",
                children: u.jsxs("div", {
                    className: "w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-12",
                    children: [u.jsx(b.h1, {
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5
                        },
                        className: "text-6xl font-bold text-center bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
                    }), u.jsx(FS, {
                        className: "w-full max-w-[900px] mx-auto",
                        children: u.jsx(b.div, {
                            initial: {
                                opacity: 0,
                                scale: .8
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                duration: .8
                            },
                            className: "group",
                            children: u.jsxs("div", {
                                className: "relative rounded-2xl overflow-hidden",
                                children: [u.jsx("div", {
                                    className: "absolute -inset-2 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"
                                }), u.jsx("div", {
                                    className: "absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                }), u.jsx("div", {
                                    className: "absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 z-20"
                                }), u.jsx("div", {
                                    className: "absolute -inset-1 bg-gradient-to-br from-white/10 via-white/5 to-transparent rotate-180 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20"
                                }), u.jsx("img", {
                                    src: "https://github.com/rlz-ve/x/blob/main/Xeno-V1.1.5.png?raw=true",
                                    alt: "Xeno",
                                    className: "w-full h-full object-contain rounded-2xl transform transition-all duration-700 group-hover:scale-[1.02] relative z-30"
                                }), u.jsx("div", {
                                    className: "absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"
                                }), u.jsx("div", {
                                    className: "absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"
                                })]
                            })
                        })
                    }), u.jsxs(b.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5,
                            delay: .6
                        },
                        className: "flex flex-col sm:flex-row items-center justify-center gap-6",
                        children: [u.jsxs($t, {
                            to: "/download",
                            className: "group relative overflow-hidden rounded-xl w-full sm:w-auto",
                            children: [u.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white rounded-xl"
                            }), u.jsx("div", {
                                className: "absolute inset-[1px] bg-black rounded-[11px] transition-colors group-hover:bg-black/95"
                            }), u.jsxs("div", {
                                className: "relative px-6 sm:px-12 py-4 flex items-center justify-center space-x-2 text-lg font-medium",
                                children: [u.jsx("span", {
                                    className: "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent group-hover:text-white transition-colors",
                                    children: "Download Now"
                                }), u.jsx(oo, {
                                    className: "w-5 h-5 text-white group-hover:translate-y-1 transition-transform"
                                })]
                            })]
                        }), u.jsxs($t, {
                            to: "/tutorial",
                            className: "group relative overflow-hidden rounded-xl",
                            children: [u.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                            }), u.jsx("div", {
                                className: "absolute inset-[1px] bg-black rounded-[11px]"
                            }), u.jsxs("div", {
                                className: "relative px-8 sm:px-12 py-4 flex items-center justify-center space-x-2 text-lg font-medium",
                                children: [u.jsx("span", {
                                    className: "text-white/90 group-hover:text-white transition-colors",
                                    children: "Help & Tutorial"
                                }), u.jsx(so, {
                                    className: "w-5 h-5 text-white group-hover:translate-x-1 transition-transform"
                                })]
                            })]
                        })]
                    })]
                })
            }), u.jsxs(b.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .5,
                    delay: .8
                },
                className: "w-full px-4 py-12 sm:py-16 relative",
                children: [u.jsx("div", {
                    className: "absolute inset-0 bg-black pointer-events-none"
                }), u.jsxs("div", {
                    className: "max-w-6xl mx-auto relative",
                    children: [u.jsx(b.div, {
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .6
                        },
                        className: "text-center mb-12",
                        children: u.jsx("h2", {
                            className: "text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent inline-block",
                            children: "Frequently Asked Questions"
                        })
                    }), u.jsx("div", {
                        className: "space-y-4 max-w-3xl mx-auto",
                        children: n.map( (i, s) => u.jsx(OS, {
                            item: i,
                            index: s,
                            isOpen: e === s,
                            onToggle: () => r(s)
                        }, s))
                    })]
                })]
            })]
        })]
    })
}
function BS() {
    const e = "NhaR47EeJOY"
      , [t,n] = w.useState(!1)
      , r = `https://img.youtube.com/vi/${e}/hqdefault.jpg`
      , i = [{
        title: "Xeno not opening",
        description: "You do not have the required dependencies downloaded. Download Microsoft Visual C++ Redistributable and .NET Runtime 8.0.0",
        links: [{
            text: "Microsoft Visual C++ Redistributable",
            url: "https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170"
        }, {
            text: ".NET Runtime 8.0.0",
            url: "https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-8.0.100-windows-x64-installer"
        }]
    }, {
        title: "Script not executing",
        description: "There was an interference attaching to Roblox and restarting Xeno would resume everything"
    }];
    return u.jsxs("div", {
        className: "relative min-h-screen bg-black text-white pt-24",
        children: [u.jsx(en, {}), u.jsxs("div", {
            className: "relative max-w-7xl mx-auto px-4 py-16",
            children: [u.jsxs(b.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                className: "text-center space-y-8 mb-16",
                children: [u.jsx("h1", {
                    className: "text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent",
                    children: "Help & Tutorial"
                }), u.jsx("p", {
                    className: "text-gray-400 max-w-2xl mx-auto text-lg",
                    children: "Learn how to use Xeno and troubleshoot common issues"
                })]
            }), u.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto",
                children: [u.jsxs(b.div, {
                    initial: {
                        opacity: 0,
                        x: -20
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: .6
                    },
                    className: "relative group",
                    children: [u.jsx("div", {
                        className: "absolute -inset-0.5 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                    }), u.jsxs("div", {
                        className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden",
                        children: [u.jsx("div", {
                            className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"
                        }), u.jsx("div", {
                            className: "relative p-6",
                            children: u.jsx("div", {
                                className: "aspect-video w-full rounded-lg overflow-hidden relative",
                                children: t ? u.jsx("iframe", {
                                    src: `https://www.youtube.com/embed/${e}?autoplay=1`,
                                    title: "Xeno Tutorial",
                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                    allowFullScreen: !0,
                                    className: "w-full h-full"
                                }) : u.jsxs(b.button, {
                                    onClick: () => n(!0),
                                    className: "absolute inset-0 flex items-center justify-center group/play",
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    transition: {
                                        duration: .2
                                    },
                                    children: [u.jsx("img", {
                                        src: r,
                                        alt: "Tutorial thumbnail",
                                        className: "absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/play:scale-105"
                                    }), u.jsx("div", {
                                        className: "absolute inset-0 bg-black/40 group-hover/play:bg-black/30 transition-colors"
                                    }), u.jsx(b.div, {
                                        className: "relative bg-white/90 rounded-full p-4 transform group-hover/play:scale-110 transition-all duration-300",
                                        whileHover: {
                                            scale: 1.1
                                        },
                                        whileTap: {
                                            scale: .95
                                        },
                                        children: u.jsx(Xa, {
                                            className: "w-8 h-8 text-black"
                                        })
                                    })]
                                })
                            })
                        })]
                    })]
                }), u.jsxs(b.div, {
                    initial: {
                        opacity: 0,
                        x: 20
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: .6
                    },
                    className: "space-y-6",
                    children: [u.jsxs("h2", {
                        className: "text-3xl font-bold mb-8 flex items-center gap-3",
                        children: [u.jsx(ex, {
                            className: "w-8 h-8 text-white/80"
                        }), u.jsx("span", {
                            className: "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                            children: "Common Issues"
                        })]
                    }), i.map( (s, o) => u.jsxs(b.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5,
                            delay: .2 + o * .1
                        },
                        className: "group relative",
                        children: [u.jsx("div", {
                            className: "absolute -inset-0.5 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                        }), u.jsxs("div", {
                            className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden",
                            children: [u.jsx("div", {
                                className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"
                            }), u.jsx("div", {
                                className: "relative p-6",
                                children: u.jsxs("div", {
                                    className: "flex items-start gap-4",
                                    children: [u.jsx("div", {
                                        className: "mt-1 p-2 bg-white/10 rounded-lg",
                                        children: u.jsx(Kp, {
                                            className: "w-5 h-5 text-white/80"
                                        })
                                    }), u.jsxs("div", {
                                        className: "flex-1",
                                        children: [u.jsx("h3", {
                                            className: "text-xl font-semibold mb-3 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                                            children: s.title
                                        }), u.jsx("p", {
                                            className: "text-gray-400 mb-4 leading-relaxed",
                                            children: s.description
                                        }), s.links && u.jsx("div", {
                                            className: "space-y-3",
                                            children: s.links.map( (a, l) => u.jsxs("a", {
                                                href: a.url,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "group/link flex items-center gap-2 text-white/80 hover:text-white transition-colors",
                                                children: [u.jsx("span", {
                                                    className: "transform group-hover/link:translate-x-1 transition-transform",
                                                    children: "→"
                                                }), u.jsx("span", {
                                                    className: "border-b border-white/0 group-hover/link:border-white/100 transition-colors",
                                                    children: a.text
                                                })]
                                            }, l))
                                        })]
                                    })]
                                })
                            })]
                        })]
                    }, s.title))]
                })]
            })]
        })]
    })
}
function US() {
    const [e,t] = w.useState(null)
      , n = [{
        title: "CashApp",
        desc: "Quick and easy payment",
        value: "$RizveA",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Square_Cash_app_logo.svg/2048px-Square_Cash_app_logo.svg.png"
    }, {
        title: "PayPal",
        desc: "Send as friends & family",
        value: "ARizve",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png"
    }, {
        title: "Bitcoin",
        desc: "Cryptocurrency payment",
        value: "bc1qvlds5l57ehkjlnrpzzrqq9j9mecml6xq6ztqy3",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
    }, {
        title: "Ethereum",
        desc: "Cryptocurrency payment",
        value: "0x2c8fbe2030941a4f5d3147Ed7F6D5eeC5187661a",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png"
    }, {
        title: "Litecoin",
        desc: "Cryptocurrency payment",
        value: "LRXYK5s8ATvdCt2KkxH9w2patns4rxyoFp",
        icon: "https://cryptologos.cc/logos/litecoin-ltc-logo.png"
    }]
      , r = async (o, a) => {
        try {
            await navigator.clipboard.writeText(o),
            t(a),
            setTimeout( () => t(null), 2e3)
        } catch (l) {
            console.error("Failed to copy:", l)
        }
    }
      , i = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: .1
            }
        }
    }
      , s = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .3
            }
        }
    };
    return u.jsxs("div", {
        className: "relative min-h-screen bg-black text-white pt-24",
        children: [u.jsx(en, {}), u.jsxs("div", {
            className: "relative max-w-7xl mx-auto px-4 py-16",
            children: [u.jsxs(b.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                className: "text-center space-y-8 mb-16",
                children: [u.jsx("h1", {
                    className: "text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent",
                    children: "Support Xeno"
                }), u.jsx("p", {
                    className: "text-gray-400 max-w-2xl mx-auto text-lg",
                    children: "Your support helps me continue developing and improving Xeno"
                })]
            }), u.jsxs(b.div, {
                variants: i,
                initial: "hidden",
                animate: "visible",
                className: "relative overflow-hidden rounded-2xl max-w-4xl mx-auto",
                children: [u.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-2xl blur-xl opacity-50"
                }), u.jsxs("div", {
                    className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-2xl border border-white/10",
                    children: [u.jsx("div", {
                        className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"
                    }), u.jsx("div", {
                        className: "overflow-x-auto",
                        children: u.jsxs("table", {
                            className: "w-full",
                            children: [u.jsx("thead", {
                                children: u.jsxs("tr", {
                                    className: "border-b border-white/10",
                                    children: [u.jsx("th", {
                                        className: "py-6 px-8 text-left text-sm font-medium text-gray-400",
                                        children: "Method"
                                    }), u.jsx("th", {
                                        className: "py-6 px-8 text-left text-sm font-medium text-gray-400",
                                        children: "Description"
                                    }), u.jsx("th", {
                                        className: "py-6 px-8 text-left text-sm font-medium text-gray-400",
                                        children: "Address"
                                    })]
                                })
                            }), u.jsx("tbody", {
                                children: n.map( (o, a) => u.jsxs(b.tr, {
                                    variants: s,
                                    className: "group hover:bg-white/5 transition-all duration-300",
                                    children: [u.jsx("td", {
                                        className: "py-6 px-8",
                                        children: u.jsxs("div", {
                                            className: "flex items-center space-x-4",
                                            children: [u.jsxs("div", {
                                                className: "relative w-14 h-14 rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-300",
                                                children: [u.jsx("div", {
                                                    className: "absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                }), u.jsx("div", {
                                                    className: "absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                                                }), u.jsx("img", {
                                                    src: o.icon,
                                                    alt: o.title,
                                                    className: "w-full h-full object-contain p-2"
                                                })]
                                            }), u.jsxs("div", {
                                                className: "space-y-1",
                                                children: [u.jsx("span", {
                                                    className: "font-medium text-lg bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                                                    children: o.title
                                                }), u.jsx("p", {
                                                    className: "text-sm text-gray-400 group-hover:text-gray-300 transition-colors",
                                                    children: o.desc
                                                })]
                                            })]
                                        })
                                    }), u.jsx("td", {
                                        className: "py-6 px-8",
                                        children: u.jsxs("div", {
                                            className: "relative overflow-hidden rounded-xl bg-white/5 px-4 py-2 group-hover:bg-white/10 transition-all duration-300",
                                            children: [u.jsx("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            }), u.jsx("span", {
                                                className: "relative text-gray-400 group-hover:text-gray-300 transition-colors",
                                                children: o.desc
                                            })]
                                        })
                                    }), u.jsx("td", {
                                        className: "py-6 px-8",
                                        children: u.jsxs(b.button, {
                                            onClick: () => r(o.value, o.title),
                                            className: "group/btn relative flex items-center justify-between w-full max-w-xs bg-white/5 px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-300",
                                            whileHover: {
                                                scale: 1.02
                                            },
                                            whileTap: {
                                                scale: .98
                                            },
                                            children: [u.jsx("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"
                                            }), u.jsx("span", {
                                                className: "relative text-sm font-mono text-gray-300 truncate group-hover/btn:text-white transition-colors",
                                                children: o.value
                                            }), u.jsx(fi, {
                                                mode: "wait",
                                                children: e === o.title ? u.jsx(b.div, {
                                                    initial: {
                                                        scale: 0
                                                    },
                                                    animate: {
                                                        scale: 1
                                                    },
                                                    exit: {
                                                        scale: 0
                                                    },
                                                    className: "relative text-green-400",
                                                    children: u.jsx(ss, {
                                                        className: "w-4 h-4"
                                                    })
                                                }, "check") : u.jsx(b.div, {
                                                    initial: {
                                                        scale: 0
                                                    },
                                                    animate: {
                                                        scale: 1
                                                    },
                                                    exit: {
                                                        scale: 0
                                                    },
                                                    className: "relative text-gray-400 group-hover/btn:text-white transition-colors",
                                                    children: u.jsx(Gp, {
                                                        className: "w-4 h-4"
                                                    })
                                                }, "copy")
                                            })]
                                        })
                                    })]
                                }, o.title))
                            })]
                        })
                    })]
                })]
            })]
        })]
    })
}
const HS = [{
    icon: lx,
    title: "Good Community",
    description: "Join our growing community"
}, {
    icon: Gy,
    title: "Multi Attach",
    description: "Attach to multiple Clients at once"
}, {
    icon: cx,
    title: "Performance",
    description: "Run scripts with high speed"
}];
function WS() {
    const [e,t] = w.useState("")
      , [n,r] = w.useState(!0)
      , [i,s] = w.useState("")
      , [o,a] = w.useState([]);
    w.useEffect( () => {
        (async () => {
            try {
                const f = await fetch("https://raw.githubusercontent.com/rlz-ve/x/refs/heads/main/v");
                if (!f.ok)
                    throw new Error("Failed to fetch version");
                const h = await f.text();
                t(h.trim());
                const v = await fetch("https://raw.githubusercontent.com/rlz-ve/x/refs/heads/main/cl");
                if (!v.ok)
                    throw new Error("Failed to fetch changelog");
                const y = await v.text();
                a(y.split(`
`).filter(x => x.trim())),
                r(!1)
            } catch {
                s("Failed to fetch information"),
                r(!1)
            }
        }
        )()
    }
    , []);
    const l = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: .2
            }
        }
    }
      , c = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6
            }
        }
    };
    return u.jsxs("div", {
        className: "relative min-h-screen bg-black text-white pt-24",
        children: [u.jsxs("div", {
            className: "fixed inset-0 z-0",
            children: [u.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"
            }), u.jsx("div", {
                className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-30"
            }), u.jsx("div", {
                className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-20"
            })]
        }), u.jsx(en, {}), u.jsxs("div", {
            className: "relative max-w-7xl mx-auto px-4 py-16",
            children: [u.jsxs(b.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                className: "text-center space-y-4 mb-12",
                children: [u.jsx("h1", {
                    className: "text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent",
                    children: "Download Xeno"
                }), u.jsx("p", {
                    className: "text-gray-400 max-w-2xl mx-auto text-lg",
                    children: "Experience the next generation of scripting"
                })]
            }), u.jsxs(b.div, {
                variants: l,
                initial: "hidden",
                animate: "visible",
                className: "relative",
                children: [u.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl blur-2xl animate-pulse-slow"
                }), u.jsxs("div", {
                    className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden",
                    children: [u.jsx("div", {
                        className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"
                    }), u.jsx("div", {
                        className: "relative p-8 sm:p-10",
                        children: u.jsxs("div", {
                            className: "grid lg:grid-cols-3 gap-8",
                            children: [u.jsxs("div", {
                                className: "lg:col-span-2",
                                children: [u.jsxs(b.div, {
                                    className: "flex flex-col sm:flex-row items-center gap-6 mb-10",
                                    variants: c,
                                    children: [u.jsxs("div", {
                                        className: "relative group animate-float",
                                        children: [u.jsx("div", {
                                            className: "absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                                        }), u.jsx(b.img, {
                                            whileHover: {
                                                scale: 1.1,
                                                rotate: 360
                                            },
                                            transition: {
                                                duration: .8
                                            },
                                            src: "https://i.ibb.co/k0Y4yB1/xeno.png",
                                            alt: "Xeno",
                                            className: "relative w-20 h-20 rounded-full transform transition-transform duration-500 unselectable shimmer"
                                        })]
                                    }), !n && !i && u.jsxs("div", {
                                        className: "text-center sm:text-left",
                                        children: [u.jsxs("h2", {
                                            className: "text-3xl font-bold text-white mb-2",
                                            children: ["Xeno ", e]
                                        }), u.jsxs("div", {
                                            className: "flex items-center gap-2 text-gray-400 justify-center sm:justify-start",
                                            children: [u.jsx(ld, {
                                                className: "w-4 h-4"
                                            }), u.jsx("span", {
                                                children: "Latest Release"
                                            })]
                                        })]
                                    })]
                                }), u.jsx(b.div, {
                                    variants: l,
                                    className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10",
                                    children: HS.map( ({icon: d, title: f, description: h}, v) => u.jsxs(b.div, {
                                        variants: c,
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        className: "group relative",
                                        children: [u.jsx("div", {
                                            className: "absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                                        }), u.jsx("div", {
                                            className: "relative h-full p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/5 group-hover:border-white/20",
                                            children: u.jsxs("div", {
                                                className: "flex flex-col gap-4",
                                                children: [u.jsxs(b.div, {
                                                    className: "relative",
                                                    whileHover: {
                                                        scale: 1.1
                                                    },
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 300
                                                    },
                                                    children: [u.jsx("div", {
                                                        className: "absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                                                    }), u.jsx(d, {
                                                        className: "relative w-6 h-6 text-white"
                                                    })]
                                                }), u.jsxs("div", {
                                                    children: [u.jsx("h3", {
                                                        className: "font-medium text-lg mb-1",
                                                        children: f
                                                    }), u.jsx("p", {
                                                        className: "text-sm text-gray-400",
                                                        children: h
                                                    })]
                                                })]
                                            })
                                        })]
                                    }, f))
                                }), u.jsx(b.div, {
                                    variants: c,
                                    className: "flex flex-wrap gap-4",
                                    children: u.jsxs($t, {
                                        to: "/download/step1",
                                        className: "group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl overflow-hidden",
                                        children: [u.jsx("div", {
                                            className: "absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500"
                                        }), u.jsx("div", {
                                            className: "absolute inset-[1px] bg-black rounded-[11px] transition-colors"
                                        }), u.jsxs("div", {
                                            className: "relative flex items-center gap-3",
                                            children: [u.jsx(oo, {
                                                className: "w-5 h-5 group-hover:translate-y-1 transition-transform text-white"
                                            }), u.jsx("span", {
                                                className: "font-medium text-white group-hover:text-gray-200 transition-colors",
                                                children: "Download Now"
                                            }), u.jsx(so, {
                                                className: "w-5 h-5 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-white"
                                            })]
                                        })]
                                    })
                                })]
                            }), u.jsxs(b.div, {
                                variants: c,
                                className: "relative",
                                children: [u.jsx("div", {
                                    className: "absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-xl"
                                }), u.jsxs("div", {
                                    className: "relative bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10",
                                    children: [u.jsxs("h3", {
                                        className: "text-xl font-bold mb-6 flex items-center gap-2",
                                        children: [u.jsx(ld, {
                                            className: "w-5 h-5"
                                        }), u.jsx("span", {
                                            children: "Latest Updates"
                                        })]
                                    }), n ? u.jsx("div", {
                                        className: "space-y-3",
                                        children: [...Array(5)].map( (d, f) => u.jsx("div", {
                                            className: "animate-pulse",
                                            children: u.jsx("div", {
                                                className: "h-4 bg-white/10 rounded w-3/4"
                                            })
                                        }, f))
                                    }) : i ? u.jsx("p", {
                                        className: "text-red-400",
                                        children: "Failed to load changelog"
                                    }) : u.jsx("div", {
                                        className: "space-y-2 max-h-[300px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent",
                                        children: o.map( (d, f) => u.jsxs(b.div, {
                                            variants: c,
                                            className: "group relative",
                                            children: [u.jsx("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                            }), u.jsxs("div", {
                                                className: "relative p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/5 group-hover:border-white/20",
                                                children: [u.jsx("div", {
                                                    className: "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-white to-gray-500 group-hover:h-full transition-all duration-300 rounded-r-full"
                                                }), u.jsx("p", {
                                                    className: "pl-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors",
                                                    children: d
                                                })]
                                            })]
                                        }, f))
                                    })]
                                })]
                            })]
                        })
                    })]
                })]
            })]
        })]
    })
}
function $S() {
    const e = [{
        title: "Linkvertise",
        image: "https://www.stepstone.de/upload_de/logo/E/logoLinkvertise-Inh-Marc-Winter-255864DE-2101131647.gif",
        description: "Quick and easy download through Linkvertise",
        url: "https://link-center.net/1210123/xeno-v115",
        features: ["Fast Download", "Secure Link", "Easy Process"]
    }, {
        title: "Lootlabs",
        image: "https://s3-eu-west-1.amazonaws.com/tpd/logos/65786726ba1241d21ae5bdd3/0x0.png",
        description: "Faster and simple download through Lootlabs",
        url: "https://lootdest.org/s?UBpeNcSL",
        features: ["Easy Download", "Reliable Service", "Quick Access"]
    }]
      , t = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: .2
            }
        }
    }
      , n = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.02,
            transition: {
                duration: .3,
                ease: "easeInOut"
            }
        }
    }
      , r = {
        hidden: {
            opacity: 0,
            x: -20
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: .3
            }
        }
    };
    return u.jsxs("div", {
        className: "relative min-h-screen bg-black text-white pt-20",
        children: [u.jsx(en, {}), u.jsxs("div", {
            className: "relative max-w-7xl mx-auto px-4 py-16",
            children: [u.jsxs(b.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                className: "text-center space-y-6 mb-16",
                children: [u.jsx(b.h1, {
                    className: "text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent",
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: .2
                    },
                    children: "Choose Your Download Method"
                }), u.jsx(b.p, {
                    className: "text-xl text-gray-400 max-w-2xl mx-auto",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: .3
                    },
                    children: "Select your preferred way to download Xeno"
                })]
            }), u.jsx(b.div, {
                variants: t,
                initial: "hidden",
                animate: "visible",
                className: "grid md:grid-cols-2 gap-8 max-w-5xl mx-auto",
                children: e.map( (i, s) => u.jsxs(b.div, {
                    variants: n,
                    whileHover: "hover",
                    className: "group relative",
                    children: [u.jsx("div", {
                        className: "absolute -inset-1 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                    }), u.jsxs("div", {
                        className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden",
                        children: [u.jsx("div", {
                            className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"
                        }), u.jsx("div", {
                            className: "relative p-8",
                            children: u.jsxs("div", {
                                className: "flex flex-col items-center space-y-6",
                                children: [u.jsxs(b.div, {
                                    className: "relative w-32 h-32",
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    transition: {
                                        duration: .3
                                    },
                                    children: [u.jsx("div", {
                                        className: "absolute inset-0 bg-white/20 rounded-xl blur-xl animate-pulse-slow"
                                    }), u.jsx("img", {
                                        src: i.image,
                                        alt: i.title,
                                        className: "relative w-full h-full object-contain rounded-xl"
                                    })]
                                }), u.jsxs("div", {
                                    className: "text-center space-y-4",
                                    children: [u.jsx("h3", {
                                        className: "text-2xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                                        children: i.title
                                    }), u.jsx("p", {
                                        className: "text-gray-400",
                                        children: i.description
                                    }), u.jsx("div", {
                                        className: "space-y-2",
                                        children: i.features.map( (o, a) => u.jsxs(b.div, {
                                            variants: r,
                                            className: "flex items-center justify-center space-x-2 text-sm text-gray-400",
                                            children: [u.jsx(so, {
                                                className: "w-4 h-4"
                                            }), u.jsx("span", {
                                                children: o
                                            })]
                                        }, a))
                                    }), u.jsxs(b.a, {
                                        href: i.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "inline-flex items-center space-x-2 mt-6 bg-white/5 hover:bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg transition-all duration-300",
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileTap: {
                                            scale: .95
                                        },
                                        children: [u.jsx(oo, {
                                            className: "w-5 h-5 group-hover:translate-y-1 transition-transform"
                                        }), u.jsx("span", {
                                            className: "font-medium",
                                            children: "Download Now"
                                        }), u.jsx(Xp, {
                                            className: "w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })]
                }, i.title))
            })]
        })]
    })
}
function KS() {
    const e = Up()
      , [t,n] = w.useState(!0)
      , [r,i] = w.useState(!1)
      , [s,o] = w.useState(0)
      , [a,l] = w.useState(!1)
      , [c,d] = w.useState(!1)
      , f = "Xeno-v1.1.5-3.zip"
      , h = `/downloads/${f}`;
    w.useEffect( () => {
        if (c) {
            e("/", {
                replace: !0
            });
            return
        }
        if (!( () => {
            try {
                return typeof window.history.pushState == "function"
            } catch {
                return !1
            }
        }
        )()) {
            n(!1);
            return
        }
        const x = () => {
            try {
                const N = Math.floor(Math.random() * 20) + 30
                  , A = Array.from({
                    length: N
                }, () => [ () => String.fromCharCode(Math.floor(Math.random() * 26) + 97), () => String.fromCharCode(Math.floor(Math.random() * 26) + 65), () => String.fromCharCode(Math.floor(Math.random() * 10) + 48), () => "-_~".charAt(Math.floor(Math.random() * 3))][Math.floor(Math.random() * 4)]()).join("");
                window.history.pushState({}, document.title, `/secure-verification/${A}`)
            } catch {
                console.error("URL obfuscation failed")
            }
        }
        ;
        x();
        const S = setInterval(x, 1e3)
          , m = () => {
            try {
                const N = window.outerWidth - window.innerWidth > 160
                  , A = window.outerHeight - window.innerHeight > 160;
                let R = !1;
                try {
                    const F = performance.now();
                    debugger ;R = performance.now() - F > 100
                } catch {}
                if (N || A || R)
                    return d(!0),
                    !0
            } catch {}
            return !1
        }
          , p = () => {
            try {
                if (window.self !== window.top)
                    return d(!0),
                    !0
            } catch {}
            return !1
        }
          , g = N => {
            try {
                if (N.key === "F12" || N.ctrlKey && N.shiftKey && (N.key === "I" || N.key === "J" || N.key === "C") || N.ctrlKey && N.key === "u" || N.ctrlKey && N.key === "s")
                    return N.preventDefault(),
                    N.stopPropagation(),
                    !1
            } catch {}
        }
          , k = N => {
            try {
                return N.preventDefault(),
                !1
            } catch {}
        }
          , j = N => {
            try {
                return N.preventDefault(),
                !1
            } catch {}
        }
          , C = setInterval( () => {
            m(),
            p()
        }
        , 1e3);
        ( () => {
            try {
                const N = () => {}
                ;
                ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml", "trace", "group", "groupCollapsed", "groupEnd", "time", "timeEnd", "profile", "profileEnd", "count", "clear", "table", "console", "exception"].forEach(R => {
                    typeof console[R] == "function" && (console[R] = N)
                }
                )
            } catch {}
        }
        )();
        try {
            window.addEventListener("keydown", g, {
                capture: !0
            }),
            document.addEventListener("contextmenu", k, {
                capture: !0
            }),
            document.addEventListener("selectstart", j, {
                capture: !0
            }),
            document.addEventListener("copy", j, {
                capture: !0
            })
        } catch {}
        return () => {
            try {
                clearInterval(C),
                clearInterval(S),
                window.removeEventListener("keydown", g, {
                    capture: !0
                }),
                document.removeEventListener("contextmenu", k, {
                    capture: !0
                }),
                document.removeEventListener("selectstart", j, {
                    capture: !0
                }),
                document.removeEventListener("copy", j, {
                    capture: !0
                })
            } catch {}
        }
    }
    , [e, c]),
    w.useEffect( () => {
        if (r && s < 100) {
            const y = setInterval( () => {
                o(x => {
                    const S = x + Math.random() * 15;
                    return S > 100 ? 100 : S
                }
                )
            }
            , 500);
            return () => clearInterval(y)
        }
    }
    , [r, s]);
    const v = () => {
        l(!0),
        setTimeout( () => {
            i(!0),
            l(!1),
            setTimeout( () => {
                try {
                    const y = document.createElement("a");
                    y.href = h,
                    y.download = f,
                    y.setAttribute("type", "application/x-rar-compressed"),
                    document.body.appendChild(y),
                    y.click(),
                    document.body.removeChild(y),
                    setTimeout( () => {
                        e("/")
                    }
                    , 3e3)
                } catch (y) {
                    console.error("Download error:", y),
                    e("/")
                }
            }
            , 3500)
        }
        , 2e3)
    }
    ;
    return c ? null : t ? u.jsxs("div", {
        className: "min-h-screen bg-black flex items-center justify-center overflow-hidden",
        children: [u.jsx(en, {}), u.jsx(fi, {
            mode: "wait",
            children: u.jsx(b.div, {
                initial: {
                    opacity: 0,
                    scale: .9,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    scale: .9,
                    y: -20
                },
                transition: {
                    duration: .5
                },
                className: "relative z-10 max-w-md w-full mx-4",
                children: u.jsxs("div", {
                    className: "relative",
                    children: [u.jsx("div", {
                        className: "absolute -inset-1 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-2xl blur-xl opacity-70 animate-pulse-slow"
                    }), u.jsxs("div", {
                        className: "relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden",
                        children: [u.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50"
                        }), u.jsx("div", {
                            className: "absolute inset-0 overflow-hidden opacity-20",
                            children: u.jsx(b.div, {
                                animate: {
                                    backgroundPosition: ["0% 0%", "100% 100%"]
                                },
                                transition: {
                                    duration: 20,
                                    repeat: 1 / 0,
                                    ease: "linear"
                                },
                                className: "absolute inset-0",
                                style: {
                                    backgroundImage: "linear-gradient(45deg, transparent 95%, rgba(255,255,255,0.3) 95%), linear-gradient(-45deg, transparent 95%, rgba(255,255,255,0.3) 95%)",
                                    backgroundSize: "60px 60px"
                                }
                            })
                        }), u.jsx("div", {
                            className: "relative p-8",
                            children: u.jsxs("div", {
                                className: "flex flex-col items-center text-center",
                                children: [u.jsxs(b.div, {
                                    initial: {
                                        y: -20
                                    },
                                    animate: {
                                        y: 0
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                        repeat: 1 / 0,
                                        repeatType: "reverse",
                                        duration: 2
                                    },
                                    className: "relative mb-6",
                                    children: [u.jsx("div", {
                                        className: "absolute -inset-4 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-full blur-xl opacity-70 animate-pulse"
                                    }), u.jsxs("div", {
                                        className: "relative",
                                        children: [u.jsx(b.div, {
                                            animate: {
                                                rotate: 360
                                            },
                                            transition: {
                                                duration: 20,
                                                repeat: 1 / 0,
                                                ease: "linear"
                                            },
                                            className: "absolute inset-0 rounded-full border-2 border-white/20 border-dashed"
                                        }), u.jsx("div", {
                                            className: "bg-gradient-to-br from-white/20 to-white/5 p-4 rounded-full",
                                            children: r ? s < 100 ? u.jsx(oo, {
                                                className: "w-12 h-12 text-white"
                                            }) : u.jsx(od, {
                                                className: "w-12 h-12 text-white"
                                            }) : u.jsx(Qy, {
                                                className: "w-12 h-12 text-white"
                                            })
                                        })]
                                    })]
                                }), u.jsx(b.h2, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: .3
                                    },
                                    className: "text-2xl font-bold mb-2 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                                    children: r ? s < 100 ? "Preparing Download" : "Download Complete" : "Human Verification"
                                }), u.jsx(b.p, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: .5
                                    },
                                    className: "text-gray-400 mb-8",
                                    children: r ? s < 100 ? "Please wait while we prepare your download..." : "Your download has started. Redirecting to home..." : "Verify you're human to access your download"
                                }), r ? u.jsxs(u.Fragment, {
                                    children: [u.jsx("div", {
                                        className: "w-full h-3 bg-white/10 rounded-full overflow-hidden mb-4",
                                        children: u.jsx(b.div, {
                                            initial: {
                                                width: "0%"
                                            },
                                            animate: {
                                                width: `${s}%`
                                            },
                                            className: "h-full bg-gradient-to-r from-white/60 via-white/80 to-white rounded-full"
                                        })
                                    }), u.jsxs("div", {
                                        className: "flex items-center justify-center gap-2 text-sm text-gray-500",
                                        children: [u.jsx(Ya, {
                                            className: "w-4 h-4"
                                        }), u.jsx("span", {
                                            children: "Secure Download"
                                        })]
                                    }), u.jsx(b.div, {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        transition: {
                                            delay: .7
                                        },
                                        className: "mt-8 grid grid-cols-3 gap-4 w-full",
                                        children: ["Verifying", "Preparing", "Ready"].map( (y, x) => u.jsxs("div", {
                                            className: "flex flex-col items-center",
                                            children: [u.jsxs("div", {
                                                className: "relative",
                                                children: [u.jsx("div", {
                                                    className: `w-3 h-3 rounded-full ${s > (x + 1) * 30 ? "bg-gradient-to-r from-white/60 via-white/80 to-white" : "bg-white/30"}`
                                                }), u.jsx(b.div, {
                                                    initial: {
                                                        scale: 0
                                                    },
                                                    animate: {
                                                        scale: s > (x + 1) * 30 ? [1, 1.5, 1] : 0
                                                    },
                                                    transition: {
                                                        duration: .5,
                                                        repeat: 0
                                                    },
                                                    className: "absolute inset-0 bg-white rounded-full blur-sm"
                                                })]
                                            }), u.jsx("span", {
                                                className: "text-xs text-gray-500 mt-2",
                                                children: y
                                            })]
                                        }, y))
                                    })]
                                }) : u.jsxs(b.button, {
                                    onClick: v,
                                    disabled: a,
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: .95
                                    },
                                    className: "group relative overflow-hidden rounded-xl w-full",
                                    children: [u.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white rounded-xl"
                                    }), u.jsx("div", {
                                        className: "absolute inset-[1px] bg-black/90 rounded-[11px] transition-colors group-hover:bg-black/80"
                                    }), u.jsx("div", {
                                        className: "relative px-6 py-4 flex items-center justify-center space-x-2 text-lg font-medium",
                                        children: a ? u.jsxs(u.Fragment, {
                                            children: [u.jsx(tx, {
                                                className: "w-5 h-5 text-white animate-spin"
                                            }), u.jsx("span", {
                                                className: "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                                                children: "Verifying..."
                                            })]
                                        }) : u.jsxs(u.Fragment, {
                                            children: [u.jsx("span", {
                                                className: "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent group-hover:text-white transition-colors",
                                                children: "Verify & Download"
                                            }), u.jsx(so, {
                                                className: "w-5 h-5 text-white group-hover:translate-x-1 transition-transform"
                                            })]
                                        })
                                    })]
                                }), u.jsx(b.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: .8
                                    },
                                    className: "mt-8 flex items-center justify-center gap-8",
                                    children: [{
                                        icon: u.jsx(nx, {
                                            className: "w-5 h-5 text-white/80"
                                        }),
                                        label: "Secure"
                                    }, {
                                        icon: u.jsx(Ya, {
                                            className: "w-5 h-5 text-white/80"
                                        }),
                                        label: "Protected"
                                    }, {
                                        icon: u.jsx(od, {
                                            className: "w-5 h-5 text-white/80"
                                        }),
                                        label: "Verified"
                                    }].map( (y, x) => u.jsxs(b.div, {
                                        initial: {
                                            scale: .8,
                                            opacity: 0
                                        },
                                        animate: {
                                            scale: 1,
                                            opacity: 1
                                        },
                                        transition: {
                                            delay: .9 + x * .1
                                        },
                                        className: "flex flex-col items-center gap-1",
                                        children: [u.jsx("div", {
                                            className: "bg-white/5 p-2 rounded-full backdrop-blur-sm",
                                            children: y.icon
                                        }), u.jsx("div", {
                                            className: "text-xs text-gray-400",
                                            children: y.label
                                        })]
                                    }, y.label))
                                })]
                            })
                        })]
                    })]
                })
            }, r ? "downloading" : "verifying")
        })]
    }) : u.jsx("div", {
        className: "min-h-screen bg-black flex items-center justify-center",
        children: u.jsxs("div", {
            className: "bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-md text-center",
            children: [u.jsx("h2", {
                className: "text-2xl font-bold mb-4 text-white",
                children: "Browser Not Supported"
            }), u.jsx("p", {
                className: "text-gray-400 mb-6",
                children: "Please use a modern browser like Chrome, Firefox, Opera, or Edge to download Xeno."
            }), u.jsx("button", {
                onClick: () => e("/"),
                className: "px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors",
                children: "Return to Home"
            })]
        })
    })
}
function GS() {
    const [e,t] = w.useState([{
        name: "Rizve",
        role: "Owner of Xeno",
        link: "https://github.com/Riz-ve",
        avatar: "",
        discordId: "924133673538830356"
    }, {
        name: "Nano",
        role: "Discord Server Manager",
        link: "https://discord.com/users/808779817977249832",
        avatar: "",
        discordId: "808779817977249832"
    }, {
        name: "Voxlis",
        role: "Domain Contributor",
        link: "https://voxlis.net",
        avatar: "",
        discordId: "1270744029168009258"
    }, {
        name: "Mxx_xx3",
        role: "Website Designer",
        link: "https://mxx3x.vercel.app",
        avatar: "",
        discordId: "1239176576382271499"
    }, {
        name: "Http2",
        role: "Xeno Contributor",
        link: "https://getluna.win",
        avatar: "",
        discordId: "1247924410510348340"
    }, {
        name: "Quivings",
        role: "Xeno Contributor",
        link: "https://getsolara.dev",
        avatar: "",
        discordId: "1325378791308001280"
    }])
      , n = [{
        name: "@xnegati",
        amount: "$200",
        platform: "PayPal"
    }, {
        name: "@doggysecretfree",
        amount: "$100",
        platform: "Patreon"
    }, {
        name: "@ajamu._.",
        amount: "$59.47",
        platform: "PayPal"
    }, {
        name: "@orangeado_",
        amount: "$50",
        platform: "Cash App"
    }, {
        name: "@larrrys.",
        amount: "$30",
        platform: "PayPal"
    }, {
        name: "@upio",
        amount: "$21",
        platform: "Crypto"
    }]
      , r = [{
        name: "@ww00719",
        amount: 21e3
    }, {
        name: "@doggysecretfree",
        amount: 8050
    }, {
        name: "@upio",
        amount: 4270
    }, {
        name: "@pand6a",
        amount: 3500
    }, {
        name: "@vunxa",
        amount: 1400
    }, {
        name: "@ryk_cbaool2025",
        amount: 1400
    }, {
        name: "@dostanhalat",
        amount: 1400
    }];
    return w.useEffect( () => {
        (async () => {
            const s = [...e];
            for (let o = 0; o < s.length; o++) {
                const a = s[o];
                if (a.discordId)
                    try {
                        const l = await fetch(`https://discordlookup.mesalytic.moe/v1/user/${a.discordId}`);
                        if (l.ok) {
                            const c = await l.json();
                            c.avatar && c.avatar.link && (s[o] = {
                                ...a,
                                avatar: c.avatar.link
                            })
                        }
                    } catch (l) {
                        console.error(`Failed to fetch Discord profile for ${a.name}:`, l)
                    }
            }
            t(s)
        }
        )()
    }
    , []),
    u.jsxs("div", {
        className: "relative min-h-screen bg-black text-white pt-20",
        children: [u.jsx(en, {}), u.jsxs("div", {
            className: "relative max-w-6xl mx-auto px-4 py-12",
            children: [u.jsxs(b.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                className: "text-center space-y-4 mb-12",
                children: [u.jsx("h1", {
                    className: "text-5xl sm:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent",
                    children: "Credits"
                }), u.jsx("p", {
                    className: "text-gray-400 max-w-2xl mx-auto text-lg",
                    children: "Thank you to everyone who has contributed to making Xeno possible"
                })]
            }), u.jsxs("div", {
                className: "grid gap-8",
                children: [u.jsxs(b.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6
                    },
                    className: "relative overflow-hidden",
                    children: [u.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl blur-2xl animate-pulse-slow"
                    }), u.jsxs("div", {
                        className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-2xl border border-white/10",
                        children: [u.jsx("div", {
                            className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50"
                        }), u.jsxs("div", {
                            className: "relative p-6",
                            children: [u.jsxs("h2", {
                                className: "text-2xl font-bold mb-6 flex items-center gap-3",
                                children: [u.jsxs("div", {
                                    className: "relative",
                                    children: [u.jsx("div", {
                                        className: "absolute inset-0 bg-white/20 rounded-full blur animate-pulse"
                                    }), u.jsx(Ky, {
                                        className: "w-6 h-6 relative"
                                    })]
                                }), u.jsx("span", {
                                    className: "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                                    children: "Contributors"
                                })]
                            }), u.jsx("div", {
                                className: "overflow-x-auto",
                                children: u.jsxs("table", {
                                    className: "w-full",
                                    children: [u.jsx("thead", {
                                        children: u.jsxs("tr", {
                                            className: "border-b border-white/10",
                                            children: [u.jsx("th", {
                                                className: "text-left py-3 px-4 text-gray-400 font-medium",
                                                children: "Avatar"
                                            }), u.jsx("th", {
                                                className: "text-left py-3 px-4 text-gray-400 font-medium",
                                                children: "Name"
                                            }), u.jsx("th", {
                                                className: "text-left py-3 px-4 text-gray-400 font-medium",
                                                children: "Role"
                                            }), u.jsx("th", {
                                                className: "text-right py-3 px-4 text-gray-400 font-medium",
                                                children: "Link"
                                            })]
                                        })
                                    }), u.jsx("tbody", {
                                        children: e.map( (i, s) => u.jsxs(b.tr, {
                                            initial: {
                                                opacity: 0,
                                                x: -20
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            transition: {
                                                duration: .5,
                                                delay: s * .1
                                            },
                                            className: "group hover:bg-gradient-to-r hover:from-white/5 hover:to-transparent transition-all duration-500",
                                            children: [u.jsx("td", {
                                                className: "py-3 px-4",
                                                children: u.jsxs("div", {
                                                    className: "relative group/avatar",
                                                    children: [u.jsx("div", {
                                                        className: "absolute -inset-1 bg-gradient-to-r from-white/50 to-white/20 rounded-full blur opacity-0 group-hover/avatar:opacity-100 transition-all duration-500"
                                                    }), u.jsx("div", {
                                                        className: "absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full animate-pulse-slow opacity-0 group-hover/avatar:opacity-100"
                                                    }), u.jsx("img", {
                                                        src: i.avatar || "https://cdn.discordapp.com/embed/avatars/0.png",
                                                        alt: i.name,
                                                        className: "w-10 h-10 rounded-full object-cover relative transform group-hover/avatar:scale-105 transition-all duration-500 ring-2 ring-white/10 group-hover/avatar:ring-white/30"
                                                    })]
                                                })
                                            }), u.jsx("td", {
                                                className: "py-3 px-4",
                                                children: u.jsx("span", {
                                                    className: "font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent",
                                                    children: i.name
                                                })
                                            }), u.jsx("td", {
                                                className: "py-3 px-4",
                                                children: u.jsx("span", {
                                                    className: "text-gray-400 group-hover:text-gray-300 transition-colors",
                                                    children: i.role
                                                })
                                            }), u.jsx("td", {
                                                className: "py-3 px-4 text-right",
                                                children: u.jsxs("a", {
                                                    href: i.link,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group/link relative",
                                                    children: [u.jsxs("span", {
                                                        className: "relative",
                                                        children: [u.jsx("span", {
                                                            className: "absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white to-transparent scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500"
                                                        }), "Visit"]
                                                    }), u.jsx(Xp, {
                                                        className: "w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                                                    })]
                                                })
                                            })]
                                        }, i.name))
                                    })]
                                })
                            })]
                        })]
                    })]
                }), u.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-8",
                    children: [u.jsxs(b.div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: .6
                        },
                        className: "relative overflow-hidden group",
                        children: [u.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl blur-2xl animate-pulse-slow"
                        }), u.jsxs("div", {
                            className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-2xl border border-white/10",
                            children: [u.jsx("div", {
                                className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50"
                            }), u.jsxs("div", {
                                className: "relative p-6",
                                children: [u.jsxs("h2", {
                                    className: "text-2xl font-bold mb-6 flex items-center gap-3",
                                    children: [u.jsxs("div", {
                                        className: "relative",
                                        children: [u.jsx("div", {
                                            className: "absolute inset-0 bg-white/20 rounded-full blur animate-pulse"
                                        }), u.jsx(qy, {
                                            className: "w-6 h-6 relative"
                                        })]
                                    }), u.jsx("span", {
                                        className: "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                                        children: "Top Donators"
                                    })]
                                }), u.jsx("div", {
                                    className: "overflow-x-auto",
                                    children: u.jsxs("table", {
                                        className: "w-full",
                                        children: [u.jsx("thead", {
                                            children: u.jsxs("tr", {
                                                className: "border-b border-white/10",
                                                children: [u.jsx("th", {
                                                    className: "text-left py-3 px-4 text-gray-400 font-medium",
                                                    children: "Username"
                                                }), u.jsx("th", {
                                                    className: "text-right py-3 px-4 text-gray-400 font-medium",
                                                    children: "Amount"
                                                }), u.jsx("th", {
                                                    className: "text-right py-3 px-4 text-gray-400 font-medium",
                                                    children: "Platform"
                                                })]
                                            })
                                        }), u.jsx("tbody", {
                                            children: n.map( (i, s) => u.jsxs(b.tr, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 10
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    duration: .3,
                                                    delay: s * .05
                                                },
                                                className: "group hover:bg-gradient-to-r hover:from-white/5 hover:to-transparent transition-all duration-500",
                                                children: [u.jsx("td", {
                                                    className: "py-3 px-4",
                                                    children: u.jsx("span", {
                                                        className: "text-gray-300 group-hover:text-white transition-colors",
                                                        children: i.name
                                                    })
                                                }), u.jsx("td", {
                                                    className: "py-3 px-4 text-right",
                                                    children: u.jsx("span", {
                                                        className: "font-mono text-emerald-400 group-hover:text-emerald-300 transition-colors",
                                                        children: i.amount
                                                    })
                                                }), u.jsx("td", {
                                                    className: "py-3 px-4 text-right",
                                                    children: u.jsx("span", {
                                                        className: "text-gray-500 group-hover:text-gray-400 transition-colors",
                                                        children: i.platform
                                                    })
                                                })]
                                            }, i.name))
                                        })]
                                    })
                                })]
                            })]
                        })]
                    }), u.jsxs(b.div, {
                        initial: {
                            opacity: 0,
                            x: 20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: .6
                        },
                        className: "relative overflow-hidden group",
                        children: [u.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl blur-2xl animate-pulse-slow"
                        }), u.jsxs("div", {
                            className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-2xl border border-white/10",
                            children: [u.jsx("div", {
                                className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50"
                            }), u.jsxs("div", {
                                className: "relative p-6",
                                children: [u.jsxs("h2", {
                                    className: "text-2xl font-bold mb-6 flex items-center gap-3",
                                    children: [u.jsxs("div", {
                                        className: "relative",
                                        children: [u.jsx("div", {
                                            className: "absolute inset-0 bg-white/20 rounded-full blur animate-pulse"
                                        }), u.jsx(Xy, {
                                            className: "w-6 h-6 relative"
                                        })]
                                    }), u.jsx("span", {
                                        className: "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
                                        children: "Robux Donators"
                                    })]
                                }), u.jsx("div", {
                                    className: "overflow-x-auto",
                                    children: u.jsxs("table", {
                                        className: "w-full",
                                        children: [u.jsx("thead", {
                                            children: u.jsxs("tr", {
                                                className: "border-b border-white/10",
                                                children: [u.jsx("th", {
                                                    className: "text-left py-3 px-4 text-gray-400 font-medium",
                                                    children: "Username"
                                                }), u.jsx("th", {
                                                    className: "text-right py-3 px-4 text-gray-400 font-medium",
                                                    children: "Amount"
                                                })]
                                            })
                                        }), u.jsx("tbody", {
                                            children: r.map( (i, s) => u.jsxs(b.tr, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 10
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    duration: .3,
                                                    delay: s * .05
                                                },
                                                className: "group hover:bg-gradient-to-r hover:from-white/5 hover:to-transparent transition-all duration-500",
                                                children: [u.jsx("td", {
                                                    className: "py-3 px-4",
                                                    children: u.jsx("span", {
                                                        className: "text-gray-300 group-hover:text-white transition-colors",
                                                        children: i.name
                                                    })
                                                }), u.jsx("td", {
                                                    className: "py-3 px-4 text-right",
                                                    children: u.jsxs("span", {
                                                        className: "font-mono text-yellow-400 group-hover:text-yellow-300 transition-colors",
                                                        children: [i.amount.toLocaleString(), " Robux"]
                                                    })
                                                })]
                                            }, i.name))
                                        })]
                                    })
                                })]
                            })]
                        })]
                    })]
                })]
            })]
        })]
    })
}
function XS(e, t, n) {
    var r = this
      , i = w.useRef(null)
      , s = w.useRef(0)
      , o = w.useRef(null)
      , a = w.useRef([])
      , l = w.useRef()
      , c = w.useRef()
      , d = w.useRef(e)
      , f = w.useRef(!0);
    d.current = e;
    var h = typeof window < "u"
      , v = !t && t !== 0 && h;
    if (typeof e != "function")
        throw new TypeError("Expected a function");
    t = +t || 0;
    var y = !!(n = n || {}).leading
      , x = !("trailing"in n) || !!n.trailing
      , S = "maxWait"in n
      , m = "debounceOnServer"in n && !!n.debounceOnServer
      , p = S ? Math.max(+n.maxWait || 0, t) : null;
    w.useEffect(function() {
        return f.current = !0,
        function() {
            f.current = !1
        }
    }, []);
    var g = w.useMemo(function() {
        var k = function(R) {
            var F = a.current
              , ce = l.current;
            return a.current = l.current = null,
            s.current = R,
            c.current = d.current.apply(ce, F)
        }
          , j = function(R, F) {
            v && cancelAnimationFrame(o.current),
            o.current = v ? requestAnimationFrame(R) : setTimeout(R, F)
        }
          , C = function(R) {
            if (!f.current)
                return !1;
            var F = R - i.current;
            return !i.current || F >= t || F < 0 || S && R - s.current >= p
        }
          , T = function(R) {
            return o.current = null,
            x && a.current ? k(R) : (a.current = l.current = null,
            c.current)
        }
          , N = function R() {
            var F = Date.now();
            if (C(F))
                return T(F);
            if (f.current) {
                var ce = t - (F - i.current)
                  , De = S ? Math.min(ce, p - (F - s.current)) : ce;
                j(R, De)
            }
        }
          , A = function() {
            if (h || m) {
                var R = Date.now()
                  , F = C(R);
                if (a.current = [].slice.call(arguments),
                l.current = r,
                i.current = R,
                F) {
                    if (!o.current && f.current)
                        return s.current = i.current,
                        j(N, t),
                        y ? k(i.current) : c.current;
                    if (S)
                        return j(N, t),
                        k(i.current)
                }
                return o.current || j(N, t),
                c.current
            }
        };
        return A.cancel = function() {
            o.current && (v ? cancelAnimationFrame(o.current) : clearTimeout(o.current)),
            s.current = 0,
            a.current = i.current = l.current = o.current = null
        }
        ,
        A.isPending = function() {
            return !!o.current
        }
        ,
        A.flush = function() {
            return o.current ? T(Date.now()) : c.current
        }
        ,
        A
    }, [y, S, t, p, x, v, h, m]);
    return g
}
function YS(e, t) {
    return e === t
}
function QS(e, t, n) {
    var r = YS
      , i = w.useRef(e)
      , s = w.useState({})[1]
      , o = XS(w.useCallback(function(l) {
        i.current = l,
        s({})
    }, [s]), t, n)
      , a = w.useRef(e);
    return r(a.current, e) || (o(e),
    a.current = e),
    [i.current, o]
}
const bf = e => {
    switch (e) {
    case "Failed":
        return "text-red-500";
    case "Attaching":
        return "text-yellow-500";
    case "WaitingForUnhook":
        return "text-cyan-500";
    case "Attached":
        return "text-green-500";
    default:
        return "text-gray-500"
    }
}
  , Ef = ["aimbot", "esp", "pet simulator", "doors", "blox fruits", "jailbreak", "royale high", "adopt me", "arsenal", "survival", "brookhaven", "mm2", "simulator", "tycoon", "obby"];
function ZS() {
    var zu;
    const [e,t] = w.useState([])
      , [n,r] = w.useState(!1)
      , [i,s] = w.useState( () => {
        const P = localStorage.getItem("isExecutorMode");
        return P ? JSON.parse(P) : !0
    }
    )
      , [o,a] = w.useState("")
      , [l,c] = w.useState("")
      , [d] = QS(l, 500)
      , [f,h] = w.useState([])
      , [v,y] = w.useState(!0)
      , [x,S] = w.useState(null)
      , [m,p] = w.useState(null)
      , [g,k] = w.useState(null)
      , [j,C] = w.useState(1)
      , [T,N] = w.useState([{
        id: "1",
        title: "New Script",
        content: ""
    }])
      , [A,R] = w.useState("1")
      , [F,ce] = w.useState(null)
      , [De,Pt] = w.useState("")
      , tn = w.useRef(null)
      , nn = "http://localhost:3110/o"
      , J = async () => {
        try {
            const P = await fetch(nn, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (!P.ok)
                throw new Error("Failed to fetch clients");
            const L = await P.json();
            if (!Array.isArray(L))
                throw new Error("Invalid data format: Expected an array");
            const B = L.map(se => !Array.isArray(se) || se.length < 3 ? (console.warn("Skipping invalid client data:", se),
            {
                pid: "N/A",
                username: "Unknown",
                status: "Failed",
                selected: !1
            }) : {
                pid: String(se[0]),
                username: se[1] || "Unknown",
                status: se[3] || 0,
                selected: !1
            });
            t(B),
            S(null)
        } catch (P) {
            console.error("Error fetching clients:", P),
            S("Failed to fetch clients")
        }
    }
    ;
    w.useEffect( () => {
        J();
        const P = setInterval(J, 5e3);
        return () => clearInterval(P)
    }
    , []),
    w.useEffect( () => {
        localStorage.setItem("isExecutorMode", JSON.stringify(i))
    }
    , [i]),
    w.useEffect( () => {
        if (!i) {
            const P = M();
            c(P)
        }
    }
    , [i]),
    w.useEffect( () => {
        i || (C(1),
        h([]),
        I(1))
    }
    , [d, i]),
    w.useEffect( () => {
        j > 1 && !i && I(j)
    }
    , [j]);
    const M = () => {
        const P = Math.floor(Math.random() * Ef.length);
        return Ef[P]
    }
      , I = async P => {
        var L;
        y(!0),
        S(null);
        try {
            const B = "https://api.allorigins.win/raw?url="
              , Ti = `https://scriptblox.com/api/script/search?${new URLSearchParams({
                q: d,
                page: P.toString()
            }).toString()}`
              , mr = await fetch(B + encodeURIComponent(Ti));
            if (!mr.ok)
                throw new Error(`HTTP error! status: ${mr.status}`);
            const bi = await mr.json();
            if (!((L = bi.result) != null && L.scripts))
                throw new Error("Invalid response format");
            const gr = bi.result.scripts.map(Pe => {
                var Bu, Uu, Hu;
                let vr = "";
                return (Bu = Pe.game) != null && Bu.imageUrl && (vr = Pe.game.imageUrl.startsWith("http") ? Pe.game.imageUrl : `https://scriptblox.com${Pe.game.imageUrl}`),
                {
                    title: Pe.title || "Untitled Script",
                    loadstring: Pe.script || "",
                    description: ((Uu = Pe.features) == null ? void 0 : Uu[0]) || ((Hu = Pe.game) == null ? void 0 : Hu.name) || "",
                    imageUrl: vr,
                    slug: Pe.slug || "",
                    isVerified: Pe.verified || !1
                }
            }
            );
            h(Pe => P === 1 ? gr : [...Pe, ...gr])
        } catch (B) {
            console.error("Error fetching scripts:", B),
            S("Failed to load scripts. Please try again later.")
        } finally {
            y(!1)
        }
    }
      , _ = P => {
        t(L => L.map(B => B.pid === P ? {
            ...B,
            selected: !B.selected
        } : B))
    }
      , G = async P => {
        const L = e.filter(B => B.selected).map(B => B.pid);
        if (L.length === 0) {
            S("No clients selected");
            return
        }
        try {
            if (!(await fetch(nn, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain",
                    Clients: JSON.stringify(L)
                },
                body: P
            })).ok)
                throw new Error("Failed to execute script");
            k(P),
            setTimeout( () => k(null), 2e3),
            S(null)
        } catch (B) {
            console.error("Error executing script:", B),
            S("Failed to execute script")
        }
    }
      , ie = async () => {
        const P = T.find(L => L.id === A);
        P && await G(P.content)
    }
      , Pn = async P => {
        await G(P)
    }
      , dt = P => {
        const L = P.target.value;
        a(L),
        c(L === "" ? M() : L)
    }
      , pr = () => {
        a(""),
        c(M()),
        C(1),
        h([])
    }
      , ft = () => {
        const P = String(Date.now())
          , L = {
            id: P,
            title: "New Script",
            content: ""
        };
        N([...T, L]),
        R(P)
    }
      , Tn = (P, L) => {
        if (L.stopPropagation(),
        T.length === 1)
            return;
        const B = T.filter(se => se.id !== P);
        N(B),
        A === P && R(B[0].id)
    }
      , N0 = (P, L) => {
        L.stopPropagation();
        const B = T.find(se => se.id === P);
        B && (Pt(B.title),
        ce(P),
        setTimeout( () => {
            tn.current && (tn.current.focus(),
            tn.current.select())
        }
        , 0))
    }
      , Ou = P => {
        De.trim() && N(T.map(L => L.id === P ? {
            ...L,
            title: De.trim()
        } : L)),
        ce(null)
    }
      , C0 = (P, L) => {
        P.key === "Enter" ? (P.preventDefault(),
        Ou(L)) : P.key === "Escape" && (P.preventDefault(),
        ce(null))
    }
      , P0 = P => {
        P !== void 0 && N(T.map(L => L.id === A ? {
            ...L,
            content: P
        } : L))
    }
      , T0 = () => {
        N(T.map(P => P.id === A ? {
            ...P,
            content: ""
        } : P))
    }
      , b0 = () => {
        const P = T.find(L => L.id === A);
        if (P) {
            const L = new Blob([P.content],{
                type: "text/plain"
            })
              , B = URL.createObjectURL(L)
              , se = document.createElement("a");
            se.href = B,
            se.download = `${P.title}.lua`,
            document.body.appendChild(se),
            se.click(),
            document.body.removeChild(se),
            URL.revokeObjectURL(B)
        }
    }
      , E0 = () => {
        const P = document.createElement("input");
        P.type = "file",
        P.accept = ".lua,.txt",
        P.onchange = L => {
            var se;
            const B = (se = L.target.files) == null ? void 0 : se[0];
            if (B) {
                const Ti = new FileReader;
                Ti.onload = mr => {
                    var vr;
                    const bi = (vr = mr.target) == null ? void 0 : vr.result
                      , gr = String(Date.now())
                      , Pe = {
                        id: gr,
                        title: B.name.replace(/\.[^/.]+$/, ""),
                        content: bi
                    };
                    N([...T, Pe]),
                    R(gr)
                }
                ,
                Ti.readAsText(B)
            }
        }
        ,
        P.click()
    }
    ;
    return u.jsxs("div", {
        className: "relative min-h-screen bg-black text-white pt-24",
        children: [u.jsx(en, {}), u.jsxs("div", {
            className: "relative max-w-7xl mx-auto px-4 py-16",
            children: [u.jsxs(b.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                className: "text-center space-y-8 mb-16",
                children: [u.jsx("h1", {
                    className: "text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent",
                    children: !i && "Script Hub"
                }), u.jsx("p", {
                    className: "text-gray-400 max-w-2xl mx-auto text-lg",
                    children: !i && "Search and discover scripts from the ScriptBlox community"
                })]
            }), u.jsx(fi, {
                mode: "wait",
                children: i ? u.jsxs(b.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -20
                    },
                    className: "relative",
                    children: [u.jsx("div", {
                        className: "absolute -inset-0.5 bg-gradient-to-br from-white/20 to-white/0 rounded-xl blur opacity-75 transition-all duration-500"
                    }), u.jsxs("div", {
                        className: "relative bg-black/50 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden",
                        children: [u.jsxs("div", {
                            className: "flex items-center gap-2 p-4 border-b border-white/10",
                            children: [u.jsxs("div", {
                                className: "flex-1 flex items-center gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent",
                                children: [T.map(P => u.jsxs(b.div, {
                                    className: `group flex items-center gap-2 px-4 py-2 rounded-lg ${A === P.id ? "bg-white/10" : "hover:bg-white/5"} transition-all cursor-pointer min-w-[120px] relative`,
                                    onClick: () => R(P.id),
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    whileTap: {
                                        scale: .98
                                    },
                                    children: [u.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    }), u.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    }), u.jsx(Yy, {
                                        className: "w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity"
                                    }), F === P.id ? u.jsx("input", {
                                        ref: tn,
                                        type: "text",
                                        value: De,
                                        onChange: L => Pt(L.target.value),
                                        onBlur: () => Ou(P.id),
                                        onKeyDown: L => C0(L, P.id),
                                        className: "bg-transparent border-none outline-none text-white w-full",
                                        onClick: L => L.stopPropagation(),
                                        autoFocus: !0
                                    }) : u.jsxs(u.Fragment, {
                                        children: [u.jsx("span", {
                                            className: "flex-1 truncate",
                                            children: P.title
                                        }), u.jsxs("div", {
                                            className: "flex items-center gap-1 z-10",
                                            children: [u.jsx(b.button, {
                                                onClick: L => N0(P.id, L),
                                                className: "p-1 hover:bg-white/10 rounded transition-colors",
                                                whileHover: {
                                                    scale: 1.1
                                                },
                                                whileTap: {
                                                    scale: .9
                                                },
                                                children: u.jsx(sx, {
                                                    className: "w-3 h-3"
                                                })
                                            }), T.length > 1 && u.jsx(b.button, {
                                                onClick: L => Tn(P.id, L),
                                                className: "p-1 hover:bg-white/10 rounded transition-colors",
                                                whileHover: {
                                                    scale: 1.1
                                                },
                                                whileTap: {
                                                    scale: .9
                                                },
                                                children: u.jsx(cd, {
                                                    className: "w-3 h-3"
                                                })
                                            })]
                                        })]
                                    })]
                                }, P.id)), u.jsx(b.button, {
                                    onClick: ft,
                                    className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: .9
                                    },
                                    children: u.jsx(Yp, {
                                        className: "w-4 h-4"
                                    })
                                })]
                            }), u.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [u.jsx(b.button, {
                                    onClick: E0,
                                    className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: .9
                                    },
                                    title: "Open Script",
                                    children: u.jsx(Zy, {
                                        className: "w-4 h-4"
                                    })
                                }), u.jsx(b.button, {
                                    onClick: b0,
                                    className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: .9
                                    },
                                    title: "Save Script",
                                    children: u.jsx(ox, {
                                        className: "w-4 h-4"
                                    })
                                }), u.jsx(b.button, {
                                    onClick: T0,
                                    className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: .9
                                    },
                                    title: "Clear Script",
                                    children: u.jsx(cd, {
                                        className: "w-4 h-4"
                                    })
                                }), u.jsx(b.button, {
                                    onClick: () => s(!1),
                                    className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: .9
                                    },
                                    title: "Script Hub",
                                    children: u.jsx(ad, {
                                        className: "w-4 h-4"
                                    })
                                }), u.jsx(b.button, {
                                    onClick: () => r(!n),
                                    className: `p-2 rounded-lg transition-colors ${n ? "bg-white/10" : "hover:bg-white/10"}`,
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: .9
                                    },
                                    title: "Client Manager",
                                    children: u.jsxs("div", {
                                        className: "relative",
                                        children: [u.jsx(ud, {
                                            className: "w-4 h-4"
                                        }), e.length > 0 && u.jsx("div", {
                                            className: "absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"
                                        })]
                                    })
                                }), u.jsxs(b.button, {
                                    onClick: ie,
                                    className: "flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors",
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: .95
                                    },
                                    children: [u.jsx(Xa, {
                                        className: "w-4 h-4"
                                    }), u.jsx("span", {
                                        children: "Execute"
                                    })]
                                })]
                            })]
                        }), n && u.jsxs("div", {
                            className: "border-b border-white/10 p-4 bg-black/20",
                            children: [u.jsxs("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [u.jsxs("h3", {
                                    className: "text-sm font-medium flex items-center gap-2",
                                    children: [u.jsx(ud, {
                                        className: "w-4 h-4"
                                    }), u.jsx("span", {
                                        children: "Connected Clients"
                                    })]
                                }), u.jsxs("span", {
                                    className: "text-xs text-gray-400",
                                    children: [e.length, " clients"]
                                })]
                            }), u.jsx("div", {
                                className: "space-y-2",
                                children: e.length === 0 ? u.jsxs("div", {
                                    className: "flex items-center gap-2 text-sm text-gray-400 p-4 bg-white/5 rounded-lg",
                                    children: [u.jsx(Kp, {
                                        className: "w-4 h-4"
                                    }), u.jsx("span", {
                                        children: "No clients connected"
                                    })]
                                }) : u.jsx("div", {
                                    className: "grid gap-2",
                                    children: e.map(P => u.jsxs(b.div, {
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        className: "group relative cursor-pointer",
                                        onClick: () => _(P.pid),
                                        children: [u.jsx("div", {
                                            className: "absolute -inset-0.5 bg-gradient-to-br from-white/20 to-transparent rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300"
                                        }), u.jsx("div", {
                                            className: `relative p-3 rounded-lg transition-all duration-300 ${P.selected ? "bg-white/10" : "bg-white/5"}`,
                                            children: u.jsxs("div", {
                                                className: "flex items-center justify-between",
                                                children: [u.jsxs("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [u.jsx("div", {
                                                        className: `w-2 h-2 rounded-full ${bf(P.status)} animate-pulse`
                                                    }), u.jsxs("div", {
                                                        className: "flex flex-col",
                                                        children: [u.jsxs("span", {
                                                            className: "text-sm font-medium",
                                                            children: ["PID: ", P.pid, ' "', P.username, '"']
                                                        }), u.jsx("span", {
                                                            className: `text-xs ${bf(P.status)}`,
                                                            children: P.status
                                                        })]
                                                    })]
                                                }), u.jsx("div", {
                                                    className: `w-5 h-5 rounded flex items-center justify-center ${P.selected ? "bg-white/20 text-white" : "border border-white/40"} transition-colors`,
                                                    children: P.selected && u.jsx(ss, {
                                                        className: "w-4 h-4"
                                                    })
                                                })]
                                            })
                                        })]
                                    }, P.pid))
                                })
                            })]
                        }), u.jsx("div", {
                            className: "h-[600px]",
                            children: u.jsx(R0, {
                                height: "100%",
                                defaultLanguage: "lua",
                                theme: "vs-dark",
                                value: (zu = T.find(P => P.id === A)) == null ? void 0 : zu.content,
                                onChange: P0,
                                options: {
                                    minimap: {
                                        enabled: !1
                                    },
                                    fontSize: 14,
                                    padding: {
                                        top: 20
                                    },
                                    smoothScrolling: !0,
                                    cursorSmoothCaretAnimation: "on",
                                    cursorBlinking: "smooth",
                                    formatOnPaste: !0,
                                    formatOnType: !0
                                }
                            })
                        })]
                    })]
                }, "executor") : u.jsxs(b.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -20
                    },
                    children: [u.jsx("div", {
                        className: "max-w-2xl mx-auto mb-8",
                        children: u.jsxs("div", {
                            className: "relative group",
                            children: [u.jsx("div", {
                                className: "absolute -inset-0.5 bg-gradient-to-r from-white/20 to-white/0 rounded-xl blur opacity-75 group-hover:opacity-100 transition-all duration-500"
                            }), u.jsx("div", {
                                className: "relative bg-black/50 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden",
                                children: u.jsxs("div", {
                                    className: "flex items-center px-4 py-3",
                                    children: [u.jsx(ax, {
                                        className: "w-5 h-5 text-gray-400"
                                    }), u.jsx("input", {
                                        type: "text",
                                        value: o,
                                        onChange: dt,
                                        placeholder: "Search scripts...",
                                        className: "w-full px-4 py-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                                    }), u.jsxs(b.button, {
                                        onClick: () => s(!0),
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileTap: {
                                            scale: .95
                                        },
                                        className: "relative group px-4 py-2 rounded-lg overflow-hidden bg-white/5",
                                        children: [u.jsx("div", {
                                            className: "absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                                        }), u.jsx(ad, {
                                            className: "w-4 h-4"
                                        })]
                                    }), o && u.jsx("button", {
                                        onClick: pr,
                                        className: "p-1 hover:bg-white/10 rounded-full transition-colors ml-2",
                                        title: "Clear search",
                                        children: u.jsx(ux, {
                                            className: "w-4 h-4 text-gray-400"
                                        })
                                    })]
                                })
                            })]
                        })
                    }), x && u.jsx(b.div, {
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "max-w-2xl mx-auto mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center",
                        children: x
                    }), u.jsx("div", {
                        className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                        children: u.jsx(fi, {
                            mode: "wait",
                            children: v && f.length === 0 ? u.jsx(b.div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                className: "col-span-full flex justify-center items-center py-12",
                                children: u.jsx("div", {
                                    className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"
                                })
                            }) : f.map(P => u.jsxs(b.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                className: "group relative",
                                children: [u.jsx("div", {
                                    className: "absolute -inset-0.5 bg-gradient-to-r from-white/20 to-white/0 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"
                                }), u.jsxs("div", {
                                    className: "relative bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden",
                                    children: [u.jsx("div", {
                                        className: "aspect-video w-full overflow-hidden",
                                        children: P.imageUrl ? u.jsx("img", {
                                            src: P.imageUrl,
                                            alt: P.title,
                                            className: "w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300",
                                            onError: L => {
                                                const B = L.target;
                                                B.style.display = "none"
                                            }
                                        }) : u.jsx("div", {
                                            className: "w-full h-full bg-black/30 flex items-center justify-center",
                                            children: u.jsx("span", {
                                                className: "text-gray-500 text-sm",
                                                children: "No image"
                                            })
                                        })
                                    }), u.jsx("div", {
                                        className: "p-6",
                                        children: u.jsxs("div", {
                                            className: "flex flex-col gap-4",
                                            children: [u.jsxs("div", {
                                                className: "flex items-center justify-between",
                                                children: [u.jsx("h2", {
                                                    className: "text-xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent group-hover:text-white transition-colors",
                                                    children: P.title
                                                }), P.isVerified && u.jsxs("div", {
                                                    className: "flex items-center gap-1 px-2 py-1 bg-blue-500/20 rounded",
                                                    children: [u.jsx(Ya, {
                                                        className: "w-4 h-4 text-blue-400"
                                                    }), u.jsx("span", {
                                                        className: "text-xs text-blue-400",
                                                        children: "Verified"
                                                    })]
                                                })]
                                            }), u.jsx("p", {
                                                className: "text-sm text-gray-400 line-clamp-2",
                                                children: P.description
                                            }), u.jsxs("div", {
                                                className: "flex gap-2",
                                                children: [u.jsx(b.button, {
                                                    onClick: () => {
                                                        navigator.clipboard.writeText(P.loadstring),
                                                        p(P.slug),
                                                        setTimeout( () => p(null), 2e3)
                                                    }
                                                    ,
                                                    className: "flex-1 group/btn relative overflow-hidden rounded-lg bg-white/5 hover:bg-white/10 transition-colors",
                                                    children: u.jsx("div", {
                                                        className: "relative px-4 py-2 flex items-center justify-center gap-2 text-sm",
                                                        children: m === P.slug ? u.jsxs(u.Fragment, {
                                                            children: [u.jsx(ss, {
                                                                className: "w-4 h-4 text-green-400"
                                                            }), u.jsx("span", {
                                                                className: "text-green-400",
                                                                children: "Copied!"
                                                            })]
                                                        }) : u.jsxs(u.Fragment, {
                                                            children: [u.jsx(Gp, {
                                                                className: "w-4 h-4 text-white"
                                                            }), u.jsx("span", {
                                                                className: "text-white",
                                                                children: "Copy"
                                                            })]
                                                        })
                                                    })
                                                }), u.jsx(b.button, {
                                                    onClick: () => Pn(P.loadstring),
                                                    className: "flex-1 group/btn relative overflow-hidden rounded-lg bg-white/5 hover:bg-white/10 transition-colors",
                                                    children: u.jsx("div", {
                                                        className: "relative px-4 py-2 flex items-center justify-center gap-2 text-sm",
                                                        children: g === P.loadstring ? u.jsxs(u.Fragment, {
                                                            children: [u.jsx(ss, {
                                                                className: "w-4 h-4 text-green-400"
                                                            }), u.jsx("span", {
                                                                className: "text-green-400",
                                                                children: "Executed!"
                                                            })]
                                                        }) : u.jsxs(u.Fragment, {
                                                            children: [u.jsx(Xa, {
                                                                className: "w-4 h-4 text-white"
                                                            }), u.jsx("span", {
                                                                className: "text-white",
                                                                children: "Execute"
                                                            })]
                                                        })
                                                    })
                                                })]
                                            })]
                                        })
                                    })]
                                })]
                            }, P.slug))
                        })
                    }), !v && f.length > 0 && u.jsxs(b.button, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        onClick: () => C(P => P + 1),
                        className: "mx-auto mt-8 px-6 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2",
                        children: [v ? u.jsx("div", {
                            className: "animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"
                        }) : null, u.jsx("span", {
                            children: "Load More"
                        })]
                    })]
                }, "scripthub")
            })]
        })]
    })
}
const qS = () => u.jsxs("div", {
    className: "relative min-h-screen bg-black text-white flex items-center justify-center",
    children: [u.jsxs("div", {
        className: "relative z-10 text-center space-y-8",
        children: [u.jsxs("div", {
            className: "relative overflow-hidden",
            children: [u.jsx("div", {
                className: "text-8xl font-black tracking-tighter animate-fade-in",
                children: u.jsx("span", {
                    className: "bg-gradient-to-b from-white via-gray-200 to-transparent bg-clip-text text-transparent",
                    children: "404"
                })
            }), u.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
            })]
        }), u.jsx("p", {
            className: "text-gray-400 text-lg max-w-md mx-auto",
            children: "The page you're looking for doesn't exist"
        }), u.jsxs("a", {
            href: "/",
            className: "inline-flex items-center gap-2 px-6 py-2 border border-white/10 rounded-full hover:bg-white/5 transition-all duration-300 group",
            children: [u.jsx($y, {
                className: "w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300"
            }), u.jsx("span", {
                className: "text-sm font-medium",
                children: "Go back home"
            })]
        })]
    }), u.jsx("div", {
        className: "absolute inset-0 overflow-hidden",
        children: u.jsx("div", {
            className: "absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px]"
        })
    })]
});
function JS() {
    const t = !dr().pathname.includes("94195512955915412414");
    return u.jsxs("div", {
        className: "min-h-screen bg-black",
        children: [t && u.jsx(IS, {}), u.jsxs(Dy, {
            children: [u.jsx(it, {
                path: "/",
                element: u.jsx(zS, {})
            }), u.jsx(it, {
                path: "/tutorial",
                element: u.jsx(BS, {})
            }), u.jsx(it, {
                path: "/executor",
                element: u.jsx(ZS, {})
            }), u.jsx(it, {
                path: "/donate",
                element: u.jsx(US, {})
            }), u.jsx(it, {
                path: "/download",
                element: u.jsx(WS, {})
            }), u.jsx(it, {
                path: "/download/step1",
                element: u.jsx($S, {})
            }), u.jsx(it, {
                path: "/credits",
                element: u.jsx(GS, {})
            }), u.jsx(it, {
                path: "/94195512955915412414/6999051b-2aad-4b63-b134-51815e088805",
                element: u.jsx(KS, {})
            }), u.jsx(it, {
                path: "*",
                element: u.jsx(qS, {})
            })]
        }), t && u.jsx(_S, {})]
    })
}
function ek() {
    return u.jsx(Oy, {
        children: u.jsx(JS, {})
    })
}
Ap(document.getElementById("root")).render(u.jsx(w.StrictMode, {
    children: u.jsx(ek, {})
}));
