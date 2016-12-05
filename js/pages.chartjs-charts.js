/*
Omega Admin Template
All rights reserverd © 2016
Creativico
*/

"use strict";

jQuery(document).ready(function($){

  // Line Chart
  if ($('#line-chart').length) {
	var ctx = document.getElementById('line-chart').getContext('2d');

	var data = {
	  labels: ["January", "February", "March", "April", "May", "June", "July"],
	  datasets: [
		{
		  label: "My First dataset",
		  fill: false,
		  lineTension: 0.1,
		  backgroundColor: "#FA7252",
		  borderColor: "#FA7252",
		  borderCapStyle: 'butt',
		  borderDash: [],
		  borderDashOffset: 0.0,
		  borderJoinStyle: 'miter',
		  pointBorderColor: "#FA7252",
		  pointBackgroundColor: "#fff",
		  pointBorderWidth: 1,
		  pointHoverRadius: 5,
		  pointHoverBackgroundColor: "#FA7252",
		  pointHoverBorderColor: "rgba(220,220,220,1)",
		  pointHoverBorderWidth: 2,
		  pointRadius: 1,
		  pointHitRadius: 10,
		  data: [65, 59, 80, 81, 56, 55, 40],
		  spanGaps: false,
		}
	  ]
	};

	var myLineChart = new Chart(ctx, {
	  type: 'line',
	  data: data
	});
  }

  // Scatter Chart
  if ($('#scatter-chart').length) {
	var ctx = document.getElementById('scatter-chart').getContext('2d');

	var scatterChart = new Chart(ctx, {
	  type: 'line',
	  data: {
		datasets: [{
		  label: 'Scatter Dataset',
		  data: [{
			x: -10,
			y: 0
			}, {
			  x: 0,
			  y: 10
			}, {
			  x: 10,
			  y: 5
		  }]
		}]
	  },
	  options: {
		scales: {
		  xAxes: [{
			type: 'linear',
			position: 'bottom'
		  }]
		}
	  }
	});
  }

  // Bar Chart
  if ($('#bar-chart').length) {
	var ctx = document.getElementById('bar-chart').getContext('2d');

	var data = {
	  labels: ["January", "February", "March", "April", "May", "June", "July"],
	  datasets: [
		{
		  label: "My First dataset",
		  backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)'
		  ],
		  borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)'
		  ],
		  borderWidth: 1,
		  data: [65, 59, 80, 81, 56, 55, 40],
		}
	  ]
	};

	var myChart = new Chart(ctx, {
	  type: 'bar',
	  data: data
	});
  }

  // Radar Chart
  if ($('#radar-chart').length) {
	var ctx = document.getElementById('radar-chart').getContext('2d');

	var data = {
	  labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
	  datasets: [
		{
		  label: "My First dataset",
		  backgroundColor: "rgba(179,181,198,0.2)",
		  borderColor: "rgba(179,181,198,1)",
		  pointBackgroundColor: "rgba(179,181,198,1)",
		  pointBorderColor: "#fff",
		  pointHoverBackgroundColor: "#fff",
		  pointHoverBorderColor: "rgba(179,181,198,1)",
		  data: [65, 59, 90, 81, 56, 55, 40]
		},
		{
		  label: "My Second dataset",
		  backgroundColor: "rgba(255,99,132,0.2)",
		  borderColor: "rgba(255,99,132,1)",
		  pointBackgroundColor: "rgba(255,99,132,1)",
		  pointBorderColor: "#fff",
		  pointHoverBackgroundColor: "#fff",
		  pointHoverBorderColor: "rgba(255,99,132,1)",
		  data: [28, 48, 40, 19, 96, 27, 100]
		}
	  ]
	};

	var myChart = new Chart(ctx, {
	  type: 'radar',
	  data: data
	});
  }

  // Pie Chart
  if ($('#pie-chart').length) {
	var ctx = document.getElementById('pie-chart').getContext('2d');

	var data = {
	  datasets: [{
		data: [
		  11,
		  16,
		  7,
		  3,
		  14
		],
		backgroundColor: [
		  "#FF6384",
		  "#4BC0C0",
		  "#FFCE56",
		  "#E7E9ED",
		  "#36A2EB"
		],
		label: 'My dataset' // for legend
	  }],
	  labels: [
		"Red",
		"Green",
		"Yellow",
		"Grey",
		"Blue"
	  ]
	};

	var myChart = new Chart(ctx, {
	  type: 'pie',
	  data: data
	});
  }  
  
  // Doughnut Chart
  if ($('#doughnut-chart').length) {
	var ctx = document.getElementById('doughnut-chart').getContext('2d');

	var data = {
	  datasets: [{
		data: [
		  11,
		  16,
		  7,
		  3,
		  14
		],
		backgroundColor: [
		  "#FF6384",
		  "#4BC0C0",
		  "#FFCE56",
		  "#E7E9ED",
		  "#36A2EB"
		],
		label: 'My dataset' // for legend
	  }],
	  labels: [
		"Red",
		"Green",
		"Yellow",
		"Grey",
		"Blue"
	  ]
	};

	var myChart = new Chart(ctx, {
	  type: 'doughnut',
	  data: data
	});
  }




});