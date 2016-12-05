/*
Omega Admin Template
All rights reserverd © 2016
Creativico
*/

"use strict";

jQuery(document).ready(function($){


  $('.show-message').on('click', function(e){
	e.preventDefault();
	
	var hor = $(this).data('msg-hor');
	var ver = $(this).data('msg-ver');
	var type = $(this).data('msg-type');

	// Messenger
	Messenger.options = {
	  extraClasses: 'messenger-fixed messenger-on-' + ver + ' messenger-on-' + hor + '',
	  theme: 'flat'
	};

	Messenger().post({
	  message: 'Welcome to Omega Admin Template.',
	  type: type,
	  showCloseButton: true,
	  hideAfter:2
	});
  });

});