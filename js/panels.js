/*
Omega Admin Template
All rights reserverd © 2016
Creativico
*/

"use strict";

jQuery(document).ready(function($){

  // Minimize panel
  $('.panel-minimize').on('click', function(e) {
	e.preventDefault();
	
	var link = $(this);
	var icon = $('i', link);
	var panel = $(this).parents('.panel');
	var panel_body = $('.panel-body', panel);
	
	if ($(panel_body).is(':visible')) {
	  $(icon).removeClass('fa-minus').addClass('fa-plus');
	  $(panel_body).slideUp();
	} else {
	  $(icon).removeClass('fa-plus').addClass('fa-minus');
	  $(panel_body).slideDown();
	}
	
  });
  
  // Remove panel
  $('.panel-remove').on('click', function(e) {
	e.preventDefault();
	
	var panel = $(this).parents('.panel');
	
	$(panel).slideUp(500, function(){
	  $(panel).remove();
	});
	
  });

});