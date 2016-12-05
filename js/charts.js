/*
Omega Admin Template
All rights reserverd © 2016
Creativico
*/

"use strict";

jQuery(document).ready(function($){

  var randomScalingFactor = function() {
	return Math.round(Math.random() * 100);
	//return 0;
  };
  var randomColorFactor = function() {
	return Math.round(Math.random() * 255);
  };
  var randomColor = function(opacity) {
	return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
  };

  var config = {
	type: 'line',
	data: {
	  labels: ["January", "February", "March", "April", "May", "June", "July"],
	  datasets: [{
		label: "My First dataset",
		data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
		fill: false,
		borderDash: [5, 5],
		}, {
		  hidden: true,
		  label: 'hidden dataset',
		  data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
		}, {
		  label: "My Second dataset",
		  data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
	  }]
	},
	options: {
	  responsive: true,
	  title:{
		display:true,
		text:'Line Chart'
	  },
	  tooltips: {
		mode: 'label',
		callbacks: {
		  // beforeTitle: function() {
		  //     return '...beforeTitle';
		  // },
		  // afterTitle: function() {
		  //     return '...afterTitle';
		  // },
		  // beforeBody: function() {
		  //     return '...beforeBody';
		  // },
		  // afterBody: function() {
		  //     return '...afterBody';
		  // },
		  // beforeFooter: function() {
		  //     return '...beforeFooter';
		  // },
		  // footer: function() {
		  //     return 'Footer';
		  // },
		  // afterFooter: function() {
		  //     return '...afterFooter';
		  // },
		}
	  },
	  hover: {
		mode: 'dataset'
	  },
	  scales: {
		xAxes: [{
		  display: true,
		  scaleLabel: {
			display: true,
			labelString: 'Month'
		  }
		}],
		yAxes: [{
		  display: true,
		  scaleLabel: {
			display: true,
			labelString: 'Value'
		  },
		  ticks: {
			suggestedMin: -10,
			suggestedMax: 250,
		  }
		}]
	  }
	}
  };

  $.each(config.data.datasets, function(i, dataset) {
	dataset.borderColor = randomColor(0.4);
	dataset.backgroundColor = randomColor(0.5);
	dataset.pointBorderColor = randomColor(0.7);
	dataset.pointBackgroundColor = randomColor(0.5);
	dataset.pointBorderWidth = 1;
  });

  // Pie
  var config_pie = {
	type: 'pie',
	data: {
	  datasets: [{
		data: [
		  randomScalingFactor(),
		  randomScalingFactor(),
		  randomScalingFactor(),
		  randomScalingFactor(),
		  randomScalingFactor(),
		],
		backgroundColor: [
		  "#F7464A",
		  "#46BFBD",
		  "#FDB45C",
		  "#949FB1",
		  "#4D5360",
		],
		}, {
		  data: [
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
		  ],
		  backgroundColor: [
			"#F7464A",
			"#46BFBD",
			"#FDB45C",
			"#949FB1",
			"#4D5360",
		  ],
		}, {
		  data: [
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
			randomScalingFactor(),
		  ],
		  backgroundColor: [
			"#F7464A",
			"#46BFBD",
			"#FDB45C",
			"#949FB1",
			"#4D5360",
		  ],
	  }],
	  labels: [
		"Red",
		"Green",
		"Yellow",
		"Grey",
		"Dark Grey"
	  ]
	},
	options: {
	  responsive: true
	}
  };

  // Pool
  var config_pool = {
	data: {
	  datasets: [{
		data: [
		  randomScalingFactor(),
		  randomScalingFactor(),
		  randomScalingFactor(),
		  randomScalingFactor(),
		  randomScalingFactor(),
		],
		backgroundColor: [
		  "#F7464A",
		  "#46BFBD",
		  "#FDB45C",
		  "#949FB1",
		  "#4D5360",
		],
		label: 'My dataset' // for legend
	  }],
	  labels: [
		"Red",
		"Green",
		"Yellow",
		"Grey",
		"Dark Grey"
	  ]
	},
	options: {
	  responsive: true,
	  legend: {
		position: 'top',
	  },
	  title: {
		display: true,
		text: 'Polar Chart'
	  },
	  scale: {
		ticks: {
		  beginAtZero: true
		},
		reverse: false
	  },
	  animation: {
		animateRotate: false,
		animateScale: true
	  }
	}
  };

  // Bar
  var barChartData = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [{
	  label: 'Dataset 1',
	  backgroundColor: "rgba(220,220,220,0.5)",
	  data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
	  }, {
		hidden: true,
		label: 'Dataset 2',
		backgroundColor: "rgba(151,187,205,0.5)",
		data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
	  }, {
		label: 'Dataset 3',
		backgroundColor: "rgba(151,187,205,0.5)",
		data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
	}]

  };

  window.onload = function() {
	// Line Sample
	var ctx = document.getElementById("lineSample").getContext("2d");
	window.myLine = new Chart(ctx, config);

	// Pie Sample
	var ctxpie = document.getElementById("pieSample").getContext("2d");
	window.myPie = new Chart(ctxpie, config_pie);  	

	// Pool Sample
	var ctxpool = document.getElementById("poolArea").getContext("2d");
	window.myPool = Chart.PolarArea(ctxpool, config_pool);

	// Bar Sample
	var ctx = document.getElementById("barSample").getContext("2d");
	window.myBar = new Chart(ctx, {
	  type: 'bar',
	  data: barChartData,
	  options: {
		// Elements options apply to all of the options unless overridden in a dataset
		// In this case, we are setting the border of each bar to be 2px wide and green
		elements: {
		  rectangle: {
			borderWidth: 0,
			borderColor: 'rgb(0, 255, 0)',
			borderSkipped: 'bottom'
		  }
		},
		responsive: true,
		legend: {
		  position: 'top',
		},
		title: {
		  display: true,
		  text: 'Bar Chart'
		}
	  }
	});
  };


});