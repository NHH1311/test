var _i_ = this._i_ || function() {},
    _r_ = this._r_ || function(i) {
        return i
    };
$(function() {
    function i() {
        _i_("c30:6f5532a8");
        ! function(i, n) {
            _i_("c30:96cfbe1d");
            var _ = JSON.stringify({
                message: i,
                data: n
            });
            window.parent.postMessage(_, "*"), _r_()
        }("resize", {
            height: $(document.body).height(),
            width: null,
            aid: booking.env.b_aid,
            fid: booking.env.b_fid
        }), _r_()
    }
    _i_("c30:b439dbad"), $(window).on("resize", i), i(), _r_()
});