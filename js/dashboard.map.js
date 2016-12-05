/*
Omega Admin Template
All rights reserverd © 2016
Creativico
*/

"use strict";

jQuery(document).ready(function($){

  // Dashboard map
  var map;
  function initialize() {

	var mapOptions = {
	  zoom: 12,
	  center: new google.maps.LatLng(40.725668, -73.996928)
	};

	if (document.getElementById('dashboard-map')) {
	  map = new google.maps.Map(document.getElementById('dashboard-map'), mapOptions);
	  
	  var marker = new google.maps.Marker({
		position: {lat:40.725668,lng:-73.996928},
		map: map,
		animation: google.maps.Animation.DROP,
		title: 'Welcome to Omega Office!'
	  });	 
	   
	  var marker = new google.maps.Marker({
		position: {lat:40.7346527,lng:-74.0081629},
		map: map,
		animation: google.maps.Animation.DROP,
		title: 'West Village'
	  });	
	     
	  var marker = new google.maps.Marker({
		position: {lat:40.7179343,lng:-74.1023842},
		map: map,
		animation: google.maps.Animation.DROP,
		title: 'Jersey City'
	  });	 
	      
	  var marker = new google.maps.Marker({
		position: {lat:40.7305611,lng:-74.0380225},
		map: map,
		animation: google.maps.Animation.DROP,
		title: 'Newport'
	  });	
	        
	  var marker = new google.maps.Marker({
		position: {lat:40.713739,lng:-73.961806},
		map: map,
		animation: google.maps.Animation.DROP,
		title: 'Middle Village'
	  });

	}
  }

  google.maps.event.addDomListener(window, 'load', initialize);


});