/*
Omega Admin Template
All rights reserverd © 2016
Creativico
*/

"use strict";

jQuery(document).ready(function($){

  // Sparkline
  // $('#dashboard-revenue').sparkline('html', {type: 'bar', barColor: 'red'} );

  // Morris Chart
  if ($('#hero-area').length) {
	var revenue_chart = Morris.Area({
	  element: 'hero-area',
	  data: [
		{period: '2015 Q1', iphone: 2666, ipad: null, itouch: 2647},
		{period: '2015 Q2', iphone: 2778, ipad: 2294, itouch: 2441},
		{period: '2015 Q3', iphone: 4912, ipad: 1969, itouch: 2501},
		{period: '2015 Q4', iphone: 3767, ipad: 3597, itouch: 5689},
		{period: '2016 Q1', iphone: 6810, ipad: 1914, itouch: 2293},
		{period: '2016 Q2', iphone: 5670, ipad: 4293, itouch: 1881},
		{period: '2016 Q3', iphone: 3670, ipad: 2593, itouch: 1381},
		{period: '2016 Q4', iphone: 7670, ipad: 2293, itouch: 2081},
	  ],
	  resize: true,
	  xkey: 'period',
	  ykeys: ['iphone', 'ipad', 'itouch'],
	  labels: ['iPhone', 'iPad', 'iPod Touch'],
	  pointSize: 2,
	  hideHover: 'auto',
	  lineColors: ['#07a8d7', '#32323a', '#FA7252'],
	  pointStrokeColors: ['#e7e7e7']
	});
  }

  // Bar Chart
  if ($('#bar-chart').length) {
	Morris.Bar({
	  element: 'bar-chart',
	  data: [
		{x: '2016 Q1', y: 3, z: 2, a: 3},
		{x: '2016 Q2', y: 2, z: 1, a: 1},
		{x: '2016 Q3', y: 1, z: 2, a: 4},
		{x: '2016 Q4', y: 2, z: 4, a: 3}
	  ],
	  resize: true,
	  xkey: 'x',
	  ykeys: ['y', 'z', 'a'],
	  labels: ['Signups', 'Visits', 'Unsubscriptions'],
	  barColors: function (row, series, type) {

		if (series.index == 0) {
		  return '#FA7252';
		} else if (series.index == 1) {
		  return '#24b2e5';
		} else {
		  return '#273135';
		}

	  }
	}).on('click', function(i, row){
	  console.log(i, row);
	});
  }


});