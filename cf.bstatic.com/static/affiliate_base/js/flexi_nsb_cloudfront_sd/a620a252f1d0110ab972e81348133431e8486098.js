var _i_ = this._i_ || function() {},
    _r_ = this._r_ || function(e) {
        return e
    };
$(function() {
    "use strict";
    _i_("977:abe7badb"), bcal.init({
        labels: B.env.calLabels,
        renderHeading: !1,
        renderCloseBtn: !1,
        onCalOpen: function(e, t) {
            _i_("977:141c8499");
            var n = $(".l--container");
            t.position({ of: n,
                my: "center center",
                at: "center center"
            }), _r_()
        },
        onDateChange: function(e, t) {
            var n, a;
            _i_("977:36ae3af3"), e.getTime && !isNaN(e.getTime()) && t.getTime && !isNaN(t.getTime()) && (n = e.getDate() + " " + B.env.calLabels.months_text_dates[e.getMonth()], $("#checkin_target_label").text(n), a = t.getDate() + " " + B.env.calLabels.months_text_dates[t.getMonth()], $("#checkout_target_label").text(a)), _r_()
        },
        calElements: {
            frm: "b_frm",
            checkinMonthDD: "b_checkin_month",
            checkinDayDD: "b_checkin_day",
            checkoutMonthDD: "b_checkout_month",
            checkoutDayDD: "b_checkout_day",
            checkinTarget: "checkin_target",
            checkoutTarget: "checkout_target"
        },
        cssClass: B.env.vHeight < 220 || B.env.vWidth < 220 ? "cal--small" : "cal--medium"
    }), _r_()
}), $(function() {
    _i_("977:c6753107"), $("body").addClass("b--layout-" + B.env.vName), $("#b_destination").attr("data-menu-height", .5 * B.env.vHeight), $("#b_destination").attr("data-menu-width", .9 * B.env.vWidth), _r_()
}), $(function() {
    _i_("977:8bac9dd3");
    var _ = $("#b_checkin_day"),
        c = $("#b_checkin_month"),
        i = $("#b_checkout_day"),
        o = $("#b_checkout_month"),
        e = new Date("2017-01-10"),
        t = new Date("2017-01-11"),
        l = function() {
            _i_("977:88b06722");
            var e = new Date;
            return e.setHours(0, 0, 0, 0), _r_(e)
        }();

    function r(e, t) {
        _i_("977:b2bb14eb"), _.val(e.getDate()), c.val(e.getFullYear() + "-" + (e.getMonth() + 1)), i.val(t.getDate()), o.val(t.getFullYear() + "-" + (t.getMonth() + 1)), _r_()
    }
    e.setTime(l.getTime()), t.setTime(e.getTime() + 864e5), r(e, t), $("#b_checkin_day, #b_checkin_month, #b_checkout_day, #b_checkout_month").on("change", function() {
        _i_("977:bd0add91");
        var e = c.val().split("-"),
            t = o.val().split("-"),
            n = new Date(e[0], e[1] - 1, _.val(), 12, 0, 0, 0),
            a = new Date(t[0], t[1] - 1, i.val(), 12, 0, 0, 0);
        n < l && n.setTime(l.getTime()), a <= n && a.setTime(n.getTime() + 864e5), r(n, a), _r_()
    }), _r_()
}), $(function() {
    _i_("977:1883db34");
    var e, t = $(".l--container"),
        n = t.prop("scrollHeight"),
        a = t.prop("scrollWidth");
    n > B.env.vHeight || a > B.env.vWidth ? (e = {
        isScroll: !0,
        w: a + 10,
        h: n + 10
    }, window.parent.postMessage(JSON.stringify(e), "*")) : (t.removeClass("l--blockelem").addClass("l--flexelem"), $("#js--spacerBlock").addClass("l--flex1")), _r_()
});