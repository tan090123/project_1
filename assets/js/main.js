$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        center: true,
        loop: true,
        margin: 20,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true
    });
});