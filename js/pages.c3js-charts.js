/*
Omega Admin Template
All rights reserverd © 2016
Creativico
*/

"use strict";

jQuery(document).ready(function($){

  // Line Chart
  if ($('#line-chart').length) {
	var chart = c3.generate({
	  bindto: '#line-chart',
	  data: {
		columns: [
		  ['data1', 30, 200, 100, 400, 150, 250],
		  ['data2', 50, 20, 10, 40, 15, 25]
		]
	  }
	});
  }

  // Spline Chart
  if ($('#spline-chart').length) {
	var chart = c3.generate({
	  bindto: '#spline-chart',
	  data: {
		columns: [
		  ['data1', 30, 200, 100, 400, 150, 250],
		  ['data2', 130, 100, 140, 200, 150, 50]
		],
		type: 'spline'
	  }
	});

  }

  // Area Chart
  if ($('#area-chart').length) {
	var chart = c3.generate({
	  bindto: '#area-chart',
	  data: {
		columns: [
		  ['data1', 300, 350, 300, 0, 0, 0],
		  ['data2', 130, 100, 140, 200, 150, 50]
		],
		types: {
		  data1: 'area',
		  data2: 'area-spline'
		}
	  }
	});

  }

  // Bar Chart
  if ($('#bar-chart').length) {
	var chart = c3.generate({
	  bindto: '#bar-chart',
	  data: {
		columns: [
		  ['data1', 30, 200, 100, 400, 150, 250],
		  ['data2', 130, 100, 140, 200, 150, 50]
		],
		type: 'bar'
	  },
	  bar: {
		width: {
		  ratio: 0.5 // this makes bar width 50% of length between ticks
		}
		// or
		//width: 100 // this makes bar width 100px
	  }
	});

  }

  // Pie Chart
  if ($('#pie-chart').length) {
	var chart = c3.generate({
	  bindto: '#pie-chart',
	  data: {
		// iris data from R
		columns: [
		  ['data1', 30],
		  ['data2', 120],
		],
		type : 'pie',
		onclick: function (d, i) { console.log("onclick", d, i); },
		onmouseover: function (d, i) { console.log("onmouseover", d, i); },
		onmouseout: function (d, i) { console.log("onmouseout", d, i); }
	  }
	});

  }

  // Doughnut Chart
  if ($('#doughnut-chart').length) {
	var chart = c3.generate({
	  bindto:'#doughnut-chart',
	  data: {
		columns: [
		  ['data1', 30],
		  ['data2', 120],
		],
		type : 'donut',
		onclick: function (d, i) { console.log("onclick", d, i); },
		onmouseover: function (d, i) { console.log("onmouseover", d, i); },
		onmouseout: function (d, i) { console.log("onmouseout", d, i); }
	  },
	  donut: {
		title: "Iris Petal Width"
	  }
	});


  }




});