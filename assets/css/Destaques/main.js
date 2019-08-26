 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

jQuery(document).ready(function($) {

	"use strict";

		if ( $('.owl-DestSlides').length > 0 ) {
			$('.owl-DestSlides').CarouselDestaque({
				center: false,
				items: 1,
				loop: true,
				stagePadding: 10,
				margin: 30,
				autoplay: true,
				smartSpeed: 500,
				nav: true,
				dots: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				responsive:{
					600:{
						items: 2
					},
					1000:{
						items: 2
					},
					1200:{
						items: 3
					}
				}
			});
		}



});