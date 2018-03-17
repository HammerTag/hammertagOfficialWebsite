(function($) { "use strict";

	$(window).load(function() {
	  $("#remove-class").removeClass("preload");
	});

	
	//Preloader

            Royal_Preloader.config({
                mode           : 'number',
                showProgress   : true,
                showPercentage : false,
                text_colour    : '#777777',
                background     : '#FFFFFF'
            });	


	// /* Scroll animations */
	
    //   window.scrollReveal = new scrollReveal();
	  
	// //Home text fade on scroll	
	
	// $(window).scroll(function () { 
    //     var $Fade = $('.fade-elements');
    //     //Get scroll position of window 
    //     var windowScroll = $(this).scrollTop();
    //     //Slow scroll and fade it out 
    //     $Fade.css({
    //         'margin-top': -(windowScroll / 0) + "px",
    //         'opacity': 1 - (windowScroll / 200)
    //     });
    // });	

	
	/* animated icons */
	
	var options = {
	  duration: 200, 
	  type: 'oneByOne',
	  animTimingFunction: Vivus.EASE
	};

	var vivus = new Vivus('svg-icon-1',	options, onComplete);
				new Vivus('svg-icon-2',	options, onComplete);
				new Vivus('svg-icon-3',	options, onComplete);
				new Vivus('svg-icon-4',	options, onComplete);

	function onComplete() {}

	
	/* Scroll Too */
	
			$(window).load(function(){"use strict";
				
				/* Page Scroll to id fn call */
				$("ul.slimmenu li a,a[href='#top'],a[data-gal='m_PageScroll2id']").mPageScroll2id({
					highlightSelector:"ul.slimmenu li a",
					offset: 78,
					scrollSpeed:800,
					scrollEasing: "easeInOutCubic"
				});
				
				/* demo functions */
				$("a[rel='next']").click(function(e){
					e.preventDefault();
					var to=$(this).parent().parent("section").next().attr("id");
					$.mPageScroll2id("scrollTo",to);
				});

				//Facts Counter 

				$('.counter-numb').counterUp({
					delay: 100,
					time: 2000
				});

				
			});	



	
	$(document).ready(function() {

			
		//Navigation	

		"use strict";
	
		/* Separate Carousels */
	 
		$("#owl-sep-1").owlCarousel({
			navigation: false,
			pagination : true,
			transitionStyle : "fade",
			slideSpeed : 500,
			paginationSpeed : 500,
			singleItem:true,
			autoPlay: 5000
		});
	
		//Parallax
		
		$('.parallax-title-top').parallax("50%", 0.3); 

		
	});	


	
  })(jQuery); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





	