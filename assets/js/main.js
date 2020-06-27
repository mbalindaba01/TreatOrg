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


})(jQuery);
//Wait for window load
$(window).on("load", function() {
    // Animate loader off screen
    $(".se-pre-con").hide();;
});