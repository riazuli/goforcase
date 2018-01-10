(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(".hero-carousel").owlCarousel({
            items:1,
            loop:true,
            nav:true,
            dots:false,
            navText: ["<i class='fa fa-long-arrow-left'>","<i class='fa fa-long-arrow-right'>"],
            autoplay:true,
        });

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	