(function(g) {
    var window = this;
    'use strict';
    var OQa = function(a, b) {
            return g.Tb(a, b)
        },
        PQa = function(a, b) {
            b = b instanceof g.Lc ? b : g.Rc(b, /^data:image\//i.test(b));
            a.src = g.Mc(b)
        },
        QQa = function(a) {
            if (a instanceof g.Xh) return a;
            if ("function" == typeof a.Ng) return a.Ng(!1);
            if (g.Ka(a)) {
                var b = 0,
                    c = new g.Xh;
                c.i = function() {
                    for (;;) {
                        if (b >= a.length) throw g.ci;
                        if (b in a) return a[b++];
                        b++
                    }
                };
                c.next = c.i.bind(c);
                return c
            }
            throw Error("Not implemented");
        },
        RQa = function(a, b, c) {
            if (g.Ka(a)) try {
                g.Cb(a, b, c)
            } catch (d) {
                if (d !== g.ci) throw d;
            } else {
                a = QQa(a);
                try {
                    for (;;) b.call(c, a.i(), void 0, a)
                } catch (d) {
                    if (d !== g.ci) throw d;
                }
            }
        },
        N6 = function(a) {
            g.bk(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.Pa()).toString(36));
            return a
        },
        O6 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.gk(a.u, b, c)
        },
        SQa = function(a, b) {
            var c = [];
            RQa(b, function(d) {
                try {
                    var e = g.or.prototype.u.call(this, d, !0)
                } catch (f) {
                    if ("Storage: Invalid value was encountered" == f) return;
                    throw f;
                }
                void 0 === e ? c.push(d) : g.nr(e) && c.push(d)
            }, a);
            return c
        },
        TQa = function(a, b) {
            SQa(a, b).forEach(function(c) {
                g.or.prototype.remove.call(this, c)
            }, a)
        },
        UQa = function(a) {
            if (a.ea) {
                if (a.ea.locationOverrideToken) return {
                    locationOverrideToken: a.ea.locationOverrideToken
                };
                if (null != a.ea.latitudeE7 && null != a.ea.longitudeE7) return {
                    latitudeE7: a.ea.latitudeE7,
                    longitudeE7: a.ea.longitudeE7
                }
            }
            return null
        },
        VQa = function(a, b) {
            g.ib(a, b) || a.push(b)
        },
        P6 = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        WQa = function(a) {
            try {
                return g.C.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        Q6 = function(a) {
            if (g.C.JSON) try {
                return g.C.JSON.parse(a)
            } catch (b) {}
            return WQa(a)
        },
        XQa = function(a, b, c, d) {
            var e = new g.Tj(null, void 0);
            a && g.Uj(e, a);
            b && g.Vj(e, b);
            c && g.Wj(e, c);
            d && (e.K = d);
            return e
        },
        R6 = function(a, b) {
            g.Uu[a] = !0;
            var c = g.Su();
            c && c.publish.apply(c, arguments);
            g.Uu[a] = !1
        },
        S6 = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g.ei;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username =
                a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", YQa(this, a.capabilities || ""), ZQa(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "",
                this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        YQa = function(a, b) {
            a.capabilities.clear();
            g.Io(b.split(","), g.Oa(OQa, $Qa)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        ZQa = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        T6 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        U6 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        aRa = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        bRa = function(a) {
            return new T6(a)
        },
        cRa = function(a) {
            return Array.isArray(a) ? g.wm(a, bRa) : []
        },
        V6 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        W6 = function(a) {
            return Array.isArray(a) ? "[" + g.wm(a, V6).join(",") + "]" : "null"
        },
        X6 = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = 16 * Math.random() | 0;
                    return ("x" == a ? b : b & 3 | 8).toString(16)
                })
        },
        dRa = function(a) {
            return g.wm(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        Y6 = function(a, b) {
            return g.eb(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        Z6 = function(a, b) {
            return g.eb(a, function(c) {
                return U6(c, b)
            })
        },
        eRa = function() {
            var a = (0, g.Kz)();
            a && TQa(a, a.i.Ng(!0))
        },
        $6 = function() {
            var a = g.Nz("yt-remote-connected-devices") || [];
            g.zb(a);
            return a
        },
        fRa = function(a) {
            if (g.jb(a)) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return g.wm(a, function(d, e) {
                return 0 == e ? d : d.substring(c.length)
            })
        },
        gRa = function(a) {
            g.Mz("yt-remote-connected-devices", a, 86400)
        },
        b7 = function() {
            if (a7) return a7;
            var a = g.Nz("yt-remote-device-id");
            a || (a = X6(), g.Mz("yt-remote-device-id", a, 31536E3));
            for (var b = $6(), c = 1, d = a; g.ib(b, d);) c++, d = a + "#" + c;
            return a7 = d
        },
        c7 = function() {
            var a = $6(),
                b = b7();
            g.ib(a, b);
            g.Qz() && g.Bb(a, b);
            a = fRa(a);
            if (g.jb(a)) try {
                g.Dt("remote_sid")
            } catch (c) {} else try {
                g.Bt("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        hRa = function() {
            return g.Nz("yt-remote-session-browser-channel")
        },
        iRa = function() {
            return g.Nz("yt-remote-local-screens") || []
        },
        jRa = function() {
            g.Mz("yt-remote-lounge-token-expiration", !0, 86400)
        },
        kRa = function(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = g.wm(iRa(), function(d) {
                    return d.loungeToken
                }),
                c = g.wm(a, function(d) {
                    return d.loungeToken
                });
            g.xm(c, function(d) {
                return !g.ib(b, d)
            }) && jRa();
            g.Mz("yt-remote-local-screens", a, 31536E3)
        },
        lRa = function(a, b) {
            g.Mz("yt-remote-session-browser-channel", a);
            g.Mz("yt-remote-session-screen-id", b);
            a = $6();
            b = b7();
            g.ib(a, b) || a.push(b);
            gRa(a);
            c7()
        },
        d7 = function(a) {
            a || (g.Pz("yt-remote-session-screen-id"), g.Pz("yt-remote-session-video-id"));
            c7();
            a = $6();
            g.ob(a, b7());
            gRa(a)
        },
        mRa = function() {
            if (!e7) {
                var a = g.yr();
                a && (e7 = new g.ir(a))
            }
        },
        nRa = function() {
            mRa();
            return e7 ? !!e7.get("yt-remote-use-staging-server") : !1
        },
        f7 = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        oRa = function(a) {
            return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
        },
        pRa = function() {
            return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
        },
        g7 = function(a) {
            a.length ? qRa(a.shift(), function() {
                g7(a)
            }) : h7()
        },
        rRa = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        qRa = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.Vk(d, g.Yq(a));
            (document.head || document.documentElement).appendChild(d)
        },
        sRa = function() {
            var a = f7(),
                b = [];
            if (1 < a) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        h7 = function() {
            var a = pRa();
            a && a(!1, "No cast extension found")
        },
        i7 = function() {
            if (tRa) {
                var a = 2,
                    b = pRa(),
                    c = function() {
                        a--;
                        0 == a && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                qRa("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", h7, c)
            }
        },
        uRa = function() {
            i7();
            var a = sRa();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            g7(a)
        },
        wRa = function() {
            i7();
            var a = sRa();
            a.push.apply(a, g.v(vRa.map(rRa)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            g7(a)
        },
        j7 = function(a, b, c) {
            g.I.call(this);
            this.J = null != c ? (0, g.E)(a, c) : a;
            this.Vf = b;
            this.D = (0, g.E)(this.rP, this);
            this.i = !1;
            this.u = 0;
            this.B = this.Mb = null;
            this.C = []
        },
        k7 = function(a, b, c) {
            g.I.call(this);
            this.C = null != c ? a.bind(c) : a;
            this.Vf = b;
            this.B = null;
            this.i = !1;
            this.u = 0;
            this.Mb = null
        },
        l7 = function(a) {
            a.Mb = g.ph(function() {
                a.Mb = null;
                a.i && !a.u && (a.i = !1, l7(a))
            }, a.Vf);
            var b = a.B;
            a.B = null;
            a.C.apply(null, b)
        },
        m7 = function() {},
        n7 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.C.setTimeout(function() {
                a()
            }, b)
        },
        p7 = function(a) {
            o7.dispatchEvent(new xRa(o7, a))
        },
        xRa = function(a, b) {
            g.rf.call(this, "statevent", a);
            this.stat = b
        },
        q7 = function(a, b, c, d) {
            this.i = a;
            this.u = b;
            this.N = c;
            this.K = d || 1;
            this.B = 45E3;
            this.C = new g.hk(this);
            this.J = new g.oh;
            this.J.setInterval(250)
        },
        zRa = function(a, b, c) {
            a.jt = 1;
            a.Qm = N6(b.clone());
            a.lq = c;
            a.D = !0;
            yRa(a, null)
        },
        r7 = function(a, b, c, d, e) {
            a.jt = 1;
            a.Qm = N6(b.clone());
            a.lq = null;
            a.D = c;
            e && (a.AM = !1);
            yRa(a, d)
        },
        yRa = function(a, b) {
            a.Qs = Date.now();
            s7(a);
            a.uo = a.Qm.clone();
            O6(a.uo, "t", a.K);
            a.JA = 0;
            a.Nf = a.i.zC(a.i.Lw() ? b : null);
            0 < a.xB && (a.Wz = new k7((0, g.E)(a.BN, a, a.Nf), a.xB));
            a.C.Sa(a.Nf, "readystatechange", a.sP);
            b = a.Po ? g.$b(a.Po) : {};
            a.lq ? (a.GA = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.Nf.send(a.uo, a.GA, a.lq, b)) : (a.GA = "GET", a.AM && !g.rg && (b.Connection = "close"), a.Nf.send(a.uo, a.GA, null, b));
            a.i.wj(1)
        },
        BRa = function(a, b) {
            var c = a.JA,
                d = b.indexOf("\n", c);
            if (-1 == d) return t7;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return ARa;
            d += 1;
            if (d + c > b.length) return t7;
            b = b.substr(d, c);
            a.JA = d + c;
            return b
        },
        DRa = function(a, b) {
            a.Qs = Date.now();
            s7(a);
            var c = b ? window.location.hostname : "";
            a.uo = a.Qm.clone();
            g.bk(a.uo, "DOMAIN", c);
            g.bk(a.uo, "t", a.K);
            try {
                a.Mj = new ActiveXObject("htmlfile")
            } catch (m) {
                u7(a);
                a.Km = 7;
                p7(22);
                v7(a);
                return
            }
            var d = "<html><body>";
            if (b) {
                var e = "";
                for (b = 0; b < c.length; b++) {
                    var f = c.charAt(b);
                    if ("<" == f) f = e + "\\x3c";
                    else if (">" == f) f = e + "\\x3e";
                    else {
                        if (f in w7) f = w7[f];
                        else if (f in CRa) f = w7[f] = CRa[f];
                        else {
                            var h = f.charCodeAt(0);
                            if (31 < h && 127 > h) var l = f;
                            else {
                                if (256 > h) {
                                    if (l = "\\x", 16 > h || 256 < h) l += "0"
                                } else l = "\\u", 4096 > h && (l += "0");
                                l += h.toString(16).toUpperCase()
                            }
                            f =
                                w7[f] = l
                        }
                        f = e + f
                    }
                    e = f
                }
                d += '<script>document.domain="' + e + '"\x3c/script>'
            }
            d += "</body></html>";
            c = g.md(g.nc("b/12014412"), d);
            a.Mj.open();
            a.Mj.write(g.hd(c));
            a.Mj.close();
            a.Mj.parentWindow.m = (0, g.E)(a.FV, a);
            a.Mj.parentWindow.d = (0, g.E)(a.NL, a, !0);
            a.Mj.parentWindow.rpcClose = (0, g.E)(a.NL, a, !1);
            c = a.Mj.createElement("DIV");
            a.Mj.parentWindow.document.body.appendChild(c);
            d = g.Qc(a.uo.toString());
            d = g.vd(g.Mc(d));
            d = g.md(g.nc("b/12014412"), '<iframe src="' + d + '"></iframe>');
            g.od(c, d);
            a.i.wj(1)
        },
        s7 = function(a) {
            a.XF = Date.now() +
                a.B;
            ERa(a, a.B)
        },
        ERa = function(a, b) {
            if (null != a.zt) throw Error("WatchDog timer not null");
            a.zt = n7((0, g.E)(a.MV, a), b)
        },
        x7 = function(a) {
            a.zt && (g.C.clearTimeout(a.zt), a.zt = null)
        },
        v7 = function(a) {
            a.i.mf() || a.hp || a.i.qx(a)
        },
        u7 = function(a) {
            x7(a);
            g.of(a.Wz);
            a.Wz = null;
            a.J.stop();
            g.jk(a.C);
            if (a.Nf) {
                var b = a.Nf;
                a.Nf = null;
                b.abort();
                b.dispose()
            }
            a.Mj && (a.Mj = null)
        },
        y7 = function(a, b) {
            try {
                a.i.GL(a, b), a.i.wj(4)
            } catch (c) {}
        },
        GRa = function(a, b, c, d, e) {
            if (0 == d) c(!1);
            else {
                var f = e || 0;
                d--;
                FRa(a, b, function(h) {
                    h ? c(!0) : g.C.setTimeout(function() {
                        GRa(a, b, c, d, f)
                    }, f)
                })
            }
        },
        FRa = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    z7(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    z7(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    z7(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    z7(d), c(!1)
                } catch (e) {}
            };
            g.C.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            PQa(d, a)
        },
        z7 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        HRa = function(a) {
            this.i = a;
            this.u = new m7
        },
        IRa = function(a) {
            var b = A7(a.i, a.xu, "/mail/images/cleardot.gif");
            N6(b);
            GRa(b.toString(), 5E3, (0, g.E)(a.nQ, a), 3, 2E3);
            a.wj(1)
        },
        C7 = function(a) {
            var b = a.i.N;
            if (null != b) p7(5), b ? (p7(11), B7(a.i, a, !1)) : (p7(12), B7(a.i, a, !0));
            else if (a.rh = new q7(a, void 0, void 0, void 0), a.rh.Po = a.yB, b = a.i, b = A7(b, b.Lw() ? a.Vt : null, a.zB), p7(5), !g.ke || g.ce(10)) O6(b, "TYPE", "xmlhttp"), r7(a.rh, b, !1, a.Vt, !1);
            else {
                O6(b, "TYPE", "html");
                var c = a.rh;
                a = !!a.Vt;
                c.jt = 3;
                c.Qm = N6(b.clone());
                DRa(c, a)
            }
        },
        D7 = function(a, b, c) {
            this.Ta = 1;
            this.i = [];
            this.B = [];
            this.C = new m7;
            this.K = a || null;
            this.N = null != b ? b : null;
            this.D = c || !1
        },
        JRa = function(a, b) {
            this.i = a;
            this.map = b;
            this.context = null
        },
        KRa = function(a, b, c, d) {
            g.rf.call(this, "timingevent", a);
            this.size = b;
            this.Dw = d
        },
        LRa = function(a) {
            g.rf.call(this, "serverreachability", a)
        },
        ORa = function(a) {
            MRa(a);
            if (3 == a.Ta) {
                var b = a.Uv++,
                    c = a.Zx.clone();
                g.bk(c, "SID", a.u);
                g.bk(c, "RID", b);
                g.bk(c, "TYPE", "terminate");
                E7(a, c);
                b = new q7(a, a.u, b, void 0);
                b.jt = 2;
                b.Qm = N6(c.clone());
                PQa(new Image, b.Qm.toString());
                b.Qs = Date.now();
                s7(b)
            }
            NRa(a)
        },
        PRa = function(a) {
            a.NQ(1, 0);
            a.Zx = A7(a, null, a.AB);
            F7(a)
        },
        MRa = function(a) {
            a.Vm && (a.Vm.abort(), a.Vm = null);
            a.Fe && (a.Fe.cancel(), a.Fe = null);
            a.Al && (g.C.clearTimeout(a.Al), a.Al = null);
            G7(a);
            a.Yg && (a.Yg.cancel(), a.Yg = null);
            a.pn && (g.C.clearTimeout(a.pn), a.pn = null)
        },
        QRa = function(a, b) {
            if (0 == a.Ta) throw Error("Invalid operation: sending map when state is closed");
            a.i.push(new JRa(a.vS++, b));
            2 != a.Ta && 3 != a.Ta || F7(a)
        },
        RRa = function(a) {
            var b = 0;
            a.Fe && b++;
            a.Yg && b++;
            return b
        },
        F7 = function(a) {
            a.Yg || a.pn || (a.pn = n7((0, g.E)(a.LL, a), 0), a.Mr = 0)
        },
        TRa = function(a, b) {
            if (1 == a.Ta) {
                if (!b) {
                    a.Uv = Math.floor(1E5 * Math.random());
                    b = a.Uv++;
                    var c = new q7(a, "", b, void 0);
                    c.Po = a.Yj;
                    var d = H7(a),
                        e = a.Zx.clone();
                    g.bk(e, "RID", b);
                    g.bk(e, "CVER", "1");
                    E7(a, e);
                    zRa(c, e, d);
                    a.Yg = c;
                    a.Ta = 2
                }
            } else 3 == a.Ta && (b ? SRa(a, b) : 0 == a.i.length || a.Yg || SRa(a))
        },
        SRa = function(a, b) {
            if (b)
                if (6 < a.ip) {
                    a.i = a.B.concat(a.i);
                    a.B.length = 0;
                    var c = a.Uv - 1;
                    b = H7(a)
                } else c = b.N, b = b.lq;
            else c = a.Uv++, b = H7(a);
            var d = a.Zx.clone();
            g.bk(d, "SID", a.u);
            g.bk(d, "RID", c);
            g.bk(d, "AID", a.us);
            E7(a, d);
            c = new q7(a, a.u, c, a.Mr + 1);
            c.Po = a.Yj;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.Yg = c;
            zRa(c, d, b)
        },
        E7 = function(a, b) {
            a.Of && (a = a.Of.iJ()) && g.Fb(a, function(c, d) {
                g.bk(b, d, c)
            })
        },
        H7 = function(a) {
            var b = Math.min(a.i.length, 1E3),
                c = ["count=" + b];
            if (6 < a.ip && 0 < b) {
                var d = a.i[0].i;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    Oq: e.Oq
                }, f++) {
                e.Oq = a.i[f].i;
                var h = a.i[f].map;
                e.Oq = 6 >= a.ip ? f : e.Oq - d;
                try {
                    g.Fb(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.Oq + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.Oq + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.B = a.B.concat(a.i.splice(0, b));
            return c.join("&")
        },
        URa = function(a) {
            a.Fe || a.Al || (a.J = 1, a.Al = n7((0, g.E)(a.KL, a), 0), a.wr = 0)
        },
        I7 = function(a) {
            if (a.Fe || a.Al || 3 <= a.wr) return !1;
            a.J++;
            a.Al = n7((0, g.E)(a.KL, a), VRa(a, a.wr));
            a.wr++;
            return !0
        },
        B7 = function(a, b, c) {
            a.EA = c;
            a.Zj = b.dl;
            a.D || PRa(a)
        },
        G7 = function(a) {
            null != a.rp && (g.C.clearTimeout(a.rp), a.rp = null)
        },
        VRa = function(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2);
            return c * b
        },
        J7 = function(a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.Of && (c = null);
                var d = (0, g.E)(a.NW, a);
                c || (c = new g.Tj("//www.google.com/images/cleardot.gif"), N6(c));
                FRa(c.toString(), 1E4, d)
            } else p7(2);
            WRa(a, b)
        },
        WRa = function(a, b) {
            a.Ta = 0;
            a.Of && a.Of.uI(b);
            NRa(a);
            MRa(a)
        },
        NRa = function(a) {
            a.Ta = 0;
            a.Zj = -1;
            if (a.Of)
                if (0 == a.B.length && 0 == a.i.length) a.Of.mC();
                else {
                    g.rb(a.B);
                    var b = g.rb(a.i);
                    a.B.length = 0;
                    a.i.length = 0;
                    a.Of.mC(b)
                }
        },
        A7 = function(a, b, c) {
            var d = g.ck(c);
            if ("" != d.i) b && g.Vj(d, b + "." + d.i), g.Wj(d, d.B);
            else {
                var e = window.location;
                d = XQa(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.Tu && g.Fb(a.Tu, function(f, h) {
                g.bk(d, h, f)
            });
            g.bk(d, "VER", a.ip);
            E7(a, d);
            return d
        },
        XRa = function() {},
        YRa = function() {
            this.i = [];
            this.u = []
        },
        ZRa = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        K7 = function(a, b) {
            g.I.call(this);
            this.i = new g.M(this.wV, 0, this);
            g.J(this, this.i);
            this.Vf = 5E3;
            this.u = 0;
            if ("function" === typeof a) b && (a = (0, g.E)(a, b));
            else if (a && "function" === typeof a.handleEvent) a = (0, g.E)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.B = a
        },
        L7 = function(a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? function() {
                return ""
            } : d;
            e = void 0 === e ? !1 : e;
            this.ya = a;
            this.J = b;
            this.B = new g.hr;
            this.u = new K7(this.pW, this);
            this.i = null;
            this.ea = !1;
            this.D = null;
            this.V = "";
            this.N = this.C = 0;
            this.K = [];
            this.Ba = c;
            this.ma = d;
            this.Ca = e
        },
        $Ra = function(a) {
            return {
                firstTestResults: [""],
                secondTestResults: !a.i.EA,
                sessionId: a.i.u,
                arrayId: a.i.us
            }
        },
        aSa = function(a, b) {
            a.N = b || 0;
            a.u.stop();
            M7(a);
            a.i && (3 == a.i.getState() && TRa(a.i), ORa(a.i));
            a.N = 0
        },
        N7 = function(a) {
            return !!a.i && 3 == a.i.getState()
        },
        M7 = function(a) {
            if (a.i) {
                var b = a.ma(),
                    c = a.i.Yj || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.i.Yj = c
            }
        },
        O7 = function(a) {
            this.port = this.domain = "";
            this.i = "/api/lounge";
            this.u = !0;
            a = a || document.location.href;
            var b = Number(g.ki(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.li(a) || "";
            a = g.ad;
            0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.Jc(a, "10.0") && (this.u = !1))
        },
        P7 = function(a, b) {
            var c = a.i;
            a.u && (c = "https://" + a.domain + a.port + a.i);
            return g.wi(c + b, {})
        },
        Q7 = function(a, b, c, d, e) {
            a = {
                format: "JSON",
                method: "POST",
                context: a,
                timeout: 5E3,
                withCredentials: !1,
                onSuccess: g.Oa(a.C, d, !0),
                onError: g.Oa(a.B, e),
                onTimeout: g.Oa(a.D, e)
            };
            c && (a.postParams = c, a.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            });
            return g.ot(b, a)
        },
        eSa = function() {
            var a = bSa;
            cSa();
            R7.push(a);
            dSa()
        },
        S7 = function(a, b) {
            cSa();
            var c = fSa(a, String(b));
            g.jb(R7) ? gSa(c) : (dSa(), g.Cb(R7, function(d) {
                d(c)
            }))
        },
        cSa = function() {
            R7 || (R7 = g.Ga("yt.mdx.remote.debug.handlers_") || [], g.Fa("yt.mdx.remote.debug.handlers_", R7, void 0))
        },
        gSa = function(a) {
            var b = (T7 + 1) % 50;
            T7 = b;
            U7[b] = a;
            V7 || (V7 = 49 == b)
        },
        dSa = function() {
            var a = R7;
            if (U7[0]) {
                var b = V7 ? T7 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = U7[b];
                    g.Cb(a, function(d) {
                        d(c)
                    })
                } while (b != T7);
                U7 = Array(50);
                T7 = -1;
                V7 = !1
            }
        },
        fSa = function(a, b) {
            var c = (Date.now() - hSa) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        W7 = function(a) {
            g.R.call(this);
            this.J = a;
            this.screens = []
        },
        iSa = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        jSa = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.Io(a.screens, function(f) {
                return !!Y6(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = iSa(a, b[d]) || c;
            return c
        },
        kSa = function(a, b) {
            var c = a.screens.length;
            a.screens = g.Io(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        X7 = function(a, b, c, d, e) {
            g.R.call(this);
            this.B = a;
            this.K = b;
            this.C = c;
            this.J = d;
            this.D = e;
            this.u = 0;
            this.i = null;
            this.Mb = NaN
        },
        Z7 = function(a) {
            W7.call(this, "LocalScreenService");
            this.u = a;
            this.i = NaN;
            Y7(this);
            this.info("Initializing with " + W6(this.screens))
        },
        lSa = function(a) {
            if (a.screens.length) {
                var b = g.wm(a.screens, function(d) {
                        return d.id
                    }),
                    c = P7(a.u, "/pairing/get_lounge_token_batch");
                Q7(a.u, c, {
                    screen_ids: b.join(",")
                }, (0, g.E)(a.kR, a), (0, g.E)(a.jR, a))
            }
        },
        Y7 = function(a) {
            if (g.ls("deprecate_pair_servlet_enabled")) return jSa(a, []);
            var b = cRa(iRa());
            b = g.Io(b, function(c) {
                return !c.uuid
            });
            return jSa(a, b)
        },
        $7 = function(a, b) {
            kRa(g.wm(a.screens, aRa));
            b && jRa()
        },
        b8 = function(a, b) {
            g.R.call(this);
            this.J = b;
            b = (b = g.Nz("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.J(), e = 0, f = d.length; e < f; ++e) {
                var h = d[e].id;
                c[h] = g.ib(b, h)
            }
            this.i = c;
            this.D = a;
            this.B = this.C = NaN;
            this.u = null;
            a8("Initialized with " + g.Nh(this.i))
        },
        c8 = function(a, b, c) {
            var d = P7(a.D, "/pairing/get_screen_availability");
            Q7(a.D, d, {
                lounge_token: b.token
            }, (0, g.E)(function(e) {
                e = e.screens || [];
                for (var f = 0, h = e.length; f < h; ++f)
                    if (e[f].loungeToken == b.token) {
                        c("online" == e[f].status);
                        return
                    }
                c(!1)
            }, a), (0, g.E)(function() {
                c(!1)
            }, a))
        },
        d8 = function(a, b) {
            a: if (P6(b) != P6(a.i)) var c = !1;
                else {
                    c = g.Nb(b);
                    for (var d = 0, e = c.length; d < e; ++d)
                        if (!a.i[c[d]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (a8("Updated online screens: " + g.Nh(a.i)), a.i = b, a.Z("screenChange"));mSa(a)
        },
        e8 = function(a) {
            isNaN(a.B) || g.jt(a.B);
            a.B = g.ht((0, g.E)(a.UE, a), 0 < a.C && a.C < g.Pa() ? 2E4 : 1E4)
        },
        a8 = function(a) {
            S7("OnlineScreenService", a)
        },
        nSa = function(a) {
            var b = {};
            g.Cb(a.J(), function(c) {
                c.token ? b[c.token] = c.id : this.ke("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        mSa = function(a) {
            a = g.Nb(g.Gb(a.i, function(b) {
                return b
            }));
            g.zb(a);
            a.length ? g.Mz("yt-remote-online-screen-ids", a.join(","), 60) : g.Pz("yt-remote-online-screen-ids")
        },
        f8 = function(a, b) {
            b = void 0 === b ? !1 : b;
            W7.call(this, "ScreenService");
            this.C = a;
            this.K = b;
            this.i = this.u = null;
            this.B = [];
            this.D = {};
            oSa(this)
        },
        qSa = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.D[b]);
            var h = a.Jh(),
                l = c ? Z6(h, c) : null;
            c && (a.K || l) || (l = Z6(h, b));
            if (l) {
                l.uuid = b;
                var m = g8(a, l);
                c8(a.i, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? pSa(a, c, (0, g.E)(function(n) {
                var p = g8(this, new T6({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                c8(this.i, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        rSa = function(a, b) {
            for (var c = 0, d = a.screens.length; c < d; ++c)
                if (a.screens[c].name == b) return a.screens[c];
            return null
        },
        sSa = function(a, b, c) {
            c8(a.i, b, c)
        },
        pSa = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.ot(P7(a.C, "/pairing/get_lounge_token_batch"), e)
        },
        tSa = function(a) {
            a.screens = a.u.Jh();
            var b = a.D,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = 0;
            for (d = a.screens.length; b < d; ++b) {
                var e = a.screens[b];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + W6(a.screens))
        },
        oSa = function(a) {
            h8(a);
            a.u = new Z7(a.C);
            a.u.subscribe("screenChange", (0, g.E)(a.tR, a));
            tSa(a);
            a.K || (a.B = cRa(g.Nz("yt-remote-automatic-screen-cache") || []));
            h8(a);
            a.info("Initializing automatic screens: " + W6(a.B));
            a.i = new b8(a.C, (0, g.E)(a.Jh, a, !0));
            a.i.subscribe("screenChange", (0, g.E)(function() {
                this.Z("onlineScreenChange")
            }, a))
        },
        g8 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = Z6(a.B, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.B.push(b), a.K || uSa(a));
            h8(a);
            a.D[b.uuid] = b.id;
            g.Mz("yt-remote-device-id-map", a.D, 31536E3);
            return b
        },
        uSa = function(a) {
            a = g.Io(a.B, function(b) {
                return "shortLived" != b.idType
            });
            g.Mz("yt-remote-automatic-screen-cache", g.wm(a, aRa))
        },
        h8 = function(a) {
            a.D = g.Nz("yt-remote-device-id-map") || {}
        },
        i8 = function(a, b, c) {
            g.R.call(this);
            this.Ca = c;
            this.B = a;
            this.i = b;
            this.C = null
        },
        j8 = function(a, b) {
            a.C = b;
            a.Z("sessionScreen", a.C)
        },
        vSa = function(a, b) {
            a.C && (a.C.token = b, g8(a.B, a.C));
            a.Z("sessionScreen", a.C)
        },
        k8 = function(a, b) {
            S7(a.Ca, b)
        },
        l8 = function(a, b, c) {
            i8.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.u = null;
            this.ma = (0, g.E)(this.xP, this);
            this.Ba = (0, g.E)(this.QV, this);
            this.ea = g.ht(function() {
                wSa(d, null)
            }, 12E4);
            this.K = this.D = this.J = this.N = 0;
            this.ya = !1;
            this.V = "unknown"
        },
        m8 = function(a, b) {
            g.jt(a.K);
            a.K = 0;
            0 == b ? xSa(a) : a.K = g.ht(function() {
                xSa(a)
            }, b)
        },
        xSa = function(a) {
            ySa(a, "getLoungeToken");
            g.jt(a.D);
            a.D = g.ht(function() {
                zSa(a, null)
            }, 3E4)
        },
        ySa = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.Nh(void 0));
            var c = {};
            c.type = b;
            a.u ? a.u.sendMessage("urn:x-cast:com.google.youtube.mdx", c, g.Ha, (0, g.E)(function() {
                k8(this, "Failed to send message: " + b + ".")
            }, a)) : k8(a, "Sending yt message without session: " + g.Nh(c))
        },
        n8 = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.getScreen() && a.getScreen().id == b || a.wJ(b, function(c) {
                j8(a, c)
            }, function() {
                return a.Cg()
            }, 5)) : a.Cg(Error("Waiting for session status timed out."))
        },
        BSa = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new T6(b);
            ASa(a, d, function(e) {
                e ? (a.ya = !0, g8(a.B, d), j8(a, d), a.V = "unknown", m8(a, c)) : (g.qs(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.Cg())
            }, 5)
        },
        wSa = function(a, b) {
            g.jt(a.ea);
            a.ea = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.getScreen() && a.getScreen().uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? BSa(a, {
                name: a.i.friendlyName,
                screenId: b.screenId,
                loungeToken: b.loungeToken,
                dialId: b.deviceId,
                screenIdType: "shortLived"
            }, b.loungeTokenRefreshIntervalMs) : (g.qs(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), n8(a, b.screenId))) : (g.qs(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) +
                ".")), n8(a, b.screenId)) : n8(a, b.screenId) : a.Cg(Error("Waiting for session status timed out."))
        },
        zSa = function(a, b) {
            g.jt(a.D);
            a.D = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.V = c, m8(a, 3E4)) : (vSa(a, b.loungeToken), a.ya = !1, a.V = "unknown", m8(a, b.loungeTokenRefreshIntervalMs))
        },
        ASa = function(a, b, c, d) {
            g.jt(a.J);
            a.J = 0;
            sSa(a.B, b, function(e) {
                e || 0 > d ? c(e) : a.J = g.ht(function() {
                    ASa(a, b, c, d - 1)
                }, 300)
            })
        },
        CSa = function(a) {
            g.jt(a.N);
            a.N = 0;
            g.jt(a.J);
            a.J = 0;
            g.jt(a.ea);
            a.ea = 0;
            g.jt(a.D);
            a.D = 0;
            g.jt(a.K);
            a.K = 0
        },
        o8 = function(a, b, c, d) {
            i8.call(this, a, b, "DialSession");
            this.config_ = d;
            this.u = this.N = null;
            this.Ba = "";
            this.La = c;
            this.Ma = null;
            this.ea = g.Ha;
            this.V = NaN;
            this.Ha = (0, g.E)(this.yP, this);
            this.D = g.Ha;
            this.K = this.J = 0;
            this.ma = !1;
            this.ya = "unknown"
        },
        p8 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && (null == (b = a.u) ? 0 : b.getDialAppInfo))
        },
        DSa = function(a) {
            a.D = a.B.ZG(a.Ba, a.i.label, a.i.friendlyName, p8(a), function(b, c) {
                a.D = g.Ha;
                a.ma = !0;
                j8(a, b);
                "shortLived" == b.idType && 0 < c && q8(a, c)
            }, function(b) {
                a.D = g.Ha;
                a.Cg(b)
            })
        },
        ESa = function(a) {
            var b = {};
            b.pairingCode = a.Ba;
            b.theme = a.La;
            nRa() && (b.env_useStageMdx = 1);
            return g.ui(b)
        },
        r8 = function(a) {
            return new Promise(function(b) {
                a.Ba = X6();
                if (a.Ma) {
                    var c = new chrome.cast.DialLaunchResponse(!0, ESa(a));
                    b(c);
                    DSa(a)
                } else a.ea = function() {
                    g.jt(a.V);
                    a.ea = function() {};
                    a.V = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, ESa(a));
                    b(d);
                    DSa(a)
                }, a.V = g.ht(function() {
                    a.ea()
                }, 100)
            })
        },
        GSa = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new T6(b);
            return (new Promise(function(e) {
                FSa(a, d, function(f) {
                    f ? (a.ma = !0, g8(a.B, d), j8(a, d), q8(a, c)) : g.qs(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : r8(a)
            })
        },
        HSa = function(a, b) {
            var c = a.N.receiver.label,
                d = a.i.friendlyName;
            return (new Promise(function(e) {
                qSa(a.B, c, b, d, function(f) {
                    f && f.token && j8(a, f);
                    e(f)
                }, function(f) {
                    k8(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : r8(a)
            })
        },
        FSa = function(a, b, c, d) {
            g.jt(a.J);
            a.J = 0;
            sSa(a.B, b, function(e) {
                e || 0 > d ? c(e) : a.J = g.ht(function() {
                    FSa(a, b, c, d - 1)
                }, 300)
            })
        },
        q8 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            p8(a) && (g.jt(a.K), a.K = 0, 0 == b ? ISa(a) : a.K = g.ht(function() {
                ISa(a)
            }, b))
        },
        ISa = function(a) {
            p8(a) && a.u.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.ya = c, q8(a, 3E4)) : (a.ma = !1, a.ya = "unknown", vSa(a, b.loungeToken), q8(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.ya = "noLoungeTokenResponse";
                q8(a, 3E4)
            })
        },
        JSa = function(a) {
            g.jt(a.J);
            a.J = 0;
            g.jt(a.K);
            a.K = 0;
            a.D();
            a.D = function() {};
            g.jt(a.V)
        },
        s8 = function(a, b) {
            i8.call(this, a, b, "ManualSession");
            this.u = g.ht((0, g.E)(this.ws, this, null), 150)
        },
        t8 = function(a, b) {
            g.R.call(this);
            this.config_ = b;
            this.u = a;
            this.N = b.appId || "233637DE";
            this.C = b.theme || "cl";
            this.V = b.disableCastApi || !1;
            this.J = b.forceMirroring || !1;
            this.i = null;
            this.K = !1;
            this.B = [];
            this.D = (0, g.E)(this.KU, this)
        },
        KSa = function(a, b) {
            return b ? g.eb(a.B, function(c) {
                return U6(b, c.label)
            }, a) : null
        },
        u8 = function(a) {
            S7("Controller", a)
        },
        bSa = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        v8 = function(a) {
            return a.K || !!a.B.length || !!a.i
        },
        w8 = function(a, b, c) {
            b != a.i && (g.of(a.i), (a.i = b) ? (c ? a.Z("yt-remote-cast2-receiver-resumed",
                b.i) : a.Z("yt-remote-cast2-receiver-selected", b.i), b.subscribe("sessionScreen", (0, g.E)(a.JL, a, b)), b.subscribe("sessionFailed", function() {
                return LSa(a, b)
            }), b.getScreen() ? a.Z("yt-remote-cast2-session-change", b.getScreen()) : c && a.i.ws(null)) : a.Z("yt-remote-cast2-session-change", null))
        },
        LSa = function(a, b) {
            a.i == b && a.Z("yt-remote-cast2-session-failed")
        },
        MSa = function(a) {
            var b = a.u.YG(),
                c = a.i && a.i.i;
            a = g.wm(b, function(d) {
                c && U6(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = KSa(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        RSa = function(a, b, c, d) {
            d.disableCastApi ? x8("Cannot initialize because disabled by Mdx config.") : NSa() ? OSa(b, d) && (y8(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? PSa(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? PSa(a, c) : (z8("Failed to load cast API: " + f), A8(!1), y8(!1), g.Pz("yt-remote-cast-available"), g.Pz("yt-remote-cast-receiver"),
                    QSa(), c(!1))
            }, d.loadCastApiSetupScript ? g.Rz("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= f7() && uRa() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? h7() : 89 <= f7() ? wRa() : (i7(), g7(vRa.map(rRa))))) : x8("Cannot initialize because not running Chrome")
        },
        QSa = function() {
            x8("dispose");
            var a = B8();
            a && a.dispose();
            g.Fa("yt.mdx.remote.cloudview.instance_", null, void 0);
            SSa(!1);
            g.Xu(C8);
            C8.length = 0
        },
        D8 = function() {
            return !!g.Nz("yt-remote-cast-installed")
        },
        TSa = function() {
            var a = g.Nz("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        USa = function() {
            x8("clearCurrentReceiver");
            g.Pz("yt-remote-cast-receiver")
        },
        VSa = function() {
            return D8() ? B8() ? B8().getCastSession() : (z8("getCastSelector: Cast is not initialized."), null) : (z8("getCastSelector: Cast API is not installed!"), null)
        },
        F8 = function() {
            D8() ? B8() ? E8() ? (x8("Requesting cast selector."), B8().requestSession()) : (x8("Wait for cast API to be ready to request the session."), C8.push(g.Wu("yt-remote-cast2-api-ready", F8))) : z8("requestCastSelector: Cast is not initialized.") : z8("requestCastSelector: Cast API is not installed!")
        },
        G8 =
        function(a, b) {
            E8() ? B8().setConnectedScreenStatus(a, b) : z8("setConnectedScreenStatus called before ready.")
        },
        NSa = function() {
            var a = 0 <= g.ad.search(/ (CrMo|Chrome|CriOS)\//);
            return g.gj || a
        },
        WSa = function(a, b) {
            B8().init(a, b)
        },
        OSa = function(a, b) {
            var c = !1;
            B8() || (a = new t8(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.Mz("yt-remote-cast-available", d);
                R6("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                x8("onReceiverSelected: " + d.friendlyName);
                g.Mz("yt-remote-cast-receiver", d);
                R6("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                x8("onReceiverResumed: " + d.friendlyName);
                g.Mz("yt-remote-cast-receiver", d);
                R6("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                x8("onSessionChange: " + V6(d));
                d || g.Pz("yt-remote-cast-receiver");
                R6("yt-remote-cast2-session-change", d)
            }), g.Fa("yt.mdx.remote.cloudview.instance_", a, void 0), c = !0);
            x8("cloudview.createSingleton_: " + c);
            return c
        },
        B8 = function() {
            return g.Ga("yt.mdx.remote.cloudview.instance_")
        },
        PSa = function(a, b) {
            A8(!0);
            y8(!1);
            WSa(a, function(c) {
                c ? (SSa(!0), g.Yu("yt-remote-cast2-api-ready")) : (z8("Failed to initialize cast API."), A8(!1), g.Pz("yt-remote-cast-available"), g.Pz("yt-remote-cast-receiver"), QSa());
                b(c)
            })
        },
        x8 = function(a) {
            S7("cloudview", a)
        },
        z8 = function(a) {
            S7("cloudview", a)
        },
        A8 = function(a) {
            x8("setCastInstalled_ " + a);
            g.Mz("yt-remote-cast-installed", a)
        },
        E8 = function() {
            return !!g.Ga("yt.mdx.remote.cloudview.apiReady_")
        },
        SSa = function(a) {
            x8("setApiReady_ " + a);
            g.Fa("yt.mdx.remote.cloudview.apiReady_", a, void 0)
        },
        y8 = function(a) {
            g.Fa("yt.mdx.remote.cloudview.initializing_", a, void 0)
        },
        H8 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.J = this.K = 0;
            this.trackData = null;
            this.hasNext = this.Dk = !1;
            this.N = this.D = this.i = this.C = 0;
            this.B = NaN;
            this.u = !1;
            this.reset(a)
        },
        I8 = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.Dk = !1;
            a.hasNext = !1;
            a.K = 0;
            a.J = g.Pa();
            a.C = 0;
            a.i = 0;
            a.D = 0;
            a.N = 0;
            a.B = NaN;
            a.u = !1
        },
        J8 = function(a) {
            return a.zc() ? (g.Pa() - a.J) / 1E3 : 0
        },
        K8 = function(a, b) {
            a.K = b;
            a.J = g.Pa()
        },
        L8 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.Pa() - a.J) / 1E3 + a.K;
                case -1E3:
                    return 0
            }
            return a.K
        },
        M8 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && I8(a)
        },
        N8 = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.cc(a.trackData);
            b.hasPrevious = a.Dk;
            b.hasNext = a.hasNext;
            b.playerTime = a.K;
            b.playerTimeAt = a.J;
            b.seekableStart = a.C;
            b.seekableEnd = a.i;
            b.duration = a.D;
            b.loadedTime = a.N;
            b.liveIngestionTime = a.B;
            return b
        },
        P8 = function(a, b) {
            g.R.call(this);
            this.Ta = 0;
            this.B = a;
            this.D = [];
            this.C = new YRa;
            this.u = this.i = null;
            this.N = (0, g.E)(this.iT, this);
            this.J = (0, g.E)(this.bw, this);
            this.K = (0, g.E)(this.hT, this);
            this.V = (0, g.E)(this.pT, this);
            var c = 0;
            a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.iF, this), XSa(this))) : c = 3;
            0 != c && (b ? this.iF(c) : g.ht((0, g.E)(function() {
                this.iF(c)
            }, this), 0));
            (a = VSa()) && O8(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.V)
        },
        Q8 = function(a) {
            return new H8(a.B.getPlayerContextData())
        },
        XSa = function(a) {
            g.Cb("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled".split(" "), function(b) {
                this.D.push(this.B.subscribe(b, g.Oa(this.HU, b), this))
            }, a)
        },
        YSa = function(a) {
            g.Cb(a.D, function(b) {
                this.B.unsubscribeByKey(b)
            }, a);
            a.D.length = 0
        },
        R8 = function(a) {
            return 1 == a.getState()
        },
        S8 = function(a, b) {
            var c = a.C;
            50 > c.i.length + c.u.length && a.C.u.push(b)
        },
        U8 = function(a, b, c) {
            var d = Q8(a);
            K8(d, c); - 1E3 != d.playerState && (d.playerState = b);
            T8(a, d)
        },
        V8 = function(a, b, c) {
            a.B.sendMessage(b, c)
        },
        T8 = function(a, b) {
            YSa(a);
            a.B.setPlayerContextData(N8(b));
            XSa(a)
        },
        O8 = function(a, b) {
            a.u && (a.u.removeUpdateListener(a.N), a.u.removeMediaListener(a.J), a.bw(null));
            a.u = b;
            a.u && (S7("CP", "Setting cast session: " + a.u.sessionId), a.u.addUpdateListener(a.N), a.u.addMediaListener(a.J), a.u.media.length && a.bw(a.u.media[0]))
        },
        ZSa = function(a) {
            var b = a.i.media,
                c = a.i.customData;
            if (b && c) {
                var d = Q8(a);
                b.contentId != d.videoId && S7("CP", "Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                K8(d, a.i.getEstimatedTime());
                T8(a, d)
            } else S7("CP", "No cast media video. Ignoring state update.")
        },
        W8 = function(a, b, c) {
            return (0, g.E)(function(d) {
                this.ke("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.ke("Retrying " + b + " using MDx browser channel."), V8(this, b, c))
            }, a)
        },
        X8 = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            g.R.call(this);
            this.D = NaN;
            this.ya = !1;
            this.N = this.K = this.ea = this.ma = NaN;
            this.V = [];
            this.C = this.J = this.B = this.lc = this.i = null;
            this.Ha = a;
            this.Ca = d;
            this.V.push(g.nu(window, "beforeunload", (0, g.E)(this.fR, this)));
            this.u = [];
            this.lc = new H8;
            this.Ma = b.id;
            this.Ba = b.idType;
            this.i = $Sa(this, c);
            this.i.subscribe("handlerOpened", this.mT, this);
            this.i.subscribe("handlerClosed", this.jT, this);
            this.i.subscribe("handlerError", this.kT, this);
            this.i.subscribe("handlerMessage", this.lT, this);
            this.i.iA(b.token);
            this.subscribe("remoteQueueChange",
                function() {
                    var e = this.lc.videoId;
                    g.Qz() && g.Mz("yt-remote-session-video-id", e)
                }, this)
        },
        aTa = function(a) {
            return g.eb(a.u, function(b) {
                return "LOUNGE_SCREEN" == b.type
            })
        },
        Y8 = function(a) {
            S7("conn", a)
        },
        $Sa = function(a, b) {
            return new L7(P7(a.Ha, "/bc"), b, !1, function() {
                return a.dH()
            }, "shortLived" == a.Ba)
        },
        Z8 = function(a, b) {
            a.Z("proxyStateChange", b)
        },
        bTa = function(a) {
            a.D = g.ht((0, g.E)(function() {
                Y8("Connecting timeout");
                this.Ir(1)
            }, a), 2E4)
        },
        $8 = function(a) {
            g.jt(a.D);
            a.D = NaN
        },
        a9 = function(a) {
            g.jt(a.ma);
            a.ma = NaN
        },
        cTa = function(a) {
            b9(a);
            a.ea = g.ht((0, g.E)(function() {
                c9(this, "getNowPlaying")
            }, a), 2E4)
        },
        b9 = function(a) {
            g.jt(a.ea);
            a.ea = NaN
        },
        eTa = function(a, b) {
            var c = null;
            if (b) {
                var d = aTa(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Fa("yt.mdx.remote.remoteClient_", c, void 0);
            b && ($8(a), a9(a));
            c = N7(a.i) && isNaN(a.D);
            b == c ? b && (Z8(a, 1), c9(a, "getSubtitlesTrack")) : b ? (a.vJ() && a.lc.reset(), Z8(a, 1), c9(a, "getNowPlaying"), dTa(a)) : a.Ir(1)
        },
        fTa = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.lc.videoId && (g.Wb(b.params) ? a.lc.trackData = null : a.lc.trackData = b.params, a.Z("remotePlayerChange"))
        },
        gTa = function(a, b) {
            var c = b.params.videoId || b.params.video_id,
                d = parseInt(b.params.currentIndex, 10);
            a.lc.listId = b.params.listId || a.lc.listId;
            M8(a.lc, c, d);
            a.Z("remoteQueueChange")
        },
        iTa = function(a, b) {
            b.params = b.params || {};
            gTa(a, b);
            hTa(a, b);
            a.Z("autoplayDismissed")
        },
        hTa = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            K8(a.lc, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.lc.playerState && (c = -1E3);
            a.lc.playerState = c;
            c = Number(b.params.loadedTime);
            a.lc.N = isNaN(c) ? 0 : c;
            a.lc.Hj(Number(b.params.duration));
            c = a.lc;
            var d = Number(b.params.liveIngestionTime);
            c.B = d;
            c.u = isNaN(d) ? !1 : !0;
            c = a.lc;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.C = isNaN(d) ? 0 : d;
            c.i = isNaN(b) ? 0 : b;
            1 == a.lc.playerState ? cTa(a) : b9(a);
            a.Z("remotePlayerChange")
        },
        jTa = function(a, b) {
            if (-1E3 != a.lc.playerState) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.lc.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                K8(a.lc, isNaN(b) ? 0 : b);
                a.Z("remotePlayerChange")
            }
        },
        kTa = function(a, b) {
            var c = "true" == b.params.muted;
            a.lc.volume = parseInt(b.params.volume, 10);
            a.lc.muted = c;
            a.Z("remotePlayerChange")
        },
        lTa = function(a, b) {
            a.J = b.params.videoId;
            a.Z("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        mTa = function(a, b) {
            var c = "true" == b.params.hasNext;
            a.lc.Dk = "true" == b.params.hasPrevious;
            a.lc.hasNext = c;
            a.Z("previousNextChange")
        },
        dTa = function(a) {
            g.jt(a.N);
            a.N = g.ht((0, g.E)(a.Ir, a, 1), 864E5)
        },
        c9 = function(a, b, c) {
            c ? Y8("Sending: action=" + b + ", params=" + g.Nh(c)) : Y8("Sending: action=" + b);
            a.i.sendMessage(b, c)
        },
        d9 = function(a) {
            W7.call(this, "ScreenServiceProxy");
            this.Pe = a;
            this.i = [];
            this.i.push(this.Pe.$_s("screenChange", (0, g.E)(this.CP, this)));
            this.i.push(this.Pe.$_s("onlineScreenChange", (0, g.E)(this.nU, this)))
        },
        qTa = function(a, b) {
            mRa();
            if (!e7 || !e7.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.P("MDX_CONFIG") || b;
                eRa();
                c7();
                e9 || (e9 = new O7(b ? b.loungeApiHost : void 0), nRa() && (e9.i = "/api/loungedev"));
                f9 || (f9 = g.Ga("yt.mdx.remote.deferredProxies_") || [], g.Fa("yt.mdx.remote.deferredProxies_", f9, void 0));
                nTa();
                var c = g9();
                if (!c) {
                    var d = new f8(e9, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Fa("yt.mdx.remote.screenService_", d, void 0);
                    c = g9();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Fa("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1, void 0);
                    RSa(a, d, function(f) {
                        f ? h9() && G8(h9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            R6("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Ga("yt.mdx.remote.initialized_") && (g.Fa("yt.mdx.remote.initialized_", !0, void 0), i9("Initializing: " +
                        g.Nh(b)), j9.push(g.Wu("yt-remote-cast2-api-ready", function() {
                        R6("yt-remote-api-ready")
                    })), j9.push(g.Wu("yt-remote-cast2-availability-change", function() {
                        R6("yt-remote-receiver-availability-change")
                    })), j9.push(g.Wu("yt-remote-cast2-receiver-selected", function() {
                        k9(null);
                        R6("yt-remote-auto-connect", "cast-selector-receiver")
                    })), j9.push(g.Wu("yt-remote-cast2-receiver-resumed", function() {
                        R6("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), j9.push(g.Wu("yt-remote-cast2-session-change", oTa)), j9.push(g.Wu("yt-remote-connection-change", function(f) {
                        f ? G8(h9(), "YouTube TV") : l9() || (G8(null, null), USa())
                    })), j9.push(g.Wu("yt-remote-cast2-session-failed", function() {
                        R6("yt-remote-connection-failed")
                    })), a = m9(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.ls("desktop_enable_autoplay") &&
                    e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), i9(" -- with channel params: " + g.Nh(a)), a ? (g.Mz("yt-remote-session-app", a.app), g.Mz("yt-remote-session-name", a.name)) : (g.Pz("yt-remote-session-app"), g.Pz("yt-remote-session-name")), g.Fa("yt.mdx.remote.channelParams_", a, void 0), c.start(), h9() || pTa())
            }
        },
        rTa = function() {
            var a = g9().Pe.$_gos();
            var b = n9();
            b && o9() && (Y6(a, b) || a.push(b));
            return dRa(a)
        },
        p9 = function() {
            var a = sTa();
            !a && D8() && TSa() && (a = {
                key: "cast-selector-receiver",
                name: TSa()
            });
            return a
        },
        sTa = function() {
            var a = rTa(),
                b = n9();
            b || (b = l9());
            return g.eb(a, function(c) {
                return b && U6(b, c.key) ? !0 : !1
            })
        },
        n9 = function() {
            var a = h9();
            if (!a) return null;
            var b = g9().Jh();
            return Z6(b, a)
        },
        oTa = function(a) {
            i9("remote.onCastSessionChange_: " + V6(a));
            if (a) {
                var b = n9();
                if (b && b.id == a.id) {
                    if (G8(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) q9 && (q9.token = a), (b = o9()) && b.iA(a)
                } else b && r9(), s9(a, 1)
            } else o9() && r9()
        },
        r9 = function() {
            E8() ? B8().stopSession() : z8("stopSession called before API ready.");
            var a = o9();
            a && (a.disconnect(1), t9(null))
        },
        u9 = function() {
            var a = o9();
            return !!a && 3 != a.getProxyState()
        },
        i9 = function(a) {
            S7("remote", a)
        },
        g9 = function() {
            if (!v9) {
                var a = g.Ga("yt.mdx.remote.screenService_");
                v9 = a ? new d9(a) : null
            }
            return v9
        },
        h9 = function() {
            return g.Ga("yt.mdx.remote.currentScreenId_")
        },
        tTa = function(a) {
            g.Fa("yt.mdx.remote.currentScreenId_", a, void 0)
        },
        uTa = function() {
            return g.Ga("yt.mdx.remote.connectData_")
        },
        k9 = function(a) {
            g.Fa("yt.mdx.remote.connectData_", a, void 0)
        },
        o9 = function() {
            return g.Ga("yt.mdx.remote.connection_")
        },
        t9 = function(a) {
            var b = o9();
            k9(null);
            a || tTa("");
            g.Fa("yt.mdx.remote.connection_", a, void 0);
            f9 && (g.Cb(f9, function(c) {
                c(a)
            }), f9.length = 0);
            b && !a ? R6("yt-remote-connection-change", !1) : !b && a && R6("yt-remote-connection-change", !0)
        },
        l9 = function() {
            var a = g.Qz();
            if (!a) return null;
            var b = g9();
            if (!b) return null;
            b = b.Jh();
            return Z6(b, a)
        },
        s9 = function(a, b) {
            h9();
            n9() && n9();
            if (w9) q9 = a;
            else {
                tTa(a.id);
                var c = g.Ga("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new X8(e9, a, m9(), c);
                a.connect(b, uTa());
                a.subscribe("beforeDisconnect", function(d) {
                    R6("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    o9() && (o9(), t9(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = n9();
                    d && "shortLived" == d.idType && (E8() ? B8().handleBrowserChannelAuthError() : z8("refreshLoungeToken called before API ready."))
                });
                t9(a)
            }
        },
        pTa = function() {
            var a = l9();
            a ? (i9("Resume connection to: " + V6(a)), s9(a, 0)) : (d7(), USa(), i9("Skipping connecting because no session screen found."))
        },
        nTa = function() {
            var a = m9();
            if (g.Wb(a)) {
                a = b7();
                var b = g.Nz("yt-remote-session-name") || "",
                    c = g.Nz("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                g.Fa("yt.mdx.remote.channelParams_", a, void 0)
            }
        },
        m9 = function() {
            return g.Ga("yt.mdx.remote.channelParams_") || {}
        },
        x9 = function(a, b, c) {
            g.I.call(this);
            var d = this;
            this.u = a;
            this.I = b;
            this.Sb = c;
            this.events = new g.ID(this);
            this.ea = this.events.S(this.I, "onVolumeChange", function(e) {
                vTa(d, e)
            });
            this.D = !1;
            this.J = new g.dK(64);
            this.i = new g.M(this.KM, 500, this);
            this.B = new g.M(this.LM, 1E3, this);
            this.N = new j7(this.fX, 0, this);
            this.C = {};
            this.V = new g.M(this.tN, 1E3, this);
            this.K = new k7(this.seekTo, 1E3, this);
            this.ma = g.Ha;
            g.J(this, this.events);
            this.events.S(b, "onCaptionsTrackListChanged", this.VT);
            this.events.S(b, "captionschanged", this.fT);
            this.events.S(b, "captionssettingschanged", this.SM);
            this.events.S(b, "videoplayerreset", this.Gz);
            this.events.S(b, "mdxautoplaycancel", function() {
                d.Sb.RI()
            });
            a = this.Sb;
            a.isDisposed();
            a.subscribe("proxyStateChange", this.FL, this);
            a.subscribe("remotePlayerChange", this.hw, this);
            a.subscribe("remoteQueueChange", this.Gz, this);
            a.subscribe("previousNextChange", this.CL, this);
            a.subscribe("nowAutoplaying", this.wL, this);
            a.subscribe("autoplayDismissed", this.ZK, this);
            g.J(this, this.i);
            g.J(this, this.B);
            g.J(this, this.N);
            g.J(this, this.V);
            g.J(this, this.K);
            this.SM();
            this.Gz();
            this.hw()
        },
        vTa = function(a, b) {
            if (y9(a)) {
                a.Sb.unsubscribe("remotePlayerChange", a.hw, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = Q8(a.Sb);
                if (c !== d.volume || b !== d.muted) a.Sb.setVolume(c, b), a.V.start();
                a.Sb.subscribe("remotePlayerChange", a.hw, a)
            }
        },
        wTa = function(a) {
            a.Qb(0);
            a.i.stop();
            a.Tb(new g.dK(64))
        },
        z9 = function(a, b) {
            if (y9(a) && !a.D) {
                var c = null;
                b && (c = {
                    style: a.I.getSubtitlesUserSettings()
                }, g.ec(c, b));
                a.Sb.cH(a.I.getVideoData(1).videoId, c);
                a.C = Q8(a.Sb).trackData
            }
        },
        A9 = function(a, b) {
            var c = a.I.getPlaylist();
            if (null === c || void 0 === c ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.I.getVideoData(1);
            a.Sb.playVideo(c.videoId, b, d, e, c.playerParams, c.Ya, UQa(c));
            a.Tb(new g.dK(1))
        },
        xTa = function(a, b) {
            if (b) {
                var c = a.I.getOption("captions", "tracklist", {
                    RJ: 1
                });
                c && c.length ? (a.I.setOption("captions", "track", b), a.D = !1) : (a.I.loadModule("captions"), a.D = !0)
            } else a.I.setOption("captions", "track", {})
        },
        y9 = function(a) {
            return Q8(a.Sb).videoId === a.I.getVideoData(1).videoId
        },
        B9 = function() {
            g.V.call(this, {
                G: "div",
                L: "ytp-mdx-manual-pairing-popup-dialog",
                W: {
                    role: "dialog"
                },
                T: [{
                    G: "div",
                    L: "ytp-mdx-manual-pairing-popup-dialog-inner-content",
                    T: [{
                        G: "div",
                        L: "ytp-mdx-manual-pairing-popup-title",
                        xa: "T\u00ednh n\u0103ng d\u00f9ng m\u00e3 \u0111\u1ec3 k\u1ebft n\u1ed1i m\u1ea1ng cho TV s\u1eafp ng\u1eebng ho\u1ea1t \u0111\u1ed9ng"
                    }, {
                        G: "div",
                        L: "ytp-mdx-manual-pairing-popup-buttons",
                        T: [{
                            G: "button",
                            Ia: ["ytp-button", "ytp-mdx-manual-pairing-popup-learn-more"],
                            xa: "T\u00ecm hi\u1ec3u th\u00eam"
                        }, {
                            G: "button",
                            Ia: ["ytp-button",
                                "ytp-mdx-manual-pairing-popup-ok"
                            ],
                            xa: "OK"
                        }]
                    }]
                }]
            });
            this.i = new g.KL(this, 250);
            this.learnMoreButton = this.Ga("ytp-mdx-manual-pairing-popup-learn-more");
            this.okButton = this.Ga("ytp-mdx-manual-pairing-popup-ok");
            g.J(this, this.i);
            this.S(this.learnMoreButton, "click", this.u);
            this.S(this.okButton, "click", this.B)
        },
        C9 = function() {
            g.V.call(this, {
                G: "div",
                L: "ytp-mdx-popup-dialog",
                W: {
                    role: "dialog"
                },
                T: [{
                    G: "div",
                    L: "ytp-mdx-popup-dialog-inner-content",
                    T: [{
                            G: "div",
                            L: "ytp-mdx-popup-title",
                            xa: "B\u1ea1n \u0111\u00e3 \u0111\u0103ng xu\u1ea5t"
                        }, {
                            G: "div",
                            L: "ytp-mdx-popup-description",
                            xa: "C\u00e1c video m\u00e0 b\u1ea1n xem c\u00f3 th\u1ec3 \u0111\u01b0\u1ee3c th\u00eam v\u00e0o l\u1ecbch s\u1eed xem v\u00e0 g\u00e2y \u1ea3nh h\u01b0\u1edfng \u0111\u1ebfn ph\u1ea7n \u0111\u1ec1 xu\u1ea5t tr\u00ean TV. \u0110\u1ec3 tr\u00e1nh \u0111i\u1ec1u n\u00e0y, h\u00e3y h\u1ee7y r\u1ed3i \u0111\u0103ng nh\u1eadp v\u00e0o YouTube tr\u00ean m\u00e1y t\u00ednh."
                        },
                        {
                            G: "div",
                            L: "ytp-mdx-privacy-popup-buttons",
                            T: [{
                                G: "button",
                                Ia: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                                xa: "H\u1ee7y"
                            }, {
                                G: "button",
                                Ia: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
                                xa: "X\u00e1c nh\u1eadn"
                            }]
                        }
                    ]
                }]
            });
            this.i = new g.KL(this, 250);
            this.cancelButton = this.Ga("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Ga("ytp-mdx-privacy-popup-confirm");
            g.J(this, this.i);
            this.S(this.cancelButton, "click", this.u);
            this.S(this.confirmButton, "click", this.B)
        },
        D9 = function(a) {
            g.V.call(this, {
                G: "div",
                L: "ytp-remote",
                T: [{
                    G: "div",
                    L: "ytp-remote-display-status",
                    T: [{
                        G: "div",
                        L: "ytp-remote-display-status-icon",
                        T: [g.nsa()]
                    }, {
                        G: "div",
                        L: "ytp-remote-display-status-text",
                        xa: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.i = new g.KL(this, 250);
            g.J(this, this.i);
            this.S(a, "presentingplayerstatechange", this.u);
            yTa(this, a.wb())
        },
        yTa = function(a, b) {
            if (3 === a.api.getPresentingPlayerType()) {
                var c = {
                    RECEIVER_NAME: a.api.getOption("remote", "currentReceiver").name
                };
                b = g.U(b, 128) ? g.BI("L\u1ed7i tr\u00ean $RECEIVER_NAME", c) : b.zc() || g.U(b, 4) ? g.BI("\u0110ang ph\u00e1t tr\u00ean $RECEIVER_NAME", c) : g.BI("\u0110\u00e3 k\u1ebft n\u1ed1i v\u1edbi $RECEIVER_NAME", c);
                a.Va("statustext", b);
                a.i.show()
            } else a.i.hide()
        },
        E9 = function(a, b) {
            g.WP.call(this, "Ph\u00e1t tr\u00ean", 0, a, b);
            this.I = a;
            this.oo = {};
            this.S(a, "onMdxReceiversChange", this.D);
            this.S(a, "presentingplayerstatechange", this.D);
            this.D()
        },
        F9 = function(a) {
            g.gN.call(this, a);
            this.tj = {
                key: X6(),
                name: "M\u00e1y t\u00ednh n\u00e0y"
            };
            this.ci = null;
            this.subscriptions = [];
            this.JE = this.Sb = null;
            this.oo = [this.tj];
            this.Xm = this.tj;
            this.rd = new g.dK(64);
            this.rK = 0;
            this.rf = -1;
            this.As = null;
            this.ow = this.fz = !1;
            this.mm = this.Ls = null;
            if (!g.pF(this.player.U()) && !g.qF(this.player.U())) {
                a = this.player;
                var b = g.NM(a);
                b && (b = b.Cn()) && (b = new E9(a, b), g.J(this, b));
                b = new D9(a);
                g.J(this, b);
                g.XM(a, b.element, 4);
                this.Ls = new C9;
                g.J(this, this.Ls);
                g.XM(a, this.Ls.element, 4);
                this.player.U().experiments.oa("pair_servlet_deprecation_warning_enabled") &&
                    !this.player.U().experiments.oa("deprecate_pair_servlet_enabled") && (this.As = new B9, g.J(this, this.As), g.XM(a, this.As.element, 4));
                this.ow = !!l9();
                this.fz = !!g.Nz("yt-remote-manual-pairing-warning-shown")
            }
        },
        G9 = function(a) {
            a.mm && (a.player.removeEventListener("presentingplayerstatechange", a.mm), a.mm = null)
        },
        zTa = function(a, b, c) {
            a.rd = c;
            a.player.Z("presentingplayerstatechange", new g.nI(c, b))
        },
        ATa = function(a, b, c) {
            var d = !1;
            1 === b ? d = !a.ow : 2 === b && (d = !a.fz);
            d && g.pI(c, 8) && (a.player.pauseVideo(), G9(a))
        },
        H9 = function(a, b) {
            if (b.key !== a.Xm.key)
                if (b.key === a.tj.key) r9();
                else {
                    if (a.As && !a.fz && b !== a.tj && "cast-selector-receiver" !== b.key && g.GF(a.player.U())) BTa(a);
                    else {
                        var c;
                        (c = !a.player.U().experiments.oa("mdx_enable_privacy_disclosure_ui")) || (c = ((c = g.P("PLAYER_CONFIG")) && c.args && void 0 !== c.args.authuser ? !0 : !(!g.P("SESSION_INDEX") && !g.P("LOGGED_IN"))) || a.ow || !a.Ls);
                        (c ? 0 : g.GF(a.player.U()) || g.JF(a.player.U())) && CTa(a)
                    }
                    a.Xm = b;
                    if (!a.player.U().Y("disable_mdx_connection_in_mdx_module_for_music_web") || !g.qF(a.player.U())) {
                        var d = a.player.getPlaylistId();
                        c = a.player.getVideoData(1);
                        var e = c.videoId;
                        if (!d && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.U().experiments.oa("should_clear_video_data_on_player_cued_unstarted")) a = null;
                        else {
                            var f = a.player.getPlaylist();
                            if (f) {
                                var h = [];
                                for (var l = 0; l < f.length; l++) h[l] = g.cN(f, l).videoId
                            } else h = [e];
                            f = a.player.getCurrentTime(1);
                            a = {
                                videoIds: h,
                                listId: d,
                                videoId: e,
                                playerParams: c.playerParams,
                                clickTrackingParams: c.Ya,
                                index: Math.max(a.player.getPlaylistIndex(), 0),
                                currentTime: 0 === f ? void 0 : f
                            };
                            (c = UQa(c)) && (a.locationInfo = c)
                        }
                        i9("Connecting to: " +
                            g.Nh(b));
                        "cast-selector-receiver" == b.key ? (k9(a || null), b = a || null, E8() ? B8().setLaunchParams(b) : z8("setLaunchParams called before ready.")) : !a && u9() && h9() == b.key ? R6("yt-remote-connection-change", !0) : (r9(), k9(a || null), a = g9().Jh(), (b = Z6(a, b.key)) && s9(b, 1))
                    }
                }
        },
        CTa = function(a) {
            a.player.wb().zc() ? a.player.pauseVideo() : (a.mm = function(b) {
                ATa(a, 1, b)
            }, a.player.addEventListener("presentingplayerstatechange", a.mm));
            a.Ls && a.Ls.dd();
            o9() || (w9 = !0)
        },
        BTa = function(a) {
            a.player.wb().zc() ? a.player.pauseVideo() : (a.mm = function(b) {
                ATa(a, 2, b)
            }, a.player.addEventListener("presentingplayerstatechange", a.mm));
            a.As && a.As.dd();
            o9() || (w9 = !0)
        },
        CRa = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        w7 = {
            "'": "\\'"
        },
        $Qa = {
            fY: "atp",
            H8: "ska",
            v7: "que",
            s5: "mus",
            G8: "sus",
            F1: "dsp",
            Q7: "seq",
            V4: "mic",
            A0: "dpa",
            tY: "cds",
            q5: "mlm"
        },
        e7, a7 = "",
        tRa = oRa("loadCastFramework") || oRa("loadCastApplicationFramework"),
        vRa = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    g.Qa(j7, g.I);
    g.k = j7.prototype;
    g.k.qP = function(a) {
        this.C = arguments;
        this.i = !1;
        this.Mb ? this.B = g.Pa() + this.Vf : this.Mb = g.ph(this.D, this.Vf)
    };
    g.k.stop = function() {
        this.Mb && (g.C.clearTimeout(this.Mb), this.Mb = null);
        this.B = null;
        this.i = !1;
        this.C = []
    };
    g.k.pause = function() {
        ++this.u
    };
    g.k.resume = function() {
        this.u && (--this.u, !this.u && this.i && (this.i = !1, this.J.apply(null, this.C)))
    };
    g.k.Aa = function() {
        this.stop();
        j7.je.Aa.call(this)
    };
    g.k.rP = function() {
        this.Mb && (g.C.clearTimeout(this.Mb), this.Mb = null);
        this.B ? (this.Mb = g.ph(this.D, this.B - g.Pa()), this.B = null) : this.u ? this.i = !0 : (this.i = !1, this.J.apply(null, this.C))
    };
    g.w(k7, g.I);
    g.k = k7.prototype;
    g.k.XG = function(a) {
        this.B = arguments;
        this.Mb || this.u ? this.i = !0 : l7(this)
    };
    g.k.stop = function() {
        this.Mb && (g.C.clearTimeout(this.Mb), this.Mb = null, this.i = !1, this.B = null)
    };
    g.k.pause = function() {
        this.u++
    };
    g.k.resume = function() {
        this.u--;
        this.u || !this.i || this.Mb || (this.i = !1, l7(this))
    };
    g.k.Aa = function() {
        g.I.prototype.Aa.call(this);
        this.stop()
    };
    m7.prototype.stringify = function(a) {
        return g.C.JSON.stringify(a, void 0)
    };
    m7.prototype.parse = function(a) {
        return g.C.JSON.parse(a, void 0)
    };
    var o7 = new g.Qf;
    g.w(xRa, g.rf);
    g.k = q7.prototype;
    g.k.Po = null;
    g.k.Bm = !1;
    g.k.zt = null;
    g.k.XF = null;
    g.k.Qs = null;
    g.k.jt = null;
    g.k.Qm = null;
    g.k.uo = null;
    g.k.lq = null;
    g.k.Nf = null;
    g.k.JA = 0;
    g.k.Mj = null;
    g.k.GA = null;
    g.k.Km = null;
    g.k.Ut = -1;
    g.k.AM = !0;
    g.k.hp = !1;
    g.k.xB = 0;
    g.k.Wz = null;
    var ARa = {},
        t7 = {};
    g.k = q7.prototype;
    g.k.setTimeout = function(a) {
        this.B = a
    };
    g.k.sP = function(a) {
        a = a.target;
        var b = this.Wz;
        b && 3 == g.Ji(a) ? b.XG() : this.BN(a)
    };
    g.k.BN = function(a) {
        try {
            if (a == this.Nf) a: {
                var b = g.Ji(this.Nf),
                    c = this.Nf.u,
                    d = this.Nf.getStatus();
                if (g.ke && !g.ce(10) || g.rg && !g.be("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.Wi(this.Nf)) break a;this.hp || 4 != b || 7 == c || (8 == c || 0 >= d ? this.i.wj(3) : this.i.wj(2));x7(this);
                var e = this.Nf.getStatus();this.Ut = e;
                var f = g.Wi(this.Nf);
                if (this.Bm = 200 == e) {
                    4 == b && u7(this);
                    if (this.D) {
                        for (a = !0; !this.hp && this.JA < f.length;) {
                            var h = BRa(this, f);
                            if (h == t7) {
                                4 == b && (this.Km = 4, p7(15), a = !1);
                                break
                            } else if (h == ARa) {
                                this.Km = 4;
                                p7(16);
                                a = !1;
                                break
                            } else y7(this, h)
                        }
                        4 == b && 0 == f.length && (this.Km = 1, p7(17), a = !1);
                        this.Bm = this.Bm && a;
                        a || (u7(this), v7(this))
                    } else y7(this, f);
                    this.Bm && !this.hp && (4 == b ? this.i.qx(this) : (this.Bm = !1, s7(this)))
                } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.Km = 3, p7(13)) : (this.Km = 0, p7(14)),
                u7(this),
                v7(this)
            }
        } catch (l) {
            this.Nf && g.Wi(this.Nf)
        } finally {}
    };
    g.k.FV = function(a) {
        n7((0, g.E)(this.EV, this, a), 0)
    };
    g.k.EV = function(a) {
        this.hp || (x7(this), y7(this, a), s7(this))
    };
    g.k.NL = function(a) {
        n7((0, g.E)(this.CV, this, a), 0)
    };
    g.k.CV = function(a) {
        this.hp || (u7(this), this.Bm = a, this.i.qx(this), this.i.wj(4))
    };
    g.k.cancel = function() {
        this.hp = !0;
        u7(this)
    };
    g.k.MV = function() {
        this.zt = null;
        var a = Date.now();
        0 <= a - this.XF ? (2 != this.jt && this.i.wj(3), u7(this), this.Km = 2, p7(18), v7(this)) : ERa(this, this.XF - a)
    };
    g.k.getLastError = function() {
        return this.Km
    };
    g.k = HRa.prototype;
    g.k.yB = null;
    g.k.rh = null;
    g.k.Xz = !1;
    g.k.MM = null;
    g.k.Yx = null;
    g.k.LD = null;
    g.k.zB = null;
    g.k.Ta = null;
    g.k.dl = -1;
    g.k.Vt = null;
    g.k.xu = null;
    g.k.connect = function(a) {
        this.zB = a;
        a = A7(this.i, null, this.zB);
        p7(3);
        this.MM = Date.now();
        var b = this.i.K;
        null != b ? (this.Vt = b[0], (this.xu = b[1]) ? (this.Ta = 1, IRa(this)) : (this.Ta = 2, C7(this))) : (O6(a, "MODE", "init"), this.rh = new q7(this, void 0, void 0, void 0), this.rh.Po = this.yB, r7(this.rh, a, !1, null, !0), this.Ta = 0)
    };
    g.k.nQ = function(a) {
        if (a) this.Ta = 2, C7(this);
        else {
            p7(4);
            var b = this.i;
            b.Zj = b.Vm.dl;
            J7(b, 9)
        }
        a && this.wj(2)
    };
    g.k.zC = function(a) {
        return this.i.zC(a)
    };
    g.k.abort = function() {
        this.rh && (this.rh.cancel(), this.rh = null);
        this.dl = -1
    };
    g.k.mf = function() {
        return !1
    };
    g.k.GL = function(a, b) {
        this.dl = a.Ut;
        if (0 == this.Ta)
            if (b) {
                try {
                    var c = this.u.parse(b)
                } catch (d) {
                    a = this.i;
                    a.Zj = this.dl;
                    J7(a, 2);
                    return
                }
                this.Vt = c[0];
                this.xu = c[1]
            } else a = this.i, a.Zj = this.dl, J7(a, 2);
        else if (2 == this.Ta)
            if (this.Xz) p7(7), this.LD = Date.now();
            else if ("11111" == b) {
            if (p7(6), this.Xz = !0, this.Yx = Date.now(), a = this.Yx - this.MM, !g.ke || g.ce(10) || 500 > a) this.dl = 200, this.rh.cancel(), p7(12), B7(this.i, this, !0)
        } else p7(8), this.Yx = this.LD = Date.now(), this.Xz = !1
    };
    g.k.qx = function() {
        this.dl = this.rh.Ut;
        if (this.rh.Bm) 0 == this.Ta ? this.xu ? (this.Ta = 1, IRa(this)) : (this.Ta = 2, C7(this)) : 2 == this.Ta && ((!g.ke || g.ce(10) ? !this.Xz : 200 > this.LD - this.Yx) ? (p7(11), B7(this.i, this, !1)) : (p7(12), B7(this.i, this, !0)));
        else {
            0 == this.Ta ? p7(9) : 2 == this.Ta && p7(10);
            var a = this.i;
            this.rh.getLastError();
            a.Zj = this.dl;
            J7(a, 2)
        }
    };
    g.k.Lw = function() {
        return this.i.Lw()
    };
    g.k.isActive = function() {
        return this.i.isActive()
    };
    g.k.wj = function(a) {
        this.i.wj(a)
    };
    g.k = D7.prototype;
    g.k.Yj = null;
    g.k.Tu = null;
    g.k.Yg = null;
    g.k.Fe = null;
    g.k.AB = null;
    g.k.Zx = null;
    g.k.dI = null;
    g.k.sx = null;
    g.k.Uv = 0;
    g.k.vS = 0;
    g.k.Of = null;
    g.k.pn = null;
    g.k.Al = null;
    g.k.rp = null;
    g.k.Vm = null;
    g.k.EA = null;
    g.k.us = -1;
    g.k.qK = -1;
    g.k.Zj = -1;
    g.k.Mr = 0;
    g.k.wr = 0;
    g.k.ip = 8;
    g.Qa(KRa, g.rf);
    g.Qa(LRa, g.rf);
    g.k = D7.prototype;
    g.k.connect = function(a, b, c, d, e) {
        p7(0);
        this.AB = b;
        this.Tu = c || {};
        d && void 0 !== e && (this.Tu.OSID = d, this.Tu.OAID = e);
        this.D ? (n7((0, g.E)(this.AI, this, a), 100), PRa(this)) : this.AI(a)
    };
    g.k.AI = function(a) {
        this.Vm = new HRa(this);
        this.Vm.yB = this.Yj;
        this.Vm.u = this.C;
        this.Vm.connect(a)
    };
    g.k.mf = function() {
        return 0 == this.Ta
    };
    g.k.getState = function() {
        return this.Ta
    };
    g.k.LL = function(a) {
        this.pn = null;
        TRa(this, a)
    };
    g.k.KL = function() {
        this.Al = null;
        this.Fe = new q7(this, this.u, "rpc", this.J);
        this.Fe.Po = this.Yj;
        this.Fe.xB = 0;
        var a = this.dI.clone();
        g.bk(a, "RID", "rpc");
        g.bk(a, "SID", this.u);
        g.bk(a, "CI", this.EA ? "0" : "1");
        g.bk(a, "AID", this.us);
        E7(this, a);
        if (!g.ke || g.ce(10)) g.bk(a, "TYPE", "xmlhttp"), r7(this.Fe, a, !0, this.sx, !1);
        else {
            g.bk(a, "TYPE", "html");
            var b = this.Fe,
                c = !!this.sx;
            b.jt = 3;
            b.Qm = N6(a.clone());
            DRa(b, c)
        }
    };
    g.k.GL = function(a, b) {
        if (0 != this.Ta && (this.Fe == a || this.Yg == a))
            if (this.Zj = a.Ut, this.Yg == a && 3 == this.Ta)
                if (7 < this.ip) {
                    try {
                        var c = this.C.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && 3 == c.length)
                        if (a = c, 0 == a[0]) a: {
                            if (!this.Al) {
                                if (this.Fe)
                                    if (this.Fe.Qs + 3E3 < this.Yg.Qs) G7(this), this.Fe.cancel(), this.Fe = null;
                                    else break a;
                                I7(this);
                                p7(19)
                            }
                        }
                    else this.qK = a[1], 0 < this.qK - this.us && 37500 > a[2] && this.EA && 0 == this.wr && !this.rp && (this.rp = n7((0, g.E)(this.cT, this), 6E3));
                    else J7(this, 11)
                } else null != b && J7(this, 11);
        else if (this.Fe ==
            a && G7(this), !g.yc(b))
            for (a = this.C.parse(b), b = 0; b < a.length; b++) c = a[b], this.us = c[0], c = c[1], 2 == this.Ta ? "c" == c[0] ? (this.u = c[1], this.sx = c[2], c = c[3], null != c ? this.ip = c : this.ip = 6, this.Ta = 3, this.Of && this.Of.wI(), this.dI = A7(this, this.Lw() ? this.sx : null, this.AB), URa(this)) : "stop" == c[0] && J7(this, 7) : 3 == this.Ta && ("stop" == c[0] ? J7(this, 7) : "noop" != c[0] && this.Of && this.Of.vI(c), this.wr = 0)
    };
    g.k.cT = function() {
        null != this.rp && (this.rp = null, this.Fe.cancel(), this.Fe = null, I7(this), p7(20))
    };
    g.k.qx = function(a) {
        if (this.Fe == a) {
            G7(this);
            this.Fe = null;
            var b = 2
        } else if (this.Yg == a) this.Yg = null, b = 1;
        else return;
        this.Zj = a.Ut;
        if (0 != this.Ta)
            if (a.Bm)
                if (1 == b) {
                    b = Date.now() - a.Qs;
                    var c = o7;
                    c.dispatchEvent(new KRa(c, a.lq ? a.lq.length : 0, b, this.Mr));
                    F7(this);
                    this.B.length = 0
                } else URa(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Zj)) {
                if (d = 1 == b) this.Yg || this.pn || 1 == this.Ta || 2 <= this.Mr ? d = !1 : (this.pn = n7((0, g.E)(this.LL, this, a), VRa(this, this.Mr)), this.Mr++, d = !0);
                d = !(d || 2 == b && I7(this))
            }
            if (d) switch (c) {
                case 1:
                    J7(this,
                        5);
                    break;
                case 4:
                    J7(this, 10);
                    break;
                case 3:
                    J7(this, 6);
                    break;
                case 7:
                    J7(this, 12);
                    break;
                default:
                    J7(this, 2)
            }
        }
    };
    g.k.NQ = function(a) {
        if (!g.ib(arguments, this.Ta)) throw Error("Unexpected channel state: " + this.Ta);
    };
    g.k.NW = function(a) {
        a ? p7(2) : (p7(1), WRa(this, 8))
    };
    g.k.zC = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.Di;
        a.N = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.Of && this.Of.isActive(this)
    };
    g.k.wj = function(a) {
        var b = o7;
        b.dispatchEvent(new LRa(b, a))
    };
    g.k.Lw = function() {
        return !(!g.ke || g.ce(10))
    };
    g.k = XRa.prototype;
    g.k.wI = function() {};
    g.k.vI = function() {};
    g.k.uI = function() {};
    g.k.mC = function() {};
    g.k.iJ = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = YRa.prototype;
    g.k.isEmpty = function() {
        return 0 === this.i.length && 0 === this.u.length
    };
    g.k.clear = function() {
        this.i = [];
        this.u = []
    };
    g.k.contains = function(a) {
        return g.ib(this.i, a) || g.ib(this.u, a)
    };
    g.k.remove = function(a) {
        var b = this.i;
        var c = (0, g.eLa)(b, a);
        0 <= c ? (g.nb(b, c), b = !0) : b = !1;
        return b || g.ob(this.u, a)
    };
    g.k.dh = function() {
        for (var a = [], b = this.i.length - 1; 0 <= b; --b) a.push(this.i[b]);
        var c = this.u.length;
        for (b = 0; b < c; ++b) a.push(this.u[b]);
        return a
    };
    g.Qa(K7, g.I);
    g.k = K7.prototype;
    g.k.wV = function() {
        this.Vf = Math.min(3E5, 2 * this.Vf);
        this.B();
        this.u && this.start()
    };
    g.k.start = function() {
        var a = this.Vf + 15E3 * Math.random();
        g.Iq(this.i, a);
        this.u = Date.now() + a
    };
    g.k.stop = function() {
        this.i.stop();
        this.u = 0
    };
    g.k.isActive = function() {
        return this.i.isActive()
    };
    g.k.reset = function() {
        this.i.stop();
        this.Vf = 5E3
    };
    g.Qa(L7, XRa);
    g.k = L7.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.B.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.B.unsubscribe(a, b, c)
    };
    g.k.fg = function(a) {
        return this.B.fg(a)
    };
    g.k.Z = function(a, b) {
        return this.B.Z.apply(this.B, arguments)
    };
    g.k.dispose = function() {
        this.ea || (this.ea = !0, g.of(this.B), aSa(this), g.of(this.u), this.u = null, this.ma = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.ea
    };
    g.k.connect = function(a, b, c) {
        if (!this.i || 2 != this.i.getState()) {
            this.V = "";
            this.u.stop();
            this.D = a || null;
            this.C = b || 0;
            a = this.ya + "/test";
            b = this.ya + "/bind";
            var d = new D7(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Ba),
                e = this.i;
            e && (e.Of = null);
            d.Of = this;
            this.i = d;
            M7(this);
            if (this.i) {
                d = g.P("ID_TOKEN");
                var f = this.i.Yj || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.i.Yj = f
            }
            e ? (3 != e.getState() && 0 == RRa(e) || e.getState(), this.i.connect(a, b, this.J, e.u, e.us)) : c ? this.i.connect(a,
                b, this.J, c.sessionId, c.arrayId) : this.i.connect(a, b, this.J)
        }
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.ec(a, b);
        this.u.isActive() || 2 == (this.i ? this.i.getState() : 0) ? this.K.push(a) : N7(this) && (M7(this), QRa(this.i, a))
    };
    g.k.wI = function() {
        this.u.reset();
        this.D = null;
        this.C = 0;
        if (this.K.length) {
            var a = this.K;
            this.K = [];
            for (var b = 0, c = a.length; b < c; ++b) QRa(this.i, a[b])
        }
        this.Z("handlerOpened")
    };
    g.k.uI = function(a) {
        var b = 2 == a && 401 == this.i.Zj;
        4 == a || b || this.u.start();
        this.Z("handlerError", a, b)
    };
    g.k.mC = function(a) {
        if (!this.u.isActive()) this.Z("handlerClosed");
        else if (a)
            for (var b = 0, c = a.length; b < c; ++b) {
                var d = a[b].map;
                d && this.K.push(d)
            }
    };
    g.k.iJ = function() {
        var a = {
            v: 2
        };
        this.V && (a.gsessionid = this.V);
        0 != this.C && (a.ui = "" + this.C);
        0 != this.N && (a.ui = "" + this.N);
        this.D && g.ec(a, this.D);
        return a
    };
    g.k.vI = function(a) {
        "S" == a[0] ? this.V = a[1] : "gracefulReconnect" == a[0] ? (this.u.start(), ORa(this.i)) : this.Z("handlerMessage", new ZRa(a[0], a[1]))
    };
    g.k.iA = function(a) {
        (this.J.loungeIdToken = a) || this.u.stop();
        if (this.Ca && this.i) {
            var b = this.i.Yj || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.i.Yj = b
        }
    };
    g.k.pW = function() {
        this.u.isActive();
        0 == RRa(this.i) && this.connect(this.D, this.C)
    };
    O7.prototype.C = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    O7.prototype.B = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    O7.prototype.D = function(a) {
        a(Error("request timed out"))
    };
    var hSa = Date.now(),
        R7 = null,
        U7 = Array(50),
        T7 = -1,
        V7 = !1;
    g.Qa(W7, g.R);
    W7.prototype.Jh = function() {
        return this.screens
    };
    W7.prototype.contains = function(a) {
        return !!Y6(this.screens, a)
    };
    W7.prototype.get = function(a) {
        return a ? Z6(this.screens, a) : null
    };
    W7.prototype.info = function(a) {
        S7(this.J, a)
    };
    g.w(X7, g.R);
    g.k = X7.prototype;
    g.k.start = function() {
        !this.i && isNaN(this.Mb) && this.UL()
    };
    g.k.stop = function() {
        this.i && (this.i.abort(), this.i = null);
        isNaN(this.Mb) || (g.jt(this.Mb), this.Mb = NaN)
    };
    g.k.Aa = function() {
        this.stop();
        g.R.prototype.Aa.call(this)
    };
    g.k.UL = function() {
        this.Mb = NaN;
        this.i = g.ot(P7(this.B, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.K
            },
            timeout: 5E3,
            onSuccess: (0, g.E)(this.uP, this),
            onError: (0, g.E)(this.tP, this),
            onTimeout: (0, g.E)(this.vP, this)
        })
    };
    g.k.uP = function(a, b) {
        this.i = null;
        a = b.screen || {};
        a.dialId = this.C;
        a.name = this.J;
        b = -1;
        this.D && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.Z("pairingComplete", new T6(a), b)
    };
    g.k.tP = function(a) {
        this.i = null;
        a.status && 404 == a.status ? this.u >= DTa.length ? this.Z("pairingFailed", Error("DIAL polling timed out")) : (a = DTa[this.u], this.Mb = g.ht((0, g.E)(this.UL, this), a), this.u++) : this.Z("pairingFailed", Error("Server error " + a.status))
    };
    g.k.vP = function() {
        this.i = null;
        this.Z("pairingFailed", Error("Server not responding"))
    };
    var DTa = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.Qa(Z7, W7);
    g.k = Z7.prototype;
    g.k.start = function() {
        Y7(this) && this.Z("screenChange");
        !g.Nz("yt-remote-lounge-token-expiration") && lSa(this);
        g.jt(this.i);
        this.i = g.ht((0, g.E)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        Y7(this);
        iSa(this, a);
        $7(this, !1);
        this.Z("screenChange");
        b(a);
        a.token || lSa(this)
    };
    g.k.remove = function(a, b) {
        var c = Y7(this);
        kSa(this, a) && ($7(this, !1), c = !0);
        b(a);
        c && this.Z("screenChange")
    };
    g.k.CA = function(a, b, c, d) {
        var e = Y7(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, $7(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.Z("screenChange")
    };
    g.k.Aa = function() {
        g.jt(this.i);
        Z7.je.Aa.call(this)
    };
    g.k.kR = function(a) {
        Y7(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        $7(this, !b);
        b && S7(this.J, "Missed " + b + " lounge tokens.")
    };
    g.k.jR = function(a) {
        S7(this.J, "Requesting lounge tokens failed: " + a)
    };
    g.w(b8, g.R);
    g.k = b8.prototype;
    g.k.start = function() {
        var a = parseInt(g.Nz("yt-remote-fast-check-period") || "0", 10);
        (this.C = g.Pa() - 144E5 < a ? 0 : a) ? e8(this): (this.C = g.Pa() + 3E5, g.Mz("yt-remote-fast-check-period", this.C), this.UE())
    };
    g.k.isEmpty = function() {
        return g.Wb(this.i)
    };
    g.k.update = function() {
        a8("Updating availability on schedule.");
        var a = this.J(),
            b = g.Gb(this.i, function(c, d) {
                return c && !!Z6(a, d)
            }, this);
        d8(this, b)
    };
    g.k.Aa = function() {
        g.jt(this.B);
        this.B = NaN;
        this.u && (this.u.abort(), this.u = null);
        g.R.prototype.Aa.call(this)
    };
    g.k.UE = function() {
        g.jt(this.B);
        this.B = NaN;
        this.u && this.u.abort();
        var a = nSa(this);
        if (P6(a)) {
            var b = P7(this.D, "/pairing/get_screen_availability");
            this.u = Q7(this.D, b, {
                lounge_token: g.Nb(a).join(",")
            }, (0, g.E)(this.dV, this, a), (0, g.E)(this.cV, this))
        } else d8(this, {}), e8(this)
    };
    g.k.dV = function(a, b) {
        this.u = null;
        var c = g.Nb(nSa(this));
        if (g.Ab(c, g.Nb(a))) {
            b = b.screens || [];
            c = {};
            for (var d = 0, e = b.length; d < e; ++d) c[a[b[d].loungeToken]] = "online" == b[d].status;
            d8(this, c);
            e8(this)
        } else this.ke("Changing Screen set during request."), this.UE()
    };
    g.k.cV = function(a) {
        this.ke("Screen availability failed: " + a);
        this.u = null;
        e8(this)
    };
    g.k.ke = function(a) {
        S7("OnlineScreenService", a)
    };
    g.Qa(f8, W7);
    g.k = f8.prototype;
    g.k.start = function() {
        this.u.start();
        this.i.start();
        this.screens.length && (this.Z("screenChange"), this.i.isEmpty() || this.Z("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.u.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.u.remove(a, b, c);
        this.i.update()
    };
    g.k.CA = function(a, b, c, d) {
        this.u.contains(a) ? this.u.CA(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, S7(this.J, a), d(Error(a)))
    };
    g.k.Jh = function(a) {
        return a ? this.screens : g.qb(this.screens, g.Io(this.B, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.YG = function() {
        return g.Io(this.Jh(!0), function(a) {
            return !!this.i.i[a.id]
        }, this)
    };
    g.k.ZG = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new X7(this.C, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.of(l);
            e(g8(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.of(l);
            f(m)
        });
        l.start();
        return (0, g.E)(l.stop, l)
    };
    g.k.wP = function(a, b, c, d) {
        g.ot(P7(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.E)(function(e, f) {
                e = new T6(f.screen || {});
                if (!e.name || rSa(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); rSa(this, l);) {
                            h++;
                            if (20 < h) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(g8(this, e))
            }, this),
            onError: (0, g.E)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.E)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.Aa = function() {
        g.of(this.u);
        g.of(this.i);
        f8.je.Aa.call(this)
    };
    g.k.tR = function() {
        tSa(this);
        this.Z("screenChange");
        this.i.update()
    };
    f8.prototype.dispose = f8.prototype.dispose;
    g.Qa(i8, g.R);
    g.k = i8.prototype;
    g.k.getScreen = function() {
        return this.C
    };
    g.k.Cg = function(a) {
        this.isDisposed() || (a && (k8(this, "" + a), this.Z("sessionFailed")), this.C = null, this.Z("sessionScreen", null))
    };
    g.k.info = function(a) {
        S7(this.Ca, a)
    };
    g.k.aH = function() {
        return null
    };
    g.k.hF = function(a) {
        var b = this.i;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.E)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.E)(function() {
            k8(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.Aa = function() {
        this.hF("");
        i8.je.Aa.call(this)
    };
    g.w(l8, i8);
    g.k = l8.prototype;
    g.k.gF = function(a) {
        if (this.u) {
            if (this.u == a) return;
            k8(this, "Overriding cast session with new session object");
            CSa(this);
            this.ya = !1;
            this.V = "unknown";
            this.u.removeUpdateListener(this.ma);
            this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ba)
        }
        this.u = a;
        this.u.addUpdateListener(this.ma);
        this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ba);
        ySa(this, "getMdxSessionStatus")
    };
    g.k.ws = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Nh(a))
    };
    g.k.stop = function() {
        this.u ? this.u.stop((0, g.E)(function() {
            this.Cg()
        }, this), (0, g.E)(function() {
            this.Cg(Error("Failed to stop receiver app."))
        }, this)) : this.Cg(Error("Stopping cast device without session."))
    };
    g.k.hF = function() {};
    g.k.Aa = function() {
        this.info("disposeInternal");
        CSa(this);
        this.u && (this.u.removeUpdateListener(this.ma), this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ba));
        this.u = null;
        i8.prototype.Aa.call(this)
    };
    g.k.QV = function(a, b) {
        if (!this.isDisposed())
            if (b)
                if (b = Q6(b), g.La(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Nh(b)), a) {
                    case "mdxSessionStatus":
                        wSa(this, b);
                        break;
                    case "loungeToken":
                        zSa(this, b);
                        break;
                    default:
                        k8(this, "Unknown youtube message: " + a)
                } else k8(this, "Unable to parse message.");
                else k8(this, "No data in message.")
    };
    g.k.wJ = function(a, b, c, d) {
        g.jt(this.N);
        this.N = 0;
        qSa(this.B, this.i.label, a, this.i.friendlyName, (0, g.E)(function(e) {
            e ? b(e) : 0 <= d ? (k8(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.N = g.ht((0, g.E)(this.wJ, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.aH = function() {
        return this.u
    };
    g.k.xP = function(a) {
        this.isDisposed() || a || (k8(this, "Cast session died."), this.Cg())
    };
    g.w(o8, i8);
    g.k = o8.prototype;
    g.k.gF = function(a) {
        this.u = a;
        this.u.addUpdateListener(this.Ha)
    };
    g.k.ws = function(a) {
        this.Ma = a;
        this.ea()
    };
    g.k.stop = function() {
        JSa(this);
        this.u ? this.u.stop((0, g.E)(this.Cg, this, null), (0, g.E)(this.Cg, this, "Failed to stop DIAL device.")) : this.Cg()
    };
    g.k.Aa = function() {
        JSa(this);
        this.u && this.u.removeUpdateListener(this.Ha);
        this.u = null;
        i8.prototype.Aa.call(this)
    };
    g.k.yP = function(a) {
        this.isDisposed() || a || (k8(this, "DIAL session died."), this.D(), this.D = g.Ha, this.Cg())
    };
    g.w(s8, i8);
    s8.prototype.stop = function() {
        this.Cg()
    };
    s8.prototype.gF = function() {};
    s8.prototype.ws = function() {
        g.jt(this.u);
        this.u = NaN;
        var a = Z6(this.B.Jh(), this.i.label);
        a ? j8(this, a) : this.Cg(Error("No such screen"))
    };
    s8.prototype.Aa = function() {
        g.jt(this.u);
        this.u = NaN;
        i8.prototype.Aa.call(this)
    };
    g.w(t8, g.R);
    g.k = t8.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.N);
        this.V || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.J ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.E)(this.NU, this);
        c = new chrome.cast.ApiConfig(c, (0, g.E)(this.HL, this), e, d, a);
        c.customDialLaunchCallback = (0, g.E)(this.xT, this);
        chrome.cast.initialize(c, (0, g.E)(function() {
            this.isDisposed() ||
                (chrome.cast.addReceiverActionListener(this.D), eSa(), this.u.subscribe("onlineScreenChange", (0, g.E)(this.bH, this)), this.B = MSa(this), chrome.cast.setCustomReceivers(this.B, g.Ha, (0, g.E)(function(f) {
                    this.ke("Failed to set initial custom receivers: " + g.Nh(f))
                }, this)), this.Z("yt-remote-cast2-availability-change", v8(this)), b(!0))
        }, this), (0, g.E)(function(f) {
            this.ke("Failed to initialize API: " + g.Nh(f));
            b(!1)
        }, this))
    };
    g.k.uW = function(a, b) {
        u8("Setting connected screen ID: " + a + " -> " + b);
        if (this.i) {
            var c = this.i.getScreen();
            if (!a || c && c.id != a) u8("Unsetting old screen status: " + this.i.i.friendlyName), w8(this, null)
        }
        if (a && b) {
            if (!this.i) {
                c = Z6(this.u.Jh(), a);
                if (!c) {
                    u8("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if ("shortLived" == c.idType) {
                    u8("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                a = KSa(this, c);
                a || (u8("setConnectedScreenStatus: Connected receiver not custom..."), a = new chrome.cast.Receiver(c.uuid ?
                    c.uuid : c.id, c.name), a.receiverType = chrome.cast.ReceiverType.CUSTOM, this.B.push(a), chrome.cast.setCustomReceivers(this.B, g.Ha, (0, g.E)(function(d) {
                    this.ke("Failed to set initial custom receivers: " + g.Nh(d))
                }, this)));
                u8("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
                w8(this, new s8(this.u, a), !0)
            }
            this.i.hF(b)
        } else u8("setConnectedScreenStatus: no screen.")
    };
    g.k.vW = function(a) {
        this.isDisposed() ? this.ke("Setting connection data on disposed cast v2") : this.i ? this.i.ws(a) : this.ke("Setting connection data without a session")
    };
    g.k.AP = function() {
        this.isDisposed() ? this.ke("Stopping session on disposed cast v2") : this.i ? (this.i.stop(), w8(this, null)) : u8("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.E)(this.HL, this), (0, g.E)(this.gV, this))
    };
    g.k.Aa = function() {
        this.u.unsubscribe("onlineScreenChange", (0, g.E)(this.bH, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.D);
        var a = bSa,
            b = g.Ga("yt.mdx.remote.debug.handlers_");
        g.ob(b || [], a);
        g.of(this.i);
        g.R.prototype.Aa.call(this)
    };
    g.k.ke = function(a) {
        S7("Controller", a)
    };
    g.k.JL = function(a, b) {
        this.i == a && (b || w8(this, null), this.Z("yt-remote-cast2-session-change", b))
    };
    g.k.KU = function(a, b) {
        if (!this.isDisposed())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), u8("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.i)
                        if (this.i.i.label != a.label) u8("onReceiverAction_: Stopping active receiver: " + this.i.i.friendlyName), this.i.stop();
                        else {
                            u8("onReceiverAction_: Casting to active receiver.");
                            this.i.getScreen() && this.Z("yt-remote-cast2-session-change", this.i.getScreen());
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            w8(this,
                                new s8(this.u, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            w8(this, new o8(this.u, a, this.C, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            w8(this, new l8(this.u, a, this.config_));
                            break;
                        default:
                            this.ke("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.i && this.i.i.label == a.label ? this.i.stop() : this.ke("Stopping receiver w/o session: " + a.friendlyName)
            } else this.ke("onReceiverAction_ called without receiver.")
    };
    g.k.xT = function(a) {
        if (this.isDisposed()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.ke("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.i ? this.i.i : null;
        if (!c || c.label != b.label) return this.ke("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.i.getScreen()) return u8("Reselecting dial screen."),
                this.Z("yt-remote-cast2-session-change", this.i.getScreen()), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.ke('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            w8(this, new o8(this.u, b, this.C, this.config_))
        }
        b = this.i;
        b.N = a;
        b.N.appState == chrome.cast.DialAppState.RUNNING ? (a = b.N.extraData || {}, c = a.screenId || null, p8(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = GSa(b, {
            name: b.i.friendlyName,
            screenId: a.screenId,
            loungeToken: a.loungeToken,
            dialId: b.N.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (g.qs(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = HSa(b, c)) : a = HSa(b, c)) : a = r8(b);
        return a
    };
    g.k.HL = function(a) {
        var b = this;
        if (!this.isDisposed() && !this.J) {
            u8("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.i)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) u8("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), w8(this, new l8(this.u, c, this.config_), !0);
                    else {
                        this.ke("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.i.i,
                    e = Z6(this.u.Jh(),
                        d.label);
                e && U6(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (u8("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.of(this.i), this.i = new l8(this.u, c, this.config_), this.i.subscribe("sessionScreen", (0, g.E)(this.JL, this, this.i)), this.i.subscribe("sessionFailed", function() {
                    return LSa(b, b.i)
                }), this.i.ws(null));
                this.i.gF(a)
            }
        }
    };
    g.k.zP = function() {
        return this.i ? this.i.aH() : null
    };
    g.k.gV = function(a) {
        this.isDisposed() || (this.ke("Failed to estabilish a session: " + g.Nh(a)), a.code != chrome.cast.ErrorCode.CANCEL && w8(this, null), this.Z("yt-remote-cast2-session-failed"))
    };
    g.k.NU = function(a) {
        u8("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = v8(this);
            this.K = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            v8(this) != b && this.Z("yt-remote-cast2-availability-change", v8(this))
        }
    };
    g.k.bH = function() {
        this.isDisposed() || (this.B = MSa(this), u8("Updating custom receivers: " + g.Nh(this.B)), chrome.cast.setCustomReceivers(this.B, g.Ha, (0, g.E)(function() {
            this.ke("Failed to set custom receivers.")
        }, this)), this.Z("yt-remote-cast2-availability-change", v8(this)))
    };
    t8.prototype.setLaunchParams = t8.prototype.vW;
    t8.prototype.setConnectedScreenStatus = t8.prototype.uW;
    t8.prototype.stopSession = t8.prototype.AP;
    t8.prototype.getCastSession = t8.prototype.zP;
    t8.prototype.requestSession = t8.prototype.requestSession;
    t8.prototype.init = t8.prototype.init;
    t8.prototype.dispose = t8.prototype.dispose;
    var C8 = [];
    g.k = H8.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        I8(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.Dk = a.hasPrevious, this.hasNext = a.hasNext, this.K = a.playerTime, this.J = a.playerTimeAt, this.C = a.seekableStart, this.i = a.seekableEnd, this.D = a.duration, this.N = a.loadedTime, this.B = a.liveIngestionTime, this.u = !isNaN(this.B))
    };
    g.k.zc = function() {
        return 1 == this.playerState
    };
    g.k.isAdPlaying = function() {
        return 1081 == this.playerState
    };
    g.k.Hj = function(a) {
        this.D = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.u ? this.D + J8(this) : this.D
    };
    g.k.clone = function() {
        return new H8(N8(this))
    };
    g.w(P8, g.R);
    g.k = P8.prototype;
    g.k.getState = function() {
        return this.Ta
    };
    g.k.play = function() {
        R8(this) ? (this.i ? this.i.play(null, g.Ha, W8(this, "play")) : V8(this, "play"), U8(this, 1, L8(Q8(this))), this.Z("remotePlayerChange")) : S8(this, this.play)
    };
    g.k.pause = function() {
        R8(this) ? (this.i ? this.i.pause(null, g.Ha, W8(this, "pause")) : V8(this, "pause"), U8(this, 2, L8(Q8(this))), this.Z("remotePlayerChange")) : S8(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (R8(this)) {
            if (this.i) {
                var b = Q8(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.zc() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.i.seek(c, g.Ha, W8(this, "seekTo", {
                    newTime: a
                }))
            } else V8(this, "seekTo", {
                newTime: a
            });
            U8(this, 3, a);
            this.Z("remotePlayerChange")
        } else S8(this, g.Oa(this.seekTo, a))
    };
    g.k.stop = function() {
        if (R8(this)) {
            this.i ? this.i.stop(null, g.Ha, W8(this, "stopVideo")) : V8(this, "stopVideo");
            var a = Q8(this);
            a.index = -1;
            a.videoId = "";
            I8(a);
            T8(this, a);
            this.Z("remotePlayerChange")
        } else S8(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (R8(this)) {
            var c = Q8(this);
            if (this.u) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.u.setReceiverVolumeLevel(d, (0, g.E)(function() {
                        S7("CP", "set receiver volume: " + d)
                    }, this), (0, g.E)(function() {
                        this.ke("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.u.setReceiverMuted(b, (0, g.E)(function() {
                    S7("CP", "set receiver muted: " + b)
                }, this), (0, g.E)(function() {
                    this.ke("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                }; - 1 != c.volume && (e.delta = a - c.volume);
                V8(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            T8(this, c)
        } else S8(this, g.Oa(this.setVolume, a, b))
    };
    g.k.cH = function(a, b) {
        if (R8(this)) {
            var c = Q8(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.Nh(b.style), g.ec(a, c.trackData));
            V8(this, "setSubtitlesTrack", a);
            T8(this, c)
        } else S8(this, g.Oa(this.cH, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        R8(this) ? (b = b.getLanguageInfo().getId(), V8(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = Q8(this), a.audioTrackId = b, T8(this, a)) : S8(this, g.Oa(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = void 0 === d ? null : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? null : f;
        h = void 0 === h ? null : h;
        var l = Q8(this),
            m = {
                videoId: a
            };
        void 0 !== c && (m.currentIndex = c);
        M8(l, a, c || 0);
        void 0 !== b && (K8(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.Nh(h));
        V8(this, "setPlaylist", m);
        d || T8(this, l)
    };
    g.k.Qz = function(a, b) {
        if (R8(this)) {
            if (a && b) {
                var c = Q8(this);
                M8(c, a, b);
                T8(this, c)
            }
            V8(this, "previous")
        } else S8(this, g.Oa(this.Qz, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (R8(this)) {
            if (a && b) {
                var c = Q8(this);
                M8(c, a, b);
                T8(this, c)
            }
            V8(this, "next")
        } else S8(this, g.Oa(this.nextVideo, a, b))
    };
    g.k.RI = function() {
        R8(this) ? V8(this, "dismissAutoplay") : S8(this, this.RI)
    };
    g.k.dispose = function() {
        if (3 != this.Ta) {
            var a = this.Ta;
            this.Ta = 3;
            this.Z("proxyStateChange", a, this.Ta)
        }
        g.R.prototype.dispose.call(this)
    };
    g.k.Aa = function() {
        YSa(this);
        this.B = null;
        this.C.clear();
        O8(this, null);
        g.R.prototype.Aa.call(this)
    };
    g.k.iF = function(a) {
        if ((a != this.Ta || 2 == a) && 3 != this.Ta && 0 != a) {
            var b = this.Ta;
            this.Ta = a;
            this.Z("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.C.isEmpty();) b = a = this.C, 0 === b.i.length && (b.i = b.u, b.i.reverse(), b.u = []), a.i.pop().apply(this);
            else 3 == a && this.dispose()
        }
    };
    g.k.HU = function(a, b) {
        this.Z(a, b)
    };
    g.k.iT = function(a) {
        if (!a) this.bw(null), O8(this, null);
        else if (this.u.receiver.volume) {
            a = this.u.receiver.volume;
            var b = Q8(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) S7("CP", "Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, T8(this, b)
        }
    };
    g.k.bw = function(a) {
        S7("CP", "Cast media: " + !!a);
        this.i && this.i.removeUpdateListener(this.K);
        if (this.i = a) this.i.addUpdateListener(this.K), ZSa(this), this.Z("remotePlayerChange")
    };
    g.k.hT = function(a) {
        a ? (ZSa(this), this.Z("remotePlayerChange")) : this.bw(null)
    };
    g.k.BF = function() {
        V8(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.pT = function() {
        var a = VSa();
        a && O8(this, a)
    };
    g.k.ke = function(a) {
        S7("CP", a)
    };
    g.w(X8, g.R);
    g.k = X8.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && 0 < e.length && (m.videoIds = e.join(","));
            void 0 !== l && (m.currentIndex = l);
            this.Ca && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.lc.listId = c);
            this.lc.videoId = d;
            this.lc.index = l || 0;
            this.lc.state = 3;
            K8(this.lc,
                n);
            this.C = "UNSUPPORTED";
            c = this.Ca ? "setInitialState" : "setPlaylist";
            Y8("Connecting with " + c + " and params: " + g.Nh(m));
            this.i.connect({
                method: c,
                params: g.Nh(m)
            }, a, hRa())
        } else Y8("Connecting without params"), this.i.connect({}, a, hRa());
        bTa(this)
    };
    g.k.iA = function(a) {
        this.i.iA(a)
    };
    g.k.dispose = function() {
        this.isDisposed() || (g.Fa("yt.mdx.remote.remoteClient_", null, void 0), this.Z("beforeDispose"), Z8(this, 3));
        g.R.prototype.dispose.call(this)
    };
    g.k.Aa = function() {
        $8(this);
        b9(this);
        a9(this);
        g.jt(this.K);
        this.K = NaN;
        g.jt(this.N);
        this.N = NaN;
        this.B = null;
        g.ou(this.V);
        this.V.length = 0;
        this.i.dispose();
        g.R.prototype.Aa.call(this);
        this.C = this.J = this.u = this.lc = this.i = null
    };
    g.k.fR = function() {
        this.Ir(2)
    };
    g.k.mT = function() {
        Y8("Channel opened");
        this.ya && (this.ya = !1, a9(this), this.ma = g.ht((0, g.E)(function() {
            Y8("Timing out waiting for a screen.");
            this.Ir(1)
        }, this), 15E3));
        lRa($Ra(this.i), this.Ma)
    };
    g.k.jT = function() {
        Y8("Channel closed");
        isNaN(this.D) ? d7(!0) : d7();
        this.dispose()
    };
    g.k.kT = function(a, b) {
        d7();
        isNaN(this.xv()) ? (b && "shortLived" == this.Ba && this.Z("browserChannelAuthError", a), Y8("Channel error: " + a + " without reconnection"), this.dispose()) : (this.ya = !0, Y8("Channel error: " + a + " with reconnection in " + this.xv() + " ms"), Z8(this, 2))
    };
    g.k.cK = function(a) {
        if (!this.u || 0 === this.u.length) return !1;
        for (var b = g.r(this.u), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.lT = function(a) {
        a.params ? Y8("Received: action=" + a.action + ", params=" + g.Nh(a.params)) : Y8("Received: action=" + a.action + " {}");
        switch (a.action) {
            case "loungeStatus":
                a = Q6(a.params.devices);
                this.u = g.wm(a, function(c) {
                    return new S6(c)
                });
                a = !!g.eb(this.u, function(c) {
                    return "LOUNGE_SCREEN" == c.type
                });
                eTa(this, a);
                a = this.cK("mlm");
                this.Z("multiStateLoopEnabled", a);
                break;
            case "loungeScreenDisconnected":
                g.pb(this.u, function(c) {
                    return "LOUNGE_SCREEN" == c.type
                });
                eTa(this, !1);
                break;
            case "remoteConnected":
                var b = new S6(Q6(a.params.device));
                g.eb(this.u, function(c) {
                    return b ? c.id == b.id : !1
                }) || VQa(this.u, b);
                break;
            case "remoteDisconnected":
                b = new S6(Q6(a.params.device));
                g.pb(this.u, function(c) {
                    return b ? c.id == b.id : !1
                });
                break;
            case "gracefulDisconnect":
                break;
            case "playlistModified":
                gTa(this, a);
                break;
            case "nowPlaying":
                iTa(this, a);
                break;
            case "onStateChange":
                hTa(this, a);
                break;
            case "onAdStateChange":
                jTa(this, a);
                break;
            case "onVolumeChanged":
                kTa(this, a);
                break;
            case "onSubtitlesTrackChanged":
                fTa(this, a);
                break;
            case "nowAutoplaying":
                lTa(this, a);
                break;
            case "autoplayDismissed":
                this.Z("autoplayDismissed");
                break;
            case "autoplayUpNext":
                this.J = a.params.videoId || null;
                this.Z("autoplayUpNext", this.J);
                break;
            case "onAutoplayModeChanged":
                this.C =
                    a.params.autoplayMode;
                this.Z("autoplayModeChange", this.C);
                "DISABLED" == this.C && this.Z("autoplayDismissed");
                break;
            case "onHasPreviousNextChanged":
                mTa(this, a);
                break;
            case "requestAssistedSignIn":
                this.Z("assistedSignInRequested", a.params.authCode);
                break;
            case "onLoopModeChanged":
                this.Z("loopModeChange", a.params.loopMode);
                break;
            default:
                Y8("Unrecognized action: " + a.action)
        }
    };
    g.k.jW = function() {
        if (this.B) {
            var a = this.B;
            this.B = null;
            this.lc.videoId != a && c9(this, "getNowPlaying")
        }
    };
    g.k.cR = function() {
        var a = 3;
        this.isDisposed() || (a = 0, isNaN(this.xv()) ? N7(this.i) && isNaN(this.D) && (a = 1) : a = 2);
        return a
    };
    g.k.Ir = function(a) {
        Y8("Disconnecting with " + a);
        g.Fa("yt.mdx.remote.remoteClient_", null, void 0);
        $8(this);
        this.Z("beforeDisconnect", a);
        1 == a && d7();
        aSa(this.i, a);
        this.dispose()
    };
    g.k.aR = function() {
        var a = this.lc;
        this.B && (a = this.lc.clone(), M8(a, this.B, a.index));
        return N8(a)
    };
    g.k.wW = function(a) {
        var b = new H8(a);
        b.videoId && b.videoId != this.lc.videoId && (this.B = b.videoId, g.jt(this.K), this.K = g.ht((0, g.E)(this.jW, this), 5E3));
        var c = [];
        this.lc.listId == b.listId && this.lc.videoId == b.videoId && this.lc.index == b.index || c.push("remoteQueueChange");
        this.lc.playerState == b.playerState && this.lc.volume == b.volume && this.lc.muted == b.muted && L8(this.lc) == L8(b) && g.Nh(this.lc.trackData) == g.Nh(b.trackData) || c.push("remotePlayerChange");
        this.lc.reset(a);
        g.Cb(c, function(d) {
            this.Z(d)
        }, this)
    };
    g.k.vJ = function() {
        var a = this.i.J.id,
            b = g.eb(this.u, function(c) {
                return "REMOTE_CONTROL" == c.type && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.xv = function() {
        var a = this.i;
        return a.u.isActive() ? a.u.u - Date.now() : NaN
    };
    g.k.XQ = function() {
        return this.C || "UNSUPPORTED"
    };
    g.k.YQ = function() {
        return this.J || ""
    };
    g.k.BP = function() {
        if (!isNaN(this.xv())) {
            var a = this.i.u;
            g.Jq(a.i);
            a.start()
        }
    };
    g.k.tW = function(a, b) {
        c9(this, a, b);
        dTa(this)
    };
    g.k.dH = function() {
        var a = g.Ct("SID", "") || "",
            b = g.Ct("SAPISID", "") || "",
            c = g.Ct("__Secure-3PAPISID", "") || "";
        if (!a && !b && !c) return "";
        a = g.he(g.Xa(a), 2);
        b = g.he(g.Xa(b), 2);
        c = g.he(g.Xa(c), 2);
        return g.he(g.Xa(a + "," + b + "," + c), 2)
    };
    X8.prototype.subscribe = X8.prototype.subscribe;
    X8.prototype.unsubscribeByKey = X8.prototype.fg;
    X8.prototype.getProxyState = X8.prototype.cR;
    X8.prototype.disconnect = X8.prototype.Ir;
    X8.prototype.getPlayerContextData = X8.prototype.aR;
    X8.prototype.setPlayerContextData = X8.prototype.wW;
    X8.prototype.getOtherConnectedRemoteId = X8.prototype.vJ;
    X8.prototype.getReconnectTimeout = X8.prototype.xv;
    X8.prototype.getAutoplayMode = X8.prototype.XQ;
    X8.prototype.getAutoplayVideoId = X8.prototype.YQ;
    X8.prototype.reconnect = X8.prototype.BP;
    X8.prototype.sendMessage = X8.prototype.tW;
    X8.prototype.getXsrfToken = X8.prototype.dH;
    X8.prototype.isCapabilitySupportedOnConnectedDevices = X8.prototype.cK;
    g.w(d9, W7);
    g.k = d9.prototype;
    g.k.Jh = function(a) {
        return this.Pe.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.Pe.$_c(a)
    };
    g.k.get = function(a) {
        return this.Pe.$_g(a)
    };
    g.k.start = function() {
        this.Pe.$_st()
    };
    g.k.add = function(a, b, c) {
        this.Pe.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.Pe.$_r(a, b, c)
    };
    g.k.CA = function(a, b, c, d) {
        this.Pe.$_un(a, b, c, d)
    };
    g.k.Aa = function() {
        for (var a = 0, b = this.i.length; a < b; ++a) this.Pe.$_ubk(this.i[a]);
        this.i.length = 0;
        this.Pe = null;
        W7.prototype.Aa.call(this)
    };
    g.k.CP = function() {
        this.Z("screenChange")
    };
    g.k.nU = function() {
        this.Z("onlineScreenChange")
    };
    f8.prototype.$_st = f8.prototype.start;
    f8.prototype.$_gspc = f8.prototype.wP;
    f8.prototype.$_gsppc = f8.prototype.ZG;
    f8.prototype.$_c = f8.prototype.contains;
    f8.prototype.$_g = f8.prototype.get;
    f8.prototype.$_a = f8.prototype.add;
    f8.prototype.$_un = f8.prototype.CA;
    f8.prototype.$_r = f8.prototype.remove;
    f8.prototype.$_gs = f8.prototype.Jh;
    f8.prototype.$_gos = f8.prototype.YG;
    f8.prototype.$_s = f8.prototype.subscribe;
    f8.prototype.$_ubk = f8.prototype.fg;
    var q9 = null,
        w9 = !1,
        e9 = null,
        f9 = null,
        v9 = null,
        j9 = [];
    g.w(x9, g.I);
    g.k = x9.prototype;
    g.k.Aa = function() {
        g.I.prototype.Aa.call(this);
        this.i.stop();
        this.B.stop();
        this.N.stop();
        this.ma();
        var a = this.Sb;
        a.unsubscribe("proxyStateChange", this.FL, this);
        a.unsubscribe("remotePlayerChange", this.hw, this);
        a.unsubscribe("remoteQueueChange", this.Gz, this);
        a.unsubscribe("previousNextChange", this.CL, this);
        a.unsubscribe("nowAutoplaying", this.wL, this);
        a.unsubscribe("autoplayDismissed", this.ZK, this);
        this.Sb = this.u = null
    };
    g.k.mj = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        if (2 != this.Sb.Ta)
            if (y9(this)) {
                if (!Q8(this.Sb).isAdPlaying() || "control_seek" !== a) switch (a) {
                    case "control_toggle_play_pause":
                        Q8(this.Sb).zc() ? this.Sb.pause() : this.Sb.play();
                        break;
                    case "control_play":
                        this.Sb.play();
                        break;
                    case "control_pause":
                        this.Sb.pause();
                        break;
                    case "control_seek":
                        this.K.XG(c[0], c[1]);
                        break;
                    case "control_subtitles_set_track":
                        z9(this, c[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(c[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    c =
                        this.I.getCurrentTime();
                    A9(this, 0 === c ? void 0 : c);
                    break;
                case "control_seek":
                    A9(this, c[0]);
                    break;
                case "control_subtitles_set_track":
                    z9(this, c[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(c[0])
            }
    };
    g.k.fT = function(a) {
        this.N.qP(a)
    };
    g.k.fX = function(a) {
        this.mj("control_subtitles_set_track", g.Wb(a) ? null : a)
    };
    g.k.SM = function() {
        var a = this.I.getOption("captions", "track");
        g.Wb(a) || z9(this, a)
    };
    g.k.Qb = function(a) {
        this.u.Qb(a, this.I.getVideoData().lengthSeconds)
    };
    g.k.VT = function() {
        g.Wb(this.C) || xTa(this, this.C);
        this.D = !1
    };
    g.k.FL = function(a, b) {
        this.B.stop();
        2 === b && this.LM()
    };
    g.k.hw = function() {
        if (y9(this)) {
            this.i.stop();
            var a = Q8(this.Sb);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.u.rf = 1;
                    break;
                case 1082:
                case 1083:
                    this.u.rf = 0;
                    break;
                default:
                    this.u.rf = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.Tb(new g.dK(8));
                    this.KM();
                    break;
                case 1085:
                case 3:
                    this.Tb(new g.dK(9));
                    break;
                case 1083:
                case 0:
                    this.Tb(new g.dK(2));
                    this.K.stop();
                    this.Qb(this.I.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.Tb(new g.dK(4));
                    break;
                case 2:
                    this.Tb(new g.dK(4));
                    this.Qb(L8(a));
                    break;
                case -1:
                    this.Tb(new g.dK(64));
                    break;
                case -1E3:
                    this.Tb(new g.dK(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "Video n\u00e0y kh\u00f4ng kh\u1ea3 d\u1ee5ng \u0111\u1ec3 ph\u00e1t l\u1ea1i t\u1eeb xa."
                    }))
            }
            a = Q8(this.Sb).trackData;
            var b = this.C;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, xTa(this, a));
            a = Q8(this.Sb); - 1 === a.volume || Math.round(this.I.getVolume()) === a.volume && this.I.isMuted() === a.muted || this.V.isActive() ||
                this.tN()
        } else wTa(this)
    };
    g.k.CL = function() {
        this.I.Z("mdxpreviousnextchange")
    };
    g.k.Gz = function() {
        y9(this) || wTa(this)
    };
    g.k.wL = function(a) {
        isNaN(a) || this.I.Z("mdxnowautoplaying", a)
    };
    g.k.ZK = function() {
        this.I.Z("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        y9(this) && this.Sb.setAudioTrack(this.I.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        -1 === Q8(this.Sb).playerState ? A9(this, a) : b && this.Sb.seekTo(a)
    };
    g.k.tN = function() {
        var a = this;
        if (y9(this)) {
            var b = Q8(this.Sb);
            this.events.pc(this.ea);
            b.muted ? this.I.mute() : this.I.unMute();
            this.I.setVolume(b.volume);
            this.ea = this.events.S(this.I, "onVolumeChange", function(c) {
                vTa(a, c)
            })
        }
    };
    g.k.KM = function() {
        this.i.stop();
        if (!this.Sb.isDisposed()) {
            var a = Q8(this.Sb);
            a.zc() && this.Tb(new g.dK(8));
            this.Qb(L8(a));
            this.i.start()
        }
    };
    g.k.LM = function() {
        this.B.stop();
        this.i.stop();
        var a = this.Sb.B.getReconnectTimeout();
        2 == this.Sb.Ta && !isNaN(a) && this.B.start()
    };
    g.k.Tb = function(a) {
        this.B.stop();
        var b = this.J;
        if (!g.iK(b, a)) {
            var c = g.U(a, 2);
            c !== g.U(this.J, 2) && this.I.Us(c);
            this.J = a;
            zTa(this.u, b, a)
        }
    };
    g.w(B9, g.V);
    B9.prototype.dd = function() {
        this.i.show()
    };
    B9.prototype.Fb = function() {
        this.i.hide()
    };
    B9.prototype.u = function() {
        g.LJ("https://support.google.com/youtube/answer/7640706")
    };
    B9.prototype.B = function() {
        R6("mdx-manual-pairing-popup-ok");
        this.Fb()
    };
    g.w(C9, g.V);
    C9.prototype.dd = function() {
        this.i.show()
    };
    C9.prototype.Fb = function() {
        this.i.hide()
    };
    C9.prototype.u = function() {
        R6("mdx-privacy-popup-cancel");
        this.Fb()
    };
    C9.prototype.B = function() {
        R6("mdx-privacy-popup-confirm");
        this.Fb()
    };
    g.w(D9, g.V);
    D9.prototype.u = function(a) {
        yTa(this, a.state)
    };
    g.w(E9, g.WP);
    E9.prototype.D = function() {
        var a = this.I.getOption("remote", "receivers");
        a && 1 < a.length && !this.I.getOption("remote", "quickCast") ? (this.oo = g.Db(a, this.i, this), g.XP(this, g.wm(a, this.i)), a = this.I.getOption("remote", "currentReceiver"), a = this.i(a), this.options[a] && this.Yh(a), this.enable(!0)) : this.enable(!1)
    };
    E9.prototype.i = function(a) {
        return a.key
    };
    E9.prototype.cj = function(a) {
        return "cast-selector-receiver" === a ? "Truy\u1ec1n..." : this.oo[a].name
    };
    E9.prototype.Af = function(a) {
        g.WP.prototype.Af.call(this, a);
        this.I.setOption("remote", "currentReceiver", this.oo[a]);
        this.Cb.Fb()
    };
    g.w(F9, g.gN);
    g.k = F9.prototype;
    g.k.create = function() {
        var a = this.player.U(),
            b = g.nF(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.experiments.oa("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.experiments.oa("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.experiments.oa("enable_cast_short_lived_lounge_token")
        };
        qTa(b, a);
        this.subscriptions.push(g.Wu("yt-remote-before-disconnect", this.eT, this));
        this.subscriptions.push(g.Wu("yt-remote-connection-change", this.OU, this));
        this.subscriptions.push(g.Wu("yt-remote-receiver-availability-change",
            this.EL, this));
        this.subscriptions.push(g.Wu("yt-remote-auto-connect", this.MU, this));
        this.subscriptions.push(g.Wu("yt-remote-receiver-resumed", this.LU, this));
        this.subscriptions.push(g.Wu("mdx-privacy-popup-confirm", this.ZV, this));
        this.subscriptions.push(g.Wu("mdx-privacy-popup-cancel", this.YV, this));
        this.subscriptions.push(g.Wu("mdx-manual-pairing-popup-ok", this.fS, this));
        this.EL()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.gN.prototype.load.call(this);
        this.ci = new x9(this, this.player, this.Sb);
        var a = (a = uTa()) ? a.currentTime : 0;
        var b = u9() ? new P8(o9(), void 0) : null;
        0 == a && b && (a = L8(Q8(b)));
        0 !== a && this.Qb(a);
        zTa(this, this.rd, this.rd);
        this.player.Tk(6)
    };
    g.k.unload = function() {
        this.player.Z("mdxautoplaycanceled");
        this.Xm = this.tj;
        g.pf(this.ci, this.Sb);
        this.Sb = this.ci = null;
        g.gN.prototype.unload.call(this);
        this.player.Tk(5);
        G9(this)
    };
    g.k.Aa = function() {
        g.Xu(this.subscriptions);
        g.gN.prototype.Aa.call(this)
    };
    g.k.Lk = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        this.loaded && this.ci.mj.apply(this.ci, [a].concat(g.v(c)))
    };
    g.k.getAdState = function() {
        return this.rf
    };
    g.k.Dk = function() {
        return this.Sb ? Q8(this.Sb).Dk : !1
    };
    g.k.hasNext = function() {
        return this.Sb ? Q8(this.Sb).hasNext : !1
    };
    g.k.Qb = function(a, b) {
        this.rK = a || 0;
        this.player.Z("progresssync", a, b);
        this.player.Na("onVideoProgress", a)
    };
    g.k.getCurrentTime = function() {
        return this.rK
    };
    g.k.getProgressState = function() {
        var a = Q8(this.Sb),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: this.player.U().experiments.oa("web_player_mdx_allow_seeking_change_killswitch") ? this.player.nf() : !a.isAdPlaying() && this.player.nf(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.u ? a.B + J8(a) : a.B,
            isAtLiveHead: 1 >= (a.u ? a.i + J8(a) : a.i) - this.getCurrentTime(),
            loaded: a.N,
            seekableEnd: a.u ? a.i + J8(a) : a.i,
            seekableStart: 0 < a.C ? a.C + J8(a) : a.C
        }
    };
    g.k.nextVideo = function() {
        this.Sb && this.Sb.nextVideo()
    };
    g.k.Qz = function() {
        this.Sb && this.Sb.Qz()
    };
    g.k.eT = function(a) {
        1 === a && (this.JE = this.Sb ? Q8(this.Sb) : null)
    };
    g.k.OU = function() {
        var a = u9() ? new P8(o9(), void 0) : null;
        if (a) {
            var b = this.Xm;
            this.loaded && this.unload();
            this.Sb = a;
            this.JE = null;
            b.key !== this.tj.key && (this.Xm = b, this.load())
        } else g.of(this.Sb), this.Sb = null, this.loaded && (this.unload(), (a = this.JE) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, L8(a)));
        this.player.Z("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.EL = function() {
        var a = [this.tj],
            b = a.concat,
            c = rTa();
        D8() && g.Nz("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.oo = b.call(a, c);
        a = p9() || this.tj;
        H9(this, a);
        this.player.Na("onMdxReceiversChange")
    };
    g.k.MU = function() {
        var a = p9();
        H9(this, a)
    };
    g.k.LU = function() {
        this.Xm = p9()
    };
    g.k.ZV = function() {
        this.ow = !0;
        G9(this);
        w9 = !1;
        q9 && s9(q9, 1);
        q9 = null
    };
    g.k.YV = function() {
        this.ow = !1;
        G9(this);
        H9(this, this.tj);
        this.Xm = this.tj;
        w9 = !1;
        q9 = null;
        this.player.playVideo()
    };
    g.k.fS = function() {
        this.fz = !0;
        G9(this);
        g.Mz("yt-remote-manual-pairing-warning-shown", !0, 2592E3);
        w9 = !1;
        q9 && s9(q9, 1);
        q9 = null
    };
    g.k.gf = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.oo;
            case "currentReceiver":
                return b && ("cast-selector-receiver" === b.key ? F8() : H9(this, b)), this.loaded ? this.Xm : this.tj;
            case "quickCast":
                return 2 === this.oo.length && "cast-selector-receiver" === this.oo[1].key ? (b && F8(), !0) : !1
        }
    };
    g.k.BF = function() {
        this.Sb.BF()
    };
    g.k.Li = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.rN.remote = F9;
})(_yt_player);