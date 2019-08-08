/*

Copyright (c) 2019 Jacob Shore

*/

$(document).ready(function(){
    const menus = $( '#menus' );
    const cm = $( '#collapse-menu' );

    if ($(window).width() < 1200) {
        cm.click(function(){
            menus.toggle("slow", "linear");
        });
        
        $( 'a' ).click(function(){
            menus.hide();
        });
    }

    $(".owl-carousel").owlCarousel({
        loop: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 2000,
        // autoplayHoverPause: true,
        margin: 10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            900:{
                items:3,
                nav: true,
                loop:true
            }
        },
        navigation: true,
        navText: [
            "◀️",
            "▶️"
        ],
    });

  });