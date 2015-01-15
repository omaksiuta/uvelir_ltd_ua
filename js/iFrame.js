/**
 * Created by nastya on 11.01.15.
 */
$(function () {
    var iFrames = $('iframe');

    function iResize() {
        for (var i = 0, j = iFrames.length; i < j; i++) {
            iFrames[i].style.height = iFrames[i].contentWindow.document.body.offsetHeight + 20 + 'px';
        }
    }

    var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
    var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
    var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
    var is_safari = navigator.userAgent.indexOf("Safari") > -1;
    var is_Opera = navigator.userAgent.indexOf("Presto") > -1;

    if (is_safari || is_Opera) {

        iFrames.load(function () {
            setTimeout(iResize, 0);
        });

        for (var i = 0, j = iFrames.length; i < j; i++) {
            var iSource = iFrames[i].src;
            iFrames[i].src = '';
            iFrames[i].src = iSource;
        }

    } else {
        iFrames.load(function () {
            this.style.height = this.contentWindow.document.body.offsetHeight + 20 + 'px';
        });
    }

});