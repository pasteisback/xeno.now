function Ne(e, t) {
    for (var r = 0; r < t.length; r++) {
        const n = t[r];
        if (typeof n != "string" && !Array.isArray(n)) {
            for (const o in n)
                if (o !== "default" && !(o in e)) {
                    const u = Object.getOwnPropertyDescriptor(n, o);
                    u && Object.defineProperty(e, o, u.get ? u : {
                        enumerable: !0,
                        get: () => n[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
function ze(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Ee = {
    exports: {}
}
  , f = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H = Symbol.for("react.element")
  , He = Symbol.for("react.portal")
  , We = Symbol.for("react.fragment")
  , Be = Symbol.for("react.strict_mode")
  , Ge = Symbol.for("react.profiler")
  , Ke = Symbol.for("react.provider")
  , Ye = Symbol.for("react.context")
  , Je = Symbol.for("react.forward_ref")
  , Qe = Symbol.for("react.suspense")
  , Xe = Symbol.for("react.memo")
  , Ze = Symbol.for("react.lazy")
  , he = Symbol.iterator;
function et(e) {
    return e === null || typeof e != "object" ? null : (e = he && e[he] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Me = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , _e = Object.assign
  , Pe = {};
function L(e, t, r) {
    this.props = e,
    this.context = t,
    this.refs = Pe,
    this.updater = r || Me
}
L.prototype.isReactComponent = {};
L.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
L.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Re() {}
Re.prototype = L.prototype;
function fe(e, t, r) {
    this.props = e,
    this.context = t,
    this.refs = Pe,
    this.updater = r || Me
}
var de = fe.prototype = new Re;
de.constructor = fe;
_e(de, L.prototype);
de.isPureReactComponent = !0;
var ve = Array.isArray
  , $e = Object.prototype.hasOwnProperty
  , pe = {
    current: null
}
  , Ce = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Ie(e, t, r) {
    var n, o = {}, u = null, i = null;
    if (t != null)
        for (n in t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (u = "" + t.key),
        t)
            $e.call(t, n) && !Ce.hasOwnProperty(n) && (o[n] = t[n]);
    var c = arguments.length - 2;
    if (c === 1)
        o.children = r;
    else if (1 < c) {
        for (var l = Array(c), g = 0; g < c; g++)
            l[g] = arguments[g + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (n in c = e.defaultProps,
        c)
            o[n] === void 0 && (o[n] = c[n]);
    return {
        $$typeof: H,
        type: e,
        key: u,
        ref: i,
        props: o,
        _owner: pe.current
    }
}
function tt(e, t) {
    return {
        $$typeof: H,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function ge(e) {
    return typeof e == "object" && e !== null && e.$$typeof === H
}
function rt(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(r) {
        return t[r]
    })
}
var ye = /\/+/g;
function ce(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? rt("" + e.key) : t.toString(36)
}
function Q(e, t, r, n, o) {
    var u = typeof e;
    (u === "undefined" || u === "boolean") && (e = null);
    var i = !1;
    if (e === null)
        i = !0;
    else
        switch (u) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case H:
            case He:
                i = !0
            }
        }
    if (i)
        return i = e,
        o = o(i),
        e = n === "" ? "." + ce(i, 0) : n,
        ve(o) ? (r = "",
        e != null && (r = e.replace(ye, "$&/") + "/"),
        Q(o, t, r, "", function(g) {
            return g
        })) : o != null && (ge(o) && (o = tt(o, r + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(ye, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (i = 0,
    n = n === "" ? "." : n + ":",
    ve(e))
        for (var c = 0; c < e.length; c++) {
            u = e[c];
            var l = n + ce(u, c);
            i += Q(u, t, r, l, o)
        }
    else if (l = et(e),
    typeof l == "function")
        for (e = l.call(e),
        c = 0; !(u = e.next()).done; )
            u = u.value,
            l = n + ce(u, c++),
            i += Q(u, t, r, l, o);
    else if (u === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}
function K(e, t, r) {
    if (e == null)
        return e;
    var n = []
      , o = 0;
    return Q(e, n, "", "", function(u) {
        return t.call(r, u, o++)
    }),
    n
}
function nt(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(r) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = r)
        }, function(r) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = r)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var O = {
    current: null
}
  , X = {
    transition: null
}
  , ot = {
    ReactCurrentDispatcher: O,
    ReactCurrentBatchConfig: X,
    ReactCurrentOwner: pe
};
function Ae() {
    throw Error("act(...) is not supported in production builds of React.")
}
f.Children = {
    map: K,
    forEach: function(e, t, r) {
        K(e, function() {
            t.apply(this, arguments)
        }, r)
    },
    count: function(e) {
        var t = 0;
        return K(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return K(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!ge(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
f.Component = L;
f.Fragment = We;
f.Profiler = Ge;
f.PureComponent = fe;
f.StrictMode = Be;
f.Suspense = Qe;
f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ot;
f.act = Ae;
f.cloneElement = function(e, t, r) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var n = _e({}, e.props)
      , o = e.key
      , u = e.ref
      , i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (u = t.ref,
        i = pe.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var c = e.type.defaultProps;
        for (l in t)
            $e.call(t, l) && !Ce.hasOwnProperty(l) && (n[l] = t[l] === void 0 && c !== void 0 ? c[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        n.children = r;
    else if (1 < l) {
        c = Array(l);
        for (var g = 0; g < l; g++)
            c[g] = arguments[g + 2];
        n.children = c
    }
    return {
        $$typeof: H,
        type: e.type,
        key: o,
        ref: u,
        props: n,
        _owner: i
    }
}
;
f.createContext = function(e) {
    return e = {
        $$typeof: Ye,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Ke,
        _context: e
    },
    e.Consumer = e
}
;
f.createElement = Ie;
f.createFactory = function(e) {
    var t = Ie.bind(null, e);
    return t.type = e,
    t
}
;
f.createRef = function() {
    return {
        current: null
    }
}
;
f.forwardRef = function(e) {
    return {
        $$typeof: Je,
        render: e
    }
}
;
f.isValidElement = ge;
f.lazy = function(e) {
    return {
        $$typeof: Ze,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: nt
    }
}
;
f.memo = function(e, t) {
    return {
        $$typeof: Xe,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
f.startTransition = function(e) {
    var t = X.transition;
    X.transition = {};
    try {
        e()
    } finally {
        X.transition = t
    }
}
;
f.unstable_act = Ae;
f.useCallback = function(e, t) {
    return O.current.useCallback(e, t)
}
;
f.useContext = function(e) {
    return O.current.useContext(e)
}
;
f.useDebugValue = function() {}
;
f.useDeferredValue = function(e) {
    return O.current.useDeferredValue(e)
}
;
f.useEffect = function(e, t) {
    return O.current.useEffect(e, t)
}
;
f.useId = function() {
    return O.current.useId()
}
;
f.useImperativeHandle = function(e, t, r) {
    return O.current.useImperativeHandle(e, t, r)
}
;
f.useInsertionEffect = function(e, t) {
    return O.current.useInsertionEffect(e, t)
}
;
f.useLayoutEffect = function(e, t) {
    return O.current.useLayoutEffect(e, t)
}
;
f.useMemo = function(e, t) {
    return O.current.useMemo(e, t)
}
;
f.useReducer = function(e, t, r) {
    return O.current.useReducer(e, t, r)
}
;
f.useRef = function(e) {
    return O.current.useRef(e)
}
;
f.useState = function(e) {
    return O.current.useState(e)
}
;
f.useSyncExternalStore = function(e, t, r) {
    return O.current.useSyncExternalStore(e, t, r)
}
;
f.useTransition = function() {
    return O.current.useTransition()
}
;
f.version = "18.3.1";
Ee.exports = f;
var s = Ee.exports;
const $ = ze(s)
  , sr = Ne({
    __proto__: null,
    default: $
}, [s]);
function ut(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function me(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function be(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? me(Object(r), !0).forEach(function(n) {
            ut(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : me(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function it(e, t) {
    if (e == null)
        return {};
    var r = {}, n = Object.keys(e), o, u;
    for (u = 0; u < n.length; u++)
        o = n[u],
        !(t.indexOf(o) >= 0) && (r[o] = e[o]);
    return r
}
function ct(e, t) {
    if (e == null)
        return {};
    var r = it(e, t), n, o;
    if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(e);
        for (o = 0; o < u.length; o++)
            n = u[o],
            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}
function at(e, t) {
    return lt(e) || st(e, t) || ft(e, t) || dt()
}
function lt(e) {
    if (Array.isArray(e))
        return e
}
function st(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
        var r = []
          , n = !0
          , o = !1
          , u = void 0;
        try {
            for (var i = e[Symbol.iterator](), c; !(n = (c = i.next()).done) && (r.push(c.value),
            !(t && r.length === t)); n = !0)
                ;
        } catch (l) {
            o = !0,
            u = l
        } finally {
            try {
                !n && i.return != null && i.return()
            } finally {
                if (o)
                    throw u
            }
        }
        return r
    }
}
function ft(e, t) {
    if (e) {
        if (typeof e == "string")
            return we(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set")
            return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return we(e, t)
    }
}
function we(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++)
        n[r] = e[r];
    return n
}
function dt() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function pt(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function Oe(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function je(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Oe(Object(r), !0).forEach(function(n) {
            pt(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Oe(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function gt() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
    return function(n) {
        return t.reduceRight(function(o, u) {
            return u(o)
        }, n)
    }
}
function q(e) {
    return function t() {
        for (var r = this, n = arguments.length, o = new Array(n), u = 0; u < n; u++)
            o[u] = arguments[u];
        return o.length >= e.length ? e.apply(this, o) : function() {
            for (var i = arguments.length, c = new Array(i), l = 0; l < i; l++)
                c[l] = arguments[l];
            return t.apply(r, [].concat(o, c))
        }
    }
}
function Z(e) {
    return {}.toString.call(e).includes("Object")
}
function ht(e) {
    return !Object.keys(e).length
}
function z(e) {
    return typeof e == "function"
}
function vt(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}
function yt(e, t) {
    return Z(t) || P("changeType"),
    Object.keys(t).some(function(r) {
        return !vt(e, r)
    }) && P("changeField"),
    t
}
function mt(e) {
    z(e) || P("selectorType")
}
function bt(e) {
    z(e) || Z(e) || P("handlerType"),
    Z(e) && Object.values(e).some(function(t) {
        return !z(t)
    }) && P("handlersType")
}
function wt(e) {
    e || P("initialIsRequired"),
    Z(e) || P("initialType"),
    ht(e) && P("initialContent")
}
function Ot(e, t) {
    throw new Error(e[t] || e.default)
}
var jt = {
    initialIsRequired: "initial state is required",
    initialType: "initial state should be an object",
    initialContent: "initial state shouldn't be an empty object",
    handlerType: "handler should be an object or a function",
    handlersType: "all handlers should be a functions",
    selectorType: "selector should be a function",
    changeType: "provided value of changes should be an object",
    changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
    default: "an unknown error accured in `state-local` package"
}
  , P = q(Ot)(jt)
  , Y = {
    changes: yt,
    selector: mt,
    handler: bt,
    initial: wt
};
function St(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Y.initial(e),
    Y.handler(t);
    var r = {
        current: e
    }
      , n = q(_t)(r, t)
      , o = q(Mt)(r)
      , u = q(Y.changes)(e)
      , i = q(Et)(r);
    function c() {
        var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(C) {
            return C
        }
        ;
        return Y.selector(g),
        g(r.current)
    }
    function l(g) {
        gt(n, o, u, i)(g)
    }
    return [c, l]
}
function Et(e, t) {
    return z(t) ? t(e.current) : t
}
function Mt(e, t) {
    return e.current = je(je({}, e.current), t),
    t
}
function _t(e, t, r) {
    return z(t) ? t(e.current) : Object.keys(r).forEach(function(n) {
        var o;
        return (o = t[n]) === null || o === void 0 ? void 0 : o.call(t, e.current[n])
    }),
    r
}
var Pt = {
    create: St
}
  , Rt = {
    paths: {
        vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"
    }
};
function $t(e) {
    return function t() {
        for (var r = this, n = arguments.length, o = new Array(n), u = 0; u < n; u++)
            o[u] = arguments[u];
        return o.length >= e.length ? e.apply(this, o) : function() {
            for (var i = arguments.length, c = new Array(i), l = 0; l < i; l++)
                c[l] = arguments[l];
            return t.apply(r, [].concat(o, c))
        }
    }
}
function Ct(e) {
    return {}.toString.call(e).includes("Object")
}
function It(e) {
    return e || Se("configIsRequired"),
    Ct(e) || Se("configType"),
    e.urls ? (At(),
    {
        paths: {
            vs: e.urls.monacoBase
        }
    }) : e
}
function At() {
    console.warn(Te.deprecation)
}
function Tt(e, t) {
    throw new Error(e[t] || e.default)
}
var Te = {
    configIsRequired: "the configuration object is required",
    configType: "the configuration object should be an object",
    default: "an unknown error accured in `@monaco-editor/loader` package",
    deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `
}
  , Se = $t(Tt)(Te)
  , kt = {
    config: It
}
  , Lt = function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
    return function(o) {
        return r.reduceRight(function(u, i) {
            return i(u)
        }, o)
    }
};
function ke(e, t) {
    return Object.keys(t).forEach(function(r) {
        t[r]instanceof Object && e[r] && Object.assign(t[r], ke(e[r], t[r]))
    }),
    be(be({}, e), t)
}
var Dt = {
    type: "cancelation",
    msg: "operation is manually canceled"
};
function ae(e) {
    var t = !1
      , r = new Promise(function(n, o) {
        e.then(function(u) {
            return t ? o(Dt) : n(u)
        }),
        e.catch(o)
    }
    );
    return r.cancel = function() {
        return t = !0
    }
    ,
    r
}
var xt = Pt.create({
    config: Rt,
    isInitialized: !1,
    resolve: null,
    reject: null,
    monaco: null
})
  , Le = at(xt, 2)
  , W = Le[0]
  , ee = Le[1];
function Vt(e) {
    var t = kt.config(e)
      , r = t.monaco
      , n = ct(t, ["monaco"]);
    ee(function(o) {
        return {
            config: ke(o.config, n),
            monaco: r
        }
    })
}
function Ft() {
    var e = W(function(t) {
        var r = t.monaco
          , n = t.isInitialized
          , o = t.resolve;
        return {
            monaco: r,
            isInitialized: n,
            resolve: o
        }
    });
    if (!e.isInitialized) {
        if (ee({
            isInitialized: !0
        }),
        e.monaco)
            return e.resolve(e.monaco),
            ae(le);
        if (window.monaco && window.monaco.editor)
            return De(window.monaco),
            e.resolve(window.monaco),
            ae(le);
        Lt(Ut, Nt)(zt)
    }
    return ae(le)
}
function Ut(e) {
    return document.body.appendChild(e)
}
function qt(e) {
    var t = document.createElement("script");
    return e && (t.src = e),
    t
}
function Nt(e) {
    var t = W(function(n) {
        var o = n.config
          , u = n.reject;
        return {
            config: o,
            reject: u
        }
    })
      , r = qt("".concat(t.config.paths.vs, "/loader.js"));
    return r.onload = function() {
        return e()
    }
    ,
    r.onerror = t.reject,
    r
}
function zt() {
    var e = W(function(r) {
        var n = r.config
          , o = r.resolve
          , u = r.reject;
        return {
            config: n,
            resolve: o,
            reject: u
        }
    })
      , t = window.require;
    t.config(e.config),
    t(["vs/editor/editor.main"], function(r) {
        De(r),
        e.resolve(r)
    }, function(r) {
        e.reject(r)
    })
}
function De(e) {
    W().monaco || ee({
        monaco: e
    })
}
function Ht() {
    return W(function(e) {
        var t = e.monaco;
        return t
    })
}
var le = new Promise(function(e, t) {
    return ee({
        resolve: e,
        reject: t
    })
}
)
  , xe = {
    config: Vt,
    init: Ft,
    __getMonacoInstance: Ht
}
  , Wt = {
    wrapper: {
        display: "flex",
        position: "relative",
        textAlign: "initial"
    },
    fullWidth: {
        width: "100%"
    },
    hide: {
        display: "none"
    }
}
  , se = Wt
  , Bt = {
    container: {
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
}
  , Gt = Bt;
function Kt({children: e}) {
    return $.createElement("div", {
        style: Gt.container
    }, e)
}
var Yt = Kt
  , Jt = Yt;
function Qt({width: e, height: t, isEditorReady: r, loading: n, _ref: o, className: u, wrapperProps: i}) {
    return $.createElement("section", {
        style: {
            ...se.wrapper,
            width: e,
            height: t
        },
        ...i
    }, !r && $.createElement(Jt, null, n), $.createElement("div", {
        ref: o,
        style: {
            ...se.fullWidth,
            ...!r && se.hide
        },
        className: u
    }))
}
var Xt = Qt
  , Ve = s.memo(Xt);
function Zt(e) {
    s.useEffect(e, [])
}
var Fe = Zt;
function er(e, t, r=!0) {
    let n = s.useRef(!0);
    s.useEffect(n.current || !r ? () => {
        n.current = !1
    }
    : e, t)
}
var E = er;
function N() {}
function k(e, t, r, n) {
    return tr(e, n) || rr(e, t, r, n)
}
function tr(e, t) {
    return e.editor.getModel(Ue(e, t))
}
function rr(e, t, r, n) {
    return e.editor.createModel(t, r, n ? Ue(e, n) : void 0)
}
function Ue(e, t) {
    return e.Uri.parse(t)
}
function nr({original: e, modified: t, language: r, originalLanguage: n, modifiedLanguage: o, originalModelPath: u, modifiedModelPath: i, keepCurrentOriginalModel: c=!1, keepCurrentModifiedModel: l=!1, theme: g="light", loading: C="Loading...", options: M={}, height: te="100%", width: re="100%", className: ne, wrapperProps: oe={}, beforeMount: ue=N, onMount: ie=N}) {
    let[j,D] = s.useState(!1)
      , [R,m] = s.useState(!0)
      , b = s.useRef(null)
      , y = s.useRef(null)
      , x = s.useRef(null)
      , w = s.useRef(ie)
      , p = s.useRef(ue)
      , I = s.useRef(!1);
    Fe( () => {
        let a = xe.init();
        return a.then(h => (y.current = h) && m(!1)).catch(h => (h == null ? void 0 : h.type) !== "cancelation" && console.error("Monaco initialization: error:", h)),
        () => b.current ? V() : a.cancel()
    }
    ),
    E( () => {
        if (b.current && y.current) {
            let a = b.current.getOriginalEditor()
              , h = k(y.current, e || "", n || r || "text", u || "");
            h !== a.getModel() && a.setModel(h)
        }
    }
    , [u], j),
    E( () => {
        if (b.current && y.current) {
            let a = b.current.getModifiedEditor()
              , h = k(y.current, t || "", o || r || "text", i || "");
            h !== a.getModel() && a.setModel(h)
        }
    }
    , [i], j),
    E( () => {
        let a = b.current.getModifiedEditor();
        a.getOption(y.current.editor.EditorOption.readOnly) ? a.setValue(t || "") : t !== a.getValue() && (a.executeEdits("", [{
            range: a.getModel().getFullModelRange(),
            text: t || "",
            forceMoveMarkers: !0
        }]),
        a.pushUndoStop())
    }
    , [t], j),
    E( () => {
        var a, h;
        (h = (a = b.current) == null ? void 0 : a.getModel()) == null || h.original.setValue(e || "")
    }
    , [e], j),
    E( () => {
        let {original: a, modified: h} = b.current.getModel();
        y.current.editor.setModelLanguage(a, n || r || "text"),
        y.current.editor.setModelLanguage(h, o || r || "text")
    }
    , [r, n, o], j),
    E( () => {
        var a;
        (a = y.current) == null || a.editor.setTheme(g)
    }
    , [g], j),
    E( () => {
        var a;
        (a = b.current) == null || a.updateOptions(M)
    }
    , [M], j);
    let B = s.useCallback( () => {
        var _;
        if (!y.current)
            return;
        p.current(y.current);
        let a = k(y.current, e || "", n || r || "text", u || "")
          , h = k(y.current, t || "", o || r || "text", i || "");
        (_ = b.current) == null || _.setModel({
            original: a,
            modified: h
        })
    }
    , [r, t, o, e, n, u, i])
      , G = s.useCallback( () => {
        var a;
        !I.current && x.current && (b.current = y.current.editor.createDiffEditor(x.current, {
            automaticLayout: !0,
            ...M
        }),
        B(),
        (a = y.current) == null || a.editor.setTheme(g),
        D(!0),
        I.current = !0)
    }
    , [M, g, B]);
    s.useEffect( () => {
        j && w.current(b.current, y.current)
    }
    , [j]),
    s.useEffect( () => {
        !R && !j && G()
    }
    , [R, j, G]);
    function V() {
        var h, _, A, F;
        let a = (h = b.current) == null ? void 0 : h.getModel();
        c || ((_ = a == null ? void 0 : a.original) == null || _.dispose()),
        l || ((A = a == null ? void 0 : a.modified) == null || A.dispose()),
        (F = b.current) == null || F.dispose()
    }
    return $.createElement(Ve, {
        width: re,
        height: te,
        isEditorReady: j,
        loading: C,
        _ref: x,
        className: ne,
        wrapperProps: oe
    })
}
var or = nr;
s.memo(or);
function ur(e) {
    let t = s.useRef();
    return s.useEffect( () => {
        t.current = e
    }
    , [e]),
    t.current
}
var ir = ur
  , J = new Map;
function cr({defaultValue: e, defaultLanguage: t, defaultPath: r, value: n, language: o, path: u, theme: i="light", line: c, loading: l="Loading...", options: g={}, overrideServices: C={}, saveViewState: M=!0, keepCurrentModel: te=!1, width: re="100%", height: ne="100%", className: oe, wrapperProps: ue={}, beforeMount: ie=N, onMount: j=N, onChange: D, onValidate: R=N}) {
    let[m,b] = s.useState(!1)
      , [y,x] = s.useState(!0)
      , w = s.useRef(null)
      , p = s.useRef(null)
      , I = s.useRef(null)
      , B = s.useRef(j)
      , G = s.useRef(ie)
      , V = s.useRef()
      , a = s.useRef(n)
      , h = ir(u)
      , _ = s.useRef(!1)
      , A = s.useRef(!1);
    Fe( () => {
        let d = xe.init();
        return d.then(v => (w.current = v) && x(!1)).catch(v => (v == null ? void 0 : v.type) !== "cancelation" && console.error("Monaco initialization: error:", v)),
        () => p.current ? qe() : d.cancel()
    }
    ),
    E( () => {
        var v, S, U, T;
        let d = k(w.current, e || n || "", t || o || "", u || r || "");
        d !== ((v = p.current) == null ? void 0 : v.getModel()) && (M && J.set(h, (S = p.current) == null ? void 0 : S.saveViewState()),
        (U = p.current) == null || U.setModel(d),
        M && ((T = p.current) == null || T.restoreViewState(J.get(u))))
    }
    , [u], m),
    E( () => {
        var d;
        (d = p.current) == null || d.updateOptions(g)
    }
    , [g], m),
    E( () => {
        !p.current || n === void 0 || (p.current.getOption(w.current.editor.EditorOption.readOnly) ? p.current.setValue(n) : n !== p.current.getValue() && (A.current = !0,
        p.current.executeEdits("", [{
            range: p.current.getModel().getFullModelRange(),
            text: n,
            forceMoveMarkers: !0
        }]),
        p.current.pushUndoStop(),
        A.current = !1))
    }
    , [n], m),
    E( () => {
        var v, S;
        let d = (v = p.current) == null ? void 0 : v.getModel();
        d && o && ((S = w.current) == null || S.editor.setModelLanguage(d, o))
    }
    , [o], m),
    E( () => {
        var d;
        c !== void 0 && ((d = p.current) == null || d.revealLine(c))
    }
    , [c], m),
    E( () => {
        var d;
        (d = w.current) == null || d.editor.setTheme(i)
    }
    , [i], m);
    let F = s.useCallback( () => {
        var d;
        if (!(!I.current || !w.current) && !_.current) {
            G.current(w.current);
            let v = u || r
              , S = k(w.current, n || e || "", t || o || "", v || "");
            p.current = (d = w.current) == null ? void 0 : d.editor.create(I.current, {
                model: S,
                automaticLayout: !0,
                ...g
            }, C),
            M && p.current.restoreViewState(J.get(v)),
            w.current.editor.setTheme(i),
            c !== void 0 && p.current.revealLine(c),
            b(!0),
            _.current = !0
        }
    }
    , [e, t, r, n, o, u, g, C, M, i, c]);
    s.useEffect( () => {
        m && B.current(p.current, w.current)
    }
    , [m]),
    s.useEffect( () => {
        !y && !m && F()
    }
    , [y, m, F]),
    a.current = n,
    s.useEffect( () => {
        var d, v;
        m && D && ((d = V.current) == null || d.dispose(),
        V.current = (v = p.current) == null ? void 0 : v.onDidChangeModelContent(S => {
            A.current || D(p.current.getValue(), S)
        }
        ))
    }
    , [m, D]),
    s.useEffect( () => {
        if (m) {
            let d = w.current.editor.onDidChangeMarkers(v => {
                var U;
                let S = (U = p.current.getModel()) == null ? void 0 : U.uri;
                if (S && v.find(T => T.path === S.path)) {
                    let T = w.current.editor.getModelMarkers({
                        resource: S
                    });
                    R == null || R(T)
                }
            }
            );
            return () => {
                d == null || d.dispose()
            }
        }
        return () => {}
    }
    , [m, R]);
    function qe() {
        var d, v;
        (d = V.current) == null || d.dispose(),
        te ? M && J.set(u, p.current.saveViewState()) : (v = p.current.getModel()) == null || v.dispose(),
        p.current.dispose()
    }
    return $.createElement(Ve, {
        width: re,
        height: ne,
        isEditorReady: m,
        loading: l,
        _ref: I,
        className: oe,
        wrapperProps: ue
    })
}
var ar = cr
  , lr = s.memo(ar)
  , fr = lr;
export {fr as F, sr as R, s as r};
