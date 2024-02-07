function initialize(){
	var cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	// create a blank table element
	var table = document.createElement("table");

	// create a blank table row element for the header
	var headerRow = document.createElement("tr");
 
	// add "City", "Population", and "City Size" as headers
	headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

	// add the headers to the table
	table.appendChild(headerRow);

	// add a new row in the table for each city
	for(var i = 0; i < cityPop.length; i++){
		//assign longer html strings to a variable
		var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
		//add the row's html string to the table
		table.insertAdjacentHTML('beforeend',rowHtml);
	}
	
	var myDiv = document.querySelector("#myDiv").appendChild(table);

	addColumns(cityPop); // add the city size data in each row under the City Size header
	addEvents();



}

// this function adds columns for the data from the cityPop object
function addColumns(cityPop){
    let allRows = document.querySelectorAll("tr");

    document.querySelectorAll("tr").forEach(function(row,i){
    	if (i == 0){
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {
    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

			row.insertAdjacentHTML('beforeend','<td>' + citySize + '</td>');
    	};
    });
};

function addEvents(){

	document.querySelector("table").addEventListener("mouseover", function(){
		
		var color = "rgb(";
		
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		};
	}
		
		document.querySelector("table").style.color = color;
	});

	// function to be run after a user clicks
	function clickme(){

		alert('Hey, you clicked me!');
	};

	// add an event listener to the table for a "click"
	// run clickme if clicked
	document.querySelector("table").addEventListener("click", clickme)
};

// call the initialize function once the DOM has loaded
document.addEventListener('DOMContentLoaded',initialize);