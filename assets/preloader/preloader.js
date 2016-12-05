/*
jQuery Preloader
Made by: Premium WP Suite
*/

(function ( $ ) {

  $.fn.omegaPreloader = function(options) {
  	// It's not loaded
  	var loaded = false;

	var settings = $.extend({
	  color: '#2b9de3',
	  backgroundColor: '#fff',
	  textColor: '#2b9de3',
	  text: 'Heroku App is Loading...'
	  }, options );
	  
	var preloader_template = '<div class="preloader"><div class="preloader-bar"><div class="inner-bar"></div></div><h1>' + settings.text + '</h1></div>';
	var item = $(this);
	
	// Prepend preloader HTML
  	$(item).prepend(preloader_template);
  	
  	// On window load setup var loaded
  	$(window).load(function(){
	  loaded = true;
  	});
  	
  	// Check every 500ms if data is loaded
  	var check = setInterval(function() {
	  if (loaded) {
	  	
		$('.preloader .inner-bar', item).animate({width:'100%'}, 800, function(){
		  $('.preloader', item).fadeOut(300);
		});
		clearInterval(check);
	  }
	  
  	}, 500);

  };

  }( jQuery ));