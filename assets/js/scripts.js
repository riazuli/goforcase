(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(".hero-carousel").owlCarousel({
            items:1,
            loop:true,
            nav:true,
            dots:true,
            navText: ["<i class='fa fa-angle-left'>","<i class='fa fa-angle-right'>"],
            autoplay:true,
        });

         //Hamburger Menu
        $(".menu-triger").on("click", function() {
            $(".offcanvas-menu , .offcanvas-overlay").addClass("active");
            return false;
        });

        $(".menu-close , .offcanvas-overlay").on("click", function() {
            $(".offcanvas-menu ,.offcanvas-overlay").removeClass("active");
        });

        $(window).scroll(function(){
            if($(this).scrollTop()>100){
                $(".header").addClass("sticky");
            }
            else{
                $(".header").removeClass("sticky");
            }
        });


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	