/*

Copyright (c) 2019 Jacob Shore

*/



$(document).ready(function(){
    const menus = $( '#menus' );
    const cm = $( '#collapse-menu' );
    const header = $('header');

    // On laptops and desktops, make nav fixed on scrolling
    if ($(window).width() > 1000) {
        $(window).scroll(function(){
            if(window.scrollY > 50) {
                header.addClass('fixed-top');
                $('#header-contact-area').hide();
                $('#logo-area').addClass('logo-scrolled', 1000);
            } else {
                header.removeClass('fixed-top');
                $('#header-contact-area').show();
                $('#logo-area').removeClass('logo-scrolled', 1000);
            }
        });
    }

    // Nav handling for mobile

    if ($(window).width() < 1200) { 
        cm.click(function(){
            menus.toggle("slow", "linear"); // toggle the nav when clicking the collapse menu button
        });
        
        $( 'a' ).click(function(){
            menus.hide(); // when a link is clicked hide the nav
        });
    }

    // owl carousel params
    // see docs here: https://owlcarousel2.github.io/OwlCarousel2/index.html

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
 
    // this offsets the link for fixed nav-bar

    $('.link').click(function(e){
        let target = e.target.hash;
        let divCoords = $(target).offset();
        e.preventDefault();
        window.scrollTo(divCoords.left, divCoords.top - 60);
    });
