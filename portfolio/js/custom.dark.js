//stciky menu
  $(document).ready(function(){
    $("#zaf_sticker").sticky({topSpacing:0});
  });
$(document).ready(function(){
	$(".colors li").click(function(){
		$(".colors li.active").removeClass("active");
		$(this).addClass("active")
	})
});

//owl-carousel
$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
	autoPlay: 3000, //Set AutoPlay to 3 seconds
	pagination:true,
	items : 4,
	itemsDesktop : [1199,3],
	itemsDesktopSmall : [979,3],
	itemsTablet: 	[768,2],
	

  });
$("#owl-demo_testimonial").owlCarousel({ 
	autoPlay: 3000, //Set AutoPlay to 3 seconds
	pagination:true,
	singleItem:true

	

  });  
  
 
});
//barfiller 
$('#bar1').barfiller({
	barColor: '#000',		 
	tooltip: true,		  
	duration: 3000,		  
	animateOnResize: true,		 
	symbol: "%"		  
});
$('#bar2').barfiller({
	barColor: '#000',		 
	tooltip: true,		  
	duration: 3000,		  
	animateOnResize: true,		 
	symbol: "%"		  
});
$('#bar3').barfiller({
	barColor: '#000',		 
	tooltip: true,		  
	duration: 3000,		  
	animateOnResize: true,		 
	symbol: "%"		  
});
$('#bar4').barfiller({
	barColor: '#000',		 
	tooltip: true,		  
	duration: 3000,		  
	animateOnResize: true,		 
	symbol: "%"		  
});


$(document).ready(function(){
	$('.navbar a').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	&& location.hostname == this.hostname) {
	  var $target = $(this.hash);
	  $target = $target.length && $target
	  || $('[name=' + this.hash.slice(1) +']');
	  if ($target.length) {
		var targetOffset = $target.offset().top;
		$('html,body')
		.animate({scrollTop: targetOffset}, 1000);
	   return false;
	  }
	}
	});
});


//imagesLoaded
$('#container').imagesLoaded( function() {
	
	// filter items on button click
	$('.portfolio_menu').on( 'click', 'a', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});
	
	  // init Isotope	  
	var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: 1
	  }
	})
	
});

//FANCYBOX
$(document).ready(function(){
    
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});
   
   
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
$(window).scroll(function() {
    if ($(this).scrollTop() > 800 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$("#section_1, #section_one").offset().top},"1000");return false})})