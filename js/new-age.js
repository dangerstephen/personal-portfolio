var stickyNavOffset = $('.about').offset().top;

$(window).on('scroll', function () {
	var distanceScrolled = $(window).scrollTop();

	// Code to stick nav to top
	if (distanceScrolled > stickyNavOffset) {
        $('nav').removeClass('navbar-hidden');

	} else {
        $('nav').addClass('navbar-hidden');
	}
});

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 680
        }
    })

})(jQuery); // End of use strict
