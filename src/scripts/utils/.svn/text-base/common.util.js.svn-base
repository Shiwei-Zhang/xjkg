var $ = require('../utils/jquery-3.1.1.min.js');
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            var clientHeight = docEl.clientHeight;
            if (!clientWidth) return;
            if (clientWidth >= 768) {
                //                  docEl.style.fontSize = '100px';
                docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
                $('#box').removeClass('boxScroll');

            }
            if (clientWidth < 768) {
                docEl.style.fontSize = 100 * (768 / 1920) + 'px';
                //                alert(768)

            }
            if (!clientHeight) return;
            if (clientHeight <= (0.48 * clientWidth)) {
                $('.box').addClass('boxSrollY');
            }
            if (clientHeight > (0.48 * clientWidth)) {
                $('.box').removeClass('boxSrollY');
            }

        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
var common = {
    renderBody: function($el, str) {
        $el.prepend(str);
    },
    inner: function($el, str) {
        $el.html(str);
    },
    append: function($el, str) {
        $el.append(str);
    },

// baseUrl:'../'
    //switchPage: function (index) {
    //  $('#footer li').eq(index).addClass('active').siblings().removeClass('active');
    //  $('#footer').on('tap', 'li', function () {
    //    location.href = $(this).attr('data-url');
    //  })
    //}
};

module.exports = common;
