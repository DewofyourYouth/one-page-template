/*

Copyright (c) 2019 Jacob Shore

*/



$(document).ready(function(){
    const menus = $( '#menus' );
    const cm = $( '#collapse-menu' );
    const contact =  $( '#header-contact-area' );
    const logo = $( '#logo-area' );
    const win = $( window );
    const header = $( 'header' );
    const winWidth = win.width();

    // On laptops and desktops, make nav fixed on scrolling
    if (winWidth > 1000) {
        win.scroll(function(){
            if(window.scrollY > 50) {
                header.addClass('fixed-top');
                contact.hide();
                logo.addClass('logo-scrolled', 1000);
            } else {
                header.removeClass('fixed-top');
                contact.show();
                logo.removeClass('logo-scrolled', 1000);
            }
        });
    }

    // Nav handling for mobile

    if (winWidth < 1200) { 
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
 
    // this offsets the link for fixed nav-bar header

    $('.link').click(function(e){
        let divCoords = $(e.target.hash).offset();
        let height = $('header').height();
        e.preventDefault();
        window.scrollTo({
            left: divCoords.left, 
            top: divCoords.top - height,
            behavior: 'smooth'
        });
    });

    // smooth scrolling to top when click on logo

    $('#logo-area').click(function(e){
        e.preventDefault();
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth'
        });
    });
