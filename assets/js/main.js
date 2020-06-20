!(function($) {
    "use strict";
    // Intro background carousel
    $("#intro-carousel").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        animateOut: 'fadeOut',
        items: 1
    });

    // Initiate the wowjs animation library
    new WOW().init();

})(jQuery);