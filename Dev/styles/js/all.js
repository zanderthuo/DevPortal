! function() {
    if ("ontouchstart" in window) {
        var e, t, n, i, r, o, s = {};
        e = function(e, t) {
            return Math.abs(e[0] - t[0]) > 5 || Math.abs(e[1] - t[1]) > 5
        }, t = function(e) {
            this.startXY = [e.touches[0].clientX, e.touches[0].clientY], this.threshold = !1
        }, n = function(t) {
            return !this.threshold && void(this.threshold = e(this.startXY, [t.touches[0].clientX, t.touches[0].clientY]))
        }, i = function(t) {
            if (!this.threshold && !e(this.startXY, [t.changedTouches[0].clientX, t.changedTouches[0].clientY])) {
                var n = t.changedTouches[0],
                    i = document.createEvent("MouseEvents");
                i.initMouseEvent("click", !0, !0, window, 0, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), i.simulated = !0, t.target.dispatchEvent(i)
            }
        }, r = function(e) {
            var t = Date.now(),
                n = t - s.time,
                i = e.clientX,
                r = e.clientY,
                a = [Math.abs(s.x - i), Math.abs(s.y - r)],
                u = o(e.target, "A") || e.target,
                l = u.nodeName,
                c = "A" === l,
                f = window.navigator.standalone && c && e.target.getAttribute("href");
            return s.time = t, s.x = i, s.y = r, !((!e.simulated && (n < 500 || n < 1500 && a[0] < 50 && a[1] < 50) || f) && (e.preventDefault(), e.stopPropagation(), !f)) && (f && (window.location = u.getAttribute("href")), void(u && u.classList && (u.classList.add("energize-focus"), window.setTimeout(function() {
                u.classList.remove("energize-focus")
            }, 150))))
        }, o = function(e, t) {
            for (var n = e; n !== document.body;) {
                if (!n || n.nodeName === t) return n;
                n = n.parentNode
            }
            return null
        }, document.addEventListener("touchstart", t, !1), document.addEventListener("touchmove", n, !1), document.addEventListener("touchend", i, !1), document.addEventListener("click", r, !0)
    }
}(),
/*!
 * jQuery JavaScript Library v2.2.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-01-08T20:02Z
 */
