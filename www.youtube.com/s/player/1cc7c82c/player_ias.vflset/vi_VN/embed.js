(function(g) {
    var window = this;
    'use strict';
    var PPa = function(a, b) {
            var c = (b - a.i) / (a.u - a.i);
            if (0 >= c) return 0;
            if (1 <= c) return 1;
            for (var d = 0, e = 1, f = 0, h = 0; 8 > h; h++) {
                f = g.dr(a, c);
                var l = (g.dr(a, c + 1E-6) - f) / 1E-6;
                if (1E-6 > Math.abs(f - b)) return c;
                if (1E-6 > Math.abs(l)) break;
                else f < b ? d = c : e = c, c -= (f - b) / l
            }
            for (h = 0; 1E-6 < Math.abs(f - b) && 8 > h; h++) f < b ? (d = c, c = (c + e) / 2) : (e = c, c = (c + d) / 2), f = g.dr(a, c);
            return c
        },
        w5 = function() {
            return {
                G: "svg",
                W: {
                    height: "100%",
                    version: "1.1",
                    viewBox: "0 0 110 26",
                    width: "100%"
                },
                T: [{
                    G: "path",
                    Ob: !0,
                    L: "ytp-svg-fill",
                    W: {
                        d: "M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"
                    }
                }]
            }
        },
        x5 = function(a) {
            g.I.call(this);
            this.callback = a;
            this.B = new g.cr(0, 0, .4, 0, .2, 1, 1, 1);
            this.delay = new g.Eq(this.next, window, this);
            this.startTime = this.duration = this.u = this.i = NaN;
            g.J(this, this.delay)
        },
        y5 = function(a) {
            g.V.call(this, {
                G: "div",
                L: "ytp-related-on-error-overlay"
            });
            var b = this;
            this.api = a;
            this.D = this.i = 0;
            this.C = new g.ID(this);
            this.B = [];
            this.suggestionData = [];
            this.containerWidth = 0;
            this.title = new g.V({
                G: "h2",
                L: "ytp-related-title",
                xa: "{{title}}"
            });
            this.previous = new g.V({
                G: "button",
                Ia: ["ytp-button", "ytp-previous"],
                W: {
                    "aria-label": "Hi\u1ec3n th\u1ecb c\u00e1c video \u0111\u1ec1 xu\u1ea5t tr\u01b0\u1edbc \u0111\u00f3"
                },
                T: [g.fL()]
            });
            this.N = new x5(function(f) {
                b.suggestions.element.scrollLeft = -f
            });
            this.tileWidth = this.u = 0;
            this.J = !0;
            this.next = new g.V({
                G: "button",
                Ia: ["ytp-button", "ytp-next"],
                W: {
                    "aria-label": "Hi\u1ec7n th\u00eam video \u0111\u1ec1 xu\u1ea5t"
                },
                T: [g.gL()]
            });
            g.J(this, this.C);
            a = a.U();
            this.K = a.u;
            g.J(this, this.title);
            this.title.Fa(this.element);
            this.suggestions = new g.V({
                G: "div",
                L: "ytp-suggestions"
            });
            g.J(this, this.suggestions);
            this.suggestions.Fa(this.element);
            g.J(this, this.previous);
            this.previous.Fa(this.element);
            this.previous.Sa("click", this.aP, this);
            g.J(this, this.N);
            for (var c = {
                    Mq: 0
                }; 16 >
                c.Mq; c = {
                    Mq: c.Mq
                }, c.Mq++) {
                var d = new g.V({
                    G: "a",
                    L: "ytp-suggestion-link",
                    W: {
                        href: "{{link}}",
                        target: a.K,
                        "aria-label": "{{aria_label}}"
                    },
                    T: [{
                        G: "div",
                        L: "ytp-suggestion-image",
                        T: [{
                            G: "div",
                            W: {
                                "data-is-live": "{{is_live}}"
                            },
                            L: "ytp-suggestion-duration",
                            xa: "{{duration}}"
                        }]
                    }, {
                        G: "div",
                        L: "ytp-suggestion-title",
                        W: {
                            title: "{{hover_title}}"
                        },
                        xa: "{{title}}"
                    }, {
                        G: "div",
                        L: "ytp-suggestion-author",
                        xa: "{{views_or_author}}"
                    }]
                });
                g.J(this, d);
                d.Fa(this.suggestions.element);
                var e = d.Ga("ytp-suggestion-link");
                g.Ql(e, "transitionDelay",
                    c.Mq / 20 + "s");
                this.C.S(e, "click", function(f) {
                    return function(h) {
                        var l = b.suggestionData[f.Mq],
                            m = l.sessionData;
                        g.FN(h, b.api, b.K, m || void 0) && b.api.Oj(l.videoId, m, l.playlistId)
                    }
                }(c));
                this.B.push(d)
            }
            g.J(this, this.next);
            this.next.Fa(this.element);
            this.next.Sa("click", this.ZO, this);
            this.C.S(this.api, "videodatachange", this.rb);
            this.resize(this.api.gb().getPlayerSize());
            this.rb();
            this.show()
        },
        z5 = function(a) {
            a.next.element.style.bottom = a.D + "px";
            a.previous.element.style.bottom = a.D + "px";
            var b = a.u,
                c = a.containerWidth - a.suggestionData.length * (a.tileWidth + a.i);
            g.O(a.element, "ytp-scroll-min", 0 <= b);
            g.O(a.element, "ytp-scroll-max", b <= c)
        },
        QPa = function(a) {
            for (var b = 0; b < a.suggestionData.length; b++) {
                var c = a.suggestionData[b],
                    d = a.B[b],
                    e = c.shortViewCount ? c.shortViewCount : c.author,
                    f = c.Ck();
                g.hF(a.api.U()) && (f = g.wi(f, g.FM("emb_rel_err")));
                d.element.style.display = "";
                var h = d.Ga("ytp-suggestion-title");
                g.ar.test(c.title) ? h.dir = "rtl" : g.hLa.test(c.title) && (h.dir = "ltr");
                h = d.Ga("ytp-suggestion-author");
                g.ar.test(e) ? h.dir = "rtl" : g.hLa.test(e) && (h.dir = "ltr");
                h = c.isLivePlayback ? "Tr\u1ef1c ti\u1ebfp" : c.lengthSeconds ? g.XL(c.lengthSeconds) : "";
                d.update({
                    views_or_author: e,
                    duration: h,
                    link: f,
                    hover_title: c.title,
                    title: c.title,
                    aria_label: c.zl || null,
                    is_live: c.isLivePlayback
                });
                d = d.Ga("ytp-suggestion-image");
                c = c.Ge();
                d.style.backgroundImage = c ? "url(" + c + ")" : ""
            }
            for (; b < a.B.length; b++) a.B[b].element.style.display = "none";
            z5(a)
        },
        A5 = function(a) {
            g.KN.call(this, a);
            var b = this,
                c = a.U(),
                d = {
                    G: "svg",
                    W: {
                        fill: "#fff",
                        height: "100%",
                        viewBox: "0 0 24 24",
                        width: "100%"
                    },
                    T: [{
                        G: "path",
                        W: {
                            d: "M0 0h24v24H0V0z",
                            fill: "none"
                        }
                    }, {
                        G: "path",
                        W: {
                            d: "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"
                        }
                    }]
                };
            g.sF(c) && (d = {
                G: "svg",
                W: {
                    fill: "none",
                    height: "100%",
                    viewBox: "0 0 25 25",
                    width: "100%"
                },
                T: [{
                        G: "g",
                        W: {
                            "clip-path": "url(#clip0)",
                            fill: "#fff"
                        },
                        T: [{
                            G: "path",
                            W: {
                                d: "M12.57.98C6.21.98 1.05 6.14 1.05 12.5c0 6.36 5.16 11.52 11.52 11.52 6.36 0 11.52-5.16 11.52-11.52C24.09 6.14 18.93.98 12.57.98zm0 18.34c-3.77 0-6.82-3.05-6.82-6.82 0-3.77 3.05-6.82 6.82-6.82 3.77 0 6.82 3.05 6.82 6.82 0 3.77-3.05 6.82-6.82 6.82z"
                            }
                        }, {
                            G: "path",
                            W: {
                                d: "M12.57 6.52c-3.29 0-5.98 2.68-5.98 5.98 0 3.3 2.68 5.98 5.98 5.98 3.3 0 5.98-2.68 5.98-5.98 0-3.3-2.69-5.98-5.98-5.98zm-2.25 9.38V9.1l5.88 3.4-5.88 3.4z"
                            }
                        }]
                    },
                    {
                        G: "defs",
                        T: [{
                            G: "clipPath",
                            W: {
                                id: "clip0"
                            },
                            T: [{
                                G: "path",
                                W: {
                                    d: "M0 0h24v24H0z",
                                    fill: "#fff",
                                    transform: "translate(.57 .5)"
                                }
                            }]
                        }]
                    }
                ]
            });
            c = new g.V({
                G: "a",
                L: "ytp-small-redirect",
                W: {
                    href: g.QF(c),
                    target: c.K,
                    "aria-label": "Truy c\u1eadp v\u00e0o YouTube \u0111\u1ec3 t\u00ecm ki\u1ebfm nhi\u1ec1u video h\u01a1n"
                },
                T: [d]
            });
            c.Fa(this.element);
            g.J(this, c);
            this.i = new y5(a);
            this.i.Fa(this.element);
            g.J(this, this.i);
            this.S(a, "videodatachange", function() {
                b.show()
            });
            this.resize(this.api.gb().getPlayerSize())
        },
        RPa = function(a, b) {
            a.Ga("ytp-error-content").style.paddingTop = "0px";
            var c = a.Ga("ytp-error-content"),
                d = c.clientHeight;
            a.i.resize(b, b.height - d);
            c.style.paddingTop = (b.height - a.i.element.clientHeight) / 2 - d / 2 + "px"
        },
        SPa = function(a, b) {
            var c, d, e, f, h;
            b.reason && (B5(b.reason) ? h = g.HA(b.reason) : h = g.LN(g.GA(b.reason)), a.jd(h, "content"));
            var l;
            b.subreason && (B5(b.subreason) ? l = g.HA(b.subreason) : l = g.LN(g.GA(b.subreason)), a.jd(l, "subreason"));
            if (b.proceedButton && b.proceedButton.buttonRenderer && (a = a.Ga("ytp-error-content-wrap-subreason"), h = b.proceedButton.buttonRenderer, b = g.wg("A"), h.text && h.text.simpleText)) {
                l = h.text.simpleText;
                b.textContent = l;
                a: {
                    for (var m = g.ig("A", a), n = 0; n < m.length; n++)
                        if (m[n].textContent === l) {
                            l = !0;
                            break a
                        }
                    l = !1
                }
                l || (l = null === (d = null ===
                    (c = null === h || void 0 === h ? void 0 : h.navigationEndpoint) || void 0 === c ? void 0 : c.urlEndpoint) || void 0 === d ? void 0 : d.url, h = null === (f = null === (e = null === h || void 0 === h ? void 0 : h.navigationEndpoint) || void 0 === e ? void 0 : e.urlEndpoint) || void 0 === f ? void 0 : f.target, l && b.setAttribute("href", l), h && b.setAttribute("target", h), h = g.wg("DIV"), h.appendChild(b), a.appendChild(h))
            }
        },
        B5 = function(a) {
            if (a.runs)
                for (var b = 0; b < a.runs.length; b++)
                    if (a.runs[b].navigationEndpoint) return !0;
            return !1
        },
        C5 = function(a, b) {
            g.V.call(this, {
                G: "a",
                Ia: ["ytp-impression-link"],
                W: {
                    target: "{{target}}",
                    href: "{{url}}",
                    "aria-label": "Xem tr\u00ean YouTube"
                },
                T: [{
                    G: "div",
                    L: "ytp-impression-link-content",
                    W: {
                        "aria-hidden": "true"
                    },
                    T: [{
                        G: "div",
                        L: "ytp-impression-link-text",
                        xa: "Xem tr\u00ean"
                    }, {
                        G: "div",
                        L: "ytp-impression-link-logo",
                        T: [w5()]
                    }]
                }]
            });
            this.api = a;
            this.u = b;
            this.Va("target", a.U().K);
            this.api.Vb(this.element, this, 96714);
            this.S(this.api, "presentingplayerstatechange", this.nh);
            this.S(this.api, "videoplayerreset", this.i);
            this.S(this.element, "click", this.onClick);
            this.i()
        },
        D5 = function(a) {
            g.V.call(this, {
                G: "div",
                L: "ytp-muted-autoplay-endscreen-overlay",
                T: [{
                    G: "div",
                    L: "ytp-muted-autoplay-end-panel",
                    T: [{
                        G: "div",
                        L: "ytp-muted-autoplay-end-text",
                        xa: "{{text}}"
                    }]
                }]
            });
            this.api = a;
            this.B = this.Ga("ytp-muted-autoplay-end-panel");
            this.i = new g.DN(this.api);
            g.J(this, this.i);
            this.i.Fa(this.B, 0);
            this.api.Vb(this.element, this, 52428);
            this.S(this.api, "presentingplayerstatechange", this.u);
            this.Sa("click", this.onClick);
            this.hide()
        },
        E5 = function(a) {
            g.V.call(this, {
                G: "div",
                L: "ytp-muted-autoplay-overlay",
                T: [{
                    G: "div",
                    L: "ytp-muted-autoplay-bottom-buttons",
                    T: [{
                        G: "button",
                        Ia: ["ytp-muted-autoplay-equalizer", "ytp-button"],
                        T: [{
                            G: "div",
                            Ia: ["ytp-muted-autoplay-equalizer-icon"],
                            T: [{
                                G: "svg",
                                W: {
                                    height: "100%",
                                    version: "1.1",
                                    viewBox: "-4 -4 24 24",
                                    width: "100%"
                                },
                                T: [{
                                    G: "g",
                                    W: {
                                        fill: "#fff"
                                    },
                                    T: [{
                                        G: "rect",
                                        L: "ytp-equalizer-bar-left",
                                        W: {
                                            height: "9",
                                            width: "4",
                                            x: "1",
                                            y: "7"
                                        }
                                    }, {
                                        G: "rect",
                                        L: "ytp-equalizer-bar-middle",
                                        W: {
                                            height: "14",
                                            width: "4",
                                            x: "6",
                                            y: "2"
                                        }
                                    }, {
                                        G: "rect",
                                        L: "ytp-equalizer-bar-right",
                                        W: {
                                            height: "12",
                                            width: "4",
                                            x: "11",
                                            y: "4"
                                        }
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            });
            this.api = a;
            this.bottomButtons = this.Ga("ytp-muted-autoplay-bottom-buttons");
            this.Ga("ytp-muted-autoplay-equalizer");
            this.B = new g.M(this.u, 4E3, this);
            a.Vb(this.element, this, 39306);
            this.S(a, "presentingplayerstatechange", this.i);
            this.S(a, "onMutedAutoplayStarts", this.i);
            this.Sa("click", this.onClick);
            this.hide()
        },
        F5 = function(a, b) {
            g.V.call(this, {
                G: "div",
                L: "ytp-pause-overlay"
            });
            var c = this;
            this.api = a;
            this.J = b;
            this.i = new g.ID(this);
            this.C = new g.KL(this, 1E3, !1, 100);
            this.B = [];
            this.suggestionData = [];
            this.containerWidth = 0;
            this.D = !1;
            this.ma = 0;
            this.title = new g.V({
                G: "h2",
                L: "ytp-related-title",
                xa: "{{title}}"
            });
            this.previous = new g.V({
                G: "button",
                Ia: ["ytp-button", "ytp-previous"],
                W: {
                    "aria-label": "Hi\u1ec3n th\u1ecb c\u00e1c video \u0111\u1ec1 xu\u1ea5t tr\u01b0\u1edbc \u0111\u00f3"
                },
                T: [g.fL()]
            });
            this.N = new x5(function(f) {
                c.suggestions.element.scrollLeft = -f
            });
            this.V = this.tileWidth = this.u = 0;
            this.next = new g.V({
                G: "button",
                Ia: ["ytp-button", "ytp-next"],
                W: {
                    "aria-label": "Hi\u1ec7n th\u00eam video \u0111\u1ec1 xu\u1ea5t"
                },
                T: [g.gL()]
            });
            this.expandButton = new g.V({
                G: "button",
                Ia: ["ytp-button", "ytp-expand"],
                xa: "Video kh\u00e1c"
            });
            g.J(this, this.i);
            g.J(this, this.C);
            b = a.U();
            "0" === b.controlsType && g.N(a.getRootNode(), "ytp-pause-overlay-controls-hidden");
            this.K = b.u;
            g.J(this, this.title);
            this.title.Fa(this.element);
            this.suggestions = new g.V({
                G: "div",
                L: "ytp-suggestions"
            });
            g.J(this,
                this.suggestions);
            this.suggestions.Fa(this.element);
            g.J(this, this.previous);
            this.previous.Fa(this.element);
            this.previous.Sa("click", this.cP, this);
            g.J(this, this.N);
            for (a = {
                    Nq: 0
                }; 16 > a.Nq; a = {
                    Nq: a.Nq
                }, a.Nq++) {
                var d = new g.V({
                    G: "a",
                    L: "ytp-suggestion-link",
                    W: {
                        href: "{{link}}",
                        target: b.K,
                        "aria-label": "{{aria_label}}"
                    },
                    T: [{
                        G: "div",
                        L: "ytp-suggestion-image"
                    }, {
                        G: "div",
                        L: "ytp-suggestion-overlay",
                        W: {
                            style: "{{blink_rendering_hack}}",
                            "aria-hidden": "{{aria_hidden}}"
                        },
                        T: [{
                                G: "div",
                                L: "ytp-suggestion-title",
                                xa: "{{title}}"
                            },
                            {
                                G: "div",
                                L: "ytp-suggestion-author",
                                xa: "{{author_and_views}}"
                            }, {
                                G: "div",
                                W: {
                                    "data-is-live": "{{is_live}}"
                                },
                                L: "ytp-suggestion-duration",
                                xa: "{{duration}}"
                            }
                        ]
                    }]
                });
                g.J(this, d);
                d.Fa(this.suggestions.element);
                var e = d.Ga("ytp-suggestion-link");
                g.Ql(e, "transitionDelay", a.Nq / 20 + "s");
                this.i.S(e, "click", function(f) {
                    return function(h) {
                        var l = f.Nq;
                        if (1E3 > (0, g.Q)() - c.ma) g.uu(h), document.activeElement.blur();
                        else {
                            l = c.suggestionData[l];
                            var m = l.sessionData;
                            g.FN(h, c.api, c.K, m || void 0) && c.api.Oj(l.videoId, m, l.playlistId)
                        }
                    }
                }(a));
                this.B.push(d)
            }
            g.J(this, this.next);
            this.next.Fa(this.element);
            this.next.Sa("click", this.bP, this);
            b = new g.V({
                G: "button",
                Ia: ["ytp-button", "ytp-collapse"],
                W: {
                    "aria-label": "\u1ea8n ph\u1ea7n Video kh\u00e1c"
                },
                T: [{
                    G: "svg",
                    W: {
                        height: "100%",
                        viewBox: "0 0 16 16",
                        width: "100%"
                    },
                    T: [{
                        G: "path",
                        W: {
                            d: "M13 4L12 3 8 7 4 3 3 4 7 8 3 12 4 13 8 9 12 13 13 12 9 8z",
                            fill: "#fff"
                        }
                    }]
                }]
            });
            g.J(this, b);
            b.Fa(this.element);
            b.Sa("click", this.nT, this);
            g.J(this, this.expandButton);
            this.expandButton.Fa(this.element);
            this.expandButton.Sa("click",
                this.oT, this);
            this.i.S(this.api, "appresize", this.yb);
            this.i.S(this.api, "fullscreentoggled", this.gm);
            this.i.S(this.api, "presentingplayerstatechange", this.Lc);
            this.i.S(this.api, "videodatachange", this.rb);
            this.yb(this.api.gb().getPlayerSize());
            this.rb()
        },
        G5 = function(a) {
            var b = a.J.Qe() ? 32 : 16;
            b = a.V / 2 + b;
            a.next.element.style.bottom = b + "px";
            a.previous.element.style.bottom = b + "px";
            b = a.u;
            var c = a.containerWidth - a.suggestionData.length * (a.tileWidth + 8);
            g.O(a.element, "ytp-scroll-min", 0 <= b);
            g.O(a.element, "ytp-scroll-max", b <= c)
        },
        TPa = function(a) {
            for (var b = 0; b < a.suggestionData.length; b++) {
                var c = a.suggestionData[b],
                    d = a.B[b],
                    e = c.shortViewCount ? c.author + " \u2022 " + c.shortViewCount : c.author;
                d.element.style.display = "";
                g.gLa.test(c.title) && (d.Ga("ytp-suggestion-title").dir = "rtl");
                g.gLa.test(e) && (d.Ga("ytp-suggestion-author").dir = "rtl");
                var f = c.isLivePlayback ? "Tr\u1ef1c ti\u1ebfp" : c.lengthSeconds ? g.XL(c.lengthSeconds) : "";
                var h = c.Ck();
                g.hF(a.api.U()) && (h = g.wi(h, g.FM("emb_rel_pause")));
                d.update({
                    author_and_views: e,
                    duration: f,
                    link: h,
                    title: c.title,
                    aria_label: c.zl || null,
                    is_live: c.isLivePlayback,
                    aria_hidden: !(!c.zl || a.api.U().Y("embeds_rv_aria_hidden_killswitch")),
                    blink_rendering_hack: g.gj ||
                        g.fF ? "will-change: opacity" : void 0
                });
                d = d.Ga("ytp-suggestion-image");
                c = c.Ge();
                d.style.backgroundImage = c ? "url(" + c + ")" : ""
            }
            for (; b < a.B.length; b++) a.B[b].element.style.display = "none";
            G5(a)
        },
        H5 = function(a) {
            var b = a.U();
            g.V.call(this, {
                G: "a",
                Ia: ["ytp-watermark", "yt-uix-sessionlink"],
                W: {
                    target: b.K,
                    href: "{{url}}",
                    "aria-label": g.BI("Xem tr\u00ean $WEBSITE", {
                        WEBSITE: g.CF(b)
                    }),
                    "data-sessionlink": "feature=player-watermark"
                },
                T: [w5()]
            });
            this.api = a;
            this.i = null;
            this.u = !1;
            this.state = a.wb();
            a.Vb(this.element, this, 76758);
            this.S(a, "videodatachange", this.VF);
            this.S(a, "videodatachange", this.rb);
            this.S(a, "presentingplayerstatechange", this.dP);
            this.S(a, "appresize", this.yb);
            b = this.state;
            this.state !== b && (this.state = b);
            this.VF();
            this.rb();
            this.yb(a.gb().getPlayerSize())
        },
        I5 = function(a) {
            g.gN.call(this, a);
            this.I = a;
            this.u = new g.ID(this);
            g.J(this, this.u);
            this.load()
        };
    g.w(x5, g.I);
    x5.prototype.start = function(a, b, c) {
        this.i = a;
        this.u = b;
        this.duration = c;
        this.startTime = (0, g.Q)();
        this.next()
    };
    x5.prototype.next = function() {
        var a = (0, g.Q)() - this.startTime;
        var b = this.B;
        a = PPa(b, a / this.duration);
        if (0 == a) b = b.D;
        else if (1 == a) b = b.N;
        else {
            var c = g.Xf(b.D, b.J, a),
                d = g.Xf(b.J, b.K, a);
            b = g.Xf(b.K, b.N, a);
            c = g.Xf(c, d, a);
            d = g.Xf(d, b, a);
            b = g.Xf(c, d, a)
        }
        b = g.Vf(b, 0, 1);
        this.callback((this.u - this.i) * b + this.i);
        1 > b && this.delay.start()
    };
    g.w(y5, g.V);
    g.k = y5.prototype;
    g.k.hide = function() {
        this.J = !0;
        g.V.prototype.hide.call(this)
    };
    g.k.show = function() {
        this.J = !1;
        g.V.prototype.show.call(this)
    };
    g.k.isHidden = function() {
        return this.J
    };
    g.k.ZO = function() {
        this.scrollTo(this.u - this.containerWidth)
    };
    g.k.aP = function() {
        this.scrollTo(this.u + this.containerWidth)
    };
    g.k.resize = function(a, b) {
        var c = this.api.U(),
            d = 16 / 9,
            e = 650 <= a.width,
            f = 480 > a.width || 290 > a.height,
            h = Math.min(this.suggestionData.length, this.B.length);
        if (150 >= Math.min(a.width, a.height) || 0 === h || !c.Bb) this.hide();
        else {
            var l;
            if (e) {
                var m = l = 28;
                this.i = 16
            } else this.i = m = l = 8;
            if (f) {
                var n = 6;
                e = 14;
                var p = 12;
                f = 24;
                c = 12
            } else n = 8, e = 18, p = 16, f = 36, c = 16;
            a = a.width - (48 + l + m);
            l = Math.ceil(a / 150);
            l = Math.min(3, l);
            l = a / l - this.i;
            m = Math.floor(l / d);
            b && m + 100 > b && 50 < l && (m = Math.max(b, 50 / d), l = Math.ceil(a / (d * (m - 100) + this.i)), l = a / l - this.i,
                m = Math.floor(l / d));
            50 > l || g.UM(this.api) ? this.hide() : this.show();
            for (b = 0; b < h; b++) {
                d = this.B[b];
                var q = d.Ga("ytp-suggestion-image");
                q.style.width = l + "px";
                q.style.height = m + "px";
                d.Ga("ytp-suggestion-title").style.width = l + "px";
                d.Ga("ytp-suggestion-author").style.width = l + "px";
                d = d.Ga("ytp-suggestion-duration");
                d.style.display = d && 100 > l ? "none" : ""
            }
            h = e + n + p + 4;
            this.D = h + c + (m - f) / 2;
            this.suggestions.element.style.height = m + h + "px";
            this.tileWidth = l;
            this.containerWidth = a;
            this.u = 0;
            this.suggestions.element.scrollLeft = -0;
            z5(this)
        }
    };
    g.k.rb = function() {
        var a = this.api.getVideoData(),
            b = this.api.U();
        this.K = a.D ? !1 : b.u;
        a.suggestions ? this.suggestionData = g.Io(a.suggestions, function(c) {
            return c && !c.playlistId
        }) : this.suggestionData.length = 0;
        QPa(this);
        a.D ? this.title.update({
            title: g.BI("Video kh\u00e1c t\u1eeb $DNI_RELATED_CHANNEL", {
                DNI_RELATED_CHANNEL: a.author
            })
        }) : this.title.update({
            title: "Xem th\u00eam video tr\u00ean YouTube"
        })
    };
    g.k.scrollTo = function(a) {
        a = g.Vf(a, this.containerWidth - this.suggestionData.length * (this.tileWidth + this.i), 0);
        this.N.start(this.u, a, 1E3);
        this.u = a;
        z5(this)
    };
    g.w(A5, g.KN);
    A5.prototype.show = function() {
        g.KN.prototype.show.call(this);
        RPa(this, this.api.gb().getPlayerSize())
    };
    A5.prototype.resize = function(a) {
        g.KN.prototype.resize.call(this, a);
        RPa(this, a);
        g.O(this.element, "related-on-error-overlay-visible", !this.i.isHidden())
    };
    A5.prototype.u = function(a) {
        g.KN.prototype.u.call(this, a);
        var b = this.api.getVideoData();
        if (b.dC || b.playerErrorMessageRenderer)(a = b.dC) ? SPa(this, a) : b.playerErrorMessageRenderer && SPa(this, b.playerErrorMessageRenderer);
        else {
            var c;
            a.oi && (b.Tp ? B5(b.Tp) ? c = g.HA(b.Tp) : c = g.LN(g.GA(b.Tp)) : c = g.LN(a.oi), this.jd(c, "subreason"))
        }
    };
    g.w(C5, g.V);
    C5.prototype.nh = function() {
        this.api.wb().isCued() || (this.hide(), this.api.kb(this.element, !1))
    };
    C5.prototype.i = function() {
        var a = this.api.getVideoData(),
            b = this.api.U(),
            c = this.api.getVideoData().D,
            d = b.Eb,
            e = !b.Bb,
            f = this.u.qf();
        b = g.sF(b);
        d || f || c || e || b || !a.videoId ? (this.hide(), this.api.kb(this.element, !1)) : (a = g.wi(this.api.getVideoUrl(), g.FM("emb_imp_woyt")), this.Va("url", a), this.show())
    };
    C5.prototype.onClick = function(a) {
        var b = g.wi(this.api.getVideoUrl(), g.FM("emb_imp_woyt"));
        g.GN(b, this.api, a);
        this.api.Gb(this.element)
    };
    C5.prototype.show = function() {
        this.api.wb().isCued() && (g.V.prototype.show.call(this), this.api.Fv(this.element) && this.api.kb(this.element, !0))
    };
    g.w(D5, g.V);
    D5.prototype.u = function() {
        var a = this.api.wb(),
            b = this.api.getVideoData();
        this.api.U().experiments.oa("embeds_enable_muted_autoplay") && b.mutedAutoplay && (g.U(a, 2) && !this.Ab ? (this.show(), this.i.show(), a = this.api.getVideoData(), this.Va("text", a.gG), g.O(this.element, "ytp-muted-autoplay-show-end-panel", !0), this.api.kb(this.element, this.Ab), this.api.Na("onMutedAutoplayEnds")) : this.hide())
    };
    D5.prototype.onClick = function() {
        var a = this.api.getVideoData(),
            b = this.api.getCurrentTime();
        a.mutedAutoplay = !1;
        a.endSeconds = NaN;
        g.CG(a);
        this.api.loadVideoById(a.videoId, b);
        this.api.Gb(this.element);
        this.hide()
    };
    g.w(E5, g.V);
    E5.prototype.i = function() {
        var a = this.api.wb(),
            b = this.api.getVideoData();
        this.api.U().experiments.oa("embeds_enable_muted_autoplay") && b.mutedAutoplay && !g.U(a, 2) ? this.Ab || (g.V.prototype.show.call(this), this.B.start(), this.api.kb(this.element, this.Ab)) : this.hide()
    };
    E5.prototype.u = function() {
        g.O(this.element, "ytp-muted-autoplay-hide-watermark", !0)
    };
    E5.prototype.onClick = function() {
        var a = this.api.getVideoData(),
            b = this.api.getCurrentTime();
        a.mutedAutoplay = !1;
        a.endSeconds = NaN;
        g.CG(a);
        this.api.loadVideoById(a.videoId, b);
        this.api.Gb(this.element)
    };
    g.w(F5, g.V);
    g.k = F5.prototype;
    g.k.hide = function() {
        g.Qq(this.api.getRootNode(), "ytp-expand-pause-overlay");
        g.V.prototype.hide.call(this)
    };
    g.k.nT = function() {
        this.D = !0;
        g.Qq(this.api.getRootNode(), "ytp-expand-pause-overlay");
        this.expandButton.focus()
    };
    g.k.oT = function() {
        this.D = !1;
        g.N(this.api.getRootNode(), "ytp-expand-pause-overlay")
    };
    g.k.bP = function() {
        this.scrollTo(this.u - this.containerWidth)
    };
    g.k.cP = function() {
        this.scrollTo(this.u + this.containerWidth)
    };
    g.k.gm = function() {
        this.yb(this.api.gb().getPlayerSize())
    };
    g.k.Lc = function(a) {
        if (!(g.U(a.state, 1) || g.U(a.state, 16) || g.U(a.state, 32))) {
            var b = !this.api.U().experiments.oa("embeds_disable_pauseoverlay_on_autoplay_blocked_killswitch") && g.U(a.state, 1024);
            !g.U(a.state, 4) || g.U(a.state, 2) || b ? this.C.hide() : this.suggestionData.length && (this.D || (g.N(this.api.getRootNode(), "ytp-expand-pause-overlay"), G5(this)), this.C.show(), this.ma = (0, g.Q)())
        }
    };
    g.k.yb = function(a) {
        var b = 16 / 9,
            c = this.J.Qe();
        a = a.width - (c ? 112 : 58);
        c = Math.ceil(a / (c ? 320 : 192));
        c = (a - 8 * c) / c;
        b = Math.floor(c / b);
        for (var d = 0; d < this.B.length; d++) {
            var e = this.B[d].Ga("ytp-suggestion-image");
            e.style.width = c + "px";
            e.style.height = b + "px"
        }
        this.suggestions.element.style.height = b + "px";
        this.tileWidth = c;
        this.V = b;
        this.containerWidth = a;
        this.u = 0;
        this.suggestions.element.scrollLeft = -0;
        G5(this)
    };
    g.k.rb = function() {
        var a = this.api.U(),
            b = this.api.getVideoData();
        this.K = b.D ? !1 : a.u;
        b.suggestions ? this.suggestionData = g.Io(b.suggestions, function(c) {
            return c && !c.playlistId
        }) : this.suggestionData.length = 0;
        TPa(this);
        b.D ? this.title.update({
            title: g.BI("Video kh\u00e1c t\u1eeb $DNI_RELATED_CHANNEL", {
                DNI_RELATED_CHANNEL: b.author
            })
        }) : this.title.update({
            title: "Video kh\u00e1c"
        })
    };
    g.k.scrollTo = function(a) {
        a = g.Vf(a, this.containerWidth - this.suggestionData.length * (this.tileWidth + 8), 0);
        this.N.start(this.u, a, 1E3);
        this.u = a;
        G5(this)
    };
    g.w(H5, g.V);
    g.k = H5.prototype;
    g.k.VF = function() {
        var a = this.api.getVideoData(),
            b = this.api.getVideoData(1).D,
            c = this.api.U();
        a = (a.mutedAutoplay || c.Eb && !g.U(this.state, 2)) && !(b && c.pfpChazalUi);
        g.aL(this, a);
        this.api.kb(this.element, a)
    };
    g.k.dP = function(a) {
        a = a.state;
        this.state !== a && (this.state = a);
        this.VF()
    };
    g.k.rb = function() {
        if (this.api.getVideoData().videoId) {
            var a = this.api.getVideoUrl(!0, !1, !1, !0);
            this.Va("url", a);
            this.i || (this.i = this.Sa("click", this.onClick))
        } else this.i && (this.Va("url", null), this.pc(this.i), this.i = null)
    };
    g.k.onClick = function(a) {
        var b = this.api.getVideoUrl(!g.YL(a), !1, !0, !0);
        g.GN(b, this.api, a);
        this.api.Gb(this.element)
    };
    g.k.yb = function(a) {
        if ((a = 480 > a.width) && !this.u || !a && this.u) {
            var b = new g.V(w5()),
                c = this.Ga("ytp-watermark");
            g.O(c, "ytp-watermark-small", a);
            g.yg(c);
            b.Fa(c);
            this.u = a
        }
    };
    g.w(I5, g.gN);
    g.k = I5.prototype;
    g.k.Li = function() {
        return !1
    };
    g.k.create = function() {
        var a, b = this.I.U(),
            c = g.NM(this.I),
            d = null === (a = this.I.getVideoData()) || void 0 === a ? void 0 : a.clientPlaybackNonce;
        d && g.fB("cpn", d);
        b.Bb && (this.D = new F5(this.I, c), g.J(this, this.D), g.XM(this.I, this.D.element, 4));
        b.experiments.oa("embeds_enable_muted_autoplay") && (this.i = new E5(this.I), g.J(this, this.i), g.XM(this.I, this.i.element, 4), this.C = new D5(this.I), g.J(this, this.C), g.XM(this.I, this.C.element, 4));
        if (b.Eb || this.i) this.watermark = new H5(this.I), g.J(this, this.watermark), g.XM(this.I,
            this.watermark.element, 7);
        b.experiments.oa("embeds_impression_link") && (this.B = new C5(this.I, c), g.J(this, this.B), g.XM(this.I, this.B.element, 7));
        this.u.S(this.I, "appresize", this.yb);
        this.u.S(this.I, "presentingplayerstatechange", this.nh);
        this.u.S(this.I, "videodatachange", this.iX);
        this.u.S(this.I, "onMutedAutoplayStarts", this.iU);
        this.Tb(this.I.wb());
        this.player.Hd("embed")
    };
    g.k.yb = function() {
        var a = this.I.gb().getPlayerSize();
        this.re && this.re.resize(a)
    };
    g.k.nh = function(a) {
        this.Tb(a.state)
    };
    g.k.Tb = function(a) {
        g.U(a, 128) ? (this.re || (this.re = new A5(this.I), g.J(this, this.re), g.XM(this.I, this.re.element, 4)), this.re.u(a.getData()), this.re.show(), g.N(this.I.getRootNode(), "ytp-embed-error")) : this.re && (this.re.dispose(), this.re = null, g.Qq(this.I.getRootNode(), "ytp-embed-error"))
    };
    g.k.iU = function() {
        this.I.getVideoData().mutedAutoplay && this.i && this.watermark && this.watermark.Fa(this.i.bottomButtons, 0)
    };
    g.k.iX = function() {
        var a = this.I.getVideoData();
        this.watermark && this.i && !a.mutedAutoplay && g.Cg(this.i.element, this.watermark.element) && g.XM(this.I, this.watermark.element, 7)
    };
    g.rN.embed = I5;
})(_yt_player);