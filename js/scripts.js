/*
Omega Admin Template
All rights reserverd © 2016
Creativico
*/

"use strict";

jQuery(document).ready(function($){

  // Preloader call
  $('body[data-preload="true"]').omegaPreloader();

  // Messenger
  Messenger.options = {
	extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
	theme: 'flat'
  }

  // Logout
  $('.btn-logout').on('click', function(e){

	e.preventDefault();

	vex.dialog.confirm({
	  message: 'Are you sure you wish to logout?',
	  callback: function (value) {
		if (value) {
		  console.log('Successfully destroyed the planet.')
		} else {
		  console.log('Chicken.')
		}
	  }
	})
  });

  // Show message
  setTimeout(function(){
	Messenger().post({
	  message: 'Welcome to Omega Admin Template.',
	  type: 'success',
	  showCloseButton: true,
	  hideAfter:2
	});
	}, 800);

  setTimeout(function(){
	Messenger().post({
	  message: 'You have successfully logged in.',
	  type: 'success',
	  showCloseButton: true,
	  hideAfter:2
	});
	}, 1700);

  setTimeout(function(){
	Messenger().post({
	  message: 'We have updated your dashboard.',
	  type: 'info',
	  showCloseButton: true,
	  hideAfter:5
	});
	}, 2300);


  // SlimScroll
  $('.slimscroll').each(function(i, item) {
	var height = $(item).data('scroll-height');

	var opts = '';
	opts = {height: height + 'px'};

	if (height == '100%') {
	  height = $(window).height();
	  height = height-80;
	  opts = {height: height + 'px', railVisible:true, alwaysVisible:true, color:'#fff'}
	}

	$(item).slimScroll(opts);
  });


  // Datepicker & Calendar
  $(".inline-calendar").datepicker({
	numberOfMonths: 2
  });


  // CountUp
  $('.count-up').each(function(i, item) {
	var end_value = $(item).data('end-value');
	count = new CountUp($(item).attr('id'), 0, end_value);
	count.start();
  });


  // NiceScroll
  $(".sidebar-container").niceScroll({cursorcolor:"#FA7252"});


  // Sidebar Collapse
  $('.sidebar-collapse').on('click', function(e){
	e.preventDefault();

	$('body').toggleClass('sidebar-collapse');

  });


  // Accordions
  if ($('.collapsible-accordion').length) {
	$('.collapsible-accordion').accordion({collapsible: true});
  }

  // Omega Tabs
  $('.omega-load-tab').on('click', function(e){
	e.preventDefault();

	var tab_id = $(this).data('tab-id');
	var parent = $(this).parent(); 
	var ul = $(parent).parent();

	$('li.active', ul).removeClass('active');
	$(parent).addClass('active');

	$('.omega-tab-container>div').hide();
	$('div[id="omega-tab-' + tab_id + '"]').fadeIn(500);
  });


});

jQuery(window).resize(function(){

  // SlimScroll
  $('.slimscroll').each(function(i, item) {
	var height = $(item).data('scroll-height');

	var opts = '';
	opts = {height: height + 'px'};

	if (height == '100%') {
	  height = $(window).height();
	  height = height-80;
	  opts = {height: height + 'px', railVisible:true, alwaysVisible:true, color:'#fff'}
	}

	$(item).slimScroll(opts);
  });

});