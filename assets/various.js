jQuery(document).ready(function($){
  
  /* Main Menu - Child */
  $('ul.sidebar-main-nav>li:has(>ul.sidebar-nav)').on('click', function(){
	
	var menu_item = $(this);
	var ul = $('ul.sidebar-nav', menu_item);
	
	if ($(ul).is(':visible')) {
	  // Change icon
	  $('span.toggle-button i', menu_item).removeClass('fa-minus').addClass('fa-plus');
	  //
	  $(ul).slideUp(500, 'swing');
	} else {
	  // Change icon
	  $('span.toggle-button i', menu_item).removeClass('fa-plus').addClass('fa-minus');
	  // 
	  $(ul).slideDown(500, 'swing');
	}
	
  });
  
});