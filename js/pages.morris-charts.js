/*
Omega Admin Template
All rights reserverd © 2016
Creativico
*/

"use strict";

jQuery(document).ready(function($){

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

  // Line Chart
  if ($('#line-graph').length) {
	Morris.Line({
	  // ID of the element in which to draw the chart.
	  element: 'line-graph',
	  // Chart data records -- each entry in this array corresponds to a point on
	  // the chart.
	  data: [
		{ year: '2012', value: 200 },
		{ year: '2013', value: 150 },
		{ year: '2014', value: 85 },
		{ year: '2015', value: 57 },
		{ year: '2016', value: 210 }
	  ],
	  // The name of the data record attribute that contains x-values.
	  xkey: 'year',
	  // A list of names of data record attributes that contain y-values.
	  ykeys: ['value'],
	  // Labels for the ykeys -- will be displayed when you hover over the
	  // chart.
	  labels: ['Value'],
	  lineColors: function (row, series, type) {
		return '#FA7252';
	  }
	});
  }

  // Donut Chart
  if ($('#donut-graph').length) {
	Morris.Donut({
	  element: 'donut-graph',
	  data: [
		{label: "Download Sales", value: 12},
		{label: "In-Store Sales", value: 30},
		{label: "Mail-Order Sales", value: 20}
	  ],
	  colors:['#FA7252', '#24b2e5', '#273135']
	});

  }


});