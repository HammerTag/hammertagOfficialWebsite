(function($) { "use strict";

	/* Scroll animations */
	
    window.scrollReveal = new scrollReveal();
	  
	//Home text fade on scroll	
	
	$(window).scroll(function () { 
        var $Fade = $('.fade-elements');
        //Get scroll position of window 
        var windowScroll = $(this).scrollTop();
        //Slow scroll and fade it out 
        $Fade.css({
            'margin-top': -(windowScroll / 0) + "px",
            'opacity': 1 - (windowScroll / 600)
        });
    });	

    $(document).ready(function() {

        /* Logos Carousel */		
        $("#owl-logos").owlCarousel({
            items : 5,
            itemsDesktop : [1000,4], 
            itemsDesktopSmall : [900,3],
            itemsTablet: [600,2], 
            itemsMobile : false, 
            navigation: false,
            pagination : false,
            autoPlay : 3000,
            slideSpeed : 300
        });
    })

})(jQuery); 