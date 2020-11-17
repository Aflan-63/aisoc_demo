$(function () {
	"use strict";
	// Bar chart 1
	new Chart(document.getElementById("bar-chart-one"), {
		type: 'bar',
		data: {
			labels: ["172.18.1.10", "172.18.1.10", "172.18.1.10", "172.18.1.10", "172.18.1.10", "172.18.1.10", "172.18.1.10", "172.18.1.10"],
			datasets: [
				{
					label: "Population (millions)",
					backgroundColor: ["#E3232866", "#E3232877", "#E3232888", "#E3232899", "#E32328AA", "#E32328BB", "#E32328CC", "#E32328DD"],
					data: [60, 80, 20, 10, 65, 8, 100, 22]
				}
			]
		},
		options: {
			legend: { display: false },
			title: {
				display: true,
				text: 'Server usage of the online servers.'
			}
		}
	});

	// Bar chart 2
	new Chart(document.getElementById("bar-chart-two"), {
		type: 'bar',
		data: {
			labels: ["172.18.1.10", "172.18.1.10", "172.18.1.10", "172.18.1.10", "172.18.1.10", "172.18.1.10", "172.18.1.10", "172.18.1.10"],
			datasets: [
				{
					label: "Population (millions)",
					backgroundColor: ["#8F2D5666", "#8F2D5677", "#8F2D5688", "#8F2D5699", "#8F2D56AA", "#8F2D56BB", "#8F2D56CC", "#8F2D56DD"],
					data: [60, 80, 20, 10, 65, 8, 100, 22]
				}
			]
		},
		options: {
			legend: { display: false },
			title: {
				display: true,
				text: 'Predicted world population (millions) in 2050'
			}
		}
	});

	// // New chart
	// new Chart(document.getElementById("pie-chart"), {
	// 	type: 'pie',
	// 	data: {
	// 		labels: ["Africa", "Asia", "Europe", "Latin America"],
	// 		datasets: [{
	// 			label: "Population (millions)",
	// 			backgroundColor: ["#5e73da", "#b1bdfa", "#5f76e8", "#8fa0f3"],
	// 			data: [2478, 5267, 3734, 2784]
	// 		}]
	// 	},
	// 	options: {
	// 		title: {
	// 			display: true,
	// 			text: 'Predicted world population (millions) in 2050'
	// 		}
	// 	}
	// });

	// Horizental Bar Chart
	new Chart(document.getElementById("horizontal-one"), {
		type: 'horizontalBar',
		data: {
			labels: ["172.18.1.10", "172.18.1.10", "172.18.1.10", "172.18.1.10", "172.18.1.10", "172.18.1.10", "172.18.1.10"],
			datasets: [
				{
					label: "Population (millions)",
					backgroundColor: ["#D8B4A066", "#D8B4A077", "#D8B4A088", "#D8B4A099", "#D8B4A0AA", "#D8B4A0BB", "#D8B4A0CC"],
					data: [0, 30, 40, 50, 60, 70, 80]
				}
			]
		},
		options: {
			legend: { display: false },
			title: {
				display: true,
				text: 'Ram usage of the servers'
			}
		}
	});

	// //Polar Chart
	// new Chart(document.getElementById("polar-chart"), {
	// 	type: 'polarArea',
	// 	data: {
	// 		labels: ["Africa", "Asia", "Europe", "Latin America"],
	// 		datasets: [
	// 			{
	// 				label: "Population (millions)",
	// 				backgroundColor: ["#5e73da", "#b1bdfa", "#5f76e8", "#8fa0f3"],
	// 				data: [2478, 5267, 5734, 3784]
	// 			}
	// 		]
	// 	},
	// 	options: {
	// 		title: {
	// 			display: true,
	// 			text: 'Predicted world population (millions) in 2050'
	// 		}
	// 	}
	// });

	// //Radar chart
	// new Chart(document.getElementById("radar-chart"), {
	// 	type: 'radar',
	// 	data: {
	// 		labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
	// 		datasets: [
	// 			{
	// 				label: "250",
	// 				fill: true,
	// 				backgroundColor: "rgba(1, 202, 241,0.2)",
	// 				borderColor: "rgba(1, 202, 241,1)",
	// 				pointBorderColor: "#fff",
	// 				pointBackgroundColor: "rgba(1, 202, 241,1)",
	// 				data: [8.77, 55.61, 21.69, 6.62, 6.82]
	// 			}, {
	// 				label: "4050",
	// 				fill: true,
	// 				backgroundColor: "rgba(95, 118, 232,0.2)",
	// 				borderColor: "rgba(95, 118, 232,1)",
	// 				pointBorderColor: "#fff",
	// 				pointBackgroundColor: "rgba(95, 118, 232,1)",
	// 				pointBorderColor: "#fff",
	// 				data: [25.48, 54.16, 7.61, 8.06, 4.45]
	// 			}
	// 		]
	// 	},
	// 	options: {
	// 		title: {
	// 			display: true,
	// 			text: 'Distribution in % of world population'
	// 		}
	// 	}
	// });

	// //Line Chart

	// new Chart(document.getElementById("line-chart"), {
	// 	type: 'line',
	// 	data: {
	// 		labels: [4500, 3500, 3200, 3050, 2700, 2450, 2200, 1750, 1499, 2050],
	// 		datasets: [{
	// 			data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
	// 			label: "Africa",
	// 			borderColor: "#5f76e8",
	// 			fill: false
	// 		}, {
	// 			data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
	// 			label: "Asia",
	// 			borderColor: "#768bf4",
	// 			fill: false
	// 		}, {
	// 			data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
	// 			label: "Europe",
	// 			borderColor: "#7385df",
	// 			fill: false
	// 		}, {
	// 			data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
	// 			label: "Latin America",
	// 			borderColor: "#b1bdfa",
	// 			fill: false
	// 		}, {
	// 			data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
	// 			label: "North America",
	// 			borderColor: "#8fa0f3",
	// 			fill: false
	// 		}
	// 		]
	// 	},
	// 	options: {
	// 		title: {
	// 			display: true,
	// 			text: 'World population per region (in millions)'
	// 		}
	// 	}
	// });

	// line second
}); 