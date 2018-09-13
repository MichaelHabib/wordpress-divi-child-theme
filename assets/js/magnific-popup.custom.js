var $ = jQuery.noConflict();
$(document).ready(function () {
//    $('.popup-iframe .popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    $('a.popup-iframe, .popup-iframe a, a.popup-youtube, a.popup-vimeo, a.popup-gmaps').magnificPopup({
//        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
//        fixedContentPos: false
        fixedContentPos: 'top'
    });
    $(document).on('click', '.mfp-close', function (e) {
//        e.preventDefault();
        $.magnificPopup.close();
    });
});

$(function () {
    $('.popup-inline, .popup-inline a').magnificPopup({
        type: 'inline',
        removalDelay: 160,
        fixedContentPos: true,
        overflowY: 'scroll',
        showCloseBtn: true,
//        closeBtnInside: true,
//        closeOnBgClick: true,
//        enableEscapeKey: true,
        alignTop: true,
        preloader: true

    });
});

/*
 * ********************************************
 * unused code
 */

$(function () {
    $('.popup-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});