function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = oe.type(e);
        return "function" !== n && !oe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e, t, n) {
        if (oe.isFunction(t)) return oe.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return oe.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ge.test(t)) return oe.filter(t, e, n);
            t = oe.filter(t, e)
        }
        return oe.grep(e, function(e) {
            return Z.call(t, e) > -1 !== n
        })
    }

    function r(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = {};
        return oe.each(e.match(we) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        Q.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s), oe.ready()
    }

    function a() {
        this.expando = oe.expando + a.uid++
    }

    function u(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Ae, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ne.test(n) ? oe.parseJSON(n) : n)
                } catch (e) {}
                ke.set(e, t, n)
            } else n = void 0;
        return n
    }

    function l(e, t, n, i) {
        var r, o = 1,
            s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return oe.css(e, t, "")
            },
            u = a(),
            l = n && n[3] || (oe.cssNumber[t] ? "" : "px"),
            c = (oe.cssNumber[t] || "px" !== l && +u) && Le.exec(oe.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do o = o || ".5", c /= o, oe.style(e, t, c + l); while (o !== (o = a() / u) && 1 !== o && --s)
        }
        return n && (c = +c || +u || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = c, i.end = r)), r
    }

    function c(e, t) {
        var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], n) : n
    }

    function f(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Ee.set(e[n], "globalEval", !t || Ee.get(t[n], "globalEval"))
    }

    function d(e, t, n, i, r) {
        for (var o, s, a, u, l, d, h = t.createDocumentFragment(), p = [], g = 0, v = e.length; g < v; g++)
            if (o = e[g], o || 0 === o)
                if ("object" === oe.type(o)) oe.merge(p, o.nodeType ? [o] : o);
                else if (Fe.test(o)) {
            for (s = s || h.appendChild(t.createElement("div")), a = (qe.exec(o) || ["", ""])[1].toLowerCase(), u = Pe[a] || Pe._default, s.innerHTML = u[1] + oe.htmlPrefilter(o) + u[2], d = u[0]; d--;) s = s.lastChild;
            oe.merge(p, s.childNodes), s = h.firstChild, s.textContent = ""
        } else p.push(t.createTextNode(o));
        for (h.textContent = "", g = 0; o = p[g++];)
            if (i && oe.inArray(o, i) > -1) r && r.push(o);
            else if (l = oe.contains(o.ownerDocument, o), s = c(h.appendChild(o), "script"), l && f(s), n)
            for (d = 0; o = s[d++];) He.test(o.type || "") && n.push(o);
        return h
    }

    function h() {
        return !0
    }

    function p() {
        return !1
    }

    function g() {
        try {
            return Q.activeElement
        } catch (e) {}
    }

    function v(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in t) v(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = p;
        else if (!r) return this;
        return 1 === o && (s = r, r = function(e) {
            return oe().off(e), s.apply(this, arguments)
        }, r.guid = s.guid || (s.guid = oe.guid++)), e.each(function() {
            oe.event.add(this, t, r, i, n)
        })
    }

    function m(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
    }

    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function x(e) {
        var t = ze.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function b(e, t) {
        var n, i, r, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (Ee.hasData(e) && (o = Ee.access(e), s = Ee.set(t, o), l = o.events)) {
                delete s.handle, s.events = {};
                for (r in l)
                    for (n = 0, i = l[r].length; n < i; n++) oe.event.add(t, r, l[r][n])
            }
            ke.hasData(e) && (a = ke.access(e), u = oe.extend({}, a), ke.set(t, u))
        }
    }

    function w(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && _e.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function C(e, t, n, i) {
        t = G.apply([], t);
        var r, o, s, a, u, l, f = 0,
            h = e.length,
            p = h - 1,
            g = t[0],
            v = oe.isFunction(g);
        if (v || h > 1 && "string" == typeof g && !ie.checkClone && Be.test(g)) return e.each(function(r) {
            var o = e.eq(r);
            v && (t[0] = g.call(this, r, o.html())), C(o, t, n, i)
        });
        if (h && (r = d(t, e[0].ownerDocument, !1, e, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
            for (s = oe.map(c(r, "script"), y), a = s.length; f < h; f++) u = r, f !== p && (u = oe.clone(u, !0, !0), a && oe.merge(s, c(u, "script"))), n.call(e[f], u, f);
            if (a)
                for (l = s[s.length - 1].ownerDocument, oe.map(s, x), f = 0; f < a; f++) u = s[f], He.test(u.type || "") && !Ee.access(u, "globalEval") && oe.contains(l, u) && (u.src ? oe._evalUrl && oe._evalUrl(u.src) : oe.globalEval(u.textContent.replace(Ve, "")))
        }
        return e
    }

    function S(e, t, n) {
        for (var i, r = t ? oe.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || oe.cleanData(c(i)), i.parentNode && (n && oe.contains(i.ownerDocument, i) && f(c(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function T(e, t) {
        var n = oe(t.createElement(e)).appendTo(t.body),
            i = oe.css(n[0], "display");
        return n.detach(), i
    }

    function E(e) {
        var t = Q,
            n = Ue[e];
        return n || (n = T(e, t), "none" !== n && n || (Xe = (Xe || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Xe[0].contentDocument, t.write(), t.close(), n = T(e, t), Xe.detach()), Ue[e] = n), n
    }

    function k(e, t, n) {
        var i, r, o, s, a = e.style;
        return n = n || Je(e), n && (s = n.getPropertyValue(t) || n[t], "" !== s || oe.contains(e.ownerDocument, e) || (s = oe.style(e, t)), !ie.pixelMarginRight() && Qe.test(s) && Ye.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function N(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function A(e) {
        if (e in it) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--;)
            if (e = nt[n] + t, e in it) return e
    }

    function j(e, t, n) {
        var i = Le.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function L(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += oe.css(e, n + Oe[o], !0, r)), i ? ("content" === n && (s -= oe.css(e, "padding" + Oe[o], !0, r)), "margin" !== n && (s -= oe.css(e, "border" + Oe[o] + "Width", !0, r))) : (s += oe.css(e, "padding" + Oe[o], !0, r), "padding" !== n && (s += oe.css(e, "border" + Oe[o] + "Width", !0, r)));
        return s
    }

    function O(t, n, i) {
        var r = !0,
            o = "width" === n ? t.offsetWidth : t.offsetHeight,
            s = Je(t),
            a = "border-box" === oe.css(t, "boxSizing", !1, s);
        if (Q.msFullscreenElement && e.top !== e && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[n])), o <= 0 || null == o) {
            if (o = k(t, n, s), (o < 0 || null == o) && (o = t.style[n]), Qe.test(o)) return o;
            r = a && (ie.boxSizingReliable() || o === t.style[n]), o = parseFloat(o) || 0
        }
        return o + L(t, n, i || (a ? "border" : "content"), r, s) + "px"
    }

    function D(e, t) {
        for (var n, i, r, o = [], s = 0, a = e.length; s < a; s++) i = e[s], i.style && (o[s] = Ee.get(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && De(i) && (o[s] = Ee.access(i, "olddisplay", E(i.nodeName)))) : (r = De(i), "none" === n && r || Ee.set(i, "olddisplay", r ? n : oe.css(i, "display"))));
        for (s = 0; s < a; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function _(e, t, n, i, r) {
        return new _.prototype.init(e, t, n, i, r)
    }

    function q() {
        return e.setTimeout(function() {
            rt = void 0
        }), rt = oe.now()
    }

    function H(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Oe[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function P(e, t, n) {
        for (var i, r = (R.tweeners[t] || []).concat(R.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function F(e, t, n) {
        var i, r, o, s, a, u, l, c, f = this,
            d = {},
            h = e.style,
            p = e.nodeType && De(e),
            g = Ee.get(e, "fxshow");
        n.queue || (a = oe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
            a.unqueued || u()
        }), a.unqueued++, f.always(function() {
            f.always(function() {
                a.unqueued--, oe.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = oe.css(e, "display"), c = "none" === l ? Ee.get(e, "olddisplay") || E(e.nodeName) : l, "inline" === c && "none" === oe.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function() {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i], st.exec(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i]) continue;
                    p = !0
                }
                d[i] = g && g[i] || oe.style(e, i)
            } else l = void 0;
        if (oe.isEmptyObject(d)) "inline" === ("none" === l ? E(e.nodeName) : l) && (h.display = l);
        else {
            g ? "hidden" in g && (p = g.hidden) : g = Ee.access(e, "fxshow", {}), o && (g.hidden = !p), p ? oe(e).show() : f.done(function() {
                oe(e).hide()
            }), f.done(function() {
                var t;
                Ee.remove(e, "fxshow");
                for (t in d) oe.style(e, t, d[t])
            });
            for (i in d) s = P(p ? g[i] : 0, i, f), i in g || (g[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function $(e, t) {
        var n, i, r, o, s;
        for (n in e)
            if (i = oe.camelCase(n), r = t[i], o = e[n], oe.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), s = oe.cssHooks[i], s && "expand" in s) {
                o = s.expand(o), delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
    }

    function R(e, t, n) {
        var i, r, o = 0,
            s = R.prefilters.length,
            a = oe.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (r) return !1;
                for (var t = rt || q(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, o = 1 - i, s = 0, u = l.tweens.length; s < u; s++) l.tweens[s].run(o);
                return a.notifyWith(e, [l, o, n]), o < 1 && u ? n : (a.resolveWith(e, [l]), !1)
            },
            l = a.promise({
                elem: e,
                props: oe.extend({}, t),
                opts: oe.extend(!0, {
                    specialEasing: {},
                    easing: oe.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: rt || q(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = oe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? l.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) l.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for ($(c, l.opts.specialEasing); o < s; o++)
            if (i = R.prefilters[o].call(l, e, c, l.opts)) return oe.isFunction(i.stop) && (oe._queueHooks(l.elem, l.opts.queue).stop = oe.proxy(i.stop, i)), i;
        return oe.map(c, P, l), oe.isFunction(l.opts.start) && l.opts.start.call(e, l), oe.fx.timer(oe.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function I(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function W(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(we) || [];
            if (oe.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function M(e, t, n, i) {
        function r(a) {
            var u;
            return o[a] = !0, oe.each(e[a] || [], function(e, a) {
                var l = a(t, n, i);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), r(l), !1)
            }), u
        }
        var o = {},
            s = e === Et;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function B(e, t) {
        var n, i, r = oe.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && oe.extend(!0, e, i), e
    }

    function z(e, t, n) {
        for (var i, r, o, s, a = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    u.unshift(r);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (r in n) {
                if (!u[0] || e.converters[r + " " + u[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function V(e, t, n, i) {
        var r, o, s, a, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (s = l[u + " " + o] || l["* " + o], !s)
                for (r in l)
                    if (a = r.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                        s === !0 ? s = l[r] : l[r] !== !0 && (o = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: s ? e : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function X(e, t, n, i) {
        var r;
        if (oe.isArray(t)) oe.each(t, function(t, r) {
            n || jt.test(e) ? i(e, r) : X(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== oe.type(t)) i(e, t);
        else
            for (r in t) X(e + "[" + r + "]", t[r], n, i)
    }

    function U(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var Y = [],
        Q = e.document,
        J = Y.slice,
        G = Y.concat,
        K = Y.push,
        Z = Y.indexOf,
        ee = {},
        te = ee.toString,
        ne = ee.hasOwnProperty,
        ie = {},
        re = "2.2.0",
        oe = function(e, t) {
            return new oe.fn.init(e, t)
        },
        se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        ue = /-([\da-z])/gi,
        le = function(e, t) {
            return t.toUpperCase()
        };
    oe.fn = oe.prototype = {
        jquery: re,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function() {
            return J.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : J.call(this)
        },
        pushStack: function(e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return oe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(oe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(J.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: K,
        sort: Y.sort,
        splice: Y.splice
    }, oe.extend = oe.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || oe.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], i = e[t], s !== i && (l && i && (oe.isPlainObject(i) || (r = oe.isArray(i))) ? (r ? (r = !1, o = n && oe.isArray(n) ? n : []) : o = n && oe.isPlainObject(n) ? n : {}, s[t] = oe.extend(l, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }, oe.extend({
        expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === oe.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            return "object" === oe.type(e) && !e.nodeType && !oe.isWindow(e) && !(e.constructor && !ne.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = oe.trim(e), e && (1 === e.indexOf("use strict") ? (t = Q.createElement("script"), t.text = e, Q.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(ae, "ms-").replace(ue, le)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var i, r = 0;
            if (n(e))
                for (i = e.length; r < i && t.call(e[r], r, e[r]) !== !1; r++);
            else
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(se, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? oe.merge(i, "string" == typeof e ? [e] : e) : K.call(i, e)), i
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : Z.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i, r = [], o = 0, s = e.length, a = !n; o < s; o++) i = !t(e[o], o), i !== a && r.push(e[o]);
            return r
        },
        map: function(e, t, i) {
            var r, o, s = 0,
                a = [];
            if (n(e))
                for (r = e.length; s < r; s++) o = t(e[s], s, i), null != o && a.push(o);
            else
                for (s in e) o = t(e[s], s, i), null != o && a.push(o);
            return G.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            if ("string" == typeof t && (n = e[t], t = e, e = n), oe.isFunction(e)) return i = J.call(arguments, 2), r = function() {
                return e.apply(t || this, i.concat(J.call(arguments)))
            }, r.guid = e.guid = e.guid || oe.guid++, r
        },
        now: Date.now,
        support: ie
    }), "function" == typeof Symbol && (oe.fn[Symbol.iterator] = Y[Symbol.iterator]), oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    });
    var ce =
        /*!
         * Sizzle CSS Selector Engine v2.2.1
         * http://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2015-10-17
         */
        function(e) {
            function t(e, t, n, i) {
                var r, o, s, a, u, l, f, h, p = t && t.ownerDocument,
                    g = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
                if (!i && ((t ? t.ownerDocument || t : I) !== D && O(t), t = t || D, q)) {
                    if (11 !== g && (l = me.exec(e)))
                        if (r = l[1]) {
                            if (9 === g) {
                                if (!(s = t.getElementById(r))) return n;
                                if (s.id === r) return n.push(s), n
                            } else if (p && (s = p.getElementById(r)) && $(t, s) && s.id === r) return n.push(s), n
                        } else {
                            if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                            if ((r = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(r)), n
                        }
                    if (w.qsa && !V[e + " "] && (!H || !H.test(e))) {
                        if (1 !== g) p = t, h = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((a = t.getAttribute("id")) ? a = a.replace(xe, "\\$&") : t.setAttribute("id", a = R), f = E(e), o = f.length, u = de.test(a) ? "#" + a : "[id='" + a + "']"; o--;) f[o] = u + " " + d(f[o]);
                            h = f.join(","), p = ye.test(e) && c(t.parentNode) || t
                        }
                        if (h) try {
                            return K.apply(n, p.querySelectorAll(h)), n
                        } catch (e) {} finally {
                            a === R && t.removeAttribute("id")
                        }
                    }
                }
                return N(e.replace(ae, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[R] = !0, e
            }

            function r(e) {
                var t = D.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) C.attrHandle[n[i]] = t
            }

            function s(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function a(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function u(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function l(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function c(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function f() {}

            function d(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function h(e, t, n) {
                var i = t.dir,
                    r = n && "parentNode" === i,
                    o = M++;
                return t.first ? function(t, n, o) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) return e(t, n, o)
                } : function(t, n, s) {
                    var a, u, l, c = [W, o];
                    if (s) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || r) && e(t, n, s)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) {
                                if (l = t[R] || (t[R] = {}), u = l[t.uniqueID] || (l[t.uniqueID] = {}), (a = u[i]) && a[0] === W && a[1] === o) return c[2] = a[2];
                                if (u[i] = c, c[2] = e(t, n, s)) return !0
                            }
                }
            }

            function p(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function g(e, n, i) {
                for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
                return i
            }

            function v(e, t, n, i, r) {
                for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), l && t.push(a)));
                return s
            }

            function m(e, t, n, r, o, s) {
                return r && !r[R] && (r = m(r)), o && !o[R] && (o = m(o, s)), i(function(i, s, a, u) {
                    var l, c, f, d = [],
                        h = [],
                        p = s.length,
                        m = i || g(t || "*", a.nodeType ? [a] : a, []),
                        y = !e || !i && t ? m : v(m, d, e, a, u),
                        x = n ? o || (i ? e : p || r) ? [] : s : y;
                    if (n && n(y, x, a, u), r)
                        for (l = v(x, h), r(l, [], a, u), c = l.length; c--;)(f = l[c]) && (x[h[c]] = !(y[h[c]] = f));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
                                o(null, x = [], l, u)
                            }
                            for (c = x.length; c--;)(f = x[c]) && (l = o ? ee(i, f) : d[c]) > -1 && (i[l] = !(s[l] = f))
                        }
                    } else x = v(x === s ? x.splice(p, x.length) : x), o ? o(null, s, x, u) : K.apply(s, x)
                })
            }

            function y(e) {
                for (var t, n, i, r = e.length, o = C.relative[e[0].type], s = o || C.relative[" "], a = o ? 1 : 0, u = h(function(e) {
                        return e === t
                    }, s, !0), l = h(function(e) {
                        return ee(t, e) > -1
                    }, s, !0), c = [function(e, n, i) {
                        var r = !o && (i || n !== A) || ((t = n).nodeType ? u(e, n, i) : l(e, n, i));
                        return t = null, r
                    }]; a < r; a++)
                    if (n = C.relative[e[a].type]) c = [h(p(c), n)];
                    else {
                        if (n = C.filter[e[a].type].apply(null, e[a].matches), n[R]) {
                            for (i = ++a; i < r && !C.relative[e[i].type]; i++);
                            return m(a > 1 && p(c), a > 1 && d(e.slice(0, a - 1).concat({
                                value: " " === e[a - 2].type ? "*" : ""
                            })).replace(ae, "$1"), n, a < i && y(e.slice(a, i)), i < r && y(e = e.slice(i)), i < r && d(e))
                        }
                        c.push(n)
                    }
                return p(c)
            }

            function x(e, n) {
                var r = n.length > 0,
                    o = e.length > 0,
                    s = function(i, s, a, u, l) {
                        var c, f, d, h = 0,
                            p = "0",
                            g = i && [],
                            m = [],
                            y = A,
                            x = i || o && C.find.TAG("*", l),
                            b = W += null == y ? 1 : Math.random() || .1,
                            w = x.length;
                        for (l && (A = s === D || s || l); p !== w && null != (c = x[p]); p++) {
                            if (o && c) {
                                for (f = 0, s || c.ownerDocument === D || (O(c), a = !q); d = e[f++];)
                                    if (d(c, s || D, a)) {
                                        u.push(c);
                                        break
                                    }
                                l && (W = b)
                            }
                            r && ((c = !d && c) && h--, i && g.push(c))
                        }
                        if (h += p, r && p !== h) {
                            for (f = 0; d = n[f++];) d(g, m, s, a);
                            if (i) {
                                if (h > 0)
                                    for (; p--;) g[p] || m[p] || (m[p] = J.call(u));
                                m = v(m)
                            }
                            K.apply(u, m), l && !i && m.length > 0 && h + n.length > 1 && t.uniqueSort(u)
                        }
                        return l && (W = b, A = y), g
                    };
                return r ? i(s) : s
            }
            var b, w, C, S, T, E, k, N, A, j, L, O, D, _, q, H, P, F, $, R = "sizzle" + 1 * new Date,
                I = e.document,
                W = 0,
                M = 0,
                B = n(),
                z = n(),
                V = n(),
                X = function(e, t) {
                    return e === t && (L = !0), 0
                },
                U = 1 << 31,
                Y = {}.hasOwnProperty,
                Q = [],
                J = Q.pop,
                G = Q.push,
                K = Q.push,
                Z = Q.slice,
                ee = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                se = new RegExp(ne + "+", "g"),
                ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                ue = new RegExp("^" + ne + "*," + ne + "*"),
                le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                fe = new RegExp(oe),
                de = new RegExp("^" + ie + "$"),
                he = {
                    ID: new RegExp("^#(" + ie + ")"),
                    CLASS: new RegExp("^\\.(" + ie + ")"),
                    TAG: new RegExp("^(" + ie + "|[*])"),
                    ATTR: new RegExp("^" + re),
                    PSEUDO: new RegExp("^" + oe),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                pe = /^(?:input|select|textarea|button)$/i,
                ge = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ye = /[+~]/,
                xe = /'|\\/g,
                be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                we = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                Ce = function() {
                    O()
                };
            try {
                K.apply(Q = Z.call(I.childNodes), I.childNodes), Q[I.childNodes.length].nodeType
            } catch (e) {
                K = {
                    apply: Q.length ? function(e, t) {
                        G.apply(e, Z.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            w = t.support = {}, T = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, O = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : I;
                return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, _ = D.documentElement, q = !T(D), (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), w.attributes = r(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), w.getElementsByTagName = r(function(e) {
                    return e.appendChild(D.createComment("")), !e.getElementsByTagName("*").length
                }), w.getElementsByClassName = ve.test(D.getElementsByClassName), w.getById = r(function(e) {
                    return _.appendChild(e).id = R, !D.getElementsByName || !D.getElementsByName(R).length
                }), w.getById ? (C.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && q) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, C.filter.ID = function(e) {
                    var t = e.replace(be, we);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete C.find.ID, C.filter.ID = function(e) {
                    var t = e.replace(be, we);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), C.find.TAG = w.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, C.find.CLASS = w.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && q) return t.getElementsByClassName(e)
                }, P = [], H = [], (w.qsa = ve.test(D.querySelectorAll)) && (r(function(e) {
                    _.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || H.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + R + "-]").length || H.push("~="), e.querySelectorAll(":checked").length || H.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || H.push(".#.+[+~]")
                }), r(function(e) {
                    var t = D.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && H.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), H.push(",.*:")
                })), (w.matchesSelector = ve.test(F = _.matches || _.webkitMatchesSelector || _.mozMatchesSelector || _.oMatchesSelector || _.msMatchesSelector)) && r(function(e) {
                    w.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), P.push("!=", oe)
                }), H = H.length && new RegExp(H.join("|")), P = P.length && new RegExp(P.join("|")), t = ve.test(_.compareDocumentPosition), $ = t || ve.test(_.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, X = t ? function(e, t) {
                    if (e === t) return L = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === D || e.ownerDocument === I && $(I, e) ? -1 : t === D || t.ownerDocument === I && $(I, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return L = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        u = [t];
                    if (!r || !o) return e === D ? -1 : t === D ? 1 : r ? -1 : o ? 1 : j ? ee(j, e) - ee(j, t) : 0;
                    if (r === o) return s(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) u.unshift(n);
                    for (; a[i] === u[i];) i++;
                    return i ? s(a[i], u[i]) : a[i] === I ? -1 : u[i] === I ? 1 : 0
                }, D) : D
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== D && O(e), n = n.replace(ce, "='$1']"), w.matchesSelector && q && !V[n + " "] && (!P || !P.test(n)) && (!H || !H.test(n))) try {
                    var i = F.call(e, n);
                    if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {}
                return t(n, D, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== D && O(e), $(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== D && O(e);
                var n = C.attrHandle[t.toLowerCase()],
                    i = n && Y.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;
                return void 0 !== i ? i : w.attributes || !q ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (L = !w.detectDuplicates, j = !w.sortStable && e.slice(0), e.sort(X), L) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return j = null, e
            }, S = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += S(t);
                return n
            }, C = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: he,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(be, we).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = B[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(r) {
                            var o = t.attr(r, e);
                            return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, u) {
                            var l, c, f, d, h, p, g = o !== s ? "nextSibling" : "previousSibling",
                                v = t.parentNode,
                                m = a && t.nodeName.toLowerCase(),
                                y = !u && !a,
                                x = !1;
                            if (v) {
                                if (o) {
                                    for (; g;) {
                                        for (d = t; d = d[g];)
                                            if (a ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                                        p = g = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? v.firstChild : v.lastChild], s && y) {
                                    for (d = v, f = d[R] || (d[R] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], h = l[0] === W && l[1], x = h && l[2], d = h && v.childNodes[h]; d = ++h && d && d[g] || (x = h = 0) || p.pop();)
                                        if (1 === d.nodeType && ++x && d === t) {
                                            c[e] = [W, h, x];
                                            break
                                        }
                                } else if (y && (d = t, f = d[R] || (d[R] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], h = l[0] === W && l[1], x = h), x === !1)
                                    for (;
                                        (d = ++h && d && d[g] || (x = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++x || (y && (f = d[R] || (d[R] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [W, x]), d !== t)););
                                return x -= r, x === i || x % i === 0 && x / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var r, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[R] ? o(n) : o.length > 1 ? (r = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, r = o(e, n), s = r.length; s--;) i = ee(e, r[s]), e[i] = !(t[i] = r[s])
                        }) : function(e) {
                            return o(e, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            r = k(e.replace(ae, "$1"));
                        return r[R] ? i(function(e, t, n, i) {
                            for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(be, we),
                            function(t) {
                                return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                            }
                    }),
                    lang: i(function(e) {
                        return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = q ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === _
                    },
                    focus: function(e) {
                        return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !C.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ge.test(e.nodeName)
                    },
                    input: function(e) {
                        return pe.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(e, t) {
                        return [t - 1]
                    }),
                    eq: l(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: l(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: l(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: l(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: l(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, C.pseudos.nth = C.pseudos.eq;
            for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) C.pseudos[b] = a(b);
            for (b in {
                    submit: !0,
                    reset: !0
                }) C.pseudos[b] = u(b);
            return f.prototype = C.filters = C.pseudos, C.setFilters = new f, E = t.tokenize = function(e, n) {
                var i, r, o, s, a, u, l, c = z[e + " "];
                if (c) return n ? 0 : c.slice(0);
                for (a = e, u = [], l = C.preFilter; a;) {
                    i && !(r = ue.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(o = [])), i = !1, (r = le.exec(a)) && (i = r.shift(), o.push({
                        value: i,
                        type: r[0].replace(ae, " ")
                    }), a = a.slice(i.length));
                    for (s in C.filter) !(r = he[s].exec(a)) || l[s] && !(r = l[s](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: s,
                        matches: r
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
            }, k = t.compile = function(e, t) {
                var n, i = [],
                    r = [],
                    o = V[e + " "];
                if (!o) {
                    for (t || (t = E(e)), n = t.length; n--;) o = y(t[n]), o[R] ? i.push(o) : r.push(o);
                    o = V(e, x(r, i)), o.selector = e
                }
                return o
            }, N = t.select = function(e, t, n, i) {
                var r, o, s, a, u, l = "function" == typeof e && e,
                    f = !i && E(e = l.selector || e);
                if (n = n || [], 1 === f.length) {
                    if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && q && C.relative[o[1].type]) {
                        if (t = (C.find.ID(s.matches[0].replace(be, we), t) || [])[0], !t) return n;
                        l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (r = he.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !C.relative[a = s.type]);)
                        if ((u = C.find[a]) && (i = u(s.matches[0].replace(be, we), ye.test(o[0].type) && c(t.parentNode) || t))) {
                            if (o.splice(r, 1), e = i.length && d(o), !e) return K.apply(n, i), n;
                            break
                        }
                }
                return (l || k(e, f))(i, t, !q, n, !t || ye.test(e) && c(t.parentNode) || t), n
            }, w.sortStable = R.split("").sort(X).join("") === R, w.detectDuplicates = !!L, O(), w.sortDetached = r(function(e) {
                return 1 & e.compareDocumentPosition(D.createElement("div"))
            }), r(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), w.attributes && r(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), r(function(e) {
                return null == e.getAttribute("disabled")
            }) || o(te, function(e, t, n) {
                var i;
                if (!n) return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
    oe.find = ce, oe.expr = ce.selectors, oe.expr[":"] = oe.expr.pseudos, oe.uniqueSort = oe.unique = ce.uniqueSort, oe.text = ce.getText, oe.isXMLDoc = ce.isXML, oe.contains = ce.contains;
    var fe = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && oe(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        de = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        he = oe.expr.match.needsContext,
        pe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        ge = /^.[^:#\[\.,]*$/;
    oe.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? oe.find.matchesSelector(i, e) ? [i] : [] : oe.find.matches(e, oe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, oe.fn.extend({
        find: function(e) {
            var t, n = this.length,
                i = [],
                r = this;
            if ("string" != typeof e) return this.pushStack(oe(e).filter(function() {
                for (t = 0; t < n; t++)
                    if (oe.contains(r[t], this)) return !0
            }));
            for (t = 0; t < n; t++) oe.find(e, r[t], i);
            return i = this.pushStack(n > 1 ? oe.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && he.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var ve, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ye = oe.fn.init = function(e, t, n) {
            var i, r;
            if (!e) return this;
            if (n = n || ve, "string" == typeof e) {
                if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : me.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : Q, !0)), pe.test(i[1]) && oe.isPlainObject(t))
                        for (i in t) oe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return r = Q.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Q, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
        };
    ye.prototype = oe.fn, ve = oe(Q);
    var xe = /^(?:parents|prev(?:Until|All))/,
        be = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    oe.fn.extend({
        has: function(e) {
            var t = oe(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (oe.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], s = he.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; i < r; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? oe.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? Z.call(oe(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), oe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return fe(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return fe(e, "parentNode", n)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return fe(e, "nextSibling")
        },
        prevAll: function(e) {
            return fe(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return fe(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return fe(e, "previousSibling", n)
        },
        siblings: function(e) {
            return de((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return de(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || oe.merge([], e.childNodes)
        }
    }, function(e, t) {
        oe.fn[e] = function(n, i) {
            var r = oe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = oe.filter(i, r)), this.length > 1 && (be[e] || oe.uniqueSort(r), xe.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var we = /\S+/g;
    oe.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : oe.extend({}, e);
        var t, n, i, r, s = [],
            a = [],
            u = -1,
            l = function() {
                for (r = e.once, i = t = !0; a.length; u = -1)
                    for (n = a.shift(); ++u < s.length;) s[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = s.length, n = !1);
                e.memory || (n = !1), t = !1, r && (s = n ? [] : "")
            },
            c = {
                add: function() {
                    return s && (n && !t && (u = s.length - 1, a.push(n)), function t(n) {
                        oe.each(n, function(n, i) {
                            oe.isFunction(i) ? e.unique && c.has(i) || s.push(i) : i && i.length && "string" !== oe.type(i) && t(i)
                        })
                    }(arguments), n && !t && l()), this
                },
                remove: function() {
                    return oe.each(arguments, function(e, t) {
                        for (var n;
                            (n = oe.inArray(t, s, n)) > -1;) s.splice(n, 1), n <= u && u--
                    }), this
                },
                has: function(e) {
                    return e ? oe.inArray(e, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return r = a = [], s = n = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return r = a = [], n || (s = n = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, n) {
                    return r || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || l()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, oe.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", oe.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return oe.Deferred(function(n) {
                            oe.each(t, function(t, o) {
                                var s = oe.isFunction(e[t]) && e[t];
                                r[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && oe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? oe.extend(e, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, oe.each(t, function(e, o) {
                var s = o[2],
                    a = o[3];
                i[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = s.fireWith
            }), i.promise(r), e && e.call(r, r), r
        },
        when: function(e) {
            var t, n, i, r = 0,
                o = J.call(arguments),
                s = o.length,
                a = 1 !== s || e && oe.isFunction(e.promise) ? s : 0,
                u = 1 === a ? e : oe.Deferred(),
                l = function(e, n, i) {
                    return function(r) {
                        n[e] = this, i[e] = arguments.length > 1 ? J.call(arguments) : r, i === t ? u.notifyWith(n, i) : --a || u.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), i = new Array(s); r < s; r++) o[r] && oe.isFunction(o[r].promise) ? o[r].promise().progress(l(r, n, t)).done(l(r, i, o)).fail(u.reject) : --a;
            return a || u.resolveWith(i, o), u.promise()
        }
    });
    var Ce;
    oe.fn.ready = function(e) {
        return oe.ready.promise().done(e), this
    }, oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --oe.readyWait : oe.isReady) || (oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (Ce.resolveWith(Q, [oe]), oe.fn.triggerHandler && (oe(Q).triggerHandler("ready"), oe(Q).off("ready"))))
        }
    }), oe.ready.promise = function(t) {
        return Ce || (Ce = oe.Deferred(), "complete" === Q.readyState || "loading" !== Q.readyState && !Q.documentElement.doScroll ? e.setTimeout(oe.ready) : (Q.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s))), Ce.promise(t)
    }, oe.ready.promise();
    var Se = function(e, t, n, i, r, o, s) {
            var a = 0,
                u = e.length,
                l = null == n;
            if ("object" === oe.type(n)) {
                r = !0;
                for (a in n) Se(e, t, a, n[a], !0, o, s)
            } else if (void 0 !== i && (r = !0, oe.isFunction(i) || (s = !0), l && (s ? (t.call(e, i), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(oe(e), n)
                })), t))
                for (; a < u; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        Te = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    a.uid = 1, a.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function(e) {
            if (!Te(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, Te(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[t] = n;
            else
                for (i in t) r[i] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, oe.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i, r, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t) this.register(e);
                else {
                    oe.isArray(t) ? i = t.concat(t.map(oe.camelCase)) : (r = oe.camelCase(t), t in o ? i = [t, r] : (i = r, i = i in o ? [i] : i.match(we) || [])), n = i.length;
                    for (; n--;) delete o[i[n]]
                }(void 0 === t || oe.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !oe.isEmptyObject(t)
        }
    };
    var Ee = new a,
        ke = new a,
        Ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ae = /[A-Z]/g;
    oe.extend({
        hasData: function(e) {
            return ke.hasData(e) || Ee.hasData(e)
        },
        data: function(e, t, n) {
            return ke.access(e, t, n)
        },
        removeData: function(e, t) {
            ke.remove(e, t)
        },
        _data: function(e, t, n) {
            return Ee.access(e, t, n)
        },
        _removeData: function(e, t) {
            Ee.remove(e, t)
        }
    }), oe.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = ke.get(o), 1 === o.nodeType && !Ee.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), u(o, i, r[i])));
                    Ee.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                ke.set(this, e)
            }) : Se(this, function(t) {
                var n, i;
                if (o && void 0 === t) {
                    if (n = ke.get(o, e) || ke.get(o, e.replace(Ae, "-$&").toLowerCase()), void 0 !== n) return n;
                    if (i = oe.camelCase(e), n = ke.get(o, i), void 0 !== n) return n;
                    if (n = u(o, i, void 0), void 0 !== n) return n
                } else i = oe.camelCase(e), this.each(function() {
                    var n = ke.get(this, i);
                    ke.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && ke.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                ke.remove(this, e)
            })
        }
    }), oe.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Ee.get(e, t), n && (!i || oe.isArray(n) ? i = Ee.access(e, t, oe.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = oe.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = oe._queueHooks(e, t),
                s = function() {
                    oe.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Ee.get(e, n) || Ee.access(e, n, {
                empty: oe.Callbacks("once memory").add(function() {
                    Ee.remove(e, [t + "queue", n])
                })
            })
        }
    }), oe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = oe.queue(this, e, t);
                oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                oe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = oe.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = Ee.get(o[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Le = new RegExp("^(?:([+-])=|)(" + je + ")([a-z%]*)$", "i"),
        Oe = ["Top", "Right", "Bottom", "Left"],
        De = function(e, t) {
            return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
        },
        _e = /^(?:checkbox|radio)$/i,
        qe = /<([\w:-]+)/,
        He = /^$|\/(?:java|ecma)script/i,
        Pe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Pe.optgroup = Pe.option, Pe.tbody = Pe.tfoot = Pe.colgroup = Pe.caption = Pe.thead, Pe.th = Pe.td;
    var Fe = /<|&#?\w+;/;
    ! function() {
        var e = Q.createDocumentFragment(),
            t = e.appendChild(Q.createElement("div")),
            n = Q.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var $e = /^key/,
        Re = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ie = /^([^.]*)(?:\.(.+)|)/;
    oe.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, u, l, c, f, d, h, p, g, v = Ee.get(e);
            if (v)
                for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = oe.guid++), (u = v.events) || (u = v.events = {}), (s = v.handle) || (s = v.handle = function(t) {
                        return "undefined" != typeof oe && oe.event.triggered !== t.type ? oe.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(we) || [""], l = t.length; l--;) a = Ie.exec(t[l]) || [], h = g = a[1], p = (a[2] || "").split(".").sort(), h && (f = oe.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, f = oe.event.special[h] || {}, c = oe.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && oe.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (d = u[h]) || (d = u[h] = [], d.delegateCount = 0, f.setup && f.setup.call(e, i, p, s) !== !1 || e.addEventListener && e.addEventListener(h, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), oe.event.global[h] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, u, l, c, f, d, h, p, g, v = Ee.hasData(e) && Ee.get(e);
            if (v && (u = v.events)) {
                for (t = (t || "").match(we) || [""], l = t.length; l--;)
                    if (a = Ie.exec(t[l]) || [], h = g = a[1], p = (a[2] || "").split(".").sort(), h) {
                        for (f = oe.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, d = u[h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) c = d[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !d.length && (f.teardown && f.teardown.call(e, p, v.handle) !== !1 || oe.removeEvent(e, h, v.handle), delete u[h])
                    } else
                        for (h in u) oe.event.remove(e, h + t[l], n, i, !0);
                oe.isEmptyObject(u) && Ee.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = oe.event.fix(e);
            var t, n, i, r, o, s = [],
                a = J.call(arguments),
                u = (Ee.get(this, "events") || {})[e.type] || [],
                l = oe.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (s = oe.event.handlers.call(this, e, u), t = 0;
                    (r = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, i = ((oe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a),
                        void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s = [],
                a = t.delegateCount,
                u = e.target;
            if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], n = 0; n < a; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? oe(r, this).index(u) > -1 : oe.find(r, this, null, [u]).length), i[r] && i.push(o);
                        i.length && s.push({
                            elem: u,
                            handlers: i
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Q, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[oe.expando]) return e;
            var t, n, i, r = e.type,
                o = e,
                s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Re.test(r) ? this.mouseHooks : $e.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new oe.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
            return e.target || (e.target = Q), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== g() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === g() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && oe.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return oe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, oe.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, oe.Event = function(e, t) {
        return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? h : p) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
    }, oe.Event.prototype = {
        constructor: oe.Event,
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = h, e && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = h, e && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = h, e && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        oe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return r && (r === i || oe.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), oe.fn.extend({
        on: function(e, t, n, i) {
            return v(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return v(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, oe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = p), this.each(function() {
                oe.event.remove(this, e, n, t)
            })
        }
    });
    var We = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Me = /<script|<style|<link/i,
        Be = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ze = /^true\/(.*)/,
        Ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    oe.extend({
        htmlPrefilter: function(e) {
            return e.replace(We, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, s, a = e.cloneNode(!0),
                u = oe.contains(e.ownerDocument, e);
            if (!(ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                for (s = c(a), o = c(e), i = 0, r = o.length; i < r; i++) w(o[i], s[i]);
            if (t)
                if (n)
                    for (o = o || c(e), s = s || c(a), i = 0, r = o.length; i < r; i++) b(o[i], s[i]);
                else b(e, a);
            return s = c(a, "script"), s.length > 0 && f(s, !u && c(e, "script")), a
        },
        cleanData: function(e) {
            for (var t, n, i, r = oe.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Te(n)) {
                    if (t = n[Ee.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, t.handle);
                        n[Ee.expando] = void 0
                    }
                    n[ke.expando] && (n[ke.expando] = void 0)
                }
        }
    }), oe.fn.extend({
        domManip: C,
        detach: function(e) {
            return S(this, e, !0)
        },
        remove: function(e) {
            return S(this, e)
        },
        text: function(e) {
            return Se(this, function(e) {
                return void 0 === e ? oe.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return C(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = m(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return C(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = m(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return C(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return C(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (oe.cleanData(c(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return oe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Se(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Me.test(e) && !Pe[(qe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = oe.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(c(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return C(this, arguments, function(t) {
                var n = this.parentNode;
                oe.inArray(this, e) < 0 && (oe.cleanData(c(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        oe.fn[e] = function(e) {
            for (var n, i = [], r = oe(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), oe(r[s])[t](n), K.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Xe, Ue = {
            HTML: "block",
            BODY: "block"
        },
        Ye = /^margin/,
        Qe = new RegExp("^(" + je + ")(?!px)[a-z%]+$", "i"),
        Je = function(t) {
            var n = t.ownerDocument.defaultView;
            return n.opener || (n = e), n.getComputedStyle(t)
        },
        Ge = function(e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = s[o];
            return r
        },
        Ke = Q.documentElement;
    ! function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ke.appendChild(s);
            var t = e.getComputedStyle(a);
            n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", r = "4px" === t.marginRight, Ke.removeChild(s)
        }
        var n, i, r, o, s = Q.createElement("div"),
            a = Q.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), oe.extend(ie, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == i && t(), i
            },
            pixelMarginRight: function() {
                return null == i && t(), r
            },
            reliableMarginLeft: function() {
                return null == i && t(), o
            },
            reliableMarginRight: function() {
                var t, n = a.appendChild(Q.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Ke.appendChild(s), t = !parseFloat(e.getComputedStyle(n).marginRight), Ke.removeChild(s), a.removeChild(n), t
            }
        }))
    }();
    var Ze = /^(none|table(?!-c[ea]).+)/,
        et = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        tt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        nt = ["Webkit", "O", "Moz", "ms"],
        it = Q.createElement("div").style;
    oe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = k(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = oe.camelCase(t),
                    u = e.style;
                return t = oe.cssProps[a] || (oe.cssProps[a] = A(a) || a), s = oe.cssHooks[t] || oe.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t] : (o = typeof n, "string" === o && (r = Le.exec(n)) && r[1] && (n = l(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (oe.cssNumber[a] ? "" : "px")), ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (u[t] = n)), void 0)
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = oe.camelCase(t);
            return t = oe.cssProps[a] || (oe.cssProps[a] = A(a) || a), s = oe.cssHooks[t] || oe.cssHooks[a], s && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = k(e, t, i)), "normal" === r && t in tt && (r = tt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
        }
    }), oe.each(["height", "width"], function(e, t) {
        oe.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return Ze.test(oe.css(e, "display")) && 0 === e.offsetWidth ? Ge(e, et, function() {
                    return O(e, t, i)
                }) : O(e, t, i)
            },
            set: function(e, n, i) {
                var r, o = i && Je(e),
                    s = i && L(e, t, i, "border-box" === oe.css(e, "boxSizing", !1, o), o);
                return s && (r = Le.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = oe.css(e, t)), j(e, n, s)
            }
        }
    }), oe.cssHooks.marginLeft = N(ie.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(k(e, "marginLeft")) || e.getBoundingClientRect().left - Ge(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), oe.cssHooks.marginRight = N(ie.reliableMarginRight, function(e, t) {
        if (t) return Ge(e, {
            display: "inline-block"
        }, k, [e, "marginRight"])
    }), oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        oe.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Oe[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, Ye.test(e) || (oe.cssHooks[e + t].set = j)
    }), oe.fn.extend({
        css: function(e, t) {
            return Se(this, function(e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (oe.isArray(t)) {
                    for (i = Je(e), r = t.length; s < r; s++) o[t[s]] = oe.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return D(this, !0)
        },
        hide: function() {
            return D(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                De(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), oe.Tween = _, _.prototype = {
        constructor: _,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || oe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (oe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = _.propHooks[this.prop];
            return e && e.get ? e.get(this) : _.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = _.propHooks[this.prop];
            return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : _.propHooks._default.set(this), this
        }
    }, _.prototype.init.prototype = _.prototype, _.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : oe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, _.propHooks.scrollTop = _.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, oe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, oe.fx = _.prototype.init, oe.fx.step = {};
    var rt, ot, st = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;
    oe.Animation = oe.extend(R, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return l(n.elem, e, Le.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(we);
                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], R.tweeners[n] = R.tweeners[n] || [], R.tweeners[n].unshift(t)
            },
            prefilters: [F],
            prefilter: function(e, t) {
                t ? R.prefilters.unshift(e) : R.prefilters.push(e)
            }
        }), oe.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? oe.extend({}, e) : {
                complete: n || !n && t || oe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !oe.isFunction(t) && t
            };
            return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
            }, i
        }, oe.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(De).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = oe.isEmptyObject(e),
                    o = oe.speed(t, n, i),
                    s = function() {
                        var t = R(this, oe.extend({}, e), o);
                        (r || Ee.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = oe.timers,
                        s = Ee.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && at.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    !t && n || oe.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = Ee.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = oe.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, oe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), oe.each(["toggle", "show", "hide"], function(e, t) {
            var n = oe.fn[t];
            oe.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(H(t, !0), e, i, r)
            }
        }), oe.each({
            slideDown: H("show"),
            slideUp: H("hide"),
            slideToggle: H("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            oe.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), oe.timers = [], oe.fx.tick = function() {
            var e, t = 0,
                n = oe.timers;
            for (rt = oe.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || oe.fx.stop(), rt = void 0
        }, oe.fx.timer = function(e) {
            oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
        }, oe.fx.interval = 13, oe.fx.start = function() {
            ot || (ot = e.setInterval(oe.fx.tick, oe.fx.interval))
        }, oe.fx.stop = function() {
            e.clearInterval(ot), ot = null
        }, oe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, oe.fn.delay = function(t, n) {
            return t = oe.fx ? oe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function() {
                    e.clearTimeout(r)
                }
            })
        },
        function() {
            var e = Q.createElement("input"),
                t = Q.createElement("select"),
                n = t.appendChild(Q.createElement("option"));
            e.type = "checkbox", ie.checkOn = "" !== e.value, ie.optSelected = n.selected, t.disabled = !0, ie.optDisabled = !n.disabled, e = Q.createElement("input"), e.value = "t", e.type = "radio", ie.radioValue = "t" === e.value
        }();
    var ut, lt = oe.expr.attrHandle;
    oe.fn.extend({
        attr: function(e, t) {
            return Se(this, oe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                oe.removeAttr(this, e)
            })
        }
    }), oe.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? oe.prop(e, t, n) : (1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(), r = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void oe.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = oe.find.attr(e, t), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ie.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i, r = 0,
                o = t && t.match(we);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) i = oe.propFix[n] || n, oe.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        }
    }), ut = {
        set: function(e, t, n) {
            return t === !1 ? oe.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = lt[t] || oe.find.attr;
        lt[t] = function(e, t, i) {
            var r, o;
            return i || (o = lt[t], lt[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, lt[t] = o), r
        }
    });
    var ct = /^(?:input|select|textarea|button)$/i,
        ft = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function(e, t) {
            return Se(this, oe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[oe.propFix[e] || e]
            })
        }
    }), oe.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && oe.isXMLDoc(e) || (t = oe.propFix[t] || t, r = oe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ct.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), ie.optSelected || (oe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        oe.propFix[this.toLowerCase()] = this
    });
    var dt = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, s, a, u = 0;
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).addClass(e.call(this, t, I(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(we) || []; n = this[u++];)
                    if (r = I(n), i = 1 === n.nodeType && (" " + r + " ").replace(dt, " ")) {
                        for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        a = oe.trim(i), r !== a && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s, a, u = 0;
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).removeClass(e.call(this, t, I(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(we) || []; n = this[u++];)
                    if (r = I(n), i = 1 === n.nodeType && (" " + r + " ").replace(dt, " ")) {
                        for (s = 0; o = t[s++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        a = oe.trim(i), r !== a && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function(n) {
                oe(this).toggleClass(e.call(this, n, I(this), t), t)
            }) : this.each(function() {
                var t, i, r, o;
                if ("string" === n)
                    for (i = 0, r = oe(this), o = e.match(we) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = I(this), t && Ee.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Ee.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + I(n) + " ").replace(dt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var ht = /\r/g;
    oe.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0]; {
                if (arguments.length) return i = oe.isFunction(e), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, oe(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : oe.isArray(r) && (r = oe.map(r, function(e) {
                        return null == e ? "" : e + ""
                    })), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                });
                if (r) return t = oe.valHooks[r.type] || oe.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(ht, "") : null == n ? "" : n)
            }
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    return oe.trim(e.value)
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, s = o ? null : [], a = o ? r + 1 : i.length, u = r < 0 ? a : o ? r : 0; u < a; u++)
                        if (n = i[u], (n.selected || u === r) && (ie.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = oe(n).val(), o) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = oe.makeArray(t), s = r.length; s--;) i = r[s], (i.selected = oe.inArray(oe.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function() {
        oe.valHooks[this] = {
            set: function(e, t) {
                if (oe.isArray(t)) return e.checked = oe.inArray(oe(e).val(), t) > -1
            }
        }, ie.checkOn || (oe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var pt = /^(?:focusinfocus|focusoutblur)$/;
    oe.extend(oe.event, {
        trigger: function(t, n, i, r) {
            var o, s, a, u, l, c, f, d = [i || Q],
                h = ne.call(t, "type") ? t.type : t,
                p = ne.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || Q, 3 !== i.nodeType && 8 !== i.nodeType && !pt.test(h + oe.event.triggered) && (h.indexOf(".") > -1 && (p = h.split("."), h = p.shift(), p.sort()), l = h.indexOf(":") < 0 && "on" + h, t = t[oe.expando] ? t : new oe.Event(h, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : oe.makeArray(n, [t]), f = oe.event.special[h] || {}, r || !f.trigger || f.trigger.apply(i, n) !== !1)) {
                if (!r && !f.noBubble && !oe.isWindow(i)) {
                    for (u = f.delegateType || h, pt.test(u + h) || (s = s.parentNode); s; s = s.parentNode) d.push(s), a = s;
                    a === (i.ownerDocument || Q) && d.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || h, c = (Ee.get(s, "events") || {})[t.type] && Ee.get(s, "handle"), c && c.apply(s, n), c = l && s[l], c && c.apply && Te(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = h, r || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !Te(i) || l && oe.isFunction(i[h]) && !oe.isWindow(i) && (a = i[l], a && (i[l] = null), oe.event.triggered = h, i[h](), oe.event.triggered = void 0, a && (i[l] = a)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = oe.extend(new oe.Event, n, {
                type: e,
                isSimulated: !0
            });
            oe.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
        }
    }), oe.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                oe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return oe.event.trigger(e, t, n, !0)
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        oe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), oe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), ie.focusin = "onfocusin" in e, ie.focusin || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            oe.event.simulate(t, e.target, oe.event.fix(e))
        };
        oe.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = Ee.access(i, t);
                r || i.addEventListener(e, n, !0), Ee.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = Ee.access(i, t) - 1;
                r ? Ee.access(i, t, r) : (i.removeEventListener(e, n, !0), Ee.remove(i, t))
            }
        }
    });
    var gt = e.location,
        vt = oe.now(),
        mt = /\?/;
    oe.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, oe.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
    };
    var yt = /#.*$/,
        xt = /([?&])_=[^&]*/,
        bt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        wt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ct = /^(?:GET|HEAD)$/,
        St = /^\/\//,
        Tt = {},
        Et = {},
        kt = "*/".concat("*"),
        Nt = Q.createElement("a");
    Nt.href = gt.href, oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gt.href,
            type: "GET",
            isLocal: wt.test(gt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": kt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? B(B(e, oe.ajaxSettings), t) : B(oe.ajaxSettings, e)
        },
        ajaxPrefilter: W(Tt),
        ajaxTransport: W(Et),
        ajax: function(t, n) {
            function i(t, n, i, a) {
                var l, f, y, x, w, S = n;
                2 !== b && (b = 2, u && e.clearTimeout(u), r = void 0, s = a || "", C.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, i && (x = z(d, C, i)), x = V(d, x, C, l), l ? (d.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (oe.lastModified[o] = w), w = C.getResponseHeader("etag"), w && (oe.etag[o] = w)), 204 === t || "HEAD" === d.type ? S = "nocontent" : 304 === t ? S = "notmodified" : (S = x.state, f = x.data, y = x.error, l = !y)) : (y = S, !t && S || (S = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || S) + "", l ? g.resolveWith(h, [f, S, C]) : g.rejectWith(h, [C, S, y]), C.statusCode(m), m = void 0, c && p.trigger(l ? "ajaxSuccess" : "ajaxError", [C, d, l ? f : y]), v.fireWith(h, [C, S]), c && (p.trigger("ajaxComplete", [C, d]), --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, s, a, u, l, c, f, d = oe.ajaxSetup({}, n),
                h = d.context || d,
                p = d.context && (h.nodeType || h.jquery) ? oe(h) : oe.event,
                g = oe.Deferred(),
                v = oe.Callbacks("once memory"),
                m = d.statusCode || {},
                y = {},
                x = {},
                b = 0,
                w = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!a)
                                for (a = {}; t = bt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = x[n] = x[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (b < 2)
                                for (t in e) m[t] = [m[t], e[t]];
                            else C.always(e[C.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return r && r.abort(t), i(0, t), this
                    }
                };
            if (g.promise(C).complete = v.add, C.success = C.done, C.error = C.fail, d.url = ((t || d.url || gt.href) + "").replace(yt, "").replace(St, gt.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = oe.trim(d.dataType || "*").toLowerCase().match(we) || [""], null == d.crossDomain) {
                l = Q.createElement("a");
                try {
                    l.href = d.url, l.href = l.href, d.crossDomain = Nt.protocol + "//" + Nt.host != l.protocol + "//" + l.host
                } catch (e) {
                    d.crossDomain = !0
                }
            }
            if (d.data && d.processData && "string" != typeof d.data && (d.data = oe.param(d.data, d.traditional)), M(Tt, d, n, C), 2 === b) return C;
            c = oe.event && d.global, c && 0 === oe.active++ && oe.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ct.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (mt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = xt.test(o) ? o.replace(xt, "$1_=" + vt++) : o + (mt.test(o) ? "&" : "?") + "_=" + vt++)), d.ifModified && (oe.lastModified[o] && C.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && C.setRequestHeader("If-None-Match", oe.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", d.contentType), C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + kt + "; q=0.01" : "") : d.accepts["*"]);
            for (f in d.headers) C.setRequestHeader(f, d.headers[f]);
            if (d.beforeSend && (d.beforeSend.call(h, C, d) === !1 || 2 === b)) return C.abort();
            w = "abort";
            for (f in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) C[f](d[f]);
            if (r = M(Et, d, n, C)) {
                if (C.readyState = 1, c && p.trigger("ajaxSend", [C, d]), 2 === b) return C;
                d.async && d.timeout > 0 && (u = e.setTimeout(function() {
                    C.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, r.send(y, i)
                } catch (e) {
                    if (!(b < 2)) throw e;
                    i(-1, e)
                }
            } else i(-1, "No Transport");
            return C
        },
        getJSON: function(e, t, n) {
            return oe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }), oe.each(["get", "post"], function(e, t) {
        oe[t] = function(e, n, i, r) {
            return oe.isFunction(n) && (r = r || i, i = n, n = void 0), oe.ajax(oe.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, oe.isPlainObject(e) && e))
        }
    }), oe._evalUrl = function(e) {
        return oe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, oe.fn.extend({
        wrapAll: function(e) {
            var t;
            return oe.isFunction(e) ? this.each(function(t) {
                oe(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = oe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return oe.isFunction(e) ? this.each(function(t) {
                oe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = oe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = oe.isFunction(e);
            return this.each(function(n) {
                oe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function(e) {
        return !oe.expr.filters.visible(e)
    }, oe.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var At = /%20/g,
        jt = /\[\]$/,
        Lt = /\r?\n/g,
        Ot = /^(?:submit|button|image|reset|file)$/i,
        Dt = /^(?:input|select|textarea|keygen)/i;
    oe.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                t = oe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) X(n, e[n], t, r);
        return i.join("&").replace(At, "+")
    }, oe.fn.extend({
        serialize: function() {
            return oe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && Dt.test(this.nodeName) && !Ot.test(e) && (this.checked || !_e.test(e))
            }).map(function(e, t) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Lt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Lt, "\r\n")
                }
            }).get()
        }
    }), oe.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var _t = {
            0: 200,
            1223: 204
        },
        qt = oe.ajaxSettings.xhr();
    ie.cors = !!qt && "withCredentials" in qt, ie.ajax = qt = !!qt, oe.ajaxTransport(function(t) {
        var n, i;
        if (ie.cors || qt && !t.crossDomain) return {
            send: function(r, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r) a.setRequestHeader(s, r[s]);
                n = function(e) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(_t[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return oe.globalEval(e), e
            }
        }
    }), oe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), oe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, r) {
                    t = oe("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), Q.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Ht = [],
        Pt = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ht.pop() || oe.expando + "_" + vt++;
            return this[e] = !0, e
        }
    }), oe.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, s, a = t.jsonp !== !1 && (Pt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Pt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            a ? t[a] = t[a].replace(Pt, "$1" + r) : t.jsonp !== !1 && (t.url += (mt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
                return s || oe.error(r + " was not called"), s[0]
            }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
                s = arguments
            }, i.always(function() {
                void 0 === o ? oe(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Ht.push(r)), s && oe.isFunction(o) && o(s[0]), s = o = void 0
            }), "script"
    }), ie.createHTMLDocument = function() {
        var e = Q.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), oe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || (ie.createHTMLDocument ? Q.implementation.createHTMLDocument("") : Q);
        var i = pe.exec(e),
            r = !n && [];
        return i ? [t.createElement(i[1])] : (i = d([e], t, r), r && r.length && oe(r).remove(), oe.merge([], i.childNodes))
    };
    var Ft = oe.fn.load;
    oe.fn.load = function(e, t, n) {
        if ("string" != typeof e && Ft) return Ft.apply(this, arguments);
        var i, r, o, s = this,
            a = e.indexOf(" ");
        return a > -1 && (i = oe.trim(e.slice(a)), e = e.slice(0, a)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && oe.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(i ? oe("<div>").append(oe.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(s, o || [e.responseText, t, e])
            })
        }), this
    }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        oe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), oe.expr.filters.animated = function(e) {
        return oe.grep(oe.timers, function(t) {
            return e === t.elem
        }).length
    }, oe.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, u, l, c = oe.css(e, "position"),
                f = oe(e),
                d = {};
            "static" === c && (e.style.position = "relative"), a = f.offset(), o = oe.css(e, "top"), u = oe.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (i = f.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(u) || 0), oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : f.css(d)
        }
    }, oe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                oe.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                o = i && i.ownerDocument;
            if (o) return t = o.documentElement, oe.contains(t, i) ? (r = i.getBoundingClientRect(), n = U(o), {
                top: r.top + n.pageYOffset - t.clientTop,
                left: r.left + n.pageXOffset - t.clientLeft
            }) : r
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (i = e.offset()), i.top += oe.css(e[0], "borderTopWidth", !0) - e.scrollTop(), i.left += oe.css(e[0], "borderLeftWidth", !0) - e.scrollLeft()), {
                    top: t.top - i.top - oe.css(n, "marginTop", !0),
                    left: t.left - i.left - oe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === oe.css(e, "position");) e = e.offsetParent;
                return e || Ke
            })
        }
    }), oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        oe.fn[e] = function(i) {
            return Se(this, function(e, i, r) {
                var o = U(e);
                return void 0 === r ? o ? o[t] : e[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r)
            }, e, i, arguments.length)
        }
    }), oe.each(["top", "left"], function(e, t) {
        oe.cssHooks[t] = N(ie.pixelPosition, function(e, n) {
            if (n) return n = k(e, t), Qe.test(n) ? oe(e).position()[t] + "px" : n
        })
    }), oe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        oe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            oe.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || r === !0 ? "margin" : "border");
                return Se(this, function(t, n, i) {
                    var r;
                    return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? oe.css(t, n, s) : oe.style(t, n, i, s)
                }, t, o ? i : void 0, o, null)
            }
        })
    }), oe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }), oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return oe
    });
    var $t = e.jQuery,
        Rt = e.$;
    return oe.noConflict = function(t) {
        return e.$ === oe && (e.$ = Rt), t && e.jQuery === oe && (e.jQuery = $t), oe
    }, t || (e.jQuery = e.$ = oe), oe
}),
/*
Copyright 2008-2013 Concur Technologies, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License. You may obtain
a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations
under the License.
*/
function(e) {
    "use strict";

    function t(t) {
        if (t && "" !== t) {
            $(".lang-selector a").removeClass("active"), $(".lang-selector a[data-language-name='" + t + "']").addClass("active");
            for (var n = 0; n < u.length; n++) $(".highlight.tab-" + u[n]).hide(), $(".lang-specific." + u[n]).hide();
            $(".highlight.tab-" + t).show(), $(".lang-specific." + t).show(), e.toc.calculateHeights(), $(window.location.hash).get(0) && $(window.location.hash).get(0).scrollIntoView(!0)
        }
    }

    function n(e) {
        return "string" != typeof e ? {} : (e = e.trim().replace(/^(\?|#|&)/, ""), e ? e.split("&").reduce(function(e, t) {
            var n = t.replace(/\+/g, " ").split("="),
                i = n[0],
                r = n[1];
            return i = decodeURIComponent(i), r = void 0 === r ? null : decodeURIComponent(r), e.hasOwnProperty(i) ? Array.isArray(e[i]) ? e[i].push(r) : e[i] = [e[i], r] : e[i] = r, e
        }, {}) : {})
    }

    function i(e) {
        return e ? Object.keys(e).sort().map(function(t) {
            var n = e[t];
            return Array.isArray(n) ? n.sort().map(function(e) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(e)
            }).join("&") : encodeURIComponent(t) + "=" + encodeURIComponent(n)
        }).join("&") : ""
    }

    function r() {
        if (location.search.length >= 1) {
            var e = n(location.search).language;
            if (e) return e;
            if (jQuery.inArray(location.search.substr(1), u) != -1) return location.search.substr(1)
        }
        return !1
    }

    function o(e) {
        var t = n(location.search);
        return t.language ? (t.language = e, i(t)) : e
    }

    function s(e) {
        if (history) {
            var t = window.location.hash;
            t && (t = t.replace(/^#+/, "")), history.pushState({}, "", "?" + o(e) + "#" + t), localStorage.setItem("language", e)
        }
    }

    function a(e) {
        var n = localStorage.getItem("language");
        u = e;
        var i = r();
        i ? (t(i), localStorage.setItem("language", i)) : t(null !== n && jQuery.inArray(n, u) != -1 ? n : u[0])
    }
    var u = [];
    e.setupLanguages = a, e.activateLanguage = t, $(function() {
        $(".lang-selector a").on("click", function() {
            var e = $(this).data("language-name");
            return s(e), t(e), !1
        }), window.onpopstate = function() {
            t(r())
        }
    })
}(window),
/**
 * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 0.5.7
 * Copyright (C) 2014 Oliver Nightingale
 * MIT Licensed
 * @license
 */
function() {
    var e = function(t) {
        var n = new e.Index;
        return n.pipeline.add(e.trimmer, e.stopWordFilter, e.stemmer), t && t.call(n, n), n
    };
    e.version = "0.5.7",
        /*!
         * lunr.utils
         * Copyright (C) 2014 Oliver Nightingale
         */
        e.utils = {}, e.utils.warn = function(e) {
            return function(t) {
                e.console && console.warn && console.warn(t)
            }
        }(this),
        /*!
         * lunr.EventEmitter
         * Copyright (C) 2014 Oliver Nightingale
         */
        e.EventEmitter = function() {
            this.events = {}
        }, e.EventEmitter.prototype.addListener = function() {
            var e = Array.prototype.slice.call(arguments),
                t = e.pop(),
                n = e;
            if ("function" != typeof t) throw new TypeError("last argument must be a function");
            n.forEach(function(e) {
                this.hasHandler(e) || (this.events[e] = []), this.events[e].push(t)
            }, this)
        }, e.EventEmitter.prototype.removeListener = function(e, t) {
            if (this.hasHandler(e)) {
                var n = this.events[e].indexOf(t);
                this.events[e].splice(n, 1), this.events[e].length || delete this.events[e]
            }
        }, e.EventEmitter.prototype.emit = function(e) {
            if (this.hasHandler(e)) {
                var t = Array.prototype.slice.call(arguments, 1);
                this.events[e].forEach(function(e) {
                    e.apply(void 0, t)
                })
            }
        }, e.EventEmitter.prototype.hasHandler = function(e) {
            return e in this.events
        },
        /*!
         * lunr.tokenizer
         * Copyright (C) 2014 Oliver Nightingale
         */
        e.tokenizer = function(e) {
            if (!arguments.length || null == e || void 0 == e) return [];
            if (Array.isArray(e)) return e.map(function(e) {
                return e.toLowerCase()
            });
            for (var t = e.toString().replace(/^\s+/, ""), n = t.length - 1; n >= 0; n--)
                if (/\S/.test(t.charAt(n))) {
                    t = t.substring(0, n + 1);
                    break
                }
            return t.split(/(?:\s+|\-)/).filter(function(e) {
                return !!e
            }).map(function(e) {
                return e.toLowerCase()
            })
        },
        /*!
         * lunr.Pipeline
         * Copyright (C) 2014 Oliver Nightingale
         */
        e.Pipeline = function() {
            this._stack = []
        }, e.Pipeline.registeredFunctions = {}, e.Pipeline.registerFunction = function(t, n) {
            n in this.registeredFunctions && e.utils.warn("Overwriting existing registered function: " + n), t.label = n, e.Pipeline.registeredFunctions[t.label] = t
        }, e.Pipeline.warnIfFunctionNotRegistered = function(t) {
            var n = t.label && t.label in this.registeredFunctions;
            n || e.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", t)
        }, e.Pipeline.load = function(t) {
            var n = new e.Pipeline;
            return t.forEach(function(t) {
                var i = e.Pipeline.registeredFunctions[t];
                if (!i) throw new Error("Cannot load un-registered function: " + t);
                n.add(i)
            }), n
        }, e.Pipeline.prototype.add = function() {
            var t = Array.prototype.slice.call(arguments);
            t.forEach(function(t) {
                e.Pipeline.warnIfFunctionNotRegistered(t), this._stack.push(t)
            }, this)
        }, e.Pipeline.prototype.after = function(t, n) {
            e.Pipeline.warnIfFunctionNotRegistered(n);
            var i = this._stack.indexOf(t) + 1;
            this._stack.splice(i, 0, n)
        }, e.Pipeline.prototype.before = function(t, n) {
            e.Pipeline.warnIfFunctionNotRegistered(n);
            var i = this._stack.indexOf(t);
            this._stack.splice(i, 0, n)
        }, e.Pipeline.prototype.remove = function(e) {
            var t = this._stack.indexOf(e);
            this._stack.splice(t, 1)
        }, e.Pipeline.prototype.run = function(e) {
            for (var t = [], n = e.length, i = this._stack.length, r = 0; r < n; r++) {
                for (var o = e[r], s = 0; s < i && (o = this._stack[s](o, r, e), void 0 !== o); s++);
                void 0 !== o && t.push(o)
            }
            return t
        }, e.Pipeline.prototype.reset = function() {
            this._stack = []
        }, e.Pipeline.prototype.toJSON = function() {
            return this._stack.map(function(t) {
                return e.Pipeline.warnIfFunctionNotRegistered(t), t.label
            })
        },
        /*!
         * lunr.Vector
         * Copyright (C) 2014 Oliver Nightingale
         */
        e.Vector = function() {
            this._magnitude = null, this.list = void 0, this.length = 0
        }, e.Vector.Node = function(e, t, n) {
            this.idx = e, this.val = t, this.next = n
        }, e.Vector.prototype.insert = function(t, n) {
            var i = this.list;
            if (!i) return this.list = new e.Vector.Node(t, n, i), this.length++;
            for (var r = i, o = i.next; void 0 != o;) {
                if (t < o.idx) return r.next = new e.Vector.Node(t, n, o), this.length++;
                r = o, o = o.next
            }
            return r.next = new e.Vector.Node(t, n, o), this.length++
        }, e.Vector.prototype.magnitude = function() {
            if (this._magniture) return this._magnitude;
            for (var e, t = this.list, n = 0; t;) e = t.val, n += e * e, t = t.next;
            return this._magnitude = Math.sqrt(n)
        }, e.Vector.prototype.dot = function(e) {
            for (var t = this.list, n = e.list, i = 0; t && n;) t.idx < n.idx ? t = t.next : t.idx > n.idx ? n = n.next : (i += t.val * n.val, t = t.next, n = n.next);
            return i
        }, e.Vector.prototype.similarity = function(e) {
            return this.dot(e) / (this.magnitude() * e.magnitude())
        },
        /*!
         * lunr.SortedSet
         * Copyright (C) 2014 Oliver Nightingale
         */
        e.SortedSet = function() {
            this.length = 0, this.elements = []
        }, e.SortedSet.load = function(e) {
            var t = new this;
            return t.elements = e, t.length = e.length, t
        }, e.SortedSet.prototype.add = function() {
            Array.prototype.slice.call(arguments).forEach(function(e) {
                ~this.indexOf(e) || this.elements.splice(this.locationFor(e), 0, e)
            }, this), this.length = this.elements.length
        }, e.SortedSet.prototype.toArray = function() {
            return this.elements.slice()
        }, e.SortedSet.prototype.map = function(e, t) {
            return this.elements.map(e, t)
        }, e.SortedSet.prototype.forEach = function(e, t) {
            return this.elements.forEach(e, t)
        }, e.SortedSet.prototype.indexOf = function(e, t, n) {
            var t = t || 0,
                n = n || this.elements.length,
                i = n - t,
                r = t + Math.floor(i / 2),
                o = this.elements[r];
            return i <= 1 ? o === e ? r : -1 : o < e ? this.indexOf(e, r, n) : o > e ? this.indexOf(e, t, r) : o === e ? r : void 0
        }, e.SortedSet.prototype.locationFor = function(e, t, n) {
            var t = t || 0,
                n = n || this.elements.length,
                i = n - t,
                r = t + Math.floor(i / 2),
                o = this.elements[r];
            if (i <= 1) {
                if (o > e) return r;
                if (o < e) return r + 1
            }
            return o < e ? this.locationFor(e, r, n) : o > e ? this.locationFor(e, t, r) : void 0
        }, e.SortedSet.prototype.intersect = function(t) {
            for (var n = new e.SortedSet, i = 0, r = 0, o = this.length, s = t.length, a = this.elements, u = t.elements;;) {
                if (i > o - 1 || r > s - 1) break;
                a[i] !== u[r] ? a[i] < u[r] ? i++ : a[i] > u[r] && r++ : (n.add(a[i]), i++, r++)
            }
            return n
        }, e.SortedSet.prototype.clone = function() {
            var t = new e.SortedSet;
            return t.elements = this.toArray(), t.length = t.elements.length, t
        }, e.SortedSet.prototype.union = function(e) {
            var t, n, i;
            return this.length >= e.length ? (t = this, n = e) : (t = e, n = this), i = t.clone(), i.add.apply(i, n.toArray()), i
        }, e.SortedSet.prototype.toJSON = function() {
            return this.toArray()
        },
        /*!
         * lunr.Index
         * Copyright (C) 2014 Oliver Nightingale
         */
        e.Index = function() {
            this._fields = [], this._ref = "id", this.pipeline = new e.Pipeline, this.documentStore = new e.Store, this.tokenStore = new e.TokenStore, this.corpusTokens = new e.SortedSet, this.eventEmitter = new e.EventEmitter, this._idfCache = {}, this.on("add", "remove", "update", function() {
                this._idfCache = {}
            }.bind(this))
        }, e.Index.prototype.on = function() {
            var e = Array.prototype.slice.call(arguments);
            return this.eventEmitter.addListener.apply(this.eventEmitter, e)
        }, e.Index.prototype.off = function(e, t) {
            return this.eventEmitter.removeListener(e, t)
        }, e.Index.load = function(t) {
            t.version !== e.version && e.utils.warn("version mismatch: current " + e.version + " importing " + t.version);
            var n = new this;
            return n._fields = t.fields, n._ref = t.ref, n.documentStore = e.Store.load(t.documentStore), n.tokenStore = e.TokenStore.load(t.tokenStore), n.corpusTokens = e.SortedSet.load(t.corpusTokens), n.pipeline = e.Pipeline.load(t.pipeline), n
        }, e.Index.prototype.field = function(e, t) {
            var t = t || {},
                n = {
                    name: e,
                    boost: t.boost || 1
                };
            return this._fields.push(n), this
        }, e.Index.prototype.ref = function(e) {
            return this._ref = e, this
        }, e.Index.prototype.add = function(t, n) {
            var i = {},
                r = new e.SortedSet,
                o = t[this._ref],
                n = void 0 === n || n;
            this._fields.forEach(function(n) {
                var o = this.pipeline.run(e.tokenizer(t[n.name]));
                i[n.name] = o, e.SortedSet.prototype.add.apply(r, o)
            }, this), this.documentStore.set(o, r), e.SortedSet.prototype.add.apply(this.corpusTokens, r.toArray());
            for (var s = 0; s < r.length; s++) {
                var a = r.elements[s],
                    u = this._fields.reduce(function(e, t) {
                        var n = i[t.name].length;
                        if (!n) return e;
                        var r = i[t.name].filter(function(e) {
                            return e === a
                        }).length;
                        return e + r / n * t.boost
                    }, 0);
                this.tokenStore.add(a, {
                    ref: o,
                    tf: u
                })
            }
            n && this.eventEmitter.emit("add", t, this)
        }, e.Index.prototype.remove = function(e, t) {
            var n = e[this._ref],
                t = void 0 === t || t;
            if (this.documentStore.has(n)) {
                var i = this.documentStore.get(n);
                this.documentStore.remove(n), i.forEach(function(e) {
                    this.tokenStore.remove(e, n)
                }, this), t && this.eventEmitter.emit("remove", e, this)
            }
        }, e.Index.prototype.update = function(e, t) {
            var t = void 0 === t || t;
            this.remove(e, !1), this.add(e, !1), t && this.eventEmitter.emit("update", e, this)
        }, e.Index.prototype.idf = function(e) {
            var t = "@" + e;
            if (Object.prototype.hasOwnProperty.call(this._idfCache, t)) return this._idfCache[t];
            var n = this.tokenStore.count(e),
                i = 1;
            return n > 0 && (i = 1 + Math.log(this.tokenStore.length / n)), this._idfCache[t] = i
        }, e.Index.prototype.search = function(t) {
            var n = this.pipeline.run(e.tokenizer(t)),
                i = new e.Vector,
                r = [],
                o = this._fields.reduce(function(e, t) {
                    return e + t.boost
                }, 0),
                s = n.some(function(e) {
                    return this.tokenStore.has(e)
                }, this);
            if (!s) return [];
            n.forEach(function(t, n, s) {
                var a = 1 / s.length * this._fields.length * o,
                    u = this,
                    l = this.tokenStore.expand(t).reduce(function(n, r) {
                        var o = u.corpusTokens.indexOf(r),
                            s = u.idf(r),
                            l = 1,
                            c = new e.SortedSet;
                        if (r !== t) {
                            var f = Math.max(3, r.length - t.length);
                            l = 1 / Math.log(f)
                        }
                        return o > -1 && i.insert(o, a * s * l), Object.keys(u.tokenStore.get(r)).forEach(function(e) {
                            c.add(e)
                        }), n.union(c)
                    }, new e.SortedSet);
                r.push(l)
            }, this);
            var a = r.reduce(function(e, t) {
                return e.intersect(t)
            });
            return a.map(function(e) {
                return {
                    ref: e,
                    score: i.similarity(this.documentVector(e))
                }
            }, this).sort(function(e, t) {
                return t.score - e.score
            })
        }, e.Index.prototype.documentVector = function(t) {
            for (var n = this.documentStore.get(t), i = n.length, r = new e.Vector, o = 0; o < i; o++) {
                var s = n.elements[o],
                    a = this.tokenStore.get(s)[t].tf,
                    u = this.idf(s);
                r.insert(this.corpusTokens.indexOf(s), a * u)
            }
            return r
        }, e.Index.prototype.toJSON = function() {
            return {
                version: e.version,
                fields: this._fields,
                ref: this._ref,
                documentStore: this.documentStore.toJSON(),
                tokenStore: this.tokenStore.toJSON(),
                corpusTokens: this.corpusTokens.toJSON(),
                pipeline: this.pipeline.toJSON()
            }
        }, e.Index.prototype.use = function(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            t.unshift(this), e.apply(this, t)
        },
        /*!
         * lunr.Store
         * Copyright (C) 2014 Oliver Nightingale
         */
        e.Store = function() {
            this.store = {}, this.length = 0
        }, e.Store.load = function(t) {
            var n = new this;
            return n.length = t.length, n.store = Object.keys(t.store).reduce(function(n, i) {
                return n[i] = e.SortedSet.load(t.store[i]), n
            }, {}), n
        }, e.Store.prototype.set = function(e, t) {
            this.has(e) || this.length++, this.store[e] = t
        }, e.Store.prototype.get = function(e) {
            return this.store[e]
        }, e.Store.prototype.has = function(e) {
            return e in this.store
        }, e.Store.prototype.remove = function(e) {
            this.has(e) && (delete this.store[e], this.length--)
        }, e.Store.prototype.toJSON = function() {
            return {
                store: this.store,
                length: this.length
            }
        },
        /*!
         * lunr.stemmer
         * Copyright (C) 2014 Oliver Nightingale
         * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
         */
        e.stemmer = function() {
            var e = {
                    ational: "ate",
                    tional: "tion",
                    enci: "ence",
                    anci: "ance",
                    izer: "ize",
                    bli: "ble",
                    alli: "al",
                    entli: "ent",
                    eli: "e",
                    ousli: "ous",
                    ization: "ize",
                    ation: "ate",
                    ator: "ate",
                    alism: "al",
                    iveness: "ive",
                    fulness: "ful",
                    ousness: "ous",
                    aliti: "al",
                    iviti: "ive",
                    biliti: "ble",
                    logi: "log"
                },
                t = {
                    icate: "ic",
                    ative: "",
                    alize: "al",
                    iciti: "ic",
                    ical: "ic",
                    ful: "",
                    ness: ""
                },
                n = "[^aeiou]",
                i = "[aeiouy]",
                r = n + "[^aeiouy]*",
                o = i + "[aeiou]*",
                s = "^(" + r + ")?" + o + r,
                a = "^(" + r + ")?" + o + r + "(" + o + ")?$",
                u = "^(" + r + ")?" + o + r + o + r,
                l = "^(" + r + ")?" + i,
                c = new RegExp(s),
                f = new RegExp(u),
                d = new RegExp(a),
                h = new RegExp(l),
                p = /^(.+?)(ss|i)es$/,
                g = /^(.+?)([^s])s$/,
                v = /^(.+?)eed$/,
                m = /^(.+?)(ed|ing)$/,
                y = /.$/,
                x = /(at|bl|iz)$/,
                b = new RegExp("([^aeiouylsz])\\1$"),
                w = new RegExp("^" + r + i + "[^aeiouwxy]$"),
                C = /^(.+?[^aeiou])y$/,
                S = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
                T = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                E = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,
                k = /^(.+?)(s|t)(ion)$/,
                N = /^(.+?)e$/,
                A = /ll$/,
                j = new RegExp("^" + r + i + "[^aeiouwxy]$"),
                L = function(n) {
                    var i, r, o, s, a, u, l;
                    if (n.length < 3) return n;
                    if (o = n.substr(0, 1), "y" == o && (n = o.toUpperCase() + n.substr(1)), s = p, a = g, s.test(n) ? n = n.replace(s, "$1$2") : a.test(n) && (n = n.replace(a, "$1$2")), s = v, a = m, s.test(n)) {
                        var L = s.exec(n);
                        s = c, s.test(L[1]) && (s = y, n = n.replace(s, ""))
                    } else if (a.test(n)) {
                        var L = a.exec(n);
                        i = L[1], a = h, a.test(i) && (n = i, a = x, u = b, l = w, a.test(n) ? n += "e" : u.test(n) ? (s = y, n = n.replace(s, "")) : l.test(n) && (n += "e"))
                    }
                    if (s = C, s.test(n)) {
                        var L = s.exec(n);
                        i = L[1], n = i + "i"
                    }
                    if (s = S, s.test(n)) {
                        var L = s.exec(n);
                        i = L[1], r = L[2], s = c, s.test(i) && (n = i + e[r])
                    }
                    if (s = T, s.test(n)) {
                        var L = s.exec(n);
                        i = L[1], r = L[2], s = c, s.test(i) && (n = i + t[r])
                    }
                    if (s = E, a = k, s.test(n)) {
                        var L = s.exec(n);
                        i = L[1], s = f, s.test(i) && (n = i)
                    } else if (a.test(n)) {
                        var L = a.exec(n);
                        i = L[1] + L[2], a = f, a.test(i) && (n = i)
                    }
                    if (s = N, s.test(n)) {
                        var L = s.exec(n);
                        i = L[1], s = f, a = d, u = j, (s.test(i) || a.test(i) && !u.test(i)) && (n = i)
                    }
                    return s = A, a = f, s.test(n) && a.test(n) && (s = y, n = n.replace(s, "")), "y" == o && (n = o.toLowerCase() + n.substr(1)), n
                };
            return L
        }(), e.Pipeline.registerFunction(e.stemmer, "stemmer"),
        /*!
         * lunr.stopWordFilter
         * Copyright (C) 2014 Oliver Nightingale
         */
        e.stopWordFilter = function(t) {
            if (e.stopWordFilter.stopWords.indexOf(t) === -1) return t
        }, e.stopWordFilter.stopWords = new e.SortedSet, e.stopWordFilter.stopWords.length = 119, e.stopWordFilter.stopWords.elements = ["", "a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your"], e.Pipeline.registerFunction(e.stopWordFilter, "stopWordFilter"),
        /*!
         * lunr.trimmer
         * Copyright (C) 2014 Oliver Nightingale
         */
        e.trimmer = function(e) {
            return e.replace(/^\W+/, "").replace(/\W+$/, "")
        }, e.Pipeline.registerFunction(e.trimmer, "trimmer"),
        /*!
         * lunr.stemmer
         * Copyright (C) 2014 Oliver Nightingale
         * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
         */
        e.TokenStore = function() {
            this.root = {
                docs: {}
            }, this.length = 0
        }, e.TokenStore.load = function(e) {
            var t = new this;
            return t.root = e.root, t.length = e.length, t
        }, e.TokenStore.prototype.add = function(e, t, n) {
            var n = n || this.root,
                i = e[0],
                r = e.slice(1);
            return i in n || (n[i] = {
                docs: {}
            }), 0 === r.length ? (n[i].docs[t.ref] = t, void(this.length += 1)) : this.add(r, t, n[i])
        }, e.TokenStore.prototype.has = function(e) {
            if (!e) return !1;
            for (var t = this.root, n = 0; n < e.length; n++) {
                if (!t[e[n]]) return !1;
                t = t[e[n]]
            }
            return !0
        }, e.TokenStore.prototype.getNode = function(e) {
            if (!e) return {};
            for (var t = this.root, n = 0; n < e.length; n++) {
                if (!t[e[n]]) return {};
                t = t[e[n]]
            }
            return t
        }, e.TokenStore.prototype.get = function(e, t) {
            return this.getNode(e, t).docs || {}
        }, e.TokenStore.prototype.count = function(e, t) {
            return Object.keys(this.get(e, t)).length
        }, e.TokenStore.prototype.remove = function(e, t) {
            if (e) {
                for (var n = this.root, i = 0; i < e.length; i++) {
                    if (!(e[i] in n)) return;
                    n = n[e[i]]
                }
                delete n.docs[t]
            }
        }, e.TokenStore.prototype.expand = function(e, t) {
            var n = this.getNode(e),
                i = n.docs || {},
                t = t || [];
            return Object.keys(i).length && t.push(e), Object.keys(n).forEach(function(n) {
                "docs" !== n && t.concat(this.expand(e + n, t))
            }, this), t
        }, e.TokenStore.prototype.toJSON = function() {
            return {
                root: this.root,
                length: this.length
            }
        },
        function(e, t) {
            "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.lunr = t()
        }(this, function() {
            return e
        })
}(),
/*
 * jQuery Highlight plugin
 *
 * Based on highlight v3 by Johann Burkard
 * http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html
 *
 * Code a little bit refactored and cleaned (in my humble opinion).
 * Most important changes:
 *  - has an option to highlight only entire words (wordsOnly - false by default),
 *  - has an option to be case sensitive (caseSensitive - false by default)
 *  - highlight element tag and class names can be specified in options
 *
 * Usage:
 *   // wrap every occurrance of text 'lorem' in content
 *   // with <span class='highlight'> (default options)
 *   $('#content').highlight('lorem');
 *
 *   // search for and highlight more terms at once
 *   // so you can save some time on traversing DOM
 *   $('#content').highlight(['lorem', 'ipsum']);
 *   $('#content').highlight('lorem ipsum');
 *
 *   // search only for entire word 'lorem'
 *   $('#content').highlight('lorem', { wordsOnly: true });
 *
 *   // don't ignore case during search of term 'lorem'
 *   $('#content').highlight('lorem', { caseSensitive: true });
 *
 *   // wrap every occurrance of term 'ipsum' in content
 *   // with <em class='important'>
 *   $('#content').highlight('ipsum', { element: 'em', className: 'important' });
 *
 *   // remove default highlight
 *   $('#content').unhighlight();
 *
 *   // remove custom highlight
 *   $('#content').unhighlight({ element: 'em', className: 'important' });
 *
 *
 * Copyright (c) 2009 Bartek Szopka
 *
 * Licensed under MIT license.
 *
 */
jQuery.extend({
        highlight: function(e, t, n, i) {
            if (3 === e.nodeType) {
                var r = e.data.match(t);
                if (r) {
                    var o = document.createElement(n || "span");
                    o.className = i || "highlight";
                    var s = e.splitText(r.index);
                    s.splitText(r[0].length);
                    var a = s.cloneNode(!0);
                    return o.appendChild(a), s.parentNode.replaceChild(o, s), 1
                }
            } else if (1 === e.nodeType && e.childNodes && !/(script|style)/i.test(e.tagName) && (e.tagName !== n.toUpperCase() || e.className !== i))
                for (var u = 0; u < e.childNodes.length; u++) u += jQuery.highlight(e.childNodes[u], t, n, i);
            return 0
        }
    }), jQuery.fn.unhighlight = function(e) {
        var t = {
            className: "highlight",
            element: "span"
        };
        return jQuery.extend(t, e), this.find(t.element + "." + t.className).each(function() {
            var e = this.parentNode;
            e.replaceChild(this.firstChild, this), e.normalize()
        }).end()
    }, jQuery.fn.highlight = function(e, t) {
        var n = {
            className: "highlight",
            element: "span",
            caseSensitive: !1,
            wordsOnly: !1
        };
        if (jQuery.extend(n, t), e.constructor === String && (e = [e]), e = jQuery.grep(e, function(e) {
                return "" != e
            }), e = jQuery.map(e, function(e) {
                return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
            }), 0 == e.length) return this;
        var i = n.caseSensitive ? "" : "i",
            r = "(" + e.join("|") + ")";
        n.wordsOnly && (r = "\\b" + r + "\\b");
        var o = new RegExp(r, i);
        return this.each(function() {
            jQuery.highlight(this, o, n.element, n.className)
        })
    },
    function() {
        "use strict";

        function e() {
            $("h1, h2").each(function() {
                var e = $(this),
                    t = e.nextUntil("h1, h2");
                u.add({
                    id: e.prop("id"),
                    title: e.text(),
                    body: t.text()
                })
            })
        }

        function t() {
            o = $(".content"), s = $(".search-results"), $("#input-search").on("keyup", n)
        }

        function n(e) {
            if (r(), s.addClass("visible"), 27 === e.keyCode && (this.value = ""), this.value) {
                var t = u.search(this.value).filter(function(e) {
                    return e.score > 1e-4
                });
                t.length ? (s.empty(), $.each(t, function(e, t) {
                    var n = document.getElementById(t.ref);
                    s.append("<li><a href='#" + t.ref + "'>" + $(n).text() + "</a></li>")
                }), i.call(this)) : (s.html("<li></li>"), $(".search-results li").text('No Results Found for "' + this.value + '"'))
            } else r(), s.removeClass("visible")
        }

        function i() {
            this.value && o.highlight(this.value, a)
        }

        function r() {
            o.unhighlight(a)
        }
        var o, s, a = {
                element: "span",
                className: "search-highlight"
            },
            u = new lunr.Index;
        u.ref("id"), u.field("title", {
            boost: 10
        }), u.field("body"), u.pipeline.add(lunr.trimmer, lunr.stopWordFilter), $(e), $(t)
    }(),
    /*! jQuery UI - v1.11.3 - 2015-02-12
     * http://jqueryui.com
     * Includes: widget.js
     * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function(e) {
        /*!
         * jQuery UI Widget 1.11.3
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         *
         * http://api.jqueryui.com/jQuery.widget/
         */
        var t = 0,
            n = Array.prototype.slice;
        e.cleanData = function(t) {
            return function(n) {
                var i, r, o;
                for (o = 0; null != (r = n[o]); o++) try {
                    i = e._data(r, "events"), i && i.remove && e(r).triggerHandler("remove")
                } catch (e) {}
                t(n)
            }
        }(e.cleanData), e.widget = function(t, n, i) {
            var r, o, s, a, u = {},
                l = t.split(".")[0];
            return t = t.split(".")[1], r = l + "-" + t, i || (i = n, n = e.Widget), e.expr[":"][r.toLowerCase()] = function(t) {
                return !!e.data(t, r)
            }, e[l] = e[l] || {}, o = e[l][t], s = e[l][t] = function(e, t) {
                return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new s(e, t)
            }, e.extend(s, o, {
                version: i.version,
                _proto: e.extend({}, i),
                _childConstructors: []
            }), a = new n, a.options = e.widget.extend({}, a.options), e.each(i, function(t, i) {
                return e.isFunction(i) ? void(u[t] = function() {
                    var e = function() {
                            return n.prototype[t].apply(this, arguments)
                        },
                        r = function(e) {
                            return n.prototype[t].apply(this, e)
                        };
                    return function() {
                        var t, n = this._super,
                            o = this._superApply;
                        return this._super = e, this._superApply = r, t = i.apply(this, arguments), this._super = n, this._superApply = o, t
                    }
                }()) : void(u[t] = i)
            }), s.prototype = e.widget.extend(a, {
                widgetEventPrefix: o ? a.widgetEventPrefix || t : t
            }, u, {
                constructor: s,
                namespace: l,
                widgetName: t,
                widgetFullName: r
            }), o ? (e.each(o._childConstructors, function(t, n) {
                var i = n.prototype;
                e.widget(i.namespace + "." + i.widgetName, s, n._proto)
            }), delete o._childConstructors) : n._childConstructors.push(s), e.widget.bridge(t, s), s
        }, e.widget.extend = function(t) {
            for (var i, r, o = n.call(arguments, 1), s = 0, a = o.length; s < a; s++)
                for (i in o[s]) r = o[s][i], o[s].hasOwnProperty(i) && void 0 !== r && (e.isPlainObject(r) ? t[i] = e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], r) : e.widget.extend({}, r) : t[i] = r);
            return t
        }, e.widget.bridge = function(t, i) {
            var r = i.prototype.widgetFullName || t;
            e.fn[t] = function(o) {
                var s = "string" == typeof o,
                    a = n.call(arguments, 1),
                    u = this;
                return s ? this.each(function() {
                    var n, i = e.data(this, r);
                    return "instance" === o ? (u = i, !1) : i ? e.isFunction(i[o]) && "_" !== o.charAt(0) ? (n = i[o].apply(i, a), n !== i && void 0 !== n ? (u = n && n.jquery ? u.pushStack(n.get()) : n, !1) : void 0) : e.error("no such method '" + o + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + o + "'")
                }) : (a.length && (o = e.widget.extend.apply(null, [o].concat(a))), this.each(function() {
                    var t = e.data(this, r);
                    t ? (t.option(o || {}), t._init && t._init()) : e.data(this, r, new i(o, this))
                })), u
            }
        }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(n, i) {
                i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = t++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(e) {
                        e.target === i && this.destroy()
                    }
                }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), n), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: e.noop,
            _getCreateEventData: e.noop,
            _create: e.noop,
            _init: e.noop,
            destroy: function() {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: e.noop,
            widget: function() {
                return this.element
            },
            option: function(t, n) {
                var i, r, o, s = t;
                if (0 === arguments.length) return e.widget.extend({}, this.options);
                if ("string" == typeof t)
                    if (s = {}, i = t.split("."), t = i.shift(), i.length) {
                        for (r = s[t] = e.widget.extend({}, this.options[t]), o = 0; o < i.length - 1; o++) r[i[o]] = r[i[o]] || {}, r = r[i[o]];
                        if (t = i.pop(), 1 === arguments.length) return void 0 === r[t] ? null : r[t];
                        r[t] = n
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                        s[t] = n
                    }
                return this._setOptions(s), this
            },
            _setOptions: function(e) {
                var t;
                for (t in e) this._setOption(t, e[t]);
                return this
            },
            _setOption: function(e, t) {
                return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _on: function(t, n, i) {
                var r, o = this;
                "boolean" != typeof t && (i = n, n = t, t = !1), i ? (n = r = e(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, r = this.widget()), e.each(i, function(i, s) {
                    function a() {
                        if (t || o.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled")) return ("string" == typeof s ? o[s] : s).apply(o, arguments)
                    }
                    "string" != typeof s && (a.guid = s.guid = s.guid || a.guid || e.guid++);
                    var u = i.match(/^([\w:-]*)\s*(.*)$/),
                        l = u[1] + o.eventNamespace,
                        c = u[2];
                    c ? r.delegate(c, l, a) : n.bind(l, a)
                })
            },
            _off: function(t, n) {
                n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(n).undelegate(n), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
            },
            _delay: function(e, t) {
                function n() {
                    return ("string" == typeof e ? i[e] : e).apply(i, arguments)
                }
                var i = this;
                return setTimeout(n, t || 0)
            },
            _hoverable: function(t) {
                this.hoverable = this.hoverable.add(t), this._on(t, {
                    mouseenter: function(t) {
                        e(t.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(t) {
                        e(t.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(t) {
                this.focusable = this.focusable.add(t), this._on(t, {
                    focusin: function(t) {
                        e(t.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(t) {
                        e(t.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(t, n, i) {
                var r, o, s = this.options[t];
                if (i = i || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], o = n.originalEvent)
                    for (r in o) r in n || (n[r] = o[r]);
                return this.element.trigger(n, i), !(e.isFunction(s) && s.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
            }
        }, e.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(t, n) {
            e.Widget.prototype["_" + t] = function(i, r, o) {
                "string" == typeof r && (r = {
                    effect: r
                });
                var s, a = r ? r === !0 || "number" == typeof r ? n : r.effect || n : t;
                r = r || {}, "number" == typeof r && (r = {
                    duration: r
                }), s = !e.isEmptyObject(r), r.complete = o, r.delay && i.delay(r.delay), s && e.effects && e.effects.effect[a] ? i[t](r) : a !== t && i[a] ? i[a](r.duration, r.easing, o) : i.queue(function(n) {
                    e(this)[t](), o && o.call(i[0]), n()
                })
            }
        });
        e.widget
    }),
    /* jquery Tocify - v1.8.0 - 2013-09-16
     * http://www.gregfranko.com/jquery.tocify.js/
     * Copyright (c) 2013 Greg Franko; Licensed MIT
     * Modified lightly by Robert Lord to fix a bug I found,
     * and also so it adds ids to headers
     * also because I want height caching, since the
     * height lookup for h1s and h2s was causing serious
     * lag spikes below 30 fps */
    function(e) {
        "use strict";
        e(window.jQuery, window, document)
    }(function(e, t, n, i) {
        "use strict";
        var r = "tocify",
            o = "tocify-focus",
            s = "tocify-hover",
            a = "tocify-hide",
            u = "tocify-header",
            l = "." + u,
            c = "tocify-subheader",
            f = "." + c,
            d = "tocify-item",
            h = "." + d,
            p = "tocify-extend-page",
            g = "." + p;
        e.widget("toc.tocify", {
            version: "1.8.0",
            options: {
                context: "body",
                ignoreSelector: null,
                selectors: "h1, h2, h3",
                showAndHide: !0,
                showEffect: "slideDown",
                showEffectSpeed: "medium",
                hideEffect: "slideUp",
                hideEffectSpeed: "medium",
                smoothScroll: !0,
                smoothScrollSpeed: "medium",
                scrollTo: 0,
                showAndHideOnScroll: !0,
                highlightOnScroll: !0,
                highlightOffset: 40,
                theme: "bootstrap",
                extendPage: !0,
                extendPageOffset: 100,
                history: !0,
                scrollHistory: !1,
                hashGenerator: "compact",
                highlightDefault: !0
            },
            _create: function() {
                var n = this;
                n.tocifyWrapper = e(".tocify-wrapper"), n.extendPageScroll = !0, n.items = [], n._generateToc(), n.cachedHeights = [], n.cachedAnchors = [], n._addCSSClasses(), n.webkit = function() {
                    for (var e in t)
                        if (e && e.toLowerCase().indexOf("webkit") !== -1) return !0;
                    return !1
                }(), n._setEventHandlers(), e(t).load(function() {
                    n._setActiveElement(!0), e("html, body").promise().done(function() {
                        setTimeout(function() {
                            n.extendPageScroll = !1
                        }, 0)
                    })
                })
            },
            _generateToc: function() {
                var t, n, i = this,
                    o = i.options.ignoreSelector;
                return t = this.options.selectors.indexOf(",") !== -1 ? e(this.options.context).find(this.options.selectors.replace(/ /g, "").substr(0, this.options.selectors.indexOf(","))) : e(this.options.context).find(this.options.selectors.replace(/ /g, "")), t.length ? (i.element.addClass(r), void t.each(function(t) {
                    e(this).is(o) || (n = e("<ul/>", {
                        id: u + t,
                        "class": u
                    }).append(i._nestElements(e(this), t)), i.element.append(n), e(this).nextUntil(this.nodeName.toLowerCase()).each(function() {
                        0 === e(this).find(i.options.selectors).length ? e(this).filter(i.options.selectors).each(function() {
                            e(this).is(o) || i._appendSubheaders.call(this, i, n)
                        }) : e(this).find(i.options.selectors).each(function() {
                            e(this).is(o) || i._appendSubheaders.call(this, i, n)
                        })
                    }))
                })) : void i.element.addClass(a)
            },
            _setActiveElement: function(e) {
                var n = this,
                    i = t.location.hash.substring(1),
                    r = n.element.find("li[data-unique='" + i + "']");
                return i.length ? (n.element.find("." + n.focusClass).removeClass(n.focusClass), r.addClass(n.focusClass), n.options.showAndHide && r.click()) : (n.element.find("." + n.focusClass).removeClass(n.focusClass), !i.length && e && n.options.highlightDefault && n.element.find(h).first().addClass(n.focusClass)), n
            },
            _nestElements: function(t, n) {
                var i, r, o;
                return i = e.grep(this.items, function(e) {
                    return e === t.text()
                }), i.length ? this.items.push(t.text() + n) : this.items.push(t.text()), o = this._generateHashValue(i, t, n), r = e("<li/>", {
                    "class": d,
                    "data-unique": o
                }).append(e("<a/>", {
                    text: t.text()
                })), t.before(e("<div/>", {
                    name: o,
                    "data-unique": o
                })), r
            },
            _generateHashValue: function(e, t, n) {
                var i = "",
                    r = this.options.hashGenerator;
                if ("pretty" === r) {
                    for (i = t.text().toLowerCase().replace(/\s/g, "-"), i = i.replace(/[^\x00-\x7F]/g, ""); i.indexOf("--") > -1;) i = i.replace(/--/g, "-");
                    for (; i.indexOf(":-") > -1;) i = i.replace(/:-/g, "-")
                } else i = "function" == typeof r ? r(t.text(), t) : t.text().replace(/\s/g, "");
                return e.length && (i += "" + n), i
            },
            _appendSubheaders: function(t, n) {
                var i = e(this).index(t.options.selectors),
                    r = e(t.options.selectors).eq(i - 1),
                    o = +e(this).prop("tagName").charAt(1),
                    s = +r.prop("tagName").charAt(1);
                o < s ? t.element.find(f + "[data-tag=" + o + "]").last().append(t._nestElements(e(this), i)) : o === s ? n.find(h).last().after(t._nestElements(e(this), i)) : n.find(h).last().after(e("<ul/>", {
                    "class": c,
                    "data-tag": o
                })).next(f).append(t._nestElements(e(this), i))
            },
            _setEventHandlers: function() {
                var r = this;
                this.element.on("click.tocify", "li", function() {
                    if (r.options.history && (t.location.hash = e(this).attr("data-unique")), r.element.find("." + r.focusClass).removeClass(r.focusClass), e(this).addClass(r.focusClass), r.options.showAndHide) {
                        var n = e('li[data-unique="' + e(this).attr("data-unique") + '"]');
                        r._triggerShow(n)
                    }
                    r._scrollTo(e(this))
                }), this.element.find("li").on({
                    "mouseenter.tocify": function() {
                        e(this).addClass(r.hoverClass), e(this).css("cursor", "pointer")
                    },
                    "mouseleave.tocify": function() {
                        "bootstrap" !== r.options.theme && e(this).removeClass(r.hoverClass)
                    }
                }), e(t).on("resize", function() {
                    r.calculateHeights()
                }), e(t).on("scroll.tocify", function() {
                    e("html, body").promise().done(function() {
                        var o, s, a, u, l = e(t).scrollTop(),
                            c = e(t).height(),
                            f = e(n).height(),
                            d = e("body")[0].scrollHeight;
                        if (r.options.extendPage && (r.webkit && l >= d - c - r.options.extendPageOffset || !r.webkit && c + l > f - r.options.extendPageOffset) && !e(g).length) {
                            if (s = e('div[data-unique="' + e(h).last().attr("data-unique") + '"]'), !s.length) return;
                            a = s.offset().top, e(r.options.context).append(e("<div />", {
                                "class": p,
                                height: Math.abs(a - l) + "px",
                                "data-unique": p
                            })), r.extendPageScroll && (u = r.element.find("li.active"), r._scrollTo(e("div[data-unique=" + u.attr("data-unique") + "]")))
                        }
                        setTimeout(function() {
                            var s, a = null;
                            0 == r.cachedHeights.length && r.calculateHeights();
                            var u = e(t).scrollTop();
                            if (r.cachedAnchors.each(function(e) {
                                    return r.cachedHeights[e] - u < 0 && void(a = e)
                                }), s = e(r.cachedAnchors[a]).attr("data-unique"), o = e('li[data-unique="' + s + '"]'), r.options.highlightOnScroll && o.length && !o.hasClass(r.focusClass)) {
                                r.element.find("." + r.focusClass).removeClass(r.focusClass), o.addClass(r.focusClass);
                                var l = r.tocifyWrapper,
                                    c = e(o).closest(".tocify-header"),
                                    f = c.offset().top,
                                    d = l.offset().top,
                                    h = f - d;
                                if (h >= e(t).height()) {
                                    var p = h + l.scrollTop();
                                    l.scrollTop(p)
                                } else h < 0 && l.scrollTop(0)
                            }
                            r.options.scrollHistory && t.location.hash !== "#" + s && s !== i && (history.replaceState ? history.replaceState({}, "", "#" + s) : (scrollV = n.body.scrollTop, scrollH = n.body.scrollLeft, location.hash = "#" + s, n.body.scrollTop = scrollV, n.body.scrollLeft = scrollH)), r.options.showAndHideOnScroll && r.options.showAndHide && r._triggerShow(o, !0)
                        }, 0)
                    })
                })
            },
            calculateHeights: function() {
                var t = this;
                t.cachedHeights = [], t.cachedAnchors = [];
                var n = e(t.options.context).find("div[data-unique]");
                n.each(function(n) {
                    var i = (e(this).next().length ? e(this).next() : e(this)).offset().top - t.options.highlightOffset;
                    t.cachedHeights[n] = i
                }), t.cachedAnchors = n
            },
            show: function(t) {
                var n = this;
                if (!t.is(":visible")) switch (t.find(f).length || t.parent().is(l) || t.parent().is(":visible") ? t.children(f).length || t.parent().is(l) || (t = t.closest(f)) : t = t.parents(f).add(t), n.options.showEffect) {
                    case "none":
                        t.show();
                        break;
                    case "show":
                        t.show(n.options.showEffectSpeed);
                        break;
                    case "slideDown":
                        t.slideDown(n.options.showEffectSpeed);
                        break;
                    case "fadeIn":
                        t.fadeIn(n.options.showEffectSpeed);
                        break;
                    default:
                        t.show()
                }
                return t.parent().is(l) ? n.hide(e(f).not(t)) : n.hide(e(f).not(t.closest(l).find(f).not(t.siblings()))), n
            },
            hide: function(e) {
                var t = this;
                switch (t.options.hideEffect) {
                    case "none":
                        e.hide();
                        break;
                    case "hide":
                        e.hide(t.options.hideEffectSpeed);
                        break;
                    case "slideUp":
                        e.slideUp(t.options.hideEffectSpeed);
                        break;
                    case "fadeOut":
                        e.fadeOut(t.options.hideEffectSpeed);
                        break;
                    default:
                        e.hide()
                }
                return t
            },
            _triggerShow: function(e, t) {
                var n = this;
                return e.parent().is(l) || e.next().is(f) ? n.show(e.next(f), t) : e.parent().is(f) && n.show(e.parent(), t), n
            },
            _addCSSClasses: function() {
                return "jqueryui" === this.options.theme ? (this.focusClass = "ui-state-default", this.hoverClass = "ui-state-hover", this.element.addClass("ui-widget").find(".toc-title").addClass("ui-widget-header").end().find("li").addClass("ui-widget-content")) : "bootstrap" === this.options.theme ? (this.element.find(l + "," + f).addClass("nav nav-list"), this.focusClass = "active") : (this.focusClass = o, this.hoverClass = s), this
            },
            setOption: function() {
                e.Widget.prototype._setOption.apply(this, arguments)
            },
            setOptions: function() {
                e.Widget.prototype._setOptions.apply(this, arguments)
            },
            _scrollTo: function(t) {
                var n = this,
                    i = n.options.smoothScroll || 0,
                    r = n.options.scrollTo;
                return e("html, body").promise().done(function() {
                    e("html, body").animate({
                        scrollTop: e('div[data-unique="' + t.attr("data-unique") + '"]').next().offset().top - (e.isFunction(r) ? r.call() : r)-100+"px"
						
                    }, {
                        duration: i
                    })
                }), n
            }
        })
    }),
    /*!
     * imagesLoaded PACKAGED v3.1.8
     * JavaScript is all like "You images are done yet or what?"
     * MIT License
     */
    function() {
        function e() {}

        function t(e, t) {
            for (var n = e.length; n--;)
                if (e[n].listener === t) return n;
            return -1
        }

        function n(e) {
            return function() {
                return this[e].apply(this, arguments)
            }
        }
        var i = e.prototype,
            r = this,
            o = r.EventEmitter;
        i.getListeners = function(e) {
            var t, n, i = this._getEvents();
            if ("object" == typeof e) {
                t = {};
                for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
            } else t = i[e] || (i[e] = []);
            return t
        }, i.flattenListeners = function(e) {
            var t, n = [];
            for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
            return n
        }, i.getListenersAsObject = function(e) {
            var t, n = this.getListeners(e);
            return n instanceof Array && (t = {}, t[e] = n), t || n
        }, i.addListener = function(e, n) {
            var i, r = this.getListenersAsObject(e),
                o = "object" == typeof n;
            for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
                listener: n,
                once: !1
            });
            return this
        }, i.on = n("addListener"), i.addOnceListener = function(e, t) {
            return this.addListener(e, {
                listener: t,
                once: !0
            })
        }, i.once = n("addOnceListener"), i.defineEvent = function(e) {
            return this.getListeners(e), this
        }, i.defineEvents = function(e) {
            for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
            return this
        }, i.removeListener = function(e, n) {
            var i, r, o = this.getListenersAsObject(e);
            for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
            return this
        }, i.off = n("removeListener"), i.addListeners = function(e, t) {
            return this.manipulateListeners(!1, e, t)
        }, i.removeListeners = function(e, t) {
            return this.manipulateListeners(!0, e, t)
        }, i.manipulateListeners = function(e, t, n) {
            var i, r, o = e ? this.removeListener : this.addListener,
                s = e ? this.removeListeners : this.addListeners;
            if ("object" != typeof t || t instanceof RegExp)
                for (i = n.length; i--;) o.call(this, t, n[i]);
            else
                for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
            return this
        }, i.removeEvent = function(e) {
            var t, n = typeof e,
                i = this._getEvents();
            if ("string" === n) delete i[e];
            else if ("object" === n)
                for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
            else delete this._events;
            return this
        }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
            var n, i, r, o, s = this.getListenersAsObject(e);
            for (r in s)
                if (s.hasOwnProperty(r))
                    for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
            return this
        }, i.trigger = n("emitEvent"), i.emit = function(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(e, t)
        }, i.setOnceReturnValue = function(e) {
            return this._onceReturnValue = e, this
        }, i._getOnceReturnValue = function() {
            return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
        }, i._getEvents = function() {
            return this._events || (this._events = {})
        }, e.noConflict = function() {
            return r.EventEmitter = o, e
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return e
        }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
    }.call(this),
    function(e) {
        function t(t) {
            var n = e.event;
            return n.target = n.target || n.srcElement || t, n
        }
        var n = document.documentElement,
            i = function() {};
        n.addEventListener ? i = function(e, t, n) {
            e.addEventListener(t, n, !1)
        } : n.attachEvent && (i = function(e, n, i) {
            e[n + i] = i.handleEvent ? function() {
                var n = t(e);
                i.handleEvent.call(i, n)
            } : function() {
                var n = t(e);
                i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var r = function() {};
        n.removeEventListener ? r = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        } : n.detachEvent && (r = function(e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var o = {
            bind: i,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
    }(this),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
            return t(e, n, i)
        }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
    }(window, function(e, t, n) {
        function i(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function r(e) {
            return "[object Array]" === d.call(e)
        }

        function o(e) {
            var t = [];
            if (r(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function s(e, t, n) {
            if (!(this instanceof s)) return new s(e, t);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), l && (this.jqDeferred = new l.Deferred);
            var r = this;
            setTimeout(function() {
                r.check()
            })
        }

        function a(e) {
            this.img = e
        }

        function u(e) {
            this.src = e, h[e] = this
        }
        var l = e.jQuery,
            c = e.console,
            f = void 0 !== c,
            d = Object.prototype.toString;
        s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function() {
            this.images = [];
            for (var e = 0, t = this.elements.length; t > e; e++) {
                var n = this.elements[e];
                "IMG" === n.nodeName && this.addImage(n);
                var i = n.nodeType;
                if (i && (1 === i || 9 === i || 11 === i))
                    for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
                        var a = r[o];
                        this.addImage(a)
                    }
            }
        }, s.prototype.addImage = function(e) {
            var t = new a(e);
            this.images.push(t)
        }, s.prototype.check = function() {
            function e(e, r) {
                return t.options.debug && f && c.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
            }
            var t = this,
                n = 0,
                i = this.images.length;
            if (this.hasAnyBroken = !1, !i) return void this.complete();
            for (var r = 0; i > r; r++) {
                var o = this.images[r];
                o.on("confirm", e), o.check()
            }
        }, s.prototype.progress = function(e) {
            this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
            var t = this;
            setTimeout(function() {
                t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
            })
        }, s.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var t = this;
            setTimeout(function() {
                if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                    var n = t.hasAnyBroken ? "reject" : "resolve";
                    t.jqDeferred[n](t)
                }
            })
        }, l && (l.fn.imagesLoaded = function(e, t) {
            var n = new s(this, e, t);
            return n.jqDeferred.promise(l(this))
        }), a.prototype = new t, a.prototype.check = function() {
            var e = h[this.img.src] || new u(this.img.src);
            if (e.isConfirmed) return void this.confirm(e.isLoaded, "cached was confirmed");
            if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            var t = this;
            e.on("confirm", function(e, n) {
                return t.confirm(e.isLoaded, n), !0
            }), e.check()
        }, a.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emit("confirm", this, t)
        };
        var h = {};
        return u.prototype = new t, u.prototype.check = function() {
            if (!this.isChecked) {
                var e = new Image;
                n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
            }
        }, u.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, u.prototype.onload = function(e) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(e)
        }, u.prototype.onerror = function(e) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
        }, u.prototype.confirm = function(e, t) {
            this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
        }, u.prototype.unbindProxyEvents = function(e) {
            n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
        }, s
    }),
    function(e) {
        "use strict";

        function t() {
            setTimeout(function() {
                toc.setOption("showEffectSpeed", 180)
            }, 50)
        }
        var n = function() {
                $(".tocify-wrapper").removeClass("open"), $("#nav-button").removeClass("open")
            },
            i = function() {
                e.toc = $("#toc").tocify({
                    selectors: "h1, h2",
                    extendPage: !1,
                    theme: "none",
                    smoothScroll: !1,
                    showEffectSpeed: 0,
                    hideEffectSpeed: 180,
                    ignoreSelector: ".toc-ignore",
                    highlightOffset: 100,
                    scrollTo: -1,
                    scrollHistory: !0,
                    hashGenerator: function(e, t) {
                        return t.prop("id")
                    }
                }).data("toc-tocify"), $("#nav-button").click(function() {
                    return $(".tocify-wrapper").toggleClass("open"), $("#nav-button").toggleClass("open"), !1
                }), $(".page-wrapper").click(n), $(".tocify-item").click(n)
            };
        $(function() {
            i(), t(), setupLanguages($("body").data("languages")), $(".content").imagesLoaded(function() {
                e.toc.calculateHeights()
            })
        })
    }(window); 