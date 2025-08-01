(function($) { "use strict"; 
	// Nav Menu Hover Script
	$('ul.nav li.dropdown').on('hover', function() {
	  $(this).find('.dropdown-menu').stop(true, true).fadeIn(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).fadeOut(500);
	});


	// hamburger menu icons
	$('.navbar-toggler').on('click', function(){
	   $(this).toggleClass('active');
	});
})(jQuery);